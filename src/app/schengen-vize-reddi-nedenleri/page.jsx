import React from "react";

export const metadata = {
  title: "Schengen Vize Reddi Nedenleri 2026 | Madde 2, 8 ve 10 Analizi",
  description: "Schengen vize reddi maddeleri ne anlama gelir? Madde 2, 8, 9 ve 10 açıklamaları. Ret sonrası itiraz dilekçesi hazırlama rehberi.",
  keywords: ["schengen vize reddi", "vize reddi 8. madde", "vize reddi 2. madde", "schengen itiraz dilekçesi", "almanya vize reddi", "fransa vize reddi"],
  alternates: { canonical: "https://www.ayajourney.com/schengen-vize-reddi-nedenleri" }
};

const SchengenRedSayfasi = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 font-sans">
      <header className="mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
          Schengen Vize <span className="text-blue-600">Reddi Analizi</span>
        </h1>
        <p className="text-xl text-slate-600 border-l-4 border-blue-600 pl-6 italic">
          "Avrupa kapıları kapandı diye üzülmeyin. Red mektubundaki maddeler aslında size neyi eksik yaptığınızı söyler."
        </p>
      </header>

      {/* Maddeler Bölümü */}
      <section className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition">
          <span className="text-blue-600 font-bold text-sm uppercase">En Yaygın Neden</span>
          <h3 className="text-2xl font-black mt-2 mb-4">Madde 8: Amaç Kanıtlanamadı</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Konsolosluk, sunduğunuz seyahat planını (otel/uçak/gezi rotası) inandırıcı bulmadı. 
            Genellikle "Sahte rezervasyonlar" veya "Mantıksız rota" nedeniyle verilir.
          </p>
        </div>
        <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition">
          <span className="text-rose-600 font-bold text-sm uppercase">Geri Dönüş Şüphesi</span>
          <h3 className="text-2xl font-black mt-2 mb-4">Madde 10: Dönüş Niyeti</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Ekonomik bağlarınızın (maaş, mülk, aile) yetersiz bulunması. Memur, seyahat sonrası 
            Türkiye'ye döneceğinize ikna olmadı.
          </p>
        </div>
      </section>

      {/* İtiraz Süreci */}
      <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-20">
        <h2 className="text-3xl font-black mb-8">İtiraz (Remonstrance) Hakkınız</h2>
        <p className="mb-8 text-slate-400">Schengen redlerinde 1 ay içinde ilgili konsolosluğa yazılı itiraz hakkınız bulunur.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="font-bold text-blue-400 mb-2">1. Analiz</h4>
            <p className="text-xs text-slate-400">Eski dosyanızdaki hataları buluyoruz.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="font-bold text-blue-400 mb-2">2. Savunma</h4>
            <p className="text-xs text-slate-400">Red maddelerini çürüten teknik dilekçe yazıyoruz.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="font-bold text-blue-400 mb-2">3. Onay</h4>
            <p className="text-xs text-slate-400">Güçlendirilmiş dosya ile vizenizi kurtarıyoruz.</p>
          </div>
        </div>
      </section>
       <section className="bg-gradient-to-br from-rose-600 to-rose-800 rounded-[3rem] p-12 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tighter">Ret Mektubunu Şimdi Gönderin</h2>
          <p className="text-rose-100 text-xl mb-10 max-w-2xl mx-auto font-light">
            Zaman kaybetmeden ret kağıdınızın fotoğrafını çekip bize gönderin, uzman ekibimiz ücretsiz ön analiz yapsın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://wa.me/905302199056?text=Merhaba%2C%20vize%20ba%C5%9Fvurum%20i%C3%A7in%20profesyonel%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.%20Uygun%20oldu%C4%9Funuzda%20s%C3%BCreci%20birlikte%20planlayabilir%20miyiz%3F"
             className="bg-white text-rose-700 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition">
              Ücretsiz Ön Analiz (WhatsApp)
            </a>
            <a href="/randevu" className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition">
              Ofisten Randevu Al
            </a>
          </div>
        </section>
      {/* Alt Navigasyon (Silo Bağlantıları) */}
      <nav className="border-t border-slate-200 pt-10">
        <p className="font-bold text-slate-400 mb-6 uppercase text-sm">Diğer Ülke Ret Analizleri:</p>
        <div className="flex flex-wrap gap-4">
          <a href="/abd-vize-reddi-nedenleri" className="px-6 py-3 bg-slate-100 rounded-xl hover:bg-blue-600 hover:text-white transition">🇺🇸 ABD</a>
          <a href="/ingiltere-vize-reddi-nedenleri" className="px-6 py-3 bg-slate-100 rounded-xl hover:bg-red-600 hover:text-white transition">🇬🇧 İngiltere</a>
          <a href="/kanada-vize-reddi-nedenleri" className="px-6 py-3 bg-slate-100 rounded-xl hover:bg-rose-600 hover:text-white transition">🇨🇦 Kanada</a>
        </div>
      </nav>
    </main>
  );
};

export default SchengenRedSayfasi;