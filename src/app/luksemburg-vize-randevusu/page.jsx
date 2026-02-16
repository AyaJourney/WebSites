import Head from "next/head";
import Link from "next/link";

export default function LuksemburgVizeRandevusu() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Lüksemburg Vize Randevusu 2026",
    description:
      "Lüksemburg Schengen vize randevusu nasıl alınır? 2026 güncel randevu sistemi, slot açılma saatleri ve VFS süreci.",
    author: {
      "@type": "Organization",
      name: "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Lüksemburg Vize Randevusu 2026 | Slot Açılma Saatleri</title>

        <meta
          name="description"
          content="Lüksemburg vize randevusu nasıl alınır? VFS üzerinden slot alma, randevu açılma saatleri ve yoğunluk dönemleri."
        />

        <meta
          name="keywords"
          content="lüksemburg vize randevusu, lüksemburg schengen slot, lüksemburg vfs randevu"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/luksemburg-vize-randevusu"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-green-200">
            Lüksemburg Randevu Sistemi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Lüksemburg Vize Randevusu Nasıl Alınır?
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Lüksemburg Schengen başvuruları Türkiye’de genellikle VFS Global
            üzerinden yapılmaktadır. Slot açılma saatleri ve yoğunluk dönemleri
            başvuru sürecini doğrudan etkiler.
          </p>
        </header>

        {/* RANDEVU ADIMLARI */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Lüksemburg Randevu Alma Adımları
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { n: "01", t: "Hesap Oluştur", d: "VFS sisteminde hesap açılır." },
              { n: "02", t: "Başvuru Türü", d: "Turistik, ticari veya aile ziyareti seçilir." },
              { n: "03", t: "Şehir Seçimi", d: "Ankara veya İstanbul merkezi seçilir." },
              { n: "04", t: "Slot Seçimi", d: "Uygun tarih ve saat seçilir." },
              { n: "05", t: "Onay & Ödeme", d: "Servis ücreti ödenir ve belge indirilir." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-200 relative">
                <span className="text-4xl font-black text-green-200 absolute top-4 right-4">
                  {item.n}
                </span>
                <h4 className="font-bold text-slate-800 mb-2 mt-4">{item.t}</h4>
                <p className="text-xs text-slate-500">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SLOT BİLGİLERİ */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
          <h2 className="text-3xl font-black mb-8 text-center">
            Slotlar Ne Zaman Açılır?
          </h2>

          <ul className="space-y-4 text-slate-300 max-w-3xl mx-auto">
            <li>• Genellikle hafta içi sabah 08:30 – 10:00 arası</li>
            <li>• Pazartesi ve Çarşamba günleri daha aktif</li>
            <li>• Yaz sezonunda yoğunluk artar</li>
            <li>• İptal edilen slotlar rastgele düşebilir</li>
          </ul>
        </section>

        {/* SIK SORULAR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Lüksemburg Randevu Sorunları
          </h2>

          <div className="space-y-6 text-slate-700">
            <p>
              <strong>No Slots Available:</strong> Sistem dolu demektir, hata değildir.
            </p>
            <p>
              <strong>Access Denied:</strong> Çok fazla yenileme IP engeline neden olabilir.
            </p>
            <p>
              <strong>Ödeme Hatası:</strong> 3D Secure açık kart kullanılması önerilir.
            </p>
          </div>
        </section>

        {/* SİLO LİNKLER */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/luksemburg-vize" className="block hover:underline text-green-700">
            Lüksemburg Vize Rehberi →
          </Link>

          <Link href="/luksemburg-vize-evraklari" className="block hover:underline text-green-700">
            Lüksemburg Vize Evrakları →
          </Link>

          <Link href="/luksemburg-vize-reddi" className="block hover:underline text-green-700">
            Lüksemburg Vize Reddi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-green-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Slot Takibini Profesyonellere Bırakın
          </h2>

          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Slot açıldığı anda işlem yapılması gerekir. Profesyonel takip ile
            randevunuzu en hızlı şekilde alabiliriz.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Luksemburg%20randevu%20takibi%20icin%20destek%20istiyorum."
            className="bg-white text-green-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Randevu Takibi Başlat
          </a>

        </section>

      </main>
    </>
  );
}
