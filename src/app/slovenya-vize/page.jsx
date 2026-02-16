import Head from "next/head";
import Link from "next/link";

export default function SlovenyaVize() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Slovenya Vize 2026",
    description:
      "Slovenya Schengen vizesi başvuru rehberi. Gerekli evraklar, randevu süreci ve vize reddi nedenleri.",
    author: {
      "@type": "Organization",
      "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Slovenya Vize 2026 | Schengen Başvuru Rehberi</title>

        <meta
          name="description"
          content="Slovenya Schengen vizesi nasıl alınır? Evrak listesi, randevu süreci ve vize reddi nedenleri. 2026 güncel Slovenya vize rehberi."
        />

        <meta
          name="keywords"
          content="slovenya vize, slovenya schengen vizesi, slovenya vize evrakları, slovenya vize randevusu"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/slovenya-vize"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-emerald-200">
            Slovenya Cumhuriyeti – Schengen Bölgesi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Slovenya Vize Başvuru Rehberi 2026
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Slovenya Schengen vizesi ile Ljubljana, Bled Gölü ve Alp dağlarını keşfedebilirsiniz.
            Başvuru süreci, evrak listesi ve randevu detaylarını adım adım anlattık.
          </p>
        </header>

        {/* VİZE BİLGİLERİ */}
        <section className="grid md:grid-cols-3 gap-10 mb-24">

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <h3 className="font-bold mb-3">Vize Türü</h3>
            <p className="text-sm text-slate-600">
              Kısa süreli Schengen (C Tipi)
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <h3 className="font-bold mb-3">Kalma Süresi</h3>
            <p className="text-sm text-slate-600">
              90 güne kadar
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <h3 className="font-bold mb-3">Sonuçlanma Süresi</h3>
            <p className="text-sm text-slate-600">
              Ortalama 10–15 iş günü
            </p>
          </div>

        </section>

        {/* BAŞVURU SÜRECİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Slovenya Vizesi Nasıl Alınır?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Online form doldurulur.",
              "Randevu alınır.",
              "Evraklar hazırlanır.",
              "Biyometrik işlem yapılır."
            ].map((step, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                <div className="text-2xl font-black text-emerald-600 mb-3">
                  0{i + 1}
                </div>
                <p className="text-sm text-slate-600">{step}</p>
              </div>
            ))}

          </div>
        </section>

        {/* KİMLER BAŞVURUR */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-24 shadow-2xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            Kimler Slovenya Schengen Vizesi Almalı?
          </h2>

          <ul className="space-y-4 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            <li>• Turistik seyahat planlayanlar</li>
            <li>• Ticari toplantı ve fuar katılımcıları</li>
            <li>• Aile/arkadaş ziyareti yapacaklar</li>
            <li>• Slovenya üzerinden diğer Schengen ülkelerine geçiş yapacaklar</li>
          </ul>
        </section>

        {/* SİLO NAV */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/slovenya-vize-evraklari" className="block hover:underline text-blue-600">
            Slovenya Vize Evrakları →
          </Link>

          <Link href="/slovenya-vize-randevusu" className="block hover:underline text-blue-600">
            Slovenya Vize Randevusu →
          </Link>

          <Link href="/slovenya-vize-reddi" className="block hover:underline text-blue-600">
            Slovenya Vize Reddi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-emerald-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Slovenya Vizenizi Birlikte Alalım
          </h2>

          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Dosyanızı doğru hazırlayarak onay ihtimalinizi artırıyoruz.
            Profesyonel destek ile Slovenya Schengen sürecinizi güvenle yönetin.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Slovenya%20vize%20başvurusu%20için%20destek%20istiyorum."
            className="bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Başvuru Desteği Al
          </a>
        </section>

      </main>
    </>
  );
}
