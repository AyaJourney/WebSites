"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const Aya2 = () => {
  const cardRefs = useRef([]);
  const imageRef = useRef(null);

  const maddeler = [
    {
      title: "Herkese ayrı fikir. Herkese ayrı söylem. Çünkü herkes ayrı.",
      desc: "Görmeye can attığınız filmin sonunu çok izledik.",
      color: "#0ea5e9",
    },
    {
      title: "Olası zorluklar",
      desc: "Büyükelçiliklerin son dönemdeki yaklaşımları, eski onay ve retlerin bize öğrettiklerinden ders çıkarma…",
      color: "#10b981",
    },
    {
      title: "Günceli takip etme",
      desc: "Süreci en güncel haliyle takip ederek doğru yönlendirme yapıyoruz.",
      color: "#f59e0b",
    },
    {
      title: "Çok iyi bildiğimiz konular",
      desc: "Size yardım teklif ettiğimiz vizeleri bizzat kendimiz de aldık. Ekibimiz gerçekten işi bilen kişilerden oluşuyor.",
      color: "#6366f1",
    },
  ];

  /* Scroll reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aya2-fade-up-show");
          }
        }),
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Image reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageRef.current.classList.add("aya2-image-show");
        }
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
  }, []);

  return (
    <section className="w-full bg-white text-black py-6 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">

        {/* SOL — RESİM */}
        <div className="flex items-stretch h-full">
          <div
            ref={imageRef}
            className="relative w-full rounded-2xl overflow-hidden aya2-image-init h-[300px] md:h-auto  md:max-h-[550px]"
          >
            <Image
              src="/images/aya2.jpg"
              alt="Aya Journey Visual"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* SAĞ — METİN VE KARTLAR */}
        <div className="flex flex-col justify-end h-full md:max-h-[550px] ">
         <h1 className="text-[4rem] md:text-[3rem] font-bold mb-6 leading-snug">
           Diğerlerinden farkımız
          </h1>

          <div className="space-y-10">
            {maddeler.map((item, i) => (
           <div
  key={i}
  ref={(el) => (cardRefs.current[i] = el)}
  className=" aya2-fade-up-init aya2-hover-fill bg-white p-5 rounded-xl shadow flex items-start gap-4 transition-all duration-700 hover:shadow-xl hover:scale-[1.03]"
>
  <FaCheckCircle
    className="text-3xl shrink-0"
    style={{ color: item.color }}
  />

  <div className="aya2-content">
    <h2 className="font-semibold text-lg">{item.title}</h2>
    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
  </div>
</div>

            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Aya2;
