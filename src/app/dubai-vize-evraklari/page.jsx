import Link from "next/link";
export const metadata = {
  title: "Dubai Vize Evrakları 2026 | Güncel BAE E-Vize Belge Listesi",
  description:
    "Dubai (BAE) turist vizesi için gerekli evraklar 2026 güncel liste. 30 günlük ve 60 günlük e-vize için pasaport şartları, fotoğraf ölçüsü ve ret riskleri.",
  keywords: [
    "dubai vize evrakları",
    "bae vize evrakları",
    "dubai turist vizesi belgeleri",
    "dubai e vize evrak",
    "dubai vize için gerekli belgeler",
    "dubai vize ret nedenleri"
  ],
  alternates: {
    canonical: "https://ayajourney.com/dubai-vize-evraklari"
  },
  openGraph: {
    title: "Dubai Vize Evrak Listesi 2026",
    description:
      "Dubai e-vize başvurusu için gerekli belgeler ve dikkat edilmesi gereken teknik detaylar.",
    url: "https://ayajourney.com/dubai-vize-evraklari",
    type: "article"
  }
};

export default function DubaiVizeEvraklari() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-slate-900">

      {/* HERO */}
      <header className="text-center mb-16">
        <span className="bg-amber-50 text-amber-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-amber-100">
          Birleşik Arap Emirlikleri – Güncel 2026
        </span>

        <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
          Dubai Vize Evrakları <br/>
          <span className="text-amber-600 italic">Tam ve Güncel Liste</span>
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6 leading-relaxed">
          Dubai turist vizesi için evrak listesi Schengen kadar karmaşık değildir. 
          Ancak teknik hatalar en sık ret sebebidir.
        </p>
      </header>

      {/* ANA EVRAK LİSTESİ */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-8">
          Dubai Vizesi İçin Gerekli Evraklar (30 Günlük Turist Vizesi)
        </h2>

        <ul className="space-y-4 text-slate-700 leading-relaxed">
          <li>✓ En az 6 ay geçerli pasaport (renkli tarama)</li>
          <li>✓ Beyaz fonlu biyometrik fotoğraf (JPG format)</li>
          <li>✓ Kimlik ön yüz taraması</li>
          <li>✓ Uçuş rezervasyonu (gidiş-dönüş)</li>
          <li>✓ Otel rezervasyonu veya davetiye</li>
        </ul>
      </section>

      {/* PASAPORT DETAY */}
      <section className="bg-amber-50 border-2 border-amber-400 p-10 rounded-3xl mb-20">
        <h2 className="text-2xl font-black text-amber-800 mb-4">
          Pasaport Şartları (En Sık Ret Nedeni)
        </h2>

        <p className="text-amber-900 leading-relaxed">
          Dubai e-vize sisteminde pasaport okunabilirliği kritik önemdedir.
          Köşesi kesilmiş, ışık yansıması olan veya bulanık taramalar
          otomatik ret sebebidir.
        </p>
      </section>

      {/* 60 GÜNLÜK VİZE */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-6">
          60 Günlük Dubai Vizesi İçin Ek Evrak Var mı?
        </h2>

        <p className="text-slate-700 leading-relaxed">
          60 günlük vizelerde ek finansal belge genellikle istenmez.
          Ancak önceki Dubai ihlali veya overstay durumunda
          ek kontrol yapılabilir.
        </p>
      </section>

      {/* KRİTİK UYARI */}
      <section className="bg-red-50 border-2 border-red-500 p-10 rounded-3xl mb-20">
        <h2 className="text-2xl font-black text-red-800 mb-4">
          Dubai Vize Reddi Neden Olur?
        </h2>

        <p className="text-red-700 leading-relaxed">
          En yaygın ret nedenleri:
        </p>

        <ul className="mt-4 space-y-3 text-red-800">
          <li>• Daha önce BAE’de kaçak kalış (overstay)</li>
          <li>• Pasaportta İsrail damgası</li>
          <li>• Düşük çözünürlüklü belge yükleme</li>
          <li>• Yanlış pasaport numarası</li>
        </ul>

        <Link
          href="/dubai-vize-reddi"
          className="inline-block mt-6 font-bold underline"
        >
          Dubai Vize Reddi Detaylı Rehberi →
        </Link>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-12 text-center text-white shadow-2xl mb-20">
        <h2 className="text-3xl md:text-4xl font-black mb-6">
          Evraklarınızı Kontrol Edelim
        </h2>

        <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto">
          Dubai e-vize başvurularında teknik hatalar ret sebebidir.
          Başvurunuzu göndermeden önce uzman kontrolü yapalım.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/randevu"
            className="bg-white text-orange-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-orange-50 transition shadow-xl"
          >
            Başvurumu Başlat
          </Link>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Dubai%20vizesi%20evraklar%C4%B1m%C4%B1%20kontrol%20ettirmek%20istiyorum."
            className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition shadow-lg"
          >
            WhatsApp Destek
          </a>
        </div>
      </section>

      {/* SİLO NAV */}
      <section className="border-t border-slate-200 pt-10">
        <p className="text-xs uppercase tracking-widest text-slate-400 mb-6">
          Dubai Vize Rehberi
        </p>

        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <Link href="/dubai-vizesi" className="hover:underline">
            Dubai Vizesi Ana Sayfa →
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
