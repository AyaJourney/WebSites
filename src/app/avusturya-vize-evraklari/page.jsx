import Head from "next/head";
import Link from "next/link";

export default function AvusturyaVizeEvraklari() {
  return (
    <>
      <Head>
        <title>Avusturya Vize Evrakları 2026 | Güncel Schengen Belge Listesi</title>
        <meta
          name="description"
          content="Avusturya Schengen vizesi için gerekli evraklar 2026 güncel liste. Turistik, ticari ve aile ziyareti başvuruları için belge rehberi."
        />
        <meta
          name="keywords"
          content="avusturya vize evrakları, avusturya schengen belge listesi, viyana vize evrak, avusturya turistik vize belgeleri"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/avusturya-vize-evraklari"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-red-100 text-red-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-red-200">
            Avusturya Schengen Belge Rehberi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Avusturya Vize Evrakları <br/>
            <span className="text-red-600 italic">2026 Güncel Liste</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Avusturya vize başvurularında en sık ret sebebi eksik veya hatalı evraktır.
            Aşağıda turistik, ticari ve aile ziyareti için gerekli tüm belgeleri bulabilirsiniz.
          </p>
        </header>

        {/* GENEL EVRAKLAR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Zorunlu Temel Evraklar
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• En az 2 boş sayfası olan pasaport (son 10 yıl içinde alınmış)</li>
            <li>• Kimlik kartı fotokopisi</li>
            <li>• 2 adet biyometrik fotoğraf</li>
            <li>• Eksiksiz doldurulmuş Schengen başvuru formu</li>
            <li>• Seyahat sağlık sigortası (minimum 30.000 € teminatlı)</li>
            <li>• Gidiş-dönüş uçak rezervasyonu</li>
            <li>• Otel rezervasyonu veya davetiye</li>
          </ul>
        </section>

        {/* FİNANSAL BELGELER */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Finansal Belgeler
          </h2>

          <ul className="space-y-4 text-slate-700">
            <li>• Son 3 aylık banka hesap dökümü (kaşeli ve imzalı)</li>
            <li>• Maaş bordroları (çalışanlar için)</li>
            <li>• Vergi levhası ve faaliyet belgesi (şirket sahipleri için)</li>
            <li>• SGK hizmet dökümü</li>
            <li>• Sponsor varsa sponsor dilekçesi ve gelir belgeleri</li>
          </ul>
        </section>

        {/* ÇALIŞMA DURUMUNA GÖRE */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10">
            Çalışma Durumuna Göre Ek Evraklar
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-red-600 mb-3">Çalışanlar</h3>
              <p className="text-sm text-slate-600">
                İş yeri izin yazısı, SGK işe giriş bildirgesi ve maaş bordrosu.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-red-600 mb-3">Şirket Sahipleri</h3>
              <p className="text-sm text-slate-600">
                Ticaret sicil gazetesi, vergi levhası, imza sirküleri.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-red-600 mb-3">Öğrenciler</h3>
              <p className="text-sm text-slate-600">
                Öğrenci belgesi ve sponsor dilekçesi.
              </p>
            </div>

          </div>
        </section>

        {/* İÇ LINK BLOK */}
        <section className="text-center border-t pt-10 mb-24">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Avusturya Vize Süreci
          </p>

          <div className="flex flex-wrap justify-center gap-6 font-bold text-sm">

            <Link href="/avusturya-vize" className="hover:underline">
              Avusturya Vize Rehberi →
            </Link>

            <Link href="/avusturya-vize-randevusu" className="hover:underline">
              Avusturya Vize Randevusu →
            </Link>

            <Link href="/avusturya-vize-reddi" className="hover:underline">
              Avusturya Vize Reddi →
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6 uppercase">
            Evraklarınızı Birlikte Kontrol Edelim
          </h2>

          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Eksik veya hatalı belge ret riskini artırır.
            Dosyanızı göndermeniz yeterli.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Avusturya%20vize%20evraklarımı%20kontrol%20ettirmek%20istiyorum."
            className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Evrak Kontrolü Al
          </a>
        </section>

      </main>
    </>
  );
}
