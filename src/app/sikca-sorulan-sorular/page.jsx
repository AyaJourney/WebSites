"use client";
import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import QuestionModal from "./QuestionModal";

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen bg-zinc-50  px-8 pt-24 font-sans">
      {/* Başlık, Açıklama ve Soru Sor Butonu */}
      <div className="max-w-5xl w-full mb-10 z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          {/* Sol taraf - Başlık ve Açıklama */}
          <div className="md:max-w-2xl">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 leading-snug">
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Vize danışmanlığı sürecinde en çok merak edilen sorulara hızlı ve güvenilir yanıtlar için Sıkça Sorulan Sorular bölümünü inceleyin.
            </p>
          </div>

          {/* Sağ taraf - Soru Sor Butonu */}
          <div className="md:flex-shrink-0">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Soru Sor
            </button>
          </div>
        </div>
      </div>

      {/* Soru Cevap Kartları */}
      <div className="max-w-5xl w-full z-10">
        <QuestionCard />
      </div>

      {/* Modal */}
      <QuestionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Vize başvurusu için hangi belgeler gereklidir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gerekli belgeler vize türüne göre değişmekle birlikte pasaport, banka hesap dökümleri, biyometrik fotoğraf, kimlik fotokopisi ve mesleki durum belgeleri temel olarak sunulmalıdır."
          }
        },
        {
          "@type": "Question",
          "name": "Vize başvurusu ne kadar sürede sonuçlanır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Schengen vizeleri genellikle 7–15 iş günü içinde sonuçlanırken, İngiltere, ABD ve Kanada başvurularında bu süre 3–8 hafta arasında değişebilir."
          }
        },
        {
          "@type": "Question",
          "name": "Vize reddi durumunda yeniden başvuru yapılabilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, vize reddi sonrasında yeniden başvuru yapılabilir. Ancak önceki reddin nedenini analiz etmek ve eksik belgeleri tamamlamak başvurunun olumlu sonuçlanması açısından önemlidir."
          }
        },
        {
          "@type": "Question",
          "name": "Danışmanlık hizmeti başvuru sonucunu etkiler mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Doğrudan sonuç garantisi vermese de, profesyonel danışmanlık hizmeti belgelerin doğru hazırlanmasını ve sürecin daha sağlıklı ilerlemesini sağlar. Bu durum olumlu sonuç ihtimalini artırabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Randevu bulamıyorum, ne yapmalıyım?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bazı ülkelerde randevular yoğun olduğu için hızlı dolabilir. Alternatif konsolosluklar, ek başvuru merkezleri veya hızlandırılmış hizmetler değerlendirilerek çözüm üretilebilir."
          }
        }
      ]
    })
  }}
/>

    </main>
  );
}

export default page
