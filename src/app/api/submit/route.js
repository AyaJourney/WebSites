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
/* ======================================================
   CRM'E GÖNDER (TYPE-BASED PAYLOAD)
   ====================================================== */
async function sendToCrm({ type, crmForm, rawData, meta }) {
  const baseUrl = process.env.NEXT_PUBLIC_CRM_PUBLIC_URL;
  if (!baseUrl) {
    throw new Error("sendToCrm: CRM URL missing");
  }

  const url =
    baseUrl.replace(/\/$/, "") + "/api/public/visa-form";

  const payload = {
    visa_type: type,
    email: meta?.email ?? null,
    phone: meta?.phone ?? null,
  };

  if (type === "ds-160") {
    payload.form_data = crmForm;
  } else {
    // 🔥 SADECE FORM DATA
    payload.data = rawData.form_data || rawData;
  }

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
    `${new Date().toISOString()} - [CRM][${type}] status=${res.status} response=${text}\n`
  );

  return res.ok;
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
await sendToCrm({
  type: webForm.type,
  crmForm,        // sadece DS-160 için
  rawData: webForm, // UK / diğerleri için
  meta: {
    name: webForm.name || webForm.fullName,
    email: webForm.email,
    phone: webForm.phone,
  },
});

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
