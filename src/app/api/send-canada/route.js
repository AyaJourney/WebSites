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
const fontBoldBytes = getCachedFileBytes(FONT_BOLD_PATH, fontBoldCache);

    // Font yükleme mantı�Yı: Sadece senin dosyanı baz alıyoruz.
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
      primary: rgb(0.1, 0.2, 0.45),    // Lacivert (Basliklar)
      secondary: rgb(0.95, 0.95, 0.96), // �ok a�ik gri (Arka planlar)
      textMain: rgb(0.15, 0.15, 0.15), // Koyu Gri (Ana metin)
      textLabel: rgb(0.5, 0.5, 0.55),  // A�ik Gri (Etiketler)
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
        console.warn("Logo embed edilemedi, yaz�yla devam:", err);
        logoImage = null;
      }
    }



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
  const title = "KANADA VİZE BAŞVURU FORMU BİLGİ FİŞİ";
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

    const s = (n) => steps[String(n)] || {};

    // --- B�-L�oM 1: Ki�Yisel Bilgiler ---
   drawHeader(currentPage);

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



// Cinsiyet ve Medeni Durum
h1 = drawField("Cinsiyeti", s(1).gender, false, 0);
h2 = drawField("Medeni Durumu", s(1).maritalStatus, false, 0);


// E-posta ve Telefon
h1 = drawField("E-Posta Adresi", s(1).email, false, 0);
h2 = drawField("Telefon Numarası", s(1).phone_number, false, 0);


// Adres
h1 = drawField("Ev Adresi", s(1).home_address, false, 0, CONTENT_WIDTH); // full width




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
        

        h1 = drawField(`Çocuk ${index+1} Doğum Yeri`, child.birthPlace, false, 0);
        h2 = drawField(`Çocuk ${index+1} Doğum Tarihi`, toTRDate(child.birthDate), false, 0);
        

        h1 = drawField(`Çocuk ${index+1} Adresi`, child.address, false, 0, CONTENT_WIDTH);
        

        h1 = drawField(`Çocuk ${index+1} Mesleği`, child.occupation, false, 0, CONTENT_WIDTH);
        
    });
}

   


    // --- Step 3: Pasaport ---
   drawSection("3.ANNE, BABA VE KARDEŞ BİLGİSİ");

// Anne Bilgileri
 h1 = drawField("Annenin Adı Soyadı", s(3).motherFullName, false, 0);
 h2 = drawField("Annenin Medeni Durumu", s(3).motherMaritalStatus, false, 0);


h1 = drawField("Annenin Doğum Yeri", s(3).motherBirthPlace, false, 0);
h2 = drawField("Annenin Doğum Tarihi", toTRDate(s(3).motherBirthDate), false, 0);


h1 = drawField("Annenin İkamet Adresi", s(3).motherAddress, false, 0, CONTENT_WIDTH);


h1 = drawField("Annenin Mesleği", s(3).motherOccupation, false, 0, CONTENT_WIDTH);


// Baba Bilgileri
h1 = drawField("Babanın Adı Soyadı", s(3).fatherFullName, false, 0);
h2 = drawField("Babanın Medeni Durumu", s(3).fatherMaritalStatus, false, 0);


h1 = drawField("Babanın Doğum Yeri", s(3).fatherBirthPlace, false, 0);
h2 = drawField("Babanın Doğum Tarihi", toTRDate(s(3).fatherBirthDate), false, 0);


h1 = drawField("Babanın İkamet Adresi", s(3).fatherAddress, false, 0, CONTENT_WIDTH);


h1 = drawField("Babanın Mesleği", s(3).fatherOccupation, false, 0, CONTENT_WIDTH);


