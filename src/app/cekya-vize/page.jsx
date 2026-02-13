import Head from "next/head";
import Link from "next/link";

export default function CekyaVize() {
  return (
    <>
      <Head>
        <title>Çekya Vize 2026 | Çek Cumhuriyeti Schengen Vizesi Rehberi</title>
        <meta
          name="description"
          content="Çekya Schengen vizesi nasıl alınır? 2026 güncel Çek Cumhuriyeti vize rehberi, randevu süreci, evrak listesi ve ret nedenleri."
        />
        <meta
          name="keywords"
          content="çekya vize, çek cumhuriyeti vize, çekya schengen, prag vize, çekya vize başvurusu"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/cekya-vize"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-200">
            Çek Cumhuriyeti Schengen Rehberi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Çekya Vize <br/>
            <span className="text-blue-600 italic">Başvuru Rehberi 2026</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Çekya (Çek Cumhuriyeti) Schengen vizesi almak için gerekli
            şartlar, evraklar ve randevu sürecini adım adım anlatıyoruz.
            Prag turistik ve ticari vize başvurularında dikkat edilmesi
            gereken tüm detaylar burada.
          </p>
        </header>

        {/* GENEL BİLGİ */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            Çekya Schengen Vizesi Nedir?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            Çekya, Schengen bölgesine dahildir. Alacağınız kısa süreli
            C tipi Schengen vizesi ile Prag başta olmak üzere tüm
            Schengen ülkelerinde 90 güne kadar kalabilirsiniz.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Başvurular Türkiye’de VFS Global üzerinden alınmaktadır.
          </p>
        </section>

        {/* KİMLER BAŞVURMALI */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Kimler Çekya Vizesi Almalıdır?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4">Turistik Seyahat</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Prag ve diğer şehirlerde turistik gezi planlayanlar.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4">Ticari Ziyaret</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                İş görüşmesi, fuar veya şirket toplantıları için.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4">Aile / Arkadaş Ziyareti</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Çekya’da yaşayan yakınlarını ziyaret etmek isteyenler.
              </p>
            </div>

          </div>
        </section>

        {/* SÜREÇ */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-24 shadow-2xl">
          <h2 className="text-3xl font-black mb-8 text-center">
            Çekya Vize Süreci Nasıl İşler?
          </h2>

          <ul className="space-y-4 text-slate-300 max-w-3xl mx-auto text-sm leading-relaxed">
            <li>• Evrakların hazırlanması</li>
            <li>• VFS Global üzerinden randevu alınması</li>
            <li>• Biyometrik veri (parmak izi) verilmesi</li>
            <li>• Dosyanın konsolosluk tarafından değerlendirilmesi</li>
          </ul>
        </section>

        {/* SİLO NAV */}
        <section className="mb-24 text-center">
          <h3 className="text-2xl font-black mb-8">
            Çekya Vize Sürecini Detaylı İnceleyin
          </h3>

          <div className="flex flex-wrap justify-center gap-6 font-bold text-sm">

            <Link href="/cekya-vize-evraklari" className="px-6 py-3 bg-slate-50 rounded-xl hover:text-blue-600 transition">
              Çekya Vize Evrakları →
            </Link>

            <Link href="/cekya-vize-randevusu" className="px-6 py-3 bg-slate-50 rounded-xl hover:text-blue-600 transition">
              Çekya Vize Randevusu →
            </Link>

            <Link href="/cekya-vize-reddi" className="px-6 py-3 bg-slate-50 rounded-xl hover:text-blue-600 transition">
              Çekya Vize Reddi →
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 rounded-[3rem] p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">
            Çekya Vize Başvurunuzu Planlayalım
          </h2>

          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Evrak hazırlığı ve randevu sürecinde hata yapmadan,
            onay ihtimalinizi yükseltelim.
          </p>

          <a
            href="https://wa.me/905302199056"
            className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition"
          >
            Profesyonel Destek Al
          </a>
        </section>

      </main>
    </>
  );
}
