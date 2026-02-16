import Head from "next/head";
import Link from "next/link";

export default function IsvicreVizeRandevusu() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "İsviçre Vize Randevusu Nasıl Alınır?",
    description:
      "İsviçre Schengen vizesi için VFS Global randevu alma süreci, slot açılma saatleri ve 2026 güncel başvuru rehberi.",
    author: {
      "@type": "Organization",
      name: "Aya Journey"
    },
    datePublished: "2026-02-16"
  };

  return (
    <>
      <Head>
        <title>İsviçre Vize Randevusu 2026 | VFS Slot Alma Rehberi</title>

        <meta
          name="description"
          content="İsviçre vize randevusu nasıl alınır? VFS Global İsviçre slot saatleri, no slots available hatası ve 2026 güncel randevu süreci."
        />

        <meta
          name="keywords"
          content="isviçre vize randevusu, isviçre vfs randevu, isviçre schengen slot, isviçre no slots available"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/isvicre-vize-randevusu"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="min-h-screen bg-zinc-50 text-slate-900">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">

            <p className="text-sm text-red-600 font-semibold mb-2">
              VFS Global İsviçre
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              İsviçre Vize Randevusu Nasıl Alınır?
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
              İsviçre Schengen vizesi başvuruları Türkiye’de VFS Global
              üzerinden alınır. Randevu sistemi yoğun dönemlerde hızla dolar.
            </p>

          </div>
        </section>

        {/* SÜREÇ */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-8">
              İsviçre Randevu Alma Adımları
            </h2>

            <ol className="space-y-4 text-slate-700 list-decimal list-inside leading-relaxed">
              <li>VFS Global İsviçre portalına giriş yapın.</li>
              <li>Hesap oluşturun ve e-posta aktivasyonunu tamamlayın.</li>
              <li>Başvuru kategorisini seçin (turistik / ticari / aile ziyareti).</li>
              <li>Takvimden uygun slotu seçin.</li>
              <li>Servis ücretini ödeyerek randevuyu onaylayın.</li>
            </ol>

          </div>
        </section>

        {/* SLOT SORUNU */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-slate-900 text-white p-10 rounded-2xl">

            <h2 className="text-3xl font-bold mb-6">
              İsviçre “No Slots Available” Sorunu
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              İsviçre slotları özellikle yaz döneminde çok hızlı tükenir.
              “No slots available” uyarısı kalıcı değildir.
            </p>

            <ul className="space-y-3 text-slate-200">
              <li>• Hafta içi 08:30 – 10:00 arası kontrol edin</li>
              <li>• Pazartesi sabahları yeni slot açılabilir</li>
              <li>• İptal edilen randevular gün içinde rastgele düşer</li>
            </ul>

          </div>
        </section>

        {/* YOĞUNLUK */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-6">
              İsviçre Randevu Yoğunluğu
            </h2>

            <p className="text-slate-600 leading-relaxed">
              İstanbul ve Ankara VFS merkezlerinde yoğunluk değişkendir.
              Yaz aylarında ve kayak sezonu öncesinde başvuru artar.
            </p>

          </div>
        </section>

        {/* DİKKAT */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-red-50 border border-red-200 p-10 rounded-2xl">

            <h2 className="text-3xl font-bold mb-6 text-red-700">
              Randevu Alırken Yapılan Hatalar
            </h2>

            <ul className="space-y-4 text-red-800">
              <li>• Yanlış kategori seçmek</li>
              <li>• Ödeme sırasında zaman aşımı</li>
              <li>• IP engeline takılmak (çok sık yenileme)</li>
              <li>• Evrak hazır olmadan randevu almak</li>
            </ul>

          </div>
        </section>

        {/* SİLO NAV */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-2xl font-bold mb-6">
              İsviçre Vize Sürecinin Diğer Aşamaları
            </h2>

            <div className="flex flex-wrap gap-6 text-sm font-semibold">
              <Link href="/isvicre-vize" className="hover:underline">
                İsviçre vize rehberi →
              </Link>
              <Link href="/isvicre-vize-evraklari" className="hover:underline">
                İsviçre vize evrakları →
              </Link>
              <Link href="/isvicre-vize-reddi" className="hover:underline">
                İsviçre vize reddi →
              </Link>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="bg-red-600 text-white rounded-2xl p-12 text-center shadow-xl">

            <h2 className="text-3xl font-bold mb-6">
              İsviçre Slot Açıldığı Anda Yakalamak İster misiniz?
            </h2>

            <p className="max-w-2xl mx-auto mb-8 text-red-100">
              Slot açıldığı an işlem yapılmazsa saniyeler içinde tükenebilir.
              Profesyonel takip ile randevunuzu erkene çekelim.
            </p>

            <a
              href="https://wa.me/905302199056?text=Merhaba%2C%20Isvicre%20vize%20randevusu%20icin%20destek%20almak%20istiyorum."
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition"
            >
              Randevu Takibi Başlat
            </a>

          </div>
        </section>

      </main>
    </>
  );
}
