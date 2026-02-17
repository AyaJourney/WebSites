import Link from "next/link";
export const metadata = {
  title: "Dubai Vizesi 2026 | BAE E-Vize Başvuru Rehberi ve Ücretler",
  description:
    "Dubai (BAE) turist vizesi nasıl alınır? 30 günlük e-vize başvuru süreci, gerekli evraklar, ücretler ve ret nedenleri. 2026 güncel Dubai vize rehberi.",
  keywords: [
    "dubai vizesi",
    "bae vizesi",
    "dubai turist vizesi",
    "dubai e vize",
    "dubai vize ücreti",
    "dubai vize evrakları",
    "dubai vize reddi"
  ],
  alternates: {
    canonical: "https://ayajourney.com/dubai-vizesi"
  },
  openGraph: {
    title: "Dubai Vizesi Başvuru Rehberi 2026",
    description:
      "Dubai e-vize nasıl alınır? Evrak listesi, başvuru süreci ve ret nedenleri.",
    url: "https://ayajourney.com/dubai-vizesi",
    type: "article"
  }
};

export default function DubaiVizesi() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-slate-900">

      {/* HERO */}
      <header className="text-center mb-16">
        <span className="bg-amber-50 text-amber-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-amber-100">
          Birleşik Arap Emirlikleri (UAE) 2026
        </span>

        <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
          Dubai Vizesi <br/>
          <span className="text-amber-600 italic">E-Vize Rehberi</span>
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6 leading-relaxed">
          Dubai turist vizesi başvurusu tamamen online yapılır. 
          Pasaport ve kimlik bilgileri ile 24–72 saat içinde sonuçlanabilir.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/dubai-vize-evraklari"
            className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition"
          >
            Evrak Listesi
          </Link>

          <Link
            href="/dubai-vize-basvurusu"
            className="bg-white border border-slate-300 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition"
          >
            Başvuru Süreci
          </Link>
        </div>
      </header>

      {/* VİZE TÜRLERİ */}
      <section className="grid md:grid-cols-3 gap-8 mb-20">

        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
          <h3 className="font-bold text-xl mb-4">30 Günlük Turist Vizesi</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Tek girişli kısa süreli Dubai ziyareti için en çok tercih edilen e-vize türüdür.
          </p>
        </div>

        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
          <h3 className="font-bold text-xl mb-4">60 Günlük Vize</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Uzun süreli konaklama planlayanlar için uygundur.
          </p>
        </div>

        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
          <h3 className="font-bold text-xl mb-4">Çok Girişli Vize</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            İş seyahati veya sık giriş çıkış yapacak kişiler için avantajlıdır.
          </p>
        </div>

      </section>

      {/* AVANTAJ BÖLÜMÜ */}
      <section className="bg-amber-50 border-2 border-amber-400 p-10 rounded-3xl mb-20">
        <h2 className="text-2xl font-black text-amber-800 mb-4">
          Dubai Vizesi Neden Daha Kolay?
        </h2>

        <ul className="space-y-3 text-amber-900">
          <li>✓ Konsolosluk mülakatı yok</li>
          <li>✓ Evrak minimum seviyede</li>
          <li>✓ Ortalama 48 saatte sonuç</li>
          <li>✓ Online başvuru sistemi</li>
        </ul>
      </section>

      {/* NASIL ALINIR */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-10 text-center">
          Dubai Vizesi Nasıl Alınır?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {["Online Başvuru", "Pasaport Yükleme", "Ödeme", "E-Vize Onayı"].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200">
              <div className="text-3xl font-black text-amber-200 mb-2">0{i+1}</div>
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STRONG CTA */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-12 text-center text-white shadow-2xl mb-20">
        <h2 className="text-3xl md:text-4xl font-black mb-6">
          Dubai Vizenizi 48 Saatte Hazırlayalım
        </h2>

        <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto">
          Evrak yükleme hataları ve yanlış pasaport bilgileri ret sebebidir.
          Dosyanızı profesyonelce kontrol edelim.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/randevu"
            className="bg-white text-orange-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-orange-50 transition shadow-xl"
          >
            Hemen Başvur
          </Link>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Dubai%20vizesi%20i%C3%A7in%20bilgi%20almak%20istiyorum."
            className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition shadow-lg"
          >
            WhatsApp Destek
          </a>
        </div>
      </section>

      {/* SİLO NAV */}
      <section className="border-t border-slate-200 pt-10">
        <p className="text-xs uppercase tracking-widest text-slate-400 mb-6">
          Dubai Vize Rehberleri
        </p>

        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <Link href="/dubai-vize-evraklari" className="hover:underline">
            Dubai Vize Evrakları →
          </Link>

          <Link href="/dubai-vize-basvurusu" className="hover:underline">
            Dubai Başvuru Süreci →
          </Link>

          <Link href="/dubai-vize-reddi" className="hover:underline">
            Dubai Vize Reddi →
          </Link>
        </div>
      </section>

    </main>
  );
}
