import React from "react";
export const metadata = {
  title: "İngiltere Vize Danışmanlığı İstanbul | Maslak Ofisi & TLS Randevu",
  description: "İstanbul İngiltere vizesi başvurularında uzman desteği. Maslak ofisimizde kişiye özel evrak listesi, TLS Contact randevu yönetimi ve öğrenci/turist vizesi danışmanlığı.",
  keywords: [
    "İngiltere vizesi İstanbul",
    "İstanbul İngiltere vize danışmanlık",
    "Maslak vize merkezi",
    "Mecidiyeköy TLS Contact randevu",
    "Altunizade İngiltere vizesi",
    "İngiltere öğrenci vizesi İstanbul",
    "Sarıyer vize danışmanlığı",
    "İngiltere vize reddi itiraz İstanbul"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/istanbul-ingiltere-vizesi", 
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
          "name": "AYA Journey İstanbul - İngiltere Vize Danışmanlık",
          "image": "https://www.ayajourney.com/images/istanbul-uk-visa.jpg",
          "@id": "https://www.ayajourney.com/istanbul-ingiltere-vizesi",
          "url": "https://www.ayajourney.com/istanbul-ingiltere-vizesi",
          "telephone": "+905304853115",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Maslak Bilim Sokak No:5",
            "addressLocality": "Sarıyer",
            "addressRegion": "İstanbul",
            "postalCode": "34398",
            "addressCountry": "TR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.1128,
            "longitude": 29.0213
          }
        },
        {
          "@type": "Service",
          "serviceType": "İngiltere Vize Başvuru Danışmanlığı",
          "provider": { "@id": "https://www.ayajourney.com/istanbul-ingiltere-vizesi" },
          "areaServed": {
            "@type": "City",
            "name": "İstanbul"
          },
          "description": "İstanbul İngiltere vizesi başvuruları için profesyonel evrak hazırlığı, TLS Contact randevu yönetimi ve niyet mektubu desteği."
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "İngiltere vizesi İstanbul'da kaç günde çıkar?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standart başvurular 15 iş gününde sonuçlanır. Priority (Öncelikli) servis ile 5 iş gününde sonuç almak mümkündür."
              }
            },
            {
              "@type": "Question",
              "name": "İstanbul'da İngiltere parmak izi verme işlemi nerede yapılır?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "İstanbul'daki biyometrik işlemler Mecidiyeköy (Profilo AVM) veya Altunizade'deki resmi TLS Contact merkezlerinde yapılır."
              }
            }
          ]
        }
      ]
    })
  }}
