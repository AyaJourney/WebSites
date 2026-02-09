"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

/* ----------------------------------------- */
/* APPLE STYLE VIDEO → IMAGE */
/* ----------------------------------------- */
const AppleStyleMedia = () => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl h-[260px] sm:h-[300px] md:h-[360px] lg:h-[420px] max-w-[700px]">

      {/* VIDEO – HER ZAMAN DOM'DA */}
      <video
        src="/images/videomaker.mp4"
        autoPlay
        muted
        playsInline
        onEnded={() => setShowImage(true)}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: showImage ? 0 : 1 }}
      />

      {/* IMAGE – HER ZAMAN DOM'DA */}
      <Image
        src="/images/sehir.webp"
        alt="Portekiz"
        fill
        priority
        className="object-cover transition-opacity duration-[1500ms] ease-out"
        style={{ opacity: showImage ? 1 : 0 }}
      />

    </div>
  );
};


/* ----------------------------------------- */
/* PORTUGAL SECTION */
/* ----------------------------------------- */
const Portugal = () => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setWidth(100), 50);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="w-full overflow-hidden flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-6 md:px-12 lg:px-20 py-16 max-w-[1320px] mx-auto"
    >
      {/* MEDYA */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
        <AppleStyleMedia />
      </div>

      {/* METİN */}
      <div
        ref={textRef}
        className="slide-left-init w-full md:w-1/2 flex flex-col justify-center text-center md:text-left items-center md:items-start order-2 md:order-1"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
          <span className="relative italic px-2 py-1 rounded-2xl overflow-hidden text-white inline-flex">
            <span
              className="absolute inset-0 bg-orange-500"
              style={{width: `${width}%`, transition: "width 6.5s ease",
              }}
            />
            <span className="relative z-10">Portekiz D7 Vizesi</span>
          </span>
          <br className="block md:hidden" />
          <span className="block mt-2">
            Sıcak İklim, Yüksek Yaşam Kalitesi ve Zengin Kültür
          </span>
        </h1>

        <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg text-justify max-w-xl">
          Portekiz D7 Vizesi ile hayalinizdeki hayatı gerçeğe dönüştürün.
          Sıcak iklimi, zengin kültürü ve yüksek yaşam kalitesi ile Portekiz,
          hem yerleşim hem de yatırım için ideal bir seçenek sunuyor.
        </p>

        <Link href="/portekiz-d7-vize">
          <button
            className="mt-6 bg-white text-gray-700 border border-blue-300 px-5 py-2 rounded-3xl font-medium hover:text-blue-600 hover:bg-gray-100 transition"
          >
            Hemen Öğren
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portugal;
