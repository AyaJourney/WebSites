import React from "react";
export const metadata = {
  title: "Amerika Vize Mülakat Soruları | En Sık Sorulanlar ve Doğru Cevaplar",
  description:
    "Amerika vize mülakatında hangi sorular sorulur? B1/B2 vize mülakat soruları, doğru cevap teknikleri ve vize reddi riskini azaltan profesyonel ipuçları.",
  keywords: [
    "amerika vize mulakat sorulari",
    "abd vize mulakati",
    "amerika b1 b2 mulakat sorulari",
    "amerika vize mulakati nasil gecer",
    "amerika vize gorusmesi"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/amerika-vize-mulakat-sorulari"
  },
};

const AmerikaVizeMulakatSorulari = () => {
  return (
    <>
      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Amerika vize mülakatında hangi sorular sorulur?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Amerika vize mülakatında genellikle seyahat amacı, mesleki durum, finansal yeterlilik ve Türkiye’ye geri dönüş niyetiyle ilgili sorular sorulur."
                }
              },
              {
                "@type": "Question",
                "name": "Amerika vize mülakatı kaç dakika sürer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Amerika vize mülakatı ortalama 2–5 dakika sürer. Bu kısa sürede verilen net ve tutarlı cevaplar vize sonucunu doğrudan etkiler."
                }
              },
              {
                "@type": "Question",
                "name": "Amerika vize mülakatında yanlış cevap vize reddine neden olur mu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Evet. Çelişkili, ezberlenmiş veya DS-160 formu ile uyumsuz cevaplar vize reddine yol açabilir."
                }
              },
              {
                "@type": "Question",
                "name": "Amerika vize mülakatında heyecan normal mi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Evet, heyecan normaldir. Ancak doğru hazırlık ve mülakat simülasyonu ile bu durum kontrol altına alınabilir."
                }
              }
            ]
          }),
        }}
      />

      <main className="max-w-6xl mx-auto px-6 py-16 text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="inline-block mb-6 rounded-full bg-blue-100 px-6 py-2 text-xs font-semibold uppercase tracking-widest text-blue-700">
            ABD Vize Mülakat Rehberi
          </span>

          <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8">
            Amerika Vize <span className="text-blue-600 italic">Mülakat Soruları</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            Amerika vize mülakatı kısa sürer ancak sonucu belirler.
            Konsolosluk memurunun sorduğu soruların arkasındaki amacı
            anlarsanız, doğru cevapları vermek çok daha kolay olur.
          </p>
        </header>

        {/* MANTIK */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            Amerika Vize Mülakatının Amacı Nedir?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Konsolosluk memuru mülakatta tek bir şeye odaklanır:
            <strong className="ml-1 mr-1"> Başvuru sahibinin Amerika’da kalıcı olma riski var mı?</strong>
            Sorular bu riski ölçmek için sorulur.
          </p>
        </section>

        {/* SORU GRUPLARI */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Amerika Vize Mülakatında En Sık Sorulan Sorular
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border rounded-2xl">
              <h3 className="font-bold mb-3">Seyahat Amacı</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• Amerika’ya neden gidiyorsunuz?</li>
                <li>• Ne kadar süre kalmayı planlıyorsunuz?</li>
                <li>• Daha önce Amerika’ya gittiniz mi?</li>
              </ul>
            </div>

            <div className="p-8 border rounded-2xl">
              <h3 className="font-bold mb-3">Meslek & Gelir</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• Ne iş yapıyorsunuz?</li>
                <li>• Nerede çalışıyorsunuz?</li>
                <li>• Aylık geliriniz nedir?</li>
              </ul>
            </div>

            <div className="p-8 border rounded-2xl">
              <h3 className="font-bold mb-3">Finansal Durum</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• Seyahat masraflarını kim karşılayacak?</li>
                <li>• Banka hesabınızda ne kadar para var?</li>
              </ul>
            </div>

            <div className="p-8 border rounded-2xl">
              <h3 className="font-bold mb-3">Türkiye’ye Dönüş</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• Türkiye’ye neden geri döneceksiniz?</li>
                <li>• Aileniz nerede yaşıyor?</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HATALAR */}
        <section className="mb-24 max-w-4xl mx-auto bg-slate-50 p-10 rounded-[2.5rem]">
          <h2 className="text-3xl font-black mb-6">
            Amerika Vize Mülakatında Yapılan Hatalar
          </h2>

          <ul className="space-y-4 text-slate-600">
            <li>• Ezberlenmiş cevaplar vermek</li>
            <li>• Gereksiz detaylara girmek</li>
            <li>• DS-160 ile çelişen ifadeler kullanmak</li>
            <li>• Gergin veya savunmacı tavır sergilemek</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-blue-700 to-indigo-700 rounded-[2.5rem] p-16 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Amerika Vize Mülakatına Hazır mısınız?
          </h2>

          <p className="max-w-2xl mx-auto text-blue-100 mb-10">
            Mülakat simülasyonu, doğru cevap teknikleri ve kişiye özel
            stratejiyle vize mülakatına güvenle girin.
          </p>

          <a
            href="https://wa.me/905302199056"
            className="inline-block rounded-xl bg-white px-10 py-4 text-blue-700 font-semibold hover:shadow-xl transition"
          >
            Ücretsiz Ön Değerlendirme
          </a>
        </section>

      </main>
    </>
  );
};

export default AmerikaVizeMulakatSorulari;
