"use client";
import Image from "next/image";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef } from "react";

const trends = [
  {
    title: "1. “Büyük Dörtlü” hâlâ güçlü",
    description:
      "ABD, İngiltere, Kanada ve Avustralya liderliği koruyor; vize süreçleri sıkılaşıyor, finansal planlama kritik.",
  },
  {
    title: "2. Alternatif rotalar yükselişte",
    description:
      "Almanya, İspanya, Güney Kore ve BAE öğrenci dostu politikalarıyla öne çıkıyor.",
  },
  {
    title: "3. Konaklama en kritik başlık",
    description:
      "Yurt ve kampüs içi konaklama garantisi veren okullar büyük avantaj sağlıyor.",
  },
  {
    title: "4. İşverenler beceri arıyor",
    description:
      "Veri bilimi, siber güvenlik ve sağlık yükselişte; staj ve uygulamalı programlar öne çıkıyor.",
  },
  {
    title: "5. “Hoş geldin kültürü” belirleyici",
    description:
      "Üniversiteler akademik danışmanlığın yanına 7/24 destek ve mental sağlık hizmetleri ekliyor.",
  },
];

export default function Page() {
  const animRefs = useRef([]);
  useEffect(() => {
  animRefs.current = animRefs.current.filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("edu-show");
        }
      });
    },
    { threshold: 0.15 }
  );

  animRefs.current.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);
const register = (el) => {
  if (el && !animRefs.current.includes(el)) {
    animRefs.current.push(el);
  }
};

  return (
    <>
      <Head>
        <title>
          2026 Yurtdışı Eğitim: Trendler, Vize Politikaları ve Yeni Fırsatlar
        </title>
        <meta
          name="description"
          content="2026 yılında yurtdışında eğitim planlayanlar için trendler, vize politikaları ve yeni rotalar. AYA Journey ile doğru yönlendirme."
        />
      </Head>

      <main className="bg-white text-slate-900 min-h-screen">
        {/* Hero */}
   <section
  ref={register}
  className="relative w-full overflow-hidden edu-scale-in"
>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.12),transparent_32%)]" />
          <div className="absolute inset-0">
            <Image
              src="/images/lib.jpg"
              alt="Yurtdışı Eğitim 2026"
              fill
              priority
              className="object-cover opacity-45"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/75 to-white/35" />
          <div className="max-w-7xl mx-auto px-5 pt-28 pb-16 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 ring-1 ring-slate-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-800">
                2026 Güncel Rehber
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 mt-6 items-center">
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight text-slate-900">
                  2026’da Yurtdışı Eğitim:
                  <span className="text-blue-600"> Sizi Neler Bekliyor?</span>
                </h1>
                <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                  Trendler değişiyor, vizeler sıkılaşıyor, yeni fırsatlar doğuyor.
                  Aya Journey, doğru ülke ve okul seçimi, evrak ve vize stratejisiyle
                  yolunuzu açar.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+903128701584"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-slate-900 text-white font-semibold shadow-lg shadow-blue-500/20 hover:translate-y-[1px] transition"
                  >
                    0312 870 15 84’ü Ara
                  </a>
                  <a
                    href="https://wa.me/903128701584"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold ring-1 ring-emerald-200/60 hover:bg-emerald-600 transition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp’tan Yaz
                  </a>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="p-4 rounded-2xl bg-white/85 ring-1 ring-slate-200 backdrop-blur">
                    <p className="text-sm text-emerald-700 font-semibold">
                      Strateji
                    </p>
                    <p className="text-sm text-slate-700 mt-1">
                      Amaç belirleme, ülke/okul listesi, vize yolu.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/85 ring-1 ring-slate-200 backdrop-blur">
                    <p className="text-sm text-indigo-700 font-semibold">
                      Uygulama
                    </p>
                    <p className="text-sm text-slate-700 mt-1">
                      Evrak kontrolü, randevu, mülakat ve takip.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/18 via-emerald-400/16 to-indigo-500/16 blur-3xl" />
               <div
  ref={register}
  className="relative p-6 rounded-3xl bg-white/90 ring-1 ring-slate-200 backdrop-blur space-y-4 shadow-2xl shadow-blue-500/10 edu-fade-up"
