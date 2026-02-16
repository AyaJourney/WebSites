import Head from "next/head";
import Link from "next/link";

export default function RomanyaVizeRandevusu() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Romanya Vize Randevusu Nasıl Alınır?",
    description:
      "Romanya vize randevusu alma adımları, VFS süreci, slot açılma saatleri ve randevu bulamama sorunları hakkında 2026 güncel rehber.",
    author: {
      "@type": "Organization",
     "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Romanya Vize Randevusu 2026 | Nasıl Alınır?</title>

        <meta
          name="description"
          content="Romanya vize randevusu nasıl alınır? VFS sistemi, slot açılma saatleri, randevu bulamama sorunu ve 2026 güncel başvuru adımları."
        />

        <meta
          name="keywords"
          content="romanya vize randevusu, romanya vfs randevu, romanya randevu nasıl alınır, romanya slot açılma saatleri"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/romanya-vize-randevusu"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-200">
            2026 Güncel Randevu Rehberi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Romanya Vize Randevusu Nasıl Alınır?
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Romanya vize başvuruları yetkili başvuru merkezi üzerinden randevu ile yapılır.
            Slot bulamama sorunu özellikle yoğun dönemlerde sık görülür.
          </p>
        </header>

        {/* ADIM ADIM */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Romanya Vize Randevu Alma Adımları
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              { n: "01", t: "Online Başvuru", d: "Romanya resmi sisteminde başvuru formu doldurulur." },
              { n: "02", t: "Hesap Oluşturma", d: "Randevu sistemi için profil oluşturulur." },
              { n: "03", t: "Randevu Takvimi", d: "Uygun tarih seçilir." },
              { n: "04", t: "Evrak Hazırlık", d: "Belgeler eksiksiz hazırlanır." },
              { n: "05", t: "Biyometri", d: "Randevu günü parmak izi ve evrak teslim edilir." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative">
                <span className="text-4xl font-black text-blue-200 absolute top-4 right-4">{item.n}</span>
                <h4 className="font-bold text-slate-800 mb-2 mt-6">{item.t}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
              </div>
            ))}

          </div>
        </section>

        {/* SLOT BULAMAMA */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-24 shadow-2xl">
          <h2 className="text-3xl font-black mb-8 text-center">
            Romanya Randevu Bulamıyorum, Ne Yapmalıyım?
          </h2>

          <p className="text-slate-300 text-center max-w-3xl mx-auto mb-10">
            Yoğun sezonlarda sistem “boş randevu yok” uyarısı verebilir.
            Bu durum kalıcı değildir, slotlar düzensiz aralıklarla açılır.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-300">
            <div>
              <h4 className="font-bold text-blue-400 mb-3">Ne Zaman Açılır?</h4>
              <ul className="space-y-2">
                <li>• Genellikle hafta içi sabah saatleri</li>
                <li>• Tatil sonrası ilk iş günü</li>
                <li>• İptal edilen slotlar rastgele düşer</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-blue-400 mb-3">Ne Yapmalısınız?</h4>
              <ul className="space-y-2">
                <li>• Sürekli sayfa yenilemeyin (IP blok riski)</li>
                <li>• Farklı şehirleri kontrol edin</li>
                <li>• Premium saat seçeneklerini değerlendirin</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ŞEHİRLER */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Romanya Vize Randevusu Hangi Şehirlerde?
          </h2>

          <p className="text-slate-600 mb-6 leading-relaxed">
            Türkiye’de Romanya vize başvuruları genellikle Ankara ve İstanbul merkezlerinden yapılmaktadır.
            Yoğunluk dönemsel olarak değişebilir.
          </p>
        </section>

        {/* SİLO BAĞLANTI */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/romanya-vize" className="block hover:underline text-blue-600">
            Romanya Vize Rehberi →
          </Link>

          <Link href="/romanya-vize-evraklari" className="block hover:underline text-blue-600">
            Romanya Vize Evrakları →
          </Link>

          <Link href="/romanya-vize-reddi" className="block hover:underline text-blue-600">
            Romanya Vize Reddi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Romanya Randevunuzu Profesyonelce Yönetin
          </h2>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Slot açıldığı anda işlem yaparak randevunuzu erkene çekebiliriz.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Romanya%20vize%20randevusu%20icin%20destek%20almak%20istiyorum."
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Randevu Takibi Başlat
          </a>
        </section>

      </main>
    </>
  );
}
