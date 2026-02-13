import Head from "next/head";
import Link from "next/link";

export default function BulgaristanVizeRandevusu() {
  return (
    <>
      <Head>
        <title>Bulgaristan Vize Randevusu 2026 | Nasıl Alınır? BLS & VFS Süreci</title>
        <meta
          name="description"
          content="Bulgaristan vize randevusu nasıl alınır? 2026 güncel BLS/VFS sistemi, slot saatleri, randevu açılma zamanı ve no slots sorunu çözümü."
        />
        <meta
          name="keywords"
          content="bulgaristan vize randevusu, bulgaristan randevu nasıl alınır, bulgaristan no slots, bulgaristan bls randevu"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/bulgaristan-vize-randevusu"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-green-200">
            Bulgaristan Randevu Sistemi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Bulgaristan Vize <br/>
            <span className="text-green-600 italic">Randevusu Nasıl Alınır?</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Bulgaristan Schengen vizesi için randevular yetkili başvuru merkezi
            üzerinden alınır. Yoğun dönemlerde “No Slots Available” uyarısı
            sık görülür. İşte adım adım randevu süreci.
          </p>
        </header>

        {/* ADIM ADIM */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Bulgaristan Vize Randevu Alma Adımları
          </h2>

          <div className="grid md:grid-cols-5 gap-4">

            {[
              { n: "01", t: "Merkez Seçimi", d: "İkamet ettiğiniz şehre göre doğru başvuru merkezini seçin." },
              { n: "02", t: "Hesap Açma", d: "E-posta aktivasyonunu tamamlamadan giriş yapılamaz." },
              { n: "03", t: "Başvuru Türü", d: "Turistik, ticari veya aile ziyareti kategorisini belirleyin." },
              { n: "04", t: "Takvim Kontrolü", d: "Mavi günler açık, gri günler doludur." },
              { n: "05", t: "Onay & Ödeme", d: "Servis ücretini ödeyin ve randevu belgesini indirin." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative">
                <span className="text-4xl font-black text-green-200 absolute top-4 right-4">
                  {item.n}
                </span>
                <h4 className="font-bold text-slate-800 mb-2 mt-4">
                  {item.t}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* NO SLOTS */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-24 shadow-2xl">
          <h2 className="text-3xl font-black mb-10 text-center">
            “No Slots Available” Ne Demek?
          </h2>

          <p className="text-slate-300 leading-relaxed text-center max-w-3xl mx-auto mb-8">
            Bu uyarı sistemde o an için boş randevu bulunmadığını gösterir.
            Kontenjanlar düzensiz açılır ve iptal edilen randevular anlık
            olarak sisteme düşebilir.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-400">
            <div>
              <h4 className="font-bold text-green-400 mb-2">
                Randevular Ne Zaman Açılır?
              </h4>
              <ul className="space-y-2">
                <li>• Hafta içi sabah saatleri (08:30–10:00)</li>
                <li>• Pazartesi günleri daha aktif</li>
                <li>• Tatil sonrası ilk iş günü</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-green-400 mb-2">
                Çözüm Yolları
              </h4>
              <ul className="space-y-2">
                <li>• Farklı şehirleri kontrol edin</li>
                <li>• Premium saatleri değerlendirin</li>
                <li>• IP engeline dikkat edin</li>
              </ul>
            </div>
          </div>
        </section>

        {/* YOĞUNLUK BİLGİSİ */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            Bulgaristan Randevu Yoğunluğu
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            Yaz aylarında ve bayram dönemlerinde başvuru sayısı artar.
            Özellikle turistik vize başvurularında randevu bulmak zorlaşır.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Seyahatten en az 1–1,5 ay önce randevu planlaması yapmak
            riski minimize eder.
          </p>
        </section>

        {/* SİLO NAV */}
        <section className="mb-24 text-center">
          <h3 className="text-2xl font-black mb-8">
            Bulgaristan Vize Sürecini Baştan İnceleyin
          </h3>

          <div className="flex flex-wrap justify-center gap-6 font-bold text-sm">

            <Link href="/bulgaristan-vize" className="px-6 py-3 bg-slate-50 rounded-xl hover:text-green-600 transition">
              Bulgaristan Vize Rehberi →
            </Link>

            <Link href="/bulgaristan-vize-evraklari" className="px-6 py-3 bg-slate-50 rounded-xl hover:text-green-600 transition">
              Bulgaristan Vize Evrakları →
            </Link>

            <Link href="/bulgaristan-vize-reddi" className="px-6 py-3 bg-slate-50 rounded-xl hover:text-green-600 transition">
              Bulgaristan Vize Reddi →
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-600 rounded-[3rem] p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">
            Randevu Bulamıyor musunuz?
          </h2>

          <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
            Slot açıldığı anda hızlı işlem yapmak gerekir.
            Profesyonel randevu takibi ile süreci sizin için yönetelim.
          </p>

          <a
            href="https://wa.me/905302199056"
            className="bg-white text-green-700 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition"
          >
            Randevu Takibi Başlat
          </a>
        </section>

      </main>
    </>
  );
}
