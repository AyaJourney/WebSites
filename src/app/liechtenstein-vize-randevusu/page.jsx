import Head from "next/head";
import Link from "next/link";

export default function LiechtensteinVizeRandevusu() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Liechtenstein Vize Randevusu 2026",
    description:
      "Liechtenstein Schengen vizesi randevusu nasıl alınır? İsviçre üzerinden yapılan başvurular için 2026 güncel randevu süreci.",
    author: {
      "@type": "Organization",
      name: "Aya Journey"
    },
    datePublished: "2026-02-16"
  };

  return (
    <>
      <Head>
        <title>Liechtenstein Vize Randevusu 2026 | Nasıl Alınır?</title>

        <meta
          name="description"
          content="Liechtenstein Schengen vize randevusu nasıl alınır? İsviçre temsilciliği üzerinden yapılan başvurular için güncel sistem, slot açılma saatleri ve randevu süreci."
        />

        <meta
          name="keywords"
          content="liechtenstein vize randevusu, liechtenstein schengen randevu, isviçre üzerinden liechtenstein başvurusu"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/liechtenstein-vize-randevusu"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-indigo-200">
            Liechtenstein Randevu Sistemi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Liechtenstein Vize Randevusu Nasıl Alınır?
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Liechtenstein için Türkiye’den doğrudan başvuru merkezi yoktur.
            Başvurular İsviçre temsilciliği üzerinden yapılır.
            Bu nedenle randevu süreci İsviçre Schengen sistemine bağlıdır.
          </p>
        </header>

        {/* SÜREÇ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10">
            Randevu Alma Süreci (Adım Adım)
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              {
                n: "01",
                t: "Yetkili Merkezi Kontrol Et",
                d: "Liechtenstein başvuruları İsviçre konsolosluğu üzerinden yapılır."
              },
              {
                n: "02",
                t: "Online Hesap Oluştur",
                d: "İsviçre randevu portalında hesap açılır."
              },
              {
                n: "03",
                t: "Slot Seçimi",
                d: "Uygun tarih seçilir ve randevu onaylanır."
              },
              {
                n: "04",
                t: "Biyometri",
                d: "Randevu günü parmak izi ve evrak teslimi yapılır."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative"
              >
                <span className="text-4xl font-black text-indigo-100 absolute top-4 right-4">
                  {item.n}
                </span>
                <h4 className="font-bold text-lg mb-2">{item.t}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.d}</p>
              </div>
            ))}

          </div>
        </section>

        {/* SLOT DURUMU */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            Liechtenstein Randevu Slotları Ne Zaman Açılır?
          </h2>

          <div className="max-w-3xl mx-auto text-slate-300 space-y-4 leading-relaxed">
            <p>
              Slotlar düzensiz aralıklarla açılır ve İsviçre
              Schengen yoğunluğuna bağlıdır.
            </p>

            <p>
              Genellikle hafta içi sabah saatlerinde
              yeni tarihler sisteme yüklenir.
            </p>

            <p>
              Yaz aylarında ve Noel döneminde
              randevu bulmak zorlaşabilir.
            </p>
          </div>
        </section>

        {/* ÖNEMLİ NOKTALAR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Randevu Alırken Dikkat Edilmesi Gerekenler
          </h2>

          <div className="bg-indigo-50 p-10 rounded-3xl border border-indigo-200 space-y-4 text-slate-700 leading-relaxed">

            <p>• Başvuru merkezi seçiminde ikamet şartlarını kontrol edin.</p>
            <p>• Randevu saatinden en az 15 dakika önce merkezde olun.</p>
            <p>• Eksik evrakla randevuya gitmek başvurunun reddedilmesine yol açabilir.</p>
            <p>• Önceki Schengen biyometriniz 59 ayı geçmişse yeniden parmak izi verilir.</p>

          </div>
        </section>

        {/* INTERNAL LINK AĞI */}
        <section className="mb-20 text-center space-y-4">

          <Link
            href="/liechtenstein-vize"
            className="block text-indigo-600 font-bold hover:underline"
          >
            Liechtenstein Vize Rehberi →
          </Link>

          <Link
            href="/liechtenstein-vize-evraklari"
            className="block text-indigo-600 font-bold hover:underline"
          >
            Liechtenstein Vize Evrakları →
          </Link>

          <Link
            href="/liechtenstein-vize-reddi"
            className="block text-indigo-600 font-bold hover:underline"
          >
            Liechtenstein Vize Reddi →
          </Link>

          <Link
            href="/isvicre-vize-randevusu"
            className="block text-indigo-600 font-bold hover:underline"
          >
            İsviçre Vize Randevusu →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-indigo-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Liechtenstein Randevu Takibi
          </h2>

          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Yoğunluk nedeniyle randevu bulmakta zorlanıyorsanız,
            profesyonel takip ile slot açıldığı anda işlem yapalım.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Liechtenstein%20randevu%20takibi%20icin%20destek%20almak%20istiyorum."
            className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Randevu Takibi Başlat
          </a>
        </section>

      </main>
    </>
  );
}
