import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import sharp from "sharp";
function getTravelCardCount(value) {
  switch (value) {
    case "BIR KEZ":
      return 1;
    case "2-5 KEZ":
      return 2;
    case "6 VE UZERI":
      return 3;
    default:
      return 0;
  }
}

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

// Ad Soyad – T.C.
let h1 = drawField("Ad Soyad", s(1).fullName || "-", false, 0);
let h2 = drawField("T.C. Kimlik No", s(1).tcId || "-", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// Uyruk
h1 = drawField("Uyruğu", s(1).natinolity || "-", false, 0);
currentY -= h1 + 10;

// Diğer vatandaşlık
h1 = drawField("Başka Ülke Vatandaşlığı", s(1).other_nationality || "-", false, 0);
currentY -= h1 + 10;

if (s(1).other_nationality === "EVET") {
  h1 = drawField("Vatandaşlık Alınan Ülke", s(1).other_nationality_country || "-", false, 0);
  h2 = drawField(
    "Vatandaşlık Tarihleri",
    `${formatDateDMY(s(1).other_nationality_start_date)} / ${formatDateDMY(s(1).other_nationality_end_date)}`,
    false,
    CONTENT_WIDTH / 2
  );
  currentY -= Math.max(h1, h2) + 10;
}

// Doğum Tarihi – Yeri
h1 = drawField("Doğum Tarihi", formatDateDMY(s(1).birthDate), false, 0);
h2 = drawField("Doğum Yeri", s(1).birthPlace || "-", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// Cinsiyet – Medeni Durum
h1 = drawField("Cinsiyet", s(1).gender || "-", false, 0);
h2 = drawField("Medeni Durum", s(1).maritalStatus || "-", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// Evlenmeden önceki soyadı
if (s(1).gender === "KADIN" && s(1).maritalStatus === "EVLI") {
  h1 = drawField("Evlenmeden Önceki Soyadı", s(1).maidenName || "-", false, 0);
  currentY -= h1 + 10;
}

// Eş bilgileri
if (s(1).maritalStatus === "EVLI") {
  h1 = drawField("Eşinin Adı Soyadı", s(1).partner_full_name || "-", false, 0);
  h2 = drawField("Eşinin Doğum Tarihi", formatDateDMY(s(1).partner_birth_date), false, CONTENT_WIDTH / 2);
  currentY -= Math.max(h1, h2) + 10;

  h1 = drawField("Eşinin Uyruğu", s(1).partner_nationality || "-", false, 0);
  h2 = drawField("Eşiyle Yaşıyor mu", s(1).partner_lives_with_you || "-", false, CONTENT_WIDTH / 2);
  currentY -= Math.max(h1, h2) + 10;

  h1 = drawField("Eşiyle Seyahat", s(1).partner_travel_with_you || "-", false, 0);
  h2 = drawField("Eş Pasaport No", s(1).partner_passport_number || "-", false, CONTENT_WIDTH / 2);
  currentY -= Math.max(h1, h2) + 10;
}

// Eski eş
if (["DUL", "BOSANMIS"].includes(s(1).maritalStatus)) {
  h1 = drawField("Eski Eşinin Adı Soyadı", s(1).partner_full_name || "-", false, 0);
  currentY -= h1 + 10;
}

// İletişim
h1 = drawField("Telefon", s(1).phone_number || "-", false, 0);
h2 = drawField("İkinci Telefon", s(1).phone_number2 || "-", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("E-posta", s(1).email || "-", false, 0);
h2 = drawField("İkinci E-posta", s(1).email2 || "-", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// Adres (TEK ALAN)
h1 = drawField("Adres", s(1).home_address || "-", true, 0);
currentY -= h1 + 10;

// Posta Kodu – Ev Sahipliği
h1 = drawField("Posta Kodu", s(1).post_code || "-", false, 0);
h2 = drawField(
  "Ev Durumu",
  `${s(1).home_owner || "-"} (${s(1).residence_duration || "-"})`,
  false,
  CONTENT_WIDTH / 2
);
currentY -= Math.max(h1, h2) + 10;

// Ev sahibi açıklaması
if (s(1).home_owner === "DIGER") {
  h1 = drawField("Ev Sahibi Açıklama", s(1).home_owner_info || "-", true, 0);
  currentY -= h1 + 10;
}

// Son 2 yıl adresleri
if (s(1).residence_months_total !== null && s(1).residence_months_total < 12) {
  h1 = drawField("Son 2 Yıldaki Önceki Adresler", s(1).past_addresses || "-", true, 0);
  currentY -= h1 + 10;
}

drawFooter(currentPage, pageCount);


  // --- BÖLÜM 4: Davet Bilgileri ---
currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);

  // --- Step 2: Aile ---
drawSection("2. AİLE BİLGİLERİ");

/* ================= ANNE ================= */
h1 = drawField("Anne Adı Soyadı", s(2).mother_full_name || "-", false, 0);
h2 = drawField(
  "Anne Doğum Tarihi",
  formatDateDMY(s(2).mother_birth_date) || "-",
  false,
  CONTENT_WIDTH / 2
);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("Anne Uyruğu", s(2).mother_nationality || "-", false, 0);
h2 = drawField(
  "Anne Sizinle Seyahat Edecek mi?",
  s(2).mother_travel_with_you || "-",
  false,
  CONTENT_WIDTH / 2
);
currentY -= Math.max(h1, h2) + 10;


/* ================= BABA ================= */
h1 = drawField("Baba Adı Soyadı", s(2).father_full_name || "-", false, 0);
h2 = drawField(
  "Baba Doğum Tarihi",
  formatDateDMY(s(2).father_birth_date) || "-",
  false,
  CONTENT_WIDTH / 2
);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("Baba Uyruğu", s(2).father_nationality || "-", false, 0);
h2 = drawField(
  "Baba Sizinle Seyahat Edecek mi?",
  s(2).father_travel_with_you || "-",
  false,
  CONTENT_WIDTH / 2
);
currentY -= Math.max(h1, h2) + 15;


/* ================= ÇOCUKLAR ================= */
if (String(s(2).boolean_child).toUpperCase() === "EVET") {
  checkSpace(40);

  currentPage.drawText(
    `Çocuk Bilgileri (${s(2).child_count || 0} Adet)`,
    {
      x: MARGIN,
      y: currentY,
      size: 10,
      font: boldFont,
      color: COLORS.primary,
    }
  );

  currentY -= 20;

  const names = s(2).child_names || [];
  const births = s(2).child_birth_date || {};
  const travels = s(2).child_travel_with_you || {};
  const lives = s(2).child_live || {};
  const visas = s(2).child_visa || {};
  const passports = s(2).child_passport_numbers || {};

  names.forEach((name, idx) => {
    checkSpace(60);

    // Çocuk Adı – Doğum Tarihi
    let ch1 = drawField(
      `${idx + 1}. Çocuk Adı`,
      name || "-",
      false,
      0
    );
    let ch2 = drawField(
      "Doğum Tarihi",
      formatDateDMY(births[idx]) || "-",
      false,
      CONTENT_WIDTH / 2
    );
    currentY -= Math.max(ch1, ch2) + 8;

    // Seyahat – Birlikte Yaşıyor mu
    ch1 = drawField(
      "Sizinle Seyahat Edecek mi?",
      travels[idx] || "-",
      false,
      0
    );
    ch2 = drawField(
      "Sizinle Birlikte Yaşıyor mu?",
      lives[idx] || "-",
      false,
      CONTENT_WIDTH / 2
    );
    currentY -= Math.max(ch1, ch2) + 8;

    // Vize – Pasaport
    ch1 = drawField(
      "İngiltere Vizesi Var mı?",
      visas[idx] || "-",
      false,
      0
    );
    ch2 = drawField(
      "Pasaport Numarası",
      passports[idx] || "-",
      false,
      CONTENT_WIDTH / 2
    );
    currentY -= Math.max(ch1, ch2) + 12;
  });
}

/* ================= FOOTER & PAGE ================= */
currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);

 // --- Step 3: Pasaport ---
drawSection("3. PASAPORT BİLGİLERİ");

// Satır 1: Pasaport No + Veren Makam
h1 = drawField(
  "Pasaport Numarası",
  s(3).passport_number || "-",
  false,
  0
);

h2 = drawField(
  "Pasaportu Veren Makam",
  s(3).passport_issuing_authority || "-",
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;

// Satır 2: Başlangıç & Bitiş Tarihi
h1 = drawField(
  "Pasaport Başlangıç Tarihi",
  s(3).Passport_start_date ? formatDateDMY(s(3).Passport_start_date) : "-",
  false,
  0
);

h2 = drawField(
  "Pasaport Bitiş Tarihi",
  s(3).Passport_end_date ? formatDateDMY(s(3).Passport_end_date) : "-",
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;

// Satır 3: T.C. Kimlik Kartı Bitiş Tarihi
h1 = drawField(
  "T.C. Kimlik Kartı Bitiş Tarihi",
  s(3).tc_card_end_date ? formatDateDMY(s(3).tc_card_end_date) : "-",
  false,
  0
);

currentY -= h1 + 10;

// Footer
drawFooter(currentPage, pageCount);


// --- BÖLÜM 4 ---
drawSection("4. ÇALIŞMA VE MADDİ DURUM");

// Çalışma durumu
h1 = drawField("Çalışma Durumu", s(4).boolean_work || "-", false, 0);
currentY -= h1 + 10;

// İş bilgileri (Çalışıyor / Emekli / Çalışmıyor)
if (["CALISIYOR", "EMEKLI", "CALISMAYAN"].includes(s(4).boolean_work)) {

  h1 = drawField(
    s(4).boolean_work === "CALISMAYAN" ? "Eski İş Yeri Adı" : "İş Yeri Adı",
    s(4).work_name || "-",
    false,
    0
  );
   h2 = drawField(
    s(4).boolean_work === "CALISMAYAN" ? "Eski İş Yeri Adresi" : "İş Yeri Adresi",
    s(4).work_address || "-",
    false,
    CONTENT_WIDTH / 2
  );
  currentY -= Math.max(h1, h2) + 10;

  h1 = drawField("İş Yeri Telefonu", s(4).work_phone || "-", false, 0);
  h2 = drawField("Görev / Ünvan", s(4).worker_title || "-", false, CONTENT_WIDTH / 2);
  currentY -= Math.max(h1, h2) + 10;

  h1 = drawField("Toplam Çalışma Süresi", s(4).work_year || "-", false, 0);
  currentY -= h1 + 10;

  if (s(4).boolean_work === "CALISIYOR") {
    h1 = drawField("Bu iş yeri sizin mi?", s(4).own_work || "-", false, 0);
    currentY -= h1 + 10;
  }
}

// Maddi durum (herkes için)
if (s(4).boolean_work) {
  h1 = drawField("Aylık Gelir", s(4).monthly_money || "-", false, 0);
  h2 = drawField("Birikim", s(4).savings || "-", false, CONTENT_WIDTH / 2);
  currentY -= Math.max(h1, h2) + 10;

  h1 = drawField("Yan Gelir", s(4).sideline || "-", false, 0);
  h2 = drawField("Aylık Harcama", s(4).monthly_expenditure_amount || "-", false, CONTENT_WIDTH / 2);
  currentY -= Math.max(h1, h2) + 10;
}

// Öğrenci bilgileri
if (s(4).boolean_work === "OGRENCI") {
  h1 = drawField("Okul Adı", s(4).school_name || "-", false, 0);
   h2 = drawField("Bölüm", s(4).school_department || "-", false, CONTENT_WIDTH / 2);
  currentY -= Math.max(h1, h2) + 10;

  h1 = drawField("Okuma Süresi", s(4).school_year || "-", false, 0);
  currentY -= h1 + 10;
}

drawFooter(currentPage, pageCount);


currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);






   // --- 5. BÖLÜM: SEYAHAT VE İNGİLTERE ---
drawSection("5. SEYAHAT VE KONAKLAMA BİLGİLERİ");

// İngiltere’de kalınacak adres (tek satır, uzun olabilir)
h1 = drawField(
  "İngiltere'de Kalınacak Adres",
  s(5).uk_address || "-",
  true,
  0
);
currentY -= h1 + 10;

// Seyahat başlangıç & bitiş tarihi
h1 = drawField(
  "Seyahat Başlangıç Tarihi",
  formatDateDMY(s(5).travel_start_date) || "-",
  false,
  0
);

 h2 = drawField(
  "Seyahat Bitiş Tarihi",
  formatDateDMY(s(5).travel_end_date) || "-",
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 15;



   

// ===============================
// HARCAMA & MASRAFLAR
// ===============================

drawSection("HARCAMA VE MASRAF BİLGİLERİ");

// İngiltere'de harcama planı
h1 = drawField(
  "İngiltere'de Harcamayı Planladığınız Tutar (Pound)",
  s(5).spend_pound || "-",
  false,
  0
);
currentY -= h1 + 10;

// Masrafları kendisi mi karşılıyor?
h1 = drawField(
  "Masrafları Kendisi mi Karşılıyor?",
  s(5).boolean_cover_expenses || "-",
  false,
  0
);
currentY -= h1 + 10;

// Eğer HAYIR ise → masrafları karşılayan kişi
if (s(5).boolean_cover_expenses === "HAYIR") {

  checkSpace(80);

  currentPage.drawText(
    "Masrafları Karşılayan Kişi",
    { x: MARGIN, y: currentY, size: 10, font: boldFont, color: COLORS.primary }
  );
  currentY -= 20;

  h1 = drawField(
    "Adı Soyadı",
    s(5).who_cover_expenses || "-",
    false,
    0
  );

   h2 = drawField(
    "Telefon",
    s(5).cover_expenses_phone || "-",
    false,
    CONTENT_WIDTH / 2
  );
  currentY -= Math.max(h1, h2) + 10;

  h1 = drawField(
    "Email",
    s(5).cover_expenses_email || "-",
    false,
    0
  );

  h2 = drawField(
    "Katkı Tutarı (Pound)",
    s(5).money_cover_expenses || "-",
    false,
    CONTENT_WIDTH / 2
  );
  currentY -= Math.max(h1, h2) + 10;

  h1 = drawField(
    "Katkı Sebebi",
    s(5).cover_expenses_reason || "-",
    true,
    0
  );
  currentY -= h1 + 10;
}


// ===============================
// VİZE REDDİ · GRUP · SEYAHAT SEBEBİ
// ===============================

drawSection("VİZE REDDİ VE SEYAHAT BİLGİLERİ");

// Daha önce vize reddi
h1 = drawField(
  "Daha Önce Vize Reddi Aldınız mı?",
  s(5).boolean_refused_visa || "-",
  false,
  0
);
currentY -= h1 + 10;

// Vize reddi detayları
if (s(5).boolean_refused_visa === "EVET") {

  h1 = drawField(
    "Vize Reddi Tarihi",
    s(5).when_refused || "-",
    false,
    0
  );
  currentY -= h1 + 10;

  h1 = drawField(
    "Vize Reddi Sebebi",
    s(5).refused_about || "-",
    true,
    0
  );
  currentY -= h1 + 10;
}

// Grup seyahati
h1 = drawField(
  "Grup ile Seyahat Edecek mi?",
  s(5).boolean_travel_group || "-",
  false,
  0
);
currentY -= h1 + 10;

if (s(5).boolean_travel_group === "EVET") {
  h1 = drawField(
    "Grup Adı",
    s(5).travel_group || "-",
    false,
    0
  );
  currentY -= h1 + 10;
}

// Seyahat sebebi
h1 = drawField(
  "Seyahat Sebebi",
  s(5).travel_reason || "-",
  false,
  0
);
currentY -= h1 + 10;

// Diğer seyahat sebebi
if (s(5).travel_reason === "DIGER") {
  h1 = drawField(
    "Seyahat Sebebi Açıklaması",
    s(5).travel_reason_other || "-",
    true,
    0
  );
  currentY -= h1 + 10;
}


// ===============================
// DAVETİYE BİLGİLERİ
// ===============================

drawSection("DAVETİYE BİLGİLERİ");

// Davetiye var mı?
 h1 = drawField(
  "Davetiye Var mı?",
  s(5).have_invitation || "-",
  false,
  0
);
currentY -= h1 + 10;

if (s(5).have_invitation === "EVET") {

  // Davetiye türü
  h1 = drawField(
    "Davetiye Türü",
    s(5).invitation_type || "-",
    false,
    0
  );
  currentY -= h1 + 10;

  // ===============================
  // BİREYSEL DAVETİYE
  // ===============================
  if (s(5).invitation_type === "BIREYSEL") {

    h1 = drawField(
      "Davet Eden Ad Soyad",
      s(5).inviter_fullname || "-",
      false,
      0
    );
     h2 = drawField(
      "Davet Eden Email",
      s(5).inviter_email || "-",
      false,
      CONTENT_WIDTH / 2
    );
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField(
      "Davet Eden Telefon",
      s(5).inviter_phone || "-",
      false,
      0
    );
    currentY -= h1 + 10;

    h1 = drawField(
      "Davet Eden Adres",
      s(5).inviter_address || "-",
      true,
      0
    );
    currentY -= h1 + 10;
  }

  // ===============================
  // ŞİRKET DAVETİYESİ
  // ===============================
  if (s(5).invitation_type === "SIRKET") {

    h1 = drawField(
      "Şirket Adı",
      s(5).company_name || "-",
      false,
      0
    );
     h2 = drawField(
      "Şirket Email",
      s(5).company_email || "-",
      false,
      CONTENT_WIDTH / 2
    );
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField(
      "Şirket Telefon",
      s(5).company_phone || "-",
      false,
      0
    );
    currentY -= h1 + 10;

    h1 = drawField(
      "Şirket Adresi",
      s(5).company_address || "-",
      true,
      0
    );
    currentY -= h1 + 10;
  }

  // Ortak davet sebebi
  h1 = drawField(
    "Davet Sebebi",
    s(5).invitation_reason || "-",
    true,
    0
  );
  currentY -= h1 + 10;
}


// ===============================
// BİRLEŞİK KRALLIK'TA AİLE
// ===============================

drawSection("BİRLEŞİK KRALLIK'TA AİLE BİLGİLERİ");

// Aile var mı?
h1 = drawField(
  "Birleşik Krallık’ta Aileniz Var mı?",
  s(5).has_family_in_uk || "-",
  false,
  0
);
currentY -= h1 + 10;

if (s(5).has_family_in_uk === "EVET") {

  // Yakınlık + Ad Soyad
  h1 = drawField(
    "Yakınlık Derecesi",
    s(5).uk_family_relation || "-",
    false,
    0
  );
  h2 = drawField(
    "Ad Soyad",
    s(5).uk_family_fullname || "-",
    false,
    CONTENT_WIDTH / 2
  );
  currentY -= Math.max(h1, h2) + 10;

  // Uyruk + Yasal durum
  h1 = drawField(
    "Uyruğu",
    s(5).uk_family_nationality || "-",
    false,
    0
  );
  h2 = drawField(
    "Birleşik Krallık'taki Yasal Durumu",
    s(5).uk_family_legal_status || "-",
    false,
    CONTENT_WIDTH / 2
  );
  currentY -= Math.max(h1, h2) + 10;

  // Geçici vize
  h1 = drawField(
    "Geçici Vizeye Sahip mi?",
    s(5).uk_family_has_temp_visa || "-",
    false,
    0
  );
  currentY -= h1 + 10;

  // Temelli UK’de mi?
  h1 = drawField(
    "Temelli Olarak UK’de mi?",
    s(5).uk_family_is_resident || "-",
    false,
    0
  );
  currentY -= h1 + 10;

  // Pasaport numarası (şartlı)
  if (
    s(5).uk_family_has_temp_visa === "EVET" ||
    s(5).uk_family_is_resident === "EVET"
  ) {
    h1 = drawField(
      "Pasaport Numarası",
      s(5).uk_family_passport || "-",
      false,
      0
    );
    currentY -= h1 + 10;
  }

  // Vize açıklaması (geçici vize yoksa)
  if (s(5).uk_family_has_temp_visa === "HAYIR") {
    h1 = drawField(
      "Vize Durumu Açıklaması",
      s(5).uk_family_visa_explanation || "-",
      true,
      0
    );
    currentY -= h1 + 10;
  }
}

drawFooter(currentPage, pageCount);

await drawHeader(currentPage);
drawSection("AİLE DIŞI BİRİYLE SEYAHAT");

// Aile dışı biriyle seyahat?
h1 = drawField(
  "Aile bireyleri dışında biriyle seyahat edecek misiniz?",
  s(5).travel_with_non_family || "-",
  false,
  0
);
currentY -= h1 + 10;

if (s(5).travel_with_non_family === "EVET") {

  // Ad Soyad
  h1 = drawField(
    "Seyahat Edeceğiniz Kişinin Adı Soyadı",
    s(5).travel_non_family_fullname || "-",
    false,
    0
  );
  currentY -= h1 + 10;

  // Yakınlık Derecesi
  h1 = drawField(
    "Yakınlık Derecesi",
    s(5).travel_non_family_relation || "-",
    false,
    0
  );
  currentY -= h1 + 10;

  // Telefon
  h1 = drawField(
    "Telefon",
    s(5).travel_non_family_phone || "-",
    false,
    0
  );
  currentY -= h1 + 10;
}


// ===============================
// SON 10 YILDA UK ZİYARETİ
// ===============================

drawSection("SON 10 YILDA BİRLEŞİK KRALLIK ZİYARETİ");

// Ana soru
h1 = drawField(
  "Son 10 yıl içinde Birleşik Krallık’ta bulundunuz mu?",
  s(5).uk_visited_last10 || "-",
  false,
  0
);
currentY -= h1 + 10;

if (s(5).uk_visited_last10 === "EVET") {

  // Kaç kere
  h1 = drawField(
    "Kaç Kere Bulundunuz?",
    s(5).uk_visited_count || "-",
    false,
    0
  );
  currentY -= h1 + 10;

  // Ziyaret amacı
  h1 = drawField(
    "Ziyaret Amacı",
    s(5).uk_visit_purpose || "-",
    false,
    0
  );
  currentY -= h1 + 10;

  // Ziyaret tarihleri
  h1 = drawField(
    "Ziyaret Tarihleri",
    s(5).uk_visit_dates || "-",
    false,
    0
  );
  currentY -= h1 + 10;
}

// =============================================
// SON 10 YILDA SCHENGEN / ABD / KANADA vb.
// =============================================
drawFooter(currentPage, pageCount);

drawSection("SON 10 YILDA DİĞER ÜLKE SEYAHATLERİ");

// Ana soru
h1 = drawField(
  "Son 10 yılda Schengen, ABD, Kanada, Avustralya, Yeni Zelanda veya İsviçre’ye seyahat ettiniz mi?",
  s(5).other_visited_countries || "-",
  false,
  0
);
currentY -= h1 + 10;

// Kaç seyahat varsa (BIR KEZ / 2-5 / 6+)
const travelCount = getTravelCardCount(s(5).other_visited_countries);

if (travelCount > 0) {

  checkSpace(30);

  currentPage.drawText(
    `Son ${travelCount} Seyahat`,
    { x: MARGIN, y: currentY, size: 10, font: boldFont, color: COLORS.primary }
  );
  currentY -= 20;

  for (let i = 1; i <= travelCount; i++) {

    checkSpace(60);

    currentPage.drawText(
      `${i}. Seyahat`,
      { x: MARGIN, y: currentY, size: 9, font: boldFont }
    );
    currentY -= 14;

    // Ülke
    h1 = drawField(
      "Ülke",
      s(5)[`lastTravel${i}_country`] || "-",
      false,
      0
    );
    currentY -= h1 + 6;

    // Amaç
    h1 = drawField(
      "Seyahat Amacı",
      s(5)[`lastTravel${i}_purpose`] || "-",
      false,
      0
    );
    currentY -= h1 + 6;

    // Ay / Yıl
    h1 = drawField(
      "Tarih (Ay / Yıl)",
      s(5)[`lastTravel${i}_monthYear`] || "-",
      false,
      0
    );
    currentY -= h1 + 6;

    // Süre
    h1 = drawField(
      "Süre (Gün)",
      s(5)[`lastTravel${i}_duration`] || "-",
      false,
      0
    );
    currentY -= h1 + 10;
  }
}


// ==================================================
// SON 10 YILDA DİĞER ÜLKELER (SCHENGEN DIŞI)
// ==================================================

drawSection("SON 10 YILDA DİĞER ÜLKELERE SEYAHAT");

// Ana soru
 h1 = drawField(
  "Schengen, ABD, Kanada vb. dışındaki ülkelere seyahat ettiniz mi?",
  s(5).boolean_traveled_adroad || "-",
  false,
  0
);
currentY -= h1 + 10;

// EVET ise listele
if (s(5).boolean_traveled_adroad === "EVET" &&
    Array.isArray(s(5).abroad_country) &&
    s(5).abroad_country.length > 0) {

  checkSpace(30);

  currentPage.drawText(
    `Diğer Ülkeler (${s(5).abroad_country.length} adet)`,
    { x: MARGIN, y: currentY, size: 10, font: boldFont, color: COLORS.primary }
  );
  currentY -= 20;

  s(5).abroad_country.forEach((item, index) => {

    checkSpace(70);

    currentPage.drawText(
      `${index + 1}. Ülke`,
      { x: MARGIN, y: currentY, size: 9, font: boldFont }
    );
    currentY -= 14;

    // Ülke adı
    h1 = drawField("Ülke", item.country || "-", false, 0);
    currentY -= h1 + 6;

    // Seyahat amacı
    h1 = drawField(
      "Seyahat Amacı",
      item.purpose || "-",
      false,
      0
    );
    currentY -= h1 + 6;

    // Giriş tarihi
    h1 = drawField(
      "Giriş Tarihi",
      item.start ? formatDateDMY(item.start) : "-",
      false,
      0
    );
    currentY -= h1 + 6;

    // Çıkış tarihi
    h1 = drawField(
      "Çıkış Tarihi",
      item.end ? formatDateDMY(item.end) : "-",
      false,
      0
    );
    currentY -= h1 + 10;
  });

} else if (s(5).boolean_traveled_adroad === "EVET") {

  // EVET ama liste yoksa
  h1 = drawField(
    "Detay",
    "Detay girilmemiş",
    false,
    0
  );
  currentY -= h1 + 10;
}


// ==================================================
// İNGİLTERE’DE TIBBİ TEDAVİ
// ==================================================

drawSection("İNGİLTERE’DE TIBBİ TEDAVİ");

// Ana soru
h1 = drawField(
  "İngiltere’de daha önce tıbbi tedavi gördünüz mü?",
  s(5).medical_treatment_uk || "-",
  false,
  0
);
currentY -= h1 + 10;

// EVET ise açıklama
if (s(5).medical_treatment_uk === "EVET") {
  h1 = drawField(
    "Tedavi Açıklaması",
    s(5).medical_treatment_details || "-",
    true,
    0
  );
  currentY -= h1 + 10;
}


// ==================================================
// ULUSAL SİGORTA NUMARASI
// ==================================================

drawSection("ULUSAL SİGORTA NUMARASI");

// Ana soru
h1 = drawField(
  "Ulusal Sigorta Numaranız var mı?",
  s(5).national_insurance_number_exist || "-",
  false,
  0
);
currentY -= h1 + 10;

// EVET ise numara
if (s(5).national_insurance_number_exist === "EVET") {
  h1 = drawField(
    "Ulusal Sigorta Numarası",
    s(5).national_insurance_number || "-",
    false,
    0
  );
  currentY -= h1 + 10;
}

// ==================================================
// UK KALMA İZNİ BAŞVURUSU (SON 10 YIL)
// ==================================================

drawSection("İNGİLTERE’DE KALMA İZNİ BAŞVURUSU");

// Ana soru
h1 = drawField(
  "Son 10 yılda İngiltere'de kalma izni için başvuruda bulundunuz mu?",
  s(5).uk_stay_application_last10 || "-",
  false,
  0
);
currentY -= h1 + 10;

// EVET ise açıklama
if (s(5).uk_stay_application_last10 === "EVET") {
  h1 = drawField(
    "Başvuru Açıklaması",
    s(5).uk_stay_application_explanation || "-",
    true,
    0
  );
  currentY -= h1 + 10;
}




// ==================================================
// UK KAMU FONU
// ==================================================
drawFooter(currentPage, pageCount);

drawSection("KAMU FONU BİLGİSİ");

h1 = drawField(
  "İngiltere'de herhangi bir kamu fonu aldınız mı?",
  s(5).uk_public_funds || "-",
  false,
  0
);
currentY -= h1 + 10;

if (s(5).uk_public_funds === "EVET") {
  h1 = drawField(
    "Alınan Kamu Fonu Açıklaması",
    s(5).uk_public_funds_details || "-",
    true,
    0
  );
  currentY -= h1 + 10;
}






// ==================================================
// VİZE REDDİ / SINIR DIŞI
// ==================================================

drawSection("VİZE REDDİ VE GİRİŞ YASAĞI");

h1 = drawField(
  "Herhangi bir ülkede vize reddi, sınır dışı edilme veya giriş yasağı yaşadınız mı?",
  s(5).visa_refused_or_banned || "-",
  false,
  0
);
currentY -= h1 + 10;

if (s(5).visa_refused_or_banned === "EVET") {
  h1 = drawField(
    "Detaylar (Ülke, Yıl, Sebep)",
    s(5).visa_refused_details || "-",
    true,
    0
  );
  currentY -= h1 + 10;
}

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
// const photoBase64 = await compressImage(files.photoFileBase64);
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
        } 
        // else if (type === "photo") {
        //     const maxWidth = CONTENT_WIDTH / 2;
        //     const maxHeight = PAGE_HEIGHT / 2;
        //     const scale = Math.min(maxWidth / embeddedImg.width, maxHeight / embeddedImg.height, 1);
        //     imgDims = { width: embeddedImg.width * scale, height: embeddedImg.height * scale };
        // }

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
// await addFileImage(photoBase64, "Biyometrik Fotoğraf", "photo");









    // --- Bitiş ---
    const pdfBytes = await pdfDoc.save();
    

    // --- Passport ve Photo base64 -> Buffer ---
    let passportBuffer = null;
    // let photoBuffer = null;

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
T.C. Kimlik No: ${f.steps[1].tcId || "-"}

Uyruğu: ${f.steps[1].natinolity || "-"}
Başka Ülke Vatandaşlığı: ${f.steps[1].other_nationality || "-"}

${
  f.steps[1].other_nationality === "EVET"
    ? `Vatandaşlık Alınan Ülke: ${f.steps[1].other_nationality_country || "-"}
Vatandaşlık Tarihleri: ${f.steps[1].other_nationality_start_date || "-"} / ${f.steps[1].other_nationality_end_date || "-"}`
    : ""
}

Cinsiyet: ${f.steps[1].gender || "-"}
Medeni Durum: ${f.steps[1].maritalStatus || "-"}

${
  ["EVLI", "DUL", "BOSANMIS"].includes(f.steps[1].maritalStatus)
    ? `Eş / Eski Eş Adı Soyadı: ${f.steps[1].partner_full_name || "-"}`
    : ""
}

${
  f.steps[1].gender === "KADIN" && f.steps[1].maritalStatus === "EVLI"
    ? `Evlenmeden Önceki Soyadı: ${f.steps[1].maidenName || "-"}`
    : ""
}

${
  f.steps[1].maritalStatus === "EVLI"
    ? `Eşinin Doğum Tarihi: ${f.steps[1].partner_birth_date || "-"}
Eşinin Uyruğu: ${f.steps[1].partner_nationality || "-"}
Eşiyle Birlikte Yaşıyor mu: ${f.steps[1].partner_lives_with_you || "-"}
Eşiyle Seyahat Edecek mi: ${f.steps[1].partner_travel_with_you || "-"}
Eşinin Pasaport No: ${f.steps[1].partner_passport_number || "-"}`
    : ""
}

Doğum Tarihi: ${f.steps[1].birthDate || "-"}
Doğum Yeri: ${f.steps[1].birthPlace || "-"}

Telefon: ${f.steps[1].phone_number || "-"}
İkinci Telefon: ${f.steps[1].phone_number2 || "-"}

E-posta: ${f.steps[1].email || "-"}
İkinci E-posta: ${f.steps[1].email2 || "-"}

Adres: ${f.steps[1].home_address || "-"}
Posta Kodu: ${f.steps[1].post_code || "-"}

Ev Durumu: ${f.steps[1].home_owner || "-"}
Evde Kalma Süresi: ${f.steps[1].residence_duration || "-"}

${
  f.steps[1].home_owner === "DIGER"
    ? `Ev Sahibi Açıklama: ${f.steps[1].home_owner_info || "-"}`
    : ""
}

${
  f.steps[1].residence_months_total !== null &&
  f.steps[1].residence_months_total < 12
    ? `Son 2 Yıldaki Önceki Adresler:
${f.steps[1].past_addresses || "-"}`
    : ""
}


-- Aile Bilgileri --

Anne Adı Soyadı: ${f.steps[2].mother_full_name || "-"}
Anne Doğum Tarihi: ${f.steps[2].mother_birth_date || "-"}
Anne Uyruğu: ${f.steps[2].mother_nationality || "-"}
Anne Sizinle Seyahat Edecek mi?: ${f.steps[2].mother_travel_with_you || "-"}

Baba Adı Soyadı: ${f.steps[2].father_full_name || "-"}
Baba Doğum Tarihi: ${f.steps[2].father_birth_date || "-"}
Baba Uyruğu: ${f.steps[2].father_nationality || "-"}
Baba Sizinle Seyahat Edecek mi?: ${f.steps[2].father_travel_with_you || "-"}

Çocuğunuz Var mı?: ${f.steps[2].boolean_child || "-"}

Çocuk Sayısı: ${
  f.steps[2].boolean_child === "EVET"
    ? (f.steps[2].child_count || "-")
    : "-"
}

Çocuklar:
${
  f.steps[2].boolean_child === "EVET" &&
  (f.steps[2].child_names || []).length > 0
    ? f.steps[2].child_names
        .map(
          (name, idx) => `
${idx + 1}. Çocuk
Ad Soyad: ${name || "-"}
Doğum Tarihi: ${f.steps[2].child_birth_date?.[idx] || "-"}
Sizinle Seyahat Edecek mi?: ${f.steps[2].child_travel_with_you?.[idx] || "-"}
Sizinle Birlikte Yaşıyor mu?: ${f.steps[2].child_live?.[idx] || "-"}
İngiltere Vizesi Var mı?: ${f.steps[2].child_visa?.[idx] || "-"}
Pasaport No: ${f.steps[2].child_passport_numbers?.[idx] || "-"}
`
        )
        .join("\n")
    : "-"
}



-- Pasaport --

Numara: ${f.steps[3].passport_number || "-"}

Başlangıç / Bitiş: ${
  f.steps[3].Passport_start_date
    ? formatDateDMY(f.steps[3].Passport_start_date)
    : "-"
} / ${
  f.steps[3].Passport_end_date
    ? formatDateDMY(f.steps[3].Passport_end_date)
    : "-"
}

Veriliş: ${f.steps[3].passport_issuing_authority || "-"}

TC Kart Bitiş Tarihi: ${
  f.steps[3].tc_card_end_date
    ? formatDateDMY(f.steps[3].tc_card_end_date)
    : "-"
}



-- Çalışma ve Maddi Durum --

Çalışma Durumu: ${f.steps[4].boolean_work || "-"}

${
["CALISIYOR","EMEKLI","CALISMAYAN"].includes(f.steps[4].boolean_work)
? `
İş Yeri Adı: ${f.steps[4].work_name || "-"}
İş Yeri Adresi: ${f.steps[4].work_address || "-"}
İş Yeri Telefonu: ${f.steps[4].work_phone || "-"}
Görev / Ünvan: ${f.steps[4].worker_title || "-"}
Toplam Çalışma Süresi: ${f.steps[4].work_year || "-"}
${f.steps[4].boolean_work === "CALISIYOR" ? `İş Yeri Kendi: ${f.steps[4].own_work || "-"}` : ""}
`
: ""
}

Aylık Gelir: ${f.steps[4].monthly_money || "-"}
Birikim: ${f.steps[4].savings || "-"}
Yan Gelir: ${f.steps[4].sideline || "-"}
Aylık Harcama: ${f.steps[4].monthly_expenditure_amount || "-"}

${
f.steps[4].boolean_work === "OGRENCI"
? `
Okul Adı: ${f.steps[4].school_name || "-"}
Bölüm: ${f.steps[4].school_department || "-"}
Okuma Süresi: ${f.steps[4].school_year || "-"}
`
: ""
}


-- SEYAHAT BİLGİLERİ --

İngiltere Adresi:
${f.steps[5].uk_address || "-"}

Seyahat Tarihleri:
${formatDateDMY(f.steps[5].travel_start_date)} / ${formatDateDMY(f.steps[5].travel_end_date)}

Seyahat Sebebi:
${
  f.steps[5].travel_reason === "DIGER"
    ? `Diğer: ${f.steps[5].travel_reason_other || "-"}`
    : (f.steps[5].travel_reason || "-")
}

Grup ile seyahat:
${f.steps[5].boolean_travel_group || "-"}

${
  f.steps[5].boolean_travel_group === "EVET"
    ? `Grup Adı: ${f.steps[5].travel_group || "-"}`
    : ""
}

İngiltere’de harcanması planlanan tutar (GBP):
${f.steps[5].spend_pound || "-"}

Masrafları siz mi karşılayacaksınız:
${f.steps[5].boolean_cover_expenses || "-"}

${
  f.steps[5].boolean_cover_expenses === "HAYIR"
    ? `
Masrafları Karşılayan Kişi:
  - Ad Soyad: ${f.steps[5].who_cover_expenses || "-"}
  - Telefon: ${f.steps[5].cover_expenses_phone || "-"}
  - Email: ${f.steps[5].cover_expenses_email || "-"}
  - Katkı Tutarı (GBP): ${f.steps[5].money_cover_expenses || "-"}
  - Katkı Sebebi: ${f.steps[5].cover_expenses_reason || "-"}
`
    : ""
}

--------------------------------------------------

Aile dışı biriyle seyahat edecek misiniz:
${f.steps[5].travel_with_non_family || "-"}

${
  f.steps[5].travel_with_non_family === "EVET"
    ? `
Seyahat Ettiğiniz Kişi:
  - Ad Soyad: ${f.steps[5].travel_non_family_fullname || "-"}
  - Yakınlık Derecesi: ${f.steps[5].travel_non_family_relation || "-"}
  - Telefon: ${f.steps[5].travel_non_family_phone || "-"}
`
    : ""
}

--------------------------------------------------

Son 10 yıl içinde Birleşik Krallık’ta bulundunuz mu:
${f.steps[5].uk_visited_last10 || "-"}

${
  f.steps[5].uk_visited_last10 === "EVET"
    ? `
UK Ziyaret Bilgileri:
  - Kaç kere: ${f.steps[5].uk_visited_count || "-"}
  - Ziyaret Amacı: ${f.steps[5].uk_visit_purpose || "-"}
  - Ziyaret Tarihleri: ${f.steps[5].uk_visit_dates || "-"}
`
    : ""
}

--------------------------------------------------
Avustralya / Kanada / ABD / Yeni Zelanda / İsviçre / Schengen Ülkeleri
(Son 10 Yıl İçinde)
--------------------------------------------------

Seyahat Durumu: ${f.steps[5].other_visited_countries || "-"}

${
  getTravelCardCount(f.steps[5].other_visited_countries) > 0
    ? `
Seyahat Detayları:
${Array.from({
  length: getTravelCardCount(f.steps[5].other_visited_countries),
})
  .map((_, index) => {
    return `
  ${index + 1}. Seyahat
     - Ülke: ${f.steps[5][`lastTravel${index + 1}_country`] || "-"}
     - Seyahat Amacı: ${f.steps[5][`lastTravel${index + 1}_purpose`] || "-"}
     - Tarih (Ay/Yıl): ${f.steps[5][`lastTravel${index + 1}_monthYear`] || "-"}
     - Süre (Gün): ${f.steps[5][`lastTravel${index + 1}_duration`] || "-"}`;
  })
  .join("\n")}
`
    : ""
}

--------------------------------------------------
Yukarıdakiler Dışında Başka Ülkelere Seyahat
(Son 10 Yıl)
--------------------------------------------------

Seyahat Var mı: ${f.steps[5].boolean_traveled_adroad || "-"}

${
  f.steps[5].boolean_traveled_adroad === "EVET"
    ? `
Gidilen Ülkeler:
${(f.steps[5].abroad_country || []).length > 0
  ? (f.steps[5].abroad_country || [])
      .map((item, index) => {
        return `
  ${index + 1}. Ülke
     - Ülke Adı: ${item.country || "-"}
     - Seyahat Amacı: ${item.purpose || "-"}
     - Giriş Tarihi: ${formatDateDMY(item.start) || "-"}
     - Çıkış Tarihi: ${formatDateDMY(item.end) || "-"}`;
      })
      .join("\n")
  : "  - Detay girilmemiş"}
`
    : ""
}


==================================================
DAVETİYE BİLGİLERİ
==================================================

Davetiye var mı:
${f.steps[5].have_invitation || "-"}

${
  f.steps[5].have_invitation === "EVET"
    ? `
Davetiye Türü:
${f.steps[5].invitation_type || "-"}

${
  f.steps[5].invitation_type === "BIREYSEL"
    ? `
Davet Eden Kişi:
  - Ad Soyad: ${f.steps[5].inviter_fullname || "-"}
  - Email: ${f.steps[5].inviter_email || "-"}
  - Telefon: ${f.steps[5].inviter_phone || "-"}
  - Adres: ${f.steps[5].inviter_address || "-"}
`
    : ""
}

${
  f.steps[5].invitation_type === "SIRKET"
    ? `
Davet Eden Şirket:
  - Şirket Adı: ${f.steps[5].company_name || "-"}
  - Email: ${f.steps[5].company_email || "-"}
  - Telefon: ${f.steps[5].company_phone || "-"}
  - Adres: ${f.steps[5].company_address || "-"}
`
    : ""
}

Davet Sebebi:
${f.steps[5].invitation_reason || "-"}
`
    : ""
}

==================================================
BİRLEŞİK KRALLIK AİLE BİLGİLERİ
==================================================

Birleşik Krallık’ta aile üyesi var mı:
${f.steps[5].has_family_in_uk || "-"}

${
  f.steps[5].has_family_in_uk === "EVET"
    ? `
Aile Üyesi Bilgileri:
  - Yakınlık: ${f.steps[5].uk_family_relation || "-"}
  - Ad Soyad: ${f.steps[5].uk_family_fullname || "-"}
  - Uyruğu: ${f.steps[5].uk_family_nationality || "-"}
  - Yasal Durumu: ${f.steps[5].uk_family_legal_status || "-"}
  - Geçici Vize: ${f.steps[5].uk_family_has_temp_visa || "-"}
  - Temelli UK’de mi: ${f.steps[5].uk_family_is_resident || "-"}
  - Pasaport No: ${f.steps[5].uk_family_passport || "-"}
  - Açıklama: ${f.steps[5].uk_family_visa_explanation || "-"}
`
    : ""
}

==================================================
UK GEÇMİŞİ / KAMU / SİGORTA
==================================================

İngiltere’de tıbbi tedavi gördünüz mü:
${f.steps[5].medical_treatment_uk || "-"}

${
  f.steps[5].medical_treatment_uk === "EVET"
    ? `Tedavi Açıklaması: ${f.steps[5].medical_treatment_details || "-"}`
    : ""
}

Ulusal Sigorta Numaranız var mı:
${f.steps[5].national_insurance_number_exist || "-"}

${
  f.steps[5].national_insurance_number_exist === "EVET"
    ? `Ulusal Sigorta Numarası: ${f.steps[5].national_insurance_number || "-"}`
    : ""
}

Son 10 yılda İngiltere’de kalma izni başvurusu:
${f.steps[5].uk_stay_application_last10 || "-"}

${
  f.steps[5].uk_stay_application_last10 === "EVET"
    ? `Açıklama: ${f.steps[5].uk_stay_application_explanation || "-"}`
    : ""
}

Son 10 yılda İngiltere vizesi aldınız mı:
${f.steps[5].uk_visa_last10 || "-"}

${
  f.steps[5].uk_visa_last10 === "EVET"
    ? `Vize Veriliş Tarihi: ${formatDateDMY(f.steps[5].uk_visa_issue_date)}`
    : ""
}

İngiltere’de kamu fonu aldınız mı:
${f.steps[5].uk_public_funds || "-"}

${
  f.steps[5].uk_public_funds === "EVET"
    ? `Kamu Fonu Açıklaması: ${f.steps[5].uk_public_funds_details || "-"}`
    : ""
}

Herhangi bir ülkede vize reddi / sınır dışı / giriş yasağı:
${f.steps[5].visa_refused_or_banned || "-"}

${
  f.steps[5].visa_refused_or_banned === "EVET"
    ? `Detaylar: ${f.steps[5].visa_refused_details || "-"}`
    : ""
}

--------------------------------------------------
ESKİ VİZE REDDİ SORUSU
--------------------------------------------------

Daha önce vize reddi aldınız mı:
${f.steps[5].boolean_refused_visa || "-"}

${
  f.steps[5].boolean_refused_visa === "EVET"
    ? `
Reddedilme Tarihi: ${formatDateDMY(f.steps[5].when_refused)}
Reddin Sebebi: ${f.steps[5].refused_about || "-"}`
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
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse:collapse;width:100%;background-color:#f9f9f9;">
  <tbody>

    <tr><th style="background-color:#e0e0e0;">Ad Soyad</th><td>${s1.fullName || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">T.C. Kimlik No</th><td>${s1.tcId || "-"}</td></tr>

    <tr><th style="background-color:#e0e0e0;">Uyruğu</th><td>${s1.natinolity || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Başka Ülke Vatandaşlığı</th><td>${s1.other_nationality || "-"}</td></tr>

    ${
      s1.other_nationality === "EVET"
        ? `
        <tr><th style="background-color:#e0e0e0;">Vatandaşlık Alınan Ülke</th><td>${s1.other_nationality_country || "-"}</td></tr>
        <tr><th style="background-color:#e0e0e0;">Vatandaşlık Tarihleri</th><td>${s1.other_nationality_start_date || "-"} / ${s1.other_nationality_end_date || "-"}</td></tr>
        `
        : ""
    }

    <tr><th style="background-color:#e0e0e0;">Cinsiyet</th><td>${s1.gender || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Medeni Durum</th><td>${s1.maritalStatus || "-"}</td></tr>

    ${
      ["EVLI", "DUL", "BOSANMIS"].includes(s1.maritalStatus)
        ? `<tr><th style="background-color:#e0e0e0;">Eş / Eski Eş Adı Soyadı</th><td>${s1.partner_full_name || "-"}</td></tr>`
        : ""
    }

    ${
      s1.gender === "KADIN" && s1.maritalStatus === "EVLI"
        ? `<tr><th style="background-color:#e0e0e0;">Evlenmeden Önceki Soyadı</th><td>${s1.maidenName || "-"}</td></tr>`
        : ""
    }

    ${
      s1.maritalStatus === "EVLI"
        ? `
        <tr><th style="background-color:#e0e0e0;">Eşinin Doğum Tarihi</th><td>${s1.partner_birth_date || "-"}</td></tr>
        <tr><th style="background-color:#e0e0e0;">Eşinin Uyruğu</th><td>${s1.partner_nationality || "-"}</td></tr>
        <tr><th style="background-color:#e0e0e0;">Eşiyle Birlikte Yaşıyor mu</th><td>${s1.partner_lives_with_you || "-"}</td></tr>
        <tr><th style="background-color:#e0e0e0;">Eşiyle Seyahat Edecek mi</th><td>${s1.partner_travel_with_you || "-"}</td></tr>
        <tr><th style="background-color:#e0e0e0;">Eşinin Pasaport No</th><td>${s1.partner_passport_number || "-"}</td></tr>
        `
        : ""
    }

    <tr><th style="background-color:#e0e0e0;">Doğum Tarihi</th><td>${s1.birthDate || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Doğum Yeri</th><td>${s1.birthPlace || "-"}</td></tr>

    <tr><th style="background-color:#e0e0e0;">Telefon</th><td>${s1.phone_number || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">İkinci Telefon</th><td>${s1.phone_number2 || "-"}</td></tr>

    <tr><th style="background-color:#e0e0e0;">E-posta</th><td>${s1.email || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">İkinci E-posta</th><td>${s1.email2 || "-"}</td></tr>

    <tr><th style="background-color:#e0e0e0;">Adres</th><td>${s1.home_address || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Posta Kodu</th><td>${s1.post_code || "-"}</td></tr>

    <tr><th style="background-color:#e0e0e0;">Ev Durumu</th><td>${s1.home_owner || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Evde Kalma Süresi</th><td>${s1.residence_duration || "-"}</td></tr>

    ${
      s1.home_owner === "DIGER"
        ? `<tr><th style="background-color:#e0e0e0;">Ev Sahibi Açıklama</th><td>${s1.home_owner_info || "-"}</td></tr>`
        : ""
    }

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

    <!-- ANNE -->
    <tr>
      <th style="background-color:#e0e0e0;">Anne Adı Soyadı</th>
      <td>${f.steps[2].mother_full_name || "-"}</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">Anne Doğum Tarihi</th>
      <td>${f.steps[2].mother_birth_date || "-"}</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">Anne Uyruğu</th>
      <td>${f.steps[2].mother_nationality || "-"}</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">Anne Sizinle Seyahat Edecek mi?</th>
      <td>${f.steps[2].mother_travel_with_you || "-"}</td>
    </tr>

    <!-- BABA -->
    <tr>
      <th style="background-color:#e0e0e0;">Baba Adı Soyadı</th>
      <td>${f.steps[2].father_full_name || "-"}</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">Baba Doğum Tarihi</th>
      <td>${f.steps[2].father_birth_date || "-"}</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">Baba Uyruğu</th>
      <td>${f.steps[2].father_nationality || "-"}</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">Baba Sizinle Seyahat Edecek mi?</th>
      <td>${f.steps[2].father_travel_with_you || "-"}</td>
    </tr>

    <!-- ÇOCUK -->
    <tr>
      <th style="background-color:#e0e0e0;">Çocuğunuz Var mı?</th>
      <td>${f.steps[2].boolean_child || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Çocuk Sayısı</th>
      <td>
        ${
          f.steps[2].boolean_child === "EVET"
            ? (f.steps[2].child_count || "-")
            : "-"
        }
      </td>
    </tr>

    <!-- ÇOCUKLAR DETAY -->
    <tr>
      <th style="background-color:#e0e0e0;">Çocuklar</th>
      <td>
        ${
          f.steps[2].boolean_child === "EVET" &&
          (f.steps[2].child_names || []).length > 0
            ? f.steps[2].child_names
                .map(
                  (name, idx) => `
                  <div style="margin-bottom:8px;">
                    <strong>${idx + 1}. Çocuk</strong><br/>
                    Ad Soyad: ${name || "-"}<br/>
                    Doğum Tarihi: ${f.steps[2].child_birth_date?.[idx] || "-"}<br/>
                    Sizinle Seyahat: ${f.steps[2].child_travel_with_you?.[idx] || "-"}<br/>
                    Birlikte Yaşıyor: ${f.steps[2].child_live?.[idx] || "-"}<br/>
                    İngiltere Vizesi: ${f.steps[2].child_visa?.[idx] || "-"}<br/>
                    Pasaport No: ${f.steps[2].child_passport_numbers?.[idx] || "-"}
                  </div>
                `
                )
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
        ${
          f.steps[3].Passport_start_date
            ? formatDateDMY(f.steps[3].Passport_start_date)
            : "-"
        }
        /
        ${
          f.steps[3].Passport_end_date
            ? formatDateDMY(f.steps[3].Passport_end_date)
            : "-"
        }
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Veriliş</th>
      <td>${f.steps[3].passport_issuing_authority || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">TC Kart Bitiş Tarihi</th>
      <td>
        ${
          f.steps[3].tc_card_end_date
            ? formatDateDMY(f.steps[3].tc_card_end_date)
            : "-"
        }
      </td>
    </tr>
  </tbody>
</table>


<h3>Çalışma ve Maddi Durum</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse:collapse;width:100%;">
<tbody>

<tr><th>Çalışma Durumu</th><td>${f.steps[4].boolean_work || "-"}</td></tr>

${
["CALISIYOR","EMEKLI","CALISMAYAN"].includes(f.steps[4].boolean_work)
? `
<tr><th>İş Yeri Adı</th><td>${f.steps[4].work_name || "-"}</td></tr>
<tr><th>İş Yeri Adresi</th><td>${f.steps[4].work_address || "-"}</td></tr>
<tr><th>İş Yeri Telefonu</th><td>${f.steps[4].work_phone || "-"}</td></tr>
<tr><th>Görev / Ünvan</th><td>${f.steps[4].worker_title || "-"}</td></tr>
<tr><th>Çalışma Süresi</th><td>${f.steps[4].work_year || "-"}</td></tr>
${f.steps[4].boolean_work === "CALISIYOR"
  ? `<tr><th>İş Yeri Kendi</th><td>${f.steps[4].own_work || "-"}</td></tr>`
  : ""
}
`
: ""
}

<tr><th>Aylık Gelir</th><td>${f.steps[4].monthly_money || "-"}</td></tr>
<tr><th>Birikim</th><td>${f.steps[4].savings || "-"}</td></tr>
<tr><th>Yan Gelir</th><td>${f.steps[4].sideline || "-"}</td></tr>
<tr><th>Aylık Harcama</th><td>${f.steps[4].monthly_expenditure_amount || "-"}</td></tr>

${
f.steps[4].boolean_work === "OGRENCI"
? `
<tr><th>Okul Adı</th><td>${f.steps[4].school_name || "-"}</td></tr>
<tr><th>Bölüm</th><td>${f.steps[4].school_department || "-"}</td></tr>
<tr><th>Okuma Süresi</th><td>${f.steps[4].school_year || "-"}</td></tr>
`
: ""
}

</tbody>
</table>



<h3>Seyahat & UK Bilgileri</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse:collapse;width:100%;">
<tbody>

<tr>
  <th>İngiltere’de Kalınacak Adres</th>
  <td>${f.steps[5].uk_address || "-"}</td>
</tr>

<tr>
  <th>Seyahat Tarihleri</th>
  <td>
    ${formatDateDMY(f.steps[5].travel_start_date) || "-"} /
    ${formatDateDMY(f.steps[5].travel_end_date) || "-"}
  </td>
</tr>

<tr>
  <th>Seyahat Sebebi</th>
  <td>${
    f.steps[5].travel_reason === "DIGER"
      ? `Diğer: ${f.steps[5].travel_reason_other || "-"}`
      : (f.steps[5].travel_reason || "-")
  }</td>
</tr>

<tr>
  <th>Grup ile Seyahat</th>
  <td>${f.steps[5].boolean_travel_group || "-"}</td>
</tr>

${
  f.steps[5].boolean_travel_group === "EVET"
    ? `
<tr>
  <th>Grup Adı</th>
  <td>${f.steps[5].travel_group || "-"}</td>
</tr>`
    : ""
}

<tr>
  <th>Aile Dışı Biriyle Seyahat</th>
  <td>${f.steps[5].travel_with_non_family || "-"}</td>
</tr>

${
  f.steps[5].travel_with_non_family === "EVET"
    ? `
<tr>
  <th>Seyahat Edilen Kişi</th>
  <td>
    Ad Soyad: ${f.steps[5].travel_non_family_fullname || "-"}<br/>
    Yakınlık: ${f.steps[5].travel_non_family_relation || "-"}<br/>
    Telefon: ${f.steps[5].travel_non_family_phone || "-"}
  </td>
</tr>`
    : ""
}

<tr>
  <th>Son 10 Yılda UK Ziyareti</th>
  <td>${f.steps[5].uk_visited_last10 || "-"}</td>
</tr>

${
  f.steps[5].uk_visited_last10 === "EVET"
    ? `
<tr>
  <th>UK Ziyaret Detayı</th>
  <td>
    Kaç Kez: ${f.steps[5].uk_visited_count || "-"}<br/>
    Amaç: ${f.steps[5].uk_visit_purpose || "-"}<br/>
    Tarihler: ${f.steps[5].uk_visit_dates || "-"}
  </td>
</tr>`
    : ""
}

<tr>
  <th>Son 10 Yılda Diğer Ülkeler (Schengen vb.)</th>
  <td>${f.steps[5].other_visited_countries || "-"}</td>
</tr>

${
  ["BIR KEZ", "2-5 KEZ", "6 VE UZERI"].includes(f.steps[5].other_visited_countries)
    ? Array.from({ length: getTravelCardCount(f.steps[5].other_visited_countries) })
        .map((_, i) => `
<tr>
  <th>Son ${i + 1}. Seyahat</th>
  <td>
    Ülke: ${f.steps[5][`lastTravel${i + 1}_country`] || "-"}<br/>
    Amaç: ${f.steps[5][`lastTravel${i + 1}_purpose`] || "-"}<br/>
    Tarih (Ay/Yıl): ${f.steps[5][`lastTravel${i + 1}_monthYear`] || "-"}<br/>
    Süre (Gün): ${f.steps[5][`lastTravel${i + 1}_duration`] || "-"}
  </td>
</tr>`).join("")
    : ""
}

<tr>
  <th>Son 10 Yılda Diğer Ülkeler (UK / ABD / Kanada / Schengen Dışı)</th>
  <td>${f.steps[5].boolean_traveled_adroad || "-"}</td>
</tr>

${
  f.steps[5].boolean_traveled_adroad === "EVET"
    ? `
<tr>
  <th>Gidilen Ülkeler Detayı</th>
  <td>
    ${
      (f.steps[5].abroad_country || []).length > 0
        ? (f.steps[5].abroad_country || [])
            .map((item, index) => `
              <strong>${index + 1}. Ülke</strong><br/>
              Ülke Adı: ${item.country || "-"}<br/>
              Seyahat Amacı: ${item.purpose || "-"}<br/>
              Giriş Tarihi: ${formatDateDMY(item.start) || "-"}<br/>
              Çıkış Tarihi: ${formatDateDMY(item.end) || "-"}
            `)
            .join("<br/><br/>")
        : "-"
    }
  </td>
</tr>`
    : ""
}


<tr>
  <th>Planlanan Harcama (GBP)</th>
  <td>${f.steps[5].spend_pound || "-"}</td>
</tr>

<tr>
  <th>Masrafları Kim Karşılıyor?</th>
  <td>${f.steps[5].boolean_cover_expenses || "-"}</td>
</tr>

${
  f.steps[5].boolean_cover_expenses === "HAYIR"
    ? `
<tr>
  <th>Sponsor Bilgileri</th>
  <td>
    İsim: ${f.steps[5].who_cover_expenses || "-"}<br/>
    Telefon: ${f.steps[5].cover_expenses_phone || "-"}<br/>
    Email: ${f.steps[5].cover_expenses_email || "-"}<br/>
    Katkı: ${f.steps[5].money_cover_expenses || "-"} GBP<br/>
    Sebep: ${f.steps[5].cover_expenses_reason || "-"}
  </td>
</tr>`
    : ""
}

<tr>
  <th>Davetiyeniz Var mı?</th>
  <td>${f.steps[5].have_invitation || "-"}</td>
</tr>

${
  f.steps[5].have_invitation === "EVET"
    ? `
<tr>
  <th>Davetiye Türü</th>
  <td>${f.steps[5].invitation_type || "-"}</td>
</tr>
<tr>
  <th>Davet Eden</th>
  <td>
    ${
      f.steps[5].invitation_type === "BIREYSEL"
        ? `
        ${f.steps[5].inviter_fullname}<br/>
        ${f.steps[5].inviter_email}<br/>
        ${f.steps[5].inviter_phone}<br/>
        ${f.steps[5].inviter_address}`
        : `
        ${f.steps[5].company_name}<br/>
        ${f.steps[5].company_email}<br/>
        ${f.steps[5].company_phone}<br/>
        ${f.steps[5].company_address}`
    }
  </td>
</tr>
<tr>
  <th>Davet Sebebi</th>
  <td>${f.steps[5].invitation_reason || "-"}</td>
</tr>`
    : ""
}

<tr>
  <th>UK’de Aile Var mı?</th>
  <td>${f.steps[5].has_family_in_uk || "-"}</td>
</tr>

${
  f.steps[5].has_family_in_uk === "EVET"
    ? `
<tr>
  <th>UK Aile Bilgisi</th>
  <td>
    ${f.steps[5].uk_family_relation}<br/>
    ${f.steps[5].uk_family_fullname}<br/>
    ${f.steps[5].uk_family_nationality}<br/>
    ${f.steps[5].uk_family_legal_status}<br/>
    Geçici Vize: ${f.steps[5].uk_family_has_temp_visa}<br/>
    Temelli: ${f.steps[5].uk_family_is_resident}<br/>
    Pasaport: ${f.steps[5].uk_family_passport}<br/>
    Açıklama: ${f.steps[5].uk_family_visa_explanation}
  </td>
</tr>`
    : ""
}

<tr>
  <th>UK’de Tıbbi Tedavi</th>
  <td>${f.steps[5].medical_treatment_uk || "-"}</td>
</tr>

${
  f.steps[5].medical_treatment_uk === "EVET"
    ? `
<tr>
  <th>Tedavi Açıklaması</th>
  <td>${f.steps[5].medical_treatment_details || "-"}</td>
</tr>`
    : ""
}

<tr>
  <th>Ulusal Sigorta Numarası</th>
  <td>${f.steps[5].national_insurance_number_exist || "-"}</td>
</tr>

${
  f.steps[5].national_insurance_number_exist === "EVET"
    ? `
<tr>
  <th>Sigorta No</th>
  <td>${f.steps[5].national_insurance_number || "-"}</td>
</tr>`
    : ""
}

<tr>
  <th>UK Kalma İzni Başvurusu</th>
  <td>${f.steps[5].uk_stay_application_last10 || "-"}</td>
</tr>

${
  f.steps[5].uk_stay_application_last10 === "EVET"
    ? `
<tr>
  <th>Açıklama</th>
  <td>${f.steps[5].uk_stay_application_explanation || "-"}</td>
</tr>`
    : ""
}

<tr>
  <th>UK Vizesi (Son 10 Yıl)</th>
  <td>${f.steps[5].uk_visa_last10 || "-"}</td>
</tr>

${
  f.steps[5].uk_visa_last10 === "EVET"
    ? `
<tr>
  <th>Vize Tarihi</th>
  <td>${formatDateDMY(f.steps[5].uk_visa_issue_date)}</td>
</tr>`
    : ""
}

<tr>
  <th>UK Kamu Fonu</th>
  <td>${f.steps[5].uk_public_funds || "-"}</td>
</tr>

${
  f.steps[5].uk_public_funds === "EVET"
    ? `
<tr>
  <th>Fon Açıklaması</th>
  <td>${f.steps[5].uk_public_funds_details || "-"}</td>
</tr>`
    : ""
}

<tr>
  <th>Vize Reddi / Giriş Yasağı</th>
  <td>${f.steps[5].visa_refused_or_banned || "-"}</td>
</tr>

${
  f.steps[5].visa_refused_or_banned === "EVET"
    ? `
<tr>
  <th>Detay</th>
  <td>${f.steps[5].visa_refused_details || "-"}</td>
</tr>`
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