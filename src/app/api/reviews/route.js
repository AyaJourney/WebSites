import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

export const dynamic = 'force-dynamic';

const QUERY = "Aya Journey, Ankara";

async function getPlaceIdentifier(apiKey, query) {
  try {
    const response = await axios.get('https://serpapi.com/search.json', {
      params: {
        engine: "google_maps",
        q: query,
        hl: "tr",
        api_key: apiKey,
      },
    });

   const placeResult = response.data.place_results || response.data.local_results?.[1];
    if (placeResult && (placeResult.data_id || placeResult.place_id)) {
      return placeResult.data_id;
    }
    console.error("İşletme data_id bulunamadı");
    return null;
  } catch (err) {
    console.error("getPlaceIdentifier hatası:", err);
    return null;
  }
}

export async function GET() {
  const API_KEY = process.env.SERPAPI_KEY;
  const DATA_DIR = path.join(process.cwd(), 'data');
  const FILE_PATH = path.join(DATA_DIR, 'reviews.json');
  const REFRESH_RATE = 7 * 24 * 60 * 60 * 1000; // 7 gün

  if (!API_KEY) {
    return NextResponse.json({ error: 'API Key eksik' }, { status: 500 });
  }

  // Önbellek kontrolü
  let existingData = null;
  if (fs.existsSync(FILE_PATH)) {
    try {
      const raw = fs.readFileSync(FILE_PATH, 'utf-8');
      existingData = JSON.parse(raw);
      if (Date.now() - existingData.lastUpdated < REFRESH_RATE) {
        return NextResponse.json(existingData);
      }
    } catch (e) {
      console.warn("Önbellek okuma hatası:", e);
    }
  }

  const PLACE_ID = await getPlaceIdentifier(API_KEY, QUERY);
  if (!PLACE_ID) {
    if (existingData) return NextResponse.json(existingData);
    return NextResponse.json({ error: 'data_id bulunamadı' }, { status: 500 });
  }

  let allReviews = [];
  let nextPageToken = null;
  let requestsMade = 0;
  const MAX_PAGES = 50;

  do {
    const params = {
      engine: "google_maps_reviews",
      data_id: PLACE_ID,
      hl: "tr",
      api_key: API_KEY,
    };
    if (nextPageToken) {
      params.next_page_token = nextPageToken;
    }

    const resp = await axios.get('https://serpapi.com/search.json', { params });
    requestsMade++;

    const pageReviews = resp.data.reviews || [];
    allReviews.push(...pageReviews);

    // SerpApi response içinde pagination bilgisi var
    const pagination = resp.data.serpapi_pagination;
    nextPageToken = pagination?.next_page_token;

    console.log(`Sayfa ${requestsMade} alındı, yorum sayısı: ${pageReviews.length}, next_token: ${nextPageToken}`);

    // Rate-limit için kısa bekleme
    await new Promise(r => setTimeout(r, 500));

  } while (nextPageToken && requestsMade < MAX_PAGES);

  // Temizleme
  const cleanReviews = allReviews.map(r => ({
    author: r.user?.name,
    rating: r.rating,
    text: r.snippet,
    date: r.date,
    avatar: r.user?.thumbnail,
    source: 'google'
  }));

  const newData = {
    lastUpdated: Date.now(),
    total: cleanReviews.length,
    requestsUsed: requestsMade,
    reviews: cleanReviews
  };

  // Diske kaydet
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(newData, null, 2));
  } catch (e) {
    console.error("Yazma hatası:", e);
  }

  return NextResponse.json(newData);
}
