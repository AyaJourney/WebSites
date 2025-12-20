"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  FaRegUserCircle,
  FaFileInvoiceDollar,
  FaCheckCircle,
} from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import Link from "next/link";
import { CgDanger } from "react-icons/cg";
// export const metadata = {
//   title: "Portekiz D7 Vizesi - Detaylı Rehber",
//   description:
//     "Portekiz D7 Vizesi için modern, hızlı ve detaylı başvuru rehberi. Gerekli belgeler, süreç ve şartlar.",
// };

const belgeler = [
  { icon: <CgDanger />, title: "2 adet biyometrik fotoğraf" },
  { icon: <CgDanger />, title: "En az 3 ay geçerliliği olan pasaport" },
  { icon: <CgDanger />, title: "İkametgah belgesi" },
  { icon: <CgDanger />, title: "Son 12 aylık banka hesap dökümü" },
  { icon: <CgDanger />, title: "Adli sicil kaydı" },
  { icon: <CgDanger />, title: "Pasif gelire kaynak teşkil eden belgeler" },
  { icon: <CgDanger />, title: "Portekiz’de kiraladığınız evin kontratı" },
  { icon: <CgDanger />, title: "Niyet mektubu" },
  { icon: <CgDanger />, title: "Portekizce/İngilizce tercümeler" },
];

const basvuruAdimlari = [
  {
    step: 1,
    title: "Randevu Talebi",
    description: "Portekiz Ankara Büyükelçiliği’nden randevu alın.",
  },
  {
    step: 2,
    title: "Belgelerin Teslimi",
    description: "Gerekli tüm belgeleri konsolosluğa teslim edin.",
  },
  {
    step: 3,
    title: "Onay & Vize",
    description: "Onay sonrası D7 vizenizi alın. Ortalama süreç 3–8 ay.",
  },
];

const lizbonSemtleri = [
  {
    title: "Sahil ve Tatil Semtleri",
    description:
      "Oeiras, Carcavelos, Estoril, Cascais — sahil boyu tatil ve yaşam alanları.",
  },
  {
    title: "Büyükelçilik Bölgeleri",
    description: "Restelo ve Belém — güvenli, modern ve prestijli semtler.",
  },
  {
    title: "Eski Şehir & Modern Alanlar",
    description:
      "Chiado, Baixa, Rato, Alcântara, Campo de Ourique, Arroios, Alvalade — merkezi yaşam için ideal.",
  },
];

