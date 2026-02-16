import Head from "next/head";
import Link from "next/link";

export default function LiechtensteinVizeReddi() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Liechtenstein Vize Reddi 2026",
    description:
      "Liechtenstein Schengen vize reddi neden olur? Ret kodları, itiraz süreci ve yeniden başvuru stratejisi 2026 güncel rehberi.",
    author: {
      "@type": "Organization",
      name: "Aya Journey"
    },
    datePublished: "2026-02-16"
  };

  return (
    <>
      <Head>
        <title>Liechtenstein Vize Reddi 2026 | Ret Nedenleri ve Çözüm</title>

        <meta
          name="description"
          content="Liechtenstein Schengen vize reddi neden olur? Ret kodları, finansal yetersizlik, geri dönüş şüphesi ve itiraz süreci hakkında detaylı rehber."
        />

        <meta
          name="keywords"
          content="liechtenstein vize reddi, liechtenstein schengen ret nedenleri, liechtenstein vize itiraz"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/liechtenstein-vize-reddi"
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
            Liechtenstein Schengen Ret Kararı
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Liechtenstein Vize Reddi Aldım, Ne Yapmalıyım?
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Liechtenstein başvuruları İsviçre temsilciliği üzerinden değerlendirilir.
            Bu nedenle ret gerekçeleri İsviçre Schengen kriterlerine göre verilir.
            Ret sonrası doğru strateji belirlemek kritik öneme sahiptir.
          </p>
        </header>

        {/* RET NEDENLERİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10">
            Liechtenstein Vize Reddi Neden Olur?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-red-600">
                Finansal Yetersizlik
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Banka hesap hareketlerinin düzensiz olması,
                ani para girişleri veya seyahat maliyetini karşılayamayacak bakiye
                ret sebebidir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-red-600">
                Geri Dönüş Niyeti Şüphesi
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Türkiye’deki iş, aile veya mülkiyet bağlarının zayıf görülmesi
                en sık ret nedenlerinden biridir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-red-600">
                Seyahat Amacının Net Olmaması
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Konaklama, uçuş planı veya seyahat programının
                tutarsız olması ret riskini artırır.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-red-600">
                Önceki Schengen Retleri
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Daha önce alınmış Schengen ret kararları,
                yeni başvuruda risk puanını yükseltir.
              </p>
            </div>

          </div>
        </section>

        {/* RET KODLARI */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            Ret Kodları Ne Anlama Gelir?
          </h2>

          <div className="max-w-3xl mx-auto text-slate-300 space-y-4 leading-relaxed">

            <p><strong>Madde 2:</strong> Geri dönüş niyeti konusunda şüphe.</p>
            <p><strong>Madde 8:</strong> Finansal yeterlilik yetersiz.</p>
            <p><strong>Madde 10:</strong> Seyahat amacı yeterince kanıtlanmamış.</p>

          </div>
        </section>

        {/* İTİRAZ VS YENİ BAŞVURU */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            İtiraz mı, Yeniden Başvuru mu?
          </h2>

          <div className="bg-red-50 p-10 rounded-3xl border border-red-200 space-y-4 text-slate-700 leading-relaxed">

            <p>
              Liechtenstein retlerine karşı yazılı itiraz hakkı vardır.
              Ancak çoğu durumda eksikleri gidererek yeniden başvuru yapmak
              daha hızlı sonuç verir.
            </p>

            <p>
              Yanlış yapılan ikinci başvuru,
              Schengen sisteminde kalıcı risk oluşturabilir.
            </p>

          </div>
        </section>

        {/* INTERNAL LINK SİLO */}
        <section className="mb-20 text-center space-y-4">

          <Link
            href="/liechtenstein-vize"
            className="block text-red-600 font-bold hover:underline"
          >
            Liechtenstein Vize Rehberi →
          </Link>

          <Link
            href="/liechtenstein-vize-evraklari"
            className="block text-red-600 font-bold hover:underline"
          >
            Liechtenstein Vize Evrakları →
          </Link>

          <Link
            href="/liechtenstein-vize-randevusu"
            className="block text-red-600 font-bold hover:underline"
          >
            Liechtenstein Vize Randevusu →
          </Link>

          <Link
            href="/isvicre-vize-reddi"
            className="block text-red-600 font-bold hover:underline"
          >
            İsviçre Vize Reddi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Liechtenstein Ret Analizi
          </h2>

          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Ret mektubunuzu detaylı analiz edelim.
            Güçlü bir stratejiyle yeniden başvuru planı oluşturalım.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Liechtenstein%20vize%20reddi%20aldim.%20Dosyam%20icin%20analiz%20istiyorum."
            className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Ret Analizi Başlat
          </a>
        </section>

      </main>
    </>
  );
}
