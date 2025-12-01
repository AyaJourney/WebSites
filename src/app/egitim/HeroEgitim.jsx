"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroEgitim() {
  const { scrollY } = useScroll();
  const titleOpacity = useTransform(scrollY, [0, 10], [0.8, 1]);
  const titleColor = useTransform(
    scrollY,
    [0, 10],
    ["rgba(0, 0, 0, 0.7)", "rgba(255, 255, 255, 1)"]
  );
  const titleScale = useTransform(scrollY, [0, 200], [1.2, 1]);

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/edu1.jpg"
        alt="Eğitim Hero"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40" />

      <motion.h1
        style={{ opacity: titleOpacity, color: titleColor, scale: titleScale }}
        className="relative z-10 text-5xl md:text-7xl font-bold text-center px-4 drop-shadow-xl"
      >
        Vize kolay, staj hazır.
      </motion.h1>
    </section>
  );
}
