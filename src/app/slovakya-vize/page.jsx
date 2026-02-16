import Head from "next/head";
import Link from "next/link";

export default function SlovakyaVize() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Slovakya Vize Başvurusu 2026",
    description:
      "Slovakya Schengen vizesi nasıl alınır? Evrak listesi, randevu süreci, ücretler ve ret nedenleri hakkında 2026 güncel rehber.",
    author: {
      "@type": "Organization",
      "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Slovakya Vize 2026 | Schengen Başvuru Rehberi</title>

        <meta
          name="description"
          content="Slovakya Schengen vizesi nasıl alınır? Slovakya vize evrakları, randevu süreci, ücretler ve ret nedenleri hakkında detaylı 2026 rehberi."
        />

        <meta
          name="keywords"
          content="slovakya vize, slovakya schengen vizesi, slovakya vize başvurusu, slovakya vize evrakları, slovakya randevu"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/slovakya-vize"
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
            Slovakya Schengen Rehberi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Slovakya Vize Başvurusu Nasıl Yapılır?
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Slovakya Schengen vizesi ile 90 güne kadar turistik, ticari veya aile ziyareti
            amacıyla seyahat edebilirsiniz. Başvuru süreci doğru planlanmazsa ret riski oluşabilir.
            İşte 2026 güncel Slovakya vize rehberi.
          </p>
        </header>

        {/* GENEL BİLGİ */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            Slovakya Schengen Vizesi Nedir?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Slovakya, Schengen bölgesine dahildir. Alınan kısa süreli C tipi vize ile
            Slovakya’ya giriş yaptıktan sonra diğer Schengen ülkelerine de seyahat edebilirsiniz.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Ancak ilk girişin Slovakya’dan yapılması tavsiye edilir.
          </p>
        </section>

        {/* VİZE TÜRLERİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Slovakya Vize Türleri
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Turistik Vize</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tatil ve kültürel gezi amacıyla alınır.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Ticari Vize</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                İş toplantısı, fuar ve ticari görüşmeler için.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Aile Ziyareti</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Slovakya’da yaşayan akraba veya arkadaş ziyareti için.
              </p>
            </div>

          </div>
        </section>

        {/* BAŞVURU SÜRECİ */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-24 shadow-2xl">
          <h2 className="text-3xl font-black mb-8 text-center">
            Slovakya Vize Başvuru Süreci
          </h2>

          <div className="space-y-4 text-slate-300 max-w-3xl mx-auto text-sm leading-relaxed">

            <p>1. Gerekli evraklar hazırlanır.</p>
            <p>2. Yetkili başvuru merkezi üzerinden randevu alınır.</p>
            <p>3. Biyometrik veri (parmak izi) verilir.</p>
            <p>4. Dosya konsolosluk tarafından değerlendirilir.</p>
            <p>5. Ortalama sonuç süresi 10–15 iş günüdür.</p>

          </div>
        </section>

        {/* ÜCRET */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            Slovakya Vize Ücreti 2026
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Schengen kısa süreli vize harcı 90 Euro’dur.
            Buna ek olarak başvuru merkezi servis bedeli ödenir.
          </p>
        </section>

        {/* SİLO LİNKLER */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/slovakya-vize-evraklari" className="block hover:underline text-blue-600">
            Slovakya Vize Evrakları →
          </Link>

          <Link href="/slovakya-vize-randevusu" className="block hover:underline text-blue-600">
            Slovakya Vize Randevusu →
          </Link>

          <Link href="/slovakya-vize-reddi" className="block hover:underline text-blue-600">
            Slovakya Vize Reddi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Slovakya Vize Başvurunuzu Profesyonelce Hazırlayalım
          </h2>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Eksik evrak veya finansal hata nedeniyle ret riski yaşamayın.
            Dosyanızı birlikte güçlendirelim.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Slovakya%20vize%20basvurusu%20icin%20destek%20istiyorum."
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Hemen Başvur
          </a>
        </section>

      </main>
    </>
  );
}
