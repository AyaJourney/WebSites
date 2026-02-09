"use client";
import React, { useState, useEffect, useRef } from "react";
import QuestionCard from "./QuestionCard";
import QuestionModal from "./QuestionModal";
import "./question.css"
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const refs = useRef([]);

  // Scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("faq-show");
          }
        }),
      { threshold: 0.2 }
    );

    refs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const register = el => el && !refs.current.includes(el) && refs.current.push(el);

  return (
    <main className="relative flex flex-col items-center min-h-screen bg-zinc-50 px-8 pt-24 font-sans">
      
      {/* HEADER */}
      <div ref={register} className="faq-fade-up max-w-5xl w-full mb-10 z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          
          <div className="md:max-w-2xl">
            <h1 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Vize danışmanlığı sürecinde en çok merak edilen sorulara hızlı ve güvenilir yanıtlar için Sıkça Sorulan Sorular bölümünü inceleyin.
            </p>
          </div>

          <div ref={register} className="faq-scale-in md:flex-shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-md hover:shadow-lg"
            >
              Soru Sor
            </button>
          </div>

        </div>
      </div>

      {/* FAQ CARDS */}
      <div ref={register} className="faq-fade-up max-w-5xl w-full z-10">
        <QuestionCard />
      </div>

      {/* MODAL */}
      <QuestionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* SEO FAQ SCHEMA */}
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
                  "text": "Vize türüne göre değişmekle birlikte pasaport, banka dökümleri, biyometrik fotoğraf ve mesleki belgeler gereklidir."
                }
              },
              {
                "@type": "Question",
                "name": "Vize başvurusu ne kadar sürede sonuçlanır?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Schengen vizeleri genellikle 7–15 iş günü, diğer ülkeler 3–8 hafta sürebilir."
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
