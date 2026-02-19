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

// ✅ OPTIMIZE EDİLMİŞ GÖRSEL SIKIŞTIRIM
async function compressImage(base64) {
  if (!base64) return null;
  
  try {
    const inputBuffer = Buffer.from(base64, "base64");

    const compressed = await sharp(inputBuffer)
      .resize({ width: 800, withoutEnlargement: true })  // 1200 → 800
      .jpeg({ 
        quality: 70,        // Kalite hafif artırıldı, hız için optimize
        progressive: false,  // Progressive encoding kapalı (daha hızlı)
        mozjpeg: false      // MozJPEG kapalı (daha hızlı)
      })
      .toBuffer();

    return compressed.toString("base64");
  } catch (err) {
    console.error("Image compression failed:", err);
    return base64;
  }
}

/**
 * POST handler - Optimized Professional Corporate PDF Design
 */
export async function POST(req) {
  try {
    const formData = await req.json();
    
    // --- PDF Dokümanı Oluştur ---
    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);


      let regularFont, boldFont;

  const regularFontPath = path.join(
    process.cwd(),
    "public",
    "fonts",
    "Inter_18pt-Regular.ttf"
  );

  const boldFontPath = path.join(
    process.cwd(),
    "public",
    "fonts",
    "Inter_18pt-Bold.ttf"
  );

 if (fs.existsSync(regularFontPath) && fs.existsSync(boldFontPath)) {
    try {
      const regularFontBytes = fs.readFileSync(regularFontPath);
      const boldFontBytes = fs.readFileSync(boldFontPath);

      regularFont = await pdfDoc.embedFont(regularFontBytes);
      boldFont = await pdfDoc.embedFont(boldFontBytes);
    } catch (fontError) {
      console.warn(
        "Inter font yüklenemedi, standart fonta geçiliyor:",
        fontError
      );
      regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
      boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    }
  } else {
    console.warn("Inter font dosyaları bulunamadı, standart font kullanılıyor.");
    regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  }

    // ✅ LOGO'YU BİR KERE YÜKLE (BAŞTA)
    let logoImage = null;
    const logoPath = path.join(process.cwd(), "public", "images", "ayalogoxl.png");
    if (fs.existsSync(logoPath)) {
      try {
        const logoBytes = fs.readFileSync(logoPath);
        logoImage = await pdfDoc.embedPng(logoBytes);
      } catch (err) {
        console.warn("Logo yüklenemedi:", err);
      }
    }

    // ✅ GÖRSELLERİ PARALEL OLARAK SIKIŞTIRIM
    const files = formData.payload?.steps?.["11"] ?? {};
    const [passportBase64, photoBase64] = await Promise.all([
      files.passportFileBase64 ? compressImage(files.passportFileBase64) : Promise.resolve(null),
      files.photoFileBase64 ? compressImage(files.photoFileBase64) : Promise.resolve(null)
    ]);

    // --- Renk Paleti & Sabitler ---
    const COLORS = {
      primary: rgb(0.1, 0.2, 0.45),
      secondary: rgb(0.95, 0.95, 0.96),
      textMain: rgb(0.15, 0.15, 0.15),
      textLabel: rgb(0.5, 0.5, 0.55),
      accent: rgb(0.8, 0.25, 0.25),
      white: rgb(1, 1, 1),
      border: rgb(0.85, 0.85, 0.85)
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
  const title = "ABD DS-160 VİZE BAŞVURU FORMU BİLGİ FİŞİ";
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
    start: { x: MARGIN, y: MARGIN + 12 },
    end: { x: PAGE_WIDTH - MARGIN, y: MARGIN + 12 },
    thickness: 0.5, color: COLORS.textLabel,
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
    color: rgb(0.85, 0.85, 0.85), // açık gri
  });

  // Border altı boşluk
  currentY -= FIELD_PADDING_BOTTOM;

  return totalH;
};

// 8. State — TÜM fonksiyonlar tanımlandıktan sonra
let currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
let currentY = PAGE_HEIGHT - MARGIN - HEADER_HEIGHT;
let pageCount = 1;


drawHeader(currentPage);


    // --- Veri İşleme ve Çizim Başlangıcı ---
    const s = (n) => formData.payload?.steps?.[String(n)] || {};

    // --- BÖLÜM 1: Kişisel Bilgiler ---
   

    drawSection("1. KİŞİSEL BİLGİLER");

    let h1 = drawField("Adınız Soyadınız", s(1).fullName, false, 0);
  

    h1 = drawField("Doğum Tarihi", toTRDate(s(1).birthDate), false, 0);
    let h2 = drawField("Pasaportta Belirtilen Doğum Yeri", s(1).birthPlace, false,0);


    h1 = drawField("Doğum Yeri Ülke", s(1).birthCountry, false, 0);
   

    h1 = drawField("Medeni Durumu", s(1).maritalStatus, false, 0);
    h2 = s(1).maritalStatus === "MARRIED"
      ? drawField("Daha Önce Kullanılan Ad ve Soyad", s(1).maidenName, false,0)
      : drawField("Cinsiyet", s(1).gender === "M" ? "MALE" :s(1).gender === "F" ? "FEMALE" : "-" , false,0);
  
    // --- BÖLÜM 2: Kimlik ve Uyruk ---
    drawSection("2. BÖLÜM — KİMLİK VE UYRUK BİLGİLERİ");

    h1 = drawField("Uyruğunuz", s(2).nationality || "-", false, 0);
    h2 = drawField(
      "Diğer Uyruğunuz",
      s(2).otherNationalityExist === "YES" && s(2).otherNationality ? s(2).otherNationality : "-",
      false,
     0
    );
   

    h1 = drawField(
      "Diğer Uyruğunuza ait pasaport numarası(varsa)",
      s(2).otherNationalityExist === "YES" && s(2).otherNationalityPassportNo ? s(2).otherNationalityPassportNo : "-",
      false,
      0
    );
   

    h1 = drawField("Ulusal Kimlik Numaranız", s(2).tcId || "-", false, 0);
    h2 = drawField("Sosyal Güvenlik Numarası (ABD’de bulunduysanız)", s(2).ssn || "-", false,0);
   

    h1 = drawField("ABD Vergi Kimlik Numarası (ABD’de bulunduysanız)", s(2).vkn || "-", false, 0);
  
    h1 = drawField("Kendi Ülkeniz Dışında Bir Ülkede Oturumunuz Var Mı?", s(2).otherSessionExist || "-", false, 0);
    h2 = drawField(
      "Oturum Aldığınız Ülke",
      s(2).otherSessionExist === "YES" && s(2).otherSessionExistCountry ? s(2).otherSessionExistCountry : "-",
      false,
     0
    );
   



    // --- BÖLÜM 3: Seyahat ve Vize ---
    drawSection("3. BÖLÜM — SEYAHAT VE VİZE BİLGİLERİ");

    h1 = drawField("Vize Türü", s(3).visaTypeDesc || "-", false, 0);
   
    h1 = drawField("Seyahat Planınızı Kesinleştirdiniz mi?", s(3).tourismPlanFinalized || "-", false, 0);
    if(s(3).tourismPlanFinalized ==="YES"){
    h1 = drawField("ABD'ye Kesin Gidiş Tarihi", s(3).exactArrival ? toTRDate(s(3).exactArrival) : "-", false,0); 
    h2 = drawField("ABD’den Kesin Dönüş Tarihi", s(3).exactDeparture ? toTRDate(s(3).exactArrival) : "-", false,0);
    
  h1= drawField("ABD’ye Varış Şehri", s(3).usaArrivalCity || "-", false,0);
  h2= drawField("ABD’den Ayrılış Şehri", s(3).usaDepartureCity || "-", false,0);
 
  h1= drawField("ABD’de Ziyaret Etmeyi Planladığınız Yerler", s(3).usaLocations || "-", false,0); 
    }
    if(s(3).tourismPlanFinalized ==="NO"){
 h1 = drawField("Kesin Değilse Tahmini Gidiş Tarihiniz", s(3).estimatedArrival ? toTRDate(s(3).estimatedArrival) : "-", false, 0);

  

    }
        if (s(3).tourismPlanFinalized === "NO") {
  const stayText = s(3).stayDurationValue && s(3).stayDurationUnit
    ? `${s(3).stayDurationValue} ${s(3).stayDurationUnit}`
    : null;

  h1 = drawField("ABD'de Ne Kadar Kalacaksınız?", stayText, false, 0);
}
     h1 = drawField("ABD’de Konaklayacağınız Şehir", s(3).usaAddressCity || "-", true, 0);
    h2 = drawField("ABD’de Konaklayacağınız Eyalet", s(3).usaAddressState || "-", true,0);
   
    h1 = drawField("ABD’de Konaklayacağınız Adres", s(3).stayAddress || "-", true, 0);
    h2 = drawField("Masrafları Kim Karşılayacak", s(3).whoPays || "-", true,0);
   

    if (s(3).whoPays === "OTHER") {
      h1 = drawField("Sponsor Adı Soyadı ", s(3).relationfullName || "-", true, 0);
      h2 = drawField("Sponsor Yakınlık Derecesi", s(3).relationDegree || "-", true,0);
     

      h1 = drawField("Sponsorun Yaşadığı Şehir", s(3).payerRelationCity || "-", true, 0);
      h2 = drawField("Sponsorun Yaşadığı Ülke", s(3).payerRelationCountry || "-", true,0);
     

      h1 = drawField("Sponsorun Adresi", s(3).payerRelationAddress || "-", true, 0);
      h2 = drawField("Sponsorun Posta Kodu", s(3).payerRelationPostCode || "-", true,0);
     

      h1 = drawField("Sponsorun Telefon Numarası", s(3).payerPhone || "-", true, 0);
      h2 = drawField("Sponsorun E-Postası", s(3).payerMail || "-", true,0);
     
    }

