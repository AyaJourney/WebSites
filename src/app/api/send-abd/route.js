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
    ? drawField("Evlenmeden Önceki Soyadı", s(1).maidenName, false, CONTENT_WIDTH / 2)
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
    drawSubTitle(`Evlilik ${index + 1}`);

    h1 = drawField("Eski Eş Adı Soyadı", m.spouseFullName, false, 0);
    h2 = drawField("Eski Eş Doğum Tarihi", toTRDate(m.spouseBirthDate), false, CONTENT_WIDTH / 2);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("Evlilik Başlangıç Tarihi", toTRDate(m.marriageStartDate), false, 0);
    h2 = drawField("Evlilik Bitiş Tarihi", toTRDate(m.marriageEndDate), false, CONTENT_WIDTH / 2);
    currentY -= Math.max(h1, h2) + 15;
  });
}


  // --- Step 2: Kimlik & Uyruk Bilgileri ---
drawSection("2. BÖLÜM — KİMLİK VE UYRUK BİLGİLERİ");

// Uyruğu / Diğer Uyruğu
h1 = drawField("Uyruğu", s(2).nationality, false, 0);

h2 =
  s(2).otherNationalityExist === "EVET"
    ? drawField("Diğer Uyruğu", s(2).otherNationality, false, CONTENT_WIDTH / 2)
    : drawField("Diğer Uyruğu", "-", false, CONTENT_WIDTH / 2);

currentY -= Math.max(h1, h2) + 10;

