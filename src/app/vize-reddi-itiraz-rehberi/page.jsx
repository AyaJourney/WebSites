import React from "react";

// 1. Metadata Tanımı (SEO İçin)
export const metadata = {
  title: "Vize Reddine İtiraz Rehberi | ABD, İngiltere, Schengen & Kanada 2026",
  description: "Vize reddi nedenleri, ABD 214(b) maddesi ve Schengen 2-8 maddesi analizleri. Profesyonel itiraz dilekçesi ve vize reddi çözümleri.",
  keywords: [
    "vize reddi itiraz", 
    "vize reddi nedenleri", 
    "abd vize reddi 214b", 
    "schengen vize reddi 2. madde", 
    "ingiltere vize reddi itiraz",
    "kanada vize reddi çözümü"
  ],
  alternates: { canonical: "https://www.ayajourney.com/vize-reddi-itiraz-rehberi" }
};

const VizeReddiSayfasi = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 2. Teknik SEO Scripti (FAQPage) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "ABD vize reddi 214(b) maddesi nedir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ABD 214(b) reddi, başvuru sahibinin Türkiye'ye yeterli sosyal ve ekonomik bağları olmadığını, yani geri dönme niyetinin kanıtlanamadığını belirtir."
                }
              },
              {
                "@type": "Question",
                "name": "Vize reddine nasıl itiraz edilir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Schengen ve İngiltere vizelerinde profesyonel bir itiraz dilekçesi ile konsolosluğa başvurulabilir. ABD vizelerinde ise itiraz hakkı yoktur, profil güçlendirilerek yeniden başvurulmalıdır."
                }
              }
            ]
          })
        }}
      />

      <main className="max-w-6xl mx-auto px-6 py-16 text-slate-900 font-sans">
        
        {/* HERO SECTION */}
        <header className="text-center mb-16">
          <span className="bg-rose-100 text-rose-700 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">
            Vize Kurtarma Merkezi
          </span>
          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
            Vize Reddi <br/>
            <span className="text-rose-600 italic">Bir Son Değildir.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
            Schengen’den ABD’ye, İngiltere’den Kanada’ya kadar aldığınız ret kararlarını uzman gözüyle analiz ediyor, 
            dosyanızdaki hataları gidererek onay şansınızı yeniden zirveye taşıyoruz.
          </p>
        </header>

        {/* ÜLKE BAZLI ANALİZ KARTLARI */}
        <section className="mb-24">
          <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-tight">Ülke Spesifik Ret Analizi</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* SCHENGEN */}
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:border-rose-300 transition group shadow-sm">
              <div className="text-3xl mb-4">🇪🇺</div>
              <h3 className="text-xl font-bold mb-3">Schengen</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                <strong>Madde 2 & 8:</strong> Seyahat amacı eksikliği ve dönüş niyetinin belirsizliği.
              </p>
              <div className="text-xs font-bold text-rose-600 opacity-0 group-hover:opacity-100 transition">İtiraz Dilekçesi Gerekli →</div>
            </div>

            {/* ABD */}
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:border-blue-300 transition group shadow-sm">
              <div className="text-3xl mb-4">🇺🇸</div>
              <h3 className="text-xl font-bold mb-3">ABD</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                <strong>Madde 214(b):</strong> Türkiye'ye bağların zayıf görülmesi. İtiraz hakkı yoktur.
              </p>
              <div className="text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition">Profil Güçlendirme Şart →</div>
            </div>

            {/* İNGİLTERE */}
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:border-red-300 transition group shadow-sm">
              <div className="text-3xl mb-4">🇬🇧</div>
              <h3 className="text-xl font-bold mb-3">İngiltere</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                <strong>Appendix V:</strong> Finansal kaynakların (banka dökümü) şüpheli bulunması.
              </p>
              <div className="text-xs font-bold text-red-600 opacity-0 group-hover:opacity-100 transition">İdari İnceleme Talebi →</div>
            </div>

            {/* KANADA */}
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:border-emerald-300 transition group shadow-sm">
              <div className="text-3xl mb-4">🇨🇦</div>
              <h3 className="text-xl font-bold mb-3">Kanada</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                <strong>GCMS Notu:</strong> Reddin asıl nedeni sistemden çekilmeden yeni başvuru yapılmamalıdır.
              </p>
              <div className="text-xs font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition">ATIP Notu İstemi →</div>
            </div>

          </div>
        </section>

        {/* İTİRAZ DİLEKÇESİ ÖNİZLEME (DARK UI) */}
        <section className="mb-24 bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 blur-[100px]" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">Profesyonel <br/> İtiraz Dilekçesi</h2>
              <p className="text-slate-400 mb-8 leading-relaxed italic text-lg">
                "Standart dilekçelerle vakit kaybetmeyin. Konsolosluk memurunun ret gerekçesini çürütecek, 
                uluslararası vize hukukuna uygun savunmanızı biz hazırlayalım."
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">✅ Kanıta Dayalı Savunma</li>
                <li className="flex items-center gap-3">✅ Resmi Konsolosluk Dili</li>
                <li className="flex items-center gap-3">✅ Hızlı Teslimat</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl font-mono text-xs text-slate-300 leading-relaxed shadow-inner">
              <p className="text-blue-400 font-bold mb-4">// İtiraz Dilekçesi Taslağı</p>
              <p>To: Embassy of [Country Name] - Visa Section</p>
              <p>Subject: Appeal against the refusal of Visa Application [Ref: 12345]</p>
              <p className="mt-4">"I am writing to formally appeal the decision... The refusal based on Article 8 is unfounded as I have provided my property deeds in Turkey as evidence of my ties..."</p>
              <p className="mt-4">Regards,</p>
              <p>[Applicant Name]</p>
            </div>
          </div>
        </section>

        {/* ÇÖZÜM ADIMLARI */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-12 text-center italic">Vizenizi Nasıl Kurtarıyoruz?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { n: "01", t: "Dosya Analizi", d: "Ret mektubunuzu ve eski dosyanızı inceliyoruz." },
              { n: "02", t: "Hata Tespiti", d: "Konsolosluğun neden ikna olmadığını teknik olarak buluyoruz." },
              { n: "03", t: "Yeni Strateji", d: "Eksikleri tamamlıyor ve güçlü bir dosya ile süreci başlatıyoruz." }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-black text-slate-600 mb-4">{step.n}</div>
                <h4 className="text-xl font-bold mb-3">{step.t}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA: WHATSAPP ANALİZ */}
        <section className="bg-gradient-to-br from-rose-600 to-rose-800 rounded-[3rem] p-12 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tighter">Ret Mektubunu Şimdi Gönderin</h2>
          <p className="text-rose-100 text-xl mb-10 max-w-2xl mx-auto font-light">
            Zaman kaybetmeden ret kağıdınızın fotoğrafını çekip bize gönderin, uzman ekibimiz ücretsiz ön analiz yapsın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://wa.me/905302199056" className="bg-white text-rose-700 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition">
              Ücretsiz Ön Analiz (WhatsApp)
            </a>
            <a href="/randevu" className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition">
              Ofisten Randevu Al
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VizeReddiSayfasi;