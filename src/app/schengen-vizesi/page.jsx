"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCheckCircle,
  FaRegFileAlt,
  FaRegClock,
  FaGlobeEurope,
  FaUserTie,
  FaEuroSign,
} from "react-icons/fa";

// Mevcut veri yapısı korunmuştur.
const basicInfo = {
  heroTitle: "Schengen Vize Başvuru Süreci",
  heroSubtitle:
    "Profilinizi tanıyıp evrak hazırlığından randevuya kadar tüm süreci kolaylaştırıyoruz. Hızlı, güvenilir ve kişiye özel danışmanlık.",
  cta: { href: "/randevu", label: "Ücretsiz Ön Değerlendirme" },
};

const fees = {
  visaFee0: "Ücretsiz",
  visaFee6: "45€",
  visaFee12: "90€",

  appointmentRange: "440–2000 TL",
  consultancy0: "100€ (0-14 Yaş)",
  consultancy14: "200€ (14+)",

};

const genelEvraklar = [
  {
    title: "Schengen Başvuru Formu",
    desc: "Eksiksiz doldurulmuş Schengen vize formu.",
    icon: FaRegFileAlt,
  },
  {
    title: "Pasaport",
    desc: "Seyahat bitiminden itibaren en az 6 ay geçerlilik; eski pasaportlar varsa eklenmeli.",
    icon: FaRegFileAlt,
  },
  {
    title: "2 Adet Fotoğraf",
    desc: "35x45 mm, biyometrik, son 6 ay içinde çekilmiş.",
    icon: FaRegFileAlt,
  },
  {
    title: "Otel ve Uçak Rezervasyonları",
    desc: "Rezervasyonlar seyahat planınızı açıkça göstermeli (biz yardımcı olabiliriz).",
    icon: FaRegFileAlt,
  },
  {
    title: "Seyahat Sağlık Sigortası",
    desc: "Seyahat süresini kapsayan poliçe (ülkeden ülkeye koşullar değişebilir).",
    icon: FaRegFileAlt,
  },
  {
    title: "İngilizce Vize Talep Dilekçesi",
    desc: "Gidiş amacı ve tarihleri belirten dilekçe (biz hazırlayabiliriz).",
    icon: FaRegFileAlt,
  },
  {
    title: "Banka Hesap Hareketleri",
    desc: "Son 3 aya ait hesap hareketleri; ıslak imza & kaşe ve imza sirküleri ekli olmalı.",
    icon: FaRegFileAlt,
  },
  {
    title: "Tarihçeli İkametgâh & Nüfus Kayıt Örneği",
    desc: "E-devletten barkodlu alınabilir.",
    icon: FaRegFileAlt,
  },
  {
    title: "Kimlik Fotokopisi",
    desc: "Nüfus cüzdanı fotokopisi.",
    icon: FaRegFileAlt,
  },
];

const ekBelgelerByProfile = [
  {
    profile: "Çalışanlar / İşveren",
    icon: FaUserTie,
    items: [
      "İşveren dilekçesi (ıslak imzalı & kaşeli, izin tarihleri belirtilmiş)",
      "SGK işe giriş bildirgesi (barkodlu)",
      "Barkodlu 4A hizmet dökümü",
      "Son 3 aylık kaşeli & imzalı maaş bordrosu",
      "Faaliyet belgesi (son 30 gün içinde alınmış)",
      "Ticaret sicil gazetesi fotokopisi, imza sirküleri, güncel vergi levhası",
    ],
  },
  {
    profile: "Emekli",
    icon: FaRegClock,
    items: ["E-devlet üzerinden alınmış Emekli Aylık Belgesi"],
  },
  {
    profile: "Öğrenci",
    icon: FaRegFileAlt,
    items: ["E-devlet üzerinden alınmış Öğrenci Belgesi"],
  },
  {
    profile: "Ticari / Aile Ziyareti",
    icon: FaGlobeEurope,
    items: ["Ülkeden gelen davetiye (varsa)"],
  },
  {
    profile: "Sponsor Gerekenler",
    icon: FaEuroSign,
    items: ["Sponsor mektubu & gelir belgeleri"],
  },
];

const processSteps = [
  {
    title: "Profilinizi Tanıyalım",
    desc: "Mesleğiniz, medeni durumunuz, yaşınız ve önceki seyahat geçmişinizi inceleyip size en uygun Schengen ülkesini ve stratejiyi belirliyoruz.",
  },
  {
    title: "Bilgi Paylaşımı",
    desc: "Pasaport, e-posta ve telefon bilgilerinizi aldıktan sonra randevu arama sürecine başlıyoruz.",
  },
  {
    title: "Randevu Süreci",
    desc: "İkamet iliniz başvuru şehrinizi etkiler. Uygun randevu bulunduğunda tarih/saat onayınız alınır ve randevunuz oluşturulur.",
  },
  {
    title: "Randevu Sonrası",
    desc: "Randevunuz onaylandıktan sonra evrak listeniz, niyet mektubunuz ve diğer belgeler tarafınıza iletilir.",
  },
  {
    title: "Evrak Teslimi & Takip",
    desc: "Evraklar aracı kuruma teslim edilir; parmak izi verilir, harç ödenir ve pasaport teslim edilir.",
  },
];

