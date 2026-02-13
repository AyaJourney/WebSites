import Head from "next/head";
import Link from "next/link";

export default function BelcikaVize() {
  return (
    <>
      <Head>
        <title>Belçika Vize 2026 | Schengen Belçika Vizesi Başvuru Rehberi</title>
        <meta
          name="description"
          content="Belçika Schengen vizesi nasıl alınır? 2026 güncel başvuru süreci, gerekli belgeler, VFS randevu adımları ve ret nedenleri. Turistik, ticari ve aile ziyareti için detaylı rehber."
        />
        <meta
          name="keywords"
          content="belçika vize, belçika schengen vizesi, belçika vize başvurusu, belçika vfs randevu, belçika turist vizesi"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/belcika-vize"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-yellow-200">
            Schengen Vize Rehberi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Belçika Vize <br/>
            <span className="text-yellow-500 italic">Başvuru Rehberi</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Belçika Schengen vizesi almak için gerekli tüm adımları,
            evrak listesini, randevu sürecini ve ret risklerini
            sizin için detaylı şekilde hazırladık.
          </p>
        </header>

        {/* BELÇİKA VİZE TÜRLERİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Belçika Vize Türleri
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4">Turistik Vize</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kısa süreli turistik seyahatler için 90 güne kadar Schengen vizesi.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4">Ticari Vize</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                İş toplantısı, fuar ve ticari görüşmeler için davetiyeli başvuru.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4">Aile Ziyareti</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Belçika’da yaşayan yakın akraba ziyareti için başvuru türü.
              </p>
            </div>

          </div>
        </section>

        {/* BAŞVURU SÜRECİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Belçika Vize Başvuru Süreci
          </h2>

          <ol className="space-y-4 text-slate-700 list-decimal list-inside leading-relaxed">
            <li>Doğru vize türü belirlenir.</li>
            <li>Evraklar hazırlanır.</li>
            <li>VFS Global üzerinden randevu alınır.</li>
            <li>Biyometrik veri verilir.</li>
            <li>Ortalama 15 iş günü içinde sonuç açıklanır.</li>
          </ol>

          <div className="mt-8">
            <Link
              href="/belcika-vize-randevusu"
              className="text-yellow-600 font-bold underline"
            >
              Randevu Sürecini Detaylı İncele →
            </Link>
          </div>
        </section>

        {/* RET RİSKİ */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-24 shadow-2xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            Belçika Vizesi Neden Reddedilir?
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto text-center leading-relaxed mb-6">
            Finansal yetersizlik, geri dönüş şüphesi ve eksik evrak
            en sık ret nedenleridir.
          </p>

          <div className="text-center">
            <Link
              href="/belcika-vize-reddi"
              className="text-yellow-400 underline font-bold"
            >
              Ret Nedenlerini Gör →
            </Link>
          </div>
        </section>

        {/* SİLO NAV */}
        <section className="text-center border-t pt-10 mb-24">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Belçika Vize Serisi
          </p>

          <div className="flex flex-wrap justify-center gap-6 font-bold text-sm">

            <Link href="/belcika-vize-evraklari" className="hover:underline">
              Belçika Vize Evrakları →
            </Link>

            <Link href="/belcika-vize-randevusu" className="hover:underline">
              Belçika Vize Randevusu →
            </Link>

            <Link href="/belcika-vize-reddi" className="hover:underline">
              Belçika Vize Reddi →
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-yellow-500 text-slate-900 rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6 uppercase">
            Belçika Vize Başvurunuzu Güçlü Hazırlayalım
          </h2>

          <p className="mb-8 max-w-2xl mx-auto">
            Evrak kontrolü, finansal analiz ve randevu planlaması ile
            onay ihtimalinizi artırıyoruz.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Belçika%20vize%20başvurusu%20için%20destek%20almak%20istiyorum."
            className="bg-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Başvuru Desteği Al
          </a>
        </section>

      </main>
    </>
  );
}
