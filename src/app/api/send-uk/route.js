import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit"; 
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import sharp from "sharp"; 

const FONT_PATH = path.join(
  process.cwd(),
  "public",
  "fonts",
  "Inter_18pt-Regular.ttf"
);

const FONT_BOLD_PATH = path.join(
  process.cwd(),
  "public",
  "fonts",
  "Inter_18pt-Bold.ttf"
);
const LOGO_PATH = path.join(process.cwd(), "public", "images", "ayalogoxl.png");

const fontCache = { checked: false, bytes: null };
const fontBoldCache = { checked: false, bytes: null };
const logoCache = { checked: false, bytes: null };

function getCachedFileBytes(filePath, cache) {
  if (cache.checked) return cache.bytes;
  cache.checked = true;
  if (!fs.existsSync(filePath)) return null;
  try {
    cache.bytes = fs.readFileSync(filePath);
    return cache.bytes;
  } catch (err) {
    console.warn("Dosya okunamadı, cache boş:", filePath, err);
    return null;
  }
}
function getTravelCardCount(value) {
  switch (value) {
    case "1 KEZ":
      return 1;
    case "2 KEZ":
      return 2;
        case "3 KEZ":
      return 3;
        case "4 KEZ":
      return 4;
        case "5 KEZ":
      return 5;
    case "6 VE UZERI":
      return 5;
    default:
      return 0;
  }
}

async function compressImage(base64, options = {}) {
  try {
    if (!base64) return base64;
    const {
      maxWidth = 1200,
      quality = 60,
      skipBelowBytes = 200 * 1024,
    } = options;

    const cleanBase64 = base64.includes(",") ? base64.split(",")[1] : base64;
    const inputBuffer = Buffer.from(cleanBase64, "base64");

    if (inputBuffer.length <= skipBelowBytes) {
      return cleanBase64;
    }

    let metadata = null;
    try {
      metadata = await sharp(inputBuffer).metadata();
    } catch {
      metadata = null;
    }

    if (metadata?.width && metadata.width <= maxWidth) {
      return cleanBase64;
    }

    const compressed = await sharp(inputBuffer)
      .resize({ width: maxWidth, withoutEnlargement: true }) // max maxWidth px
      .jpeg({ quality }) // kalite %quality
      .toBuffer();

    return compressed.toString("base64");
  } catch (err) {
    console.error("Image compression failed:", err);
    return base64.includes(",") ? base64.split(",")[1] : base64; // hata olursa orijinali kullan
  }
}

function formatDateDMY(dateString) {
  if (!dateString || dateString.length < 10) return "-";

  const [y, m, d] = dateString.split("-");
  return `${d}/${m}/${y}`;
}


