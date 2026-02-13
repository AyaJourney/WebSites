import Head from "next/head";
import Link from "next/link";

export default function BulgaristanVizeEvraklari() {
  return (
    <>
      <Head>
        <title>Bulgaristan Vize Evrakları 2026 | Güncel Schengen Belge Listesi</title>
        <meta
          name="description"
          content="Bulgaristan vize evrakları 2026 güncel liste. Turistik, ticari ve aile ziyareti Bulgaristan Schengen vizesi için gerekli belgeler ve finansal şartlar."
        />
        <meta
          name="keywords"
          content="bulgaristan vize evrakları, bulgaristan schengen belgeleri, bulgaristan turistik vize evrak, bulgaristan ticari vize belgeleri"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/bulgaristan-vize-evraklari"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-green-200">
            Bulgaristan Schengen Evrak Listesi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Bulgaristan Vize <br/>
            <span className="text-green-600 italic">Evrakları 2026</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Bulgaristan Schengen vizesi için gerekli tüm belgeler.
            Turistik, ticari ve aile ziyareti başvurularında eksiksiz
            hazırlanması gereken evrak listesi aşağıdadır.
          </p>
        </header>

        {/* ORTAK EVRAKLAR */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8">
            Tüm Başvurular İçin Zorunlu Belgeler
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Pasaport (son 10 yıl içinde alınmış, 2 boş sayfa)</li>
            <li>• 2 adet biyometrik fotoğraf</li>
            <li>• Schengen başvuru formu (eksiksiz doldurulmuş)</li>
            <li>• Seyahat sağlık sigortası (minimum 30.000 € teminat)</li>
            <li>• Uçak rezervasyonu</li>
            <li>• Otel rezervasyonu veya davetiye</li>
            <li>• Nüfus kayıt örneği (tam vukuatlı)</li>
          </ul>
        </section>

        {/* FİNANSAL BELGELER */}
        <section className="mb-24">
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200">
            <h2 className="text-3xl font-black mb-6">
              Finansal Belgeler
            </h2>

            <ul className="space-y-4 text-slate-700">
              <li>• Son 3 aylık banka hesap dökümü (ıslak imzalı, kaşeli)</li>
              <li>• Günlük minimum 50–70 € bakiye göstergesi</li>
              <li>• Maaş bordroları (çalışanlar için)</li>
              <li>• Vergi levhası & faaliyet belgesi (şirket sahipleri için)</li>
              <li>• Emekli maaş dökümü (emekliler için)</li>
            </ul>
          </div>
        </section>

        {/* ÇALIŞMA DURUMUNA GÖRE */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Çalışma Durumuna Göre Ek Evraklar
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-black mb-4">Çalışanlar</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• İşveren yazısı</li>
                <li>• SGK hizmet dökümü</li>
                <li>• İzin onay yazısı</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-black mb-4">Şirket Sahipleri</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Ticaret sicil gazetesi</li>
                <li>• İmza sirküleri</li>
                <li>• Vergi levhası</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-black mb-4">Öğrenciler</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Öğrenci belgesi</li>
                <li>• Sponsor dilekçesi</li>
                <li>• Sponsor banka dökümü</li>
              </ul>
            </div>

          </div>
        </section>

        {/* KRİTİK UYARI */}
        <section className="bg-green-50 border-2 border-green-600 p-10 rounded-3xl mb-24">
          <h2 className="text-2xl font-black text-green-900 mb-4">
            ⚠️ En Sık Yapılan Hata
          </h2>

          <p className="text-green-800 leading-relaxed">
            Banka hesabına son anda yüksek miktarda para yatırmak,
            Bulgaristan vize reddine neden olabilir.
            Hesap hareketlerinin düzenli ve açıklanabilir olması gerekir.
          </p>
        </section>

        {/* SİLO NAV */}
        <section className="mb-24 text-center">
          <h3 className="text-2xl font-black mb-8">
            Bulgaristan Vize Sürecinin Diğer Aşamaları
          </h3>

          <div className="flex flex-wrap justify-center gap-6 font-bold text-sm">

            <Link href="/bulgaristan-vize" className="px-6 py-3 bg-slate-50 rounded-xl hover:text-green-600 transition">
              Bulgaristan Vize Rehberi →
            </Link>

            <Link href="/bulgaristan-vize-randevusu" className="px-6 py-3 bg-slate-50 rounded-xl hover:text-green-600 transition">
              Bulgaristan Vize Randevusu →
            </Link>

            <Link href="/bulgaristan-vize-reddi" className="px-6 py-3 bg-slate-50 rounded-xl hover:text-green-600 transition">
              Bulgaristan Vize Reddi →
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-600 rounded-[3rem] p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">
            Evraklarınızı Profesyonel Kontrol Edelim
          </h2>

          <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
            Eksik veya hatalı evrak nedeniyle ret almayın.
            Dosyanızı birlikte optimize edelim.
          </p>

          <a
            href="https://wa.me/905302199056"
            className="bg-white text-green-700 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition"
          >
            Evrak Analizi Al
          </a>
        </section>

      </main>
    </>
  );
}
