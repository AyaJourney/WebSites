import Head from "next/head";
import Link from "next/link";

export default function SlovenyaVizeRandevusu() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Slovenya Vize Randevusu Nasıl Alınır?",
    description:
      "Slovenya Schengen vizesi için randevu alma adımları, VFS süreci ve slot açılma saatleri.",
    author: {
      "@type": "Organization",
      "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Slovenya Vize Randevusu 2026 | VFS Randevu Alma Rehberi</title>

        <meta
          name="description"
          content="Slovenya Schengen vizesi için VFS randevusu nasıl alınır? Slot ne zaman açılır? No slots available sorunu ve çözüm yolları."
        />

        <meta
          name="keywords"
          content="slovenya vize randevusu, slovenya vfs randevu, slovenya schengen randevu alma"
        />

        <link
          rel="canonical"
          href="https:/ayajourney.com/slovenya-vize-randevusu"
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
            Slovenya Schengen Randevu Sistemi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Slovenya Vize Randevusu
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Slovenya Schengen başvuruları Türkiye’de VFS Global üzerinden alınır.
            Slotlar düzensiz açılır ve özellikle yaz döneminde hızla dolar.
          </p>
        </header>

        {/* ADIM ADIM SÜREÇ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-12 text-center">
            Slovenya Vize Randevusu Nasıl Alınır?
          </h2>

          <div className="grid md:grid-cols-5 gap-4">

            {[
              { n: "01", t: "VFS Hesabı", d: "Slovenya VFS portalında hesap oluşturun." },
              { n: "02", t: "Başvuru Türü", d: "Turistik, ticari veya aile ziyareti seçin." },
              { n: "03", t: "Takvim Kontrolü", d: "Mavi günler açık randevu demektir." },
              { n: "04", t: "Ödeme", d: "Servis ücretini online ödeyin." },
              { n: "05", t: "Biyometri", d: "Randevu günü parmak izi ve evrak teslimi." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative">
                <span className="text-4xl font-black text-blue-200 absolute top-4 right-4">{item.n}</span>
                <h4 className="font-bold text-slate-800 mb-2 mt-4">{item.t}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
              </div>
            ))}

          </div>
        </section>

        {/* SLOT SORUNU */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-24 shadow-2xl">
          <h2 className="text-3xl font-black mb-10 text-center">
            Slovenya Randevu Bulamıyorum
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-sm">

            <div>
              <h4 className="font-bold text-blue-400 mb-3">
                “No Slots Available” Ne Demek?
              </h4>
              <p className="text-slate-300 leading-relaxed">
                Bu uyarı sistemde o an için boş randevu olmadığını gösterir.
                Kalıcı değildir. Yeni slotlar düzensiz açılır.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-blue-400 mb-3">
                Slotlar Ne Zaman Açılır?
              </h4>
              <p className="text-slate-300 leading-relaxed">
                Genellikle hafta içi 08:30 – 10:00 arası.
                Pazartesi ve Çarşamba daha aktiftir.
              </p>
            </div>

          </div>
        </section>

        {/* STRATEJİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Randevu Bulma Stratejisi
          </h2>

          <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
            <ul className="space-y-4 text-slate-600 text-sm">
              <li>• Sürekli yenileme yapmayın (IP engeli oluşabilir)</li>
              <li>• Ankara ve İstanbul merkezlerini ayrı kontrol edin</li>
              <li>• Premium saatleri değerlendirin</li>
              <li>• İptal edilen slotlar anlık düşer</li>
            </ul>
          </div>
        </section>

        {/* SİLO NAV */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/slovenya-vize" className="block hover:underline text-blue-600">
            Slovenya Vize Rehberi →
          </Link>

          <Link href="/slovenya-vize-evraklari" className="block hover:underline text-blue-600">
            Slovenya Vize Evrakları →
          </Link>

          <Link href="/slovenya-vize-reddi" className="block hover:underline text-blue-600">
            Slovenya Vize Reddi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Slot Açıldığı Anda Yakalamak İster misiniz?
          </h2>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Slovenya randevuları saniyeler içinde dolabilir.
            Profesyonel takip sistemiyle süreci hızlandıralım.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Slovenya%20vize%20randevusu%20için%20destek%20istiyorum."
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Randevu Takibi Başlat
          </a>
        </section>

      </main>
    </>
  );
}