export async function POST(req) {
  try {
    const formData = await req.json();
    const steps = formData.steps || {};
    const files = steps["6"] || {};

    // Sıkıştırmayı erken başlat (PDF çizimi ile paralel)
    const passportBase64Promise = compressImage(files.passportFileBase64);

    // --- PDF Dokümanı Oluştur ---
    const pdfDoc = await PDFDocument.create();
    
    // Custom fontlar (TTF) için fontkit'i kaydetmek zorunludur
    pdfDoc.registerFontkit(fontkit);

    // --- Font Ayarları ---
    let regularFont, boldFont;
    
    // Senin belirttiğin orijinal dosya yolu
const fontBytes = getCachedFileBytes(FONT_PATH, fontCache);
const fontBoldBytes = getCachedFileBytes(FONT_BOLD_PATH, fontBoldCache);

if (fontBytes) {
  try {
    regularFont = await pdfDoc.embedFont(fontBytes);
    boldFont = fontBoldBytes
      ? await pdfDoc.embedFont(fontBoldBytes)
      : regularFont; // bold yoksa regular kullan
  } catch (fontError) {
    console.warn("Inter font yüklenemedi, standart fonta geçiliyor:", fontError);
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



    const logoBytes = getCachedFileBytes(LOGO_PATH, logoCache);
    let logoImage = null;
    if (logoBytes) {
      try {
        logoImage = await pdfDoc.embedPng(logoBytes);
      } catch (err) {
        console.warn("Logo embed edilemedi, yazıyla devam:", err);
        logoImage = null;
      }
    }

    const textWidthCache = new Map();
    const getTextWidth = (font, size, text) => {
      const fontKey = font === boldFont ? "b" : "r";
      const key = `${fontKey}:${size}:${text}`;
      if (textWidthCache.has(key)) return textWidthCache.get(key);
      const width = font.widthOfTextAtSize(text, size);
      if (textWidthCache.size > 2000) textWidthCache.clear();
      textWidthCache.set(key, width);
      return width;
    };

// 1. Sabitler
const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;
const MARGIN = 40;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const HEADER_HEIGHT = 48;
const FOOTER_HEIGHT = 25;
const LINE_GAP = 6;
const SECTION_GAP = 0;
const FIELD_GAP = 10;
const FONT_SIZE = 14;
const LINE_HEIGHT = FONT_SIZE + LINE_GAP;
 const SECTION_HEIGHT = 32;
// 2. wrapText
const wrapText = (text, maxWidth, font, size) => {
  if (!text) return [];
  text = String(text).normalize("NFC");
  const lines = [];
  const paragraphs = text.split(/\r?\n/);
  paragraphs.forEach((paragraph, pIndex) => {
    if (paragraph.trim() === "") { lines.push(""); return; }
    const words = paragraph.split(" ");
    let currentLine = "";
    words.forEach((word) => {
      if (font.widthOfTextAtSize(word, size) > maxWidth) {
        if (currentLine) { lines.push(currentLine); currentLine = ""; }
        let chunk = "";
        for (let char of [...word]) {
          const testChunk = chunk + char;
          if (font.widthOfTextAtSize(testChunk, size) < maxWidth) chunk = testChunk;
          else { lines.push(chunk); chunk = char; }
        }
        if (chunk) currentLine = chunk;
      } else {
        const testLine = currentLine ? currentLine + " " + word : word;
        if (font.widthOfTextAtSize(testLine, size) < maxWidth) currentLine = testLine;
        else { lines.push(currentLine); currentLine = word; }
      }
    });
    if (currentLine) lines.push(currentLine);
    if (pIndex !== paragraphs.length - 1) lines.push("");
  });
  return lines;
};

// 3. drawHeader — kullanımdan ÖNCE tanımlanmalı
const drawHeader = (page) => {
  if (logoImage) {
    page.drawImage(logoImage, { x: MARGIN, y: PAGE_HEIGHT - 38, width: 110, height: 33 });
  } else {
    page.drawText("AYA JOURNEY", {
      x: MARGIN, y: PAGE_HEIGHT - 38,
      size: 18, font: boldFont, color: COLORS.primary,
    });
  }
  const title = "BİRLEŞİK KRALLIK VİZE BAŞVURU FORMU BİLGİ FİŞİ";
  page.drawText(title, {
    x: PAGE_WIDTH - MARGIN - boldFont.widthOfTextAtSize(title, 10),
    y: PAGE_HEIGHT - 28,
    size: 10, font: boldFont, color: COLORS.textLabel,
  });
page.drawLine({
  start: { x: MARGIN, y: PAGE_HEIGHT - HEADER_HEIGHT },
  end: { x: PAGE_WIDTH - MARGIN, y: PAGE_HEIGHT - HEADER_HEIGHT },
  thickness: 0.5, color: COLORS.primary,
});
};

// 4. drawFooter
const drawFooter = (page, pNum) => {
  const text = `Sayfa ${pNum}`;
  const width = regularFont.widthOfTextAtSize(text, 9);
page.drawLine({
  start: { x: MARGIN, y: PAGE_HEIGHT - HEADER_HEIGHT },
  end: { x: PAGE_WIDTH - MARGIN, y: PAGE_HEIGHT - HEADER_HEIGHT },
  thickness: 0.5, color: COLORS.primary,
});
  page.drawText(text, {
    x: (PAGE_WIDTH - width) / 2, y: MARGIN,
    size: 9, font: regularFont, color: COLORS.textLabel,
  });
};

// 5. checkSpace — drawFooter ve drawHeader'dan sonra
const checkSpace = (heightNeeded) => {
  const minY = MARGIN + FOOTER_HEIGHT;
  if (currentY - heightNeeded < minY) {
    drawFooter(currentPage, pageCount);
    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    drawHeader(currentPage);
    currentY = PAGE_HEIGHT - MARGIN - HEADER_HEIGHT;
    return true;
  }
  return false;
};

// 6. drawSection — checkSpace'den sonra
const drawSection = (title) => {
  // 25'ten 32'ye büyütüldü
  const blockHeight = SECTION_HEIGHT + SECTION_GAP;
  checkSpace(blockHeight);

  currentY -= SECTION_GAP;

  currentPage.drawRectangle({
    x: MARGIN,
    y: currentY - SECTION_HEIGHT,
    width: CONTENT_WIDTH,
    height: SECTION_HEIGHT,
    color: COLORS.primary,
  });

  // Yazıyı dikeyde ortala
  const textY = currentY - SECTION_HEIGHT / 2 - 11 / 2; // 11 = font size

  currentPage.drawText(title.toUpperCase(), {
    x: MARGIN + 10,
    y: textY,
    size: 11,
    font: boldFont,
    color: COLORS.white,
  });

  currentY -= SECTION_HEIGHT + 16; // alt boşluk 10'dan 16'ya çıkarıldı
};

// 7. drawField
const drawField = (label, value) => {
  if (
    value === null ||
    value === undefined ||
    String(value).trim() === "" ||
    String(value).trim() === "-"
  ) {
    return 0;
  }

  const valStr = String(value).trim();
  const valueLines = wrapText(valStr, CONTENT_WIDTH, regularFont, FONT_SIZE);

  const labelH = LINE_HEIGHT;
  const valH = valueLines.length * LINE_HEIGHT;
  const BOTTOM_BORDER = 1;        // border kalınlığı
  const FIELD_PADDING_TOP = 6;    // field üstü boşluk
  const FIELD_PADDING_BOTTOM = 10; // border altı boşluk
  const totalH = FIELD_PADDING_TOP + labelH + valH + BOTTOM_BORDER + FIELD_PADDING_BOTTOM;

  checkSpace(totalH);

  // Üst boşluk
  currentY -= FIELD_PADDING_TOP;

  // LABEL
  currentPage.drawText(label, {
    x: MARGIN,
    y: currentY,
    size: FONT_SIZE,
    font: boldFont,
    color: COLORS.textMain,
  });
  currentY -= labelH;

  // VALUE satırları
  valueLines.forEach((line) => {
    if (checkSpace(LINE_HEIGHT)) { /* yeni sayfada devam */ }
    currentPage.drawText(line, {
      x: MARGIN,
      y: currentY,
      size: FONT_SIZE,
      font: regularFont,
      color: COLORS.textMain,
    });
    currentY -= LINE_HEIGHT;
  });

  // İnce alt çizgi
currentPage.drawLine({
  start: { x: MARGIN, y: currentY },
  end: { x: MARGIN + CONTENT_WIDTH, y: currentY },
  thickness: 0.4,
  color: rgb(0.85, 0.85, 0.85),
});

  // Border altı boşluk
  currentY -= FIELD_PADDING_BOTTOM;

  return totalH;
};

// 8. State — TÜM fonksiyonlar tanımlandıktan sonra
let currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
let currentY = PAGE_HEIGHT - MARGIN - HEADER_HEIGHT;
let pageCount = 1;

    // --- Veri İşleme ve Çizim Başlangıcı ---
    
    // drawHeader(currentPage, true);

    const s = (n) => steps[String(n)] || {};


    // --- BÖLÜM 1: Kişisel Bilgiler ---
      drawHeader(currentPage);

    // --- Step 1 ---
    // 1. KİŞİSEL BİLGİLER
drawSection("KİŞİSEL BİLGİLER");
// EPOSTA
let h1 = drawField("E-posta Adresi", s(1).email || "-", false, 0);
let h2 = drawField("Size Ait Diğer E-posta Adresi", s(1).email2 || "-", false, 0);


// İletişim
h1 = drawField("Telefon Numarası", s(1).phone_number || "-", false, 0);
h2 = drawField("Size Ait Diğer Telefon Numarası", s(1).phone_number2 || "-", false, 0);


// Ad Soyad – T.C.
 h1 = drawField("Adı Soyadı", s(1).fullName || "-", false, 0);


// CİNSİYET – MEDENİ DURUM
h1 = drawField("Cinsiyeti", s(1).gender || "-", false, 0);
h2 = drawField("Medeni Durumu", s(1).maritalStatus || "-", false, 0);

// Evlenmeden önceki soyadı
if (s(1).gender === "KADIN" && s(1).maritalStatus === "EVLI") {
  h1 = drawField("Evlenmeden Önceki Soyadı", s(1).maidenName || "-", false, 0);
 
}

// Eş bilgileri
if (s(1).maritalStatus === "EVLI") {
  h1 = drawField("Eşinin Adı Soyadı", s(1).partner_full_name || "-", false, 0);
  h2 = drawField("Eşinin Doğum Tarihi", formatDateDMY(s(1).partner_birth_date), false, 0);
  

  h1 = drawField("Eşinin Uyruğu", s(1).partner_nationality || "-", false, 0);
  h2 = drawField("Eşinizle Birlikte mi Yaşıyorsunuz?", s(1).partner_lives_with_you || "-", false, 0);
  

  h1 = drawField("İngiltere'ye Eşinizle mi Seyahat Edeceksiniz?", s(1).partner_travel_with_you || "-", false, 0);
  h2 = drawField("Eşinizin Pasaport Numarası", s(1).partner_passport_number || "-", false, 0);
  
}

// Eski eş
if (["DUL", "BOSANMIS"].includes(s(1).maritalStatus)) {
  h1 = drawField("Eski Eşinin Adı Soyadı", s(1).partner_full_name || "-", false, 0);
 
}

// Adres (TEK ALAN)
h1 = drawField("Adresi", s(1).home_address || "-", true, 0);


// Posta Kodu – Ev Sahipliği
h1 = drawField("Posta Kodu", s(1).post_code || "-", false, 0);
h2 = drawField(
  "Evin Mülkiyet Durumu",
  s(1).home_owner || "-" ,
  false,
  0
);
h1 = drawField("Evinizde ne kadar zamandır kalıyorsunuz?", s(1).residence_duration || "-", false, 0);


// Ev sahibi açıklaması
if (s(1).home_owner === "DIGER") {
  h1 = drawField("Evin Mülkiyeti Hakkında Açıklama", s(1).home_owner_info || "-", true, 0);
 
}

// Son 2 yıl adresleri
if (s(1).residence_months_total !== null && s(1).residence_months_total < 12) {
  h1 = drawField("Geçmiş 2 yıldaki adres bilgileri", s(1).past_addresses || "-", true, 0);
 
}







 // --- Step 2: Pasaport ---
drawSection("PASAPORT BİLGİLERİ");

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
  0
);



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
  0
);



// Satır 3: T.C. Kimlik Kartı Bitiş Tarihi


// Footer



 // --- Step 3: Pasaport ---
drawSection(" KİMLİK BİLGİLERİ");

// Satır 1: Pasaport No + Veren Makam

h1 = drawField("T.C. Kimlik Numarası", s(3).tcId || "-", false, 0);
h2 = drawField(
  "T.C. Kimlik Kartı Bitiş Tarihi",
  s(3).tc_card_end_date ? formatDateDMY(s(3).tc_card_end_date) : "-",
  false,
 0
);



drawSection(" VATANDAŞLIK BİLGİLERİ");


// Uyruk
h1 = drawField("Uyruğu", s(1).nationality || "-", false, 0);


// Diğer vatandaşlık
h1 = drawField("Başka Ülke Vatandaşlığı Var mı?", s(1).other_nationality || "-", false, 0);


if (s(1).other_nationality === "EVET") {
  h1 = drawField("Vatandaşlığı Alınan Ülke Bilgisi", s(1).other_nationality_country || "-", false, 0);
  h2 = drawField(
    "Vatandaşlık Başlama Tarihi",
    formatDateDMY(s(1).other_nationality_start_date),
    false,
    0
  );
    h2 = drawField(
    "Vatandaşlık Bitiş Tarihi",
   formatDateDMY(s(1).other_nationality_end_date),
    false,
    0
  );
  
}

// Doğum Tarihi – Yeri
h1 = drawField("Doğum Tarihi", formatDateDMY(s(1).birthDate), false, 0);
h2 = drawField("Doğum Yeri", s(1).birthPlace || "-", false, 0);





// --- BÖLÜM 4 ---
drawSection(" ÇALIŞMA VE MADDİ DURUM");

// Çalışma durumu
h1 = drawField("Çalışma Durumu", s(4).boolean_work || "-", false, 0);


// İş bilgileri (Çalışıyor / Emekli / Çalışmıyor)
if (["CALISIYOR"].includes(s(4).boolean_work)) {

  h1 = drawField(
   "İş Yeri Adı",
    s(4).work_name || "-",
    false,
    0
  );
   h2 = drawField(
   "İş Yeri Adresi",
    s(4).work_address || "-",
    false,
    0
  );
  

  h1 = drawField("İş Yeri Telefonu", s(4).work_phone || "-", false, 0);
  h2 = drawField("Görev / Ünvan", s(4).worker_title || "-", false, 0);
  

  h1 = drawField("Şu an çalıştığınız işe başlama tarihi", formatDateDMY(s(4).work_year)  || "-", false, 0);
 

  if (s(4).boolean_work === "CALISIYOR") {
    h1 = drawField("Bu iş yeri sizin mi?", s(4).own_work || "-", false, 0);
   
  }
}
if (s(4).boolean_work === "OGRENCI") {
  h1 = drawField("Okul Adı", s(4).school_name || "-", false, 0);
   h2 = drawField("Bölümü", s(4).school_department || "-", false, 0);
  

  h1 = drawField("Eğitim başlangıç tarihi", formatDateDMY(s(4).school_year)  || "-", false, 0);
 
}
// Maddi durum (herkes için)
if (s(4).boolean_work) {
  h1 = drawField("Düzenli birikime sahip misiniz?", s(4).savings_type || "-", false, 0);

 if (s(4).savings_type === "DIGER") {
  h2 = drawField("Diğer Açıklaması", s(4).savings_type_other || "-", false, 0);
 }
   
  h1 = drawField("Aylık Geliri", `${s(4).monthly_money } ₺`|| "-", false, 0);
  h2 = drawField("Toplam Birikimi", `${s(4).savings} ₺` || "-", false, 0);
  

  h1 = drawField("Yan Geliri", `${s(4).sideline} ₺` || "-", false, 0);
  h2 = drawField("Aylık Harcama Tutarı", `${s(4).monthly_expenditure_amount} ₺` || "-", false, 0);
  
}



h1 = drawField(
  "Bakmakla Yükümlü Olduğunuz Biri(leri) Var mı?",
  s(4).hasDependents || "-",
  true,
  0
);


if (s(4).hasDependents === "EVET" && Array.isArray(s(4).dependents)) {
  for (let i = 0; i < s(4).dependents.length; i++) {
    const person = s(4).dependents[i];



    // KİŞİ BAŞLIĞI
    const titleHeight = drawField(
      `Bakmakla Yükümlü Olunan Kişi ${i + 1}`,
      "",
      true,
      0
    );
 

    // SATIR SATIR ALANLAR
     drawField("Adı Soyadı", person.fullName);
   drawField("Sizinle olan ilişkisi", person.relationship);
     drawField("Doğum Tarihi",formatDateDMY( person.birthDate));
     drawField("Sizinle mi Yaşıyor", person.livesWithYou);
     drawField("Sizinle mi Seyahat Edecek", person.travelsWithYou);

   
  }
}




drawSection("HARCAMA VE MASRAF BİLGİLERİ");

// İngiltere'de harcama planı
h1 = drawField(
  "İngiltere'de Harcamayı Planladığınız Tutar (Pound)",
  `${s(5).spend_pound} POUND` || "-",
  false,
  0
);


// Masrafları kendisi mi karşılıyor?
h1 = drawField(
  "Masrafları Siz mi Karşılayacaksınız?",
  s(5).boolean_cover_expenses || "-",
  false,
  0
);


// Eğer HAYIR ise → masrafları karşılayan kişi
if (s(5).boolean_cover_expenses === "HAYIR") {



  currentPage.drawText(
    "Masrafları Karşılayan Kişi",
    { x: MARGIN, y: currentY, size: 10, font: boldFont, color: COLORS.primary }
  );
currentY -= 10

  h1 = drawField(
    "Adı Soyadı",
    s(5).who_cover_expenses || "-",
    false,
    0
  );

   h2 = drawField(
    "Telefonu",
    s(5).cover_expenses_phone || "-",
    false,
    0
  );
  

  h1 = drawField(
    "E-Postası",
    s(5).cover_expenses_email || "-",
    false,
    0
  );

  h2 = drawField(
    "Katkı Tutarı (Pound)",
    `${s(5).money_cover_expenses} POUND` || "-",
    false,
    0
  );
  

  h1 = drawField(
    "Katkı Sebebi",
    s(5).cover_expenses_reason || "-",
    true,
    0
  );
    h2 = drawField(
    "Katkı Sağlayanın Adresi",
    s(5).cover_expenses_address || "-",
    true,
    0
  );
  
}










 // --- 6. BÖLÜM: SEYAHAT VE İNGİLTERE ---
drawSection("SEYAHAT VE KONAKLAMA BİLGİLERİ");



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
  0
);



// İngiltere’de kalınacak adres (tek satır, uzun olabilir)


// Seyahat sebebi
h1 = drawField(
  "Seyahat Sebebi",
  s(5).travel_reason || "-",
  false,
  0
);


// Diğer seyahat sebebi
if (s(5).travel_reason === "DIGER") {
  h1 = drawField(
    "Seyahat Sebebi Açıklaması",
    s(5).travel_reason_other || "-",
    true,
    0
  );
 
}

drawSection("AİLE BİLGİLERİ");

/* ================= ANNE ================= */
h1 = drawField("Anne Adı Soyadı", s(2).mother_full_name || "-", false, 0);
h2 = drawField(
  "Annenin Doğum Tarihi",
  formatDateDMY(s(2).mother_birth_date) || "-",
  false,
  0
);


h1 = drawField("Annenin Uyruğu", s(2).mother_nationality || "-", false, 0);
h2 = drawField(
  "Anneniz Sizinle Seyahat Edecek mi?",
  s(2).mother_travel_with_you || "-",
  false,
  0
);
if( s(2).mother_travel_with_you ==="EVET"){
  h2 = drawField(
  "Annenizin Pasaport Numarası",
  s(2).mother_passport_number || "-",
  false,
  0
);
}



/* ================= BABA ================= */
h1 = drawField("Baba Adı Soyadı", s(2).father_full_name || "-", false, 0);
h2 = drawField(
  "Babanın Doğum Tarihi",
  formatDateDMY(s(2).father_birth_date) || "-",
  false,
  0
);


h1 = drawField("Baba Uyruğu", s(2).father_nationality || "-", false, 0);
h2 = drawField(
  "Babanız Sizinle Seyahat Edecek mi?",
  s(2).father_travel_with_you || "-",
  false,
  0
);
if( s(2).father_travel_with_you ==="EVET"){
  h2 = drawField(
  "Babanızın Pasaport Numarası",
  s(2).father_passport_number || "-",
  false,
  0
);
}



/* ================= ÇOCUKLAR ================= */
if (String(s(2).boolean_child).toUpperCase() === "EVET") {
 

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

currentY -= 10

  const names = s(2).child_names || [];
  const births = s(2).child_birth_date || {};
  const travels = s(2).child_travel_with_you || {};
  const lives = s(2).child_live || {};
  const visas = s(2).child_visa || {};
  const passports = s(2).child_passport_numbers || {};
  const child_address = s(2).child_address || {};
  names.forEach((name, idx) => {
   

    // Çocuk Adı – Doğum Tarihi
    let ch1 = drawField(
      `${idx + 1}. Çocuğun Adı`,
      name || "-",
      false,
      0
    );
    let ch2 = drawField(
      "Doğum Tarihi",
      formatDateDMY(births[idx]) || "-",
      false,
      0
    );
    

    // Seyahat – Birlikte Yaşıyor mu
    ch1 = drawField(
      "Çocuğunuz Sizinle Seyahat Edecek mi?",
      travels[idx] || "-",
      false,
      0
    );
    ch2 = drawField(
      "Çocuğunuz Sizinle Birlikte Yaşıyor mu?",
      lives[idx] || "-",
      false,
      0
    );

    if(lives[idx] ==="HAYIR"){
    ch2 = drawField(
      "Çocuğunuzun Adresi",
      child_address[idx] || "-",
      false,
      0
    );

    }
   

    // Vize – Pasaport
    ch1 = drawField(
      "Çocuğunuzun İngiltere Vizesi Var mı?",
      visas[idx] || "-",
      false,
      0
    );
    ch2 = drawField(
      "Çocuğunuzun Pasaport Numarası",
      passports[idx] || "-",
      false,
      0
    );
  
  });
}






drawSection("BİRLEŞİK KRALLIK'TA YAŞAYAN AİLE BİLGİLERİ");

// Aile var mı?
h1 = drawField(
  "Birleşik Krallık’ta Aileniz Var mı?",
  s(5).has_family_in_uk || "-",
  false,
  0
);


if (s(5).has_family_in_uk === "EVET") {

  // Yakınlık + Ad Soyad
  h1 = drawField(
    "Size Olan Yakınlık Derecesi",
    s(5).uk_family_relation || "-",
    false,
    0
  );
  h2 = drawField(
    "Adı Soyadı",
    s(5).uk_family_fullname || "-",
    false,
    0
  );
  

  // Uyruk + Yasal durum
  h1 = drawField(
    "Yakınınızın Uyruğu",
    s(5).uk_family_nationality || "-",
    false,
    0
  );
  h2 = drawField(
    "Yakınınızın Birleşik Krallık'taki Yasal Durumu",
    s(5).uk_family_legal_status || "-",
    false,
    0
  );
  

  // Geçici vize
  h1 = drawField(
    "Yakınınız Geçici Vizeye Sahip mi?",
    s(5).uk_family_has_temp_visa || "-",
    false,
    0
  );
 

  // Temelli UK’de mi?
  h1 = drawField(
    "Yakınınız Temelli Olarak UK’de mi Yaşıyor?",
    s(5).uk_family_is_resident || "-",
    false,
    0
  );
 

  // Pasaport numarası (şartlı)
  if (
    s(5).uk_family_has_temp_visa === "EVET" ||
    s(5).uk_family_is_resident === "EVET"
  ) {
    h1 = drawField(
      "Yakınınızın Pasaport Numarası",
      s(5).uk_family_passport || "-",
      false,
      0
    );
   
  }

  // Vize açıklaması (geçici vize yoksa)
  if (s(5).uk_family_has_temp_visa === "HAYIR") {
    h1 = drawField(
      "Yakınınızın Vize Durumu Açıklaması",
      s(5).uk_family_visa_explanation || "-",
      true,
      0
    );
   
  }
}
drawSection("GRUP İLE SEYAHAT BİLGİLERİ");
h1 = drawField(
  "Grup ile Seyahat Edecek misiniz?",
  s(5).boolean_travel_group || "-",
  false,
  0
);


if (s(5).boolean_travel_group === "EVET") {
  h1 = drawField(
    "Grup Adı",
    s(5).travel_group || "-",
    false,
    0
  );
 
}


drawSection("AİLE DIŞI BİRİYLE SEYAHAT BİLGİLERİ");

h1 = drawField(
  "Beraber seyahat edeceğiniz birisi var mı?",
  s(5).travel_with_non_family || "-",
  true,   // ✅ TAM SATIR
  0
);


if (s(5).travel_with_non_family === "EVET") {


  h1 = drawField(
    "Seyahat Edeceğiniz Kişinin Adı Soyadı",
    s(5).travel_non_family_fullname || "-",
    true,   // ✅ TAM SATIR
    0
  );


  h1 = drawField(
    "Seyahat Edeceğiniz Kişinin Yakınlık Derecesi",
    s(5).travel_non_family_relation || "-",
    true,   // ✅ TAM SATIR
    0
  );


 
  h1 = drawField(
    "Seyahat Edeceğiniz Kişinin Telefon Numarası",
    s(5).travel_non_family_phone || "-",
    true,   // ✅ TAM SATIR
    0
  );
    h1 = drawField(
    "Seyahat Edeceğiniz Kişinin Pasaport Numarası",
    s(5).travel_non_family_passport_number || "-",
    true,   // ✅ TAM SATIR
    0
  );
      h1 = drawField(
    "Seyahat Edeceğiniz Kişinin İngiltere Vizesi Var mı",
    s(5).travel_with_non_family_visa || "-",
    true,   // ✅ TAM SATIR
    0
  );
 
}




drawSection("İNGİLTERE DE KALINACAK ADRES BİLGİLERİ");

h1 = drawField(
  "İngiltere'de Kalınacak Adres",
  s(5).uk_address || "-",
  true,
  0
);


// ===============================
// VİZE REDDİ · GRUP · SEYAHAT SEBEBİ
// ===============================

drawSection("VİZE REDDİ BİLGİLERİ");

// Daha önce vize reddi
h1 = drawField(
  "Daha Önce Vize Reddi Aldınız mı?",
  s(5).boolean_refused_visa || "-",
  false,
  0
);


// Vize reddi detayları
if (s(5).boolean_refused_visa === "EVET") {

  h1 = drawField(
    "Vize Reddi Tarihi",
   formatDateDMY(s(5).when_refused)  || "-",
    false,
    0
  );
 

  h1 = drawField(
    "Vize Reddi Sebebi",
    s(5).refused_about || "-",
    true,
    0
  );
 
}




// ===============================
// DAVETİYE BİLGİLERİ
// ===============================

drawSection("DAVETİYE BİLGİLERİ");

// Davetiye var mı?
 h1 = drawField(
  "Davetiyeniz Var mı?",
  s(5).have_invitation || "-",
  false,
  0
);


if (s(5).have_invitation === "EVET") {

  // Davetiye türü
  h1 = drawField(
    "Davetiye Türü",
    s(5).invitation_type || "-",
    false,
    0
  );
 

  // ===============================
  // BİREYSEL DAVETİYE
  // ===============================
  if (s(5).invitation_type === "BIREYSEL") {

    h1 = drawField(
      "Davet Eden Kişinin Adı Soyadı",
      s(5).inviter_fullname || "-",
      false,
      0
    );
     h2 = drawField(
      "Davet Eden Kişinin E-Postası",
      s(5).inviter_email || "-",
      false,
      0
    );
    

    h1 = drawField(
      "Davet Eden Kişinin Telefon Numarası",
      s(5).inviter_phone || "-",
      false,
      0
    );
   

    h1 = drawField(
      "Davet Eden Kişinin Adresi",
      s(5).inviter_address || "-",
      true,
      0
    );
   
  }

  // ===============================
  // ŞİRKET DAVETİYESİ
  // ===============================
  if (s(5).invitation_type === "SIRKET") {

    h1 = drawField(
      "Davet Eden Şirket Adı",
      s(5).company_name || "-",
      false,
      0
    );
     h2 = drawField(
      "Davet Eden Şirketin E-Postası",
      s(5).company_email || "-",
      false,
      0
    );
    

    h1 = drawField(
      "Davet Eden Şirketin Telefon Numarası",
      s(5).company_phone || "-",
      false,
      0
    );
   

    h1 = drawField(
      "Davet Eden Şirketin Adresi",
      s(5).company_address || "-",
      true,
      0
    );
   
  }

  // Ortak davet sebebi
  h1 = drawField(
    "Davet Sebebi",
    s(5).invitation_reason || "-",
    true,
    0
  );
 
}


// ===============================
// BİRLEŞİK KRALLIK'TA AİLE
// ===============================






// ===============================
// SON 10 YILDA UK ZİYARETİ
// ===============================

drawSection("SON 10 YILDA YAPILAN BİRLEŞİK KRALLIK ZİYARETİ BİLGİLERİ");


h1 = drawField(
  "Son 10 yıl içinde Birleşik Krallık’ta bulundunuz mu?",
  s(5).uk_visited_last10 || "-",
  true,
  0
);


if (s(5).uk_visited_last10 === "EVET") {

  h1 = drawField(
    "Kaç Kere Bulundunuz?",
    s(5).uk_visited_count ? String(s(5).uk_visited_count) : "-",
    true,
    0
  );


  if (Array.isArray(s(5).uk_visits) && s(5).uk_visits.length > 0) {
    s(5).uk_visits.forEach((visit, index) => {

  
      h1 = drawField(`Ziyaret ${index + 1}`, "", false, 0);
      

     
      let v1 = drawField(
        "Ziyaret Amacı",
        visit.purpose || "-",
        true,
        0
      );

      let v2 = drawField(
        "Gidiş Tarihi",
        visit.arrivalDate
          ? formatDateDMY(visit.arrivalDate)
          : "-",
        true,
        0
      );

     

      let v3 = drawField(
        "Dönüş Tarihi",
        visit.departureDate
          ? formatDateDMY(visit.departureDate)
          : "-",
        true,
        0
      );


    });
  }
}






drawSection("SON 10 YILDA YAPILAN DİĞER ÜLKE SEYAHATLERİ BİLGİSİ");

// Ana soru
h1 = drawField(
  "Son 10 yılda Schengen, ABD, Kanada, Avustralya, Yeni Zelanda veya İsviçre’ye seyahat ettiniz mi?",
  s(5).other_visited_countries || "-",
  false,
  0
);


// Kaç seyahat varsa (BIR KEZ / 2-5 / 6+)
const travelCount = getTravelCardCount(s(5).other_visited_countries);

if (travelCount > 0) {



  currentPage.drawText(
    `Son ${travelCount} Seyahat`,
    { x: MARGIN, y: currentY, size: 10, font: boldFont, color: COLORS.primary }
  );
 

  for (let i = 1; i <= travelCount; i++) {

  

    currentPage.drawText(
      `${i}. Seyahat`,
      { x: MARGIN, y: currentY, size: 9, font: boldFont }
    );


    // Ülke
    h1 = drawField(
      "Ülke",
      s(5)[`lastTravel${i}_country`] || "-",
      false,
      0
    );
  
    // Amaç
    h1 = drawField(
      "Seyahat Amacı",
      s(5)[`lastTravel${i}_purpose`] || "-",
      false,
      0
    );
   

    // Ay / Yıl
    h1 = drawField(
      "Gidiş Tarihi",
    formatDateDMY( s(5)[`lastTravel${i}_monthYear`])  || "-",
      false,
      0
    );
  

    // Süre
    h1 = drawField(
      "Dönüş Tarihi",
    formatDateDMY(s(5)[`lastTravel${i}_duration`])   || "-",
      false,
      0
    );
   
  }
}


// ==================================================
// SON 10 YILDA DİĞER ÜLKELER (SCHENGEN DIŞI)
// ==================================================

drawSection("SON 10 YILDA YAPILAN DİĞER ÜLKELERE SEYAHAT BİLGİLERİ");

// Ana soru
 h1 = drawField(
  "Schengen, ABD, Kanada vb. dışındaki ülkelere seyahat ettiniz mi?",
  s(5).boolean_traveled_adroad || "-",
  false,
  0
);


// EVET ise listele
if (s(5).boolean_traveled_adroad === "EVET" &&
    Array.isArray(s(5).abroad_country) &&
    s(5).abroad_country.length > 0) {

 

  currentPage.drawText(
    `Diğer Ülkeler (${s(5).abroad_country.length} adet)`,
    { x: MARGIN, y: currentY, size: 10, font: boldFont, color: COLORS.primary }
  );
 

  s(5).abroad_country.forEach((item, index) => {

 

    currentPage.drawText(
      `${index + 1}. Ülke`,
      { x: MARGIN, y: currentY, size: 9, font: boldFont }
    );
  

    // Ülke adı
    h1 = drawField("Ülke", item.country || "-", false, 0);
  
    // Seyahat amacı
    h1 = drawField(
      "Seyahat Amacı",
      item.purpose || "-",
      false,
      0
    );
 

    // Giriş tarihi
    h1 = drawField(
      "Giriş Tarihi",
      item.start ? formatDateDMY(item.start) : "-",
      false,
      0
    );
   

    // Çıkış tarihi
    h1 = drawField(
      "Çıkış Tarihi",
      item.end ? formatDateDMY(item.end) : "-",
      false,
      0
    );
   
  });

} else if (s(5).boolean_traveled_adroad === "EVET") {

  // EVET ama liste yoksa
  h1 = drawField(
    "Detay",
    "Detay girilmemiş",
    false,
    0
  );
 
}


// ==================================================
// İNGİLTERE’DE TIBBİ TEDAVİ
// ==================================================

drawSection("İNGİLTERE’DE TIBBİ TEDAVİ BİLGİLERİ");

// Ana soru
h1 = drawField(
  "İngiltere’de daha önce tıbbi tedavi gördünüz mü?",
  s(5).medical_treatment_uk || "-",
  false,
  0
);


// EVET ise açıklama
if (s(5).medical_treatment_uk === "EVET") {
  h1 = drawField(
    "Tedavi Açıklaması",
    s(5).medical_treatment_details || "-",
    true,
    0
  );
 
}


// ==================================================
// ULUSAL SİGORTA NUMARASI
// ==================================================

drawSection("ULUSAL SİGORTA NUMARASI BİLGİSİ");

// Ana soru
h1 = drawField(
  "Ulusal Sigorta Numaranız var mı?",
  s(5).national_insurance_number_exist || "-",
  false,
  0
);


// EVET ise numara
if (s(5).national_insurance_number_exist === "EVET") {
  h1 = drawField(
    "Ulusal Sigorta Numarası",
    s(5).national_insurance_number || "-",
    false,
    0
  );
 
}

// ==================================================
// UK KALMA İZNİ BAŞVURUSU (SON 10 YIL)
// ==================================================

drawSection("İNGİLTERE’DE KALMA İZNİ BAŞVURUSU BİLGİSİ");

// Ana soru
h1 = drawField(
  "Son 10 yılda İngiltere'de kalma izni için başvuruda bulundunuz mu?",
  s(5).uk_stay_application_last10 || "-",
  false,
  0
);


// EVET ise açıklama
if (s(5).uk_stay_application_last10 === "EVET") {
  h1 = drawField(
    "Başvuru Açıklaması",
    s(5).uk_stay_application_explanation || "-",
    true,
    0
  );
 
}




// ==================================================
// UK KAMU FONU
// ==================================================


drawSection("KAMU FONU BİLGİSİ");

h1 = drawField(
  "İngiltere'de herhangi bir kamu fonu aldınız mı?",
  s(5).uk_public_funds || "-",
  false,
  0
);


if (s(5).uk_public_funds === "EVET") {
  h1 = drawField(
    "Alınan Kamu Fonu Açıklaması",
    s(5).uk_public_funds_details || "-",
    true,
    0
  );
 
}






// ==================================================
// VİZE REDDİ / SINIR DIŞI
// ==================================================

drawSection("VİZE REDDİ VE GİRİŞ YASAĞI BİLGİSİ");

h1 = drawField(
  "Herhangi bir ülkede vize reddi, sınır dışı edilme veya giriş yasağı yaşadınız mı?",
  s(5).visa_refused_or_banned || "-",
  false,
  0
);


if (s(5).visa_refused_or_banned === "EVET") {
  h1 = drawField(
    "Detaylar (Ülke, Yıl, Sebep)",
    s(5).visa_refused_details || "-",
    true,
    0
  );
 
}




drawSection("EK BİLGİLER");

h1 = drawField(
  "EK BİLGİLER",
  s(5).end_info || "-",
  false,
  0
);



drawFooter(currentPage, pageCount);
currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
drawHeader(currentPage);
currentY = PAGE_HEIGHT - MARGIN - HEADER_HEIGHT;


// Başlık
drawSection("DOSYALAR");

const passportBase64 = await passportBase64Promise;

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

    // Kullanılabilir alan: header + section altından footer'a kadar
    const availableHeight = currentY - MARGIN - FOOTER_HEIGHT - 20;
    const availableWidth = CONTENT_WIDTH;

    const scale = Math.min(
      availableWidth / embeddedImg.width,
      availableHeight / embeddedImg.height,
      1 // orijinalden büyütme
    );

    const imgDims = {
      width: embeddedImg.width * scale,
      height: embeddedImg.height * scale,
    };

    // Başlık
    currentPage.drawText(title, {
      x: MARGIN,
      y: currentY,
      size: 12,
      font: boldFont,
      color: COLORS.primary,
    });

    const titleGap = 16;
    const yPos = currentY - titleGap - imgDims.height;
    const xPos = MARGIN + (availableWidth - imgDims.width) / 2;

    // Resim çerçeve
    currentPage.drawRectangle({
      x: xPos - 5,
      y: yPos - 5,
      width: imgDims.width + 10,
      height: imgDims.height + 10,
      color: COLORS.border,
    });

    // Resim
    currentPage.drawImage(embeddedImg, {
      x: xPos,
      y: yPos,
      width: imgDims.width,
      height: imgDims.height,
    });

    currentY = yPos - 20;

  } catch (e) {
    console.error("Dosya resmi eklenemedi:", title, e);
  }
};

