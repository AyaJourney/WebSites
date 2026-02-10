import React from 'react'
import VizeTestleriPage from './VisaTest'
export const metadata = {
  title: "Ücretsiz Vize Uygunluk Testi | 2 Dakikada Şansınızı Hesaplayın",
  description: "ABD, İngiltere ve Schengen vizesi alabilir misiniz? Ücretsiz vize testini çözün, finansal ve mesleki profilinize göre vize onay şansınızı anında öğrenin.",
  keywords: [
    "vize uygunluk testi",
    "vize şansımı hesapla",
    "ücretsiz vize analizi",
    "Schengen vize testi",
    "ABD vizesi alabilir miyim",
    "vize başvuru simülasyonu",
    "Amerika B1/B2 vize testi",
    "Amerika F1 vize testi",
    "Vize alma ihtimali",
    "vize onay şansı hesaplama",
    "vize başvuru değerlendirmesi",

  ],
   alternates: { canonical: "https://ayajourney.com/vize-alma-ihtimalinizi-olcun" }
};
const page = () => {
  return (
    <div>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Vize Uygunluk Testi ve Profil Analizi",
      "provider": {
        "@type": "ProfessionalService",
        "name": "AYA Journey",
        "url": "https://www.ayajourney.com",
        "logo": "https://www.ayajourney.com/logo.png",
        "priceRange": "$$", // Orta segment hizmet anlamında kullanılır
            "image": "https://www.ayajourney.com/logo.png", // İşletme logosu
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kızılırmak Mahallesi (Ankara) / Maslak (İstanbul)",
          "addressLocality": "Ankara & İstanbul",
          "addressCountry": "TR",
          "postalCode": "06530",
        },
        "telephone": "+905304853115"
      },
      "description": "Kullanıcıların mesleki, finansal ve seyahat geçmişine göre vize onay şanslarını hesaplayan interaktif analiz aracı.",
      "areaServed": "Turkey",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Ücretsiz Vize Hizmetleri",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ücretsiz Vize Şansı Hesaplama"
            }
          }
        ]
      }
    })
  }}
/>
    <VizeTestleriPage />
    </div>
  )
}

export default page
