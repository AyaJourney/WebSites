import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import sharp from "sharp";

async function compressImage(base64) {
  try {
    const inputBuffer = Buffer.from(base64, "base64");

    const compressed = await sharp(inputBuffer)
      .resize({ width: 1200 })          // max 1200px
      .jpeg({ quality: 60 })            // kalite %60
      .toBuffer();

    return compressed.toString("base64");
  } catch (err) {
    console.error("Image compression failed:", err);
    return base64; // hata olursa orijinali kullan
  }
}

function formatDateDMY(dateString) {
  if (!dateString || dateString.length < 10) return "-";

  const [y, m, d] = dateString.split("-");
  return `${d}/${m}/${y}`;
}

/**
 * POST handler - Professional Corporate PDF Design
 * Font fix: Uses single custom font for all fields to prevent errors and maintain consistency.
 */
export async function POST(req) {
  try {
    const formData = await req.json();

    // --- PDF Dokümanı Oluştur ---
    const pdfDoc = await PDFDocument.create();
    
    // Custom fontlar (TTF) için fontkit'i kaydetmek zorunludur
    pdfDoc.registerFontkit(fontkit);

    // --- Font Ayarları ---
    let regularFont, boldFont;
    
    // Senin belirttiğin orijinal dosya yolu
    const fontPath = path.join(process.cwd(), "public", "fonts", "OpenSans_Condensed-Regular.ttf");

    // Font yükleme mantığı: Sadece senin dosyanı baz alıyoruz.
    if (fs.existsSync(fontPath)) {
      try {
        const fontBytes = fs.readFileSync(fontPath);
        const customFont = await pdfDoc.embedFont(fontBytes);
        
        // Hem normal hem bold değişkenine SENİN fontunu atıyoruz.
        // Böylece bold dosyası ararken hata vermez veya Helvetica'ya dönüp görüntüyü bozmaz.
        regularFont = customFont;
        boldFont = customFont; 
      } catch (fontError) {
        console.warn("Özel font dosyası bozuk veya yüklenemedi, standart fonta geçiliyor:", fontError);
        regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
        boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      }
    } else {
      console.warn("Font dosyası bulunamadı, standart font kullanılıyor.");
      regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
      boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    }

    // --- Renk Paleti & Sabitler ---
    const COLORS = {
      primary: rgb(0.1, 0.2, 0.45),    // Lacivert (Başlıklar)
      secondary: rgb(0.95, 0.95, 0.96), // Çok açık gri (Arka planlar)
      textMain: rgb(0.15, 0.15, 0.15), // Koyu Gri (Ana metin)
      textLabel: rgb(0.5, 0.5, 0.55),  // Açık Gri (Etiketler)
      accent: rgb(0.8, 0.25, 0.25),    // Vurgu rengi
      white: rgb(1, 1, 1),
      border: rgb(0.85, 0.85, 0.85)
    };

    const PAGE_WIDTH = 595; // A4
    const PAGE_HEIGHT = 842;
    const MARGIN = 40;
    const CONTENT_WIDTH = PAGE_WIDTH - (MARGIN * 2);

    // --- Yardımcı Fonksiyonlar ---
// const logoPath = path.join(process.cwd(), "public", "images", "aya_logo_100x70.png");
// const logoBytes = fs.readFileSync(logoPath);
// const logoImage = await pdfDoc.embedPng(logoBytes);
    // 1. Metin Sarma (Word Wrap)
    const wrapText = (text, maxWidth, font, size) => {
      if (!text) return [];
      const words = String(text).split(' ');
      let lines = [];
      let currentLine = words[0];

      for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const width = font.widthOfTextAtSize(`${currentLine} ${word}`, size);
        if (width < maxWidth) {
          currentLine += ` ${word}`;
        } else {
          lines.push(currentLine);
          currentLine = word;
        }
      }
      lines.push(currentLine);
      return lines;
    };

    // State yönetimi
    let currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    let currentY = PAGE_HEIGHT - MARGIN;
    let pageCount = 1;

    // 2. Sayfa Kontrolü & Yeni Sayfa
    const checkSpace = (heightNeeded) => {
      if (currentY - heightNeeded < MARGIN) {
        drawFooter(currentPage, pageCount);
        currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
        pageCount++;
        currentY = PAGE_HEIGHT - MARGIN;
        drawHeader(currentPage); 
        return true;
      }
      return false;
    };

    // 3. Header (Sayfa Üstü)
const drawHeader = async (page) => {
  // --- PNG Logo ---
  const logoPath = path.join(process.cwd(), "public", "images", "ayalogoxl.png");
  if (fs.existsSync(logoPath)) {
    const logoBytes = fs.readFileSync(logoPath);
    const logoImage = await pdfDoc.embedPng(logoBytes);

    page.drawImage(logoImage, {
      x: MARGIN,
      y: PAGE_HEIGHT- 42, // Logo yüksekliği kadar yukarı çek
      width: 110,
      height: 33
    });
  } else {
     // Şirket Adı
  page.drawText("AYA JOURNEY", {
    x: MARGIN + 110, // Logo sağında
    y: PAGE_HEIGHT - 45 - 20,
    size: 18,
    font: boldFont,
    color: COLORS.primary,
  });
  }



  // Doküman Başlığı
  page.drawText("INGILTERE VİZE BAŞVURU FORMU BILGI FISI", {
    x: PAGE_WIDTH - MARGIN - boldFont.widthOfTextAtSize("INGILTERE VİZE BAŞVURU FORMU BILGI FISI", 10),
    y: PAGE_HEIGHT - 38,
    size: 10,
    font: boldFont,
    color: COLORS.textLabel,
  });

  currentY = PAGE_HEIGHT - 50; // içerik başlangıç Y koordinatı
};


    // 4. Footer (Sayfa Altı)
    const drawFooter = (page, pNum) => {
      const text = `Sayfa ${pNum}`;
      const width = regularFont.widthOfTextAtSize(text, 9);
      page.drawText(text, {
        x: (PAGE_WIDTH - width) / 2,
        y: 20,
        size: 9,
        font: regularFont,
        color: COLORS.textLabel
      });
    };

    // 5. Bölüm Başlığı (Section)
    const drawSection = (title) => {
      checkSpace(50);
      currentY -= 15; // Biraz boşluk
      
      // Arkaplan kutusu
      currentPage.drawRectangle({
        x: MARGIN,
        y: currentY - 25,
        width: CONTENT_WIDTH,
        height: 25,
        color: COLORS.primary,
      });

      // Başlık metni
      currentPage.drawText(title.toUpperCase(), {
        x: MARGIN + 10,
        y: currentY - 19,
        size: 11,
        font: boldFont, // Senin fontun
        color: COLORS.white
      });

      currentY -= 40; // Aşağı in
    };

    // 6. Alan Çizimi (Grid Yapısı - Label/Value)
    const drawField = (label, value, isFullWidth = false, xOffset = 0) => {
      const colWidth = isFullWidth ? CONTENT_WIDTH : (CONTENT_WIDTH / 2) - 10;
      const valStr = value ? String(value) : "-";
      const labelSize = 8;
      const valueSize = 10;
      
      // Value kaç satır tutuyor?
      const valueLines = wrapText(valStr, colWidth, regularFont, valueSize);
      const heightNeeded = (valueLines.length * (valueSize + 4)) + 15; 

      // Sayfa sonu kontrolü
      if (xOffset === 0) {
         if (checkSpace(heightNeeded)) {
             // Sayfa değiştiyse Y sıfırlandı
         }
      }

      const drawX = MARGIN + xOffset;
      
      // Label
      currentPage.drawText(label, {
        x: drawX,
        y: currentY,
        size: labelSize,
        font: boldFont, // Senin fontun (Bold olmadığı için regular görünecek ama stilimiz aynı kalacak)
        color: COLORS.textLabel
      });

      // Value (Wrapped)
      let textY = currentY - 12;
      valueLines.forEach(line => {
        currentPage.drawText(line, {
            x: drawX,
            y: textY,
            size: valueSize,
            font: regularFont,
            color: COLORS.textMain
        });
        textY -= (valueSize + 4);
      });
      
      return heightNeeded; 
    };

    // --- Veri İşleme ve Çizim Başlangıcı ---
    
    // drawHeader(currentPage, true);

    const s = (n) => formData.steps?.[String(n)] || {};

    // --- BÖLÜM 1: Kişisel Bilgiler ---
       await drawHeader(currentPage);

    // --- Step 1 ---
    // 1. KİŞİSEL BİLGİLER
drawSection("1. KİŞİSEL BİLGİLER");

// 1. Ad Soyad - TC
let h1 = drawField("Ad Soyad", s(1).fullName, false, 0);
 let h2 = drawField("T.C. Kimlik No", s(1).tcId, false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// 2. Doğum Tarihi - Doğum Yeri
h1 = drawField("Doğum Tarihi", formatDateDMY(s(1).birthDate), false, 0);
h2 = drawField("Doğum Yeri", s(1).birthPlace, false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// 3. Cinsiyet - Medeni Durum
h1 = drawField("Cinsiyet", s(1).gender, false, 0);
h2 = drawField("Medeni Durum", s(1).maritalStatus, false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// 4. Eş bilgisi / Eski soyadı
if (s(1).maritalStatus === "EVLI") {
    h1 = drawField("Eşinin Adı Soyadı", s(1).partner_full_name, false, 0);
    currentY -= h1 + 10;
}

if (s(1).gender === "KADIN" && s(1).maritalStatus === "EVLI") {
    h1 = drawField("Evlenmeden Önceki Soyadı", s(1).maidenName, false, 0);
    currentY -= h1 + 10;
}

// 5. Email - Telefon
h1 = drawField("E-posta", s(1).email, false, 0);
h2 = drawField("Telefon", s(1).phone_number, false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// 6. Adres (çok satırlı)
h1 = drawField("Adres", s(1).home_address, true, 0);
currentY -= h1 + 10;

// 7. Posta Kodu - Ev Durumu
h1 = drawField("Posta Kodu", s(1).post_code, false, 0);
h2 = drawField(
    "Ev Durumu",
    `${s(1).home_owner || "-"} (${s(1).residence_duration || "-"})`,
    false,
    CONTENT_WIDTH / 2
);
currentY -= Math.max(h1, h2) + 10;

// 8. Eğer residence_months_total < 12 ise → önceki adresler
if (s(1).residence_months_total !== null && s(1).residence_months_total < 12) {
    h1 = drawField(
        "Son 2 yıldaki önceki adresler",
        s(1).past_addresses || "-",
        true,
        0
    );
    currentY -= h1 + 10;
}


  // --- Step 2: Aile ---
drawSection("2. AİLE BİLGİLERİ");

// --- Anne ---
h1 = drawField("Anne Adı", s(2).mother_full_name || "-", false, 0);
h2 = drawField("Anne Doğum Tarihi", formatDateDMY(s(2).mother_birth_date) || "-", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("Anne Sizinle Seyahat Edecek mi?", s(2).mother_travel_with_you || "-", false, 0);
currentY -= h1 + 10;

// --- Baba ---
h1 = drawField("Baba Adı", s(2).father_full_name || "-", false, 0);
h2 = drawField("Baba Doğum Tarihi", formatDateDMY(s(2).father_birth_date) || "-", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("Baba Sizinle Seyahat Edecek mi?", s(2).father_travel_with_you || "-", false, 0);
currentY -= h1 + 10;

// --- Çocuklar ---
if (String(s(2).boolean_child).toUpperCase() === "EVET") {
  
  checkSpace(40);
  
  currentPage.drawText(
    `Çocuklar (${s(2).child_count || 0} Adet)`,
    { x: MARGIN, y: currentY, size: 10, font: boldFont, color: COLORS.primary }
  );
  
  currentY -= 20;

  const names = s(2).child_names || [];
  const travels = s(2).child_travel_with_you || {};

  names.forEach((nm, idx) => {
    const nameText = nm || "-";
    const travelText = travels[idx] || "-";

    // Çocuk adı
    let ch = drawField(`Çocuk ${idx + 1} Adı`, nameText, true, 0);
    currentY -= ch + 5;

    // Çocuk sizinle seyahat edecek mi?
    ch = drawField(`Çocuk ${idx + 1} Sizinle Seyahat Edecek mi?`, travelText, false, 0);
    currentY -= ch + 10;
  });

  currentY -= 5;
}

currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;

await drawHeader(currentPage);
 // --- Step 3: Pasaport ---
drawSection("3. PASAPORT BİLGİLERİ");

// Satır 1: Pasaport No + Veren Makam
h1 = drawField("Pasaport Numarası", s(3).passport_number, false, 0);
h2 = drawField("Pasaportu Veren Makam", s(3).passport_issuing_authority, false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// Satır 2: Başlangıç & Bitiş Tarihi
h1 = drawField("Pasaport Başlangıç Tarihi", formatDateDMY(s(3).Passport_start_date), false, 0);
h2 = drawField("Pasaport Bitiş Tarihi", formatDateDMY(s(3).Passport_end_date), false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// Satır 3: Kimlik Kartı Bitiş
h1 = drawField("T.C. Kimlik Kartı Bitiş Tarihi", formatDateDMY(s(3).tc_card_end_date), false, 0);
currentY -= h1 + 10;

// Sayfa Sonu
drawFooter(currentPage, pageCount);

// --- BÖLÜM 4 ---
currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);


   // --- BÖLÜM 4: İş ve Maddi Durum ---
// currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
// pageCount++;
// currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);

drawSection("4. ÇALIŞMA VE MADDİ DURUM");

// Çalışma durumu
 h1 = drawField("Çalışma Durumu", s(4).boolean_work, true, 0);
currentY -= h1 + 10;

// Detaylar: Öğrenci vs Çalışıyor / Emekli / Çalışmıyor
if (s(4).boolean_work === "OGRENCI") {
  // Öğrenci bilgileri
  checkSpace(80);
  let hOkul = drawField("Okul Adı", s(4).school_name, false, 0);
  let hBolum = drawField("Bölüm", s(4).school_department, false, CONTENT_WIDTH / 2);
  currentY -= Math.max(hOkul, hBolum) + 10;

  let hYil = drawField("Kaç Yıldır Okuyor", s(4).school_year, false, 0);
  currentY -= hYil + 10;

} else if (["CALISIYOR", "EMEKLI", "CALISMAYAN"].includes(s(4).boolean_work)) {
  checkSpace(140);

  // Label’ları “Çalışmıyor” için eski işyeri olarak ayarla
  const isCalismayan = s(4).boolean_work === "CALISMAYAN";

  const labelWorkName   = isCalismayan ? "Eski İş Yeri / Kurum Adı"      : "İş Yeri / Kurum Adı";
  const labelWorkAddr   = isCalismayan ? "Eski İş Yeri Adresi"           : "İş Yeri Adresi";
  const labelWorkPhone  = isCalismayan ? "Eski İş Yeri Telefonu"         : "İş Yeri Telefonu";
  const labelWorkYear   = isCalismayan ? "Kaç Yıl Çalıştı (Varsa)"       : "Toplam Çalışma Süresi";

  // Kurum + Ünvan
  let hKurum = drawField(labelWorkName, s(4).work_name, false, 0);
  let hUnvan = drawField("Göreviniz / Ünvanınız", s(4).worker_title, false, CONTENT_WIDTH / 2);
  currentY -= Math.max(hKurum, hUnvan) + 10;

  // Adres
  let hAdres = drawField(labelWorkAddr, s(4).work_address, true, 0);
  currentY -= hAdres + 10;

  // Telefon + Çalışma süresi
  let hTel = drawField(labelWorkPhone, s(4).work_phone, false, 0);
  let hSure = drawField(labelWorkYear, s(4).work_year, false, CONTENT_WIDTH / 2);
  currentY -= Math.max(hTel, hSure) + 10;

  // Sadece "ÇALIŞIYOR" ise işyeri size ait mi?
  if (s(4).boolean_work === "CALISIYOR") {
    let hOwn = drawField("İş Yeri Size Ait mi?", s(4).own_work, false, 0);
    currentY -= hOwn + 10;
  }
}

// Finansal Tablo (çalışma durumu seçilmişse göster)
if (s(4).boolean_work) {
  checkSpace(90);
  currentY -= 10;

  currentPage.drawText("Finansal Özet", {
    x: MARGIN,
    y: currentY,
    size: 10,
    font: boldFont,
    color: COLORS.primary
  });

  currentY -= 20;
  currentPage.drawLine({
    start: { x: MARGIN, y: currentY + 15 },
    end: { x: PAGE_WIDTH - MARGIN, y: currentY + 15 },
    thickness: 0.5,
    color: COLORS.border
  });

  // 4 kolonlu finans özet satırı
  const colW = CONTENT_WIDTH / 4;

  let fh1 = drawField("Aylık Gelir", s(4).monthly_money, false, 0);
  let fh2 = drawField("Birikim", s(4).savings, false, colW);
  let fh3 = drawField("Yan Gelirler", s(4).sideline, false, colW * 2);
  let fh4 = drawField("Aylık Harcama", s(4).monthly_expenditure_amount, false, colW * 3);

  currentY -= Math.max(fh1, fh2, fh3, fh4) + 20;
}

currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);
   // --- 5. BÖLÜM: SEYAHAT VE İNGİLTERE ---
drawSection("5. SEYAHAT VE İNGİLTERE");

// İngiltere adresi
h1 = drawField("İngiltere'de Kalınacak Adres", s(5).uk_address, true, 0);
currentY -= h1 + 10;

// Seyahat tarihleri (GG.AA.YYYY format)
const travelStart = formatDateDMY(s(5).travel_start_date);
const travelEnd   = formatDateDMY(s(5).travel_end_date);

h1 = drawField("Gidiş Tarihi", travelStart, false, 0);
h2 = drawField("Dönüş Tarihi", travelEnd, false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// Seyahat sebebi
let travelReasonText = s(5).travel_reason || "-";
if (s(5).travel_reason === "Diğer" && s(5).travel_reason_other) {
  travelReasonText = `Diğer: ${s(5).travel_reason_other}`;
}
h1 = drawField("Seyahat Sebebi", travelReasonText, true, 0);
currentY -= h1 + 10;

// Planlanan harcama & masrafları kim karşılıyor
const spend = s(5).spend_pound ? `${s(5).spend_pound} GBP` : "-";
let payerShort =
  s(5).boolean_cover_expenses === "EVET"
    ? "Kendisi"
    : (s(5).who_cover_expenses || "-");

h1 = drawField("Planlanan Harcama", spend, false, 0);
h2 = drawField("Masrafları Karşılayan", payerShort, false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// Masrafları başkası karşılıyorsa detay blok
if (String(s(5).boolean_cover_expenses).toUpperCase() === "HAYIR") {
  checkSpace(80);
  currentY -= 5;
  currentPage.drawText("Masrafları Karşılayan Kişi", {
    x: MARGIN,
    y: currentY,
    size: 10,
    font: boldFont,
    color: COLORS.primary,
  });
  currentY -= 15;

  h1 = drawField("Adı Soyadı", s(5).who_cover_expenses, false, 0);
  h2 = drawField("Telefon", s(5).cover_expenses_phone, false, CONTENT_WIDTH / 2);
  currentY -= Math.max(h1, h2) + 10;

  h1 = drawField("E-posta", s(5).cover_expenses_email, false, 0);
  h2 = drawField(
    "Katkı Tutarı (GBP)",
    s(5).money_cover_expenses,
    false,
    CONTENT_WIDTH / 2
  );
  currentY -= Math.max(h1, h2) + 10;

  h1 = drawField("Katkı Sebebi", s(5).cover_expenses_reason, true, 0);
  currentY -= h1 + 10;
}

// YURT DIŞI SEYAHAT GEÇMİŞİ
if (
  String(s(5).boolean_traveled_adroad).toUpperCase() === "EVET" &&
  s(5).abroad_country &&
  s(5).abroad_country.length > 0
) {
  checkSpace(60);
  currentY -= 5;
  currentPage.drawText("Yurtdışı Seyahat Geçmişi", {
    x: MARGIN,
    y: currentY,
    size: 10,
    font: boldFont,
    color: COLORS.primary,
  });
  currentY -= 15;

  s(5).abroad_country.forEach((item) => {
    checkSpace(18);
    const start = formatDateDMY(item.start || "-");
    const end = formatDateDMY(item.end || "-");
    const line = `• ${item.country || "-"} (${start} / ${end})`;
    currentPage.drawText(line, {
      x: MARGIN + 10,
      y: currentY,
      size: 9,
      font: regularFont,
      color: COLORS.textMain,
    });
    currentY -= 14;
  });
  currentY -= 6;
}

// DAVETİYE BİLGİLERİ
if (String(s(5).have_invitation).toUpperCase() === "EVET") {
  checkSpace(90);
  currentY -= 5;
  currentPage.drawText("Davetiye Bilgileri", {
    x: MARGIN,
    y: currentY,
    size: 10,
    font: boldFont,
    color: COLORS.primary,
  });
  currentY -= 15;

  const invType =
    s(5).invitation_type === "BIREYSEL"
      ? "Bireysel"
      : s(5).invitation_type === "SIRKET"
      ? "Şirket"
      : "-";

  h1 = drawField("Davetiye Türü", invType, false, 0);
  currentY -= h1 + 8;

  if (s(5).invitation_type === "BIREYSEL") {
    h1 = drawField("Adı Soyadı", s(5).inviter_fullname, false, 0);
    h2 = drawField("E-posta", s(5).inviter_email, false, CONTENT_WIDTH / 2);
    currentY -= Math.max(h1, h2) + 8;

    h1 = drawField("Telefon", s(5).inviter_phone, false, 0);
    currentY -= h1 + 8;

    h1 = drawField("Adres", s(5).inviter_address, true, 0);
    currentY -= h1 + 8;
  } else if (s(5).invitation_type === "SIRKET") {
    h1 = drawField("Şirket Adı", s(5).company_name, false, 0);
    h2 = drawField("Şirket E-posta", s(5).company_email, false, CONTENT_WIDTH / 2);
    currentY -= Math.max(h1, h2) + 8;

    h1 = drawField("Şirket Telefon", s(5).company_phone, false, 0);
    currentY -= h1 + 8;

    h1 = drawField("Şirket Adresi", s(5).company_address, true, 0);
    currentY -= h1 + 8;
  }

  h1 = drawField("Davet Sebebi", s(5).invitation_reason, true, 0);
  currentY -= h1 + 10;
}

// BİRLEŞİK KRALLIKTA AİLE
if (String(s(5).has_family_in_uk).toUpperCase() === "EVET") {
  checkSpace(100);
  currentY -= 5;
  currentPage.drawText("Birleşik Krallık'ta Aile Bireyi", {
    x: MARGIN,
    y: currentY,
    size: 10,
    font: boldFont,
    color: COLORS.primary,
  });
  currentY -= 15;

  h1 = drawField("Yakınlık Derecesi", s(5).uk_family_relation, false, 0);
  h2 = drawField("Adı Soyadı", s(5).uk_family_fullname, false, CONTENT_WIDTH / 2);
  currentY -= Math.max(h1, h2) + 8;

  h1 = drawField("Uyruğu", s(5).uk_family_nationality, false, 0);
  h2 = drawField(
    "Yasal Durumu",
    s(5).uk_family_legal_status,
    false,
    CONTENT_WIDTH / 2
  );
  currentY -= Math.max(h1, h2) + 8;

  const tempVisa =
    s(5).uk_family_has_temp_visa === "EVET"
      ? "Evet"
      : s(5).uk_family_has_temp_visa === "HAYIR"
      ? "Hayır"
      : "-";

  const resident =
    s(5).uk_family_is_resident === "EVET"
      ? "Evet"
      : s(5).uk_family_is_resident === "HAYIR"
      ? "Hayır"
      : "-";

  h1 = drawField("Geçici Vizesi Var mı?", tempVisa, false, 0);
  h2 = drawField(
    "Temelli UK'de mi?",
    resident,
    false,
    CONTENT_WIDTH / 2
  );
  currentY -= Math.max(h1, h2) + 8;

  if (
    s(5).uk_family_has_temp_visa === "EVET" ||
    s(5).uk_family_is_resident === "EVET"
  ) {
    h1 = drawField("Pasaport Numarası", s(5).uk_family_passport, false, 0);
    currentY -= h1 + 8;
  }

  if (s(5).uk_family_has_temp_visa === "HAYIR") {
    h1 = drawField(
      "Vize Durumu Açıklaması",
      s(5).uk_family_visa_explanation,
      true,
      0
    );
    currentY -= h1 + 10;
  }
}

// AİLE DIŞI KİŞİ İLE SEYAHAT
if (String(s(5).travel_with_non_family).toUpperCase() === "EVET") {
  checkSpace(60);
  currentY -= 5;
  currentPage.drawText("Aile Dışı Kişi ile Seyahat", {
    x: MARGIN,
    y: currentY,
    size: 10,
    font: boldFont,
    color: COLORS.primary,
  });
  currentY -= 15;

  h1 = drawField(
    "Kişi Adı Soyadı",
    s(5).travel_non_family_fullname,
    false,
    0
  );
  h2 = drawField(
    "Yakınlık Derecesi",
    s(5).travel_non_family_relation,
    false,
    CONTENT_WIDTH / 2
  );
  currentY -= Math.max(h1, h2) + 8;

  h1 = drawField("Telefon", s(5).travel_non_family_phone, false, 0);
  currentY -= h1 + 10;
}

// SON 10 YILDA UK ZİYARETİ
if (String(s(5).uk_visited_last10).toUpperCase() === "EVET") {
  checkSpace(70);
  currentY -= 5;
  currentPage.drawText("Son 10 Yılda Birleşik Krallık Ziyaretleri", {
    x: MARGIN,
    y: currentY,
    size: 10,
    font: boldFont,
    color: COLORS.primary,
  });
  currentY -= 15;

  h1 = drawField("Ziyaret Sayısı", s(5).uk_visited_count, false, 0);
  h2 = drawField("Ziyaret Amacı", s(5).uk_visit_purpose, false, CONTENT_WIDTH / 2);
  currentY -= Math.max(h1, h2) + 8;

  h1 = drawField("Ziyaret Tarihleri", s(5).uk_visit_dates, true, 0);
  currentY -= h1 + 10;
}

// TIBBİ TEDAVİ
if (String(s(5).medical_treatment_uk).toUpperCase() === "EVET") {
  checkSpace(60);
  currentY -= 5;
  currentPage.drawText("İngiltere'de Tıbbi Tedavi Geçmişi", {
    x: MARGIN,
    y: currentY,
    size: 10,
    font: boldFont,
    color: COLORS.primary,
  });
  currentY -= 15;

  h1 = drawField(
    "Tedavi Açıklaması",
    s(5).medical_treatment_details,
    true,
    0
  );
  currentY -= h1 + 10;
}

// ULUSAL SİGORTA NUMARASI
{
  const hasNIN =
    s(5).national_insurance_number_exist === "EVET"
      ? "Evet"
      : s(5).national_insurance_number_exist === "HAYIR"
      ? "Hayır"
      : "-";

  h1 = drawField("Ulusal Sigorta Numarası Var mı?", hasNIN, false, 0);
  currentY -= h1 + 5;

  if (s(5).national_insurance_number_exist === "EVET") {
    h1 = drawField(
      "Ulusal Sigorta Numarası",
      s(5).national_insurance_number,
      false,
      0
    );
    currentY -= h1 + 10;
  } else {
    currentY -= 5;
  }
}

// UK KALMA İZNİ BAŞVURUSU
if (String(s(5).uk_stay_application_last10).toUpperCase() === "EVET") {
  checkSpace(50);
  currentY -= 5;
  currentPage.drawText("Son 10 Yılda UK Kalma İzni Başvuruları", {
    x: MARGIN,
    y: currentY,
    size: 10,
    font: boldFont,
    color: COLORS.primary,
  });
  currentY -= 15;

  h1 = drawField(
    "Açıklama",
    s(5).uk_stay_application_explanation,
    true,
    0
  );
  currentY -= h1 + 10;
}

// SON 10 YIL UK VİZESİ
{
  const hasVisa10 =
    s(5).uk_visa_last10 === "EVET"
      ? "Evet"
      : s(5).uk_visa_last10 === "HAYIR"
      ? "Hayır"
      : "-";

  h1 = drawField("Son 10 Yılda UK Vizesi Aldı mı?", hasVisa10, false, 0);
  currentY -= h1 + 5;

  if (s(5).uk_visa_last10 === "EVET") {
    const visaIssue = formatDateDMY(s(5).uk_visa_issue_date);
    h1 = drawField("Vize Veriliş Tarihi", visaIssue, false, 0);
    currentY -= h1 + 10;
  } else {
    currentY -= 5;
  }
}

// KAMU FONU
if (String(s(5).uk_public_funds).toUpperCase() === "EVET") {
  checkSpace(50);
  currentY -= 5;
  currentPage.drawText("İngiltere'de Alınan Kamu Fonları", {
    x: MARGIN,
    y: currentY,
    size: 10,
    font: boldFont,
    color: COLORS.primary,
  });
  currentY -= 15;

  h1 = drawField(
    "Alınan Fon Açıklaması",
    s(5).uk_public_funds_details,
    true,
    0
  );
  currentY -= h1 + 10;
}

// DAHA ÖNCE VİZE REDDİ (Formdaki eski soru)
if (String(s(5).boolean_refused_visa).toUpperCase() === "EVET") {
  checkSpace(50);
  currentY -= 5;
  currentPage.drawText("Önceki Vize Reddi", {
    x: MARGIN,
    y: currentY,
    size: 10,
    font: boldFont,
    color: COLORS.primary,
  });
  currentY -= 15;

  const refusedWhen = formatDateDMY(s(5).when_refused);

  h1 = drawField("Vize Reddi Tarihi", refusedWhen, false, 0);
  h2 = drawField("Red Sebebi", s(5).refused_about, true, CONTENT_WIDTH / 2);
  currentY -= Math.max(h1, h2) + 10;
}

// GENEL VİZE REDDİ / YASAK / SINIR DIŞI
if (String(s(5).visa_refused_or_banned).toUpperCase() === "EVET") {
  checkSpace(60);
  currentY -= 5;
  currentPage.drawText(
    "Vize Reddi / Sınırdışı / Giriş Yasağı (Herhangi Bir Ülke)",
    {
      x: MARGIN,
      y: currentY,
      size: 10,
      font: boldFont,
      color: COLORS.primary,
    }
  );
  currentY -= 15;

  h1 = drawField(
    "Açıklama (Ülke / Yıl / Durum)",
    s(5).visa_refused_details,
    true,
    0
  );
  currentY -= h1 + 10;
}

// Bu sayfa sonu
drawFooter(currentPage, pageCount);


    // --- DOSYALAR (GÖRSELLER) ---
// --- BÖLÜM 6: DOSYALAR ---
// --- BÖLÜM 6: DOSYALAR ---
// --- BÖLÜM 6: DOSYALAR ---
const files = formData.steps["6"] || {};

// 6. bölüm her zaman yeni sayfada başlasın
drawFooter(currentPage, pageCount); // mevcut sayfayı bitir
currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
await drawHeader(currentPage);
currentY = PAGE_HEIGHT - MARGIN;

// Footer ile sayfa numarasını çiz
drawFooter(currentPage, pageCount); // sayfa numarası için footer çizimi

// Başlık
drawSection("6. DOSYALAR");
const passportBase64 = await compressImage(files.passportFileBase64);
const photoBase64 = await compressImage(files.photoFileBase64);
// Resim ekleme fonksiyonu
const addFileImage = async (fileBase64, title, type) => {
    if (!fileBase64) return;

    try {
        const imgBytes = Buffer.from(fileBase64, "base64");
        let embeddedImg;
        try {
            embeddedImg = await pdfDoc.embedJpg(imgBytes);
        } catch {
            embeddedImg = await pdfDoc.embedPng(imgBytes);
        }

        // Boyut ayarlama
        let imgDims;
        if (type === "passport") {
            const width = PAGE_WIDTH - 2 * MARGIN;
            const height = (PAGE_HEIGHT - 150) / 3;
            const scale = Math.min(width / embeddedImg.width, height / embeddedImg.height);
            imgDims = { width: embeddedImg.width * scale, height: embeddedImg.height * scale };
        } else if (type === "photo") {
            const maxWidth = CONTENT_WIDTH / 2;
            const maxHeight = PAGE_HEIGHT / 2;
            const scale = Math.min(maxWidth / embeddedImg.width, maxHeight / embeddedImg.height, 1);
            imgDims = { width: embeddedImg.width * scale, height: embeddedImg.height * scale };
        }

        const xPos = MARGIN + (CONTENT_WIDTH - imgDims.width) / 2;
        const yPos = currentY - 20 - imgDims.height;

        // Sayfa sonunu kontrol et (resim + alt boşluk)
        if (yPos - 30 < MARGIN) {
            drawFooter(currentPage, pageCount);
            currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
            pageCount++;
            await drawHeader(currentPage);
            currentY = PAGE_HEIGHT - MARGIN;

            // Yeni sayfada footer ile sayfa numarası
            drawFooter(currentPage, pageCount);
        }

        // Başlık
        currentPage.drawText(title, { x: MARGIN, y: currentY, size: 12, font: boldFont, color: COLORS.primary });

        // Resim çerçeve
        currentPage.drawRectangle({
            x: xPos - 5,
            y: yPos - 5,
            width: imgDims.width + 10,
            height: imgDims.height + 10,
            color: COLORS.border
        });

        // Resim
        currentPage.drawImage(embeddedImg, { x: xPos, y: yPos, width: imgDims.width, height: imgDims.height });

        // Sonraki resim için alt pozisyon
        currentY = yPos - 30;

    } catch (e) {
        console.error("Dosya resmi eklenemedi:", title, e);
    }
};

// --- Kullanım ---
await addFileImage(passportBase64, "Pasaport Görüntüsü", "passport");
await addFileImage(photoBase64, "Biyometrik Fotoğraf", "photo");









    // --- Bitiş ---
    const pdfBytes = await pdfDoc.save();
    

    // --- Passport ve Photo base64 -> Buffer ---
    let passportBuffer = null;
    let photoBuffer = null;

    if (s(6).passportFile) {
      const base64 = s(6).passportFileBase64.includes(",")
        ? s(6).passportFileBase64.split(",")[1]
        : s(6).passportFileBase64;
      passportBuffer = Buffer.from(base64, "base64");
    }

   



let pdfBuffer = null;
  if (pdfBytes) {
    pdfBuffer = Buffer.isBuffer(pdfBytes)
      ? pdfBytes
      : Buffer.from(pdfBytes, "base64");
  }

    // --- Text & HTML Body ---
// formData: gönderilen form verisi
const f = formData; // veya defaultForm yerine bu kullanılacak

const textBody = `
İNGİLTERE VİZE BAŞVURU

-- Kişisel Bilgiler --

Ad Soyad: ${f.steps[1].fullName || "-"}
TC: ${f.steps[1].tcId || "-"}
Cinsiyet: ${f.steps[1].gender || "-"}
Medeni Durum: ${f.steps[1].maritalStatus || "-"}
Eş / Eski Eş Adı Soyadı: ${
  ["EVLI", "DUL", "BOSANMIS"].includes(f.steps[1].maritalStatus)
    ? (f.steps[1].partner_full_name || "-")
    : "-"
}
Evlenmeden Önceki Soyadı: ${
  f.steps[1].gender === "KADIN" && f.steps[1].maritalStatus === "EVLI"
    ? (f.steps[1].maidenName || "-")
    : "-"
}
Doğum Tarihi: ${f.steps[1].birthDate || "-"}
Doğum Yeri: ${f.steps[1].birthPlace || "-"}
Telefon: ${f.steps[1].phone_number || "-"}
Email: ${f.steps[1].email || "-"}
Adres: ${f.steps[1].home_address || "-"}
Posta Kodu: ${f.steps[1].post_code || "-"}
Ev Sahibi: ${f.steps[1].home_owner || "-"}
Evde Kalma Süresi: ${f.steps[1].residence_duration || "-"}

${
  f.steps[1].residence_months_total !== null &&
  f.steps[1].residence_months_total < 12
    ? `Son 2 yıldaki önceki adresler:\n${f.steps[1].past_addresses || "-"}\n`
    : ""
}


-- Aile Bilgileri --

Anne: ${f.steps[2].mother_full_name || "-"}
Anne Doğum Tarihi: ${f.steps[2].mother_birth_date || "-"}
Anne Sizinle Seyahat Edecek mi?: ${f.steps[2].mother_travel_with_you || "-"}

Baba: ${f.steps[2].father_full_name || "-"}
Baba Doğum Tarihi: ${f.steps[2].father_birth_date || "-"}
Baba Sizinle Seyahat Edecek mi?: ${f.steps[2].father_travel_with_you || "-"}

Çocuk Sayısı: ${f.steps[2].child_count || "-"}

Çocuklar:
${ (f.steps[2].child_names || []).length > 0 
    ? f.steps[2].child_names.map((name, idx) => 
        `  - ${name || "-"} | Sizinle Seyahat: ${(f.steps[2].child_travel_with_you?.[idx] || "-")}`
      ).join("\n")
    : "-" 
}


-- Pasaport --
Numara: ${f.steps[3].passport_number || "-"}
Başlangıç / Bitiş: ${formatDateDMY(f.steps[3].Passport_start_date)} / ${formatDateDMY(f.steps[3].Passport_end_date)}
Veriliş: ${f.steps[3].passport_issuing_authority || "-"}
TC Kart Bitiş Tarihi: ${formatDateDMY(f.steps[3].tc_card_end_date)}


-- İş ve Maddi Durum --

Çalışma Durumu: ${f.steps[4].boolean_work || "-"}

${f.steps[4].boolean_work === "OGRENCI" ? `
-- Öğrenci Bilgileri --
Okul Adı: ${f.steps[4].school_name || "-"}
Bölüm: ${f.steps[4].school_department || "-"}
Kaç Yıldır Okuyor: ${f.steps[4].school_year || "-"}
` : ""}

${["CALISIYOR","EMEKLI","CALISMAYAN"].includes(f.steps[4].boolean_work) ? `
-- ${f.steps[4].boolean_work === "CALISMAYAN" ? "Eski İş Bilgileri" : "İş Bilgileri"} --
İşyeri / Kurum Adı: ${f.steps[4].work_name || "-"}
İşyeri Adresi: ${f.steps[4].work_address || "-"}
İşyeri Telefon: ${f.steps[4].work_phone || "-"}
Göreviniz / Ünvanınız: ${f.steps[4].worker_title || "-"}
Çalışma Süresi: ${f.steps[4].work_year || "-"}
${f.steps[4].boolean_work === "CALISIYOR" ? `İşyeri Size Ait mi?: ${f.steps[4].own_work || "-"}` : ""}
` : ""}

-- Maddi Durum --
Aylık Gelir: ${f.steps[4].monthly_money || "-"}
Birikim: ${f.steps[4].savings || "-"}
Yan Gelirler: ${f.steps[4].sideline || "-"}
Aylık Harcama: ${f.steps[4].monthly_expenditure_amount || "-"}

-- Seyahat Bilgileri --
İngiltere Adresi: ${f.steps[5].uk_address || "-"}

Seyahat Başlangıç / Bitiş: 
${formatDateDMY(f.steps[5].travel_start_date)} / ${formatDateDMY(f.steps[5].travel_end_date)}

Seyahat Sebebi: ${
  f.steps[5].travel_reason === "Diğer"
    ? `Diğer: ${f.steps[5].travel_reason_other || "-"}`
    : (f.steps[5].travel_reason || "-")
}

Aile dışı biriyle seyahat: ${f.steps[5].travel_with_non_family || "-"}

${
  f.steps[5].travel_with_non_family === "EVET"
    ? `
Seyahat Ettiğiniz Kişi:
  - Ad Soyad: ${f.steps[5].travel_non_family_fullname || "-"}
  - Yakınlık: ${f.steps[5].travel_non_family_relation || "-"}
  - Telefon: ${f.steps[5].travel_non_family_phone || "-"}
`
    : ""
}

Son 10 yıl içinde UK ziyareti: ${f.steps[5].uk_visited_last10 || "-"}

${
  f.steps[5].uk_visited_last10 === "EVET"
    ? `
UK Ziyaret Detayları:
  - Kaç kere: ${f.steps[5].uk_visited_count || "-"}
  - Ziyaret Amacı: ${f.steps[5].uk_visit_purpose || "-"}
  - Ziyaret Tarihleri: ${f.steps[5].uk_visit_dates || "-"}
`
    : ""
}

Daha önce yurtdışına çıktı mı: ${f.steps[5].boolean_traveled_adroad || "-"}

${
  f.steps[5].boolean_traveled_adroad === "EVET"
    ? `
Gidilen Ülkeler:
${(f.steps[5].abroad_country || [])
  .map(item => {
    const s = formatDateDMY(item.start);
    const e = formatDateDMY(item.end);
    return `  - ${item.country || "-"} (${s} / ${e})`;
  })
  .join("\n") || "-"}
`
    : ""
}

Harcanacak Pound: ${f.steps[5].spend_pound || "-"}

Masrafları Kim Karşılayacak: ${
  f.steps[5].boolean_cover_expenses === "EVET" ? "Kendisi" : "Başka biri"
}

${
  f.steps[5].boolean_cover_expenses === "HAYIR"
    ? `
Masrafları Karşılayan:
  - Ad Soyad: ${f.steps[5].who_cover_expenses || "-"}
  - Telefon: ${f.steps[5].cover_expenses_phone || "-"}
  - Email: ${f.steps[5].cover_expenses_email || "-"}
  - Katkı Tutarı (GBP): ${f.steps[5].money_cover_expenses || "-"}
  - Sebebi: ${f.steps[5].cover_expenses_reason || "-"}
`
    : ""
}

-- Davetiye Bilgileri --
Davetiye Var mı: ${f.steps[5].have_invitation || "-"}

${
  f.steps[5].have_invitation === "EVET"
    ? `
Davetiye Türü: ${
        f.steps[5].invitation_type === "BIREYSEL"
          ? "Bireysel"
          : f.steps[5].invitation_type === "SIRKET"
          ? "Şirket"
          : "-"
      }

${
  f.steps[5].invitation_type === "BIREYSEL"
    ? `
Davet Eden (Bireysel):
  - Ad Soyad: ${f.steps[5].inviter_fullname || "-"}
  - Email: ${f.steps[5].inviter_email || "-"}
  - Telefon: ${f.steps[5].inviter_phone || "-"}
  - Adres: ${f.steps[5].inviter_address || "-"}`
    : ""
}

${
  f.steps[5].invitation_type === "SIRKET"
    ? `
Davet Eden Şirket:
  - Şirket Adı: ${f.steps[5].company_name || "-"}
  - Email: ${f.steps[5].company_email || "-"}
  - Telefon: ${f.steps[5].company_phone || "-"}
  - Adres: ${f.steps[5].company_address || "-"}`
    : ""
}

Davet Sebebi:
${f.steps[5].invitation_reason || "-"}
`
    : ""
}

-- UK Aile Bilgileri --
Birleşik Krallıkta aile var mı: ${f.steps[5].has_family_in_uk || "-"}

${
  f.steps[5].has_family_in_uk === "EVET"
    ? `
UK Aile Detayı:
  - Yakınlık: ${f.steps[5].uk_family_relation || "-"}
  - Ad Soyad: ${f.steps[5].uk_family_fullname || "-"}
  - Uyruğu: ${f.steps[5].uk_family_nationality || "-"}
  - Yasal Durumu: ${f.steps[5].uk_family_legal_status || "-"}
  - Geçici Vize: ${f.steps[5].uk_family_has_temp_visa || "-"}
  - Temelli UK'de mi: ${f.steps[5].uk_family_is_resident || "-"}
  - Pasaport No: ${f.steps[5].uk_family_passport || "-"}
  - Açıklama: ${f.steps[5].uk_family_visa_explanation || "-"}
`
    : ""
}

-- UK Geçmişi --
İngiltere’de tıbbi tedavi: ${f.steps[5].medical_treatment_uk || "-"}

${
  f.steps[5].medical_treatment_uk === "EVET"
    ? `Tedavi Açıklaması: ${f.steps[5].medical_treatment_details || "-"}`
    : ""
}

Ulusal Sigorta Numarası Var mı: ${f.steps[5].national_insurance_number_exist || "-"}

${
  f.steps[5].national_insurance_number_exist === "EVET"
    ? `Ulusal Sigorta Numarası: ${f.steps[5].national_insurance_number || "-"}`
    : ""
}

Son 10 yılda UK Kalma İzni Başvurusu: ${f.steps[5].uk_stay_application_last10 || "-"}

${
  f.steps[5].uk_stay_application_last10 === "EVET"
    ? `Açıklama: ${f.steps[5].uk_stay_application_explanation || "-"}`
    : ""
}

Son 10 yılda UK vizesi aldı mı: ${f.steps[5].uk_visa_last10 || "-"}

${
  f.steps[5].uk_visa_last10 === "EVET"
    ? `Vize Veriliş Tarihi: ${formatDateDMY(f.steps[5].uk_visa_issue_date)}`
    : ""
}

İngiltere’de Kamu Fonu Aldı mı: ${f.steps[5].uk_public_funds || "-"}

${
  f.steps[5].uk_public_funds === "EVET"
    ? `Aldığı Fon: ${f.steps[5].uk_public_funds_details || "-"}`
    : ""
}

Herhangi ülkede vize reddi / giriş yasağı: ${f.steps[5].visa_refused_or_banned || "-"}

${
  f.steps[5].visa_refused_or_banned === "EVET"
    ? `Detay: ${f.steps[5].visa_refused_details || "-"}`
    : ""
}

-- Eski Soru (Vize Reddi) --
Daha önce vize reddi: ${f.steps[5].boolean_refused_visa || "-"}

${
  f.steps[5].boolean_refused_visa === "EVET"
    ? `
Reddedilme Tarihi: ${formatDateDMY(f.steps[5].when_refused)}
Reddetme Nedeni: ${f.steps[5].refused_about || "-"}`
    : ""
}


Başvuru Tarihi: ${new Date().toLocaleString("tr-TR")}
`.trim();
const s1 = f.steps[1] || {};
const showPastAddresses =
  s1.residence_months_total !== null &&
  s1.residence_months_total < 12;
const htmlBody = `
<h2>İngiltere Vize Başvuru</h2>

<h3>Kişisel Bilgiler</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%; background-color:#f9f9f9;">
  <tbody>
    <tr><th style="background-color:#e0e0e0;">Ad Soyad</th><td>${s1.fullName || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">TC</th><td>${s1.tcId || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Cinsiyet</th><td>${s1.gender || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Medeni Durum</th><td>${s1.maritalStatus || "-"}</td></tr>
    <tr>
      <th style="background-color:#e0e0e0;">Eş / Eski Eş Adı Soyadı</th>
      <td>${
        ["EVLI", "DUL", "BOSANMIS"].includes(s1.maritalStatus)
          ? (s1.partner_full_name || "-")
          : "-"
      }</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">Evlenmeden Önceki Soyadı</th>
      <td>${
        s1.gender === "KADIN" && s1.maritalStatus === "EVLI"
          ? (s1.maidenName || "-")
          : "-"
      }</td>
    </tr>
    <tr><th style="background-color:#e0e0e0;">Doğum Tarihi</th><td>${s1.birthDate || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Doğum Yeri</th><td>${s1.birthPlace || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Telefon</th><td>${s1.phone_number || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Email</th><td>${s1.email || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Adres</th><td>${s1.home_address || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Posta Kodu</th><td>${s1.post_code || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Ev Sahibi</th><td>${s1.home_owner || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Evde Kalma Süresi</th><td>${s1.residence_duration || "-"}</td></tr>
    ${
      showPastAddresses
        ? `<tr><th style="background-color:#e0e0e0;">Son 2 Yıldaki Önceki Adresler</th><td>${s1.past_addresses || "-"}</td></tr>`
        : ""
    }
  </tbody>
</table>

<h3>Aile Bilgileri</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>

    <!-- Anne -->
    <tr>
      <th style="background-color:#e0e0e0;">Anne</th>
      <td>${f.steps[2].mother_full_name || "-"}</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">Anne Doğum Tarihi</th>
      <td>${f.steps[2].mother_birth_date || "-"}</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">Anne Sizinle Seyahat Edecek mi?</th>
      <td>${f.steps[2].mother_travel_with_you || "-"}</td>
    </tr>

    <!-- Baba -->
    <tr>
      <th style="background-color:#e0e0e0;">Baba</th>
      <td>${f.steps[2].father_full_name || "-"}</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">Baba Doğum Tarihi</th>
      <td>${f.steps[2].father_birth_date || "-"}</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">Baba Sizinle Seyahat Edecek mi?</th>
      <td>${f.steps[2].father_travel_with_you || "-"}</td>
    </tr>

    <!-- Çocuk Sayısı -->
    <tr>
      <th style="background-color:#e0e0e0;">Çocuk Sayısı</th>
      <td>${f.steps[2].child_count || "-"}</td>
    </tr>

    <!-- Çocuk Bilgileri -->
    <tr>
      <th style="background-color:#e0e0e0;">Çocuklar</th>
      <td>
        ${
          (f.steps[2].child_names || []).length > 0
          ? f.steps[2].child_names
              .map((name, idx) => `
                <div style="margin-bottom:4px;">
                  <strong>${idx + 1}.</strong> ${name || "-"}  
                  — <em>Seyahat: ${f.steps[2].child_travel_with_you?.[idx] || "-"}</em>
                </div>
              `)
              .join("")
          : "-"
        }
      </td>
    </tr>

  </tbody>
</table>


<h3>Pasaport</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr>
      <th style="background-color:#e0e0e0;">No</th>
      <td>${f.steps[3].passport_number || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Başlangıç / Bitiş</th>
      <td>
        ${formatDateDMY(f.steps[3].Passport_start_date)} /
        ${formatDateDMY(f.steps[3].Passport_end_date)}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Veriliş</th>
      <td>${f.steps[3].passport_issuing_authority || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">TC Kart Bitiş Tarihi</th>
      <td>${formatDateDMY(f.steps[3].tc_card_end_date)}</td>
    </tr>
  </tbody>
</table>


<h3>İş ve Maddi Durum</h3>

<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>

    <!-- Çalışma Durumu -->
    <tr>
      <th style="background-color:#e0e0e0;">Çalışma Durumu</th>
      <td>${f.steps[4].boolean_work || "-"}</td>
    </tr>

    ${f.steps[4].boolean_work === "OGRENCI" ? `
      <tr><th style="background-color:#e0e0e0;">Okul Adı</th><td>${f.steps[4].school_name || "-"}</td></tr>
      <tr><th style="background-color:#e0e0e0;">Bölüm</th><td>${f.steps[4].school_department || "-"}</td></tr>
      <tr><th style="background-color:#e0e0e0;">Kaç Yıldır Okuyor</th><td>${f.steps[4].school_year || "-"}</td></tr>
    ` : ""}

    ${["CALISIYOR","EMEKLI","CALISMAYAN"].includes(f.steps[4].boolean_work) ? `
      <tr>
        <th style="background-color:#e0e0e0;">${f.steps[4].boolean_work === "CALISMAYAN" ? "Eski İş Yeri Adı" : "İşyeri Adı"}</th>
        <td>${f.steps[4].work_name || "-"}</td>
      </tr>

      <tr>
        <th style="background-color:#e0e0e0;">${f.steps[4].boolean_work === "CALISMAYAN" ? "Eski İş Yeri Adresi" : "İşyeri Adresi"}</th>
        <td>${f.steps[4].work_address || "-"}</td>
      </tr>

      <tr>
        <th style="background-color:#e0e0e0;">${f.steps[4].boolean_work === "CALISMAYAN" ? "Eski İş Yeri Telefonu" : "İşyeri Telefon"}</th>
        <td>${f.steps[4].work_phone || "-"}</td>
      </tr>

      <tr>
        <th style="background-color:#e0e0e0;">${f.steps[4].boolean_work === "CALISMAYAN" ? "Eski Göreviniz / Ünvanınız" : "Göreviniz / Ünvanınız"}</th>
        <td>${f.steps[4].worker_title || "-"}</td>
      </tr>

      <tr>
        <th style="background-color:#e0e0e0;">${f.steps[4].boolean_work === "CALISMAYAN" ? "Eski Çalışma Süresi" : "Toplam Çalışma Süresi"}</th>
        <td>${f.steps[4].work_year || "-"}</td>
      </tr>

      ${f.steps[4].boolean_work === "CALISIYOR" ? `
      <tr>
        <th style="background-color:#e0e0e0;">İşyeri Size Ait mi?</th>
        <td>${f.steps[4].own_work || "-"}</td>
      </tr>
      ` : ""}
    ` : ""}

    <!-- Maddi Durum -->
    <tr><th style="background-color:#e0e0e0;">Aylık Gelir</th><td>${f.steps[4].monthly_money || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Birikim</th><td>${f.steps[4].savings || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Yan Gelir</th><td>${f.steps[4].sideline || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Aylık Harcama</th><td>${f.steps[4].monthly_expenditure_amount || "-"}</td></tr>

  </tbody>
</table>


<h3>Seyahat Bilgileri</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr>
      <th style="background-color:#e0e0e0;">İngiltere Adresi</th>
      <td>${f.steps[5].uk_address || "-"}</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">Seyahat Başlangıç / Bitiş</th>
      <td>
        ${formatDateDMY(f.steps[5].travel_start_date) || "-"}
        /
        ${formatDateDMY(f.steps[5].travel_end_date) || "-"}
      </td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">Seyahat Sebebi</th>
      <td>${
        f.steps[5].travel_reason === "Diğer"
          ? `Diğer: ${f.steps[5].travel_reason_other || "-"}`
          : (f.steps[5].travel_reason || "-")
      }</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">Aile Dışı Kişiyle Seyahat</th>
      <td>${f.steps[5].travel_with_non_family || "-"}</td>
    </tr>
    ${
      f.steps[5].travel_with_non_family === "EVET"
        ? `
        <tr>
          <th style="background-color:#e0e0e0;">Beraber Seyahat Edilen Kişi</th>
          <td>
            Ad Soyad: ${f.steps[5].travel_non_family_fullname || "-"}<br/>
            Yakınlık: ${f.steps[5].travel_non_family_relation || "-"}<br/>
            Telefon: ${f.steps[5].travel_non_family_phone || "-"}
          </td>
        </tr>
      `
        : ""
    }
    <tr>
      <th style="background-color:#e0e0e0;">Son 10 Yılda UK Ziyareti</th>
      <td>${f.steps[5].uk_visited_last10 || "-"}</td>
    </tr>
    ${
      f.steps[5].uk_visited_last10 === "EVET"
        ? `
        <tr>
          <th style="background-color:#e0e0e0;">UK Ziyaret Detayı</th>
          <td>
            Kaç kere: ${f.steps[5].uk_visited_count || "-"}<br/>
            Amaç: ${f.steps[5].uk_visit_purpose || "-"}<br/>
            Tarihler: ${f.steps[5].uk_visit_dates || "-"}
          </td>
        </tr>
      `
        : ""
    }
    <tr>
      <th style="background-color:#e0e0e0;">Daha önce yurtdışına çıktı mı</th>
      <td>${f.steps[5].boolean_traveled_adroad || "-"}</td>
    </tr>
    ${
      f.steps[5].boolean_traveled_adroad === "EVET"
        ? `
        <tr>
          <th style="background-color:#e0e0e0;">Gidilen Ülkeler</th>
          <td>${
            (f.steps[5].abroad_country || []).length
              ? (f.steps[5].abroad_country || [])
                  .map(item => {
                    const s = formatDateDMY(item.start || "-");
                    const e = formatDateDMY(item.end || "-");
                    return `${item.country || "-"} (${s} / ${e})`;
                  })
                  .join("; ")
              : "-"
          }</td>
        </tr>
      `
        : ""
    }
  </tbody>
</table>

<h3>Masraf ve Sponsor Bilgileri</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr>
      <th style="background-color:#e0e0e0;">Harcanacak Pound</th>
      <td>${f.steps[5].spend_pound || "-"}</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">Masrafları Kim Karşılayacak</th>
      <td>${
        f.steps[5].boolean_cover_expenses === "EVET"
          ? "Kendisi"
          : (f.steps[5].who_cover_expenses || "-")
      }</td>
    </tr>
    ${
      f.steps[5].boolean_cover_expenses === "HAYIR"
        ? `
        <tr>
          <th style="background-color:#e0e0e0;">Sponsor Detayı</th>
          <td>
            İsim: ${f.steps[5].who_cover_expenses || "-"}<br/>
            Telefon: ${f.steps[5].cover_expenses_phone || "-"}<br/>
            Email: ${f.steps[5].cover_expenses_email || "-"}<br/>
            Katkı Tutarı (GBP): ${f.steps[5].money_cover_expenses || "-"}<br/>
            Sebep: ${f.steps[5].cover_expenses_reason || "-"}
          </td>
        </tr>
      `
        : ""
    }
  </tbody>
</table>

<h3>Davetiye ve Birleşik Krallıkta Aile</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr>
      <th style="background-color:#e0e0e0;">Davetiyeniz Var mı?</th>
      <td>${f.steps[5].have_invitation || "-"}</td>
    </tr>
    ${
      f.steps[5].have_invitation === "EVET"
        ? `
        <tr>
          <th style="background-color:#e0e0e0;">Davetiye Türü</th>
          <td>${
            f.steps[5].invitation_type === "BIREYSEL"
              ? "Bireysel"
              : f.steps[5].invitation_type === "SIRKET"
              ? "Şirket"
              : "-"
          }</td>
        </tr>
        ${
          f.steps[5].invitation_type === "BIREYSEL"
            ? `
              <tr>
                <th style="background-color:#e0e0e0;">Davet Eden (Bireysel)</th>
                <td>
                  İsim: ${f.steps[5].inviter_fullname || "-"}<br/>
                  Email: ${f.steps[5].inviter_email || "-"}<br/>
                  Telefon: ${f.steps[5].inviter_phone || "-"}<br/>
                  Adres: ${f.steps[5].inviter_address || "-"}
                </td>
              </tr>
            `
            : ""
        }
        ${
          f.steps[5].invitation_type === "SIRKET"
            ? `
              <tr>
                <th style="background-color:#e0e0e0;">Davet Eden Şirket</th>
                <td>
                  Şirket Adı: ${f.steps[5].company_name || "-"}<br/>
                  Email: ${f.steps[5].company_email || "-"}<br/>
                  Telefon: ${f.steps[5].company_phone || "-"}<br/>
                  Adres: ${f.steps[5].company_address || "-"}
                </td>
              </tr>
            `
            : ""
        }
        <tr>
          <th style="background-color:#e0e0e0;">Davet Sebebi</th>
          <td>${f.steps[5].invitation_reason || "-"}</td>
        </tr>
      `
        : ""
    }

    <tr>
      <th style="background-color:#e0e0e0;">UK'ta Aile Var mı?</th>
      <td>${f.steps[5].has_family_in_uk || "-"}</td>
    </tr>
    ${
      f.steps[5].has_family_in_uk === "EVET"
        ? `
        <tr>
          <th style="background-color:#e0e0e0;">UK Aile Bilgisi</th>
          <td>
            Yakınlık: ${f.steps[5].uk_family_relation || "-"}<br/>
            İsim: ${f.steps[5].uk_family_fullname || "-"}<br/>
            Uyruğu: ${f.steps[5].uk_family_nationality || "-"}<br/>
            Yasal Durumu: ${f.steps[5].uk_family_legal_status || "-"}<br/>
            Geçici Vize: ${f.steps[5].uk_family_has_temp_visa || "-"}<br/>
            Temelli UK'de mi: ${f.steps[5].uk_family_is_resident || "-"}<br/>
            Pasaport No: ${f.steps[5].uk_family_passport || "-"}<br/>
            Vize Durumu Açıklaması: ${f.steps[5].uk_family_visa_explanation || "-"}
          </td>
        </tr>
      `
        : ""
    }
  </tbody>
</table>

<h3>UK Geçmişi & Vize Durumu</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr>
      <th style="background-color:#e0e0e0;">İngiltere’de Tıbbi Tedavi</th>
      <td>${f.steps[5].medical_treatment_uk || "-"}</td>
    </tr>
    ${
      f.steps[5].medical_treatment_uk === "EVET"
        ? `
        <tr>
          <th style="background-color:#e0e0e0;">Tedavi Açıklaması</th>
          <td>${f.steps[5].medical_treatment_details || "-"}</td>
        </tr>
      `
        : ""
    }
    <tr>
      <th style="background-color:#e0e0e0;">Ulusal Sigorta Numarası Var mı?</th>
      <td>${f.steps[5].national_insurance_number_exist || "-"}</td>
    </tr>
    ${
      f.steps[5].national_insurance_number_exist === "EVET"
        ? `
        <tr>
          <th style="background-color:#e0e0e0;">Ulusal Sigorta No</th>
          <td>${f.steps[5].national_insurance_number || "-"}</td>
        </tr>
      `
        : ""
    }
    <tr>
      <th style="background-color:#e0e0e0;">Son 10 Yılda UK Kalma İzni Başvurusu</th>
      <td>${f.steps[5].uk_stay_application_last10 || "-"}</td>
    </tr>
    ${
      f.steps[5].uk_stay_application_last10 === "EVET"
        ? `
        <tr>
          <th style="background-color:#e0e0e0;">Kalma İzni Açıklaması</th>
          <td>${f.steps[5].uk_stay_application_explanation || "-"}</td>
        </tr>
      `
        : ""
    }

    <tr>
      <th style="background-color:#e0e0e0;">Son 10 Yılda UK Vizesi Aldı mı?</th>
      <td>${f.steps[5].uk_visa_last10 || "-"}</td>
    </tr>
    ${
      f.steps[5].uk_visa_last10 === "EVET"
        ? `
        <tr>
          <th style="background-color:#e0e0e0;">Vize Veriliş Tarihi</th>
          <td>${formatDateDMY(f.steps[5].uk_visa_issue_date) || "-"}</td>
        </tr>
      `
        : ""
    }

    <tr>
      <th style="background-color:#e0e0e0;">İngiltere'de Kamu Fonu Aldı mı?</th>
      <td>${f.steps[5].uk_public_funds || "-"}</td>
    </tr>
    ${
      f.steps[5].uk_public_funds === "EVET"
        ? `
        <tr>
          <th style="background-color:#e0e0e0;">Kamu Fonu Açıklaması</th>
          <td>${f.steps[5].uk_public_funds_details || "-"}</td>
        </tr>
      `
        : ""
    }

    <tr>
      <th style="background-color:#e0e0e0;">Daha önce vize reddi (eski soru)</th>
      <td>${f.steps[5].boolean_refused_visa || "-"}</td>
    </tr>
    ${
      f.steps[5].boolean_refused_visa === "EVET"
        ? `
        <tr>
          <th style="background-color:#e0e0e0;">Reddedilme Tarihi</th>
          <td>${formatDateDMY(f.steps[5].when_refused) || "-"}</td>
        </tr>
        <tr>
          <th style="background-color:#e0e0e0;">Reddetme Nedeni</th>
          <td>${f.steps[5].refused_about || "-"}</td>
        </tr>
      `
        : ""
    }

    <tr>
      <th style="background-color:#e0e0e0;">Herhangi Ülkede Vize Reddi / Giriş Yasağı</th>
      <td>${f.steps[5].visa_refused_or_banned || "-"}</td>
    </tr>
    ${
      f.steps[5].visa_refused_or_banned === "EVET"
        ? `
        <tr>
          <th style="background-color:#e0e0e0;">Detay (Ülke / Yıl / Durum)</th>
          <td>${f.steps[5].visa_refused_details || "-"}</td>
        </tr>
      `
        : ""
    }
  </tbody>
</table>


${f.steps[6].passportFile ? `<h4>Pasaport Fotoğrafı</h4><img src="cid:passportPhoto" style="max-width:220px;border-radius:6px;"/>` : ""}
${f.steps[6].photoFile ? `<h4>Vesikalık</h4><img src="cid:profilePhoto" style="max-width:220px;border-radius:6px;"/>` : ""}

<p><small>Başvuru Tarihi: ${new Date().toLocaleString("tr-TR")}</small></p>
`.trim();




    // --- Attachments ---
    const attachments = [];
    if (pdfBuffer) {
      attachments.push({
        filename: `Basvuru_${(s(1).fullName || "form").replace(/\s+/g, "_")}.pdf`,
        content: pdfBuffer,
        contentType: "application/pdf",
      });
    }
    if (passportBuffer) {
      attachments.push({
        filename: "passport.jpg",
        content: passportBuffer,
        cid: "passportPhoto",
        contentType: "image/jpeg",
      });
    }
   
    

    // --- Mail Gönderimi ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_MAIL_ADDRESS,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `Aya Journey <${process.env.GOOGLE_MAIL_ADDRESS}>`,
      to: `${process.env.FORM_MAIL_ADRESS}`,
      subject: `İngiltere Vize Başvurusu - ${s(1).fullName || "İsimsiz"}`,
      text: textBody,
      html: htmlBody,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Mail / PDF Hatası:", err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}