// Karde�Y Bilgileri
if (s(3).siblingsCount > 0 && s(3).siblings && s(3).siblings.length > 0) {
    drawSection("KARDEŞ BİLGİLERİ");

    s(3).siblings.forEach((sibling, index) => {
        h1 = drawField(`Kardeş ${index+1} Adı Soyadı`, sibling.fullName, false, 0);
        h2 = drawField(`Kardeş ${index+1} Medeni Durumu`, sibling.maritalStatus, false, 0);
        

        h1 = drawField(`Kardeş ${index+1} Doğum Yeri`, sibling.birthPlace, false, 0);
        h2 = drawField(`Kardeş ${index+1} Doğum Tarihi`, toTRDate(sibling.birthDate), false, 0);
        

        h1 = drawField(`Kardeş ${index+1} Adresi`, sibling.address, false, 0, CONTENT_WIDTH);
        

        h1 = drawField(`Kardeş ${index+1} Mesleği`, sibling.occupation, false, 0, CONTENT_WIDTH);
        
    });
}
   


drawSection("4.DİL, EĞİTİM VE ASKERLİK BİLGİLERİ");


h1 = drawField("Ana Diliniz", s(4).nativeLanguage, false, 0);
h2 = drawField("İngilizce veya Fransızca iletişim kurabiliyor musunuz?", s(4).canCommunicateInEnglishFrench, false, 0);


h1 = drawField("İngilizce/Fransızca yeterlilik sınavına girdiniz mi?", s(4).tookProficiencyExam, false, 0);


// Sınavlar
if (s(4).tookProficiencyExam ==="EVET" && s(4).exams.length > 0) {
    drawSection("Girmiş Olduğunuz Sınavlar");
   
    s(4).exams.forEach((exam, index) => {
        
        h1 = drawField(`Sınav ${index + 1} Adı`, exam.examName, false, 0);
        h2 = drawField("Sınav Tarihi", toTRDate(exam.examDate), false, 0);
       

        h1 = drawField("Alınan Puan", exam.score, false, 0);
        
    });
}

drawSection("Eğitim Bilgileri");

h1 = drawField("Orta ögretim sonrası eğitim aldınız mı?", s(4).postSecondaryEducation, false, 0);


if (s(4).postSecondaryEducation === "EVET") {

    h1 = drawField("Okul Adı", s(4).schoolName, false, 0);
    h2 = drawField("Bölüm Adı", s(4).programName, false, 0);
   

    h1 = drawField("Okulun Bulunduğu Şehir", s(4).educationCity, false, 0);
    h2 = drawField("Okulun Bulunduğu Ülke", s(4).educationCountry, false, 0);
   

    h1 = drawField("Eğitimin Başlangıç Tarihi", toTRDate(s(4).educationStartDate), false, 0);
    h2 = drawField("Mezuniyet Tarihi", toTRDate(s(4).educationEndDate), false, 0);
   
}

// Askerlik bilgisi
drawSection("Askerlik Bilgisi");

h1 = drawField("Askerlik durumu", s(4).boolean_military, false, 0);


if (s(4).boolean_military === "YAPTI") {
  
    h1 = drawField("Askerlik Yapılan Şehir", s(4).military_city, false, 0);
    h2 = drawField("Askerlik Başlangıç Tarihi", toTRDate(s(4).military_start_date), false, 0);
   

    h1 = drawField("Askerlik Bitis Tarihi", toTRDate(s(4).military_end_date), false, 0);
    
}


   

   

drawSection("5.ÇALIŞMA BİLGİLERİ");

// Mevcut iY durumu
 h1 = drawField("Çalışma Durumu", s(5).employmentStatus || "-", false, 0);



if (s(5).employmentStatus?.toUpperCase() === "CALISIYOR") {
    h1 = drawField("Şu an Çalıştığınız Şirket", s(5).currentCompanyName || "-", false, 0);
     h2 = drawField("Göreviniz", s(5).currentPosition || "-", false, 0);
    

    h1 = drawField("İşe Başlangıç Tarihi", toTRDate(s(5).currentJobStartDate) || "-", false, 0);
    h2 = drawField("Şehir / Ülke", `${s(5).currentWorkCity || "-"} / ${s(5).currentWorkCountry || "-"}`, false, 0);
    
}

