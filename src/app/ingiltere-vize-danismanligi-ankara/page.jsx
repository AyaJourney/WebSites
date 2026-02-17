import Link from "next/link";
import React from "react";
export const metadata = {
  title: "İngiltere Vize Danışmanlığı Ankara | Çukurambar Başvuru Merkezi",
  description: "Ankara İngiltere vizesi başvurularında %98 onay başarısı. Çukurambar ofisimizde profesyonel dosya hazırlığı, TLS Contact randevu takibi ve öğrenci vizeleri.",
  keywords: [
    "İngiltere vizesi Ankara",
    "İngiltere vize danışmanlık Ankara",
    "Ankara İngiltere vize başvuru merkezi",
    "TLS Contact Ankara randevu",
    "İngiltere turist vizesi Ankara",
    "Ankara İngiltere öğrenci vizesi",
    "Çukurambar İngiltere vizesi",
    "İngiltere vize ücreti 2026"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/ingiltere-vize-danismanligi-ankara", 
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
          "name": "AYA Journey Ankara - İngiltere Vize Merkezi",
          "image": "https://www.ayajourney.com/images/ankara-uk-visa.jpg",
          "@id": "https://www.ayajourney.com/ankara-ingiltere-vizesi",
          "url": "https://www.ayajourney.com/ankara-ingiltere-vizesi",
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
            "latitude": 39.9048,
            "longitude": 32.8092
          }
        },
        {
          "@type": "Service",
          "serviceType": "İngiltere Vize Danışmanlığı",
          "provider": { "@id": "https://www.ayajourney.com/ankara-ingiltere-vizesi" },
          "description": "Ankara İngiltere Büyükelçiliği ve TLS Contact süreçlerine tam uyumlu dosya hazırlığı ve niyet mektubu danışmanlığı.",
          "areaServed": {
            "@type": "City",
            "name": "Ankara"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Ankara'da İngiltere vize başvurusu nereye yapılır?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ankara'daki parmak izi ve biyometrik işlemler Söğütözü'nde bulunan TLS Contact merkezinde gerçekleştirilir. AYA Journey olarak dosyanızı bu randevuya tam uyumlu hale getiriyoruz."
              }
            },
            {
              "@type": "Question",
              "name": "İngiltere vizesi Ankara'da kaç günde çıkar?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standart başvurular genellikle 15 iş günü içinde sonuçlanır. Ekspres servisler (Priority) ile bu süre 5 iş gününe kadar düşebilir."
              }
            }
          ]
        }
      ]
    })
  }}
