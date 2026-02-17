// app/ankara-schengen-vizesi/page.jsx
import React from "react";

export const metadata = {
  title:
    "Ankara Schengen Vizesi 2026 | Evrak Listesi, Randevu ve Profesyonel Danışmanlık",

  description:
    "Ankara Schengen vizesi başvurusu için güncel evrak listesi, randevu alma süreci ve başvuru adımları. Turistik, ticari ve aile ziyareti Schengen vizesinde uzman danışmanlık desteği ile red riskinizi azaltın.",

  keywords: [
    // Ana Kelimeler
    "ankara schengen vizesi",
    "schengen vizesi ankara",
    "ankara schengen vize danışmanlığı",
    "ankara schengen başvuru",

    // Evrak & Süreç
    "ankara schengen vize evrakları",
    "schengen evrak listesi ankara",
    "ankara schengen vize randevu",
    "schengen vize formu ankara",
    "ankara vfs schengen",

    // Ülke Bazlı
    "ankara almanya schengen vizesi",
    "ankara italya schengen vizesi",
    "ankara fransa schengen vizesi",
    "ankara hollanda schengen vizesi",
    "ankara ispanya schengen vizesi",

    // Amaç Bazlı
    "ankara turistik schengen vizesi",
    "ankara ticari schengen vizesi",
    "ankara aile ziyareti schengen",
    "ankara schengen öğrenci vizesi",

    // Güven & Dönüşüm
    "en iyi schengen danışmanlık ankara",
    "güvenilir schengen vize şirketi ankara",
    "ankara hızlı schengen vizesi",
    "ankara acil schengen vizesi",
  ],

  alternates: {
    canonical: "https://www.ayajourney.com/ankara-schengen-vizesi",
  },

  openGraph: {
    title:
      "Ankara Schengen Vizesi 2026 | Evrak, Randevu ve Başvuru Rehberi",
    description:
      "Ankara’dan Schengen vizesi başvurusu yapacaklar için güncel evrak listesi, randevu süreci ve profesyonel danışmanlık desteği. Red riskinizi azaltın.",
    url: "https://www.ayajourney.com/ankara-schengen-vizesi",
    type: "website",
    locale: "tr_TR",
    siteName: "Aya Journey Vize Danışmanlığı",
    images: [
      {
        url: "https://www.ayajourney.com/images/ayalogoxl.webp",
        width: 1200,
        height: 630,
        alt: "Ankara Schengen Vizesi Danışmanlığı ve Başvuru Rehberi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ankara Schengen Vizesi 2026 | Profesyonel Başvuru Desteği",
    description:
      "Schengen vizesi başvurularında Ankara’da uzman danışmanlık. Evrak kontrolü ve randevu planlama desteği.",
    images: [
      "https://www.ayajourney.com/images/ayalogoxl.webp",
    ],
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

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Ankara Schengen vizesi başvurusu nereden yapılır?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Schengen başvuruları Ankara’daki VFS Global, iDATA veya ilgili ülkenin yetkilendirdiği başvuru merkezlerinden yapılır.",
            },
          },
          {
            "@type": "Question",
            name: "Schengen vizesi Ankara’dan kaç günde çıkar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ortalama değerlendirme süresi 15 takvim günüdür. Yoğun dönemlerde bu süre uzayabilir.",
            },
          },
          {
            "@type": "Question",
            name: "Ankara Schengen randevusu nasıl alınır?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Randevular ilgili ülkenin resmi başvuru merkezi üzerinden online sistemle alınır. Yoğun dönemlerde erken planlama önerilir.",
            },
          },
          {
            "@type": "Question",
            name: "Schengen vizesi için banka hesabında ne kadar para olmalı?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Seyahat süresi ve ülkeye göre değişir. Günlük ortalama 50–100 Euro karşılığı bakiye gösterilmesi önerilir.",
            },
          },
          {
            "@type": "Question",
            name: "Schengen vizesi reddedilirse tekrar başvuru yapılabilir mi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Evet. Ret gerekçesi analiz edilerek dosya güçlendirilip yeniden başvuru yapılabilir.",
            },
          },
          {
            "@type": "Question",
            name: "Ankara’da en hızlı Schengen vizesi hangi ülkeden alınır?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Değerlendirme süresi ülkeye ve başvuru yoğunluğuna göre değişir. Profil analizi doğru ülke seçiminde belirleyicidir.",
            },
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        name: "Aya Journey Vize Danışmanlığı",
        image:
          "https://www.ayajourney.com/images/ayalogoxl.webp",
        "@id": "https://ayajourney.com/",
        url: "https://ayajourney.com/",
        telephone: "+90 530 219 90 56",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ankara",
          addressCountry: "TR",
        },
        areaServed: {
          "@type": "City",
          name: "Ankara",
        },
        priceRange: "$$",
      },
    ],
  };

  return (
    <>
      {/* Combined Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="min-h-screen bg-zinc-50">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-16 pb-12">
          <div className="bg-white border border-slate-200/70 rounded-3xl shadow-sm p-8 sm:p-12">
            <p className="text-sm text-slate-500 uppercase tracking-widest">
              Ankara • Schengen Bölgesi Vize Merkezi
            </p>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-4">
              Ankara Schengen Vizesi Danışmanlığı ve Başvuru Rehberi 2026
            </h1>

            <p className="text-slate-600 mt-6 leading-relaxed max-w-3xl text-lg">
              <strong>Ankara Schengen vizesi</strong> başvurularında evrak
              hazırlığı, doğru ülke seçimi, randevu planlaması ve dosya kontrol
              süreçlerini profesyonel şekilde yönetiyoruz. VFS Global, iDATA ve
              konsolosluk başvurularında stratejik danışmanlık sunuyoruz.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/randevu"
                className="inline-flex items-center justify-center rounded-xl px-6 py-4 font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                Ankara Schengen Randevusu Al
              </a>
              <a
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-xl px-6 py-4 font-semibold bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 transition"
              >
                Uzmanla Görüş
              </a>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-5xl mx-auto px-4 sm:px-8 pb-16">
          <div className="bg-white border border-slate-200/70 rounded-3xl shadow-sm p-8 sm:p-12 space-y-12">
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Schengen Vizesi Nedir?
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Schengen vizesi; Almanya, İtalya, Fransa, Hollanda ve İspanya
                dahil 27 Avrupa ülkesine kısa süreli giriş hakkı sağlar.
                Ankara’dan yapılan başvurular ilgili ülkenin yetkilendirdiği
                merkezler üzerinden gerçekleştirilir.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Ankara Schengen Vizesi Başvurusu Nasıl Yapılır?
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Doğru ülke seçimi, finansal yeterlilik gösterimi ve seyahat
                planı başvurunun en kritik aşamalarıdır. Eksik evrak veya hatalı
                başvuru Schengen vize reddine neden olabilir.
              </p>
            </div>
<div>
  <h2 className="text-3xl font-bold text-slate-900">
    Ankara’dan En Çok Başvurulan Schengen Ülkeleri
  </h2>

  <div className="mt-6 grid md:grid-cols-2 gap-3 text-slate-700">
    <a href="/almanya-vize" className="hover:underline">Almanya Schengen Vizesi</a>
    <a href="/italya-vize" className="hover:underline">İtalya Schengen Vizesi</a>
    <a href="/fransa-vize" className="hover:underline">Fransa Schengen Vizesi</a>
    <a href="/hollanda-vize" className="hover:underline">Hollanda Schengen Vizesi</a>
    <a href="/ispanya-vize" className="hover:underline">İspanya Schengen Vizesi</a>
    <a href="/yunanistan-vize" className="hover:underline">Yunanistan Schengen Vizesi</a>
  </div>
</div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Ankara Schengen Vize Reddinin En Sık Nedenleri
              </h2>
              <ul className="mt-6 space-y-3 text-slate-600">
                <li>• Yetersiz finansal gösterim</li>
                <li>• Seyahat planının tutarsız olması</li>
                <li>• Türkiye’ye geri dönüş bağlarının zayıf görünmesi</li>
                <li>• Yanlış ülke üzerinden başvuru</li>
              </ul>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-20">
          <div className="bg-slate-900 rounded-3xl p-10 sm:p-14 text-white text-center">
            <h2 className="text-3xl font-extrabold">
              Ankara Schengen Vizesi İçin Profesyonel Destek
            </h2>

            <p className="text-slate-300 mt-6 max-w-2xl mx-auto">
              Evrak kontrolü, ülke seçimi ve randevu sürecinde uzman desteği
              alarak başvurunuzu güvenle tamamlayın.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/randevu"
                className="inline-flex items-center justify-center rounded-xl px-6 py-4 font-semibold bg-white text-slate-900 hover:bg-slate-100 transition"
              >
                Hemen Randevu Al
              </a>
              <a
                href="https://wa.me/905302199056"
                className="inline-flex items-center justify-center rounded-xl px-6 py-4 font-semibold bg-green-600 hover:bg-green-700 transition"
              >
                WhatsApp Destek
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
