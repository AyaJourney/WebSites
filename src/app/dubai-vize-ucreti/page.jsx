import Link from "next/link";
export const metadata = {
  title: "Dubai Vize Ücreti 2026 | Güncel 30 ve 60 Günlük Fiyatlar",
  description:
    "Dubai turist vizesi 2026 ücretleri. 30 günlük, 60 günlük ve ekspres Dubai e-vize fiyatları. Güncel BAE vize harçları ve başvuru süreci.",
  keywords: [
    "dubai vize ücreti",
    "dubai vize fiyatı 2026",
    "dubai turist vizesi ne kadar",
    "dubai 30 günlük vize ücreti",
    "dubai 60 günlük vize fiyatı",
    "bae vize harcı"
  ],
  alternates: {
    canonical: "https://ayajourney.com/dubai-vize-ucreti"
  },
  openGraph: {
    title: "Dubai Vize Ücreti 2026 Güncel Fiyat Listesi",
    description:
      "Dubai turist vizesi ücretleri ve başvuru süreci detaylı anlatım.",
    url: "https://ayajourney.com/dubai-vize-ucreti",
    type: "article"
  }
};

export default function DubaiVizeUcreti() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-slate-900">

      {/* HERO */}
      <header className="text-center mb-16">
        <span className="bg-orange-50 text-orange-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-orange-100">
          Birleşik Arap Emirlikleri 2026 Güncel
        </span>

        <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
          Dubai Vize Ücreti <br/>
          <span className="text-orange-600 italic">Ne Kadar?</span>
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6 leading-relaxed">
          Dubai turist vizesi (e-vize) ücretleri başvuru süresi ve kalış süresine göre değişir.
          30 günlük, 60 günlük ve ekspres başvuru fiyatlarını aşağıda bulabilirsiniz.
        </p>
      </header>

      {/* ÜCRET TABLOSU */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-8 text-center">
          Dubai Vize Fiyatları 2026
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="p-4 text-left">Vize Türü</th>
                <th className="p-4 text-left">Kalış Süresi</th>
                <th className="p-4 text-left">Tahmini Ücret</th>
                <th className="p-4 text-left">Sonuçlanma Süresi</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-t">
                <td className="p-4 font-semibold">Turist E-Vize</td>
                <td className="p-4">30 Gün</td>
                <td className="p-4">120 – 160 USD</td>
                <td className="p-4">2-4 İş Günü</td>
              </tr>
              <tr className="border-t bg-slate-50">
                <td className="p-4 font-semibold">Turist E-Vize</td>
                <td className="p-4">60 Gün</td>
                <td className="p-4">180 – 250 USD</td>
                <td className="p-4">2-4 İş Günü</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">Ekspres Başvuru</td>
                <td className="p-4">30 / 60 Gün</td>
                <td className="p-4">+50 – 80 USD</td>
                <td className="p-4">24 Saat</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-slate-500 mt-4">
          *Ücretler başvuru dönemine ve aracı firmaya göre değişebilir.
        </p>
      </section>

      {/* NEDEN FİYATLAR DEĞİŞİR */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-6">
          Dubai Vize Ücreti Neden Değişiyor?
        </h2>

        <ul className="space-y-4 text-slate-700 leading-relaxed">
          <li>✓ Seçilen kalış süresi (30 / 60 gün)</li>
          <li>✓ Normal veya ekspres işlem tercihi</li>
          <li>✓ Resmi tatil yoğunluğu</li>
          <li>✓ Önceki BAE giriş-çıkış geçmişi</li>
        </ul>
      </section>

      {/* EKSTRA MASRAF VAR MI */}
      <section className="bg-orange-50 border-2 border-orange-400 p-10 rounded-3xl mb-20">
        <h2 className="text-2xl font-black text-orange-800 mb-4">
          Ekstra Masraf Var mı?
        </h2>

        <p className="text-orange-900 leading-relaxed">
          Dubai e-vize başvurularında konsolosluk harcı dışında ek banka
          komisyonu ve aracı işlem bedeli olabilir.
          Evrak hatası nedeniyle ret alınırsa ücret iade edilmez.
        </p>
      </section>

      {/* SÜREÇ LİNK */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-6">
          Dubai Vizesi Nasıl Alınır?
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          Ücret ödendikten sonra başvuru IRCC benzeri bir sistem değil,
          doğrudan BAE e-vize portalı üzerinden işleme alınır.
        </p>

        <Link
          href="/dubai-vizesi"
          className="font-bold underline"
        >
          Dubai Vize Başvuru Rehberi →
        </Link>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl p-12 text-center text-white shadow-2xl mb-20">
        <h2 className="text-3xl md:text-4xl font-black mb-6">
          Dubai Vizenizi Hemen Başlatalım
        </h2>

        <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto">
          Evrak hatası ve ret riski yaşamamak için başvurunuzu
          uzman kontrolünde gönderin.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/randevu"
            className="bg-white text-orange-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-orange-50 transition shadow-xl"
          >
            Başvurumu Başlat
          </Link>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Dubai%20vize%20ücreti%20hakkında%20bilgi%20almak%20istiyorum."
            className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition shadow-lg"
          >
            WhatsApp Bilgi
          </a>
        </div>
      </section>

      {/* SİLO NAV */}
      <section className="border-t border-slate-200 pt-10">
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

          <Link href="/dubai-vize-reddi" className="hover:underline">
            Dubai Vize Reddi →
          </Link>
        </div>
      </section>

    </main>
  );
}
