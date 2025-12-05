
import React from "react";
import Image from "next/image";
import {
  FaRegUserCircle,
  FaFileInvoiceDollar,
  FaCheckCircle,
} from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import Link from "next/link";

export const metadata = {
  title: "Portekiz D7 Vizesi - Detaylı Rehber",
  description:
    "Portekiz D7 Vizesi ile yüksek yaşam kalitesi ve sıcak iklimde yaşamak isteyenler için adım adım başvuru rehberi ve şartlar.",
};

const belgeler = [
  { icon: <FaRegUserCircle />, title: "2 adet biyometrik fotoğraf" },
  { icon: <FaRegUserCircle />, title: "En az 3 ay geçerliliği olan pasaport" },
  { icon: <FaRegUserCircle />, title: "İkametgah belgesi" },
  { icon: <FaRegUserCircle />, title: "Son 12 aylık banka hesap dökümü" },
  { icon: <FaRegUserCircle />, title: "Adli sicil kaydı" },
  { icon: <FaRegUserCircle />, title: "Pasif gelire kaynak teşkil eden belgeler" },
  { icon: <FaRegUserCircle />, title: "Portekiz’de kiraladığınız evin kontratı" },
  { icon: <FaRegUserCircle />, title: "Niyet mektubu" },
  { icon: <FaRegUserCircle />, title: "Belgelerin Portekizce veya İngilizce tercümeleri" },
];

const basvuruAdimlari = [
  {
    step: 1,
    title: "Randevu Talebi",
    description: "Portekiz Ankara Büyükelçiliği’nden randevu talep edin.",
  },
  {
    step: 2,
    title: "Belgelerin Teslimi",
    description: "Gerekli tüm belgeleri konsolosluğa teslim edin.",
  },
  {
    step: 3,
    title: "Onay & Vize",
    description: "Başvuru onaylandığında D7 vizenizi alın. Süreç genellikle 3–8 ay sürer.",
  },
];

const lizbonSemtleri = [
  {
    title: "Sahil ve Tatil Semtleri",
    description:
      "Oeiras, Carcavelos, Parede, Estoril, Cascais – sahil boyunca yaşam ve tatil imkanları.",
  },
  {
    title: "Büyükelçilik Bölgeleri",
    description: "Restelo ve Belém – güvenli ve prestijli bölgeler.",
  },
  {
    title: "Eski Şehir ve Yeni Siteler",
    description:
      "Rossio, Baixa, Chiado, Rato, Campo de Ourique, Alcântara, Príncipe Real, São Bento, Arroios, Alvalade, Saldanha, Campo Pequeno, Campo Grande, Entrecampos, Campolide, Bairro Alto – hem tarihi hem modern yaşam.",
  },
];

