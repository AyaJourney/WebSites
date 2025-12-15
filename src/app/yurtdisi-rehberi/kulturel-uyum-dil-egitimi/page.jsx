"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function LanguageAbroad() {
  const animRefs = useRef([]);

  useEffect(() => {
    animRefs.current = animRefs.current.filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("edu-show");
          }
        });
      },
      { threshold: 0.15 }
    );

    animRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const register = (el) => {
    if (el && !animRefs.current.includes(el)) {
      animRefs.current.push(el);
    }
  };

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section
        ref={register}
        className="relative overflow-hidden px-6 pt-28 pb-20 edu-scale-in"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.14),transparent_30%)]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700">
            Dil Eğitimi Rehberi
          </span>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Yurt Dışında Dil Eğitimi
            <span className="text-emerald-600"> Hayatın İçinde Öğren</span>
          </h1>

          <p className="text-lg text-slate-700 max-w-3xl">
            Dil öğrenmek yalnızca sınıfta değil, günlük yaşamın içinde gerçekleşir.
            Yurt dışında dil eğitimi; dili, kültürü ve yaşam tarzını birlikte
            deneyimleme fırsatı sunar.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/randevu"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold shadow-lg hover:-translate-y-0.5 transition"
            >
              Ücretsiz Ön Görüşme
            </Link>
            <a
              href="https://wa.me/903128701584"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
            >
              WhatsApp’tan Yaz
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section
        ref={register}
        className="max-w-5xl mx-auto px-6 py-16 edu-fade-up space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold">
          Dil öğrenmek sınıfta değil, hayatın içinde olur
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed">
          Market alışverişinden resmi işlemlere, sosyal sohbetlerden günlük
          rutine kadar her etkileşim, dili aktif şekilde kullanmayı sağlar.
          Bu doğal pratik, öğrenilen bilgilerin hızla pekişmesine yardımcı olur.
        </p>
      </section>

      {/* CONTENT CARDS */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Günlük Hayatta Dil Pratiği",
            text: "Dil, teoriden çıkarak günlük yaşamın doğal bir parçası haline gelir. Refleksler gelişir, konuşma becerisi hızla artar.",
          },
          {
            title: "Kültürel Uyum Süreci",
            text: "Yeni gelenekler ve sosyal kurallar, bireyin bakış açısını genişletir. Esneklik ve açık fikirlilik gelişir.",
          },
          {
            title: "Dil ve Kültür Bağı",
            text: "Yerel halkla kurulan iletişim, dili doğal akışı içinde öğrenmeyi sağlar ve özgüveni artırır.",
          },
        ].map((item, i) => (
          <div
            key={i}
            ref={register}
            className="p-6 rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200 edu-fade-up hover:-translate-y-1 transition"
          >
            <h3 className="font-semibold text-lg text-slate-900">
              {item.title}
            </h3>
            <p className="text-sm text-slate-700 mt-2 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </section>

      {/* HIGHLIGHT */}
      <section
        ref={register}
        className="max-w-5xl mx-auto px-6 pb-20 edu-fade-up"
      >
        <div className="rounded-3xl bg-emerald-50 border border-emerald-200 p-8 space-y-4">
          <h2 className="text-2xl font-bold text-emerald-800">
            Neden Yurt Dışında Dil Eğitimi?
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-slate-800 text-sm">
            <li>✔️ Kalıcı dil gelişimi</li>
            <li>✔️ Kültürel farkındalık</li>
            <li>✔️ Özgüven ve iletişim becerisi</li>
            <li>✔️ Uluslararası ortamlara uyum</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
  <section
  ref={register}
  className="max-w-6xl mx-auto px-6 pb-24 edu-fade-up"
>
  <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-2xl shadow-slate-200">
    {/* Background Glow */}
    <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.14),transparent_32%)]" />

    <div className="relative p-6 md:p-8 space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-semibold text-slate-700">
          Dil Eğitimi Planlaması
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Dil öğrenmek için doğru ülkeyi seçmek kritik.
        </h2>
        <p className="text-slate-700 max-w-3xl">
          Her ülkenin eğitim sistemi, vize süreci ve yaşam koşulları farklıdır.
          Doğru program, doğru şehir ve doğru zamanlama ile süreci sorunsuz
          ilerletin.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            title: "Program & Ülke Seçimi",
            desc: "Hedefinize ve bütçenize uygun dil okulu ve ülke analizi.",
          },
          {
            title: "Vize & Evrak Süreci",
            desc: "Başvuru dosyası, finans planı ve randevu takibi.",
          },
          {
            title: "Aya Journey Desteği",
            desc: "Okul kaydı, vize, konaklama ve süreç boyunca danışmanlık.",
          },
        ].map((box) => (
          <div
            key={box.title}
            className="p-5 rounded-2xl bg-white/85 border border-slate-200"
          >
            <h4 className="font-semibold text-slate-900">{box.title}</h4>
            <p className="text-sm text-slate-700 mt-1 leading-relaxed">
              {box.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <p className="text-slate-900 font-semibold">
          Aya Journey, kısa ve uzun dönem dil eğitimi süreçlerinizde yanınızda.
        </p>

        <div className="flex flex-col sm:flex-row gap-2">
          <Link href="/randevu">
            <button className="bg-white text-blue-600 cursor-pointer px-6 py-3 rounded-xl font-semibold shadow-lg hover:-translate-y-0.5 transition">
              Randevu Al
            </button>
          </Link>

          <a
            href="tel:+903128701584"
            className="inline-flex px-4 py-2.5 rounded-xl bg-slate-900 text-white font-semibold shadow-lg shadow-blue-500/20 hover:translate-y-[1px] transition"
          >
            Hemen Ara
          </a>

          <a
            href="https://wa.me/903128701584"
            className="inline-flex px-4 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold ring-1 ring-emerald-200/60 hover:bg-emerald-600 transition"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp’tan Yaz
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}