if (s(3).whoPays === "COMPANY") {
      h1 = drawField("Sponsor Şirket/Organizasyon Adı", s(3).relationCompanyfullName || "-", true, 0);
      h2 = drawField("Sponsor Şirket/Organizasyon Telefonu", s(3).payerCompanyPhone || "-", true,0);
     

      h1 = drawField("Sponsorun Sizinle Olan İlişkisi", s(3).payerRelation || "-", true, 0);

     

      h1 = drawField("Sponsor Şirket/Organisazyonun Bulunduğu Adresi", s(3).payerCompanyAddress || "-", true, 0);
      h2 = drawField("Sponsor Şirket/Organisazyonun Bulunduğu Şehri", s(3).payerCity || "-", true,0);
     
       h1 = drawField("Sponsor Şirket/Organisazyonun Bulunduğu Eyaleti", s(3).payerState || "-", true, 0);
      h2 = drawField("Sponsor Şirket/Organisazyonun Bulunduğu Posta Kodu", s(3).payerPostCode || "-", true,0);
     

      h1 = drawField("Sponsor Şirket/Organisazyonun Bulunduğu Ülke", s(3).payerCountry || "-", true, 0);
     
     
     
    }

   

    drawSection("4. BÖLÜM — SEYAHAT VE ABD GEÇMİŞİ");

    h1 = drawField("Tek mi Seyahat Edeceksiniz?", s(4).travelAlone === "NO" ? "YES" : "NO" || "-", true, 0);
    h2 = drawField("Grup veya organizasyon kapsamında mı seyahat ediyorsunuz?", s(4).organizationTravel || "-", true,0);
    if(s(4).organizationTravel === "YES"){
        h1 = drawField("Grup veya Organizasyon Adı", s(4).organizationTravelName || "-", true, 0);
    }
   

    if (s(4).travelAlone === "YES") {
      h1 = drawField("Kaç kişi ile seyahat edeceksiniz", s(4).companionCount || "-", false, 0);
     

  
   if (Array.isArray(s(4).companions) && s(4).companions.length > 0) {
  s(4).companions.map((companion, index) => {

    let h1 = drawField(
      `Seyahat Eden ${index + 1} Kişi - Adı Soyadı`,
      companion.fullName || "-",
      false,
      0
    );

    let h2 = drawField(
      "Yakınlık Derecesi",
      companion.relationship || "-",
      false,
      0
    );

    let h3 = drawField(
      "Vizesi Var mı?",
      companion.hasVisa || "-",
      false,
      0
    );

    
  });
}



    }

    h1 = drawField("Daha Önce ABD'de Bulundunuz mu?", s(4).beenToUS || "-", true, 0);
    

    if (s(4).beenToUS === "YES") {
      h1 = drawField("ABD’ye Kaç Kere Seyahat Ettiniz?", s(4).travelCount || "-", false, 0);
      if (Array.isArray(s(4).travels) && s(4).travels.length > 0) {
        s(4).travels.slice(0, 5).forEach((travel, index) => {
          let hA = drawField(`ABD Seyahati ${index + 1} - Gidiş Tarihi`, travel.date ? toTRDate(travel.date) : "-", false, 0);
         let hB = drawField(
  `ABD Seyahati ${index + 1} - Kalış Süresi`,
  (travel.durationValue && travel.durationUnit)
    ? `${travel.durationValue} ${travel.durationUnit}`
    : null
);
         
        });
      } 
    }

    h1 = drawField("Daha Önce ABD Vizesi Aldınız mı?", s(4).hadUSVisa || "-", true, 0);
  

    if (s(4).hadUSVisa === "YES") {
      let hA = drawField("Son Alınan Vize Başlangıç Tarihi", s(4).visaDate ? toTRDate(s(4).visaDate) : "-", false, 0);
      let hB = drawField("Son Alınan Vize Numarası", s(4).visaNumber || "-", false,0);
     
      hA = drawField("Son Alınan Vize Türü", s(4).hadVisaType || "-", false, 0);
       hB = drawField("10 Parmak İzi Verdiniz Mi?", s(4).hadFingerprints || "-", false,0);
     
     hA = drawField("Son Alınan Vize Kayboldu/Çalındı mı?", s(4).visaLostStolen || "-", false, 0);
     if(s(4)?.visaLostStolen === "YES"){
       hA = drawField("Son Alınan Vizenin Kaybolduğu/Çalındığı Yıl", s(4).hadVisaType || "-", false, 0);
       hB = drawField("Kaybolma/Çalınma Olayını Açıklayınız", s(4).visaLostStolenInfo || "-", false,0);
     }
      hB = drawField("Daha Önce ABD Vizeniz İptal Edildi mi?", s(4).visaCancelled || "-", false,0);
      if(s(4).visaCancelled === "YES"){
        hA = drawField("İptal Nedenini Açıklayınız", s(4).visaCancelledDetail || "-", false, 0);
      }
     

    }

    h1 = drawField("Daha Önce ABD Vizesi Başvurusunda Ret Aldınız mı?", s(4).visaRefused || "-", true, 0);
    h2 = drawField("Daha Önce ABD'ye Göçmenlik Başvurusu Yaptınız mı?", s(4).immigration || "-", true,0);
   
    if(s(4)?.immigration === "YES"){
       h1 = drawField("Göçmenlik Başvurusunu Açıklayınız", s(4).immigrationDetail || "-", true, 0);
    }


 h1 = drawField("Daha Önce ABD Ehliyeti Aldınız mı?", s(4).hadUSDriverLicense || "-", true, 0);
if(s(4)?.hadUSDriverLicense === "YES"){
       h1 = drawField("Sürücü Belge Numarası", s(4).driverLicanceNumber || "-", true, 0);
       h2 = drawField("Sürücü Belgesinin Bulunduğu Eyalet", s(4).driverLicenseState || "-", true, 0);


    }
   

    drawSection("5. BÖLÜM — İLETİŞİM VE PASAPORT BİLGİLERİ");

    h1 = drawField("Ev Adresi", s(5).homeAddress || "-", true, 0);
  

    h1 = drawField("İletişim Numarası 1", s(5).phone1 || "-", false, 0);
    h2 = drawField("İletişim Numarası 2", s(5).phone2 || "-", false,0);
   

    h1 = drawField("İş Telefonu", s(5).workPhone || "-", false, 0);
  

    h1 = drawField("E-posta Adresiniz", s(5).email || "-", false, 0);
  

    h1 = drawField("Sosyal Medya Hesabı Var mı?", s(5).hasSocialMedia || "-", false, 0);
  

    if (s(5).hasSocialMedia === "YES" && Array.isArray(s(5).socialMediaAccounts) && s(5).socialMediaAccounts.length > 0) {
      s(5).socialMediaAccounts.forEach((acc, index) => {
        let hSM = drawField(acc.platform || `Sosyal Medya ${index + 1}`, acc.username || "-", false, 0);
       
      });
     
    }

    h1 = drawField("Pasaport Türünüz", s(5).passportType || "-", false, 0);
    h2 = drawField("Pasaport Numaranız", s(5).passportNumber || "-", false,0);
   

    h1 = drawField("Pasaportu Veren Ülke", s(5).passportAuthorityCountry || "-", false, 0);
    h2 = drawField("Pasaportu Veren Makam", s(5).passportAuthority || "-", false, 0);
   

