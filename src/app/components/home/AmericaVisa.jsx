"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const AmericaVisaHero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ava-show");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

return (
  <section
    ref={sectionRef}
    className="relative min-h-[100svh] overflow-hidden ava-fade-init"
  >
    {/* BACKGROUND */}
    <div className="absolute inset-0">
      <Image
        src="/images/visaamericaexam.webp"
        alt="AYA Journey ABD Vize Yol Haritası"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-white/80" />
    </div>

    {/* ================= MOBILE SLIDER ================= */}
    <div className="relative md:hidden flex overflow-x-auto snap-x snap-mandatory">
      
      {/* SLIDE 1 – LEFT (AYNI İÇERİK) */}
      <div className="snap-center shrink-0 w-full px-6 py-24">
        <div className="space-y-8 text-center">
<h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
  <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
   Hayalleri Süsleyen  Amerika 
  </span>
  
  <br />
   <span className="text-slate-900">
    Turist Vizesi (B1/B2) ile Seyahat, Eğitim, Yatırım ve Yaşam Fırsatları
  </span>
</h1>


          <p className="text-base text-slate-700">
            ABD vizesi; Schengen, Kanada veya İngiltere vizelerinden farklı olarak
            evrak incelemesiyle değil, vize memuru ile yapılan birebir görüşmeyle
            sonuçlanır. Görüşmenin sonucu aynı anda açıklanır.
          </p>

          <div className="grid gap-4">
            {[
              "Birebir görüşme odaklı hazırlık",
              "10 yıla kadar geçerli vize",
              "Anında sonuç",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/90 backdrop-blur border border-slate-200 rounded-xl px-4 py-3 shadow"
              >
                <FaCheckCircle className="text-orange-600 shrink-0" />
                <span className="text-sm font-medium text-slate-800">
                  {text}
                </span>
              </div>
            ))}
          </div>
                  <div className="mt-6 w-full max-w-xl mx-auto lg:mx-0 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5 text-left shadow-sm">
  <div className="flex items-start gap-4">
    <div className="text-2xl">🎯</div>

    <div className="space-y-2">
      <h4 className="text-base font-extrabold text-emerald-900">
        Amerika Vize Şansınızı Öğrenin
      </h4>

      <p className="text-sm text-emerald-800 leading-relaxed">
        Yapay zeka destekli analiz ile <strong>ABD vizesi hazırlık skorunuzu</strong>
        2 dakikada öğrenin. Sonuçlar anında gösterilir.
      </p>

      <Link href="/amerika-vizesi?test=1">
        <button className="mt-2 cursor-pointer inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700 transition">
          Ücretsiz Analizi Başlat →
        </button>
      </Link>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* SLIDE 2 – RIGHT (AYNI İÇERİK) */}
      <div className="snap-center shrink-0 w-full px-6 py-24">
        <div className="relative w-full max-w-lg mx-auto rounded-3xl bg-white/95 backdrop-blur border border-slate-200 p-10 shadow-xl space-y-6">
          <h3 className="text-2xl font-semibold text-slate-900 text-center">
            Süreç Nasıl İşliyor?
          </h3>

          {[
            "Profilinizi analiz ediyoruz",
            "Randevunuzu alıyor ve takip ediyoruz",
            "Görüşmeye birebir hazırlıyoruz",
          ].map((step, i) => (
            <div key={i} className="flex gap-3">
              <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
              <p className="text-sm text-slate-700 leading-relaxed">
                {step}
              </p>
            </div>
          ))}

          <div className="pt-6 border-t border-slate-200 text-sm text-slate-600">
            İstisnai durumlar hariç ABD turist vizeleri genellikle
            <strong> 10 yıllık</strong> verilir ve her girişte
            <strong> 180 güne kadar</strong> kalış hakkı tanır.
          </div>
        </div>
      </div>
    </div>

    {/* ================= DESKTOP / TABLET (AYNI HALİ) ================= */}
    <div className="relative hidden md:grid max-w-7xl mx-auto px-6 grid-cols-1 lg:grid-cols-2 gap-16 min-h-[100svh] items-center">
      
      {/* LEFT */}
      <div className="space-y-8 text-center lg:text-left">
       <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
  <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
   Hayalleri Süsleyen  Amerika 
  </span>
  
  <br />
  <span className="text-slate-900">
    Turist Vizesi (B1/B2) ile Seyahat, Eğitim, Yatırım ve Yaşam Fırsatları
  </span>
</h1>

        <p className="text-base sm:text-lg text-slate-700 max-w-xl mx-auto lg:mx-0">
         Gezmekten yaşamaya, çalışmaktan eğitim almaya kadar Amerika Birleşik Devletleri, turist vizesi (B1/B2) ile hayallerinizi gerçeğe dönüştürüyoruz.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
          {[
            "Birebir görüşme odaklı hazırlık",
            "10 yıla kadar geçerli vize",
            "Anında sonuç",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white/90 backdrop-blur border border-slate-200 rounded-xl px-4 py-3 shadow"
            >
              <FaCheckCircle className="text-indigo-600 shrink-0" />
              <span className="text-md font-medium text-slate-800">
                {text}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-6 w-full max-w-xl mx-auto lg:mx-0 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5 text-left shadow-sm">
  <div className="flex items-start gap-4">
    <div className="text-2xl">🎯</div>

    <div className="space-y-2">
      <h4 className="text-base font-extrabold text-emerald-900">
        Amerika Vize Şansınızı Öğrenin
      </h4>

      <p className="text-sm text-emerald-800 leading-relaxed">
        Yapay zeka destekli analiz ile <strong>ABD vizesi hazırlık skorunuzu</strong>
        2 dakikada öğrenin. Sonuçlar anında gösterilir.
      </p>

      <Link href="/amerika-vizesi?test=1">
        <button className="mt-2 cursor-pointer inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700 transition">
          Ücretsiz Analizi Başlat →
        </button>
      </Link>
    </div>
  </div>
</div>

      </div>

      {/* RIGHT */}
      <div className="hidden md:flex justify-center lg:justify-end self-center">
        <div className="relative w-full max-w-lg rounded-3xl bg-white/95 backdrop-blur border border-slate-200 p-10 shadow-xl space-y-6">
          <h3 className="text-2xl font-semibold text-slate-900">
            Süreç Nasıl İşliyor?
          </h3>

          {[
            "Profilinizi analiz ediyoruz",
            "Randevunuzu alıyor ve takip ediyoruz",
            "Görüşmeye birebir hazırlıyoruz",
          ].map((step, i) => (
            <div key={i} className="flex gap-3">
              <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
              <p className="text-md text-slate-700 leading-relaxed">
                {step}
              </p>
            </div>
          ))}

          <div className="pt-6 border-t border-slate-200 text-sm text-slate-600">
            İstisnai durumlar hariç ABD turist vizeleri genellikle
            <strong> 10 yıllık</strong> verilir ve her girişte
            <strong> 180 güne kadar</strong> kalış hakkı tanır.
          </div>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
      <Link href="/amerika-vizesi">
        <button className="bg-white text-gray-700 cursor-pointer mt-6 border border-blue-300 px-8 py-2.5 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100">
        Hemen İncele
        </button>
      </Link>
    </div>
  </section>
);



};

export default AmericaVisaHero;
