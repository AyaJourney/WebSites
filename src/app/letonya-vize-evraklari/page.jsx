import Head from "next/head";
import Link from "next/link";

export default function LetonyaVizeEvraklari() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Letonya Vize Evrakları 2026 – Schengen Letonya Belgeler Listesi",
    description:
      "Letonya Schengen vizesi için gerekli evraklar nelerdir? Turistik, ticari ve aile ziyareti için güncel evrak listesi ve başvuru şartları.",
    author: {
      "@type": "Organization",
      "name": "Aya Journey"
    },
    datePublished: "2026-02-16"
  };

  return (
    <>
      <Head>
        <title>Letonya Vize Evrakları 2026 | Letonya Schengen Belgeleri</title>

        <meta
          name="description"
          content="Letonya Schengen vizesi için gerekli evraklar nelerdir? Turistik, ticari ve aile ziyareti başvurularında istenen belgeler ve finansal şartlar."
        />

        <meta
          name="keywords"
          content="letonya vize evrakları, letonya schengen belgeleri, letonya turistik vize evrak listesi, letonya ticari vize belgeleri"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/letonya-vize-evraklari"
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
            Letonya Schengen Vizesi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Letonya Vize Evrakları 2026
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Letonya turistik, ticari ve aile ziyareti vizesi için gerekli
            belgeler Schengen standartlarına uygundur. Ancak Baltık ülkeleri
            finansal yeterlilik ve seyahat planı konusunda detaylı inceleme yapar.
          </p>
        </header>

        {/* TEMEL EVRAKLAR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Letonya Vizesi İçin Temel Evraklar
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• En az 6 ay geçerli pasaport (2 boş sayfa)</li>
            <li>• Schengen vize başvuru formu</li>
            <li>• 2 adet biyometrik fotoğraf</li>
            <li>• Seyahat sağlık sigortası (minimum 30.000 € teminatlı)</li>
            <li>• Uçak rezervasyonu (gidiş-dönüş)</li>
            <li>• Konaklama rezervasyonu</li>
            <li>• Son 3 aylık banka hesap dökümü (ıslak imzalı, kaşeli)</li>
            <li>• Çalışma/öğrenci durumunu gösteren belgeler</li>
          </ul>
        </section>

        {/* FİNANSAL ŞART */}
        <section className="mb-24 bg-slate-50 p-10 rounded-3xl border border-slate-200">
          <h2 className="text-3xl font-black mb-6">
            Letonya Finansal Yeterlilik Şartı
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Letonya için günlük ortalama 60–80 € arası bütçe gösterilmesi önerilir.
            Seyahat süresi uzadıkça hesap bakiyesi artmalıdır.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Hesapta son dakika yatırılmış toplu para bulunması ret riskini artırabilir.
            Düzenli gelir akışı önemlidir.
          </p>
        </section>

        {/* ÇALIŞMA DURUMUNA GÖRE */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Çalışma Durumuna Göre Ek Belgeler
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">

            <div>
              <h3 className="font-bold mb-3">Çalışanlar</h3>
              <ul className="space-y-2">
                <li>• İş yerinden izin yazısı</li>
                <li>• SGK hizmet dökümü</li>
                <li>• Maaş bordrosu (3 ay)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Şirket Sahipleri</h3>
              <ul className="space-y-2">
                <li>• Vergi levhası</li>
                <li>• Faaliyet belgesi</li>
                <li>• İmza sirküleri</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Öğrenciler</h3>
              <ul className="space-y-2">
                <li>• Güncel öğrenci belgesi</li>
                <li>• Sponsor dilekçesi</li>
                <li>• Sponsor banka dökümü</li>
              </ul>
            </div>

          </div>
        </section>

        {/* DAVETİYELİ BAŞVURU */}
        <section className="mb-24 bg-red-50 border border-red-200 p-10 rounded-3xl">
          <h2 className="text-2xl font-black text-red-700 mb-4">
            Davetiyeli Letonya Başvurusu
          </h2>

          <p className="text-red-700 leading-relaxed">
            Letonya’da yaşayan bir kişi tarafından gönderilen resmi davet mektubu,
            ticari veya aile ziyareti başvurularında süreci güçlendirir.
            Davet eden kişinin kimlik ve oturum belgeleri eklenmelidir.
          </p>
        </section>

        {/* RANDEVU LINK */}
        <section className="mb-20 text-center">
          <Link
            href="/letonya-vize-randevusu"
            className="text-red-600 font-bold hover:underline text-lg"
          >
            Letonya Vize Randevusu Nasıl Alınır? →
          </Link>
        </section>

        {/* RED LİNK */}
        <section className="mb-20 text-center">
          <Link
            href="/letonya-vize-reddi"
            className="text-red-600 font-bold hover:underline text-lg"
          >
            Letonya Vize Reddi Nedenleri →
          </Link>
        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Letonya Vize Dosyanızı Güçlendirelim
          </h2>

          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Evraklarınız eksik veya zayıfsa başvurunuz riskli olabilir.
            Profesyonel kontrol ile ret riskini minimize edin.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Letonya%20vize%20evraklarimi%20kontrol%20ettirmek%20istiyorum."
            className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Evrak Kontrolü Al
          </a>
        </section>

        {/* ANA SAYFA LİNK */}
        <div className="mt-20 text-center text-sm font-semibold">
          <Link href="/letonya-vize" className="hover:underline">
            Letonya Vize Ana Sayfa →
          </Link>
        </div>

      </main>
    </>
  );
}
