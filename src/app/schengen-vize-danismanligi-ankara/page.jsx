import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Schengen Vize Danışmanlığı Ankara | Hızlı Randevu & Onay",
  description: "Ankara Schengen vizesi başvurularında uzman desteği. Çukurambar ofisimizde Almanya, Fransa, İtalya vize randevusu, dosya hazırlığı ve sigorta işlemleri.",
  keywords: [
    "Schengen vizesi Ankara",
    "Ankara vize danışmanlık",
    "Almanya vize randevusu Ankara",
    "Fransa vizesi Ankara VFS",
    "İtalya vize başvurusu iData Ankara",
    "Schengen vize reddi itiraz Ankara",
    "Çukurambar vize merkezi",
    "Ankara Hollanda vize randevusu"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/schengen-vize-danismanligi-ankara", 
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
          "name": "AYA Journey Ankara - Schengen Vize Merkezi",
          "image": "https://www.ayajourney.com/images/ankara-schengen-visa.jpg",
          "@id": "https://www.ayajourney.com/ankara-schengen-vizesi",
          "url": "https://www.ayajourney.com/ankara-schengen-vizesi",
          "telephone": "+90XXXXXXXXXX", // Telefon numaranızı güncelleyin
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kızılırmak Mahallesi Ufuk Ünv. Caddesi No:3 Paragon Tower",
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
          "serviceType": "Schengen Vize Danışmanlığı",
          "provider": { "@id": "https://www.ayajourney.com/ankara-schengen-vizesi" },
          "areaServed": {
            "@type": "City",
            "name": "Ankara"
          },
          "description": "Almanya, İtalya, Fransa ve Hollanda başta olmak üzere tüm Schengen ülkeleri için randevu alımı ve dosya hazırlığı."
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Ankara'da Schengen vize randevusu nasıl bulunur?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ankara'daki yoğunluk nedeniyle randevular hızla dolmaktadır. AYA Journey olarak iData, VFS Global ve AS Travel sistemlerini 7/24 takip ederek uygun randevuyu yakalıyoruz."
              }
            },
            {
              "@type": "Question",
              "name": "Schengen vizesi için seyahat sigortası zorunlu mu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Evet, tüm Schengen ülkeleri için 30.000 Euro teminatlı seyahat sağlık sigortası zorunludur. Ankara ofisimizde bu işlemi anında gerçekleştiriyoruz."
              }
            }
          ]
        }
      ]
    })
  }}
