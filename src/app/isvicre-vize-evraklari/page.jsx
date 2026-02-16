import Head from "next/head";
import Link from "next/link";

export default function IsvicreVizeEvraklari() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "İsviçre Vize Evrakları 2026",
    description:
      "İsviçre Schengen vizesi için gerekli evraklar, finansal şartlar, çalışan, öğrenci ve şirket sahipleri için belge listesi.",
    author: {
      "@type": "Organization",
      name: "Aya Journey"
    },
    datePublished: "2026-02-16"
  };

  return (
    <>
      <Head>
        <title>İsviçre Vize Evrakları 2026 | Güncel Belge Listesi</title>

        <meta
          name="description"
          content="İsviçre vizesi için gerekli evraklar nelerdir? Çalışan, öğrenci, emekli ve şirket sahipleri için detaylı 2026 İsviçre Schengen vize belge listesi."
        />

        <meta
          name="keywords"
          content="isviçre vize evrakları, isviçre schengen belge listesi, isviçre turist vizesi evrak, isviçre vize başvuru belgeleri"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/isvicre-vize-evraklari"
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
              İsviçre Schengen Başvurusu
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              İsviçre Vize Evrakları 2026
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
              İsviçre vizesi için gerekli evrak listesi, finansal şartlar ve
              başvuru sırasında dikkat edilmesi gereken kritik detaylar.
            </p>

          </div>
        </section>

        {/* TEMEL EVRAKLAR */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-8">
              İsviçre Vizesi İçin Temel Evraklar
            </h2>

            <ul className="space-y-4 text-slate-700 leading-relaxed">
              <li>• Pasaport (son 10 yıl içinde alınmış, 2 boş sayfa)</li>
              <li>• 2 adet biyometrik fotoğraf</li>
              <li>• Schengen vize başvuru formu</li>
              <li>• Seyahat sağlık sigortası (min. 30.000 € teminatlı)</li>
              <li>• Uçak rezervasyonu</li>
              <li>• Otel rezervasyonu veya davetiye</li>
            </ul>

          </div>
        </section>

        {/* FİNANSAL BELGELER */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-slate-900 text-white p-10 rounded-2xl">

            <h2 className="text-3xl font-bold mb-6">
              Finansal Belgeler (En Kritik Bölüm)
            </h2>

            <p className="text-slate-300 mb-6">
              İsviçre, finansal inceleme konusunda en katı Schengen ülkelerindendir.
            </p>

            <ul className="space-y-4 text-slate-200">
              <li>• Son 3 aylık banka hesap dökümü (kaşeli ve imzalı)</li>
              <li>• Günlük minimum 100–120 CHF karşılığı bakiye</li>
              <li>• Maaş bordroları (son 3 ay)</li>
              <li>• SGK hizmet dökümü</li>
              <li>• Sponsorluk varsa sponsor belgeleri</li>
            </ul>

          </div>
        </section>

        {/* ÇALIŞANLAR */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-6">
              Çalışanlar İçin Ek Evraklar
            </h2>

            <ul className="space-y-4 text-slate-700">
              <li>• İşveren yazısı (izin onayı içeren)</li>
              <li>• Vergi levhası (şirket evrakları)</li>
              <li>• Faaliyet belgesi</li>
              <li>• İmza sirküleri</li>
            </ul>

          </div>
        </section>

        {/* ÖĞRENCİ / EMEKLİ */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-6">
              Öğrenci ve Emekliler İçin Belgeler
            </h2>

            <ul className="space-y-4 text-slate-700">
              <li>• Öğrenci belgesi</li>
              <li>• Sponsor dilekçesi (varsa)</li>
              <li>• Emekli maaş dökümü</li>
              <li>• SGK emeklilik belgesi</li>
            </ul>

          </div>
        </section>

        {/* DİKKAT EDİLMESİ GEREKENLER */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-red-50 border border-red-200 p-10 rounded-2xl">

            <h2 className="text-3xl font-bold mb-6 text-red-700">
              Evraklarda En Sık Yapılan Hatalar
            </h2>

            <ul className="space-y-4 text-red-800">
              <li>• Bankaya son dakika para yatırmak</li>
              <li>• Rezervasyonların tutarsız olması</li>
              <li>• Eksik imza veya kaşe</li>
              <li>• Gelirle uyumsuz seyahat planı</li>
            </ul>

          </div>
        </section>

        {/* SİLO NAV */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-2xl font-bold mb-6">
              İsviçre Vize Sürecinin Diğer Adımları
            </h2>

            <div className="flex flex-wrap gap-6 text-sm font-semibold">
              <Link href="/isvicre-vize" className="hover:underline">
                İsviçre vize rehberi →
              </Link>
              <Link href="/isvicre-vize-randevusu" className="hover:underline">
                İsviçre vize randevusu →
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
              Dosyanızı Profesyonel Hazırlayın
            </h2>

            <p className="max-w-2xl mx-auto mb-8 text-red-100">
              İsviçre vize başvurularında finansal analiz kritik önemdedir.
              Evraklarınızı birlikte kontrol edelim.
            </p>

            <a
              href="https://wa.me/905302199056?text=Merhaba%2C%20Isvicre%20vize%20evraklari%20icin%20destek%20almak%20istiyorum."
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition"
            >
              Evrak Kontrolü Başlat
            </a>

          </div>
        </section>

      </main>
    </>
  );
}
