import React from "react";

// 1. Metadata: "En kolay vize" ve "vize garantisi" aramalarını hedefliyoruz
export const metadata = {
  title: "En Kolay Vize Veren Ülkeler 2026 | Güncel Liste & Tavsiyeler",
  description: "2026 yılında Türk vatandaşları için en kolay vize veren Schengen ülkeleri ve diğerleri. Onay oranı yüksek ülkeler ve hızlı randevu detayları.",
  keywords: ["en kolay vize veren ülkeler", "en hızlı vize veren ülkeler", "schengen kolay vize", "vize onayı yüksek ülkeler", "yunanistan vizesi kolay mı", "macaristan vizesi"],
  alternates: { canonical: "https://www.ayajourney.com/en-kolay-vize-veren-ulkeler" }
};

const KolayVizeSayfasi = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 font-sans">
      
      {/* Hero Section */}
      <header className="text-center mb-16">
        <span className="bg-amber-100 text-amber-700 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">
          Sektörel İstatistikler ve Güncel Veriler
        </span>
        <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
          Hangi Ülkeler <br/>
          <span className="text-amber-500 italic underline decoration-slate-900 underline-offset-8">Daha Kolay Vize Veriyor?</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Vize reddi riskini minimize etmek için doğru ülkeden başlamak kritiktir. 
          2026 yılı onay oranlarına göre en cömert ülkeleri sizin için listeledik.
        </p>
      </header>

      {/* Ülke Kartları: En Kolaylar */}
      <section className="grid md:grid-cols-3 gap-8 mb-24">
        
        {/* YUNANİSTAN */}
        <div className="bg-white p-8 rounded-[3rem] border-2 border-slate-100 hover:border-blue-400 transition-all group shadow-sm">
          <div className="text-4xl mb-4">🇬🇷</div>
          <h3 className="text-2xl font-black text-slate-800 mb-4">Yunanistan</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-6 italic">
            "Kısa süreli turistik başvurularda ve adalar vizesinde en yüksek onay oranına sahip ülkelerin başında geliyor."
          </p>
          <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-xs font-bold inline-block">
            HIZLI RANDEVU AVANTAJI
          </div>
        </div>

        {/* MACARİSTAN */}
        <div className="bg-white p-8 rounded-[3rem] border-2 border-slate-100 hover:border-amber-400 transition-all group shadow-sm">
          <div className="text-4xl mb-4">🇭🇺</div>
          <h3 className="text-2xl font-black text-slate-800 mb-4">Macaristan</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-6 italic">
            "Ticari başvurular ve kültürel gezilerde oldukça esnek bir politika izliyor. Randevu bulma süreci nispeten daha rahattır."
          </p>
          <div className="bg-amber-50 text-amber-700 px-4 py-2 rounded-xl text-xs font-bold inline-block">
            TİCARİ VİZE DOSTU
          </div>
        </div>

        {/* FRANSA */}
        <div className="bg-white p-8 rounded-[3rem] border-2 border-slate-100 hover:border-indigo-400 transition-all group shadow-sm">
          <div className="text-4xl mb-4">🇫🇷</div>
          <h3 className="text-2xl font-black text-slate-800 mb-4">Fransa</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-6 italic">
            "Profiliniz güçlüyse, ilk başvuruda dahi uzun süreli (multi) vize verme konusunda en bonkör ülkelerden biridir."
          </p>
          <div className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl text-xs font-bold inline-block">
            UZUN SÜRELİ VİZE ŞANSI
          </div>
        </div>

      </section>

      {/* Önemli Uyarı Paneli */}
      <section className="bg-amber-900 text-white p-12 rounded-[3.5rem] mb-24 relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="text-6xl animate-pulse">⚠️</div>
          <div>
            <h2 className="text-3xl font-black mb-4 uppercase">"Kolay" Demek "Garanti" Demek Değildir!</h2>
            <p className="text-amber-200 leading-relaxed font-light italic">
              En kolay vize veren ülke bile, hatalı bir dosya veya çelişkili beyanlar karşısında doğrudan ret verebilir. 
              Önemli olan hangi ülkeye başvurduğunuz değil, o ülkeye kendinizi nasıl sunduğunuzdur. 
              <strong> AYA Journey</strong> ile riskinizi sıfıra indirin.
            </p>
          </div>
        </div>
      </section>

      {/* Diğer Kolaylıklar */}
      <section className="mb-24 px-8">
        <h2 className="text-3xl font-black mb-12 text-center underline decoration-amber-400 underline-offset-8">Vizesiz veya Kolay Vizeli Diğer Seçenekler</h2>
        <div className="grid md:grid-cols-2 gap-12 text-slate-700">
          <div className="flex gap-6">
            <span className="text-3xl">🇦🇪</span>
            <div>
              <h4 className="font-bold text-xl mb-2">Dubai (E-Vize)</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Sadece pasaport fotokopisiyle 48 saatte onaylanan, dünyanın en sorunsuz vize süreci.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <span className="text-3xl">🇲🇪</span>
            <div>
              <h4 className="font-bold text-xl mb-2">Karadağ</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Avrupa'nın kalbinde, Türk vatandaşları için vizesiz bir cennet. (90 güne kadar)</p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEJİK CTA SECTION */}
      <section className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative shadow-2xl border-b-8 border-amber-500">
        <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tight">Vize Onay Şansınızı Test Edelim</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Hangi ülkeden başvurmanızın daha avantajlı olduğunu merak ediyor musunuz? 
          Profilinizi analiz edelim, sizi en yüksek onay oranına sahip ülkeye yönlendirelim.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="https://wa.me/905302199056?text=Merhaba%2C%20vize%20ba%C5%9Fvurum%20i%C3%A7in%20profesyonel%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.%20Uygun%20oldu%C4%9Funuzda%20s%C3%BCreci%20birlikte%20planlayabilir%20miyiz%3F"
          className="bg-amber-500 text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-amber-400 transition-all transform hover:scale-105 shadow-xl shadow-amber-500/20">
            Hemen Analiz Al
          </a>
          <a href="/iletisim" className="bg-white/10 text-white px-12 py-5 rounded-2xl font-black text-xl border border-white/20 hover:bg-white/20 transition">
            İletişime Geç
          </a>
        </div>
      </section>

    </main>
  );
};

export default KolayVizeSayfasi;