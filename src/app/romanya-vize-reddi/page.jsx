import Head from "next/head";
import Link from "next/link";

export default function RomanyaVizeReddi() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Romanya Vize Reddi Nedenleri ve Çözüm Yolları",
    description:
      "Romanya vize reddi neden olur? Ret kodları, itiraz süreci ve yeniden başvuru stratejileri hakkında 2026 güncel rehber.",
    author: {
      "@type": "Organization",
      "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Romanya Vize Reddi 2026 | Nedenleri ve Çözüm</title>

        <meta
          name="description"
          content="Romanya vize reddi neden olur? Eksik evrak, finansal yetersizlik ve geri dönüş şüphesi gibi ret nedenleri ve yeniden başvuru stratejileri."
        />

        <meta
          name="keywords"
          content="romanya vize reddi, romanya schengen ret nedenleri, romanya vize itiraz, romanya ret kodları"
        />

        <link
          rel="canonical"
          href="https:/ayajourney.com/romanya-vize-reddi"
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
            Romanya Schengen Ret Analizi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Romanya Vize Reddi Aldım, Ne Yapmalıyım?
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Romanya Schengen vizesi reddi aldıysanız panik yapmayın.
            Ret nedenini doğru analiz etmek, ikinci başvuruda onay alma ihtimalinizi ciddi şekilde artırır.
          </p>
        </header>

        {/* EN SIK NEDENLER */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Romanya Vize Reddi Neden Olur?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-red-600">Finansal Yetersizlik</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Banka hesabında seyahat masraflarını karşılayacak yeterli bakiye bulunmaması
                veya son dakika yapılan toplu para girişleri ret sebebidir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-red-600">Geri Dönüş Şüphesi</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Türkiye’deki iş, gelir veya aile bağlarının zayıf görülmesi
                Romanya tarafından riskli profil olarak değerlendirilir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-red-600">Eksik / Tutarsız Evrak</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rezervasyon, sigorta veya iş evraklarındaki çelişkiler
                Schengen ret kodu ile sonuçlanabilir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-red-600">Seyahat Amacının Net Olmaması</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Planlanan seyahatin mantıklı bulunmaması veya detaylı plan sunulmaması
                ret riskini artırır.
              </p>
            </div>

          </div>
        </section>

        {/* RET KODLARI */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-24 shadow-2xl">
          <h2 className="text-3xl font-black mb-8 text-center">
            Romanya Ret Kodları Ne Anlama Gelir?
          </h2>

          <div className="space-y-4 text-slate-300 max-w-3xl mx-auto text-sm leading-relaxed">

            <p><strong>Madde 2:</strong> Geri dönüş niyetiniz konusunda şüphe.</p>
            <p><strong>Madde 8:</strong> Finansal yeterlilik şüpheli.</p>
            <p><strong>Madde 10:</strong> Seyahat amacı yeterince kanıtlanmamış.</p>

          </div>
        </section>

        {/* İTİRAZ MI YENİDEN BAŞVURU MU */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Romanya Vize Reddi Sonrası Ne Yapmalı?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h4 className="font-bold mb-3">Ret Analizi</h4>
              <p className="text-sm text-slate-500">
                Ret mektubundaki madde detaylı incelenmelidir.
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h4 className="font-bold mb-3">Eksiklerin Giderilmesi</h4>
              <p className="text-sm text-slate-500">
                Finansal ve belgeler yeniden düzenlenmelidir.
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h4 className="font-bold mb-3">Yeni Başvuru</h4>
              <p className="text-sm text-slate-500">
                Güçlendirilmiş dosya ile tekrar başvuru yapılır.
              </p>
            </div>

          </div>
        </section>

        {/* SİLO BAĞLANTI */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/romanya-vize" className="block hover:underline text-red-600">
            Romanya Vize Rehberi →
          </Link>

          <Link href="/romanya-vize-evraklari" className="block hover:underline text-red-600">
            Romanya Vize Evrakları →
          </Link>

          <Link href="/romanya-vize-randevusu" className="block hover:underline text-red-600">
            Romanya Vize Randevusu →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Romanya Ret Dosyanızı Profesyonelce Analiz Edelim
          </h2>

          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Yanlış ikinci başvuru kalıcı Schengen riskine yol açabilir.
            Dosyanızı birlikte güçlendirelim.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Romanya%20vize%20reddi%20aldim.%20Analiz%20icin%20destek%20istiyorum."
            className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Ret Analizi Başlat
          </a>
        </section>

      </main>
    </>
  );
}
