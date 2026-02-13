import Head from "next/head";
import Link from "next/link";

export default function EstonyaVizeEvraklari() {
  return (
    <>
      <Head>
        <title>Estonya Vize Evrakları 2026 | Güncel Belge Listesi</title>
        <meta
          name="description"
          content="Estonya Schengen vizesi için gerekli evraklar 2026 güncel liste. Turistik, ticari ve aile ziyareti Estonya vize başvurusu için hazırlanması gereken belgeler."
        />
        <meta
          name="keywords"
          content="estonya vize evrakları, estonya schengen evrak listesi, estonya turistik vize belgeleri, estonya ticari vize evrakları"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/estonya-vize-evraklari"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-200">
            Estonya Schengen Evrak Listesi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Estonya Vize Evrakları <br/>
            <span className="text-blue-600 italic">Güncel Liste</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Estonya Schengen vizesi için eksiksiz ve doğru evrak hazırlamak,
            vize onayı için en kritik adımdır. 2026 yılı güncel belge listesini
            aşağıda bulabilirsiniz.
          </p>
        </header>

        {/* TEMEL EVRAKLAR */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Estonya Turistik Vize İçin Gerekli Evraklar
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed list-disc list-inside">
            <li>Pasaport (son 10 yıl içinde alınmış, en az 2 boş sayfa)</li>
            <li>Schengen vize başvuru formu</li>
            <li>2 adet biyometrik fotoğraf</li>
            <li>Gidiş-dönüş uçak rezervasyonu</li>
            <li>Otel rezervasyonu veya davetiye</li>
            <li>En az 30.000 Euro teminatlı seyahat sağlık sigortası</li>
            <li>Son 3 aylık banka hesap dökümü (ıslak imzalı / kaşeli)</li>
            <li>Çalışanlar için maaş bordrosu ve SGK dökümü</li>
          </ul>
        </section>

        {/* TİCARİ EVRAKLAR */}
        <section className="mb-24 bg-slate-50 p-12 rounded-[3rem] border border-slate-200">
          <h2 className="text-3xl font-black mb-8">
            Estonya Ticari Vize Evrakları
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed list-disc list-inside">
            <li>Estonya’daki firmadan davetiye mektubu</li>
            <li>Şirket faaliyet belgesi</li>
            <li>Vergi levhası</li>
            <li>İmza sirküleri</li>
            <li>Ticaret sicil gazetesi</li>
          </ul>
        </section>

        {/* BANKA DETAYI */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-6">
            Banka Hesabında Ne Kadar Para Olmalı?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Estonya Schengen vizesi için seyahat süresi boyunca
            günlük ortalama 60–80 Euro karşılığı bakiye gösterilmelidir.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Hesapta ani ve açıklanamayan toplu para girişleri
            vize reddine sebep olabilir.
          </p>
        </section>

        {/* DEĞERLENDİRME SÜRESİ */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            Evrak Eksik Olursa Ne Olur?
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto text-center leading-relaxed">
            Eksik veya çelişkili belge sunulması durumunda
            Estonya Konsolosluğu başvurunuzu reddedebilir.
            Evraklar başvuru öncesi mutlaka kontrol edilmelidir.
          </p>
        </section>

        {/* SERİ LİNKLERİ */}
        <section className="mb-24 text-center border-t pt-10">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Estonya Vize Serisi
          </p>

          <div className="flex flex-wrap justify-center gap-6 font-bold text-sm">

            <Link href="/estonya-vize" className="hover:underline">
              Estonya Vize Rehberi →
            </Link>

            <Link href="/estonya-vize-randevusu" className="hover:underline">
              Estonya Vize Randevusu →
            </Link>

            <Link href="/estonya-vize-reddi" className="hover:underline">
              Estonya Vize Reddi →
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6 uppercase">
            Evraklarınızı Profesyonel Kontrol Edelim
          </h2>

          <p className="mb-8 max-w-2xl mx-auto text-blue-100">
            Ret riskini azaltmak için başvuru öncesi dosyanızı analiz edelim.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Estonya%20vize%20evraklarım%20için%20kontrol%20talep%20ediyorum."
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Evrak Kontrolü Al
          </a>
        </section>

      </main>
    </>
  );
}
