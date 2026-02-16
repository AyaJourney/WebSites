import Head from "next/head";
import Link from "next/link";

export default function LiechtensteinVize() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Liechtenstein Vize Rehberi 2026",
    "description":
      "Liechtenstein Schengen vizesi nasıl alınır? Evrak listesi, başvuru süreci, randevu ve ret nedenleri hakkında güncel rehber.",
    "author": {
      "@type": "Organization",
      "name": "Aya Journey"
    },
    "datePublished": "2026-02-16"
  };

  return (
    <>
      <Head>
        <title>Liechtenstein Vize 2026 | Schengen Başvuru Rehberi</title>

        <meta
          name="description"
          content="Liechtenstein Schengen vizesi nasıl alınır? Başvuru süreci, gerekli evraklar, randevu işlemleri ve ret nedenleri hakkında güncel 2026 rehberi."
        />

        <meta
          name="keywords"
          content="liechtenstein vize, liechtenstein schengen vizesi, liechtenstein vize başvurusu, liechtenstein vize evrakları"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/liechtenstein-vize"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-indigo-200">
            Liechtenstein Schengen Rehberi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Liechtenstein Vize Başvurusu 2026
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Liechtenstein, Schengen bölgesine dahildir ancak Türkiye’de
            doğrudan konsolosluğu bulunmaz. Başvurular genellikle
            İsviçre temsilciliği üzerinden yürütülür.
            İşte başvuru süreci ve dikkat edilmesi gerekenler.
          </p>
        </header>

        {/* SÜREÇ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Liechtenstein Vizesi Nasıl Alınır?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-indigo-600">
                1. Doğru Ülke Seçimi
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Seyahatinizin ana destinasyonu Liechtenstein ise
                başvuru İsviçre üzerinden yapılır.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-indigo-600">
                2. Evrak Hazırlığı
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Schengen standart evraklara ek olarak
                detaylı seyahat planı ve finansal belgeler sunulmalıdır.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-indigo-600">
                3. Randevu & Biyometri
              </h3>
              <p className="text-slate-600 leading-relaxed">
                VFS veya ilgili başvuru merkezi üzerinden
                randevu alınır ve biyometrik işlem yapılır.
              </p>
            </div>

          </div>
        </section>

        {/* ÖNEMLİ BİLGİ */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            Liechtenstein İçin Önemli Bilgi
          </h2>

          <div className="max-w-3xl mx-auto text-slate-300 leading-relaxed space-y-4">
            <p>
              Liechtenstein küçük bir prensliktir ve
              diplomatik temsilciliği bulunmadığından
              vize işlemleri İsviçre tarafından yürütülür.
            </p>

            <p>
              Seyahat planınızda İsviçre daha uzun kalış içeriyorsa,
              başvuruyu İsviçre üzerinden yapmanız gerekir.
            </p>
          </div>
        </section>

        {/* İÇ LİNKLER */}
        <section className="mb-20 text-center space-y-4">

          <Link
            href="/liechtenstein-vize-evraklari"
            className="block text-indigo-600 font-bold hover:underline"
          >
            Liechtenstein Vize Evrakları →
          </Link>

          <Link
            href="/liechtenstein-vize-randevusu"
            className="block text-indigo-600 font-bold hover:underline"
          >
            Liechtenstein Vize Randevusu →
          </Link>

          <Link
            href="/liechtenstein-vize-reddi"
            className="block text-indigo-600 font-bold hover:underline"
          >
            Liechtenstein Vize Reddi →
          </Link>

          <Link
            href="/isvicre-vize"
            className="block text-indigo-600 font-bold hover:underline"
          >
            İsviçre Vize Süreci →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-indigo-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Liechtenstein Vizenizi Profesyonel Yönetin
          </h2>

          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            İsviçre üzerinden yürütülen bu süreçte
            dosyanızın eksiksiz hazırlanması ret riskini azaltır.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Liechtenstein%20vizesi%20icin%20destek%20almak%20istiyorum."
            className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Danışmanlık Al
          </a>
        </section>

      </main>
    </>
  );
}
