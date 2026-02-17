import React from "react";
import Giris from "./components/home/Giris";
import CardHizmet from "./components/hizmetlerimiz/CardHizmet";
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
  title:
    "Vize Danışmanlığı 2026 | Amerika, Schengen & İngiltere – Aya Journey",

  description:
    "Amerika, Schengen, İngiltere, Kanada ve Portekiz vize başvurularında uzman danışmanlık. DS-160 form doldurma, mülakat hazırlığı ve ret risk analizi ile profesyonel destek Aya Journey’de.",

  keywords: [
    "vize danışmanlığı",
    "amerika vize danışmanlığı",
    "schengen vize danışmanlığı",
    "ingiltere vizesi",
    "kanada vizesi",
    "portekiz d7 vizesi",
    "ds-160 danışmanlık",
    "vize mülakat hazırlığı",
    "ankara vize danışmanlığı",
    "istanbul vize danışmanlığı",
    "vize reddi danışmanlığı"
  ],

  alternates: {
    canonical: "https://ayajourney.com",
  },

  openGraph: {
    title:
      "Vize Danışmanlığı & Göçmenlik Uzmanı 2026 | Aya Journey",
    description:
      "Amerika ve Schengen vizesi başvurularında ret riskini azaltan profesyonel danışmanlık.",
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
    title:
      "Vize Danışmanlığı 2026 | Amerika & Schengen Uzmanı",
    description:
      "DS-160, Schengen başvurusu ve mülakat hazırlığında profesyonel destek.",
    images: ["https://ayajourney.com/images/logo.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  category: "travel",
};

export default function Home() {
  const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://ayajourney.com/#webpage",
      url: "https://ayajourney.com/",
      name: "Vize Danışmanlığı | Amerika, Schengen & İngiltere",
      datePublished: "2024-01-10",
      dateModified: "2026-03-17",
      inLanguage: "tr-TR",
    },
    {
      "@type": "Organization",
      "@id": "https://ayajourney.com/#organization",
      name: "Aya Journey",
      url: "https://ayajourney.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://ayajourney.com/images/logo.webp",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+90 530 219 90 56",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: "Turkish",
      },
    },
    {
      "@type": "Service",
      name: "Vize Danışmanlığı",
      provider: {
        "@id": "https://ayajourney.com/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "Turkey",
      },
      serviceType: [
        "Amerika Vize Danışmanlığı",
        "Schengen Vize Danışmanlığı",
        "İngiltere Vize Danışmanlığı",
        "Kanada Vize Danışmanlığı",
      ],
    },
  ],
};
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(structuredData),
  }}
/>
    
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
    </>

  );
}

