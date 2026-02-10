import React from "react";

// 1. Metadata: ABD vize danışmanlığı odaklı SEO
export const metadata = {
  title: "Amerika Vizesi Neden Reddedilir? | Profesyonel Vize Danışmanlığı",
 description:
  "Amerika vize danışmanlığı ile DS-160 formu, vize mülakat hazırlığı ve ret nedenlerini uzman stratejiyle yönetin. Amerika vizesi alma şansınızı artırın.",

  keywords: [
  "amerika vize danışmanlığı",
  "amerika vizesi danışmanı",
  "amerika vizesi nasıl alınır",
  "ds-160 formu doldurma",
  "amerika vize mülakat soruları",
  "amerika vize reddi nedenleri",
  "amerika vize randevu öne çekme",
  "amerika turist vizesi danışmanlığı",
  "amerika öğrenci vizesi danışmanlığı"
],
  alternates: {
    canonical: "https://www.ayajourney.com/amerika-vize-danismanligi"
  },
};

const ABDDanismanlikSayfasi = () => {
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
          "name": "ABD vize danışmanlığı almak zorunlu mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ABD vize danışmanlığı almak zorunlu değildir. Ancak profesyonel danışmanlık, DS-160 formunun doğru doldurulmasını, mülakat sürecine eksiksiz hazırlanılmasını ve başvurunun ret riskleri minimize edilerek yapılmasını sağlar."
          }
        },
        {
          "@type": "Question",
          "name": "ABD vize danışmanlığı vize garantisi verir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hiçbir ABD vize danışmanlığı firması vize garantisi veremez. Vize onayı tamamen ABD Konsolosluğu’nun takdirindedir. Ancak doğru stratejiyle hazırlanmış başvurular onay ihtimalini ciddi ölçüde artırır."
          }
        },
        {
          "@type": "Question",
          "name": "ABD vize mülakatı kaç dakika sürer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ABD vize mülakatları genellikle 2 ila 5 dakika arasında sürer. Bu kısa sürede doğru ve tutarlı cevaplar verebilmek, vize sonucunu doğrudan etkiler."
          }
        },
        {
          "@type": "Question",
          "name": "DS-160 formu yanlış doldurulursa ne olur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DS-160 formunda yapılan yanlış veya çelişkili beyanlar ABD vize reddine yol açabilir. Yanlış bilgiler, mülakatta güven kaybına neden olur ve 214(b) maddesi kapsamında ret riski oluşturur."
          }
        },
        {
          "@type": "Question",
          "name": "ABD vize reddi sonrası tekrar başvuru yapılabilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, ABD vizesi reddedildikten sonra tekrar başvuru yapılabilir. Ancak önceki reddin nedenleri analiz edilmeli ve yeni başvuru bu hatalar giderilerek yapılmalıdır."
          }
        }
      ]
    }),
  }}
/>
<main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

  {/* Hero */}
  <header className="text-center mb-20">
    <span className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
      U.S. Visa Specialist Services
    </span>

    <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
      Profesyonel <br />
      <span className="text-blue-600 italic">
        Amerika Vize Danışmanlığı
      </span>
    </h1>

    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
      Amerika vizesi bir evrak savaşı değil, stratejik bir ikna sürecidir.
      DS-160 formundan mülakat cevaplarına kadar tüm başvuruyu
      <strong> Aya Journey Amerika vize danışmanlığı</strong> uzmanlığıyla
      yönetiyoruz.
    </p>
  </header>

  {/* H2 – Nedir */}
  <section className="mb-24 max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-black mb-6">
      Amerika Vize Danışmanlığı Nedir?
    </h2>

    <p className="text-slate-600 leading-relaxed text-lg">
      Amerika vize danışmanlığı; başvuru sahibinin seyahat amacı, finansal
      durumu ve Türkiye’ye geri dönüş bağları analiz edilerek
      <strong>ABD konsolosluğu beklentilerine uygun</strong> bir başvuru
      stratejisi oluşturulmasıdır.
    </p>

    <p className="text-slate-600 leading-relaxed text-lg mt-6">
      ABD vize başvurularında yapılan küçük tutarsızlıklar bile
      <strong>214(b)</strong> maddesi kapsamında ret sebebi olabilir.
      Bu nedenle profesyonel ABD vize danışmanlığı, onay ihtimalini
      ciddi ölçüde artırır.
    </p>
  </section>

  {/* Neden Biz */}
  <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
    {[
      { t: "DS-160 Stratejisi", d: "Formunuzu ABD vize memurunun görmek istediği dilde hazırlıyoruz.", icon: "✍️" },
      { t: "Mülakat Eğitimi", d: "Amerika vize mülakat sorularını birebir simülasyonla çalışıyoruz.", icon: "🎙️" },
      { t: "Randevu Takibi", d: "ABD vize randevularını sistemli şekilde erkene çekiyoruz.", icon: "📅" },
      { t: "Ret Analizi", d: "Daha önce ABD vize reddi aldıysanız nedeni tespit ediyoruz.", icon: "🔍" }
    ].map((item, i) => (
      <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
        <div className="text-4xl mb-6">{item.icon}</div>
        <h3 className="font-bold text-lg mb-3">{item.t}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
      </div>
    ))}
  </section>

  {/* Ret Nedenleri */}
  <section className="mb-24 bg-white border border-slate-100 rounded-[3rem] p-12">
    <h2 className="text-3xl font-black mb-10 text-center">
      Amerika Vizesi En Sık Neden Reddedilir?
    </h2>

    <ul className="space-y-4 text-slate-600 leading-relaxed">
      <li>• DS-160 formunda tutarsız bilgiler</li>
      <li>• Türkiye’ye geri dönüş bağlarının zayıf görülmesi</li>
      <li>• Seyahat amacının net ifade edilememesi</li>
      <li>• Finansal belgelerin yetersiz olması</li>
      <li>• Mülakatta kısa ve çelişkili cevaplar</li>
    </ul>

    <p className="mt-8 text-slate-700 font-medium">
      Aya Journey olarak ABD vize başvurunuzu bu riskleri ortadan
      kaldıracak şekilde yapılandırıyoruz.
    </p>
  </section>

  {/* FAQ */}
  <section className="mb-24 max-w-4xl mx-auto">
    <h2 className="text-3xl font-black mb-12 text-center">
      Amerika Vize Danışmanlığı Hakkında Sık Sorulan Sorular
    </h2>

    <div className="space-y-10">
      <div>
        <h3 className="font-bold text-lg mb-2">
          Amerika vize danışmanlığı zorunlu mu?
        </h3>
        <p className="text-slate-600">
          Hayır. Ancak özellikle ilk başvurularda profesyonel danışmanlık,
          ABD vizesi onay ihtimalini ciddi ölçüde artırır.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-2">
          Amerika vize danışmanlığı garanti verir mi?
        </h3>
        <p className="text-slate-600">
          Hiçbir firma vize garantisi veremez. Ancak doğru stratejiyle
          hazırlanmış dosyalar ret riskini minimize eder.
        </p>
      </div>
    </div>
  </section>

</main>

    </>
  
  );
};

export default ABDDanismanlikSayfasi;