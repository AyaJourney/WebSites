import Head from "next/head";
import Link from "next/link";

export default function LuksemburgVizeEvraklari() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Lüksemburg Vize Evrakları 2026",
    description:
      "Lüksemburg Schengen vizesi için gerekli evrak listesi. Turistik, ticari ve aile ziyareti başvuruları için güncel belgeler.",
    author: {
      "@type": "Organization",
      name: "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Lüksemburg Vize Evrakları 2026 | Güncel Schengen Listesi</title>

        <meta
          name="description"
          content="Lüksemburg vize evrakları 2026 güncel liste. Turistik, ticari ve aile ziyareti Schengen başvurusu için gerekli belgeler."
        />

        <meta
          name="keywords"
          content="lüksemburg vize evrakları, lüksemburg schengen evrak listesi, lüksemburg turist vizesi belgeleri"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/luksemburg-vize-evraklari"
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
            Lüksemburg Schengen Evrak Listesi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Lüksemburg Vize Evrakları
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Lüksemburg Schengen vizesi için hazırlanması gereken tüm belgeler,
            kategoriye göre detaylı olarak aşağıda listelenmiştir.
          </p>
        </header>

        {/* ORTAK EVRAKLAR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Tüm Başvurular İçin Ortak Evraklar
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Pasaport (son 10 yıl içinde alınmış, en az 2 boş sayfa)</li>
            <li>• 2 adet biyometrik fotoğraf (35x45 mm)</li>
            <li>• Schengen vize başvuru formu</li>
            <li>• Seyahat sağlık sigortası (en az 30.000 € teminatlı)</li>
            <li>• Gidiş-dönüş uçak rezervasyonu</li>
            <li>• Otel rezervasyonu veya konaklama belgesi</li>
            <li>• Son 3 aya ait banka hesap dökümü (kaşeli, imzalı)</li>
          </ul>
        </section>

        {/* ÇALIŞANLAR */}
        <section className="mb-24 bg-slate-50 p-10 rounded-3xl border border-slate-200">
          <h2 className="text-3xl font-black mb-8">
            Çalışanlar İçin Ek Belgeler
          </h2>

          <ul className="space-y-4 text-slate-700">
            <li>• İş yerinden izin yazısı</li>
            <li>• Son 3 aylık maaş bordrosu</li>
            <li>• SGK işe giriş bildirgesi</li>
            <li>• SGK hizmet dökümü</li>
          </ul>
        </section>

        {/* ŞİRKET SAHİBİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Şirket Sahipleri İçin Belgeler
          </h2>

          <ul className="space-y-4 text-slate-700">
            <li>• Vergi levhası</li>
            <li>• Faaliyet belgesi</li>
            <li>• İmza sirküleri</li>
            <li>• Ticaret sicil gazetesi</li>
          </ul>
        </section>

        {/* ÖĞRENCİ */}
        <section className="mb-24 bg-slate-50 p-10 rounded-3xl border border-slate-200">
          <h2 className="text-3xl font-black mb-8">
            Öğrenciler İçin Belgeler
          </h2>

          <ul className="space-y-4 text-slate-700">
            <li>• Öğrenci belgesi</li>
            <li>• Sponsor dilekçesi</li>
            <li>• Sponsor finansal evrakları</li>
          </ul>
        </section>

        {/* KRİTİK UYARI */}
        <section className="mb-24 bg-red-50 border border-red-200 p-10 rounded-3xl">
          <h2 className="text-2xl font-black text-red-700 mb-4">
            Önemli Uyarı
          </h2>

          <p className="text-slate-700 leading-relaxed">
            Lüksemburg Konsolosluğu banka hesap hareketlerini detaylı inceler.
            Son dakika toplu para girişleri ret nedeni olabilir.
            Belgeler arasında tutarlılık sağlanmalıdır.
          </p>
        </section>

        {/* SİLO LİNKLER */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/luksemburg-vize" className="block hover:underline text-blue-700">
            Lüksemburg Vize Rehberi →
          </Link>

          <Link href="/luksemburg-vize-randevusu" className="block hover:underline text-blue-700">
            Lüksemburg Vize Randevusu →
          </Link>

          <Link href="/luksemburg-vize-reddi" className="block hover:underline text-blue-700">
            Lüksemburg Vize Reddi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Evraklarınızı Profesyonel Kontrol Edelim
          </h2>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Dosyanızı konsolosluk kriterlerine göre inceleyelim,
            ret riskinizi en aza indirelim.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Luksemburg%20vize%20evrak%20kontrolu%20icin%20destek%20istiyorum."
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Evrak Kontrolü Başlat
          </a>

        </section>

      </main>
    </>
  );
}
