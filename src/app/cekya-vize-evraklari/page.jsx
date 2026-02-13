import Head from "next/head";
import Link from "next/link";

export default function CekyaVizeEvraklari() {
  return (
    <>
      <Head>
        <title>Çekya Vize Evrakları 2026 | Çek Cumhuriyeti Schengen Belge Listesi</title>
        <meta
          name="description"
          content="Çekya Schengen vizesi için gerekli evraklar 2026. Turistik, ticari ve aile ziyareti için güncel Çek Cumhuriyeti vize belge listesi."
        />
        <meta
          name="keywords"
          content="çekya vize evrakları, çek cumhuriyeti vize belgeleri, prag vize evrak listesi, çekya schengen evrak"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/cekya-vize-evraklari"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-200">
            Çek Cumhuriyeti Schengen Evrak Rehberi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Çekya Vize <br/>
            <span className="text-blue-600 italic">Evrakları 2026</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Çekya Schengen vizesi başvurularında en sık ret nedeni eksik veya hatalı
            evraktır. Turistik, ticari ve aile ziyareti başvuruları için
            gerekli tüm belgeleri aşağıda bulabilirsiniz.
          </p>
        </header>

        {/* TEMEL EVRAKLAR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Çekya Schengen Vize Evrakları (Temel Liste)
          </h2>

          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
            <ul className="grid md:grid-cols-2 gap-6 text-slate-700 text-sm leading-relaxed">
              <li>• En az 3 ay geçerli pasaport</li>
              <li>• 2 adet biyometrik fotoğraf</li>
              <li>• Schengen başvuru formu</li>
              <li>• Seyahat sağlık sigortası (min. 30.000 €)</li>
              <li>• Uçak rezervasyonu</li>
              <li>• Otel rezervasyonu veya davetiye</li>
              <li>• Son 3 aylık banka hesap dökümü</li>
              <li>• Kimlik fotokopisi</li>
            </ul>
          </div>
        </section>

        {/* ÇALIŞMA DURUMUNA GÖRE */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Çalışma Durumuna Göre Ek Belgeler
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h3 className="font-bold text-lg mb-4">Çalışanlar</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• İşveren izin yazısı</li>
                <li>• SGK hizmet dökümü</li>
                <li>• Son 3 aylık maaş bordrosu</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h3 className="font-bold text-lg mb-4">Şirket Sahipleri</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Vergi levhası</li>
                <li>• Ticaret sicil gazetesi</li>
                <li>• İmza sirküleri</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h3 className="font-bold text-lg mb-4">Öğrenciler</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Öğrenci belgesi</li>
                <li>• Sponsor dilekçesi</li>
                <li>• Sponsor finansal belgeleri</li>
              </ul>
            </div>

          </div>
        </section>

        {/* BANKA ŞARTI */}
        <section className="mb-24">
          <div className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
            <h2 className="text-3xl font-black mb-6">
              Çekya Vizesi İçin Bankada Ne Kadar Para Olmalı?
            </h2>

            <p className="text-slate-300 leading-relaxed text-sm">
              Çekya için resmi alt limit açıklanmaz. Ancak günlük ortalama
              60–100 Euro arası masrafı karşılayabilecek bakiye göstermeniz
              önerilir. Hesabın düzenli ve açıklanabilir olması önemlidir.
            </p>
          </div>
        </section>

        {/* RET RİSKİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-6">
            Eksik Evrak Çekya Vize Reddine Neden Olur mu?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Evet. Özellikle banka dökümündeki tutarsızlıklar, sahte rezervasyonlar
            veya eksik iş belgeleri Çekya Schengen vize reddine yol açabilir.
          </p>

          <Link
            href="/cekya-vize-reddi"
            className="font-bold text-blue-600 hover:underline"
          >
            Çekya vize reddi nedenleri →
          </Link>
        </section>

        {/* SİLO NAV */}
        <section className="mb-24 text-center border-t pt-10">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Çekya Vize Süreci
          </p>

          <div className="flex flex-wrap justify-center gap-6 font-bold text-sm">

            <Link href="/cekya-vize" className="hover:underline">
              Çekya Vize Rehberi →
            </Link>

            <Link href="/cekya-vize-randevusu" className="hover:underline">
              Çekya Vize Randevusu →
            </Link>

            <Link href="/cekya-vize-reddi" className="hover:underline">
              Çekya Vize Reddi →
            </Link>

          </div>
        </section>

      </main>
    </>
  );
}
