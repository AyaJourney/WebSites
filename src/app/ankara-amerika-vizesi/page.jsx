// app/ankara-amerika-vizesi/page.jsx
import React from "react";

export const metadata = {
  title: "Amerika Vize Ankara | ABD Vize Danışmanlık Ankara",
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
    title: "Amerika Vize Ankara | ABD Vize Danışmanlık Ankara",
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
    <>
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

<main className="min-h-screen bg-zinc-50">

  {/* HERO */}
  <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-14 pb-10">
    <div className="bg-white border border-slate-200/70 rounded-2xl shadow-sm p-7 sm:p-10">

      <p className="text-sm text-slate-500">
        Ankara • ABD Büyükelçiliği • Amerika Vize Danışmanlık
      </p>

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
        Amerika Vize Ankara | Amerika Vize Danışmanlık Hizmeti
      </h1>

      <p className="text-slate-600 mt-4 leading-relaxed max-w-3xl">
        <strong>Amerika vize Ankara</strong> başvurusu yapmak isteyenler için
        profesyonel <strong>Amerika vize danışmanlık</strong> hizmeti sunuyoruz.
        Ankara’dan Amerika vizesi (B1/B2) başvuru sürecinde DS-160 formu,
        randevu planlaması, evrak hazırlığı ve mülakat stratejisi konusunda
        uzman desteği sağlıyoruz.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href="/randevu"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
        >
          Ankara Amerika Vize Randevusu Oluştur
        </a>
        <a
          href="/iletisim"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 transition"
        >
          Amerika Vize Danışmanlık Bilgisi Al
        </a>
      </div>

    </div>
  </section>

  {/* İÇERİK */}
  <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-12">
    <div className="bg-white border border-slate-200/70 rounded-2xl shadow-sm p-7 sm:p-10 space-y-10">

      {/* NASIL YAPILIR */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Amerika Vize Ankara Başvurusu Nasıl Yapılır?
        </h2>

        <p className="text-slate-600 mt-3">
          Amerika vize Ankara başvuruları Ankara ABD Büyükelçiliği üzerinden
          yürütülür. Süreç; DS-160 formunun doldurulması, vize ücretinin
          yatırılması, randevu alınması ve mülakat aşamalarından oluşur.
          Ankara’dan yapılan başvurularda doğru evrak hazırlığı ve tutarlı
          mülakat yanıtları büyük önem taşır.
        </p>
      </div>

      {/* EVRAKLAR */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Ankara Amerika Vizesi İçin Gerekli Evraklar
        </h2>

        <p className="text-slate-600 mt-3">
          Amerika vize danışmanlık sürecinde en sık yapılan hata eksik veya
          tutarsız evrak sunmaktır. Ankara Amerika vizesi için genel olarak
          pasaport, DS-160 onay sayfası, banka hesap dökümü ve destekleyici
          belgeler gereklidir.
        </p>

        <a
          href="/amerika-vize-evraklari"
          className="inline-block mt-3 font-semibold text-slate-900 hover:underline"
        >
          Amerika vize evrakları tam listesini inceleyin →
        </a>
      </div>

      {/* MÜLAKAT */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Amerika Vize Mülakatı Ankara’da Nasıl Geçer?
        </h2>

        <p className="text-slate-600 mt-3">
          Amerika vizesi mülakatı Ankara’da yüz yüze gerçekleştirilir.
          Konsolosluk görevlisi başvuru sahibinin seyahat amacını,
          finansal durumunu ve Türkiye’ye geri dönüş niyetini değerlendirir.
          Profesyonel Amerika vize danışmanlık desteği, mülakatta
          doğru strateji belirlemenizi sağlar.
        </p>

        <a
          href="/amerika-vize-mulakat-sorulari"
          className="inline-block mt-3 font-semibold text-slate-900 hover:underline"
        >
          Amerika vize mülakat soruları →
        </a>
      </div>

      {/* DANIŞMANLIK */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Amerika Vize Danışmanlık Ankara Hizmeti
        </h2>

        <p className="text-slate-600 mt-3">
          Aya Journey olarak Ankara’da Amerika vize danışmanlık hizmeti
          sunuyoruz. Başvuru stratejisi oluşturma, evrak kontrolü,
          DS-160 form desteği ve mülakat hazırlığı süreçlerinde
          adım adım rehberlik sağlıyoruz.
        </p>

        <a
          href="/aya-journey-yorumlari"
          className="inline-block mt-3 font-semibold text-slate-900 hover:underline"
        >
          Ankara Amerika vizesi alan müşterilerimizin yorumları →
        </a>
      </div>

    </div>
  </section>

  {/* CTA */}
  <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-16">
    <div className="bg-slate-900 rounded-2xl p-7 sm:p-10 text-white">
      <h2 className="text-2xl font-bold">
        Amerika Vize Ankara Sürecinizi Güvenle Yönetin
      </h2>

      <p className="text-slate-300 mt-3 max-w-2xl">
        Ankara Amerika vizesi başvurunuzda hata riskini azaltmak için
        profesyonel Amerika vize danışmanlık desteği alın.
        Süreci planlı ve şeffaf şekilde birlikte yürütelim.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href="/randevu"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white text-slate-900 hover:bg-slate-100 transition"
        >
          Ankara Amerika Vize Randevusu Al
        </a>
        <a
          href="/iletisim"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-white/40 hover:bg-white/10 transition"
        >
          Danışmanlık Talep Et
        </a>
      </div>
    </div>
  </section>

</main>



    </>

  );
}
