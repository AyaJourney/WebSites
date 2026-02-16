import Head from "next/head";
import Link from "next/link";

export default function KibrisVize() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kıbrıs Vize Gerekiyor mu? 2026 Güncel Rehber",
    description:
      "Kıbrıs’a seyahat için vize gerekiyor mu? Kuzey Kıbrıs ve Güney Kıbrıs (GKRY) vize şartları, pasaport kuralları ve başvuru süreci.",
    author: {
      "@type": "Organization",
      name: "Aya Journey"
    },
    datePublished: "2026-02-16"
  };

  return (
    <>
      <Head>
        <title>Kıbrıs Vize 2026 | Kıbrıs’a Gitmek İçin Vize Gerekiyor mu?</title>

        <meta
          name="description"
          content="Kıbrıs’a seyahat için vize gerekiyor mu? Kuzey Kıbrıs Türk Cumhuriyeti (KKTC) ve Güney Kıbrıs Rum Kesimi (Schengen) vize şartları 2026 güncel rehber."
        />

        <meta
          name="keywords"
          content="kıbrıs vize, kktc vize gerekiyor mu, güney kıbrıs vize, kıbrıs schengen, kıbrıs pasaport şartları"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/kibris-vize"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-emerald-200">
            Kıbrıs Seyahat Rehberi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Kıbrıs’a Gitmek İçin <br/>
            <span className="text-emerald-600 italic">Vize Gerekiyor mu?</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Kıbrıs’a seyahat planlıyorsanız önce hangi bölgeye gideceğinizi bilmeniz gerekir.
            Kuzey Kıbrıs ve Güney Kıbrıs için vize kuralları tamamen farklıdır.
          </p>
        </header>

        {/* KKTC */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            Kuzey Kıbrıs (KKTC) Vize Gerekiyor mu?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Türkiye Cumhuriyeti vatandaşları için Kuzey Kıbrıs Türk Cumhuriyeti’ne
            girişte vize zorunluluğu yoktur.
          </p>

          <ul className="space-y-3 text-slate-700">
            <li>• Yeni çipli kimlik kartı ile giriş yapılabilir.</li>
            <li>• Pasaport zorunlu değildir (ancak önerilir).</li>
            <li>• 90 güne kadar turistik kalış mümkündür.</li>
          </ul>
        </section>

        {/* GKRY */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            Güney Kıbrıs (GKRY) Vize Gerekiyor mu?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Güney Kıbrıs Rum Kesimi Avrupa Birliği üyesidir.
            Türk vatandaşları için vize zorunludur.
          </p>

          <p className="text-slate-600 leading-relaxed mb-6">
            GKRY Schengen bölgesine tam üye olmamakla birlikte,
            Schengen vizesi ile giriş çoğu durumda mümkündür.
          </p>

          <ul className="space-y-3 text-slate-700">
            <li>• Schengen vizesi olanlar giriş yapabilir.</li>
            <li>• Tek girişli Schengen vizesi ile dikkatli olunmalıdır.</li>
            <li>• Direkt GKRY başvurusu yapılabilir.</li>
          </ul>
        </section>

        {/* SCHENGEN BAĞLANTI */}
        <section className="mb-24 bg-slate-50 p-10 rounded-3xl border border-slate-200">
          <h2 className="text-3xl font-black mb-6">
            Güney Kıbrıs İçin Schengen Alternatifi
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Güney Kıbrıs’a gitmek isteyenler genellikle
            Yunanistan veya başka bir Schengen ülkesinden vize alarak
            giriş yapmayı tercih eder.
          </p>

          <div className="flex flex-wrap gap-6 font-semibold text-sm">
            <Link href="/yunanistan-vize" className="hover:underline">
              Yunanistan Vize →
            </Link>

            <Link href="/schengen-vize" className="hover:underline">
              Schengen Vize Rehberi →
            </Link>
          </div>
        </section>

        {/* UYARI */}
        <section className="mb-24 bg-red-50 border-2 border-red-400 p-10 rounded-3xl">
          <h2 className="text-2xl font-black text-red-700 mb-4">
            ⚠️ KKTC Giriş Damgası Uyarısı
          </h2>

          <p className="text-red-700 leading-relaxed">
            Pasaportunuza KKTC giriş damgası basılmışsa,
            bazı ülkeler Güney Kıbrıs üzerinden girişe izin vermeyebilir.
            Bu nedenle kimlikle giriş tercih edilmesi önerilir.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-emerald-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Kıbrıs Seyahatinizi Planlayalım
          </h2>

          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Güney Kıbrıs için Schengen stratejisi mi,
            yoksa direkt başvuru mu? Dosyanızı birlikte planlayalım.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Kibris%20seyahati%20icin%20danismanlik%20almak%20istiyorum."
            className="bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Danışmanlık Al
          </a>
        </section>

      </main>
    </>
  );
}
