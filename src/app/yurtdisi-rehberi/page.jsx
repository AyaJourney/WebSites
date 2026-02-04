import React from 'react'
import YurtDisiRehberi from './Yurtdisi'
export const metadata = {
  title: "Yurtdışı Rehberi: Vize, Eğitim ve Kariyer Hakkında Her Şey | AYA Journey",
  description: "Yurtdışına gitmek isteyenler için eksiksiz rehber. Amerika stajından İngiltere vizesine, Erasmus süreçlerinden Portekiz oturum iznine kadar tüm güncel bilgiler.",
  keywords: [
    "yurtdışı rehberi", 
    "vize türleri ve başvuru süreci", 
    "popüler eğitim destinasyonları", 
    "yurtdışında iş bulma rehberi",
    "vize mülakatında başarı için tüyolar",
    "konaklama ve ulaşım rehberi",
    "yurtdışında sağlık sigortası",
    "kültürel uyum ve dil eğitimi",
    "yurtdışı burs ve finansal destekler",
    "vize reddi durumunda ne yapmalı",
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/yurtdisi-rehberi",
  }
};
const page = () => {
  const specializedGuideSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Guide",
        "name": "Yurtdışı Yaşam, Eğitim ve Kariyer Master Rehberi",
        "abstract": "Vize başvuru süreçlerinden yurtdışında iş bulmaya, konaklamadan sağlık sigortasına kadar her adımı içeren kapsamlı bilgilendirme rehberi.",
        "publisher": {
          "@type": "Organization",
          "name": "AYA Journey"
        },
        "inLanguage": "tr-TR",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.ayajourney.com/yurtdisi-rehberi"
        },
        "hasPart": [
          { "@type": "CreativeWork", "name": "Vize Türleri ve Başvuru Süreci Rehberi" },
          { "@type": "CreativeWork", "name": "Yurtdışı İş Bulma ve Kariyer Planlama" },
          { "@type": "CreativeWork", "name": "Vize Mülakatı Başarı Stratejileri" },
          { "@type": "CreativeWork", "name": "Burs ve Finansal Destek Kaynakları" },
          { "@type": "CreativeWork", "name": "Sağlık Sigortası ve Konaklama Çözümleri" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Vize reddi durumunda ne yapılmalı?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vize reddi durumunda öncelikle ret mektubundaki maddeler analiz edilmelidir. Eksik belgeler tamamlanarak veya hatalı beyanlar düzeltilerek yeniden başvuru yapılabilir ya da bazı durumlarda karara itiraz edilebilir."
            }
          },
          {
            "@type": "Question",
            "name": "Vize mülakatında başarılı olmak için en önemli tüyo nedir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "En önemli tüyo, seyahat amacınızla tutarlı cevaplar vermek ve Türkiye'ye geri döneceğinize dair güçlü sosyal/ekonomik bağlar sunmaktır."
            }
          }
        ]
      }
    ]
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specializedGuideSchema) }}
      />
      <YurtDisiRehberi/>
    </div>
  )
}

export default page
