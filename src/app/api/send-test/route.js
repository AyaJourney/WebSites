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
function getScoreMeta(score) {
  if (score >= 85) {
    return {
      label: "Çok Güçlü Profil",
      bg: "#dcfce7",
      color: "#166534",
    };
  }

  if (score >= 65) {
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

/* =========================
   POST
========================= */
export async function POST(req) {
  try {
    const { name, email, score } = await req.json();

    if (!name || !email || typeof score !== "number") {
      return new Response(
        JSON.stringify({ error: "Eksik veya hatalı veri" }),
        { status: 400 }
      );
    }

    const meta = getScoreMeta(score);

    /* =========================
       MAIL HTML
    ========================= */
    const html = `
      <div style="font-family:Arial,sans-serif;background:#f8fafc;padding:30px;">
        <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb">

          <div style="padding:24px;text-align:center;">
            <h2 style="margin:0 0 8px 0;">Amerika Vize Analiz Sonucunuz</h2>
            <p style="color:#64748b;margin:0;">AYA Journey</p>
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

            <p>
              Amerika turist vizesi (B1/B2) için oluşturduğumuz
              <strong>yapay zeka destekli analiz</strong> sonucunda
              hazırlık skorunuz yukarıdaki gibidir.
            </p>

            <p>
              Bu skor, profilinizin <strong>göçmenlik riski, seyahat geçmişi
              ve tutarlılık</strong> açısından genel durumunu gösterir.
            </p>

            <p>
              Skorunuzu yükseltmek ve başvurunuzu profesyonel şekilde
              hazırlamak için uzmanlarımızla görüşebilirsiniz.
            </p>
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
      subject: "Amerika Vize Analiz Sonucunuz",
      html,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error("VISA TEST MAIL ERROR:", err);
    return new Response(
      JSON.stringify({ error: "Mail gönderilemedi" }),
      { status: 500 }
    );
  }
}
