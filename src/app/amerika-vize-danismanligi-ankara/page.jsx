import React from "react";
export const metadata = {
  title: "Amerika Vize Danışmanlığı Ankara | Çukurambar DS-160 & Mülakat",
  description: "Ankara Amerika vize başvurularında DS-160 formu, mülakat simülasyonu ve randevu takibi. ABD Ankara Büyükelçiliği'ne yakın Çukurambar ofisimizde profesyonel destek.",
  keywords: [
    "Amerika vizesi Ankara",
    "Ankara vize danışmanlık Amerika",
    "DS-160 formu doldurma Ankara",
    "Amerika vize mülakat hazırlığı",
    "ABD Ankara Büyükelçiliği randevu",
    "Çukurambar vize danışmanlık",
    "Ankara Amerika turist vizesi",
    "Amerika vize reddi çözümü Ankara"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/ankara-amerika-vizesi", // Sayfa URL'niz
  }
};
const Page = () => {
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "name": "AYA Journey Ankara",
          "image": "https://www.ayajourney.com/images/logo.png",
          "@id": "https://www.ayajourney.com/ankara-amerika-vizesi",
          "url": "https://www.ayajourney.com/ankara-amerika-vizesi",
          "telephone": "+903128701584",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kızılırmak Mahallesi Ufuk Ünv. Caddesi No:3/49 Paragon Tower",
            "addressLocality": "Çankaya",
            "addressRegion": "Ankara",
            "postalCode": "06530",
            "addressCountry": "TR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 39.9048, // Ofisinizin tam koordinatları (isteğe bağlı)
            "longitude": 32.8092
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        },
        {
          "@type": "Service",
          "serviceType": "Amerika Vize Danışmanlığı",
          "provider": { "@id": "https://www.ayajourney.com/ankara-amerika-vizesi" },
          "areaServed": {
            "@type": "City",
            "name": "Ankara"
          },
          "description": "DS-160 form hazırlığı, Ankara Büyükelçiliği mülakat provası ve randevu takip hizmeti."
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Ankara'daki mülakatlar ne kadar sürüyor?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mülakatın kendisi genellikle 2-5 dakika sürer ancak hazırladığınız belgelerin ve DS-160 formunun bu süre zarfında tutarlı olması hayati önem taşır."
              }
            },
            {
              "@type": "Question",
              "name": "Amerika vizesi için en erken randevu tarihi nedir?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ABD Ankara Büyükelçiliği'nde randevu yoğunluğu dönemsel olarak değişir. AYA Journey Ankara ofisimiz, erken randevu yakalamak için sistem takibi sağlamaktadır."
              }
            }
          ]
        }
      ]
    })
  }}
