"use client";
import React, { useEffect, useRef } from "react";
import NextImage from 'next/image';
import "./referans.css"
const references = [
  { name: "Speaker Agency", logo: "/referans/speaker_agency_home_url.webp" },
  { name: "Bahçeşehir Koleji", logo: "/referans/bahcesehir.png" },
  { name: "Erenköy Çevre Koleji", logo: "/referans/cevre koleji.jpg" },
  { name: "Inavitas", logo: "/referans/inativas.png" },
  { name: "Alfa Solar", logo: "/referans/alfasolarlogo.webp" },
  { name: "Konyaspor", logo: "/referans/konya spor.jpg" },
  { name: "Kiler Holding", logo: "/referans/kiler holding.jpg" },
  { name: "Biletinial", logo: "/referans/bilet.png" },
  { name: "Punto Eğitim Danışmanlık", logo: "/referans/Punto-Logo.png" },

];

const Referanslarimiz = () => {
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        }),
      { threshold: 0.2 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    cardRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 font-sans px-4 sm:px-8 py-10">
      
      {/* Başlık */}
      <h1
        ref={titleRef}
        className="text-4xl font-bold mb-10 text-center referanslar-title-init"
      >
        Referanslarımız
      </h1>

      {/* Kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl">
        {references.map((ref, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{ transitionDelay: `${index * 80}ms` }} // stagger
            className="referanslar-card-init flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 backdrop-blur border border-slate-200/70 transition-all duration-500 hover:-translate-y-1 group md:shadow-[0_20px_50px_-24px_rgba(15,23,42,0.45)] hover:shadow-[0_20px_40px_-26px_rgba(37,99,235,0.45)]"
          >
      <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
  <NextImage
    src={ref?.logo}
    alt={ref.name || "Referans Logo"}
    width={96}  // w-24 = 96px
    height={96} // h-24 = 96px
    className="object-contain transition-transform duration-300 group-hover:scale-105"
    loading="lazy"
  />
</div>
            <p className="text-center text-gray-700 font-medium">
              {ref.name}
            </p>
          </div>
        ))}
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "AyaJourney hangi firmalara hizmet vermiştir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AyaJourney; eğitim kurumları, uluslararası şirketler ve bireysel danışanlarla çalışmıştır.",
                },
              },
              {
                "@type": "Question",
                name: "Referanslar gerçek mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet. Referanslarımız firmaların izniyle yayınlanmaktadır.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
};

export default Referanslarimiz;
