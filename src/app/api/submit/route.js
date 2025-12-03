import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const FAILED_DIR = path.join(DATA_DIR, "failed");
const LOG_FILE = path.join(DATA_DIR, "submit.log");

// Gerekli klasörleri oluştur
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
if (!fs.existsSync(FAILED_DIR)) fs.mkdirSync(FAILED_DIR);

async function sendToApi(type, data, savedFilePath) {
  let apiUrl;
  switch (type) {
    case "canada":
      apiUrl = process.env.NEXT_PUBLIC_CANADA_URL;
      break;
    case "ds-160":
      apiUrl =process.env.NEXT_PUBLIC_DS_160_URL;
      break;
    case "uk":
      apiUrl = process.env.NEXT_PUBLIC_UK_URL;
      break;
    case "schengen":
      apiUrl =process.env.NEXT_PUBLIC_SCHENGEN_URL;
      break;
    default:
      return;
  }

  console.log(`${new Date().toISOString()} - ${type.toUpperCase()} işlemi başlıyor...`);

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        console.log(`${new Date().toISOString()} - ${type.toUpperCase()} işlemi başarılı (deneme ${attempt})`);
        fs.appendFileSync(LOG_FILE, `${new Date().toISOString()} - type=${type} - attempt=${attempt} - success\n`);
        return true;
      } else {
        console.log(`${new Date().toISOString()} - ${type.toUpperCase()} işlemi başarısız (status: ${res.status}, deneme ${attempt})`);
        fs.appendFileSync(LOG_FILE, `${new Date().toISOString()} - type=${type} - attempt=${attempt} - status=${res.status}\n`);
      }
    } catch (err) {
      console.log(`${new Date().toISOString()} - ${type.toUpperCase()} işlemi hata verdi (deneme ${attempt}): ${err.message}`);
      fs.appendFileSync(LOG_FILE, `${new Date().toISOString()} - type=${type} - attempt=${attempt} - error=${err.message}\n`);
    }
  }

  // Başarısızsa failed klasörüne taşı
  const failedPath = path.join(FAILED_DIR, path.basename(savedFilePath));
  fs.renameSync(savedFilePath, failedPath);
  console.log(`${new Date().toISOString()} - ${type.toUpperCase()} işlemi başarısız, dosya failed klasörüne taşındı: ${failedPath}`);
  fs.appendFileSync(LOG_FILE, `${new Date().toISOString()} - type=${type} - moved to failed: ${failedPath}\n`);
  return false;
}

export async function POST(request) {
  try {
    const data = await request.json();
    const type = data.type || "default";

    // JSON kaydet
    const filePath = path.join(DATA_DIR, `form_${Date.now()}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`${new Date().toISOString()} - JSON kaydedildi: ${filePath}`);
    fs.appendFileSync(LOG_FILE, `${new Date().toISOString()} - JSON saved: ${filePath}\n`);

    // Arka planda API’ye gönder
    sendToApi(type, data, filePath).catch(err => {
      console.log(`${new Date().toISOString()} - sendToApi beklenmedik hata: ${err.message}`);
      fs.appendFileSync(LOG_FILE, `${new Date().toISOString()} - sendToApi unexpected error: ${err.message}\n`);
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.log(`${new Date().toISOString()} - POST error: ${err.message}`);
    fs.appendFileSync(LOG_FILE, `${new Date().toISOString()} - POST error: ${err.message}\n`);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
