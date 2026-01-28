import fs from "fs"
import path from "path"

/* ======================================================
   LOG & BACKUP
   ====================================================== */
const DATA_DIR = path.join(process.cwd(), "data")
const FAILED_DIR = path.join(DATA_DIR, "failed")
const LOG_FILE = path.join(DATA_DIR, "submit.log")

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR)
if (!fs.existsSync(FAILED_DIR)) fs.mkdirSync(FAILED_DIR)

/* ======================================================
   CRM'E GÖNDER (SADECE TAŞIYICI)
   ====================================================== */
async function sendToCrm(crmForm, meta = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_CRM_PUBLIC_URL;
  const url = baseUrl
    ? baseUrl.replace(/\/$/, "") + "/api/public/visa-form"
    : null;

  if (!url) {
    fs.appendFileSync(
      LOG_FILE,
      `${new Date().toISOString()} - [CRM] ERROR CRM URL missing\n`
    );
    return false;
  }

  try {
    const payload = {
      visa_type: meta.type || "unknown",
      name: meta.name || "Web Form",
      email: meta.email ?? null,
      phone: meta.phone ?? null,

      // 🔥 ASIL OLAY
      form_data: crmForm,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-crm-key": process.env.CRM_SHARED_SECRET || "",
      },
      body: JSON.stringify(payload),
    });

    const text = await res.text();

    fs.appendFileSync(
      LOG_FILE,
      `${new Date().toISOString()} - [CRM] POST status=${res.status} response=${text}\n`
    );

    return res.ok;
  } catch (err) {
    fs.appendFileSync(
      LOG_FILE,
      `${new Date().toISOString()} - [CRM] ERROR ${err.message}\n`
    );
    return false;
  }
}


/* ======================================================
   EXTERNAL API'LERE GÖNDER
   ====================================================== */
async function sendToApi(type, data, savedFilePath) {
  let apiUrl = null

  switch (type) {
    case "canada":
      apiUrl = process.env.NEXT_PUBLIC_CANADA_URL
      break
    case "ds-160":
      apiUrl = process.env.NEXT_PUBLIC_DS_160_URL
      break
    case "uk":
      apiUrl = process.env.NEXT_PUBLIC_UK_URL
      break
    case "schengen":
      apiUrl = process.env.NEXT_PUBLIC_SCHENGEN_URL
      break
    default:
      return true
  }

  fs.appendFileSync(
    LOG_FILE,
    `${new Date().toISOString()} - [${type}] START apiUrl=${apiUrl}\n`
  )

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const text = await res.text()

      fs.appendFileSync(
        LOG_FILE,
        `${new Date().toISOString()} - [${type}] attempt=${attempt} status=${res.status} response=${text}\n`
      )

      if (res.ok) return true
    } catch (err) {
      fs.appendFileSync(
        LOG_FILE,
        `${new Date().toISOString()} - [${type}] attempt=${attempt} ERROR ${err.message}\n`
      )
    }
  }

  // başarısız → failed klasörüne taşı
  const failedPath = path.join(FAILED_DIR, path.basename(savedFilePath))
  fs.renameSync(savedFilePath, failedPath)

  fs.appendFileSync(
    LOG_FILE,
    `${new Date().toISOString()} - [${type}] MOVED TO FAILED ${failedPath}\n`
  )

  return false
}

/* ======================================================
   SUBMIT ENDPOINT (WEB)
   ====================================================== */
export async function POST(request) {
  try {
    const body = await request.json();

    const {
      crmForm,
      ...webForm
    } = body;

    const filePath = path.join(DATA_DIR, `form_${Date.now()}.json`);
    fs.writeFileSync(filePath, JSON.stringify(webForm, null, 2));

    fs.appendFileSync(
      LOG_FILE,
      `${new Date().toISOString()} - JSON saved ${filePath}\n`
    );

    // 🔥 CRM SADECE crmMap ÜRÜNÜNÜ ALIR
 sendToCrm(crmForm, {
      type: webForm.type,
      name: webForm.name || webForm.fullName,
      email: webForm.email,
      phone: webForm.phone,
    }).catch(err => {
      fs.appendFileSync(
        LOG_FILE,
        `${new Date().toISOString()} - sendToCrm error: ${err.message}\n`
      )
    })

    // 🔥 Web API’ye gönder (fire & forget)
    sendToApi(
      webForm.type,
      webForm,
      filePath
    ).catch(err => {
      fs.appendFileSync(
        LOG_FILE,
        `${new Date().toISOString()} - sendToApi error: ${err.message}\n`
      )
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    fs.appendFileSync(
      LOG_FILE,
      `${new Date().toISOString()} - POST ERROR ${err.message}\n`
    );

    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