// TC Kimlik No / TC Kimlik Son Geçerlilik
h1 = drawField("T.C. Kimlik No", s(2).tcId, false, 0);
h2 = drawField(
  "T.C. Kimlik Son Geçerlilik Tarihi",
  toTRDate(s(2).tcEndDate),
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;

// ABD SSN / ABD Vergi No
h1 = drawField(
  "Amerika Sosyal Güvenlik Numarası (SSN)",
  s(2).ssn,
  false,
  0
);

h2 = drawField(
  "Amerika Vergi Numarası (VKN)",
  s(2).vkn,
  false,
  CONTENT_WIDTH / 2
);

currentY -= Math.max(h1, h2) + 10;

// Başka ülkede oturum
h1 = drawField(
  "Başka Ülkede Oturum Var mı?",
  s(2).otherSessionExist,
  false,
  0
);

h2 =
  s(2).otherSessionExist === "EVET"
    ? drawField(
        "Diğer Ülke Oturum Bilgisi",
        s(2).otherSession,
        false,
        CONTENT_WIDTH / 2
      )
    : drawField("Diğer Ülke Oturum Bilgisi", "-", false, CONTENT_WIDTH / 2);

currentY -= Math.max(h1, h2) + 10;




    // --- Step 3: Pasaport ---
    drawSection("3. BÖLÜM");
    h1 = drawField("Vize Türü", s(3).visaType,false,0);
    h2 = drawField("ABD’ye Kesin Gidiş Tarihi", toTRDate(s(3).exactArrival),false,CONTENT_WIDTH/2);
    currentY -= Math.max(h1,h2)+10;
    h1 = drawField("Tahmini Gidiş Tarihi", toTRDate(s(3).estimatedArrival),false,0);
    h2 = drawField("ABD’de Ne Kadar Kalacak", s(3).stayDuration,false,CONTENT_WIDTH/2);
    currentY -= Math.max(h1,h2)+10;
    h1 = drawField("ABD’de Kalacağı Açık Adres", s(3).stayAddress,true,0);
    h2 = drawField("Gezinizin Masraflarını Kim Karşılayacak", s(3).whoPays,true,CONTENT_WIDTH/2);

    currentY -= h1+10;
    h1 =s(3).whoPays === "DIGER" && drawField("Yakınlık Derecesi", s(3).relationDegree,true,0);
    h2 =s(3).whoPays === "DIGER" &&  drawField("Adresi", s(3).payerAddress,true,0);
    currentY -= h1+10;
    h1 =s(3).whoPays === "DIGER" && drawField("Telefonu", s(3).payerPhone,true,0);
    currentY -= h1+10;
    drawFooter(currentPage,pageCount); // 1. sayfa sonu

    // --- BÖLÜM 4: İş ve Maddi Durum ---
    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
    await drawHeader(currentPage);

    drawSection("4.BÖLÜM");
    h1 = drawField("Tek Mi Seyahat Edeceksiniz", s(4).travelAlone,true,0);
    currentY -= h1+10;
    if(s(4).travelAlone==="HAYIR") {
      h1 = drawField("Başka birisi varsa adı, soyadı ve ilişkiniz", s(4).otherTraveler,false,0);
     
      currentY -= Math.max(h1,h2)+10;
    } 
 currentY -= h1+10;
  h1 = drawField("Daha Önce ABD’de bulundunuz mu?", s(4).beenToUS,true,0);
    currentY -= h1+10;
     if(s(4).beenToUS==="EVET") {
      h1 = drawField("Gittiğiniz Günün Tarihi", toTRDate(s(4).lastVisitDate),false,0);
      h2 = drawField("ABD’de Kaldığınız Süre", s(4).lastVisitDuration,false,0);
      currentY -= Math.max(h1,h2)+10;
    } 
      h1 = drawField("Daha Önce ABD Vizesi Aldınız mı?", s(4).hadUSVisa,true,0);
    currentY -= h1+10;
     if(s(4).hadUSVisa==="EVET") {
      h1 = drawField("Vize Tarihi", toTRDate(s(4).visaDate),false,0);
      h2 = drawField("Vize Numarası", s(4).visaNumber,false,0);
      currentY -= Math.max(h1,h2)+10;
    } 
     h1 = drawField("Daha Önce ABD Vizesi Başvurusunda Ret Aldınız mı?", s(4).visaRefused,true,0);
     h2 = drawField("Vize Ret Nedeni", s(4).visaRefusedDetail,false,0);
    currentY -= Math.max(h1,h2)+10;
   


   drawSection("5.BÖLÜM");

// İngiltere Adresi
 h1 = drawField("Ev Adresi", s(5).homeAddress || "-", true, 0);
currentY -= h1 + 10;

// Telefonlar ve iş telefonu
h1 = drawField("Telefon 1", s(5).phone1 || "-", false, 0);
 h2 = drawField("Telefon 2", s(5).phone2 || "-", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("İş Telefonu", s(5).workPhone || "-", false, 0);
currentY -= h1 + 10;

// Email ve sosyal medya
h1 = drawField("Email", s(5).email || "-", false, 0);
h2 = drawField("Sosyal Medya", s(5).socialMedia || "-", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// Pasaport bilgileri
h1 = drawField("Pasaport Tipi", s(5).passportType || "-", false, 0);
h2 = drawField("Pasaport No", s(5).passportNumber || "-", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("Veriliş Makamı", s(5).passportAuthority || "-", false, 0);
h2 = drawField("Başlangıç / Bitiş", `${s(5).passportStart || "-"} / ${s(5).passportEnd || "-"}`, false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// Kaybolan pasaport
h1 = drawField("Kaybolan Pasaport No", s(5).lostPassportNumber || "-", false, 0);
currentY -= h1 + 10;

// Seyahat geçmişi varsa
if (s(5).abroad_country && s(5).abroad_country.length > 0) {
  checkSpace(50);
  currentY -= 10;
  currentPage.drawText("Seyahat Geçmişi", { x: MARGIN, y: currentY, size: 10, font: boldFont, color: COLORS.primary });
  currentY -= 15;
  s(5).abroad_country.forEach(item => {
    const text = `• ${item.country || '-'} (${item.start || '-'} / ${item.end || '-'})`;
    checkSpace(20);
    currentPage.drawText(text, { x: MARGIN + 10, y: currentY, size: 9, font: regularFont, color: COLORS.textMain });
    currentY -= 14;
  });
  currentY -= 10;
}

// Vize reddi varsa
if (String(s(5).boolean_refused_visa).toUpperCase() === "EVET") {
  checkSpace(40);
  currentPage.drawRectangle({ x: MARGIN, y: currentY - 30, width: CONTENT_WIDTH, height: 35, color: rgb(1, 0.9, 0.9) });
   rh1 = drawField("Vize Reddi Tarihi", toTRDate(s(5).when_refused) || "-", false, 5);
   rh2 = drawField("Red Sebebi", s(5).refused_about || "-", false, (CONTENT_WIDTH / 2) + 5);
  currentY -= Math.max(rh1, rh2) + 15;
}

    drawFooter(currentPage,pageCount);
     currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
    await drawHeader(currentPage);
// --- 6. Bölüm ---
drawSection("6. BÖLÜM — ÇALIŞMA VE EĞİTİM BİLGİLERİ");

/* ========== MESLEK / İŞ ========== */
h1 = drawField("Meslek / Pozisyon", s(6).occupation || "-", true, 0);
currentY -= h1 + 10;

h1 = drawField("İş / Okul Adı", s(6).workOrSchoolName || "-", false, 0);
h2 = drawField("İş / Okul Adresi", s(6).workOrSchoolAddress || "-", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("İş Telefonu", s(6).workPhone || "-", false, 0);
h2 = drawField("Başlangıç Tarihi", toTRDate(s(6).workStartDate) || "-", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

h1 = drawField("Aylık Gelir", s(6).monthlyIncome || "-", false, 0);
h2 = drawField("İş Tanımı", s(6).jobDescription || "-", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

/* ========== ÖNCEKİ İŞLER (DİZİ) ========== */
if (Array.isArray(s(6).previousJobs) && s(6).previousJobs.length > 0) {
  // drawSubSection("Önceki İş Deneyimleri");

  s(6).previousJobs.forEach((job, index) => {
    let j1 = drawField(
      `İşyeri Adı (${index + 1})`,
      job.companyName || "-",
      false,
      0
    );
    let j2 = drawField(
      "İşyeri Adresi",
      job.companyAddress || "-",
      false,
      CONTENT_WIDTH / 2
    );
    currentY -= Math.max(j1, j2) + 8;

    j1 = drawField("Pozisyon", job.position || "-", false, 0);
    j2 = drawField(
      "Çalışma Tarihleri",
      `${toTRDate(job.startDate) || "-"} / ${toTRDate(job.endDate) || "-"}`,
      false,
      CONTENT_WIDTH / 2
    );
    currentY -= Math.max(j1, j2) + 12;
  });
}

/* ========== EĞİTİM BİLGİLERİ ========== */
// drawSubSection("Eğitim Bilgileri");

/* LİSE */
h1 = drawField("Lise Adı", s(6).highSchoolName || "-", false, 0);
h2 = drawField(
  "Lise Tarihleri",
  `${toTRDate(s(6).highSchoolStartDate) || "-"} / ${toTRDate(s(6).highSchoolEndDate) || "-"}`,
  false,
  CONTENT_WIDTH / 2
);
currentY -= Math.max(h1, h2) + 8;

h1 = drawField("Lise Adresi", s(6).highSchoolAddress || "-", true, 0);
currentY -= h1 + 10;

/* ÜNİVERSİTE */
h1 = drawField("Üniversite Adı", s(6).universityName || "-", false, 0);
h2 = drawField(
  "Üniversite Tarihleri",
  `${toTRDate(s(6).universityStartDate) || "-"} / ${toTRDate(s(6).universityEndDate) || "-"}`,
  false,
  CONTENT_WIDTH / 2
);
currentY -= Math.max(h1, h2) + 8;

h1 = drawField("Üniversite Adresi", s(6).universityAddress || "-", true, 0);
currentY -= h1 + 10;

/* FOOTER */
drawFooter(currentPage, pageCount);
 // sayfa numarası için footer çizimi

// Başlık
drawSection("7.BÖLÜM");


// Diller
 h1 = drawField("Konuşulan Diller", s(7).languages, false, 0);
currentY -= h1 + 10;

// Ziyaret Edilen Ülkeler
h1 = drawField("Ziyaret Edilen Ülkeler", s(7).visitedCountries, false, 0);
currentY -= h1 + 10;

// Askerlik Durumu
h1 = drawField("Askerlik Durumu", s(7).militaryService, false, 0);
currentY -= h1 + 10;

// Ek Bilgiler
h1 = drawField("Ek Bilgiler", s(7).additionalInfo, false, 0);
currentY -= h1 + 20;
drawFooter(currentPage,pageCount);
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
Uyruğu: ${s(2).nationality || "-"}
Diğer Uyruğu: ${s(2).otherNationalityExist === "EVET" ? s(2).otherNationality : "-"}
T.C. Kimlik No: ${s(2).tcId || "-"}
ABD Sosyal Güvenlik No (SSN): ${s(2).ssn || "-"}
ABD Vergi No (VKN): ${s(2).vkn || "-"}
T.C. Kimlik Kartı Son Geçerlilik Tarihi: ${s(2).tcEndDate ? toTRDate(s(2).tcEndDate) : "-"}

-- Vize Detayları --
Vize Türü: ${s(3).visaType || "-"}
Tahmini Varış: ${s(3).exactArrival || "-"}
Tahmini Geliş: ${s(3).estimatedArrival || "-"}
Kalış Süresi: ${s(3).stayDuration || "-"}
Kalınacak Adres: ${s(3).stayAddress || "-"}
Masrafları Kim Karşılıyor: ${s(3).whoPays || "-"}
İlişki Derecesi: ${s(3).relationDegree || "-"}
Masraf Sahibinin Adresi: ${s(3).payerAddress || "-"}
Masraf Sahibinin Telefonu: ${s(3).payerPhone || "-"}

-- Seyahat Geçmişi --
Yalnız Seyahat: ${s(4).travelAlone || "-"}
Diğer Yolcular: ${s(4).otherTraveler || "-"}
ABD’ye Gidildi mi: ${s(4).beenToUS || "-"}
Son Ziyaret Tarihi: ${toTRDate(s(4).lastVisitDate) || "-"}
Ziyaret Süresi: ${s(4).lastVisitDuration || "-"}
Daha Önce Vize Alındı mı: ${s(4).hadUSVisa || "-"}
Vize Tarihi: ${toTRDate(s(4).visaDate) || "-"}
Vize Numarası: ${s(4).visaNumber || "-"}
Vize Reddi: ${s(4).visaRefused || "-"}
Vize Reddi Nedeni: ${s(4).visaRefusedDetail || "-"}


-- Pasaport Bilgileri --
Adres: ${s(5).homeAddress || "-"}
Telefon 1: ${s(5).phone1 || "-"}
Telefon 2: ${s(5).phone2 || "-"}
İş Telefonu: ${s(5).workPhone || "-"}
Email: ${s(5).email || "-"}
Sosyal Medya: ${s(5).socialMedia || "-"}
Pasaport Türü: ${s(5).passportType || "-"}
Pasaport No: ${s(5).passportNumber || "-"}
Pasaport Yetkili: ${s(5).passportAuthority || "-"}
Başlangıç: ${s(5).passportStart || "-"}
Bitiş: ${s(5).passportEnd || "-"}
Kaybolan Pasaport No: ${s(5).lostPassportNumber || "-"}

-- İş ve Eğitim --
Meslek: ${s(6).occupation || "-"}

İş / Okul Bilgileri
Adı: ${s(6).workOrSchoolName || "-"}
Adresi: ${s(6).workOrSchoolAddress || "-"}
Telefon: ${s(6).workPhone || "-"}
Başlangıç Tarihi: ${toTRDate(s(6).workStartDate) || "-"}
Aylık Gelir: ${s(6).monthlyIncome || "-"}
İş Tanımı: ${s(6).jobDescription || "-"}

Önceki İşler:
${
  Array.isArray(s(6).previousJobs) && s(6).previousJobs.length > 0
    ? s(6).previousJobs
        .map(
          (job, i) =>
            `${i + 1}. İş Yeri: ${job.companyName || "-"}
   Ünvan: ${job.position || "-"}
   Adres: ${job.companyAddress || "-"}
   Başlangıç: ${toTRDate(job.startDate) || "-"}
   Bitiş: ${toTRDate(job.endDate) || "-"}`
        )
        .join("\n")
    : "-"
}

Lise Bilgileri
Okul Adı: ${s(6).highSchoolName || "-"}
Başlangıç Tarihi: ${toTRDate(s(6).highSchoolStartDate) || "-"}
Mezuniyet Tarihi: ${toTRDate(s(6).highSchoolEndDate) || "-"}
Adres: ${s(6).highSchoolAddress || "-"}

Üniversite Bilgileri
Üniversite Adı: ${s(6).universityName || "-"}
Başlangıç Tarihi: ${toTRDate(s(6).universityStartDate) || "-"}
Mezuniyet Tarihi: ${toTRDate(s(6).universityEndDate) || "-"}
Adres: ${s(6).universityAddress || "-"}


-- Diğer Bilgiler --
Konuşulan Diller: ${s(7).languages || "-"}
Ziyaret Edilen Ülkeler: ${s(7).visitedCountries || "-"}
Askerlik Durumu: ${s(7).militaryService || "-"}
Ek Bilgiler: ${s(7).additionalInfo || "-"}

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
<table border="1" cellspacing="0" cellpadding="5"
  style="border-collapse: collapse; width:100%; background-color:#f9f9f9;">
  <tbody>
    <tr>
      <th style="background-color:#e0e0e0;">Uyruğu</th>
      <td>${s(2).nationality || "-"}</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">Diğer Uyruğu</th>
      <td>${s(2).otherNationalityExist === "EVET" ? s(2).otherNationality : "-"}</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">T.C. Kimlik No</th>
      <td>${s(2).tcId || "-"}</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">ABD Sosyal Güvenlik No (SSN)</th>
      <td>${s(2).ssn || "-"}</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">ABD Vergi No (VKN)</th>
      <td>${s(2).vkn || "-"}</td>
    </tr>
    <tr>
      <th style="background-color:#e0e0e0;">T.C. Kimlik Kartı Son Geçerlilik Tarihi</th>
      <td>${s(2).tcEndDate ? toTRDate(s(2).tcEndDate) : "-"}</td>
    </tr>
  </tbody>
</table>


<h3>Vize Detayları</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr><th style="background-color:#e0e0e0;">Vize Türü</th><td>${s(3).visaType || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Tahmini Varış</th><td>${s(3).exactArrival || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Tahmini Geliş</th><td>${s(3).estimatedArrival || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Kalış Süresi</th><td>${s(3).stayDuration || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Kalınacak Adres</th><td>${s(3).stayAddress || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Masrafları Kim Karşılıyor</th><td>${s(3).whoPays || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">İlişki Derecesi</th><td>${s(3).relationDegree || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Masraf Sahibinin Adresi</th><td>${s(3).payerAddress || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Masraf Sahibinin Telefonu</th><td>${s(3).payerPhone || "-"}</td></tr>
  </tbody>
</table>

<h3>Seyahat Geçmişi</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr><th style="background-color:#e0e0e0;">Yalnız Seyahat</th><td>${s(4).travelAlone || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Diğer Yolcular</th><td>${s(4).otherTraveler || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">ABD’ye Gidildi mi</th><td>${s(4).beenToUS || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Son Ziyaret Tarihi</th><td>${toTRDate(s(4).lastVisitDate) || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Ziyaret Süresi</th><td>${s(4).lastVisitDuration || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Daha Önce Vize Alındı mı</th><td>${s(4).hadUSVisa || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Vize Tarihi</th><td>${toTRDate(s(4).visaDate) || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Vize Numarası</th><td>${s(4).visaNumber || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Vize Reddi</th><td>${s(4).visaRefused || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Vize Reddi Nedeni</th><td>${s(4).visaRefusedDetail || "-"}</td></tr>

  </tbody>
</table>

<h3>Pasaport Bilgileri</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr><th style="background-color:#e0e0e0;">Adres</th><td>${s(5).homeAddress || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Telefon 1</th><td>${s(5).phone1 || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Telefon 2</th><td>${s(5).phone2 || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">İş Telefonu</th><td>${s(5).workPhone || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Email</th><td>${s(5).email || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Sosyal Medya</th><td>${s(5).socialMedia || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Pasaport Türü</th><td>${s(5).passportType || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Pasaport No</th><td>${s(5).passportNumber || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Pasaport Yetkili</th><td>${s(5).passportAuthority || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Başlangıç</th><td>${s(5).passportStart || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Bitiş</th><td>${s(5).passportEnd || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Kaybolan Pasaport No</th><td>${s(5).lostPassportNumber || "-"}</td></tr>
  </tbody>
</table>

<h3>İş ve Eğitim</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr>
      <th style="background-color:#e0e0e0;">Meslek / Pozisyon</th>
      <td>${s(6).occupation || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">İş / Okul Adı</th>
      <td>${s(6).workOrSchoolName || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">İş / Okul Adresi</th>
      <td>${s(6).workOrSchoolAddress || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">İş Telefonu</th>
      <td>${s(6).workPhone || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Başlangıç Tarihi</th>
      <td>${toTRDate(s(6).workStartDate) || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Aylık Gelir</th>
      <td>${s(6).monthlyIncome || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">İş Tanımı</th>
      <td>${s(6).jobDescription || "-"}</td>
    </tr>

    <!-- ÖNCEKİ İŞLER (DİZİ) -->
    <tr>
      <th style="background-color:#e0e0e0;">Önceki İşler</th>
      <td>
        ${
          s(6).previousJobs?.length
            ? s(6).previousJobs
                .map(
                  (job, i) => `
                    <div style="margin-bottom:6px;">
                      <strong>${i + 1}.</strong>
                      ${job.companyName || "-"} /
                      ${job.position || "-"} <br/>
                      ${job.companyAddress || "-"} <br/>
                      ${toTRDate(job.startDate) || "-"} - ${toTRDate(job.endDate) || "-"}
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
        ${s(6).highSchoolName || "-"} <br/>
        ${toTRDate(s(6).highSchoolStartDate) || "-"} - ${toTRDate(s(6).highSchoolEndDate) || "-"} <br/>
        ${s(6).highSchoolAddress || "-"}
      </td>
    </tr>

    <!-- ÜNİVERSİTE -->
    <tr>
      <th style="background-color:#e0e0e0;">Üniversite</th>
      <td>
        ${s(6).universityName || "-"} <br/>
        ${toTRDate(s(6).universityStartDate) || "-"} - ${toTRDate(s(6).universityEndDate) || "-"} <br/>
        ${s(6).universityAddress || "-"}
      </td>
    </tr>
  </tbody>
</table>


<h3>Diğer Bilgiler</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr><th style="background-color:#e0e0e0;">Konuşulan Diller</th><td>${s(7).languages || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Ziyaret Edilen Ülkeler</th><td>${s(7).visitedCountries || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Askerlik Durumu</th><td>${s(7).militaryService || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Ek Bilgiler</th><td>${s(7).additionalInfo || "-"}</td></tr>
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