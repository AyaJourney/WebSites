import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit"; 
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import sharp from "sharp";
import heicConvert from "heic-convert";
export const runtime = "nodejs";

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
    console.warn("Dosya okunamadi, cache bos:", filePath, err);
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

export async function compressImage(base64, options = {}) {
  try {
    if (!base64) return base64;
    const {
      maxWidth = 1200,
      quality = 60,
      skipBelowBytes = 200 * 1024,
    } = options;

    const cleaned = cleanBase64(base64);
    const raw = Buffer.from(cleaned, "base64");
    const isHeic = raw.subarray(4, 12).toString() === "ftypheic";

    if (!isHeic && raw.length <= skipBelowBytes) {
      return cleaned;
    }

    if (!isHeic) {
      try {
        const metadata = await sharp(raw).metadata();
        if (metadata?.width && metadata.width <= maxWidth) {
          return cleaned;
        }
      } catch {
        // metadata okunamazsa devam et
      }
    }

    const buffer = isHeic
      ? await heicConvert({ buffer: raw, format: "JPEG", quality })
      : raw;

    const output = await sharp(buffer)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .jpeg({ quality })
      .toBuffer();

    return output.toString("base64");
  } catch (err) {
    console.error("Image compression failed:", err);
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
    const steps = formData.steps || {};
    const files = steps["7"] || {};

    // S�k��t�rmay� erken ba�lat (PDF �izimi ile paralel)
    const passportBase64Promise = compressImage(files.passportFileBase64);
    const photoBase64Promise = compressImage(files.photoFileBase64);

    // --- PDF Dokümanı Olu�Ytur ---
    const pdfDoc = await PDFDocument.create();
    
    // Custom fontlar (TTF) için fontkit'i kaydetmek zorunludur
    pdfDoc.registerFontkit(fontkit);

    // --- Font Ayarları ---
    let regularFont, boldFont;
    
    // Senin belirtti�Yin orijinal dosya yolu
    const fontBytes = getCachedFileBytes(FONT_PATH, fontCache);

    // Font yükleme mantı�Yı: Sadece senin dosyanı baz alıyoruz.
    if (fontBytes) {
      try {
        const customFont = await pdfDoc.embedFont(fontBytes);
        
        // Hem normal hem bold de�Yi�Ykenine SENİN fontunu atıyoruz.
        // Böylece bold dosyası ararken hata vermez veya Helvetica'ya dönüp görüntüyü bozmaz.
        regularFont = customFont;
        boldFont = customFont; 
      } catch (fontError) {
        console.warn("�zel font dosyasi bozuk veya y�klenemedi, standart fonta ge�iliyor:", fontError);
        regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
        boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      }
    } else {
      console.warn("Font dosyasi bulunamadi, standart font kullaniliyor.");
      regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
      boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    }

    // --- Renk Paleti & Sabitler ---
    const COLORS = {
      primary: rgb(0.1, 0.2, 0.45),    // Lacivert (Basliklar)
      secondary: rgb(0.95, 0.95, 0.96), // �ok a�ik gri (Arka planlar)
      textMain: rgb(0.15, 0.15, 0.15), // Koyu Gri (Ana metin)
      textLabel: rgb(0.5, 0.5, 0.55),  // A�ik Gri (Etiketler)
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
        console.warn("Logo embed edilemedi, yaz�yla devam:", err);
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
    const HEADER_HEIGHT = 25; 
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

    // 3. Header (Sayfa �ostü)
const drawHeader = async (page) => {
  // --- PNG Logo ---
  if (logoImage) {
    page.drawImage(logoImage, {
      x: MARGIN,
      y: PAGE_HEIGHT- 42, // Logo yüksekli�Yi kadar yukarı çek
      width: 110,
      height: 33
    });
  } else {
     // Şirket Adı
  page.drawText("AYA JOURNEY", {
    x: MARGIN + 110, // Logo sa�Yında
    y: PAGE_HEIGHT - 45 - 20,
    size: 18,
    font: boldFont,
    color: COLORS.primary,
  });
  }



  // Doküman Ba�Ylı�Yı
  page.drawText("KANADA VIZE BASVURU FORMU BILGI FISI", {
    x: PAGE_WIDTH - MARGIN - getTextWidth(boldFont, 10, "KANADA VIZE BASVURU FORMU BILGI FISI"),
    y: PAGE_HEIGHT - 38,
    size: 10,
    font: boldFont,
    color: COLORS.textLabel,
  });

  currentY = PAGE_HEIGHT - 50; // içerik ba�Ylangıç Y koordinatı
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

    // 5. Bölüm Ba�Ylı�Yı (Section)
    const drawSection = (title) => {
      checkSpace(50);
      currentY -= 15; // Biraz bo�Yluk
      
     
      currentPage.drawRectangle({
        x: MARGIN,
        y: currentY - 25,
        width: CONTENT_WIDTH,
        height: 30,
        color: COLORS.primary,
        
      });

      
      currentPage.drawText(title.toUpperCase(), {
        x: MARGIN + 10,
        y: currentY - 15,
        size: 11,
        font: boldFont, // Senin fontun
        color: COLORS.white
      });

      currentY -= 40; // A�Ya�Yı in
    };

    // 6. Alan �?izimi (Grid Yapısı - Label/Value)
const drawField = (label, value) => {

  // 🔥 Sayfanın tamamını kullan (margin hariç)
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


    // --- Veri İ�Yleme ve �?izim Ba�Ylangıcı ---
    const checkPageOverflow = (neededHeight = 0) => {
  if (currentY - neededHeight < MARGIN) {
    drawFooter(currentPage, pageCount);
    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
  }
};
    // drawHeader(currentPage, true);

    const s = (n) => steps[String(n)] || {};

    // --- B�-L�oM 1: Ki�Yisel Bilgiler ---
       await drawHeader(currentPage);

    // --- Step 1 ---
drawSection("1. KİŞİSEL BİLGİLER");

// Ad Soyad ve T.C. Kimlik No
let h1 = drawField(
  "T.C. Kimlik Numarası",
  s(1).tcId,
  false,
  0
);

let h2 = drawField(
  "Adı Soyadı",
  s(1).fullName,
  false,
 0
);

let h3 = drawField(
  "Önceki Adı Soyadı",
  s(1).previousSurname,
  false,
 0
);


currentY -= Math.max(h1, h2, h3) + 10;



h1 = drawField(
  "T.C. Kimliği Son Geçerlilik Tarihi",
  toTRDate(s(1).tcEndDate),
  false,
  0
);

 h2 = drawField(
  "Doğum Tarihi",
  (toTRDate(s(1).birthDate)),
  false,
 0
);

h3 = drawField(
  "Doğum Yeri",
 s(1).birthPlace,
  false,
  (CONTENT_WIDTH / 3) * 2
);

// satırı a�Ya�Yı indir
currentY -= Math.max(h1, h2, h3) + 10;


// Cinsiyet ve Medeni Durum
h1 = drawField("Cinsiyeti", s(1).gender, false, 0);
h2 = drawField("Medeni Durumu", s(1).maritalStatus, false, 0);
currentY -= Math.max(h1, h2) + 10;

// E-posta ve Telefon
h1 = drawField("E-Posta Adresi", s(1).email, false, 0);
h2 = drawField("Telefon Numarası", s(1).phone_number, false, 0);
currentY -= Math.max(h1, h2) + 10;

// Adres
h1 = drawField("Ev Adresi", s(1).home_address, false, 0, CONTENT_WIDTH); // full width
currentY -= h1 + 10;



    // --- Step 2: Aile ---
drawSection("2.MEDENİ DURUM BİLGİSİ");

// Medeni Durum ve Evlilik Tarihi
 h1 = drawField("Medeni Durumu", s(2).maritalStatus, false, 0);
 if(s(2).maritalStatus === "EVLI"){
  h2 = drawField("Evlilik Tarihi", toTRDate(s(2).marriageDate || "-"), false, 0); 
  h1 = drawField("Eşinin Adı Soyadı", s(2).spouseFullName, false, 0);
  h2 = drawField("Eşinin Doğum Tarihi", toTRDate(s(2).spouseBirthDate), false, 0);
  h1 = drawField("Eşinin Doğum Yeri", s(2).spouseBirthPlace, false, 0);
  h2 = drawField("Eşinin Mesleği", s(2).spouseOccupation, false, 0);
  h1 = drawField("Eşinin İkamet Adresi", s(2).spouseAddress, false, 0);
 }

h1 = drawField("Başka evlilik yaptınız mı?", s(2).otherMarriages, false, 0);


// �-nceki Evlilikler (Varsa)
if (s(2).otherMarriages === "EVET") {
  s(2).marriages.forEach((val, index) => {
  h1 = drawField(`Eski Evlilik ${index + 1}`, "", false, 0);
  h1 = drawField("Eski Eşinizin Adı Soyadı", val?.spouseFullName, false, 0);
  h2 = drawField("Eski Eşinizin Doğum Tarihi", toTRDate(val?.spouseBirthDate), false, 0);
  h1 = drawField("Eski Evliliğinizin Başlangıç Tarihi", toTRDate(val?.marriageStartDate), false, 0);
  h2 = drawField("Eski Evliliğinizin Bitiş Tarihi", toTRDate(val?.marriageEndDate), false, 0);
 })
}
 if((s(2).maritalStatus === "DUL") || (s(2).maritalStatus === "BOSANMIS") ){
 s(2).marriages.forEach((val, index) => {
  h1 = drawField(`Eski Evlilik ${index + 1}`, "", false, 0);
  h1 = drawField("Eski Eşinizin Adı Soyadı", val?.spouseFullName, false, 0);
  h2 = drawField("Eski Eşinizin Doğum Tarihi", toTRDate(val?.spouseBirthDate), false, 0);
  h1 = drawField("Eski Evliliğinizin Başlangıç Tarihi", toTRDate(val?.marriageStartDate), false, 0);
  h2 = drawField("Eski Evliliğinizin Bitiş Tarihi", toTRDate(val?.marriageEndDate), false, 0);
 })

 

 }
 h1 = drawField("Çocuğunuz var mı?",s(2).childrenExist, false, 0);

  if (s(2).childrenExist === "EVET" && s(2).children && s(2).children.length > 0) {
    drawSection("ÇOCUK BİLGİLERİ");
    s(2).children.forEach((child, index) => {
        h1 = drawField(`Çocuk ${index+1} Adı Soyadı`, child.fullName, false, 0);
        h2 = drawField(`Çocuk ${index+1} Medeni Durumu`, child.maritalStatus, false, 0);
        currentY -= Math.max(h1, h2) + 10;

        h1 = drawField(`Çocuk ${index+1} Doğum Yeri`, child.birthPlace, false, 0);
        h2 = drawField(`Çocuk ${index+1} Doğum Tarihi`, toTRDate(child.birthDate), false, 0);
        currentY -= Math.max(h1, h2) + 10;

        h1 = drawField(`Çocuk ${index+1} Adresi`, child.address, false, 0, CONTENT_WIDTH);
        currentY -= h1 + 10;

        h1 = drawField(`Çocuk ${index+1} Mesleği`, child.occupation, false, 0, CONTENT_WIDTH);
        currentY -= h1 + 10;
    });
}

    drawFooter(currentPage,pageCount); 


    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
    await drawHeader(currentPage);


    // --- Step 3: Pasaport ---
   drawSection("3.ANNE, BABA VE KARDEŞ BİLGİSİ");

// Anne Bilgileri
 h1 = drawField("Annenin Adı Soyadı", s(3).motherFullName, false, 0);
 h2 = drawField("Annenin Medeni Durumu", s(3).motherMaritalStatus, false, 0);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("Annenin Doğum Yeri", s(3).motherBirthPlace, false, 0);
h2 = drawField("Annenin Doğum Tarihi", toTRDate(s(3).motherBirthDate), false, 0);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("Annenin İkamet Adresi", s(3).motherAddress, false, 0, CONTENT_WIDTH);
currentY -= h1 + 10;

h1 = drawField("Annenin Mesleği", s(3).motherOccupation, false, 0, CONTENT_WIDTH);
currentY -= h1 + 10;

// Baba Bilgileri
h1 = drawField("Babanın Adı Soyadı", s(3).fatherFullName, false, 0);
h2 = drawField("Babanın Medeni Durumu", s(3).fatherMaritalStatus, false, 0);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("Babanın Doğum Yeri", s(3).fatherBirthPlace, false, 0);
h2 = drawField("Babanın Doğum Tarihi", toTRDate(s(3).fatherBirthDate), false, 0);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("Babanın İkamet Adresi", s(3).fatherAddress, false, 0, CONTENT_WIDTH);
currentY -= h1 + 10;

h1 = drawField("Babanın Mesleği", s(3).fatherOccupation, false, 0, CONTENT_WIDTH);
currentY -= h1 + 10;

// Karde�Y Bilgileri
if (s(3).siblingsCount > 0 && s(3).siblings && s(3).siblings.length > 0) {
    drawSection("KARDEŞ BİLGİLERİ");

    s(3).siblings.forEach((sibling, index) => {
        h1 = drawField(`Kardeş ${index+1} Adı Soyadı`, sibling.fullName, false, 0);
        h2 = drawField(`Kardeş ${index+1} Medeni Durumu`, sibling.maritalStatus, false, 0);
        currentY -= Math.max(h1, h2) + 10;

        h1 = drawField(`Kardeş ${index+1} Doğum Yeri`, sibling.birthPlace, false, 0);
        h2 = drawField(`Kardeş ${index+1} Doğum Tarihi`, toTRDate(sibling.birthDate), false, 0);
        currentY -= Math.max(h1, h2) + 10;

        h1 = drawField(`Kardeş ${index+1} Adresi`, sibling.address, false, 0, CONTENT_WIDTH);
        currentY -= h1 + 10;

        h1 = drawField(`Kardeş ${index+1} Mesleği`, sibling.occupation, false, 0, CONTENT_WIDTH);
        currentY -= h1 + 10;
    });
}
    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
    await drawHeader(currentPage);


drawSection("4.DİL, EĞİTİM VE ASKERLİK BİLGİLERİ");
checkPageOverflow(20);
currentY -= 20;
h1 = drawField("Ana Diliniz", s(4).nativeLanguage, false, 0);
h2 = drawField("İngilizce veya Fransızca iletişim kurabiliyor musunuz?", s(4).canCommunicateInEnglishFrench, false, 0);
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
        h2 = drawField("Sınav Tarihi", toTRDate(exam.examDate), false, 0);
        currentY -= Math.max(h1, h2) + 2;

        h1 = drawField("Alınan Puan", exam.score, false, 0);
        currentY -= h1 + 2;
    });
}

drawSection("Eğitim Bilgileri");
currentY -= 5;
h1 = drawField("Orta ögretim sonrası eğitim aldınız mı?", s(4).postSecondaryEducation, false, 0);
currentY -= h1 + 2;

if (s(4).postSecondaryEducation === "EVET") {
    checkPageOverflow(60);
    h1 = drawField("Okul Adı", s(4).schoolName, false, 0);
    h2 = drawField("Bölüm Adı", s(4).programName, false, 0);
    currentY -= Math.max(h1, h2) + 2;

    h1 = drawField("Okulun Bulunduğu Şehir", s(4).educationCity, false, 0);
    h2 = drawField("Okulun Bulunduğu Ülke", s(4).educationCountry, false, 0);
    currentY -= Math.max(h1, h2) + 2;

    h1 = drawField("Eğitimin Başlangıç Tarihi", toTRDate(s(4).educationStartDate), false, 0);
    h2 = drawField("Mezuniyet Tarihi", toTRDate(s(4).educationEndDate), false, 0);
    currentY -= Math.max(h1, h2) +2;
}

// Askerlik bilgisi
drawSection("Askerlik Bilgisi");
currentY -= 5;
h1 = drawField("Askerlik durumu", s(4).boolean_military, false, 0);
currentY -= h1 + 2;

if (s(4).boolean_military === "YAPTI") {
    checkPageOverflow(60);
    h1 = drawField("Askerlik Yapılan Şehir", s(4).military_city, false, 0);
    h2 = drawField("Askerlik Başlangıç Tarihi", toTRDate(s(4).military_start_date), false, 0);
    currentY -= Math.max(h1, h2) + 2;

    h1 = drawField("Askerlik Bitis Tarihi", toTRDate(s(4).military_end_date), false, 0);
    currentY -= h1 + 2;
}


    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
    await drawHeader(currentPage);

   

drawSection("5.ÇALIŞMA BİLGİLERİ");

// Mevcut iY durumu
 h1 = drawField("Çalışma Durumu", s(5).employmentStatus || "-", false, 0);
currentY -= h1 + 10;


if (s(5).employmentStatus?.toUpperCase() === "CALISIYOR") {
    h1 = drawField("Şu an Çalıştığınız Şirket", s(5).currentCompanyName || "-", false, 0);
     h2 = drawField("Göreviniz", s(5).currentPosition || "-", false, 0);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("İşe Başlangıç Tarihi", toTRDate(s(5).currentJobStartDate) || "-", false, 0);
    h2 = drawField("Şehir / Ülke", `${s(5).currentWorkCity || "-"} / ${s(5).currentWorkCountry || "-"}`, false, 0);
    currentY -= Math.max(h1, h2) + 10;
}

// Son 10 yıl i�Y deneyimleri
if (s(5).last10YearsWorkExperience?.length) {
    drawSection("Son 10 Yıldaki Iş Deneyimleri");
    s(5).last10YearsWorkExperience.forEach((job, index) => {
        h1 = drawField(`Şirket ${index + 1} Adı`, job.companyName || "-", false, 0);
        h2 = drawField(`Şirket ${index + 1} Göreviniz`, job.position || "-", false, 0);
        currentY -= Math.max(h1, h2) + 10;

        h1 = drawField(`Şirket ${index + 1} İşe Başlama / Bitiş Tarihi`, `${toTRDate(job.startDate) || "-"} / ${toTRDate(job.endDate) || "-"}`, false, 0);
        h2 = drawField(`Şirket ${index + 1} Bulunduğu Şehir / Ülke`, `${job.city || "-"} / ${job.country || "-"}`, false, 0);
        currentY -= Math.max(h1, h2) + 10;
    });
}

drawFooter(currentPage, pageCount);
currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);

// --- 6. Bölüm ---
drawSection("6.SEYAHAT VE VİZE BİLGİLERİ");
h1 = drawField("Kanada veya başka bir ülke için vize reddi yaşadınız mı?", s(6).previousVisaRefusal || "-", false, 0);
currentY -= h1 + 10;

if (s(6).previousVisaRefusal?.toUpperCase() === "EVET") {
    h1 = drawField("Vize reddi nedeni", s(6).refusalReason || "-", false, 0);
    currentY -= h1 + 10;
}

h1 = drawField("Daha önce Kanada’ya giriş yapmak için başvurdunuz mu?", s(6).previousCanadaApplication || "-", false, 0);
currentY -= h1 + 10;

 h1 = drawField("Seyahat Başlangıç Tarihi", toTRDate(s(6).travelStartDate) || "-", false, 0);
 h2 = drawField("Seyahat Bitiş Tarihi", `${toTRDate(s(6).travelEndDate) || "-"}`, false, 0);
    currentY -= Math.max(h1, h2) + 10;

 h1 = drawField("Konaklama Adresi", s(6).travelAddress || "-", false, 0);
 h2 = drawField("Toplam Birikim Miktarı(Banka Hesaplarındaki)", `${s(6).totalMoney} ₺`  || "-", false, 0);
    currentY -= Math.max(h1, h2) + 10;



// Son 5 yıldaki seyahatler
if (s(6).last5YearsTravel?.length) {
    drawSection("Son 5 Yilda Seyahatler");
    s(6).last5YearsTravel.forEach((trip, index) => {
        h1 = drawField(`Seyahat Edilen ${index + 1} Ülke`, trip.country || "-", false, 0);
         h2 = drawField("Seyahat Başlangıç Tarihi", toTRDate(trip.travelStartDate) || "-", false, 0);
          h2 = drawField("Seyahat Bitiş Tarihi", toTRDate(trip.travelEndDate) || "-", false, 0);
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

// --- 7. BÖLÜM ---
drawSection("7.FOTOĞRAFLAR");

const passportBase64 = await passportBase64Promise;
const photoBase64 = await photoBase64Promise;

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
         const width = PAGE_WIDTH - 2 * MARGIN;
        const height = (PAGE_HEIGHT - 150) / 3;
        const scale = Math.min(width / embeddedImg.width, height / embeddedImg.height);
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
    addFileImage(passportBase64, "Pasaport Goruntusu", "passport"),
    addFileImage(photoBase64, "Biyometrik Fotograf", "photo")
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
// const textBody = `
// KANADA VIZE BASVURU FORMU

// -- 1. KISISEL BILGILER --
// T.C. Kimlik No: ${s(1).tcId || "-"}
// Ad Soyad: ${s(1).fullName || "-"}
// Onceki Adi veya Soyadi: ${s(1).previousSurname || "-"}
// Cinsiyet: ${s(1).gender || "-"}
// T.C. Kimlik Son Geçerlilik Tarihi: ${toTRDate(s(1).tcEndDate) || "-"}

// Dogum Tarihi: ${toTRDate(s(1).birthDate) || "-"}
// Dogum Yeri: ${s(1).birthPlace || "-"}
// Ev Adresi: ${s(1).home_address || "-"}
// Email: ${s(1).email || "-"}
// Telefon: ${s(1).phone_number || "-"}

// -- 2. AİLE / EVLİLİK BİLGİLERİ --
// Medeni Durum: ${s(2).maritalStatus || "-"}
// Evlilik Tarihi: ${toTRDate(s(2).marriageDate) || "-"}
// Es Adi-Soyadi: ${s(2).spouseFullName || "-"}
// Es Dogum Tarihi: ${toTRDate(s(2).spouseBirthDate) || "-"}
// Es Dogum Yeri: ${s(2).spouseBirthPlace || "-"}
// Es Adresi: ${s(2).spouseAddress || "-"}
// Es Meslek: ${s(2).spouseOccupation || "-"}
// Baska Evlilik: ${s(2).otherMarriages || "-"}
// Eski Es Adi-Soyadi: ${s(2).exSpouseFullName || "-"}
// Eski Es Dogum Tarihi: ${toTRDate(s(2).exSpouseBirthDate) || "-"}
// Cocuk Var mi: ${s(2).childrenExist || "-"}
// Cocuk Sayisi: ${s(2).childrenCount || "-"}
// Cocuklar: ${s(2).children.map(c => c.fullName ? `${c.fullName} (${c.birthDate || "-"})` : "-").join(", ")}

// -- 3. AİLE / EBEVEYNLER VE KARDEŞLER --
// Anne Adi-Soyadi: ${s(3).motherFullName || "-"}
// Anne Medeni Durum: ${s(3).motherMaritalStatus || "-"}
// Anne Dogum Yeri: ${s(3).motherBirthPlace || "-"}
// Anne Dogum Tarihi: ${toTRDate(s(3).motherBirthDate) || "-"}
// Anne Adresi: ${s(3).motherAddress || "-"}
// Anne Meslegi: ${s(3).motherOccupation || "-"}
// Baba Adi-Soyadi: ${s(3).fatherFullName || "-"}
// Baba Medeni Durum: ${s(3).fatherMaritalStatus || "-"}
// Baba Dogum Yeri: ${s(3).fatherBirthPlace || "-"}
// Baba Dogum Tarihi: ${toTRDate(s(3).fatherBirthDate) || "-"}
// Baba Adresi: ${s(3).fatherAddress || "-"}
// Baba Meslegi: ${s(3).fatherOccupation || "-"}
// Kardes Sayisi: ${s(3).siblingsCount || "-"}
// Kardesler: ${s(3).siblings.map(k => k.fullName ? `${k.fullName} (${k.birthDate || "-"})` : "-").join(", ")}
// -- 4. EGITIM VE DIL BILGILERI --
// Ana Dil: ${s(4).nativeLanguage || "-"}
// Ingilizce/Fransizca: ${s(4).canCommunicateInEnglishFrench || "-"}
// Yeterlilik Sinavina Girdi mi: ${s(4).tookProficiencyExam || "-"}
// Sinavlar: ${s(4).exams.map(ex => ex.examName ? `${ex.examName} (${ex.score || "-"})` : "-").join(", ")}
// Orta �gretim Sonrasi Egitim: ${s(4).postSecondaryEducation || "-"}
// Okul: ${s(4).schoolName || "-"}
// Program/B�l�m: ${s(4).programName || "-"}
// Sehir/Ulke: ${s(4).educationCity || "-"} / ${s(4).educationCountry || "-"}
// Baslangic / Bitis: ${s(4).educationStartDate || "-"} / ${s(4).educationEndDate || "-"}
// Askerlik Durumu: ${s(4).boolean_military || "-"}
// Askerlik Sehir / Tarih: ${s(4).military_city || "-"} / ${toTRDate(s(4).military_start_date) || "-"} - ${toTRDate(s(4).military_end_date) || "-"}

// -- 5. IS DENEYIMI --
// Calisma Durumu: ${s(5).employmentStatus || "-"}
// Sirket Adi: ${s(5).currentCompanyName || "-"}
// Pozisyon: ${s(5).currentPosition || "-"}
// Ise Baslangic Tarihi: ${s(5).currentJobStartDate || "-"}
// Sehir / Ulke: ${s(5).currentWorkCity || "-"} / ${s(5).currentWorkCountry || "-"}
// Son 10 Yillik Is Deneyimleri: ${s(5).last10YearsWorkExperience.map(w => w.companyName ? `${w.companyName} - ${w.position} (${w.startDate || "-"} / ${w.endDate || "-"})` : "-").join(", ")}

// -- 6. VIZE VE SEYAHAT BILGILERI --
// Onceki Vize Reddi: ${s(6).previousVisaRefusal || "-"}
// Red Nedeni: ${s(6).refusalReason || "-"}
// Daha onceden Kanada Basvurusu: ${s(6).previousCanadaApplication || "-"}
// Seyahat Baslangic Tarihi:  ${toTRDate(s(6).travelStartDate) || "-"}
// Seyahat Bitis Tarihi:  ${toTRDate(s(6).travelEndDate) || "-"}
// Konaklama Adresi: ${s(6).travelAddress || "-"}
// Toplam Birikim: ${s(6).totalMoney || "-"}
// Son 5 Yillik Seyahatler: ${s(6).last5YearsTravel.map(t => t.country ? `${t.country} (${t.travelStartDate || "-"} / ${t.travelEndDate || "-"}) - ${t.travelPurpose || "-"}` : "-").join(", ")}

// Basvuru Tarihi: ${new Date().toLocaleString("tr-TR")}
// `.trim();



// --- HTML BODY ---
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
    background: linear-gradient(135deg, #7b0000 0%, #b71c1c 60%, #e53935 100%);
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
    color: #7b0000;
    letter-spacing: 0.5px;
    padding-bottom: 10px;
    border-bottom: 2px solid #e8edf5;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .section-title span.badge {
    background: #7b0000;
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 20px;
    letter-spacing: 0.8px;
  }
  .sub-section-title {
    font-family: 'DM Serif Display', serif;
    font-size: 13px;
    color: #7b0000;
    padding-bottom: 8px;
    border-bottom: 1px solid #e8edf5;
    margin: 20px 0 12px;
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
    font-size: 14px;
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
  .sub-entry strong { color: #7b0000; display: block; margin-bottom: 4px; font-size: 12px; }
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
    font-size: 14px;
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
    <div class="doc-header-icon">🇨🇦</div>
    <div class="doc-header-text">
      <h1>Kanada Vize Başvuru Formu</h1>
     
    </div>
  </div>

  <div class="doc-body">

    <!-- 1. KİŞİSEL BİLGİLER -->
    <div class="section">
      <div class="section-title"><span class="badge">01</span> KİŞİSEL BİLGİLER</div>
      <table>
        <tr><th>T.C. Kimlik Numarası</th><td>${s(1).tcId || "-"}</td></tr>
        <tr><th>Adı Soyadı</th><td>${s(1).fullName || "-"}</td></tr>
        <tr><th>Önceki Adı Soyadı</th><td>${s(1).previousSurname || "-"}</td></tr>
        <tr><th>T.C. Kimliği Son Geçerlilik Tarihi</th><td>${toTRDate(s(1).tcEndDate) || "-"}</td></tr>
        <tr><th>Doğum Tarihi</th><td>${toTRDate(s(1).birthDate) || "-"}</td></tr>
        <tr><th>Doğum Yeri</th><td>${s(1).birthPlace || "-"}</td></tr>
        <tr><th>Cinsiyeti</th><td>${s(1).gender || "-"}</td></tr>
        <tr><th>E-Posta Adresi</th><td>${s(1).email || "-"}</td></tr>
        <tr><th>Telefon Numarası</th><td>${s(1).phone_number || "-"}</td></tr>
        <tr><th>Ev Adresi</th><td>${s(1).home_address || "-"}</td></tr>
      </table>
    </div>

    <!-- 2. BÖLÜM — AİLE / EVLİLİK -->
    <div class="section">
      <div class="section-title"><span class="badge">02</span>MEDENİ DURUM BİLGİSİ</div>
      <table>
        <tr><th>Medeni Durumu</th><td>${s(2).maritalStatus || "-"}</td></tr>
        ${s(2).maritalStatus === "EVLI" ? `
        <tr><th>Evlilik Tarihi</th><td>${toTRDate(s(2).marriageDate) || "-"}</td></tr>
        <tr><th>Eşinin Adı Soyadı</th><td>${s(2).spouseFullName || "-"}</td></tr>
        <tr><th>Eşinin Doğum Tarihi</th><td>${toTRDate(s(2).spouseBirthDate) || "-"}</td></tr>
        <tr><th>Eşinin Doğum Yeri</th><td>${s(2).spouseBirthPlace || "-"}</td></tr>
        <tr><th>Eşinin Mesleği</th><td>${s(2).spouseOccupation || "-"}</td></tr>
        <tr><th>Eşinin İkamet Adresi</th><td>${s(2).spouseAddress || "-"}</td></tr>
        ` : ""}
        <tr><th>Başka evlilik yaptınız mı?</th><td>${s(2).otherMarriages || "-"}</td></tr>
        ${(s(2).otherMarriages === "EVET" || s(2).maritalStatus === "DUL" || s(2).maritalStatus === "BOSANMIS") && Array.isArray(s(2).marriages) && s(2).marriages.length > 0 ? `
        <tr><th>Eski Evlilikler</th><td>
          ${s(2).marriages.map((val, index) => `
            <div class="sub-entry">
              <strong>Eski Evlilik ${index + 1}</strong>
              Eski Eşinizin Adı Soyadı: ${val?.spouseFullName || "-"}<br/>
              Eski Eşinizin Doğum Tarihi: ${toTRDate(val?.spouseBirthDate) || "-"}<br/>
              Eski Evliliğinizin Başlangıç Tarihi: ${toTRDate(val?.marriageStartDate) || "-"}<br/>
              Eski Evliliğinizin Bitiş Tarihi: ${toTRDate(val?.marriageEndDate) || "-"}
            </div>`).join("")}
        </td></tr>
        ` : ""}
        <tr><th>Çocuğunuz var mı?</th><td>${s(2).childrenExist || "-"}</td></tr>
        ${s(2).childrenExist === "EVET" && Array.isArray(s(2).children) && s(2).children.length > 0 ? `
        <tr><th>Çocuk Bilgileri</th><td>
          ${s(2).children.map((child, index) => `
            <div class="sub-entry">
              <strong>Çocuk ${index + 1} — ${child.fullName || "-"}</strong>
              Medeni Durumu: ${child.maritalStatus || "-"}<br/>
              Doğum Yeri: ${child.birthPlace || "-"}<br/>
              Doğum Tarihi: ${toTRDate(child.birthDate) || "-"}<br/>
              Adresi: ${child.address || "-"}<br/>
              Mesleği: ${child.occupation || "-"}
            </div>`).join("")}
        </td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 3. BÖLÜM — ANNE / BABA / KARDEŞLER -->
    <div class="section">
      <div class="section-title"><span class="badge">03</span> ANNE, BABA VE KARDEŞ BİLGİLERİ</div>
      <table>
        <tr><th>Annenin Adı Soyadı</th><td>${s(3).motherFullName || "-"}</td></tr>
        <tr><th>Annenin Medeni Durumu</th><td>${s(3).motherMaritalStatus || "-"}</td></tr>
        <tr><th>Annenin Doğum Yeri</th><td>${s(3).motherBirthPlace || "-"}</td></tr>
        <tr><th>Annenin Doğum Tarihi</th><td>${toTRDate(s(3).motherBirthDate) || "-"}</td></tr>
        <tr><th>Annenin İkamet Adresi</th><td>${s(3).motherAddress || "-"}</td></tr>
        <tr><th>Annenin Mesleği</th><td>${s(3).motherOccupation || "-"}</td></tr>
        <tr><th>Babanın Adı Soyadı</th><td>${s(3).fatherFullName || "-"}</td></tr>
        <tr><th>Babanın Medeni Durumu</th><td>${s(3).fatherMaritalStatus || "-"}</td></tr>
        <tr><th>Babanın Doğum Yeri</th><td>${s(3).fatherBirthPlace || "-"}</td></tr>
        <tr><th>Babanın Doğum Tarihi</th><td>${toTRDate(s(3).fatherBirthDate) || "-"}</td></tr>
        <tr><th>Babanın İkamet Adresi</th><td>${s(3).fatherAddress || "-"}</td></tr>
        <tr><th>Babanın Mesleği</th><td>${s(3).fatherOccupation || "-"}</td></tr>
        ${s(3).siblingsCount > 0 && Array.isArray(s(3).siblings) && s(3).siblings.length > 0 ? `
        <tr><th>Kardeş Bilgileri</th><td>
          ${s(3).siblings.map((sibling, index) => `
            <div class="sub-entry">
              <strong>Kardeş ${index + 1} — ${sibling.fullName || "-"}</strong>
              Medeni Durumu: ${sibling.maritalStatus || "-"}<br/>
              Doğum Yeri: ${sibling.birthPlace || "-"}<br/>
              Doğum Tarihi: ${toTRDate(sibling.birthDate) || "-"}<br/>
              Adresi: ${sibling.address || "-"}<br/>
              Mesleği: ${sibling.occupation || "-"}
            </div>`).join("")}
        </td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 4. BÖLÜM — EĞİTİM VE DİL -->
    <div class="section">
      <div class="section-title"><span class="badge">04</span>DİL, EĞİTİM VE ASKERLİK BİLGİLERİ</div>
      <table>
        <tr><th>Ana Diliniz</th><td>${s(4).nativeLanguage || "-"}</td></tr>
        <tr><th>İngilizce veya Fransızca iletişim kurabiliyor musunuz?</th><td>${s(4).canCommunicateInEnglishFrench || "-"}</td></tr>
        <tr><th>İngilizce/Fransızca yeterlilik sınavına girdiniz mi?</th><td>${s(4).tookProficiencyExam || "-"}</td></tr>
        ${Array.isArray(s(4).exams) && s(4).exams.length > 0 ? `
        <tr><th>Girmiş Olduğunuz Sınavlar</th><td>
          ${s(4).exams.map((exam, index) => `
            <div class="sub-entry">
              <strong>Sınav ${index + 1}</strong>
              Sınav Adı: ${exam.examName || "-"}<br/>
              Sınav Tarihi: ${toTRDate(exam.examDate) || "-"}<br/>
              Alınan Puan: ${exam.score || "-"}
            </div>`).join("")}
        </td></tr>
        ` : ""}
        <tr><th>Orta öğretim sonrası eğitim aldınız mı?</th><td>${s(4).postSecondaryEducation || "-"}</td></tr>
        ${s(4).postSecondaryEducation === "EVET" ? `
        <tr><th>Okul Adı</th><td>${s(4).schoolName || "-"}</td></tr>
        <tr><th>Bölüm Adı</th><td>${s(4).programName || "-"}</td></tr>
        <tr><th>Okulun Bulunduğu Şehir</th><td>${s(4).educationCity || "-"}</td></tr>
        <tr><th>Okulun Bulunduğu Ülke</th><td>${s(4).educationCountry || "-"}</td></tr>
        <tr><th>Eğitimin Başlangıç Tarihi</th><td>${toTRDate(s(4).educationStartDate) || "-"}</td></tr>
        <tr><th>Mezuniyet Tarihi</th><td>${toTRDate(s(4).educationEndDate) || "-"}</td></tr>
        ` : ""}
        <tr><th>Askerlik Durumu</th><td>${s(4).boolean_military || "-"}</td></tr>
        ${s(4).boolean_military === "YAPTI" ? `
        <tr><th>Askerlik Yapılan Şehir</th><td>${s(4).military_city || "-"}</td></tr>
        <tr><th>Askerlik Başlangıç Tarihi</th><td>${toTRDate(s(4).military_start_date) || "-"}</td></tr>
        <tr><th>Askerlik Bitiş Tarihi</th><td>${toTRDate(s(4).military_end_date) || "-"}</td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 5. BÖLÜM — İŞ DENEYİMİ -->
    <div class="section">
      <div class="section-title"><span class="badge">05</span> ÇALIŞMA BİLGİLERİ</div>
      <table>
        <tr><th>Çalışma Durumu</th><td>${s(5).employmentStatus || "-"}</td></tr>
        ${s(5).employmentStatus?.toUpperCase() === "CALISIYOR" ? `
        <tr><th>Şu an Çalıştığınız Şirket</th><td>${s(5).currentCompanyName || "-"}</td></tr>
        <tr><th>Göreviniz</th><td>${s(5).currentPosition || "-"}</td></tr>
        <tr><th>İşe Başlangıç Tarihi</th><td>${toTRDate(s(5).currentJobStartDate) || "-"}</td></tr>
        <tr><th>Şehir / Ülke</th><td>${s(5).currentWorkCity || "-"} / ${s(5).currentWorkCountry || "-"}</td></tr>
        ` : ""}
        ${Array.isArray(s(5).last10YearsWorkExperience) && s(5).last10YearsWorkExperience.length > 0 ? `
        <tr><th>Son 10 Yıldaki İş Deneyimleri</th><td>
          ${s(5).last10YearsWorkExperience.map((job, index) => `
            <div class="sub-entry">
              <strong>Şirket ${index + 1} — ${job.companyName || "-"}</strong>
              Göreviniz: ${job.position || "-"}<br/>
              İşe Başlama / Bitiş Tarihi: ${toTRDate(job.startDate) || "-"} / ${toTRDate(job.endDate) || "-"}<br/>
              Bulunduğu Şehir / Ülke: ${job.city || "-"} / ${job.country || "-"}
            </div>`).join("")}
        </td></tr>
        ` : ""}
      </table>
    </div>

    <!-- 6. BÖLÜM — VİZE VE SEYAHAT -->
    <div class="section">
      <div class="section-title"><span class="badge">06</span> SEYAHAT VE VİZE  BİLGİLERİ</div>
      <table>
        <tr><th>Kanada veya başka bir ülke için vize reddi yaşadınız mı?</th><td>${s(6).previousVisaRefusal || "-"}</td></tr>
        ${s(6).previousVisaRefusal?.toUpperCase() === "EVET" ? `
        <tr><th>Vize Reddi Nedeni</th><td>${s(6).refusalReason || "-"}</td></tr>
        ` : ""}
        <tr><th>Daha önce Kanada'ya giriş yapmak için başvurdunuz mu?</th><td>${s(6).previousCanadaApplication || "-"}</td></tr>
        <tr><th>Seyahat Başlangıç Tarihi</th><td>${toTRDate(s(6).travelStartDate) || "-"}</td></tr>
        <tr><th>Seyahat Bitiş Tarihi</th><td>${toTRDate(s(6).travelEndDate) || "-"}</td></tr>
        <tr><th>Konaklama Adresi</th><td>${s(6).travelAddress || "-"}</td></tr>
        <tr><th>Toplam Birikim Miktarı (Banka Hesaplarındaki)</th><td>${s(6).totalMoney ? s(6).totalMoney + " ₺" : "-"}</td></tr>
        ${Array.isArray(s(6).last5YearsTravel) && s(6).last5YearsTravel.length > 0 ? `
        <tr><th>Son 5 Yılda Seyahatler</th><td>
          ${s(6).last5YearsTravel.map((trip, index) => `
            <div class="sub-entry">
              <strong>Seyahat ${index + 1} — ${trip.country || "-"}</strong>
              Seyahat Başlangıç Tarihi: ${toTRDate(trip.travelStartDate) || "-"}<br/>
              Seyahat Bitiş Tarihi: ${toTRDate(trip.travelEndDate) || "-"}<br/>
              Seyahat Amacı: ${trip.travelPurpose || "-"}
            </div>`).join("")}
        </td></tr>
        ` : ""}
      </table>
    </div>

    ${f?.steps?.[7]?.passportFile || f?.steps?.[7]?.photoFile ? `
    <div class="photo-row">
      ${f?.steps?.[7]?.passportFile ? `
      <div class="photo-box">
        <p>Pasaport Fotoğrafı</p>
        <img src="cid:passportPhoto" alt="Pasaport"/>
      </div>` : ""}
      ${f?.steps?.[7]?.photoFile ? `
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
      subject: `Kanada Vize Basvurusu - ${s(1).fullName || "Isimsiz"}`,
      // text: textBody,
      html: htmlBody,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Mail / PDF Hatasi:", err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}





