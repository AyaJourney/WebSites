"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import PosterModal from "./modal/PosterModal";

const isMobileOrAndroid = () => {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
};

const CardEgitim = () => {
const [isModalOpen, setIsModalOpen] = useState(false);
const [slide, setSlide] = useState(0);

const posterImages = [
  "/afis/1.webp",
  "/afis/2.webp",
  "/afis/3.webp",
  "/afis/4.webp",
  "/afis/5.webp",
  "/afis/6.webp",
  "/afis/7.webp",
  "/afis/8.webp",
];
  const [isMobile, setIsMobile] = useState(false);

  // Refs for animations
  const badgeRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    setIsMobile(isMobileOrAndroid());

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (badgeRef.current) observer.observe(badgeRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  const imageSrc = isMobile ? "/images/chefsVertical.webp" : "/images/chefs.webp";

  return (
   <section className="relative w-full min-h-[100svh] md:h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="Amerika'da Staj Programı"
        fill
        priority
        sizes="100vw"
        className="object-contain md:object-cover object-center "
    
      />

      {/* Overlay */}
    <div className="absolute inset-0 z-10"/>

   
      <div
        ref={badgeRef}
        className=" slide-right-init absolute w-[350px] md:w-[500px] z-30 rounded-full px-6 py-8 text-[#2a2a2a] font-semibold text-md sm:text-xl md:text-2xl  shadow-[0_0_12px_rgba(255,180,40,0.45)] backdrop-blur-md  flex items-center bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300  top-6 left-1/2-translate-x-1/2 md:top-18 md:left-auto md:right-10 md:-translate-x-0  transition-all duration-300 hover:scale-105">
        <span className="font-bold tracking-wide">
          Aylık 4500$’a Kadar Kazanç Fırsatı!
        </span>
      </div>

      {/* TEXT AREA — Soldan Gelsin */}
      <div
       
        className="absolute z-20 bottom-32 md:bottom-30 w-full flex justify-center md:justify-start px-6 md:px-10"
      >
        <div  ref={textRef} className="slide-left-init bg-black/30 rounded-lg p-4 max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
            Amerika'da Maaşlı Turizm ve Gastronomi Staj Programı
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-white drop-shadow-lg">
            Amerika'da uzun süre yaşamak, global bir tecrübe edinmek ve bunu yaparken
            ailenize yük olmadan kendi paranızı kazanmak artık uzak bir hayal değil.
          </p>

          <Link href="/egitim">
            <button className="bg-white text-gray-700 cursor-pointer mt-6 border border-blue-300 px-5 py-2.5 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100">
              İncele
            </button>
          </Link>
              <button   onClick={() => setIsModalOpen(true)} className="ml-2 bg-white text-gray-700 cursor-pointer mt-6 border border-blue-300 px-5 py-2.5 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100">
             Açık Pozisyonları Gör
            </button>
        </div>
      </div>
<PosterModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  images={posterImages}
  title="Açık Pozisyonlar"
  slide={slide}
  setSlide={setSlide}
/>
    </section>
  );
  
};

export default CardEgitim;
