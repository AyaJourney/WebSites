import Head from "next/head";
import Link from "next/link";

export default function IsvicreVize() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "İsviçre Vize Rehberi 2026",
    description:
      "İsviçre Schengen vizesi nasıl alınır? Evrak listesi, randevu süreci, ret nedenleri ve 2026 güncel başvuru rehberi.",
    author: {
      "@type": "Organization",
      name: "Aya Journey"
    },
    datePublished: "2026-02-16"
  };

  return (
    <>
      <Head>
        <title>İsviçre Vize 2026 | Schengen Başvuru Rehberi</title>

        <meta
          name="description"
          content="İsviçre vizesi nasıl alınır? Evrak listesi, randevu süreci, başvuru şartları ve ret nedenleri. 2026 güncel İsviçre Schengen vize rehberi."
        />

        <meta
          name="keywords"
          content="isviçre vize, isviçre schengen vizesi, isviçre turist vizesi, isviçre vize başvurusu, isviçre vize evrakları"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/isvicre-vize"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="min-h-screen bg-zinc-50 text-slate-900">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">

            <p className="text-sm text-red-600 font-semibold mb-2">
              İsviçre Konfederasyonu Schengen Vizesi
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              İsviçre Vize Başvurusu 2026 Rehberi
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
              İsviçre Schengen vizesi almak isteyenler için adım adım başvuru süreci,
              gerekli evraklar, randevu sistemi ve ret riskini azaltma stratejileri.
            </p>

          </div>
        </section>

        {/* İSVİÇRE VİZE TÜRLERİ */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-8">
              İsviçre Vize Türleri
            </h2>

            <ul className="space-y-4 text-slate-700 leading-relaxed">
              <li>• Turistik Schengen Vizesi</li>
              <li>• Ticari (Business) Vize</li>
              <li>• Aile / Arkadaş Ziyareti</li>
              <li>• Eğitim / Kısa Süreli Kurs</li>
              <li>• Transit Vize</li>
            </ul>

            <p className="mt-6 text-slate-600 leading-relaxed">
              En yaygın başvuru türü C tipi kısa süreli Schengen vizesidir.
              Bu vize ile 180 gün içinde maksimum 90 gün kalış hakkı verilir.
            </p>

          </div>
        </section>

        {/* BAŞVURU SÜRECİ */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-slate-900 text-white p-10 rounded-2xl">

            <h2 className="text-3xl font-bold mb-6">
              İsviçre Vize Başvuru Süreci
            </h2>

            <ol className="space-y-4 list-decimal list-inside text-slate-200">
              <li>Gerekli evrakların hazırlanması</li>
              <li>Online randevu alınması</li>
              <li>Biyometrik veri (parmak izi) işlemi</li>
              <li>Başvurunun konsolosluk değerlendirmesi</li>
              <li>Sonuç ve pasaport teslimi</li>
            </ol>

            <p className="mt-6 text-slate-300">
              Ortalama sonuçlanma süresi 10–15 iş günüdür.
              Yoğun dönemlerde süre uzayabilir.
            </p>

          </div>
        </section>

        {/* FİNANSAL ŞARTLAR */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-6">
              İsviçre Vizesi İçin Finansal Gereklilikler
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              İsviçre, finansal yeterlilik konusunda katı ülkelerden biridir.
            </p>

            <ul className="space-y-4 text-slate-700">
              <li>• Günlük minimum 100–120 CHF karşılığı bakiye</li>
              <li>• Son 3 aylık banka hesap dökümü</li>
              <li>• Maaş bordroları / gelir belgeleri</li>
              <li>• Sponsorluk varsa ek belgeler</li>
            </ul>

          </div>
        </section>

        {/* RET RİSKİ */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-red-50 border border-red-200 p-10 rounded-2xl">

            <h2 className="text-3xl font-bold mb-6 text-red-700">
              İsviçre Vize Reddi Neden Olur?
            </h2>

            <ul className="space-y-4 text-red-800">
              <li>• Finansal yetersizlik</li>
              <li>• Seyahat planının inandırıcı olmaması</li>
              <li>• Türkiye’ye geri dönüş bağlarının zayıf görülmesi</li>
              <li>• Belgelerde eksiklik veya tutarsızlık</li>
            </ul>

          </div>
        </section>

        {/* SİLO NAV */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-2xl font-bold mb-6">
              İsviçre Vize Sürecini Detaylı İnceleyin
            </h2>

            <div className="flex flex-wrap gap-6 text-sm font-semibold">
              <Link href="/isvicre-vize-evraklari" className="hover:underline">
                İsviçre vize evrakları →
              </Link>
              <Link href="/isvicre-vize-randevusu" className="hover:underline">
                İsviçre vize randevusu →
              </Link>
              <Link href="/isvicre-vize-reddi" className="hover:underline">
                İsviçre vize reddi →
              </Link>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="bg-red-600 text-white rounded-2xl p-12 text-center shadow-xl">

            <h2 className="text-3xl font-bold mb-6">
              İsviçre Vizenizi Güvenle Alın
            </h2>

            <p className="max-w-2xl mx-auto mb-8 text-red-100">
              Dosyanızı birlikte hazırlayalım, ret riskini minimize edelim
              ve başvurunuzu profesyonel şekilde tamamlayalım.
            </p>

            <a
              href="https://wa.me/905302199056?text=Merhaba%2C%20Isvicre%20vize%20basvurusu%20icin%20destek%20almak%20istiyorum."
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition"
            >
              Destek Al
            </a>

          </div>
        </section>

      </main>
    </>
  );
}
