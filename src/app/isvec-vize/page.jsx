import Head from "next/head";
import Link from "next/link";

export default function IsvecVizePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "İsveç Vize Rehberi 2026 | Schengen Başvuru Süreci",
    "description":
      "İsveç Schengen vizesi (C tipi) için 2026 güncel rehber: evraklar, randevu süreci, finansal şartlar, ret nedenleri ve başvuru stratejisi.",
    "author": {
      "@type": "Organization",
      "name": "Aya Journey"
    },
    datePublished: "2026-02-13",
    dateModified: "2026-02-13",
    mainEntityOfPage: "https://ayajourney.com/isvec-vize"
  };

  return (
    <>
      <Head>
        <title>İsveç Vize 2026 | Schengen Başvuru Rehberi (Randevu + Evrak)</title>

        <meta
          name="description"
          content="İsveç Schengen vizesi nasıl alınır? Evrak listesi, randevu süreci, finansal şartlar, ret nedenleri ve 2026 güncel başvuru rehberi."
        />

        <meta
          name="keywords"
          content="isveç vize, isveç schengen vizesi, isveç vize evrakları, isveç vize randevusu, isveç vize reddi"
        />

        <meta property="og:title" content="İsveç Vize 2026 | Schengen Başvuru Rehberi" />
        <meta
          property="og:description"
          content="İsveç Schengen vizesi için evraklar, randevu, ret nedenleri ve başvuru stratejisi."
        />
        <meta property="og:type" content="article" />

        <link rel="canonical" href="https://ayajourney.com/isvec-vize" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="min-h-screen bg-zinc-50 text-slate-900">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
          <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm relative overflow-hidden">

            <p className="text-sm text-blue-700 font-semibold mb-2">
              İsveç Krallığı • Schengen Bölgesi • 2026 Güncel
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              İsveç Vize Rehberi: Schengen (C Tipi) Başvuru Süreci
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
              İsveç’e turistik, ticari veya aile ziyareti amacıyla seyahat etmek için
              <strong> Schengen vizesi (C tipi)</strong> başvurusu yapılır.
              İsveç, dosya tutarlılığına ve finansal şeffaflığa önem veren ülkelerden biridir.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/isvec-vize-evraklari"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                İsveç Evrak Listesi →
              </Link>

              <Link
                href="/isvec-vize-randevusu"
                className="border border-slate-300 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition"
              >
                Randevu Süreci →
              </Link>

              <Link
                href="/isvec-vize-reddi"
                className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold border border-blue-200 hover:bg-blue-50 transition"
              >
                Ret Nedenleri →
              </Link>
            </div>

          </div>
        </section>

        {/* KİMLER BAŞVURABİLİR */}
        <section className="max-w-6xl mx-auto px-6 pb-14">
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Turistik Vize</h2>
              <p className="text-slate-600 leading-relaxed">
                Stockholm, Göteborg veya Malmö seyahati için kısa süreli (90 güne kadar) Schengen vizesi.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Ticari Vize</h2>
              <p className="text-slate-600 leading-relaxed">
                İş görüşmesi, fuar, toplantı veya şirket daveti ile yapılan başvurular.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Aile / Arkadaş Ziyareti</h2>
              <p className="text-slate-600 leading-relaxed">
                İsveç’te yaşayan yakınınızdan davetiye ile yapılan başvurular.
              </p>
            </div>

          </div>
        </section>

        {/* BAŞVURU SÜRECİ */}
        <section className="max-w-6xl mx-auto px-6 pb-14">
          <div className="bg-white border border-slate-200 rounded-2xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              İsveç Vize Başvuru Süreci
            </h2>

            <ol className="space-y-5 text-slate-700 leading-relaxed">
              <li>1️⃣ Doğru başvuru kategorisi seçilir.</li>
              <li>2️⃣ Evraklar çalışma durumuna göre hazırlanır.</li>
              <li>3️⃣ Randevu alınır.</li>
              <li>4️⃣ Evrak teslimi ve biyometri yapılır.</li>
              <li>5️⃣ Değerlendirme sonrası pasaport teslim alınır.</li>
            </ol>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/isvec-vize-evraklari"
                className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition"
              >
                Evrakları İncele →
              </Link>

              <Link
                href="/isvec-vize-reddi"
                className="border border-slate-300 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition"
              >
                Ret Sebepleri →
              </Link>
            </div>

          </div>
        </section>

        {/* FİNANSAL PROFİL */}
        <section className="max-w-6xl mx-auto px-6 pb-14">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10">

            <h2 className="text-3xl font-bold mb-6">
              İsveç Vizesinde Finansal Profil
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              İsveç Konsolosluğu finansal istikrarı önemser. Düzenli gelir,
              seyahat süresine uygun bakiye ve mantıklı harcama planı kritik rol oynar.
            </p>

            <ul className="space-y-3 text-slate-700">
              <li>• Son 3 ay banka dökümü</li>
              <li>• Düzenli gelir kaynağı</li>
              <li>• Seyahat planına uygun bütçe</li>
              <li>• Türkiye’ye dönüş bağları</li>
            </ul>

          </div>
        </section>

        {/* SSS */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-white border border-slate-200 rounded-2xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Sık Sorulan Sorular
            </h2>

            <details className="mb-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <summary className="font-semibold cursor-pointer">
                İsveç vizesi kaç günde çıkar?
              </summary>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Yoğunluğa göre değişir. Tatil dönemlerinde süre uzayabilir.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <summary className="font-semibold cursor-pointer">
                İlk Schengen başvurum İsveç olabilir mi?
              </summary>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Evet olabilir. Ancak dosya tutarlılığı ve finansal şeffaflık önemlidir.
              </p>
            </details>

            <div className="mt-10 border-t border-slate-200 pt-6 flex flex-wrap gap-5 text-sm font-semibold">
              <Link href="/isvec-vize-evraklari" className="hover:underline">
                İsveç vize evrakları →
              </Link>
              <Link href="/isvec-vize-randevusu" className="hover:underline">
                İsveç vize randevusu →
              </Link>
              <Link href="/isvec-vize-reddi" className="hover:underline">
                İsveç vize reddi →
              </Link>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="bg-blue-600 text-white rounded-2xl p-12 text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-6">
              İsveç Dosyanızı Profesyonel Planlayalım
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-blue-50">
              Evrak kontrolü, randevu planlaması ve ret risk analizi ile süreci güvenli ilerletelim.
            </p>

            <a
              href="https://wa.me/905302199056?text=Merhaba%2C%20Isvec%20vize%20basvurum%20icin%20danismanlik%20almak%20istiyorum.%20Süreci%20birlikte%20planlayabilir%20miyiz%3F"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition"
            >
              WhatsApp’tan Yaz
            </a>
          </div>
        </section>

      </main>
    </>
  );
}
