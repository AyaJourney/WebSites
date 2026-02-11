import React from "react";

// 1. Metadata: Kanada özelinde parmak izi (biometric) ve BIL odaklı SEO
export const metadata = {
  title: "Kanada Vize Randevusu Nasıl Alınır? | 2026 Biyometrik İşlemler",
  description: "Kanada vize randevusu ve biyometrik (parmak izi) süreci rehberi. BIL mektubu nedir? VFS Global Kanada randevu takibi ve 2026 işlem süreleri.",
  keywords: ["kanada vize randevusu", "kanada parmak izi randevusu", "vfs global kanada randevu", "bil mektubu nedir", "kanada vize takip"],
  alternates: { canonical: "https://www.ayajourney.com/kanada-vize-randevusu-nasil-alinir" }
};

const KanadaRandevuSayfasi = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">
      
      {/* Hero Section */}
      <header className="text-center mb-16">
        <span className="bg-rose-50 text-rose-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-rose-100">
          Government of Canada / IRCC Portal
        </span>
        <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
          Kanada <span className="text-rose-600 italic text-5xl md:text-8xl">Biyometrik</span> <br/>
          Randevu Süreci
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Kanada'da randevu bir formalite değil, dosyanızın onay sürecini başlatan 
          en kritik teknik adımdır. <strong>BIL (Biometric Instruction Letter)</strong> sonrası süreci profesyonelce yönetin.
        </p>
      </header>

      {/* Kanada'ya Özel: BIL Mektubu ve Randevu İlişkisi */}
      <section className="grid md:grid-cols-2 gap-12 mb-24 items-stretch">
        <div className="bg-slate-900 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl font-black mb-6 italic text-rose-500 uppercase">BIL Nedir?</h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Online başvurunuzu yaptıktan sonra IRCC size bir "Biyometrik Talimat Mektubu" gönderir. 
            Bu mektup gelmeden VFS Global'den randevu alamazsınız. 2026 yılında bu mektubun gelme süresi 
            dosya yoğunluğuna göre 24 saat ile 1 hafta arasında değişmektedir.
          </p>
          <div className="inline-block bg-rose-600 text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest">
            Kritik Bilgi: Mektupsuz Randevu Geçersizdir
          </div>
          {/* Arka plan dekoru */}
          <div className="absolute -bottom-10 -left-10 text-[10rem] opacity-5 pointer-events-none">🍁</div>
        </div>

        <div className="p-10 bg-white border-2 border-slate-100 rounded-[3.5rem] flex flex-col justify-center">
          <h3 className="text-2xl font-black mb-6 text-slate-800 tracking-tight">VFS Global Kanada Ofisleri</h3>
          <p className="text-slate-500 text-sm mb-6">
            Kanada için Türkiye'de sadece iki yetkili merkez bulunmaktadır. Randevunuzu bu merkezlerden birine planlamanız şarttır:
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
              <span className="text-2xl font-bold text-rose-600">📍</span>
              <span className="font-bold text-slate-700">İstanbul VFS Global (Levent)</span>
            </li>
            <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
              <span className="text-2xl font-bold text-rose-600">📍</span>
              <span className="font-bold text-slate-700">Ankara VFS Global (Çankaya)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Randevu Günü Check-List */}
      <section className="mb-24">
        <h2 className="text-3xl font-black mb-12 text-center underline decoration-rose-500 underline-offset-8">Randevu Günü Yanınızda Olması Gerekenler</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "📄", t: "BIL Mektubu", d: "Sistemden gelen orijinal barkodlu çıktı." },
            { icon: "🛂", t: "Orijinal Pasaport", d: "İmzalı ve geçerliliği devam eden güncel pasaport." },
            { icon: "📅", t: "Randevu Onayı", d: "VFS Global'den aldığınız randevu saatini gösteren belge." }
          ].map((item, i) => (
            <div key={i} className="text-center p-8 border border-slate-100 rounded-3xl hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="font-bold text-lg mb-2">{item.t}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STRATEJİK CTA SECTION */}
      <section className="bg-rose-600 rounded-[3rem] p-12 text-center text-white relative shadow-2xl overflow-hidden transform hover:rotate-1 transition-transform">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tighter uppercase">Kanada Dosyanızı Uzmanına Emanet Edin</h2>
          <p className="text-rose-100 text-lg mb-10 max-w-2xl mx-auto font-light">
            Sadece randevu almak yetmez, online formun doldurulması ve evrakların Kanada standartlarında 
            yüklenmesi onay şansınızı belirler. Süreci sıfır hata ile yönetelim.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://wa.me/905302199056?text=Merhaba%2C%20vize%20ba%C5%9Fvurum%20i%C3%A7in%20profesyonel%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.%20Uygun%20oldu%C4%9Funuzda%20s%C3%BCreci%20birlikte%20planlayabilir%20miyiz%3F"
             className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition shadow-xl">
               Kanada Başvurumu Başlat
            </a>
            <a href="/iletisim" className="bg-white text-rose-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-rose-50 transition shadow-lg">
              Ofis Randevusu
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default KanadaRandevuSayfasi;