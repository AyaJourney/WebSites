import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import sharp from "sharp";
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
  page.drawText("ABD DS-160 VİZE BAŞVURU FORMU BILGI FISI", {
    x: PAGE_WIDTH - MARGIN - boldFont.widthOfTextAtSize("ABD DS-160 VİZE BAŞVURU FORMU BILGI FISI", 10),
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
   drawSection("1. KİŞİSEL BİLGİLER");

/* ---------------- AD / TC ---------------- */
 let h1 = drawField("Ad Soyad", s(1).fullName, false, 0);
 let h2 = drawField("T.C. Kimlik No", s(1).tcId, false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

/* ---------------- DOĞUM ---------------- */
h1 = drawField("Doğum Tarihi", toTRDate(s(1).birthDate), false, 0);
h2 = drawField("Doğum Yeri", s(1).birthPlace, false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

/* ---------------- MEDENİ DURUM ---------------- */
h1 = drawField("Medeni Durum", s(1).maritalStatus, false, 0);

h2 =
  s(1).maritalStatus === "EVLI"
    ? drawField("Daha Önce Kullanılan Adı veya Soyadı", s(1).maidenName, false, CONTENT_WIDTH / 2)
    : drawField("Cinsiyet", s(1).gender, false, CONTENT_WIDTH / 2);

currentY -= Math.max(h1, h2) + 10;

/* ======================================================
   EVLİ → MEVCUT EVLİLİK & EŞ BİLGİLERİ
====================================================== */
if (s(1).maritalStatus === "EVLI") {
  drawSection("MEVCUT EVLİLİK BİLGİLERİ");

  h1 = drawField("Evlilik Tarihi", toTRDate(s(1).marriageDate), false, 0);
  h2 = drawField("Eş Adı Soyadı", s(1).spouseFullName, false, CONTENT_WIDTH / 2);
  currentY -= Math.max(h1, h2) + 10;

  h1 = drawField("Eş Doğum Tarihi", toTRDate(s(1).spouseBirthDate), false, 0);
  h2 = drawField("Eş Doğum Yeri", s(1).spouseBirthPlace, false, CONTENT_WIDTH / 2);
  currentY -= Math.max(h1, h2) + 10;

  h1 = drawField("Eş Mesleği", s(1).spouseOccupation, false, 0);
  h2 = drawField("Eş Adresi", s(1).spouseAddress, false, CONTENT_WIDTH / 2);
  currentY -= Math.max(h1, h2) + 10;
}

/* ======================================================
   ESKİ EVLİLİKLER
   - DUL
   - BOŞANMIŞ
   - EVLİ + otherMarriages === EVET
====================================================== */
const showOldMarriages =
  s(1).maritalStatus === "DUL" ||
  s(1).maritalStatus === "BOSANMIS" ||
  (s(1).maritalStatus === "EVLI" && s(1).otherMarriages === "EVET");

if (showOldMarriages && Array.isArray(s(1).marriages)) {
  drawSection("GEÇMİŞ EVLİLİKLER");

  s(1).marriages.forEach((m, index) => {
    // drawSubTitle(`Evlilik ${index + 1}`);

    h1 = drawField("Eski Eş Adı Soyadı", m.spouseFullName, false, 0);
    h2 = drawField("Eski Eş Doğum Tarihi", toTRDate(m.spouseBirthDate), false, CONTENT_WIDTH / 2);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("Evlilik Başlangıç Tarihi", toTRDate(m.marriageStartDate), false, 0);
    h2 = drawField("Evlilik Bitiş Tarihi", toTRDate(m.marriageEndDate), false, CONTENT_WIDTH / 2);
    currentY -= Math.max(h1, h2) + 15;
  });
}


  // --- Step 2: Kimlik & Uyruk Bilgileri ---
// ======================================================
// 2. BÖLÜM — KİMLİK VE UYRUK BİLGİLERİ
// ======================================================
currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);
drawSection("2. BÖLÜM — KİMLİK VE UYRUK BİLGİLERİ");

/* ------------------------------------------------------
   Uyruğu / Diğer Uyruğu
------------------------------------------------------ */

h1 = drawField(
  "Uyruğu",
  s(2).nationality && s(2).nationality.trim() !== ""
    ? s(2).nationality
    : "-",
  false,
  0
);

h2 = drawField(
  "Diğer Uyruğu",
  s(2).otherNationalityExist === "EVET" &&
  s(2).otherNationality &&
  s(2).otherNationality.trim() !== ""
    ? s(2).otherNationality
    : "-",
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;

/* ------------------------------------------------------
   T.C. Kimlik No / Son Geçerlilik Tarihi
------------------------------------------------------ */

h1 = drawField(
  "T.C. Kimlik No",
  s(2).tcId && s(2).tcId.trim() !== ""
    ? s(2).tcId
    : "-",
  false,
  0
);

h2 = drawField(
  "T.C. Kimlik Son Geçerlilik Tarihi",
  s(2).tcEndDate
    ? toTRDate(s(2).tcEndDate)
    : "-",
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;

/* ------------------------------------------------------
   ABD SSN / ABD Vergi No
------------------------------------------------------ */

h1 = drawField(
  "Amerika Sosyal Güvenlik Numarası (SSN)",
  s(2).ssn && s(2).ssn.trim() !== ""
    ? s(2).ssn
    : "-",
  false,
  0
);

h2 = drawField(
  "Amerika Vergi Numarası (VKN)",
  s(2).vkn && s(2).vkn.trim() !== ""
    ? s(2).vkn
    : "-",
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;

/* ------------------------------------------------------
   Başka Ülkede Oturum
------------------------------------------------------ */

h1 = drawField(
  "Başka Ülkede Oturum Var mı?",
  s(2).otherSessionExist && s(2).otherSessionExist.trim() !== ""
    ? s(2).otherSessionExist
    : "-",
  false,
  0
);

h2 = drawField(
  "Diğer Ülke Oturum Bilgisi",
  s(2).otherSessionExist === "EVET" &&
  s(2).otherSession &&
  s(2).otherSession.trim() !== ""
    ? s(2).otherSession
    : "-",
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;

/* ------------------------------------------------------
   Anne / Baba Bilgileri
------------------------------------------------------ */

h1 = drawField(
  "Anne Adı Soyadı",
  s(2).motherFullName && s(2).motherFullName.trim() !== ""
    ? s(2).motherFullName
    : "-",
  false,
  0
);

h2 = drawField(
  "Anne Doğum Tarihi",
  s(2).motherBirthDate
    ? toTRDate(s(2).motherBirthDate)
    : "-",
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;

h1 = drawField(
  "Baba Adı Soyadı",
  s(2).fatherFullName && s(2).fatherFullName.trim() !== ""
    ? s(2).fatherFullName
    : "-",
  false,
  0
);

h2 = drawField(
  "Baba Doğum Tarihi",
  s(2).fatherBirthDate
    ? toTRDate(s(2).fatherBirthDate)
    : "-",
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;





    // --- Step 3: Pasaport ---
  // ======================================================
// 3. BÖLÜM — SEYAHAT VE KONAKLAMA BİLGİLERİ
// ======================================================

drawSection("3. BÖLÜM");

/* ------------------------------------------------------
   Vize Türü / Gidiş Tarihi
------------------------------------------------------ */

h1 = drawField(
  "Vize Türü",
  s(3).visaType && s(3).visaType.trim() !== ""
    ? s(3).visaType
    : "-",
  false,
  0
);

 h2 = drawField(
  "ABD’ye Kesin Gidiş Tarihi",
  s(3).exactArrival
    ? toTRDate(s(3).exactArrival)
    : "-",
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;

/* ------------------------------------------------------
   Tahmini Gidiş / Kalış Süresi
------------------------------------------------------ */

h1 = drawField(
  "Tahmini Gidiş Tarihi",
  s(3).estimatedArrival
    ? toTRDate(s(3).estimatedArrival)
    : "-",
  false,
  0
);

h2 = drawField(
  "ABD’de Ne Kadar Kalacak",
  s(3).stayDuration && s(3).stayDuration.trim() !== ""
    ? s(3).stayDuration
    : "-",
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;

/* ------------------------------------------------------
   Konaklama Adresi / Masraflar
------------------------------------------------------ */

h1 = drawField(
  "ABD’de Kalacağı Açık Adres",
  s(3).stayAddress && s(3).stayAddress.trim() !== ""
    ? s(3).stayAddress
    : "-",
  true,
  0
);

h2 = drawField(
  "Gezinizin Masraflarını Kim Karşılayacak",
  s(3).whoPays && s(3).whoPays.trim() !== ""
    ? s(3).whoPays
    : "-",
  true,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;

/* ------------------------------------------------------
   Masrafları Başkası Karşılıyorsa
------------------------------------------------------ */

if (s(3).whoPays === "DIGER") {
  h1 = drawField(
    "Yakınlık Derecesi",
    s(3).relationDegree && s(3).relationDegree.trim() !== ""
      ? s(3).relationDegree
      : "-",
    true,
    0
  );

  h2 = drawField(
    "Adresi",
    s(3).payerAddress && s(3).payerAddress.trim() !== ""
      ? s(3).payerAddress
      : "-",
    true,
    CONTENT_WIDTH / 2
  );

  currentY -= Math.max(h1, h2) + 10;

  h1 = drawField(
    "Telefonu",
    s(3).payerPhone && s(3).payerPhone.trim() !== ""
      ? s(3).payerPhone
      : "-",
    true,
    0
  );

  h2 = drawField(
    "E-Posta",
    s(3).payerMail && s(3).payerMail.trim() !== ""
      ? s(3).payerMail
      : "-",
    true,
    CONTENT_WIDTH / 2
  );

  currentY -= Math.max(h1, h2) + 10;
}

/* ------------------------------------------------------
   ABD İrtibat / Akraba Bilgileri
------------------------------------------------------ */

h1 = drawField(
  "Amerika’da İrtibatınız Olan Kişi / Kurum",
  s(3).usContactInfo && s(3).usContactInfo.trim() !== ""
    ? s(3).usContactInfo
    : "-",
  true,
  0
);

h2 = drawField(
  "ABD’de Eş / Çocuk / Nişanlı / Kardeş",
  s(3).usRelativeInfo && s(3).usRelativeInfo.trim() !== ""
    ? s(3).usRelativeInfo
    : "-",
  true,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;

/* ------------------------------------------------------
   Footer
------------------------------------------------------ */

drawFooter(currentPage, pageCount);
 // 1. sayfa sonu

    // --- BÖLÜM 4: İş ve Maddi Durum ---
   // ======================================================
// 4. BÖLÜM — SEYAHAT VE VİZE GEÇMİŞİ
// ======================================================

currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);

drawSection("4. BÖLÜM");

/* ------------------------------------------------------
   Tek Başına Seyahat
------------------------------------------------------ */

h1 = drawField(
  "Tek Başına Seyahat Edecek misiniz?",
  s(4).travelAlone && s(4).travelAlone.trim() !== ""
    ? s(4).travelAlone
    : "-",
  true,
  0
);

currentY -= h1 + 10;

if (s(4).travelAlone === "HAYIR") {
  h1 = drawField(
    "Birlikte Seyahat Edeceğiniz Kişi (Ad Soyad / İlişki)",
    s(4).otherTraveler && s(4).otherTraveler.trim() !== ""
      ? s(4).otherTraveler
      : "-",
    false,
    0
  );

  currentY -= h1 + 10;
}

/* ------------------------------------------------------
   Daha Önce ABD’de Bulundunuz mu?
------------------------------------------------------ */

h1 = drawField(
  "Daha Önce ABD’de Bulundunuz mu?",
  s(4).beenToUS && s(4).beenToUS.trim() !== ""
    ? s(4).beenToUS
    : "-",
  true,
  0
);

currentY -= h1 + 10;

/* ------------------------------------------------------
   ABD Seyahat Geçmişi (Son Ziyaret)
------------------------------------------------------ */

if (s(4).beenToUS === "EVET") {
  // Eğer yeni yapı (travels) varsa → SON 5
  if (Array.isArray(s(4).travels) && s(4).travels.length > 0) {
    // drawSubSection("Yaptığınız Son 5 ABD Seyahati");

    s(4).travels.slice(0, 5).forEach((travel, index) => {
      h1 = drawField(
        `Seyahat ${index + 1} - Gidiş Tarihi`,
        travel.date ? toTRDate(travel.date) : "-",
        false,
        0
      );

      h2 = drawField(
        "Kaldığınız Süre",
        travel.duration && travel.duration.trim() !== ""
          ? travel.duration
          : "-",
        false,
        CONTENT_WIDTH / 2
      );

      currentY -= Math.max(h1, h2) + 10;
    });
  } 
  // Eski yapı fallback
  else {
    h1 = drawField(
      "Gittiğiniz Günün Tarihi",
      s(4).lastVisitDate
        ? toTRDate(s(4).lastVisitDate)
        : "-",
      false,
      0
    );

    h2 = drawField(
      "ABD’de Kaldığınız Süre",
      s(4).lastVisitDuration && s(4).lastVisitDuration.trim() !== ""
        ? s(4).lastVisitDuration
        : "-",
      false,
      CONTENT_WIDTH / 2
    );

    currentY -= Math.max(h1, h2) + 10;
  }
}

/* ------------------------------------------------------
   Daha Önce ABD Vizesi Aldınız mı?
------------------------------------------------------ */

h1 = drawField(
  "Daha Önce ABD Vizesi Aldınız mı?",
  s(4).hadUSVisa && s(4).hadUSVisa.trim() !== ""
    ? s(4).hadUSVisa
    : "-",
  true,
  0
);

currentY -= h1 + 10;

if (s(4).hadUSVisa === "EVET") {
  h1 = drawField(
    "Vize Tarihi",
    s(4).visaDate
      ? toTRDate(s(4).visaDate)
      : "-",
    false,
    0
  );

  h2 = drawField(
    "Vize Numarası",
    s(4).visaNumber && s(4).visaNumber.trim() !== ""
      ? s(4).visaNumber
      : "-",
    false,
    CONTENT_WIDTH / 2
  );

  currentY -= Math.max(h1, h2) + 10;
}

/* ------------------------------------------------------
   Vize Red Geçmişi
------------------------------------------------------ */

h1 = drawField(
  "Daha Önce ABD Vizesi Başvurunuz Reddedildi mi?",
  s(4).visaRefused && s(4).visaRefused.trim() !== ""
    ? s(4).visaRefused
    : "-",
  true,
  0
);

currentY -= h1 + 10;

if (s(4).visaRefused === "EVET") {
  h1 = drawField(
    "Vize Red Nedeni",
    s(4).visaRefusedDetail && s(4).visaRefusedDetail.trim() !== ""
      ? s(4).visaRefusedDetail
      : "-",
    false,
    0
  );

  currentY -= h1 + 10;
}

/* ------------------------------------------------------
   Footer
------------------------------------------------------ */

drawFooter(currentPage, pageCount);

   
currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);

  // ======================================================
// 5. BÖLÜM — ADRES, İLETİŞİM VE PASAPORT BİLGİLERİ
// ======================================================

drawSection("5. BÖLÜM");

/* ------------------------------------------------------
   Ev Adresi
------------------------------------------------------ */

h1 = drawField(
  "Ev Adresi",
  s(5).homeAddress && s(5).homeAddress.trim() !== ""
    ? s(5).homeAddress
    : "-",
  true,
  0
);

currentY -= h1 + 10;

/* ------------------------------------------------------
   Telefonlar
------------------------------------------------------ */

h1 = drawField(
  "Telefon 1",
  s(5).phone1 && s(5).phone1.trim() !== ""
    ? s(5).phone1
    : "-",
  false,
  0
);

 h2 = drawField(
  "Telefon 2",
  s(5).phone2 && s(5).phone2.trim() !== ""
    ? s(5).phone2
    : "-",
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;

h1 = drawField(
  "İş Telefonu",
  s(5).workPhone && s(5).workPhone.trim() !== ""
    ? s(5).workPhone
    : "-",
  false,
  0
);

currentY -= h1 + 10;

/* ------------------------------------------------------
   E-Posta
------------------------------------------------------ */

h1 = drawField(
  "E-Posta",
  s(5).email && s(5).email.trim() !== ""
    ? s(5).email
    : "-",
  false,
  0
);

currentY -= h1 + 10;

/* ------------------------------------------------------
   Sosyal Medya
------------------------------------------------------ */

h1 = drawField(
  "Sosyal Medya Hesabı Var mı?",
  s(5).hasSocialMedia && s(5).hasSocialMedia.trim() !== ""
    ? s(5).hasSocialMedia
    : "-",
  false,
  0
);

currentY -= h1 + 10;

if (
  s(5).hasSocialMedia === "EVET" &&
  Array.isArray(s(5).socialMediaAccounts) &&
  s(5).socialMediaAccounts.length > 0
) {
  s(5).socialMediaAccounts.forEach((acc) => {
    h1 = drawField(
      acc.platform || "Sosyal Medya",
      acc.username && acc.username.trim() !== ""
        ? acc.username
        : "-",
      false,
      0
    );
    currentY -= h1 + 6;
  });

  currentY -= 6;
}

/* ------------------------------------------------------
   Pasaport Bilgileri
------------------------------------------------------ */

h1 = drawField(
  "Pasaport Tipi",
  s(5).passportType && s(5).passportType.trim() !== ""
    ? s(5).passportType
    : "-",
  false,
  0
);

h2 = drawField(
  "Pasaport No",
  s(5).passportNumber && s(5).passportNumber.trim() !== ""
    ? s(5).passportNumber
    : "-",
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;

h1 = drawField(
  "Veriliş Makamı",
  s(5).passportAuthority && s(5).passportAuthority.trim() !== ""
    ? s(5).passportAuthority
    : "-",
  false,
  0
);

h2 = drawField(
  "Pasaport Geçerlilik Tarihi",
  `${s(5).passportStart ? toTRDate(s(5).passportStart) : "-"} / ${
    s(5).passportEnd ? toTRDate(s(5).passportEnd) : "-"
  }`,
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;

/* ------------------------------------------------------
   Kaybolan Pasaport
------------------------------------------------------ */

h1 = drawField(
  "Kaybolan Pasaport No",
  s(5).lostPassportNumber && s(5).lostPassportNumber.trim() !== ""
    ? s(5).lostPassportNumber
    : "-",
  false,
  0
);

currentY -= h1 + 10;

/* ------------------------------------------------------
   Footer
------------------------------------------------------ */

drawFooter(currentPage, pageCount);
currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);
// --- 6. Bölüm ---
// ======================================================
// 6. BÖLÜM — ÇALIŞMA VE EĞİTİM BİLGİLERİ
// ======================================================

drawSection("6. BÖLÜM — ÇALIŞMA VE EĞİTİM BİLGİLERİ");

/* ========== MESLEK / İŞ ========== */

h1 = drawField(
  "Meslek / Pozisyon",
  s(6).occupation && s(6).occupation.trim() !== ""
    ? s(6).occupation
    : "-",
  true,
  0
);

currentY -= h1 + 10;

h1 = drawField(
  "İş / Okul Adı",
  s(6).workOrSchoolName && s(6).workOrSchoolName.trim() !== ""
    ? s(6).workOrSchoolName
    : "-",
  false,
  0
);

 h2 = drawField(
  "İş / Okul Adresi",
  s(6).workOrSchoolAddress && s(6).workOrSchoolAddress.trim() !== ""
    ? s(6).workOrSchoolAddress
    : "-",
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;

h1 = drawField(
  "İş Telefonu",
  s(6).workPhone && s(6).workPhone.trim() !== ""
    ? s(6).workPhone
    : "-",
  false,
  0
);

h2 = drawField(
  "Başlangıç Tarihi",
  s(6).workStartDate
    ? toTRDate(s(6).workStartDate)
    : "-",
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;

h1 = drawField(
  "Aylık Gelir",
  s(6).monthlyIncome && s(6).monthlyIncome.trim() !== ""
    ? s(6).monthlyIncome
    : "-",
  false,
  0
);

h2 = drawField(
  "İş Tanımı",
  s(6).jobDescription && s(6).jobDescription.trim() !== ""
    ? s(6).jobDescription
    : "-",
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 12;

/* ========== ÖNCEKİ İŞLER (ARRAY) ========== */

if (
  Array.isArray(s(6).previousJobs) &&
  s(6).previousJobs.length > 0
) {
  s(6).previousJobs.forEach((job, index) => {
    const hasAnyData =
      job.companyName ||
      job.companyAddress ||
      job.position ||
      job.startDate ||
      job.endDate;

    if (!hasAnyData) return;

    let j1 = drawField(
      `İşyeri Adı (${index + 1})`,
      job.companyName && job.companyName.trim() !== ""
        ? job.companyName
        : "-",
      false,
      0
    );

    let j2 = drawField(
      "İşyeri Adresi",
      job.companyAddress && job.companyAddress.trim() !== ""
        ? job.companyAddress
        : "-",
      false,
      CONTENT_WIDTH / 2
    );

    currentY -= Math.max(j1, j2) + 8;

    j1 = drawField(
      "Pozisyon",
      job.position && job.position.trim() !== ""
        ? job.position
        : "-",
      false,
      0
    );

    j2 = drawField(
      "Çalışma Tarihleri",
      `${
        job.startDate ? toTRDate(job.startDate) : "-"
      } / ${
        job.endDate ? toTRDate(job.endDate) : "-"
      }`,
      false,
      CONTENT_WIDTH / 2
    );

    currentY -= Math.max(j1, j2) + 12;
  });
}

/* ========== EĞİTİM BİLGİLERİ ========== */

/* LİSE */

h1 = drawField(
  "Lise Adı",
  s(6).highSchoolName && s(6).highSchoolName.trim() !== ""
    ? s(6).highSchoolName
    : "-",
  false,
  0
);

h2 = drawField(
  "Lise Tarihleri",
  `${
    s(6).highSchoolStartDate
      ? toTRDate(s(6).highSchoolStartDate)
      : "-"
  } / ${
    s(6).highSchoolEndDate
      ? toTRDate(s(6).highSchoolEndDate)
      : "-"
  }`,
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 8;

h1 = drawField(
  "Lise Adresi",
  s(6).highSchoolAddress && s(6).highSchoolAddress.trim() !== ""
    ? s(6).highSchoolAddress
    : "-",
  true,
  0
);

currentY -= h1 + 10;

/* ÜNİVERSİTE */

h1 = drawField(
  "Üniversite Adı",
  s(6).universityName && s(6).universityName.trim() !== ""
    ? s(6).universityName
    : "-",
  false,
  0
);

h2 = drawField(
  "Üniversite Tarihleri",
  `${
    s(6).universityStartDate
      ? toTRDate(s(6).universityStartDate)
      : "-"
  } / ${
    s(6).universityEndDate
      ? toTRDate(s(6).universityEndDate)
      : "-"
  }`,
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 8;

h1 = drawField(
  "Üniversite Adresi",
  s(6).universityAddress && s(6).universityAddress.trim() !== ""
    ? s(6).universityAddress
    : "-",
  true,
  0
);

currentY -= h1 + 10;

/* FOOTER */
drawFooter(currentPage, pageCount);

 // sayfa numarası için footer çizimi

// Başlık
// ======================================================
// 7. BÖLÜM — DİL, SEYAHAT VE ASKERLİK BİLGİLERİ
// ======================================================
currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);
drawSection("7. BÖLÜM");

/* ------------------------------------------------------
   Konuşulan Diller
------------------------------------------------------ */

h1 = drawField(
  "Konuşulan Diller",
  s(7).languages && s(7).languages.trim() !== ""
    ? s(7).languages
    : "-",
  false,
  0
);

currentY -= h1 + 10;

/* ------------------------------------------------------
   Ziyaret Edilen Ülkeler
------------------------------------------------------ */

h1 = drawField(
  "Ziyaret Edilen Ülkeler",
  s(7).visitedCountries && s(7).visitedCountries.trim() !== ""
    ? s(7).visitedCountries
    : "-",
  false,
  0
);

currentY -= h1 + 10;

/* ------------------------------------------------------
   Askerlik Durumu
------------------------------------------------------ */

h1 = drawField(
  "Askerlik Durumu",
  s(7).militaryStatus && s(7).militaryStatus.trim() !== ""
    ? s(7).militaryStatus
    : "-",
  false,
  0
);

currentY -= h1 + 10;

/* Askerlik Detayları */
if (s(7).militaryStatus === "YAPTI") {
  h1 = drawField(
    "Askerlik Başlangıç Tarihi",
    s(7).militaryStartDate
      ? toTRDate(s(7).militaryStartDate)
      : "-",
    false,
    0
  );

   h2 = drawField(
    "Askerlik Bitiş Tarihi",
    s(7).militaryEndDate
      ? toTRDate(s(7).militaryEndDate)
      : "-",
    false,
    CONTENT_WIDTH / 2
  );

  currentY -= Math.max(h1, h2) + 10;
}

if (s(7).militaryStatus === "MUAF") {
  h1 = drawField(
    "Muafiyet Nedeni",
    s(7).exemptionReason && s(7).exemptionReason.trim() !== ""
      ? s(7).exemptionReason
      : "-",
    false,
    0
  );

  currentY -= h1 + 10;
}

if (s(7).militaryStatus === "YAPMADI") {
  h1 = drawField(
    "Tecil Tarihi",
    s(7).defermentDate
      ? toTRDate(s(7).defermentDate)
      : "-",
    false,
    0
  );

  currentY -= h1 + 10;
}

/* ------------------------------------------------------
   Ek Bilgiler
------------------------------------------------------ */

h1 = drawField(
  "Ek Bilgiler",
  s(7).additionalInfo && s(7).additionalInfo.trim() !== ""
    ? s(7).additionalInfo
    : "-",
  true,
  0
);

currentY -= h1 + 20;

/* ------------------------------------------------------
   Footer & Yeni Sayfa
------------------------------------------------------ */

drawFooter(currentPage, pageCount);

currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);


    // --- DOSYALAR (GÖRSELLER) ---

const files = formData.steps["8"] || {};
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

drawFooter(currentPage, pageCount);

const pdfBytes = await pdfDoc.save();


drawSection("8.BÖLÜM");
    // --- Passport ve Photo base64 -> Buffer ---
    let passportBuffer = null;
    let photoBuffer = null;

    if (s(8).passportFile) {
      const base64 = s(8).passportFileBase64.includes(",")
        ? s(8).passportFileBase64.split(",")[1]
        : s(8).passportFileBase64;
      passportBuffer = Buffer.from(base64, "base64");
    }
    
    if (s(8).photoFile) {
      const base64 = s(8).photoFileBase64.includes(",")
        ? s(8).photoFileBase64.split(",")[1]
        : s(8).photoFileBase64;
      photoBuffer = Buffer.from(base64, "base64");
    }

// if (s(8).photoFile && typeof s(8).photoFile === "string") {
//   const base64 = s(8).photoFile.includes(",")
//     ? s(8).photoFile.split(",")[1]  // dataURL varsa ayır
//     : s(8).photoFile;                // yoksa direkt base64
//   photoBuffer = Buffer.from(base64, "base64");
// }




let pdfBuffer = null;
  if (pdfBytes) {
    pdfBuffer = Buffer.isBuffer(pdfBytes)
      ? pdfBytes
      : Buffer.from(pdfBytes, "base64");
  }

    // --- Text & HTML Body ---
// formData: gönderilen form verisi
const f = formData; // veya defaultForm yerine bu kullanılacak

// --- TEXT BODY ---
const textBody = `
ABD VİZE BAŞVURU (DS-160)

-- KİŞİSEL BİLGİLER --

Ad Soyad: ${s(1).fullName || "-"}
Cinsiyet: ${s(1).gender || "-"}
Medeni Durum: ${s(1).maritalStatus || "-"}
Evlenmeden Önceki Soyadı: ${s(1).maidenName || "-"}

Doğum Tarihi: ${toTRDate(s(1).birthDate) || "-"}
Doğum Yeri: ${s(1).birthPlace || "-"}

${
  s(1).maritalStatus === "EVLI"
    ? `
-- MEVCUT EVLİLİK --
Evlilik Tarihi: ${toTRDate(s(1).marriageDate) || "-"}
Eş Adı Soyadı: ${s(1).spouseFullName || "-"}
Eş Doğum Tarihi: ${toTRDate(s(1).spouseBirthDate) || "-"}
Eş Doğum Yeri: ${s(1).spouseBirthPlace || "-"}
Eş Mesleği: ${s(1).spouseOccupation || "-"}
Eş Adresi: ${s(1).spouseAddress || "-"}
`
    : ""
}

${
  s(1).otherMarriages === "EVET" ||
  ["DUL", "BOSANMIS"].includes(s(1).maritalStatus)
    ? `
-- ESKİ EVLİLİKLER --
${s(1).marriages
  ?.map(
    (m, i) => `
Eski Eş ${i + 1} Ad Soyad: ${m.spouseFullName || "-"}
Eski Eş Doğum Tarihi: ${toTRDate(m.spouseBirthDate) || "-"}
Evlilik Başlangıç Tarihi: ${toTRDate(m.marriageStartDate) || "-"}
Evlilik Bitiş Tarihi: ${toTRDate(m.marriageEndDate) || "-"}
`
  )
  .join("")}
`
    : ""
}

-- Vatandaşlık / Kimlik --

Uyruğu: ${
  s(2).nationality && s(2).nationality.trim() !== ""
    ? s(2).nationality
    : "-"
}

Diğer Uyruğu: ${
  s(2).otherNationalityExist === "EVET" &&
  s(2).otherNationality &&
  s(2).otherNationality.trim() !== ""
    ? s(2).otherNationality
    : "-"
}

T.C. Kimlik No: ${
  s(2).tcId && s(2).tcId.trim() !== ""
    ? s(2).tcId
    : "-"
}

T.C. Kimlik Kartı Son Geçerlilik Tarihi: ${
  s(2).tcEndDate
    ? toTRDate(s(2).tcEndDate)
    : "-"
}

ABD Sosyal Güvenlik No (SSN): ${
  s(2).ssn && s(2).ssn.trim() !== ""
    ? s(2).ssn
    : "-"
}

ABD Vergi No (VKN): ${
  s(2).vkn && s(2).vkn.trim() !== ""
    ? s(2).vkn
    : "-"
}

-- Anne / Baba Bilgileri --

Anne Adı Soyadı: ${
  s(2).motherFullName && s(2).motherFullName.trim() !== ""
    ? s(2).motherFullName
    : "-"
}

Anne Doğum Tarihi: ${
  s(2).motherBirthDate
    ? toTRDate(s(2).motherBirthDate)
    : "-"
}

Baba Adı Soyadı: ${
  s(2).fatherFullName && s(2).fatherFullName.trim() !== ""
    ? s(2).fatherFullName
    : "-"
}

Baba Doğum Tarihi: ${
  s(2).fatherBirthDate
    ? toTRDate(s(2).fatherBirthDate)
    : "-"
}


-- Vize Detayları --

Vize Türü: ${
  s(3).visaType && s(3).visaType.trim() !== ""
    ? s(3).visaType
    : "-"
}

ABD’ye Kesin Gidiş Tarihi: ${
  s(3).exactArrival
    ? toTRDate(s(3).exactArrival)
    : "-"
}

Tahmini Gidiş Tarihi: ${
  s(3).estimatedArrival
    ? toTRDate(s(3).estimatedArrival)
    : "-"
}

Kalış Süresi: ${
  s(3).stayDuration && s(3).stayDuration.trim() !== ""
    ? s(3).stayDuration
    : "-"
}

Kalınacak Adres: ${
  s(3).stayAddress && s(3).stayAddress.trim() !== ""
    ? s(3).stayAddress
    : "-"
}

Masrafları Kim Karşılıyor: ${
  s(3).whoPays && s(3).whoPays.trim() !== ""
    ? s(3).whoPays
    : "-"
}

İlişki Derecesi: ${
  ((s(3).whoPays === "DIGER") || (s(3).whoPays === "ANNE_BABA") || (s(3).whoPays === "ES")|| (s(3).whoPays ==="IS_YERI")) &&
  s(3).relationDegree &&
  s(3).relationDegree.trim() !== ""
    ? s(3).relationDegree
    : "-"
}

Masraf Sahibinin Adresi: ${
  ((s(3).whoPays === "DIGER") || (s(3).whoPays === "ANNE_BABA") || (s(3).whoPays === "ES")|| (s(3).whoPays ==="IS_YERI")) &&
  s(3).payerAddress &&
  s(3).payerAddress.trim() !== ""
    ? s(3).payerAddress
    : "-"
}

Masraf Sahibinin Telefonu: ${
  ((s(3).whoPays === "DIGER") || (s(3).whoPays === "ANNE_BABA") || (s(3).whoPays === "ES")|| (s(3).whoPays ==="IS_YERI")) &&
  s(3).payerPhone &&
  s(3).payerPhone.trim() !== ""
    ? s(3).payerPhone
    : "-"
}

Masraf Sahibinin E-Postası: ${
  ((s(3).whoPays === "DIGER") || (s(3).whoPays === "ANNE_BABA") || (s(3).whoPays === "ES")|| (s(3).whoPays ==="IS_YERI")) &&
  s(3).payerMail &&
  s(3).payerMail.trim() !== ""
    ? s(3).payerMail
    : "-"
}

ABD’de İrtibat Kişi / Kurum: ${
  s(3).usContactInfo && s(3).usContactInfo.trim() !== ""
    ? s(3).usContactInfo
    : "-"
}

ABD’de Aile Üyesi (Eş / Çocuk / Nişanlı / Kardeş): ${
  s(3).usRelativeInfo && s(3).usRelativeInfo.trim() !== ""
    ? s(3).usRelativeInfo
    : "-"
}


-- Seyahat Geçmişi --

Yalnız Seyahat: ${
  s(4).travelAlone && s(4).travelAlone.trim() !== ""
    ? s(4).travelAlone
    : "-"
}

Diğer Yolcular: ${
  s(4).travelAlone === "HAYIR" &&
  s(4).otherTraveler &&
  s(4).otherTraveler.trim() !== ""
    ? s(4).otherTraveler
    : "-"
}

ABD’ye Daha Önce Gidildi mi: ${
  s(4).beenToUS && s(4).beenToUS.trim() !== ""
    ? s(4).beenToUS
    : "-"
}

/* --------------------------------------------------
   ABD Seyahat Detayları
-------------------------------------------------- */

/* --------------------------------------------------
   ABD Seyahat Geçmişi
-------------------------------------------------- */
ABD Seyahatleri:
${
  s(4).beenToUS === "EVET" &&
  Array.isArray(s(4).travels) &&
  s(4).travels.length > 0
    ? s(4).travels
        .slice(-5) // her zaman SON 5 seyahati alır
        .map(
          (travel, index) =>
            `${index + 1}. Seyahat
Gidiş Tarihi: ${
  travel.date ? toTRDate(travel.date) : "-"
}
Kaldığı Süre: ${
  travel.duration && travel.duration.trim() !== ""
    ? travel.duration
    : "-"
}`
        )
        .join("\n\n")
    : "-"
}


/* --------------------------------------------------
   Önceki ABD Vizeleri
-------------------------------------------------- */

Daha Önce ABD Vizesi Alındı mı: ${
  s(4).hadUSVisa && s(4).hadUSVisa.trim() !== ""
    ? s(4).hadUSVisa
    : "-"
}

Vize Tarihi: ${
  s(4).hadUSVisa === "EVET" &&
  s(4).visaDate
    ? toTRDate(s(4).visaDate)
    : "-"
}

Vize Numarası: ${
  s(4).hadUSVisa === "EVET" &&
  s(4).visaNumber &&
  s(4).visaNumber.trim() !== ""
    ? s(4).visaNumber
    : "-"
}

/* --------------------------------------------------
   Vize Red Geçmişi
-------------------------------------------------- */

Vize Reddi: ${
  s(4).visaRefused && s(4).visaRefused.trim() !== ""
    ? s(4).visaRefused
    : "-"
}

Vize Reddi Nedeni: ${
  s(4).visaRefused === "EVET" &&
  s(4).visaRefusedDetail &&
  s(4).visaRefusedDetail.trim() !== ""
    ? s(4).visaRefusedDetail
    : "-"
}



-- Pasaport ve İletişim Bilgileri --

Adres: ${
  s(5).homeAddress && s(5).homeAddress.trim() !== ""
    ? s(5).homeAddress
    : "-"
}

Telefon 1: ${
  s(5).phone1 && s(5).phone1.trim() !== ""
    ? s(5).phone1
    : "-"
}

Telefon 2: ${
  s(5).phone2 && s(5).phone2.trim() !== ""
    ? s(5).phone2
    : "-"
}

İş Telefonu: ${
  s(5).workPhone && s(5).workPhone.trim() !== ""
    ? s(5).workPhone
    : "-"
}

E-Posta: ${
  s(5).email && s(5).email.trim() !== ""
    ? s(5).email
    : "-"
}

Sosyal Medya Hesabı Var mı?: ${
  s(5).hasSocialMedia && s(5).hasSocialMedia.trim() !== ""
    ? s(5).hasSocialMedia
    : "-"
}

/* Sosyal Medya Detayları */
Sosyal Medya Hesapları:
${
  s(5).hasSocialMedia === "EVET" &&
  Array.isArray(s(5).socialMediaAccounts) &&
  s(5).socialMediaAccounts.length > 0
    ? s(5).socialMediaAccounts
        .map(
          (acc) =>
            `- ${acc.platform || "Platform"}: ${
              acc.username && acc.username.trim() !== ""
                ? acc.username
                : "-"
            }`
        )
        .join("\n")
    : "-"
}

-- Pasaport Bilgileri --

Pasaport Türü: ${
  s(5).passportType && s(5).passportType.trim() !== ""
    ? s(5).passportType
    : "-"
}

Pasaport No: ${
  s(5).passportNumber && s(5).passportNumber.trim() !== ""
    ? s(5).passportNumber
    : "-"
}

Pasaportu Veren Makam: ${
  s(5).passportAuthority && s(5).passportAuthority.trim() !== ""
    ? s(5).passportAuthority
    : "-"
}

Pasaport Başlangıç Tarihi: ${
  s(5).passportStart
    ? toTRDate(s(5).passportStart)
    : "-"
}

Pasaport Bitiş Tarihi: ${
  s(5).passportEnd
    ? toTRDate(s(5).passportEnd)
    : "-"
}

Kaybolan Pasaport No: ${
  s(5).lostPassportNumber && s(5).lostPassportNumber.trim() !== ""
    ? s(5).lostPassportNumber
    : "-"
}


-- İş ve Eğitim Bilgileri --

Meslek: ${
  s(6).occupation && s(6).occupation.trim() !== ""
    ? s(6).occupation
    : "-"
}

/* --------------------------------------------------
   İş / Okul Bilgileri
-------------------------------------------------- */

İş / Okul Adı: ${
  s(6).workOrSchoolName && s(6).workOrSchoolName.trim() !== ""
    ? s(6).workOrSchoolName
    : "-"
}

İş / Okul Adresi: ${
  s(6).workOrSchoolAddress && s(6).workOrSchoolAddress.trim() !== ""
    ? s(6).workOrSchoolAddress
    : "-"
}

İş Telefonu: ${
  s(6).workPhone && s(6).workPhone.trim() !== ""
    ? s(6).workPhone
    : "-"
}

Başlangıç Tarihi: ${
  s(6).workStartDate
    ? toTRDate(s(6).workStartDate)
    : "-"
}

Aylık Gelir: ${
  s(6).monthlyIncome && s(6).monthlyIncome.trim() !== ""
    ? s(6).monthlyIncome
    : "-"
}

İş Tanımı: ${
  s(6).jobDescription && s(6).jobDescription.trim() !== ""
    ? s(6).jobDescription
    : "-"
}

/* --------------------------------------------------
   Önceki İş Deneyimleri
-------------------------------------------------- */

Önceki İşler:
${
  Array.isArray(s(6).previousJobs) &&
  s(6).previousJobs.some(
    (job) =>
      job.companyName ||
      job.companyAddress ||
      job.position ||
      job.startDate ||
      job.endDate
  )
    ? s(6).previousJobs
        .filter(
          (job) =>
            job.companyName ||
            job.companyAddress ||
            job.position ||
            job.startDate ||
            job.endDate
        )
        .map(
          (job, i) =>
            `${i + 1}. İş Yeri: ${
              job.companyName && job.companyName.trim() !== ""
                ? job.companyName
                : "-"
            }
   Ünvan: ${
     job.position && job.position.trim() !== ""
       ? job.position
       : "-"
   }
   Adres: ${
     job.companyAddress && job.companyAddress.trim() !== ""
       ? job.companyAddress
       : "-"
   }
   Başlangıç: ${
     job.startDate ? toTRDate(job.startDate) : "-"
   }
   Bitiş: ${
     job.endDate ? toTRDate(job.endDate) : "-"
   }`
        )
        .join("\n\n")
    : "-"
}

/* --------------------------------------------------
   Lise Bilgileri
-------------------------------------------------- */

Lise Adı: ${
  s(6).highSchoolName && s(6).highSchoolName.trim() !== ""
    ? s(6).highSchoolName
    : "-"
}

Başlangıç Tarihi: ${
  s(6).highSchoolStartDate
    ? toTRDate(s(6).highSchoolStartDate)
    : "-"
}

Mezuniyet Tarihi: ${
  s(6).highSchoolEndDate
    ? toTRDate(s(6).highSchoolEndDate)
    : "-"
}

Lise Adresi: ${
  s(6).highSchoolAddress && s(6).highSchoolAddress.trim() !== ""
    ? s(6).highSchoolAddress
    : "-"
}

/* --------------------------------------------------
   Üniversite Bilgileri
-------------------------------------------------- */

Üniversite Adı: ${
  s(6).universityName && s(6).universityName.trim() !== ""
    ? s(6).universityName
    : "-"
}

Başlangıç Tarihi: ${
  s(6).universityStartDate
    ? toTRDate(s(6).universityStartDate)
    : "-"
}

Mezuniyet Tarihi: ${
  s(6).universityEndDate
    ? toTRDate(s(6).universityEndDate)
    : "-"
}

Üniversite Adresi: ${
  s(6).universityAddress && s(6).universityAddress.trim() !== ""
    ? s(6).universityAddress
    : "-"
}


-- Diğer Bilgiler --

Konuşulan Diller: ${
  s(7).languages && s(7).languages.trim() !== ""
    ? s(7).languages
    : "-"
}

Ziyaret Edilen Ülkeler: ${
  s(7).visitedCountries && s(7).visitedCountries.trim() !== ""
    ? s(7).visitedCountries
    : "-"
}

Askerlik Durumu: ${
  s(7).militaryStatus && s(7).militaryStatus.trim() !== ""
    ? s(7).militaryStatus
    : "-"
}

/* Askerlik Detayları */
Askerlik Başlangıç Tarihi: ${
  s(7).militaryStatus === "YAPTI" && s(7).militaryStartDate
    ? toTRDate(s(7).militaryStartDate)
    : "-"
}

Askerlik Bitiş Tarihi: ${
  s(7).militaryStatus === "YAPTI" && s(7).militaryEndDate
    ? toTRDate(s(7).militaryEndDate)
    : "-"
}

Muafiyet Nedeni: ${
  s(7).militaryStatus === "MUAF" &&
  s(7).exemptionReason &&
  s(7).exemptionReason.trim() !== ""
    ? s(7).exemptionReason
    : "-"
}

Tecil Tarihi: ${
  s(7).militaryStatus === "YAPMADI" && s(7).defermentDate
    ? toTRDate(s(7).defermentDate)
    : "-"
}

Ek Bilgiler: ${
  s(7).additionalInfo && s(7).additionalInfo.trim() !== ""
    ? s(7).additionalInfo
    : "-"
}

Başvuru Tarihi: ${new Date().toLocaleString("tr-TR")}
`.trim();


// --- HTML BODY ---
const htmlBody = `
<h2>ABD Vize Başvuru (DS-160)</h2>

<h3>Kişisel Bilgiler</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%; background-color:#f9f9f9;">
  <tbody>
    <tr>
      <th style="background-color:#e0e0e0;">Ad Soyad</th>
      <td>${s(1).fullName || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Cinsiyet</th>
      <td>${s(1).gender || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Medeni Durum</th>
      <td>${s(1).maritalStatus || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Kızlık Soyadı</th>
      <td>${s(1).maidenName || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Doğum Tarihi</th>
      <td>${toTRDate(s(1).birthDate) || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Doğum Yeri</th>
      <td>${s(1).birthPlace || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Evlilik Tarihi</th>
      <td>${toTRDate(s(1).marriageDate) || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Eş Adı Soyadı</th>
      <td>${s(1).spouseFullName || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Eş Doğum Tarihi</th>
      <td>${toTRDate(s(1).spouseBirthDate) || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Eş Doğum Yeri</th>
      <td>${s(1).spouseBirthPlace || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Eş Adresi</th>
      <td>${s(1).spouseAddress || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Eş Mesleği</th>
      <td>${s(1).spouseOccupation || "-"}</td>
    </tr>
  </tbody>
</table>


<h3>Vatandaşlık & Kimlik Bilgileri</h3>

<table
  border="1"
  cellspacing="0"
  cellpadding="5"
  style="border-collapse: collapse; width:100%; background-color:#f9f9f9;"
>
  <tbody>
    <tr>
      <th style="background-color:#e0e0e0;">Uyruğu</th>
      <td>
        ${s(2).nationality && s(2).nationality.trim() !== ""
          ? s(2).nationality
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Diğer Uyruğu</th>
      <td>
        ${s(2).otherNationalityExist === "EVET" &&
        s(2).otherNationality &&
        s(2).otherNationality.trim() !== ""
          ? s(2).otherNationality
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">T.C. Kimlik No</th>
      <td>
        ${s(2).tcId && s(2).tcId.trim() !== ""
          ? s(2).tcId
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">
        T.C. Kimlik Kartı Son Geçerlilik Tarihi
      </th>
      <td>
        ${s(2).tcEndDate
          ? toTRDate(s(2).tcEndDate)
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">
        ABD Sosyal Güvenlik No (SSN)
      </th>
      <td>
        ${s(2).ssn && s(2).ssn.trim() !== ""
          ? s(2).ssn
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">
        ABD Vergi No (VKN)
      </th>
      <td>
        ${s(2).vkn && s(2).vkn.trim() !== ""
          ? s(2).vkn
          : "-"}
      </td>
    </tr>
  </tbody>
</table>

<br />

<h3>Anne & Baba Bilgileri</h3>

<table
  border="1"
  cellspacing="0"
  cellpadding="5"
  style="border-collapse: collapse; width:100%; background-color:#f9f9f9;"
>
  <tbody>
    <tr>
      <th style="background-color:#e0e0e0;">Anne Adı Soyadı</th>
      <td>
        ${s(2).motherFullName && s(2).motherFullName.trim() !== ""
          ? s(2).motherFullName
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Anne Doğum Tarihi</th>
      <td>
        ${s(2).motherBirthDate
          ? toTRDate(s(2).motherBirthDate)
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Baba Adı Soyadı</th>
      <td>
        ${s(2).fatherFullName && s(2).fatherFullName.trim() !== ""
          ? s(2).fatherFullName
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Baba Doğum Tarihi</th>
      <td>
        ${s(2).fatherBirthDate
          ? toTRDate(s(2).fatherBirthDate)
          : "-"}
      </td>
    </tr>
  </tbody>
</table>



<h3>Vize Detayları</h3>

<table
  border="1"
  cellspacing="0"
  cellpadding="5"
  style="border-collapse: collapse; width:100%;"
>
  <tbody>
    <tr>
      <th style="background-color:#e0e0e0;">Vize Türü</th>
      <td>
        ${s(3).visaType && s(3).visaType.trim() !== ""
          ? s(3).visaType
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">ABD’ye Kesin Gidiş Tarihi</th>
      <td>
        ${s(3).exactArrival
          ? toTRDate(s(3).exactArrival)
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Tahmini Gidiş Tarihi</th>
      <td>
        ${s(3).estimatedArrival
          ? toTRDate(s(3).estimatedArrival)
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Kalış Süresi</th>
      <td>
        ${s(3).stayDuration && s(3).stayDuration.trim() !== ""
          ? s(3).stayDuration
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Kalınacak Adres</th>
      <td>
        ${s(3).stayAddress && s(3).stayAddress.trim() !== ""
          ? s(3).stayAddress
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Masrafları Kim Karşılıyor</th>
      <td>
        ${s(3).whoPays && s(3).whoPays.trim() !== ""
          ? s(3).whoPays
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">İlişki Derecesi</th>
      <td>
        ${ ((s(3).whoPays === "DIGER") || (s(3).whoPays === "ANNE_BABA") || (s(3).whoPays === "ES")|| (s(3).whoPays ==="IS_YERI")) &&
        s(3).relationDegree &&
        s(3).relationDegree.trim() !== ""
          ? s(3).relationDegree
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Masraf Sahibinin Adresi</th>
      <td>
        ${ ((s(3).whoPays === "DIGER") || (s(3).whoPays === "ANNE_BABA") || (s(3).whoPays === "ES")|| (s(3).whoPays ==="IS_YERI")) &&
        s(3).payerAddress &&
        s(3).payerAddress.trim() !== ""
          ? s(3).payerAddress
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Masraf Sahibinin Telefonu</th>
      <td>
        ${ ((s(3).whoPays === "DIGER") || (s(3).whoPays === "ANNE_BABA") || (s(3).whoPays === "ES")|| (s(3).whoPays ==="IS_YERI")) &&
        s(3).payerPhone &&
        s(3).payerPhone.trim() !== ""
          ? s(3).payerPhone
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Masraf Sahibinin E-Postası</th>
      <td>
        ${ ((s(3).whoPays === "DIGER") || (s(3).whoPays === "ANNE_BABA") || (s(3).whoPays === "ES")|| (s(3).whoPays ==="IS_YERI")) &&
        s(3).payerMail &&
        s(3).payerMail.trim() !== ""
          ? s(3).payerMail
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">
        ABD’de İrtibat Kişi / Kurum
      </th>
      <td>
        ${s(3).usContactInfo && s(3).usContactInfo.trim() !== ""
          ? s(3).usContactInfo
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">
        ABD’de Aile Üyesi (Eş / Çocuk / Nişanlı / Kardeş)
      </th>
      <td>
        ${s(3).usRelativeInfo && s(3).usRelativeInfo.trim() !== ""
          ? s(3).usRelativeInfo
          : "-"}
      </td>
    </tr>
  </tbody>
</table>


<h3>Seyahat Geçmişi</h3>

<table
  border="1"
  cellspacing="0"
  cellpadding="5"
  style="border-collapse: collapse; width:100%;"
>
  <tbody>
    <tr>
      <th style="background-color:#e0e0e0;">Yalnız Seyahat</th>
      <td>
        ${s(4).travelAlone && s(4).travelAlone.trim() !== ""
          ? s(4).travelAlone
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Diğer Yolcular</th>
      <td>
        ${s(4).travelAlone === "HAYIR" &&
        s(4).otherTraveler &&
        s(4).otherTraveler.trim() !== ""
          ? s(4).otherTraveler
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">ABD’ye Daha Önce Gidildi mi</th>
      <td>
        ${s(4).beenToUS && s(4).beenToUS.trim() !== ""
          ? s(4).beenToUS
          : "-"}
      </td>
    </tr>

    <!-- ABD Seyahat Bilgileri -->
<tr>
  <th style="background-color:#e0e0e0;">Son Ziyaret Tarihi</th>
  <td>
    ${
      s(4).beenToUS === "EVET" &&
      Array.isArray(s(4).travels) &&
      s(4).travels.length > 0 &&
      s(4).travels[0].date
        ? toTRDate(s(4).travels[0].date)
        : "-"
    }
  </td>
</tr>

<tr>
  <th style="background-color:#e0e0e0;">Ziyaret Süresi</th>
  <td>
    ${
      s(4).beenToUS === "EVET" &&
      Array.isArray(s(4).travels) &&
      s(4).travels.length > 0 &&
      s(4).travels[0].duration &&
      s(4).travels[0].duration.trim() !== ""
        ? s(4).travels[0].duration
        : "-"
    }
  </td>
</tr>


    <!-- Önceki ABD Vizeleri -->
    <tr>
      <th style="background-color:#e0e0e0;">Daha Önce ABD Vizesi Alındı mı</th>
      <td>
        ${s(4).hadUSVisa && s(4).hadUSVisa.trim() !== ""
          ? s(4).hadUSVisa
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Vize Tarihi</th>
      <td>
        ${s(4).hadUSVisa === "EVET" && s(4).visaDate
          ? toTRDate(s(4).visaDate)
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Vize Numarası</th>
      <td>
        ${s(4).hadUSVisa === "EVET" &&
        s(4).visaNumber &&
        s(4).visaNumber.trim() !== ""
          ? s(4).visaNumber
          : "-"}
      </td>
    </tr>

    <!-- Vize Ret Geçmişi -->
    <tr>
      <th style="background-color:#e0e0e0;">Vize Reddi</th>
      <td>
        ${s(4).visaRefused && s(4).visaRefused.trim() !== ""
          ? s(4).visaRefused
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Vize Reddi Nedeni</th>
      <td>
        ${s(4).visaRefused === "EVET" &&
        s(4).visaRefusedDetail &&
        s(4).visaRefusedDetail.trim() !== ""
          ? s(4).visaRefusedDetail
          : "-"}
      </td>
    </tr>
  </tbody>
</table>


<h3>Pasaport ve İletişim Bilgileri</h3>

<table
  border="1"
  cellspacing="0"
  cellpadding="5"
  style="border-collapse: collapse; width:100%;"
>
  <tbody>
    <tr>
      <th style="background-color:#e0e0e0;">Adres</th>
      <td>
        ${s(5).homeAddress && s(5).homeAddress.trim() !== ""
          ? s(5).homeAddress
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Telefon 1</th>
      <td>
        ${s(5).phone1 && s(5).phone1.trim() !== ""
          ? s(5).phone1
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Telefon 2</th>
      <td>
        ${s(5).phone2 && s(5).phone2.trim() !== ""
          ? s(5).phone2
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">İş Telefonu</th>
      <td>
        ${s(5).workPhone && s(5).workPhone.trim() !== ""
          ? s(5).workPhone
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">E-Posta</th>
      <td>
        ${s(5).email && s(5).email.trim() !== ""
          ? s(5).email
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Sosyal Medya Hesabı Var mı?</th>
      <td>
        ${s(5).hasSocialMedia && s(5).hasSocialMedia.trim() !== ""
          ? s(5).hasSocialMedia
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Sosyal Medya Hesapları</th>
      <td>
        ${
          s(5).hasSocialMedia === "EVET" &&
          Array.isArray(s(5).socialMediaAccounts) &&
          s(5).socialMediaAccounts.length > 0
            ? s(5).socialMediaAccounts
                .map(
                  (acc) =>
                    `${acc.platform || "Platform"}: ${
                      acc.username && acc.username.trim() !== ""
                        ? acc.username
                        : "-"
                    }`
                )
                .join("<br/>")
            : "-"
        }
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Pasaport Türü</th>
      <td>
        ${s(5).passportType && s(5).passportType.trim() !== ""
          ? s(5).passportType
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Pasaport No</th>
      <td>
        ${s(5).passportNumber && s(5).passportNumber.trim() !== ""
          ? s(5).passportNumber
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Pasaportu Veren Makam</th>
      <td>
        ${s(5).passportAuthority && s(5).passportAuthority.trim() !== ""
          ? s(5).passportAuthority
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Pasaport Başlangıç Tarihi</th>
      <td>
        ${s(5).passportStart
          ? toTRDate(s(5).passportStart)
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Pasaport Bitiş Tarihi</th>
      <td>
        ${s(5).passportEnd
          ? toTRDate(s(5).passportEnd)
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Kaybolan Pasaport No</th>
      <td>
        ${s(5).lostPassportNumber && s(5).lostPassportNumber.trim() !== ""
          ? s(5).lostPassportNumber
          : "-"}
      </td>
    </tr>
  </tbody>
</table>


<h3>İş ve Eğitim Bilgileri</h3>

<table
  border="1"
  cellspacing="0"
  cellpadding="5"
  style="border-collapse: collapse; width:100%;"
>
  <tbody>
    <tr>
      <th style="background-color:#e0e0e0;">Meslek / Pozisyon</th>
      <td>
        ${s(6).occupation && s(6).occupation.trim() !== ""
          ? s(6).occupation
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">İş / Okul Adı</th>
      <td>
        ${s(6).workOrSchoolName && s(6).workOrSchoolName.trim() !== ""
          ? s(6).workOrSchoolName
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">İş / Okul Adresi</th>
      <td>
        ${s(6).workOrSchoolAddress && s(6).workOrSchoolAddress.trim() !== ""
          ? s(6).workOrSchoolAddress
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">İş Telefonu</th>
      <td>
        ${s(6).workPhone && s(6).workPhone.trim() !== ""
          ? s(6).workPhone
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Başlangıç Tarihi</th>
      <td>
        ${s(6).workStartDate
          ? toTRDate(s(6).workStartDate)
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Aylık Gelir</th>
      <td>
        ${s(6).monthlyIncome && s(6).monthlyIncome.trim() !== ""
          ? s(6).monthlyIncome
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">İş Tanımı</th>
      <td>
        ${s(6).jobDescription && s(6).jobDescription.trim() !== ""
          ? s(6).jobDescription
          : "-"}
      </td>
    </tr>

    <!-- ÖNCEKİ İŞLER -->
    <tr>
      <th style="background-color:#e0e0e0;">Önceki İşler</th>
      <td>
        ${
          Array.isArray(s(6).previousJobs) &&
          s(6).previousJobs.some(
            (job) =>
              job.companyName ||
              job.companyAddress ||
              job.position ||
              job.startDate ||
              job.endDate
          )
            ? s(6).previousJobs
                .filter(
                  (job) =>
                    job.companyName ||
                    job.companyAddress ||
                    job.position ||
                    job.startDate ||
                    job.endDate
                )
                .map(
                  (job, i) => `
                    <div style="margin-bottom:8px;">
                      <strong>${i + 1}.</strong>
                      ${job.companyName && job.companyName.trim() !== ""
                        ? job.companyName
                        : "-"}
                      /
                      ${job.position && job.position.trim() !== ""
                        ? job.position
                        : "-"}
                      <br/>
                      ${job.companyAddress && job.companyAddress.trim() !== ""
                        ? job.companyAddress
                        : "-"}
                      <br/>
                      ${
                        job.startDate
                          ? toTRDate(job.startDate)
                          : "-"
                      }
                      -
                      ${
                        job.endDate
                          ? toTRDate(job.endDate)
                          : "-"
                      }
                    </div>
                  `
                )
                .join("")
            : "-"
        }
      </td>
    </tr>

    <!-- LİSE -->
    <tr>
      <th style="background-color:#e0e0e0;">Lise</th>
      <td>
        ${s(6).highSchoolName && s(6).highSchoolName.trim() !== ""
          ? s(6).highSchoolName
          : "-"}
        <br/>
        ${
          s(6).highSchoolStartDate
            ? toTRDate(s(6).highSchoolStartDate)
            : "-"
        }
        -
        ${
          s(6).highSchoolEndDate
            ? toTRDate(s(6).highSchoolEndDate)
            : "-"
        }
        <br/>
        ${s(6).highSchoolAddress && s(6).highSchoolAddress.trim() !== ""
          ? s(6).highSchoolAddress
          : "-"}
      </td>
    </tr>

    <!-- ÜNİVERSİTE -->
    <tr>
      <th style="background-color:#e0e0e0;">Üniversite</th>
      <td>
        ${s(6).universityName && s(6).universityName.trim() !== ""
          ? s(6).universityName
          : "-"}
        <br/>
        ${
          s(6).universityStartDate
            ? toTRDate(s(6).universityStartDate)
            : "-"
        }
        -
        ${
          s(6).universityEndDate
            ? toTRDate(s(6).universityEndDate)
            : "-"
        }
        <br/>
        ${s(6).universityAddress && s(6).universityAddress.trim() !== ""
          ? s(6).universityAddress
          : "-"}
      </td>
    </tr>
  </tbody>
</table>



<h3>Diğer Bilgiler</h3>

<table
  border="1"
  cellspacing="0"
  cellpadding="5"
  style="border-collapse: collapse; width:100%;"
>
  <tbody>
    <tr>
      <th style="background-color:#e0e0e0;">Konuşulan Diller</th>
      <td>
        ${s(7).languages && s(7).languages.trim() !== ""
          ? s(7).languages
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Ziyaret Edilen Ülkeler</th>
      <td>
        ${s(7).visitedCountries && s(7).visitedCountries.trim() !== ""
          ? s(7).visitedCountries
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Askerlik Durumu</th>
      <td>
        ${s(7).militaryStatus && s(7).militaryStatus.trim() !== ""
          ? s(7).militaryStatus
          : "-"}
      </td>
    </tr>

    <!-- Askerlik Detayları -->
    <tr>
      <th style="background-color:#e0e0e0;">Askerlik Başlangıç Tarihi</th>
      <td>
        ${s(7).militaryStatus === "YAPTI" && s(7).militaryStartDate
          ? toTRDate(s(7).militaryStartDate)
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Askerlik Bitiş Tarihi</th>
      <td>
        ${s(7).militaryStatus === "YAPTI" && s(7).militaryEndDate
          ? toTRDate(s(7).militaryEndDate)
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Muafiyet Nedeni</th>
      <td>
        ${s(7).militaryStatus === "MUAF" &&
        s(7).exemptionReason &&
        s(7).exemptionReason.trim() !== ""
          ? s(7).exemptionReason
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Tecil Tarihi</th>
      <td>
        ${s(7).militaryStatus === "YAPMADI" && s(7).defermentDate
          ? toTRDate(s(7).defermentDate)
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Ek Bilgiler</th>
      <td>
        ${s(7).additionalInfo && s(7).additionalInfo.trim() !== ""
          ? s(7).additionalInfo
          : "-"}
      </td>
    </tr>
  </tbody>
</table>


${f.steps[8].passportFile ? `<h4>Pasaport Fotoğrafı</h4><img src="cid:passportPhoto" style="max-width:220px;border-radius:6px;"/>` : ""}
${f.steps[8].photoFile ? `<h4>Vesikalık</h4><img src="cid:profilePhoto" style="max-width:220px;border-radius:6px;"/>` : ""}

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
      subject: `Amerika DS-160 Vize Başvurusu - ${s(1).fullName || "İsimsiz"}`,
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