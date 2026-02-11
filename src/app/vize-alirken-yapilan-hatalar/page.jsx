import React from "react";

export const metadata = {
  title: "Vize Alırken En Sık Yapılan 15 Kritik Hata | 2026 Güncel Rehber",
  description: "2026 vize başvuru trendlerine göre hazırlanan en yaygın 15 hata. Dosya bütünlüğü, veri tutarsızlıkları ve güncel konsolosluk beklentileri.",
  keywords: ["vize başvuru hataları", "vize neden reddedilir", "2026 vize rehberi", "vize reddi almamak için ne yapmalı"],
  alternates: { canonical: "https://ayajourney.com/vize-alirken-yapilan-hatalar" }
};

const VizeHatalariSayfasi = () => {
  const hatalar = [
    { 
      t: "Dosya Bütünlüğü ve Biçimsel Tutarsızlık", 
      d: "2026'nın en büyük ret nedeni! Formdaki bir tarihin uçak biletiyle çelişmesi, isim-soyisim yazım farklılıkları veya belgelerin farklı formatlarda (karmaşık) sunulması başvurunun ciddiyetini bozar." 
    },
    { t: "Hesaba Aniden Yatan 'Gizemli' Paralar", d: "Başvuru öncesi kaynağı belirsiz yüklü para girişleri memurda 'borç alındı' intibası uyandırır." },
    { t: "Eski Pasaportları Sunmamak", d: "Eski vizeleriniz en büyük referansınızadır. Onları gizlemek veya sunmamak profilinizi zayıflatır." },
    { t: "Seyahat Amacıyla Uyumsuz Rota", d: "Almanya vizesine başvurup sadece Fransa oteli sunmak mantık hatasıdır." },
    { t: "Eksik veya Eski Tarihli Belgeler", d: "Faaliyet belgesi veya maaş bordrosunun 3 aydan eski olması kabul edilmez." },
    { t: "DS-160 veya Form Hataları", d: "Basit bir yazım hatası veya pasaport numarası yanlışı vizenin reddine neden olur." },
    { t: "Mülakatta Tutarsız Cevaplar", d: "Formda yazdığınız bilgilerle sözlü beyanınızın çelişmesi güveni anında bitirir." },
    { t: "Yetersiz Finansal Kanıtlar", d: "Sadece banka bakiyesi yetmez; düzenli gelir akışını ispatlamanız şarttır." },
    { t: "Seyahat Sigortası Kapsamı", d: "30.000€ teminatlı olmayan veya tüm seyahati kapsamayan sigortalar geçersizdir." },
    { t: "Pasaport Geçerlilik Süresi", d: "Dönüş sonrası en az 6 ay geçerliliği olmayan pasaportlarla işlem yapılamaz." },
    { t: "Davetiyedeki Eksik Bilgiler", d: "Davet eden kişinin kimlik ve adres bilgilerinin eksik olması büyük bir risktir." },
    { t: "Biyometrik Fotoğraf Standartları", d: "Arka fonu beyaz olmayan veya güncel olmayan fotoğraflar dosyanın iadesine sebep olur." },
    { t: "Mesleki Durumun Yanlış Beyanı", d: "Çalışmadığı halde çalışıyor gösterilmek (veya tam tersi) 10 yıl men sebebidir." },
    { t: "Geri Dönüş Bağlarının Zayıflığı", d: "Türkiye'de sizi tutan bir neden (iş, aile, mülk) sunamamak en büyük ret nedenidir." },
    { t: "Profesyonel Destek Almamak", d: "İnternetteki kirli bilgilerle dosya hazırlamak, süreci tamamen şansa bırakmaktır." }
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Header ve Liste kodları öncekiyle aynı kalacak... */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">
          Vize Alırken Yapılan <span className="text-rose-600">15 Hata</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Küçük detaylar, büyük sonuçlar doğurur. İşte dosyanızı hazırlarken kaçınmanız gerekenler.
        </p>
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {hatalar.map((item, i) => (
          <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all">
            <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-black mb-6">
              {i + 1}
            </div>
            <h3 className="font-bold text-lg mb-3">{item.t}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 rounded-[3.5rem] p-12 text-center text-white">
        <h2 className="text-3xl font-black mb-6 italic">Hata Yapma Şansınız Yok!</h2>
        <p className="text-slate-400 mb-10">Dosyanızdaki tutarsızlıkları biz temizleyelim, vizenizi garantiye alalım.</p>
        <a href="https://wa.me/905302199056?text=Merhaba%2C%20vize%20ba%C5%9Fvurum%20i%C3%A7in%20profesyonel%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.%20Uygun%20oldu%C4%9Funuzda%20s%C3%BCreci%20birlikte%20planlayabilir%20miyiz%3F"
        className="bg-rose-600 px-10 py-4 rounded-xl font-bold">Dosyamı İnceleyin</a>
      </section>
    </main>
  );
};

export default VizeHatalariSayfasi;