import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import sharp from "sharp";
import heicConvert from "heic-convert";
export const runtime = "nodejs";
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
function cleanBase64(b64) {
  return b64.replace(/^data:image\/\w+;base64,/, "");
}

async function bufferFromAnyImage(base64) {
  const raw = Buffer.from(cleanBase64(base64), "base64");

  // HEIC tespiti
  if (raw.subarray(4, 12).toString() === "ftypheic") {
    return await heicConvert({
      buffer: raw,
      format: "JPEG",
      quality: 0.6,
    });
  }

  return raw;
}

export async function compressImage(base64) {
  try {
    const buffer = await bufferFromAnyImage(base64);

    const output = await sharp(buffer)
      .resize({ width: 1200, withoutEnlargement: true })
      .jpeg({ quality: 60 })
      .toBuffer();

    return output.toString("base64");
  } catch (err) {
    console.error("Image compression failed:", err);

    // ❗ Her şey çökerse kendi fallback JPEG encoder'ını kullan
    try {
      const raw = Buffer.from(cleanBase64(base64), "base64");
      return raw.toString("base64");
    } catch {
      return base64;
    }
  }
}

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
  page.drawText("KANADA VİZE BAŞVURU FORMU BILGI FISI", {
    x: PAGE_WIDTH - MARGIN - boldFont.widthOfTextAtSize("KANADA VİZE BAŞVURU FORMU BILGI FISI", 10),
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

  // 🔹 kolon sayısını otomatik belirle
  const colWidth = isFullWidth
    ? CONTENT_WIDTH
    : xOffset === 0
      ? (CONTENT_WIDTH / 3) - 10
      : xOffset === CONTENT_WIDTH / 3
        ? (CONTENT_WIDTH / 3) - 10
        : xOffset === (CONTENT_WIDTH / 3) * 2
          ? (CONTENT_WIDTH / 3) - 10
          : (CONTENT_WIDTH / 2) - 10;

  const valStr = value ? String(value) : "-";
  const labelSize = 8;
  const valueSize = 10;

  // Value kaç satır tutuyor?
  const valueLines = wrapText(valStr, colWidth, regularFont, valueSize);
  const heightNeeded = (valueLines.length * (valueSize + 4)) + 15;

  // Sayfa sonu kontrolü (sadece ilk kolon kontrol eder)
  if (xOffset === 0) {
    if (checkSpace(heightNeeded)) {
      // sayfa değişmiş olabilir
    }
  }

  const drawX = MARGIN + xOffset;

  // Label
  currentPage.drawText(label, {
    x: drawX,
    y: currentY,
    size: labelSize,
    font: boldFont,
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
    const checkPageOverflow = (neededHeight = 0) => {
  if (currentY - neededHeight < MARGIN) {
    drawFooter(currentPage, pageCount);
    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
  }
};
    // drawHeader(currentPage, true);

    const s = (n) => formData.steps?.[String(n)] || {};

    // --- BÖLÜM 1: Kişisel Bilgiler ---
       await drawHeader(currentPage);

    // --- Step 1 ---
drawSection("1. KİŞİSEL BİLGİLER");

// Ad Soyad ve T.C. Kimlik No
let h1 = drawField(
  "T.C. Kimlik No",
  s(1).tcId,
  false,
  0
);

let h2 = drawField(
  "Ad Soyad",
  s(1).fullName,
  false,
  CONTENT_WIDTH / 3
);

let h3 = drawField(
  "Önceki Adı Soyadı",
  s(1).previousSurname,
  false,
  (CONTENT_WIDTH / 3) * 2
);

// satırı aşağı indir
currentY -= Math.max(h1, h2, h3) + 10;


// Doğum Tarihi ve Doğum Yeri
h1 = drawField(
  "T.C. Kimlik Son Geçerlilik Tarihi",
  toTRDate(s(1).tcEndDate),
  false,
  0
);

 h2 = drawField(
  "Doğum Tarihi",
  (toTRDate(s(1).birthDate)),
  false,
  CONTENT_WIDTH / 3
);

h3 = drawField(
  "Doğum Yeri",
 s(1).birthPlace,
  false,
  (CONTENT_WIDTH / 3) * 2
);

// satırı aşağı indir
currentY -= Math.max(h1, h2, h3) + 10;


// Cinsiyet ve Medeni Durum
h1 = drawField("Cinsiyet", s(1).gender, false, 0);
h2 = drawField("Medeni Durum", s(1).maritalStatus, false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// E-posta ve Telefon
h1 = drawField("E-mail", s(1).email, false, 0);
h2 = drawField("Telefon Numarası", s(1).phone_number, false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// Adres
h1 = drawField("Ev Adresi", s(1).home_address, false, 0, CONTENT_WIDTH); // full width
currentY -= h1 + 10;



    // --- Step 2: Aile ---
drawSection("2. BÖLÜM");

// Medeni Durum ve Evlilik Tarihi
 h1 = drawField("Medeni Durum", s(2).maritalStatus, false, 0);
 h2 = s(2).maritalStatus === "EVLI" ? drawField("Evlilik Tarihi", toTRDate(s(2).marriageDate), false, CONTENT_WIDTH/2) : null;
currentY -= Math.max(h1 || 0, h2 || 0) + 10;

// Eş Bilgileri (Evli ise)
if (s(2).maritalStatus === "EVLI") {
    h1 = drawField("Eş Adı-Soyadı", s(2).spouseFullName, false, 0);
    h2 = drawField("Doğum Tarihi", toTRDate(s(2).spouseBirthDate), false, CONTENT_WIDTH/2);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("Doğum Yeri", s(2).spouseBirthPlace, false, 0);
    h2 = drawField("Meslek", s(2).spouseOccupation, false, CONTENT_WIDTH/2);
    currentY -= Math.max(h1, h2) + 10;

    // Eşin Adresi
    h1 = drawField("İkamet Adresi", s(2).spouseAddress, false, 0, CONTENT_WIDTH);
    currentY -= h1 + 10;
}

// Önceki Evlilikler (Varsa)
if (s(2).otherMarriages === "EVET") {
    h1 = drawField("Eski Eş Adı-Soyadı", s(2).exSpouseFullName, false, 0);
    h2 = drawField("Eski Eş Doğum Tarihi", toTRDate(s(2).exSpouseBirthDate), false, CONTENT_WIDTH/2);
    currentY -= Math.max(h1, h2) + 10;
}

// Çocuk Bilgileri (Varsa)
if (s(2).childrenExist === "EVET" && s(2).children && s(2).children.length > 0) {
    drawSection("ÇOCUK BİLGİLERİ");
    s(2).children.forEach((child, index) => {
        h1 = drawField(`Çocuk ${index+1} Adı-Soyadı`, child.fullName, false, 0);
        h2 = drawField("Medeni Durumu", child.maritalStatus, false, CONTENT_WIDTH/2);
        currentY -= Math.max(h1, h2) + 10;

        h1 = drawField("Doğum Yeri", child.birthPlace, false, 0);
        h2 = drawField("Doğum Tarihi", toTRDate(child.birthDate), false, CONTENT_WIDTH/2);
        currentY -= Math.max(h1, h2) + 10;

        h1 = drawField("Adres", child.address, false, 0, CONTENT_WIDTH);
        currentY -= h1 + 10;

        h1 = drawField("Meslek", child.occupation, false, 0, CONTENT_WIDTH);
        currentY -= h1 + 10;
    });
}

    drawFooter(currentPage,pageCount); 


    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
    await drawHeader(currentPage);


    // --- Step 3: Pasaport ---
   drawSection("3. BÖLÜM");

// Anne Bilgileri
 h1 = drawField("Anne Adı-Soyadı", s(3).motherFullName, false, 0);
 h2 = drawField("Medeni Durumu", s(3).motherMaritalStatus, false, CONTENT_WIDTH/2);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("Doğum Yeri", s(3).motherBirthPlace, false, 0);
h2 = drawField("Doğum Tarihi", toTRDate(s(3).motherBirthDate), false, CONTENT_WIDTH/2);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("İkamet Adresi", s(3).motherAddress, false, 0, CONTENT_WIDTH);
currentY -= h1 + 10;

h1 = drawField("Meslek", s(3).motherOccupation, false, 0, CONTENT_WIDTH);
currentY -= h1 + 10;

// Baba Bilgileri
h1 = drawField("Baba Adı-Soyadı", s(3).fatherFullName, false, 0);
h2 = drawField("Medeni Durumu", s(3).fatherMaritalStatus, false, CONTENT_WIDTH/2);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("Doğum Yeri", s(3).fatherBirthPlace, false, 0);
h2 = drawField("Doğum Tarihi", toTRDate(s(3).fatherBirthDate), false, CONTENT_WIDTH/2);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("İkamet Adresi", s(3).fatherAddress, false, 0, CONTENT_WIDTH);
currentY -= h1 + 10;

h1 = drawField("Meslek", s(3).fatherOccupation, false, 0, CONTENT_WIDTH);
currentY -= h1 + 10;

// Kardeş Bilgileri
if (s(3).siblingsCount > 0 && s(3).siblings && s(3).siblings.length > 0) {
    drawSection("KARDEŞ BİLGİLERİ");

    s(3).siblings.forEach((sibling, index) => {
        h1 = drawField(`Kardeş ${index+1} Adı-Soyadı`, sibling.fullName, false, 0);
        h2 = drawField("Medeni Durumu", sibling.maritalStatus, false, CONTENT_WIDTH/2);
        currentY -= Math.max(h1, h2) + 10;

        h1 = drawField("Doğum Yeri", sibling.birthPlace, false, 0);
        h2 = drawField("Doğum Tarihi", toTRDate(sibling.birthDate), false, CONTENT_WIDTH/2);
        currentY -= Math.max(h1, h2) + 10;

        h1 = drawField("Adres", sibling.address, false, 0, CONTENT_WIDTH);
        currentY -= h1 + 10;

        h1 = drawField("Meslek", sibling.occupation, false, 0, CONTENT_WIDTH);
        currentY -= h1 + 10;
    });
}
    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
    await drawHeader(currentPage);


drawSection("4.BÖLÜM");
checkPageOverflow(20);
currentY -= 20;
// Dil bilgisi
drawSection("Dil Bilgisi");
checkPageOverflow(20);
h1 = drawField("Ana Diliniz", s(4).nativeLanguage, false, 0);
h2 = drawField("İngilizce veya Fransızca iletişim kurabiliyor musunuz?", s(4).canCommunicateInEnglishFrench, false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) +2;

h1 = drawField("İngilizce/Fransızca yeterlilik sınavına girdiniz mi?", s(4).tookProficiencyExam, false, 0);
currentY -= h1 + 2;

// Sınavlar
if (s(4).exams && s(4).exams.length > 0) {
    drawSection("Girmiş Olduğunuz Sınavlar");
    currentY -= 10;
    s(4).exams.forEach((exam, index) => {
        checkPageOverflow(60);
        h1 = drawField(`Sınav ${index + 1} Adı`, exam.examName, false, 0);
        h2 = drawField("Sınav Tarihi", toTRDate(exam.examDate), false, CONTENT_WIDTH / 2);
        currentY -= Math.max(h1, h2) + 2;

        h1 = drawField("Skor", exam.score, false, 0);
        currentY -= h1 + 2;
    });
}

// Eğitim bilgileri
drawSection("Eğitim Bilgileri");
currentY -= 5;
h1 = drawField("Orta öğretim sonrası eğitim aldınız mı?", s(4).postSecondaryEducation, false, 0);
currentY -= h1 + 2;

if (s(4).postSecondaryEducation === "EVET") {
    checkPageOverflow(60);
    h1 = drawField("Okul Adı", s(4).schoolName, false, 0);
    h2 = drawField("Bölüm Adı", s(4).programName, false, CONTENT_WIDTH / 2);
    currentY -= Math.max(h1, h2) + 2;

    h1 = drawField("Eğitim Şehri", s(4).educationCity, false, 0);
    h2 = drawField("Eğitim Ülkesi", s(4).educationCountry, false, CONTENT_WIDTH / 2);
    currentY -= Math.max(h1, h2) + 2;

    h1 = drawField("Başlangıç Tarihi", toTRDate(s(4).educationStartDate), false, 0);
    h2 = drawField("Mezuniyet Tarihi", toTRDate(s(4).educationEndDate), false, CONTENT_WIDTH / 2);
    currentY -= Math.max(h1, h2) +2;
}

// Askerlik bilgisi
drawSection("Askerlik Bilgisi");
currentY -= 5;
h1 = drawField("Askerlik durumu", s(4).boolean_military, false, 0);
currentY -= h1 + 2;

if (s(4).boolean_military === "EVET") {
    checkPageOverflow(60);
    h1 = drawField("Askerlik yapılan şehir", s(4).military_city, false, 0);
    h2 = drawField("Başlangıç Tarihi", toTRDate(s(4).military_start_date), false, CONTENT_WIDTH / 2);
    currentY -= Math.max(h1, h2) + 2;

    h1 = drawField("Bitiş Tarihi", toTRDate(s(4).military_end_date), false, 0);
    currentY -= h1 + 2;
}


    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
    await drawHeader(currentPage);

   

drawSection("5.BÖLÜM");

// Mevcut iş durumu
 h1 = drawField("Çalışma Durumu", s(5).employmentStatus || "-", false, 0);
currentY -= h1 + 10;

// Şu an çalıştığı iş
if (s(5).employmentStatus?.toUpperCase() === "ÇALIŞIYOR") {
    h1 = drawField("Şirket Adı", s(5).currentCompanyName || "-", false, 0);
     h2 = drawField("Pozisyon", s(5).currentPosition || "-", false, CONTENT_WIDTH / 2);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("İşe Başlangıç Tarihi", toTRDate(s(5).currentJobStartDate) || "-", false, 0);
    h2 = drawField("Şehir / Ülke", `${s(5).currentWorkCity || "-"} / ${s(5).currentWorkCountry || "-"}`, false, CONTENT_WIDTH / 2);
    currentY -= Math.max(h1, h2) + 10;
}

// Son 10 yıl iş deneyimleri
if (s(5).last10YearsWorkExperience?.length) {
    drawSection("Son 10 Yıl İş Deneyimleri");
    s(5).last10YearsWorkExperience.forEach((job, index) => {
        h1 = drawField(`İş ${index + 1} Şirket`, job.companyName || "-", false, 0);
        h2 = drawField("Pozisyon", job.position || "-", false, CONTENT_WIDTH / 2);
        currentY -= Math.max(h1, h2) + 10;

        h1 = drawField("Başlangıç / Bitiş Tarihi", `${toTRDate(job.startDate) || "-"} / ${toTRDate(job.endDate) || "-"}`, false, 0);
        h2 = drawField("Şehir / Ülke", `${job.city || "-"} / ${job.country || "-"}`, false, CONTENT_WIDTH / 2);
        currentY -= Math.max(h1, h2) + 10;
    });
}

drawFooter(currentPage, pageCount);
currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);

// --- 6. Bölüm ---
drawSection("6.BÖLÜM");
h1 = drawField("Daha Önce Vize Reddiniz Oldu mu?", s(6).previousVisaRefusal || "-", false, 0);
currentY -= h1 + 10;

if (s(6).previousVisaRefusal?.toUpperCase() === "EVET") {
    h1 = drawField("Reddin Nedeni", s(6).refusalReason || "-", false, 0);
    currentY -= h1 + 10;
}

h1 = drawField("Daha Önce Kanada Başvurusunda Bulundunuz mu?", s(6).previousCanadaApplication || "-", false, 0);
currentY -= h1 + 10;

 h1 = drawField("Seyahat Başlangıç Tarihi", toTRDate(s(6).travelStartDate) || "-", false, 0);
 h2 = drawField("Seyahat Bitiş Tarihi", `${toTRDate(s(6).travelEndDate) || "-"}`, false, CONTENT_WIDTH / 2);
    currentY -= Math.max(h1, h2) + 10;

 h1 = drawField("Konaklama Adresi", s(6).travelAddress || "-", false, 0);
 h2 = drawField("Toplam Birikim", s(6).totalMoney || "-", false, CONTENT_WIDTH / 2);
    currentY -= Math.max(h1, h2) + 10;



// Son 5 yıldaki seyahatler
if (s(6).last5YearsTravel?.length) {
    drawSection("Son 5 Yılda Seyahatler");
    s(6).last5YearsTravel.forEach((trip, index) => {
        h1 = drawField(`Seyahat ${index + 1} Ülke`, trip.country || "-", false, 0);
         h2 = drawField("Tarih", `${toTRDate(trip.travelStartDate) || "-"} / ${toTRDate(trip.travelEndDate) || "-"}`, false, CONTENT_WIDTH / 2);
        currentY -= Math.max(h1, h2) + 10;

        h1 = drawField("Seyahat Amacı", trip.travelPurpose || "-", true, 0);
        currentY -= h1 + 10;
    });
}

drawFooter(currentPage, pageCount);
currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);

// --- 7. Bölüm ---
drawSection("7.BÖLÜM");

const files = formData.steps["7"] || {};
const passportBase64 = await compressImage(files.passportFileBase64);
const photoBase64 = await compressImage(files.photoFileBase64);

// Resim ekleme fonksiyonu (paralel)
const addFileImage = async (fileBase64, title, type) => {
    if (!fileBase64) return;

    const imgBytes = Buffer.from(fileBase64, "base64");
    let embeddedImg;
    try { embeddedImg = await pdfDoc.embedJpg(imgBytes); }
    catch { embeddedImg = await pdfDoc.embedPng(imgBytes); }

    // Boyut ayarlama
    let imgDims;
    if (type === "passport") {
        const width = PAGE_WIDTH - 2 * MARGIN;
        const height = (PAGE_HEIGHT - 150) / 3;
        const scale = Math.min(width / embeddedImg.width, height / embeddedImg.height);
        imgDims = { width: embeddedImg.width * scale, height: embeddedImg.height * scale };
    } else {
        const maxWidth = CONTENT_WIDTH / 2;
        const maxHeight = PAGE_HEIGHT / 2;
        const scale = Math.min(maxWidth / embeddedImg.width, maxHeight / embeddedImg.height, 1);
        imgDims = { width: embeddedImg.width * scale, height: embeddedImg.height * scale };
    }

    let xPos = MARGIN + (CONTENT_WIDTH - imgDims.width) / 2;
    let yPos = currentY - 20 - imgDims.height;

    if (yPos - 30 < MARGIN) {
        drawFooter(currentPage, pageCount);
        currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
        pageCount++;
        await drawHeader(currentPage);
        currentY = PAGE_HEIGHT - MARGIN;
        yPos = currentY - 20 - imgDims.height;
    }

    currentPage.drawText(title, { x: MARGIN, y: currentY, size: 12, font: boldFont, color: COLORS.primary });
    currentPage.drawRectangle({ x: xPos - 5, y: yPos - 5, width: imgDims.width + 10, height: imgDims.height + 10, color: COLORS.border });
    currentPage.drawImage(embeddedImg, { x: xPos, y: yPos, width: imgDims.width, height: imgDims.height });

    currentY = yPos - 30;
};

// Paralel resim ekleme
await Promise.all([
    addFileImage(passportBase64, "Pasaport Görüntüsü", "passport"),
    addFileImage(photoBase64, "Biyometrik Fotoğraf", "photo")
]);

drawFooter(currentPage, pageCount);

const pdfBytes = await pdfDoc.save();






let passportBuffer = s(7).passportFileBase64 ? Buffer.from(s(7).passportFileBase64.split(",")[1] || s(7).passportFileBase64, "base64") : null;
let photoBuffer = s(7).photoFileBase64 ? Buffer.from(s(7).photoFileBase64.split(",")[1] || s(7).photoFileBase64, "base64") : null;
const pdfBuffer = Buffer.isBuffer(pdfBytes) ? pdfBytes : Buffer.from(pdfBytes, "base64");

    // --- Text & HTML Body ---
// formData: gönderilen form verisi
const f = formData; // veya defaultForm yerine bu kullanılacak

// --- TEXT BODY ---
const textBody = `
KANADA VİZE BAŞVURU FORMU

-- 1. KİŞİSEL BİLGİLER --
T.C. Kimlik No: ${s(1).tcId || "-"}
Ad Soyad: ${s(1).fullName || "-"}
Önceki Adı veya Soyadı: ${s(1).previousSurname || "-"}
Cinsiyet: ${s(1).gender || "-"}
T.C. Kimlik Son Geçerlilik Tarihi: ${toTRDate(s(1).tcEndDate) || "-"}

Doğum Tarihi: ${toTRDate(s(1).birthDate) || "-"}
Doğum Yeri: ${s(1).birthPlace || "-"}
Ev Adresi: ${s(1).home_address || "-"}
Email: ${s(1).email || "-"}
Telefon: ${s(1).phone_number || "-"}

-- 2. AİLE / EVLİLİK BİLGİLERİ --
Medeni Durum: ${s(2).maritalStatus || "-"}
Evlilik Tarihi: ${toTRDate(s(2).marriageDate) || "-"}
Eş Adı-Soyadı: ${s(2).spouseFullName || "-"}
Eş Doğum Tarihi: ${toTRDate(s(2).spouseBirthDate) || "-"}
Eş Doğum Yeri: ${s(2).spouseBirthPlace || "-"}
Eş Adresi: ${s(2).spouseAddress || "-"}
Eş Meslek: ${s(2).spouseOccupation || "-"}
Başka Evlilik: ${s(2).otherMarriages || "-"}
Eski Eş Adı-Soyadı: ${s(2).exSpouseFullName || "-"}
Eski Eş Doğum Tarihi: ${toTRDate(s(2).exSpouseBirthDate) || "-"}
Çocuk Var mı: ${s(2).childrenExist || "-"}
Çocuk Sayısı: ${s(2).childrenCount || "-"}
Çocuklar: ${s(2).children.map(c => c.fullName ? `${c.fullName} (${c.birthDate || "-"})` : "-").join(", ")}

-- 3. AİLE / EBEVEYNLER VE KARDEŞLER --
Anne Adı-Soyadı: ${s(3).motherFullName || "-"}
Anne Medeni Durum: ${s(3).motherMaritalStatus || "-"}
Anne Doğum Yeri: ${s(3).motherBirthPlace || "-"}
Anne Doğum Tarihi: ${toTRDate(s(3).motherBirthDate) || "-"}
Anne Adresi: ${s(3).motherAddress || "-"}
Anne Mesleği: ${s(3).motherOccupation || "-"}
Baba Adı-Soyadı: ${s(3).fatherFullName || "-"}
Baba Medeni Durum: ${s(3).fatherMaritalStatus || "-"}
Baba Doğum Yeri: ${s(3).fatherBirthPlace || "-"}
Baba Doğum Tarihi: ${toTRDate(s(3).fatherBirthDate) || "-"}
Baba Adresi: ${s(3).fatherAddress || "-"}
Baba Mesleği: ${s(3).fatherOccupation || "-"}
Kardeş Sayısı: ${s(3).siblingsCount || "-"}
Kardeşler: ${s(3).siblings.map(k => k.fullName ? `${k.fullName} (${k.birthDate || "-"})` : "-").join(", ")}

-- 4. EĞİTİM VE DİL BİLGİLERİ --
Ana Dil: ${s(4).nativeLanguage || "-"}
İngilizce/Fransızca: ${s(4).canCommunicateInEnglishFrench || "-"}
Yeterlilik Sınavına Girdi mi: ${s(4).tookProficiencyExam || "-"}
Sınavlar: ${s(4).exams.map(ex => ex.examName ? `${ex.examName} (${ex.score || "-"})` : "-").join(", ")}
Orta Öğretim Sonrası Eğitim: ${s(4).postSecondaryEducation || "-"}
Okul: ${s(4).schoolName || "-"}
Program/Bölüm: ${s(4).programName || "-"}
Şehir/Ülke: ${s(4).educationCity || "-"} / ${s(4).educationCountry || "-"}
Başlangıç / Bitiş: ${s(4).educationStartDate || "-"} / ${s(4).educationEndDate || "-"}
Askerlik Durumu: ${s(4).boolean_military || "-"}
Askerlik Şehir / Tarih: ${s(4).military_city || "-"} / ${toTRDate(s(4).military_start_date) || "-"} - ${toTRDate(s(4).military_end_date) || "-"}

-- 5. İŞ DENEYİMİ --
Çalışma Durumu: ${s(5).employmentStatus || "-"}
Şirket Adı: ${s(5).currentCompanyName || "-"}
Pozisyon: ${s(5).currentPosition || "-"}
İşe Başlangıç: ${s(5).currentJobStartDate || "-"}
Şehir / Ülke: ${s(5).currentWorkCity || "-"} / ${s(5).currentWorkCountry || "-"}
Son 10 Yıl İş Deneyimleri: ${s(5).last10YearsWorkExperience.map(w => w.companyName ? `${w.companyName} - ${w.position} (${w.startDate || "-"} / ${w.endDate || "-"})` : "-").join(", ")}

-- 6. VİZE VE SEYAHAT BİLGİLERİ --
Önceki Vize Reddı: ${s(6).previousVisaRefusal || "-"}
Red Nedeni: ${s(6).refusalReason || "-"}
Daha Önce Kanada Başvurusu: ${s(6).previousCanadaApplication || "-"}
Seyahat Başlangıç Tarihi:  ${toTRDate(s(6).travelStartDate) || "-"}
Seyahat Bitiş Tarihi:  ${toTRDate(s(6).travelEndDate) || "-"}
Konaklama Adresi: ${s(6).travelAddress || "-"}
Toplam Birikim: ${s(6).totalMoney || "-"}
Son 5 Yıl Seyahatler: ${s(6).last5YearsTravel.map(t => t.country ? `${t.country} (${t.travelStartDate || "-"} / ${t.travelEndDate || "-"}) - ${t.travelPurpose || "-"}` : "-").join(", ")}

Başvuru Tarihi: ${new Date().toLocaleString("tr-TR")}
`.trim();



// --- HTML BODY ---
const htmlBody = `
<h2>Kanada Vize Başvuru Formu</h2>

<h3>1. Kişisel Bilgiler</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%; background-color:#f9f9f9;">
  <tbody>
      <tr><th style="background-color:#e0e0e0;">T.C. Kimlik No</th><td>${s(1).tcId || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Ad Soyad</th><td>${s(1).fullName || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Önceki Ad veya Soyad</th><td>${s(1).previousSurname || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Cinsiyet</th><td>${s(1).gender || "-"}</td></tr>
      <tr><th style="background-color:#e0e0e0;">T.C. Kimlik Son Geçerlilik Tarihi</th><td>${toTRDate(s(1).tcEndDate) || "-"}</td></tr>

    <tr><th style="background-color:#e0e0e0;">Doğum Tarihi</th><td>${toTRDate(s(1).birthDate) || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Doğum Yeri</th><td>${s(1).birthPlace || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Adres</th><td>${s(1).home_address || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Email</th><td>${s(1).email || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Telefon</th><td>${s(1).phone_number || "-"}</td></tr>
  </tbody>
</table>

<h3>2. Aile / Evlilik Bilgileri</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr><th style="background-color:#e0e0e0;">Medeni Durum</th><td>${s(2).maritalStatus || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Evlilik Tarihi</th><td>${toTRDate(s(2).marriageDate) || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Eş Adı-Soyadı</th><td>${s(2).spouseFullName || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Eş Doğum Tarihi</th><td>${toTRDate(s(2).spouseBirthDate) || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Eş Doğum Yeri</th><td>${s(2).spouseBirthPlace || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Eş Adresi</th><td>${s(2).spouseAddress || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Eş Meslek</th><td>${s(2).spouseOccupation || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Başka Evlilik</th><td>${s(2).otherMarriages || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Eski Eş Adı-Soyadı</th><td>${s(2).exSpouseFullName || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Eski Eş Doğum Tarihi</th><td>${s(2).exSpouseBirthDate || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Çocuk Var mı</th><td>${s(2).childrenExist || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Çocuk Sayısı</th><td>${s(2).childrenCount || "0"}</td></tr>
  </tbody>
</table>

${s(2).children.length ? `
<h4>Çocuklar</h4>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <thead>
    <tr style="background-color:#d9edf7;">
      <th>Ad Soyad</th>
      <th>Doğum Tarihi</th>
      <th>Doğum Yeri</th>
      <th>Medeni Durum</th>
      <th>Meslek</th>
      <th>Adres</th>
    </tr>
  </thead>
  <tbody>
    ${s(2).children.map((c, i) => `
      <tr style="background-color:${i % 2 === 0 ? "#f9f9f9" : "#ffffff"}">
        <td>${c.fullName || "-"}</td>
        <td>${c.birthDate || "-"}</td>
        <td>${c.birthPlace || "-"}</td>
        <td>${c.maritalStatus || "-"}</td>
        <td>${c.occupation || "-"}</td>
        <td>${c.address || "-"}</td>
      </tr>
    `).join("")}
  </tbody>
</table>
` : ""}

<h3>3. Anne / Baba / Kardeşler</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <thead>
    <tr style="background-color:#d9edf7;">
      <th>Tip</th>
      <th>Ad Soyad</th>
      <th>Doğum Tarihi</th>
      <th>Doğum Yeri</th>
      <th>Medeni Durum</th>
      <th>Meslek</th>
      <th>Adres</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Anne</td>
      <td>${s(3).motherFullName || "-"}</td>
      <td>${s(3).motherBirthDate || "-"}</td>
      <td>${s(3).motherBirthPlace || "-"}</td>
      <td>${s(3).motherMaritalStatus || "-"}</td>
      <td>${s(3).motherOccupation || "-"}</td>
      <td>${s(3).motherAddress || "-"}</td>
    </tr>
    <tr>
      <td>Baba</td>
      <td>${s(3).fatherFullName || "-"}</td>
      <td>${s(3).fatherBirthDate || "-"}</td>
      <td>${s(3).fatherBirthPlace || "-"}</td>
      <td>${s(3).fatherMaritalStatus || "-"}</td>
      <td>${s(3).fatherOccupation || "-"}</td>
      <td>${s(3).fatherAddress || "-"}</td>
    </tr>
    ${s(3).siblings.map((k, i) => `
      <tr style="background-color:${i % 2 === 0 ? "#f9f9f9" : "#ffffff"}">
        <td>Kardeş</td>
        <td>${k.fullName || "-"}</td>
        <td>${k.birthDate || "-"}</td>
        <td>${k.birthPlace || "-"}</td>
        <td>${k.maritalStatus || "-"}</td>
        <td>${k.occupation || "-"}</td>
        <td>${k.address || "-"}</td>
      </tr>
    `).join("")}
  </tbody>
</table>

<h3>4. Eğitim ve Dil Bilgileri</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr><th style="background-color:#e0e0e0;">Ana Dil</th><td>${s(4).nativeLanguage || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">İngilizce/Fransızca</th><td>${s(4).canCommunicateInEnglishFrench || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Sınava Girdi mi</th><td>${s(4).tookProficiencyExam || "-"}</td></tr>
  </tbody>
</table>

${s(4).exams.length ? `
<h4>Sınavlar</h4>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <thead>
    <tr style="background-color:#d9edf7;">
      <th>Sınav Adı</th>
      <th>Tarih</th>
      <th>Skor</th>
    </tr>
  </thead>
  <tbody>
    ${s(4).exams.map((ex, i) => `
      <tr style="background-color:${i % 2 === 0 ? "#f9f9f9" : "#ffffff"}">
        <td>${ex.examName || "-"}</td>
        <td>${ex.examDate || "-"}</td>
        <td>${ex.score || "-"}</td>
      </tr>
    `).join("")}
  </tbody>
</table>
` : ""}

<p><strong>Orta Öğretim Sonrası Eğitim:</strong> ${s(4).postSecondaryEducation || "-"}</p>
<p><strong>Okul:</strong> ${s(4).schoolName || "-"}</p>
<p><strong>Bölüm:</strong> ${s(4).programName || "-"}</p>
<p><strong>Şehir / Ülke:</strong> ${s(4).educationCity || "-"} / ${s(4).educationCountry || "-"}</p>
<p><strong>Başlangıç / Bitiş:</strong> ${s(4).educationStartDate || "-"} / ${s(4).educationEndDate || "-"}</p>
<p><strong>Askerlik Durumu:</strong> ${s(4).boolean_military || "-"}</p>
<p><strong>Askerlik Şehir / Tarih:</strong> ${s(4).military_city || "-"} / ${toTRDate(s(4).military_start_date) || "-"} - ${toTRDate(s(4).military_end_date) || "-"}</p>

<h3>5. İş Deneyimi</h3>
<p><strong>Çalışma Durumu:</strong> ${s(5).employmentStatus || "-"}</p>
<p><strong>Şirket Adı:</strong> ${s(5).currentCompanyName || "-"}</p>
<p><strong>Pozisyon:</strong> ${s(5).currentPosition || "-"}</p>
<p><strong>İşe Başlangıç:</strong> ${s(5).currentJobStartDate || "-"}</p>
<p><strong>Şehir / Ülke:</strong> ${s(5).currentWorkCity || "-"} / ${s(5).currentWorkCountry || "-"}</p>

${s(5).last10YearsWorkExperience.length ? `
<h4>Son 10 Yıl İş Deneyimleri</h4>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <thead>
    <tr style="background-color:#d9edf7;">
      <th>Şirket</th>
      <th>Pozisyon</th>
      <th>Başlangıç</th>
      <th>Bitiş</th>
      <th>Şehir</th>
      <th>Ülke</th>
    </tr>
  </thead>
  <tbody>
    ${s(5).last10YearsWorkExperience.map((w,i) => `
      <tr style="background-color:${i % 2 === 0 ? "#f9f9f9" : "#ffffff"}">
        <td>${w.companyName || "-"}</td>
        <td>${w.position || "-"}</td>
        <td>${w.startDate || "-"}</td>
        <td>${w.endDate || "-"}</td>
        <td>${w.city || "-"}</td>
        <td>${w.country || "-"}</td>
      </tr>
    `).join("")}
  </tbody>
</table>
` : ""}

<h3>6. Vize ve Seyahat Bilgileri</h3>
<p><strong>Önceki Vize Reddi:</strong> ${s(6).previousVisaRefusal || "-"}</p>
<p><strong>Red Nedeni:</strong> ${s(6).refusalReason || "-"}</p>
<p><strong>Daha Önce Kanada Başvurusu:</strong> ${s(6).previousCanadaApplication || "-"}</p>
<p><strong>Seyahat Başlangıç Tarihi:</strong>${toTRDate(s(6).travelStartDate) || "-"}</p>
<p><strong>Seyahat Bitiş Tarihi:</strong> ${toTRDate(s(6).travelEndDate)  || "-"}</p>
<p><strong>Konaklama Adresi:</strong> ${s(6).travelAddress || "-"}</p>
<p><strong>Toplam Birikim:</strong>  ${s(6).totalMoney || "-"}</p>
${s(6).last5YearsTravel.length ? `
<h4>Son 5 Yıl Seyahatler</h4>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <thead>
    <tr style="background-color:#d9edf7;">
      <th>Ülke</th>
      <th>Başlangıç</th>
      <th>Bitiş</th>
      <th>Seyahat Amacı</th>
    </tr>
  </thead>
  <tbody>
    ${s(6).last5YearsTravel.map((t,i) => `
      <tr style="background-color:${i % 2 === 0 ? "#f9f9f9" : "#ffffff"}">
        <td>${t.country || "-"}</td>
        <td>${t.travelStartDate || "-"}</td>
        <td>${t.travelEndDate || "-"}</td>
        <td>${t.travelPurpose || "-"}</td>
      </tr>
    `).join("")}
  </tbody>
</table>
` : ""}

${f?.steps?.[7]?.passportFile ? `<h4>Pasaport Fotoğrafı</h4><img src="cid:passportPhoto" style="max-width:220px;border-radius:6px;"/>` : ""}
${f?.steps?.[7]?.photoFile ? `<h4>Vesikalık</h4><img src="cid:profilePhoto" style="max-width:220px;border-radius:6px;"/>` : ""}

<p><small>Başvuru Tarihi: ${new Date().toLocaleString("tr-TR")}</small></p>
`.trim();








    // --- Attachments ---
const attachments = [
    pdfBuffer && { filename: `Basvuru_${(s(1).fullName || "form").replace(/\s+/g, "_")}.pdf`, content: pdfBuffer, contentType: "application/pdf" },
    passportBuffer && { filename: "passport.jpg", content: passportBuffer, cid: "passportPhoto", contentType: "image/jpeg" },
    photoBuffer && { filename: "photo.jpg", content: photoBuffer, cid: "profilePhoto", contentType: "image/jpeg" }
].filter(Boolean);
    

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
      subject: `Kanada Vize Başvurusu - ${s(1).fullName || "İsimsiz"}`,
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