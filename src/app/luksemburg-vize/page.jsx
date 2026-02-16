import Head from "next/head";
import Link from "next/link";

export default function LuksemburgVize() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Lüksemburg Vize Rehberi 2026",
    description:
      "Lüksemburg Schengen vizesi nasıl alınır? Evrak listesi, randevu süreci, ret nedenleri ve başvuru stratejileri.",
    author: {
      "@type": "Organization",
      name: "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Lüksemburg Vize 2026 | Schengen Başvuru Rehberi</title>

        <meta
          name="description"
          content="Lüksemburg vizesi nasıl alınır? 2026 güncel Schengen başvuru rehberi, evrak listesi, randevu süreci ve ret riskleri."
        />

        <meta
          name="keywords"
          content="lüksemburg vize, lüksemburg schengen vizesi, lüksemburg vize başvurusu, lüksemburg turist vizesi"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/luksemburg-vize"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-200">
            Lüksemburg Schengen Vizesi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Lüksemburg Vize Başvuru Rehberi
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Lüksemburg Schengen vizesi almak için gerekli tüm adımlar,
            evrak listesi, randevu süreci ve ret riskleri bu rehberde.
          </p>
        </header>

        {/* GENEL BİLGİ */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            Lüksemburg Vizesi Nedir?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Lüksemburg, Schengen bölgesine dahildir.
            Alınan kısa süreli C tipi vize ile diğer Schengen ülkelerine
            de seyahat edilebilir.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Başvuru, Türkiye’de genellikle VFS Global veya
            Lüksemburg’u temsil eden konsolosluklar üzerinden yapılır.
          </p>
        </section>

        {/* KİMLER BAŞVURMALI */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Kimler Lüksemburg Vizesi Almalı?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4">
                Turistik Seyahat
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Lüksemburg’da turistik gezi planlayanlar.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4">
                Ticari Ziyaret
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                İş toplantısı, fuar veya şirket ziyareti için.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4">
                Aile / Arkadaş Ziyareti
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Lüksemburg’da yaşayan yakınlarını ziyaret edecek kişiler.
              </p>
            </div>

          </div>
        </section>

        {/* BAŞVURU SÜRECİ */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            Lüksemburg Vize Süreci
          </h2>

          <ol className="space-y-4 text-slate-200 max-w-3xl mx-auto text-sm">
            <li>1. Gerekli evrakların hazırlanması</li>
            <li>2. Online randevu alınması</li>
            <li>3. Biyometrik veri kaydı</li>
            <li>4. Dosyanın konsolosluk değerlendirmesi</li>
          </ol>
        </section>

        {/* RET RİSKLERİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8 text-center">
            Lüksemburg Vize Reddi Riskleri
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-red-50 p-8 rounded-3xl border border-red-200">
              <h3 className="font-bold text-red-700 mb-4">
                Finansal Yetersizlik
              </h3>
              <p className="text-sm text-slate-600">
                Banka bakiyesi ve gelir belgeleri yetersiz bulunabilir.
              </p>
            </div>

            <div className="bg-red-50 p-8 rounded-3xl border border-red-200">
              <h3 className="font-bold text-red-700 mb-4">
                Geri Dönüş Şüphesi
              </h3>
              <p className="text-sm text-slate-600">
                Türkiye bağları zayıf görülen başvurular reddedilebilir.
              </p>
            </div>

          </div>
        </section>

        {/* SİLO LİNKLER */}
        <section className="mb-20 text-center space-y-4 font-bold">

          <Link href="/luksemburg-vize-evraklari" className="block hover:underline text-blue-700">
            Lüksemburg Vize Evrakları →
          </Link>

          <Link href="/luksemburg-vize-randevusu" className="block hover:underline text-blue-700">
            Lüksemburg Vize Randevusu →
          </Link>

          <Link href="/luksemburg-vize-reddi" className="block hover:underline text-blue-700">
            Lüksemburg Vize Reddi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Lüksemburg Vizenizi Güçlü Dosya ile Alın
          </h2>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Profesyonel evrak kontrolü ve stratejik başvuru planlaması ile
            ret riskinizi minimuma indirelim.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Luksemburg%20vize%20basvurusu%20icin%20destek%20istiyorum."
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Başvuru Planı Oluştur
          </a>

        </section>

      </main>
    </>
  );
}
