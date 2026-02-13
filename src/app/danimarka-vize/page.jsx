import Head from "next/head";
import Link from "next/link";

export default function DanimarkaVize() {
  return (
    <>
      <Head>
        <title>Danimarka Vize 2026 | Schengen Başvuru Rehberi</title>
        <meta
          name="description"
          content="Danimarka Schengen vizesi nasıl alınır? Evrak listesi, VFS randevu süreci, ret nedenleri ve 2026 güncel başvuru rehberi."
        />
        <link
          rel="canonical"
          href="https://www.siteadresin.com/danimarka-vize"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-16">
          <span className="bg-red-100 text-red-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-red-200">
            Danimarka Krallığı • Schengen Bölgesi
          </span>

          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
            Danimarka Vize <br/>
            <span className="text-red-600 italic">Başvuru Rehberi</span>
          </h1>

          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Danimarka Schengen vizesi için gerekli evraklar, randevu süreci,
            finansal kriterler ve ret risklerini detaylıca açıklıyoruz.
          </p>
        </header>

        {/* GENEL BİLGİ */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            Danimarka Vizesi Nedir?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Danimarka kısa süreli (C tipi) Schengen vizesi ile 180 gün içinde
            maksimum 90 gün kalış hakkı tanır. Turistik, ticari ve aile ziyareti
            kategorilerinde başvuru yapılabilir.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Başvurular Türkiye’de VFS Global aracılığıyla kabul edilir ve karar
            Danimarka Konsolosluğu tarafından verilir.
          </p>
        </section>

        {/* 3 ANA BAŞLIK BLOĞU */}
        <section className="grid md:grid-cols-3 gap-8 mb-24">

          <Link href="/danimarka-vize-evraklari" className="group bg-white p-8 rounded-[3rem] border-2 border-slate-100 hover:border-red-400 transition shadow-sm">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-2xl font-black mb-4">
              Danimarka Vize Evrakları
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Banka dökümü, iş belgeleri ve finansal yeterlilik kriterleri.
            </p>
          </Link>

          <Link href="/danimarka-vize-randevusu" className="group bg-white p-8 rounded-[3rem] border-2 border-slate-100 hover:border-red-400 transition shadow-sm">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-2xl font-black mb-4">
              Danimarka Vize Randevusu
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              VFS Global üzerinden randevu alma adımları ve slot saatleri.
            </p>
          </Link>

          <Link href="/danimarka-vize-reddi" className="group bg-white p-8 rounded-[3rem] border-2 border-slate-100 hover:border-red-400 transition shadow-sm">
            <div className="text-4xl mb-4">❌</div>
            <h3 className="text-2xl font-black mb-4">
              Danimarka Vize Reddi
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Ret kodları, itiraz süreci ve yeniden başvuru stratejileri.
            </p>
          </Link>

        </section>

        {/* RET RİSK PANEL */}
        <section className="bg-red-50 border-2 border-red-600 p-12 rounded-[3rem] mb-24">
          <h2 className="text-2xl font-black text-red-900 mb-6">
            Danimarka Vizesi Zor mu?
          </h2>

          <p className="text-red-800 leading-relaxed">
            Danimarka, finansal yeterlilik ve geri dönüş niyeti konusunda
            titiz davranır. Özellikle düzensiz banka hareketleri ve seyahat
            planındaki tutarsızlıklar ret sebebidir.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 rounded-[3rem] p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6 italic">
            Danimarka Başvurunuzu Güçlendirelim
          </h2>

          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Evrak kontrolü ve stratejik dosya hazırlığı ile
            ret riskinizi minimize edelim.
          </p>

          <a
            href="https://wa.me/905302199056"
            className="bg-red-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-red-700 transition"
          >
            Uzman Destek Al
          </a>
        </section>

      </main>
    </>
  );
}
