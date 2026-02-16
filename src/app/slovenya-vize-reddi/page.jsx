import Head from "next/head";
import Link from "next/link";

export default function SlovenyaVizeReddi() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Slovenya Vize Reddi Nedenleri ve Çözüm Yolları",
    description:
      "Slovenya Schengen vize reddi neden olur? Madde 32, finansal yetersizlik, geri dönüş şüphesi ve itiraz süreci.",
    author: {
      "@type": "Organization",
      "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Slovenya Vize Reddi 2026 | Ret Nedenleri ve Çözüm</title>

        <meta
          name="description"
          content="Slovenya Schengen vize reddi neden olur? Finansal yetersizlik, geri dönüş şüphesi, eksik evrak ve itiraz süreci hakkında detaylı rehber."
        />

        <meta
          name="keywords"
          content="slovenya vize reddi, slovenya schengen ret nedenleri, slovenya vize itiraz"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/slovenya-vize-reddi"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-red-100 text-red-700 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-red-200">
            Slovenya Schengen Vize Reddi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Slovenya Vize Reddi
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Slovenya vize reddi genellikle finansal yetersizlik,
            geri dönüş niyeti şüphesi veya eksik evrak nedeniyle verilir.
            Ret mektubundaki madde doğru analiz edilmelidir.
          </p>
        </header>

        {/* RET NEDENLERİ */}
        <section className="grid md:grid-cols-2 gap-8 mb-24">

          <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-black text-slate-800 mb-4">
              Madde 32 – Finansal Yetersizlik
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Banka hesap bakiyesi seyahat süresini karşılamıyorsa veya
              hesap hareketleri düzensizse ret verilebilir.
              Son dakika yatırılan yüklü para şüphe oluşturur.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-black text-slate-800 mb-4">
              Geri Dönüş Şüphesi
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Türkiye’de güçlü bağların gösterilememesi
              (iş, maaş, SGK, aile bağları) ret sebebidir.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-black text-slate-800 mb-4">
              Seyahat Planı Tutarsızlığı
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Rezervasyon, uçuş ve konaklama planı net değilse
              veya başvuru formuyla çelişiyorsa ret gelebilir.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-black text-slate-800 mb-4">
              Eksik / Yanlış Evrak
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              İmzasız dilekçe, güncel olmayan banka dökümü
              veya hatalı form doldurma reddedilme nedenidir.
            </p>
          </div>

        </section>

        {/* İTİRAZ SÜRECİ */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-24 shadow-2xl">
          <h2 className="text-3xl font-black mb-8 text-center">
            Slovenya Vize Reddi Sonrası Ne Yapılmalı?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-300">

            <div>
              <h4 className="font-bold text-red-400 mb-3">
                1️⃣ Ret Mektubu Analizi
              </h4>
              <p>
                Hangi maddeden ret verildiği detaylı incelenmelidir.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-red-400 mb-3">
                2️⃣ Eksiklerin Giderilmesi
              </h4>
              <p>
                Finansal tablo düzeltilmeli ve seyahat planı güçlendirilmelidir.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-red-400 mb-3">
                3️⃣ Yeni Başvuru Stratejisi
              </h4>
              <p>
                Çoğu durumda yeniden başvuru itirazdan daha hızlı sonuç verir.
              </p>
            </div>

          </div>
        </section>

        {/* RİSK PANELİ */}
        <section className="mb-24">
          <div className="bg-red-50 border-2 border-red-600 p-10 rounded-[3rem]">
            <h2 className="text-2xl font-black text-red-800 mb-4">
              ⚠️ Önemli Uyarı
            </h2>
            <p className="text-red-700 text-sm leading-relaxed">
              Aynı dosya ile tekrar başvuru yapmak ikinci ret riskini artırır.
              Ret gerekçesi düzeltilmeden başvuru yapılmamalıdır.
            </p>
          </div>
        </section>

        {/* SİLO NAV */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/slovenya-vize" className="block hover:underline text-blue-600">
            Slovenya Vize Rehberi →
          </Link>

          <Link href="/slovenya-vize-evraklari" className="block hover:underline text-blue-600">
            Slovenya Vize Evrakları →
          </Link>

          <Link href="/slovenya-vize-randevusu" className="block hover:underline text-blue-600">
            Slovenya Vize Randevusu →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Ret Aldınız mı?
          </h2>

          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Ret mektubunuzu analiz edelim,
            ikinci başvuruda onay ihtimalinizi yükseltelim.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Slovenya%20vize%20reddi%20analizi%20için%20destek%20istiyorum."
            className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Ret Analizi Al
          </a>
        </section>

      </main>
    </>
  );
}
