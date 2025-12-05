// UKVisaPage.jsx
import React from "react";
import { FaRegUserCircle, FaFileInvoiceDollar, FaCheckCircle, FaPassport } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "İngiltere Vizesi - Detaylı Rehber",
  description: "İngiltere vizesi için adım adım rehber, gerekli belgeler ve başvuru süreci.",
};

// Belgeler
const documents = [
  { icon: <FaRegUserCircle />, title: "Geçerli Pasaport" },
  { icon: <FaRegUserCircle />, title: "2 adet biyometrik fotoğraf" },
  { icon: <FaRegUserCircle />, title: "İkametgah belgesi" },
  { icon: <FaRegUserCircle />, title: "Son 3 aylık banka hesap dökümü" },
  { icon: <FaRegUserCircle />, title: "İngilizce vize dilekçesi" },
  { icon: <FaRegUserCircle />, title: "Seyahat sağlık sigortası" },
  { icon: <FaRegUserCircle />, title: "Otel ve uçak rezervasyonları" },
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
    <main className="bg-white text-black font-sans">

      {/* Hero */}
      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row 
      items-center justify-center gap-10 px-6 py-16">
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
            İngiltere Vizesi – Modern Rehber
          </h1>

          <p className="text-gray-700 mb-6 text-lg md:text-xl max-w-lg">
            İngiltere vizesi için gerekli belgeler, süreç ve başvuru ipuçları.
          </p>

          <Link href="/randevu-uk">
            <button className="bg-white text-gray-700 cursor-pointer mt-5 border border-blue-300 px-4 py-2 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100">
              Hemen Başvur
            </button>
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
                  <Image
                    src="/images/ukdetail.jpg"
                    alt="Portekiz Görseli"
                    width={500}
                    height={400}
                    className="rounded-2xl object-cover shadow-lg"
                  />
                </div>

      </section>

      {/* Bilgi Kartları */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {infoCards.map((item, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg 
            transition transform hover:scale-105 flex flex-col items-center text-center"
          >
            <div className="text-blue-600 text-4xl mb-3">{item.icon}</div>
            <h2 className="font-semibold text-xl mb-2">{item.title}</h2>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Gerekli Belgeler */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Gerekli Belgeler</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {documents.map((doc, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-100 rounded-xl 
              p-6 shadow hover:shadow-lg transition transform hover:scale-105"
            >
              <div className="text-blue-600 text-4xl mb-3">{doc.icon}</div>
              <p className="text-center text-gray-700 text-sm">{doc.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Başvuru Süreci */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Başvuru Süreci</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="flex flex-col items-center bg-gray-100 rounded-xl 
              p-6 shadow hover:shadow-lg transition transform hover:scale-105"
            >
              <span className="text-blue-600 text-3xl mb-3 font-bold">
                {step.step}
              </span>
              <h3 className="font-semibold mb-2 text-center">{step.title}</h3>
              <p className="text-gray-700 text-sm text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <Link href="/randevu-uk">
          <button
            className="bg-white text-gray-700 cursor-pointer mt-5 border border-blue-300 px-4 py-2 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100"
          >
            Hemen Başvur
          </button>
        </Link>
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
