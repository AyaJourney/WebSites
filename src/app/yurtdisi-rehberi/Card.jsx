"use client";
import React, { useEffect } from "react";
import SmartImage from "../components/SmartImage";
import { abroad } from "../../helper/help";
import Link from "next/link";
import "./yurtdisi.css"
const Card = () => {
  useEffect(() => {
  const cards = document.querySelectorAll("[data-card-anim]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ydr-show");
        }
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach((card) => observer.observe(card));
  return () => observer.disconnect();
}, []);

  return (
    <div className="w-full px-6 py-12 bg-zinc-50 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {abroad?.map((item,index) => (
  <div
  key={item.id}
  data-card-anim
  className={` relative group ${item.click && "cursor-pointer"} bg-white  rounded-2xl overflow-hidden w-full max-w-xs border border-slate-200/70 shadow-sm transition-all duration-300  hover:shadow-2xl ydr-card ydr-card-delay-${(index % 4) + 1}`}
>
{item?.click ? ( <Link href={item.address} aria-label={item.title}>

    {/* IMAGE */}
    <div className="relative w-full h-44 overflow-hidden">
      <SmartImage
        src={item.image}
        alt={item.title}
        priority
        className="transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

      {/* Floating badge */}
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur text-slate-900 shadow">
        Rehber
      </div>
    </div>

    {/* CONTENT */}
    <div className="p-5 flex flex-col justify-between min-h-[220px] bg-white dark:bg-zinc-900">
      <div>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-gray-100 mb-2 leading-snug">
          {item.title}
        </h2>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
          {item.shortDescription}
        </p>

        {/* TAGS */}
        <div className="mt-4 flex flex-wrap gap-2">
          {item?.etiketler?.map((etiket, tagIndex) => {
            const renkler = [
              "border-blue-600 text-blue-700",
              "border-emerald-600 text-emerald-700",
              "border-orange-500 text-orange-600",
            ];

            return (
              <span
                key={tagIndex}
                className={`
                  px-3 py-1 rounded-full text-[11px] font-semibold
                  border bg-white
                  ${renkler[tagIndex % renkler.length]}
                `}
              >
                {etiket}
              </span>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-5 flex items-center justify-between">
 <span className="text-xs font-medium text-slate-500 transition group-hover:underline group-hover:underline-offset-4">
  Detayları Gör
</span>
        {/* <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 text-white transition group-hover:translate-x-1">
          →
        </span> */}
      </div>
    </div>
  </Link>) : ( <div >

    {/* IMAGE */}
    <div className="relative w-full h-44 overflow-hidden">
      <SmartImage
        src={item.image}
        alt={item.title}
        priority
        className="transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

      {/* Floating badge */}
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur text-slate-900 shadow">
        Rehber
      </div>
    </div>

    {/* CONTENT */}
    <div className="p-5 flex flex-col justify-between min-h-[220px] bg-white dark:bg-zinc-900">
      <div>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-gray-100 mb-2 leading-snug">
          {item.title}
        </h2>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
          {item.shortDescription}
        </p>

        {/* TAGS */}
        <div className="mt-4 flex flex-wrap gap-2">
          {item?.etiketler?.map((etiket, tagIndex) => {
            const renkler = [
              "border-blue-600 text-blue-700",
              "border-emerald-600 text-emerald-700",
              "border-orange-500 text-orange-600",
            ];

            return (
              <span
                key={tagIndex}
                className={`
                  px-3 py-1 rounded-full text-[11px] font-semibold
                  border bg-white
                  ${renkler[tagIndex % renkler.length]}
                `}
              >
                {etiket}
              </span>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-5 flex items-center justify-between">
 {/* <span className="text-xs font-medium text-slate-500 transition group-hover:underline group-hover:underline-offset-4">
  Detayları Gör
</span> */}
        {/* <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 text-white transition group-hover:translate-x-1">
          →
        </span> */}
      </div>
    </div>
  </div>)} 
</div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
