import Head from "next/head";
import Link from "next/link";

export default function HirvatistanVizeEvraklari() {
  return (
    <>
      <Head>
        <title>Hırvatistan Vize Evrakları 2026 | Güncel Belge Listesi</title>
        <meta
          name="description"
          content="Hırvatistan Schengen vizesi için gerekli evraklar 2026. Turistik, ticari ve aile ziyareti başvurularında istenen belgeler ve banka şartları."
        />
        <meta
          name="keywords"
          content="hırvatistan vize evrakları, hırvatistan schengen evrak listesi, hırvatistan turistik vize belgeleri, hırvatistan vize için gerekli evraklar"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/hirvatistan-vize-evraklari"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-red-100 text-red-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-red-200">
            Hırvatistan Schengen Belge Listesi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Hırvatistan Vize <br/>
            <span className="text-red-600 italic">Evrakları 2026</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hırvatistan vize başvurularında en önemli kriter,
            finansal yeterlilik ve seyahat planının tutarlılığıdır.
            İşte güncel evrak listesi.
          </p>
        </header>

        {/* GENEL EVRAKLAR */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            Standart Evrak Listesi
          </h2>

          <ul className="space-y-4 text-slate-600 leading-relaxed">
            <li>• En az 2 boş sayfalı, 10 yıldan eski olmayan pasaport</li>
            <li>• 2 adet biyometrik fotoğraf</li>
            <li>• Schengen vize başvuru formu</li>
            <li>• Kimlik fotokopisi</li>
            <li>• Uçak rezervasyonu</li>
            <li>• Otel rezervasyonu veya davetiye</li>
            <li>• Seyahat sağlık sigortası (min. 30.000 € teminatlı)</li>
          </ul>
        </section>

        {/* FİNANSAL BELGELER */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-6">
            Finansal Belgeler
          </h2>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-slate-600 text-sm leading-relaxed space-y-4">
            <p>• Son 3 aya ait banka hesap dökümü (kaşeli ve imzalı)</p>
            <p>• Güncel bakiye: seyahat süresine göre yeterli tutar</p>
            <p>• Maaş bordrosu (çalışanlar için)</p>
            <p>• Vergi levhası ve faaliyet belgesi (şirket sahipleri için)</p>
          </div>
        </section>

        {/* MESLEĞE GÖRE */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Mesleğe Göre Ek Belgeler
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-600">

            <div className="p-8 bg-white border rounded-2xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3">Çalışanlar</h4>
              <p>İzin yazısı, SGK hizmet dökümü, maaş bordrosu.</p>
            </div>

            <div className="p-8 bg-white border rounded-2xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3">Şirket Sahipleri</h4>
              <p>Vergi levhası, imza sirküleri, ticaret sicil gazetesi.</p>
            </div>

            <div className="p-8 bg-white border rounded-2xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3">Öğrenciler</h4>
              <p>Öğrenci belgesi, sponsor dilekçesi ve sponsor evrakları.</p>
            </div>

          </div>
        </section>

        {/* KRİTİK UYARI */}
        <section className="bg-red-50 border-2 border-red-500 p-10 rounded-3xl mb-24">
          <h2 className="text-2xl font-black text-red-800 mb-4">
            ⚠️ En Sık Yapılan Hata
          </h2>
          <p className="text-red-700 text-sm leading-relaxed">
            Banka hesabına son dakika toplu para yatırmak ret sebebidir.
            Hesap hareketleri düzenli ve açıklanabilir olmalıdır.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Evraklarınızı Kontrol Edelim
          </h2>

          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Hırvatistan vize dosyanızı uzman kontrolünden geçirerek
            ret riskinizi minimize edelim.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20H%C4%B1rvatistan%20vizesi%20evrak%20kontrol%C3%BC%20istiyorum."
            className="bg-red-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition"
          >
            Evrak Kontrolü Başlat
          </a>
        </section>

        {/* SİLO NAV */}
        <section className="border-t border-slate-200 pt-10 mt-20 text-sm font-bold flex flex-wrap gap-6 justify-center">
          <Link href="/hirvatistan-vize" className="hover:text-blue-600 transition">
            Hırvatistan Vize Ana Sayfa →
          </Link>

          <Link href="/hirvatistan-vize-randevusu" className="hover:text-blue-600 transition">
            Hırvatistan Vize Randevusu →
          </Link>

          <Link href="/hirvatistan-vize-reddi" className="hover:text-blue-600 transition">
            Hırvatistan Vize Reddi →
          </Link>
        </section>

      </main>
    </>
  );
}
