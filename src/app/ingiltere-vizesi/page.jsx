// UKVisaPage.jsx
import React from "react";
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
export const metadata = {
  title: "İngiltere Vizesi - Detaylı Rehber",
  description: "İngiltere vizesi için adım adım rehber, gerekli belgeler ve başvuru süreci.",
};

// Belgeler
const documents = [
  { icon: <GoDotFill />, title: "Geçerli Pasaport" },
  { icon: <GoDotFill />, title: "2 adet biyometrik fotoğraf" },
  { icon: <GoDotFill />, title: "İkametgah belgesi" },
  { icon: <GoDotFill />, title: "Son 3 aylık banka hesap dökümü" },
  { icon: <GoDotFill />, title: "İngilizce vize dilekçesi" },
  { icon: <GoDotFill />, title: "Seyahat sağlık sigortası" },
  { icon: <GoDotFill />, title: "Otel ve uçak rezervasyonları" },
];

// Başvuru adımları
const processSteps = [
  { step: 1, title: "Randevu Talebi", description: "İngiltere başkonsolosluğundan randevu alın." },
  { step: 2, title: "Belgelerin Teslimi", description: "Gerekli tüm belgeleri teslim edin." },
  { step: 3, title: "Biyometri & Ücret", description: "Parmak izi ve vize harcını ödeyin." },
  { step: 4, title: "Başvuruyu Takip Edin", description: "Başvurunuzun durumunu online kontrol edin." },
  { step: 5, title: "Pasaport Teslimi", description: "Sonuçlandıktan sonra pasaportunuzu alın." },
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
  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 font-sans min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.12),transparent_25%)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-18 md:py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-slate-200/70">
              <FaPassport className="text-blue-500" />
              <span className="text-sm text-slate-700">İngiltere Vize Rehberi </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
              İngiltere vizesi için modern, hızlı ve güvenli rehber
            </h1>
            <p className="text-slate-700 text-lg md:text-xl max-w-2xl">
              Belgeleri toparlayın, başvurunuzu planlayın ve süreci adım adım takip edin.
              Tüm kritik kontrol listeleri ve ipuçları tek ekranda.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/randevu">
                <button className="bg-blue-500 text-white cursor-pointer px-5 py-3 rounded-xl font-semibold shadow-md shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400">
                  Hemen Başvur
                </button>
              </Link>
              <Link href="/iletisim">
                <button className="bg-white text-blue-600 cursor-pointer px-5 py-3 rounded-xl border border-blue-100 font-semibold shadow-sm transition hover:bg-blue-50">
                  Uzmanla Görüş
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-lg">
              {[
                { label: "Ortalama sonuç", value: "15 iş günü", icon: <FaClock /> },
                { label: "Ücret", value: "145 GBP", icon: <FaFileInvoiceDollar /> },
                { label: "Onay oranı", value: "%95+", icon: <FaCheckCircle /> },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm">
                  <div className="text-blue-500 text-xl">{item.icon}</div>
                  <div>
                    <p className="text-xs uppercase text-slate-500">{item.label}</p>
                    <p className="font-semibold text-slate-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-fuchsia-500/10 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <Image
                  src="/images/ukdetail.jpg"
                  alt="İngiltere vizesi görseli"
                  width={620}
                  height={480}
                  className="object-cover h-full w-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-4 bg-white border border-slate-200 backdrop-blur-lg rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg">
                <FaPlaneDeparture className="text-blue-500 text-2xl" />
                <div>
                  <p className="text-xs text-slate-600">Hazırlık Tamamlandı</p>
                  <p className="font-semibold text-slate-900">Uçuş planı doğrulandı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bilgi Kartları */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-slate-500 uppercase tracking-wide">İlk adımlar</p>
            <h2 className="text-3xl font-bold text-slate-900">Kimler ve hangi şartlarda?</h2>
          </div>
          <Link href="/yurtdisi-rehberi/vize-turleri">
            <span className="text-blue-600 text-sm font-semibold cursor-pointer hover:text-blue-500">
              Diğer vizeler →
            </span>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {infoCards.map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-400/60 transition shadow-md"
            >
              <div className="text-blue-500 text-3xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{item.desc}</p>
              <div className="mt-4 h-1 w-12 bg-blue-500 rounded-full group-hover:w-16 transition-all" />
            </div>
          ))}
        </div>
      </section>

      {/* Gerekli Belgeler */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-slate-500 uppercase tracking-wide">Check-list</p>
            <h2 className="text-3xl font-bold text-slate-900">Gerekli belgeleri tamamlayın</h2>
          </div>
          <span className="text-slate-600 text-sm">PDF olarak indirebilirsiniz</span>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {documents.map((doc, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-5 flex items-start gap-4 hover:border-blue-400/60 transition shadow-sm"
            >
              <div className="text-blue-500 text-2xl">{doc.icon}</div>
              <p className="text-slate-800 text-sm leading-relaxed">{doc.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700">
          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700">Çeviri gereksinimleri</span>
          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700">Orijinal + kopya</span>
          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700">Son 3 ay güncel</span>
        </div>
      </section>

      {/* Başvuru Süreci */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-sm text-slate-500 uppercase tracking-wide">Süreç</p>
            <h2 className="text-3xl font-bold text-slate-900">Başvuruyu 5 adımda tamamlayın</h2>
          </div>
          {/* <span className="text-slate-600 text-sm">Online takip paneli</span> */}
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="relative bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-blue-400/60 transition"
            >
              <div className="absolute -top-3 -left-3 bg-blue-500 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-md shadow-blue-500/30">
                {step.step}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm text-slate-700">
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <FaClock className="text-blue-500" />
            <span>Hızlı randevu için yoğun dönemleri dikkate alın.</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <FaFileInvoiceDollar className="text-blue-500" />
            <span>Ödeme dekontu ve biometrik işlemler aynı gün yapılabilir.</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <FaCheckCircle className="text-blue-500" />
            <span>Başvuru durumunu e-posta ve SMS ile takip edin.</span>
          </div>
        </div>
      </section>

      {/* CTA */}
            <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-2xl shadow-slate-200">
          <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.14),transparent_32%)]" />
          <div className="relative p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-700">Başvuru Akışı</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Başvuru Süreçleri
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
