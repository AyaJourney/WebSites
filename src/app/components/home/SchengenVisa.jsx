"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const SchengenIntro = () => {
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
      className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-white ava-fade-init"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* SOL – METİN */}
        <div className="space-y-8 text-center lg:text-left">
         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
  <span 
  // className="bg-gradient-to-r from-[#003399] via-blue-600 to-[#FFCC00] bg-clip-text text-transparent"
  >
    Schengen vizesi
  </span>{" "}
  <span className="text-slate-900">
    tek evrak listesiyle alınmaz
  </span>
</h2>


          <p className="text-lg text-slate-700 max-w-xl mx-auto lg:mx-0">
            29 ülke, 29 farklı bakış açısı.
            <br />
            <strong className="text-slate-900">
              Doğru ülke seçimi ve dosya tutarlılığı Schengen vizesinin kaderini belirler.
            </strong>
          </p>

          <p className="text-base text-slate-600 max-w-xl mx-auto lg:mx-0">
            Aya Journey olarak yalnızca evrak hazırlamıyoruz.
            Profilinizi analiz ediyor, hangi ülkeye nasıl başvurmanız
            gerektiğini stratejik olarak planlıyoruz.
          </p>

          {/* ÖNE ÇIKANLAR */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
            {[
              "Profil bazlı ülke seçimi",
              "Evrak – niyet – seyahat uyumu",
              "Ret riskini azaltan dosya kurgusu",
              "Gerçekçi ve tutarlı başvuru planı",
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

          {/* CTA */}
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

        {/* SAĞ – GÖRSEL / BİLGİ KARTI */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg h-100 rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
            <Image
              src="/images/visaschengen.webp"
              alt="Schengen Vize Başvuru Süreci"
              width={520}
              height={420}
              className="object-cover w-full h-full"
              priority
            />

            {/* Bilgi bandı */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur border border-slate-200 rounded-xl px-4 py-3 text-md text-slate-700">
              Schengen vizesinin en iyi yanı. <br />
              <strong className=" ml-5 lg:ml-25">Tek vize ile 29 ülkeyi gezebilme imkanı</strong> 
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SchengenIntro;
