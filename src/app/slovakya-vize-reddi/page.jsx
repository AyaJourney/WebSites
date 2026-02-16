import Head from "next/head";
import Link from "next/link";

export default function SlovakyaVizeReddi() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Slovakya Vize Reddi 2026",
    description:
      "Slovakya Schengen vize reddi neden olur? Ret kodları, itiraz süreci ve yeniden başvuru stratejileri.",
    author: {
      "@type": "Organization",
      "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Slovakya Vize Reddi 2026 | Ret Nedenleri ve Çözüm</title>

        <meta
          name="description"
          content="Slovakya Schengen vizesi reddedildi mi? Ret nedenleri, madde açıklamaları ve yeniden başvuru stratejileri. Slovakya vize reddi sonrası doğru yol haritası."
        />

        <meta
          name="keywords"
          content="slovakya vize reddi, slovakya schengen ret nedenleri, slovakya vize itiraz, slovakya red kodları"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/slovakya-vize-reddi"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-red-100 text-red-700 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-red-200">
            Slovakya Schengen Ret Kararı
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Slovakya Vize Reddi
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Slovakya Schengen vizesi reddedildiyse panik yapmayın.
            Ret nedeni doğru analiz edilirse ikinci başvuruda onay alma
            ihtimali ciddi şekilde artar.
          </p>
        </header>

        {/* RET NEDENLERİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Slovakya Vize Reddi Neden Olur?
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-lg mb-4">
                Finansal Yetersizlik
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Banka hesap hareketlerinin düzensiz olması,
                son dakika para yatırılması veya günlük harcama
                tutarının yetersiz görülmesi ret sebebidir.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-lg mb-4">
                Seyahat Amacının Net Olmaması
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Otel, uçuş ve seyahat planının tutarsız olması
                Slovakya konsolosluğu tarafından risk olarak
                değerlendirilebilir.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-lg mb-4">
                Türkiye’ye Geri Dönüş Şüphesi
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                İş, mülk veya aile bağlarının yeterince
                güçlü görünmemesi ret riskini artırır.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-lg mb-4">
                Evrak Tutarsızlığı
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Belgeler arasında çelişki veya eksiklik
                konsolosluk tarafından olumsuz değerlendirilir.
              </p>
            </div>

          </div>
        </section>

        {/* RET KODLARI */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-24 shadow-2xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            Slovakya Schengen Ret Kodları
          </h2>

          <ul className="space-y-4 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            <li>• Madde 10: Seyahat amacı yeterince kanıtlanmamış.</li>
            <li>• Madde 8: Finansal yeterlilik yetersiz görülmüş.</li>
            <li>• Madde 2: Geri dönüş niyeti konusunda şüphe.</li>
            <li>• Madde 13: Sunulan belgelerde eksiklik.</li>
          </ul>
        </section>

        {/* İTİRAZ MI YENİDEN BAŞVURU MU */}
        <section className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            İtiraz mı, Yeniden Başvuru mu?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Slovakya Schengen ret kararına itiraz mümkündür.
            Ancak çoğu durumda eksikleri gidererek yeni bir başvuru
            yapmak daha hızlı sonuç verir.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Ret nedeni analiz edilmeden yapılan ikinci başvuru
            tekrar red ile sonuçlanabilir.
          </p>
        </section>

        {/* SİLO NAV */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/slovakya-vize" className="block hover:underline text-blue-600">
            Slovakya Vize Rehberi →
          </Link>

          <Link href="/slovakya-vize-evraklari" className="block hover:underline text-blue-600">
            Slovakya Vize Evrakları →
          </Link>

          <Link href="/slovakya-vize-randevusu" className="block hover:underline text-blue-600">
            Slovakya Vize Randevusu →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Slovakya Ret Dosyanızı Analiz Edelim
          </h2>

          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Ret mektubunuzu detaylı inceleyelim,
            eksikleri belirleyelim ve güçlü bir ikinci başvuru stratejisi oluşturalım.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Slovakya%20vize%20reddi%20aldım%20destek%20istiyorum."
            className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Ret Analizi Başlat
          </a>
        </section>

      </main>
    </>
  );
}
