import Head from "next/head";
import Link from "next/link";

export default function AlmanyaVizeRandevusu() {
  return (
    <>
      <Head>
        <title>Almanya Vize Randevusu 2026 | iDATA Randevu Alma Rehberi</title>
        <meta
          name="description"
          content="Almanya vize randevusu nasıl alınır? iDATA sistemi üzerinden Almanya Schengen randevu alma adımları, slot sorunu ve güncel 2026 rehberi."
        />
        <meta
          name="keywords"
          content="almanya vize randevusu, idata almanya randevu, almanya schengen randevu nasıl alınır, almanya randevu bulamıyorum"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/almanya-vize-randevusu"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-black text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
            iDATA Almanya 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Almanya Vize <br/>
            <span className="italic text-yellow-500">Randevusu</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Almanya Schengen vizesi için randevular iDATA sistemi üzerinden alınır.
            Slot yoğunluğu nedeniyle erken planlama kritik öneme sahiptir.
          </p>
        </header>

        {/* iDATA NEDİR */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            iDATA Nedir?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            iDATA, Almanya’nın Türkiye’deki resmi vize başvuru aracıdır.
            Başvurular İstanbul, Ankara, İzmir ve diğer yetkili merkezler üzerinden yapılır.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Vize kararı konsolosluk tarafından verilir; iDATA yalnızca biyometri ve evrak kabulü yapar.
          </p>
        </section>

        {/* RANDEVU ADIMLARI */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-12 text-center">
            Almanya Vize Randevusu Nasıl Alınır?
          </h2>

          <div className="grid md:grid-cols-5 gap-4">

            {[
              { n: "01", t: "Başvuru Türü Seçimi", d: "Turistik, ticari veya aile ziyareti seçilir." },
              { n: "02", t: "iDATA Portal Girişi", d: "Online randevu sistemi üzerinden kayıt yapılır." },
              { n: "03", t: "Uygun Merkez", d: "İkamet adresine göre doğru şehir seçilmelidir." },
              { n: "04", t: "Slot Seçimi", d: "Takvimde uygun tarih seçilir." },
              { n: "05", t: "Onay Belgesi", d: "Randevu çıktısı alınarak saklanır." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative">
                <span className="text-4xl font-black text-yellow-200 absolute top-1 right-4">
                  {item.n}
                </span>
                <h4 className="font-bold text-slate-800 mb-2 mt-4">{item.t}</h4>
                <p className="text-md text-slate-500 leading-relaxed">{item.d}</p>
              </div>
            ))}

          </div>
        </section>

        {/* SLOT SORUNU */}
        <section className="bg-black text-white p-12 rounded-[3rem] mb-24 shadow-2xl">
          <h2 className="text-3xl font-black mb-10 text-center">
            Almanya Randevu Bulamıyorum
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="font-bold text-yellow-400 mb-2">
                Slotlar Neden Hızlı Doluyor?
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Almanya, Türkiye’den en çok başvuru alan Schengen ülkelerinden biridir.
                Özellikle yaz aylarında kontenjanlar hızla dolar.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="font-bold text-yellow-400 mb-2">
                Ne Zaman Kontrol Edilmeli?
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Randevular genellikle hafta içi sabah saatlerinde açılır.
                Yoğun yenileme IP engeline neden olabilir.
              </p>
            </div>

          </div>
        </section>

        {/* ÖNEMLİ UYARI */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-2xl font-black mb-6">
            Almanya Randevusu Kaç Gün Sonraya Veriliyor?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Ortalama randevu süresi dönemsel olarak değişmekle birlikte
            2–6 hafta arasında değişebilir. Yoğun dönemlerde bu süre uzayabilir.
          </p>
        </section>

        {/* SİLO NAV */}
        <section className="mb-24 text-center">
          <h3 className="text-2xl font-black mb-8">
            Almanya Sürecini Tamamlayın
          </h3>

          <div className="flex flex-wrap justify-center gap-6 font-bold text-sm">

            <Link href="/almanya-vize" className="px-6 py-3 bg-slate-50 rounded-xl hover:text-yellow-600 transition">
              Almanya Vize Rehberi →
            </Link>

            <Link href="/almanya-vize-evraklari" className="px-6 py-3 bg-slate-50 rounded-xl hover:text-yellow-600 transition">
              Almanya Vize Evrakları →
            </Link>

            <Link href="/almanya-vize-reddi" className="px-6 py-3 bg-slate-50 rounded-xl hover:text-yellow-600 transition">
              Almanya Vize Reddi →
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-yellow-500 rounded-[3rem] p-12 text-center text-black shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">
            Almanya Randevunuzu Planlayalım
          </h2>

          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Yanlış kategori veya eksik planlama nedeniyle ret riski yaşamayın.
            Randevu ve dosya sürecinizi profesyonel yönlendirelim.
          </p>

          <a
            href="https://wa.me/905302199056"
            className="bg-black text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-gray-800 transition"
          >
            Randevu Desteği Al
          </a>
        </section>

      </main>
    </>
  );
}