/>
      <main className="max-w-300 mx-auto px-4 py-12 text-gray-900 leading-relaxed">
      
      {/* 1. HERO: Mülakat ve DS-160 Vurgusu */}
      <section className="mb-16">
        <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
          Ankara'nın En Yüksek Onay Oranlı Amerika Vize Merkezi
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">
          Amerika Vize Danışmanlığı Ankara: Mülakat Odaklı Destek
        </h1>

        <p className="text-xl text-gray-700 max-w-4xl mb-6">
          <strong>AYA Journey Ankara</strong>, ABD vize başvurularında en kritik aşama olan 
          mülakat süreci ve DS-160 form doldurma aşamalarında uzmanlaşmıştır. 
          Çukurambar ofisimizde, Amerika vizesi reddi sonrası çözümler ve ilk başvurular için stratejik danışmanlık sağlıyoruz.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="/randevu" className="inline-block bg-blue-800 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-900 transition shadow-lg">
            Ücretsiz Ön Analiz & Randevu
          </a>
          <a href="tel:+903128701584" className="inline-block bg-white border-2 border-gray-300 text-gray-800 font-bold px-8 py-4 rounded-lg hover:bg-gray-50 transition">
            Uzmana Sorun
          </a>
        </div>
      </section>

      {/* 2. AMERİKA VİZESİ ÖZEL HİZMET KARTLARI */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Neden AYA Journey Ankara?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all border-b-4 border-b-blue-600">
            <h3 className="text-xl font-bold mb-4">Kusursuz DS-160 Formu</h3>
            <p className="text-gray-600">Vize kararının %70'ini belirleyen DS-160 formunuzu, profilinize en uygun şekilde İngilizce olarak dolduruyoruz.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all border-b-4 border-b-blue-600">
            <h3 className="text-xl font-bold mb-4">Mülakat Simülasyonu</h3>
            <p className="text-gray-600">Büyükelçilikteki mülakat öncesi, çıkması muhtemel sorular üzerinden birebir İngilizce/Türkçe prova yapıyoruz.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all border-b-4 border-b-blue-600">
            <h3 className="text-xl font-bold mb-4">Randevu Takibi</h3>
            <p className="text-gray-600">Amerika vize randevularındaki yoğunlukta, en erken tarihi yakalamak için sistem takibi sağlıyoruz.</p>
          </div>
        </div>
      </section>

      {/* 3. VİZE TÜRLERİ (ANKARA LOKAL ODAKLI) */}
      <section className="mb-16 bg-slate-50 p-10 rounded-3xl">
        <h2 className="text-3xl font-bold mb-8">Ankara'dan Başvurabileceğiniz Amerika Vize Türleri</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          <li className="flex gap-3 bg-white p-4 rounded-lg shadow-sm">
            <span className="text-blue-600 font-bold">●</span>
            <strong>B1/B2 Turist ve İş Vizesi:</strong> Turistik geziler ve ticari toplantılar için 10 yıllık başvuru süreci.
          </li>
          <li className="flex gap-3 bg-white p-4 rounded-lg shadow-sm">
            <span className="text-blue-600 font-bold">●</span>
            <strong>F1 Öğrenci Vizesi:</strong> I-20 belgesi sonrası mülakat hazırlığı ve finansal analiz.
          </li>
          <li className="flex gap-3 bg-white p-4 rounded-lg shadow-sm">
            <span className="text-blue-600 font-bold">●</span>
            <strong>J1 Değişim Programı:</strong> Work and Travel, Internship ve staj vizesi süreçleri.
          </li>
          <li className="flex gap-3 bg-white p-4 rounded-lg shadow-sm">
            <span className="text-blue-600 font-bold">●</span>
            <strong>Amerika Vize Yenileme:</strong> Mülakata girmeden posta yoluyla vize uzatma işlemleri.
          </li>
        </ul>
      </section>

      {/* 4. LOKASYON: ABD ANKARA BÜYÜKELÇİLİĞİNE YAKINLIK */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Çukurambar Ofisimiz</h2>
            <p className="text-gray-700 mb-4 text-lg">
              Ankara ofisimiz, mülakatların gerçekleştiği <strong>ABD Ankara Büyükelçiliği</strong>'ne ve 
              <strong> Söğütözü, Kızılay, Mevlana Bulvarı</strong> gibi ana arterlere dakikalar mesafesindedir.
            </p>
            <p className="text-gray-700 italic">
              "Amerika vizesi için Çukurambar'da güvenli ve profesyonel adres: AYA Journey."
            </p>
          </div>
          <div className="bg-blue-900 h-64 rounded-3xl flex flex-col items-center justify-center text-white p-8">
            <p className="text-2xl font-bold mb-2 text-center">Mülakata Hazır mısınız?</p>
            <p className="text-center opacity-80 mb-6 font-light">Eksik belge veya yanlış form bilgisi nedeniyle vizenizi tehlikeye atmayın.</p>
            <a href="/iletisim" className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold">Yol Tarifi ve İletişim</a>
          </div>
        </div>
      </section>

      {/* 5. ANKARA AMERİKA VİZESİ SSS (SEO Boost) */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Ankara Amerika Vizesi Hakkında Merak Edilenler</h2>
        <div className="space-y-4">
          <details className="group border border-gray-200 p-6 rounded-xl cursor-pointer hover:bg-gray-50">
            <summary className="font-bold text-lg list-none flex justify-between items-center">
              Ankara'daki mülakatlar ne kadar sürüyor?
              <span className="group-open:rotate-180 transition">▼</span>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">Mülakatın kendisi genellikle 2-5 dakika sürer ancak hazırladığınız belgelerin ve DS-160 formunun bu süre zarfında tutarlı olması hayati önem taşır. Biz bu kısa süreyi en iyi şekilde yönetmeniz için sizi hazırlıyoruz.</p>
          </details>
          <details className="group border border-gray-200 p-6 rounded-xl cursor-pointer hover:bg-gray-50">
            <summary className="font-bold text-lg list-none flex justify-between items-center">
              Amerika vizesi için en erken randevu tarihi nedir?
              <span className="group-open:rotate-180 transition">▼</span>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">ABD Ankara Büyükelçiliği'nde randevu yoğunluğu dönemsel olarak değişir. AYA Journey olarak acil seyahat planlarınız için randevu takip sistemimizle en uygun tarihi yakalamaya çalışıyoruz.</p>
          </details>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-black rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            ABD Vize Başvurunuzda Riskleri Sıfırlayın
          </h2>
          <p className="text-blue-900 mb-10 text-lg max-w-2xl mx-auto">
            Ankara'nın uzman ekibiyle DS-160 formunuzu eksiksiz dolduralım ve mülakat simülasyonu ile vizenizi onaylatalım.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/iletisim" className="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg">
              Randevu Alın
            </a>
            <a href="https://wa.me/905302199056" className="bg-green-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition shadow-lg">
              WhatsApp Destek
            </a>
          </div>
        </div>
      </section>

    </main>
    </>
  
  );
};

export default Page;