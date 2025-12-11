// src/app/randevu/page.jsx
import React from "react";
import Card from "./Card";

export const metadata = {
  title: "Hızlı ve Kolay Randevu - Vize Danışmanınız",
  description:
    "Alanında uzman vize danışmanlarımızdan size uygun temsilciyi seçin, tarih ve saati belirleyip randevunuzu hızlıca oluşturun.",
};

const Page = () => {
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen bg-white px-8 pt-24 font-sans">
      <div className="max-w-5xl w-full text-center md:text-left mb-10 z-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 leading-snug">
          Hızlı ve Kolay Randevu
        </h1>
        <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
          Alanında uzman vize danışmanlarımızdan size uygun temsilciyi seçin, tarih ve saati belirleyip randevunuzu hızlıca oluşturun.
        </p>
      </div>

      <div className="max-w-5xl w-full z-10">
        <Card />
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
          "name": "Vize randevusu nasıl alınır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vize randevusu almak için uygun temsilciyi seçip tarih ve saat belirlemeniz yeterlidir. Randevu sistemi üzerinden hızlı bir şekilde işlem tamamlanır."
          }
        },
        {
          "@type": "Question",
          "name": "Randevu oluşturmak ne kadar sürer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Randevu oluşturma işlemi genellikle 1–2 dakika sürer. Uygun temsilci seçildiğinde sistem otomatik olarak en yakın boş tarihleri gösterir."
          }
        },
        {
          "@type": "Question",
          "name": "Randevu tarihimi değiştirebilir miyim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Randevu tarihini, müsaitlik durumuna göre daha erken veya daha geç bir tarihle değiştirebilirsiniz."
          }
        },
        {
          "@type": "Question",
          "name": "Randevu ücreti iade edilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Randevuya gelinmediği veya son dakika iptal edildiği durumlarda ücret iadesi yapılmaz. Bu nedenle randevu saatinize uygun şekilde planlama yapmanız önerilir."
          }
        },
        {
          "@type": "Question",
          "name": "Hangi ülkeler için randevu oluşturabilirim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Schengen, İngiltere, Kanada, ABD ve diğer birçok ülke için randevu oluşturabilirsiniz. Danışmanlarımız dosyanıza en uygun temsilciyi belirlemenize yardımcı olur."
          }
        }
      ]
    })
  }}
/>

    </main>
  );
};

export default Page;