/>
      <main className="max-w-300 mx-auto px-4 py-12 text-gray-900 mt-5 leading-relaxed">
      
      {/* 1. HERO & H1: Anahtar Kelime Odaklı Giriş */}
      <section className="mb-16">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
          İngiltere Vize Danışmanlığı İstanbul: Profesyonel Çözümler
        </h1>

        <p className="text-xl text-gray-700 max-w-4xl mb-6">
          <strong>AYA Journey</strong>, İstanbul Maslak ofisinde uzman danışman kadrosuyla 
          İngiltere vizesi süreçlerinizi %98’e varan başarı oranıyla yönetir. 
          Turist, öğrenci, çalışma ve aile birleşimi vizelerinde yanınızdayız.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="/randevu" className="inline-block bg-blue-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-800 transition shadow-lg">
            Ücretsiz Ön Değerlendirme Al
          </a>
          <a href="tel:+903128701584" className="inline-block bg-white border-2 border-gray-300 text-gray-800 font-bold px-8 py-4 rounded-lg hover:bg-gray-50 transition">
            Hemen Ara
          </a>
        </div>
      </section>

      {/* 2. SOSYAL KANIT & HIZLI BİLGİ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border-y border-gray-100 py-8 text-center">
        <div><p className="text-3xl font-bold text-blue-700">10+</p><p className="text-sm text-gray-600">Yıllık Tecrübe</p></div>
        <div><p className="text-3xl font-bold text-blue-700">5000+</p><p className="text-sm text-gray-600">Onaylanan Vize</p></div>
        <div><p className="text-3xl font-bold text-blue-700">Maslak</p><p className="text-sm text-gray-600">Merkezi Lokasyon</p></div>
        <div><p className="text-3xl font-bold text-blue-700">%98</p><p className="text-sm text-gray-600">Başarı Oranı</p></div>
      </div>

      {/* 3. HİZMET DETAYLARI: Semantik SEO İçin Alt Başlıklar */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">İstanbul İngiltere Vizesi Başvuru Türleri</h2>
        
        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-3 text-gray-800">İngiltere Turist Vizesi (Standard Visitor)</h3>
            <p>Tatil, iş görüşmeleri ve kısa süreli ziyaretler için 6 aylık, 2 yıllık veya 5 yıllık başvuru stratejileri oluşturuyoruz.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-3 text-gray-800">İngiltere Öğrenci Vizesi (Student Visa)</h3>
            <p>Dil okulu, lisans ve yüksek lisans kabulleri sonrası CAS belgesi ve finansal döküm analizleri ile eksiksiz başvuru sağlıyoruz.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-3 text-gray-800">İngiltere Vize Reddi İtirazları</h3>
            <p>Daha önce aldığınız ret kararlarını analiz ediyor, profesyonel niyet mektubu ve ek belgelerle dosyanızı güçlendiriyoruz.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Ankara Anlaşması & Çalışma Vizeleri</h3>
            <p>Skilled Worker ve güncel göçmenlik yasalarına uygun profesyonel dosya hazırlığı.</p>
          </div>
        </div>
      </section>

      {/* 4. NEDEN BİZ? - Güven Faktörü */}
      <section className="mb-16 bg-gray-50 p-8 rounded-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Neden AYA Journey İstanbul Ofisi?</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="flex items-start gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span><strong>Kişiye Özel Evrak Listesi:</strong> Her başvuru sahibinin mali ve sosyal durumuna özel check-list hazırlıyoruz.</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span><strong>Biyometri Randevu Yönetimi:</strong> İstanbul Profilo AVM veya Altunizade TLS Contact merkezlerinden hızlı randevu alımı.</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span><strong>Şeffaf Süreç:</strong> Başvurunuzun her aşamasında (online form, ödeme, randevu) anlık bilgilendirme.</span>
          </p>
        </div>
      </section>

      {/* 5. LOKAL SEO: Lokasyon Vurgusu */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl font-bold mb-4 italic text-gray-800">Maslak’ta İngiltere Vize Danışmanlığı</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-4">
          İstanbul’un her noktasından kolayca ulaşabileceğiniz Maslak ofisimizde, 
          <strong> Beşiktaş, Sarıyer, Şişli ve Kağıthane</strong> bölgelerine komşu konumdayız. 
          Yüz yüze veya online danışmanlık seçeneklerimizle hizmetinizdeyiz.
        </p>
      </section>

      {/* 6. SIKÇA SORULAN SORULAR (FAQ Schema İçin Önemli) */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Sıkça Sorulan Sorular</h2>
        <div className="space-y-6">
          <details className="group border-b pb-4 cursor-pointer">
            <summary className="font-bold text-lg list-none flex justify-between items-center">
              İngiltere vizesi kaç günde çıkar?
              <span className="group-open:rotate-180 transition">▼</span>
            </summary>
            <p className="mt-2 text-gray-600">Genellikle 15 iş günü içinde sonuçlanmaktadır. Ancak öncelikli servis (Priority) ile 5 iş gününde sonuç almak mümkündür.</p>
          </details>
          <details className="group border-b pb-4 cursor-pointer">
            <summary className="font-bold text-lg list-none flex justify-between items-center">
              Vize başvurusu için İstanbul'da nereye gitmeliyim?
              <span className="group-open:rotate-180 transition">▼</span>
            </summary>
            <p className="mt-2 text-gray-600">İstanbul'da resmi TLS Contact merkezleri (Mecidiyeköy veya Altunizade) üzerinden parmak izi verilir. Danışmanlık ve dosya hazırlığı ise Maslak ofisimizde yapılmaktadır.</p>
          </details>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="`bg-gradient-to-r` from-blue-900 to-black rounded-3xl p-12 text-center text-blue-900 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Vize Reddi Riski Almayın, Uzmanına Danışın!
        </h2>
        <p className="text-blue-900 mb-8 text-lg">
          İngiltere konsolosluk kriterlerine %100 uyumlu dosya hazırlığı için hemen randevu alın.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/iletisim" className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
            Hemen Başvur
          </a>
        </div>
      </section>

    </main>
    </>
  
  );
};

export default Page;