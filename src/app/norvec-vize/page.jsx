import Head from "next/head";
import Link from "next/link";

export default function NorvecVize() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Norveç Vize Başvurusu 2026",
    description:
      "Norveç Schengen vizesi nasıl alınır? Evrak listesi, randevu süreci ve ret nedenleri hakkında güncel rehber.",
    author: {
      "@type": "Organization",
      "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Norveç Vize 2026 | Norveç Schengen Vizesi Nasıl Alınır?</title>

        <meta
          name="description"
          content="Norveç Schengen vizesi başvuru süreci, evrak listesi, randevu sistemi ve ret nedenleri. 2026 güncel Norveç vize rehberi."
        />

        <meta
          name="keywords"
          content="norveç vize, norveç schengen vizesi, norveç turist vizesi, norveç vize başvurusu"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/norvec-vize"
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
            Norveç Schengen Vizesi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Norveç Vizesi Nasıl Alınır?
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Norveç, Schengen bölgesine dahil Kuzey Avrupa ülkelerindendir.
            Turistik, ticari ve aile ziyareti amaçlı Norveç vizesi başvurusu
            belirli prosedürlere göre yapılır.
          </p>
        </header>

        {/* NORVEÇ VİZE NEDİR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Norveç Schengen Vizesi Nedir?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Norveç Schengen C tipi vize, 180 gün içinde maksimum 90 gün kalış hakkı sağlar.
            Bu vize ile Norveç üzerinden diğer Schengen ülkelerine geçiş yapılabilir.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Ana varış ülkeniz Norveç olmalıdır. En uzun kalış Norveç'te gerçekleşmelidir.
          </p>
        </section>

        {/* VİZE TÜRLERİ */}
        <section className="mb-24 bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
          <h2 className="text-3xl font-black mb-10 text-center">
            Norveç Vize Türleri
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-bold mb-2">Turistik Vize</h4>
              <p className="text-sm text-slate-500">Gezi ve kısa süreli seyahatler</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Ticari Vize</h4>
              <p className="text-sm text-slate-500">Toplantı ve iş ziyaretleri</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Aile / Arkadaş Ziyareti</h4>
              <p className="text-sm text-slate-500">Davetiyeli başvurular</p>
            </div>
          </div>
        </section>

        {/* BAŞVURU SÜRECİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10">
            Norveç Vize Başvuru Süreci
          </h2>

          <ol className="space-y-4 list-decimal list-inside text-slate-700 leading-relaxed">
            <li>Başvuru formunun online doldurulması</li>
            <li>VFS Global üzerinden randevu alınması</li>
            <li>Evrakların hazırlanması</li>
            <li>Biyometrik işlem</li>
            <li>Konsolosluk değerlendirmesi</li>
          </ol>
        </section>

        {/* NORVEÇ ZOR MU */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-6">
            Norveç Vizesi Zor mu?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Norveç, finansal yeterlilik ve seyahat planı konusunda detaylı inceleme yapar.
            Özellikle banka hesap hareketleri düzenli ve mantıklı olmalıdır.
          </p>
        </section>

        {/* SİLO LİNKLER */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/norvec-vize-evraklari" className="block hover:underline text-blue-600">
            Norveç Vize Evrakları →
          </Link>

          <Link href="/norvec-vize-randevusu" className="block hover:underline text-blue-600">
            Norveç Vize Randevusu →
          </Link>

          <Link href="/norvec-vize-reddi" className="block hover:underline text-blue-600">
            Norveç Vize Reddi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Norveç Vizenizi Profesyonelce Hazırlayalım
          </h2>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Evrak hatası veya finansal eksiklik nedeniyle ret riski yaşamayın.
            Dosyanızı uzman ekibimizle hazırlayalım.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Norvec%20vize%20basvurusu%20icin%20destek%20almak%20istiyorum."
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Norveç Başvuru Desteği
          </a>
        </section>

      </main>
    </>
  );
}
