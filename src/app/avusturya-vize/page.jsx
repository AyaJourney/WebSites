import Head from "next/head";
import Link from "next/link";

export default function AvusturyaVize() {
  return (
    <>
      <Head>
        <title>Avusturya Vize 2026 | Schengen Başvuru Rehberi</title>
        <meta
          name="description"
          content="Avusturya Schengen vizesi nasıl alınır? 2026 güncel evrak listesi, randevu süreci, VFS başvuru adımları ve ret riskini azaltma rehberi."
        />
        <meta
          name="keywords"
          content="avusturya vize, avusturya schengen vizesi, viyana vize başvurusu, avusturya turistik vize"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/avusturya-vize"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-red-100 text-red-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-red-200">
            Avusturya Cumhuriyeti – Schengen Bölgesi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Avusturya Vize <br/>
            <span className="text-red-600 italic">Başvurusu Nasıl Yapılır?</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Avusturya Schengen vizesi ile 90 güne kadar turistik, ticari
            veya aile ziyareti amacıyla seyahat edebilirsiniz.
            Doğru evrak ve planlı başvuru ile ret riskinizi azaltabilirsiniz.
          </p>
        </header>

        {/* VİZE TÜRLERİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Avusturya Vize Türleri
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold mb-3 text-red-600">Turistik Vize</h3>
              <p className="text-sm text-slate-600">
                Viyana, Salzburg, Hallstatt gibi şehirler için kısa süreli Schengen vizesi.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold mb-3 text-red-600">Ticari Vize</h3>
              <p className="text-sm text-slate-600">
                Fuar, toplantı ve iş seyahatleri için davetiyeli başvuru türü.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold mb-3 text-red-600">Aile / Ziyaret</h3>
              <p className="text-sm text-slate-600">
                Avusturya’da yaşayan yakınlarınızı ziyaret etmek için başvuru.
              </p>
            </div>

          </div>
        </section>

        {/* SÜREÇ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Avusturya Vize Süreci
          </h2>

          <div className="grid md:grid-cols-5 gap-4">

            {[
              "Vize türünün belirlenmesi",
              "Evrakların hazırlanması",
              "VFS üzerinden randevu alınması",
              "Biyometri işlemleri",
              "Konsolosluk değerlendirmesi"
            ].map((step, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <span className="text-3xl font-black text-red-200">{i + 1}</span>
                <p className="text-sm mt-3 text-slate-600">{step}</p>
              </div>
            ))}

          </div>
        </section>

        {/* İÇ LINK BLOK */}
        <section className="text-center border-t pt-10 mb-24">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Avusturya Vize Detayları
          </p>

          <div className="flex flex-wrap justify-center gap-6 font-bold text-sm">

            <Link href="/avusturya-vize-evraklari" className="hover:underline">
              Avusturya Vize Evrakları →
            </Link>

            <Link href="/avusturya-vize-randevusu" className="hover:underline">
              Avusturya Vize Randevusu →
            </Link>

            <Link href="/avusturya-vize-reddi" className="hover:underline">
              Avusturya Vize Reddi →
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6 uppercase">
            Avusturya Vizesi İçin Profesyonel Destek
          </h2>

          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Evrak hatası veya eksik başvuru nedeniyle ret riski yaşamayın.
            Dosyanızı uzman ekibimizle birlikte hazırlayalım.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Avusturya%20vize%20başvurusu%20için%20destek%20almak%20istiyorum."
            className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Destek Al
          </a>
        </section>

      </main>
    </>
  );
}
