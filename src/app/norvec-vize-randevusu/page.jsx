import Head from "next/head";
import Link from "next/link";

export default function NorvecVizeRandevusu() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Norveç Vize Randevusu 2026",
    description:
      "Norveç Schengen vize randevusu nasıl alınır? VFS üzerinden Norveç randevu süreci ve slot takibi rehberi.",
    author: {
      "@type": "Organization",
      "name": "AYA Journey"
    }
  };

  return (
    <>
      <Head>
        <title>Norveç Vize Randevusu 2026 | VFS Slot Alma Rehberi</title>

        <meta
          name="description"
          content="Norveç Schengen vize randevusu nasıl alınır? VFS üzerinden Norveç randevu sistemi, slot açılma saatleri ve profesyonel takip rehberi."
        />

        <meta
          name="keywords"
          content="norveç vize randevusu, norveç vfs randevu, norveç schengen randevu nasıl alınır"
        />

        <link
          rel="canonical"
          href="https://ayajourney.com/norvec-vize-randevusu"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-200">
            Norveç Schengen Randevu Süreci
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8">
            Norveç Vize Randevusu Nasıl Alınır?
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Norveç vize başvuruları VFS Global üzerinden alınmaktadır.
            Slot bulma süreci dönemsel yoğunluğa göre değişmektedir.
          </p>
        </header>

        {/* SİSTEM NASIL İŞLER */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Norveç Randevu Sistemi Nasıl Çalışır?
          </h2>

          <ol className="space-y-4 list-decimal list-inside text-slate-700 leading-relaxed">
            <li>VFS Norveç portalına giriş yapılır.</li>
            <li>Hesap oluşturulur ve aktivasyon tamamlanır.</li>
            <li>Başvuru türü (Turistik / Ticari / Aile ziyareti) seçilir.</li>
            <li>Takvim üzerinden uygun slot seçilir.</li>
            <li>Ödeme yapılır ve randevu onayı alınır.</li>
          </ol>
        </section>

        {/* SLOT SORUNLARI */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem]">
          <h2 className="text-3xl font-black mb-8 text-center">
            Norveç Randevu Slotları Ne Zaman Açılır?
          </h2>

          <ul className="space-y-4 text-slate-200">
            <li>• Genellikle hafta içi sabah saatlerinde</li>
            <li>• İptal edilen randevular gün içinde düşebilir</li>
            <li>• Yaz aylarında yoğunluk artar</li>
          </ul>
        </section>

        {/* HATALAR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Norveç VFS Randevu Hataları
          </h2>

          <ul className="space-y-4 text-slate-700">
            <li>• “No Slots Available” uyarısı</li>
            <li>• Ödeme ekranında hata</li>
            <li>• IP erişim kısıtlaması</li>
          </ul>
        </section>

        {/* ŞEHİR BİLGİSİ */}
        <section className="mb-24 bg-slate-50 p-10 rounded-2xl border border-slate-100">
          <h2 className="text-3xl font-black mb-6">
            Norveç Randevuları Hangi Şehirlerde?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Norveç başvuruları Türkiye’de genellikle İstanbul ve Ankara üzerinden
            alınmaktadır. Yoğunluk dönemlerinde erken planlama önerilir.
          </p>
        </section>

        {/* SİLO NAV */}
        <section className="text-center space-y-4 font-bold mb-20">

          <Link href="/norvec-vize" className="block hover:underline text-blue-600">
            Norveç Vize Rehberi →
          </Link>

          <Link href="/norvec-vize-evraklari" className="block hover:underline text-blue-600">
            Norveç Vize Evrakları →
          </Link>

          <Link href="/norvec-vize-reddi" className="block hover:underline text-blue-600">
            Norveç Vize Reddi →
          </Link>

        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6">
            Norveç Slot Takibi İster misiniz?
          </h2>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Slot açıldığı anda işlem yapabilmek için profesyonel takip desteği alabilirsiniz.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Norvec%20vize%20randevusu%20icin%20destek%20almak%20istiyorum."
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Randevu Desteği Al
          </a>
        </section>

      </main>
    </>
  );
}
