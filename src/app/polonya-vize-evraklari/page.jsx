import Head from "next/head";
import Link from "next/link";

export default function PolonyaVizeEvraklari() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Polonya Vize Evrakları 2026",
    description:
      "Polonya Schengen vizesi için gerekli evraklar. Turistik, ticari ve aile ziyareti başvurularında güncel belge listesi.",
    author: {
      "@type": "Organization",
    "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Polonya Vize Evrakları 2026 | Güncel Belge Listesi</title>

        <meta
          name="description"
          content="Polonya Schengen vizesi için gerekli evraklar 2026. Turistik, ticari ve aile ziyareti vizesi belge listesi ve finansal şartlar."
        />

        <meta
          name="keywords"
          content="polonya vize evrakları, polonya schengen evrak listesi, polonya turist vizesi belgeleri, polonya vize başvuru evrakları"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/polonya-vize-evraklari"
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
            Polonya Schengen Başvurusu
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Polonya Vize Evrakları 2026
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Polonya turistik, ticari ve aile ziyareti vizeleri için güncel
            evrak listesi ve finansal şartlar.
          </p>
        </header>

        {/* GENEL EVRAKLAR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Genel Polonya Vize Evrakları
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Geçerli pasaport (son 10 yıl içinde alınmış, 2 boş sayfa)</li>
            <li>• 2 adet biyometrik fotoğraf</li>
            <li>• Schengen başvuru formu</li>
            <li>• Seyahat sağlık sigortası (30.000 € teminatlı)</li>
            <li>• Uçuş rezervasyonu</li>
            <li>• Konaklama rezervasyonu</li>
            <li>• Kimlik fotokopisi</li>
          </ul>
        </section>

        {/* FİNANSAL BELGELER */}
        <section className="mb-24 bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
          <h2 className="text-3xl font-black mb-8">
            Finansal Belgeler
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Son 3 aylık banka hesap dökümü</li>
            <li>• Kaşeli ve imzalı banka ekstresi</li>
            <li>• Maaş bordroları (çalışanlar için)</li>
            <li>• Vergi levhası ve ticaret sicil (şirket sahipleri için)</li>
            <li>• SGK hizmet dökümü</li>
          </ul>
        </section>

        {/* ÇALIŞMA DURUMUNA GÖRE */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Çalışma Durumuna Göre Ek Evraklar
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <h4 className="font-bold mb-4">Çalışanlar</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• İş yerinden izin yazısı</li>
                <li>• Maaş bordrosu</li>
                <li>• SGK dökümü</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Şirket Sahipleri</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Vergi levhası</li>
                <li>• Ticaret sicil gazetesi</li>
                <li>• Faaliyet belgesi</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Öğrenciler</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Öğrenci belgesi</li>
                <li>• Sponsor dilekçesi</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Emekliler</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Emekli maaş dökümü</li>
              </ul>
            </div>

          </div>
        </section>

        {/* KRİTİK UYARI */}
        <section className="mb-24 bg-red-50 p-10 rounded-2xl border border-red-100">
          <h2 className="text-3xl font-black mb-6">
            En Sık Evrak Hataları
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Banka hesabında ani yüklü para girişi</li>
            <li>• Sahte rezervasyon kullanımı</li>
            <li>• Çevirisiz belgeler</li>
            <li>• Eksik imzalı başvuru formu</li>
          </ul>
        </section>

        {/* SİLO NAV */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/polonya-vize" className="block hover:underline text-blue-600">
            Polonya Vize Rehberi →
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
            Evrak Dosyanızı Profesyonel Hazırlayalım
          </h2>

          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Eksik veya hatalı belge nedeniyle ret riskinizi artırmayın.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Polonya%20vize%20evraklari%20icin%20destek%20istiyorum."
            className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Evrak Kontrolü Başlat
          </a>
        </section>

      </main>
    </>
  );
}
