// app/ankara-vize-danismanligi/page.jsx
import React from "react";

export const metadata = {
  title: "Ankara Vize Danışmanlığı | Schengen, Amerika, İngiltere",
  description:
    "Ankara vize danışmanlığı hizmeti: Schengen, Amerika ve İngiltere vize başvurularında evrak hazırlığı, randevu planlama ve profesyonel danışmanlık desteği.",
  keywords: [
    "ankara vize danışmanlığı",
    "ankara vize",
    "vize şirketleri ankara",
    "ankara schengen vizesi",
    "ankara amerika vizesi",
    "ankara ingiltere vizesi",
    "vize randevu ankara",
  ],
  alternates: {
    canonical: "/ankara-vize-danismanligi",
  },
  openGraph: {
    title: "Ankara Vize Danışmanlığı | Schengen, Amerika, İngiltere",
    description:
      "Ankara’da vize danışmanlığı: Schengen, Amerika ve İngiltere vize süreçlerinde evrak, randevu ve başvuru desteği.",
    url: "/ankara-vize-danismanligi",
    type: "website",
    locale: "tr_TR",
    siteName: "Aya Journey",
    images: [
      {
        url: "/og/ankara-vize-danismanligi.jpg", // varsa
        width: 1200,
        height: 630,
        alt: "Ankara Vize Danışmanlığı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankara Vize Danışmanlığı | Schengen, Amerika, İngiltere",
    description:
      "Ankara’da vize danışmanlığı: evrak, randevu ve başvuru desteğiyle vize sürecinizi kolaylaştırın.",
    images: ["/og/ankara-vize-danismanligi.jpg"], // varsa
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-14 pb-10">
        <div className="bg-white border border-slate-200/70 rounded-2xl shadow-sm p-7 sm:p-10">
          <p className="text-sm text-slate-500">Ankara • Vize Danışmanlığı</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            Ankara Vize Danışmanlığı
          </h1>
          <p className="text-slate-600 mt-4 leading-relaxed max-w-2xl">
            Schengen, Amerika ve İngiltere başvurularında evrak hazırlığı, randevu
            planlama ve başvuru sürecinin doğru yönetimi için profesyonel destek
            sunuyoruz.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="/randevu"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
            >
              Randevu Oluştur
            </a>
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 transition"
            >
              İletişime Geç
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-200/70 p-4 bg-slate-50">
              <p className="text-sm text-slate-500">Hizmet</p>
              <p className="font-semibold text-slate-900 mt-1">Evrak Kontrolü</p>
              <p className="text-sm text-slate-600 mt-1">
                Başvuru dosyanızı eksik/risk açısından kontrol ederiz.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/70 p-4 bg-slate-50">
              <p className="text-sm text-slate-500">Hizmet</p>
              <p className="font-semibold text-slate-900 mt-1">Randevu Planlama</p>
              <p className="text-sm text-slate-600 mt-1">
                Uygun tarih-saat seçimi ve süreç takibi sağlarınız.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/70 p-4 bg-slate-50">
              <p className="text-sm text-slate-500">Hizmet</p>
              <p className="font-semibold text-slate-900 mt-1">
                Başvuru Rehberliği
              </p>
              <p className="text-sm text-slate-600 mt-1">
                Formlar, dilekçe ve seyahat planı gibi adımlarda destek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ülke/Kategori Kartları */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          Ankara’dan En Sık Başvurulan Vizeler
        </h2>
        <p className="text-slate-600 mt-2">
          Başvurunuzun türüne göre gerekli evraklar değişebilir. Aşağıdaki
          başlıklardan bilgi alabilirsiniz.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="/schengen-vize-evraklari"
            className="group rounded-2xl bg-white border border-slate-200/70 p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm text-slate-500">Schengen</p>
            <p className="text-lg font-semibold text-slate-900 mt-1">
              Schengen Vize Evrakları
            </p>
            <p className="text-sm text-slate-600 mt-2">
              Turistik/ziyaret amaçlı başvurular için genel evrak listesi.
            </p>
            <span className="text-sm font-semibold text-slate-900 mt-4 inline-block group-hover:underline">
              Detayları Gör →
            </span>
          </a>

          <a
            href="/birlesik-krallik-vize-evraklari"
            className="group rounded-2xl bg-white border border-slate-200/70 p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm text-slate-500">Birleşik Krallık</p>
            <p className="text-lg font-semibold text-slate-900 mt-1">
              İngiltere Vize Evrakları
            </p>
            <p className="text-sm text-slate-600 mt-2">
              UK başvurularında gerekli belge ve süreç rehberi.
            </p>
            <span className="text-sm font-semibold text-slate-900 mt-4 inline-block group-hover:underline">
              Detayları Gör →
            </span>
          </a>

          <a
            href="/amerika-vize-evraklari"
            className="group rounded-2xl bg-white border border-slate-200/70 p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm text-slate-500">Amerika</p>
            <p className="text-lg font-semibold text-slate-900 mt-1">
              Amerika Vize Evrakları
            </p>
            <p className="text-sm text-slate-600 mt-2">
              B1/B2 süreçlerinde genel evrak ve hazırlık adımları.
            </p>
            <span className="text-sm font-semibold text-slate-900 mt-4 inline-block group-hover:underline">
              Detayları Gör →
            </span>
          </a>
        </div>
      </section>

      {/* SSS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-16">
        <div className="bg-white border border-slate-200/70 rounded-2xl shadow-sm p-7 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-6 space-y-5">
            <div className="border-b border-slate-200 pb-4">
              <h3 className="font-semibold text-slate-900">
                Ankara vize danışmanlığı hizmeti neleri kapsar?
              </h3>
              <p className="text-slate-600 mt-2">
                Evrak kontrolü, başvuru planı oluşturma, randevu süreci yönetimi
                ve başvurunuzun türüne göre gerekli adımların rehberliğini
                kapsar.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-4">
              <h3 className="font-semibold text-slate-900">
                Schengen vizesi için evraklar herkes için aynı mı?
              </h3>
              <p className="text-slate-600 mt-2">
                Hayır. Çalışan, öğrenci, emekli veya şirket sahibi olmanıza göre
                evrak listesi ve destekleyici belgeler değişebilir.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Randevu oluşturmadan önce ne hazırlamalıyım?
              </h3>
              <p className="text-slate-600 mt-2">
                Pasaport bilgileri, seyahat tarihleri, çalışma/öğrencilik durumu
                ve varsa önceki vize geçmişinizle ilgili temel bilgileri hazır
                etmeniz yeterlidir.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/randevu"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
            >
              Hemen Randevu Al
            </a>
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 transition"
            >
              Sorunuzu İletin
            </a>
          </div>
        </div>
      </section>

      {/* Local SEO mini footer note */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-10">
        <p className="text-xs text-slate-500">
          Not: İçerikler bilgilendirme amaçlıdır. Evrak gereksinimleri başvuru
          türüne ve güncel konsolosluk/başvuru merkezi prosedürlerine göre
          değişebilir.
        </p>
      </section>

      {/* FAQ Schema (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Ankara vize danışmanlığı hizmeti neleri kapsar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evrak kontrolü, başvuru planı oluşturma, randevu süreci yönetimi ve başvurunuzun türüne göre gerekli adımların rehberliğini kapsar.",
                },
              },
              {
                "@type": "Question",
                name: "Schengen vizesi için evraklar herkes için aynı mı?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Çalışan, öğrenci, emekli veya şirket sahibi olmanıza göre evrak listesi ve destekleyici belgeler değişebilir.",
                },
              },
              {
                "@type": "Question",
                name: "Randevu oluşturmadan önce ne hazırlamalıyım?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pasaport bilgileri, seyahat tarihleri, çalışma/öğrencilik durumu ve varsa önceki vize geçmişinizle ilgili temel bilgileri hazırlamanız yeterlidir.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
