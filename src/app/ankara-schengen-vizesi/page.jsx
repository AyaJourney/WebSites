// app/ankara-schengen-vizesi/page.jsx
import React from "react";

export const metadata = {
  title: "Ankara Schengen Vizesi | Danışmanlık ve Başvuru Rehberi",
  description:
    "Ankara Schengen vizesi danışmanlığı: Turistik ve kısa süreli Schengen vize başvurularında evrak, randevu ve başvuru süreci için profesyonel destek.",
  keywords: [
    "ankara schengen vizesi",
    "schengen vizesi ankara",
    "ankara schengen vize danışmanlığı",
    "ankara schengen vize evrakları",
    "ankara schengen vize randevu",
  ],
  alternates: {
    canonical: "/ankara-schengen-vizesi",
  },
  openGraph: {
    title: "Ankara Schengen Vizesi | Danışmanlık ve Başvuru Rehberi",
    description:
      "Ankara’dan Schengen vizesi başvurusu yapmak isteyenler için evrak, randevu ve süreç rehberi.",
    url: "/ankara-schengen-vizesi",
    type: "website",
    locale: "tr_TR",
    siteName: "Aya Journey",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankara Schengen Vizesi | Danışmanlık ve Başvuru Rehberi",
    description:
      "Ankara Schengen vizesi başvurularında profesyonel danışmanlık desteği.",
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
            Ankara • Schengen Bölgesi
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            Ankara Schengen Vizesi Danışmanlığı
          </h1>

          <p className="text-slate-600 mt-4 leading-relaxed max-w-2xl">
            Ankara’dan Schengen vizesi başvurusu yapmak isteyenler için turistik
            ve kısa süreli seyahatlerde evrak hazırlığı, randevu planlama ve
            başvuru sürecinde profesyonel danışmanlık sunuyoruz.
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
              Schengen Vizesi Nedir?
            </h2>
            <p className="text-slate-600 mt-3">
              Schengen vizesi; Avrupa Birliği’ne bağlı Schengen ülkelerine
              turistik, ticari veya kısa süreli ziyaretler için verilen vizedir.
              Başvurular Ankara’daki ilgili başvuru merkezleri üzerinden
              yapılır.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Ankara Schengen Vizesi İçin Gerekli Evraklar
            </h2>
            <p className="text-slate-600 mt-3">
              Evraklar başvuru sahibinin çalışma durumu ve seyahat amacına göre
              değişiklik gösterebilir. Pasaport, biyometrik fotoğraf, seyahat
              sağlık sigortası, banka dökümü ve konaklama belgeleri temel
              evraklar arasındadır.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Ankara’dan Schengen Vizesi Başvuru Süreci
            </h2>
            <p className="text-slate-600 mt-3">
              Schengen vizesi başvuruları Ankara’daki VFS Global veya ilgili
              başvuru merkezleri aracılığıyla yapılır. Randevu alınması,
              evrakların eksiksiz hazırlanması ve biyometri işlemleri sürecin
              önemli adımlarıdır.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Aya Journey ile Ankara Schengen Vizesi
            </h2>
            <p className="text-slate-600 mt-3">
              Aya Journey olarak Ankara Schengen vizesi başvurularında evrak
              kontrolü, başvuru planlaması ve randevu süreci yönetimi konusunda
              danışmanlık sağlıyoruz. Amacımız süreci doğru ve şeffaf şekilde
              ilerletmenize yardımcı olmaktır.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-16">
        <div className="bg-slate-900 rounded-2xl p-7 sm:p-10 text-white">
          <h2 className="text-2xl font-bold">
            Ankara’dan Schengen Vizesi İçin Danışmanlık Alın
          </h2>
          <p className="text-slate-300 mt-3 max-w-2xl">
            Evraklarınızı doğru şekilde hazırlamak ve başvuru sürecini güvenle
            ilerletmek için uzman vize danışmanlarımızla iletişime geçin.
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
                name: "Ankara Schengen vizesi başvurusu nereden yapılır?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Schengen vizesi başvuruları Ankara’daki VFS Global veya ilgili ülkenin yetkili başvuru merkezleri üzerinden yapılır.",
                },
              },
              {
                "@type": "Question",
                name: "Schengen vizesi Ankara’dan kaç günde çıkar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Başvuru sonuçlanma süresi konsolosluk yoğunluğuna göre değişmekle birlikte genellikle birkaç hafta içerisinde sonuçlanır.",
                },
              },
              {
                "@type": "Question",
                name: "Schengen vizesi için evraklar herkese aynı mı?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Çalışan, öğrenci, emekli veya şirket sahibi olmanıza göre evrak listesi ve destekleyici belgeler değişiklik gösterebilir.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
