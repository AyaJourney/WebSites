import Head from "next/head";
import Link from "next/link";

export default function MaltaVizeRandevusu() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Malta Vize Randevusu 2026",
    description:
      "Malta Schengen vize randevusu nasıl alınır? VFS üzerinden randevu alma adımları, slot açılma saatleri ve dikkat edilmesi gerekenler.",
    author: {
      "@type": "Organization",
      name: "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Malta Vize Randevusu 2026 | VFS Slot Alma Rehberi</title>

        <meta
          name="description"
          content="Malta Schengen vize randevusu nasıl alınır? VFS Malta randevu sistemi, slot saatleri ve randevu bulamama çözümleri."
        />

        <meta
          name="keywords"
          content="malta vize randevusu, malta schengen randevu, malta vfs randevu"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/malta-vize-randevusu"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-emerald-200">
            Malta Schengen Randevu Sistemi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Malta Vize Randevusu Nasıl Alınır?
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Malta Schengen vizesi başvuruları VFS Global üzerinden yapılır.
            Randevu bulamama, “No Slots Available” ve ödeme hataları
            en sık yaşanan sorunlardır.
          </p>
        </header>

        {/* ADIMLAR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-12 text-center">
            Malta Vize Randevusu Alma Adımları
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { n: "01", t: "VFS Portal Girişi", d: "Malta için doğru VFS ülke portalına giriş yapın." },
              { n: "02", t: "Hesap Oluşturma", d: "Aktivasyon mailini onaylayarak hesabınızı aktif edin." },
              { n: "03", t: "Başvuru Türü", d: "Turistik, ticari veya aile ziyareti seçimi yapın." },
              { n: "04", t: "Takvim Seçimi", d: "Mavi günler açık, gri günler doludur." },
              { n: "05", t: "Ödeme & Onay", d: "Servis ücretini ödeyin ve randevu belgesini indirin." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 relative">
                <span className="text-4xl font-black text-emerald-200 absolute top-4 right-4">{item.n}</span>
                <h4 className="font-bold text-slate-800 mb-2 mt-4">{item.t}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SLOT BİLGİSİ */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            Malta Randevu Slotları Ne Zaman Açılır?
          </h2>

          <ul className="space-y-4 text-slate-300 max-w-3xl mx-auto">
            <li>• Genellikle hafta içi sabah saatlerinde</li>
            <li>• Pazartesi ve Çarşamba günleri daha sık</li>
            <li>• İptal edilen randevular rastgele saatlerde düşer</li>
            <li>• Yoğun sezonda slot bulmak zorlaşır</li>
          </ul>
        </section>

        {/* SORUNLAR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Malta Randevu Bulamıyorum, Ne Yapmalıyım?
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Gün içinde belirli saatlerde kontrol edin</li>
            <li>• Farklı şehir merkezlerini deneyin</li>
            <li>• Premium slot seçeneklerini değerlendirin</li>
            <li>• Profesyonel slot takibi alın</li>
          </ul>
        </section>

        {/* SİLO LİNKLER */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/malta-vize" className="block hover:underline text-emerald-600">
            Malta Vize Rehberi →
          </Link>

          <Link href="/malta-vize-evraklari" className="block hover:underline text-emerald-600">
            Malta Vize Evrakları →
          </Link>

          <Link href="/malta-vize-reddi" className="block hover:underline text-emerald-600">
            Malta Vize Reddi Nedenleri →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-emerald-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Malta Randevu Takibi İster misiniz?
          </h2>

          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Slot açıldığı anda işlem yaparak randevunuzu erkene alabiliriz.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Malta%20vize%20randevusu%20icin%20destek%20almak%20istiyorum."
            className="bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Randevu Takibi Başlat
          </a>

        </section>

      </main>
    </>
  );
}