await addFileImage(passportBase64, "Pasaport Görüntüsü", "passport");

// Son sayfaya footer
drawFooter(currentPage, pageCount);
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


const s1 = f.steps[1] || {};
const showPastAddresses =
  s1.residence_months_total !== null &&
  s1.residence_months_total < 12;
const htmlBody = `
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'DM Sans', sans-serif;
    background: #f0f2f5;
    color: #1a1d23;
    padding: 32px 16px;
    font-size: 18px;
    line-height: 1.6;
  }
  .wrapper {
    max-width: 860px;
    margin: 0 auto;
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 40px rgba(0,0,0,0.10);
  }
  .doc-header {
    background: linear-gradient(135deg, #003c2f 0%, #00694f 60%, #00a878 100%);
    padding: 36px 40px 28px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .doc-header-icon {
    width: 54px; height: 54px;
    background: rgba(255,255,255,0.15);
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 26px;
  }
  .doc-header-text h1 {
    font-family: 'DM Serif Display', serif;
    font-size: 22px;
    color: #fff;
    letter-spacing: 0.3px;
  }
  .doc-header-text p {
    font-size: 12px;
    color: rgba(255,255,255,0.65);
    margin-top: 4px;
  }
  .doc-body { padding: 32px 40px 40px; }
  .section { margin-bottom: 36px; }
  .section-title {
    font-family: 'DM Serif Display', serif;
    font-size: 15px;
    color: #003c2f;
    letter-spacing: 0.5px;
    padding-bottom: 10px;
    border-bottom: 2px solid #e8edf5;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .section-title span.badge {
    background: #003c2f;
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 20px;
    letter-spacing: 0.8px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #e4e9f0;
  }
  tr { border-bottom: 1px solid #e4e9f0; }
  tr:last-child { border-bottom: none; }
  tr:nth-child(even) td { background: #f8fafd; }
  tr:nth-child(even) th { background: #eef2fa; }
  th {
    background: #f1f4fb;
    color: #374569;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 14px;
    text-align: left;
    width: 38%;
    vertical-align: top;
    letter-spacing: 0.2px;
  }
  td {
    padding: 10px 14px;
    color: #1a1d23;
    font-size: 16px;
    vertical-align: top;
  }
  .sub-entry {
    background: #f6f9ff;
    border: 1px solid #dce6f5;
    border-radius: 8px;
    padding: 10px 14px;
    margin-bottom: 8px;
    font-size: 16px;
  }
  .sub-entry:last-child { margin-bottom: 0; }
  .sub-entry strong { color: #003c2f; display: block; margin-bottom: 4px; font-size: 16px; }
  .photo-row {
    display: flex;
    gap: 24px;
    margin-top: 28px;
    padding-top: 28px;
    border-top: 2px solid #e8edf5;
  }
  .photo-box {
    flex: 1;
    background: #f6f9ff;
    border: 1px solid #dce6f5;
    border-radius: 10px;
    padding: 16px;
    text-align: center;
  }
  .photo-box p {
    font-size: 11px;
    font-weight: 600;
    color: #6b7a99;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .photo-box img { max-width: 180px; border-radius: 6px; border: 2px solid #dce6f5; }
  .doc-footer {
    background: #f6f9ff;
    border-top: 1px solid #e4e9f0;
    padding: 14px 40px;
    text-align: right;
    font-size: 11px;
    color: #8a94aa;
  }
</style>
</head>
<body>
<div class="wrapper">

  <div class="doc-header">
    <div class="doc-header-icon">🇬🇧</div>
    <div class="doc-header-text">
      <h1>İngiltere Vize Başvuru Formu</h1>
     
    </div>
  </div>

  <div class="doc-body">

    <!-- 01: KİŞİSEL BİLGİLER -->
    <div class="section">
      <div class="section-title"><span class="badge">01</span> KİŞİSEL BİLGİLER</div>
      <table>
        <tr><th>E-posta Adresi</th><td>${s1.email || "-"}</td></tr>
        <tr><th>Size Ait Diğer E-posta Adresi</th><td>${s1.email2 || "-"}</td></tr>
        <tr><th>Telefon Numarası</th><td>${s1.phone_number || "-"}</td></tr>
        <tr><th>Size Ait Diğer Telefon Numarası</th><td>${s1.phone_number2 || "-"}</td></tr>
        <tr><th>Adı Soyadı</th><td>${s1.fullName || "-"}</td></tr>
        <tr><th>Cinsiyeti</th><td>${s1.gender || "-"}</td></tr>
        <tr><th>Medeni Durumu</th><td>${s1.maritalStatus || "-"}</td></tr>
        ${s1.gender === "KADIN" && s1.maritalStatus === "EVLI" ? `
        <tr><th>Evlenmeden Önceki Soyadı</th><td>${s1.maidenName || "-"}</td></tr>
        ` : ""}
        ${s1.maritalStatus === "EVLI" ? `
        <tr><th>Eşinin Adı Soyadı</th><td>${s1.partner_full_name || "-"}</td></tr>
        <tr><th>Eşinin Doğum Tarihi</th><td>${formatDateDMY(s1.partner_birth_date) || "-"}</td></tr>
        <tr><th>Eşinin Uyruğu</th><td>${s1.partner_nationality || "-"}</td></tr>
        <tr><th>Eşinizle Birlikte mi Yaşıyorsunuz?</th><td>${s1.partner_lives_with_you || "-"}</td></tr>
        <tr><th>İngiltere'ye Eşinizle mi Seyahat Edeceksiniz?</th><td>${s1.partner_travel_with_you || "-"}</td></tr>
        <tr><th>Eşinizin Pasaport Numarası</th><td>${s1.partner_passport_number || "-"}</td></tr>
        ` : ""}
        ${["DUL", "BOSANMIS"].includes(s1.maritalStatus) ? `
        <tr><th>Eski Eşinin Adı Soyadı</th><td>${s1.partner_full_name || "-"}</td></tr>
        ` : ""}
        <tr><th>Adresi</th><td>${s1.home_address || "-"}</td></tr>
        <tr><th>Posta Kodu</th><td>${s1.post_code || "-"}</td></tr>
        <tr><th>Evin Mülkiyet Durumu</th><td>${s1.home_owner || "-"}</td></tr>
        <tr><th>Evinizde ne kadar zamandır kalıyorsunuz?</th><td>${s1.residence_duration || "-"}</td></tr>
        ${s1.home_owner === "DIGER" ? `
        <tr><th>Evin Mülkiyeti Hakkında Açıklama</th><td>${s1.home_owner_info || "-"}</td></tr>
        ` : ""}
        ${showPastAddresses ? `
        <tr><th>Geçmiş 2 yıldaki adres bilgileri</th><td>${s1.past_addresses || "-"}</td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 02: PASAPORT BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">02</span> PASAPORT BİLGİLERİ</div>
      <table>
        <tr><th>Pasaport Numarası</th><td>${f.steps[3].passport_number || "-"}</td></tr>
        <tr><th>Pasaportu Veren Makam</th><td>${f.steps[3].passport_issuing_authority || "-"}</td></tr>
        <tr><th>Pasaport Başlangıç Tarihi</th><td>${f.steps[3].Passport_start_date ? formatDateDMY(f.steps[3].Passport_start_date) : "-"}</td></tr>
        <tr><th>Pasaport Bitiş Tarihi</th><td>${f.steps[3].Passport_end_date ? formatDateDMY(f.steps[3].Passport_end_date) : "-"}</td></tr>
      </table>
    </div>

    <!-- 03: KİMLİK BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">03</span> KİMLİK BİLGİLERİ</div>
      <table>
        <tr><th>T.C. Kimlik Numarası</th><td>${f.steps[3].tcId || "-"}</td></tr>
        <tr><th>T.C. Kimlik Kartı Bitiş Tarihi</th><td>${f.steps[3].tc_card_end_date ? formatDateDMY(f.steps[3].tc_card_end_date) : "-"}</td></tr>
      </table>
    </div>

    <!-- 04: VATANDAŞLIK BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">04</span> VATANDAŞLIK BİLGİLERİ</div>
      <table>
        <tr><th>Uyruğu</th><td>${s1.nationality || "-"}</td></tr>
        <tr><th>Başka Ülke Vatandaşlığı Var mı?</th><td>${s1.other_nationality || "-"}</td></tr>
        ${s1.other_nationality === "EVET" ? `
        <tr><th>Vatandaşlığı Alınan Ülke Bilgisi</th><td>${s1.other_nationality_country || "-"}</td></tr>
        <tr><th>Vatandaşlık Başlama Tarihi</th><td>${formatDateDMY(s1.other_nationality_start_date) || "-"}</td></tr>
        <tr><th>Vatandaşlık Bitiş Tarihi</th><td>${formatDateDMY(s1.other_nationality_end_date) || "-"}</td></tr>
        ` : ""}
        <tr><th>Doğum Tarihi</th><td>${formatDateDMY(s1.birthDate) || "-"}</td></tr>
        <tr><th>Doğum Yeri</th><td>${s1.birthPlace || "-"}</td></tr>
      </table>
    </div>

    <!-- 05: ÇALIŞMA VE MADDİ DURUM -->
    <div class="section">
      <div class="section-title"><span class="badge">05</span> ÇALIŞMA VE MADDİ DURUM</div>
      <table>
        <tr><th>Çalışma Durumu</th><td>${f.steps[4].boolean_work || "-"}</td></tr>
        ${["CALISIYOR","EMEKLI","CALISMAYAN"].includes(f.steps[4].boolean_work) ? `
        <tr><th>${f.steps[4].boolean_work === "CALISMAYAN" ? "Eski İş Yeri Adı" : "İş Yeri Adı"}</th><td>${f.steps[4].work_name || "-"}</td></tr>
        <tr><th>${f.steps[4].boolean_work === "CALISMAYAN" ? "Eski İş Yeri Adresi" : "İş Yeri Adresi"}</th><td>${f.steps[4].work_address || "-"}</td></tr>
        <tr><th>İş Yeri Telefonu</th><td>${f.steps[4].work_phone || "-"}</td></tr>
        <tr><th>Görev / Ünvan</th><td>${f.steps[4].worker_title || "-"}</td></tr>
        <tr><th>İşe Başlama Tarihi</th><td>${formatDateDMY(f.steps[4].work_year)  || "-"}</td></tr>
        ${f.steps[4].boolean_work === "CALISIYOR" ? `
        <tr><th>Bu iş yeri sizin mi?</th><td>${f.steps[4].own_work || "-"}</td></tr>
        ` : ""}
        ` : ""}
        ${f.steps[4].boolean_work === "OGRENCI" ? `
        <tr><th>Okul Adı</th><td>${f.steps[4].school_name || "-"}</td></tr>
        <tr><th>Bölümü</th><td>${f.steps[4].school_department || "-"}</td></tr>
        <tr><th>Okuma Süresi</th><td>${f.steps[4].school_year || "-"}</td></tr>
        ` : ""}
        <tr><th>Düzenli birikime sahip misiniz?</th><td>${f.steps[4].savings_type || "-"}</td></tr>
        ${f.steps[4].savings_type === "DIGER" ? `
        <tr><th>Diğer Açıklaması</th><td>${f.steps[4].savings_type_other || "-"}</td></tr>
        ` : ""}
        <tr><th>Aylık Geliri</th><td>${f.steps[4].monthly_money ? f.steps[4].monthly_money + " ₺" : "-"}</td></tr>
        <tr><th>Toplam Birikimi</th><td>${f.steps[4].savings ? f.steps[4].savings + " ₺" : "-"}</td></tr>
        <tr><th>Yan Geliri</th><td>${f.steps[4].sideline ? f.steps[4].sideline + " ₺" : "-"}</td></tr>
        <tr><th>Aylık Harcama Tutarı</th><td>${f.steps[4].monthly_expenditure_amount ? f.steps[4].monthly_expenditure_amount + " ₺" : "-"}</td></tr>
        <tr><th>Bakmakla Yükümlü Olduğunuz Biri(leri) Var mı?</th><td>${f.steps[4].hasDependents || "-"}</td></tr>
        ${f.steps[4].hasDependents === "EVET" && Array.isArray(f.steps[4].dependents) && f.steps[4].dependents.length > 0 ? `
        <tr><th>Bakmakla Yükümlü Olunan Kişiler</th><td>
          ${f.steps[4].dependents.map((p, i) => `
            <div class="sub-entry">
              <strong>Bakmakla Yükümlü Olunan Kişi ${i + 1}</strong>
              Adı Soyadı: ${p.fullName || "-"}<br/>
              Sizinle olan ilişkisi: ${p.relationship || "-"}<br/>
              Doğum Tarihi: ${formatDateDMY(p.birthDate ) || "-"}<br/>
              Sizinle mi Yaşıyor: ${p.livesWithYou || "-"}<br/>
              Sizinle mi Seyahat Edecek: ${p.travelsWithYou || "-"}
            </div>`).join("")}
        </td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 06: HARCAMA VE MASRAF BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">06</span> HARCAMA VE MASRAF BİLGİLERİ</div>
      <table>
        <tr><th>İngiltere'de Harcamayı Planladığınız Tutar (Pound)</th><td>${f.steps[5].spend_pound ? f.steps[5].spend_pound + " POUND" : "-"}</td></tr>
        <tr><th>Masrafları Siz mi Karşılayacaksınız?</th><td>${f.steps[5].boolean_cover_expenses || "-"}</td></tr>
        ${f.steps[5].boolean_cover_expenses === "HAYIR" ? `
        <tr><th>Masrafları Karşılayan Kişi — Adı Soyadı</th><td>${f.steps[5].who_cover_expenses || "-"}</td></tr>
        <tr><th>Telefonu</th><td>${f.steps[5].cover_expenses_phone || "-"}</td></tr>
        <tr><th>E-Postası</th><td>${f.steps[5].cover_expenses_email || "-"}</td></tr>
        <tr><th>Katkı Tutarı (Pound)</th><td>${f.steps[5].money_cover_expenses ? f.steps[5].money_cover_expenses + " POUND" : "-"}</td></tr>
        <tr><th>Katkı Sebebi</th><td>${f.steps[5].cover_expenses_reason || "-"}</td></tr>
        <tr><th>Katkı Sağlayanın Adresi</th><td>${f.steps[5].cover_expenses_address || "-"}</td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 07: SEYAHAT VE KONAKLAMA BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">07</span> SEYAHAT VE KONAKLAMA BİLGİLERİ</div>
      <table>
        <tr><th>Seyahat Başlangıç Tarihi</th><td>${formatDateDMY(f.steps[5].travel_start_date) || "-"}</td></tr>
        <tr><th>Seyahat Bitiş Tarihi</th><td>${formatDateDMY(f.steps[5].travel_end_date) || "-"}</td></tr>
        <tr><th>Seyahat Sebebi</th><td>${f.steps[5].travel_reason || "-"}</td></tr>
        ${f.steps[5].travel_reason === "DIGER" ? `
        <tr><th>Seyahat Sebebi Açıklaması</th><td>${f.steps[5].travel_reason_other || "-"}</td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 08: AİLE BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">08</span> AİLE BİLGİLERİ</div>
      <table>
        <tr><th>Anne Adı Soyadı</th><td>${f.steps[2].mother_full_name || "-"}</td></tr>
        <tr><th>Annenin Doğum Tarihi</th><td>${formatDateDMY(f.steps[2].mother_birth_date) || "-"}</td></tr>
        <tr><th>Annenin Uyruğu</th><td>${f.steps[2].mother_nationality || "-"}</td></tr>
        <tr><th>Anneniz Sizinle Seyahat Edecek mi?</th><td>${f.steps[2].mother_travel_with_you || "-"}</td></tr>
        <tr><th>Annenizin Pasaport Numarası</th><td>${f.steps[2].mother_passport_number || "-"}</td></tr>
        <tr><th>Baba Adı Soyadı</th><td>${f.steps[2].father_full_name || "-"}</td></tr>
        <tr><th>Babanın Doğum Tarihi</th><td>${formatDateDMY(f.steps[2].father_birth_date) || "-"}</td></tr>
        <tr><th>Baba Uyruğu</th><td>${f.steps[2].father_nationality || "-"}</td></tr>
        <tr><th>Babanız Sizinle Seyahat Edecek mi?</th><td>${f.steps[2].father_travel_with_you || "-"}</td></tr>
        <tr><th>Babanızın Pasaport Numarası</th><td>${f.steps[2].father_passport_number || "-"}</td></tr>
        <tr><th>Çocuğunuz Var mı?</th><td>${f.steps[2].boolean_child || "-"}</td></tr>
        ${String(f.steps[2].boolean_child).toUpperCase() === "EVET" ? `
        <tr><th>Çocuk Bilgileri (${f.steps[2].child_count || 0} Adet)</th><td>
          ${(f.steps[2].child_names || []).length > 0
            ? (f.steps[2].child_names || []).map((name, idx) => `
              <div class="sub-entry">
                <strong>${idx + 1}. Çocuğun Adı: ${name || "-"}</strong>
                Doğum Tarihi: ${formatDateDMY((f.steps[2].child_birth_date || {})[idx]) || "-"}<br/>
                Çocuğunuz Sizinle Seyahat Edecek mi?: ${(f.steps[2].child_travel_with_you || {})[idx] || "-"}<br/>
                Çocuğunuz Sizinle Birlikte Yaşıyor mu?: ${(f.steps[2].child_live || {})[idx] || "-"}<br/>
                Çocuğunuzun Adresi: ${(f.steps[2].child_address || {})[idx] || "-"}<br/>
                Çocuğunuzun İngiltere Vizesi Var mı?: ${(f.steps[2].child_visa || {})[idx] || "-"}<br/>
                Çocuğunuzun Pasaport Numarası: ${(f.steps[2].child_passport_numbers || {})[idx] || "-"}
              </div>`).join("")
            : "-"}
        </td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 09: BİRLEŞİK KRALLIK'TA YAŞAYAN AİLE BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">09</span> BİRLEŞİK KRALLIK'TA YAŞAYAN AİLE BİLGİLERİ</div>
      <table>
        <tr><th>Birleşik Krallık'ta Aileniz Var mı?</th><td>${f.steps[5].has_family_in_uk || "-"}</td></tr>
        ${f.steps[5].has_family_in_uk === "EVET" ? `
        <tr><th>Size Olan Yakınlık Derecesi</th><td>${f.steps[5].uk_family_relation || "-"}</td></tr>
        <tr><th>Adı Soyadı</th><td>${f.steps[5].uk_family_fullname || "-"}</td></tr>
        <tr><th>Yakınınızın Uyruğu</th><td>${f.steps[5].uk_family_nationality || "-"}</td></tr>
        <tr><th>Yakınınızın Birleşik Krallık'taki Yasal Durumu</th><td>${f.steps[5].uk_family_legal_status || "-"}</td></tr>
        <tr><th>Yakınınız Geçici Vizeye Sahip mi?</th><td>${f.steps[5].uk_family_has_temp_visa || "-"}</td></tr>
        <tr><th>Yakınınız Temelli Olarak UK'de mi Yaşıyor?</th><td>${f.steps[5].uk_family_is_resident || "-"}</td></tr>
        ${(f.steps[5].uk_family_has_temp_visa === "EVET" || f.steps[5].uk_family_is_resident === "EVET") ? `
        <tr><th>Yakınınızın Pasaport Numarası</th><td>${f.steps[5].uk_family_passport || "-"}</td></tr>
        ` : ""}
        ${f.steps[5].uk_family_has_temp_visa === "HAYIR" ? `
        <tr><th>Yakınınızın Vize Durumu Açıklaması</th><td>${f.steps[5].uk_family_visa_explanation || "-"}</td></tr>
        ` : ""}
        ` : ""}
      </table>
    </div>

    <!-- 10: GRUP İLE SEYAHAT BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">10</span> GRUP İLE SEYAHAT BİLGİLERİ</div>
      <table>
        <tr><th>Grup ile Seyahat Edecek misiniz?</th><td>${f.steps[5].boolean_travel_group || "-"}</td></tr>
        ${f.steps[5].boolean_travel_group === "EVET" ? `
        <tr><th>Grup Adı</th><td>${f.steps[5].travel_group || "-"}</td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 11: AİLE DIŞI BİRİYLE SEYAHAT BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">11</span> AİLE DIŞI BİRİYLE SEYAHAT BİLGİLERİ</div>
      <table>
        <tr><th>Beraber seyahat edeceğiniz birisi var mı?</th><td>${f.steps[5].travel_with_non_family || "-"}</td></tr>
        ${f.steps[5].travel_with_non_family === "EVET" ? `
        <tr><th>Seyahat Edeceğiniz Kişinin Adı Soyadı</th><td>${f.steps[5].travel_non_family_fullname || "-"}</td></tr>
        <tr><th>Seyahat Edeceğiniz Kişinin Yakınlık Derecesi</th><td>${f.steps[5].travel_non_family_relation || "-"}</td></tr>
        <tr><th>Seyahat Edeceğiniz Kişinin Telefon Numarası</th><td>${f.steps[5].travel_non_family_phone || "-"}</td></tr>
        <tr><th>Seyahat Edeceğiniz Kişinin Pasaport Numarası</th><td>${f.steps[5].travel_non_family_passport_number || "-"}</td></tr>
        <tr><th>Seyahat Edeceğiniz Kişinin Vizesi Var mı?</th><td>${f.steps[5].travel_with_non_family_visa || "-"}</td></tr>

        ` : ""}
      </table>
    </div>

    <!-- 12: İNGİLTERE'DE KALINACAK ADRES BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">12</span> İNGİLTERE'DE KALINACAK ADRES BİLGİLERİ</div>
      <table>
        <tr><th>İngiltere'de Kalınacak Adres</th><td>${f.steps[5].uk_address || "-"}</td></tr>
      </table>
    </div>

    <!-- 13: VİZE REDDİ BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">13</span> VİZE REDDİ BİLGİLERİ</div>
      <table>
        <tr><th>Daha Önce Vize Reddi Aldınız mı?</th><td>${f.steps[5].boolean_refused_visa || "-"}</td></tr>
        ${f.steps[5].boolean_refused_visa === "EVET" ? `
        <tr><th>Vize Reddi Tarihi</th><td>${formatDateDMY(f.steps[5].when_refused) || "-"}</td></tr>
        <tr><th>Vize Reddi Sebebi</th><td>${f.steps[5].refused_about || "-"}</td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 14: DAVETİYE BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">14</span> DAVETİYE BİLGİLERİ</div>
      <table>
        <tr><th>Davetiyeniz Var mı?</th><td>${f.steps[5].have_invitation || "-"}</td></tr>
        ${f.steps[5].have_invitation === "EVET" ? `
        <tr><th>Davetiye Türü</th><td>${f.steps[5].invitation_type || "-"}</td></tr>
        ${f.steps[5].invitation_type === "BIREYSEL" ? `
        <tr><th>Davet Eden Kişinin Adı Soyadı</th><td>${f.steps[5].inviter_fullname || "-"}</td></tr>
        <tr><th>Davet Eden Kişinin E-Postası</th><td>${f.steps[5].inviter_email || "-"}</td></tr>
        <tr><th>Davet Eden Kişinin Telefon Numarası</th><td>${f.steps[5].inviter_phone || "-"}</td></tr>
        <tr><th>Davet Eden Kişinin Adresi</th><td>${f.steps[5].inviter_address || "-"}</td></tr>
        ` : ""}
        ${f.steps[5].invitation_type === "SIRKET" ? `
        <tr><th>Davet Eden Şirket Adı</th><td>${f.steps[5].company_name || "-"}</td></tr>
        <tr><th>Davet Eden Şirketin E-Postası</th><td>${f.steps[5].company_email || "-"}</td></tr>
        <tr><th>Davet Eden Şirketin Telefon Numarası</th><td>${f.steps[5].company_phone || "-"}</td></tr>
        <tr><th>Davet Eden Şirketin Adresi</th><td>${f.steps[5].company_address || "-"}</td></tr>
        ` : ""}
        <tr><th>Davet Sebebi</th><td>${f.steps[5].invitation_reason || "-"}</td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 15: SON 10 YILDA YAPILAN BİRLEŞİK KRALLIK ZİYARETİ BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">15</span> SON 10 YILDA YAPILAN BİRLEŞİK KRALLIK ZİYARETİ BİLGİLERİ</div>
      <table>
        <tr><th>Son 10 yıl içinde Birleşik Krallık'ta bulundunuz mu?</th><td>${f.steps[5].uk_visited_last10 || "-"}</td></tr>
        ${f.steps[5].uk_visited_last10 === "EVET" ? `
        <tr><th>Kaç Kere Bulundunuz?</th><td>${f.steps[5].uk_visited_count ? String(f.steps[5].uk_visited_count) : "-"}</td></tr>
        <tr><th>Ziyaret Detayları</th><td>
          ${Array.isArray(f.steps[5].uk_visits) && f.steps[5].uk_visits.length > 0
            ? f.steps[5].uk_visits.map((visit, index) => `
              <div class="sub-entry">
                <strong>Ziyaret ${index + 1}</strong>
                Ziyaret Amacı: ${visit.purpose || "-"}<br/>
                Gidiş Tarihi: ${visit.arrivalDate ? formatDateDMY(visit.arrivalDate) : "-"}<br/>
                Dönüş Tarihi: ${visit.departureDate ? formatDateDMY(visit.departureDate) : "-"}
              </div>`).join("")
            : "-"}
        </td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 16: SON 10 YILDA YAPILAN DİĞER ÜLKE SEYAHATLERİ BİLGİSİ -->
    <div class="section">
      <div class="section-title"><span class="badge">16</span> SON 10 YILDA YAPILAN DİĞER ÜLKE SEYAHATLERİ BİLGİSİ</div>
      <table>
        <tr><th>Son 10 yılda Schengen, ABD, Kanada, Avustralya, Yeni Zelanda veya İsviçre'ye seyahat ettiniz mi?</th><td>${f.steps[5].other_visited_countries || "-"}</td></tr>
        ${["1 KEZ", "2 KEZ", "3 KEZ","4 KEZ","5 KEZ","6 VE UZERI"].includes(f.steps[5].other_visited_countries)
          ? Array.from({ length: getTravelCardCount(f.steps[5].other_visited_countries) }).map((_, i) => `
            <tr><th>${i + 1}. Seyahat</th><td>
              <div class="sub-entry">
                Ülke: ${f.steps[5][`lastTravel${i + 1}_country`] || "-"}<br/>
                Seyahat Amacı: ${f.steps[5][`lastTravel${i + 1}_purpose`] || "-"}<br/>
                Gidiş Tarihi: ${formatDateDMY(f.steps[5][`lastTravel${i + 1}_monthYear`]) || "-"}<br/>
                Dönüş Tarihi: ${formatDateDMY(f.steps[5][`lastTravel${i + 1}_duration`]) || "-"}
              </div>
            </td></tr>`).join("")
          : ""}
      </table>
    </div>

    <!-- 17: SON 10 YILDA YAPILAN DİĞER ÜLKELERE SEYAHAT BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">17</span> SON 10 YILDA YAPILAN DİĞER ÜLKELERE SEYAHAT BİLGİLERİ</div>
      <table>
        <tr><th>Schengen, ABD, Kanada vb. dışındaki ülkelere seyahat ettiniz mi?</th><td>${f.steps[5].boolean_traveled_adroad || "-"}</td></tr>
        ${f.steps[5].boolean_traveled_adroad === "EVET" && Array.isArray(f.steps[5].abroad_country) && f.steps[5].abroad_country.length > 0 ? `
        <tr><th>Gidilen Ülkeler</th><td>
          ${f.steps[5].abroad_country.map((item, index) => `
            <div class="sub-entry">
              <strong>${index + 1}. Ülke</strong>
              Ülke: ${item.country || "-"}<br/>
              Seyahat Amacı: ${item.purpose || "-"}<br/>
              Giriş Tarihi: ${item.start ? formatDateDMY(item.start) : "-"}<br/>
              Çıkış Tarihi: ${item.end ? formatDateDMY(item.end) : "-"}
            </div>`).join("")}
        </td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 18: İNGİLTERE'DE TIBBİ TEDAVİ BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">18</span> İNGİLTERE'DE TIBBİ TEDAVİ BİLGİLERİ</div>
      <table>
        <tr><th>İngiltere'de daha önce tıbbi tedavi gördünüz mü?</th><td>${f.steps[5].medical_treatment_uk || "-"}</td></tr>
        ${f.steps[5].medical_treatment_uk === "EVET" ? `
        <tr><th>Tedavi Açıklaması</th><td>${f.steps[5].medical_treatment_details || "-"}</td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 19: ULUSAL SİGORTA NUMARASI BİLGİSİ -->
    <div class="section">
      <div class="section-title"><span class="badge">19</span> ULUSAL SİGORTA NUMARASI BİLGİSİ</div>
      <table>
        <tr><th>Ulusal Sigorta Numaranız var mı?</th><td>${f.steps[5].national_insurance_number_exist || "-"}</td></tr>
        ${f.steps[5].national_insurance_number_exist === "EVET" ? `
        <tr><th>Ulusal Sigorta Numarası</th><td>${f.steps[5].national_insurance_number || "-"}</td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 20: İNGİLTERE'DE KALMA İZNİ BAŞVURUSU BİLGİSİ -->
    <div class="section">
      <div class="section-title"><span class="badge">20</span> İNGİLTERE'DE KALMA İZNİ BAŞVURUSU BİLGİSİ</div>
      <table>
        <tr><th>Son 10 yılda İngiltere'de kalma izni için başvuruda bulundunuz mu?</th><td>${f.steps[5].uk_stay_application_last10 || "-"}</td></tr>
        ${f.steps[5].uk_stay_application_last10 === "EVET" ? `
        <tr><th>Başvuru Açıklaması</th><td>${f.steps[5].uk_stay_application_explanation || "-"}</td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 21: KAMU FONU BİLGİSİ -->
    <div class="section">
      <div class="section-title"><span class="badge">21</span> KAMU FONU BİLGİSİ</div>
      <table>
        <tr><th>İngiltere'de herhangi bir kamu fonu aldınız mı?</th><td>${f.steps[5].uk_public_funds || "-"}</td></tr>
        ${f.steps[5].uk_public_funds === "EVET" ? `
        <tr><th>Alınan Kamu Fonu Açıklaması</th><td>${f.steps[5].uk_public_funds_details || "-"}</td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 22: VİZE REDDİ VE GİRİŞ YASAĞI BİLGİSİ -->
    <div class="section">
      <div class="section-title"><span class="badge">22</span> VİZE REDDİ VE GİRİŞ YASAĞI BİLGİSİ</div>
      <table>
        <tr><th>Herhangi bir ülkede vize reddi, sınır dışı edilme veya giriş yasağı yaşadınız mı?</th><td>${f.steps[5].visa_refused_or_banned || "-"}</td></tr>
        ${f.steps[5].visa_refused_or_banned === "EVET" ? `
        <tr><th>Detaylar (Ülke, Yıl, Sebep)</th><td>${f.steps[5].visa_refused_details || "-"}</td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 23: EK BİLGİLER -->
    <div class="section">
      <div class="section-title"><span class="badge">23</span> EK BİLGİLER</div>
      <table>
        <tr><th>EK BİLGİLER</th><td>${f.steps[5].end_info || "-"}</td></tr>
      </table>
    </div>

    ${f.steps[6].passportFile || f.steps[6].photoFile ? `
    <div class="photo-row">
      ${f.steps[6].passportFile ? `
      <div class="photo-box">
        <p>Pasaport Fotoğrafı</p>
        <img src="cid:passportPhoto" alt="Pasaport"/>
      </div>` : ""}
      ${f.steps[6].photoFile ? `
      <div class="photo-box">
        <p>Vesikalık</p>
        <img src="cid:profilePhoto" alt="Vesikalık"/>
      </div>` : ""}
    </div>
    ` : ""}

  </div>

  <div class="doc-footer">
    Başvuru Tarihi: ${new Date().toLocaleString("tr-TR")}
  </div>

</div>
</body>
</html>
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
      // text: textBody,
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
