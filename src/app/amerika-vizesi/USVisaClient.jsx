"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaRegUserCircle,
  FaCheckCircle,
  FaPassport,
  FaClock,
  FaPlaneDeparture,
} from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const highlights = [
  {
    label: "Vize süresi",
    value: "Genellikle 10 yıl",
    icon: <FaPassport />,
    desc: "İstisnai durumlar haricinde turist vizeleri çoğunlukla 10 yıllık verilir.",
  },
  {
    label: "Kalış hakkı",
    value: "Yıllık 180 güne kadar",
    icon: <FaClock />,
    desc: "10 yıllık vize ile her yıl 180 güne kadar ABD’de kalış hakkı olabilir.",
  },
  {
    label: "Değerlendirme",
    value: "Mülakat esaslı",
    icon: <FaRegUserCircle />,
    desc: "Evrak değil, vize memuru ile birebir görüşme belirleyicidir.",
  },
  {
    label: "Sonuç",
    value: "Görüşme sonunda",
    icon: <FaCheckCircle />,
    desc: "Onay/ret bilgisi görüşmenin hemen sonunda sözlü olarak bildirilir.",
  },
];

const infoCards = [
  {
    icon: <FaRegUserCircle />,
    title: "ABD vize sistemi nasıl işler?",
    desc: "ABD turist vizesi sürecinde en kritik aşama kısa süren birebir mülakattır. Dosyanızın dili ve stratejisi bu görüşmeye hazırlanmak için kurulmalıdır.",
  },
  {
    icon: <FaPassport />,
    title: "İstanbul veya Ankara’dan başvuru",
    desc: "İkamet ettiğiniz şehir neresi olursa olsun, randevunuzu İstanbul veya Ankara’daki ABD temsilciliklerinden alabilirsiniz.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Şeffaflık: Vize garantisi yok",
    desc: "AYA Journey vize garantisi sunmaz. Vize kararı tamamen konsolosluk memuruna aittir. Garanti vaat eden kişi/kurumlardan uzak durmanızı öneririz.",
  },
];

const documents = [
  { icon: <GoDotFill />, title: "Geçerli pasaport" },
  { icon: <GoDotFill />, title: "DS-160 başvuru formu" },
  { icon: <GoDotFill />, title: "Banka hesap dökümleri ve finansal kanıtlar" },
  { icon: <GoDotFill />, title: "Çalışma / gelir belgeleri (iş/okul durumu)" },
  { icon: <GoDotFill />, title: "Varsa eski vizeler ve seyahat geçmişi" },
];

const processSteps = [
  {
    step: 1,
    title: "Sizi Tanıyalım & Randevunuzu Alalım",
    description:
      "İngilizce seviyeniz, eski vize başvurularınız, yurt dışı geçmişiniz ve iş hayatınız gibi kritik bilgileri analiz ediyoruz. Ardından vize randevunuzu alıyor, kullanıcı bilgilerini sizinle paylaşıyor ve randevu tarihini öne çekmek için sistemi beraber takip ediyoruz.",
  },
  {
    step: 2,
    title: "Görüşmenize 1 Ay Kalana Kadar",
    description:
      "Bu süreçte kopmuyoruz. Sürekli temas halinde kalarak size özel yurt dışı seyahat önerilerinde bulunuyoruz. Vize görüşmesi için stratejimizi belirliyor, söylemlerimizi ve fikir yapımızı birlikte oluşturuyoruz.",
  },
  {
    step: 3,
    title: "Görüşmenize 1–2 Hafta Kala",
    description:
      "Sizden aldığımız bilgiler ışığında resmi başvuru formunuzu (DS-160) dolduruyoruz. Taslak formu birlikte kontrol edip varsa hataları düzeltiyor, formu onaylayarak başvuru sürecini resmiyete döküyoruz.",
  },
  {
    step: 4,
    title: "Görüşmenize 1–3 Gün Kala (Final Hazırlığı)",
    description:
      "Mülakat günü binaya girişten çıkışa kadar sizi nelerin beklediğini detaylandırıyoruz. Güçlü yanlarımızı nasıl öne çıkaracağımızı konuşuyor, simülasyonlar yapıyoruz. Desteğimiz vizeyi alana kadar değil; vize sonrası Amerika’ya gidişinize kadar devam eder.",
  },
  {
    step: 5,
    title: "Vize Sonrası Destek",
    description:
      "Vize onayı sonrası yolculuk planı, giriş hazırlığı ve genel süreçte destek olmaya devam ediyoruz.",
  },
];

