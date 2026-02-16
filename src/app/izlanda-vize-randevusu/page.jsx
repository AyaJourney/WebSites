import Head from "next/head";
import Link from "next/link";

export default function IzlandaVizeRandevusu() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "İzlanda Vize Randevusu Nasıl Alınır?",
    description:
      "İzlanda Schengen vizesi için VFS Global üzerinden randevu alma adımları, slot takibi ve randevu açılma saatleri.",
    author: {
      "@type": "Organization",
      name: "Aya Journey"
    },
    datePublished: "2026-02-16"
  };

  return (
    <>
      <Head>
        <title>İzlanda Vize Randevusu 2026 | VFS Slot Alma Rehberi</title>

        <meta
          name="description"
          content="İzlanda Schengen vizesi için randevu nasıl alınır? VFS Global İzlanda randevu sistemi, slot açılma saatleri ve No Slots Available çözümü."
        />

        <meta
          name="keywords"
          content="izlanda vize randevusu, izlanda vfs randevu, izlanda schengen slot, izlanda no slots available"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/izlanda-vize-randevusu"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="min-h-screen bg-zinc-50 font-sans text-slate-900">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">

            <p className="text-sm text-blue-600 font-semibold mb-2">
              İzlanda Schengen Randevu Süreci
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              İzlanda Vize Randevusu Nasıl Alınır?
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
              İzlanda Schengen başvuruları Türkiye’de VFS Global üzerinden alınmaktadır.
              Randevu bulmak özellikle yaz aylarında zorlaşabilir.
              Doğru saat ve strateji ile slot yakalamak mümkündür.
            </p>

          </div>
        </section>

        {/* ADIM ADIM */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-8">
              İzlanda VFS Randevu Alma Adımları
            </h2>

            <ol className="space-y-4 text-slate-700 list-decimal list-inside leading-relaxed">
              <li>VFS Global resmi sitesine giriş yapın.</li>
              <li>Hesap oluşturun ve e-posta doğrulamasını tamamlayın.</li>
              <li>Başvuru türünü seçin (Turistik / Ticari / Aile).</li>
              <li>Takvim ekranından uygun tarihi seçin.</li>
              <li>Servis ücretini ödeyin ve randevu belgesini indirin.</li>
            </ol>

          </div>
        </section>

        {/* NO SLOTS */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-slate-900 text-white p-10 rounded-2xl">

            <h2 className="text-3xl font-bold mb-6">
              “No Slots Available” Ne Demek?
            </h2>

            <p className="text-slate-300 leading-relaxed mb-4">
              Bu uyarı sistemde o an için boş randevu olmadığını gösterir.
              İzlanda randevuları sınırlı kontenjanla açıldığı için hızla tükenir.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Slotlar genellikle hafta içi sabah saatlerinde sisteme yüklenir.
              Sürekli yenileme yapmak IP engeline neden olabilir.
            </p>

          </div>
        </section>

        {/* NE ZAMAN AÇILIR */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-6">
              İzlanda Randevuları Ne Zaman Açılır?
            </h2>

            <ul className="space-y-4 text-slate-700 leading-relaxed">
              <li>• Genellikle hafta içi 08:30 – 10:00 arası</li>
              <li>• Pazartesi ve Çarşamba günleri daha aktif</li>
              <li>• İptal edilen slotlar rastgele saatlerde düşebilir</li>
            </ul>

          </div>
        </section>

        {/* ŞEHİR SEÇİMİ */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-6">
              Hangi Şehirlerden Başvuru Yapılabilir?
            </h2>

            <p className="text-slate-700 leading-relaxed">
              İzlanda başvuruları genellikle Ankara ve İstanbul VFS merkezleri üzerinden alınır.
              Yoğunluk durumuna göre farklı şehir seçenekleri açılabilir.
            </p>

          </div>
        </section>

        {/* SİLO LİNKLER */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-2xl font-bold mb-6">
              İzlanda Vize Sürecinin Diğer Aşamaları
            </h2>

            <div className="flex flex-wrap gap-6 text-sm font-semibold">
              <Link href="/izlanda-vize" className="hover:underline">
                İzlanda vize rehberi →
              </Link>

              <Link href="/izlanda-vize-evraklari" className="hover:underline">
                İzlanda vize evrakları →
              </Link>

              <Link href="/izlanda-vize-reddi" className="hover:underline">
                İzlanda vize reddi nedenleri →
              </Link>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="bg-blue-600 text-white rounded-2xl p-12 text-center shadow-xl">

            <h2 className="text-3xl font-bold mb-6">
              İzlanda Slot Takibi İster misiniz?
            </h2>

            <p className="max-w-2xl mx-auto mb-8 text-blue-100">
              Slot açıldığı anda hızlı işlem yapmak gerekir.
              Profesyonel randevu takibi ile süreci hızlandıralım.
            </p>

            <a
              href="https://wa.me/905302199056?text=Merhaba%2C%20Izlanda%20vize%20randevusu%20icin%20destek%20almak%20istiyorum."
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition"
            >
              Randevu Takibi Başlat
            </a>

          </div>
        </section>

      </main>
    </>
  );
}
