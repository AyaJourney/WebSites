import Head from "next/head";
import Link from "next/link";

export default function LiechtensteinVizeEvraklari() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Liechtenstein Vize Evrakları 2026",
    "description":
      "Liechtenstein Schengen vizesi için gerekli evraklar nelerdir? Turistik ve ticari başvurular için güncel belge listesi.",
    author: {
      "@type": "Organization",
      name: "Aya Journey"
    },
    datePublished: "2026-02-16"
  };

  return (
    <>
      <Head>
        <title>Liechtenstein Vize Evrakları 2026 | Güncel Belge Listesi</title>

        <meta
          name="description"
          content="Liechtenstein Schengen vizesi için gerekli evraklar 2026. Turistik ve ticari başvurular için banka dökümü, sigorta, rezervasyon ve detaylı belge listesi."
        />

        <meta
          name="keywords"
          content="liechtenstein vize evrakları, liechtenstein schengen evrak listesi, liechtenstein turist vizesi belgeleri"
        />

        <link
          rel="canonical"
          href="https://www.siteadresin.com/liechtenstein-vize-evraklari"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-indigo-200">
            Liechtenstein Schengen Evrak Listesi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Liechtenstein Vize Evrakları 2026
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Liechtenstein Schengen vizesi için hazırlanması gereken
            tüm belgeler. Başvurular İsviçre temsilciliği üzerinden
            yürütüldüğünden evrak standardı İsviçre kriterlerine göre değerlendirilir.
          </p>
        </header>

        {/* TEMEL BELGELER */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Temel Schengen Evrakları
          </h2>

          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4 text-slate-700 leading-relaxed">

            <p>• En az 2 boş sayfalı ve son 10 yıl içinde alınmış pasaport</p>
            <p>• 2 adet biyometrik fotoğraf (35x45 mm)</p>
            <p>• Schengen vize başvuru formu</p>
            <p>• Seyahat sağlık sigortası (minimum 30.000 € teminat)</p>
            <p>• Gidiş-dönüş uçak rezervasyonu</p>
            <p>• Konaklama rezervasyonu</p>

          </div>
        </section>

        {/* FİNANSAL BELGELER */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Finansal Belgeler
          </h2>

          <div className="bg-indigo-50 p-10 rounded-3xl border border-indigo-200 space-y-4 text-slate-700">

            <p>
              • Son 3 aya ait banka hesap dökümü (ıslak imzalı ve kaşeli)
            </p>

            <p>
              • Düzenli gelir belgeleri (maaş bordrosu, vergi levhası vb.)
            </p>

            <p>
              • Seyahat süresince günlük ortalama 70–100 € bakiye göstermek önerilir.
            </p>

            <p>
              • Açıklanamayan toplu para girişleri ret riskini artırır.
            </p>

          </div>
        </section>

        {/* ÇALIŞMA DURUMUNA GÖRE */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Çalışma Durumuna Göre Ek Belgeler
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-indigo-600">
                Çalışanlar
              </h3>
              <p className="text-slate-600">
                SGK hizmet dökümü, işveren izin yazısı, son 3 aylık maaş bordrosu.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-indigo-600">
                Şirket Sahipleri
              </h3>
              <p className="text-slate-600">
                Vergi levhası, ticaret sicil gazetesi, faaliyet belgesi.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-indigo-600">
                Öğrenciler
              </h3>
              <p className="text-slate-600">
                Öğrenci belgesi, sponsor dilekçesi ve sponsor finansal belgeleri.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-indigo-600">
                Emekliler
              </h3>
              <p className="text-slate-600">
                Emekli maaş dökümü ve banka hesap hareketleri.
              </p>
            </div>

          </div>
        </section>

        {/* ÖNEMLİ UYARI */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            Liechtenstein Evraklarında Kritik Nokta
          </h2>

          <div className="max-w-3xl mx-auto text-slate-300 leading-relaxed space-y-4">
            <p>
              Liechtenstein başvuruları İsviçre üzerinden yapıldığı için
              dosyanın detaylı hazırlanması gerekir.
            </p>

            <p>
              Finansal belgelerde çelişki, eksik rezervasyon veya
              seyahat amacının net olmaması ret riskini artırır.
            </p>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mb-20 text-center space-y-4">

          <Link
            href="/liechtenstein-vize"
            className="block text-indigo-600 font-bold hover:underline"
          >
            Liechtenstein Vize Rehberi →
          </Link>

          <Link
            href="/liechtenstein-vize-randevusu"
            className="block text-indigo-600 font-bold hover:underline"
          >
            Liechtenstein Vize Randevusu →
          </Link>

          <Link
            href="/liechtenstein-vize-reddi"
            className="block text-indigo-600 font-bold hover:underline"
          >
            Liechtenstein Vize Reddi →
          </Link>

          <Link
            href="/isvicre-vize"
            className="block text-indigo-600 font-bold hover:underline"
          >
            İsviçre Vize Süreci →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-indigo-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Evraklarınızı Profesyonel Kontrol Edelim
          </h2>

          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            İsviçre standartlarına uygun, eksiksiz bir dosya ile
            ret riskini minimize edelim.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Liechtenstein%20vize%20evraklarim%20icin%20kontrol%20talep%20ediyorum."
            className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Evrak Kontrolü Al
          </a>
        </section>

      </main>
    </>
  );
}
