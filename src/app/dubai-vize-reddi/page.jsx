import Link from "next/link";
export const metadata = {
  title: "Dubai Vize Reddi 2026 | Ret Nedenleri ve Çözüm Yolları",
  description:
    "Dubai vize reddi neden olur? Evrak eksikliği, güvenlik kontrolü ve sponsor problemleri. 2026 güncel ret nedenleri ve yeniden başvuru rehberi.",
  keywords: [
    "dubai vize reddi",
    "dubai vize ret nedenleri",
    "dubai vize başvurusu reddedildi",
    "dubai vize itiraz",
    "bae vize reddi"
  ],
  alternates: {
    canonical: "https://ayajourney.com/dubai-vize-reddi"
  },
  openGraph: {
    title: "Dubai Vize Reddi Neden Olur?",
    description:
      "Dubai vize reddi sonrası ne yapılmalı? Güncel çözüm rehberi.",
    url: "https://ayajourney.com/dubai-vize-reddi",
    type: "article"
  }
};

export default function DubaiVizeReddi() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-slate-900">

      {/* HERO */}
      <header className="text-center mb-16">
        <span className="bg-red-50 text-red-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-red-100">
          Birleşik Arap Emirlikleri 2026
        </span>

        <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
          Dubai Vize Reddi <br/>
          <span className="text-red-600 italic">Neden Olur?</span>
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6 leading-relaxed">
          Dubai e-vize başvuruları hızlı sonuçlanır ancak güvenlik
          kontrolleri sıkıdır. Ret aldıysanız nedeni bilmeden tekrar
          başvurmak risklidir.
        </p>
      </header>

      {/* EN YAYGIN NEDENLER */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-8 text-center">
          Dubai Vize Reddi Nedenleri
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
            <h3 className="font-bold text-lg mb-4">Eksik veya Hatalı Evrak</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Pasaport taramasının bulanık olması, yanlış fotoğraf formatı
              veya eksik bilgi ret sebebidir.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
            <h3 className="font-bold text-lg mb-4">Önceki BAE İhlalleri</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Daha önce Dubai’de süre aşımı, kaçak kalış veya para cezası
              varsa sistem otomatik red verebilir.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
            <h3 className="font-bold text-lg mb-4">Güvenlik Kontrolü</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Aynı isim-soyisimli kişilerle eşleşme veya riskli ülke geçmişi
              sistem tarafından incelemeye alınabilir.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
            <h3 className="font-bold text-lg mb-4">Sponsor Problemleri</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sponsorlu başvurularda sponsor firma veya kişi ile ilgili
              kayıt problemi varsa ret gelebilir.
            </p>
          </div>

        </div>
      </section>

      {/* KRİTİK UYARI */}
      <section className="bg-red-50 border-2 border-red-500 p-10 rounded-3xl mb-20">
        <h2 className="text-2xl font-black text-red-800 mb-4">
          Dubai Vize Reddi Sonrası Hemen Tekrar Başvurmayın
        </h2>

        <p className="text-red-700 leading-relaxed">
          Aynı evraklarla yeniden başvuru yaparsanız sistem otomatik
          tekrar ret verebilir. Önce red sebebi analiz edilmelidir.
        </p>
      </section>

      {/* NE YAPILMALI */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-8 text-center">
          Dubai Vize Reddi Sonrası Ne Yapmalı?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          {[
            "Ret Sebebi Analizi",
            "Evrak Revizyonu",
            "Yeniden Güçlü Başvuru"
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white border border-slate-200 rounded-2xl">
              <div className="text-3xl font-black text-red-200 mb-3">0{i+1}</div>
              <p className="font-semibold">{item}</p>
            </div>
          ))}

        </div>
      </section>

      {/* İÇ LİNKLER */}
      <section className="border-t border-slate-200 pt-10 mb-20">
        <p className="text-xs uppercase tracking-widest text-slate-400 mb-6">
          Dubai Vize Rehberleri
        </p>

        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <Link href="/dubai-vizesi" className="hover:underline">
            Dubai Vizesi →
          </Link>

          <Link href="/dubai-vize-evraklari" className="hover:underline">
            Dubai Evrak Listesi →
          </Link>

          <Link href="/dubai-vize-ucreti" className="hover:underline">
            Dubai Vize Ücreti →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-red-600 to-rose-700 rounded-3xl p-12 text-center text-white shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-black mb-6">
          Dubai Vize Ret Dosyanızı İnceleyelim
        </h2>

        <p className="text-rose-100 text-lg mb-10 max-w-2xl mx-auto">
          Ret aldıysanız sebebini teknik olarak analiz edip
          yeniden başvurunuzu güçlü hale getirelim.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/randevu"
            className="bg-white text-red-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-rose-50 transition shadow-xl"
          >
            Dosyamı Analiz Et
          </Link>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Dubai%20vize%20reddi%20ald%C4%B1m.%20Yard%C4%B1m%20istiyorum."
            className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition shadow-lg"
          >
            WhatsApp Destek
          </a>
        </div>
      </section>

    </main>
  );
}
