import Head from "next/head";
import Link from "next/link";

export default function LitvanyaVize() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Litvanya Vize Başvurusu 2026",
    description:
      "Litvanya Schengen vizesi başvuru süreci, gerekli evraklar, randevu sistemi ve ret nedenleri hakkında 2026 güncel rehber.",
    author: {
      "@type": "Organization",
      name: "Aya Journey"
    },
    datePublished: "2026-02-16"
  };

  return (
    <>
      <Head>
        <title>Litvanya Vize Başvurusu 2026 | Schengen Rehberi</title>

        <meta
          name="description"
          content="Litvanya Schengen vizesi nasıl alınır? Evrak listesi, VFS randevu süreci, ret nedenleri ve 2026 güncel başvuru rehberi."
        />

        <meta
          name="keywords"
          content="litvanya vize, litvanya schengen vizesi, litvanya vize evrakları, litvanya vize randevusu"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/litvanya-vize"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-green-200">
            Litvanya Cumhuriyeti – Schengen Bölgesi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Litvanya Vize Başvurusu 2026
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Litvanya Schengen vizesi ile 90 güne kadar turistik, ticari
            veya aile ziyareti amaçlı seyahat edebilirsiniz.
            Başvuru süreci evrak hazırlığı ve doğru randevu planlaması gerektirir.
          </p>
        </header>

        {/* VİZE TÜRLERİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Litvanya Vize Türleri
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-green-600">
                Turistik Vize
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kısa süreli gezi ve tatil amaçlı başvurular için.
                Otel rezervasyonu ve seyahat planı zorunludur.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-green-600">
                Ticari Vize
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Litvanya’daki şirketten davetiye gerektirir.
                Fuar, toplantı veya iş görüşmeleri için alınır.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-green-600">
                Aile & Arkadaş Ziyareti
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Litvanya’da yaşayan kişiden resmi davet mektubu gereklidir.
              </p>
            </div>

          </div>
        </section>

        {/* BAŞVURU SÜRECİ */}
        <section className="mb-24 bg-slate-50 p-12 rounded-[3rem] border border-slate-200">
          <h2 className="text-3xl font-black mb-8 text-center">
            Litvanya Vize Başvuru Süreci
          </h2>

          <ol className="space-y-4 text-slate-700 max-w-3xl mx-auto leading-relaxed list-decimal list-inside">

            <li>Doğru vize türünün belirlenmesi</li>
            <li>Evrakların eksiksiz hazırlanması</li>
            <li>VFS Global üzerinden randevu alınması</li>
            <li>Biyometrik veri ve belge teslimi</li>
            <li>Sonuç değerlendirme süreci (ortalama 15 iş günü)</li>

          </ol>
        </section>

        {/* RET RİSKLERİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Litvanya Vize Ret Riskleri
          </h2>

          <div className="bg-red-50 p-10 rounded-3xl border border-red-200 space-y-4 text-slate-700 leading-relaxed">

            <p>
              Litvanya başvurularında en sık ret nedenleri:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Yetersiz banka bakiyesi</li>
              <li>Türkiye’ye geri dönüş bağlarının zayıf görülmesi</li>
              <li>Seyahat planının tutarsız olması</li>
              <li>Eksik veya çelişkili evrak sunulması</li>
            </ul>

          </div>
        </section>

        {/* INTERNAL SİLO */}
        <section className="mb-20 text-center space-y-4">

          <Link
            href="/litvanya-vize-evraklari"
            className="block text-green-700 font-bold hover:underline"
          >
            Litvanya Vize Evrakları →
          </Link>

          <Link
            href="/litvanya-vize-randevusu"
            className="block text-green-700 font-bold hover:underline"
          >
            Litvanya Vize Randevusu →
          </Link>

          <Link
            href="/litvanya-vize-reddi"
            className="block text-green-700 font-bold hover:underline"
          >
            Litvanya Vize Reddi →
          </Link>

          <Link
            href="/schengen-vize"
            className="block text-green-700 font-bold hover:underline"
          >
            Schengen Vize Rehberi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-green-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Litvanya Vize Dosyanızı Güçlendirelim
          </h2>

          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Ret riskinizi minimize etmek için dosyanızı profesyonel şekilde
            hazırlayalım ve başvurunuzu güvenle tamamlayalım.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Litvanya%20vize%20basvurusu%20icin%20destek%20istiyorum."
            className="bg-white text-green-700 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Destek Al
          </a>
        </section>

      </main>
    </>
  );
}
