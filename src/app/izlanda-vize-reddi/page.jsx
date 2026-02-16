import Head from "next/head";
import Link from "next/link";

export default function IzlandaVizeReddi() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "İzlanda Vize Reddi Nedenleri ve Çözüm Yolları",
    description:
      "İzlanda Schengen vizesi neden reddedilir? Ret kodları, itiraz süreci ve yeniden başvuru stratejileri.",
    author: {
      "@type": "Organization",
      name: "Aya Journey"
    },
    datePublished: "2026-02-16"
  };

  return (
    <>
      <Head>
        <title>İzlanda Vize Reddi 2026 | Ret Nedenleri ve İtiraz Rehberi</title>

        <meta
          name="description"
          content="İzlanda vize reddi aldıysanız ret kodunun anlamını öğrenin. İzlanda Schengen ret nedenleri, itiraz süreci ve yeniden başvuru stratejisi."
        />

        <meta
          name="keywords"
          content="izlanda vize reddi, izlanda schengen ret, izlanda ret kodu, izlanda vize itiraz"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/izlanda-vize-reddi"
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

            <p className="text-sm text-red-600 font-semibold mb-2">
              İzlanda • Schengen Ret Kararı
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              İzlanda Vize Reddi Aldım, Ne Yapmalıyım?
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
              İzlanda Schengen vizesi reddi aldıysanız dosyanızdaki eksikler
              doğru analiz edilmeden yeniden başvuru yapmanız risklidir.
              Ret nedeni doğru belirlenirse ikinci başvuruda onay şansı ciddi şekilde artar.
            </p>

          </div>
        </section>

        {/* RET NEDENLERİ */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-8">
              İzlanda Vize Reddi Neden Olur?
            </h2>

            <ul className="space-y-4 text-slate-700 leading-relaxed">
              <li>• Finansal yeterliliğin yetersiz görülmesi</li>
              <li>• Türkiye’ye geri dönüş bağlarının zayıf değerlendirilmesi</li>
              <li>• Seyahat planının inandırıcı olmaması</li>
              <li>• Evraklarda tutarsızlık veya eksik belge</li>
              <li>• Daha önceki Schengen ret geçmişi</li>
            </ul>

          </div>
        </section>

        {/* RET KODLARI */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-slate-900 text-white p-10 rounded-2xl">

            <h2 className="text-3xl font-bold mb-6">
              İzlanda Ret Kodları Ne Anlama Gelir?
            </h2>

            <ul className="space-y-4 text-slate-300 leading-relaxed">
              <li><strong>Madde 2:</strong> Geri dönüş niyeti konusunda şüphe.</li>
              <li><strong>Madde 8:</strong> Finansal kaynak yetersiz veya açıklanamıyor.</li>
              <li><strong>Madde 10:</strong> Seyahat amacı yeterince kanıtlanmamış.</li>
            </ul>

          </div>
        </section>

        {/* İTİRAZ MI YENİ BAŞVURU MU */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-6">
              İzlanda Ret Sonrası İtiraz mı, Yeni Başvuru mu?
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              İzlanda Schengen ret kararına itiraz mümkündür.
              Ancak çoğu durumda eksikleri gidererek yeni başvuru yapmak daha etkili sonuç verir.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Özellikle finansal retlerde banka hareketlerinin yeniden yapılandırılması
              ve seyahat planının güçlendirilmesi gerekir.
            </p>

          </div>
        </section>

        {/* RİSK UYARISI */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-red-600 text-white p-10 rounded-2xl">

            <h2 className="text-3xl font-bold mb-6">
              Dikkat: Hatalı İkinci Başvuru Kalıcı Risk Yaratabilir
            </h2>

            <p className="text-red-100 leading-relaxed">
              Aynı eksiklerle yapılan ikinci başvuru,
              sistemde kalıcı olumsuz profil oluşturabilir.
              Bu nedenle ret analiz edilmeden tekrar başvuru yapılmamalıdır.
            </p>

          </div>
        </section>

        {/* SİLO LİNKLER */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-2xl font-bold mb-6">
              İzlanda Vize Sürecini Baştan İnceleyin
            </h2>

            <div className="flex flex-wrap gap-6 text-sm font-semibold">
              <Link href="/izlanda-vize" className="hover:underline">
                İzlanda vize rehberi →
              </Link>

              <Link href="/izlanda-vize-evraklari" className="hover:underline">
                İzlanda vize evrakları →
              </Link>

              <Link href="/izlanda-vize-randevusu" className="hover:underline">
                İzlanda vize randevusu →
              </Link>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="bg-red-600 text-white rounded-2xl p-12 text-center shadow-xl">

            <h2 className="text-3xl font-bold mb-6">
              İzlanda Ret Analizi Yaptıralım
            </h2>

            <p className="max-w-2xl mx-auto mb-8 text-red-100">
              Ret mektubunuzu analiz edelim,
              eksikleri belirleyelim ve güçlü bir dosya ile yeniden başvuru yapalım.
            </p>

            <a
              href="https://wa.me/905302199056?text=Merhaba%2C%20Izlanda%20vize%20reddi%20aldim.%20Analiz%20destegi%20almak%20istiyorum."
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition"
            >
              Ret Analizi Başlat
            </a>

          </div>
        </section>

      </main>
    </>
  );
}
