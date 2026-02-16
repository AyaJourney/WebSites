import Head from "next/head";
import Link from "next/link";

export default function LitvanyaVizeEvraklari() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Litvanya vizesi için bankada ne kadar para olmalı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Litvanya Schengen vizesi için günlük en az 50-70 Euro harcama kapasitesi gösterilmelidir. Seyahat süresine göre banka bakiyesi yeterli olmalıdır."
        }
      },
      {
        "@type": "Question",
        name: "Litvanya vize başvurusu kaç günde sonuçlanır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ortalama 15 iş günü içerisinde sonuçlanır. Yoğun dönemlerde süre uzayabilir."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Litvanya Vize Evrakları 2026 | Güncel Belge Listesi</title>

        <meta
          name="description"
          content="Litvanya Schengen vizesi için gerekli evraklar nelerdir? 2026 güncel belge listesi, banka şartları ve çalışan, öğrenci, emekli başvuru detayları."
        />

        <meta
          name="keywords"
          content="litvanya vize evrakları, litvanya schengen belgeleri, litvanya turist vizesi evrak listesi"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/litvanya-vize-evraklari"
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
            Litvanya Schengen Evrak Listesi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Litvanya Vize Evrakları
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Litvanya turistik, ticari ve aile ziyareti vizeleri için
            hazırlanması gereken güncel belge listesi.
          </p>
        </header>

        {/* TEMEL EVRAKLAR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Temel Evrak Listesi
          </h2>

          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4">

            <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
              <li>Geçerli pasaport (son 10 yıl içinde alınmış)</li>
              <li>2 adet biyometrik fotoğraf</li>
              <li>Schengen vize başvuru formu</li>
              <li>Seyahat sağlık sigortası (minimum 30.000 Euro teminat)</li>
              <li>Uçuş rezervasyonu</li>
              <li>Otel rezervasyonu veya davetiye</li>
              <li>Son 3 aylık banka hesap dökümü</li>
            </ul>

          </div>
        </section>

        {/* ÇALIŞANLAR */}
        <section className="mb-24 bg-slate-50 p-12 rounded-[3rem] border border-slate-200">
          <h2 className="text-3xl font-black mb-6">
            Çalışanlar İçin Ek Belgeler
          </h2>

          <ul className="list-disc list-inside space-y-3 text-slate-700">
            <li>İş yerinden izin yazısı (kaşeli & imzalı)</li>
            <li>SGK hizmet dökümü</li>
            <li>Son 3 aylık maaş bordrosu</li>
          </ul>
        </section>

        {/* ÖĞRENCİLER */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-6">
            Öğrenciler İçin Ek Belgeler
          </h2>

          <ul className="list-disc list-inside space-y-3 text-slate-700">
            <li>Öğrenci belgesi</li>
            <li>Sponsor dilekçesi</li>
            <li>Sponsor banka hesap dökümü</li>
          </ul>
        </section>

        {/* BANKA ŞARTI */}
        <section className="mb-24 bg-red-50 p-12 rounded-[3rem] border border-red-200">
          <h2 className="text-3xl font-black mb-6">
            Banka Bakiyesi Ne Kadar Olmalı?
          </h2>

          <p className="text-slate-700 leading-relaxed">
            Litvanya Schengen başvurularında günlük en az 50–70 Euro
            harcama kapasitesi gösterilmelidir. Seyahat süresine göre
            toplam bakiye hesaplanmalıdır.
          </p>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mb-20 text-center space-y-4 font-bold">

          <Link href="/litvanya-vize" className="block hover:underline text-green-700">
            Litvanya Vize Ana Sayfa →
          </Link>

          <Link href="/litvanya-vize-randevusu" className="block hover:underline text-green-700">
            Litvanya Vize Randevusu →
          </Link>

          <Link href="/litvanya-vize-reddi" className="block hover:underline text-red-600">
            Litvanya Vize Reddi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-green-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Evraklarınızı Kontrol Edelim
          </h2>

          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Eksik veya hatalı belge vize reddine yol açabilir.
            Dosyanızı uzman kontrolünden geçirelim.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Litvanya%20vize%20evraklari%20kontrolu%20icin%20destek%20istiyorum."
            className="bg-white text-green-700 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Evrak Kontrolü Al
          </a>

        </section>

      </main>
    </>
  );
}
