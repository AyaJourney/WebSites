import Link from "next/link";
export const metadata = {
  title: "Macaristan Vize Randevusu 2026 | VFS Macaristan Randevu Alma Rehberi",
  description:
    "Macaristan Schengen vize randevusu nasıl alınır? VFS Macaristan randevu sistemi, slot açılma saatleri, merkezler ve 2026 güncel başvuru adımları.",
  keywords: [
    "Macaristan vize randevusu",
    "VFS Macaristan randevu",
    "Macaristan Schengen randevu alma",
    "Macaristan VFS slot",
    "Macaristan randevu ne zaman açılır",
    "Macaristan Ankara VFS",
    "Macaristan İstanbul VFS"
  ],
  alternates: {
    canonical: "https://www.siteadi.com/macaristan-vize-randevusu",
  },
  openGraph: {
    title: "Macaristan Vize Randevusu 2026 | Güncel VFS Rehberi",
    description:
      "Macaristan vizesi için randevu alma süreci, slot açılma saatleri ve VFS merkez bilgileri.",
    url: "https://www.siteadi.com/macaristan-vize-randevusu",
    siteName: "Aya Journey",
    locale: "tr_TR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Macaristan Vize Randevusu Nasıl Alınır?",
    description:
      "VFS Macaristan randevu sistemi, slot yoğunluğu ve randevu alma adımları.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MacaristanVizeRandevusuPage() {
  return (
    <main className="min-h-screen bg-zinc-50">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">

          <p className="text-sm text-emerald-600 font-semibold mb-2">
            Macaristan • Schengen Randevu Süreci
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Macaristan Vize Randevusu Nasıl Alınır?
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
            Macaristan Schengen vizesi başvuruları Türkiye’de VFS Global
            üzerinden alınmaktadır. Randevu sistemi yoğun dönemlerde hızla dolabilir.
            İşte 2026 güncel randevu alma adımları ve dikkat edilmesi gerekenler.
          </p>

        </div>
      </section>

      {/* ADIM ADIM */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white p-10 rounded-2xl border border-slate-200">

          <h2 className="text-3xl font-bold mb-8 text-center">
            Macaristan Vize Randevusu Alma Adımları
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-sm text-slate-700">

            <div className="p-6 bg-slate-50 rounded-xl">
              <span className="font-bold text-emerald-600">01</span>
              <p className="mt-2">VFS Global Macaristan sayfasına giriş yapın.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl">
              <span className="font-bold text-emerald-600">02</span>
              <p className="mt-2">Hesap oluşturun ve e-posta doğrulamasını tamamlayın.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl">
              <span className="font-bold text-emerald-600">03</span>
              <p className="mt-2">Başvuru türünü seçin (Turistik / Ticari / Aile).</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl">
              <span className="font-bold text-emerald-600">04</span>
              <p className="mt-2">Uygun tarihi seçin ve randevu onay belgesini indirin.</p>
            </div>

          </div>

        </div>
      </section>

      {/* YOĞUNLUK */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-slate-900 text-white p-10 rounded-2xl">

          <h2 className="text-3xl font-bold mb-6">
            Macaristan Randevuları Ne Zaman Açılır?
          </h2>

          <ul className="space-y-3 text-slate-200">
            <li>• Genellikle hafta içi sabah saatlerinde</li>
            <li>• Yoğun sezon öncesi kısa aralıklarla</li>
            <li>• İptal edilen randevular rastgele saatlerde</li>
          </ul>

          <p className="mt-6 text-slate-300">
            “No slots available” uyarısı sistemin dolu olduğunu gösterir.
            Bu durumda düzenli kontrol gerekir.
          </p>

        </div>
      </section>

      {/* MERKEZLER */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white p-10 rounded-2xl border border-slate-200">

          <h2 className="text-3xl font-bold mb-6">
            Türkiye’de Macaristan VFS Merkezleri
          </h2>

          <ul className="space-y-3 text-slate-700">
            <li>• Ankara</li>
            <li>• İstanbul</li>
            <li>• İzmir</li>
            <li>• Gaziantep</li>
          </ul>

        </div>
      </section>

      {/* SİLO LİNK */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-white p-10 rounded-2xl border border-slate-200">

          <h2 className="text-2xl font-bold mb-6">
            Macaristan Vize Sürecini Baştan Öğrenin
          </h2>

          <div className="space-y-3 font-semibold">

            <Link href="/macaristan-vize" className="block hover:underline">
              Macaristan vize rehberi →
            </Link>

            <Link href="/macaristan-vize-evraklari" className="block hover:underline">
              Macaristan vize evrakları →
            </Link>

            <Link href="/macaristan-vize-reddi" className="block hover:underline">
              Macaristan vize reddi nedenleri →
            </Link>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-emerald-600 text-white rounded-2xl p-12 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Macaristan Randevu Bulamıyor musunuz?
          </h2>

          <p className="max-w-2xl mx-auto mb-8 text-emerald-100">
            Yoğunluk nedeniyle randevu bulmak zor olabilir.
            Slot açıldığı anda profesyonel takip ile işlem yapabiliriz.
          </p>

          <a
            href="https://wa.me/905302199056"
            className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition"
          >
            Randevu Takibi Başlat
          </a>

        </div>
      </section>

    </main>
  );
}