export default function SchengenPage() {
  const animRefs = useRef([]);

  const register = (el) => {
    if (el && !animRefs.current.includes(el)) {
      animRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const anim = entry.target.dataset.anim;
            if (anim) {
              entry.target.classList.add(anim + "-show");
            }
          }
        }),
      { threshold: 0.25 }
    );

    animRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* HERO */}
      <section
        ref={register}
        data-anim="schengen-fade-down"
        className="schengen-fade-down-init relative w-full bg-white border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Sol */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-5">
              {basicInfo.heroTitle}
            </h1>
            <p className="text-gray-600 mb-8 max-w-2xl text-lg">
              {basicInfo.heroSubtitle}
            </p>

            <Link href={basicInfo.cta.href}>
              <button className="bg-white text-gray-700 cursor-pointer mt-5 border border-blue-300 px-4 py-2 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100">
                {basicInfo.cta.label}
              </button>
            </Link>

            <div className="mt-8 text-base text-gray-600 border-t border-gray-100 pt-4 space-y-3">
              <div className="flex items-center gap-3">
                <FaRegFileAlt className="text-blue-600 text-xl" />
                <span>Randevu ücretleri: {fees.appointmentRange}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaRegClock className="text-blue-600 text-xl" />
                <span>Tahmini süreç: 3–8 ay (ülke ve dosya türüne göre değişkenlik gösterebilir)</span>
              </div>
            </div>
          </div>

          {/* Sağ görsel */}
          <div
            ref={register}
            data-anim="schengen-scale"
            className="schengen-scale-init w-full flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-fuchsia-500/10 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/images/vize.jpg"
                  alt="Schengen Vize Danışmanlığı"
                  width={560}
                  height={600}
                  className="rounded-3xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAŞVURU SÜRECİ */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2
          ref={register}
          data-anim="schengen-fade-up"
          className="schengen-fade-up-init text-3xl font-bold mb-12 text-center text-gray-900"
        >
          Başvuru Süreci Adımları
        </h2>

        <div className="grid lg:grid-cols-5 gap-8">
          {processSteps.map((step, i) => (
            <div
              key={i}
              ref={register}
              data-anim="schengen-slide"
              className="schengen-slide-init relative z-10 p-5 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shadow-md">
                {i + 1}
              </div>
              <h4 className="font-semibold text-lg mt-4 mb-3">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div
          ref={register}
          data-anim="schengen-fade-up"
          className="schengen-fade-up-init mt-16 max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-inner border border-gray-100"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaUserTie className="text-blue-600" />
            Başvuru Stratejisi
          </h3>
          <p className="text-gray-700 text-base">
            Başvuru stratejisi kişinin profiline göre değişir. Mesleğiniz, medeni
            durumunuz, yaşınız ve seyahat geçmişiniz en uygun Schengen ülkesini ve
            başvuru taktiğini belirlemek için titizlikle değerlendirilir.
          </p>
        </div>
      </section>

      {/* GEREKLİ BELGELER */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2
            ref={register}
            data-anim="schengen-fade-up"
            className="schengen-fade-up-init text-3xl font-bold mb-12 text-center text-gray-900"
          >
            Gerekli Belgeler Listesi
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {genelEvraklar.map((item, i) => {
              const Icon = item.icon || FaRegFileAlt;
              return (
                <div
                  key={i}
                  ref={register}
                  data-anim="schengen-fade-up"
                  className="schengen-fade-up-init bg-white rounded-2xl p-6 shadow-md border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-xl text-rose-400">
                      <Icon />
                    </div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROFİLE GÖRE EK BELGELER */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2
          ref={register}
          data-anim="schengen-fade-up"
          className="schengen-fade-up-init text-3xl font-bold mb-12 text-center text-gray-900"
        >
          Profile Göre Ek Belge Gereksinimleri
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ekBelgelerByProfile.map((block, i) => {
            const Icon = block.icon || FaRegFileAlt;
            return (
              <div
                key={i}
                ref={register}
                data-anim="schengen-slide"
                className="schengen-slide-init bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-blue-50 text-violet-400 mr-3">
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="font-bold text-xl">{block.profile}</h3>
                </div>
                <ul className="text-sm text-gray-700 list-none space-y-3">
                  {block.items.map((it, j) => (
                    <li key={j} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={12} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* EVRAK HAZIRLIĞI & NOTLAR */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white rounded-t-3xl border-t border-gray-200">
        <div
          ref={register}
          data-anim="schengen-fade-up"
          className="schengen-fade-up-init max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-2xl border border-gray-100"
        >
          <h3 className="text-2xl font-bold mb-5 flex items-center gap-2">
            <FaRegFileAlt className="text-red-500" />
            Evrak Hazırlığı & Önemli Notlar
          </h3>
          <ul className="list-none pl-0 text-base space-y-4 text-gray-700">
            <li className="flex items-start">
              <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
              <span>
                Randevu tarihinden <strong>en az 10 gün önce</strong> hazırlıklara başlayın; son dakikaya
                bırakmayın.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
              <span>
                Banka dökümleri ve barkodlu e-devlet belgelerini <strong>son hafta</strong> alın; aracı kurum
                güncel tarihli talep edebilir.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
              <span>
                Randevuya gitmeme durumunda randevu ücreti <strong>yanar</strong>; yeniden randevu alınması
                gerekir.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
              <span>
                Almanya randevu süreci aracı kurum üzerinden farklı işlemektedir; onay e-postası ve ücret
                sonrası rezervasyon tamamlanır.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ÜCRETLER */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h3
          ref={register}
          data-anim="schengen-fade-up"
          className="schengen-fade-up-init text-3xl font-bold mb-8 text-gray-900"
        >
          Ücret Bilgileri
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div
            ref={register}
            data-anim="schengen-scale"
            className="schengen-scale-init bg-white p-6 rounded-xl shadow-lg border border-gray-100 g-2"
          >
            <FaEuroSign className="text-4xl mx-auto mb-3 text-amber-600" />
            <p className="font-semibold text-lg">Vize Harcı</p>
            <p className="text-xl font-bold text-gray-900 mt-1">{fees.visaFee0} (0-6 yaş)</p>
            <p className="text-xl font-bold text-gray-900 mt-1">{fees.visaFee6} (6-12 Yaş)</p>
            <p className="text-xl font-bold text-gray-900 mt-1">{fees.visaFee12} (12+)</p>

          </div>

          <div
            ref={register}
            data-anim="schengen-scale"
            className="schengen-scale-init bg-white p-6 rounded-xl shadow-lg border border-gray-100 g-2"
          >
            <FaRegClock className="text-4xl mx-auto mb-3 text-amber-600" />
            <p className="font-semibold text-lg">Randevu Bedeli</p>
            <p className="font-semibold text-xs">(Ülkeye göre değişkenlik gösterebilir)</p>


            <p className="text-xl font-bold text-gray-900 mt-1">{fees.appointmentRange}</p>
          </div>

          <div
            ref={register}
            data-anim="schengen-scale"
            className="schengen-scale-init bg-white p-6 rounded-xl shadow-lg border border-gray-100 g-2"
          >
            <FaUserTie className="text-4xl mx-auto mb-3 text-amber-600" />
            <p className="font-semibold text-lg">Danışmanlık Ücreti</p>
            <p className="text-xl font-bold text-gray-900 mt-1">{fees.consultancy0}</p>
            <p className="text-xl font-bold text-gray-900 mt-1">{fees.consultancy14}</p>

          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section
        ref={register}
        data-anim="ukvisa-fade-up"
        className="ukvisa-fade-up-init max-w-6xl mx-auto px-6 pb-20"
      >
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-xl">
          
          <div className="relative p-6 md:p-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Başvuru Süreçleri</h2>

            <div className="grid md:grid-cols-3 gap-4">
              {[ "Başvuru Kanalları", "Belgeler & Randevu", "Aya Journey Desteği" ].map((t, i) => (
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
                  href="https://wa.me/903128701584"
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
                name: "Schengen vizesi için gerekli belgeler nelerdir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Schengen vizesi için pasaport, banka hesap dökümleri, iş/öğrenci belgeleri, seyahat sağlık sigortası, biyometrik fotoğraf, uçak ve konaklama rezervasyonları gereklidir. Bazı profiller için ek belgeler talep edilebilir.",
                },
              },
              {
                "@type": "Question",
                name: "Schengen vizesi ne kadar sürede çıkar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Schengen vizesi genellikle 7–15 iş günü içinde sonuçlanır. Ancak yoğun dönemlerde bu süre uzayabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Schengen vizesi randevusu nasıl alınır?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Randevular aracı kurumlar üzerinden alınır. Başvuru formu doldurulduktan sonra vize türü seçilir ve uygun bir tarih belirlenir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi ülkeye Schengen başvurusu yapmalıyım?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En uzun konaklamayı yapacağınız veya ilk giriş yapacağınız ülkeye başvuru yapılmalıdır. Profil, seyahat geçmişi ve meslek gibi durumlara göre en uygun ülke kişiye özel belirlenir.",
                },
              },
              {
                "@type": "Question",
                name: "Schengen vizesi reddi neden olur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yetersiz finansal durum, şüpheli seyahat planı, eksik belge, hatalı rezervasyonlar, tutarsız banka hareketleri ve geçmiş reddler başlıca nedenlerdir.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
