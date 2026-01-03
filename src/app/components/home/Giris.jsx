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
    <section className="relative w-full overflow-hidden font-sans h-[80svh] md:h-[90svh] lg:h-[85svh]">

      {/* 📱 MOBİL VIDEO */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 block md:hidden ${
          videoEnded ? "opacity-0" : "opacity-100"
        }`}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => setVideoEnded(true)}
      >
        <source src="/images/videopasaport.mp4" type="video/mp4" />
      </video>

      {/* 📲 TABLET GÖRSEL */}
      <div className="absolute inset-0 hidden md:block lg:hidden">
        <Image
          src="/images/videosonu.webp"
          alt="Hadi topla bavulları"
          fill
          priority
          className="object-cover"
          onLoad={() => setVideoEnded(true)}
        />
      </div>

      {/* 💻 DESKTOP VIDEO */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 hidden lg:block ${
          videoEnded ? "opacity-0" : "opacity-100"
        }`}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => setVideoEnded(true)}
      >
        <source src="/images/videopasaport.mp4" type="video/mp4" />
      </video>

      {/* VIDEO SONRASI GÖRSEL (DESKTOP + MOBİL) */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          videoEnded ? "opacity-100" : "opacity-0"
        } ${"block lg:block md:hidden lg:block"}`}
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
        {showTitle && (
          <div className="w-full px-6 md:px-12 lg:px-20 text-white bg-gradient-to-l from-black/50 to-transparent">

            <h1 className="font-bold drop-shadow-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Hadi, topla bavulları!
            </h1>

            <p className="mt-4 max-w-2xl drop-shadow-lg text-sm sm:text-base md:text-lg lg:text-xl">
              Yurt dışında eğitim, iş ve vize danışmanlık ihtiyaçlarınız için
              AYA Journey olarak her zaman yanınızdayız.
            </p>

            <div className="mt-6">
              <Link href="/randevu">
                <button className="bg-white text-gray-800 border border-blue-300 px-6 py-3 rounded-3xl font-semibold hover:text-blue-600 hover:bg-gray-100 transition">
                  Randevu Al
                </button>
              </Link>
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default Giris;
