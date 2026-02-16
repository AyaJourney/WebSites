import Head from "next/head";
import Link from "next/link";

export default function PolonyaVize() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Polonya Vize Rehberi 2026",
    description:
      "Polonya Schengen vizesi nasıl alınır? Evrak listesi, randevu süreci ve ret nedenleri hakkında detaylı rehber.",
    author: {
      "@type": "Organization",
      "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Polonya Vize 2026 | Schengen Başvuru Rehberi</title>

        <meta
          name="description"
          content="Polonya Schengen vizesi nasıl alınır? Gerekli evraklar, randevu süreci, vize ücreti ve ret nedenleri hakkında detaylı rehber."
        />

        <meta
          name="keywords"
          content="polonya vize, polonya schengen vizesi, polonya vize başvurusu, polonya vize evrakları, polonya vize randevu"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/polonya-vize"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-red-100 text-red-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-red-200">
            Polonya Cumhuriyeti – Schengen Bölgesi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Polonya Vize Rehberi 2026
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Polonya turistik, ticari ve aile ziyareti vizeleri için güncel başvuru
            süreci, evrak listesi ve randevu adımlarını detaylı şekilde anlattık.
          </p>
        </header>

        {/* POLONYA VİZE TÜRLERİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Polonya Vize Türleri
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Turistik Schengen Vizesi (C Tipi)</li>
            <li>• Ticari Vize</li>
            <li>• Aile / Arkadaş Ziyareti</li>
            <li>• Erasmus ve Öğrenci Vizeleri</li>
            <li>• Ulusal D Tipi Uzun Süreli Vizeler</li>
          </ul>
        </section>

        {/* BAŞVURU SÜRECİ */}
        <section className="mb-24 bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
          <h2 className="text-3xl font-black mb-8">
            Polonya Vize Başvuru Süreci
          </h2>

          <ol className="space-y-4 list-decimal list-inside text-slate-700 leading-relaxed">
            <li>Doğru vize türünü belirleyin.</li>
            <li>Online randevu sistemi üzerinden başvuru oluşturun.</li>
            <li>Evrak dosyanızı eksiksiz hazırlayın.</li>
            <li>Randevu günü biyometrik veri verin.</li>
            <li>Sonucu takip edin.</li>
          </ol>
        </section>

        {/* POLONYA VİZE ÜCRETİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Polonya Vize Ücreti 2026
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Schengen vize ücreti 90 Euro’dur. VFS servis bedeli ayrıca
            tahsil edilir. Çocuklar için indirimli ücret uygulanabilir.
          </p>
        </section>

        {/* RET RİSKİ */}
        <section className="mb-24 bg-red-50 p-10 rounded-2xl border border-red-100">
          <h2 className="text-3xl font-black mb-6">
            Polonya Vize Reddi Riskleri
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Finansal yetersizlik</li>
            <li>• Geri dönüş bağlarının zayıf olması</li>
            <li>• Eksik veya hatalı evrak</li>
            <li>• Seyahat planının gerçekçi olmaması</li>
          </ul>
        </section>

        {/* SİLO NAV */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/polonya-vize-evraklari" className="block hover:underline text-blue-600">
            Polonya Vize Evrakları →
          </Link>

          <Link href="/polonya-vize-randevusu" className="block hover:underline text-blue-600">
            Polonya Vize Randevusu →
          </Link>

          <Link href="/polonya-vize-reddi" className="block hover:underline text-blue-600">
            Polonya Vize Reddi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Polonya Vize Sürecinizi Birlikte Planlayalım
          </h2>

          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Dosyanızı profesyonel şekilde hazırlayarak ret riskinizi minimize edin.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Polonya%20vize%20basvurusu%20icin%20destek%20istiyorum."
            className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Polonya Vize Desteği Al
          </a>
        </section>

      </main>
    </>
  );
}
