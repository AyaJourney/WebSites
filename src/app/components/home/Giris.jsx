"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Giris = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (videoEnded) {
      setTimeout(() => setShowTitle(true), 300);
      setTimeout(() => setShowText(true), 600);
      setTimeout(() => setShowButton(true), 900);
    }
  }, [videoEnded]);

  return (
    <section
      className="relative w-full overflow-hidden font-sans h-[80svh] md:h-[90svh] lg:h-[85svh]"
    >
      {/* VIDEO – TÜM EKRANLARDA */}
      <video
        src="/images/videopasaport.webm"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoEnded ? "opacity-0" : "opacity-100"}`}
        autoPlay
        muted
        playsInline
        onEnded={() => setVideoEnded(true)}
      />

      {/* FOTOĞRAF – VIDEO BİTİNCE */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${videoEnded ? "opacity-100" : "opacity-0"}`}
      >
        <Image
          src="/images/videosonu.webp"
          alt="Hadi topla bavulları"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* METİN KATMANI */}
      <div className="absolute inset-0 flex items-center">
       {showTitle && (  <div className="w-full px-6 md:px-12 lg:px-20 text-white bg-gradient-to-l from-black/50 to-transparent">

          {/* BAŞLIK */}
          <h1
            className={`font-bold drop-shadow-xl transition-all duration-700 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ${showTitle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
          >
            Hadi, topla bavulları!
          </h1>

          {/* METİN */}
          <p
            className={`mt-4 max-w-2xl drop-shadow-lg transition-all duration-700 text-sm sm:text-base md:text-lg lg:text-xl ${showText ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            Yurt dışında eğitim, iş ve vize danışmanlık ihtiyaçlarınız için
            AYA Journey olarak her zaman yanınızdayız.
          </p>

          {/* BUTON */}
          <div
            className={`mt-6 transition-all duration-700 ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <Link href="/randevu">
              <button
                className=" bg-white text-gray-800 border border-blue-300 px-6 py-3 rounded-3xl font-semibold hover:text-blue-600 hover:bg-gray-100 transition"
              >
                Randevu Al
              </button>
            </Link>
          </div>

        </div>)}
      
      </div>
    </section>
  );
};

export default Giris;
