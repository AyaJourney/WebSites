"use client";
import React, { useState } from "react";
import { questionsAndAnswers } from "@/helper/help";

const QuestionCard = () => {
  const [openId, setOpenId] = useState(null);
  const [selectedType, setSelectedType] = useState("Vize 101");

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Tüm kategorileri al
  const types = [...new Set(questionsAndAnswers?.map((q) => q.type))];

  // Seçilen kategoriye göre filtrele
  const filteredQuestions = questionsAndAnswers?.filter(
    (q) => q.type === selectedType
  );

  return (
    <div className="w-full py-10">
      {/* Kategori Seçici */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {types?.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full font-medium cursor-pointer transition ${
              selectedType === type
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* SSS Kartları */}
      <div className="max-w-4xl mx-auto space-y-4">
         <h2 className="text-3xl font-bold text-start text-gray-800 mb-3">Avcı toplayıcılıktan yurtdışı seyahate...</h2>
        {filteredQuestions.map((item) => (
          <div
            key={item.id}
            className="bg-white  border border-gray-200  rounded-lg shadow-md overflow-hidden transition-all duration-300"
          >
           
            {/* Soru Başlığı */}
            <button
              onClick={() => toggleOpen(item.id)}
              className="cursor-pointer w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50  transition-colors"
            >
              <h3 className="text-left text-gray-900  font-semibold text-base sm:text-lg">
                {item.question}
              </h3>
              <div className="flex-shrink-0 ml-4">
                {openId === item.id ? (
                  <svg
                    className="w-6 h-6 text-blue-600  transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-400  transition-transform"
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
                )}
              </div>
            </button>

            {/* Cevap - Açıldığında Gösterilecek */}
            {openId === item.id && (
              <div className="border-t border-gray-200  px-6 py-4 bg-gray-50 ">
                <p className="text-gray-700  text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
