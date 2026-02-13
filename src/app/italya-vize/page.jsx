import Head from "next/head";
import Link from "next/link";
export const metadata = {
  title: "İtalya Vize 2026 | Schengen Başvuru, Evraklar ve Randevu",
  description:
    "İtalya Schengen vizesi nasıl alınır? Evrak listesi, VFS randevu süreci, değerlendirme süresi ve ret nedenleri hakkında 2026 güncel rehber.",
  keywords: [
    "italya vize",
    "italya schengen vizesi",
    "italya vize evrakları",
    "italya vize randevusu",
    "italya vfs",
    "italya vize reddi",
  ],
  openGraph: {
    title: "İtalya Vize 2026 | Schengen Başvuru Rehberi",
    description:
      "İtalya Schengen vizesi için güncel başvuru süreci ve evrak listesi.",
    url: "https://ayajourney.com/italya-vize",
    type: "article",
  },
  alternates: {
    canonical: "https://ayajourney.com/italya-vize",
  },
};
export default function ItalyaVize() {
  return (
    <>
      <Head>
        <title>İtalya Vize 2026 | Schengen Başvuru Rehberi & Randevu Süreci</title>
        <meta
          name="description"
          content="İtalya Schengen vizesi nasıl alınır? İtalya vize evrakları, randevu süreci, VFS Global başvurusu ve ret nedenleri hakkında 2026 güncel rehber."
        />
        <link rel="canonical" href="https://www.siteadresin.com/italya-vize" />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <section className="text-center mb-20">
          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-green-200">
            İtalya Schengen Vizesi 2026
          </span>

          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
            İtalya Vize Başvurusu <br />
            <span className="text-green-600 italic">Adım Adım Rehber</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            İtalya Schengen vizesi için gerekli evraklar, VFS Global randevu süreci,
            değerlendirme süresi ve ret risklerini detaylı şekilde açıklıyoruz.
          </p>
        </section>

        {/* İTALYA SÜRECİ */}
        <section className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
            <h3 className="font-bold text-xl mb-4">1. Evrak Hazırlığı</h3>
            <p className="text-sm text-slate-500">
              İtalya vize evrak listesi eksiksiz hazırlanmalıdır. Banka hesap dökümü ve seyahat planı kritik önemdedir.
            </p>
            <Link href="/italya-vize-evraklari" className="text-green-600 font-semibold text-sm mt-4 inline-block hover:underline">
              İtalya Vize Evrakları →
            </Link>
          </div>

          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
            <h3 className="font-bold text-xl mb-4">2. VFS Randevu</h3>
            <p className="text-sm text-slate-500">
              İtalya başvuruları VFS Global üzerinden yapılır. Randevu yoğunluğu dönemsel değişir.
            </p>
            <Link href="/italya-vize-randevusu" className="text-green-600 font-semibold text-sm mt-4 inline-block hover:underline">
              İtalya Randevu Süreci →
            </Link>
          </div>

          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
            <h3 className="font-bold text-xl mb-4">3. Değerlendirme</h3>
            <p className="text-sm text-slate-500">
              Başvurular genellikle 7-15 iş günü içinde sonuçlanır. Eksik evrak ret sebebidir.
            </p>
            <Link href="/italya-vize-reddi" className="text-green-600 font-semibold text-sm mt-4 inline-block hover:underline">
              İtalya Vize Reddi →
            </Link>
          </div>
        </section>

        {/* SÜRE VE ÜCRET */}
        <section className="bg-slate-50 p-12 rounded-3xl mb-24 border border-slate-100">
          <h2 className="text-3xl font-black mb-6 text-center">
            İtalya Vizesi Kaç Günde Çıkar?
          </h2>

          <p className="text-slate-600 text-center max-w-3xl mx-auto leading-relaxed">
            İtalya Schengen vizesi genellikle 7 – 15 iş günü içinde sonuçlanır.
            Yoğun dönemlerde bu süre uzayabilir. Konsolosluk ek evrak talep edebilir.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-green-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">
            İtalya Vize Sürecinizi Profesyonel Yönetin
          </h2>

          <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
            Eksik evrak, hatalı finansal profil veya yanlış ülke seçimi
            vize reddine yol açabilir. Süreci birlikte planlayalım.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://wa.me/905302199056"
              className="bg-white text-green-700 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition"
            >
              WhatsApp Destek
            </a>

            <Link
              href="/iletisim"
              className="bg-green-900/40 text-white px-12 py-5 rounded-2xl font-black text-xl border border-white/20"
            >
              İletişime Geç
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
