import Head from "next/head";
import Link from "next/link";

export default function PolonyaVizeRandevusu() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Polonya Vize Randevusu Nasıl Alınır?",
    description:
      "Polonya Schengen vizesi için randevu alma süreci 2026. VFS Global üzerinden Polonya randevusu nasıl alınır, slotlar ne zaman açılır?",
    author: {
      "@type": "Organization",
      "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Polonya Vize Randevusu 2026 | VFS Slot Rehberi</title>

        <meta
          name="description"
          content="Polonya vize randevusu nasıl alınır? VFS Global Polonya slot açılma saatleri, no slots available hatası ve randevu taktikleri."
        />

        <meta
          name="keywords"
          content="polonya vize randevusu, polonya vfs randevu, polonya no slots available, polonya schengen randevu"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/polonya-vize-randevusu"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-red-100 text-red-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-red-200">
            VFS Global Polonya
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Polonya Vize Randevusu Nasıl Alınır?
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Polonya Schengen vizesi başvurularında randevular
            VFS Global sistemi üzerinden alınır.
            Slot bulamama sorunu özellikle yaz dönemlerinde sık yaşanır.
          </p>
        </header>

        {/* ADIM ADIM */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8 text-center">
            Polonya Randevu Alma Adımları
          </h2>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { n: "01", t: "VFS Hesabı Aç", d: "Polonya için VFS Global portalına kayıt olun." },
              { n: "02", t: "Başvuru Türü Seç", d: "Turistik, ticari veya aile ziyareti kategorisini belirleyin." },
              { n: "03", t: "Slot Takvimi", d: "Uygun tarihleri sistem üzerinden kontrol edin." },
              { n: "04", t: "Ödeme", d: "Servis ücretini online veya merkezde ödeyin." },
              { n: "05", t: "Biyometri", d: "Randevu günü evrak teslimi ve parmak izi verilir." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative">
                <span className="text-4xl font-black text-red-200 absolute top-4 right-4">{item.n}</span>
                <h4 className="font-bold text-slate-800 mb-2 mt-4">{item.t}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SLOT SORUNU */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
          <h2 className="text-3xl font-black mb-8 text-center">
            Polonya “No Slots Available” Sorunu
          </h2>

          <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto text-center">
            Bu uyarı sistemde o an için boş randevu bulunmadığını gösterir.
            Slotlar genellikle hafta içi sabah saatlerinde yüklenir.
          </p>
        </section>

        {/* NE ZAMAN AÇILIR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Polonya Randevular Ne Zaman Açılır?
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Hafta içi 08:30 – 10:00 arası</li>
            <li>• Pazartesi ve Çarşamba günleri</li>
            <li>• İptal edilen slotlar düzensiz saatlerde</li>
            <li>• Konsolosluk tatil sonrası ilk iş günü</li>
          </ul>
        </section>

        {/* KRİTİK UYARI */}
        <section className="mb-24 bg-red-50 p-10 rounded-2xl border border-red-200">
          <h2 className="text-3xl font-black mb-6">
            En Sık Randevu Hataları
          </h2>

          <ul className="space-y-4 text-slate-700">
            <li>• Sürekli yenileme yaparak IP engeli almak</li>
            <li>• Yanlış şehir seçimi</li>
            <li>• Eksik başvuru formu</li>
            <li>• Ödeme ekranında zaman aşımı</li>
          </ul>
        </section>

        {/* SİLO NAV */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/polonya-vize" className="block hover:underline text-red-600">
            Polonya Vize Rehberi →
          </Link>

          <Link href="/polonya-vize-evraklari" className="block hover:underline text-red-600">
            Polonya Vize Evrakları →
          </Link>

          <Link href="/polonya-vize-reddi" className="block hover:underline text-red-600">
            Polonya Vize Reddi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Polonya Randevu Takibi İster misiniz?
          </h2>

          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Slot açıldığı an işlem yaparak randevunuzu erkene alabiliriz.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Polonya%20randevu%20takibi%20icin%20destek%20istiyorum."
            className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Randevu Takibi Başlat
          </a>
        </section>

      </main>
    </>
  );
}
