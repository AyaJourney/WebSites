import Head from "next/head";
import Link from "next/link";

export default function ItalyaVizeRandevusu() {
  return (
    <>
     <Head>
  {/* BASIC SEO */}
  <title>
    İtalya Vize Randevusu 2026 | VFS Global Randevu Alma Rehberi
  </title>

  <meta
    name="description"
    content="İtalya vize randevusu nasıl alınır? VFS Global üzerinden İtalya Schengen randevu sistemi, slot açılma saatleri, Ankara ve İstanbul başvuru merkezleri 2026 güncel rehberi."
  />

  <meta
    name="keywords"
    content="
    italya vize randevusu,
    italya vfs randevu alma,
    italya schengen randevu sistemi,
    italya vfs no slots available,
    italya randevu ne zaman açılır,
    italya vize randevu ankara,
    italya vize randevu istanbul,
    italya schengen başvuru merkezi
    "
  />

  <link
    rel="canonical"
    href="https://ayajourney.com/italya-vize-randevusu"
  />

  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

  {/* OPEN GRAPH */}
  <meta property="og:title" content="İtalya Vize Randevusu 2026 | VFS Slot Rehberi" />
  <meta
    property="og:description"
    content="İtalya Schengen vizesi için VFS Global randevu alma adımları, slot açılma saatleri ve yoğun dönem stratejileri."
  />
  <meta property="og:url" content="https://ayajourney.com/italya-vize-randevusu" />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="tr_TR" />

  {/* TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="İtalya Vize Randevusu 2026" />
  <meta
    name="twitter:description"
    content="İtalya VFS Global randevu sistemi ve slot takibi rehberi."
  />

  {/* GEO TARGETING */}
  <meta name="geo.region" content="TR" />
  <meta name="geo.placename" content="Turkey" />
  <meta name="language" content="tr" />

  {/* STRUCTURED DATA – ARTICLE */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "İtalya Vize Randevusu 2026 - VFS Global Slot Alma Rehberi",
        "description":
          "İtalya Schengen vizesi için VFS Global randevu sistemi, slot açılma saatleri ve başvuru merkezi bilgileri.",
        "author": {
          "@type": "Organization",
          "name": "AYA Journey"
        },
        "publisher": {
          "@type": "Organization",
          "name": "AYA Journey"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://ayajourney.com/italya-vize-randevusu"
        }
      })
    }}
  />

  {/* FAQ SCHEMA */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "İtalya vize randevusu nasıl alınır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "İtalya Schengen vizesi için randevu VFS Global resmi sitesi üzerinden online alınır. Hesap oluşturulur, başvuru türü seçilir ve uygun tarih seçilerek ödeme yapılır."
            }
          },
          {
            "@type": "Question",
            "name": "İtalya VFS randevuları ne zaman açılır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Randevu slotları düzensiz açılır ancak genellikle hafta içi sabah saatlerinde yeni kontenjan yüklenir."
            }
          },
          {
            "@type": "Question",
            "name": "İtalya VFS No Slots Available ne demek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bu uyarı o an için boş randevu bulunmadığını gösterir. Yeni slotlar açıldığında tekrar kontrol edilmelidir."
            }
          }
        ]
      })
    }}
  />

</Head>


      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <section className="text-center mb-20">
          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-green-200">
            VFS Global İtalya 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            İtalya Vize Randevusu
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            İtalya Schengen vizesi için randevular VFS Global sistemi üzerinden alınır.
            Yoğun dönemlerde slot bulmak zorlaşabilir. İşte adım adım süreç.
          </p>
        </section>

        {/* RANDEVU ADIMLARI */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-12 text-center">
            İtalya Vize Randevusu Nasıl Alınır?
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              { n: "01", t: "VFS Hesabı Aç", d: "İtalya VFS Global portalında hesap oluştur." },
              { n: "02", t: "Başvuru Türü Seç", d: "Turistik, ticari veya aile ziyareti kategorisini belirle." },
              { n: "03", t: "Slot Kontrolü", d: "Takvimde uygun tarihleri kontrol et." },
              { n: "04", t: "Ödeme", d: "Servis ücretini online olarak öde." },
              { n: "05", t: "Evrak Teslimi", d: "Randevu günü biyometri ve evrak teslimi yapılır." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-3xl border relative">
                <span className="text-4xl font-black text-green-200 absolute top-4 right-4">
                  {item.n}
                </span>
                <h4 className="font-bold mb-2 mt-6">{item.t}</h4>
                <p className="text-xs text-slate-500">{item.d}</p>
              </div>
            ))}

          </div>
        </section>

        {/* SLOT SORUNU */}
        <section className="bg-slate-900 text-white p-12 rounded-3xl mb-24 shadow-xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            İtalya “No Slots Available” Sorunu
          </h2>

          <p className="text-slate-300 text-center max-w-3xl mx-auto mb-8">
            Takvimde uygun tarih görünmüyorsa sistem doludur.
            Slotlar genellikle hafta içi sabah saatlerinde açılır.
          </p>

          <div className="text-center">
            <Link
              href="/vfs-no-slots-availables"
              className="text-green-400 font-bold hover:underline"
            >
              No Slots Available Detaylı Rehber →
            </Link>
          </div>
        </section>

        {/* YOĞUNLUK BÖLÜMÜ */}
        <section className="mb-24 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            İtalya Vize Randevuları Ne Zaman Açılır?
          </h2>

          <ul className="space-y-3 text-slate-600">
            <li>• Hafta içi 08:30 – 10:00 arası</li>
            <li>• Pazartesi ve Çarşamba günleri daha aktif</li>
            <li>• Tatil sonrası ilk iş günü yeni kontenjan yüklenebilir</li>
          </ul>

          <div className="mt-6">
            <Link
              href="/vfs-randevu-bulamiyorum"
              className="font-semibold text-green-600 hover:underline"
            >
              VFS Randevu Bulamıyorum Rehberi →
            </Link>
          </div>
        </section>

        {/* INTERNAL LINK BOOST */}
        <section className="mb-24">
          <h2 className="text-2xl font-black mb-6 text-center">
            İtalya Vize Sürecini Baştan İnceleyin
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-center font-semibold">

            <Link href="/italya-vize" className="hover:underline">
              İtalya Vize Rehberi →
            </Link>

            <Link href="/italya-vize-evraklari" className="hover:underline">
              İtalya Vize Evrakları →
            </Link>

            <Link href="/italya-vize-reddi" className="hover:underline">
              İtalya Vize Reddi →
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">
            Slot Bulamıyor musunuz?
          </h2>

          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            İtalya randevu yoğunluğu dönemsel olarak artar.
            Profesyonel takip ile slot açıldığı anda işlem yapılabilir.
          </p>

          <a
            href="https://wa.me/905302199056"
            className="bg-white text-green-700 px-10 py-4 rounded-2xl font-black text-xl"
          >
            Randevu Takibi Başlat
          </a>
        </section>

      </main>
    </>
  );
}