const passportEndRaw = s(5).passportEnd;
const passportEndStr = passportEndRaw ? toTRDate(passportEndRaw) : "-";

// 90 gün kontrolü
let passportWarning = null;
if (passportEndRaw) {
  const endDate = new Date(passportEndRaw);
  const today = new Date();
  const diffDays = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
  if (diffDays <= 90) {
    passportWarning = `⚠ Pasaport bitiş tarihine ${diffDays > 0 ? diffDays + " gün kaldı" : "geçti"}!`;
  }
}
    h1 = drawField("Pasaport Başlangıç Tarihi", s(5).passportStart ? toTRDate(s(5).passportStart) : "-", false, 0);
   h2 = drawField("Pasaport Bitiş Tarihi", passportEndStr);

if (passportWarning) {
  currentPage.drawText(passportWarning, {
    x: MARGIN,
    y: currentY,
    size: 11,
    font: boldFont,
    color: rgb(0.85, 0.1, 0.1), // kırmızı
  });
  currentY -= LINE_HEIGHT + 4;
}
   

    h1 = drawField("Daha Önce Pasaportu Kaybettiniz/Çaldırdınız mı?", s(5).lostPassportBoolean || "-", false, 0);
  

    if (s(5).lostPassportBoolean === "YES") {
      h1 = drawField("Kaybolan/Çalınan Pasaport Numaranız", s(5).lostPassportNumber || "-", false, 0);
      h2 = drawField("Kaybolan/Çalınan Pasaportu Veren Ülke", s(5).lostPassportAuthorityCountry || "-", false,0);
     

      h1 = drawField("Kaybolan/Çalınan Pasaport Açıklaması", s(5).lostPassportInfo || "-", true, 0);
    
    }

   

    drawSection("6. BÖLÜM — ABD'DE AKRABA VE ORGANİZASYON BİLGİLERİ");

    h1 = drawField("ABD'de Yakınınız Var mı?", s(6).usaRelative || "-", false, 0);
  

    if (s(6).usaRelative === "YES") {
      h1 = drawField("Yakının Adı Soyadı", s(6).usaRelativeFullName || "-", false, 0);
      h2 = drawField("Yakınlık Derecesi", s(6).usaRelativeInfo || "-", false,0);
     

      h1 = drawField("Yakının Yaşadığı Adresi", s(6).usaRelativeAddress || "-", true, 0);
    

      h1 = drawField("Yakının Yaşadığı Şehir", s(6).usaRelativeAddressCity || "-", false, 0);
      h2 = drawField("Yakının Yaşadığı Eyalet", s(6).usaRelativeAddressState || "-", false,0);
     

      h1 = drawField("Yakının Yaşadığı Posta Kodu", s(6).usaRelativePostCode || "-", false, 0);
    

      h1 = drawField("Yakınınızın Telefonu", s(6).usaRelativePhone || "-", false, 0);
      h2 = drawField("Yakınınızın E-Postası", s(6).usaRelativeEmail || "-", false,0);
     
    }

    h1 = drawField("ABD'de Bir Organizasyon/Etkinliğe Katılacak mısınız?", s(6).organizationBoolean || "-", false, 0);
  

    if (s(6).organizationBoolean === "YES") {
      h1 = drawField("Etkinlik/Organizasyon Adı", s(6).organizationInfo || "-", true, 0);
    

      h1 = drawField("Etkinlik/Organizasyon Adresi", s(6).organizationAddress || "-", true, 0);
    

      h1 = drawField("Etkinlik/Organizasyon Şehri", s(6).organizationAddressCity || "-", false, 0);
      h2 = drawField("Etkinlik/Organizasyon Eyaleti", s(6).organizationAddressState || "-", false,0);
     

      h1 = drawField("Etkinlik/Organizasyon Posta Kodu", s(6).organizationPostCode || "-", false, 0);
    

      h1 = drawField("Etkinlik/Organizasyon Telefonu", s(6).organizationPhone || "-", false, 0);
      h2 = drawField("Etkinlik/Organizasyon E-Postası", s(6).organizationEmail || "-", false,0);
     
    }

   

    drawSection("7. BÖLÜM — ANNE, BABA VE ABD'DE AKRABALAR");

    h1 = drawField("Baba Adı Soyadı", s(7).fatherFullName || "-", false, 0);
    h2 = drawField("Baba Doğum Tarihi", s(7).fatherBirthDate ? toTRDate(s(7).fatherBirthDate) : "-", false,0);
   
    h1 = drawField("Babanız ABD'de mi Yaşıyor?", s(7).isFatherInUSA || "-", false, 0);
       if (s(7).isFatherInUSA === "YES") {
      h1 =drawField("Babanız ABD'de de Statüsü Nedir?", s(7).isFatherInUSA || "-", false,0);
    
    }
   
     h1 = drawField("Anne Adı Soyadı", s(7).motherFullName || "-", false, 0);
    h2 = drawField("Anne Doğum Tarihi", s(7).motherBirthDate ? toTRDate(s(7).motherBirthDate) : "-", false,0);
   

    h1 = drawField("Anneniz ABD'de mi Yaşıyor?", s(7).isMotherInUSA || "-", false, 0);
      if (s(7).isMotherInUSA === "YES") {
      h1 = drawField("Anneniz ABD'de de Statüsü Nedir?", s(7).isMotherInUSA || "-", false,0);
    
    }

  

 

    h1 = drawField("Anne/Baba Hariç ABD'de Yaşayan Yakın Akrabanız Var mı?", s(7).hasRelativeInUSA || "-", false, 0);
   

    if (s(7).hasRelativeInUSA === "YES" && Array.isArray(s(7).relatives) && s(7).relatives.length > 0) {
       h1 = drawField("Anne/Baba Hariç ABD'de Yaşayan Yakın Akraba Sayısı", s(7).relativeCount || "-", false, 0);
      s(7).relatives.forEach((rel, index) => {
        let r1 = drawField(`Akraba ${index + 1} - Ad Soyad`, rel.fullName || "-", false, 0);
        let r2 = drawField("Akrabanızın Yakınlık Derecesi", rel.level || "-", false,0);
       

        r1 = drawField("Akrabanızın Yasal Statüsü", rel.status || "-", false, 0);
       
      });
    }

    h1 = drawField("ABD'de Yaşayan Başka Yakınınız Var mı?", s(7).otherRelativeInUSA || "-", true, 0);
   

   

    drawSection("8. BÖLÜM — EŞ VE EVLİLİK BİLGİLERİ");
    if(s(1)?.maritalStatus === "SINGLE"){
       h1 = drawField("Medeni Durumu Bekar Olduğu İçin Bu Kısım Boştur.", false, 0);
    }
    if(s(1)?.maritalStatus === "MARRIED"){
       h1 = drawField("Eşinizin Adı Soyadı", s(8).spouseFullName || "-", false, 0);
    if(s(1)?.gender === "MALE"){
     h2 = drawField("Eşinizin Kızlık Soyadı", s(8).wifeMaidenName || "-", false,0);
    }

   

    h1 = drawField("Eşinizin Uyruğu", s(8).spouseNationality || "-", false, 0);
    h2 = drawField("Eşinizin Doğum Tarihi", s(8).spouseBirthDate ? toTRDate(s(8).spouseBirthDate) : "-", false,0);
   

    h1 = drawField(
      "Eşinizin Doğum Yeri",
      s(8).spouseBirthPlace || "-",
      false,
      0
    );
       h1 = drawField(
      "Eşinizin Doğduğu Ülke",
      s(8).spouseBirthPlaceCountry || "-",
      false,
      0
    );
   

    h1 = drawField("Eşin Adresi", s(8).spouseAddress || "-", true, 0);
   
    if(s(8)?.spouseAddress === "OTHER"){
    h1 = drawField("Farklı Adres", s(8).otherSpouseAddress || "-", true, 0);

       h1 = drawField(
      "Şehir / Ülke",
      `${s(8).otherSpouseAddressCity || "-"} / ${s(8).otherSpouseAddressCountry || "-"}`,
      false,
      0
    );
    h2 = drawField("Posta Kodu", s(8).otherSpouseAddressPostCode || "-", false,0);
   

    }
   
   

   
    h1 = drawField("Evlilik Tarihi", s(8).marriageDate ? toTRDate(s(8).marriageDate) : "-", false, 0);
   

    } else if (((s(1)?.maritalStatus === "WIDOWED") || (s(1)?.maritalStatus === "DIVORCED"))){
    h1 = drawField("Eski Eş Adı Soyadı", s(8).oldSpouseFullName || "-", false, 0);
  
    h1 = drawField("Eski Evlilik Başlama Tarihi", s(8).oldMarriageDate ? toTRDate(s(8).oldMarriageDate) : "-", false, 0);
    h2 = drawField("Eski Evlilik Bitiş Tarihi", s(8).oldMarriageEndDate ? toTRDate(s(8).oldMarriageEndDate) : "-", false,0);
   

    h1 = drawField("Eski Eş Doğum Tarihi", s(8).oldSpouseBirthDate ? toTRDate(s(8).oldSpouseBirthDate) : "-", false, 0);
    h2 = drawField("Eski Eşinizin Uyruğu", s(8).oldSpouseNationality || "-", false,0);
   

    h1 = drawField(
      "Eski Eş Doğum Yeri",
      s(8).oldSpouseBirthPlace || "-",
      false,
      0
    );
    h2 = drawField(
      "Eski Eşinizin Doğduğu Ülke",
      s(8).oldSpouseEndCountry || "-",
      false,
      0
    );
   

    h1 = drawField("Evliliğinizi Bitirdiğiniz Ülke", s(8).oldSpouseEndCountry || "-", true, 0);
    h2 = drawField("Evliliğiniz Nasıl Sona Erdi?", s(8).oldSpouseInfo || "-", true, 0);
   
      
    }
    

   

    

    drawSection("9. BÖLÜM — MESLEK, İŞ VE EĞİTİM BİLGİLERİ");

    h1 = drawField("Mesleğiniz", s(9).occupation || "-", false, 0);
    h2 = drawField("İşyerinizin Tam Adı / Okul Adı", s(9).workOrSchoolName || "-", false,0);
   

    h1 = drawField(
      "İş Yerinin/Okulun Adresi",
      s(9).workOrSchoolAddress || "-",
      true,
      0
    );
    h1 = drawField(
      "İş Yerinin/Okulun Bulunduğu Şehir",
     s(9).workOrSchoolCity || "-",
      true,
      0
    );
    h1 = drawField(
      "İş Yerinin/Okulun Bulunduğu Ülke",
     s(9).workOrSchoolCountry || "-",
      true,
      0
    );
        h1 = drawField(
      "İş Yerinin/Okulun Posta Kodu",
     s(9).workOrSchoolPostCode || "-",
      true,
      0
    );
   

    h1 = drawField("İş Yeri/Okul Telefon", s(9).workOrSchoolPhone || "-", false, 0);
    h2 = drawField("İşe/Okula Başlama Tarihiniz", s(9).workStartDate ? toTRDate(s(9).workStartDate) : "-", false,0);
   
    h1 = drawField("Açık İş Tanımınız, Görevleriniz ve Ünvanınız", s(9).jobDescription || "-", true,0);
    h2 = drawField("Aylık Geliri", s(9).monthlyIncome || "-", false, 0);
   
   

    if (s(9).previousJobBoolean === "YES" && Array.isArray(s(9).previousJobs)) {
      s(9).previousJobs.forEach((job, index) => {
        let j1 = drawField(`Önceki İş Yeri Adı ${index + 1}`, job.companyName || "-", false, 0);
        let j2 = drawField("Ünvanınız", job.position || "-", false,0);
       

        j1 = drawField(
          "İş Yerinin Adresi",
          job.previusWorkAddress || "-",
          true,
          0
        )
           j1 = drawField(
          "İş Yerinin Bulunduğu Şehir",
         job.previusWorkCity || "-",
          true,
          0
        )
           j1 = drawField(
          "İş Yerinin Bulunduğu Ülke",
          job.previusWorkCountry || "-",
          true,
          0
        )
           j1 = drawField(
          "İş Yeri Posta Kodu",
          job.previusWorkPostCode || "-",
          true,
          0
        )
              j1 = drawField(
          "İş Yeri Telefonu",
          job.previusWorkPhone || "-",
          true,
          0
        )
       

        j1 = drawField(
          "İşe Giriş Tarihi",
          job.startDate ? toTRDate(job.startDate) : "-",
          false,
          0
        );
         j1 = drawField(
          "İşten Çıkış Tarihi",
          job.endDate ? toTRDate(job.endDate) : "-",
          false,
          0
        );
         j1 = drawField(
          "Eski İşinizdeki Yöneticinizin Adı Soyadı",
          job.previusSupervisorFullname || "-",
          false,
          0
        );
          j1 = drawField(
          "Kısaca Görevinizi Yazınız",
          job.previusDuties || "-",
          false,
          0
        );
      
      });
    }
     h1 = drawField("Eğitim Durumunuz", s(9).educationBoolean || "-", true,0);
       if ((s(9).educationBoolean === "HIGH_SCHOOL" || s(9).educationBoolean === "ASSOCIATE_DEGREE" || s(9).educationBoolean === "BACHELOR_DEGREE" || s(9).educationBoolean === "MASTER_DEGREE"|| s(9).educationBoolean === "PHD" ) && Array.isArray(s(9).previousEducations)) {
      s(9).previousEducations.forEach((job, index) => {
        let j1 = drawField(`Eğitim Seviyesi`, job.level || "-", false, 0);
        let j2 = drawField(`Kurumun Adı ${index + 1}`, job.schoolName || "-", false, 0);
       

        j1 = drawField(
          "Okulun Adresi",
          job.address1 || "-",
          true,
          0
        )
           j1 = drawField(
          "Okulun Bulunduğu Şehir",
         job.city || "-",
          true,
          0
        )
              j1 = drawField(
          "Okulun Bulunduğu Eyalet",
          job.state || "-",
          true,
          0
        )
           j1 = drawField(
          "Okulun Bulunduğu Ülke",
          job.country || "-",
          true,
          0
        )
     
           j1 = drawField(
          "Okulun Posta Kodu",
          job.postalCode || "-",
          true,
          0
        )
              j1 = drawField(
          "Bölüm/Program",
          job.department || "-",
          true,
          0
        )
       

        j1 = drawField(
          "Okul Başlangıç Tarihi",
          job.fromDate ? toTRDate(job.fromDate) : "-",
          false,
          0
        );
         j1 = drawField(
          "Okul Bitiş Tarihi",
          job.toDate ? toTRDate(job.toDate) : "-",
          false,
          0
        );
        
         
       
      });
    }
    

    drawSection("10. BÖLÜM — DİĞER BİLGİLER");

    h1 = drawField("Bildiğiniz Diller", s(10).languages || "-", false, 0);
    h2 = drawField("Son 5 Yılda Ziyaret Edilen Ülkeler", s(10).visitedCountries || "-", false,0);
   

    h1 = drawField("Askerlik Durumu", s(10).militaryStatus === "YES" ? "YAPTI" : "YAPMADI" , false, 0);
   

    if (s(10).militaryStatus === "YES") {
      h1 = drawField("Askerlik Başlangıç Tarihi", s(10).militaryStartDate ? toTRDate(s(10).militaryStartDate) : "-", false, 0);
      h2 = drawField("Askerlik Bitiş Tarihi", s(10).militaryEndDate ? toTRDate(s(10).militaryEndDate) : "-", false,0);
     
    }

    h1 = drawField("Ek Bilgiler", s(10).additionalInfo || "-", false, 0);

currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
    drawHeader(currentPage);
    drawFooter(currentPage, pageCount);

    // --- DOSYALAR (GÖRSELLER) ---
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

        let imgDims;
        if (type === "passport") {
          const width = PAGE_WIDTH - 2 * MARGIN;
          const height = (PAGE_HEIGHT - 150) / 3;
          const scale = Math.min(width / embeddedImg.width, height / embeddedImg.height);
          imgDims = { width: embeddedImg.width * scale, height: embeddedImg.height * scale };
        } else if (type === "photo") {
  const maxWidth =PAGE_WIDTH - 2 * MARGIN;  // sayfanın 1/3’ü
  const maxHeight =(PAGE_HEIGHT - 150) / 3;

  const scale = Math.min(
    maxWidth / embeddedImg.width,
    maxHeight / embeddedImg.height,
    1
  );

  imgDims = {
    width: embeddedImg.width * scale,
    height: embeddedImg.height * scale
  };
}

        const xPos = MARGIN + (CONTENT_WIDTH - imgDims.width) / 2;
        const yPos = currentY - 20 - imgDims.height;

        if (yPos - 30 < MARGIN) {
          drawFooter(currentPage, pageCount);
          currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
          pageCount++;
          currentY = PAGE_HEIGHT - MARGIN;
          drawHeader(currentPage);
        }

        currentPage.drawText(title, { x: MARGIN, y: currentY, size: 12, font: boldFont, color: COLORS.primary });

        currentPage.drawRectangle({
          x: xPos - 5,
          y: yPos - 5,
          width: imgDims.width + 10,
          height: imgDims.height + 10,
          color: COLORS.border
        });

        currentPage.drawImage(embeddedImg, { x: xPos, y: yPos, width: imgDims.width, height: imgDims.height });

        currentY = yPos - 30;
      } catch (e) {
        console.error("Dosya resmi eklenemedi:", title, e);
      }
    };