export default function Page() {
  const refs = useRef([]);

  const addRef = (el) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const anim = e.target.dataset.anim;
            if (anim) e.target.classList.add(anim + "-show");
          }
        }),
      { threshold: 0.25 }
    );

    refs.current.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="bg-zinc-50 text-gray-900  font-sans mt-20">

      {/* HERO */}
      <section
        ref={addRef}
        data-anim="portekiz-fade-down"
        className="portekiz-fade-down-init w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-16"
      >
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
            Portekiz D7 Vizesi: Sıcak İklim, Yüksek Yaşam Kalitesi, Güçlü Bir Gelecek
          </h1>
          <p className="text-gray-700  text-lg md:text-xl mb-6 max-w-lg">
            Pasif gelir veya emekli maaşıyla Avrupa’da yaşamak isteyenler için en erişilebilir oturum yolu.
          </p>

          <Link href="/randevu">
            <button className="bg-white text-gray-700 cursor-pointer mt-5 border border-blue-300 px-5 py-3 rounded-3xl transition hover:text-blue-500 hover:bg-gray-100">
              Hemen Başvur
            </button>
          </Link>
        </div>

        <div
          className="flex-1 flex justify-center"
          ref={addRef}
          data-anim="portekiz-scale"
        >
          <Image
            src="/images/portekiz.jpg"
            alt="Portekiz"
            width={500}
            height={400}
            className="rounded-2xl object-cover shadow-xl"
            priority
          />
        </div>
      </section>

      {/* 3 BİLGİ KARTI */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <FaRegUserCircle className="text-blue-500 text-3xl" />,
            title: "Kimler Başvurabilir?",
            desc: "Pasif gelir elde edenler, uzaktan çalışanlar ve emekliler başvurabilir.",
          },
          {
            icon: <MdOutlineSchool className="text-blue-500 text-3xl" />,
            title: "Vize Şartları",
            desc: "Aylık en az 870 € gelir. Aile için ek gereksinimler uygulanır.",
          },
          {
            icon: <FaFileInvoiceDollar className="text-blue-500 text-3xl" />,
            title: "Ekonomik Faydalar",
            desc: "Düşük yaşam maliyeti, sıcak iklim ve güvenli yaşam alanları.",
          },
        ].map((item, i) => (
          <div
            key={i}
            ref={addRef}
            data-anim="portekiz-fade-up"
            className="portekiz-fade-up-init bg-white  rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            {item.icon}
            <h2 className="font-semibold text-xl mt-3 mb-2">{item.title}</h2>
            <p className="text-gray-700  text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* GEREKLİ BELGELER */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2
          ref={addRef}
          data-anim="portekiz-fade-up"
          className="portekiz-fade-up-init text-3xl font-bold mb-8 text-center"
        >
          Gerekli Belgeler
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {belgeler.map((item, i) => (
            <div
              key={i}
              ref={addRef}
              data-anim="portekiz-slide"
              className="portekiz-slide-init flex flex-col items-center bg-white  rounded-xl p-6 shadow hover:shadow-lg transition hover:scale-105 hakkimizda-hover-fill  hakkimizda-scale-init  relative p-8 rounded-2xl bg-[#f9fafb]  transition-all duration-300 hover:shadow-md"
            >
              <div className="text-red-500 text-4xl mb-3">{item.icon}</div>
              <p className="text-center text-gray-700 text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BAŞVURU SÜRECİ */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2
          ref={addRef}
          data-anim="portekiz-fade-up"
          className="portekiz-fade-up-init text-3xl font-bold mb-8 text-center"
        >
          Başvuru Süreci
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {basvuruAdimlari.map((step) => (
            <div
              key={step.step}
              ref={addRef}
              data-anim="portekiz-scale"
              className="portekiz-scale-init flex flex-col items-center bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <span className="text-orange-500 text-3xl font-bold mb-3">{step.step}</span>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-center text-gray-700 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LİZBON SEMTLERİ */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2
          ref={addRef}
          data-anim="portekiz-fade-up"
          className="portekiz-fade-up-init text-3xl font-bold mb-8 text-center"
        >
          Lizbon’da Yaşamak İçin En Popüler Semtler
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {lizbonSemtleri.map((item, i) => (
            <div
              key={i}
              ref={addRef}
              data-anim="portekiz-slide"
              className="portekiz-slide-init flex flex-col items-center bg-white  rounded-xl p-6 shadow hover:shadow-xl transition hover:scale-105"
            >
              <FaCheckCircle className="text-green-500 text-4xl mb-3" />
              <h3 className="font-semibold mb-2 text-center">{item.title}</h3>
              <p className="text-center text-gray-700  text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    <section
        ref={addRef}
        data-anim="ukvisa-fade-up"
        className="ukvisa-fade-up-init max-w-6xl mx-auto px-6 pb-20 rounded-3xl"
      >
 <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-xl">
 
 <div
  className="absolute inset-0 rounded-3xl"
  style={{
    background:
      "radial-gradient(circle at 18% 30%, rgba(22,163,74,0.22), transparent 45%), radial-gradient(circle at 82% 32%, rgba(220,38,38,0.16), transparent 45%), radial-gradient(circle at 50% 80%, rgba(234,179,8,0.14), transparent 50%), linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)",
  }}
/>
{/* SOFT PORTUGAL STRIPES */}
<div
  className="absolute inset-0 opacity-20 rounded-3xl"
  style={{
    background:
      "repeating-linear-gradient(135deg, rgba(22,163,74,0.12) 0 12px, rgba(255,255,255,0) 12px 26px)",
    mixBlendMode: "multiply",
  }}
/>

          
          <div className="relative p-6 md:p-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Başvuru Süreçleri</h2>

            <div className="grid md:grid-cols-3 gap-4">
              {[ "Tecrübe", "Profesyonellik", "Aya Journey" ].map((t, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/85 border border-slate-200">
                  <h4 className="font-semibold text-slate-900">{t}</h4>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <p className="text-slate-900 font-semibold">Aya Journey her aşamada yanınızda.</p>

              <div className="flex flex-col sm:flex-row gap-2">
                <Link href="/randevu">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:-translate-y-0.5 transition">
                    Randevu Al
                  </button>
                </Link>
                <a href="tel:+903128701584" className="px-4 py-2.5 rounded-xl bg-slate-900 text-white font-semibold">
                  Hemen Ara
                </a>
                <a
                  href="https://wa.me/905302199056"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold"
                  target="_blank"
                >
                  WhatsApp’tan Yaz
                </a>
              </div>
            </div>
          </div>
 
 </div>

   
      </section>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "D7 vizesine kimler başvurabilir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pasif geliri olanlar, emekliler ve uzaktan çalışanlar başvurabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Gerekli gelir şartı nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aylık en az 870 € gelir gerekir. Aile üyeleri için ek oranlar uygulanır.",
                },
              },
              {
                "@type": "Question",
                name: "D7 vizesi kaç ayda çıkar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ortalama 3–8 ay sürebilir.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
