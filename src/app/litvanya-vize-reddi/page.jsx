import Head from "next/head";
import Link from "next/link";

export default function LitvanyaVizeReddi() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Litvanya vize reddi neden olur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En yaygın ret nedenleri finansal yetersizlik, geri dönüş niyetinin zayıf görülmesi ve belgelerde tutarsızlıktır."
        }
      },
      {
        "@type": "Question",
        name: "Litvanya vize reddine itiraz edilir mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet. Litvanya Schengen ret kararına yazılı itiraz hakkı bulunmaktadır. Ancak çoğu durumda eksikler giderilerek yeniden başvuru daha hızlı sonuç verir."
        }
      },
      {
        "@type": "Question",
        name: "Litvanya ret sonrası tekrar başvuru yapılabilir mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet. Ret sonrası yeni başvuru yapılabilir. Ancak aynı hatalar tekrar edilirse ikinci ret riski artar."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Litvanya Vize Reddi 2026 | Ret Nedenleri ve İtiraz Süreci</title>

        <meta
          name="description"
          content="Litvanya vize reddi neden olur? Ret kodları, Schengen Madde 8 ve Madde 10 açıklaması, itiraz süreci ve yeniden başvuru stratejisi."
        />

        <meta
          name="keywords"
          content="litvanya vize reddi, litvanya schengen ret, litvanya ret nedenleri, litvanya vize itiraz"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/litvanya-vize-reddi"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-red-100 text-red-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-red-200">
            Litvanya Schengen Ret Kararı
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Litvanya Vize Reddi Aldım, Ne Yapmalıyım?
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Litvanya Schengen vizesi reddi aldıysanız panik yapmayın.
            Ret mektubundaki maddeyi doğru analiz etmek, ikinci başvuruda
            onay alma ihtimalinizi ciddi şekilde artırır.
          </p>
        </header>

        {/* EN SIK RET NEDENLERİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Litvanya Vize Reddi Neden Olur?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-red-600">
                Finansal Yetersizlik (Madde 8)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Banka hesabındaki bakiye yetersiz görülmüş olabilir veya
                gelir-gider dengesi ikna edici bulunmamış olabilir.
                Son dakika yatırılan toplu paralar ret riskini artırır.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-red-600">
                Seyahat Amacının Kanıtlanamaması (Madde 10)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Otel, uçuş veya davetiye belgeleri seyahat amacını net
                göstermiyorsa Litvanya konsolosluğu ret verebilir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-red-600">
                Geri Dönüş Şüphesi (Madde 2)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Türkiye’deki iş, gelir veya aile bağları yeterince güçlü
                görülmemiş olabilir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-red-600">
                Belgelerde Tutarsızlık
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Başvuru formu ile banka hareketleri veya iş yazısı arasında
                çelişki olması ret sebebidir.
              </p>
            </div>

          </div>
        </section>

        {/* İTİRAZ VS YENİ BAŞVURU */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            İtiraz mı, Yeniden Başvuru mu?
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto text-center leading-relaxed mb-6">
            Litvanya ret kararına yazılı itiraz edilebilir.
            Ancak pratikte çoğu başvuruda eksikler giderilerek
            yeniden başvuru yapmak daha hızlı sonuç verir.
          </p>

          <ul className="space-y-3 text-slate-200 max-w-xl mx-auto text-sm">
            <li>• Ret mektubundaki işaretli madde analiz edilmelidir.</li>
            <li>• Aynı dosya ile tekrar başvuru yapılmamalıdır.</li>
            <li>• Finansal yapı yeniden düzenlenmelidir.</li>
          </ul>
        </section>

        {/* RİSK UYARISI */}
        <section className="mb-24 bg-red-50 p-12 rounded-[3rem] border border-red-200">
          <h2 className="text-3xl font-black mb-6 text-center text-red-700">
            İkinci Başvuruda En Büyük Hata
          </h2>

          <p className="text-slate-700 leading-relaxed text-center max-w-2xl mx-auto">
            İlk dosyadaki eksikleri gidermeden yeniden başvuru yapmak,
            Schengen sisteminde risk profilinizi yükseltir.
            İkinci ret, üçüncü başvuruyu daha da zorlaştırır.
          </p>
        </section>

        {/* INTERNAL LINK SİLO */}
        <section className="mb-20 text-center space-y-4 font-bold">

          <Link href="/litvanya-vize" className="block hover:underline text-green-700">
            Litvanya Vize Rehberi →
          </Link>

          <Link href="/litvanya-vize-evraklari" className="block hover:underline text-green-700">
            Litvanya Vize Evrakları →
          </Link>

          <Link href="/litvanya-vize-randevusu" className="block hover:underline text-green-700">
            Litvanya Vize Randevusu →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Litvanya Ret Dosyanızı Analiz Edelim
          </h2>

          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Ret mektubunuzu detaylı inceleyelim, eksikleri belirleyelim
            ve ikinci başvurunuzu güçlü bir stratejiyle hazırlayalım.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Litvanya%20vize%20reddi%20aldim.%20Analiz%20destegi%20istiyorum."
            className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Ret Analizi Başlat
          </a>

        </section>

      </main>
    </>
  );
}
