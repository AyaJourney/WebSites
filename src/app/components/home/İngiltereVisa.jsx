"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import "./all.css"
const EnglandVisaHero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ava-show");
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-center bg-gradient-to-b from-white via-slate-50 to-white ava-fade-init"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* SOL – METİN */}
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
<span 
// className="bg-gradient-to-r from-[#012169] via-slate-400 to-[#C8102E] bg-clip-text text-transparent"
>
  İngiltere Vizesi
</span>


            <br />
            <span className="text-slate-900">
              Turist, Eğitim ve Uzun Süreli Yaşam Rehberi
            </span>
          </h1>

       <p className="text-base sm:text-lg text-slate-700 max-w-xl mx-auto lg:mx-0">
  İngiltere vize süreci evrak odaklı ilerler ve dosyanın tutarlılığı en kritik noktadır.
  <br />
  <strong className="text-slate-900">
    Peki vize memurları dosyanızda en çok nelere dikkat ediyor?
  </strong>
</p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
            {[
              "Evrak ve form odaklı hazırlık",
              "6 ay – 10 yıl arası vize seçenekleri",
              "Online başvuru ve randevu takibi",
              "Kişiye özel danışmanlık",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3"
              >
                <FaCheckCircle className="text-emerald-600 shrink-0" />
                <span className="text-sm font-medium text-slate-800">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
         

            <Link href="/randevu">
              <button className="bg-white text-gray-700 cursor-pointer border border-rose-300 px-8 py-2.5 rounded-3xl transition duration-300 hover:text-rose-500 hover:bg-gray-100">
                Randevu Al
              </button>
            </Link>
               <Link href="/ingiltere-vizesi">
              <button className="bg-white text-gray-700 cursor-pointer border border-blue-300 px-8 py-2.5 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100">
               Hemen İncele
              </button>
            </Link>
          </div>
        </div>

        {/* SAĞ – GÖRSEL KART */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
            <Image
              src="/images/ukdetail.webp"
              alt="İngiltere Vize Başvuru Süreci"
              width={520}
              height={420}
              className="object-cover w-full h-full"
              priority
            />

            {/* Bilgi bandı */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700">
            İngiltere vizeleri başvuru türüne göre
<span className="mr-1"/>
<strong>6 ay, 2 yıl, 5 yıl veya 10 yıl</strong><span className="mr-1"/>
olarak verilebilir.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EnglandVisaHero;
