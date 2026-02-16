import Head from "next/head";
import Link from "next/link";

export default function IsvecVizeRandevusu() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "İsveç vize randevusu nereden alınır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "İsveç Schengen vize randevuları Türkiye'de VFS Global üzerinden alınmaktadır."
        }
      },
      {
        "@type": "Question",
        name: "İsveç vize randevuları ne zaman açılır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Randevular düzensiz aralıklarla açılır. Genellikle hafta içi sabah saatlerinde yeni kontenjan yüklenir."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>İsveç Vize Randevusu 2026 | VFS Global Randevu Alma Rehberi</title>

        <meta
          name="description"
          content="İsveç Schengen vize randevusu nasıl alınır? VFS Global İsveç randevu sistemi, slot açılma saatleri ve 2026 güncel başvuru adımları."
        />

        <meta
          name="keywords"
          content="isveç vize randevusu, isveç vfs randevu, isveç schengen randevu alma"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/isvec-vize-randevusu"
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

            <p className="text-sm text-blue-700 font-semibold mb-2">
              İsveç Schengen • VFS Global
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              İsveç Vize Randevusu Nasıl Alınır?
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
              İsveç Schengen vizesi için randevular Türkiye’de VFS Global üzerinden alınır.
              Yoğun dönemlerde slot bulmak zorlaşabilir. Randevu sistemini doğru
              kullanmak ret riskini azaltır.
            </p>

          </div>
        </section>

        {/* RANDEVU SİSTEMİ */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-8">
              İsveç Vize Randevu Sistemi
            </h2>

            <p className="text-slate-700 leading-relaxed mb-6">
              İsveç başvuruları VFS Global aracılığıyla alınır. Konsolosluk
              doğrudan randevu vermez. Başvuru sahibi öncelikle online sistem
              üzerinden hesap oluşturmalı ve uygun tarih seçmelidir.
            </p>

            <ul className="space-y-4 text-slate-700">
              <li>• VFS hesabı oluşturulur.</li>
              <li>• Başvuru türü seçilir (Turistik / Ticari / Aile Ziyareti).</li>
              <li>• Takvimden uygun slot seçilir.</li>
              <li>• Randevu onay belgesi indirilir.</li>
            </ul>

          </div>
        </section>

        {/* SLOT BİLGİSİ */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-slate-900 text-white p-10 rounded-2xl">

            <h2 className="text-3xl font-bold mb-6">
              İsveç Randevu Slotları Ne Zaman Açılır?
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              İsveç randevuları düzensiz şekilde açılır. Özellikle yaz aylarında
              yoğunluk artar. En sık gözlemlenen saat aralığı:
            </p>

            <ul className="space-y-3 text-slate-200">
              <li>• Hafta içi 08:30 – 10:00 arası</li>
              <li>• Pazartesi günleri yeni kontenjan yüklenmesi</li>
              <li>• İptal edilen slotların anlık düşmesi</li>
            </ul>

          </div>
        </section>

        {/* ŞEHİRLER */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-6">
              İsveç VFS Başvuru Merkezleri
            </h2>

            <p className="text-slate-700 leading-relaxed mb-6">
              Türkiye’de İsveç başvuruları genellikle İstanbul ve Ankara
              merkezleri üzerinden alınmaktadır.
            </p>

            <ul className="space-y-3 text-slate-700">
              <li>• VFS İstanbul</li>
              <li>• VFS Ankara</li>
            </ul>

          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-8">
              Sık Sorulan Sorular
            </h2>

            <details className="mb-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <summary className="font-semibold cursor-pointer">
                İsveç vize randevusu nereden alınır?
              </summary>
              <p className="mt-3 text-slate-700">
                VFS Global resmi internet sitesi üzerinden alınır.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <summary className="font-semibold cursor-pointer">
                Slot bulamıyorum, ne yapmalıyım?
              </summary>
              <p className="mt-3 text-slate-700">
                Sabah saatlerinde sistemi kontrol edin ve farklı şehirleri deneyin.
              </p>
            </details>

            {/* Silo Linkleme */}
            <div className="mt-10 border-t pt-6 flex flex-wrap gap-6 font-semibold text-sm">
              <Link href="/isvec-vize" className="hover:underline">
                İsveç vize rehberi →
              </Link>
              <Link href="/isvec-vize-evraklari" className="hover:underline">
                İsveç vize evrakları →
              </Link>
              <Link href="/isvec-vize-reddi" className="hover:underline">
                İsveç vize reddi →
              </Link>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="bg-blue-700 text-white rounded-2xl p-12 text-center shadow-xl">

            <h2 className="text-3xl font-bold mb-6">
              İsveç Randevu Takibi İster misiniz?
            </h2>

            <p className="max-w-2xl mx-auto mb-8 text-blue-100">
              Slot açıldığı anda işlem yapılmalıdır.
              Profesyonel takip sistemi ile randevunuzu erkene alabiliriz.
            </p>

            <a
              href="https://wa.me/905302199056?text=Merhaba%2C%20Isvec%20vize%20randevusu%20icin%20destek%20almak%20istiyorum."
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition"
            >
              Randevu Takibi Başlat
            </a>

          </div>
        </section>

      </main>
    </>
  );
}
