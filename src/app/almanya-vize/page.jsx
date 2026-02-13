import Head from "next/head";
import Link from "next/link";

export default function AlmanyaVize() {
  return (
    <>
      <Head>
        <title>Almanya Vize 2026 | Schengen Başvuru Rehberi ve Şartlar</title>
        <meta
          name="description"
          content="Almanya Schengen vizesi nasıl alınır? Almanya vize evrakları, randevu süreci, ret nedenleri ve 2026 güncel başvuru şartları."
        />
        <meta
          name="keywords"
          content="almanya vize, almanya schengen vizesi, almanya vize evrakları, almanya vize randevusu, almanya vize reddi"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/almanya-vize"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-yellow-100 text-yellow-800 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-yellow-300">
            Almanya Schengen Vizesi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Almanya Vize <br/>
            <span className="text-black italic">Başvuru Rehberi</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Almanya turistik, ticari ve aile ziyareti vizeleri için
            güncel başvuru şartları, evrak listesi ve randevu süreci.
            2026 Almanya Schengen vizesi rehberi.
          </p>
        </header>

        {/* GENEL BİLGİ */}
        <section className="mb-24 max-w-4xl mx-auto">

          <h2 className="text-3xl font-black mb-6">
            Almanya Schengen Vizesi Nedir?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Almanya Schengen vizesi, 90 güne kadar Almanya ve diğer
            Schengen ülkelerinde seyahat etmenizi sağlar.
            Başvurular Türkiye’de iDATA üzerinden yapılmaktadır.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Turistik, ticari, fuar katılımı, aile ziyareti ve kültürel
            amaçlarla kısa süreli vize başvurusu yapılabilir.
          </p>

        </section>

        {/* BAŞVURU TÜRLERİ */}
        <section className="grid md:grid-cols-3 gap-8 mb-24">

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-xl mb-4">Turistik Vize</h3>
            <p className="text-sm text-slate-600">
              Almanya'da gezi ve turistik seyahat amacıyla başvuru yapılır.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-xl mb-4">Ticari Vize</h3>
            <p className="text-sm text-slate-600">
              Fuar, toplantı veya iş görüşmeleri için düzenlenir.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-xl mb-4">Aile Ziyareti</h3>
            <p className="text-sm text-slate-600">
              Almanya’da yaşayan aile bireylerini ziyaret amacıyla alınır.
            </p>
          </div>

        </section>

        {/* SÜREÇ */}
        <section className="mb-24">

          <h2 className="text-3xl font-black mb-12 text-center">
            Almanya Vize Süreci Nasıl İşler?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-sm text-slate-600">

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              1️⃣ Evrakların hazırlanması
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              2️⃣ iDATA üzerinden randevu alınması
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              3️⃣ Biyometrik veri verilmesi
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              4️⃣ Konsolosluk değerlendirme süreci
            </div>

          </div>

        </section>

        {/* SİLO NAV */}
        <section className="mb-24 text-center">

          <h3 className="text-2xl font-black mb-8">
            Almanya Başvuru Detayları
          </h3>

          <div className="flex flex-wrap justify-center gap-6 font-bold text-sm">

            <Link href="/almanya-vize-evraklari" className="px-6 py-3 bg-slate-50 rounded-xl hover:text-yellow-700 transition">
              Almanya Vize Evrakları →
            </Link>

            <Link href="/almanya-vize-randevusu" className="px-6 py-3 bg-slate-50 rounded-xl hover:text-yellow-700 transition">
              Almanya Vize Randevusu →
            </Link>

            <Link href="/almanya-vize-reddi" className="px-6 py-3 bg-slate-50 rounded-xl hover:text-yellow-700 transition">
              Almanya Vize Reddi →
            </Link>

          </div>

        </section>

        {/* CTA */}
        <section className="bg-black text-white rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6 uppercase">
            Almanya Vize Sürecinizi Profesyonel Yönetin
          </h2>

          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Evrak kontrolü, randevu takibi ve ret analizi desteği ile
            başvurunuzu güvenli şekilde tamamlayın.
          </p>

          <a
            href="https://wa.me/905302199056"
            className="bg-yellow-400 text-black px-12 py-5 rounded-2xl font-black text-xl hover:bg-yellow-300 transition"
          >
            Destek Al
          </a>
        </section>

      </main>
    </>
  );
}
