// app/ankara-amerika-vizesi/page.jsx
import React from "react";

export const metadata = {
  title: "Ankara Amerika Vizesi | B1/B2 Vize Danışmanlığı",
  description:
    "Ankara Amerika vizesi danışmanlığı: B1/B2 turist ve ziyaret vizesi başvurularında evrak hazırlığı, randevu ve mülakat süreci için profesyonel destek.",
  keywords: [
    "ankara amerika vizesi",
    "amerika vizesi ankara",
    "b1 b2 vize ankara",
    "amerika vize danışmanlığı",
    "amerika vize randevu ankara",
  ],
  alternates: {
    canonical: "/ankara-amerika-vizesi",
  },
  openGraph: {
    title: "Ankara Amerika Vizesi | B1/B2 Vize Danışmanlığı",
    description:
      "Ankara’dan Amerika vizesi başvurusu yapmak isteyenler için evrak, randevu ve mülakat rehberi.",
    url: "/ankara-amerika-vizesi",
    type: "website",
    locale: "tr_TR",
    siteName: "Aya Journey",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankara Amerika Vizesi | B1/B2 Vize Danışmanlığı",
    description:
      "Ankara’dan Amerika vizesi başvurularında profesyonel danışmanlık desteği.",
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
          <p className="text-sm text-slate-500">
            Ankara • Amerika Birleşik Devletleri
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            Ankara Amerika Vizesi Danışmanlığı
          </h1>

          <p className="text-slate-600 mt-4 leading-relaxed max-w-2xl">
            Ankara’dan Amerika vizesi (B1/B2) başvurusu yapmak isteyenler için
            evrak hazırlığı, randevu planlama ve mülakat sürecinde profesyonel
            danışmanlık sunuyoruz.
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
        </div>
      </section>

      {/* İçerik */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-12">
        <div className="bg-white border border-slate-200/70 rounded-2xl shadow-sm p-7 sm:p-10 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Amerika Vizesi (B1/B2) Nedir?
            </h2>
            <p className="text-slate-600 mt-3">
              B1/B2 Amerika vizesi; turistik, ticari, aile ziyareti ve kısa süreli
              seyahatler için verilen, mülakatlı bir vize türüdür. Başvurular
              Ankara’daki ABD Büyükelçiliği üzerinden gerçekleştirilir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Ankara Amerika Vizesi İçin Gerekli Evraklar
            </h2>
            <p className="text-slate-600 mt-3">
              Evrak listesi başvuru sahibinin durumuna göre değişebilir. Genel
              olarak pasaport, DS-160 formu, banka dökümü, çalışma veya öğrenci
              belgeleri talep edilir. Evraklar mülakatı destekleyici nitelikte
              hazırlanmalıdır.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Amerika Vizesi Mülakat Süreci (Ankara)
            </h2>
            <p className="text-slate-600 mt-3">
              Amerika vizesi mülakatı Ankara ABD Büyükelçiliği’nde yapılır.
              Mülakatta seyahat amacı, maddi durum ve Türkiye’ye geri dönüş
              niyeti değerlendirilir. Mülakata hazırlık süreci başvurunun en
              kritik aşamasıdır.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Aya Journey Ankara Amerika Vizesi Danışmanlığı
            </h2>
            <p className="text-slate-600 mt-3">
              Aya Journey olarak Amerika vizesi başvurularında evrak kontrolü,
              başvuru stratejisi, randevu planlama ve mülakat hazırlığı
              konularında danışmanlık sunuyoruz. Süreci şeffaf ve doğru şekilde
              yönetmenize yardımcı oluruz.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-16">
        <div className="bg-slate-900 rounded-2xl p-7 sm:p-10 text-white">
          <h2 className="text-2xl font-bold">
            Ankara’dan Amerika Vizesi İçin Destek Alın
          </h2>
          <p className="text-slate-300 mt-3 max-w-2xl">
            Başvurunuzu doğru planlamak ve mülakat sürecine hazırlıklı girmek
            için uzman vize danışmanlarımızdan destek alabilirsiniz.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="/randevu"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white text-slate-900 hover:bg-slate-100 transition"
            >
              Hemen Randevu Al
            </a>
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-white/40 hover:bg-white/10 transition"
            >
              Sorunuzu İletin
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Ankara Amerika vizesi başvurusu nereden yapılır?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Amerika vizesi başvuruları Ankara’daki ABD Büyükelçiliği üzerinden, randevu ve mülakat sistemi ile yapılır.",
                },
              },
              {
                "@type": "Question",
                name: "Amerika vizesi mülakatı zor mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mülakat, başvuru sahibinin seyahat amacını ve geri dönüş niyetini net şekilde ifade edebilmesine bağlıdır. Doğru hazırlık süreci büyük önem taşır.",
                },
              },
              {
                "@type": "Question",
                name: "Ankara Amerika vizesi kaç günde sonuçlanır?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mülakat sonrası sonuç çoğu zaman kısa sürede belli olur ancak yoğunluk ve ek inceleme durumlarında süre uzayabilir.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
