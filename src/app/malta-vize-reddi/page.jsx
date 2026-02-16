import Head from "next/head";
import Link from "next/link";

export default function MaltaVizeReddi() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Malta Vize Reddi 2026",
    description:
      "Malta Schengen vize reddi neden olur? Ret kodları, yeniden başvuru stratejisi ve itiraz süreci hakkında detaylı rehber.",
    author: {
      "@type": "Organization",
      name: "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Malta Vize Reddi 2026 | Ret Nedenleri ve Çözüm</title>

        <meta
          name="description"
          content="Malta Schengen vize reddi neden olur? Ret kodları, finansal yetersizlik, geri dönüş şüphesi ve yeniden başvuru stratejisi."
        />

        <meta
          name="keywords"
          content="malta vize reddi, malta schengen ret, malta vize ret nedenleri"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/malta-vize-reddi"
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
            Malta Schengen Ret Kararı
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Malta Vize Reddi Aldım, Ne Yapmalıyım?
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Malta Schengen vize başvurunuz reddedildiyse panik yapmayın.
            Ret nedeni doğru analiz edilmezse ikinci başvuru da riskli olabilir.
            Doğru strateji ile onay şansı artırılabilir.
          </p>
        </header>

        {/* RET NEDENLERİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10">
            Malta Vize Reddi Neden Olur?
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Banka hesap bakiyesinin yetersiz olması</li>
            <li>• Hesapta son dakika para girişi</li>
            <li>• Seyahat amacının net olmaması</li>
            <li>• Türkiye’ye geri dönüş bağlarının zayıf görülmesi</li>
            <li>• Belgelerde tutarsızlık</li>
            <li>• Önceki Schengen ret geçmişi</li>
          </ul>
        </section>

        {/* RET KODLARI */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
          <h2 className="text-3xl font-black mb-8 text-center">
            Malta Schengen Ret Kodları
          </h2>

          <ul className="space-y-4 text-slate-300 max-w-3xl mx-auto">
            <li><strong>Madde 2:</strong> Geri dönüş niyeti konusunda şüphe</li>
            <li><strong>Madde 8:</strong> Finansal yeterlilik yetersiz</li>
            <li><strong>Madde 10:</strong> Seyahat amacı kanıtlanmamış</li>
            <li><strong>Madde 13:</strong> Belgelerde eksiklik veya güven sorunu</li>
          </ul>
        </section>

        {/* YENİDEN BAŞVURU */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            İtiraz mı, Yeniden Başvuru mu?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Malta vize reddine karşı yazılı itiraz hakkı vardır.
            Ancak çoğu durumda eksikler giderilerek yeniden başvuru yapmak
            daha hızlı ve etkili sonuç verir.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Yanlış strateji ile yapılan ikinci başvuru,
            Schengen sisteminde risk profilinizi yükseltebilir.
            Bu nedenle ret mektubu detaylı analiz edilmelidir.
          </p>
        </section>

        {/* SİLO LİNKLER */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/malta-vize" className="block hover:underline text-red-600">
            Malta Vize Rehberi →
          </Link>

          <Link href="/malta-vize-evraklari" className="block hover:underline text-red-600">
            Malta Vize Evrakları →
          </Link>

          <Link href="/malta-vize-randevusu" className="block hover:underline text-red-600">
            Malta Vize Randevusu →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Malta Ret Dosyanızı Analiz Edelim
          </h2>

          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Ret mektubunuzu inceleyelim, eksikleri belirleyelim ve
            ikinci başvurunuzu güçlü bir dosya ile hazırlayalım.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Malta%20vize%20reddi%20icin%20destek%20almak%20istiyorum."
            className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Ret Analizi Başlat
          </a>

        </section>

      </main>
    </>
  );
}
