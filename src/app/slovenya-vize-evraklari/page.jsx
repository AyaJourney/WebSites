import Head from "next/head";
import Link from "next/link";

export default function SlovenyaVizeEvraklari() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Slovenya Vize Evrakları 2026",
    description:
      "Slovenya Schengen vizesi için gerekli evraklar, banka şartları ve başvuru dosyası hazırlama rehberi.",
    author: {
      "@type": "Organization",
      "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Slovenya Vize Evrakları 2026 | Güncel Schengen Evrak Listesi</title>

        <meta
          name="description"
          content="Slovenya Schengen vizesi için gerekli evraklar nelerdir? Banka hesabı, maaş bordrosu, iş yazısı ve seyahat planı dahil 2026 güncel liste."
        />

        <meta
          name="keywords"
          content="slovenya vize evrakları, slovenya schengen evrak listesi, slovenya turist vizesi belgeleri"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/slovenya-vize-evraklari"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-emerald-200">
            Slovenya Schengen Evrak Listesi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Slovenya Vize Evrakları
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Slovenya Schengen vizesi başvurusu için gerekli tüm belgeleri
            eksiksiz hazırlamak, onay şansınızı doğrudan etkiler.
          </p>
        </header>

        {/* TEMEL EVRAKLAR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Temel Başvuru Belgeleri
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold mb-6 text-lg">Kimlik & Pasaport</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>• En az 2 boş sayfası olan pasaport</li>
                <li>• Son 10 yıl içinde alınmış pasaport</li>
                <li>• Eski Schengen vizelerinin fotokopisi</li>
                <li>• Kimlik fotokopisi</li>
                <li>• 2 adet biyometrik fotoğraf</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold mb-6 text-lg">Finansal Belgeler</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>• Son 3 aylık banka hesap dökümü</li>
                <li>• Günlük minimum 50–70 € bakiye</li>
                <li>• Maaş bordroları</li>
                <li>• SGK hizmet dökümü</li>
                <li>• Vergi levhası (şirket sahipleri için)</li>
              </ul>
            </div>

          </div>
        </section>

        {/* SEYAHAT EVRAKLARI */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Seyahat Planı Belgeleri
          </h2>

          <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 shadow-inner">
            <ul className="space-y-4 text-slate-600 text-sm">
              <li>• Gidiş–dönüş uçak rezervasyonu</li>
              <li>• Otel rezervasyonu veya davetiye</li>
              <li>• Seyahat sağlık sigortası (30.000 € teminatlı)</li>
              <li>• Günlük seyahat planı (itinerary)</li>
            </ul>
          </div>
        </section>

        {/* ÇALIŞMA DURUMUNA GÖRE */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Çalışma Durumuna Göre Ek Belgeler
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-sm">

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="font-bold mb-4">Çalışanlar</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• İş yerinden izin yazısı</li>
                <li>• İmza sirküleri</li>
                <li>• Faaliyet belgesi</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="font-bold mb-4">Öğrenciler</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Öğrenci belgesi</li>
                <li>• Sponsor dilekçesi</li>
                <li>• Sponsorun finansal belgeleri</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="font-bold mb-4">Şirket Sahipleri</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Vergi levhası</li>
                <li>• Ticaret sicil gazetesi</li>
                <li>• Faaliyet belgesi</li>
              </ul>
            </div>

          </div>
        </section>

        {/* UYARI PANELİ */}
        <section className="bg-emerald-900 text-white p-12 rounded-[3rem] mb-24 shadow-2xl">
          <h2 className="text-2xl font-black mb-6">
            ⚠️ En Sık Yapılan Hata
          </h2>

          <p className="text-emerald-200 leading-relaxed">
            Banka hesabına son dakika toplu para yatırmak,
            Slovenya konsolosluğu tarafından şüpheli bulunabilir.
            Gelir-gider dengesi mantıklı görünmelidir.
          </p>
        </section>

        {/* SİLO NAV */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/slovenya-vize" className="block hover:underline text-blue-600">
            Slovenya Vize Rehberi →
          </Link>

          <Link href="/slovenya-vize-randevusu" className="block hover:underline text-blue-600">
            Slovenya Vize Randevusu →
          </Link>

          <Link href="/slovenya-vize-reddi" className="block hover:underline text-blue-600">
            Slovenya Vize Reddi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-emerald-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Dosyanızı Profesyonelce Hazırlayalım
          </h2>

          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Eksiksiz ve doğru hazırlanmış bir dosya,
            Slovenya Schengen onay ihtimalinizi ciddi şekilde artırır.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Slovenya%20vize%20evrakları%20için%20destek%20istiyorum."
            className="bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Evrak Kontrolü Yap
          </a>
        </section>

      </main>
    </>
  );
}
