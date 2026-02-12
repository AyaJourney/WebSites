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

    // ✅ FONT'U BİR KERE YÜKLE (BAŞTA)
    let regularFont, boldFont;
    const fontPath = path.join(process.cwd(), "public", "fonts", "OpenSans_Condensed-Regular.ttf");

    if (fs.existsSync(fontPath)) {
      try {
        const fontBytes = fs.readFileSync(fontPath);
        const customFont = await pdfDoc.embedFont(fontBytes);
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

    const PAGE_WIDTH = 595;
    const PAGE_HEIGHT = 842;
    const MARGIN = 40;
    const CONTENT_WIDTH = PAGE_WIDTH - (MARGIN * 2);

    // --- Yardımcı Fonksiyonlar ---
   const wrapText = (text, maxWidth, font, size) => {

  if (!text) return [];

  text = String(text).normalize("NFC");

  const lines = [];
  const paragraphs = text.split(/\r?\n/);

  paragraphs.forEach((paragraph, pIndex) => {

    if (paragraph.trim() === "") {
      lines.push("");
      return;
    }

    const words = paragraph.split(" ");
    let currentLine = "";

    words.forEach((word) => {

      // Eğer kelime tek başına maxWidth'i aşıyorsa
      if (font.widthOfTextAtSize(word, size) > maxWidth) {

        if (currentLine) {
          lines.push(currentLine);
          currentLine = "";
        }

        let chunk = "";

        for (let char of [...word]) {
          const testChunk = chunk + char;
          const width = font.widthOfTextAtSize(testChunk, size);

          if (width < maxWidth) {
            chunk = testChunk;
          } else {
            lines.push(chunk);
            chunk = char;
          }
        }

        if (chunk) {
          currentLine = chunk;
        }

      } else {

        const testLine = currentLine
          ? currentLine + " " + word
          : word;

        const width = font.widthOfTextAtSize(testLine, size);

        if (width < maxWidth) {
          currentLine = testLine;
        } else {
          lines.push(currentLine);
          currentLine = word;
        }
      }
    });

    if (currentLine) {
      lines.push(currentLine);
    }

    if (pIndex !== paragraphs.length - 1) {
      lines.push("");
    }

  });

  return lines;
};

    // State yönetimi
    let currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    let currentY = PAGE_HEIGHT - MARGIN;
    let pageCount = 1;

    // ✅ OPTIMIZE EDİLMİŞ checkSpace
   const HEADER_HEIGHT = 15; // Header toplam yüksekliği (logon dahil)
const SAFE_TOP_GAP = 0;   // Header ile içerik arası boşluk

const checkSpace = (heightNeeded) => {

  if (currentY - heightNeeded < MARGIN + 40) {

    // Mevcut sayfaya footer bas
    drawFooter(currentPage, pageCount);

    // Yeni sayfa
    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;

    // Header çiz
    drawHeader(currentPage);

    // 🔥 Header alanını düş
    currentY = PAGE_HEIGHT - MARGIN - HEADER_HEIGHT - SAFE_TOP_GAP;

    return true;
  }

  return false;
};

    // ✅ OPTIMIZE EDİLMİŞ drawHeader (async kaldırıldı, logo parametre)
    const drawHeader = (page) => {
      if (logoImage) {
        page.drawImage(logoImage, {
          x: MARGIN,
          y: PAGE_HEIGHT - 42,
          width: 110,
          height: 33
        });
      } else {
        page.drawText("AYA JOURNEY", {
          x: MARGIN,
          y: PAGE_HEIGHT - 45 - 20,
          size: 18,
          font: boldFont,
          color: COLORS.primary,
        });
      }

      page.drawText("ABD DS-160 VİZE BAŞVURU FORMU BILGI FISI", {
        x: PAGE_WIDTH - MARGIN - boldFont.widthOfTextAtSize("ABD DS-160 VİZE BAŞVURU FORMU BILGI FISI", 10),
        y: PAGE_HEIGHT - 38,
        size: 10,
        font: boldFont,
        color: COLORS.textLabel,
      });

      currentY = PAGE_HEIGHT - 50;
    };

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

    const drawSection = (title) => {
      checkSpace(50);
      currentY -= 15;
      
      currentPage.drawRectangle({
        x: MARGIN,
        y: currentY - 25,
        width: CONTENT_WIDTH,
        height: 25,
        color: COLORS.primary,
      });

      currentPage.drawText(title.toUpperCase(), {
        x: MARGIN + 10,
        y: currentY - 19,
        size: 11,
        font: boldFont,
        color: COLORS.white
      });

      currentY -= 40;
    };
const drawField = (label, value) => {

  // 🔥 Her zaman tam genişlik
  const colWidth = CONTENT_WIDTH;

  const valStr = value ? String(value) : "-";
  const labelSize = 14;
  const valueSize = 14;
  const lineSpacing = valueSize + 4;

  const drawX = MARGIN;

  const valueLines = wrapText(
    valStr,
    colWidth,
    regularFont,
    valueSize
  );

  const labelHeight = labelSize + 6;

  // 🔥 Önce label için yer kontrolü
  if (checkSpace(labelHeight + 10)) {
    currentY -= 20; // header ile çakışmaması için boşluk
  }

  // LABEL
  currentPage.drawText(label, {
    x: drawX,
    y: currentY,
    size: labelSize,
    font: boldFont,
    color: COLORS.textLabel
  });

  currentY -= labelHeight;

  // 🔥 Satır satır yaz
  valueLines.forEach((line) => {

    // Her satırdan önce kontrol
    if (checkSpace(lineSpacing)) {

      currentY -= 20; // header altı boşluk

      // Yeni sayfadaysak label tekrar yaz
      currentPage.drawText(label, {
        x: drawX,
        y: currentY,
        size: labelSize,
        font: boldFont,
        color: COLORS.textLabel
      });

      currentY -= labelHeight;
    }

    currentPage.drawText(line, {
      x: drawX,
      y: currentY,
      size: valueSize,
      font: regularFont,
      color: COLORS.textMain
    });

    currentY -= lineSpacing;
  });

  currentY -= 12;

  return labelHeight + (valueLines.length * lineSpacing);
};


    // --- Veri İşleme ve Çizim Başlangıcı ---
    const s = (n) => formData.payload?.steps?.[String(n)] || {};

    // --- BÖLÜM 1: Kişisel Bilgiler ---
    drawHeader(currentPage);

    drawSection("1. KİŞİSEL BİLGİLER");

    let h1 = drawField("Ad Soyad", s(1).fullName, false, 0);
    currentY -= h1 + 10;

    h1 = drawField("Doğum Tarihi", toTRDate(s(1).birthDate), false, 0);
    let h2 = drawField("Doğum Yeri", s(1).birthPlace, false,0);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("Doğum Ülkesi", s(1).birthCountry, false, 0);
    currentY -= h1 + 10;

    h1 = drawField("Medeni Durum", s(1).maritalStatus, false, 0);
    h2 = s(1).maritalStatus === "EVLI"
      ? drawField("Daha Önce Kullanılan Adı veya Soyadı", s(1).maidenName, false,0)
      : drawField("Cinsiyet", s(1).gender, false,0);
    currentY -= Math.max(h1, h2) + 10;

    // --- BÖLÜM 2: Kimlik ve Uyruk ---
    drawSection("2. BÖLÜM — KİMLİK VE UYRUK BİLGİLERİ");

    h1 = drawField("Uyruğu", s(2).nationality || "-", false, 0);
    h2 = drawField(
      "Diğer Uyruğu",
      s(2).otherNationalityExist === "EVET" && s(2).otherNationality ? s(2).otherNationality : "-",
      false,
     0
    );
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField(
      "Diğer Uyruk Pasaport No",
      s(2).otherNationalityExist === "EVET" && s(2).otherNationalityPassportNo ? s(2).otherNationalityPassportNo : "-",
      false,
      0
    );
    currentY -= h1 + 10;

    h1 = drawField("T.C. Kimlik No", s(2).tcId || "-", false, 0);
    h2 = drawField("Amerika Sosyal Güvenlik Numarası (SSN)", s(2).ssn || "-", false,0);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("Amerika Vergi Numarası (VKN)", s(2).vkn || "-", false, 0);
    currentY -= h1 + 10;

    h1 = drawField("Başka Ülkede Oturum Var mı?", s(2).otherSessionExist || "-", false, 0);
    h2 = drawField(
      "Oturum Ülkesi",
      s(2).otherSessionExist === "EVET" && s(2).otherSessionExistCountry ? s(2).otherSessionExistCountry : "-",
      false,
     0
    );
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField(
      "Oturum Bilgisi",
      s(2).otherSessionExist === "EVET" && s(2).otherSession ? s(2).otherSession : "-",
      false,
      0
    );
    currentY -= h1 + 10;

    // --- BÖLÜM 3: Seyahat ve Vize ---
    drawSection("3. BÖLÜM — SEYAHAT VE VİZE BİLGİLERİ");

    h1 = drawField("Vize Türü", s(3).visaType || "-", false, 0);
    h2 = drawField("ABD'ye Kesin Gidiş Tarihi", s(3).exactArrival ? toTRDate(s(3).exactArrival) : "-", false,0);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("Tahmini Gidiş Tarihi", s(3).estimatedArrival ? toTRDate(s(3).estimatedArrival) : "-", false, 0);
    h2 = drawField("ABD'de Kalış Süresi", s(3).stayDuration || "-", false,0);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("ABD'de Kalacağı Adres", s(3).stayAddress || "-", true, 0);
    h2 = drawField("Masrafları Kim Karşılayacak", s(3).whoPays || "-", true,0);
    currentY -= Math.max(h1, h2) + 10;

    if (s(3).whoPays === "DIGER") {
      h1 = drawField("Yakınlık Derecesi", s(3).relationDegree || "-", true, 0);
      h2 = drawField("Ödeyen Kişi Adresi", s(3).payerAddress || "-", true,0);
      currentY -= Math.max(h1, h2) + 10;

      h1 = drawField("Telefon", s(3).payerPhone || "-", true, 0);
      h2 = drawField("E-Posta", s(3).payerMail || "-", true,0);
      currentY -= Math.max(h1, h2) + 10;
    }

    h1 = drawField("ABD'de İrtibat Kişisi / Kurumu", s(3).usContactInfo || "-", true, 0);
    h2 = drawField("ABD'de Yakın Akraba Bilgisi", s(3).usRelativeInfo || "-", true,0);
    currentY -= Math.max(h1, h2) + 10;

    drawFooter(currentPage, pageCount);

    // --- BÖLÜM 4: Seyahat ve Vize Geçmişi ---
    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
    drawHeader(currentPage);

    drawSection("4. BÖLÜM — SEYAHAT VE ABD GEÇMİŞİ");

    h1 = drawField("Tek Başına Seyahat Edecek misiniz?", s(4).travelAlone || "-", true, 0);
    currentY -= h1 + 10;

    if (s(4).travelAlone === "HAYIR") {
      h1 = drawField("Birlikte Seyahat Edeceğiniz Kişi / İlişki", s(4).otherTraveler || "-", false, 0);
      currentY -= h1 + 10;
    }

    h1 = drawField("Daha Önce ABD'de Bulundunuz mu?", s(4).beenToUS || "-", true, 0);
    currentY -= h1 + 10;

    if (s(4).beenToUS === "EVET") {
      if (Array.isArray(s(4).travels) && s(4).travels.length > 0) {
        s(4).travels.slice(0, 5).forEach((travel, index) => {
          let hA = drawField(`ABD Seyahati ${index + 1} - Gidiş Tarihi`, travel.date ? toTRDate(travel.date) : "-", false, 0);
          let hB = drawField("Kalış Süresi", travel.duration || "-", false,0);
          currentY -= Math.max(hA, hB) + 10;
        });
      } else {
        let hA = drawField("Son Ziyaret Tarihi", s(4).lastVisitDate ? toTRDate(s(4).lastVisitDate) : "-", false, 0);
        let hB = drawField("ABD'de Kalış Süresi", s(4).lastVisitDuration || "-", false,0);
        currentY -= Math.max(hA, hB) + 10;
      }
    }

    h1 = drawField("Daha Önce ABD Vizesi Aldınız mı?", s(4).hadUSVisa || "-", true, 0);
    currentY -= h1 + 10;

    if (s(4).hadUSVisa === "EVET") {
      let hA = drawField("Vize Tarihi", s(4).visaDate ? toTRDate(s(4).visaDate) : "-", false, 0);
      let hB = drawField("Vize Numarası", s(4).visaNumber || "-", false,0);
      currentY -= Math.max(hA, hB) + 10;
    }

    h1 = drawField("Daha Önce ABD Vizesi Reddedildi mi?", s(4).visaRefused || "-", true, 0);
    currentY -= h1 + 10;

    drawFooter(currentPage, pageCount);

    // --- BÖLÜM 5: İletişim ve Pasaport ---
    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
    drawHeader(currentPage);

    drawSection("5. BÖLÜM — İLETİŞİM VE PASAPORT BİLGİLERİ");

    h1 = drawField("Ev Adresi", s(5).homeAddress || "-", true, 0);
    currentY -= h1 + 10;

    h1 = drawField("Telefon", s(5).phone1 || "-", false, 0);
    h2 = drawField("Alternatif Telefon", s(5).phone2 || "-", false,0);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("İş Telefonu", s(5).workPhone || "-", false, 0);
    currentY -= h1 + 10;

    h1 = drawField("E-Posta", s(5).email || "-", false, 0);
    currentY -= h1 + 10;

    h1 = drawField("Sosyal Medya Hesabı Var mı?", s(5).hasSocialMedia || "-", false, 0);
    currentY -= h1 + 10;

    if (s(5).hasSocialMedia === "EVET" && Array.isArray(s(5).socialMediaAccounts) && s(5).socialMediaAccounts.length > 0) {
      s(5).socialMediaAccounts.forEach((acc, index) => {
        let hSM = drawField(acc.platform || `Sosyal Medya ${index + 1}`, acc.username || "-", false, 0);
        currentY -= hSM + 6;
      });
      currentY -= 6;
    }

    h1 = drawField("Pasaport Tipi", s(5).passportType || "-", false, 0);
    h2 = drawField("Pasaport Numarası", s(5).passportNumber || "-", false,0);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("Veriliş Makamı", s(5).passportAuthority || "-", false, 0);
    h2 = drawField(
      "Geçerlilik Tarihi",
      `${s(5).passportStart ? toTRDate(s(5).passportStart) : "-"} / ${s(5).passportEnd ? toTRDate(s(5).passportEnd) : "-"}`,
      false,
     0
    );
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("Daha Önce Kaybolan Pasaport Var mı?", s(5).lostPassportBoolean || "-", false, 0);
    currentY -= h1 + 10;

    if (s(5).lostPassportBoolean === "EVET") {
      h1 = drawField("Kayıp Pasaport Numarası", s(5).lostPassportNumber || "-", false, 0);
      h2 = drawField("Kayıp Pasaport Veriliş Ülkesi", s(5).lostPassportAuthorityCountry || "-", false,0);
      currentY -= Math.max(h1, h2) + 10;

      h1 = drawField("Kayıp Pasaport Açıklaması", s(5).lostPassportInfo || "-", true, 0);
      currentY -= h1 + 10;
    }

    drawFooter(currentPage, pageCount);

    // --- BÖLÜM 6: ABD'de Akraba ve Organizasyon ---
    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
    drawHeader(currentPage);

    drawSection("6. BÖLÜM — ABD'DE AKRABA VE ORGANİZASYON BİLGİLERİ");

    h1 = drawField("ABD'de Akrabanız Var mı?", s(6).usaRelative || "-", false, 0);
    currentY -= h1 + 10;

    if (s(6).usaRelative === "EVET") {
      h1 = drawField("Akrabanın Adı Soyadı", s(6).usaRelativeFullName || "-", false, 0);
      h2 = drawField("Yakınlık Derecesi / Açıklama", s(6).usaRelativeInfo || "-", false,0);
      currentY -= Math.max(h1, h2) + 10;

      h1 = drawField("Adres", s(6).usaRelativeAddress || "-", true, 0);
      currentY -= h1 + 10;

      h1 = drawField("Şehir", s(6).usaRelativeAddressCity || "-", false, 0);
      h2 = drawField("Eyalet", s(6).usaRelativeAddressState || "-", false,0);
      currentY -= Math.max(h1, h2) + 10;

      h1 = drawField("Posta Kodu", s(6).usaRelativePostCode || "-", false, 0);
      currentY -= h1 + 10;

      h1 = drawField("Telefon", s(6).usaRelativePhone || "-", false, 0);
      h2 = drawField("E-Posta", s(6).usaRelativeEmail || "-", false,0);
      currentY -= Math.max(h1, h2) + 10;
    }

    h1 = drawField("ABD'de Bağlantılı Olduğunuz Bir Kurum Var mı?", s(6).organizationBoolean || "-", false, 0);
    currentY -= h1 + 10;

    if (s(6).organizationBoolean === "EVET") {
      h1 = drawField("Kurum / Organizasyon Bilgisi", s(6).organizationInfo || "-", true, 0);
      currentY -= h1 + 10;

      h1 = drawField("Adres", s(6).organizationAddress || "-", true, 0);
      currentY -= h1 + 10;

      h1 = drawField("Şehir", s(6).organizationAddressCity || "-", false, 0);
      h2 = drawField("Eyalet", s(6).organizationAddressState || "-", false,0);
      currentY -= Math.max(h1, h2) + 10;

      h1 = drawField("Posta Kodu", s(6).organizationPostCode || "-", false, 0);
      currentY -= h1 + 10;

      h1 = drawField("Telefon", s(6).organizationPhone || "-", false, 0);
      h2 = drawField("E-Posta", s(6).organizationEmail || "-", false,0);
      currentY -= Math.max(h1, h2) + 10;
    }

    drawFooter(currentPage, pageCount);

    // --- BÖLÜM 7: Anne, Baba ve ABD'de Akrabalar ---
    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
    drawHeader(currentPage);

    drawSection("7. BÖLÜM — ANNE, BABA VE ABD'DE AKRABALAR");

    h1 = drawField("Anne Adı Soyadı", s(7).motherFullName || "-", false, 0);
    h2 = drawField("Anne Doğum Tarihi", s(7).motherBirthDate ? toTRDate(s(7).motherBirthDate) : "-", false,0);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("Baba Adı Soyadı", s(7).fatherFullName || "-", false, 0);
    h2 = drawField("Baba Doğum Tarihi", s(7).fatherBirthDate ? toTRDate(s(7).fatherBirthDate) : "-", false,0);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("Anne ABD'de mi?", s(7).isMotherInUSA || "-", false, 0);
    h2 = drawField("Baba ABD'de mi?", s(7).isFatherInUSA || "-", false,0);
    currentY -= Math.max(h1, h2) + 10;

    if (s(7).isMotherInUSA === "EVET") {
      h1 = drawField("Annenin ABD Statüsü", s(7).isMotherUSAStatus || "-", false, 0);
      currentY -= h1 + 10;
    }

    if (s(7).isFatherInUSA === "EVET") {
      h1 = drawField("Babanın ABD Statüsü", s(7).isFatherUSAStatus || "-", false, 0);
      currentY -= h1 + 10;
    }

    h1 = drawField("ABD'de Başka Akrabanız Var mı?", s(7).hasRelativeInUSA || "-", false, 0);
    currentY -= h1 + 10;

    if (s(7).hasRelativeInUSA === "YES" && Array.isArray(s(7).relatives) && s(7).relatives.length > 0) {
      s(7).relatives.forEach((rel, index) => {
        let r1 = drawField(`Akraba ${index + 1} - Ad Soyad`, rel.fullName || "-", false, 0);
        let r2 = drawField("Yakınlık Derecesi", rel.level || "-", false,0);
        currentY -= Math.max(r1, r2) + 8;

        r1 = drawField("ABD Statüsü", rel.status || "-", false, 0);
        currentY -= r1 + 10;
      });
    }

    h1 = drawField("Diğer Akraba Açıklaması", s(7).otherRelativeInUSA || "-", true, 0);
    currentY -= h1 + 10;

    drawFooter(currentPage, pageCount);

    // --- BÖLÜM 8: Eş ve Evlilik ---
    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
    drawHeader(currentPage);

    drawSection("8. BÖLÜM — EŞ VE EVLİLİK BİLGİLERİ");

    h1 = drawField("Eşin Adı Soyadı", s(8).spouseFullName || "-", false, 0);
    h2 = drawField("Eşin Kızlık Soyadı", s(8).wifeMaidenName || "-", false,0);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("Eşin Uyruğu", s(8).spouseNationality || "-", false, 0);
    h2 = drawField("Eşin Doğum Tarihi", s(8).spouseBirthDate ? toTRDate(s(8).spouseBirthDate) : "-", false,0);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField(
      "Eşin Doğum Yeri",
      `${s(8).spouseBirthPlace || "-"}${s(8).spouseBirthPlaceCountry ? " / " + s(8).spouseBirthPlaceCountry : ""}`,
      false,
      0
    );
    currentY -= h1 + 10;

    h1 = drawField("Eşin Adresi", s(8).spouseAddress || "-", true, 0);
    currentY -= h1 + 10;

    h1 = drawField("Farklı Adres", s(8).otherSpouseAddress || "-", true, 0);
    currentY -= h1 + 6;

    h1 = drawField(
      "Şehir / Ülke",
      `${s(8).otherSpouseAddressCity || "-"} / ${s(8).otherSpouseAddressCountry || "-"}`,
      false,
      0
    );
    h2 = drawField("Posta Kodu", s(8).otherSpouseAddressPostCode || "-", false,0);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("Evlilik Tarihi", s(8).marriageDate ? toTRDate(s(8).marriageDate) : "-", false, 0);
    currentY -= h1 + 12;

    h1 = drawField("Önceki Eşin Adı Soyadı", s(8).oldSpouseFullName || "-", false, 0);
    currentY -= h1 + 8;

    h1 = drawField("Önceki Evlilik Tarihi", s(8).oldMarriageDate ? toTRDate(s(8).oldMarriageDate) : "-", false, 0);
    h2 = drawField("Bitiş Tarihi", s(8).oldMarriageEndDate ? toTRDate(s(8).oldMarriageEndDate) : "-", false,0);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("Önceki Eşin Doğum Tarihi", s(8).oldSpouseBirthDate ? toTRDate(s(8).oldSpouseBirthDate) : "-", false, 0);
    h2 = drawField("Uyruğu", s(8).oldSpouseNationality || "-", false,0);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField(
      "Önceki Eşin Doğum Yeri",
      `${s(8).oldSpouseBirthPlace || "-"}${s(8).oldSpouseEndCountry ? " / " + s(8).oldSpouseEndCountry : ""}`,
      false,
      0
    );
    currentY -= h1 + 8;

    h1 = drawField("Önceki Evlilik Açıklaması", s(8).oldSpouseInfo || "-", true, 0);
    currentY -= h1 + 10;

    drawFooter(currentPage, pageCount);

    // --- BÖLÜM 9: Meslek, İş ve Eğitim ---
    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
    drawHeader(currentPage);

    drawSection("9. BÖLÜM — MESLEK, İŞ VE EĞİTİM BİLGİLERİ");

    h1 = drawField("Meslek", s(9).occupation || "-", false, 0);
    h2 = drawField("İş / Okul Adı", s(9).workOrSchoolName || "-", false,0);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField(
      "İş / Okul Adresi",
      `${s(9).workOrSchoolAddress || "-"} / ${s(9).workOrSchoolCity || "-"} / ${s(9).workOrSchoolCountry || "-"} / ${s(9).workOrSchoolPostCode || "-"}`,
      true,
      0
    );
    currentY -= h1 + 10;

    h1 = drawField("İş Telefonu", s(9).workOrSchoolPhone || "-", false, 0);
    h2 = drawField("Başlangıç Tarihi", s(9).workStartDate ? toTRDate(s(9).workStartDate) : "-", false,0);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("Aylık Gelir", s(9).monthlyIncome || "-", false, 0);
    h2 = drawField("İş Tanımı", s(9).jobDescription || "-", true,0);
    currentY -= Math.max(h1, h2) + 12;

    if (s(9).previousJobBoolean === "EVET" && Array.isArray(s(9).previousJobs)) {
      s(9).previousJobs.forEach((job, index) => {
        let j1 = drawField(`Önceki İş ${index + 1} - Firma`, job.companyName || "-", false, 0);
        let j2 = drawField("Pozisyon", job.position || "-", false,0);
        currentY -= Math.max(j1, j2) + 8;

        j1 = drawField(
          "Adres",
          `${job.previusWorkAddress || "-"} / ${job.previusWorkCity || "-"} / ${job.previusWorkCountry || "-"}`,
          true,
          0
        );
        currentY -= j1 + 6;

        j1 = drawField(
          "Çalışma Tarihleri",
          `${job.startDate ? toTRDate(job.startDate) : "-"} - ${job.endDate ? toTRDate(job.endDate) : "-"}`,
          false,
          0
        );
        currentY -= j1 + 10;
      });
    }

    drawFooter(currentPage, pageCount);

    // --- BÖLÜM 10: Diğer Bilgiler ---
    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
    drawHeader(currentPage);

    drawSection("10. BÖLÜM — DİĞER BİLGİLER");

    h1 = drawField("Konuşulan Diller", s(10).languages || "-", false, 0);
    h2 = drawField("Ziyaret Edilen Ülkeler", s(10).visitedCountries || "-", false,0);
    currentY -= Math.max(h1, h2) + 10;

    h1 = drawField("Askerlik Durumu", s(10).militaryStatus || "-", false, 0);
    currentY -= h1 + 10;

    if (s(10).militaryStatus === "YAPTI") {
      h1 = drawField("Askerlik Başlangıç Tarihi", s(10).militaryStartDate ? toTRDate(s(10).militaryStartDate) : "-", false, 0);
      h2 = drawField("Askerlik Bitiş Tarihi", s(10).militaryEndDate ? toTRDate(s(10).militaryEndDate) : "-", false,0);
      currentY -= Math.max(h1, h2) + 10;
    }

    if (s(10).militaryStatus === "MUAF") {
      h1 = drawField("Muafiyet Nedeni", s(10).exemptionReason || "-", true, 0);
      currentY -= h1 + 10;
    }

    if (s(10).militaryStatus === "YAPMADI") {
      h1 = drawField("Tecil Tarihi", s(10).defermentDate ? toTRDate(s(10).defermentDate) : "-", false, 0);
      currentY -= h1 + 10;
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
  const maxWidth = CONTENT_WIDTH / 3;   // sayfanın 1/3’ü
  const maxHeight = PAGE_HEIGHT / 3;

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

    // --- Text & HTML Body ---
// formData: gönderilen form verisi


// --- TEXT BODY ---
const textBody = `
ABD VİZE BAŞVURU (DS-160)

-- KİŞİSEL BİLGİLER --

Ad Soyad: ${s(1).fullName || "-"}
Cinsiyet: ${s(1).gender || "-"}
Medeni Durum: ${s(1).maritalStatus || "-"}

${
  s(1).maritalStatus === "EVLI"
    ? `Evlenmeden Önceki Soyadı: ${s(1).maidenName || "-"}`
    : ""
}

Doğum Tarihi: ${toTRDate(s(1).birthDate) || "-"}
Doğum Yeri: ${s(1).birthPlace || "-"}
Doğum Ülkesi: ${s(1).birthCountry || "-"}


-- VATANDAŞLIK / KİMLİK --

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

Diğer Uyruk Pasaport No: ${
  s(2).otherNationalityExist === "EVET" &&
  s(2).otherNationalityPassportNo &&
  s(2).otherNationalityPassportNo.trim() !== ""
    ? s(2).otherNationalityPassportNo
    : "-"
}

T.C. Kimlik No: ${
  s(2).tcId && s(2).tcId.trim() !== ""
    ? s(2).tcId
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


-- DİĞER ÜLKE OTURUM BİLGİLERİ --

Başka Ülkede Oturum Var mı?: ${
  s(2).otherSessionExist && s(2).otherSessionExist.trim() !== ""
    ? s(2).otherSessionExist
    : "-"
}

Oturum Ülkesi: ${
  s(2).otherSessionExist === "EVET" &&
  s(2).otherSessionExistCountry &&
  s(2).otherSessionExistCountry.trim() !== ""
    ? s(2).otherSessionExistCountry
    : "-"
}

Oturum Bilgisi: ${
  s(2).otherSessionExist === "EVET" &&
  s(2).otherSession &&
  s(2).otherSession.trim() !== ""
    ? s(2).otherSession
    : "-"
}



-- VİZE & SEYAHAT BİLGİLERİ --

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

ABD’de Kalınacak Adres: ${
  s(3).stayAddress && s(3).stayAddress.trim() !== ""
    ? s(3).stayAddress
    : "-"
}

Masrafları Kim Karşılıyor: ${
  s(3).whoPays && s(3).whoPays.trim() !== ""
    ? s(3).whoPays
    : "-"
}

${
  s(3).whoPays === "DIGER"
    ? `
İlişki Derecesi: ${s(3).relationDegree || "-"}
Masraf Sahibinin Adresi: ${s(3).payerAddress || "-"}
Masraf Sahibinin Telefonu: ${s(3).payerPhone || "-"}
Masraf Sahibinin E-Postası: ${s(3).payerMail || "-"}
`
    : ""
}

ABD’de İrtibat Kişi / Kurum: ${
  s(3).usContactInfo && s(3).usContactInfo.trim() !== ""
    ? s(3).usContactInfo
    : "-"
}

ABD’de Aile Üyesi Bilgisi: ${
  s(3).usRelativeInfo && s(3).usRelativeInfo.trim() !== ""
    ? s(3).usRelativeInfo
    : "-"
}


-- SEYAHAT GEÇMİŞİ --

Yalnız Seyahat: ${s(4).travelAlone || "-"}

${
  s(4).travelAlone === "HAYIR"
    ? `Diğer Yolcular: ${s(4).otherTraveler || "-"}`
    : ""
}

ABD’ye Daha Önce Gidildi mi: ${s(4).beenToUS || "-"}

${
  s(4).beenToUS === "EVET"
    ? `
ABD SEYAHAT GEÇMİŞİ:
${
  Array.isArray(s(4).travels) && s(4).travels.length > 0
    ? s(4).travels
        .slice(-5)
        .map(
          (travel, index) => `
${index + 1}. Seyahat
Gidiş Tarihi: ${travel.date ? toTRDate(travel.date) : "-"}
Kalış Süresi: ${travel.duration || "-"}`
        )
        .join("\n")
    : `
Son Ziyaret Tarihi: ${s(4).lastVisitDate ? toTRDate(s(4).lastVisitDate) : "-"}
Kalış Süresi: ${s(4).lastVisitDuration || "-"}`
}
`
    : ""
}

-- ABD VİZE GEÇMİŞİ --

Daha Önce ABD Vizesi Alındı mı: ${s(4).hadUSVisa || "-"}

${
  s(4).hadUSVisa === "EVET"
    ? `
Vize Tarihi: ${s(4).visaDate ? toTRDate(s(4).visaDate) : "-"}
Vize Numarası: ${s(4).visaNumber || "-"}`
    : ""
}

-- VİZE RED GEÇMİŞİ --

Vize Reddi: ${s(4).visaRefused || "-"}



-- PASAPORT & İLETİŞİM BİLGİLERİ --

Adres: ${s(5).homeAddress || "-"}

Telefon 1: ${s(5).phone1 || "-"}
Telefon 2: ${s(5).phone2 || "-"}
İş Telefonu: ${s(5).workPhone || "-"}

E-Posta: ${s(5).email || "-"}

Sosyal Medya Hesabı Var mı?: ${s(5).hasSocialMedia || "-"}

${
  s(5).hasSocialMedia === "EVET" &&
  Array.isArray(s(5).socialMediaAccounts) &&
  s(5).socialMediaAccounts.length > 0
    ? `
Sosyal Medya Hesapları:
${s(5).socialMediaAccounts
  .map(
    (acc, i) =>
      `- ${acc.platform || `Platform ${i + 1}`}: ${acc.username || "-"}`
  )
  .join("\n")}
`
    : ""
}

-- PASAPORT BİLGİLERİ --

Pasaport Türü: ${s(5).passportType || "-"}
Pasaport No: ${s(5).passportNumber || "-"}
Pasaportu Veren Makam: ${s(5).passportAuthority || "-"}

Pasaport Geçerlilik Tarihi: ${
  s(5).passportStart ? toTRDate(s(5).passportStart) : "-"
} / ${
  s(5).passportEnd ? toTRDate(s(5).passportEnd) : "-"
}

Kaybolan Pasaport Var mı?: ${s(5).lostPassportBoolean || "-"}

${
  s(5).lostPassportBoolean === "EVET"
    ? `
Kaybolan Pasaport No: ${s(5).lostPassportNumber || "-"}
Kayıp Pasaport Veriliş Ülkesi: ${s(5).lostPassportAuthorityCountry || "-"}
Kayıp Pasaport Açıklaması: ${s(5).lostPassportInfo || "-"}
`
    : ""
}



-- ABD’DE AKRABA VE ORGANİZASYON BİLGİLERİ --

ABD’de Akrabanız Var mı?: ${s(6).usaRelative || "-"}

${
  s(6).usaRelative === "EVET"
    ? `
Akrabanın Adı Soyadı: ${s(6).usaRelativeFullName || "-"}
Yakınlık Derecesi / Açıklama: ${s(6).usaRelativeInfo || "-"}

Adres: ${s(6).usaRelativeAddress || "-"}
Şehir: ${s(6).usaRelativeAddressCity || "-"}
Eyalet: ${s(6).usaRelativeAddressState || "-"}
Posta Kodu: ${s(6).usaRelativePostCode || "-"}

Telefon: ${s(6).usaRelativePhone || "-"}
E-Posta: ${s(6).usaRelativeEmail || "-"}
`
    : ""
}

ABD’de Bağlantılı Olduğunuz Bir Kurum Var mı?: ${s(6).organizationBoolean || "-"}

${
  s(6).organizationBoolean === "EVET"
    ? `
Kurum / Organizasyon Bilgisi: ${s(6).organizationInfo || "-"}

Adres: ${s(6).organizationAddress || "-"}
Şehir: ${s(6).organizationAddressCity || "-"}
Eyalet: ${s(6).organizationAddressState || "-"}
Posta Kodu: ${s(6).organizationPostCode || "-"}

Telefon: ${s(6).organizationPhone || "-"}
E-Posta: ${s(6).organizationEmail || "-"}
`
    : ""
}


-- ANNE, BABA VE ABD’DEKİ AKRABALAR --

Anne Adı Soyadı: ${s(7).motherFullName || "-"}
Anne Doğum Tarihi: ${s(7).motherBirthDate ? toTRDate(s(7).motherBirthDate) : "-"}

Baba Adı Soyadı: ${s(7).fatherFullName || "-"}
Baba Doğum Tarihi: ${s(7).fatherBirthDate ? toTRDate(s(7).fatherBirthDate) : "-"}

Anne ABD’de mi?: ${s(7).isMotherInUSA || "-"}
${
  s(7).isMotherInUSA === "EVET"
    ? `Annenin ABD Statüsü: ${s(7).isMotherUSAStatus || "-"}`
    : ""
}

Baba ABD’de mi?: ${s(7).isFatherInUSA || "-"}
${
  s(7).isFatherInUSA === "EVET"
    ? `Babanın ABD Statüsü: ${s(7).isFatherUSAStatus || "-"}`
    : ""
}

ABD’de Başka Akraba Var mı?: ${s(7).hasRelativeInUSA || "-"}

${
  s(7).hasRelativeInUSA === "YES" &&
  Array.isArray(s(7).relatives) &&
  s(7).relatives.length > 0
    ? `
ABD’DEKİ DİĞER AKRABALAR:
${s(7).relatives
  .map(
    (rel, i) => `
${i + 1}. Akraba
Ad Soyad: ${rel.fullName || "-"}
Yakınlık Derecesi: ${rel.level || "-"}
ABD Statüsü: ${rel.status || "-"}`
  )
  .join("\n")}
`
    : ""
}

Diğer Akraba Açıklaması: ${s(7).otherRelativeInUSA || "-"}

-- EŞ VE EVLİLİK BİLGİLERİ --

Eşin Adı Soyadı: ${s(8).spouseFullName || "-"}
Eşin Kızlık Soyadı: ${s(8).wifeMaidenName || "-"}
Eşin Uyruğu: ${s(8).spouseNationality || "-"}

Eşin Doğum Yeri: ${s(8).spouseBirthPlace || "-"}${
  s(8).spouseBirthPlaceCountry
    ? " / " + s(8).spouseBirthPlaceCountry
    : ""
}

Eşin Doğum Tarihi: ${
  s(8).spouseBirthDate
    ? toTRDate(s(8).spouseBirthDate)
    : "-"
}

Eşin Adresi: ${s(8).spouseAddress || "-"}

Farklı Adres: ${s(8).otherSpouseAddress || "-"}
Şehir / Ülke: ${s(8).otherSpouseAddressCity || "-"} / ${
  s(8).otherSpouseAddressCountry || "-"
}
Posta Kodu: ${s(8).otherSpouseAddressPostCode || "-"}

Evlilik Tarihi: ${
  s(8).marriageDate
    ? toTRDate(s(8).marriageDate)
    : "-"
}

-- ÖNCEKİ EVLİLİK --

Önceki Eşin Adı Soyadı: ${s(8).oldSpouseFullName || "-"}

Önceki Evlilik Tarihi: ${
  s(8).oldMarriageDate
    ? toTRDate(s(8).oldMarriageDate)
    : "-"
}

Önceki Evlilik Bitiş Tarihi: ${
  s(8).oldMarriageEndDate
    ? toTRDate(s(8).oldMarriageEndDate)
    : "-"
}

Önceki Eşin Doğum Tarihi: ${
  s(8).oldSpouseBirthDate
    ? toTRDate(s(8).oldSpouseBirthDate)
    : "-"
}

Önceki Eşin Uyruğu: ${s(8).oldSpouseNationality || "-"}

Önceki Eşin Doğum Yeri: ${s(8).oldSpouseBirthPlace || "-"}${
  s(8).oldSpouseEndCountry
    ? " / " + s(8).oldSpouseEndCountry
    : ""
}

Önceki Evlilik Açıklaması: ${s(8).oldSpouseInfo || "-"}
-- MESLEK, İŞ VE EĞİTİM BİLGİLERİ --

Meslek: ${s(9).occupation || "-"}
İş / Okul Adı: ${s(9).workOrSchoolName || "-"}

Adres:
${s(9).workOrSchoolAddress || "-"}
${s(9).workOrSchoolCity || "-"} / ${s(9).workOrSchoolCountry || "-"}
${s(9).workOrSchoolPostCode || "-"}

İş Telefonu: ${s(9).workOrSchoolPhone || "-"}

Başlangıç Tarihi: ${
  s(9).workStartDate ? toTRDate(s(9).workStartDate) : "-"
}

Aylık Gelir: ${s(9).monthlyIncome || "-"}
İş Tanımı: ${s(9).jobDescription || "-"}

-- ÖNCEKİ İŞLER --

${
  s(9).previousJobBoolean === "EVET" &&
  Array.isArray(s(9).previousJobs) &&
  s(9).previousJobs.length > 0
    ? s(9).previousJobs
        .map(
          (job, i) => `
${i + 1}. Firma: ${job.companyName || "-"}
Pozisyon: ${job.position || "-"}
Adres: ${job.previusWorkAddress || "-"}, ${job.previusWorkCity || "-"}, ${job.previusWorkCountry || "-"}
Telefon: ${job.previusWorkPhone || "-"}
Yönetici: ${job.previusSupervisorFullname || "-"}
${job.startDate ? toTRDate(job.startDate) : "-"} - ${job.endDate ? toTRDate(job.endDate) : "-"}`
        )
        .join("\n\n")
    : "-"
}
-- DİĞER BİLGİLER --

Konuşulan Diller: ${s(10).languages || "-"}

Ziyaret Edilen Ülkeler: ${s(10).visitedCountries || "-"}

Askerlik Durumu: ${s(10).militaryStatus || "-"}

${
  s(10).militaryStatus === "YAPTI"
    ? `
Askerlik Başlangıç Tarihi: ${
  s(10).militaryStartDate
    ? toTRDate(s(10).militaryStartDate)
    : "-"
}
Askerlik Bitiş Tarihi: ${
  s(10).militaryEndDate
    ? toTRDate(s(10).militaryEndDate)
    : "-"
}
`
    : ""
}

${
  s(10).militaryStatus === "MUAF"
    ? `Muafiyet Nedeni: ${s(10).exemptionReason || "-"}`
    : ""
}

${
  s(10).militaryStatus === "YAPMADI"
    ? `Tecil Tarihi: ${
        s(10).defermentDate
          ? toTRDate(s(10).defermentDate)
          : "-"
      }`
    : ""
}

Ek Bilgiler: ${s(10).additionalInfo || "-"}

Başvuru Tarihi: ${new Date().toLocaleString("tr-TR")}
`.trim();


// --- HTML BODY ---
const htmlBody = `
<h2>ABD Vize Başvuru (DS-160)</h2>

<h3>Kişisel Bilgiler</h3>
<table border="1" cellspacing="0" cellpadding="5"
       style="border-collapse: collapse; width:100%; background-color:#f9f9f9;">
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

    ${
      s(1).maritalStatus === "EVLI"
        ? `
    <tr>
      <th style="background-color:#e0e0e0;">Evlenmeden Önceki Soyadı</th>
      <td>${s(1).maidenName || "-"}</td>
    </tr>
    `
        : ""
    }

    <tr>
      <th style="background-color:#e0e0e0;">Doğum Tarihi</th>
      <td>${toTRDate(s(1).birthDate) || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Doğum Yeri</th>
      <td>${s(1).birthPlace || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Doğum Ülkesi</th>
      <td>${s(1).birthCountry || "-"}</td>
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
      <th style="background-color:#e0e0e0;">Diğer Uyruk Pasaport No</th>
      <td>
        ${s(2).otherNationalityExist === "EVET" &&
        s(2).otherNationalityPassportNo &&
        s(2).otherNationalityPassportNo.trim() !== ""
          ? s(2).otherNationalityPassportNo
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
      <th style="background-color:#e0e0e0;">ABD Sosyal Güvenlik No (SSN)</th>
      <td>
        ${s(2).ssn && s(2).ssn.trim() !== ""
          ? s(2).ssn
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">ABD Vergi No (VKN)</th>
      <td>
        ${s(2).vkn && s(2).vkn.trim() !== ""
          ? s(2).vkn
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Başka Ülkede Oturum Var mı?</th>
      <td>
        ${s(2).otherSessionExist && s(2).otherSessionExist.trim() !== ""
          ? s(2).otherSessionExist
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Oturum Ülkesi</th>
      <td>
        ${s(2).otherSessionExist === "EVET" &&
        s(2).otherSessionExistCountry &&
        s(2).otherSessionExistCountry.trim() !== ""
          ? s(2).otherSessionExistCountry
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Oturum Bilgisi</th>
      <td>
        ${s(2).otherSessionExist === "EVET" &&
        s(2).otherSession &&
        s(2).otherSession.trim() !== ""
          ? s(2).otherSession
          : "-"}
      </td>
    </tr>
  </tbody>
</table>




<h3>Vize & Seyahat Detayları</h3>

<table
  border="1"
  cellspacing="0"
  cellpadding="5"
  style="border-collapse: collapse; width:100%;"
>
  <tbody>
    <tr>
      <th style="background-color:#e0e0e0;">Vize Türü</th>
      <td>${s(3).visaType || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">ABD’ye Kesin Gidiş Tarihi</th>
      <td>${s(3).exactArrival ? toTRDate(s(3).exactArrival) : "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Tahmini Gidiş Tarihi</th>
      <td>${s(3).estimatedArrival ? toTRDate(s(3).estimatedArrival) : "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Kalış Süresi</th>
      <td>${s(3).stayDuration || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">ABD’de Kalınacak Adres</th>
      <td>${s(3).stayAddress || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Masrafları Kim Karşılıyor</th>
      <td>${s(3).whoPays || "-"}</td>
    </tr>

    ${
      s(3).whoPays === "DIGER"
        ? `
    <tr>
      <th style="background-color:#e0e0e0;">İlişki Derecesi</th>
      <td>${s(3).relationDegree || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Masraf Sahibinin Adresi</th>
      <td>${s(3).payerAddress || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Masraf Sahibinin Telefonu</th>
      <td>${s(3).payerPhone || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Masraf Sahibinin E-Postası</th>
      <td>${s(3).payerMail || "-"}</td>
    </tr>
    `
        : ""
    }

    <tr>
      <th style="background-color:#e0e0e0;">ABD’de İrtibat Kişi / Kurum</th>
      <td>${s(3).usContactInfo || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">ABD’de Aile Üyesi Bilgisi</th>
      <td>${s(3).usRelativeInfo || "-"}</td>
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
      <td>${s(4).travelAlone || "-"}</td>
    </tr>

    ${
      s(4).travelAlone === "HAYIR"
        ? `
    <tr>
      <th style="background-color:#e0e0e0;">Diğer Yolcular</th>
      <td>${s(4).otherTraveler || "-"}</td>
    </tr>
    `
        : ""
    }

    <tr>
      <th style="background-color:#e0e0e0;">ABD’ye Daha Önce Gidildi mi</th>
      <td>${s(4).beenToUS || "-"}</td>
    </tr>

    ${
      s(4).beenToUS === "EVET" &&
      Array.isArray(s(4).travels) &&
      s(4).travels.length > 0
        ? `
    <tr>
      <th style="background-color:#e0e0e0;">Son Ziyaret Tarihi</th>
      <td>${s(4).travels[0].date ? toTRDate(s(4).travels[0].date) : "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Ziyaret Süresi</th>
      <td>${s(4).travels[0].duration || "-"}</td>
    </tr>
    `
        : ""
    }

    <tr>
      <th style="background-color:#e0e0e0;">Daha Önce ABD Vizesi Alındı mı</th>
      <td>${s(4).hadUSVisa || "-"}</td>
    </tr>

    ${
      s(4).hadUSVisa === "EVET"
        ? `
    <tr>
      <th style="background-color:#e0e0e0;">Vize Tarihi</th>
      <td>${s(4).visaDate ? toTRDate(s(4).visaDate) : "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Vize Numarası</th>
      <td>${s(4).visaNumber || "-"}</td>
    </tr>
    `
        : ""
    }

    <tr>
      <th style="background-color:#e0e0e0;">Vize Reddi</th>
      <td>${s(4).visaRefused || "-"}</td>
    </tr>
  </tbody>
</table>



<h3>Pasaport & İletişim Bilgileri</h3>

<table
  border="1"
  cellspacing="0"
  cellpadding="5"
  style="border-collapse: collapse; width:100%;"
>
  <tbody>
    <tr>
      <th style="background-color:#e0e0e0;">Adres</th>
      <td>${s(5).homeAddress || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Telefon 1</th>
      <td>${s(5).phone1 || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Telefon 2</th>
      <td>${s(5).phone2 || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">İş Telefonu</th>
      <td>${s(5).workPhone || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">E-Posta</th>
      <td>${s(5).email || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Sosyal Medya Hesabı Var mı?</th>
      <td>${s(5).hasSocialMedia || "-"}</td>
    </tr>

    ${
      s(5).hasSocialMedia === "EVET" &&
      Array.isArray(s(5).socialMediaAccounts) &&
      s(5).socialMediaAccounts.length > 0
        ? `
    <tr>
      <th style="background-color:#e0e0e0;">Sosyal Medya Hesapları</th>
      <td>
        ${s(5).socialMediaAccounts
          .map(
            (acc, i) =>
              `${acc.platform || `Platform ${i + 1}`}: ${acc.username || "-"}`
          )
          .join("<br/>")}
      </td>
    </tr>
    `
        : ""
    }

    <tr>
      <th style="background-color:#e0e0e0;">Pasaport Türü</th>
      <td>${s(5).passportType || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Pasaport No</th>
      <td>${s(5).passportNumber || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Pasaportu Veren Makam</th>
      <td>${s(5).passportAuthority || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Pasaport Geçerlilik Tarihi</th>
      <td>
        ${s(5).passportStart ? toTRDate(s(5).passportStart) : "-"}
        /
        ${s(5).passportEnd ? toTRDate(s(5).passportEnd) : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Kaybolan Pasaport Var mı?</th>
      <td>${s(5).lostPassportBoolean || "-"}</td>
    </tr>

    ${
      s(5).lostPassportBoolean === "EVET"
        ? `
    <tr>
      <th style="background-color:#e0e0e0;">Kaybolan Pasaport No</th>
      <td>${s(5).lostPassportNumber || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Kayıp Pasaport Veriliş Ülkesi</th>
      <td>${s(5).lostPassportAuthorityCountry || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Kayıp Pasaport Açıklaması</th>
      <td>${s(5).lostPassportInfo || "-"}</td>
    </tr>
    `
        : ""
    }
  </tbody>
</table>



<h3>ABD’de Akraba ve Organizasyon Bilgileri</h3>

<table
  border="1"
  cellspacing="0"
  cellpadding="5"
  style="border-collapse: collapse; width:100%;"
>
  <tbody>
    <!-- ABD AKRABA -->
    <tr>
      <th style="background-color:#e0e0e0;">ABD’de Akraba Var mı?</th>
      <td>${s(6).usaRelative || "-"}</td>
    </tr>

    ${
      s(6).usaRelative === "EVET"
        ? `
    <tr>
      <th style="background-color:#e0e0e0;">Akrabanın Adı Soyadı</th>
      <td>${s(6).usaRelativeFullName || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Yakınlık / Açıklama</th>
      <td>${s(6).usaRelativeInfo || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Adres</th>
      <td>${s(6).usaRelativeAddress || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Şehir / Eyalet</th>
      <td>
        ${s(6).usaRelativeAddressCity || "-"} /
        ${s(6).usaRelativeAddressState || "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Posta Kodu</th>
      <td>${s(6).usaRelativePostCode || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Telefon</th>
      <td>${s(6).usaRelativePhone || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">E-Posta</th>
      <td>${s(6).usaRelativeEmail || "-"}</td>
    </tr>
    `
        : ""
    }

    <!-- ORGANİZASYON -->
    <tr>
      <th style="background-color:#e0e0e0;">
        ABD’de Bağlantılı Kurum Var mı?
      </th>
      <td>${s(6).organizationBoolean || "-"}</td>
    </tr>

    ${
      s(6).organizationBoolean === "EVET"
        ? `
    <tr>
      <th style="background-color:#e0e0e0;">Kurum / Organizasyon</th>
      <td>${s(6).organizationInfo || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Adres</th>
      <td>${s(6).organizationAddress || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Şehir / Eyalet</th>
      <td>
        ${s(6).organizationAddressCity || "-"} /
        ${s(6).organizationAddressState || "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Posta Kodu</th>
      <td>${s(6).organizationPostCode || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Telefon</th>
      <td>${s(6).organizationPhone || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">E-Posta</th>
      <td>${s(6).organizationEmail || "-"}</td>
    </tr>
    `
        : ""
    }
  </tbody>
</table>


<h3>Anne, Baba ve ABD’deki Akrabalar</h3>

<table
  border="1"
  cellspacing="0"
  cellpadding="5"
  style="border-collapse: collapse; width:100%;"
>
  <tbody>
    <!-- Anne Bilgileri -->
    <tr>
      <th style="background-color:#e0e0e0;">Anne Adı Soyadı</th>
      <td>${s(7).motherFullName || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Anne Doğum Tarihi</th>
      <td>${s(7).motherBirthDate ? toTRDate(s(7).motherBirthDate) : "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Anne ABD’de mi?</th>
      <td>${s(7).isMotherInUSA || "-"}</td>
    </tr>

    ${
      s(7).isMotherInUSA === "EVET"
        ? `
    <tr>
      <th style="background-color:#e0e0e0;">Annenin ABD Statüsü</th>
      <td>${s(7).isMotherUSAStatus || "-"}</td>
    </tr>
    `
        : ""
    }

    <!-- Baba Bilgileri -->
    <tr>
      <th style="background-color:#e0e0e0;">Baba Adı Soyadı</th>
      <td>${s(7).fatherFullName || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Baba Doğum Tarihi</th>
      <td>${s(7).fatherBirthDate ? toTRDate(s(7).fatherBirthDate) : "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Baba ABD’de mi?</th>
      <td>${s(7).isFatherInUSA || "-"}</td>
    </tr>

    ${
      s(7).isFatherInUSA === "EVET"
        ? `
    <tr>
      <th style="background-color:#e0e0e0;">Babanın ABD Statüsü</th>
      <td>${s(7).isFatherUSAStatus || "-"}</td>
    </tr>
    `
        : ""
    }

    <!-- Diğer Akrabalar -->
    <tr>
      <th style="background-color:#e0e0e0;">ABD’de Başka Akraba Var mı?</th>
      <td>${s(7).hasRelativeInUSA || "-"}</td>
    </tr>

    ${
      s(7).hasRelativeInUSA === "YES" &&
      Array.isArray(s(7).relatives) &&
      s(7).relatives.length > 0
        ? `
    <tr>
      <th style="background-color:#e0e0e0;">ABD’deki Akrabalar</th>
      <td>
        ${s(7).relatives
          .map(
            (rel, i) => `
          <div style="margin-bottom:8px;">
            <strong>${i + 1}.</strong><br/>
            Ad Soyad: ${rel.fullName || "-"}<br/>
            Yakınlık Derecesi: ${rel.level || "-"}<br/>
            ABD Statüsü: ${rel.status || "-"}
          </div>
        `
          )
          .join("")}
      </td>
    </tr>
    `
        : ""
    }

    <tr>
      <th style="background-color:#e0e0e0;">Diğer Akraba Açıklaması</th>
      <td>${s(7).otherRelativeInUSA || "-"}</td>
    </tr>
  </tbody>
</table>
<h3>Eş ve Evlilik Bilgileri</h3>

<table
  border="1"
  cellspacing="0"
  cellpadding="5"
  style="border-collapse: collapse; width:100%;"
>
  <tbody>
    <!-- Mevcut Eş Bilgileri -->
    <tr>
      <th style="background-color:#e0e0e0;">Eşin Adı Soyadı</th>
      <td>${s(8).spouseFullName || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Eşin Kızlık Soyadı</th>
      <td>${s(8).wifeMaidenName || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Eşin Uyruğu</th>
      <td>${s(8).spouseNationality || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Eşin Doğum Yeri</th>
      <td>
        ${s(8).spouseBirthPlace || "-"}
        ${s(8).spouseBirthPlaceCountry
          ? ` / ${s(8).spouseBirthPlaceCountry}`
          : ""}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Eşin Doğum Tarihi</th>
      <td>
        ${s(8).spouseBirthDate
          ? toTRDate(s(8).spouseBirthDate)
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Eşin Adresi</th>
      <td>${s(8).spouseAddress || "-"}</td>
    </tr>

    <!-- Farklı Adres -->
    <tr>
      <th style="background-color:#e0e0e0;">Farklı Adres (Varsa)</th>
      <td>
        ${s(8).otherSpouseAddress || "-"}
        ${
          s(8).otherSpouseAddressCity || s(8).otherSpouseAddressCountry
            ? `<br/>
               ${s(8).otherSpouseAddressCity || "-"} / ${
                 s(8).otherSpouseAddressCountry || "-"
               }`
            : ""
        }
        ${
          s(8).otherSpouseAddressPostCode
            ? `<br/>Posta Kodu: ${s(8).otherSpouseAddressPostCode}`
            : ""
        }
      </td>
    </tr>

    <!-- Mevcut Evlilik -->
    <tr>
      <th style="background-color:#e0e0e0;">Evlilik Tarihi</th>
      <td>
        ${s(8).marriageDate
          ? toTRDate(s(8).marriageDate)
          : "-"}
      </td>
    </tr>

    <!-- Önceki Evlilik -->
    <tr>
      <th style="background-color:#e0e0e0;">Önceki Eşin Adı Soyadı</th>
      <td>${s(8).oldSpouseFullName || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Önceki Evlilik Tarihi</th>
      <td>
        ${s(8).oldMarriageDate
          ? toTRDate(s(8).oldMarriageDate)
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Önceki Evlilik Bitiş Tarihi</th>
      <td>
        ${s(8).oldMarriageEndDate
          ? toTRDate(s(8).oldMarriageEndDate)
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Önceki Eşin Doğum Tarihi</th>
      <td>
        ${s(8).oldSpouseBirthDate
          ? toTRDate(s(8).oldSpouseBirthDate)
          : "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Önceki Eşin Uyruğu</th>
      <td>${s(8).oldSpouseNationality || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Önceki Eşin Doğum Yeri</th>
      <td>
        ${s(8).oldSpouseBirthPlace || "-"}
        ${s(8).oldSpouseEndCountry
          ? ` / ${s(8).oldSpouseEndCountry}`
          : ""}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Önceki Evlilik Açıklaması</th>
      <td>${s(8).oldSpouseInfo || "-"}</td>
    </tr>
  </tbody>
</table>
<h3>Meslek, İş ve Eğitim Bilgileri</h3>

<table
  border="1"
  cellspacing="0"
  cellpadding="5"
  style="border-collapse: collapse; width:100%;"
>
  <tbody>
    <tr>
      <th style="background-color:#e0e0e0;">Meslek</th>
      <td>${s(9).occupation || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">İş / Okul Adı</th>
      <td>${s(9).workOrSchoolName || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">İş / Okul Adresi</th>
      <td>
        ${s(9).workOrSchoolAddress || "-"}<br/>
        ${s(9).workOrSchoolCity || "-"} / ${s(9).workOrSchoolCountry || "-"}<br/>
        ${s(9).workOrSchoolPostCode || "-"}
      </td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">İş Telefonu</th>
      <td>${s(9).workOrSchoolPhone || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Başlangıç Tarihi</th>
      <td>${s(9).workStartDate ? toTRDate(s(9).workStartDate) : "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Aylık Gelir</th>
      <td>${s(9).monthlyIncome || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">İş Tanımı</th>
      <td>${s(9).jobDescription || "-"}</td>
    </tr>

    <!-- ÖNCEKİ İŞLER -->
    <tr>
      <th style="background-color:#e0e0e0;">Önceki İşler</th>
      <td>
        ${
          s(9).previousJobBoolean === "EVET" &&
          Array.isArray(s(9).previousJobs) &&
          s(9).previousJobs.length > 0
            ? s(9).previousJobs
                .map(
                  (job, i) => `
                  <div style="margin-bottom:8px;">
                    <strong>${i + 1}.</strong><br/>
                    Firma: ${job.companyName || "-"}<br/>
                    Pozisyon: ${job.position || "-"}<br/>
                    Adres: ${job.previusWorkAddress || "-"},
                    ${job.previusWorkCity || "-"},
                    ${job.previusWorkCountry || "-"}<br/>
                    Telefon: ${job.previusWorkPhone || "-"}<br/>
                    Yönetici: ${job.previusSupervisorFullname || "-"}<br/>
                    ${job.startDate ? toTRDate(job.startDate) : "-"} -
                    ${job.endDate ? toTRDate(job.endDate) : "-"}
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
      <td>${s(10).languages || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Ziyaret Edilen Ülkeler</th>
      <td>${s(10).visitedCountries || "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Askerlik Durumu</th>
      <td>${s(10).militaryStatus || "-"}</td>
    </tr>

    ${
      s(10).militaryStatus === "YAPTI"
        ? `
    <tr>
      <th style="background-color:#e0e0e0;">Askerlik Başlangıç Tarihi</th>
      <td>${s(10).militaryStartDate ? toTRDate(s(10).militaryStartDate) : "-"}</td>
    </tr>

    <tr>
      <th style="background-color:#e0e0e0;">Askerlik Bitiş Tarihi</th>
      <td>${s(10).militaryEndDate ? toTRDate(s(10).militaryEndDate) : "-"}</td>
    </tr>
    `
        : ""
    }

    ${
      s(10).militaryStatus === "MUAF"
        ? `
    <tr>
      <th style="background-color:#e0e0e0;">Muafiyet Nedeni</th>
      <td>${s(10).exemptionReason || "-"}</td>
    </tr>
    `
        : ""
    }

    ${
      s(10).militaryStatus === "YAPMADI"
        ? `
    <tr>
      <th style="background-color:#e0e0e0;">Tecil Tarihi</th>
      <td>${s(10).defermentDate ? toTRDate(s(10).defermentDate) : "-"}</td>
    </tr>
    `
        : ""
    }

    <tr>
      <th style="background-color:#e0e0e0;">Ek Bilgiler</th>
      <td>${s(10).additionalInfo || "-"}</td>
    </tr>
  </tbody>
</table>


${files.passportFile ? `
  <h4>Pasaport Fotoğrafı</h4>
  <img src="cid:passportPhoto" style="max-width:220px;border-radius:6px;"/>
` : ""}

${files.photoFile ? `
  <h4>Vesikalık</h4>
  <img src="cid:profilePhoto" style="max-width:220px;border-radius:6px;"/>
` : ""}
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