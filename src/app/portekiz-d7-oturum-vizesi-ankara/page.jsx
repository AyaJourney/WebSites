import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Portekiz D7 Vizesi Danışmanlığı Ankara | Oturum İzni & NIF",
  description: "Ankara'da Portekiz D7 (Pasif Gelir) vizesi uzmanı. NIF alımı, banka hesabı açılışı ve Portekiz Ankara Büyükelçiliği dosya hazırlığı ile Avrupa'da oturum izni alın.",
  keywords: [
    "Portekiz D7 vizesi Ankara",
    "Portekiz oturum izni danışmanlık",
    "Portekiz pasif gelir vizesi",
    "Portekiz NIF numarası alma Ankara",
    "Portekiz banka hesabı açılışı",
    "Portekiz Ankara Büyükelçiliği D7 başvurusu",
    "Çukurambar vize danışmanlık Portekiz",
    "Portekiz vatandaşlığı vize süreci"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/portekiz-d7-oturum-vizesi-ankara", 
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
          "name": "AYA Journey Ankara - Portekiz D7 Uzmanı",
          "image": "https://www.ayajourney.com/images/portugal-d7-ankara.jpg",
          "@id": "https://www.ayajourney.com/portekiz-d7-vizesi-ankara",
          "url": "https://www.ayajourney.com/portekiz-d7-vizesi-ankara",
          "telephone": "+903128701584",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kızılırmak Mahallesi Ufuk Üniversitesi Caddesi No:3 Paragon Tower",
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
          "serviceType": "Portekiz D7 Oturum Vizesi Danışmanlığı",
          "provider": { "@id": "https://www.ayajourney.com/portekiz-d7-vizesi-ankara" },
          "description": "NIF alımı, Portekiz banka hesabı açılışı ve finansal yeterlilik dosyası hazırlığı dahil tam kapsamlı D7 vizesi süreci.",
          "areaServed": {
            "@type": "Country",
            "name": "Türkiye"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Portekiz D7 vizesi için ne kadar pasif gelir gerekir?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Portekiz asgari ücretine bağlı olarak ana başvuru sahibi için aylık yaklaşık 820€ (2025 yılı için) düzenli pasif gelir belgelenmelidir."
              }
            },
            {
              "@type": "Question",
              "name": "D7 vizesi ile Portekiz vatandaşlığı alınabilir mi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Evet, D7 vizesi ile alınan oturum izni sayesinde Portekiz'de 5 yıl ikamet ettikten sonra Portekiz vatandaşlığına başvuru hakkı kazanılır."
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
    <div className="inline-block bg-emerald-50 text-emerald-700 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-emerald-100">
      Portekiz'de Yeni Bir Yaşam: D7 Vizesi Uzmanı
    </div>

    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">
      Portekiz D7 Oturum Vizesi Danışmanlığı Ankara
    </h1>

    <p className="text-xl text-gray-700 max-w-4xl mb-6">
      <strong>AYA Journey Ankara</strong>, 
      <Link href="/portekiz-d7-vize" className="text-emerald-700 font-semibold hover:underline mx-1">
        Portekiz D7 vizesi
      </Link>
      ile Avrupa’da yasal oturum almanız için tüm süreci yönetir. 
      Ayrıca standart 
      <Link href="/portekiz-vize" className="text-emerald-700 font-semibold hover:underline mx-1">
        Portekiz Schengen vizesi
      </Link>
      başvurularında da uzman destek sunar.
    </p>

    <div className="flex flex-wrap gap-4 mt-8">
      <Link href="/vize-alma-ihtimalinizi-olcun" className="inline-block bg-emerald-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-emerald-800 transition shadow-lg">
        Ücretsiz Uygunluk Analizi Yap
      </Link>

      <Link href="/iletisim" className="inline-block bg-white border-2 border-emerald-700 text-emerald-700 font-bold px-8 py-4 rounded-lg hover:bg-emerald-50 transition">
        Uzmanımızla Görüşün
      </Link>
    </div>
  </section>

  {/* D7 AVANTAJLARI */}
  <section className="mb-16 grid md:grid-cols-3 gap-6">
    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
      <h3 className="text-lg font-bold mb-2 text-emerald-800">Schengen Serbest Dolaşım</h3>
      <p className="text-sm text-gray-600">
        D7 oturum kartınız ile 
        <Link href="/schengen-vizesi" className="text-emerald-700 font-semibold hover:underline mx-1">
          Schengen bölgesinde
        </Link>
        serbest dolaşım hakkı.
      </p>
    </div>

    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
      <h3 className="text-lg font-bold mb-2 text-emerald-800">Aile Birleşimi</h3>
      <p className="text-sm text-gray-600">
        Eş ve çocuklar için eş zamanlı başvuru imkanı.
      </p>
    </div>

    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
      <h3 className="text-lg font-bold mb-2 text-emerald-800">Vatandaşlık Yolu</h3>
      <p className="text-sm text-gray-600">
        5 yıl sonunda AB vatandaşlığı başvurusu hakkı.
      </p>
    </div>
  </section>

  {/* SÜREÇ */}
  <section className="mb-16">
    <h2 className="text-3xl font-bold mb-8">
      Ankara’da Portekiz D7 Süreci
    </h2>

    <div className="space-y-6">

      <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
        <h3 className="font-bold text-lg mb-2">Finansal Dosya & Evraklar</h3>
        <p className="text-sm text-gray-600">
          D7 başvurusunda kritik olan pasif gelir belgeleri için detaylı kontrol listesi:
        </p>
        <Link href="/portekiz-vize-evraklari" className="text-emerald-700 font-semibold hover:underline">
          Portekiz Vize Evrakları →
        </Link>
      </div>

      <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
        <h3 className="font-bold text-lg mb-2">Randevu ve Büyükelçilik Süreci</h3>
        <p className="text-sm text-gray-600">
          Ankara Portekiz Büyükelçiliği randevu süreci hakkında detaylı rehber:
        </p>
        <Link href="/portekiz-vize-randevusu" className="text-emerald-700 font-semibold hover:underline">
          Portekiz Randevu Rehberi →
        </Link>
      </div>

      <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
        <h3 className="font-bold text-lg mb-2">Ret Riskini Azaltma</h3>
        <p className="text-sm text-gray-600">
          D7 reddi nadir olsa da finansal yetersizlik en büyük risktir.
        </p>
        <Link href="/portekiz-vize-reddi" className="text-emerald-700 font-semibold hover:underline">
          Portekiz Vize Reddi Nedenleri →
        </Link>
      </div>

    </div>
  </section>

  {/* LOKAL SEO */}
  <section className="mb-16 bg-emerald-900 rounded-3xl p-10 text-white">
    <h2 className="text-3xl font-bold mb-4">
      Ankara Vize Danışmanlığı Merkezi
    </h2>

    <p className="text-emerald-100 mb-4">
      D7 gibi uzun dönem oturum vizeleri profesyonel planlama gerektirir.
      <Link href="/ankara-vize-danismanligi" className="text-white font-semibold underline mx-1">
        Ankara vize danışmanlığı
      </Link>
      ekibimiz ile süreci güvenle yönetin.
    </p>
  </section>

  {/* FINAL CTA */}
  <section className="bg-slate-100 rounded-3xl p-12 text-center border border-slate-200">
    <h2 className="text-3xl font-bold mb-6 italic">
      Portekiz’de Yeni Bir Sayfa Açmaya Hazır mısınız?
    </h2>

    <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
      D7 vizesi uygunluğunuzu hemen test edin.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link href="/vize-alma-ihtimalinizi-olcun" className="bg-emerald-800 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-900 transition">
        Uygunluk Testi Yap
      </Link>

      <Link href="/iletisim" className="bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition">
        İletişime Geç
      </Link>
    </div>
  </section>

</main>
    </>

  );
};

export default Page;