/>
<main className="max-w-300 mx-auto px-4 py-12 text-gray-900 leading-relaxed">

  {/* HERO */}
  <section className="mb-16">
    <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-blue-100">
      Ankara'nın En Hızlı Schengen Randevu & Başvuru Merkezi
    </div>

    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">
      Schengen Vize Danışmanlığı Ankara: Kolay ve Hızlı Onay
    </h1>

    <p className="text-xl text-gray-700 max-w-4xl mb-6">
      <strong>AYA Journey Ankara</strong>, Avrupa seyahatleriniz için 
      <Link href="/schengen-vize" className="text-blue-700 font-semibold hover:underline ml-1">
        Schengen vize sürecini
      </Link>
      profesyonel şekilde yönetir.
      Almanya, Fransa, İtalya, Hollanda ve tüm Avrupa ülkeleri için 
      <strong> yüksek onay oranlı </strong> dosya hazırlığı sağlıyoruz.
    </p>

    <div className="flex flex-wrap gap-4 mt-8">
      <Link href="/iletisim" className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-700 transition shadow-xl">
        Ücretsiz Ön Değerlendirme Al
      </Link>
      <a href="tel:+903128701584" className="inline-block bg-white border-2 border-gray-300 text-gray-800 font-bold px-8 py-4 rounded-lg hover:bg-gray-50 transition">
        Hemen Ara
      </a>
    </div>
  </section>

  {/* POPÜLER ÜLKELER */}
  <section className="mb-16">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">

      <Link href="/almanya-vize" className="p-4 border border-gray-100 rounded-xl bg-slate-50 hover:shadow-lg transition">
        <p className="font-bold text-blue-700 text-lg">Almanya</p>
        <p className="text-xs text-gray-500">iData Süreci</p>
      </Link>

      <Link href="/italya-vize" className="p-4 border border-gray-100 rounded-xl bg-slate-50 hover:shadow-lg transition">
        <p className="font-bold text-blue-700 text-lg">İtalya</p>
        <p className="text-xs text-gray-500">iData Randevu</p>
      </Link>

      <Link href="/fransa-vize" className="p-4 border border-gray-100 rounded-xl bg-slate-50 hover:shadow-lg transition">
        <p className="font-bold text-blue-700 text-lg">Fransa</p>
        <p className="text-xs text-gray-500">VFS Global</p>
      </Link>

      <Link href="/hollanda-vize" className="p-4 border border-gray-100 rounded-xl bg-slate-50 hover:shadow-lg transition">
        <p className="font-bold text-blue-700 text-lg">Hollanda</p>
        <p className="text-xs text-gray-500">VFS Randevu</p>
      </Link>

    </div>
  </section>

  {/* HİZMETLER */}
  <section className="mb-16">
    <h2 className="text-3xl font-bold mb-10 text-center">
      Ankara'da Schengen Vizesi İçin Doğru Adres
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      <div>
        <h3 className="font-bold text-xl mb-2">Hızlı Randevu Takibi</h3>
        <p className="text-gray-600">
          Ankara'da 
          <Link href="/vfs-global-vize-randevusu-nasil-alinir" className="text-blue-700 hover:underline mx-1">
            VFS Global
          </Link>
          ,
          <Link href="/almanya-vize-randevusu" className="text-blue-700 hover:underline mx-1">
            iData
          </Link>
          ve diğer merkezlerde açılan boş randevuları anlık takip ediyoruz.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-xl mb-2">Kişiye Özel Evrak Analizi</h3>
        <p className="text-gray-600">
          Standart liste yerine 
          <Link href="/schengen-vize-evraklari" className="text-blue-700 hover:underline mx-1">
            Schengen evrak stratejisi
          </Link>
          ile dosyanızı güçlendiriyoruz.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-xl mb-2">Ret Sonrası Destek</h3>
        <p className="text-gray-600">
          Eğer 
          <Link href="/schengen-vize-reddi-nedenleri" className="text-blue-700 hover:underline mx-1">
            Schengen vize reddi
          </Link>
          aldıysanız, dosyanızı analiz ederek yeniden başvuru planlıyoruz.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-xl mb-2">Seyahat Sigortası</h3>
        <p className="text-gray-600">
          30.000 Euro teminatlı Schengen sağlık sigortanızı anında düzenliyoruz.
        </p>
      </div>

    </div>
  </section>

  {/* LOKAL SEO İÇ LINK BOOST */}
  <section className="mb-16">
    <h2 className="text-2xl font-bold mb-6">
      En Çok Başvuru Yapılan Schengen Ülkeleri
    </h2>

    <div className="grid md:grid-cols-3 gap-4 font-semibold">

      <Link href="/yunanistan-vize" className="hover:underline text-blue-700">
        Yunanistan Vize →
      </Link>

      <Link href="/ispanya-vize" className="hover:underline text-blue-700">
        İspanya Vize →
      </Link>

      <Link href="/portekiz-vize" className="hover:underline text-blue-700">
        Portekiz Vize →
      </Link>

      <Link href="/macaristan-vize" className="hover:underline text-blue-700">
        Macaristan Vize →
      </Link>

      <Link href="/slovenya-vize" className="hover:underline text-blue-700">
        Slovenya Vize →
      </Link>

      <Link href="/cekya-vize" className="hover:underline text-blue-700">
        Çekya Vize →
      </Link>

    </div>
  </section>

  {/* FINAL CTA */}
  <section className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-3xl p-12 text-center text-white shadow-2xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Schengen Vizenizi Şansa Bırakmayın
    </h2>

    <p className="mb-8 text-lg max-w-2xl mx-auto">
      Ankara ofisimizde dosyanızı analiz edelim ve en doğru ülkeden başvuru yapalım.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link href="/iletisim" className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg">
        Randevu Sorgula
      </Link>

      <a
        href="https://wa.me/905302199056?text=Merhaba%2C%20Schengen%20vize%20başvurusu%20için%20bilgi%20almak%20istiyorum."
        className="bg-green-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition shadow-lg"
      >
        WhatsApp Bilgi Hattı
      </a>
    </div>
  </section>

</main>
    </>
  
  );
};

export default Page;