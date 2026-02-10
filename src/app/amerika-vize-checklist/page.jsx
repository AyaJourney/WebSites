import React from "react";
export const metadata = {
  title: "Amerika Vize Checklist | Başvuru Öncesi Eksiksiz Kontrol Listesi",
  description:
    "Amerika vizesi başvurmadan önce yapılması gerekenler neler? DS-160, evraklar, randevu ve mülakat için eksiksiz Amerika vize checklist rehberi.",
  keywords: [
    "amerika vize checklist",
    "amerika vizesi basvuru kontrol listesi",
    "abd vize evraklari checklist",
    "amerika vizesi icin gerekli belgeler",
    "amerika vize basvuru adimlari"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/amerika-vize-checklist"
  },
};

const AmerikaVizeChecklist = () => {
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
                "name": "Amerika vizesi başvurmadan önce neler yapılmalı?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Amerika vizesi başvurmadan önce pasaport geçerliliği kontrol edilmeli, DS-160 formu doldurulmalı, gerekli evraklar hazırlanmalı ve vize randevusu alınmalıdır."
                }
              },
              {
                "@type": "Question",
                "name": "Amerika vize checklist neden önemlidir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Amerika vize checklist, başvuruda eksik veya hatalı belge sunulmasını önler ve vize reddi riskini azaltır."
                }
              },
              {
                "@type": "Question",
                "name": "Amerika vize evrakları eksik olursa ne olur?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Eksik evraklar mülakatta güven kaybına yol açabilir ve vize reddi ile sonuçlanabilir."
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
            ABD Vize Başvuru Rehberi
          </span>

          <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8">
            Amerika Vize <span className="text-blue-600 italic">Checklist</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            Amerika vizesine başvurmadan önce tüm adımları doğru sırayla
            tamamlamak, vize sonucunu doğrudan etkiler.
            Bu kontrol listesiyle başvurunuzu eksiksiz hazırlayın.
          </p>
        </header>

        {/* CHECKLIST */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8">
            Amerika Vizesi Başvuru Kontrol Listesi
          </h2>

          <ul className="space-y-4 text-slate-700">
            <li>☑️ Pasaport en az 6 ay geçerli mi?</li>
            <li>☑️ DS-160 formu İngilizce ve hatasız dolduruldu mu?</li>
            <li>☑️ DS-160 onay sayfası indirildi mi?</li>
            <li>☑️ Vize randevusu alındı mı?</li>
            <li>☑️ Biyometrik fotoğraf uygun formatta mı?</li>
            <li>☑️ Çalışma / gelir belgeleri hazır mı?</li>
            <li>☑️ Banka hesap dökümleri güncel mi?</li>
            <li>☑️ Seyahat planı net mi?</li>
            <li>☑️ Mülakat sorularına hazırlık yapıldı mı?</li>
            <li>☑️ Önceki vize reddi varsa açıkça belirtildi mi?</li>
          </ul>
        </section>

        {/* UYARI */}
        <section className="mb-24 max-w-4xl mx-auto bg-slate-50 p-10 rounded-[2.5rem]">
          <h2 className="text-3xl font-black mb-6">
            Başvuru Öncesi Kritik Uyarılar
          </h2>

          <ul className="space-y-4 text-slate-600">
            <li>• DS-160 ile mülakatta verilen cevaplar birebir uyumlu olmalıdır.</li>
            <li>• Evrak fazlalığı değil, doğru evrak önemlidir.</li>
            <li>• Yanlış veya eksik bilgi vize reddine yol açar.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-blue-700 to-indigo-700 rounded-[2.5rem] p-16 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Amerika Vize Başvurunuzu Kontrol Edelim
          </h2>

          <p className="max-w-2xl mx-auto text-blue-100 mb-10">
            Checklist üzerinden dosyanızı uzman gözle inceleyelim,
            eksikleri başvuru öncesi giderelim.
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

export default AmerikaVizeChecklist;
