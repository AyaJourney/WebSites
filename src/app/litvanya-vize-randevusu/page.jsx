import Head from "next/head";
import Link from "next/link";

export default function LitvanyaVizeRandevusu() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        "name": "Litvanya vize randevusu nereden alınır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Litvanya Schengen vize randevuları Türkiye'de VFS Global sistemi üzerinden alınmaktadır."
        }
      },
      {
        "@type": "Question",
        "name": "Litvanya randevuları ne zaman açılır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Randevular düzensiz aralıklarla açılır. Genellikle hafta içi sabah saatlerinde yeni slotlar sisteme yüklenir."
        }
      },
      {
        "@type": "Question",
        "name": "Litvanya vize randevusu bulamıyorum ne yapmalıyım?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yoğun dönemlerde slotlar hızlı tükenir. Alternatif şehirleri kontrol etmek veya profesyonel randevu takibi almak çözüm olabilir."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Litvanya Vize Randevusu 2026 | VFS Global Randevu Alma Rehberi</title>

        <meta
          name="description"
          content="Litvanya vize randevusu nasıl alınır? VFS Global üzerinden Litvanya Schengen randevu adımları, slot açılma saatleri ve randevu bulamama çözümleri."
        />

        <meta
          name="keywords"
          content="litvanya vize randevusu, litvanya vfs randevu, litvanya schengen randevu alma"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/litvanya-vize-randevusu"
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
            Litvanya Schengen Randevu 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Litvanya Vize Randevusu Nasıl Alınır?
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Litvanya Schengen vize başvuruları Türkiye'de VFS Global üzerinden
            yapılmaktadır. Randevu süreci, slot açılma saatleri ve çözüm yolları burada.
          </p>
        </header>

        {/* RANDEVU ADIMLARI */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Litvanya Randevu Alma Adımları
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { n: "01", t: "VFS Hesabı", d: "Litvanya için VFS Global hesabı oluşturun." },
              { n: "02", t: "Başvuru Türü", d: "Turistik, ticari veya aile ziyareti seçin." },
              { n: "03", t: "Takvim Kontrolü", d: "Uygun tarihleri sistemden görüntüleyin." },
              { n: "04", t: "Ödeme", d: "VFS servis ücretini online ödeyin." },
              { n: "05", t: "Randevu Onayı", d: "Onay belgesini indirip randevu günü evrakları teslim edin." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-200 relative">
                <span className="absolute top-4 right-4 text-green-200 text-3xl font-black">{item.n}</span>
                <h4 className="font-bold text-slate-800 mt-4 mb-2">{item.t}</h4>
                <p className="text-xs text-slate-600">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SLOT SORUNU */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            Litvanya Randevu Bulamıyorum
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto text-center leading-relaxed mb-6">
            Özellikle yaz dönemlerinde Litvanya Schengen randevuları hızla tükenir.
            “No slots available” uyarısı sık görülür.
          </p>

          <ul className="space-y-3 text-slate-200 max-w-xl mx-auto text-sm">
            <li>• Slotlar genellikle hafta içi sabah saatlerinde açılır.</li>
            <li>• Ankara ve İstanbul alternatif olarak kontrol edilmelidir.</li>
            <li>• İptal edilen randevular anlık olarak sisteme düşer.</li>
          </ul>
        </section>

        {/* YOĞUNLUK ANALİZİ */}
        <section className="mb-24 bg-green-50 p-12 rounded-[3rem] border border-green-200">
          <h2 className="text-3xl font-black mb-6 text-center">
            Randevular Ne Zaman Açılır?
          </h2>

          <p className="text-slate-700 leading-relaxed text-center max-w-2xl mx-auto">
            Litvanya VFS slotları düzensiz aralıklarla yüklenir.
            En sık gözlemlenen zaman aralığı hafta içi 08:30 – 10:00 saatleridir.
          </p>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mb-20 text-center space-y-4 font-bold">

          <Link href="/litvanya-vize" className="block hover:underline text-green-700">
            Litvanya Vize Rehberi →
          </Link>

          <Link href="/litvanya-vize-evraklari" className="block hover:underline text-green-700">
            Litvanya Vize Evrakları →
          </Link>

          <Link href="/litvanya-vize-reddi" className="block hover:underline text-red-600">
            Litvanya Vize Reddi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-green-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Litvanya Randevunuzu Kaçırmayın
          </h2>

          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Slot açıldığı anda işlem yapmak gerekir.
            Profesyonel takip ile Litvanya randevunuzu erkene çekelim.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Litvanya%20vize%20randevusu%20icin%20destek%20istiyorum."
            className="bg-white text-green-700 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Randevu Takibi Başlat
          </a>

        </section>

      </main>
    </>
  );
}
