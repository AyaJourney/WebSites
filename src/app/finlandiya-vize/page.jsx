import Head from "next/head";
import Link from "next/link";

export default function FinlandiyaVize() {
  return (
    <>
      <Head>
        <title>Finlandiya Vize 2026 | Schengen Başvuru Rehberi ve Şartlar</title>
        <meta
          name="description"
          content="Finlandiya Schengen vizesi nasıl alınır? 2026 güncel başvuru şartları, evrak listesi, randevu süreci ve Finlandiya vize reddi risk analizi."
        />
        <meta
          name="keywords"
          content="finlandiya vize, finlandiya schengen vizesi, finlandiya vize başvurusu, finlandiya turist vizesi"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/finlandiya-vize"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-200">
            Finlandiya Schengen Rehberi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Finlandiya Vize Başvurusu <br/>
            <span className="text-blue-600 italic">Adım Adım Rehber</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Finlandiya turistik, ticari ve aile ziyareti vizeleri için
            güncel evrak listesi, randevu sistemi ve ret risk analizi.
          </p>
        </header>

        {/* GENEL BİLGİ */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            Finlandiya Vizesi Nasıl Alınır?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Finlandiya Schengen vizesi kısa süreli (90 güne kadar) seyahatler için verilir.
            Başvuru Türkiye’de genellikle VFS Global üzerinden yapılır.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Başvuru dosyasında finansal yeterlilik, seyahat amacı ve geri dönüş bağları
            en kritik değerlendirme kriterleridir.
          </p>
        </section>

        {/* SERİ NAV */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Finlandiya Vize Sürecini Detaylı İnceleyin
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center font-bold">

            <Link href="/finlandiya-vize-evraklari"
              className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-blue-500 transition">
              Finlandiya Vize Evrakları →
            </Link>

            <Link href="/finlandiya-vize-randevusu"
              className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-blue-500 transition">
              Finlandiya Vize Randevusu →
            </Link>

            <Link href="/finlandiya-vize-reddi"
              className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-red-500 transition">
              Finlandiya Vize Reddi →
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6 uppercase">
            Finlandiya Vize Dosyanızı Güçlendirelim
          </h2>

          <p className="mb-8 max-w-2xl mx-auto text-blue-100">
            Ret riskini minimize ederek güçlü bir başvuru hazırlayalım.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Finlandiya%20vizesi%20için%20destek%20almak%20istiyorum."
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Destek Al
          </a>
        </section>

      </main>
    </>
  );
}
