import Head from "next/head";
import Link from "next/link";

export default function BelcikaVizeEvraklari() {
  return (
    <>
      <Head>
        <title>Belçika Vize Evrakları 2026 | Güncel Belge Listesi</title>
        <meta
          name="description"
          content="Belçika Schengen vizesi için gerekli evraklar 2026 güncel liste. Turistik, ticari ve aile ziyareti başvuruları için banka dökümü, iş yazısı ve konaklama belgeleri."
        />
        <meta
          name="keywords"
          content="belçika vize evrakları, belçika schengen belge listesi, belçika turist vizesi evrakları, belçika banka dökümü, belçika iş yazısı"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/belcika-vize-evraklari"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-yellow-200">
            Belçika Schengen Vizesi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Belçika Vize <br/>
            <span className="text-yellow-500 italic">Evrakları 2026</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Belçika turistik, ticari ve aile ziyareti başvuruları için
            gerekli tüm belgeleri eksiksiz şekilde hazırlamanız gerekir.
            Eksik evrak en sık ret nedenidir.
          </p>
        </header>

        {/* TEMEL BELGELER */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Temel Belçika Vize Evrakları
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Pasaport (son 10 yıl içinde alınmış, 2 boş sayfa)</li>
            <li>• 2 adet biyometrik fotoğraf</li>
            <li>• Kimlik fotokopisi</li>
            <li>• Schengen başvuru formu</li>
            <li>• Seyahat sağlık sigortası (minimum 30.000 €)</li>
            <li>• Uçak rezervasyonu</li>
            <li>• Otel rezervasyonu veya davetiye</li>
          </ul>
        </section>

        {/* FİNANSAL BELGELER */}
        <section className="mb-24 bg-slate-50 p-10 rounded-3xl border border-slate-200">
          <h2 className="text-3xl font-black mb-6">
            Finansal Belgeler
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Son 3 aylık banka hesap dökümü (ıslak imzalı)</li>
            <li>• Güncel bakiyede seyahat masraflarını karşılayacak tutar</li>
            <li>• Maaş bordrosu (çalışanlar için)</li>
            <li>• Vergi levhası ve faaliyet belgesi (şirket sahipleri için)</li>
            <li>• SGK hizmet dökümü</li>
          </ul>
        </section>

        {/* ÇALIŞMA DURUMUNA GÖRE */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10">
            Çalışma Durumuna Göre Ek Belgeler
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4">Çalışanlar</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• İş yazısı (izinli olduğunuzu gösteren)</li>
                <li>• Maaş bordrosu</li>
                <li>• SGK işe giriş bildirgesi</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4">Öğrenciler</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Öğrenci belgesi</li>
                <li>• Sponsor dilekçesi</li>
                <li>• Sponsor banka dökümü</li>
              </ul>
            </div>

          </div>
        </section>

        {/* RET RİSK UYARISI */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-24 shadow-2xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            En Sık Belçika Vize Ret Nedenleri
          </h2>

          <ul className="space-y-4 text-slate-300 max-w-2xl mx-auto text-center">
            <li>• Yetersiz finansal profil</li>
            <li>• Seyahat amacının net olmaması</li>
            <li>• Türkiye’ye geri dönüş bağının zayıf görünmesi</li>
            <li>• Eksik veya tutarsız evrak</li>
          </ul>

          <div className="text-center mt-6">
            <Link
              href="/belcika-vize-reddi"
              className="text-yellow-400 font-bold underline"
            >
              Belçika Vize Reddi Analizi →
            </Link>
          </div>
        </section>

        {/* SİLO LİNKLER */}
        <section className="text-center border-t pt-10 mb-24">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Belçika Vize Serisi
          </p>

          <div className="flex flex-wrap justify-center gap-6 font-bold text-sm">

            <Link href="/belcika-vize" className="hover:underline">
              Belçika Vize Rehberi →
            </Link>

            <Link href="/belcika-vize-randevusu" className="hover:underline">
              Belçika Vize Randevusu →
            </Link>

            <Link href="/belcika-vize-reddi" className="hover:underline">
              Belçika Vize Reddi →
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-yellow-500 text-slate-900 rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6 uppercase">
            Evraklarınızı Profesyonel Kontrol Edelim
          </h2>

          <p className="mb-8 max-w-2xl mx-auto">
            Belçika vize dosyanız eksiksiz hazırlanmazsa ret riski artar.
            Evrak kontrolü ile başvurunuzu güçlendirelim.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Belçika%20vize%20evraklarımı%20kontrol%20ettirmek%20istiyorum."
            className="bg-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Evrak Kontrolü Başlat
          </a>
        </section>

      </main>
    </>
  );
}
