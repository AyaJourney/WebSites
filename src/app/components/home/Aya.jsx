"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    title: "Analiz",
    text: "Vize başvurusunda en kritik adımlardan biri, başvuru sahibinin mevcut durumunun doğru şekilde değerlendirilmesidir.",
  },
  {
    title: "Plan",
    text: "Yurtdışında eğitim, çalışma ya da yatırım yapmayı hedefleyen herkes için en kritik unsur doğru plandır.",
  },
  {
    title: "Uygulama",
    text: "Başarılı bir vize başvurusu veya yurtdışı kariyer yolculuğu, sistematik bir uygulama süreciyle mümkün olur.",
  },
  {
    title: "Sonuç",
    text: "Tüm süreç boyunca atılan adımların doğru şekilde planlanması ve uygulanması, istenilen sonuca ulaşmanın temelini oluşturur.",
  },
];

const Aya = () => {
  const rootRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Sol taraf animasyonu
    if (rootRef.current) {
      const observer1 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        },
        { threshold: 0.3 }
      );

      observer1.observe(rootRef.current);
    }

    // Sağ kartlar
    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((c) => c && observer2.observe(c));

    return () => {
      observer2.disconnect();
    };
  }, []);

return (
  <section className="bg-white text-black font-sans px-4 sm:px-6 py-12 xl:py-16">
    <div className="max-w-[1130px] mx-auto flex flex-col xl:flex-row gap-10 items-stretch">

      {/* SOL TARAF */}
      <div
        ref={rootRef}
        className="fade-up-init relative w-full xl:w-1/2 rounded-xl overflow-hidden min-h-[300px] sm:min-h-[350px] md:min-h-[420px]"
      >
        <Image
          src="/images/basrol.webp"
          alt="Hadi topla bavulları"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6 sm:p-8 md:p-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-white leading-snug">
            Şimdi Başrol Sırası Sizde
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl">
            Belgelerinizin hazırlanmasından randevu sürecine kadar tüm aşamaları
            sizin adınıza profesyonelce takip ediyoruz.
          </p>
        </div>
      </div>

      {/* SAĞ TARAF */}
      <div className="w-full xl:w-1/2 grid gap-5 sm:gap-6 p-2 sm:p-4">
        {steps.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            style={{ transitionDelay: `${i * 0.25}s` }}
            className="step-init flex gap-4 p-6 rounded-2xl bg-[#f9fafb] transition-all duration-300 hover:shadow-md"
          >
            <div className="text-yellow-400 text-2xl sm:text-3xl mt-1">
              <FaCheckCircle />
            </div>

            <div>
              <h2 className="font-semibold text-lg sm:text-xl mb-1">
                {item.title}
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

};

export default Aya;
