import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import sharp from "sharp";

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
  page.drawText("SCHENGEN VİZE BAŞVURU FORMU BILGI FISI", {
    x: PAGE_WIDTH - MARGIN - boldFont.widthOfTextAtSize("SCHENGEN VİZE BAŞVURU FORMU BILGI FISI", 10),
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
   // 📌 1. BÖLÜM – KİŞİSEL BİLGİLER
drawSection("1. KİŞİSEL BİLGİLER");

// Ad Soyad & Cinsiyet
let h1 = drawField("Ad Soyad", s(1).fullName || "-", false, 0);
let h2 = drawField("Cinsiyet", s(1).gender || "-", false, CONTENT_WIDTH/2);
currentY -= Math.max(h1, h2) + 10;

// Medeni Durum & Kızlık Soyadı
h1 = drawField("Medeni Durum", s(1).maritalStatus || "-", false, 0);

if (s(1).maritalStatus === "EVLİ" && s(1).maidenName) {
  h2 = drawField("Kızlık Soyadı", s(1).maidenName || "-", false, CONTENT_WIDTH/2);
} else {
  h2 = drawField("Kızlık Soyadı", "-", false, CONTENT_WIDTH/2);
}

currentY -= Math.max(h1, h2) + 10;

// Doğum Tarihi & Doğum Yeri
h1 = drawField("Doğum Tarihi", s(1).birthDate || "-", false, 0);
h2 = drawField("Doğum Yeri", s(1).birthPlace || "-", false, CONTENT_WIDTH/2);
currentY -= Math.max(h1, h2) + 10;

    // --- Step 2: Aile ---
  // 2. PASAPORT BİLGİLERİ
drawSection("2. PASAPORT BİLGİLERİ");

// İlk satır: Pasaport No + Veriliş Tarihi
h1 = drawField("Pasaport No", s(2).passport_number || "", false, 0);
h2 = drawField("Veriliş Tarihi", s(2).Passport_start_date || "", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// İkinci satır: Bitiş Tarihi + Veren Makam
h1 = drawField("Bitiş Tarihi", s(2).Passport_end_date || "", false, 0);
h2 = drawField("Veren Makam", s(2).passport_issuing_authority || "", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;


    // --- Step 3: Pasaport ---
   // 3. ŞİRKET BİLGİLERİ
drawSection("3. ŞİRKET BİLGİLERİ");

// 1. satır → Sektör + Şirket Türü
h1 = drawField("Çalışma Durumu", s(3).boolean_work || "", false, 0);
h2 = drawField("İşe Giriş Tarihi", s(3).work_start_date || "", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;
h1 = drawField("Sektör", s(3).sector || "", false, 0);
h2 = drawField("Şirket Türü", s(3).company_type || "", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// 2. satır → Şirket Adı + Statü
h1 = drawField("Şirket Adı", s(3).company_name || "", false, 0);
h2 = drawField("Statüsü", s(3).company_statu || "", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// 3. satır → Şirket Adresi (tek kolon, uzun olabilir)
h1 = drawField("Şirket Adresi", s(3).company_address || "", true, 0);
currentY -= h1 + 10;

// 4. satır → Telefon + Unvanınız
h1 = drawField("Telefon", s(3).company_phone_number || "", false, 0);
h2 = drawField("Unvanınız", s(3).your_title || "", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// Sayfa footer
drawFooter(currentPage, pageCount);


  // --- BÖLÜM 4: Davet Bilgileri ---
currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
pageCount++;
currentY = PAGE_HEIGHT - MARGIN;
await drawHeader(currentPage);

drawSection("4. DAVET BİLGİLERİ");

// Davet Var mı? (Evet / Hayır)
h1 = drawField("Davet Durumu", s(4).boolean_invitation || "", true, 0);
h2 = drawField("Davetiye Türü", s(4).invitation_type || "", false, CONTENT_WIDTH / 2);
 currentY -= Math.max(h1, h2) + 10;

// Eğer Davet varsa alanlar gösterilsin
if ((String(s(4).boolean_invitation).toUpperCase() === "EVET")&& (String(s(4).invitation_type).toUpperCase() === "BIREYSEL") ) {

    // 1. Satır: Davet Eden Kişi Adı + Doğum Tarihi
    h1 = drawField("Davet Eden Kişi", s(4).invitation_sender_fullname || "", false, 0);
    h2 = drawField("Doğum Tarihi", s(4).invitation_sender_birthdate || "", false, CONTENT_WIDTH / 2);
    currentY -= Math.max(h1, h2) + 10;

    // 2. Satır: Telefon + E-posta
    h1 = drawField("Telefon", s(4).invitation_sender_phone_number || "", false, 0);
    h2 = drawField("E-posta", s(4).invitation_sender_email || "", false, CONTENT_WIDTH / 2);
    currentY -= Math.max(h1, h2) + 10;

    // 3. Satır: T.C. Kimlik No (tek satır)
    h1 = drawField("T.C. Kimlik No", s(4).invitation_sender_tc_id || "", false, 0);
    currentY -= h1 + 10;

    // 4. Satır: Adres (çok satırlı)
    h1 = drawField("Adres", s(4).invitation_sender_home_address || "", true, 0);
    currentY -= h1 + 20;
}
if ((String(s(4).boolean_invitation).toUpperCase() === "EVET")&& (String(s(4).invitation_type).toUpperCase() === "SIRKET") ) {

    // 1. Satır: Davet Eden Kişi Adı + Doğum Tarihi
    h1 = drawField("Davet Eden Şirket Adı", s(4).invitation_company_fullname || "", false, 0);
    h2 = drawField("Şirket Adresi", s(4).invitation_company_address || "", false, CONTENT_WIDTH / 2);
    currentY -= Math.max(h1, h2) + 10;

    // 2. Satır: Telefon + E-posta
    h1 = drawField("Şirket Telefon", s(4).invitation_company_phone_number || "", false, 0);
    h2 = drawField("Şirket E-posta", s(4).invitation_company_email || "", false, CONTENT_WIDTH / 2);
    currentY -= Math.max(h1, h2) + 10;


}
// Footer
drawFooter(currentPage, pageCount);


    // --- BÖLÜM 5: Schengen ve Parmak İzi Bilgileri ---
;

drawSection("5. SCHENGEN & PARMAK İZİ BİLGİLERİ");

// 1. Satır: Gidiş – Dönüş
h1 = drawField("Gidiş Tarihi", s(5).travel_start_date || "", false, 0);
h2 = drawField("Dönüş Tarihi", s(5).travel_end_date || "", false, CONTENT_WIDTH / 2);
currentY -= Math.max(h1, h2) + 10;

// 2. Satır: Schengen Vizesi Var mı?
h1 = drawField("Schengen Vizesi", s(5).boolean_schengen_visa || "", true, 0);
currentY -= h1 + 10;

// Eğer Schengen vizesi varsa ek bilgiler
if (String(s(5).boolean_schengen_visa).toUpperCase() === "EVET") {
    
    // Vize Etiket Numarası
    h1 = drawField("Etiket Numarası", s(5).schengen_visa_label_number || "", false, 0);
    currentY -= h1 + 10;

    // Parmak izi alındı mı?
    h1 = drawField("Parmak İzi Alındı mı?", s(5).fingerprint_taken || "", false, 0);
    currentY -= h1 + 10;

    // Parmak izi tarihi
    if (String(s(5).fingerprint_taken).toUpperCase() === "EVET") {
        h1 = drawField("Parmak İzi Tarihi", s(5).fingerprint_taken_date || "", false, 0);
        currentY -= h1 + 10;
    }
    h1 = drawField("Yurt Dışına Çıktı  mı?", s(5).boolean_abroad_country || "", false, 0);
    currentY -= h1 + 10;
     if(s(5).abroad_country && s(5).abroad_country.length>0) {
      checkSpace(50);
      currentY -=10;
      currentPage.drawText("Seyahat Geçmişi",{x:MARGIN,y:currentY,size:10,font:boldFont,color:COLORS.primary});
      currentY -=15;
      s(5).abroad_country.forEach(item=>{
        const text = `• ${item.country || '-'} (${item.start || '-'} / ${item.end || '-'})`;
        checkSpace(20);
        currentPage.drawText(text,{x:MARGIN+10,y:currentY,size:9,font:regularFont,color:COLORS.textMain});
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

const textBody = `
SCHENGEN VİZE BAŞVURU

-- Kişisel Bilgiler --
Ad Soyad: ${f.steps[1].fullName || "-"}
TC: ${f.steps[1].tcId || "-"}
Cinsiyet: ${f.steps[1].gender || "-"}
Medeni Durum: ${f.steps[1].maritalStatus || "-"}
Doğum Tarihi: ${f.steps[1].birthDate || "-"}
Doğum Yeri: ${f.steps[1].birthPlace || "-"}
Telefon: ${f.steps[1].phone_number || "-"}
Email: ${f.steps[1].email || "-"}
Adres: ${f.steps[1].home_address || "-"}
Posta Kodu: ${f.steps[1].post_code || "-"}

-- Pasaport Bilgileri --
Numara: ${f.steps[2].passport_number || "-"}
Başlangıç / Bitiş: ${f.steps[2].Passport_start_date || "-"} / ${f.steps[2].Passport_end_date || "-"}
Veriliş: ${f.steps[2].passport_issuing_authority || "-"}

-- İş / Şirket Bilgileri --
Çalışma Durumu: ${f.steps[3].boolean_work || "-"}
İşe Giriş Tarihi: ${f.steps[3].work_start_date || "-"}
Sektör: ${f.steps[3].sector || "-"}
Şirket Türü: ${f.steps[3].company_type || "-"}
Şirket Adı: ${f.steps[3].company_name || "-"}
Durum: ${f.steps[3].company_statu || "-"}
Adres: ${f.steps[3].company_address || "-"}
Telefon: ${f.steps[3].company_phone_number || "-"}
Pozisyon: ${f.steps[3].your_title || "-"}

-- Davet / Finansal Durum --
Davetiye Var mı: ${f.steps[4].boolean_invitation || "-"}
Davetiye Türü: ${f.steps[4].invitation_type || "-"}
Davet Gönderen: ${f.steps[4].invitation_sender_fullname || "-"}
Doğum Tarihi: ${f.steps[4].invitation_sender_birthdate || "-"}
Telefon: ${f.steps[4].invitation_sender_phone_number || "-"}
Email: ${f.steps[4].invitation_sender_email || "-"}
TC: ${f.steps[4].invitation_sender_tc_id || "-"}
Adres: ${f.steps[4].invitation_sender_home_address || "-"}
Davet Gönderen Şirket: ${f.steps[4].invitation_company_fullname || "-"}
Şirket Telefon: ${f.steps[4].invitation_company_phone_number || "-"}
Şirket Email: ${f.steps[4].invitation_company_email || "-"}
Şirket Adres: ${f.steps[4].invitation_company_address || "-"}
-- Seyahat Bilgileri --
Başlangıç / Bitiş: ${f.steps[5].travel_start_date || "-"} / ${f.steps[5].travel_end_date || "-"}
Schengen Vizesi Var mı: ${f.steps[5].boolean_schengen_visa || "-"}
Parmak İzi Alındı mı: ${f.steps[5].fingerprint_taken || "-"}
Parmak İzi Tarihi: ${f.steps[5].fingerprint_taken_date || "-"}
Vize Etiket No: ${f.steps[5].schengen_visa_label_number || "-"}
Daha Önce Yurt Dışına Çıktınız Mı: ${f.steps[5].boolean_abroad_country || "-"}
Gidilen Ülkeler: ${(f.steps[5].abroad_country || []).join(", ") || "-"}

${f.steps[6].passportFile ? "Pasaport Fotoğrafı: Mevcut" : "Pasaport Fotoğrafı: Yok"}
${f.steps[6].photoFile ? "Vesikalık Fotoğraf: Mevcut" : "Vesikalık Fotoğraf: Yok"}

Başvuru Tarihi: ${new Date().toLocaleString("tr-TR")}
`.trim();

const htmlBody = `
<h2>Schengen Vize Başvuru</h2>

<h3>Kişisel Bilgiler</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%; background-color:#f9f9f9;">
  <tbody>
    <tr><th style="background-color:#e0e0e0;">Ad Soyad</th><td>${f.steps[1].fullName || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">TC</th><td>${f.steps[1].tcId || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Cinsiyet</th><td>${f.steps[1].gender || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Medeni Durum</th><td>${f.steps[1].maritalStatus || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Doğum Tarihi</th><td>${f.steps[1].birthDate || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Doğum Yeri</th><td>${f.steps[1].birthPlace || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Telefon</th><td>${f.steps[1].phone_number || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Email</th><td>${f.steps[1].email || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Adres</th><td>${f.steps[1].home_address || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Posta Kodu</th><td>${f.steps[1].post_code || "-"}</td></tr>
  </tbody>
</table>

<h3>Pasaport Bilgileri</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr><th style="background-color:#e0e0e0;">No</th><td>${f.steps[2].passport_number || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Başlangıç / Bitiş</th><td>${f.steps[2].Passport_start_date || "-"} / ${f.steps[2].Passport_end_date || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Veriliş</th><td>${f.steps[2].passport_issuing_authority || "-"}</td></tr>
  </tbody>
</table>

<h3>İş / Şirket Bilgileri</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
   <tr><th style="background-color:#e0e0e0;">Çalışma Durumu</th><td>${f.steps[3].boolean_work || "-"}</td></tr>
   <tr><th style="background-color:#e0e0e0;">İşe Giriş Tarihi</th><td>${f.steps[3].work_start_date || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Sektör</th><td>${f.steps[3].sector || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Şirket Türü</th><td>${f.steps[3].company_type || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Şirket Adı</th><td>${f.steps[3].company_name || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Durum</th><td>${f.steps[3].company_statu || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Adres</th><td>${f.steps[3].company_address || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Telefon</th><td>${f.steps[3].company_phone_number || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Pozisyon</th><td>${f.steps[3].your_title || "-"}</td></tr>
  </tbody>
</table>

<h3>Davetiye Bilgileri</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr><th style="background-color:#e0e0e0;">Davetiye Var mı</th><td>${f.steps[4].boolean_invitation || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Davetiye Türü</th><td>${f.steps[4].invitation_type || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Davet Gönderen</th><td>${f.steps[4].invitation_sender_fullname || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Doğum Tarihi</th><td>${f.steps[4].invitation_sender_birthdate || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Telefon</th><td>${f.steps[4].invitation_sender_phone_number || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Email</th><td>${f.steps[4].invitation_sender_email || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">TC</th><td>${f.steps[4].invitation_sender_tc_id || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Adres</th><td>${f.steps[4].invitation_sender_home_address || "-"}</td></tr>
      <tr><th style="background-color:#e0e0e0;">Davet Gönderen Şirket</th><td>${f.steps[4].invitation_company_fullname || "-"}</td></tr>

    <tr><th style="background-color:#e0e0e0;">Şirket Telefon</th><td>${f.steps[4].invitation_company_phone_number || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Şirket Email</th><td>${f.steps[4].invitation_company_email || "-"}</td></tr>

    <tr><th style="background-color:#e0e0e0;">Şirket Adres</th><td>${f.steps[4].invitation_company_home_address || "-"}</td></tr>
  </tbody>
</table>

<h3>Seyahat Bilgileri</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr><th style="background-color:#e0e0e0;">Başlangıç / Bitiş</th><td>${f.steps[5].travel_start_date || "-"} / ${f.steps[5].travel_end_date || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Schengen Vizesi Var mı</th><td>${f.steps[5].boolean_schengen_visa || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Parmak İzi Alındı mı</th><td>${f.steps[5].fingerprint_taken || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Parmak İzi Tarihi</th><td>${f.steps[5].fingerprint_taken_date || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Vize Etiket No</th><td>${f.steps[5].schengen_visa_label_number || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Daha Önce Yurt Dışına Çıktınız mı?</th><td>${f.steps[5].boolean_abroad_country || "-"}</td></tr>
     <tr><th style="background-color:#e0e0e0;">Gidilen Ülkeler</th><td>${(f.steps[5].abroad_country || []).join(", ") || "-"}</td></tr>

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
      subject: `!!DENEME Schengen Vize Başvurusu - ${s(1).fullName || "İsimsiz"}`,
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