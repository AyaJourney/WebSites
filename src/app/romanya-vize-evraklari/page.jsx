import Head from "next/head";
import Link from "next/link";

export default function RomanyaVizeEvraklari() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Romanya Vize Evrakları 2026",
    description:
      "Romanya turistik, ticari ve aile ziyareti vizesi için gerekli evraklar 2026 güncel liste. Banka hesap dökümü, iş evrakları ve başvuru detayları.",
    author: {
      "@type": "Organization",
      "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Romanya Vize Evrakları 2026 | Güncel Liste</title>

        <meta
          name="description"
          content="Romanya vize evrakları 2026 güncel liste. Turistik, ticari ve aile ziyareti için gerekli belgeler, banka şartları ve dosya hazırlama rehberi."
        />

        <meta
          name="keywords"
          content="romanya vize evrakları, romanya turistik vize belgeleri, romanya banka şartı, romanya schengen evrak listesi"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/romanya-vize-evraklari"
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
            2026 Güncel Liste
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Romanya Vize Evrakları
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Romanya turistik, ticari ve aile ziyareti vizesi için gerekli tüm belgeler.
            Eksik veya hatalı evrak, doğrudan ret sebebidir.
          </p>
        </header>

        {/* TEMEL EVRAKLAR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Romanya Vizesi İçin Temel Evraklar
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• En az 6 ay geçerli pasaport</li>
            <li>• 2 adet biyometrik fotoğraf</li>
            <li>• Online başvuru formu çıktısı</li>
            <li>• Nüfus kayıt örneği (tam vukuatlı)</li>
            <li>• Seyahat sağlık sigortası (minimum 30.000 € teminatlı)</li>
            <li>• Uçak rezervasyonu</li>
            <li>• Otel rezervasyonu veya davetiye</li>
          </ul>
        </section>

        {/* FİNANSAL EVRAKLAR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Banka ve Finansal Belgeler
          </h2>

          <p className="text-slate-600 mb-6 leading-relaxed">
            Romanya konsolosluğu finansal yeterliliğe büyük önem verir.
            Hesapta görünen para ile beyan edilen seyahat masrafı tutarlı olmalıdır.
          </p>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Son 3 aylık banka hesap dökümü (kaşeli-imzalı)</li>
            <li>• Günlük minimum 70-100 € bütçe göstergesi</li>
            <li>• Maaş bordrosu (çalışanlar için son 3 ay)</li>
            <li>• Vergi levhası ve faaliyet belgesi (şirket sahipleri için)</li>
          </ul>
        </section>

        {/* ÇALIŞMA DURUMUNA GÖRE */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Çalışma Durumuna Göre Ek Belgeler
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <h3 className="font-black text-lg mb-4 text-blue-600">
                Çalışanlar
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• İş yazısı (izin onaylı)</li>
                <li>• SGK hizmet dökümü</li>
                <li>• Son 3 maaş bordrosu</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-lg mb-4 text-blue-600">
                Şirket Sahipleri
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Ticaret sicil gazetesi</li>
                <li>• Vergi levhası</li>
                <li>• İmza sirküleri</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-lg mb-4 text-blue-600">
                Öğrenciler
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Öğrenci belgesi</li>
                <li>• Sponsor dilekçesi</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-lg mb-4 text-blue-600">
                Emekliler
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Emekli maaş dökümü</li>
                <li>• SGK belgesi</li>
              </ul>
            </div>

          </div>
        </section>

        {/* KRİTİK UYARI */}
        <section className="bg-red-50 border-2 border-red-500 p-10 rounded-3xl mb-24">
          <h2 className="text-2xl font-black text-red-700 mb-4">
            En Sık Yapılan Evrak Hataları
          </h2>

          <ul className="space-y-3 text-red-700 text-sm">
            <li>• Son dakika yatırılmış yüklü para</li>
            <li>• Eksik imzalı banka dökümü</li>
            <li>• Çelişkili seyahat planı</li>
            <li>• İş yazısında izin tarihinin belirtilmemesi</li>
          </ul>
        </section>

        {/* SİLO NAV */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/romanya-vize" className="block hover:underline text-blue-600">
            Romanya Vize Rehberi →
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
            Evraklarınızı Profesyonel Kontrol Edelim
          </h2>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Romanya vize reddi riskini minimize etmek için
            dosyanızı uzman ekibimizle birlikte hazırlayalım.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Romanya%20vize%20evraklarimi%20kontrol%20ettirmek%20istiyorum."
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Evrak Kontrolü Al
          </a>
        </section>

      </main>
    </>
  );
}