>

                  <div className="flex items-center gap-3">
                    {/* <div className="h-10 w-10 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
                      🎓
                    </div> */}
                    <div>
                      <p className="text-sm text-slate-700">Hızlı Yol Haritası</p>
                      <p className="text-base font-semibold text-slate-900">
                        3 adımda eğitim ve vize planı
                      </p>
                    </div>
                  </div>
                  {[
                    "1) Ülke & program seçimi",
                    "2) Evrak + finans planı",
                    "3) Vize randevu & mülakat",
                  ].map((step) => (
                    <div
                      key={step}
                      className="flex items-start gap-3 text-sm text-slate-800"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <p>{step}</p>
                    </div>
                  ))}
                  <div className="flex items-center justify-between">
                    <Link href="/randevu">
                        <div className="text-xs text-slate-700 cursor-pointer">
                      Ücretsiz ön görüşme
                    </div>
                    </Link>
                
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900 text-xs font-semibold text-white">
                      Hazırız
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
     <section
  ref={register}
  className="max-w-5xl mx-auto px-5 py-14 space-y-6 edu-fade-up"
>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            2026’da öğrencileri neler bekliyor?
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Vize politikaları değişiyor, yaşam maliyetleri artıyor, üniversiteler yeni
            stratejiler belirliyor. Aya Journey yanınızda:
            <strong className="text-emerald-700 ml-1">
              Önermediğimiz ülke veya kampüsü listemize almıyoruz; çünkü hepsini
              deneyimledik.
            </strong>
          </p>
        </section>

        {/* Countries */}
        <section className="max-w-5xl mx-auto px-5 pb-12 space-y-14">
         <div
  ref={register}
  className="grid md:grid-cols-2 gap-10 items-center edu-fade-up"
>

            <div className="relative">
              <div className="absolute -inset-3 bg-blue-500/16 blur-2xl" />
              <Image
                src="/images/schoolamerica.jpg"
                alt="Amerika’da Eğitim"
                width={640}
                height={420}
                className="relative rounded-2xl object-cover shadow-2xl shadow-blue-200/50 ring-1 ring-slate-200"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                Amerika – Akademik özgürlük ve sınırsız ağ
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Dünyanın en iyi üniversiteleri, esnek sistem ve güçlü kampüs kültürü.
                Silikon Vadisi’nden Wall Street’e uzanan kariyer ağı.
              </p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>
                  <strong>En iyi yanı:</strong> İngilizce ana dil, OPT ile 1–3 yıl
                  çalışma hakkı, uzun dönem vize fırsatları.
                </li>
                <li>
                  <strong>Zorluk:</strong> Başvuru süreçleri ve sıkılaşan mülakatlar.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <div className="relative">
           
<div className="relative w-full h-[300px] overflow-hidden">
    
    {/* Blur efekti için olan div, şimdi ana kapsayıcının içinde */}
<div className="absolute -inset-3 bg-indigo-500/16 blur-2xl h-[300px]" />
    
    <Image
        src="/images/oxford.jpg"
        alt="İngiltere’de Eğitim"
        // width ve height prop'ları Next.js 13+ 'fill' prop'u ile ÇAKIŞTIĞI için KALDIRILDI.
        fill={true} // fill prop'u eklendi
        className="rounded-2xl object-cover shadow-2xl shadow-indigo-200/50 ring-1 ring-slate-200"
    />
</div>
</div>
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
            İngiltere – Yoğun program, hızlı dönüş
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Oxford, Cambridge, LSE, Imperial… 1 yıllık yüksek lisans ve 2 yıl
                çalışma hakkı ile hızlandırılmış kariyer rotası.
              </p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>
                  <strong>En iyi yanı:</strong> 1 yıl master + 2 yıl çalışma hakkı.
                </li>
                <li>
                  <strong>Zorluk:</strong> Yaşam maliyetleri ve döviz baskısı.
                </li>
              </ul>
            </div>
          </div>

        <div
  ref={register}
  className="grid md:grid-cols-2 gap-10 items-center edu-fade-up"
