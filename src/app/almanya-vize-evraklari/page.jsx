import Head from "next/head";
import Link from "next/link";

export default function AlmanyaVizeEvraklari() {
  return (
    <>
      <Head>
        <title>Almanya Vize Evrakları 2026 | Güncel Schengen Belgeleri</title>
        <meta
          name="description"
          content="Almanya Schengen vizesi için gerekli evraklar 2026. Turistik, ticari ve aile ziyareti Almanya vize evrak listesi ve başvuru detayları."
        />
        <meta
          name="keywords"
          content="almanya vize evrakları, almanya schengen evrak listesi, almanya turistik vize belgeleri, almanya ticari vize evrakları"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/almanya-vize-evraklari"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-yellow-100 text-yellow-800 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-yellow-300">
            Almanya Schengen 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Almanya Vize <br/>
            <span className="italic">Evrakları</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Almanya turistik, ticari ve aile ziyareti vizeleri için
            güncel evrak listesi. Başvuru dosyanızı eksiksiz hazırlayın.
          </p>
        </header>

        {/* ORTAK EVRAKLAR */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8">
            Almanya Vizesi İçin Ortak Evraklar
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed list-disc pl-6">
            <li>Geçerli pasaport (son 10 yıl içinde alınmış, 2 boş sayfa)</li>
            <li>2 adet biyometrik fotoğraf</li>
            <li>Schengen başvuru formu</li>
            <li>Vize ücret dekontu</li>
            <li>En az 30.000 Euro teminatlı seyahat sağlık sigortası</li>
            <li>Uçak ve konaklama rezervasyonları</li>
            <li>Son 3 aylık banka hesap dökümü (kaşeli, imzalı)</li>
          </ul>
        </section>

        {/* ÇALIŞANLAR */}
        <section className="mb-20">
          <h2 className="text-2xl font-black mb-6">
            Çalışanlar İçin Ek Belgeler
          </h2>

          <ul className="space-y-3 text-slate-600 list-disc pl-6">
            <li>İş yerinden İngilizce veya Almanca izin yazısı</li>
            <li>Son 3 aylık maaş bordrosu</li>
            <li>SGK hizmet dökümü</li>
          </ul>
        </section>

        {/* ŞİRKET SAHİBİ */}
        <section className="mb-20">
          <h2 className="text-2xl font-black mb-6">
            Şirket Sahipleri İçin
          </h2>

          <ul className="space-y-3 text-slate-600 list-disc pl-6">
            <li>Vergi levhası</li>
            <li>Ticaret sicil gazetesi</li>
            <li>Faaliyet belgesi</li>
            <li>İmza sirküleri</li>
          </ul>
        </section>

        {/* ÖĞRENCİ */}
        <section className="mb-20">
          <h2 className="text-2xl font-black mb-6">
            Öğrenciler İçin
          </h2>

          <ul className="space-y-3 text-slate-600 list-disc pl-6">
            <li>Öğrenci belgesi</li>
            <li>Veli sponsor dilekçesi</li>
            <li>Sponsorun finansal belgeleri</li>
          </ul>
        </section>

        {/* ÖNEMLİ UYARI */}
        <section className="bg-yellow-50 border border-yellow-200 p-10 rounded-3xl mb-24">
          <h3 className="text-xl font-black mb-4">
            ⚠️ Almanya Vizesinde En Sık Ret Sebebi
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Banka hesabında ani yüklü para girişleri ve seyahat planı ile
            uyumsuz finansal durum en yaygın ret nedenidir.
          </p>
        </section>

        {/* SİLO NAV */}
        <section className="mb-24 text-center">
          <h3 className="text-2xl font-black mb-8">
            Almanya Sürecini Tamamlayın
          </h3>

          <div className="flex flex-wrap justify-center gap-6 font-bold text-sm">

            <Link href="/almanya-vize" className="px-6 py-3 bg-slate-50 rounded-xl hover:text-yellow-700 transition">
              Almanya Vize Rehberi →
            </Link>

            <Link href="/almanya-vize-randevusu" className="px-6 py-3 bg-slate-50 rounded-xl hover:text-yellow-700 transition">
              Almanya Vize Randevusu →
            </Link>

            <Link href="/almanya-vize-reddi" className="px-6 py-3 bg-slate-50 rounded-xl hover:text-yellow-700 transition">
              Almanya Vize Reddi →
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6 uppercase">
            Almanya Vize Dosyanızı Kontrol Edelim
          </h2>

          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Eksik veya riskli belgeleri tespit edelim,
            ret riskinizi en aza indirelim.
          </p>

          <a
            href="https://wa.me/905302199056"
            className="bg-yellow-400 text-black px-12 py-5 rounded-2xl font-black text-xl hover:bg-yellow-300 transition"
          >
            Evrak Kontrolü Al
          </a>
        </section>

      </main>
    </>
  );
}
