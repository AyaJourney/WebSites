import Head from "next/head";
import Link from "next/link";

export default function IsvicreVizeReddi() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "İsviçre Vize Reddi Nedenleri ve Çözüm Yolları",
    "description":
      "İsviçre Schengen vize reddi neden olur? Finansal yetersizlik, geri dönüş şüphesi ve itiraz süreci hakkında 2026 güncel rehber.",
    author: {
      "@type": "Organization",
      name: "Aya Journey"
    },
    datePublished: "2026-02-16"
  };

  return (
    <>
      <Head>
        <title>İsviçre Vize Reddi 2026 | Ret Nedenleri ve Çözüm Rehberi</title>

        <meta
          name="description"
          content="İsviçre vize reddi neden olur? Finansal yetersizlik, seyahat planı eksikliği ve geri dönüş şüphesi gibi en yaygın ret sebepleri ve çözüm yolları."
        />

        <meta
          name="keywords"
          content="isviçre vize reddi, isviçre schengen ret nedenleri, isviçre vize itiraz, isviçre red mektubu"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/isvicre-vize-reddi"
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
              İsviçre Schengen Ret Analizi
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              İsviçre Vize Reddi Neden Olur?
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
              İsviçre Konsolosluğu, başvuruları katı Schengen kriterlerine göre
              değerlendirir. Ret kararları çoğunlukla finansal yetersizlik,
              geri dönüş şüphesi veya eksik belge nedeniyle verilir.
            </p>

          </div>
        </section>

        {/* EN SIK RET NEDENLERİ */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-8">
              İsviçre Vize Reddi En Sık Nedenler
            </h2>

            <ul className="space-y-5 text-slate-700 leading-relaxed">
              <li>
                <strong>• Finansal Yetersizlik:</strong> Banka hesabındaki bakiye,
                seyahat süresine göre yetersiz görülür.
              </li>
              <li>
                <strong>• Açıklanamayan Para Girişi:</strong> Son dakika toplu
                para yatırılması şüpheli değerlendirilir.
              </li>
              <li>
                <strong>• Geri Dönüş Şüphesi:</strong> Türkiye’de güçlü bağların
                kanıtlanamaması.
              </li>
              <li>
                <strong>• Eksik veya Çelişkili Evrak:</strong> Belgeler arasında
                uyumsuzluk olması.
              </li>
              <li>
                <strong>• Önceki Schengen İhlali:</strong> Daha önce vize
                ihlali yapılmış olması.
              </li>
            </ul>

          </div>
        </section>

        {/* RED MEKTUBU */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-slate-900 text-white p-10 rounded-2xl">

            <h2 className="text-3xl font-bold mb-6">
              İsviçre Red Mektubu Nasıl Okunmalı?
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Ret mektubunda genellikle Schengen madde numarası belirtilir.
              En sık görülen madde: “Yeterli mali kaynağın kanıtlanamaması”.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Madde numarasını doğru analiz etmek, yeni başvuruda
              yapılacak düzeltmeler için kritiktir.
            </p>

          </div>
        </section>

        {/* İTİRAZ */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-3xl font-bold mb-6">
              İsviçre Vize Reddi Sonrası Ne Yapılmalı?
            </h2>

            <ol className="space-y-4 text-slate-700 list-decimal list-inside leading-relaxed">
              <li>Red mektubu detaylı analiz edilmelidir.</li>
              <li>Finansal durum yeniden düzenlenmelidir.</li>
              <li>Eksik belgeler tamamlanmalıdır.</li>
              <li>Yeni başvuru stratejik planlanmalıdır.</li>
            </ol>

            <p className="mt-6 text-slate-600 leading-relaxed">
              İsviçre Schengen retlerinde doğrudan itiraz hakkı genellikle yoktur.
              Yeni başvuru yapılır.
            </p>

          </div>
        </section>

        {/* RİSK PANELİ */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-red-50 border border-red-200 p-10 rounded-2xl">

            <h2 className="text-3xl font-bold mb-6 text-red-700">
              En Büyük Risk: Yanlış Beyan
            </h2>

            <p className="text-red-800 leading-relaxed">
              Sahte belge veya bilinçli yanlış beyan Schengen bilgi sistemine
              işlenebilir ve diğer ülkelerde de ret riskini artırır.
              Bu nedenle dosya onarımı dikkatle yapılmalıdır.
            </p>

          </div>
        </section>

        {/* SİLO NAV */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-white p-10 rounded-2xl border border-slate-200">

            <h2 className="text-2xl font-bold mb-6">
              İsviçre Vize Sürecinin Diğer Aşamaları
            </h2>

            <div className="flex flex-wrap gap-6 text-sm font-semibold">
              <Link href="/isvicre-vize" className="hover:underline">
                İsviçre vize rehberi →
              </Link>
              <Link href="/isvicre-vize-evraklari" className="hover:underline">
                İsviçre vize evrakları →
              </Link>
              <Link href="/isvicre-vize-randevusu" className="hover:underline">
                İsviçre vize randevusu →
              </Link>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="bg-red-600 text-white rounded-2xl p-12 text-center shadow-xl">

            <h2 className="text-3xl font-bold mb-6">
              İsviçre Ret Analizi Yaptıralım mı?
            </h2>

            <p className="max-w-2xl mx-auto mb-8 text-red-100">
              Ret mektubunuzu profesyonel analiz edelim, yeni başvurunuzu
              güçlü bir dosyayla yeniden planlayalım.
            </p>

            <a
              href="https://wa.me/905302199056?text=Merhaba%2C%20Isvicre%20vize%20reddi%20icin%20destek%20almak%20istiyorum."
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
