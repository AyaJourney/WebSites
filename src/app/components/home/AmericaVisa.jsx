"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const AmericaVisaHero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && entry.target.classList.add("ava-show"),
      { threshold: 0.25 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

return (
  <section
    ref={sectionRef}
    className="relative min-h-[100svh] bg-white overflow-hidden ava-fade-init"
  >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-slate-900 text-center ">
          Ankara ve İstanbul’da
          <span className="block mt-3">
            Profesyonel Amerika Vize Danışmanlığı
          </span>
        </h1>
    <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* ================= MOBILE IMAGE CARD (TOP) ================= */}
      <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-xl lg:hidden">

        <Image
          src="/images/visaamericaexam.webp"
          alt="Amerika Vizesi Süreci"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        <div className="relative z-10 h-full p-6 flex flex-col justify-end text-white">
          <h3 className="text-2xl font-extrabold">
            Amerika Vizesi Süreci
          </h3>

          <div className="mt-4 space-y-3">
            {[
              "Profil analizi ve risk değerlendirmesi",
              "DS-160 ve randevu sürecinin yönetimi",
              "Konsolosluk mülakatına birebir hazırlık",
            ].map((step, i) => (
              <div key={i} className="flex gap-2">
                <FaCheckCircle className="text-emerald-400 mt-1 shrink-0" />
                <p className="text-sm text-white/90">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= LEFT CONTENT ================= */}
      <div className="space-y-10 text-center lg:text-start">

  

        <h2 className="max-w-3xl text-base sm:text-lg md:text-2xl text-slate-700 leading-relaxed">
          Turist <strong>(B1/B2)</strong>, Öğrenci <strong>(F1)</strong>,
          Kültürel Değişim <strong>(J1)</strong> ve diğer
          <strong> ABD vize türlerinde</strong> birebir uzman danışmanlık.
        </h2>

        <p className="max-w-xl text-base sm:text-lg text-slate-700">
          ABD vizesi, evrak değil <strong>konsolosluk mülakatı</strong> ile
          sonuçlanır. Başvurudan görüşmeye kadar süreci sizin için
          stratejik ve eksiksiz şekilde yönetiyoruz.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
          {[
            "Kişiye özel vize stratejisi",
            "DS-160 ve randevu yönetimi",
            "10 yıla kadar ABD vizesi",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl bg-white border border-slate-200 px-4 py-3 shadow-sm"
            >
              <FaCheckCircle className="text-emerald-600 shrink-0" />
              <span className="text-sm font-medium text-slate-800">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white px-6 py-5 max-w-xl shadow-sm">
          <div className="flex gap-4">
            <span className="text-2xl">🎯</span>
            <div>
              <h3 className="font-extrabold text-emerald-900">
                ABD Vize Şansınızı Öğrenin
              </h3>
              <p className="text-sm text-emerald-800 mt-1">
                Yapay zeka destekli analiz ile
                <strong> başvuru skorunuzu</strong> 2 dakikada görün.
              </p>
              <Link href="/vize-alma-ihtimalinizi-olcun">
                <button className="mt-3 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-emerald-700 transition">
                  Analizi Başlat →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= RIGHT IMAGE CARD (DESKTOP) ================= */}
      <div className="hidden lg:block relative w-full max-w-lg h-[520px] rounded-3xl overflow-hidden shadow-2xl">

        <Image
          src="/images/visaamericaexam.webp"
          alt="Amerika Vizesi Süreci"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 h-full p-10 flex flex-col justify-between text-white">
          <div>
            <h3 className="text-4xl font-extrabold">
              Amerika Vizesi Süreci
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Profil analizi ve risk değerlendirmesi",
                "DS-160 ve randevu sürecinin yönetimi",
                "Konsolosluk mülakatına birebir hazırlık",
              ].map((step, i) => (
                <div key={i} className="flex gap-3">
                  <FaCheckCircle className="text-emerald-400 mt-1 shrink-0" />
                  <p className="text-md text-white/90">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/30 text-sm text-white/90">
            ABD turist vizeleri çoğu durumda
            <strong> 10 yıla kadar</strong> geçerlidir ve her girişte
            <strong> 180 güne kadar</strong> kalış hakkı tanır.
          </div>
        </div>
      </div>

    </div>

    {/* ================= SECONDARY CTA ================= */}
    <div className="flex justify-center">
      <Link href="/amerika-vizesi">
        <button className="rounded-full bg-white border border-blue-300 px-8 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition">
          Amerika Vizesi Detaylarını İncele
        </button>
      </Link>
    </div>
  </section>
);



};

export default AmericaVisaHero;
