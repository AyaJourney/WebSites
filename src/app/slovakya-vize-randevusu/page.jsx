import Head from "next/head";
import Link from "next/link";

export default function SlovakyaVizeRandevusu() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Slovakya Vize Randevusu 2026",
    description:
      "Slovakya Schengen vizesi randevusu nasıl alınır? VFS üzerinden Slovakya vize randevu alma adımları ve güncel sistem bilgileri.",
    author: {
      "@type": "Organization",
      "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Slovakya Vize Randevusu 2026 | VFS Slovakya Randevu Alma</title>

        <meta
          name="description"
          content="Slovakya Schengen vizesi için randevu nasıl alınır? VFS Slovakya randevu sistemi, slot açılma saatleri ve 2026 güncel başvuru süreci."
        />

        <meta
          name="keywords"
          content="slovakya vize randevusu, slovakya vfs randevu, slovakya schengen randevu alma, slovakya vize slot"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/slovakya-vize-randevusu"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-200">
            Slovakya Schengen Başvuru Merkezi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Slovakya Vize Randevusu
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Slovakya Schengen vizesi için randevu alma süreci VFS Global
            üzerinden yürütülmektedir. Slot bulma süreci dönemsel olarak
            yoğunlaşabilir.
          </p>
        </header>

        {/* RANDEVU NASIL ALINIR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Slovakya Vize Randevusu Nasıl Alınır?
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              { n: "01", t: "VFS Hesabı Oluştur", d: "Slovakya için VFS portalında hesap açın." },
              { n: "02", t: "Başvuru Türü Seçimi", d: "Turistik, ticari veya aile ziyareti kategorisini belirleyin." },
              { n: "03", t: "Merkez Seçimi", d: "Ankara veya İstanbul başvuru merkezini seçin." },
              { n: "04", t: "Takvim Kontrolü", d: "Uygun tarihleri kontrol ederek slot yakalayın." },
              { n: "05", t: "Ödeme & Onay", d: "Hizmet bedelini ödeyin ve randevu belgesini indirin." }
            ].map((step, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-200 relative">
                <span className="absolute top-4 right-4 text-4xl font-black text-blue-100">{step.n}</span>
                <h4 className="font-bold text-slate-800 mt-4 mb-2">{step.t}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.d}</p>
              </div>
            ))}

          </div>
        </section>

        {/* SLOT BİLGİSİ */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-24 shadow-2xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            Slovakya Randevu Slotları Ne Zaman Açılır?
          </h2>

          <ul className="space-y-4 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            <li>• Genellikle hafta içi sabah saatlerinde yeni slot yüklenir.</li>
            <li>• Pazartesi ve Çarşamba günleri daha aktif olabilir.</li>
            <li>• İptal edilen randevular rastgele saatlerde sisteme düşer.</li>
            <li>• Yoğun sezonlarda (Mayıs–Eylül) slot bulmak zorlaşır.</li>
          </ul>
        </section>

        {/* SORUNLAR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Sık Karşılaşılan Randevu Sorunları
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h4 className="font-bold mb-4">No Slots Available</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                O an için boş randevu bulunmadığını gösterir. Kalıcı değildir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h4 className="font-bold mb-4">Access Denied</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Çok sık yenileme IP engeline neden olabilir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h4 className="font-bold mb-4">Ödeme Hatası</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                3D Secure açık kart kullanılması önerilir.
              </p>
            </div>

          </div>
        </section>

        {/* SİLO NAV */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/slovakya-vize" className="block hover:underline text-blue-600">
            Slovakya Vize Rehberi →
          </Link>

          <Link href="/slovakya-vize-evraklari" className="block hover:underline text-blue-600">
            Slovakya Vize Evrakları →
          </Link>

          <Link href="/slovakya-vize-reddi" className="block hover:underline text-blue-600">
            Slovakya Vize Reddi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Slovakya Randevu Takibi Almak İster misiniz?
          </h2>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Slot açıldığı anda sistem başında olmak gerekir.
            Profesyonel randevu takibi ile zaman kaybetmeyin.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Slovakya%20vize%20randevusu%20i%C3%A7in%20destek%20istiyorum."
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Randevu Takibi Başlat
          </a>
        </section>

      </main>
    </>
  );
}
