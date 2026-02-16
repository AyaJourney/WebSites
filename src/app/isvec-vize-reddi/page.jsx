import Head from "next/head";
import Link from "next/link";

export default function IsvecVizeReddi() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "İsveç vize reddi aldıktan sonra tekrar başvuru yapılabilir mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet. Ret nedeni doğru analiz edilirse eksikler giderilerek yeniden başvuru yapılabilir."
        }
      },
      {
        "@type": "Question",
        name: "İsveç vize reddine itiraz edilir mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet. İsveç Schengen ret kararına belirli süre içinde yazılı itiraz yapılabilir."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>İsveç Vize Reddi 2026 | Ret Nedenleri ve Çözüm Yolları</title>

        <meta
          name="description"
          content="İsveç vize reddi neden olur? Ret kodları, itiraz süreci ve yeniden başvuru stratejileri. 2026 güncel İsveç Schengen ret analizi."
        />

        <meta
          name="keywords"
          content="isveç vize reddi, isveç schengen ret, isveç vize ret nedenleri, isveç vize itiraz"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/isvec-vize-reddi"
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
              İsveç Schengen Ret Kararı
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              İsveç Vize Reddi Aldım, Ne Yapmalıyım?
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
              İsveç Schengen vizesi reddi aldıysanız panik yapmayın.
              Ret nedeni doğru analiz edilirse ikinci başvuruda onay alma
              ihtimali ciddi şekilde artabilir.
            </p>

          </div>
        </section>

        {/* RET NEDENLERİ */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-8">
              İsveç Vize Reddi Neden Olur?
            </h2>

            <ul className="space-y-5 text-slate-700 leading-relaxed">
              <li>• Finansal yeterlilik yetersiz görülmesi</li>
              <li>• Türkiye’ye geri dönüş bağlarının zayıf değerlendirilmesi</li>
              <li>• Seyahat planının inandırıcı bulunmaması</li>
              <li>• Belgelerde eksiklik veya tutarsızlık</li>
              <li>• Daha önce alınmış Schengen ret geçmişi</li>
            </ul>

          </div>
        </section>

        {/* RET KODLARI */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-slate-900 text-white p-10 rounded-2xl">

            <h2 className="text-3xl font-bold mb-6">
              İsveç Vize Ret Kodları Ne Anlama Gelir?
            </h2>

            <ul className="space-y-4 text-slate-200">
              <li><strong>Madde 2:</strong> Geri dönüş niyeti konusunda şüphe</li>
              <li><strong>Madde 8:</strong> Finansal yetersizlik</li>
              <li><strong>Madde 10:</strong> Seyahat amacının kanıtlanamaması</li>
            </ul>

            <p className="mt-6 text-slate-300 leading-relaxed">
              Ret mektubunda işaretlenen madde, dosyanızın zayıf alanını gösterir.
              Aynı hatayla yeniden başvuru yapmak kalıcı ret riskini artırabilir.
            </p>

          </div>
        </section>

        {/* İTİRAZ MI YENİDEN BAŞVURU MU */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-6">
              İsveç Vize Reddi Sonrası Ne Yapılmalı?
            </h2>

            <p className="text-slate-700 leading-relaxed mb-6">
              İsveç ret kararına yazılı itiraz yapılabilir. Ancak çoğu durumda
              eksikleri gidererek yeni başvuru yapmak daha hızlı sonuç verir.
            </p>

            <ol className="space-y-4 list-decimal list-inside text-slate-700">
              <li>Ret mektubu detaylı analiz edilir.</li>
              <li>Finansal ve bağlayıcı belgeler güçlendirilir.</li>
              <li>Seyahat planı netleştirilir.</li>
              <li>Yeni başvuru stratejik hazırlanır.</li>
            </ol>

          </div>
        </section>

        {/* SİLO LİNKLER */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-2xl font-bold mb-6">
              İsveç Vize Sürecini Baştan İnceleyin
            </h2>

            <div className="flex flex-wrap gap-6 font-semibold text-sm">
              <Link href="/isvec-vize" className="hover:underline">
                İsveç vize rehberi →
              </Link>
              <Link href="/isvec-vize-evraklari" className="hover:underline">
                İsveç vize evrakları →
              </Link>
              <Link href="/isvec-vize-randevusu" className="hover:underline">
                İsveç vize randevusu →
              </Link>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="bg-red-600 text-white rounded-2xl p-12 text-center shadow-xl">

            <h2 className="text-3xl font-bold mb-6">
              İsveç Retinizi Profesyonelce Analiz Edelim
            </h2>

            <p className="max-w-2xl mx-auto mb-8 text-red-100">
              Ret mektubunuzu inceleyelim, zayıf alanları belirleyelim ve
              yeni başvurunuzu güçlü bir dosya ile hazırlayalım.
            </p>

            <a
              href="https://wa.me/905302199056?text=Merhaba%2C%20Isvec%20vize%20reddi%20icin%20destek%20almak%20istiyorum."
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
