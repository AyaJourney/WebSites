"use client";
import React, { useState } from "react";
import {
  AiFillCheckCircle,
  AiFillSafetyCertificate,
  AiOutlineThunderbolt,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaQuestion, FaGlobeAmericas,FaGoogle  } from "react-icons/fa";
import { FaPersonRays } from "react-icons/fa6";
import { motion } from "framer-motion";

const items = [
  {
    icon: <FaPersonRays className="w-10 h-10 text-[#0d8cff]" />,
    title: "Kişiye özel başvuru",
    desc: "Başvurunuz uzman ekibimiz tarafından hazırlanır.",
  },
  {
    icon: <VscWorkspaceTrusted className="w-10 h-10 text-[#0d8cff]" />,
    title: "Binlerce başvurudan elde ettiğimiz deneyimi size sunmaya hazırız",
    desc: "Belgeleriniz doğru şekilde sunulur.",
  },
  {
    icon: <FaGoogle  className="w-10 h-10 text-[#0d8cff]" />,
    title: "Google yorumları bizim hakkımızda çok şey anlatır",
    desc: "Verileriniz tam güvenlik altındadır.",
  },
  {
    icon: <FaQuestion className="w-10 h-10 text-[#0d8cff]" />,
    title: "Sorularınız yanıtsız kalmaz, ofislerimiz sizi ağırlamaya hazır",
    desc: "Süreçler hızlı bir şekilde ilerletilir.",
  },
  // {
  //   icon: <FaUsers className="w-10 h-10 text-[#0d8cff]" />,
  //   title: "Uzman Danışmanlık",
  //   desc: "Size özel strateji oluşturulur.",
  // },
  // {
  //   icon: <FaGlobeAmericas className="w-10 h-10 text-[#0d8cff]" />,
  //   title: "Küresel Vize Çözümleri",
  //   desc: "Schengen, ABD, İngiltere ve daha fazlası.",
  // },
  // {
  //   icon: <AiOutlineFieldTime className="w-10 h-10 text-[#0d8cff]" />,
  //   title: "Kesintisiz Başvuru Desteği",
  //   desc: "Her aşamada 7/24 destek.",
  // },
];

export default function WhyAya() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Neden Biz?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {items.map((item, idx) => (
          <HoverCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------
   DESKTOP HOVER KARTI — TÜM ANİMASYON MOTION
--------------------------------------------*/
function HoverCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="group">
      {/* DESKTOP */}
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        initial={false}
        animate={{
          width: hovered ? 260 : 140,
          height: hovered ? 260 : 140,
          borderRadius: hovered ? "20px" : "999px",
        }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className="
          hidden md:flex relative mx-auto bg-white
          border border-gray-200 shadow-md
          flex-col items-center justify-center
          cursor-pointer select-none
        "
      >
        {/* İKON */}
        <motion.div
          layout
          initial={false}
          animate={
            hovered
              ? { y: 0, scale: 1.15 } // KART MODU → ikon yukarıda
              : { y: 0, scale: 1 }     // DAİRE MODU → ikon tam ortada
          }
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={hovered ? "z-10 mb-30" : "z-10"} 
          // hovered değilken margin yok → tam merkezde durur
          // hovered iken ikon biraz yukarı kayar ama tavana yapışmaz
        >
          {item.icon}
        </motion.div>

        {/* YAZILAR */}
     <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={
    hovered
      ? { opacity: 1, y: 10 }   // giriş animasyonu
      : { opacity: 0, y: 30 }   // çıkış animasyonu
  }
  transition={{
    opacity: {
      duration: hovered ? 0.6 : 0.05,   // ✔ giriş yavaş, çıkış hızlı
      delay: hovered ? 0.35 : 0,        // ✔ giriş gecikmeli, çıkış hemen
    },
    y: {
      duration: hovered ? 0.6 : 0.25,
      delay: hovered ? 0.35 : 0,
    }
  }}
  className="
    absolute bottom-15 left-0 right-0 
    text-center px-4 pointer-events-none
    flex flex-col items-center
  "
>
  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
  {/* <p className="text-sm text-gray-600 mt-2">{item.desc}</p> */}
</motion.div>

      </motion.div>

      {/* MOBILE — Direkt kart görünür */}
      <div className="md:hidden bg-white border border-gray-200 shadow-md rounded-2xl p-6 text-center flex flex-col items-center">
        <div className="mb-3">{item.icon}</div>
        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
      </div>
    </div>
  );
}


