import React from "react";
export const metadata = {
  title: "Yeşil Pasaport Vize Rehberi 2026 | Hangi Ülkeler Vizesiz?",
  description: "Yeşil pasaport (hususi pasaport) sahipleri için vizesiz ülkeler listesi, vize isteyen istisnai ülkeler ve 2026 pasaport yenileme süreci hakkında tam rehber.",
  keywords: [
    "yeşil pasaport vize",
    "yeşil pasaport vizesiz ülkeler 2026",
    "yeşil pasaport hangi ülkelere vize istiyor",
    "hususi pasaport vize muafiyeti",
    "yeşil pasaport süresi uzatma",
    "yeşil pasaportla avrupa seyahati"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/yesil-pasaport-vize-rehberi",
  }
};
const YesilPasaportRehberi = () => {
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Yeşil pasaport sahipleri Schengen vizesinden muaf mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, yeşil pasaport (hususi pasaport) sahipleri, 180 gün içinde 90 günü aşmamak kaydıyla tüm Schengen bölgesi ülkelerine vizesiz giriş yapabilirler."
          }
        },
        {
          "@type": "Question",
          "name": "Yeşil pasaport hangi ülkelerden vize ister?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yeşil pasaport sahiplerinden vize isteyen başlıca ülkeler ABD, İngiltere (Birleşik Krallık), Kanada ve Avustralya'dır."
          }
        }
      ]
    })
  }}
/>
    
       <main className="max-w-6xl mx-auto px-6 py-16 text-slate-900 font-sans">
      
      {/* Hero Section */}
      <header className="text-center mb-20">
        <span className="bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">
          Özel Pasaport Avantajları
        </span>
        <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
          Yeşil Pasaport <br/>
          <span className="text-emerald-600 italic">Vize Rehberi 2026</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Hususi pasaport sahipleri için dünyadaki kapılar nasıl açılır? 
          Vizesiz ülkelerden, vize isteyen istisnai durumlara kadar en güncel bilgiler.
        </p>
      </header>

      {/* Quick Info Grid */}
      <section className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-emerald-50 p-10 rounded-[3rem] border border-emerald-100">
          <h2 className="text-3xl font-black text-emerald-900 mb-6">✅ Kimler Alabilir?</h2>
          <ul className="space-y-4 text-emerald-800 font-medium">
            <li className="flex items-center gap-3">✨ Belirli kıdemdeki devlet memurları</li>
            <li className="flex items-center gap-3">✨ Eski TBMM üyeleri ve Bakanlar</li>
            <li className="flex items-center gap-3">✨ Büyükşehir belediye başkanları</li>
            <li className="flex items-center gap-3">✨ Belirli ihracat oranını geçen iş insanları</li>
          </ul>
        </div>
        <div className="bg-slate-900 p-10 rounded-[3rem] text-white">
          <h2 className="text-3xl font-black text-emerald-400 mb-6">⚠️ Kritik Uyarı</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Yeşil pasaportun geçerlilik süresi seyahat bitiş tarihinden itibaren en az 
            <strong> 3 ay (bazı ülkeler için 6 ay)</strong> daha devam etmelidir.
          </p>
          <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
            <p className="text-sm italic">"Vize muafiyeti olması, sınırdan geçiş garantisi vermez. Konaklama ve dönüş biletiniz yanınızda olmalıdır."</p>
          </div>
        </div>
      </section>

      {/* Vize İsteyen/İstemeyen Ülkeler Tablosu */}
      <section className="mb-20">
        <h2 className="text-4xl font-black mb-12 text-center text-slate-800 tracking-tight">Vize Muafiyeti Durumu</h2>
        <div className="overflow-hidden border border-slate-200 rounded-3xl shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-6 font-black text-slate-700">Bölge / Ülke</th>
                <th className="p-6 font-black text-slate-700">Durum</th>
                <th className="p-6 font-black text-slate-700">Hizmetimiz</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-emerald-50/30 transition">
                <td className="p-6 font-bold">Schengen Bölgesi (Almanya, İtalya vb.)</td>
                <td className="p-6 text-emerald-600 font-bold">VİZESİZ (90 Gün)</td>
                <td className="p-6"><a href="/vize-testi" className="text-blue-600 underline text-sm">Ülkeleri Gör</a></td>
              </tr>
              <tr className="hover:bg-rose-50/30 transition">
                <td className="p-6 font-bold">Amerika Birleşik Devletleri</td>
                <td className="p-6 text-rose-600 font-bold">VİZE GEREKLİ</td>
                <td className="p-6"><a href="/ankara-vize-danismanlik" className="bg-slate-800 text-white px-4 py-2 rounded-lg text-xs">Destek Al</a></td>
              </tr>
              <tr className="hover:bg-rose-50/30 transition">
                <td className="p-6 font-bold">Birleşik Krallık (İngiltere)</td>
                <td className="p-6 text-rose-600 font-bold">VİZE GEREKLİ</td>
                <td className="p-6"><a href="/istanbul-vize-danismanlik" className="bg-slate-800 text-white px-4 py-2 rounded-lg text-xs">Destek Al</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Yeşil Pasaport İle İlgili SSS */}
      <section className="max-w-4xl mx-auto mb-20">
         <h2 className="text-3xl font-black mb-8 text-center">Sıkça Sorulan Sorular</h2>
         <div className="space-y-4">
            <details className="group bg-slate-50 p-6 rounded-3xl cursor-pointer">
              <summary className="font-bold flex justify-between items-center text-lg">
                Yeşil pasaport ile İngiltere'ye gidilir mi?
                <span className="text-emerald-600 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">Maalesef hayır. İngiltere, yeşil pasaport sahiplerinden de normal bordo pasaport sahipleri gibi vize talep etmektedir.</p>
            </details>
            <details className="group bg-slate-50 p-6 rounded-3xl cursor-pointer">
              <summary className="font-bold flex justify-between items-center text-lg">
                Eşim ve çocuklarım faydalanabilir mi?
                <span className="text-emerald-600 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">Evet, yeşil pasaport hakkı olan kişinin eşi ve 25 yaşını aşmamış, evli olmayan ve öğrenimi devam eden çocukları da bu haktan yararlanabilir.</p>
            </details>
         </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 rounded-[3rem] p-12 text-center text-white shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-black mb-6 italic">Vize Gerekli mi? Biz Yanınızdayız!</h2>
        <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
          Yeşil pasaportunuz olsa bile İngiltere, ABD veya Kanada için vizeye ihtiyacınız var. 
          Süreci hatasız tamamlamak için uzman ekibimizle iletişime geçin.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="/vize-alma-ihtimalinizi-olcun" className="bg-white text-emerald-700 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-xl transition transform hover:-translate-y-1">
            Vize Şansını Test Et
          </a>
          <a href="https://wa.me/905302199056?text=Merhaba%2C%20vize%20ba%C5%9Fvurum%20i%C3%A7in%20profesyonel%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.%20Uygun%20oldu%C4%9Funuzda%20s%C3%BCreci%20birlikte%20planlayabilir%20miyiz%3F"
          className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition shadow-xl">
            WhatsApp Bilgi Hattı
          </a>
        </div>
      </section>
    </main>
    </>
 
  );
};

export default YesilPasaportRehberi;