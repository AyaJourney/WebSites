"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Hakkimizda = () => {
  const refs = useRef([]);

  /* Scroll animations */
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

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  return (
    <main className="min-h-screen font-sans text-gray-900 py-20 lg:py-28 px-4 sm:px-8 xl:px-16 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <header
          ref={addRef}
          data-anim="hakkimizda-title"
          className="hakkimizda-title-init text-center mb-16 lg:mb-24"
        >
          <h1 className="text-5xl sm:text-7xl font-extrabold text-neutral-900 tracking-tight">
            Biz Kimiz?
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-[#0d8cff] font-medium tracking-wide">
            Sizin İçin En Doğru Yolu Tasarlıyoruz.
          </p>
        </header>

        {/* Content Area */}
        <section className="flex flex-col lg:flex-row gap-14 items-center">

          {/* LEFT — Text Blocks */}
          <div className="lg:w-1/2 space-y-10 order-2 lg:order-1">

            {/* Highlight box */}
            <div
              ref={addRef}
              data-anim="hakkimizda-fade"
              className="hakkimizda-hover-fill hakkimizda-fade-init backdrop-blur-md p-7 md:p-8 rounded-2xl bg-[#f9fafb]  transition-all duration-300 hover:shadow-md"
              
            >
              <div className="hakkimizda-content">
                <p className="text-xl font-semibold text-gray-800 leading-relaxed">
                  Aya Journey olarak, 2022’den bu yana danışanlarımızın vize, eğitim ve yatırım hedeflerine
                  ulaşmaları için <span className="text-[#0d8cff] font-bold">kişiye özel, güven odaklı bir danışmanlık</span> sunuyoruz.
                </p>
              </div>
            </div>

            {/* Paragraph */}
            <p
              ref={addRef}
              data-anim="hakkimizda-fade"
              className=" hakkimizda-hover-fill  hakkimizda-fade-init text-lg text-gray-700 leading-relaxed bg-[#f9fafb] p-4 rounded-xl  transition-all duration-300 hover:shadow-md"
            >
              <span className="hakkimizda-content">
                Kurulduğumuz günden bu yana binlerce danışanımıza
                <span className="text-[#0d8cff] font-semibold"> başarıyla eşlik ettik.</span>
                Ankara ve İstanbul ofislerimizle Türkiye’nin her yerine hizmet veriyoruz.
              </span>
            </p>

            {/* List */}
            <ul
              ref={addRef}
              data-anim="hakkimizda-left"
              className=" hakkimizda-hover-fill hakkimizda-left-init grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg font-medium text-gray-800 bg-[#f9fafb] p-5 rounded-xl transition-all duration-300 hover:shadow-md"
            >
              <div className="hakkimizda-content">
                <li className="flex items-center gap-2"><span className="text-[#0d8cff] text-2xl">•</span> ABD, İngiltere, Kanada, Avustralya</li>
                <li className="flex items-center gap-2"><span className="text-[#0d8cff] text-2xl">•</span> Schengen & Dubai Vizeleri</li>
                <li className="flex items-center gap-2"><span className="text-[#0d8cff] text-2xl">•</span> Eğitim & Yatırım Danışmanlığı</li>
                <li className="flex items-center gap-2"><span className="text-[#0d8cff] text-2xl">•</span> 10 Kişilik Profesyonel Kadro</li>
              </div>
            </ul>

            {/* Last paragraph */}
            <p
              ref={addRef}
              data-anim="hakkimizda-fade"
              className="hakkimizda-hover-fill  hakkimizda-fade-init  text-lg text-gray-700 bg-[#f9fafb] border-t pt-6 border-gray-200 p-4 rounded-xl transition-all duration-300 hover:shadow-md
              "
            >
              <span className="hakkimizda-content">
                <span className="font-extrabold text-[#0d8cff]">
                  “Bir Şeyleri Gerçekten Farklı Yapıyoruz.”
                </span>
                <br />
                Çünkü danışmanlığı sadece evrak hazırlamak değil,
                <strong className="font-semibold"> doğru yol haritasını oluşturmak</strong> olarak görüyoruz.
              </span>
            </p>

          </div>

          {/* RIGHT — Visual Boxes */}
          <div className="lg:w-1/2 flex flex-col gap-10 order-1 lg:order-2">

            {/* Large Quote */}
            <blockquote
              ref={addRef}
              data-anim="hakkimizda-scale"
              className="hakkimizda-hover-fill  hakkimizda-scale-init  relative p-8 rounded-2xl bg-[#f9fafb]  transition-all duration-300 hover:shadow-md"
            >
              <p className="hakkimizda-content text-2xl sm:text-3xl font-bold text-gray-800 leading-snug">
                Bir Şeyleri <span className="text-[#0d8cff]">Farklı Yapmaya</span> Çalışıyoruz
              </p>
            </blockquote>

            {/* Logo Box */}
            <div
              ref={addRef}
              data-anim="hakkimizda-scale"
              className=" hakkimizda-hover-fill  hakkimizda-scale-init  relative w-full rounded-2xl overflow-hidden aspect-[5/3] bg-[#f9fafb]  transition-all duration-300 hover:shadow-md"
            >
              <img
                src="/images/aya_logo_svg.svg"
                alt="Aya Journey Ekibi"
                className="hakkimizda-content object-contain w-full h-full opacity-95"
              />
            </div>

          </div>
        </section>
      </div>
    </main>
  );
};

export default Hakkimizda;
