import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

const DATA_DIR = path.join(process.cwd(), "src", "reservation");
const FILE_PATH = path.join(DATA_DIR, "reservation.json");

// Gerekli klasör ve dosyayı oluştur
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, "[]", "utf-8");

// Mail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_MAIL_ADDRESS,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export async function GET() {
  try {
    const data = fs.readFileSync(FILE_PATH, "utf-8");
    const reservations = JSON.parse(data);
    return new Response(JSON.stringify(reservations), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Randevular alınamadı" }), { status: 500 });
  }
}

export async function POST(request) {
  try {
    const newReservation = await request.json();

    // formData’dan fullname, email, phone çıkar
    const { firstName, lastName, email, phone, message } = newReservation.formData;
    const fullName = `${firstName} ${lastName}`;

    const data = fs.readFileSync(FILE_PATH, "utf-8");
    const reservations = JSON.parse(data);

    // Aynı saat + aynı danışman için çakışma kontrolü
    const conflict = reservations.some(
      (r) =>
        r.personId === newReservation.personId &&
        r.selectedDay === newReservation.selectedDay &&
        r.selectedTime === newReservation.selectedTime
    );

    if (conflict) {
      return new Response(JSON.stringify({ error: "Bu saat zaten dolu" }), { status: 400 });
    }

    // JSON'a kaydet
    const reservationToSave = { ...newReservation, fullName, email, phone, message };
    reservations.push(reservationToSave);
    fs.writeFileSync(FILE_PATH, JSON.stringify(reservations, null, 2), "utf-8");

    // --------------------------------------------
    // 1) ADMIN'E GİDEN MAİL
    // --------------------------------------------
    const adminMail = {
      from: `Aya Journey <${process.env.GOOGLE_MAIL_ADDRESS}>`,
      to: "teknikdestek@ayajourney.com",
      subject: `Yeni Randevu - ${fullName}`,
      html: `
        <h2>Yeni Randevu Oluşturuldu</h2>
        <p><strong>Danışman:</strong> ${newReservation.personName}</p>
        <p><strong>Tarih:</strong> ${newReservation.selectedDay}</p>
        <p><strong>Saat:</strong> ${newReservation.selectedTime}</p>

        <h3 style="margin-top:20px;">Müşteri Bilgileri</h3>
        <p><strong>Ad Soyad:</strong> ${fullName}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Mesaj:</strong> ${message}</p>

        <br/>
        <p>Bu mail Aya Journey randevu sistemi tarafından otomatik gönderildi.</p>
      `,
    };
    await transporter.sendMail(adminMail);

    // --------------------------------------------
    // 2) MÜŞTERİYE ONAY MAİLİ
    // --------------------------------------------
    const customerMail = {
      from: `Aya Journey <${process.env.GOOGLE_MAIL_ADDRESS}>`,
      to: email,
      subject: `Randevu Onayı – Aya Journey`,
      html: `
        <h2>Randevunuz Onaylandı</h2>
        <p>Sayın <strong>${fullName}</strong>,</p>

        <p>Aşağıdaki bilgiler ile randevunuz başarıyla oluşturuldu:</p>

        <p><strong>Danışman:</strong> ${newReservation.personName}</p>
        <p><strong>Tarih:</strong> ${newReservation.selectedDay}</p>
        <p><strong>Saat:</strong> ${newReservation.selectedTime}</p>

        <br/>
        <p>Randevu saatinizden en az 5 dakika önce hazır bulunmanızı öneririz.</p>
        <p>Herhangi bir sorunuz olursa bize yanıt verebilirsiniz.</p>

        <br/><br/>
        <p>İyi günler dileriz,<br/><strong>Aya Journey</strong></p>
      `,
    };
    await transporter.sendMail(customerMail);

    // --------------------------------------------
    // 3) BAŞARILI DÖNÜŞ
    // --------------------------------------------
    return new Response(JSON.stringify({ success: true, reservation: reservationToSave }), { status: 201 });

  } catch (err) {
    console.error("MAIL/RANDEVU ERROR:", err);
    return new Response(JSON.stringify({ error: "Randevu kaydedildi fakat mail gönderilemedi" }), { status: 500 });
  }
}