// Son 10 yıl i�Y deneyimleri
const workList = s(5).last10YearsWorkExperience;
const hasWork = Array.isArray(workList) && workList.length > 0 && workList.some(job => job.companyName || job.position);

if (hasWork) {
  drawSection("Son 10 Yildaki Is Deneyimleri");
  workList.forEach((job, index) => {
    h1 = drawField(`Sirket ${index + 1} Adi`, job.companyName || "-", false, 0);
    h2 = drawField(`Sirket ${index + 1} Göreviniz`, job.position || "-", false, 0);

    h1 = drawField(`Sirket ${index + 1} Ise Baslama / Bitis Tarihi`, `${toTRDate(job.startDate) || "-"} / ${toTRDate(job.endDate) || "-"}`, false, 0);
    h2 = drawField(`Sirket ${index + 1} Bulundugu Sehir / Ülke`, `${job.city || "-"} / ${job.country || "-"}`, false, 0);
  });
} else {
  drawSection("Son 10 Yildaki Is Deneyimleri");
  checkSpace(LINE_HEIGHT + 10);
  currentPage.drawText("SON 10 YILDA IS DENEYIMI BULUNMAMAKTADIR.", {
    x: MARGIN,
    y: currentY,
    size: FONT_SIZE,
    font: regularFont,
    color: COLORS.textMain,
  });
  currentY -= LINE_HEIGHT + 10;
}



// --- 6. Bölüm ---
drawSection("6.SEYAHAT VE VİZE BİLGİLERİ");
h1 = drawField("Kanada veya başka bir ülke için vize reddi yaşadınız mı?", s(6).previousVisaRefusal || "-", false, 0);


if (s(6).previousVisaRefusal?.toUpperCase() === "EVET") {
    h1 = drawField("Vize reddi nedeni", s(6).refusalReason || "-", false, 0);
    
}

h1 = drawField("Daha önce Kanada’ya giriş yapmak için başvurdunuz mu?", s(6).previousCanadaApplication || "-", false, 0);


 h1 = drawField("Seyahat Başlangıç Tarihi", toTRDate(s(6).travelStartDate) || "-", false, 0);
 h2 = drawField("Seyahat Bitiş Tarihi", `${toTRDate(s(6).travelEndDate) || "-"}`, false, 0);
    

 h1 = drawField("Konaklama Adresi", s(6).travelAddress || "-", false, 0);
 h2 = drawField("Toplam Birikim Miktarı(Banka Hesaplarındaki)", `${s(6).totalMoney} ₺`  || "-", false, 0);
    



// Son 5 yıldaki seyahatler
if (s(6).last5YearsTravel?.length) {
  drawSection("Son 5 Yilda Yapilan Seyahatler");
  s(6).last5YearsTravel.forEach((trip, index) => {
    h1 = drawField(`Seyahat Edilen ${index + 1} Ülke`, trip.country || "-", false, 0);
    h2 = drawField("Seyahat Başlangıç Tarihi", toTRDate(trip.travelStartDate) || "-", false, 0);
    h2 = drawField("Seyahat Bitiş Tarihi", toTRDate(trip.travelEndDate) || "-", false, 0);
    h1 = drawField("Seyahat Amacı", trip.travelPurpose || "-", true, 0);
  });
} else {
  drawSection("Son 5 Yılda Yapılan Seyahatler");
  checkSpace(LINE_HEIGHT + 10);
  currentPage.drawText("SON 5 YILDA SEYAHAT YAPILMAMISTIR", {
    x: MARGIN,
    y: currentY,
    size: FONT_SIZE,
    font: regularFont,
    color: COLORS.textLabel,
  });
  currentY -= LINE_HEIGHT + 10;
}

drawFooter(currentPage, pageCount);
currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
drawHeader(currentPage);

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
    font-size: 14px;
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
    font-size: 14px;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 20px;
    letter-spacing: 0.8px;
  }
  .sub-section-title {
    font-family: 'DM Serif Display', serif;
    font-size: 14px;
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





