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
      apiUrl = process.env.NEXT_PUBLIC_DS_160_URL;
      break;
    case "uk":
      apiUrl = process.env.NEXT_PUBLIC_UK_URL;
      break;
    case "schengen":
      apiUrl = process.env.NEXT_PUBLIC_SCHENGEN_URL;
      break;
    default:
      return;
  }

  console.log(`${new Date().toISOString()} - [${type.toUpperCase()}] BACKGROUND SEND STARTED → ${apiUrl}`);
  fs.appendFileSync(LOG_FILE, `${new Date().toISOString()} - [${type}] START apiUrl=${apiUrl}\n`);

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      // Request log
      fs.appendFileSync(
        LOG_FILE,
        `${new Date().toISOString()} - [${type}] attempt ${attempt} - sending payload: ${JSON.stringify(data).substring(0, 500)}...\n`
      );

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Response log
      const respText = await res.text();
      fs.appendFileSync(
        LOG_FILE,
        `${new Date().toISOString()} - [${type}] attempt=${attempt} status=${res.status} response=${respText}\n`
      );

      if (res.ok) {
        console.log(`${new Date().toISOString()} - [${type}] SUCCESS on attempt ${attempt}`);
        fs.appendFileSync(LOG_FILE, `${new Date().toISOString()} - [${type}] success attempt=${attempt}\n`);
        return true;
      }
    } catch (err) {
      console.log(`${new Date().toISOString()} - [${type}] attempt=${attempt} ERROR: ${err.stack}`);
      fs.appendFileSync(
        LOG_FILE,
        `${new Date().toISOString()} - [${type}] attempt=${attempt} errorMessage=${err.message} stack=${err.stack}\n`
      );
    }
  }

  // Başarısız ise failed'a taşı
  const failedPath = path.join(FAILED_DIR, path.basename(savedFilePath));
  fs.renameSync(savedFilePath, failedPath);

  fs.appendFileSync(
    LOG_FILE,
    `${new Date().toISOString()} - [${type}] MOVED TO FAILED: ${failedPath}\n`
  );

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
