"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import data from "@/helper/educationPrograms.json";

export default function EducationPage() {
  const programs = data.programs ?? [];

  const [active, setActive] = useState(() =>
    programs.length ? programs[0].id : null
  );

  const current = programs.find((p) => p.id === active);

  /* scroll animation */
  useEffect(() => {
    const els = document.querySelectorAll(".edu-animate");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("edu-show");
        });
      },
      { threshold: 0.2 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [active]);

  if (!programs.length) return null;

  return (
    <main className="w-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.14),transparent_30%)] text-gray-900 font-sans overflow-hidden">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight edu-animate edu-fade-up">
          Yurtdışı Eğitim & Kariyer Programları
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto edu-animate edu-fade-up">
          Amerika’dan Avrupa’ya, kısa dönem eğitimlerden uzun süreli kariyer
          programlarına kadar tüm seçenekleri tek çatı altında sunuyoruz.
          Programınızı seçin, süreci birlikte planlayalım.
        </p>
      </section>

      {/* PROGRAM SELECT */}
      <section className="max-w-7xl mx-auto px-6">
        {/* DESKTOP TABS */}
        <div className="hidden md:flex gap-4 justify-center mb-12">
          {programs.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300
                ${
                  active === p.id
                    ? `${p.theme.bg} ${p.theme.text} shadow-lg scale-105`
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }
              `}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* MOBILE ACCORDION */}
        <div className="md:hidden space-y-4 mb-12">
          {programs.map((p) => (
            <div
              key={p.id}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setActive(active === p.id ? null : p.id)
                }
                className="w-full flex justify-between items-center px-4 py-4 font-semibold"
              >
                {p.title}
                <span>{active === p.id ? "−" : "+"}</span>
              </button>

              {active === p.id && (
                <div className="px-4 pb-4 text-sm text-gray-600">
                  {p.intro}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT */}
      {current && (
        <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-12 items-start ">
          {/* TEXT */}
          <div className="space-y-8">
            <span
              className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${current.theme.bg} ${current.theme.text} edu-animate edu-scale-in`}
            >
              {current.badge}
            </span>

            <p className="text-lg leading-relaxed text-gray-700 edu-animate edu-fade-up">
              {current.intro}
            </p>

          <div className="space-y-6">
  {current.sections.map((sec, i) => {
    const isErasmusDocs =
      sec.title === "Erasmus Vizesi İçin Gerekli Evraklar";

    const items = isErasmusDocs
      ? sec.content.split(",").map((item) => item.trim())
      : [];

    return (
      <div
        key={i}
        className="edu-animate edu-fade-up relative rounded-2xl bg-[#f9fafb] p-8 border border-gray-200 transition-all duration-300 hover:shadow-md hakkimizda-hover-fill hakkimizda-scale-init"
      >
        <h3 className="font-semibold text-xl mb-4">
          {sec.title}
        </h3>

        {isErasmusDocs ? (
          <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
            {items.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 leading-relaxed text-sm">
            {sec.content}
          </p>
        )}
      </div>
    );
  })}
</div>

          </div>

          {/* IMAGE */}
          <div
            className="edu-animate edu-scale-in edu-soft-glow"
            style={{ "--edu-glow-color": current.theme.soft }}
          >
            <div className="relative h-[320px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={current.image}
                alt={current.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": programs.map((p, i) => ({
              "@type": "Course",
              "position": i + 1,
              "name": p.title,
              "description": p.intro,
              "provider": {
                "@type": "Organization",
                "name": "AYA Journey",
                "url": "https://ayajourney.com"
              }
            }))
          })
        }}
      />
    </main>
  );
}
