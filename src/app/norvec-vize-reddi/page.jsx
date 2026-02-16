import Head from "next/head";
import Link from "next/link";

export default function NorvecVizeReddi() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Norveç Vize Reddi 2026",
    description:
      "Norveç Schengen vize reddi neden olur? Ret kodları, itiraz süreci ve yeniden başvuru stratejileri.",
    author: {
      "@type": "Organization",
      "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Norveç Vize Reddi 2026 | Ret Nedenleri ve Çözüm Rehberi</title>

        <meta
          name="description"
          content="Norveç Schengen vize reddi neden olur? Norveç ret kodları, itiraz hakkı ve yeniden başvuru süreci hakkında detaylı rehber."
        />

        <meta
          name="keywords"
          content="norveç vize reddi, norveç schengen ret, norveç vize red nedenleri, norveç ret itiraz"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/norvec-vize-reddi"
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
            Norveç Schengen Ret Süreci
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Norveç Vize Reddi Aldım, Ne Yapmalıyım?
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Norveç vize reddi aldıysanız panik yapmayın. Ret nedeninin doğru
            analiz edilmesi ikinci başvuruda başarı ihtimalini artırır.
          </p>
        </header>

        {/* RET NEDENLERİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Norveç Vize Reddi Neden Olur?
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Finansal yeterliliğin yetersiz görülmesi</li>
            <li>• Türkiye’ye geri dönüş bağlarının zayıf olması</li>
            <li>• Seyahat planının inandırıcı bulunmaması</li>
            <li>• Eksik veya tutarsız evrak sunulması</li>
            <li>• Daha önce alınmış Schengen ret geçmişi</li>
          </ul>
        </section>

        {/* RET KODLARI */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem]">
          <h2 className="text-3xl font-black mb-8 text-center">
            Norveç Ret Kodları Ne Anlama Gelir?
          </h2>

          <ul className="space-y-4 text-slate-200">
            <li><strong>Madde 10:</strong> Seyahat amacı yeterince kanıtlanmamış.</li>
            <li><strong>Madde 8:</strong> Finansal kaynaklar yetersiz.</li>
            <li><strong>Madde 2:</strong> Geri dönüş niyeti şüpheli.</li>
          </ul>
        </section>

        {/* İTİRAZ VE YENİDEN BAŞVURU */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Norveç Vize Reddine İtiraz Edilir mi?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Norveç Schengen vize reddine yazılı itiraz hakkı bulunmaktadır.
            Ancak çoğu durumda eksikler giderilerek yeniden başvuru yapmak
            daha hızlı sonuç verebilir.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Ret nedenine göre doğru strateji belirlenmelidir. Yanlış bir ikinci
            başvuru yeni ret riskini artırabilir.
          </p>
        </section>

        {/* STRATEJİ */}
        <section className="mb-24 bg-slate-50 p-10 rounded-2xl border border-slate-100">
          <h2 className="text-3xl font-black mb-6">
            Yeniden Başvuru Stratejisi
          </h2>

          <ol className="space-y-4 list-decimal list-inside text-slate-700 leading-relaxed">
            <li>Ret mektubunun detaylı analizi yapılır.</li>
            <li>Finansal tablo yeniden düzenlenir.</li>
            <li>Seyahat planı güçlendirilir.</li>
            <li>Destekleyici belgeler artırılır.</li>
          </ol>
        </section>

        {/* SİLO NAV */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/norvec-vize" className="block hover:underline text-blue-600">
            Norveç Vize Rehberi →
          </Link>

          <Link href="/norvec-vize-evraklari" className="block hover:underline text-blue-600">
            Norveç Vize Evrakları →
          </Link>

          <Link href="/norvec-vize-randevusu" className="block hover:underline text-blue-600">
            Norveç Vize Randevusu →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Norveç Ret Dosyanızı Analiz Edelim
          </h2>

          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Ret mektubunuzu inceleyelim, ikinci başvurunuzu güçlü bir dosya ile
            yeniden hazırlayalım.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Norvec%20vize%20reddi%20aldim%20destek%20istiyorum."
            className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Ret Analizi Al
          </a>
        </section>

      </main>
    </>
  );
}
