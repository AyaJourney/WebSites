"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

const isMobileOrAndroid = () => {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
};

const CardEgitim = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileOrAndroid());
  }, []);

  const imageSrc = isMobile ? "/images/tmobile2.webp" : "/images/t.jpg";

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="Amerika'da Staj Programı"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 100vw"
        className="object-cover object-center"
        placeholder="blur"
        blurDataURL="/images/placeholder-small.jpg" // düşük çözünürlüklü placeholder
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Text Section */}
      <div className="absolute z-20 bottom-32 md:bottom-15 w-full flex justify-center md:justify-start px-6 md:px-10">
        <div className="bg-black/30 md:bg-black/30 rounded-lg p-4 max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
            Amerika'da Staj Programı
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-white drop-shadow-lg">
            Amerika'da uzun süre yaşamak, global bir tecrübe edinmek ve bunu yaparken ailenize yük olmadan, kendi
            paranızı kazanmak... Bu artık uzak bir hayal değil.
          </p>

          <Link href="/egitim">
            <button className="bg-white text-gray-700 cursor-pointer mt-6 border border-blue-300 px-5 py-2.5 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100">
              İncele
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CardEgitim;
