"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Giris = () => {
  const linesMobile = ["Hadi,", "topla", "bavulları!"];
  const lineDesktop = "Hadi, topla bavulları!";

  // tüm karakter sayısı (mobil için)
  const totalCharsMobile = linesMobile.join("").length;
  const totalCharsDesktop = lineDesktop.length;

  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    const maxChars =
      typeof window !== "undefined" && window.innerWidth < 768
        ? totalCharsMobile
        : totalCharsDesktop;

    if (visibleLetters < maxChars) {
      const timeout = setTimeout(() => {
        setVisibleLetters((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [visibleLetters, totalCharsMobile, totalCharsDesktop]);

  let charCounter = 0;

  return (
    <section className="relative flex items-center justify-center h-[80svh] md:h-[90svh] bg-white px-6">
      <div className="max-w-7xl w-full">

        {/* H1 */}
        <h1 className="font-jakarta font-extrabold text-5xl sm:text-6xl md:text-6xl lg:text-8xl tracking-widest text-slate-900 leading-tight">

          {/* MOBILE */}
          <span className="block md:hidden">
            {linesMobile.map((line, lineIndex) => (
              <span key={lineIndex} className="block">
                {line.split("").map((char, index) => {
                  const isVisible = charCounter < visibleLetters;
                  charCounter++;

                  return (
                    <span
                      key={index}
                      className={`inline-block transition-all duration-300 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
            ))}
          </span>

          {/* DESKTOP */}
          <span className="hidden md:block">
            {lineDesktop.split("").map((char, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-300 ${
                  index < visibleLetters
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>

        </h1>

        {/* SUBTEXT */}
        <p className="mt-10 max-w-2xl text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
          Yurt dışında eğitim, iş ve vize danışmanlığı sürecinizde  
          <strong className="text-blue-600"> AYA Journey</strong> olarak
          her adımda yanınızdayız.
        </p>

        {/* CTA */}
        <div className="mt-12">
          <Link href="/randevu">
            <button className="rounded-full border border-slate-900 px-10 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white">
              Randevu Al →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Giris;
