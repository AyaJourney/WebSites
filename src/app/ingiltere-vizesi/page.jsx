"use client";
import React, { useRef, useEffect } from "react";
import {
  FaRegUserCircle,
  FaFileInvoiceDollar,
  FaCheckCircle,
  FaPassport,
  FaPlaneDeparture,
  FaClock,
} from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
// export const metadata = {
//   title: "İngiltere Vizesi - Detaylı Rehber",
//   description: "İngiltere vizesi için adım adım rehber, gerekli belgeler ve başvuru süreci.",
// };

// Belgeler
const documents = [
  { icon: <GoDotFill />, title: "Geçerli Pasaport" },
  { icon: <GoDotFill />, title: "İş yeri belgeleri" },
  { icon: <GoDotFill />, title: "İkametgah belgesi" },
  { icon: <GoDotFill />, title: "Son 3 aylık banka hesap dökümü" },
  { icon: <GoDotFill />, title: "İngilizce vize dilekçesi" },
  { icon: <GoDotFill />, title: "Seyahat sağlık sigortası (Zorunlu değil)" },
  { icon: <GoDotFill />, title: "Otel ve uçak rezervasyonları (Zorunlu değil)" },
];

// Başvuru adımları
const processSteps = [
  {
    step: 1,
    title: "Başvuru Formunun Doldurulması",
    description:
      "Vize başvurusu için gerekli olan online başvuru formu eksiksiz ve doğru bilgilerle doldurulur. Yanlış veya eksik bilgi başvurunun olumsuz sonuçlanmasına neden olabilir.",
  },
  {
    step: 2,
    title: "Vize Harcının Ödenmesi",
    description:
      "Başvuru formu tamamlandıktan sonra vize harcı online sistem üzerinden ödenir. Ödeme onayı, randevu oluşturma aşamasında zorunludur.",
  },
  {
    step: 3,
    title: "Randevu Tarihinin Belirlenmesi",
    description:
      "Vize harcı ödendikten sonra başvuru sahibine uygun tarih ve saat için randevu planlaması yapılır. Yoğunluk durumuna göre en yakın uygun tarih tercih edilir.",
  },
  {
    step: 4,
    title: "Evrakların Hazırlanması ve Online Yüklenmesi",
    description:
      "Randevu tarihine kadar gerekli tüm evraklar eksiksiz şekilde hazırlanır ve ilgili online başvuru sistemi üzerinden yüklenir. Evrakların güncel ve talep edilen formatta olması büyük önem taşır.",
  },
  {
    step: 5,
    title: "Randevuya Katılım",
    description:
      "Belirlenen randevu tarihinde başvuru merkezine gidilerek biyometri işlemleri tamamlanır ve evraklar teslim edilir. Randevuya katılım zorunludur.",
  },
];


// Bilgi Kartları
const infoCards = [
  {
    icon: <FaRegUserCircle />,
    title: "Kimler Başvurabilir?",
    desc: "Çalışanlar, işverenler, öğrenciler ve pasif gelir sahipleri başvurabilir."
  },
  {
    icon: <MdOutlineSchool />,
    title: "Vize Şartları",
    desc: "Gelirinizi ve finansal durumunuzu resmi evraklarla kanıtlamanız gerekir."
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Ekonomik Gereklilikler",
    desc: "Gidiş-dönüş uçak bileti, konaklama ve banka dökümü sunulmalıdır."
  },
];

