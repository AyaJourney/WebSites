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
  "OpenSans_Condensed-Regular.ttf" 
);
const LOGO_PATH = path.join(process.cwd(), "public", "images", "ayalogoxl.png");

const fontCache = { checked: false, bytes: null };
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
function toTRDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;

  return d.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
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
/**
 * POST handler - Professional Corporate PDF Design
 * Font fix: Uses single custom font for all fields to prevent errors and maintain consistency.
 */
export async function POST(req) {
  try {
    const formData = await req.json();
    const steps = formData.steps || {};
    const files = steps["6"] || {};

    // Sıkıştırmayı erken başlat (PDF çizimi ile paralel)
    const passportBase64Promise = compressImage(files.passportFileBase64);
    const photoBase64Promise = compressImage(files.photoFileBase64);

    // --- PDF Dokümanı Oluştur ---
    const pdfDoc = await PDFDocument.create();
    
    // Custom fontlar (TTF) için fontkit'i kaydetmek zorunludur
    pdfDoc.registerFontkit(fontkit);

    // --- Font Ayarları ---
    let regularFont, boldFont;
    
    // Senin belirttiğin orijinal dosya yolu
    const fontBytes = getCachedFileBytes(FONT_PATH, fontCache);

    // Font yükleme mantığı: Sadece senin dosyanı baz alıyoruz.
    if (fontBytes) {
      try {
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
        const width = getTextWidth(font, size, `${currentLine} ${word}`);
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

    drawHeader(currentPage);

    // 🔥 HEADER ALTINA İN
    currentY = PAGE_HEIGHT - MARGIN - HEADER_HEIGHT;

    return true;
  }

  return false;
};
const HEADER_HEIGHT = 25; 
    // 3. Header (Sayfa Üstü)
const drawHeader = async (page) => {
  // --- PNG Logo ---
  if (logoImage) {
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
  page.drawText("SCHENGEN VİZE BAŞVURU FORMU BILGI FISI", {
    x: PAGE_WIDTH - MARGIN - getTextWidth(boldFont, 10, "SCHENGEN VİZE BAŞVURU FORMU BILGI FISI"),
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
      const width = getTextWidth(regularFont, 9, text);
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
const drawField = (label, value) => {

 
  const colWidth = CONTENT_WIDTH;

  const valStr = value ? String(value) : "-";
  const labelSize = 14;
  const valueSize = 14;
  const lineSpacing = valueSize + 5;

  const drawX = MARGIN;

  const valueLines = wrapText(
    valStr,
    colWidth,
    regularFont,
    valueSize
  );

  const labelHeight = labelSize + 6;

  // 🔥 Label için alan kontrolü
  checkSpace(labelHeight + 10);

  // LABEL
  currentPage.drawText(label, {
    x: drawX,
    y: currentY,
    size: labelSize,
    font: boldFont,
    color: COLORS.textLabel,
  });

  currentY -= labelHeight;

  // 🔥 Tek paragraf gibi akacak
  valueLines.forEach((line, index) => {

    // Sayfa dolduysa yeni sayfa aç
    if (checkSpace(lineSpacing)) {

      // Yeni sayfada sadece DEVAM ibaresi yaz
      currentPage.drawText(label + " (Devam)", {
        x: drawX,
        y: currentY,
        size: labelSize,
        font: boldFont,
        color: COLORS.textLabel,
      });

      currentY -= labelHeight;
    }

    currentPage.drawText(line, {
      x: drawX,
      y: currentY,
      size: valueSize,
      font: regularFont,
      color: COLORS.textMain,
    });

    currentY -= lineSpacing;
  });

  currentY -= 15;

  return true;
};

    // --- Veri İşleme ve Çizim Başlangıcı ---
    
    // drawHeader(currentPage, true);

    const s = (n) => steps[String(n)] || {};

    // --- BÖLÜM 1: Kişisel Bilgiler ---
       await drawHeader(currentPage);

    // --- Step 1 ---
   // 📌 1. BÖLÜM – KİŞİSEL BİLGİLER
drawSection("1. KİŞİSEL BİLGİLER");

// Ad Soyad & Cinsiyet
let h1 = drawField("Adı Soyadı (Pasaport ile aynı)", s(1).fullName || "-", false, 0);
let h2 = drawField("T.C. Kimlik Numarası", s(1).tcId || "-", false,0);
currentY -= Math.max(h1, h2) + 10;
 h1 = drawField("Cinsiyeti", s(1).gender || "-", false,0);
 h2 = drawField("Medeni Durumu", s(1).maritalStatus || "-", false, 0);
currentY -= Math.max(h1, h2) + 10;
// Medeni Durum & Kızlık Soyadı
if (s(1).maritalStatus === "EVLİ" && s(1).maidenName && s(1).gender === "KADIN") {
  h2 = drawField("Kızlık Soyadı", s(1).maidenName || "-", false,0);
}
currentY -= Math.max(h1, h2) + 10;

// Doğum Tarihi & Doğum Yeri
h1 = drawField("Doğum Tarihi", toTRDate(s(1).birthDate) || "-", false, 0);
h2 = drawField("Doğum Yeri", s(1).birthPlace || "-", false,0);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("Telefon Numarası", s(1).phone_number || "-", false, 0);
h2 = drawField("E-Posta Adresi", s(1).email || "-", false,0);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("Adresi", s(1).home_address || "-", false, 0);
h2 = drawField("Posta Kodu", s(1).post_code || "-", false,0);
currentY -= Math.max(h1, h2) + 10;

currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);

    // --- Step 2: Aile ---
  // 2. PASAPORT BİLGİLERİ
drawSection("2. PASAPORT BİLGİLERİ");

// İlk satır: Pasaport No + Veriliş Tarihi
h1 = drawField("Pasaport Numarası", s(2).passport_number || "", false, 0);
h2 = drawField("Pasaport Veriliş Tarihi",toTRDate( s(2).Passport_start_date) || "", false, 0);
currentY -= Math.max(h1, h2) + 10;

// İkinci satır: Bitiş Tarihi + Veren Makam
h1 = drawField("Pasaport Geçerliliği Bitiş Tarihi", toTRDate(s(2).Passport_end_date) || "", false, 0);
h2 = drawField("Pasaportu Veren Makam", s(2).passport_issuing_authority || "", false, 0);
currentY -= Math.max(h1, h2) + 10;
currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);

    // --- Step 3: Pasaport ---
   // 3. ŞİRKET BİLGİLERİ
drawSection("3. ÇALIŞMA BİLGİLERİ");

// 1. satır → Sektör + Şirket Türü
h1 = drawField("Çalışma Durumu", s(3).boolean_work || "", false, 0);
if(s(3).boolean_work == "CALISIYOR"){
h1 = drawField("Sektör", s(3).sector || "", false, 0);
if(s(3).sector === "OZEL"){
  h2 = drawField("Şirket Türü", s(3).company_type || "", false, 0);
  h1 = drawField("Şirket Adı", s(3).company_name || "", false, 0);
h2 = drawField("Şirketteki Statüsü", s(3).company_statu || "", false, 0);
 h2 = drawField("İşe Giriş Tarihi", toTRDate(s(3).work_start_date) || "", false, 0); 
 h1 = drawField("Şirket Adresi", s(3).company_address || "", true, 0);
 h1 = drawField("Şirket Telefon Numarası", s(3).company_phone_number || "", false, 0);
h2 = drawField("Şirketteki Unvanınız", s(3).your_title || "", false, 0);
}
if(s(3).sector === "KAMU"){
   h1 = drawField("Kamu Kurumu Adı", s(3).company_name || "", false, 0);

 h2 = drawField("İşe Giriş Tarihi", toTRDate(s(3).work_start_date) || "", false, 0); 
 h1 = drawField("Kamu Kurumu Adresi", s(3).company_address || "", true, 0);
 h1 = drawField("Kamu Kurumu Telefon Numarası", s(3).company_phone_number || "", false, 0);
h2 = drawField("Kamu Kurumundaki Unvanınız", s(3).your_title || "", false, 0);
}
}
if(s(3).boolean_work == "OGRENCI"){
 h1 = drawField("Okulunuzun Adı", s(3).school_name || "", false, 0);
h2 = drawField("Okulunuzun Adresi", s(3).school_address || "", false, 0);
 h2 = drawField("Kaçıncı Sınıfa Gidiyorsunuz?",s(3).school_class_number  || "", false, 0); 
}
 h1 = drawField("Seyahat Masraflarını Kim Karşılayacak?", s(3).who_pay || "", false, 0);
if(s(3).who_pay === "DIGER"){
 h1 = drawField("Masrafı Karşılayanın Adı Soyadı", s(3).pay_fullname || "", false, 0);
h2 = drawField("Masrafı Karşılayacak Kişinin Telefon Numarası", s(3).pay_phone_number || "", false, 0);
 h2 = drawField("Masrafı Karşılayacak Kişinin E-Posta Adresi",s(3).pay_email  || "", false, 0); 
h2 = drawField("Masrafı Karşılayan Kişinin Çalışma Durumu",s(3).pay_boolean_work  || "", false, 0); 
if(s(3).pay_boolean_work ==="CALISIYOR"){
  h2 = drawField("Masrafı Karşılayanın İş Yeri Adı",s(3).pay_companyname  || "", false, 0); 
}


}
// Sayfa footer
drawFooter(currentPage, pageCount);


  // --- BÖLÜM 4: Davet Bilgileri ---
currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);

drawSection("4. DAVET BİLGİLERİ");

// Davet Var mı? (Evet / Hayır)
h1 = drawField("Davetiyeniz Var mı?", s(4).boolean_invitation || "", true, 0);

if(s(4).boolean_invitation === "EVET"){
h2 = drawField("Davetiye Türü", s(4).invitation_type || "", false, 0);
if ((String(s(4).boolean_invitation).toUpperCase() === "EVET")&& (String(s(4).invitation_type).toUpperCase() === "BIREYSEL") ) {

    // 1. Satır: Davet Eden Kişi Adı + Doğum Tarihi
    h1 = drawField("Davet Eden Kişinin Adı Soyadı", s(4).invitation_sender_fullname || "", false, 0);
    h2 = drawField("Davet Eden Kişinin Doğum Tarihi", toTRDate(s(4).invitation_sender_birthdate) || "", false, 0);
    currentY -= Math.max(h1, h2) + 10;

    // 2. Satır: Telefon + E-posta
    h1 = drawField("Davet Eden Kişinin Telefon Numarası", s(4).invitation_sender_phone_number || "", false, 0);
    h2 = drawField("Davet Eden Kişinin E-posta Adresi", s(4).invitation_sender_email || "", false, 0);
    currentY -= Math.max(h1, h2) + 10;

    // 3. Satır: T.C. Kimlik No (tek satır)
    h1 = drawField("Davet Eden Kişinin Kimlik / Ülke ID Numarası", s(4).invitation_sender_tc_id || "", false, 0);
    currentY -= h1 + 10;

    // 4. Satır: Adres (çok satırlı)
    h1 = drawField("Davet Eden Kişinin Adresi", s(4).invitation_sender_home_address || "", true, 0);
    currentY -= h1 + 20;
}
if ((String(s(4).boolean_invitation).toUpperCase() === "EVET")&& (String(s(4).invitation_type).toUpperCase() === "SIRKET") ) {

    // 1. Satır: Davet Eden Kişi Adı + Doğum Tarihi
    h1 = drawField("Davet Eden Şirket Adı", s(4).invitation_company_fullname || "", false, 0);
    h2 = drawField("Şirket Adresi", s(4).invitation_company_address || "", false, 0);
    currentY -= Math.max(h1, h2) + 10;

    // 2. Satır: Telefon + E-posta
    h1 = drawField("Şirket Telefon", s(4).invitation_company_phone_number || "", false, 0);
    h2 = drawField("Şirket E-posta", s(4).invitation_company_email || "", false, 0);
    currentY -= Math.max(h1, h2) + 10;


}
}



// Eğer Davet varsa alanlar gösterilsin

// Footer
drawFooter(currentPage, pageCount);


    // --- BÖLÜM 5: Schengen ve Parmak İzi Bilgileri ---
;

drawSection("5. SCHENGEN & PARMAK İZİ BİLGİLERİ");

// 1. Satır: Gidiş – Dönüş
h1 = drawField("Seyahat Başlangıç Tarihi ",toTRDate( s(5).travel_start_date )|| "", false, 0);
h2 = drawField("Seyahat Bitiş Tarihi",toTRDate( s(5).travel_end_date )|| "", false, 0);
currentY -= Math.max(h1, h2) + 10;

// 2. Satır: Schengen Vizesi Var mı?
h1 = drawField("Daha Önce Schengen Vizesi Aldınız mı?", s(5).boolean_schengen_visa || "", true, 0);
currentY -= h1 + 10;

// Eğer Schengen vizesi varsa ek bilgiler
if (String(s(5).boolean_schengen_visa).toUpperCase() === "EVET") {
    
    // Vize Etiket Numarası
    h1 = drawField("Son Schengen vizenizin etiket numarası", s(5).schengen_visa_label_number || "", false, 0);
   

    // Parmak izi alındı mı?
    h2 = drawField("Parmak İzi Alındı mı?", s(5).fingerprint_taken || "", false ,0);
   currentY -= Math.max(h1, h2) + 10;

    // Parmak izi tarihi
    if (String(s(5).fingerprint_taken).toUpperCase() === "EVET") {
        h1 = drawField("Parmak İzi Tarihi",toTRDate( s(5).fingerprint_taken_date) || "", false, 0);
      
    }
    h1 = drawField("Daha önce yurtdışına çıktınız mı?", s(5).boolean_abroad_country || "", false,0);
      currentY -= Math.max(h1, h2) + 10;
     if(s(5).abroad_country && s(5).abroad_country.length>0) {
      checkSpace(50);
      currentY -=10;
      currentPage.drawText("Gidilen Ülke - Gidiş Tarihi - Dönüş Tarihi",{x:MARGIN,y:currentY,size:14,font:boldFont,color:COLORS.primary});
      currentY -=15;
      s(5).abroad_country.forEach(item=>{
        const text = `• ${item.country || '-'} (${toTRDate(item.start) || '-'} / ${toTRDate(item.end) || '-'})`;
        checkSpace(20);
        currentPage.drawText(text,{x:MARGIN+10,y:currentY,size:14,font:regularFont,color:COLORS.textMain});
        currentY -=14;
      });
      currentY -=10;
    }

}

drawFooter(currentPage, pageCount);


    // --- DOSYALAR (GÖRSELLER) ---
// --- BÖLÜM 6: DOSYALAR ---
// --- BÖLÜM 6: DOSYALAR ---
// --- BÖLÜM 6: DOSYALAR ---
 
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
const passportBase64 = await passportBase64Promise;
const photoBase64 = await photoBase64Promise;
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
            const maxWidth = 0;
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

// PASAPORT
if (s(6).passportFile) {
  let raw = s(6).passportFileBase64 
    ? s(6).passportFileBase64
    : (Array.isArray(s(6).passportFile) ? s(6).passportFile[1] : s(6).passportFile);

  if (typeof raw === "string" && raw.length > 0) {
    const base64 = raw.includes(",") ? raw.split(",")[1] : raw;
    passportBuffer = Buffer.from(base64, "base64");
  }
}

// FOTO
if (s(6).photoFile) {
  let raw = s(6).photoFileBase64
    ? s(6).photoFileBase64
    : (Array.isArray(s(6).photoFile) ? s(6).photoFile[1] : s(6).photoFile);

  if (typeof raw === "string" && raw.length > 0) {
    const base64 = raw.includes(",") ? raw.split(",")[1] : raw;
    photoBuffer = Buffer.from(base64, "base64");
  }
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

// const textBody = `
// SCHENGEN VİZE BAŞVURU

// -- Kişisel Bilgiler --
// Ad Soyad: ${f.steps[1].fullName || "-"}
// TC: ${f.steps[1].tcId || "-"}
// Cinsiyet: ${f.steps[1].gender || "-"}
// Medeni Durum: ${f.steps[1].maritalStatus || "-"}
// Doğum Tarihi: ${toTRDate(f.steps[1].birthDate) || "-"}
// Doğum Yeri: ${f.steps[1].birthPlace || "-"}
// Telefon: ${f.steps[1].phone_number || "-"}
// Email: ${f.steps[1].email || "-"}
// Adres: ${f.steps[1].home_address || "-"}
// Posta Kodu: ${f.steps[1].post_code || "-"}

// -- Pasaport Bilgileri --
// Numara: ${f.steps[2].passport_number || "-"}
// Başlangıç / Bitiş: ${f.steps[2].Passport_start_date || "-"} / ${f.steps[2].Passport_end_date || "-"}
// Veriliş: ${f.steps[2].passport_issuing_authority || "-"}

// -- İş / Şirket Bilgileri --
// Çalışma Durumu: ${f.steps[3].boolean_work || "-"}
// İşe Giriş Tarihi: ${toTRDate(f.steps[3].work_start_date) || "-"}
// Sektör: ${f.steps[3].sector || "-"}
// Şirket Türü: ${f.steps[3].company_type || "-"}
// Şirket Adı: ${f.steps[3].company_name || "-"}
// Durum: ${f.steps[3].company_statu || "-"}
// Adres: ${f.steps[3].company_address || "-"}
// Telefon: ${f.steps[3].company_phone_number || "-"}
// Pozisyon: ${f.steps[3].your_title || "-"}

// -- Davet / Finansal Durum --
// Davetiye Var mı: ${f.steps[4].boolean_invitation || "-"}
// Davetiye Türü: ${f.steps[4].invitation_type || "-"}
// Davet Gönderen: ${f.steps[4].invitation_sender_fullname || "-"}
// Doğum Tarihi: ${toTRDate(f.steps[4].invitation_sender_birthdate )|| "-"}
// Telefon: ${f.steps[4].invitation_sender_phone_number || "-"}
// Email: ${f.steps[4].invitation_sender_email || "-"}
// TC: ${f.steps[4].invitation_sender_tc_id || "-"}
// Adres: ${f.steps[4].invitation_sender_home_address || "-"}
// Davet Gönderen Şirket: ${f.steps[4].invitation_company_fullname || "-"}
// Şirket Telefon: ${f.steps[4].invitation_company_phone_number || "-"}
// Şirket Email: ${f.steps[4].invitation_company_email || "-"}
// Şirket Adres: ${f.steps[4].invitation_company_address || "-"}
// -- Seyahat Bilgileri --
// Başlangıç / Bitiş: ${f.steps[5].travel_start_date || "-"} / ${f.steps[5].travel_end_date || "-"}
// Schengen Vizesi Var mı: ${f.steps[5].boolean_schengen_visa || "-"}
// Parmak İzi Alındı mı: ${f.steps[5].fingerprint_taken || "-"}
// Parmak İzi Tarihi: ${toTRDate(f.steps[5].fingerprint_taken_date) || "-"}
// Vize Etiket No: ${f.steps[5].schengen_visa_label_number || "-"}
// Daha Önce Yurt Dışına Çıktınız Mı: ${f.steps[5].boolean_abroad_country || "-"}
// Gidilen Ülkeler: ${(f.steps[5].abroad_country || []).join(", ") || "-"}

// ${f.steps[6].passportFile ? "Pasaport Fotoğrafı: Mevcut" : "Pasaport Fotoğrafı: Yok"}
// ${f.steps[6].photoFile ? "Vesikalık Fotoğraf: Mevcut" : "Vesikalık Fotoğraf: Yok"}

// Başvuru Tarihi: ${new Date().toLocaleString("tr-TR")}
// `.trim();

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
    font-size: 14px;
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
    background: linear-gradient(135deg, #1a1060 0%, #2d1fa3 60%, #4f46e5 100%);
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
    color: #1a1060;
    letter-spacing: 0.5px;
    padding-bottom: 10px;
    border-bottom: 2px solid #e8edf5;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .section-title span.badge {
    background: #1a1060;
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
    font-size: 13.5px;
    vertical-align: top;
  }
  .sub-entry {
    background: #f6f9ff;
    border: 1px solid #dce6f5;
    border-radius: 8px;
    padding: 10px 14px;
    margin-bottom: 8px;
    font-size: 14px;
  }
  .sub-entry:last-child { margin-bottom: 0; }
  .sub-entry strong { color: #1a1060; display: block; margin-bottom: 4px; font-size: 14px; }
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
    font-size: 14px;
    color: #8a94aa;
  }
</style>
</head>
<body>
<div class="wrapper">

  <div class="doc-header">
    <div class="doc-header-icon">🇪🇺</div>
    <div class="doc-header-text">
      <h1>Schengen Vize Başvuru Formu</h1>
      <p>Başvuru özeti — Tüm bölümler</p>
    </div>
  </div>

  <div class="doc-body">

    <!-- 1. KİŞİSEL BİLGİLER -->
    <div class="section">
      <div class="section-title"><span class="badge">01</span> KİŞİSEL BİLGİLER</div>
      <table>
        <tr><th>Adı Soyadı (Pasaport ile aynı)</th><td>${f.steps[1].fullName || "-"}</td></tr>
        <tr><th>T.C. Kimlik Numarası</th><td>${f.steps[1].tcId || "-"}</td></tr>
        <tr><th>Cinsiyeti</th><td>${f.steps[1].gender || "-"}</td></tr>
        <tr><th>Medeni Durumu</th><td>${f.steps[1].maritalStatus || "-"}</td></tr>
        ${f.steps[1].maritalStatus === "EVLİ" && f.steps[1].maidenName && f.steps[1].gender === "KADIN" ? `
        <tr><th>Kızlık Soyadı</th><td>${f.steps[1].maidenName || "-"}</td></tr>
        ` : ""}
        <tr><th>Doğum Tarihi</th><td>${toTRDate(f.steps[1].birthDate) || "-"}</td></tr>
        <tr><th>Doğum Yeri</th><td>${f.steps[1].birthPlace || "-"}</td></tr>
        <tr><th>Telefon Numarası</th><td>${f.steps[1].phone_number || "-"}</td></tr>
        <tr><th>E-Posta Adresi</th><td>${f.steps[1].email || "-"}</td></tr>
        <tr><th>Adresi</th><td>${f.steps[1].home_address || "-"}</td></tr>
        <tr><th>Posta Kodu</th><td>${f.steps[1].post_code || "-"}</td></tr>
      </table>
    </div>

    <!-- 2. PASAPORT BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">02</span> PASAPORT BİLGİLERİ</div>
      <table>
        <tr><th>Pasaport Numarası</th><td>${f.steps[2].passport_number || "-"}</td></tr>
        <tr><th>Pasaport Veriliş Tarihi</th><td>${toTRDate(f.steps[2].Passport_start_date) || "-"}</td></tr>
        <tr><th>Pasaport Geçerliliği Bitiş Tarihi</th><td>${toTRDate(f.steps[2].Passport_end_date) || "-"}</td></tr>
        <tr><th>Pasaportu Veren Makam</th><td>${f.steps[2].passport_issuing_authority || "-"}</td></tr>
      </table>
    </div>

    <!-- 3. ÇALIŞMA BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">03</span> ÇALIŞMA BİLGİLERİ</div>
      <table>
        <tr><th>Çalışma Durumu</th><td>${f.steps[3].boolean_work || "-"}</td></tr>
        ${f.steps[3].boolean_work === "CALISIYOR" ? `
        <tr><th>Sektör</th><td>${f.steps[3].sector || "-"}</td></tr>
        ${f.steps[3].sector === "OZEL" ? `
        <tr><th>Şirket Türü</th><td>${f.steps[3].company_type || "-"}</td></tr>
        <tr><th>Şirket Adı</th><td>${f.steps[3].company_name || "-"}</td></tr>
        <tr><th>Şirketteki Statüsü</th><td>${f.steps[3].company_statu || "-"}</td></tr>
        <tr><th>İşe Giriş Tarihi</th><td>${toTRDate(f.steps[3].work_start_date) || "-"}</td></tr>
        <tr><th>Şirket Adresi</th><td>${f.steps[3].company_address || "-"}</td></tr>
        <tr><th>Şirket Telefon Numarası</th><td>${f.steps[3].company_phone_number || "-"}</td></tr>
        <tr><th>Şirketteki Unvanınız</th><td>${f.steps[3].your_title || "-"}</td></tr>
        ` : ""}
        ${f.steps[3].sector === "KAMU" ? `
        <tr><th>Kamu Kurumu Adı</th><td>${f.steps[3].company_name || "-"}</td></tr>
        <tr><th>İşe Giriş Tarihi</th><td>${toTRDate(f.steps[3].work_start_date) || "-"}</td></tr>
        <tr><th>Kamu Kurumu Adresi</th><td>${f.steps[3].company_address || "-"}</td></tr>
        <tr><th>Kamu Kurumu Telefon Numarası</th><td>${f.steps[3].company_phone_number || "-"}</td></tr>
        <tr><th>Kamu Kurumundaki Unvanınız</th><td>${f.steps[3].your_title || "-"}</td></tr>
        ` : ""}
        ` : ""}
        ${f.steps[3].boolean_work === "OGRENCI" ? `
        <tr><th>Okulunuzun Adı</th><td>${f.steps[3].school_name || "-"}</td></tr>
        <tr><th>Okulunuzun Adresi</th><td>${f.steps[3].school_address || "-"}</td></tr>
        <tr><th>Kaçıncı Sınıfa Gidiyorsunuz?</th><td>${f.steps[3].school_class_number || "-"}</td></tr>
        ` : ""}
        <tr><th>Seyahat Masraflarını Kim Karşılayacak?</th><td>${f.steps[3].who_pay || "-"}</td></tr>
        ${f.steps[3].who_pay === "DIGER" ? `
        <tr><th>Masrafı Karşılayanın Adı Soyadı</th><td>${f.steps[3].pay_fullname || "-"}</td></tr>
        <tr><th>Masrafı Karşılayacak Kişinin Telefon Numarası</th><td>${f.steps[3].pay_phone_number || "-"}</td></tr>
        <tr><th>Masrafı Karşılayacak Kişinin E-Posta Adresi</th><td>${f.steps[3].pay_email || "-"}</td></tr>
        <tr><th>Masrafı Karşılayan Kişinin Çalışma Durumu</th><td>${f.steps[3].pay_boolean_work || "-"}</td></tr>
        ${f.steps[3].pay_boolean_work === "CALISIYOR" ? `
        <tr><th>Masrafı Karşılayanın İş Yeri Adı</th><td>${f.steps[3].pay_companyname || "-"}</td></tr>
        ` : ""}
        ` : ""}
      </table>
    </div>

    <!-- 4. DAVET BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">04</span> DAVET BİLGİLERİ</div>
      <table>
        <tr><th>Davetiyeniz Var mı?</th><td>${f.steps[4].boolean_invitation || "-"}</td></tr>
        ${f.steps[4].boolean_invitation === "EVET" ? `
        <tr><th>Davetiye Türü</th><td>${f.steps[4].invitation_type || "-"}</td></tr>
        ${String(f.steps[4].invitation_type).toUpperCase() === "BIREYSEL" ? `
        <tr><th>Davet Eden Kişinin Adı Soyadı</th><td>${f.steps[4].invitation_sender_fullname || "-"}</td></tr>
        <tr><th>Davet Eden Kişinin Doğum Tarihi</th><td>${toTRDate(f.steps[4].invitation_sender_birthdate) || "-"}</td></tr>
        <tr><th>Davet Eden Kişinin Telefon Numarası</th><td>${f.steps[4].invitation_sender_phone_number || "-"}</td></tr>
        <tr><th>Davet Eden Kişinin E-posta Adresi</th><td>${f.steps[4].invitation_sender_email || "-"}</td></tr>
        <tr><th>Davet Eden Kişinin Kimlik / Ülke ID Numarası</th><td>${f.steps[4].invitation_sender_tc_id || "-"}</td></tr>
        <tr><th>Davet Eden Kişinin Adresi</th><td>${f.steps[4].invitation_sender_home_address || "-"}</td></tr>
        ` : ""}
        ${String(f.steps[4].invitation_type).toUpperCase() === "SIRKET" ? `
        <tr><th>Davet Eden Şirket Adı</th><td>${f.steps[4].invitation_company_fullname || "-"}</td></tr>
        <tr><th>Şirket Adresi</th><td>${f.steps[4].invitation_company_address || "-"}</td></tr>
        <tr><th>Şirket Telefon</th><td>${f.steps[4].invitation_company_phone_number || "-"}</td></tr>
        <tr><th>Şirket E-posta</th><td>${f.steps[4].invitation_company_email || "-"}</td></tr>
        ` : ""}
        ` : ""}
      </table>
    </div>

    <!-- 5. SCHENGEN & PARMAK İZİ BİLGİLERİ -->
    <div class="section">
      <div class="section-title"><span class="badge">05</span> SCHENGEN & PARMAK İZİ BİLGİLERİ</div>
      <table>
        <tr><th>Seyahat Başlangıç Tarihi</th><td>${toTRDate(f.steps[5].travel_start_date) || "-"}</td></tr>
        <tr><th>Seyahat Bitiş Tarihi</th><td>${toTRDate(f.steps[5].travel_end_date) || "-"}</td></tr>
        <tr><th>Daha Önce Schengen Vizesi Aldınız mı?</th><td>${f.steps[5].boolean_schengen_visa || "-"}</td></tr>
        ${String(f.steps[5].boolean_schengen_visa).toUpperCase() === "EVET" ? `
        <tr><th>Son Schengen vizenizin etiket numarası</th><td>${f.steps[5].schengen_visa_label_number || "-"}</td></tr>
        <tr><th>Parmak İzi Alındı mı?</th><td>${f.steps[5].fingerprint_taken || "-"}</td></tr>
        ${String(f.steps[5].fingerprint_taken).toUpperCase() === "EVET" ? `
        <tr><th>Parmak İzi Tarihi</th><td>${toTRDate(f.steps[5].fingerprint_taken_date) || "-"}</td></tr>
        ` : ""}
        <tr><th>Daha önce yurtdışına çıktınız mı?</th><td>${f.steps[5].boolean_abroad_country || "-"}</td></tr>
        ${Array.isArray(f.steps[5].abroad_country) && f.steps[5].abroad_country.length > 0 ? `
        <tr><th>Gidilen Ülke — Gidiş / Dönüş Tarihleri</th><td>
          ${f.steps[5].abroad_country.map((item, i) => `
            <div class="sub-entry">
              <strong>${i + 1}. Ülke</strong>
              Ülke: ${item.country || "-"}<br/>
              Gidiş Tarihi: ${toTRDate(item.start) || "-"}<br/>
              Dönüş Tarihi: ${toTRDate(item.end) || "-"}
            </div>`).join("")}
        </td></tr>
        ` : ""}
        ` : ""}
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
   
        if (photoBuffer) {
    attachments.push({
      filename: "photo.jpg",
      content: photoBuffer,
      cid: "profilePhoto",
      contentType: "image/jpeg",
    })}

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
      subject: `Schengen Vize Başvurusu - ${s(1).fullName || "İsimsiz"}`,
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
