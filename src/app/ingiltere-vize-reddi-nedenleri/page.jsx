import React from "react";

// 1. Metadata: İngiltere'ye özel "Appendix V" ve "Vize Reddi İtiraz" odaklı
export const metadata = {
  title: "İngiltere Vize Reddi Nedenleri 2026 | İtiraz ve Çözüm Yolları",
  description: "İngiltere vizesi neden reddedilir? Appendix V maddesi, banka dökümü hataları ve 10 yıl vize reddi men cezası analizi. Profesyonel itiraz süreci.",
  keywords: ["ingiltere vize reddi", "uk visa refusal", "ingiltere vize reddi itiraz", "appendix v nedir", "ingiltere vize reddi banka hesabı", "idari inceleme vize"],
  alternates: { canonical: "https://www.ayajourney.com/ingiltere-vize-reddi-nedenleri" }
};

const İngiltereRedSayfasi = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 font-sans">
      
      {/* Hero Section */}
      <header className="mb-16 text-center">
        <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block border border-red-200">
          United Kingdom (UKVI)
        </span>
        <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
          İngiltere Vize Reddi <br/>
          <span className="text-red-600 italic underline decoration-slate-900 underline-offset-8">Analiz & Çözüm</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          İngiltere vize kararları tamamen objektif kanıtlara dayanır. Bir hata yaptıysanız geri dönüşü zordur, 
          ancak doğru bir savunma ile karar tersine dönebilir.
        </p>
      </header>

      {/* İngiltere Spesifik Nedenler */}
      <section className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition">🇬🇧</div>
          <h3 className="text-2xl font-black text-slate-800 mb-4">Finansal Kaynak Hatası</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            İngiltere İçişleri Bakanlığı (Home Office), banka hesabınızdaki her kuruşun kaynağını bilmek ister. 
            <strong> "Açıklanamayan Nakit Girişleri"</strong> en büyük ret nedenidir.
          </p>
          <div className="text-sm font-bold text-red-600 uppercase tracking-tighter tracking-widest italic">KRİTİK HATA: Kaynağı belirsiz toplu para yatırmak.</div>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition">🇬🇧</div>
          <h3 className="text-2xl font-black text-slate-800 mb-4">Madde V 4.2: Geri Dönüş Niyeti</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Türkiye'deki yaşam standartlarınızın, İngiltere seyahat maliyetiyle uyumsuz bulunmasıdır. 
            Memur, bu seyahatin ekonomik olarak sizin için "mantıklı olmadığını" düşünür.
          </p>
          <div className="text-sm font-bold text-red-600 uppercase tracking-tighter italic">ÇÖZÜM: Gelir-Gider Dengesi Analizi.</div>
        </div>
      </section>

      {/* Tehlikeli Bölge: 10 Yıl Men */}
      <div className="bg-red-50 border-2 border-red-600 p-8 rounded-[3rem] mb-20">
        <h2 className="text-2xl font-black text-red-900 mb-4 flex items-center gap-3">
          🛑 Dikkat: Yanlış Beyan (Deception)
        </h2>
        <p className="text-red-800 leading-relaxed">
          İngiltere başvurunuzda sahte bir belge sunmak veya önceki bir reddinizi gizlemek, 
          <strong> 10 yıl boyunca İngiltere'ye giriş yasağı</strong> almanıza neden olur. 
          Eğer dosyanızda böyle bir şüphe varsa, itiraz süreci çok hassas yönetilmelidir.
        </p>
      </div>

      {/* İtiraz Süreci Bölümü */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-10 text-center">İngiltere Retleri İçin Yol Haritası</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h4 className="text-xl font-bold mb-4">İdari İnceleme</h4>
            <p className="text-sm text-slate-500">Eğer vize memurunun teknik bir hata yaptığını düşünüyorsak "Administrative Review" başvurusu yapılır.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h4 className="text-xl font-bold mb-4">Yeni Başvuru</h4>
            <p className="text-sm text-slate-500">Hatalarımızı kabul edip, eksikleri gidererek "Fresh Application" ile süreci yeniden başlatırız.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h4 className="text-xl font-bold mb-4">Finansal Onarım</h4>
            <p className="text-sm text-slate-500">Banka hesap hareketlerinizi İngiltere standartlarına uygun hale getirecek planı kurgularız.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-slate-900 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tight uppercase">İngiltere Vizenizi Riske Atmayın</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            İngiltere vize reddi dosyaları uzmanlık gerektirir. Red mektubunuzdaki her cümleyi analiz ediyor, 
            yeni başvurunuzda onay şansınızı maksimize ediyoruz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a  href="https://wa.me/905302199056?text=Merhaba%2C%20vize%20ba%C5%9Fvurum%20i%C3%A7in%20profesyonel%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.%20Uygun%20oldu%C4%9Funuzda%20s%C3%BCreci%20birlikte%20planlayabilir%20miyiz%3F"
             className="bg-red-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-red-700 transition shadow-xl flex items-center justify-center gap-3">
               İngiltere Analizi Al
            </a>
            <a href="/randevu" className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition">
              Ofis Randevusu
            </a>
          </div>
        </div>
      </section>

      {/* Silo Navigasyonu */}
      <nav className="mt-20 border-t border-slate-100 pt-10">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Silo Navigasyonu</p>
        <div className="flex flex-wrap gap-4 text-sm font-bold">
          <a href="/schengen-vize-reddi-nedenleri" className="px-5 py-2 bg-slate-50 rounded-lg text-slate-600 hover:text-blue-600 transition">🇪🇺 Schengen</a>
          <a href="/abd-vize-reddi-nedenleri" className="px-5 py-2 bg-slate-50 rounded-lg text-slate-600 hover:text-blue-600 transition">🇺🇸 ABD</a>
          <a href="/kanada-vize-reddi-nedenleri" className="px-5 py-2 bg-slate-50 rounded-lg text-slate-600 hover:text-rose-600 transition">🇨🇦 Kanada</a>
        </div>
      </nav>
    </main>
  );
};

export default İngiltereRedSayfasi;