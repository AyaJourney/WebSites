import Head from "next/head";
import Link from "next/link";

export default function IzlandaVizeEvraklari() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "İzlanda Vize Evrakları 2026",
    description:
      "İzlanda Schengen vizesi için gerekli evrak listesi, banka hesap şartları, dilekçe örneği ve başvuru dosyası hazırlama rehberi.",
    author: {
      "@type": "Organization",
      name: "Aya Journey"
    },
    datePublished: "2026-02-16"
  };

  return (
    <>
      <Head>
        <title>İzlanda Vize Evrakları 2026 | Güncel Evrak Listesi</title>

        <meta
          name="description"
          content="İzlanda Schengen vizesi için gerekli evraklar nelerdir? Turistik, ticari ve aile ziyareti için güncel İzlanda vize evrak listesi ve banka şartları."
        />

        <meta
          name="keywords"
          content="izlanda vize evrakları, izlanda schengen evrak listesi, izlanda turistik vize belgeleri, izlanda banka hesap şartı"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/izlanda-vize-evraklari"
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
              İzlanda Schengen Vizesi
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              İzlanda Vize Evrakları 2026
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
              İzlanda vizesi başvurusunda en önemli aşama doğru ve eksiksiz
              evrak hazırlığıdır. Finansal durum, seyahat planı ve geri dönüş
              bağlarınız net şekilde belgelenmelidir.
            </p>

          </div>
        </section>

        {/* ZORUNLU EVRAKLAR */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-6">
              İzlanda Turistik Vize İçin Gerekli Evraklar
            </h2>

            <ul className="space-y-4 text-slate-700 leading-relaxed">
              <li>• En az 2 boş sayfalı ve 10 yıldan eski olmayan pasaport</li>
              <li>• Schengen vize başvuru formu</li>
              <li>• 2 adet biyometrik fotoğraf</li>
              <li>• Seyahat sağlık sigortası (minimum 30.000 € teminat)</li>
              <li>• Gidiş-dönüş uçuş rezervasyonu</li>
              <li>• Otel rezervasyonu veya davetiye</li>
              <li>• Son 3 aylık banka hesap dökümü (ıslak imzalı & kaşeli)</li>
              <li>• Çalışma belgesi / şirket evrakları / öğrenci belgesi</li>
            </ul>

          </div>
        </section>

        {/* FİNANSAL ŞART */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-slate-900 text-white p-10 rounded-2xl">

            <h2 className="text-3xl font-bold mb-6">
              İzlanda İçin Banka Hesabında Ne Kadar Para Olmalı?
            </h2>

            <p className="text-slate-300 leading-relaxed mb-4">
              Günlük ortalama 70–100 Euro karşılığı bakiye gösterilmesi önerilir.
              Seyahat süresi uzadıkça hesapta bulunan toplam bakiye artmalıdır.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Ani yüklü para girişleri ret riski oluşturabilir.
              Paranın kaynağı belgelenebilir olmalıdır.
            </p>

          </div>
        </section>

        {/* ÇALIŞMA DURUMUNA GÖRE */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-6">
              Çalışma Durumuna Göre Ek Evraklar
            </h2>

            <div className="space-y-6 text-slate-700 leading-relaxed">

              <div>
                <h3 className="font-semibold mb-2">Çalışanlar</h3>
                <p>• SGK işe giriş bildirgesi</p>
                <p>• Son 3 aylık maaş bordrosu</p>
                <p>• İzin yazısı</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Şirket Sahipleri</h3>
                <p>• Vergi levhası</p>
                <p>• Faaliyet belgesi</p>
                <p>• İmza sirküleri</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Öğrenciler</h3>
                <p>• Güncel öğrenci belgesi</p>
                <p>• Sponsor dilekçesi</p>
              </div>

            </div>

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

              <Link href="/izlanda-vize-randevusu" className="hover:underline">
                İzlanda vize randevusu →
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
              Evraklarınızı Kontrol Edelim
            </h2>

            <p className="max-w-2xl mx-auto mb-8 text-blue-100">
              Eksik veya hatalı evrak nedeniyle ret riski yaşamayın.
              Dosyanızı profesyonel olarak analiz edelim.
            </p>

            <a
              href="https://wa.me/905302199056?text=Merhaba%2C%20Izlanda%20vize%20evraklari%20icin%20destek%20almak%20istiyorum."
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition"
            >
              Evrak Kontrolü Başlat
            </a>

          </div>
        </section>

      </main>
    </>
  );
}
