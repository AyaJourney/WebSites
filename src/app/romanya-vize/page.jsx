import Head from "next/head";
import Link from "next/link";

export default function RomanyaVize() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Romanya Vize Rehberi 2026",
    description:
      "Romanya vize başvurusu nasıl yapılır? Gerekli evraklar, randevu süreci ve ret nedenleri hakkında 2026 güncel rehber.",
    author: {
      "@type": "Organization",
      "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Romanya Vize 2026 | Başvuru, Evraklar ve Randevu</title>

        <meta
          name="description"
          content="Romanya vize başvurusu nasıl yapılır? 2026 güncel Romanya vize rehberi, gerekli evraklar, randevu süreci ve ret nedenleri."
        />

        <meta
          name="keywords"
          content="romanya vize, romanya schengen, romanya vize başvurusu, romanya vize evrakları, romanya randevu"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/romanya-vize"
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
            Romanya Vize Rehberi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Romanya Vize Başvurusu Nasıl Yapılır?
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Romanya turistik, ticari ve aile ziyareti vizeleri için
            başvuru süreci, evrak listesi, randevu adımları ve
            dikkat edilmesi gereken kritik noktalar bu rehberde.
          </p>
        </header>

        {/* ROMANYA SCHENGEN Mİ */}
        <section className="mb-20">
          <h2 className="text-3xl font-black mb-6">
            Romanya Schengen Ülkesi mi?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            Romanya 2024 itibarıyla Schengen bölgesine kademeli olarak dahil
            olmuştur. Ancak kara sınırları konusunda uygulamalar dönemsel
            değişebilir. Başvuru yapmadan önce güncel giriş şartlarını kontrol
            etmek önemlidir.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Geçerli çok girişli Schengen vizesi bulunan kişiler,
            çoğu durumda Romanya’ya ayrıca vize almadan giriş yapabilir.
          </p>
        </section>

        {/* VİZE TÜRLERİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Romanya Vize Türleri
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-black text-lg mb-4 text-blue-600">
                Turistik Vize
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Otel rezervasyonu ve seyahat planı ile yapılan kısa süreli
                Schengen başvurularıdır.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-black text-lg mb-4 text-blue-600">
                Ticari Vize
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Romanya’daki firmadan davetiye ile yapılan iş
                amaçlı kısa süreli vizelerdir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-black text-lg mb-4 text-blue-600">
                Aile / Ziyaret Vizesi
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Romanya’da yaşayan yakınlarınızı ziyaret etmek için
                davetiye destekli yapılan başvurulardır.
              </p>
            </div>

          </div>
        </section>

        {/* BAŞVURU ADIMLARI */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-6">
            Romanya Vize Başvuru Süreci
          </h2>

          <ol className="space-y-4 list-decimal list-inside text-slate-700 leading-relaxed">
            <li>Online başvuru formunun doldurulması</li>
            <li>Gerekli evrakların hazırlanması</li>
            <li>Yetkili başvuru merkezinden randevu alınması</li>
            <li>Biyometrik veri verilmesi</li>
            <li>Başvurunun değerlendirilmesi</li>
          </ol>
        </section>

        {/* SİLO LINKLER */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/romanya-vize-evraklari" className="block hover:underline text-blue-600">
            Romanya Vize Evrakları →
          </Link>

          <Link href="/romanya-vize-randevusu" className="block hover:underline text-blue-600">
            Romanya Vize Randevusu →
          </Link>

          <Link href="/romanya-vize-reddi" className="block hover:underline text-blue-600">
            Romanya Vize Reddi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Romanya Vize Dosyanızı Güçlendirelim
          </h2>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Doğru evrak hazırlığı ve stratejik başvuru planlaması ile
            Romanya vize onay şansınızı artırabilirsiniz.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Romanya%20vize%20basvurusu%20icin%20destek%20almak%20istiyorum."
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Uzman Desteği Al
          </a>
        </section>

      </main>
    </>
  );
}
