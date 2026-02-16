import Head from "next/head";
import Link from "next/link";

export default function MaltaVizeEvraklari() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Malta Vize Evrakları 2026",
    description:
      "Malta Schengen vizesi için gerekli evraklar. Turistik, ticari ve aile ziyareti başvuruları için güncel belge listesi.",
    author: {
      "@type": "Organization",
      name: "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Malta Vize Evrakları 2026 | Güncel Schengen Belge Listesi</title>

        <meta
          name="description"
          content="Malta Schengen vizesi için gerekli evraklar nelerdir? Turistik ve ticari başvuru için güncel evrak listesi ve banka şartları."
        />

        <meta
          name="keywords"
          content="malta vize evrakları, malta schengen belge listesi, malta turist vizesi evrakları"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/malta-vize-evraklari"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-100">
            Malta Schengen Evrak Listesi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Malta Vize Evrakları
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Malta Schengen vizesi başvurularında eksik veya hatalı belge
            en sık ret nedenidir. Başvuru türüne göre hazırlanması gereken
            evrak listesi aşağıdadır.
          </p>
        </header>

        {/* TEMEL EVRAKLAR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Malta Schengen Vizesi Temel Evrakları
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• En az 3 ay geçerli pasaport</li>
            <li>• 2 adet biyometrik fotoğraf</li>
            <li>• Schengen başvuru formu</li>
            <li>• Seyahat sağlık sigortası (minimum 30.000€ teminat)</li>
            <li>• Uçak rezervasyonu</li>
            <li>• Otel rezervasyonu veya davetiye</li>
            <li>• Son 3 aylık banka hesap dökümü</li>
            <li>• Kimlik fotokopisi</li>
          </ul>
        </section>

        {/* ÇALIŞMA DURUMUNA GÖRE */}
        <section className="grid md:grid-cols-2 gap-12 mb-24">

          <div className="bg-white p-8 border border-slate-200 rounded-3xl shadow-sm">
            <h3 className="text-xl font-black mb-4">
              Çalışanlar İçin Ek Belgeler
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>• Maaş bordrosu (son 3 ay)</li>
              <li>• SGK hizmet dökümü</li>
              <li>• İşveren izin yazısı</li>
            </ul>
          </div>

          <div className="bg-white p-8 border border-slate-200 rounded-3xl shadow-sm">
            <h3 className="text-xl font-black mb-4">
              Şirket Sahipleri İçin
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>• Vergi levhası</li>
              <li>• Faaliyet belgesi</li>
              <li>• Ticaret sicil gazetesi</li>
            </ul>
          </div>

        </section>

        {/* BANKA ŞARTI */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            Malta Vizesi İçin Bankada Ne Kadar Para Olmalı?
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto text-center leading-relaxed">
            Malta için resmi bir minimum bakiye açıklanmaz.
            Ancak günlük 65–120 Euro arası harcamayı karşılayacak
            finansal profil gösterilmelidir.
          </p>
        </section>

        {/* EN SIK RET NEDENLERİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Eksik Evrak Malta Vize Reddine Neden Olur mu?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Evet. Özellikle banka hesap hareketleri, sigorta poliçesi
            veya seyahat planındaki tutarsızlıklar ret sebebidir.
          </p>
        </section>

        {/* SİLO LİNKLER */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/malta-vize" className="block hover:underline text-blue-600">
            Malta Vize Rehberi →
          </Link>

          <Link href="/malta-vize-randevusu" className="block hover:underline text-blue-600">
            Malta Vize Randevu Süreci →
          </Link>

          <Link href="/malta-vize-reddi" className="block hover:underline text-blue-600">
            Malta Vize Reddi Nedenleri →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Malta Evraklarınızı Profesyonelce Kontrol Edelim
          </h2>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Eksiksiz dosya ile başvurunuzu güvenle yapın.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Malta%20vize%20evraklarim%20icin%20destek%20almak%20istiyorum."
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Evrak Kontrolü Al
          </a>

        </section>

      </main>
    </>
  );
}