const UKVisaPage = () => {
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
      { threshold: 0.25 }
    );

    refs.current.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
       <main className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 font-sans min-h-screen">

      {/* HERO ----------------------------------------------------- */}
      <section
        ref={register}
        data-anim="ukvisa-fade-down"
        className="ukvisa-fade-down-init relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.12),transparent_25%)]" />

        <div className="relative max-w-6xl mx-auto px-6 py-18 md:py-20 flex flex-col lg:flex-row items-center gap-12">

          {/* Sol içerik */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow border border-slate-200/70">
              <FaPassport className="text-blue-500" />
              <span className="text-sm text-slate-700">İngiltere Vize Rehberi</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              İngiltere vizesi için modern, hızlı ve güvenli rehber
            </h1>

            <p className="text-slate-700 text-lg md:text-xl max-w-2xl">
              Belgeleri toparlayın, başvurunuzu planlayın ve süreci adım adım takip edin.
              Tüm kritik noktalar ve ipuçları tek ekranda.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/randevu">
                <button className="bg-blue-500 text-white px-5 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-400">
                  Hemen Başvur
                </button>
              </Link>

              <Link href="/iletisim">
                <button className="bg-white text-blue-600 px-5 py-3 rounded-xl border border-blue-100 font-semibold shadow-sm hover:bg-blue-50">
                  Uzmanla Görüş
                </button>
              </Link>
            </div>

            {/* İstatistikler */}
          <div
  ref={register}
  data-anim="ukvisa-stagger"
  className="ukvisa-stagger grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg"
>
  {[
    { label: "Ortalama randevu bulma süresi", value: "15 iş günü", icon: <FaClock /> },
    { label: "6 aylık harç bedeli", value: "173 $",desc:"İstenen süreye göre harç miktarı değişmektedir", icon: <FaFileInvoiceDollar /> },
    { label: "Başarı ihtimali", value: "Yüksek", icon: <FaCheckCircle /> },
    { label: "Açıklanma / değerlendirme süresi", value: "12 gün", icon: <FaClock /> },
    { label: "Hizmet bedeli", value: "400 $", icon: <FaFileInvoiceDollar /> },



  ].map((item, idx) => (
    <div
      key={idx}
      className="bg-white border border-slate-200 rounded-xl px-1 py-3 flex flex-col items-center justify-center  shadow-sm"
    >
      <div className=" px-2 py-3 flex items-center gap-4">
<div className="text-lime-500 text-xl">{item.icon}</div>
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase text-slate-500">{item.label}</p>
<p
  className={`font-semibold text-md ${
    item.value === "Yüksek"
      ? "text-orange-600"
      : "text-slate-900"
  }`}
>
  {item.value}
</p>

       
 
      </div>
      </div>
      
      <p className="text-[10px]">{item.desc || ""}</p>
    </div>
    
  ))}
</div>

          </div>

          {/* Sağ görsel */}
          <div
            ref={register}
            data-anim="ukvisa-scale"
            className="ukvisa-scale-init flex-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-fuchsia-500/10 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <Image
                  src="/images/ukdetail.jpg"
                  alt="İngiltere vizesi görseli"
                  width={620}
                  height={480}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="absolute -bottom-6 -left-4 bg-white border border-slate-200 backdrop-blur-lg rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg">
                <FaPlaneDeparture className="text-blue-500 text-2xl" />
                <div>
                  <p className="text-xs text-slate-600">Hazırlık Tamamlandı</p>
                  <p className="font-semibold text-slate-900">Bavulları toplamaya başlayabilirsiniz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BİLGİ KARTLARI -------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-slate-500 uppercase">İlk adımlar</p>
            <h2 className="text-3xl font-bold text-slate-900">Kimler ve hangi şartlarda?</h2>
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
              <div className="mt-4 h-1 w-12 bg-green-300 rounded-full group-hover:w-32 transition-all duration-750"></div>
            </div>
          ))}
        </div>
      </section>

      {/* BELGELER -------------------------------------------------- */}
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
              <div className="text-rose-500 text-2xl">{doc.icon}</div>
              <p className="text-slate-800 text-sm">{doc.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SÜREÇ -------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-sm text-slate-500 uppercase">Süreç</p>
            <h2 className="text-3xl font-bold text-slate-900">Başvuruyu 5 adımda tamamlayın</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              ref={register}
              data-anim="ukvisa-slide"
              className="ukvisa-slide-init relative bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-blue-400/60 transition "
            >
              <div className="absolute -top-5 -left-2 bg-orange-500 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold ">
                {step.step}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-700 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA -------------------------------------------------- */}
      <section
        ref={register}
        data-anim="ukvisa-fade-up"
        className="ukvisa-fade-up-init max-w-6xl mx-auto px-6 pb-20"
      >
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-xl">
          
          <div className="relative p-6 md:p-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Sizinleyiz</h2>

            <div className="grid md:grid-cols-3 gap-4">
              {[ "Başvuru Kanalları", "Belgeler & Randevu", "Aya Journey Desteği" ].map((t, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/85 border border-slate-200">
                  <h4 className="font-semibold text-slate-900">{t}</h4>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <p className="text-slate-900 font-semibold">Aya Journey her aşamada yanınızda.</p>

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
    href="https://wa.me/903128701584"
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
      </section>
   
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "İngiltere vizesi için gerekli belgeler nelerdir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pasaport, banka dökümü, gelir belgeleri, konaklama ve uçuş bilgileri, biometrik fotoğraf ve vize başvuru formu gereklidir."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi kaç günde çıkar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standart başvurularda ortalama 15 iş günü sürer. Yoğunluk dönemlerinde süre uzayabilir."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vize ücreti ne kadar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2025 yılı İngiltere kısa süreli turistik vize ücreti ortalama 145 GBP'dir."
          }
        }
      ]
    })
  }}
/>

    </main>
  );
};

export default UKVisaPage;
