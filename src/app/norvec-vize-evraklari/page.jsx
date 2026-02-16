import Head from "next/head";
import Link from "next/link";

export default function NorvecVizeEvraklari() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Norveç Vize Evrakları 2026",
    description:
      "Norveç Schengen vizesi için gerekli evraklar, banka şartları, çalışan ve öğrenci belgeleri.",
    author: {
      "@type": "Organization",
      "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Norveç Vize Evrakları 2026 | Güncel Evrak Listesi</title>

        <meta
          name="description"
          content="Norveç Schengen vizesi için gerekli belgeler nelerdir? Çalışan, öğrenci ve şirket sahipleri için güncel Norveç vize evrak listesi."
        />

        <meta
          name="keywords"
          content="norveç vize evrakları, norveç schengen evrak listesi, norveç turist vizesi belgeleri"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/norvec-vize-evraklari"
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
            Norveç Schengen Evrak Listesi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Norveç Vize Evrakları 2026
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Norveç Schengen vizesi başvurusunda eksiksiz ve tutarlı evrak sunmak
            ret riskini azaltmanın en önemli yoludur.
          </p>
        </header>

        {/* TEMEL EVRAKLAR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Norveç Vizesi İçin Temel Belgeler
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Pasaport (Son 10 yıl içinde alınmış, en az 2 boş sayfa)</li>
            <li>• Schengen vize başvuru formu</li>
            <li>• 2 adet biyometrik fotoğraf</li>
            <li>• Seyahat sağlık sigortası (minimum 30.000 € teminat)</li>
            <li>• Uçuş rezervasyonu</li>
            <li>• Otel rezervasyonu veya davetiye</li>
            <li>• Nüfus kayıt örneği</li>
          </ul>
        </section>

        {/* FİNANSAL BELGELER */}
        <section className="mb-24 bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
          <h2 className="text-3xl font-black mb-8 text-center">
            Norveç Banka Hesabı Şartı
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Norveç Konsolosluğu finansal yeterlilik konusunda oldukça hassastır.
            Hesabınızda seyahat masraflarını karşılayacak bakiye bulunmalıdır.
          </p>

          <ul className="space-y-3 text-slate-700">
            <li>• En az 3 aylık banka hesap dökümü</li>
            <li>• Kaşeli ve imzalı banka belgesi</li>
            <li>• Ani yüklü para girişlerinden kaçınılmalıdır</li>
          </ul>
        </section>

        {/* ÇALIŞANLAR İÇİN */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Çalışanlar İçin Ek Evraklar
          </h2>

          <ul className="space-y-4 text-slate-700">
            <li>• Çalışma belgesi</li>
            <li>• Son 3 aylık maaş bordrosu</li>
            <li>• SGK hizmet dökümü</li>
            <li>• İşveren izin yazısı</li>
          </ul>
        </section>

        {/* ÖĞRENCİLER */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Öğrenciler İçin Belgeler
          </h2>

          <ul className="space-y-4 text-slate-700">
            <li>• Öğrenci belgesi</li>
            <li>• Sponsor dilekçesi</li>
            <li>• Sponsorun banka evrakları</li>
          </ul>
        </section>

        {/* RİSKLER */}
        <section className="mb-24 bg-red-50 border border-red-200 p-10 rounded-2xl">
          <h2 className="text-2xl font-black text-red-700 mb-4">
            Norveç Vizesinde En Sık Yapılan Hatalar
          </h2>

          <ul className="space-y-3 text-red-600">
            <li>• Hesapta son dakika para yatırılması</li>
            <li>• Uçak ve otel planının tutarsız olması</li>
            <li>• Gelir-gider dengesizliği</li>
          </ul>
        </section>

        {/* SİLO NAV */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/norvec-vize" className="block hover:underline text-blue-600">
            Norveç Vize Ana Sayfa →
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
            Evraklarınızı Profesyonel Hazırlayalım
          </h2>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Eksik veya hatalı evrak Norveç vize reddine yol açabilir.
            Dosyanızı uzman kontrolünden geçirelim.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Norvec%20vize%20evraklari%20icin%20destek%20almak%20istiyorum."
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Evrak Kontrolü Al
          </a>
        </section>

      </main>
    </>
  );
}
