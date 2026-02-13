import Link from "next/link";

export const metadata = {
  title: "Macaristan Vize Evrakları 2026 | Güncel Schengen Belge Listesi",
  description:
    "Macaristan Schengen vizesi için gerekli evraklar 2026 güncel liste. Turistik, ticari ve aile ziyareti Macaristan vize evrakları, finansal şartlar ve başvuru detayları.",
  keywords: [
    "Macaristan vize evrakları",
    "Macaristan Schengen evrak listesi",
    "Macaristan turistik vize evrakları",
    "Macaristan ticari vize belgeleri",
    "Macaristan vize başvuru belgeleri",
    "Macaristan VFS evrak",
    "Macaristan vize şartları 2026"
  ],
  alternates: {
    canonical: "https://www.siteadi.com/macaristan-vize-evraklari",
  },
  openGraph: {
    title: "Macaristan Vize Evrakları 2026 | Güncel Belge Rehberi",
    description:
      "Macaristan vizesi için gerekli tüm belgeler. Banka hesap şartları, iş evrakları ve eksiksiz başvuru dosyası hazırlama rehberi.",
    url: "https://www.siteadi.com/macaristan-vize-evraklari",
    siteName: "Aya Journey",
    locale: "tr_TR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Macaristan Vize Evrak Listesi 2026",
    description:
      "Macaristan Schengen vizesi için eksiksiz evrak listesi ve başvuru süreci.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function MacaristanVizeEvraklariPage() {
  return (
    <main className="min-h-screen bg-zinc-50">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">

          <p className="text-sm text-emerald-600 font-semibold mb-2">
            Macaristan • Schengen Vizesi
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Macaristan Vize Evrakları 2026
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
            Macaristan Schengen vizesi başvurusu için gerekli tüm evrakları
            eksiksiz hazırlamanız gerekir. Finansal yeterlilik, Türkiye’ye geri dönüş
            bağları ve seyahat planı dosyanın en kritik bölümleridir.
          </p>

        </div>
      </section>

      {/* TEMEL EVRAKLAR */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white p-10 rounded-2xl border border-slate-200">

          <h2 className="text-3xl font-bold mb-8">
            Macaristan Vizesi İçin Temel Evraklar
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Geçerli pasaport (son 10 yıl içinde alınmış, en az 2 boş sayfa)</li>
            <li>• 2 adet biyometrik fotoğraf</li>
            <li>• Vize başvuru formu</li>
            <li>• Seyahat sağlık sigortası (minimum 30.000 € teminatlı)</li>
            <li>• Uçuş rezervasyonu</li>
            <li>• Konaklama rezervasyonu</li>
            <li>• Nüfus kayıt örneği (tam vukuatlı)</li>
          </ul>

        </div>
      </section>

      {/* FİNANSAL BELGELER */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-slate-900 text-white p-10 rounded-2xl">

          <h2 className="text-3xl font-bold mb-6">
            Finansal Belgeler (En Kritik Bölüm)
          </h2>

          <ul className="space-y-4 text-slate-200">
            <li>• Son 3 aylık banka hesap dökümü (kaşeli, imzalı)</li>
            <li>• Günlük minimum 50–70 € bakiye gösterebilme</li>
            <li>• Maaş bordrosu (son 3 ay)</li>
            <li>• SGK hizmet dökümü</li>
            <li>• Sponsor varsa sponsor dilekçesi ve finansal belgeleri</li>
          </ul>

          <p className="mt-6 text-slate-300">
            Hesaba son anda yatırılan yüksek tutarlar ret sebebi olabilir.
          </p>

        </div>
      </section>

      {/* ÇALIŞMA DURUMUNA GÖRE */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white p-10 rounded-2xl border border-slate-200">

          <h2 className="text-3xl font-bold mb-8">
            Çalışma Durumuna Göre Ek Belgeler
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-slate-700">

            <div>
              <h4 className="font-bold mb-3">Çalışanlar</h4>
              <ul className="space-y-2 text-sm">
                <li>• İş yeri izin yazısı</li>
                <li>• SGK işe giriş bildirgesi</li>
                <li>• Vergi levhası (şirket)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3">Şirket Sahipleri</h4>
              <ul className="space-y-2 text-sm">
                <li>• Ticaret sicil gazetesi</li>
                <li>• Vergi levhası</li>
                <li>• Faaliyet belgesi</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3">Öğrenciler</h4>
              <ul className="space-y-2 text-sm">
                <li>• Öğrenci belgesi</li>
                <li>• Sponsor dilekçesi</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3">Emekliler</h4>
              <ul className="space-y-2 text-sm">
                <li>• Emekli maaş dökümü</li>
                <li>• SGK emeklilik belgesi</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* INTERNAL LINK SİLO */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-white p-10 rounded-2xl border border-slate-200">

          <h2 className="text-2xl font-bold mb-6">
            Macaristan Vize Sürecini Baştan İnceleyin
          </h2>

          <div className="space-y-3 font-semibold">
            <Link href="/macaristan-vize" className="block hover:underline">
              Macaristan vize rehberi →
            </Link>

            <Link href="/macaristan-vize-randevusu" className="block hover:underline">
              Macaristan vize randevusu →
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
            Macaristan Vize Dosyanızı Profesyonel Hazırlayalım
          </h2>

          <p className="max-w-2xl mx-auto mb-8 text-emerald-100">
            Eksik veya hatalı evrak nedeniyle ret riskini artırmayın.
            Dosyanızı Schengen standartlarına uygun hazırlayalım.
          </p>

          <a
            href="https://wa.me/905302199056"
            className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition"
          >
            Evrak Kontrolü Talep Et
          </a>

        </div>
      </section>

    </main>
  );
}
