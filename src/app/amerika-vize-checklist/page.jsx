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
      Amerika Vize Başvuru Rehberi 2026
    </span>

    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
      Amerika Vize Checklist
      <br />
      <span className="text-blue-600 italic">
        Amerika Vizesi Kontrol Listesi
      </span>
    </h1>

    <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
      <strong>Amerika vize checklist</strong>, başvuru öncesi yapılması gereken
      tüm adımları eksiksiz tamamlamanızı sağlar.
      Amerika vizesi başvuru sürecinde yapılan küçük hatalar bile
      ret ile sonuçlanabilir. Bu kontrol listesi ile süreci doğru yönetin.
    </p>
  </header>


  {/* GENEL SÜREÇ */}
  <section className="mb-24 max-w-4xl mx-auto">
    <h2 className="text-3xl font-black mb-6">
      Amerika Vizesi Başvuru Adımları
    </h2>

    <ol className="space-y-4 text-slate-700">
      <li>1️⃣ DS-160 formunun eksiksiz doldurulması</li>
      <li>2️⃣ ABD vize ücretinin (MRV) yatırılması</li>
      <li>3️⃣ Randevu alınması (Ankara / İstanbul)</li>
      <li>4️⃣ Evrakların hazırlanması</li>
      <li>5️⃣ Konsolosluk mülakatına katılım</li>
    </ol>

    <p className="mt-6 text-slate-600 leading-relaxed">
      Amerika vizesi başvuru sürecinde en kritik aşama mülakattır.
      Konsolosluk memuru başvuru sahibinin göçmenlik niyeti taşımadığını
      görmek ister.
    </p>
  </section>


  {/* CHECKLIST */}
  <section className="mb-24 max-w-4xl mx-auto">
    <h2 className="text-3xl font-black mb-8">
      Amerika Vizesi Kontrol Listesi
    </h2>

    <ul className="space-y-4 text-slate-700">
      <li>☑️ Pasaport en az 6 ay geçerli mi?</li>
      <li>☑️ DS-160 formu doğru ve tutarlı dolduruldu mu?</li>
      <li>☑️ DS-160 onay sayfası indirildi mi?</li>
      <li>☑️ ABD vize randevusu alındı mı?</li>
      <li>☑️ Biyometrik fotoğraf uygun ölçüde mi?</li>
      <li>☑️ Çalışma ve gelir belgeleri hazır mı?</li>
      <li>☑️ Banka hesap dökümleri güncel mi?</li>
      <li>☑️ Seyahat planı net mi?</li>
      <li>☑️ Mülakat sorularına hazırlık yapıldı mı?</li>
      <li>☑️ Daha önce alınan ret açık şekilde beyan edildi mi?</li>
    </ul>
  </section>


  {/* KRİTİK UYARILAR */}
  <section className="mb-24 max-w-4xl mx-auto bg-slate-50 p-10 rounded-3xl">
    <h2 className="text-3xl font-black mb-6">
      Amerika Vizesi Başvurusu Öncesi Kritik Uyarılar
    </h2>

    <ul className="space-y-4 text-slate-600">
      <li>• DS-160 ile mülakat cevapları birebir uyumlu olmalıdır.</li>
      <li>• Evrak fazlalığı değil, doğru evrak önemlidir.</li>
      <li>• Yanlış bilgi 214(b) maddesi kapsamında ret almanıza neden olabilir.</li>
      <li>• Finansal durum açık ve net gösterilmelidir.</li>
    </ul>
  </section>


  {/* FAQ */}
  <section className="mb-24 max-w-4xl mx-auto">
    <h2 className="text-3xl font-black mb-8 text-center">
      Amerika Vize Başvurusu Hakkında Sık Sorulan Sorular
    </h2>

    <div className="space-y-8">

      <div>
        <h3 className="font-bold text-lg">
          Amerika vizesi için en önemli evrak nedir?
        </h3>
        <p className="text-slate-600 text-sm">
          En önemli belge DS-160 formudur. Formdaki bilgiler mülakatın temelini oluşturur.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-lg">
          Amerika vize reddi en çok neden olur?
        </h3>
        <p className="text-slate-600 text-sm">
          En sık ret sebebi 214(b) maddesidir. Bu durum, başvuru sahibinin
          Türkiye’ye geri dönüş niyetinin yeterince güçlü görülmemesinden kaynaklanır.
        </p>
      </div>

    </div>
  </section>


  {/* CTA */}
  <section className="bg-gradient-to-br from-blue-700 to-indigo-700 rounded-3xl p-16 text-center text-white">
    <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
      Amerika Vize Dosyanızı Kontrol Edelim
    </h2>

    <p className="max-w-2xl mx-auto text-blue-100 mb-10">
      Amerika vize checklist üzerinden başvurunuzu uzman gözle inceleyelim,
      eksik veya riskli noktaları başvuru öncesi düzeltelim.
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
