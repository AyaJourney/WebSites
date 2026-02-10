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
      
      {/* 1. HERO & H1: Ankara Anahtar Kelime Stratejisi */}
      <section className="mb-16">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">
          İngiltere Vize Danışmanlığı Ankara: Uzman Başvuru Merkezi
        </h1>

        <p className="text-xl text-gray-700 max-w-4xl mb-6">
          <strong>AYA Journey Ankara</strong>, Başkent’te İngiltere vizesi süreçlerinizi profesyonelce yönetir. 
          Çukurambar ofisimizde; İngiltere Büyükelçiliği kriterlerine tam uyumlu 
          dosya hazırlığı ve %98 başarı oranıyla hizmetinizdeyiz.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="/randevu" className="inline-block bg-red-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-red-800 transition shadow-lg">
            Ankara Randevusu İçin Tıklayın
          </a>
          <a href="tel:+903128701584" className="inline-block bg-white border-2 border-gray-300 text-gray-800 font-bold px-8 py-4 rounded-lg hover:bg-gray-50 transition">
            Hemen Bilgi Al
          </a>
        </div>
      </section>

      {/* 2. STATS & GÜVEN (ANKARA ÖZEL) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border-y border-gray-100 py-8 text-center bg-slate-50 rounded-xl">
        <div><p className="text-3xl font-bold text-red-700">10+</p><p className="text-sm text-gray-600">Yıllık Tecrübe</p></div>
        <div><p className="text-3xl font-bold text-red-700">Çukurambar</p><p className="text-sm text-gray-600">Merkezi Lokasyon</p></div>
        <div><p className="text-3xl font-bold text-red-700">Ankara</p><p className="text-sm text-gray-600">Vize Danışmanlığı</p></div>
        <div><p className="text-3xl font-bold text-red-700">%98</p><p className="text-sm text-gray-600">Onay Başarısı</p></div>
      </div>

      {/* 3. ANKARA HİZMET KAPSAMI */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Ankara İngiltere Vize Hizmetlerimiz</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-red-200 transition">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Turist & Ziyaretçi Vizesi</h3>
            <p className="text-sm">İngiltere'ye turistik gezi veya akraba ziyareti amacıyla gidecekler için profesyonel başvuru stratejisi.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-red-200 transition">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Tier 4 Öğrenci Vizesi</h3>
            <p className="text-sm">Ankara'daki üniversite öğrencileri için dil okulu, lisans ve yüksek lisans vize süreçleri yönetimi.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-red-200 transition">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Vize Reddi Analizi</h3>
            <p className="text-sm">Daha önce İngiltere'den ret almış Ankara merkezli başvuruların yeniden yapılandırılması.</p>
          </div>
        </div>
      </section>

      {/* 4. LOKASYON & LOKAL SEO (ÇUKURAMBAR VURGUSU) */}
      <section className="mb-16 bg-white rounded-3xl border-2 border-dashed border-gray-200 h-100">
  
        <div className="grid md:grid-cols-2 gap-4 items-start justify-start">
          <div className="p-10">
                  <h2 className="text-3xl font-bold mb-6">Ankara Ofisimiz ve Ulaşım</h2>
            <p className="text-gray-700 mb-4">
              Ankara ofisimiz, vize işlemlerinin kalbi olan <strong>Çukurambar</strong> bölgesinde yer almaktadır. 
              <strong> Kızılay, Söğütözü, Bahçelievler ve Eskişehir Yolu</strong> üzerinden ulaşım oldukça kolaydır.
            </p>
            <p className="text-gray-700">
              Ankara İngiltere başvuru merkezi (TLS Contact) ile koordineli çalışarak randevu süreçlerinizi hızlandırıyoruz.
            </p>
          </div>
          <div className="flex items-start justify-start">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d743.3320388142544!2d32.81232332649057!3d39.90887088085886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d349b988f4bea5%3A0x9c16ddcef1c2d4ae!2sAYA%20Journey!5e0!3m2!1str!2str!4v1770189697075!5m2!1str!2str" 
  width="600"         
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      {/* 5. ANKARA İÇİN SSS (SEO Boost) */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Sıkça Sorulan Sorular</h2>
        <div className="space-y-4">
          <details className="group p-4 bg-gray-50 rounded-lg cursor-pointer">
            <summary className="font-bold text-lg list-none flex justify-between items-center">
              Ankara'da İngiltere vize başvurusu nereye yapılır?
              <span className="group-open:rotate-180 transition">▼</span>
            </summary>
            <p className="mt-2 text-gray-600">Ankara'daki başvurular için parmak izi verme işlemi Söğütözü/Ankara adresindeki resmi TLS Contact merkezinde yapılır. Danışmanlık hizmetimizle dosyanızı bu aşamaya hazır hale getiriyoruz.</p>
          </details>
          <details className="group p-4 bg-gray-50 rounded-lg cursor-pointer">
            <summary className="font-bold text-lg list-none flex justify-between items-center">
              Ankara ofisinizde hangi vize türlerine bakılıyor?
              <span className="group-open:rotate-180 transition">▼</span>
            </summary>
            <p className="mt-2 text-gray-600">Turistik, Ticari, Öğrenci (Short-term/Student Visa), Aile Birleşimi ve Yerleşim vizelerinin tamamında uzman desteği sağlıyoruz.</p>
          </details>
        </div>
      </section>

      {/* 6. FINAL CTA: Güçlü Kapanış */}
      <section className="bg-red-800 rounded-3xl p-10 text-center text-white shadow-xl">
        <h2 className="text-3xl font-bold mb-4">
          İngiltere Vize Sürecinizi Şansa Bırakmayın
        </h2>
        <p className="text-red-100 mb-8 max-w-2xl mx-auto">
          Başkent’in en güvenilir danışmanlık firması ile çalışarak ret riskini minimize edin. 
          Eksiksiz evrak ve profesyonel niyet mektubu ile başvurunuzu güçlendirelim.
        </p>
        <a href="/randevu" className="bg-white text-red-800 px-12 py-4 rounded-full font-extrabold text-lg hover:bg-gray-100 transition inline-block">
          Ücretsiz Randevu Oluştur
        </a>
      </section>

    </main>
    </>
 
  );
};

export default Page;