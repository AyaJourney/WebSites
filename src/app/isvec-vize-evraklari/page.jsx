import Head from "next/head";
import Link from "next/link";

export default function IsvecVizeEvraklari() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "İsveç vizesi için banka hesabında ne kadar para olmalı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Seyahat süresine göre değişmekle birlikte günlük ortalama 60-100 Euro karşılığı bakiye önerilir."
        }
      },
      {
        "@type": "Question",
        name: "İsveç vizesi için davetiye zorunlu mu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Turistik vizelerde zorunlu değildir. Aile veya arkadaş ziyareti başvurularında davetiye gerekir."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>İsveç Vize Evrakları 2026 | Güncel Schengen Belge Listesi</title>

        <meta
          name="description"
          content="İsveç Schengen vizesi için gerekli evraklar 2026: çalışan, öğrenci, şirket sahibi ve sponsorlu başvuru için detaylı belge listesi."
        />

        <meta
          name="keywords"
          content="isveç vize evrakları, isveç schengen evrak listesi, isveç turist vizesi belgeler"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/isvec-vize-evraklari"
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
              İsveç Schengen • 2026 Güncel
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              İsveç Vize Evrakları
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
              İsveç turistik, ticari ve aile ziyareti vizeleri için
              hazırlanması gereken evraklar başvuru türüne göre değişir.
              Dosyanın eksiksiz ve tutarlı olması ret riskini doğrudan etkiler.
            </p>

          </div>
        </section>

        {/* TEMEL EVRAKLAR */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-8">
              Tüm Başvurular İçin Zorunlu Evraklar
            </h2>

            <ul className="space-y-4 text-slate-700 leading-relaxed">
              <li>• En az 2 boş sayfası olan pasaport</li>
              <li>• 2 adet biyometrik fotoğraf</li>
              <li>• Schengen başvuru formu</li>
              <li>• Seyahat sağlık sigortası (minimum 30.000 € teminat)</li>
              <li>• Uçak rezervasyonu</li>
              <li>• Otel rezervasyonu veya davetiye</li>
              <li>• Son 3 aya ait banka hesap dökümü</li>
            </ul>

          </div>
        </section>

        {/* ÇALIŞANLAR */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-6">
              Çalışanlar İçin Ek Evraklar
            </h2>

            <ul className="space-y-3 text-slate-700">
              <li>• İşveren izin yazısı</li>
              <li>• Son 3 aylık maaş bordrosu</li>
              <li>• SGK işe giriş bildirgesi</li>
              <li>• SGK hizmet dökümü</li>
            </ul>

          </div>
        </section>

        {/* ŞİRKET SAHİBİ */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-6">
              Şirket Sahipleri İçin
            </h2>

            <ul className="space-y-3 text-slate-700">
              <li>• Vergi levhası</li>
              <li>• Faaliyet belgesi</li>
              <li>• Ticaret sicil gazetesi</li>
              <li>• İmza sirküleri</li>
            </ul>

          </div>
        </section>

        {/* FİNANSAL KRİTER */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-blue-600 text-white p-10 rounded-2xl">

            <h2 className="text-3xl font-bold mb-6">
              İsveç Vizesinde Finansal Yeterlilik
            </h2>

            <p className="text-blue-100 leading-relaxed mb-4">
              Banka hesabında seyahat süresine uygun bakiye bulunmalıdır.
              Son dakika para girişleri açıklanabilir olmalıdır.
            </p>

            <p className="text-blue-100 leading-relaxed">
              İsveç Konsolosluğu düzenli gelir akışına ve harcama tutarlılığına önem verir.
            </p>

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
                İsveç vizesi için banka hesabında ne kadar para olmalı?
              </summary>
              <p className="mt-3 text-slate-700">
                Günlük ortalama 60–100 Euro karşılığı bakiye önerilir.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <summary className="font-semibold cursor-pointer">
                İsveç vizesi için davetiye zorunlu mu?
              </summary>
              <p className="mt-3 text-slate-700">
                Turistik başvurularda zorunlu değildir.
              </p>
            </details>

            <div className="mt-10 border-t pt-6 flex flex-wrap gap-6 font-semibold text-sm">
              <Link href="/isvec-vize" className="hover:underline">
                İsveç vize rehberi →
              </Link>
              <Link href="/isvec-vize-randevusu" className="hover:underline">
                İsveç randevu süreci →
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
              Evraklarınızı Profesyonel Kontrol Edelim
            </h2>

            <p className="max-w-2xl mx-auto mb-8 text-blue-100">
              Dosyanız eksiksiz ve konsolosluk kriterlerine uygun hazırlanmalı.
            </p>

            <a
              href="https://wa.me/905302199056?text=Merhaba%2C%20Isvec%20vize%20evraklarim%20icin%20kontrol%20talep%20ediyorum."
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition"
            >
              Evrak Kontrolü Al
            </a>

          </div>
        </section>

      </main>
    </>
  );
}
