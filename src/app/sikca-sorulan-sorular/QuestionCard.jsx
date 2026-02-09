"use client";
import React, { useEffect, useRef, useState } from "react";
import { questionsAndAnswers } from "@/helper/help";
import "./question.css"
const QuestionCard = () => {
  const [openId, setOpenId] = useState(null);
  const [selectedType, setSelectedType] = useState("Vize 101");
  const cardsRef = useRef([]);
const typeStyles = {
  "Vize 101": {
    active: "bg-blue-600 text-white shadow-lg",
    passive: "bg-blue-100 text-blue-700 hover:bg-blue-200",
  },
  "Schengen": {
    active: "bg-emerald-600 text-white shadow-lg",
    passive: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
  },
  "Amerika": {
    active: "bg-indigo-600 text-white shadow-lg",
    passive: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
  },
  "Kanada": {
    active: "bg-purple-600 text-white shadow-lg",
    passive: "bg-purple-100 text-purple-700 hover:bg-purple-200",
  },
  "İngiltere": {
    active: "bg-rose-600 text-white shadow-lg",
    passive: "bg-rose-100 text-rose-700 hover:bg-rose-200",
  },
    "Rusya": {
    active: "bg-sky-600 text-white shadow-lg",
    passive: "bg-sky-100 text-sky-700 hover:bg-sky-200",
  },
};
const visa101=" Avcı toplayıcılıktan yurtdışı seyahate..."
const schengen=" Avrupa.. Avrupa.."
const america="Suyun öte tarafına dair akla takılanlar"
const canada="Kanada vizeleri hakkında sıkça sorulan sorular"
const uk="Kırmızı telefon kulübesi, çift katlı otobüs ve olmayan yemek kültürü"
const russia="Putin, Votka ve Matruşka ya da eğlence, tarih ve sınırsız iş potansiyeli: seçim sizin"
  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const types = [...new Set(questionsAndAnswers.map((q) => q.type))];
  const filteredQuestions = questionsAndAnswers.filter(
    (q) => q.type === selectedType
  );

  /* ✅ AÇILIŞ + KATEGORİ DEĞİŞİMİ ANİMASYONU */
  useEffect(() => {
    // 🔹 önce hepsini resetle
    cardsRef.current.forEach((el) => el?.classList.remove("faq-show"));

    // 🔹 ilk açılış için ZORUNLU tetik
    requestAnimationFrame(() => {
      cardsRef.current.forEach((el, i) => {
        setTimeout(() => {
          el?.classList.add("faq-show");
        }, i * 80); // stagger
      });
    });
  }, [selectedType]);

  const registerCard = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div className="w-full py-10">
      {/* KATEGORİLER */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {types?.map((type) => (
   <button
  key={type}
  onClick={() => setSelectedType(type)}
  className={`
    px-4 py-2 rounded-full font-medium transition cursor-pointer
    ${
      selectedType === type
        ? typeStyles[type]?.active
        : typeStyles[type]?.passive
    }
  `}
>
  {type}
</button>

        ))}
      </div>

      {/* FAQ LİSTESİ */}
      <div className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          {selectedType === "Vize 101" && visa101}
          {selectedType === "Schengen" && schengen}
          {selectedType === "Amerika" && america}
          {selectedType === "Kanada" && canada}
          {selectedType === "İngiltere" && uk}
          {selectedType === "Rusya" && russia}
        </h2>

        {filteredQuestions.map((item) => (
          <div
            key={item.id}
            ref={registerCard}
            className="faq-card bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
          >
            {/* SORU */}
            <button
              onClick={() => toggleOpen(item.id)}
              className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
            >
              <h3 className="text-left font-semibold text-base sm:text-lg">
                {item.question}
              </h3>

              <svg
                className={`w-6 h-6 faq-chevron ${
                  openId === item.id ? "open" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* CEVAP */}
        <div className={`faq-accordion ${openId === item.id ? "open" : ""}`}>
  <div className="border-t border-gray-200 px-6 py-4 bg-white">
    <p className="text-gray-700 text-base leading-relaxed">
      {item.answer}
    </p>
  </div>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