export default function USVisaClient() {
  const refs = useRef([]);

  const register = (el) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const anim = entry.target.dataset.anim;
            entry.target.classList.add(anim + "-show");
          }
        }),
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 min-h-screen">
      {/* HERO */}
      <section
        ref={register}
        data-anim="ukvisa-fade-down"
        className="ukvisa-fade-down-init relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(220,38,38,0.10),transparent_30%)]" />

        <div className="relative max-w-6xl mx-auto px-6 py-18 md:py-20 flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow border border-slate-200/70">
              <FaPassport className="text-blue-600" />
              <span className="text-sm text-slate-700">ABD Vize Rehberi</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
         <span className="bg-gradient-to-r from-red-500/80 via-slate-400 to-blue-500/100 bg-clip-text text-transparent">
  Amerika Vizesi
</span>
              ,
              <br />
              <span className="text-blue-600">Evraktan Değil Görüşmeden Kazanılır</span>
            </h1>

            <p className="text-slate-700 text-lg md:text-xl max-w-2xl">
              Amerika Birleşik Devletleri’ne seyahat etmek heyecan verici bir adım.
              AYA Journey olarak, vize başvuru sürecinizi profesyonel bir yol haritasıyla yönetiyor,
              mülakat aşamasına sizi en iyi şekilde hazırlıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/iletisim">
                <button className="bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-500">
                  Ücretsiz Ön Görüşme
                </button>
              </Link>

              <Link href="/randevu">
                <button className="bg-white text-blue-600 px-5 py-3 rounded-xl border border-blue-100 font-semibold shadow-sm hover:bg-blue-50">
                  Randevu Al
                </button>
              </Link>
            </div>

            {/* HIGHLIGHTS */}
        <div
  ref={register}
  data-anim="ukvisa-stagger"
  className="ukvisa-stagger grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto"
>
  {highlights.map((item, idx) => (
    <div
      key={idx}
      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 flex flex-col gap-2 shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-center gap-3">
        <div className="text-green-600 text-xl shrink-0">{item.icon}</div>
        <p className="text-xs uppercase text-slate-500 tracking-wide">
          {item.label}
        </p>
      </div>

      <p className="font-semibold text-lg text-slate-900">{item.value}</p>
      <p className="text-[11px] text-slate-600 leading-relaxed">{item.desc}</p>
    </div>
  ))}
