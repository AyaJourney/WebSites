import Head from "next/head";
import Link from "next/link";

export default function SlovakyaVizeEvraklari() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Slovakya Vize Evrakları 2026",
    description:
      "Slovakya Schengen vizesi için gerekli evraklar nelerdir? Turistik, ticari ve aile ziyareti başvuruları için güncel belge listesi.",
    author: {
      "@type": "Organization",
      "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Slovakya Vize Evrakları 2026 | Güncel Schengen Belge Listesi</title>

        <meta
          name="description"
          content="Slovakya Schengen vizesi için gerekli evraklar nelerdir? Turistik, ticari ve aile ziyareti Slovakya vize belge listesi 2026 güncel rehber."
        />

        <meta
          name="keywords"
          content="slovakya vize evrakları, slovakya schengen evrak listesi, slovakya turistik vize belgeleri, slovakya ticari vize"
        />

        <link
          rel="canonical"
          href="https:/ayajourney.com/slovakya-vize-evraklari"
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
            Slovakya Schengen Belgeleri 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Slovakya Vize Evrakları
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Slovakya Schengen vizesi başvurusunda en sık ret nedeni eksik veya
            hatalı evraktır. İşte 2026 güncel Slovakya vize belge listesi.
          </p>
        </header>

        {/* TEMEL BELGELER */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8">
            Slovakya Vizesi İçin Temel Evraklar
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Geçerli pasaport (son 10 yıl içinde alınmış, en az 2 boş sayfa)</li>
            <li>• 2 adet biyometrik fotoğraf</li>
            <li>• Eksiksiz doldurulmuş Schengen başvuru formu</li>
            <li>• Nüfus cüzdanı fotokopisi</li>
            <li>• Tam vukuatlı nüfus kayıt örneği</li>
            <li>• 30.000 Euro teminatlı seyahat sağlık sigortası</li>
            <li>• Uçak rezervasyonu (gidiş-dönüş)</li>
            <li>• Otel rezervasyonu veya davetiye</li>
          </ul>
        </section>

        {/* FİNANSAL BELGELER */}
        <section className="bg-slate-50 p-12 rounded-[3rem] mb-24 border border-slate-200">
          <h2 className="text-3xl font-black mb-8">
            Finansal Evraklar
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Son 3 aylık banka hesap dökümü (kaşeli ve imzalı)</li>
            <li>• Hesapta seyahati karşılayacak yeterli bakiye</li>
            <li>• Maaş bordroları (çalışanlar için)</li>
            <li>• Vergi levhası, faaliyet belgesi (şirket sahipleri için)</li>
            <li>• Emekli maaş belgesi (emekliler için)</li>
            <li>• Sponsor varsa sponsor dilekçesi ve mali belgeleri</li>
          </ul>
        </section>

        {/* ÇALIŞMA DURUMUNA GÖRE */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Meslek Durumuna Göre Ek Belgeler
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Çalışanlar</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                İş yerinden izin yazısı, SGK hizmet dökümü ve son 3 aylık maaş bordrosu.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Şirket Sahipleri</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Vergi levhası, imza sirküleri ve ticaret sicil gazetesi.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Öğrenciler</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Güncel öğrenci belgesi ve sponsor evrakları.
              </p>
            </div>

          </div>
        </section>

        {/* ÖNEMLİ UYARI */}
        <section className="bg-blue-900 text-white p-12 rounded-[3rem] mb-24 shadow-2xl">
          <h2 className="text-2xl font-black mb-6">
            Önemli Uyarı
          </h2>

          <p className="text-blue-200 leading-relaxed">
            Slovakya Konsolosluğu finansal tutarsızlıkları ciddi ret sebebi
            olarak değerlendirir. Banka hesabınıza son anda yatırılan yüksek
            tutarlar şüphe oluşturabilir.
          </p>
        </section>

        {/* SİLO NAVİGASYON */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/slovakya-vize" className="block hover:underline text-blue-600">
            Slovakya Vize Rehberi →
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
            Slovakya Vize Dosyanızı Güçlendirelim
          </h2>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Eksik veya hatalı evrak nedeniyle ret almayın.
            Profesyonel kontrol ile dosyanızı birlikte hazırlayalım.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Slovakya%20vize%20evraklar%C4%B1%20i%C3%A7in%20destek%20istiyorum."
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Evrak Kontrolü Yap
          </a>
        </section>

      </main>
    </>
  );
}
