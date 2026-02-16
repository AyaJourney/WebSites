import Head from "next/head";
import Link from "next/link";

export default function IzlandaVize() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "İzlanda Vize Rehberi 2026",
    description:
      "İzlanda Schengen vizesi nasıl alınır? Evrak listesi, randevu süreci, vize ücreti ve ret riskleri hakkında 2026 güncel rehber.",
    author: {
      "@type": "Organization",
      name: "Aya Journey"
    },
    datePublished: "2026-02-16"
  };

  return (
    <>
      <Head>
        <title>İzlanda Vize 2026 | Schengen Başvuru Rehberi</title>

        <meta
          name="description"
          content="İzlanda Schengen vizesi nasıl alınır? İzlanda turistik vize başvuru süreci, evrak listesi, randevu alma ve ret nedenleri hakkında detaylı rehber."
        />

        <meta
          name="keywords"
          content="izlanda vize, izlanda schengen vizesi, izlanda turistik vize, izlanda vize başvurusu"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/izlanda-vize"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="min-h-screen bg-zinc-50 font-sans text-slate-900">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">

            <p className="text-sm text-blue-600 font-semibold mb-2">
              İzlanda Schengen Vizesi
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              İzlanda Vize Başvurusu Nasıl Yapılır?
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
              İzlanda, Schengen bölgesinde yer alır ve kısa süreli turistik,
              ticari veya aile ziyareti amaçlı seyahatler için Schengen
              vizesi talep eder. Başvuru süreci doğru planlanmadığında
              ret riski artabilir.
            </p>

          </div>
        </section>

        {/* GENEL BİLGİ */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-6">
              İzlanda Vizesi Kaç Günde Çıkar?
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              İzlanda vize başvuruları genellikle 15 iş günü içinde sonuçlanır.
              Ancak yoğun dönemlerde bu süre 3–4 haftaya kadar uzayabilir.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Seyahatten en az 1 ay önce başvuru yapılması önerilir.
            </p>

          </div>
        </section>

        {/* KİMLER VİZE ALMALI */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-slate-900 text-white p-10 rounded-2xl">

            <h2 className="text-3xl font-bold mb-6">
              İzlanda Vizesi Kimler İçin Gerekli?
            </h2>

            <ul className="space-y-4 text-slate-300 leading-relaxed">
              <li>• Bordo pasaport sahipleri</li>
              <li>• Turistik seyahat planlayanlar</li>
              <li>• Ticari veya fuar katılımı yapacak kişiler</li>
              <li>• Aile ziyareti yapacak başvuru sahipleri</li>
            </ul>

          </div>
        </section>

        {/* EN SIK HATALAR */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-6">
              İzlanda Vizesinde En Sık Yapılan Hatalar
            </h2>

            <ul className="space-y-4 text-slate-700 leading-relaxed">
              <li>• Yetersiz finansal bakiye göstermek</li>
              <li>• Seyahat planını net sunmamak</li>
              <li>• Konaklama ve uçuş rezervasyonunda tutarsızlık</li>
              <li>• Eksik veya hatalı evrak teslimi</li>
            </ul>

          </div>
        </section>

        {/* SİLO LİNKLER */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-2xl font-bold mb-6">
              İzlanda Vize Süreci Aşamaları
            </h2>

            <div className="flex flex-wrap gap-6 text-sm font-semibold">
              <Link href="/izlanda-vize-evraklari" className="hover:underline">
                İzlanda vize evrakları →
              </Link>

              <Link href="/izlanda-vize-randevusu" className="hover:underline">
                İzlanda vize randevusu →
              </Link>

              <Link href="/izlanda-vize-reddi" className="hover:underline">
                İzlanda vize reddi →
              </Link>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="bg-blue-600 text-white rounded-2xl p-12 text-center shadow-xl">

            <h2 className="text-3xl font-bold mb-6">
              İzlanda Vize Başvurunuzu Güçlendirelim
            </h2>

            <p className="max-w-2xl mx-auto mb-8 text-blue-100">
              Finansal analiz, evrak kontrolü ve doğru başvuru stratejisi ile
              ret riskinizi azaltalım.
            </p>

            <a
              href="https://wa.me/905302199056?text=Merhaba%2C%20Izlanda%20vize%20basvurusu%20icin%20destek%20almak%20istiyorum."
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition"
            >
              İzlanda Vize Danışmanlığı
            </a>

          </div>
        </section>

      </main>
    </>
  );
}
