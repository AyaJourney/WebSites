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

<>
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


<main className="min-h-screen bg-zinc-50">
  {/* Hero */}
  <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-14 pb-10">
    <div className="bg-white border border-slate-200/70 rounded-2xl shadow-sm p-7 sm:p-10">
      <p className="text-sm text-slate-500">Ankara • Vize Danışmanlığı</p>

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
        Ankara Vize Danışmanlığı
      </h1>

      <p className="text-slate-600 mt-4 leading-relaxed max-w-2xl">
        Ankara’dan vize başvurusu yapmak isteyenler için Schengen, Amerika ve
        İngiltere vizelerinde evrak hazırlığı, randevu planlama ve başvuru
        sürecinin doğru yönetimi konusunda profesyonel danışmanlık sunuyoruz.
      </p>

      {/* 🔥 SEO ANA H2 */}
      <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mt-6">
        Ankara Vize Başvurusu Nasıl Yapılır?
      </h2>
      <p className="text-slate-600 mt-2 max-w-3xl">
        Ankara vize başvurusu süreci; vize türünün belirlenmesi, evrakların
        eksiksiz hazırlanması, randevu alınması ve başvurunun takibi
        adımlarından oluşur. Ankara merkezli vize danışmanlığı hizmeti,
        başvurunun doğru ve güvenli şekilde ilerlemesine yardımcı olur.
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

      {/* Avantajlar */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-slate-200/70 p-4 bg-slate-50">
          <p className="text-sm text-slate-500">Hizmet</p>
          <p className="font-semibold text-slate-900 mt-1">Evrak Kontrolü</p>
          <p className="text-sm text-slate-600 mt-1">
            Ankara vize başvurunuz için evraklarınızı eksik ve risk açısından
            detaylı şekilde kontrol ederiz.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200/70 p-4 bg-slate-50">
          <p className="text-sm text-slate-500">Hizmet</p>
          <p className="font-semibold text-slate-900 mt-1">Randevu Planlama</p>
          <p className="text-sm text-slate-600 mt-1">
            Ankara’daki başvuru merkezleri için uygun randevu planlaması ve
            süreç takibi sağlarız.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200/70 p-4 bg-slate-50">
          <p className="text-sm text-slate-500">Hizmet</p>
          <p className="font-semibold text-slate-900 mt-1">
            Başvuru Rehberliği
          </p>
          <p className="text-sm text-slate-600 mt-1">
            Form doldurma, dilekçe ve seyahat planı gibi adımlarda birebir
            rehberlik sunarız.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Ülke/Kategori Kartları */}
  <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-12">
    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
      Ankara’dan En Sık Yapılan Vize Başvuruları
    </h2>
    <p className="text-slate-600 mt-2">
      Ankara vize danışmanlığı kapsamında en sık başvurulan vize türleri
      aşağıda yer almaktadır.
    </p>

    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <a href="/ankara-schengen-vizesi" className="group rounded-2xl bg-white border border-slate-200/70 p-6 shadow-sm hover:shadow-md transition">
        <p className="text-sm text-slate-500">Schengen</p>
        <p className="text-lg font-semibold text-slate-900 mt-1">
          Ankara Schengen Vizesi
        </p>
        <p className="text-sm text-slate-600 mt-2">
          Turistik ve kısa süreli Schengen vize başvuruları için detaylı rehber.
        </p>
        <span className="text-sm font-semibold text-slate-900 mt-4 inline-block group-hover:underline">
          Detayları Gör →
        </span>
      </a>

      <a href="/ankara-amerika-vizesi" className="group rounded-2xl bg-white border border-slate-200/70 p-6 shadow-sm hover:shadow-md transition">
        <p className="text-sm text-slate-500">Amerika</p>
        <p className="text-lg font-semibold text-slate-900 mt-1">
          Ankara Amerika Vizesi
        </p>
        <p className="text-sm text-slate-600 mt-2">
          B1/B2 Amerika vizesi başvurularında süreç ve evrak bilgileri.
        </p>
        <span className="text-sm font-semibold text-slate-900 mt-4 inline-block group-hover:underline">
          Detayları Gör →
        </span>
      </a>

      <a href="/vize-sirketleri-ankara" className="group rounded-2xl bg-white border border-slate-200/70 p-6 shadow-sm hover:shadow-md transition">
        <p className="text-sm text-slate-500">Karşılaştırma</p>
        <p className="text-lg font-semibold text-slate-900 mt-1">
          Ankara Vize Şirketleri
        </p>
        <p className="text-sm text-slate-600 mt-2">
          Ankara’da vize danışmanlığı hizmeti sunan firmalar hakkında rehber.
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
        Ankara Vize Danışmanlığı Hakkında Sık Sorulan Sorular
      </h2>

      <div className="mt-6 space-y-5">
        <div className="border-b border-slate-200 pb-4">
          <h3 className="font-semibold text-slate-900">
            Ankara vize danışmanlığı zorunlu mu?
          </h3>
          <p className="text-slate-600 mt-2">
            Zorunlu değildir ancak profesyonel vize danışmanlığı, başvurunun
            doğru ve eksiksiz yapılmasına yardımcı olur.
          </p>
        </div>

        <div className="border-b border-slate-200 pb-4">
          <h3 className="font-semibold text-slate-900">
            Ankara’dan vize başvurusu kaç günde sonuçlanır?
          </h3>
          <p className="text-slate-600 mt-2">
            Sonuçlanma süresi vize türüne ve konsolosluk yoğunluğuna göre
            değişiklik gösterebilir.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">
            Ankara vize randevusu almadan önce ne hazırlanmalı?
          </h3>
          <p className="text-slate-600 mt-2">
            Pasaport bilgileri, seyahat tarihleri ve temel kişisel bilgiler
            süreci başlatmak için yeterlidir.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Local SEO Note */}
  <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-10">
    <p className="text-xs text-slate-500">
      Not: İçerikler bilgilendirme amaçlıdır. Ankara vize başvurularında evrak
      ve süreçler güncel konsolosluk kurallarına göre değişebilir.
    </p>
  </section>
</main>


</>



  );
}
