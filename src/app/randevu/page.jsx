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
    <main className="relative flex flex-col items-center justify-start min-h-screen bg-zinc-50  px-8 pt-24 font-sans">
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
    </main>
  );
};

export default Page;
