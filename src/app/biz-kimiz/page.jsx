"use client";
import React from "react";
import Image from "next/image";
import { titleCase } from "@/helper/help";
import { useEffect, useRef } from "react";
import "./biz.css"
const features = [
  {
    title: "Mülakat Odaklı Yaklaşım",
    desc: "Danışmanlığı yalnızca evrak hazırlamak değil, doğru yol haritasını oluşturmak olarak görüyoruz.",
  },
  {
    title: "Kişiye Özel Süreç",
    desc: "Her danışan için farklı bir strateji, farklı bir planlama yapıyoruz.",
  },
  {
    title: "Türkiye Genelinde Hizmet",
    desc: "Ankara ve İstanbul ofislerimizle Türkiye’nin her yerine hizmet veriyoruz.",
  },
  {
    title: "Güven Odaklı Danışmanlık",
    desc: "Sürecin her aşamasında şeffaf ve güven temelli bir yaklaşım benimsiyoruz.",
  },
];



export default function Hakkimizda() {
  const animRefs = useRef([]);

const register = (el) => {
  if (el && !animRefs.current.includes(el)) {
    animRefs.current.push(el);
  }
};

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("anim-show");
        }
      });
    },
    { threshold: 0.2 }
  );

  animRefs.current.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}, []);

  return (
    <main className="min-h-screen bg-white text-slate-900 px-4 sm:px-8 xl:px-16 py-20">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* ÜST ALAN */}
        <section className="grid lg:grid-cols-2 gap-16 items-start">

          {/* SOL – BİZ KİMİZ */}
        {/* SOL – BİZ KİMİZ */}
<div className="space-y-8">
  <div className="w-44">
    <Image
      src="/images/aya_logo_svg.svg"
      alt="Aya Journey"
      width={320}
      height={120}
      className="w-full h-auto"
    />
  </div>

<h1 ref={register} className="anim text-4xl md:text-5xl font-bold">

    Biz Kimiz?
  </h1>

  {/* METİN – KART YOK */}
  <p ref={register} className="anim text-xl font-semibold text-gray-800">

    Aya Journey olarak, 2022’den bu yana danışanlarımızın vize, eğitim ve yatırım
    hedeflerine ulaşmaları için{" "}
    <span className="text-[#0d8cff] font-bold">
      kişiye özel, güven odaklı bir danışmanlık
    </span>{" "}
    sunuyoruz.
  </p>

 <p ref={register} className="anim text-xl font-semibold text-gray-800">

    Kurulduğumuz günden bu yana binlerce danışanımıza{" "}
    <span className="text-[#0d8cff] font-semibold">
      başarıyla eşlik ettik.
    </span>{" "}
    Ankara ve İstanbul ofislerimizle Türkiye’nin her yerine hizmet veriyoruz.
  </p>

  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg font-medium text-gray-800">
    <li className="flex items-center gap-2">
      <span className="text-[#0d8cff] text-2xl">•</span> ABD, İngiltere, Kanada, Avustralya
    </li>
    <li className="flex items-center gap-2">
      <span className="text-[#0d8cff] text-2xl">•</span> Schengen & Dubai Vizeleri
    </li>
    <li className="flex items-center gap-2">
      <span className="text-[#0d8cff] text-2xl">•</span> Eğitim & Yatırım Danışmanlığı
    </li>
    <li className="flex items-center gap-2">
      <span className="text-[#0d8cff] text-2xl">•</span> Profesyonel Kadro
    </li>
  </ul>

<p ref={register} className="anim text-xl font-semibold text-gray-800">

    <span className="font-extrabold text-[#0d8cff]">
      “Bir Şeyleri Gerçekten Farklı Yapıyoruz.”
    </span>
    <br />
    Çünkü danışmanlığı sadece evrak hazırlamak değil,{" "}
    <strong>doğru yol haritasını oluşturmak</strong> olarak görüyoruz.
  </p>
</div>


          {/* SAĞ – AYA JOURNEY FARKI */}
       <div className="space-y-10">


  <div className="grid sm:grid-cols-2 gap-6">
    {features.map((item, i) => (
     <div
  ref={register}
  key={i}
  className="anim group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
>

        {/* subtle gradient line */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition" />

        {/* content */}
        <div className="flex items-start gap-4">
          {/* icon dot */}
          <div className="mt-1 w-3 h-3 rounded-full bg-rose-500 shrink-0" />

          <div>
            <h3 className="font-semibold text-lg mb-1 text-slate-900">
              {item.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
<h2
  ref={register}
  className=" anim text-4xl font-semibold italic text-slate-800 tracking-wide text-left font-['Dancing_Script'] leading-tight"
>
  Aya Journey Farkı
</h2>

</div>

        </section>

        {/* ALT – DANIŞMANLAR */}
 <section className="mt-24">
      {/* Başlık */}
      <div className="text-center mb-14">
       <h2 ref={register} className="anim text-3xl font-bold">
          Danışmanlarımız
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Süreci sizinle birlikte yöneten uzman ekip
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-y-14 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {titleCase?.map((item) => (
        <div
  ref={register}
  key={item.id}
  className="anim flex flex-col items-center text-center max-w-[230px] mx-auto"
>
            {/* Foto */}
            <div className="relative w-28 h-28 rounded-full overflow-hidden bg-slate-100">
              <Image
                src={item.photo}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* İsim */}
            <h3 className="mt-4 text-base font-semibold text-slate-900">
              {item.name}
            </h3>

            {/* Şehir */}
            <p className="text-xs text-slate-500 mt-0.5">
              {item.title}
            </p>

            {/* Açıklamalar */}
            <ul className="mt-4 space-y-2">
              {item?.descriptions?.map((desc, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-700 leading-relaxed text-justify"
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

      </div>
    </main>
  );
}
