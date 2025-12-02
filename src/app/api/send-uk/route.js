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
  page.drawText("INGILTERE VİZE BAŞVURU FORMU BILGI FISI", {
    x: PAGE_WIDTH - MARGIN - boldFont.widthOfTextAtSize("INGILTERE VİZE BAŞVURU FORMU BILGI FISI", 10),
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
    let h1 = drawField("Ad Soyad", s(1).fullName, false, 0);
    let h2 = drawField("T.C. Kimlik No", s(1).tcId, false, CONTENT_WIDTH/2);
    currentY -= Math.max(h1,h2)+10;
    // Step1 diğer alanlar
    h1 = drawField("Doğum Tarihi", s(1).birthDate, false,0);
    h2 = drawField("Doğum Yeri", s(1).birthPlace,false, CONTENT_WIDTH/2);
    currentY -= Math.max(h1,h2)+10;
    h1 = drawField("Medeni Durum", s(1).maritalStatus, false, 0);
    h2 = s(1).maritalStatus === "EVLI" ? drawField("Eş Adı", s(1).partner_full_name,false, CONTENT_WIDTH/2) : drawField("Cinsiyet", s(1).gender,false, CONTENT_WIDTH/2);
    currentY -= Math.max(h1,h2)+10;
    h1 = drawField("E-posta", s(1).email,false,0);
    h2 = drawField("Telefon", s(1).phone_number,false, CONTENT_WIDTH/2);
    currentY -= Math.max(h1,h2)+10;
    h1 = drawField("Adres", s(1).home_address,true,0);
    currentY -= h1+10;
    h1 = drawField("Posta Kodu", s(1).post_code,false,0);
    h2 = drawField("Ev Durumu", `${s(1).home_owner} (${s(1).residence_year || '-'} yıldır)`, false, CONTENT_WIDTH/2);
    currentY -= Math.max(h1,h2)+10;

    // --- Step 2: Aile ---
    drawSection("2. AİLE BİLGİLERİ");
    h1 = drawField("Anne Adı", s(2).mother_full_name,false,0);
    h2 = drawField("Anne Doğum Tarihi", s(2).mother_birth_date,false,CONTENT_WIDTH/2);
    currentY -= Math.max(h1,h2)+10;
    h1 = drawField("Baba Adı", s(2).father_full_name,false,0);
    h2 = drawField("Baba Doğum Tarihi", s(2).father_birth_date,false,CONTENT_WIDTH/2);
    currentY -= Math.max(h1,h2)+10;

    if(String(s(2).boolean_child).toUpperCase()==="EVET") {
      checkSpace(40);
      currentPage.drawText(`Çocuklar (${s(2).child_count || 0} Adet)`, { x: MARGIN, y: currentY, size:10,font:boldFont,color:COLORS.primary });
      currentY -=20;
      const names = s(2).child_names || [];
      names.forEach((nm,idx)=>{
        let ch = drawField(`Çocuk ${idx+1}`,nm,true,0);
        currentY -= ch+5;
      });
      currentY -=5;
    }

    // --- Step 3: Pasaport ---
    drawSection("3. PASAPORT BİLGİLERİ");
    h1 = drawField("Pasaport No", s(3).passport_number,false,0);
    h2 = drawField("Veren Makam", s(3).passport_issuing_authority,false,CONTENT_WIDTH/2);
    currentY -= Math.max(h1,h2)+10;
    h1 = drawField("Başlangıç Tarihi", s(3).Passport_start_date,false,0);
    h2 = drawField("Bitiş Tarihi", s(3).Passport_end_date,false,CONTENT_WIDTH/2);
    currentY -= Math.max(h1,h2)+10;
    h1 = drawField("T.C. Kart Bitiş", s(3).tc_card_end_date,true,0);
    currentY -= h1+10;

    drawFooter(currentPage,pageCount); // 1. sayfa sonu

    // --- BÖLÜM 4: İş ve Maddi Durum ---
    currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pageCount++;
    currentY = PAGE_HEIGHT - MARGIN;
    await drawHeader(currentPage);

    drawSection("4. ÇALIŞMA VE MADDİ DURUM");
    h1 = drawField("Çalışma Durumu", s(4).boolean_work,true,0);
    currentY -= h1+10;
    if(s(4).boolean_work==="OGRENCI") {
      h1 = drawField("Okul", s(4).school_name,false,0);
      h2 = drawField("Bölüm", s(4).school_department,false,CONTENT_WIDTH/2);
      currentY -= Math.max(h1,h2)+10;
    } else if(["CALISIYOR","EMEKLI","CALISMAYAN"].includes(s(4).boolean_work)) {
      h1 = drawField("Kurum Adı", s(4).work_name,false,0);
      h2 = drawField("Ünvan", s(4).worker_title,false,CONTENT_WIDTH/2);
      currentY -= Math.max(h1,h2)+10;
      h1 = drawField("Adres", s(4).work_address,true,0);
      currentY -= h1+10;
    }

    // Finansal Tablo
    checkSpace(80);
    currentY -=10;
    currentPage.drawText("Finansal Özet", { x:MARGIN,y:currentY,size:10,font:boldFont,color:COLORS.primary });
    currentY -=20;
    currentPage.drawLine({ start:{x:MARGIN,y:currentY+15}, end:{x:PAGE_WIDTH-MARGIN,y:currentY+15}, thickness:0.5,color:COLORS.border });
    let fh1 = drawField("Aylık Gelir", s(4).monthly_money,false,0);
    let fh2 = drawField("Birikim", s(4).savings,false,CONTENT_WIDTH/4);
    let fh3 = drawField("Yan Gelir", s(4).sideline,false,(CONTENT_WIDTH/4)*2);
    let fh4 = drawField("Gider", s(4).monthly_expenditure_amount,false,(CONTENT_WIDTH/4)*3);
    currentY -= Math.max(fh1,fh2,fh3,fh4)+20;

    drawSection("5. SEYAHAT VE İNGİLTERE");
    h1 = drawField("İngiltere Adresi", s(5).uk_address,true,0);
    currentY -= h1+10;
    h1 = drawField("Gidiş Tarihi", s(5).travel_start_date,false,0);
    h2 = drawField("Dönüş Tarihi", s(5).travel_end_date,false,CONTENT_WIDTH/2);
    currentY -= Math.max(h1,h2)+10;
    h1 = drawField("Planlanan Harcama", `${s(5).spend_pound || 0} GBP`,false,0);
    h2 = drawField("Masrafları Karşılayan", s(5).boolean_cover_expenses==="EVET"?"Kendisi":s(5).who_cover_expenses,false,CONTENT_WIDTH/2);
    currentY -= Math.max(h1,h2)+10;

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

    if(String(s(5).boolean_refused_visa).toUpperCase()==="EVET") {
      checkSpace(40);
      currentPage.drawRectangle({x:MARGIN,y:currentY-30,width:CONTENT_WIDTH,height:35,color:rgb(1,0.9,0.9)});
      let rh1 = drawField("Vize Reddi Tarihi", s(5).when_refused,false,5);
      let rh2 = drawField("Red Sebebi", s(5).refused_about,false,(CONTENT_WIDTH/2)+5);
      currentY -= Math.max(rh1,rh2)+15;
    }

    drawFooter(currentPage,pageCount);


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

const textBody = `
İNGİLTERE VİZE BAŞVURU

-- Kişisel Bilgiler --
Ad Soyad: ${f.steps[1].fullName || "-"}
TC: ${f.steps[1].tcId || "-"}
Cinsiyet: ${f.steps[1].gender || "-"}
Medeni Durum: ${f.steps[1].maritalStatus || "-"}
Eş Adı: ${f.steps[1].partner_full_name || "-"}
Doğum Tarihi: ${f.steps[1].birthDate || "-"}
Doğum Yeri: ${f.steps[1].birthPlace || "-"}
Telefon: ${f.steps[1].phone_number || "-"}
Email: ${f.steps[1].email || "-"}
Adres: ${f.steps[1].home_address || "-"}
Posta Kodu: ${f.steps[1].post_code || "-"}
Ev Sahibi: ${f.steps[1].home_owner || "-"}
Evde Kalma Yılı: ${f.steps[1].residence_year || "-"}

-- Aile Bilgileri --
Anne: ${f.steps[2].mother_full_name || "-"}
Anne Doğum Tarihi: ${f.steps[2].mother_birth_date || "-"}
Baba: ${f.steps[2].father_full_name || "-"}
Baba Doğum Tarihi: ${f.steps[2].father_birth_date || "-"}
Çocuk Sayısı: ${f.steps[2].child_count || "-"}
Çocuklar: ${(f.steps[2].child_names || []).join(", ") || "-"}

-- Pasaport --
Numara: ${f.steps[3].passport_number || "-"}
Başlangıç / Bitiş: ${f.steps[3].Passport_start_date || "-"} / ${f.steps[3].Passport_end_date || "-"}
Veriliş: ${f.steps[3].passport_issuing_authority || "-"}
TC Kart Bitiş Tarihi: ${f.steps[3].tc_card_end_date || "-"}

-- İş Bilgileri --
Çalışıyor mu: ${f.steps[4].boolean_work || "-"}
İşyeri Adı: ${f.steps[4].work_name || "-"}
İşyeri Adresi: ${f.steps[4].work_address || "-"}
İşyeri Telefon: ${f.steps[4].work_phone || "-"}
Pozisyon: ${f.steps[4].worker_title || "-"}
Çalışma Yılı: ${f.steps[4].work_year || "-"}
Çalışan: ${f.steps[4].employee || "-"}
Aylık Gelir: ${f.steps[4].monthly_money || "-"}
Biriktiri: ${f.steps[4].savings || "-"}
Yan Gelir: ${f.steps[4].sideline || "-"}
Aylık Harcama: ${f.steps[4].monthly_expenditure_amount || "-"}

-- Seyahat Bilgileri --
İngiltere Adresi: ${f.steps[5].uk_address || "-"}
Seyahat Başlangıç / Bitiş: ${f.steps[5].travel_start_date || "-"} / ${f.steps[5].travel_end_date || "-"}
Daha önce yurtdışına çıktı mı: ${f.steps[5].boolean_traveled_adroad || "-"}
Gidilen Ülkeler: ${(f.steps[5].abroad_country || []).join(", ") || "-"}
Harcanacak Pound: ${f.steps[5].spend_pound || "-"}
Masrafları Kim Karşılayacak: ${f.steps[5].boolean_cover_expenses || "-"}
Karşılayan: ${f.steps[5].who_cover_expenses || "-"}
Katkı Tutarı: ${f.steps[5].money_cover_expenses || "-"}
Daha önce vize reddi: ${f.steps[5].boolean_refused_visa || "-"}
Reddedilme Tarihi: ${f.steps[5].when_refused || "-"}
Reddetme Nedeni: ${f.steps[5].refused_about || "-"}

Başvuru Tarihi: ${new Date().toLocaleString("tr-TR")}
`.trim();

const htmlBody = `
<h2>İngiltere Vize Başvuru</h2>

<h3>Kişisel Bilgiler</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%; background-color:#f9f9f9;">
  <tbody>
    <tr><th style="background-color:#e0e0e0;">Ad Soyad</th><td>${f.steps[1].fullName || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">TC</th><td>${f.steps[1].tcId || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Cinsiyet</th><td>${f.steps[1].gender || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Medeni Durum</th><td>${f.steps[1].maritalStatus || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Eş Adı</th><td>${f.steps[1].partner_full_name || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Doğum Tarihi</th><td>${f.steps[1].birthDate || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Doğum Yeri</th><td>${f.steps[1].birthPlace || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Telefon</th><td>${f.steps[1].phone_number || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Email</th><td>${f.steps[1].email || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Adres</th><td>${f.steps[1].home_address || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Posta Kodu</th><td>${f.steps[1].post_code || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Ev Sahibi</th><td>${f.steps[1].home_owner || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Evde Kalma Yılı</th><td>${f.steps[1].residence_year || "-"}</td></tr>
  </tbody>
</table>

<h3>Aile Bilgileri</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr><th style="background-color:#e0e0e0;">Anne</th><td>${f.steps[2].mother_full_name || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Anne Doğum Tarihi</th><td>${f.steps[2].mother_birth_date || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Baba</th><td>${f.steps[2].father_full_name || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Baba Doğum Tarihi</th><td>${f.steps[2].father_birth_date || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Çocuk Sayısı</th><td>${f.steps[2].child_count || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Çocuklar</th><td>${(f.steps[2].child_names || []).join(", ") || "-"}</td></tr>
  </tbody>
</table>

<h3>Pasaport</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr><th style="background-color:#e0e0e0;">No</th><td>${f.steps[3].passport_number || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Başlangıç / Bitiş</th><td>${f.steps[3].Passport_start_date || "-"} / ${f.steps[3].Passport_end_date || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Veriliş</th><td>${f.steps[3].passport_issuing_authority || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">TC Kart Bitiş Tarihi</th><td>${f.steps[3].tc_card_end_date || "-"}</td></tr>
  </tbody>
</table>

<h3>İş Bilgileri</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr><th style="background-color:#e0e0e0;">Çalışıyor mu</th><td>${f.steps[4].boolean_work || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">İşyeri Adı</th><td>${f.steps[4].work_name || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">İşyeri Adresi</th><td>${f.steps[4].work_address || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">İşyeri Telefon</th><td>${f.steps[4].work_phone || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Pozisyon</th><td>${f.steps[4].worker_title || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Çalışma Yılı</th><td>${f.steps[4].work_year || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Çalışan</th><td>${f.steps[4].employee || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Aylık Gelir</th><td>${f.steps[4].monthly_money || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Biriktiri</th><td>${f.steps[4].savings || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Yan Gelir</th><td>${f.steps[4].sideline || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Aylık Harcama</th><td>${f.steps[4].monthly_expenditure_amount || "-"}</td></tr>
  </tbody>
</table>

<h3>Seyahat Bilgileri</h3>
<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width:100%;">
  <tbody>
    <tr><th style="background-color:#e0e0e0;">İngiltere Adresi</th><td>${f.steps[5].uk_address || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Seyahat Başlangıç / Bitiş</th><td>${f.steps[5].travel_start_date || "-"} / ${f.steps[5].travel_end_date || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Daha önce yurtdışına çıktı mı</th><td>${f.steps[5].boolean_traveled_adroad || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Gidilen Ülkeler</th><td>${(f.steps[5].abroad_country || []).join(", ") || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Harcanacak Pound</th><td>${f.steps[5].spend_pound || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Masrafları Kim Karşılayacak</th><td>${f.steps[5].boolean_cover_expenses || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Karşılayan</th><td>${f.steps[5].who_cover_expenses || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Katkı Tutarı</th><td>${f.steps[5].money_cover_expenses || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Daha önce vize reddi</th><td>${f.steps[5].boolean_refused_visa || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Reddedilme Tarihi</th><td>${f.steps[5].when_refused || "-"}</td></tr>
    <tr><th style="background-color:#e0e0e0;">Reddetme Nedeni</th><td>${f.steps[5].refused_about || "-"}</td></tr>
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