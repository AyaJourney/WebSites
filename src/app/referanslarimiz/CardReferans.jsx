"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const references = [
  { name: "Speaker Agency", logo: "/referans/speaker.webp" },
  { name: "Bahçeşehir Koleji", logo: "/referans/bahcesehir.png" },
  { name: "Erenköy Çevre Koleji", logo: "/referans/cevre koleji.jpg" },
  { name: "Inavitas", logo: "/referans/inativas.png" },
  { name: "Alfa Solar Enerji", logo: "/referans/alfasolarlogo.webp" },
  { name: "Konyaspor", logo: "/referans/konya spor.jpg" },
  { name: "Kiler Holding", logo: "/referans/kiler holding.jpg" },
  { name: "Biletinial", logo: "/referans/bilet.png" },
];

const CardReferans = () => {
  const [offset, setOffset] = useState(0);
  const itemSize = 220; // kart boyutu
  const gap = 28; // kart aralığı
  const speed = 0.6; // px/frame

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setOffset((prev) => {
        const newOffset = prev - speed;
        const totalWidth = (itemSize + gap) * references.length;
        return newOffset <= -totalWidth ? 0 : newOffset;
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 bg-white">
      {/* Başlık */}
      <div className="text-center mb-12 px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Referanslarımız</p>
        <h1 className="text-3xl md:text-4xl font-bold mt-3">
          <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            AYA Journey’e Güvenen Markalar
          </span>
        </h1>
        {/* <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
          İş ortaklarımızın logoları kesintisiz bir akışta; her kart cam efekti, ışık ve ince gölgelerle vurgulandı.
        </p> */}
      </div>

      {/* Slider alanı */}
      <div className="relative w-full">
        <div
          className="flex items-center"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {references.concat(references).map((ref, idx) => (
            <div
              key={`${ref.name}-${idx}`}
              style={{ width: itemSize, height: itemSize, marginRight: gap }}
              className="flex-shrink-0 rounded-2xl bg-white backdrop-blur border border-slate-200/70 transition-transform duration-500 hover:-translate-y-1 group shadow-none md:shadow-[0_20px_50px_-24px_rgba(15,23,42,0.45)] hover:shadow-[0_20px_40px_-26px_rgba(37,99,235,0.45)]"
            >
              <div className="w-full h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center p-5 bg-gradient-to-br from-slate-50 to-white group-hover:from-white group-hover:to-blue-50 transition-colors duration-500">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={ref.logo}
                      alt={ref.name}
                      width={160}
                      height={160}
                      className="object-contain max-h-[120px] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="w-full px-4 py-3 border-t border-slate-200/80 bg-white/95 group-hover:bg-blue-50/70 transition-colors duration-500">
                  <p className="text-center text-slate-900 text-sm font-semibold tracking-wide group-hover:text-blue-700">
                    {ref.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardReferans;
