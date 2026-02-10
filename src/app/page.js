import React from "react";
import Giris from "./components/home/Giris";
import CardHizmet from "./hizmetlerimiz/CardHizmet";
import CardReferans from "./referanslarimiz/CardReferans";
import CardBizKimiz from "./biz-kimiz/CardBizKimiz";
import WhyAya from "./components/home/WhyAya";
import GoogleYorum from "./components/home/GoogleYorum";
import Portugal from "./components/home/Portugal";
import CardEgitim from "./egitim/CardEgitim";
import Aya from "./components/home/Aya";
import Aya2 from "./components/home/Aya2";
import AmericaVisa from "./components/home/AmericaVisa";
import İngiltereVisa from "./components/home/İngiltereVisa";
import SchengenVisa from "./components/home/SchengenVisa";
import SideNav from "./components/home/SideNav";
import dynamic from 'next/dynamic';


const HomeClient = dynamic(() => import("./components/home/HomeClient"), {
  
  loading: () => <div className="min-h-screen bg-white animate-pulse" />,
  ssr: true
});


export const metadata = {
title: "Vize Danışmanlığı | Amerika, Schengen & İngiltere – Aya Journey",
  description:
    "Amerika, Schengen, İngiltere ve Portekiz vize başvurularında uzman danışmanlık. DS-160, vize mülakatı ve ret riskini azaltan profesyonel destek Aya Journey’de.",
  keywords: [
    "vize danışmanlığı",
    "amerika vize danışmanlığı",
    "schengen vize danışmanlığı",
    "ingiltere vizesi",
    "portekiz d7 vizesi",
    "ds-160 danışmanlık",
    "vize mülakat hazırlığı",
    "ankara vize danışmanlığı",
    "istanbul vize danışmanlığı"
  ],
  alternates: {
    canonical: "https://ayajourney.com",
  },
  openGraph: {
    title: "Vize Danışmanlığı & Göçmenlik Uzmanı | Aya Journey",
    description:
      "Vize reddi riskini azaltın. Amerika ve Schengen vize başvurularında uzman danışmanlık ile sürecinizi güvenle yönetin.",
    url: "https://ayajourney.com",
    siteName: "Aya Journey",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://ayajourney.com/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "Aya Journey Vize Danışmanlığı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vize Danışmanlığı & Göçmenlik Uzmanı | Aya Journey",
    description:
      "Amerika ve Schengen vizesi başvurularında profesyonel danışmanlık.",
    images: ["https://ayajourney.com/images/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-white mt-9">
      <HomeClient />
      {/* HERO */}
   <SideNav />
      <section className="w-full mb-15" id="giris-1" >
        <Giris />
      </section>

       <section className="w-full mb-15" id="giris-2">
        <AmericaVisa />
      </section>
           <section className="w-full mb-15" id="giris-3">
        <İngiltereVisa />
      </section>
                 <section className="w-full mb-15" id="giris-4">
        <SchengenVisa />
      </section>
      {/* CONTENT SECTIONS */}
      <section className="w-full mb-15" id="giris-5">
        <Aya /> 
      </section>

      <section className="w-full mb-15" id="giris-6">
        <CardEgitim />
      </section>

      <section className="w-full mb-15" id="giris-7">
        <Portugal />
      </section>

      <section className="w-full mb-15" id="giris-8 ">
        <CardHizmet />
      </section>

      <section className="w-full mb-15" id="giris-9">
        <CardReferans />
      </section>

      <section className="w-full mb-15" id="giris-10">
        <CardBizKimiz />
      </section>

      <section className="w-full mb-15" id="giris-11">
        <WhyAya />
      </section>

      <section className="w-full mb-15" id="giris-12">
        <Aya2 />
      </section>

      <section className="w-full mb-15" id="giris-13">
        <GoogleYorum />
      </section>

    </main>
  );
}