</div>

          </div>

          {/* RIGHT */}
          <div
            ref={register}
            data-anim="ukvisa-scale"
            className="ukvisa-scale-init flex-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/15 via-slate-200/10 to-red-500/10 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <Image
                  src="/images/visaamericaexam.webp"
                  alt="Amerika vizesi mülakat hazırlığı – AYA Journey"
                  width={620}
                  height={480}
                  priority
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="absolute -bottom-6 -left-4 bg-white border border-slate-200 backdrop-blur-lg rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg">
                <FaPlaneDeparture className="text-blue-600 text-2xl" />
                <div>
                  <p className="text-xs text-slate-600">Final Hazırlığı</p>
                  <p className="font-semibold text-slate-900">Mülakata hazır mısınız?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-slate-500 uppercase">Temel Bilgiler</p>
            <h2 className="text-3xl font-bold text-slate-900">
              ABD (Turist) Vizesi Hakkında Bilmeniz Gerekenler
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {infoCards.map((item, i) => (
            <div
              key={i}
              ref={register}
              data-anim="ukvisa-slide"
              className="ukvisa-slide-init group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-400/60 transition shadow-md"
            >
              <div className="text-amber-500 text-3xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-700 text-sm">{item.desc}</p>
              <div className="mt-4 h-1 w-12 bg-emerald-300 rounded-full group-hover:w-32 transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* IMPORTANT NOTE */}
        <div
          ref={register}
          data-anim="ukvisa-fade-up"
          className="ukvisa-fade-up-init mt-10 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 text-sm text-slate-800"
        >
          <strong>Önemli Not:</strong> AYA Journey, vize alma garantisi sunmaz. Vize verme yetkisi tamamen
          konsolosluk mülakatını yapan memura aittir. Vize garantisi vaat eden kişi veya kurumlardan
          uzak durmanızı önemle tavsiye ederiz.
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-slate-500 uppercase">Check-list</p>
            <h2 className="text-3xl font-bold text-slate-900">Gerekli belgeleri tamamlayın</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {documents.map((doc, i) => (
            <div
              key={i}
              ref={register}
              data-anim="ukvisa-fade-up"
              className="ukvisa-fade-up-init bg-white border border-slate-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-blue-400/60 transition"
            >
              <div className="text-red-600 text-2xl">{doc.icon}</div>
              <p className="text-slate-800 text-sm">{doc.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-sm text-slate-500 uppercase">Yol Haritası</p>
            <h2 className="text-3xl font-bold text-slate-900">AYA Journey ile adım adım başarıya</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              ref={register}
              data-anim="ukvisa-slide"
              className="ukvisa-slide-init relative bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-blue-400/60 transition"
            >
              <div className="absolute -top-5 -left-2 bg-rose-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                {step.step}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY + CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
<div ref={register} data-anim="ukvisa-fade-up" className="ukvisa-fade-up-init relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-xl">
  {/* 🇺🇸 Background (SSR-safe) */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(circle at 20% 25%, rgba(37, 99, 235, 0.14), transparent 45%), radial-gradient(circle at 80% 30%, rgba(220, 38, 38, 0.12), transparent 45%), linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)",
    }}
  />
  {/* Optional: very soft stripes */}
  <div
    className="absolute inset-0 opacity-25"
    style={{
      background:
        "repeating-linear-gradient(135deg, rgba(220,38,38,0.10) 0 10px, rgba(255,255,255,0.0) 10px 22px)",
      mixBlendMode: "multiply",
    }}
  />

  <div className="relative p-6 md:p-8 space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Neden AYA Journey?</h2>
    <p className="text-slate-700">
      Biz sadece bir form doldurma hizmeti değil, bir yol arkadaşlığı sunuyoruz. Stratejik yaklaşımımız ve şeffaf iletişimimizle, Amerika rüyanıza bir adım daha yaklaşmanız için yanınızdayız.
    </p>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { t: "Stratejik yaklaşım", d: "Mülakat odaklı plan ve söylem kurgusu." },
        { t: "Şeffaf iletişim", d: "Vize kararı memura aittir; garanti değil, hazırlık." },
        { t: "Uçtan uca destek", d: "Vize sonrası Amerika’ya gidiş sürecine kadar." },
      ].map((x, i) => (
        <div key={i} className="p-6 rounded-2xl bg-white/85 backdrop-blur border border-slate-200 shadow-sm hover:shadow-md transition">
          <h4 className="font-semibold text-slate-900">{x.t}</h4>
          <p className="text-sm text-slate-700 mt-1 leading-relaxed">{x.d}</p>
        </div>
      ))}
    </div>

    <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
      <p className="text-slate-900 font-semibold">Amerika vizesi için ilk adımı atalım.</p>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
         <Link href="/randevu" className="w-full sm:w-auto">
           <button className="w-full sm:w-auto bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:-translate-y-0.5 transition">
             Randevu Al
           </button>
         </Link>
       
         <a
           href="tel:+903128701584"
           className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-slate-900 text-white font-semibold hover:-translate-y-0.5 transition"
         >
           Hemen Ara
         </a>
       
         <a
           href="https://wa.me/905302199056"
           target="_blank"
           rel="noreferrer"
           className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold hover:-translate-y-0.5 transition"
         >
           WhatsApp’tan Yaz
         </a>
      </div>
    </div>
  </div>
</div>



        {/* FAQ SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Amerika vizesi kaç yıllık verilir?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "İstisnai durumlar haricinde ABD turist vizeleri genellikle 10 yıllık olarak verilir."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ABD vizesi evrakla mı verilir?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Hayır. ABD vizesi mülakat esaslıdır. Evraklardan çok vize memuru ile yapılan birebir görüşme belirleyicidir."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Amerika vize sonucu ne zaman belli olur?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Vize sonucu mülakatın hemen sonunda başvuru sahibine sözlü olarak bildirilir."
                  }
                },
                {
                  "@type": "Question",
                  "name": "AYA Journey vize garantisi veriyor mu?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Hayır. Vize kararı tamamen konsolosluk memuruna aittir. AYA Journey profesyonel danışmanlık sunar."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Amerika vizesine nereden başvurulur?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "İkamet ettiğiniz şehir fark etmeksizin başvurunuzu İstanbul veya Ankara’daki ABD temsilciliklerinden yapabilirsiniz."
                  }
                }
              ]
            })
          }}
        />
      </section>
    </main>
  );





}