const Page = () => {
  return (
    <main className="bg-zinc-50  text-gray-900 dark:text-gray-100 font-sans mt-30">
      
      {/* Hero */}
      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
            Portekiz D7 Vizesi: Sıcak İklim, Yüksek Yaşam Kalitesi ve Zengin Kültür
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-6 max-w-lg">
            Portekiz D7 Vizesi ile hayalinizdeki hayatı gerçeğe dönüştürün. Sıcak iklimi, zengin kültürü ve yüksek yaşam kalitesi ile Portekiz, hem yerleşim hem de yatırım için ideal bir seçenek sunuyor.
          </p>
          <Link href="/randevu">
        <button  className="bg-white text-gray-700 cursor-pointer mt-5 border border-blue-300 px-4 py-2 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100">
          Hemen Başvur
        </button>
      </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/portekiz.jpg"
            alt="Portekiz Görseli"
            width={500}
            height={400}
            className="rounded-2xl object-cover shadow-lg"
             priority 
          />
        </div>
      </section>

      {/* Bilgi Blokları */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow hover:shadow-lg transition">
          <FaRegUserCircle className="text-blue-500 text-3xl mb-3" />
          <h2 className="font-semibold text-xl mb-2">Kimler Başvurabilir?</h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Pasif gelir sahibi kişiler, emekliler veya serbest çalışanlar Portekiz D7 Vizesi için başvurabilir.
          </p>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow hover:shadow-lg transition">
          <MdOutlineSchool className="text-blue-500 text-3xl mb-3" />
          <h2 className="font-semibold text-xl mb-2">Vize Şartları</h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Ayda en az 870 Euro pasif gelir veya yıllık 10.440 Euro dolaylı gelir. Aile başvurularında eş için %50, çocuklar için %30 eklenir.
          </p>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow hover:shadow-lg transition">
          <FaFileInvoiceDollar className="text-blue-500 text-3xl mb-3" />
          <h2 className="font-semibold text-xl mb-2">Ekonomik Faydalar</h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Portekiz’de yaşam maliyeti uygun, iklim sıcak ve kültürel çeşitlilik yüksektir. Pasif gelirle yaşam mümkündür.
          </p>
        </div>
      </section>

      {/* Gerekli Belgeler - Modern Kartlar */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Gerekli Belgeler</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {belgeler.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white dark:bg-zinc-900 rounded-xl p-6 shadow hover:shadow-lg transition transform hover:scale-105"
            >
              <div className="text-blue-500 text-4xl mb-3">{item.icon}</div>
              <p className="text-center text-gray-700 dark:text-gray-300 text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Başvuru Süreci */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Başvuru Süreci</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {basvuruAdimlari.map((step) => (
            <div
              key={step.step}
              className="flex flex-col items-center bg-white dark:bg-zinc-900 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <span className="text-blue-500 text-3xl mb-3 font-bold">{step.step}</span>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-center text-gray-700 dark:text-gray-300 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lizbon’da Yerleşim */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Lizbon’da Yerleşime Uygun Semtler</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {lizbonSemtleri.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white dark:bg-zinc-900 rounded-xl p-6 shadow hover:shadow-lg transition transform hover:scale-105"
            >
              <FaCheckCircle className="text-green-500 text-4xl mb-3" />
              <h3 className="font-semibold mb-2 text-center">{item.title}</h3>
              <p className="text-center text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                 <Link href="/randevu">
        <button  className="bg-white text-gray-700 cursor-pointer mt-5 border border-blue-300 px-4 py-2 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100">
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
          "name": "Portekiz D7 Vizesine kimler başvurabilir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Düzenli pasif geliri olan kişiler, emekliler ve uzaktan çalışanlar Portekiz D7 vizesine başvurabilir. Başvuru sahibinin Portekiz’de kendini ve ailesini geçindirecek geliri olması gerekmektedir."
          }
        },
        {
          "@type": "Question",
          "name": "Portekiz D7 Vizesi için gerekli gelir şartı nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Başvuran kişinin aylık en az 870 € pasif geliri veya yıllık 10.440 € gelir kaynağı olması gerekir. Eş için bu tutarın %50'si, çocuklar için ise %30'u eklenir."
          }
        },
        {
          "@type": "Question",
          "name": "Portekiz D7 Vizesi ne kadar sürede çıkar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Başvuru süreci genellikle 2–4 ay arasında sürer. Konsolosluk yoğunluğu ve ek belge talepleri süreci uzatabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Portekiz D7 Vizesi ile oturma izni alınabilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. D7 vizesi onaylandıktan sonra Portekiz’e giriş yaparak SEF üzerinden 2 yıllık oturma izni alınır. Sonrasında bu süre 3 yıl daha uzatılabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Portekiz D7 Vizesi için gerekli belgeler nelerdir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pasaport, gelir belgeleri, banka hesap dökümleri, sabıka kaydı, Portekiz’de konaklama belgesi, sağlık sigortası ve finansal yeterlilik kanıtı başlıca belgelerdir."
          }
        }
      ]
    })
  }}
/>

    </main>
  );
};

export default Page;
