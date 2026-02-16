import Head from "next/head";
import Link from "next/link";

export default function PolonyaVizeReddi() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Polonya Vize Reddi Nedenleri ve Çözüm Yolları",
    description:
      "Polonya Schengen vize reddi neden olur? 2026 güncel ret sebepleri, itiraz hakkı ve yeni başvuru stratejileri.",
    author: {
      "@type": "Organization",
      "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Polonya Vize Reddi 2026 | Ret Nedenleri ve İtiraz</title>

        <meta
          name="description"
          content="Polonya vize reddi neden olur? Finansal yetersizlik, geri dönüş şüphesi ve eksik evrak sebepleri. Polonya Schengen ret çözüm rehberi."
        />

        <meta
          name="keywords"
          content="polonya vize reddi, polonya schengen ret, polonya vize itiraz, polonya red nedenleri"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/polonya-vize-reddi"
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
            Polonya Schengen Red Analizi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Polonya Vize Reddi Neden Olur?
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Polonya Schengen başvurularında ret oranı özellikle finansal
            yetersizlik ve geri dönüş şüphesi nedeniyle artmaktadır.
            Ret mektubundaki maddeler doğru analiz edilmeden yeniden
            başvuru yapılmamalıdır.
          </p>
        </header>

        {/* EN SIK NEDENLER */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8 text-center">
            En Sık Polonya Vize Red Nedenleri
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-black mb-4 text-red-600">
                Finansal Yetersizlik
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Hesap hareketlerinin düzensiz olması, son dakika para yatırımı
                veya seyahat bütçesinin yetersiz görünmesi ret sebebidir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-black mb-4 text-red-600">
                Geri Dönüş Şüphesi
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Türkiye’de bağlayıcı unsur (iş, tapu, aile) eksikliği
                memurda kalıcı göç şüphesi oluşturabilir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-black mb-4 text-red-600">
                Eksik veya Tutarsız Evrak
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Başvuru formu ile banka dökümü veya iş yazısı arasında
                çelişki bulunması ret sebebidir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-black mb-4 text-red-600">
                Seyahat Amacının Net Olmaması
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Rezervasyonların gerçekçi görünmemesi veya planın
                inandırıcı olmaması retle sonuçlanabilir.
              </p>
            </div>

          </div>
        </section>

        {/* İTİRAZ VAR MI */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            Polonya Vize Reddi Sonrası İtiraz Hakkı Var mı?
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto text-center leading-relaxed">
            Polonya Schengen retlerinde itiraz (appeal) mümkündür.
            Ancak çoğu durumda eksiklerin giderildiği yeni bir başvuru
            yapmak daha hızlı ve etkili sonuç verir.
          </p>
        </section>

        {/* NE YAPMALI */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Ret Aldıktan Sonra Ne Yapılmalı?
          </h2>

          <ol className="space-y-4 list-decimal list-inside text-slate-700 leading-relaxed">
            <li>Ret mektubundaki maddeleri analiz edin.</li>
            <li>Finansal durumu güçlendirin ve banka hareketlerini düzenleyin.</li>
            <li>Türkiye bağlarını belgeleyin.</li>
            <li>Güçlü bir açıklama dilekçesi hazırlayın.</li>
          </ol>
        </section>

        {/* SİLO NAV */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/polonya-vize" className="block hover:underline text-red-600">
            Polonya Vize Rehberi →
          </Link>

          <Link href="/polonya-vize-evraklari" className="block hover:underline text-red-600">
            Polonya Vize Evrakları →
          </Link>

          <Link href="/polonya-vize-randevusu" className="block hover:underline text-red-600">
            Polonya Vize Randevusu →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Polonya Ret Dosyanızı Analiz Edelim
          </h2>

          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Red mektubunuzu inceleyerek yeniden başvuruda
            onay şansınızı artırabiliriz.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Polonya%20vize%20reddi%20analizi%20icin%20destek%20istiyorum."
            className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Ret Analizi Başlat
          </a>
        </section>

      </main>
    </>
  );
}
