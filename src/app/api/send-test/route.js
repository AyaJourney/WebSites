import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

/* =========================
   MAIL TRANSPORTER
========================= */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_MAIL_ADDRESS,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

/* =========================
   SCORE CONFIG
========================= */
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
function getScoreMeta(score) {
  if (score >= 80) {
    return {
      label: "Çok Güçlü Profil",
      bg: "#dcfce7",
      color: "#166534",
    };
  }

  if (score >= 50) {
    return {
      label: "Orta – Güçlü Profil",
      bg: "#fef9c3",
      color: "#854d0e",
    };
  }

  return {
    label: "Riskli Profil",
    bg: "#fee2e2",
    color: "#991b1b",
    };
}
const now = new Date();

const dateStr = now
  .toISOString()
  .replace(/[:.]/g, "-");
/* =========================
   POST
========================= */
export async function POST(req) {
  try {
const { name, email, phoneNumber, score,answers,key } = await req.json();

const dirPath = path.join(
  process.cwd(),
  
  "data",
  "test-verileri"
);

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

const filePath = path.join(
  dirPath,
  `${slugify(name)}-${dateStr}.json`
);

fs.writeFileSync(
  filePath,
  JSON.stringify(
    {key,
      name,
      email,
      phoneNumber,
      score,
      createdAt: new Date().toISOString(),
      answers
    },
    null,
    2
  ),
  "utf-8"
);

    if (!name || !email || typeof score !== "number") {
      return new Response(
        JSON.stringify({ error: "Eksik veya hatalı veri" }),
        { status: 400 }
      );
    }

    const meta = getScoreMeta(score);
const riskText = `
  <p>
    <strong>AYA Journey vize ihtimal robotunu kullandığınız için teşekkür ederiz.</strong>
    Söz konusu uygulama bağlayıcı olmayıp, size fikir vermeyi amaçlamaktadır.
  </p>

  <p>
    Test sonucunuza göre <strong>yüksek riskli kategoride</strong> yer aldığınızı değerlendiriyoruz.
  </p>

    <p>
    AYA Journey veya başka bir danışmanlık firması ile mutlaka görüşmenizi öneririz.
   
  </p>
  <p>
   
    Profesyonel bir yönlendirme ve doğru strateji ile ilerlemek başvuru süreciniz açısından
    büyük önem taşımaktadır.
  </p>

  <p>
    Aşağıdaki bağlantıları kullanarak bizimle iletişime geçebilir veya
    <strong>+90 312 870 15 84</strong> numaralı telefondan veya vizedestek@ayajourney.com mail adresinden bize ulaşabilirsiniz.
  </p>

  <p>
    <strong>En iyi dileklerimizle,</strong><br/>
    AYA Journey
  </p>
`;
const mediumRiskText = `
  <p>
    <strong>AYA Journey vize ihtimal robotunu kullandığınız için teşekkür ederiz.</strong>
    Söz konusu uygulama bağlayıcı olmayıp, size fikir vermeyi amaçlamaktadır.
  </p>

  <p>
    Test sonucunuza göre <strong>orta riskli kategoride</strong> yer aldığınızı değerlendiriyoruz.
    Bu noktada başvuru formunuz (DS-160) ve mülakat stratejiniz büyük önem taşımaktadır.
  </p>

  <p>
    AYA Journey ile temasa geçerek vize alma şansınızı yükseltebilirsiniz.
    Ekibimizde, her biri ABD’yi bizzat görmüş ve vize süreçlerine son derece hâkim
    uzmanlar yer almaktadır. Hatta bunlardan bazıları <strong>eski konsolos ve avukatlardır.</strong>
  </p>

  <p>
    Aşağıdaki bağlantıları kullanarak bizimle iletişime geçebilir veya
    <strong>+90 312 870 15 84</strong> numaralı telefondan veya vizedestek@ayajourney.com mail adresinden bize ulaşabilirsiniz.
  </p>
  <p>
    <strong>En iyi dileklerimizle,</strong><br/>
    AYA Journey
  </p>
`;
const highScoreText = `
  <p>
    <strong>AYA Journey vize ihtimal robotunu kullandığınız için teşekkür ederiz.</strong>
    Söz konusu uygulama bağlayıcı olmayıp, size fikir vermeyi amaçlamaktadır.
  </p>

  <p>
    Test sonucunuza göre, Amerika vizesi almak için
    <strong>profilinizin oldukça güçlü</strong> olduğunu görüyoruz.
    Herhangi bir yerden danışmanlık almasanız dahi vize onayı alma ihtimaliniz
    oldukça yüksektir.
  </p>

  <p>
    Buna rağmen, “Olası dalgınlıklar veya hatalar ret sebebi olmasın,
    süreci risksiz ve eksiksiz şekilde ilerleteyim” derseniz,
    AYA Journey uzmanları size <strong>sorunsuz ve profesyonel bir başvuru süreci</strong>
    sunmak için hazırdır.
  </p>

  <p>
    Aşağıdaki bağlantıları kullanarak bizimle iletişime geçebilir ya da
    <strong>+90 312 870 15 84</strong> numaralı telefondan veya vizedestek@ayajourney.com mail adresinden bize ulaşabilirsiniz.
  </p>

  <p>
    <strong>En iyi dileklerimizle,</strong><br/>
    AYA Journey
  </p>
`;

    /* =========================
       MAIL HTML
    ========================= */
    const html = `
      <div style="font-family:Arial,sans-serif;background:#f8fafc;padding:30px;">
        <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb">

         <div style="padding:24px;text-align:center;">

  <img
    src="https://ayajourney.com/images/ayalogoxl.webp"
    alt="AYA Journey"
    style="
      display:block;
      margin:0 auto 16px auto;
      max-width:160px;
      width:100%;
      height:auto;
    "
  />

  <h2 style="margin:0 0 8px 0;">
    Vize Analiz Sonucunuz
  </h2>

  <p style="color:#64748b;margin:0;">
    AYA Journey
  </p>

</div>


          <div style="padding:24px;background:${meta.bg};text-align:center;">
            <div style="font-size:48px;font-weight:800;color:${meta.color}">
              ${score}
            </div>
            <div style="font-size:14px;font-weight:700;color:${meta.color};margin-top:4px;">
              ${meta.label}
            </div>
          </div>

         <div style="padding:24px;color:#334155;line-height:1.6;">
  <p>Sayın <strong>${name}</strong>,</p>

 ${score < 50
  ? riskText
  : score < 80
  ? mediumRiskText
  : highScoreText
}
</div>


        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;">
  <tr>
    <td style="padding-bottom:10px;">
      <a
        href="https://ayajourney.com/randevu"
        style="
          display:block;
          width:100%;
          background:#ffffff;
          color:#2563eb;
          text-decoration:none;
          text-align:center;
          padding:14px 0;
          border-radius:12px;
          font-weight:600;
          border:1px solid #c7d2fe;
        "
      >
        Randevu Al
      </a>
    </td>
  </tr>

  <tr>
    <td style="padding-bottom:10px;">
      <a
        href="tel:+903128701584"
        style="
          display:block;
          width:100%;
          background:#0f172a;
          color:#ffffff;
          text-decoration:none;
          text-align:center;
          padding:14px 0;
          border-radius:12px;
          font-weight:600;
        "
      >
        Hemen Ara
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a
        href="https://wa.me/905302199056"
        style="
          display:block;
          width:100%;
          background:#22c55e;
          color:#ffffff;
          text-decoration:none;
          text-align:center;
          padding:14px 0;
          border-radius:12px;
          font-weight:600;
        "
      >
        WhatsApp’tan Yaz
      </a>
    </td>
  </tr>
</table>


          <div style="padding:16px;text-align:center;font-size:12px;color:#94a3b8;border-top:1px solid #e5e7eb;">
            Bu e-posta AYA Journey vize analiz sistemi tarafından otomatik gönderilmiştir.
          </div>

        </div>
      </div>
    `;

    /* =========================
       SEND MAIL
    ========================= */
    await transporter.sendMail({
      from: `Aya Journey <${process.env.GOOGLE_MAIL_ADDRESS}>`,
      to: email,
      subject: "Vize Analiz Sonucunuz",
      html,
    });
    try {
  await fetch(`${process.env.NEXT_PUBLIC_CRM_PUBLIC_URL}/api/visa-test/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-web-secret": process.env.WEB_TO_CRM_SECRET,
    },
    body: JSON.stringify({
      testKey:key,
      name,
      email,
      phoneNumber,
      score,
      answers,
      createdAt: new Date().toISOString(),
    }),
  });
} catch (crmErr) {
  // CRM çökerse site / mail etkilenmesin
  console.error("CRM API PUSH ERROR:", crmErr);
}
    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error("VISA TEST MAIL ERROR:", err);
    return new Response(
      JSON.stringify({ error: "Mail gönderilemedi" }),
      { status: 500 }
    );
  }
}