/>
<main className="max-w-300 mx-auto px-4 py-12 mt-5 text-gray-900 leading-relaxed">

  {/* HERO */}
  <section className="mb-16">
    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">
      İngiltere Vize Danışmanlığı Ankara: Uzman Başvuru Merkezi
    </h1>

    <p className="text-xl text-gray-700 max-w-4xl mb-6">
      <strong>AYA Journey Ankara</strong>, Başkent’te 
      <Link href="/ingiltere-vizesi" className="text-red-700 font-semibold hover:underline mx-1">
        İngiltere vizesi
      </Link>
      süreçlerinizi profesyonelce yönetir. 
      <Link href="/birlesik-krallik-vize-evraklari" className="text-red-700 font-semibold hover:underline mx-1">
        İngiltere vize evrakları
      </Link>
      kriterlerine tam uyumlu dosya hazırlığı ve %98 başarı oranıyla hizmetinizdeyiz.
    </p>

    <div className="flex flex-wrap gap-4 mt-8">
      <Link href="/randevu" className="inline-block bg-red-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-red-800 transition shadow-lg">
        Ankara Randevusu İçin Tıklayın
      </Link>

      <a
        href="https://wa.me/905302199056?text=Merhaba%2C%20İngiltere%20vize%20başvurusu%20için%20bilgi%20almak%20istiyorum."
        className="inline-block bg-white border-2 border-gray-300 text-gray-800 font-bold px-8 py-4 rounded-lg hover:bg-gray-50 transition"
      >
        Hemen Bilgi Al
      </a>
    </div>
  </section>

  {/* HİZMETLER */}
  <section className="mb-16">
    <h2 className="text-3xl font-bold mb-8">Ankara İngiltere Vize Hizmetlerimiz</h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">

      <Link href="/ingiltere-vizesi" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-red-200 transition">
        <h3 className="text-xl font-bold mb-3 text-gray-800">Turist & Ziyaretçi Vizesi</h3>
        <p className="text-sm">
          İngiltere turist ve ziyaretçi vizelerinde profesyonel başvuru stratejisi.
        </p>
      </Link>

      <Link href="/birlesik-krallik-vize-evraklari" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-red-200 transition">
        <h3 className="text-xl font-bold mb-3 text-gray-800">Evrak Hazırlık & Dosya Güçlendirme</h3>
        <p className="text-sm">
          İngiltere vize evrak listesi ve banka analiz süreci.
        </p>
      </Link>

      <Link href="/ingiltere-vize-reddi-nedenleri" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-red-200 transition">
        <h3 className="text-xl font-bold mb-3 text-gray-800">Vize Reddi Analizi</h3>
        <p className="text-sm">
          İngiltere ret nedenleri ve yeniden başvuru stratejisi.
        </p>
      </Link>

    </div>
  </section>

  {/* RANDEVU BLOĞU */}
  <section className="mb-16 bg-slate-50 p-8 rounded-2xl border border-gray-200">
    <h2 className="text-2xl font-bold mb-4">Ankara TLS Contact Randevu Süreci</h2>

    <p className="text-gray-700 mb-4">
      İngiltere vize başvuruları Ankara’da 
      <Link href="/ingiltere-vize-randevusu-nasil-alinir" className="text-red-700 font-semibold hover:underline mx-1">
        TLS Contact randevu sistemi
      </Link>
      üzerinden yapılır. Randevu yoğunluğu dönemsel olarak artmaktadır.
    </p>

    <Link href="/ingiltere-vize-randevusu-nasil-alinir" className="text-red-700 font-bold hover:underline">
      İngiltere Randevu Nasıl Alınır? →
    </Link>
  </section>

  {/* ÇAPRAZ SEO BAĞLANTI */}
  <section className="mb-16">
    <h2 className="text-2xl font-bold mb-6">Diğer Popüler Vize Danışmanlık Hizmetlerimiz</h2>

    <div className="grid md:grid-cols-3 gap-4 font-semibold">

      <Link href="/amerika-vizesi" className="hover:underline text-blue-700">
        Amerika Vizesi →
      </Link>

      <Link href="/schengen-vizesi" className="hover:underline text-blue-700">
        Schengen Vizesi →
      </Link>

      <Link href="/kanada-vize-randevusu-nasil-alinir" className="hover:underline text-blue-700">
        Kanada Vizesi →
      </Link>

      <Link href="/ingiltere-vize-danismanligi-istanbul" className="hover:underline text-blue-700">
        İngiltere Vize Danışmanlığı İstanbul →
      </Link>

      <Link href="/ankara-vize-danismanligi" className="hover:underline text-blue-700">
        Ankara Vize Danışmanlığı →
      </Link>

      <Link href="/vize-reddi-itiraz-rehberi" className="hover:underline text-blue-700">
        Vize Reddi İtiraz Rehberi →
      </Link>

    </div>
  </section>

  {/* FINAL CTA */}
  <section className="bg-red-800 rounded-3xl p-10 text-center text-white shadow-xl">
    <h2 className="text-3xl font-bold mb-4">
      İngiltere Vize Sürecinizi Şansa Bırakmayın
    </h2>

    <p className="text-red-100 mb-8 max-w-2xl mx-auto">
      Eksiksiz evrak, doğru finansal analiz ve profesyonel başvuru stratejisi ile ret riskini minimize edin.
    </p>

    <Link href="/randevu" className="bg-white text-red-800 px-12 py-4 rounded-full font-extrabold text-lg hover:bg-gray-100 transition inline-block">
      Ücretsiz Randevu Oluştur
    </Link>
  </section>

</main>
    </>
 
  );
};

export default Page;