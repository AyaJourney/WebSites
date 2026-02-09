"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  { icon: "/images/terzi.webp", title: "Kişiye özel başvuru" },
  { icon: "/images/whyaya.webp", title: "Binlerce başvurudan elde ettiğimiz deneyimi size sunmaya hazırız" },
  { icon: "/images/google.webp", title: "Google yorumları bizim hakkımızda çok şey anlatır" },
  { icon: "/images/brains.webp", title: "Sorularınız yanıtsız kalmaz, ofislerimiz sizi ağırlamaya hazır" },
];

export default function WhyAya() {
  const desktopRefs = useRef([]);
  const mobileRefs = useRef([]);
  const [shown, setShown] = useState(Array(items.length).fill(false));
  const titleRef = useRef(null);
  const [titleShown, setTitleShown] = useState(false);

  /* BAŞLIK ANİMASYONU */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setTitleShown(true);
      },
      { threshold: 0.4 }
    );
    if (titleRef.current) obs.observe(titleRef.current);
    return () => obs.disconnect();
  }, []);

  /* DESKTOP – Scroll görünümü (sekme + stagger) */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.index);
            setShown((prev) => {
              if (prev[idx]) return prev;
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
          }
        }),
      { threshold: 0.45 }
    );

    desktopRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* MOBİL – Slide-in animasyon */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show-why");
          }
        }),
      { threshold: 0.3 }
    );

    mobileRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20">

      {/* BAŞLIK */}
      <motion.h2
        ref={titleRef}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={
          titleShown
            ? { scale: [0.85, 1.15, 1], opacity: 1 }
            : {}
        }
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold text-center mb-16"
      >
        Neden Biz?
      </motion.h2>

      {/* KART GRIDİ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {items.map((item, idx) => (
          <HoverCard
            key={idx}
            idx={idx}
            item={item}
            shown={shown[idx]}
            desktopRefs={desktopRefs}
            mobileRefs={mobileRefs}
          />
        ))}
      </div>
    </div>
  );
}

function HoverCard({ item, idx, shown, desktopRefs, mobileRefs }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center">

      {/* 🖥 DESKTOP CARD */}
      <motion.div
        ref={(el) => (desktopRefs.current[idx] = el)}
        data-index={idx}
        initial={{
          width: 150,
          height: 150,
          borderRadius: "999px",
          opacity: 0,
          y: 40,
          scale: 0.9,

        }}
        animate={
          shown
            ? {
                opacity: 1,
                y: [40, -22, 12, -5, 0],   // ✔ SCROLL SEKME ANİMASYONU
                scale: [0.9, 1.05, 1],
              }
            : {}
        }
        transition={{
          duration: 1.0,
          ease: "easeOut",
          delay: idx * 0.12,            // ✔ SIRAYLA GELME
        }}
        whileHover={{
          width: 260,
          height: 260,
          borderRadius: "999px",
          transition: { duration: 0.5 }, // ✔ KART 1 SANİYEDE AÇILIR
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="hidden lg:flex why-circle-card relative cursor-pointer flex-col items-center justify-center hover:justify-start p-8"
        style={{
          backdropFilter: isHovered ? "blur(14px)" : "blur(0px)",
          WebkitBackdropFilter: isHovered ? "blur(14px)" : "blur(0px)",
        }}
      >
        {/* RESİM */}
        <motion.div
          animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center mb-3"
        >
          <Image
            src={item.icon}
            alt={item.title}
            width={90}
            height={90}
            className="rounded-2xl"
          priority

          />
        </motion.div>

        {/* YAZI – 0.7 SANİYE GECİKME */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={
            isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{
            duration: 0.45,
            ease: "easeOut",
            delay: isHovered ? 0.5 : 0,   // ✔ YAZI 0.7’DE GELİR
          }}
          className="text-lg font-semibold text-gray-800 text-center absolute bottom-6 w-full px-4 py-3"
        >
          {item.title}
        </motion.h3>
      </motion.div>

      {/* 📱 MOBİL CARD */}
  <div
  ref={(el) => (mobileRefs.current[idx] = el)}
  className={`lg:hidden bg-white border border-gray-200 shadow-md rounded-[999px] p-6 flex flex-col items-center text-center w-[260px] h-[260px] mx-auto ${idx % 2 === 0 ? "slide-left-init-why" : "slide-right-init-why"}`}
>
  <Image
    src={item.icon}
    alt={item.title}
    width={90}
    height={90}
    className="rounded-xl mb-3"
          priority

  />
  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
</div>


    </div>
  );
}
