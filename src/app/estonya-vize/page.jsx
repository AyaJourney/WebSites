import Head from "next/head";
import Link from "next/link";

export default function EstonyaVize() {
  return (
    <>
      <Head>
        <title>Estonya Vize 2026 | Schengen Başvuru Rehberi ve Şartlar</title>
        <meta
          name="description"
          content="Estonya Schengen vizesi nasıl alınır? 2026 güncel Estonya vize şartları, evrak listesi, randevu süreci ve ret nedenleri hakkında detaylı rehber."
        />
        <meta
          name="keywords"
          content="estonya vize, estonya schengen vizesi, estonya vize başvurusu, estonya vize evrakları, estonya vize randevusu, estonya vize reddi"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/estonya-vize"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-200">
            Estonya Schengen Rehberi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Estonya Vize Başvurusu <br/>
            <span className="text-blue-600 italic">Nasıl Yapılır?</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Estonya Schengen vizesi ile 26 Avrupa ülkesine seyahat edebilirsiniz.
            Turistik, ticari ve aile ziyareti başvurularında 2026 güncel şartları
            adım adım anlatıyoruz.
          </p>
        </header>

        {/* ESTONYA VİZE TÜRLERİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Estonya Vize Türleri
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-blue-600">
                Turistik Vize
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tallinn ve diğer şehirler için kısa süreli
                seyahat başvurularıdır.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-blue-600">
                Ticari Vize
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fuar, iş görüşmesi veya ticari davetli
                seyahatlerde alınır.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-blue-600">
                Aile / Ziyaret Vizesi
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Estonya’da yaşayan yakınlarını ziyaret
                etmek için alınır.
              </p>
            </div>

          </div>
        </section>

        {/* BAŞVURU ADIMLARI */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
          <h2 className="text-3xl font-black mb-8 text-center">
            Estonya Vize Başvuru Süreci
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 text-slate-300">
            <p>1️⃣ Gerekli evrakların hazırlanması</p>
            <p>2️⃣ Randevu alınması</p>
            <p>3️⃣ Biyometrik veri kaydı</p>
            <p>4️⃣ Değerlendirme süreci (ortalama 10-15 gün)</p>
          </div>
        </section>

        {/* SÜRE & ÜCRET */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-6">
            Estonya Vize Kaç Günde Çıkar?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Estonya Schengen vizesi genellikle 10–15 iş günü içinde sonuçlanır.
            Yoğun dönemlerde bu süre uzayabilir.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Schengen kısa süreli vize harcı 80 Euro’dur.
          </p>
        </section>

        {/* İÇ LİNKLER */}
        <section className="mb-24 text-center border-t pt-10">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Estonya Vize Serisi
          </p>

          <div className="flex flex-wrap justify-center gap-6 font-bold text-sm">

            <Link href="/estonya-vize-evraklari" className="hover:underline">
              Estonya Vize Evrakları →
            </Link>

            <Link href="/estonya-vize-randevusu" className="hover:underline">
              Estonya Vize Randevusu →
            </Link>

            <Link href="/estonya-vize-reddi" className="hover:underline">
              Estonya Vize Reddi →
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6 uppercase">
            Estonya Vize Dosyanızı Hazırlayalım
          </h2>

          <p className="mb-8 max-w-2xl mx-auto text-blue-100">
            Evrak kontrolü ve randevu planlaması için uzman desteği alın.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Estonya%20vize%20başvurusu%20için%20destek%20almak%20istiyorum."
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Destek Al
          </a>
        </section>

      </main>
    </>
  );
}
