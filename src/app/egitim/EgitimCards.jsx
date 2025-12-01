"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaAward,
  FaUserGraduate,
  FaLightbulb,
  FaBalanceScale,
  FaClipboardList,
  FaStar,
} from "react-icons/fa";

// Sekmeler ve içerikler + ikonları
const sections = [
  {
    title: "Program Tanıtımı",
    content:
      "AYA Journey olarak, Amerika hayalinizi profesyonel bir kariyere dönüştürecek o büyük fırsatı sunmaktan gurur duyuyoruz: Amerika'da 18 aya kadar maaşlı turizm ve aşçılık stajı.",
    icon: <FaGraduationCap className="text-xl" />,
    color: "from-indigo-400 to-purple-500",
  },
  {
    title: "Amerika'da Yaşam",
    content:
      "Amerika'da uzun süre yaşamak, global bir tecrübe edinmek ve bunu yaparken ailenize yük olmadan, kendi paranızı kazanmak... Bu artık uzak bir hayal değil.",
    icon: <FaUniversity className="text-xl" />,
    color: "from-green-400 to-teal-500",
  },
  {
    title: "Bu Program Size Ne Katar?",
    content:
      "Kariyer Sıçraması: CV'nize Marriott, Westin, Hyatt ve Hilton gibi 5 yıldızlı dünya devlerinde edineceğiniz tecrübayı ekleyin.\n\nMaddi Kazanç: Emeğinizin karşılığını dolarla alın. 1 yılın sonunda, yaşam masraflarınızı çıktıktan sonra bile yaklaşık 20.000$ birikimle dönebilirsiniz.\n\nKültürel Deneyim: 7 farklı eyalette yaşam ve çalışma imkanı.",
    icon: <FaAward className="text-xl" />,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Kimler Başvurabilir?",
    content:
      "2 veya 4 yıllık üniversitelerin Turizm veya Gastronomi bölümlerinden mezunsanız, orta seviye (Intermediate) veya üzeri İngilizceniz varsa, 34 yaşın altındaysanız başvurabilirsiniz.",
    icon: <FaUserGraduate className="text-xl" />,
    color: "from-pink-400 to-red-500",
  },
  {
    title: "Farkımız",
    content:
      "Bizim farkımız, diğerlerinin sadece 'program sağlayıcı' olduğu yerde, bizim 'vize başarı uzmanı' olmamız. Diğer şirketler size sadece bir yerleştirme sunarken, biz size vize onayına giden en güvenli yolu sunuyoruz.",
    icon: <FaLightbulb className="text-xl" />,
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Tecrübeye Güven",
    content:
      "Amerika vize ret oranlarının arttığı bu dönemde, şansa değil, tecrübeye güvenmelisiniz. Ekibimizde eski konsolosluk çalışanları, avukatlar ve daha önce J1 yapmış danışmanlar var.",
    icon: <FaBalanceScale className="text-xl" />,
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Mülakat Planlaması",
    content:
      "Size sadece bir form doldurtup 'bol şans' demiyoruz. Mülakatınızın her saniyesini birlikte planlıyor, olası tüm sorulara en doğru cevapları hazırlıyoruz.",
    icon: <FaClipboardList className="text-xl" />,
    color: "from-rose-400 to-red-500",
  },
  {
    title: "Hayalleriniz",
    content:
      "Sizin görmeye can attığınız o filmin sonunu biz yüzlerce kez izledik. Şimdi başrol sırası sizde. Hayallerinizi riske atmayın, AYA Journey uzmanlığıyla yola çıkın.",
    icon: <FaStar className="text-xl" />,
    color: "from-yellow-300 to-yellow-500",
  },
];

export default function EgitimCard() {
  const [active, setActive] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    // component mount olduktan sonra scroll listener ekle
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      // controls.start'ı doğrudan kullan
      controls.start({
        scale: y < 100 ? 1 + y / 1000 : 1.1,
        opacity: y < 100 ? 1 - y / 500 : 0.85,
      });
    };

    // add listener
    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Hero Background */}
      <motion.div  initial={{ opacity: 1, scale: 1 }} animate={controls} className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/edu1.jpg"
          alt="Amerika'da Staj Programı"
          fill
          priority
          className="object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </motion.div>

      {/* Hero Title */}
      <motion.h1
        className="absolute top-20 left-6 md:left-20 text-5xl md:text-6xl font-bold text-white z-10 drop-shadow-xl"
        animate={{
          scale: scrollY < 100 ? 1 : 0.95,
          opacity: scrollY < 100 ? 1 : 0.9,
        }}
        transition={{ duration: 0.3 }}
      >
        Vize kolay, staj hazır.
      </motion.h1>

      {/* Tabs + Cards */}
      <div className="relative z-10 flex flex-col md:flex-row justify-start md:justify-center items-start gap-6 px-6 py-12 mt-40 md:mt-60">
        {/* Tabs */}
   {/* Tabs */}
<div
  className={`
    w-full flex gap-4 overflow-x-auto scrollbar-hide
    md:flex-col md:w-1/4 md:overflow-x-visible
  `}
>
  {sections.map((sec, i) => (
    <button
      key={i}
      onClick={() => setActive(i)}
      className={`
        flex-shrink-0 min-w-[45%] md:min-w-full 
        px-4 py-3 rounded-xl font-semibold text-left transition-all duration-300 flex items-center gap-2
        ${active === i
          ? `bg-gradient-to-r ${sec.color} text-white shadow-2xl scale-105`
          : "bg-white/10 text-white hover:bg-white/20"}
      `}
    >
      {sec.icon} {sec.title}
    </button>
  ))}
</div>


        {/* Card Content */}
        <div className="md:w-3/4 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl text-white max-h-[70vh] overflow-y-auto relative hover:scale-[1.03] transition-transform duration-300"
            >
              {/* Badge */}
              {/* <motion.div
                className={`absolute top-4 left-4 bg-gradient-to-r ${sections[active].color} px-3 py-1 rounded-full font-semibold shadow-lg text-black text-sm flex items-center gap-2`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {sections[active].icon} Öne Çıkan
              </motion.div> */}

              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                {sections[active].icon} {sections[active].title}
              </h2>
              <p className="whitespace-pre-line text-base md:text-lg leading-relaxed">
                {sections[active].content}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