drawSection("11. BÖLÜM — FOTOĞRAFLAR");
    await addFileImage(passportBase64, "Pasaport Görüntüsü", "passport");
    await addFileImage(photoBase64, "Biyometrik Fotoğraf", "photo");

    drawFooter(currentPage, pageCount);

    const pdfBytes = await pdfDoc.save();

    // ✅ BUFFER İŞLEMLERİ OPTIMIZE EDİLDİ
    let passportBuffer = null;
    let photoBuffer = null;

    if (passportBase64) {
      const base64Clean = passportBase64.includes(",") ? passportBase64.split(",")[1] : passportBase64;
      passportBuffer = Buffer.from(base64Clean, "base64");
    }

    if (photoBase64) {
      const base64Clean = photoBase64.includes(",") ? photoBase64.split(",")[1] : photoBase64;
      photoBuffer = Buffer.from(base64Clean, "base64");
    }

    const pdfBuffer = Buffer.from(pdfBytes);




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
    background: linear-gradient(135deg, #0f2c5c 0%, #1a4a9e 60%, #2563eb 100%);
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

  .section {
    margin-bottom: 36px;
  }
  .section-title {
    font-family: 'DM Serif Display', serif;
    font-size: 15px;
    color: #0f2c5c;
    letter-spacing: 0.5px;
    padding-bottom: 10px;
    border-bottom: 2px solid #e8edf5;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .section-title span.badge {
    background: #0f2c5c;
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
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
    font-size: 16px;
    padding: 10px 14px;
    text-align: left;
    width: 38%;
    vertical-align: top;
    letter-spacing: 0.2px;
    white-space: nowrap;
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
  .sub-entry strong { color: #0f2c5c; display: block; margin-bottom: 4px; font-size: 16px; }

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
    font-size: 16px;
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
    font-size: 16px;
    color: #8a94aa;
  }
</style>
</head>
<body>
<div class="wrapper">

  <!-- HEADER -->
  <div class="doc-header">
    <div class="doc-header-icon">🇺🇸</div>
    <div class="doc-header-text">
      <h1>ABD Vize Başvuru Formu (DS-160)</h1>
      <p>Başvuru özeti — Tüm bölümler</p>
    </div>
  </div>

  <div class="doc-body">

    <!-- BÖLÜM 1 -->
    <div class="section">
      <div class="section-title"><span class="badge">01</span> KİŞİSEL BİLGİLER</div>
      <table>
        <tr><th>Adınız Soyadınız</th><td>${s(1).fullName || "-"}</td></tr>
        <tr><th>Doğum Tarihi</th><td>${s(1).birthDate ? toTRDate(s(1).birthDate) : "-"}</td></tr>
        <tr><th>Pasaportta Belirtilen Doğum Yeri</th><td>${s(1).birthPlace || "-"}</td></tr>
        <tr><th>Pasaportta Belirtilen Doğum Yeri Ülke</th><td>${s(1).birthCountry || "-"}</td></tr>
        <tr><th>Medeni Durumu</th><td>${s(1).maritalStatus || "-"}</td></tr>
        ${s(1).maritalStatus === "MARRIED"
          ? `<tr><th>Daha Önce Kullanılan Ad ve Soyad</th><td>${s(1).maidenName || "-"}</td></tr>`
          : `<tr><th>Cinsiyet</th><td>${s(1).gender === "M" ? "MALE" : s(1).gender === "F" ? "FEMALE" : "-"  || "-"}</td></tr>`
        }
      </table>
    </div>

    <!-- BÖLÜM 2 -->
    <div class="section">
      <div class="section-title"><span class="badge">02</span> KİMLİK VE UYRUK BİLGİLERİ</div>
      <table>
        <tr><th>Uyruğunuz</th><td>${s(2).nationality || "-"}</td></tr>
        <tr><th>Diğer Uyruğunuz</th><td>${s(2).otherNationalityExist === "YES" && s(2).otherNationality ? s(2).otherNationality : "-"}</td></tr>
        <tr><th>Diğer Uyruğunuza Ait Pasaport Numarası (Varsa)</th><td>${s(2).otherNationalityExist === "YES" && s(2).otherNationalityPassportNo ? s(2).otherNationalityPassportNo : "-"}</td></tr>
        <tr><th>Ulusal Kimlik Numaranız</th><td>${s(2).tcId || "-"}</td></tr>
        <tr><th>Sosyal Güvenlik Numarası (ABD'de bulunduysanız)</th><td>${s(2).ssn || "-"}</td></tr>
        <tr><th>ABD Vergi Kimlik Numarası (ABD'de bulunduysanız)</th><td>${s(2).vkn || "-"}</td></tr>
        <tr><th>Kendi Ülkeniz Dışında Bir Ülkede Oturumunuz Var Mı?</th><td>${s(2).otherSessionExist || "-"}</td></tr>
        <tr><th>Oturum Aldığınız Ülke</th><td>${s(2).otherSessionExist === "YES" && s(2).otherSessionExistCountry ? s(2).otherSessionExistCountry : "-"}</td></tr>
      </table>
    </div>

    <!-- BÖLÜM 3 -->
    <div class="section">
      <div class="section-title"><span class="badge">03</span> SEYAHAT VE VİZE BİLGİLERİ</div>
      <table>
        <tr><th>Vize Türü</th><td>${s(3).visaTypeDesc || "-"}</td></tr>
        <tr><th>Seyahat Planınızı Kesinleştirdiniz mi?</th><td>${s(3).tourismPlanFinalized || "-"}</td></tr>
        ${s(3).tourismPlanFinalized === "YES" ? `
        <tr><th>ABD'ye Kesin Gidiş Tarihi</th><td>${s(3).exactArrival ? toTRDate(s(3).exactArrival) : "-"}</td></tr>
        <tr><th>ABD'den Kesin Dönüş Tarihi</th><td>${s(3).exactDeparture ? toTRDate(s(3).exactDeparture) : "-"}</td></tr>
        <tr><th>ABD'ye Varış Şehri</th><td>${s(3).usaArrivalCity || "-"}</td></tr>
        <tr><th>ABD'den Ayrılış Şehri</th><td>${s(3).usaDepartureCity || "-"}</td></tr>
        <tr><th>ABD'de Ziyaret Etmeyi Planladığınız Yerler</th><td>${s(3).usaLocations || "-"}</td></tr>
        ` : ""}
        ${s(3).tourismPlanFinalized === "NO" ? `
        <tr><th>Tahmini Gidiş Tarihiniz</th><td>${s(3).estimatedArrival ? toTRDate(s(3).estimatedArrival) : "-"}</td></tr>
      <tr><th>ABD'de Ne Kadar Kalacaksınız?</th><td>${(s(3).stayDurationValue && s(3).stayDurationUnit) ? `${s(3).stayDurationValue} ${s(3).stayDurationUnit}` : "-"}</td></tr>
        ` : ""}
        <tr><th>ABD'de Konaklayacağınız Şehir</th><td>${s(3).usaAddressCity || "-"}</td></tr>
        <tr><th>ABD'de Konaklayacağınız Eyalet</th><td>${s(3).usaAddressState || "-"}</td></tr>
        <tr><th>ABD'de Konaklayacağınız Adres</th><td>${s(3).stayAddress || "-"}</td></tr>
        <tr><th>Masrafları Kim Karşılayacak</th><td>${s(3).whoPays || "-"}</td></tr>
        ${s(3).whoPays === "OTHER" ? `
        <tr><th>Sponsorun Adı Soyadı</th><td>${s(3).relationfullName || "-"}</td></tr>
        <tr><th>Sponsorun Yakınlık Derecesi</th><td>${s(3).relationDegree || "-"}</td></tr>
        <tr><th>Sponsorun Yaşadığı Şehir</th><td>${s(3).payerRelationCity || "-"}</td></tr>
        <tr><th>Sponsorun Yaşadığı Ülke</th><td>${s(3).payerRelationCountry || "-"}</td></tr>
        <tr><th>Sponsorun Adresi</th><td>${s(3).payerRelationAddress || "-"}</td></tr>
        <tr><th>Sponsorun Posta Kodu</th><td>${s(3).payerRelationPostCode || "-"}</td></tr>
        <tr><th>Sponsorun Telefon Numarası</th><td>${s(3).payerPhone || "-"}</td></tr>
        <tr><th>Sponsorun E-Postası</th><td>${s(3).payerMail || "-"}</td></tr>
        ` : ""}
        ${s(3).whoPays === "COMPANY" ? `
        <tr><th>Sponsor Şirket/Organizasyon Adı</th><td>${s(3).relationCompanyfullName || "-"}</td></tr>
        <tr><th>Sponsor Şirket/Organizasyon Telefonu</th><td>${s(3).payerCompanyPhone || "-"}</td></tr>
        <tr><th>Sponsorun Sizinle Olan İlişkisi</th><td>${s(3).payerRelation || "-"}</td></tr>
        <tr><th>Sponsor Şirket/Organizasyonun Adresi</th><td>${s(3).payerCompanyAddress || "-"}</td></tr>
        <tr><th>Sponsor Şirket/Organisazyonun Bulunduğu Şehri</th><td>${s(3).payerCity || "-"}</td></tr>
        <tr><th>Sponsor Şirket/Organisazyonun Bulunduğu Eyaleti</th><td>${s(3).payerState || "-"}</td></tr>
        <tr><th>Sponsor Şirket/Organisazyonun Bulunduğu Posta Kodu</th><td>${s(3).payerPostCode || "-"}</td></tr>
        <tr><th>Sponsor Şirket/Organisazyonun Bulunduğu Ülke</th><td>${s(3).payerCountry || "-"}</td></tr>
        ` : ""}
      </table>
    </div>

    <!-- BÖLÜM 4 -->
    <div class="section">
      <div class="section-title"><span class="badge">04</span> SEYAHAT VE ABD GEÇMİŞİ</div>
      <table>
        <tr><th>Tek mi Seyahat Edeceksiniz?</th><td>${s(4).travelAlone === "NO" ? "YES" : "NO"}</td></tr>
        <tr><th>Grup veya Organizasyon Kapsamında mı Seyahat Ediyorsunuz?</th><td>${s(4).organizationTravel || "-"}</td></tr>
        ${s(4).organizationTravel === "YES" ? `
        <tr><th>Grup veya Organizasyon Adı</th><td>${s(4).organizationTravelName || "-"}</td></tr>
        ` : ""}
        ${s(4).travelAlone === "YES" ? `
        <tr><th>Kaç Kişi ile Seyahat Edeceksiniz</th><td>${s(4).companionCount || "-"}</td></tr>
        <tr><th>Birlikte Seyahat Edenler</th><td>
          ${Array.isArray(s(4).companions) && s(4).companions.length > 0
            ? s(4).companions.map((c, i) => `
              <div class="sub-entry">
                <strong>${i + 1}. Kişi</strong>
                Ad Soyad: ${c.fullName || "-"}<br/>
                Yakınlık Derecesi: ${c.relationship || "-"}<br/>
                Vizesi Var mı: ${c.hasVisa || "-"}
              </div>`).join("")
            : "-"}
        </td></tr>
        ` : ""}
        <tr><th>Daha Önce ABD'de Bulundunuz mu?</th><td>${s(4).beenToUS || "-"}</td></tr>
        ${s(4).beenToUS === "YES" ? `
        <tr><th>ABD'ye Kaç Kere Seyahat Ettiniz?</th><td>${s(4).travelCount || "-"}</td></tr>
        <tr><th>ABD Seyahatleri</th><td>
          ${Array.isArray(s(4).travels) && s(4).travels.length > 0
            ? s(4).travels.slice(0, 5).map((t, i) => `
              <div class="sub-entry">
                <strong>${i + 1}. Seyahat</strong>
                Gidiş Tarihi: ${t.date ? toTRDate(t.date) : "-"}<br/>
                Kalış Süresi: ${(t.durationValue && t.durationUnit) ? `${t.durationValue} ${t.durationUnit}` : "-"}
              </div>`).join("")
            : "-"}
        </td></tr>
        ` : ""}
        <tr><th>Daha Önce ABD Vizesi Aldınız mı?</th><td>${s(4).hadUSVisa || "-"}</td></tr>
        ${s(4).hadUSVisa === "YES" ? `
        <tr><th>Son Alınan Vize Başlangıç Tarihi</th><td>${s(4).visaDate ? toTRDate(s(4).visaDate) : "-"}</td></tr>
        <tr><th>Son Alınan Vize Numarası</th><td>${s(4).visaNumber || "-"}</td></tr>
        <tr><th>Son Alınan Vize Türü</th><td>${s(4).hadVisaType || "-"}</td></tr>
        <tr><th>10 Parmak İzi Verdiniz Mi?</th><td>${s(4).hadFingerprints || "-"}</td></tr>
        <tr><th>Son Alınan Vize Kayboldu/Çalındı mı?</th><td>${s(4).visaLostStolen || "-"}</td></tr>
        ${s(4).visaLostStolen === "YES" ? `
        <tr><th>Vizenin Kaybolduğu/Çalındığı Yıl</th><td>${s(4).visaLostStolenYear || "-"}</td></tr>
        <tr><th>Kaybolma/Çalınma Olayını Açıklayınız</th><td>${s(4).visaLostStolenInfo || "-"}</td></tr>
        ` : ""}
        <tr><th>Daha Önce ABD Vizeniz İptal Edildi mi?</th><td>${s(4).visaCancelled || "-"}</td></tr>
        ${s(4).visaCancelled === "YES" ? `
        <tr><th>İptal Nedenini Açıklayınız</th><td>${s(4).visaCancelledDetail || "-"}</td></tr>
        ` : ""}
        ` : ""}
        <tr><th>Daha Önce ABD Vizesi Başvurusunda Ret Aldınız mı?</th><td>${s(4).visaRefused || "-"}</td></tr>
        <tr><th>Daha Önce ABD'ye Göçmenlik Başvurusu Yaptınız mı?</th><td>${s(4).immigration || "-"}</td></tr>
        ${s(4).immigration === "YES" ? `
        <tr><th>Göçmenlik Başvurusunu Açıklayınız</th><td>${s(4).immigrationDetail || "-"}</td></tr>
        ` : ""}
        <tr><th>Daha Önce ABD Ehliyeti Aldınız mı?</th><td>${s(4).hadUSDriverLicense || "-"}</td></tr>
        ${s(4).hadUSDriverLicense === "YES" ? `
        <tr><th>Sürücü Belge Numarası</th><td>${s(4).driverLicanceNumber || "-"}</td></tr>
        <tr><th>Sürücü Belgesinin Bulunduğu Eyalet</th><td>${s(4).driverLicenseState || "-"}</td></tr>
        ` : ""}
      </table>
    </div>

    <!-- BÖLÜM 5 -->
    <div class="section">
      <div class="section-title"><span class="badge">05</span> İLETİŞİM VE PASAPORT BİLGİLERİ</div>
      <table>
        <tr><th>Ev Adresi</th><td>${s(5).homeAddress || "-"}</td></tr>
        <tr><th>İletişim Numarası 1</th><td>${s(5).phone1 || "-"}</td></tr>
        <tr><th>İletişim Numarası 2</th><td>${s(5).phone2 || "-"}</td></tr>
        <tr><th>İş Telefonu</th><td>${s(5).workPhone || "-"}</td></tr>
        <tr><th>E-Posta Adresiniz</th><td>${s(5).email || "-"}</td></tr>
        <tr><th>Sosyal Medya Hesabı Var mı?</th><td>${s(5).hasSocialMedia || "-"}</td></tr>
        ${s(5).hasSocialMedia === "YES" && Array.isArray(s(5).socialMediaAccounts) && s(5).socialMediaAccounts.length > 0 ? `
        <tr><th>Sosyal Medya Hesapları</th><td>
          ${s(5).socialMediaAccounts.map((acc, i) => `
            <div class="sub-entry">
              <strong>${acc.platform || `Platform ${i + 1}`}</strong>
              ${acc.username || "-"}
            </div>`).join("")}
        </td></tr>
        ` : ""}
        <tr><th>Pasaport Türünüz</th><td>${s(5).passportType || "-"}</td></tr>
        <tr><th>Pasaport Numaranız</th><td>${s(5).passportNumber || "-"}</td></tr>
        <tr><th>Pasaportu Veren Ülke</th><td>${s(5).passportAuthorityCountry || "-"}</td></tr>
        <tr><th>Pasaportu Veren Makam</th><td>${s(5).passportAuthority || "-"}</td></tr>
        <tr><th>Pasaport Başlangıç Tarihi</th><td>${s(5).passportStart ? toTRDate(s(5).passportStart) : "-"}</td></tr>
        <tr><th>Pasaport Bitiş Tarihi</th><td>${s(5).passportEnd ? toTRDate(s(5).passportEnd) : "-"}</td></tr>
        <tr><th>Daha Önce Pasaportu Kaybettiniz/Çaldırdınız mı?</th><td>${s(5).lostPassportBoolean || "-"}</td></tr>
        ${s(5).lostPassportBoolean === "YES" ? `
        <tr><th>Kaybolan/Çalınan Pasaport Numaranız</th><td>${s(5).lostPassportNumber || "-"}</td></tr>
        <tr><th>Kaybolan/Çalınan Pasaportu Veren Ülke</th><td>${s(5).lostPassportAuthorityCountry || "-"}</td></tr>
        <tr><th>Kaybolan/Çalınan Pasaport Açıklaması</th><td>${s(5).lostPassportInfo || "-"}</td></tr>
        ` : ""}
      </table>
    </div>

    <!-- BÖLÜM 6 -->
    <div class="section">
      <div class="section-title"><span class="badge">06</span> ABD'DE AKRABA VE ORGANİZASYON BİLGİLERİ</div>
      <table>
        <tr><th>ABD'de Yakınınız Var mı?</th><td>${s(6).usaRelative || "-"}</td></tr>
        ${s(6).usaRelative === "YES" ? `
        <tr><th>Yakının Adı Soyadı</th><td>${s(6).usaRelativeFullName || "-"}</td></tr>
        <tr><th>Yakınlık Derecesi</th><td>${s(6).usaRelativeInfo || "-"}</td></tr>
        <tr><th>Yakının Yaşadığı Adres</th><td>${s(6).usaRelativeAddress || "-"}</td></tr>
        <tr><th>Yakının Yaşadığı Şehir</th><td>${s(6).usaRelativeAddressCity || "-"}</td></tr>
        <tr><th>Yakının Yaşadığı Eyalet</th><td>${s(6).usaRelativeAddressState || "-"}</td></tr>
        <tr><th>Yakının Yaşadığı Posta Kodu</th><td>${s(6).usaRelativePostCode || "-"}</td></tr>
        <tr><th>Yakınınızın Telefonu</th><td>${s(6).usaRelativePhone || "-"}</td></tr>
        <tr><th>Yakınınızın E-Postası</th><td>${s(6).usaRelativeEmail || "-"}</td></tr>
        ` : ""}
        <tr><th>ABD'de Bir Organizasyon/Etkinliğe Katılacak mısınız?</th><td>${s(6).organizationBoolean || "-"}</td></tr>
        ${s(6).organizationBoolean === "YES" ? `
        <tr><th>Etkinlik/Organizasyon Adı</th><td>${s(6).organizationInfo || "-"}</td></tr>
        <tr><th>Etkinlik/Organizasyon Adresi</th><td>${s(6).organizationAddress || "-"}</td></tr>
        <tr><th>Etkinlik/Organizasyon Şehri</th><td>${s(6).organizationAddressCity || "-"}</td></tr>
        <tr><th>Etkinlik/Organizasyon Eyaleti</th><td>${s(6).organizationAddressState || "-"}</td></tr>
        <tr><th>Etkinlik/Organizasyon Posta Kodu</th><td>${s(6).organizationPostCode || "-"}</td></tr>
        <tr><th>Etkinlik/Organizasyon Telefonu</th><td>${s(6).organizationPhone || "-"}</td></tr>
        <tr><th>Etkinlik/Organizasyon E-Postası</th><td>${s(6).organizationEmail || "-"}</td></tr>
        ` : ""}
      </table>
    </div>

    <!-- BÖLÜM 7 -->
    <div class="section">
      <div class="section-title"><span class="badge">07</span> ANNE, BABA VE ABD'DE AKRABALAR</div>
      <table>
        <tr><th>Baba Adı Soyadı</th><td>${s(7).fatherFullName || "-"}</td></tr>
        <tr><th>Baba Doğum Tarihi</th><td>${s(7).fatherBirthDate ? toTRDate(s(7).fatherBirthDate) : "-"}</td></tr>
        <tr><th>Babanız ABD'de mi Yaşıyor?</th><td>${s(7).isFatherInUSA || "-"}</td></tr>
        ${s(7).isFatherInUSA === "YES" ? `
        <tr><th>Babanızın ABD'deki Statüsü Nedir?</th><td>${s(7).isFatherUSAStatus || "-"}</td></tr>
        ` : ""}
         <tr><th>Anne Adı Soyadı</th><td>${s(7).motherFullName || "-"}</td></tr>
        <tr><th>Anne Doğum Tarihi</th><td>${s(7).motherBirthDate ? toTRDate(s(7).motherBirthDate) : "-"}</td></tr>
        <tr><th>Anneniz ABD'de mi Yaşıyor?</th><td>${s(7).isMotherInUSA || "-"}</td></tr>
        ${s(7).isMotherInUSA === "YES" ? `
        <tr><th>Annenizin ABD'deki Statüsü Nedir?</th><td>${s(7).isMotherUSAStatus || "-"}</td></tr>
        ` : ""}
        <tr><th>Anne/Baba Hariç ABD'de Yaşayan Yakın Akrabanız Var mı?</th><td>${s(7).hasRelativeInUSA || "-"}</td></tr>
        ${s(7).hasRelativeInUSA === "YES" && Array.isArray(s(7).relatives) && s(7).relatives.length > 0 ? `
        <tr><th>Anne/Baba Hariç ABD'de Yaşayan Yakın Akraba Sayısı</th><td>${s(7).relativeCount || "-"}</td></tr>
        <tr><th>ABD'deki Akrabalar</th><td>
          ${s(7).relatives.map((rel, i) => `
            <div class="sub-entry">
              <strong>${i + 1}. Akraba</strong>
              Ad Soyad: ${rel.fullName || "-"}<br/>
              Yakınlık Derecesi: ${rel.level || "-"}<br/>
              Yasal Statüsü: ${rel.status || "-"}
            </div>`).join("")}
        </td></tr>
        ` : ""}
        <tr><th>ABD'de Yaşayan Başka Yakınınız Var mı?</th><td>${s(7).otherRelativeInUSA || "-"}</td></tr>
      </table>
    </div>

    <!-- BÖLÜM 8 -->
    <div class="section">
      <div class="section-title"><span class="badge">08</span> EŞ VE EVLİLİK BİLGİLERİ</div>
      <table>
        ${s(1).maritalStatus === "MARRIED" ? `
        <tr><th>Eşinizin Adı Soyadı</th><td>${s(8).spouseFullName || "-"}</td></tr>
        ${s(1).gender === "MALE" ? `<tr><th>Eşinizin Kızlık Soyadı</th><td>${s(8).wifeMaidenName || "-"}</td></tr>` : ""}
        <tr><th>Eşinizin Uyruğu</th><td>${s(8).spouseNationality || "-"}</td></tr>
        <tr><th>Eşinizin Doğum Tarihi</th><td>${s(8).spouseBirthDate ? toTRDate(s(8).spouseBirthDate) : "-"}</td></tr>
        <tr><th>Eşinizin Doğum Yeri</th><td>${s(8).spouseBirthPlace || "-"}</td></tr>
        <tr><th>Eşinizin Doğduğu Ülke</th><td>${s(8).spouseBirthPlaceCountry || "-"}</td></tr>
        <tr><th>Eşin Adresi</th><td>${s(8).spouseAddress || "-"}</td></tr>
        ${s(8).spouseAddress === "OTHER" ? `
        <tr><th>Farklı Adres</th><td>${s(8).otherSpouseAddress || "-"}</td></tr>
        <tr><th>Şehir / Ülke</th><td>${s(8).otherSpouseAddressCity || "-"} / ${s(8).otherSpouseAddressCountry || "-"}</td></tr>
        <tr><th>Posta Kodu</th><td>${s(8).otherSpouseAddressPostCode || "-"}</td></tr>
        ` : ""}
        <tr><th>Evlilik Tarihi</th><td>${s(8).marriageDate ? toTRDate(s(8).marriageDate) : "-"}</td></tr>
        ` : ""}
        ${(s(1).maritalStatus === "WIDOWED" || s(1).maritalStatus === "DIVORCED") ? `
        <tr><th>Eski Eş Adı Soyadı</th><td>${s(8).oldSpouseFullName || "-"}</td></tr>
        <tr><th>Eski Evlilik Başlama Tarihi</th><td>${s(8).oldMarriageDate ? toTRDate(s(8).oldMarriageDate) : "-"}</td></tr>
      ${s(1).maritalStatus === "DIVORCED" ? `
        <tr><th>Eski Evlilik Bitiş Tarihi</th><td>${s(8).oldMarriageEndDate ? toTRDate(s(8).oldMarriageEndDate) : "-"}</td></tr>
        ` : ""}
        <tr><th>Eski Eş Doğum Tarihi</th><td>${s(8).oldSpouseBirthDate ? toTRDate(s(8).oldSpouseBirthDate) : "-"}</td></tr>
        <tr><th>Eski Eşinizin Uyruğu</th><td>${s(8).oldSpouseNationality || "-"}</td></tr>
        <tr><th>Eski Eş Doğum Yeri</th><td>${s(8).oldSpouseBirthPlace || "-"}</td></tr>
        <tr><th>Eski Eşinizin Doğduğu Ülke</th><td>${s(8).oldSpouseEndCountry || "-"}</td></tr>
        <tr><th>Evliliğinizi Bitirdiğiniz Ülke</th><td>${s(8).oldSpouseEndCountry || "-"}</td></tr>
        <tr><th>Evliliğiniz Nasıl Sona Erdi?</th><td>${s(8).oldSpouseInfo || "-"}</td></tr>
        ` : ""}
      </table>
    </div>

    <!-- BÖLÜM 9 -->
    <div class="section">
      <div class="section-title"><span class="badge">09</span> MESLEK, İŞ VE EĞİTİM BİLGİLERİ</div>
      <table>
        <tr><th>Mesleğiniz</th><td>${s(9).occupation || "-"}</td></tr>
        <tr><th>İşyerinizin Tam Adı / Okul Adı</th><td>${s(9).workOrSchoolName || "-"}</td></tr>
        <tr><th>İş Yerinin/Okulun Adresi</th><td>${s(9).workOrSchoolAddress || "-"}</td></tr>
        <tr><th>İş Yerinin/Okulun Bulunduğu Şehir</th><td>${s(9).workOrSchoolCity || "-"}</td></tr>
        <tr><th>İş Yerinin/Okulun Bulunduğu Ülke</th><td>${s(9).workOrSchoolCountry || "-"}</td></tr>
        <tr><th>İş Yerinin/Okulun Posta Kodu</th><td>${s(9).workOrSchoolPostCode || "-"}</td></tr>
        <tr><th>İş Yeri/Okul Telefon</th><td>${s(9).workOrSchoolPhone || "-"}</td></tr>
        <tr><th>İşe/Okula Başlama Tarihiniz</th><td>${s(9).workStartDate ? toTRDate(s(9).workStartDate) : "-"}</td></tr>
        <tr><th>Açık İş Tanımınız, Görevleriniz ve Ünvanınız</th><td>${s(9).jobDescription || "-"}</td></tr>
        <tr><th>Aylık Gelir</th><td>${s(9).monthlyIncome || "-"}</td></tr>
        ${s(9).previousJobBoolean === "YES" && Array.isArray(s(9).previousJobs) && s(9).previousJobs.length > 0 ? `
        <tr><th>Önceki İş Yerleri</th><td>
          ${s(9).previousJobs.map((job, i) => `
            <div class="sub-entry">
              <strong>${i + 1}. İş Yeri — ${job.companyName || "-"}</strong>
              Ünvan: ${job.position || "-"}<br/>
              Adres: ${job.previusWorkAddress || "-"}<br/>
              Şehir: ${job.previusWorkCity || "-"}<br/>
              Ülke: ${job.previusWorkCountry || "-"}<br/>
              Posta Kodu: ${job.previusWorkPostCode || "-"}<br/>
              Telefon: ${job.previusWorkPhone || "-"}<br/>
              Yönetici: ${job.previusSupervisorFullname || "-"}<br/>
              Görev: ${job.previusDuties || "-"}<br/>
              Giriş: ${job.startDate ? toTRDate(job.startDate) : "-"} — Çıkış: ${job.endDate ? toTRDate(job.endDate) : "-"}
            </div>`).join("")}
        </td></tr>
        ` : ""}
        <tr><th>Eğitim Durumunuz</th><td>${s(9).educationBoolean || "-"}</td></tr>
        ${(["HIGH_SCHOOL","ASSOCIATE_DEGREE","BACHELOR_DEGREE","MASTER_DEGREE","PHD"].includes(s(9).educationBoolean)) && Array.isArray(s(9).previousEducations) && s(9).previousEducations.length > 0 ? `
        <tr><th>Eğitim Geçmişi</th><td>
          ${s(9).previousEducations.map((edu, i) => `
            <div class="sub-entry">
              <strong>${i + 1}. Kurum — ${edu.schoolName || "-"}</strong>
              Eğitim Seviyesi: ${edu.level || "-"}<br/>
              Bölüm/Program: ${edu.department || "-"}<br/>
              Adres: ${edu.address1 || "-"}<br/>
              Şehir: ${edu.city || "-"}<br/>
              Eyalet: ${edu.state || "-"}<br/>
              Ülke: ${edu.country || "-"}<br/>
              Posta Kodu: ${edu.postalCode || "-"}<br/>
              Başlangıç: ${edu.fromDate ? toTRDate(edu.fromDate) : "-"} — Bitiş: ${edu.toDate ? toTRDate(edu.toDate) : "-"}
            </div>`).join("")}
        </td></tr>
        ` : ""}
      </table>
    </div>

    <!-- BÖLÜM 10 -->
    <div class="section">
      <div class="section-title"><span class="badge">10</span> DİĞER BİLGİLER</div>
      <table>
        <tr><th>Bildiğiniz Diller</th><td>${s(10).languages || "-"}</td></tr>
        <tr><th>Son 5 Yılda Ziyaret Edilen Ülkeler</th><td>${s(10).visitedCountries || "-"}</td></tr>
        <tr><th>Askerlik Durumu</th><td>${s(10).militaryStatus === "YES" ? "YAPTI" : "YAPMADI"}</td></tr>
        ${s(10).militaryStatus === "YES" ? `
        <tr><th>Askerlik Başlangıç Tarihi</th><td>${s(10).militaryStartDate ? toTRDate(s(10).militaryStartDate) : "-"}</td></tr>
        <tr><th>Askerlik Bitiş Tarihi</th><td>${s(10).militaryEndDate ? toTRDate(s(10).militaryEndDate) : "-"}</td></tr>
        ` : ""}
        <tr><th>Ek Bilgiler</th><td>${s(10).additionalInfo || "-"}</td></tr>
      </table>
    </div>

    <!-- FOTOĞRAFLAR -->
    ${files.passportFile || files.photoFile ? `
    <div class="photo-row">
      ${files.passportFile ? `
      <div class="photo-box">
        <p>Pasaport Fotoğrafı</p>
        <img src="cid:passportPhoto" alt="Pasaport"/>
      </div>` : ""}
      ${files.photoFile ? `
      <div class="photo-box">
        <p>Vesikalık</p>
        <img src="cid:profilePhoto" alt="Vesikalık"/>
      </div>` : ""}
    </div>
    ` : ""}

  </div><!-- /doc-body -->

  <div class="doc-footer">
    Başvuru Tarihi: ${new Date().toLocaleString("tr-TR")}
  </div>

</div><!-- /wrapper -->
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
      subject: `Amerika DS-160 Vize Başvurusu - ${s(1).fullName || "İsimsiz"}`,
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