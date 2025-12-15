"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const bullets = [
  "Kişiye özel strateji ve belge hazırlığı",
  "Randevu, formlar ve takvim tek ekranda",
  "24 saat içinde ön geri dönüş garantisi",
];

const stats = [
  { label: "Onay oranı", value: "%95*" },
  { label: "Deneyim", value: "15+ yıl" },
  { label: "Ülke", value: "30+" },
];

const CardBizKimiz = () => {
  const fadeRefs = useRef([]);
  const rightCardRef = useRef(null);
  const rightCardChildrenRef = useRef([]);

  /** Scroll Observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.dataset.anim + "-show");
          }
        }),
      { threshold: 0.25 }
    );

    fadeRefs.current.forEach((el) => el && observer.observe(el));
    if (rightCardRef.current) observer.observe(rightCardRef.current);
    rightCardChildrenRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const addFadeRef = (el) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };

return (
  <section className="bg-white text-gray-900">
    <div className="max-w-[1130px] mx-auto px-4 sm:px-6 py-12 xl:py-16 flex flex-col xl:flex-row gap-12 xl:gap-16 items-center">

      {/* SOL METİN */}
      <div className="w-full xl:w-1/2 space-y-4">

        <span
          ref={addFadeRef}
          data-anim="biz-fade"
          className="biz-fade-init inline-flex w-fit items-center gap-2 px-3 py-1 text-xs sm:text-sm font-semibold rounded-full bg-blue-50 text-pink-800 border border-blue-100"
        >
          Vize süreçlerinde stresi sıfırlayın
        </span>

        <h1
          ref={addFadeRef}
          data-anim="biz-fade"
          className="biz-fade-init text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight"
        >
          Hayalinizdeki seyahate ilk adımı
          <span className="text-blue-600"> Aya Journey </span>
          ile atın.
        </h1>

        <p
          ref={addFadeRef}
          data-anim="biz-fade"
          className="biz-fade-init text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed"
        >
          ABD, İngiltere, Portekiz, Kanada, Avustralya ve tüm Schengen
          vizelerinde uzman ekibimizle başvurularınızı hızlı, hatasız ve
          şeffaf şekilde yönetiyoruz.
        </p>

        {/* BUTON */}
        <div
          ref={addFadeRef}
          data-anim="biz-fade"
          className="biz-fade-init flex flex-wrap items-center gap-3"
        >
          <Link href="/randevu">
            <button className="px-5 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition">
              Ücretsiz ön danışmanlık al
            </button>
          </Link>
        </div>

        {/* İSTATİSTİKLER */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          {stats.map((item, i) => (
            <div
              key={i}
              ref={addFadeRef}
              data-anim="biz-fade"
              className="biz-fade-init rounded-2xl border border-gray-100 bg-gray-50/60 py-4 shadow-sm"
            >
              <div className="text-lg sm:text-xl font-bold">{item.value}</div>
              <div className="text-xs uppercase tracking-wide text-gray-500">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* MADDELER */}
        <div className="space-y-3">
          {bullets.map((item, i) => (
            <div
              key={i}
              ref={addFadeRef}
              data-anim="biz-fade"
              className="biz-fade-init flex items-start gap-3 text-sm sm:text-base"
            >
              <FaCheckCircle className="text-green-500 mt-1" />
              <span className="text-gray-800">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SAĞ KART */}
      <div
        ref={rightCardRef}
        data-anim="biz-card"
        className="biz-card-init w-full xl:w-1/2 relative"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/50 via-white to-purple-100/40 blur-2xl" />

        <div className="relative rounded-3xl border border-gray-100 shadow-xl bg-white/80 backdrop-blur-md p-5 sm:p-6 flex flex-col gap-4">

          <div
            ref={(el) => (rightCardChildrenRef.current[0] = el)}
            data-anim="biz-child"
            className="biz-child-init flex items-center justify-between bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3"
          >
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Planınız hazır
              </p>
              <p className="text-sm font-semibold">Aya Journey</p>
            </div>
            <span className="text-green-600 text-sm font-semibold">Aktif</span>
          </div>

          <div
            ref={(el) => (rightCardChildrenRef.current[1] = el)}
            data-anim="biz-child"
            className="biz-child-init rounded-2xl bg-white border border-gray-100 shadow-sm p-4 flex items-center justify-center"
          >
            <Image
              src="/images/logo.png"
              alt="Aya Journey"
              width={420}
              height={300}
              className="object-contain"
              priority
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              "Belge kontrolü tamamlandı",
              "Randevu takibi açık",
              "Danışman atandı",
              "Güncel liste paylaşıldı",
            ].map((text, i) => (
              <div
                key={i}
                ref={(el) => (rightCardChildrenRef.current[i + 2] = el)}
                data-anim="biz-child"
                className="biz-child-init flex items-center gap-2 rounded-full bg-gray-50 border border-gray-200 px-3 py-2"
              >
                <FaCheckCircle className="text-green-500" size={16} />
                <span>{text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  </section>
);

};

export default CardBizKimiz;
