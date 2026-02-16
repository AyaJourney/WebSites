import Head from "next/head";
import Link from "next/link";

export default function MaltaVize() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Malta Vize Rehberi 2026",
    description:
      "Malta Schengen vizesi nasıl alınır? Evrak listesi, randevu süreci ve ret nedenleri hakkında detaylı rehber.",
    author: {
      "@type": "Organization",
      name: "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Malta Vize 2026 | Malta Schengen Vizesi Nasıl Alınır?</title>

        <meta
          name="description"
          content="Malta vizesi nasıl alınır? Malta Schengen evrak listesi, randevu alma süreci ve ret nedenleri. 2026 güncel başvuru rehberi."
        />

        <meta
          name="keywords"
          content="malta vize, malta schengen vizesi, malta vize başvurusu, malta vize evrakları"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/malta-vize"
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
            Malta Schengen Vizesi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Malta Vize Başvurusu 2026
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Malta vizesi, Schengen bölgesine giriş sağlayan kısa süreli
            C tipi vizedir. Turistik, ticari ve aile ziyareti başvuruları
            yetkili başvuru merkezi üzerinden yapılır.
          </p>
        </header>

        {/* MALTA VİZE NASIL ALINIR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Malta Vizesi Nasıl Alınır?
          </h2>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              Malta Schengen vizesi başvurusu için öncelikle seyahat amacınıza
              uygun kategori belirlenir. Başvuru formu doldurulur ve
              randevu alınır.
            </p>

            <p>
              Randevu günü biyometrik veri (parmak izi ve fotoğraf) verilir
              ve evraklar teslim edilir. Konsolosluk değerlendirmesi sonrası
              pasaport teslim edilir.
            </p>
          </div>
        </section>

        {/* BAŞVURU TÜRLERİ */}
        <section className="mb-24 grid md:grid-cols-3 gap-8">

          <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
            <h3 className="font-black text-xl mb-4">Turistik Vize</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Malta'da kısa süreli seyahat ve tatil amacıyla yapılan başvurulardır.
            </p>
          </div>

          <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
            <h3 className="font-black text-xl mb-4">Ticari Vize</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              İş toplantısı, fuar veya ticari ziyaret amaçlı başvurulardır.
            </p>
          </div>

          <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
            <h3 className="font-black text-xl mb-4">Aile Ziyareti</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Malta'da yaşayan yakın akraba ziyareti için yapılan başvurulardır.
            </p>
          </div>

        </section>

        {/* ONAY ORANI & STRATEJİ */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            Malta Vize Onay Şansı Nasıl Artırılır?
          </h2>

          <div className="space-y-4 text-slate-300 max-w-3xl mx-auto">
            <p>
              ✔ Düzenli ve yeterli finansal profil sunulmalıdır.
            </p>
            <p>
              ✔ Seyahat planı net ve gerçekçi olmalıdır.
            </p>
            <p>
              ✔ Türkiye’ye geri dönüş bağları güçlü gösterilmelidir.
            </p>
          </div>
        </section>

        {/* SİLO LİNKLER */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/malta-vize-evraklari" className="block hover:underline text-blue-600">
            Malta Vize Evrakları →
          </Link>

          <Link href="/malta-vize-randevusu" className="block hover:underline text-blue-600">
            Malta Vize Randevusu →
          </Link>

          <Link href="/malta-vize-reddi" className="block hover:underline text-blue-600">
            Malta Vize Reddi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Malta Vize Başvurunuzu Güçlendirelim
          </h2>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Profesyonel dosya hazırlığı ve stratejik planlama ile
            Malta vize onay şansınızı artırın.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Malta%20vize%20basvurusu%20icin%20destek%20almak%20istiyorum."
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Başvuru Desteği Al
          </a>

        </section>

      </main>
    </>
  );
}
