"use client";
import React from "react";

const references = [
  { name: "Speaker Agency", logo: "/referans/speaker_agency_home_url.webp" },
  { name: "Bahçeşehir Koleji", logo: "/referans/bahcesehir.png" },
  { name: "Erenköy Çevre Koleji", logo: "/referans/cevre koleji.jpg" },
  { name: "Inavitas", logo: "/referans/inativas.png" },
  { name: "Alfa Solar", logo: "/referans/alfasolarlogo.webp" },
  { name: "Konyaspor", logo: "/referans/konya spor.jpg" },
  { name: "Kiler Holding", logo: "/referans/kiler holding.jpg" },
  { name: "Biletinial", logo: "/referans/bilet.png" },
];

const Referanslarimiz = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 font-sans px-4 sm:px-8 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Referanslarımız</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl">
        {references.map((ref, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105"
          >
            <img
              src={ref.logo}
              alt={ref.name}
              className="w-24 h-24 object-contain mb-4"
            />
            <p className="text-center text-gray-700 font-medium">{ref.name}</p>
          </div>
        ))}
      </div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "AyaJourney hangi firmalara hizmet vermiştir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AyaJourney; eğitim kurumları, uluslararası şirketler, bireysel başvuru sahipleri ve profesyonel danışmanlık hizmeti alan yüzlerce müşteriyle çalışmıştır. Referanslarımız arasında farklı sektörlerden firmalar bulunmaktadır."
          }
        },
        {
          "@type": "Question",
          "name": "Referans listesi neye göre belirleniyor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Referans listesi, çalıştığımız kurumlar, eğitim partnerleri ve vize danışmanlığı hizmeti verdiğimiz güvenilir iş ortaklarından oluşmaktadır. Logolar sadece izinli iş ortaklarımızı temsil eder."
          }
        },
        {
          "@type": "Question",
          "name": "Referans olarak gösterilen firmalarla çalışma süreci nasıldır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Çalışma süreci başvurunun türüne göre değişmekle birlikte, firma yetkilileri ile koordineli şekilde vize dosyaları hazırlanır ve gerekli bilgi akışı sağlanır. Büyük ölçekli firmalar için toplu başvuru desteği de sağlanabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Yeni firmalar referans listesine eklenebilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Hizmet alan yeni kurumlar ve iş ortaklarımızın isteği doğrultusunda referans listesi düzenli olarak güncellenir."
          }
        },
        {
          "@type": "Question",
          "name": "Referanslar gerçek mi ve doğrulanabilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Referanslarımız gerçektir ve firmaların izniyle yayınlanır. Talep halinde kurumsal doğrulama yapılabilir."
          }
        }
      ]
    })
  }}
/>

    </main>
  );
};

export default Referanslarimiz;

