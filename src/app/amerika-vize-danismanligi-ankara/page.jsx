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
    canonical: "https://www.ayajourney.com/amerika-vize-danismanligi-ankara", // Sayfa URL'niz
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
<main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

  {/* HERO */}
  <section className="mb-20">
    <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-6">
      Ankara ABD Büyükelçiliği Odaklı Profesyonel Destek
    </div>

    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
      Amerika Vize Danışmanlığı Ankara
      <br />
      <span className="text-blue-600 italic">
        Mülakat Stratejisi & DS-160 Uzmanlığı
      </span>
    </h1>

    <p className="text-lg text-gray-700 max-w-4xl mb-6 leading-relaxed">
      <strong>Amerika vize danışmanlığı Ankara</strong> hizmetimiz,
      ABD Ankara Büyükelçiliği mülakat sistemine özel olarak yapılandırılmıştır.
      Çukurambar ofisimizde, <strong>Ankara Amerika vizesi</strong> başvurularında
      DS-160 form doldurma, randevu takibi ve mülakat hazırlığı konularında
      profesyonel destek sağlıyoruz.
    </p>

    <div className="flex flex-wrap gap-4 mt-8">
      <a href="/randevu" className="bg-blue-800 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-900 transition shadow-lg">
        Ücretsiz Ön Analiz
      </a>
      <a href="tel:+903128701584" className="bg-white border-2 border-gray-300 text-gray-800 font-bold px-8 py-4 rounded-lg hover:bg-gray-50 transition">
        Ankara Ofisini Arayın
      </a>
    </div>
  </section>


  {/* ANKARA ODAKLI SEO BLOK */}
  <section className="mb-20 max-w-4xl">
    <h2 className="text-3xl font-black mb-6">
      Ankara Amerika Vizesi Başvurusu Nasıl Yapılır?
    </h2>

    <p className="text-gray-700 leading-relaxed mb-4">
      Ankara’dan Amerika vizesi başvurusu yapmak isteyen adaylar,
      DS-160 formunu doldurduktan sonra ABD Ankara Büyükelçiliği’nden
      randevu alarak mülakata katılır.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Amerika vize danışmanlık şirketi olarak,
      Ankara’daki mülakat memurlarının odaklandığı
      kriterlere göre başvurunuzu stratejik biçimde yapılandırıyoruz.
    </p>
  </section>


  {/* HİZMET KARTLARI */}
  <section className="mb-20">
    <h2 className="text-3xl font-bold mb-8 text-center">
      Neden Ankara’da AYA Journey?
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition border-b-4 border-b-blue-600">
        <h3 className="text-xl font-bold mb-4">Stratejik DS-160</h3>
        <p className="text-gray-600">
          DS-160 formu, vize kararının temelidir.
          Amerika vize danışmanı ekibimiz,
          formu profilinize uygun stratejiyle hazırlar.
        </p>
      </div>

      <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition border-b-4 border-b-blue-600">
        <h3 className="text-xl font-bold mb-4">Ankara Mülakat Simülasyonu</h3>
        <p className="text-gray-600">
          Ankara ABD Büyükelçiliği mülakat dinamiklerine uygun
          birebir prova yapıyoruz.
        </p>
      </div>

      <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition border-b-4 border-b-blue-600">
        <h3 className="text-xl font-bold mb-4">Randevu Takibi</h3>
        <p className="text-gray-600">
          ABD vize randevu yoğunluğunda
          en erken tarihi yakalamak için sistemli takip sağlıyoruz.
        </p>
      </div>
    </div>
  </section>


  {/* VİZE TÜRLERİ */}
  <section className="mb-20 bg-slate-50 p-12 rounded-3xl">
    <h2 className="text-3xl font-bold mb-8">
      Ankara’dan Başvurulan Amerika Vize Türleri
    </h2>

    <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
      <li><strong>B1/B2 Vizesi:</strong> Turistik ve ticari seyahatler</li>
      <li><strong>F1 Öğrenci Vizesi:</strong> I-20 sonrası mülakat hazırlığı</li>
      <li><strong>J1 Programı:</strong> Work and Travel & staj</li>
      <li><strong>Vize Yenileme:</strong> Posta ile yenileme işlemleri</li>
    </ul>
  </section>


  {/* LOKASYON GÜÇLENDİRME */}
  <section className="mb-20">
    <h2 className="text-3xl font-bold mb-6">
      Çukurambar Amerika Vize Merkezi
    </h2>

    <p className="text-gray-700 leading-relaxed mb-4">
      Ofisimiz Çukurambar’da, ABD Ankara Büyükelçiliği’ne
      dakikalar mesafededir.
      Söğütözü, Kızılay ve Mevlana Bulvarı’na yakın konumdayız.
    </p>

    <p className="text-gray-700">
      “Ankara’da Amerika vize danışmanlığı” arayanlar için
      güvenli ve profesyonel çözüm: AYA Journey.
    </p>
  </section>


  {/* FAQ SEO BOOST */}
  <section className="mb-20">
    <h2 className="text-3xl font-bold mb-8">
      Ankara Amerika Vizesi Hakkında Sorular
    </h2>

    <div className="space-y-6">

      <div>
        <h3 className="font-bold text-lg mb-2">
          Ankara Amerika vizesi mülakatı kaç dakika sürer?
        </h3>
        <p className="text-gray-600">
          Genellikle 2-5 dakika sürer.
          Ancak mülakatın sonucu DS-160 formu ve verilen cevapların
          tutarlılığına bağlıdır.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-2">
          Ankara Amerika vize danışmanlığı gerekli mi?
        </h3>
        <p className="text-gray-600">
          Zorunlu değildir.
          Ancak özellikle ilk başvurularda ve ret sonrası
          profesyonel danışmanlık onay ihtimalini artırır.
        </p>
      </div>

    </div>
  </section>


  {/* FINAL CTA */}
  <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-black rounded-3xl p-12 text-center text-white shadow-2xl">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
      Ankara Amerika Vize Başvurunuzda Risk Almayın
    </h2>

    <p className="mb-8 text-lg max-w-2xl mx-auto">
      DS-160 formunuzu birlikte dolduralım,
      mülakat simülasyonu yapalım ve
      Amerika vize onay ihtimalinizi artırın.
    </p>

    <div className="flex flex-wrap justify-center gap-6">
      <a href="/iletisim" className="bg-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition">
        Randevu Alın
      </a>
      <a href="https://wa.me/905302199056" className="bg-green-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition">
        WhatsApp Destek
      </a>
    </div>
  </section>

</main>

    </>
  
  );
};

export default Page;