// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';
// import axios from 'axios';

// export const dynamic = 'force-dynamic';

// // İşletme adı ve konumu. Bu, ilk aşamada işletmenin ID'sini bulmak için kullanılır.
// const QUERY = "Aya Journey, Ankara"; 


// // -------------------------------------------------------------------------
// // Aşama 1: İşletmenin Harita ID'sini (Place ID veya Data ID) Bulur
// // -------------------------------------------------------------------------
// async function getPlaceIdentifier(apiKey, query) {
//     try {
//         console.log("🛠️ Aşama 1: İşletme ID'si Google Maps motoru ile aranıyor...");
//         const response = await axios.get('https://serpapi.com/search.json', {
//             params: {
//                 engine: "google_maps", // Harita sonuçlarını arayan motor
//                 q: query,
//                 hl: "tr",
//                 api_key: apiKey,
//             }
//         });

//         const placeResult = response.data.place_results || response.data.local_results?.[1];

//         if (placeResult && (placeResult.data_id || placeResult.place_id)) {
//             // data_id veya place_id'den birini döndür (SerpApi genellikle data_id'yi tercih eder)
//             const id = placeResult.data_id || placeResult.place_id;
//             console.log(`✅ ID Başarılı: Kullanılacak ID: ${id}`);
//             return id;
//         }

//         console.error("❌ Aşama 1 Başarısız: İşletme ID'si bulunamadı. Lütfen QUERY'yi kontrol edin.");
//         return null;

//     } catch (error) {
//         console.error("❌ Aşama 1 Hata:", error.message);
//         return null;
//     }
// }


// // -------------------------------------------------------------------------
// // Aşama 2: Bulunan ID ile Yorumları Çekme ve Cacheleme
// // -------------------------------------------------------------------------
// export async function GET() {
//     console.log("🔍 SerpApi Review Fetcher başladı...");

//     // 1. AYARLAR VE KONTROL
//     const API_KEY = process.env.SERPAPI_KEY;
//     const DATA_DIR = path.join(process.cwd(), 'data');
//     const FILE_PATH = path.join(DATA_DIR, 'reviews.json');
//     const REFRESH_RATE = 7 * 24 * 60 * 60 * 1000; 

//     if (!API_KEY) {
//         console.error("❌ HATA: .env dosyasında SERPAPI_KEY bulunamadı!");
//         return NextResponse.json({ error: 'Server config error: API Key missing' }, { status: 500 });
//     }

//     // 2. Önbellek Kontrolü
//     let existingData = null;
//     if (fs.existsSync(FILE_PATH)) {
//         // ... (Önbellek kontrol kodu aynı)
//         try {
//             const rawData = fs.readFileSync(FILE_PATH, 'utf-8');
//             existingData = JSON.parse(rawData);

//             if (Date.now() - existingData.lastUpdated < REFRESH_RATE) {
//                 console.log("✅ Veri güncel. Diskten sunuluyor.");
//                 return NextResponse.json(existingData);
//             }
//         } catch (error) {
//             console.error("⚠️ Dosya okuma hatası veya bozuk JSON:", error.message);
//         }
//     }

//     console.log("⏳ Veri süresi dolmuş veya dosya yok. İki aşamalı çekim başlıyor...");

//     // ID'yi al
//     const PLACE_ID = await getPlaceIdentifier(API_KEY, QUERY);

//     if (!PLACE_ID) {
//         console.error("❌ Kritik Hata: Yorum çekilemiyor, çünkü işletme ID'si bulunamadı.");
//         if (existingData) {
//             return NextResponse.json(existingData);
//         }
//         return NextResponse.json({ error: 'Kritik Hata: İşletme ID\'si bulunamadı ve önbellek yok.' }, { status: 500 });
//     }

//     // 3. PAGINATION ile TÜM Yorumları Çekme
//     let allReviews = [];
//     let page = 0;
//     let requestsMade = 1; // getPlaceIdentifier 1 istek kullandı.
//     const MAX_REQUESTS = 65; 

//     while (requestsMade < MAX_REQUESTS) {
//         try {
//             requestsMade++;
//             const startParam = page * 10;
            
//             // console.log(`🌍 İstek gönderiliyor (Yorumlar): Sayfa ${page + 1} (Start: ${startParam})`);

//             const response = await axios.get('https://serpapi.com/search.json', {
//                 params: {
//                     engine: "google_maps_reviews",
//                     data_id: PLACE_ID, // Aşama 1'den gelen güvenilir ID kullanılıyor
//                     hl: "tr",
//                     start: startParam, 
//                     api_key: API_KEY,
//                 }
//             });
            
//             if (response.data.error) {
//                  throw new Error(`SerpApi Hatası: ${response.data.error}`);
//             }

//             const reviews = response.data.reviews || [];
//             const pagination = response.data.serpapi_pagination || {};
            
//             if (reviews.length === 0) {
//                 console.log("✅ Son sayfaya ulaşıldı veya yorum kalmadı.");
//                 break; 
//             }
            
//             allReviews.push(...reviews);
//             page++;
            
//             if (!pagination.next_link) {
//                 break;
//             }
            
//             await new Promise(r => setTimeout(r, 1500)); 

//         } catch (error) {
//             console.error(`❌ SerpApi'den veri çekme hatası (Yorumlar):`, error.message);
//             break; 
//         }
//     }
// console.log(allReviews)
//     // 4. VERİYİ TEMİZLE VE KAYDET
//     const cleanReviews = allReviews.map(r => ({
//         author: r.user.name,
//         rating: r.rating,
//         text: r.snippet,
//         date: r.date,
//         avatar: r.user.thumbnail,
//         source: 'google'
//     }));

//     const newData = {
//         lastUpdated: Date.now(),
//         total: cleanReviews.length,
//         requestsUsed: requestsMade, 
//         reviews: cleanReviews
//     };
    
//     console.log(`✅ ${newData.total} yorum başarıyla çekildi. Toplam istek: ${requestsMade}`);

//     // 5. DOSYAYA YAZMA İŞLEMİ
//     if (!fs.existsSync(DATA_DIR)) {
//         fs.mkdirSync(DATA_DIR, { recursive: true });
//     }

//     try {
//         fs.writeFileSync(FILE_PATH, JSON.stringify(newData, null, 2));
//         console.log("💾 Veri diske kaydedildi.");
//     } catch (writeErr) {
//         console.error("❌ Dosyaya yazma hatası (İzin Sorunu):", writeErr.message);
//     }

//     // 6. Sonucu Döndür
//     if (newData.total === 0) {
//         if (existingData) {
//             return NextResponse.json(existingData);
//         }
//         return NextResponse.json({ error: 'Veri çekilemedi ve önbellek yok.' }, { status: 500 });
//     }

//     return NextResponse.json(newData);
// }

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
