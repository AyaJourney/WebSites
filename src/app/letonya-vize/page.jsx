import Head from "next/head";
import Link from "next/link";

export default function LetonyaVize() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Letonya Vize 2026 – Schengen Letonya Vizesi Rehberi",
    description:
      "Letonya Schengen vizesi nasıl alınır? Letonya turistik, ticari ve aile ziyareti vizesi şartları, randevu süreci ve evrak listesi 2026 güncel rehber.",
    author: {
      "@type": "Organization",
      "name": "Aya Journey"
    },
    datePublished: "2026-02-16"
  };

  return (
    <>
      <Head>
        <title>Letonya Vize 2026 | Letonya Schengen Vizesi Nasıl Alınır?</title>

        <meta
          name="description"
          content="Letonya Schengen vizesi başvurusu nasıl yapılır? Letonya turistik, ticari ve aile ziyareti vizesi için evrak listesi, randevu süreci ve ret nedenleri."
        />

        <meta
          name="keywords"
          content="letonya vize, letonya schengen vizesi, letonya turistik vize, letonya vize randevusu, letonya vize evrakları"
        />

        <link
          rel="canonical"
          href="https://www.siteadresin.com/letonya-vize"
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
            Letonya Cumhuriyeti – Schengen Ülkesi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Letonya Schengen <br/>
            <span className="text-red-600 italic">Vize Rehberi 2026</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Letonya vizesi, Schengen bölgesine giriş için alınan kısa süreli
            C tipi vizedir. Riga başta olmak üzere Baltık ülkelerine seyahat
            planlayanlar için başvuru sürecini adım adım anlatıyoruz.
          </p>
        </header>

        {/* LETONYA VİZE GEREKİYOR MU */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            Letonya Vize Gerekiyor mu?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Türkiye Cumhuriyeti vatandaşları için Letonya’ya
            seyahatlerde Schengen vizesi zorunludur.
          </p>

          <ul className="space-y-3 text-slate-700">
            <li>• Bordo pasaport: Vize zorunlu</li>
            <li>• Yeşil pasaport: 90 güne kadar vizesiz</li>
            <li>• Schengen vizesi olanlar Letonya’ya giriş yapabilir</li>
          </ul>
        </section>

        {/* VİZE TÜRLERİ */}
        <section className="mb-24 bg-slate-50 p-10 rounded-3xl border border-slate-200">
          <h2 className="text-3xl font-black mb-8 text-center">
            Letonya Vize Türleri
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
            <div>
              <h3 className="font-bold mb-2">Turistik Vize</h3>
              <p>Riga, Jurmala ve Baltık turu için kısa süreli Schengen başvurusu.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Ticari Vize</h3>
              <p>Letonya firmalarından alınmış davetiye ile iş seyahati başvurusu.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Aile Ziyareti</h3>
              <p>Letonya’da yaşayan yakınlara yapılacak ziyaret başvurusu.</p>
            </div>
          </div>
        </section>

        {/* RANDEVU */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            Letonya Vize Randevusu Nasıl Alınır?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Letonya başvuruları genellikle VFS Global üzerinden yürütülmektedir.
            Online kayıt oluşturulur ve uygun tarihe randevu alınır.
          </p>

          <Link
            href="/letonya-vize-randevusu"
            className="text-red-600 font-bold hover:underline"
          >
            Letonya Vize Randevusu Detaylı Rehber →
          </Link>
        </section>

        {/* EVRAKLAR */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            Letonya Vize Evrakları
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Letonya vizesi için gerekli evraklar diğer Schengen ülkeleri ile
            benzerlik gösterir ancak banka hesap hareketleri ve seyahat planı
            özellikle dikkatle incelenir.
          </p>

          <Link
            href="/letonya-vize-evraklari"
            className="text-red-600 font-bold hover:underline"
          >
            Letonya Vize Evrak Listesi →
          </Link>
        </section>

        {/* RET */}
        <section className="mb-24 bg-red-50 border-2 border-red-400 p-10 rounded-3xl">
          <h2 className="text-2xl font-black text-red-700 mb-4">
            Letonya Vize Reddi Nedenleri
          </h2>

          <p className="text-red-700 leading-relaxed mb-6">
            Letonya konsolosluğu özellikle finansal yeterlilik ve geri dönüş
            niyeti konusunda hassastır. Eksik veya çelişkili belgeler ret sebebi olabilir.
          </p>

          <Link
            href="/letonya-vize-reddi"
            className="text-red-700 font-bold underline"
          >
            Letonya Vize Reddi Analizi →
          </Link>
        </section>

        {/* SCHENGEN CLUSTER */}
        <section className="mb-24 text-sm font-semibold flex flex-wrap gap-6 justify-center">
          <Link href="/litvanya-vize" className="hover:underline">
            Litvanya Vize →
          </Link>
          <Link href="/estonya-vize" className="hover:underline">
            Estonya Vize →
          </Link>
          <Link href="/finlandiya-vize" className="hover:underline">
            Finlandiya Vize →
          </Link>
        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Letonya Vizenizi Güçlü Dosyayla Alın
          </h2>

          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Baltık ülkelerinde ret oranı düşük olsa da
            finansal planlama doğru yapılmazsa risk artar.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Letonya%20vizesi%20icin%20danismanlik%20almak%20istiyorum."
            className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Letonya Danışmanlığı Al
          </a>
        </section>

      </main>
    </>
  );
}
