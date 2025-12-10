"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../globals.css";

/* ----------------------------------------- */
/* APPLE STYLE VİDEO → FOTOĞRAF GEÇİŞ COMPONENTİ */
/* ----------------------------------------- */
const AppleStyleMedia = () => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div
      className="relative w-full  h-[300px] md:h-full max-w-[700px] max-h-[475px]  overflow-hidden rounded-xl"
    >

      <Image
        src="/images/sehir.jpg"
        alt="Portekiz"
        fill
        className={`object-cover transform transition-all duration-[1500ms] ease-out ${showImage ? "opacity-100 scale-100" : "opacity-0 scale-[1.002]"}`}
      />

      {!showImage && (
        <video
          src="/images/videomaker.mp4"
          autoPlay
          muted
          playsInline
          onEnded={() => setShowImage(true)}
          className="w-full h-full object-cover transition-opacity duration-700"
        />
      )}
    </div>
  );
};


/* ----------------------------------------- */
/* PORTUGAL ANA SAYFA */
/* ----------------------------------------- */

const Portugal = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(100), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="flex flex-col md:flex-row w-full min-h-screen items-stretch font-sans gap-8 p-4 md:p-20">

      {/* --- SOL TARAF: VIDEO → FOTOĞRAF --- */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center order-1 md:order-2">
        <AppleStyleMedia />
      </div>

      {/* --- SAĞ TARAF: METİNLER --- */}
      <div className="w-full md:w-1/2 lg:w-[600px] h-full flex flex-col items-center md:items-start justify-center text-center md:text-left order-2 md:order-1">

        <h1 className="text-3xl sm:text-4xl font-bold leading-snug md:leading-relaxed">
          <span className="relative italic px-2 py-1 rounded-2xl overflow-hidden text-white inline-flex items-center">
            <span
              className="absolute top-0 left-0 h-full bg-orange-500"
              style={{
                width: `${width}%`,
                transition: "width 3s ease",
              }}
            ></span>
            <span className="relative z-10">Portekiz D7 Vizesi</span>
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

    </main>
  );
};

export default Portugal;
