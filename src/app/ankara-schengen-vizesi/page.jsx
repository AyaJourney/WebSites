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
    
<main className="min-h-screen bg-zinc-50">

  {/* HERO */}
  <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-16 pb-12">
    <div className="bg-white border border-slate-200/70 rounded-3xl shadow-sm p-8 sm:p-12">

      <p className="text-sm text-slate-500 uppercase tracking-widest">
        Ankara • Schengen Bölgesi Vize Merkezi
      </p>

      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-4">
        Ankara Schengen Vize Danışmanlığı
      </h1>

      <p className="text-slate-600 mt-6 leading-relaxed max-w-3xl text-lg">
        <strong>Ankara Schengen vizesi</strong> başvurularında evrak hazırlığı,
        randevu alma ve dosya kontrol süreçlerini profesyonel şekilde yönetiyoruz.
        VFS Global, iDATA ve diğer başvuru merkezleri için stratejik danışmanlık sunuyoruz.
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


  {/* SEO BLOĞU */}
  <section className="max-w-5xl mx-auto px-4 sm:px-8 pb-16">
    <div className="bg-white border border-slate-200/70 rounded-3xl shadow-sm p-8 sm:p-12 space-y-12">

      {/* NEDİR */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900">
          Schengen Vizesi Nedir?
        </h2>
        <p className="text-slate-600 mt-4 leading-relaxed">
          Schengen vizesi; Avrupa’daki 27 Schengen ülkesine kısa süreli
          turistik, ticari veya aile ziyareti amacıyla giriş yapmanızı sağlar.
          Ankara Schengen vize başvuruları ilgili ülkenin yetkilendirdiği
          vize başvuru merkezleri üzerinden gerçekleştirilir.
        </p>
      </div>


      {/* ANKARA ODAKLI */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900">
          Ankara Schengen Vizesi Başvurusu Nasıl Yapılır?
        </h2>

        <p className="text-slate-600 mt-4 leading-relaxed">
          Ankara’da Schengen vizesi başvurusu yaparken doğru ülke seçimi,
          eksiksiz evrak hazırlığı ve randevu planlaması kritik öneme sahiptir.
          Başvurular genellikle Ankara’daki <strong>VFS Global</strong>,
          <strong> iDATA</strong> veya ilgili konsolosluklar üzerinden yapılır.
        </p>

        <p className="text-slate-600 mt-4 leading-relaxed">
          Hatalı başvuru, eksik evrak veya yanlış seyahat planı
          Schengen vize reddine neden olabilir.
        </p>

        <a
          href="/schengen-vize-adimlari"
          className="inline-block mt-4 font-semibold text-slate-900 hover:underline"
        >
          Ankara Schengen başvuru adımlarını inceleyin →
        </a>
      </div>


      {/* EVRAKLAR */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900">
          Ankara Schengen Vizesi İçin Gerekli Evraklar
        </h2>

        <ul className="mt-6 grid md:grid-cols-2 gap-4 text-slate-600">
          <li>• En az 6 ay geçerli pasaport</li>
          <li>• Biyometrik fotoğraf</li>
          <li>• Seyahat sağlık sigortası (30.000€ teminat)</li>
          <li>• Güncel banka hesap dökümü</li>
          <li>• Çalışma / gelir belgeleri</li>
          <li>• Uçak ve konaklama rezervasyonu</li>
        </ul>

        <a
          href="/schengen-vize-evraklari"
          className="inline-block mt-4 font-semibold text-slate-900 hover:underline"
        >
          Detaylı Schengen evrak listesi →
        </a>
      </div>


      {/* RED BLOĞU */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900">
          Ankara Schengen Vize Reddinin En Sık Nedenleri
        </h2>

        <ul className="mt-6 space-y-3 text-slate-600">
          <li>• Yetersiz finansal gösterim</li>
          <li>• Seyahat planının inandırıcı olmaması</li>
          <li>• Türkiye’ye geri dönüş bağlarının zayıf görünmesi</li>
          <li>• Yanlış ülke üzerinden başvuru yapılması</li>
        </ul>

        <p className="mt-6 text-slate-700 font-medium">
          Aya Journey Ankara Schengen vize danışmanlığı,
          bu riskleri minimize edecek şekilde dosyanızı yapılandırır.
        </p>
      </div>


      {/* FAQ SEO BOOST */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Ankara Schengen Vizesi Hakkında Sık Sorulan Sorular
        </h2>

        <div className="mt-10 space-y-8">

          <div>
            <h3 className="font-semibold text-lg">
              Ankara Schengen randevuları ne kadar sürede verilir?
            </h3>
            <p className="text-slate-600 mt-2">
              Randevu süreleri dönemsel yoğunluğa göre değişir.
              Yaz aylarında ve bayram öncesi tarihler hızla dolmaktadır.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Ankara’da en kolay Schengen veren ülke hangisi?
            </h3>
            <p className="text-slate-600 mt-2">
              Başvuru sahibinin profiline göre değişir.
              Doğru ülke seçimi vize onay ihtimalini ciddi şekilde etkiler.
            </p>
          </div>

        </div>
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
        Ankara Schengen vize başvurunuzu riske atmayın.
        Evrak kontrolü, ülke seçimi ve randevu süreci için uzman desteği alın.
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
