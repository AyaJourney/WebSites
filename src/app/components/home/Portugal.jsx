"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../../globals.css";
import Link from "next/link";

const Portugal = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(100), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center font-sans gap-8 p-4 md:p-10">

      {/* --- RESİM ALANI --- */}
      <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2">
        <div className="w-full max-w-[500px]">
          <Image
            src="/images/portekiz.jpg"
            alt="Giriş Resmi"
            width={600}
            height={400}
            className="object-contain rounded-xl mask-fade-portugal w-full h-auto"
          />
        </div>
      </div>

      {/* --- METİN ALANI --- */}
   <div className="w-full md:w-1/2 lg:w-[600px] flex flex-col items-center md:items-start justify-center text-center md:text-left order-2 md:order-1">

  <h1 className="text-3xl sm:text-4xl font-bold leading-snug md:leading-relaxed">
    <span className="relative italic px-2 py-1 rounded-2xl overflow-hidden text-white inline-flex items-center">
      <span
        className="absolute top-0 left-0 h-full bg-blue-500"
        style={{
          width: `${width}%`,
          transition: "width 3s ease",
        }}
      ></span>

      <span className="relative z-10">Portekiz D7 Vizesi:</span>
    </span>
    <br className="block md:hidden" />
    Sıcak İklim, Yüksek Yaşam Kalitesi ve Zengin Kültürle Portekiz’de Hayatınızı Değiştirin
  </h1>

  <div className="w-full mt-4">
    <p className="text-gray-700 text-base md:text-lg mb-4 text-justify">
      Portekiz D7 Vizesi ile hayalinizdeki hayatı gerçeğe dönüştürün. 
      Sıcak iklimi, zengin kültürü ve yüksek yaşam kalitesi ile Portekiz, 
      hem yerleşim hem de yatırım için ideal bir seçenek sunuyor. 
      Ekonomik yaşam maliyeti ve dost canlısı insanları ile yeni bir başlangıç için doğru adres.
    </p>

    <Link href="/portekiz-d7-vize">
      <button className="bg-white text-gray-700 cursor-pointer mt-5 border border-blue-300 px-4 py-2 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100">
        Hemen Öğren
      </button>
    </Link>
  </div>
</div>


    </div>
  );
};

export default Portugal;
