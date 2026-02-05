import React from "react";
export const metadata = {
  title: "Vize Nedir? Vize Türleri ve Başvuru Rehberi 2026",
  description: "Vize nedir, nasıl alınır? Schengen, ABD, İngiltere vize türleri, gerekli evraklar ve 2026 vize başvuru süreçleri hakkında kapsamlı rehber.",
  keywords: ["vize nedir", "vize türleri", "vize nasıl alınır", "vize başvurusu nasıl yapılır", "pasaport ve vize farkı"],
  alternates: { canonical: "https://www.ayajourney.com/vize-nedir" }
};
const VizeNedirRehberi = () => {
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
          "name": "Vize nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vize, bir devletin dış temsilcilikleri veya sınır makamları aracılığıyla, ülkesine seyahat edecek bir yabancının pasaportuna koyduğu ve bu kişinin ülkeye giriş yapabileceğini gösteren resmi bir kayıttır."
          }
        },
        {
          "@type": "Question",
          "name": "Vize başvurusu için neler gereklidir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Genellikle geçerli bir pasaport, biyometrik fotoğraf, tam vukuatlı nüfus kayıt örneği, banka hesap dökümleri ve seyahat amacını belirten belgeler gereklidir."
          }
        }
      ]
    })
  }}
/>
        <main className="max-w-5xl mx-auto px-6 py-16 font-sans text-slate-800">
      
      {/* Etkileyici Giriş */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
          Vize Nedir? <br/>
          <span className="text-blue-600">Her Şeyiyle Vize Rehberi</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Yurt dışı hayallerinizin ilk kapısı olan vize süreci hakkında bilmeniz gereken her şeyi, 
          en temelden en karmaşık detaylara kadar sizin için sadeleştirdik.
        </p>
      </header>

      {/* Görsel Bilgi Kartları */}
      <section className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
          <h3 className="font-bold text-xl mb-3 text-blue-800">Tanım</h3>
          <p className="text-sm leading-relaxed italic text-blue-900/70">
            "Vize, bir ülkeye giriş iznidir. Pasaportunuzun üzerine basılan bir mühür veya dijital bir kayıttır."
          </p>
        </div>
        <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
          <h3 className="font-bold text-xl mb-3 text-amber-800">Pasaport vs Vize</h3>
          <p className="text-sm leading-relaxed text-amber-900/70">
            Pasaport sizin kimliğinizdir (Ehliyet gibi), vize ise o yolu kullanma izninizdir (Otoban bileti gibi).
          </p>
        </div>
        <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
          <h3 className="font-bold text-xl mb-3 text-emerald-800">Onay Şansı</h3>
          <p className="text-sm leading-relaxed text-emerald-900/70">
            Doğru hazırlanan bir dosya, en zor vize türlerinde bile %99 başarı şansı yakalayabilir.
          </p>
        </div>
      </section>

      {/* Detaylı İçerik Alanı */}
      <article className="prose prose-blue max-w-none mb-20">
        <h2 className="text-3xl font-bold mb-6">En Çok Merulan Vize Türleri</h2>
        <div className="space-y-12">
          
          <div>
            <h3 className="text-2xl font-bold flex items-center gap-2">
              🇪🇺 Schengen Vizesi Nedir?
            </h3>
            <p className="text-lg text-slate-600">
              Avrupa Birliği üyesi 29 ülkeye tek bir vize ile giriş yapmanızı sağlayan serbest dolaşım iznidir. 
              Turistik, ticari veya aile ziyareti amacıyla alınabilir.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold flex items-center gap-2">
              🇺🇸 Amerika (ABD) Vizesi Nedir?
            </h3>
            <p className="text-lg text-slate-600">
              Genellikle 10 yıllık verilen, mülakat aşaması içeren ve profilinizin "güçlü bağlar" üzerinden 
              değerlendirildiği bir vize türüdür.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold flex items-center gap-2">
              🇬🇧 İngiltere Vizesi Nedir?
            </h3>
            <p className="text-lg text-slate-600">
              Schengen sistemine dahil olmayan, Birleşik Krallık topraklarına giriş için gereken, 
              maddi durumun ön planda tutulduğu titiz bir süreçtir.
            </p>
          </div>
        </div>
      </article>

      {/* Etkileşimli Alan: Adım Adım Süreç */}
      <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 mb-20 shadow-2xl">
        <h2 className="text-3xl font-black mb-12 text-center italic">Vize Nasıl Alınır? (5 Adımda)</h2>
        <div className="grid md:grid-cols-5 gap-6 text-center">
          {[
            { step: "01", label: "Evrak Analizi" },
            { step: "02", label: "Randevu Alımı" },
            { step: "03", label: "Dosya Hazırlığı" },
            { step: "04", label: "Parmak İzi" },
            { step: "05", label: "Pasaport Teslim" },
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="text-4xl font-black text-blue-500 opacity-30 mb-2">{item.step}</div>
              <p className="font-bold text-sm uppercase tracking-widest">{item.label}</p>
              {i < 4 && <div className="hidden md:block absolute top-6 -right-3 text-blue-500">→</div>}
            </div>
          ))}
        </div>
      </section>

      {/* TESTE YÖNLENDİRME (SEO & Dönüşüm Şovu) */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 rounded-[3rem] text-center text-white">
        <h2 className="text-3xl font-black mb-6">Vize Alabilir Miyim?</h2>
        <p className="text-xl mb-10 opacity-90">
          Tanımları öğrendiniz, peki ya sizin profiliniz vize almaya uygun mu? 
          2 dakikalık testimizi çözerek şansınızı hemen görün.
        </p>
        <a href="/vize-alma-ihtimalinizi-olcun" className="bg-white text-blue-700 px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition shadow-xl inline-block">
          ÜCRETSİZ TESTE BAŞLA
        </a>
      </section>

    </main>
    </>

  );
};

export default VizeNedirRehberi;