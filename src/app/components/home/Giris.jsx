"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Giris = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Sıralı animasyon state'leri
  const [showTitle, setShowTitle] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // ekran genişliği kontrolü
    if (window.innerWidth < 768) {
      setIsMobile(true);
      setVideoEnded(true); // mobilde video yok → direk fotoğraf + animasyon
    }
  }, []);

  useEffect(() => {
    if (videoEnded) {
      setTimeout(() => setShowTitle(true), 300);
      setTimeout(() => setShowText(true), 600);
      setTimeout(() => setShowButton(true), 900);
    }
  }, [videoEnded]);

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">

      {/* --- VİDEO SADECE TABLET & DESKTOPTA --- */}
      {!isMobile && (
        <video
          src="/images/videopasaport.webm"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
            ${videoEnded ? "opacity-0" : "opacity-100"}`}
          autoPlay
          muted
          onEnded={() => setVideoEnded(true)}
        />
      )}

      {/* --- FOTOĞRAF (MOBİLDE HER ZAMAN, TABLET/DESKTOPTA VİDEODAN SONRA) --- */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out
          ${videoEnded ? "opacity-100" : "opacity-0"}`}
      >
        <Image
          src="/images/videosonu.webp"
          alt="Hadi topla bavulları"
          fill
          className={`object-cover transition-transform duration-[2200ms]`}
        />
      </div>

      {/* --- YAZILAR (Sadece fotoğraf göründüğünde) --- */}
      {videoEnded && (
        <div className="absolute right-0 top-0 h-full flex flex-col justify-center 
                        w-full md:w-1/2 p-6 md:p-12 text-white bg-gradient-to-l from-black/40 to-transparent">

          {/* BAŞLIK – Yukarıdan aşağı iner */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-xl transition-all duration-700 
              ${showTitle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
          >
            Hadi, topla bavulları!
          </h1>

          {/* ALT METİN – Soldan gelir */}
          <p
            className={`mt-4 text-base md:text-lg drop-shadow-lg transition-all duration-700 
              ${showText ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            Eğitim, iş, ticaret ve diğer vize danışmanlık ihtiyaçlarınız için 
            AYA Journey olarak her zaman yanınızdayız.
          </p>

          {/* BUTON – Hafif fade + yukarıdan gelir */}
          <div
            className={`transition-all duration-700 mt-6
              ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <Link href="/randevu">
              <button className="bg-white text-gray-700 cursor-pointer border border-blue-300 
                                 px-5 py-2 rounded-3xl transition duration-300 hover:text-blue-600 hover:bg-gray-100">
                Randevu Al
              </button>
            </Link>
          </div>

        </div>
      )}
    </div>
  );
};

export default Giris;