>

            <div className="relative">
              <div className="absolute -inset-3 bg-emerald-500/16 blur-2xl" />
              <Image
                src="/images/universty.jpg"
                alt="Avrupa’da Eğitim"
                width={640}
                height={420}
                className="relative rounded-2xl object-cover shadow-2xl shadow-emerald-200/50 ring-1 ring-slate-200"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                Schengen – Kültür, sanat, ekonomik seçenekler
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Almanya mühendislik, Fransa sanat, İtalya mimari… Düşük harçlar ve
                kültürel çeşitlilikle güçlü bir seçenek.
              </p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>
                  <strong>En iyi yanı:</strong> Düşük harç ve Schengen özgürlüğü.
                </li>
                <li>
                  <strong>Zorluk:</strong> Bürokrasi, apostil, çeviri ve yerel dil
                  beklentisi.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trends */}
       <section
  ref={register}
  className="bg-white border-t border-slate-200 py-14 px-5 edu-fade-up"
>
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-emerald-700">
                  2026’nın 5 büyük trendi
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Eğitim ve vize stratejinizi güncelleyin
                </h2>
              </div>
              {/* <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/10 text-xs text-slate-100">
                Canlı güncellenen liste
              </span> */}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {trends.map((trend,index) => (
               <article
  ref={register}
    key={`trend-${index}`}
  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/95 backdrop-blur p-5 shadow-lg shadow-slate-200 transition hover:-translate-y-1 hover:shadow-emerald-200/60 edu-fade-up"
>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/60 to-emerald-50" />
                  <div className="relative space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {trend.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {trend.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
    <section
  ref={register}
  className="max-w-6xl mx-auto px-6 pb-20 edu-fade-up"
>

        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-2xl shadow-slate-200">
          <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.14),transparent_32%)]" />
          <div className="relative p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-700">Başvuru Akışı</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
               Doğru ülkeyi seçmek kritik.
              </h2>
              <p className="text-slate-700 max-w-3xl">
                Her ülke farklı politika uygular. Doğru evrak, doğru planlama ve doğru kategori
                süreci hızlandırır. Randevu, mülakat ve ek belge yönetimini bizimle planlayın.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Başvuru Kanalları",
                  desc: "Elçilik, aracı yetkili firma veya online platformlar.",
                },
                {
                  title: "Belgeler & Randevu",
                  desc: "Formlar, davetiyeler, gelir/konaklama kanıtları ve randevu planı.",
                },
                {
                  title: "Aya Journey Desteği",
                  desc: "Evrak kontrolü, başvuru, mülakat ve takipte uçtan uca destek.",
                },
              ].map((box) => (
                <div
                  key={box.title}
                  className="p-5 rounded-2xl bg-white/85 border border-slate-200"
                >
                  <h4 className="font-semibold text-slate-900">{box.title}</h4>
                  <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                    {box.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <p className="text-slate-900 font-semibold">
                Aya Journey, kısa veya uzun dönem tüm vize süreçlerinizde yanınızda.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                        <Link href="/randevu">
              <button className="bg-white text-blue-600 cursor-pointer px-6 py-3 rounded-xl font-semibold shadow-lg hover:-translate-y-0.5 transition">
                Randevu Al
              </button>
            </Link>
                <a
                  href="tel:+903128701584"
                  className="inline-flex px-4 py-2.5 rounded-xl bg-slate-900 text-white font-semibold shadow-lg shadow-blue-500/20 hover:translate-y-[1px] transition"
                >
                  Hemen Ara
                </a>
                <a
                  href="https://wa.me/903128701584"
                  className="inline-flex px-4 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold ring-1 ring-emerald-200/60 hover:bg-emerald-600 transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp’tan Yaz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* CTA */}
        {/* <section className="max-w-5xl mx-auto px-5 py-16">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-2xl shadow-slate-200">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_25%)]" />
            <div className="relative p-10 text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Doğru ülkeyi seçmek kritik.
              </h2>
              <p className="text-lg text-slate-700">
                Aya Journey ile 15 dakikalık ücretsiz eğitim planlama görüşmesi alın.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+903128701584"
                  className="inline-flex px-6 py-3 bg-slate-900 text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:translate-y-[1px] transition"
                >
                  Hemen Ara — 0312 870 15 84
                </a>
                <a
                  href="https://wa.me/903128701584"
                  className="inline-flex px-6 py-3 bg-emerald-500 text-white rounded-xl font-bold ring-1 ring-emerald-200/60 hover:bg-emerald-600 transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp’tan Yaz
                </a>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}

