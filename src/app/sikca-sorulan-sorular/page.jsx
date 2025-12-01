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
    </main>
  );
}

export default page
