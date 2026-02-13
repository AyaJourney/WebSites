import Head from "next/head";
import Link from "next/link";

export default function FinlandiyaVizeEvraklari() {
  return (
    <>
      <Head>
        <title>Finlandiya Vize Evrakları 2026 | Güncel Schengen Belge Listesi</title>
        <meta
          name="description"
          content="Finlandiya Schengen vizesi için gerekli evraklar 2026. Turistik, ticari ve aile ziyareti vizesi için güncel belge listesi ve finansal şartlar."
        />
        <meta
          name="keywords"
          content="finlandiya vize evrakları, finlandiya schengen belgeleri, finlandiya turist vizesi evrak listesi, finlandiya vize şartları"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/finlandiya-vize-evraklari"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-200">
            Finlandiya Schengen Evrak Listesi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Finlandiya Vize Evrakları <br/>
            <span className="text-blue-600 italic">Eksiksiz Belge Rehberi</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Finlandiya turistik, ticari ve aile ziyareti vizeleri için
            gerekli tüm belgeler ve finansal yeterlilik kriterleri.
          </p>
        </header>

        {/* GENEL BELGELER */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            Finlandiya Schengen Vizesi Genel Evrak Listesi
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Geçerli pasaport (son 10 yıl içinde alınmış, 2 boş sayfa)</li>
            <li>• Schengen vize başvuru formu</li>
            <li>• 2 adet biyometrik fotoğraf</li>
            <li>• Seyahat sağlık sigortası (minimum 30.000 € teminatlı)</li>
            <li>• Uçak rezervasyonu</li>
            <li>• Otel rezervasyonu veya davetiye</li>
            <li>• Son 3 aylık banka hesap dökümü</li>
            <li>• Maaş bordrosu veya gelir belgeleri</li>
          </ul>
        </section>

        {/* FİNANSAL ŞART */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-24">
          <h2 className="text-3xl font-black mb-6">
            Finansal Yeterlilik Şartı
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            Finlandiya seyahat süresince günlük ortalama 50-70 € arası
            harcama göstermenizi bekler. Hesap hareketleriniz düzenli olmalı
            ve ani yüksek para girişleri açıklanabilir olmalıdır.
          </p>

          <p className="text-slate-400 text-sm italic">
            Not: Banka hesap dökümü kaşeli ve imzalı olmalıdır.
          </p>
        </section>

        {/* ÇALIŞMA DURUMUNA GÖRE */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Çalışma Durumuna Göre Ek Belgeler
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-600">

            <div className="p-6 bg-slate-50 rounded-2xl border">
              <h4 className="font-bold mb-4 text-slate-900">Çalışanlar</h4>
              <ul className="space-y-2">
                <li>• İş yerinden izin yazısı</li>
                <li>• SGK hizmet dökümü</li>
                <li>• Son 3 aylık maaş bordrosu</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border">
              <h4 className="font-bold mb-4 text-slate-900">Şirket Sahipleri</h4>
              <ul className="space-y-2">
                <li>• Vergi levhası</li>
                <li>• Ticaret sicil gazetesi</li>
                <li>• Faaliyet belgesi</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border">
              <h4 className="font-bold mb-4 text-slate-900">Öğrenciler</h4>
              <ul className="space-y-2">
                <li>• Öğrenci belgesi</li>
                <li>• Sponsor dilekçesi</li>
                <li>• Sponsor gelir belgeleri</li>
              </ul>
            </div>

          </div>
        </section>

        {/* SİLO NAV */}
        <section className="border-t border-slate-200 pt-10 text-sm font-bold flex flex-wrap gap-6 justify-center">
          <Link href="/finlandiya-vize" className="hover:text-blue-600 transition">
            Finlandiya Vize Rehberi →
          </Link>

          <Link href="/finlandiya-vize-randevusu" className="hover:text-blue-600 transition">
            Finlandiya Randevu Süreci →
          </Link>

          <Link href="/finlandiya-vize-reddi" className="hover:text-red-600 transition">
            Finlandiya Vize Reddi →
          </Link>
        </section>

      </main>
    </>
  );
}
