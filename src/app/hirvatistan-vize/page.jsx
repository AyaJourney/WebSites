import Head from "next/head";
import Link from "next/link";

export default function HirvatistanVize() {
  return (
    <>
      <Head>
        <title>Hırvatistan Vize 2026 | Schengen Başvuru Rehberi</title>
        <meta
          name="description"
          content="Hırvatistan Schengen vizesi nasıl alınır? Evrak listesi, randevu süreci, ücretler ve ret nedenleri. 2026 güncel Hırvatistan vize rehberi."
        />
        <meta
          name="keywords"
          content="hırvatistan vize, hırvatistan schengen vizesi, hırvatistan vize başvurusu, hırvatistan vize evrakları"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/hirvatistan-vize"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-red-100 text-red-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-red-200">
            Hırvatistan Schengen Vizesi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Hırvatistan Vize <br/>
            <span className="text-red-600 italic">Başvuru Rehberi 2026</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hırvatistan 2023 itibariyle Schengen bölgesine dahil olmuştur.
            Turistik, ticari ve aile ziyareti başvurularında süreç VFS Global
            üzerinden yürütülmektedir.
          </p>
        </header>

        {/* GENEL BİLGİ */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            Hırvatistan Vizesi Nedir?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Hırvatistan Schengen vizesi ile 90 güne kadar turistik,
            ticari veya aile ziyareti amaçlı seyahat edebilirsiniz.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Başvurular Türkiye’de VFS Global aracılığıyla alınır ve karar
            Zagreb Konsolosluğu tarafından verilir.
          </p>
        </section>

        {/* SÜREÇ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Hırvatistan Vize Süreci
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-sm text-slate-600">

            <div className="p-8 bg-white border rounded-2xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3">1. Evrak Hazırlığı</h4>
              <p>Profilinize uygun belgeler eksiksiz hazırlanır.</p>
            </div>

            <div className="p-8 bg-white border rounded-2xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3">2. VFS Randevu</h4>
              <p>Online sistem üzerinden randevu alınır.</p>
            </div>

            <div className="p-8 bg-white border rounded-2xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3">3. Biyometri</h4>
              <p>Parmak izi ve fotoğraf işlemi yapılır.</p>
            </div>

            <div className="p-8 bg-white border rounded-2xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3">4. Değerlendirme</h4>
              <p>Ortalama 10-15 iş günü içinde sonuçlanır.</p>
            </div>

          </div>
        </section>

        {/* ÜCRET */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-24">
          <h2 className="text-3xl font-black mb-6">
            Hırvatistan Vize Ücreti
          </h2>

          <ul className="space-y-4 text-slate-200 text-sm">
            <li>• Konsolosluk harcı: 80 Euro</li>
            <li>• 6–12 yaş: 40 Euro</li>
            <li>• VFS servis ücreti ayrıca alınır</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Hırvatistan Vize Sürecinizi Profesyonel Yönetin
          </h2>

          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Dosyanızı doğru hazırlayarak ret riskinizi minimize edelim.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20H%C4%B1rvatistan%20vizesi%20i%C3%A7in%20destek%20almak%20istiyorum."
            className="bg-white text-red-600 px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition"
          >
            Danışmanlık Al
          </a>
        </section>

        {/* SİLO NAV */}
        <section className="border-t border-slate-200 pt-10 mt-20 text-sm font-bold flex flex-wrap gap-6 justify-center">
          <Link href="/hirvatistan-vize-evraklari" className="hover:text-blue-600 transition">
            Hırvatistan Vize Evrakları →
          </Link>

          <Link href="/hirvatistan-vize-randevusu" className="hover:text-blue-600 transition">
            Hırvatistan Vize Randevusu →
          </Link>

          <Link href="/hirvatistan-vize-reddi" className="hover:text-blue-600 transition">
            Hırvatistan Vize Reddi →
          </Link>
        </section>

      </main>
    </>
  );
}
