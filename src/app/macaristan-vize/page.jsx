import Link from "next/link";


export const metadata = {
  title: "Macaristan Vize Başvurusu 2026 | Macaristan Schengen Vizesi Nasıl Alınır?",
  description:
    "Macaristan vize başvurusu nasıl yapılır? 2026 güncel evrak listesi, randevu alma süreci, VFS işlemleri ve vize reddi nedenleri. Macaristan Schengen vizesi hakkında detaylı rehber.",
  
  keywords: [
    "Macaristan vize",
    "Macaristan Schengen vizesi",
    "Macaristan vize başvurusu",
    "Macaristan vize evrakları",
    "Macaristan vize randevusu",
    "Macaristan VFS",
    "Macaristan ticari vize",
    "Macaristan turistik vize",
    "Macaristan vize reddi"
  ],

  alternates: {
    canonical: "https://www.siteadi.com/macaristan-vize",
  },

  openGraph: {
    title: "Macaristan Vize Başvurusu 2026 | Güncel Rehber",
    description:
      "Macaristan Schengen vizesi için evrak listesi, randevu süreci ve ret riskleri. 2026 güncel başvuru rehberi.",
    url: "https://www.siteadi.com/macaristan-vize",
    siteName: "Aya Journey",
    locale: "tr_TR",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Macaristan Vizesi Nasıl Alınır? 2026 Rehberi",
    description:
      "Macaristan vize başvurusu için gerekli evraklar, randevu süreci ve onay şansını artırma yolları.",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function MacaristanVize() {
  return (
    <main className="min-h-screen bg-zinc-50">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">

          <p className="text-sm text-green-600 font-semibold mb-2">
            Schengen Bölgesi • Macaristan
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Macaristan Vize Başvurusu 2026
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
            Macaristan Schengen vizesi almak mı istiyorsunuz?
            Turistik, ticari veya aile ziyareti başvurularında
            gerekli evraklar, randevu süreci ve ret riskleri burada.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/macaristan-vize-randevusu"
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
            >
              Randevu Süreci →
            </Link>

            <Link
              href="/macaristan-vize-evraklari"
              className="border border-slate-300 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition"
            >
              Evrak Listesi →
            </Link>
          </div>

        </div>
      </section>

      {/* MACARİSTAN NEDEN AVANTAJLI */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white p-10 rounded-2xl border border-slate-200">

          <h2 className="text-3xl font-bold mb-6">
            Macaristan Vizesi Kolay mı?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Macaristan, özellikle ticari başvurularda ve kültürel seyahatlerde
            esnek politika uygulayan ülkelerden biridir.
            Profiliniz doğru hazırlanırsa ilk başvuruda onay alma ihtimali yüksektir.
          </p>

          <ul className="space-y-3 text-slate-700">
            <li>• Ticari vize başvurularında olumlu yaklaşım</li>
            <li>• Schengen geçmişi olanlara multi vize şansı</li>
            <li>• Randevu yoğunluğu diğer ülkelere göre daha düşük</li>
          </ul>

        </div>
      </section>

      {/* RANDEVU */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-slate-900 text-white p-10 rounded-2xl">

          <h2 className="text-3xl font-bold mb-6">
            Macaristan Vize Randevusu Nasıl Alınır?
          </h2>

          <p className="text-slate-300 mb-6 leading-relaxed">
            Macaristan vize başvuruları genellikle VFS Global üzerinden yapılır.
            Slot bulma süreci dönemsel yoğunluğa göre değişebilir.
          </p>

          <Link
            href="/macaristan-vize-randevusu"
            className="text-green-400 font-semibold hover:underline"
          >
            Macaristan randevu rehberi →
          </Link>

        </div>
      </section>

      {/* EVRAKLAR */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white p-10 rounded-2xl border border-slate-200">

          <h2 className="text-3xl font-bold mb-6">
            Macaristan Vize Evrakları
          </h2>

          <p className="text-slate-600 mb-6 leading-relaxed">
            Başvuruda sunulacak belgelerin eksiksiz ve tutarlı olması
            Schengen ret riskini ciddi oranda azaltır.
          </p>

          <Link
            href="/macaristan-vize-evraklari"
            className="font-semibold hover:underline"
          >
            Güncel evrak listesi →
          </Link>

        </div>
      </section>

      {/* RET */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-red-600 text-white rounded-2xl p-12 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Macaristan Vize Reddi Aldıysanız
          </h2>

          <p className="max-w-2xl mx-auto mb-8 text-red-100">
            Ret kodunun doğru analiz edilmesi gerekir.
            Yanlış ikinci başvuru kalıcı Schengen riskine yol açabilir.
          </p>

          <Link
            href="/macaristan-vize-reddi"
            className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition"
          >
            Ret analizi →
          </Link>

        </div>
      </section>

      {/* SİLO NAV */}
      <nav className="max-w-6xl mx-auto px-6 pb-24 border-t border-slate-200 pt-10">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
          Schengen Ülkeleri
        </p>

        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <Link href="/fransa-vize" className="hover:underline">
            Fransa →
          </Link>
          <Link href="/yunanistan-vize" className="hover:underline">
            Yunanistan →
          </Link>
          <Link href="/hollanda-vize" className="hover:underline">
            Hollanda →
          </Link>
        </div>
      </nav>

    </main>
  );
}
