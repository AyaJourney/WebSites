import Head from "next/head";
import Link from "next/link";

export default function CekyaVizeRandevusu() {
  return (
    <>
      <Head>
        <title>Çekya Vize Randevusu 2026 | VFS Global Çek Cumhuriyeti</title>
        <meta
          name="description"
          content="Çekya vize randevusu nasıl alınır? VFS Global üzerinden Çek Cumhuriyeti Schengen randevu alma adımları, slot açılma saatleri ve güncel 2026 rehberi."
        />
        <meta
          name="keywords"
          content="çekya vize randevusu, çek cumhuriyeti randevu, vfs çekya, prag vize randevu nasıl alınır"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/cekya-vize-randevusu"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-200">
            Çek Cumhuriyeti VFS Global
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Çekya Vize <br/>
            <span className="text-blue-600 italic">Randevusu 2026</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Çekya Schengen vizesi için randevular VFS Global üzerinden alınır.
            Slot bulmak özellikle yaz döneminde zorlaşabilir. İşte adım adım
            Çekya vize randevu süreci.
          </p>
        </header>

        {/* ADIM ADIM */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Çekya Vize Randevusu Nasıl Alınır?
          </h2>

          <div className="grid md:grid-cols-5 gap-4">

            {[
              { n: "01", t: "VFS Portalı", d: "Çekya için doğru VFS sayfasına giriş yapılır." },
              { n: "02", t: "Hesap Açma", d: "E-posta doğrulaması tamamlanır." },
              { n: "03", t: "Başvuru Türü", d: "Turistik, ticari veya aile ziyareti seçilir." },
              { n: "04", t: "Slot Seçimi", d: "Takvimden uygun tarih seçilir." },
              { n: "05", t: "Onay", d: "Randevu belgesi indirilir." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 relative">
                <span className="text-4xl font-black text-blue-200 absolute top-4 right-4">
                  {item.n}
                </span>
                <h4 className="font-bold text-slate-800 mt-4 mb-2">{item.t}</h4>
                <p className="text-xs text-slate-500">{item.d}</p>
              </div>
            ))}

          </div>
        </section>

        {/* SLOT SORUNU */}
        <section className="mb-24">
          <div className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
            <h2 className="text-3xl font-black mb-6">
              Çekya Randevu Bulamıyorum – Slot Ne Zaman Açılır?
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Çekya randevuları dönemsel olarak yoğunlaşır. Slotlar genellikle:
            </p>

            <ul className="space-y-3 text-slate-200 text-sm">
              <li>• Hafta içi sabah saatlerinde (08:30 – 10:00)</li>
              <li>• Pazartesi günleri</li>
              <li>• İptal edilen randevular sonrası anlık</li>
            </ul>

            <div className="mt-8">
              <Link
                href="/vfs-no-slots-availables"
                className="font-bold text-blue-400 hover:underline"
              >
                VFS No Slots Available sorunu →
              </Link>
            </div>
          </div>
        </section>

        {/* HANGİ ŞEHİRLER */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-6">
            Çekya Vize Randevusu Hangi Şehirlerden Alınır?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Türkiye’de Çekya başvuruları genellikle Ankara ve İstanbul VFS
            merkezlerinden yapılır. İkamet adresinize göre yetki alanı değişebilir.
          </p>

          <Link
            href="/cekya-vize-evraklari"
            className="font-bold text-blue-600 hover:underline"
          >
            Çekya vize evrak listesi →
          </Link>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-[3rem] p-12 text-center shadow-2xl mb-24">
          <h2 className="text-3xl font-black mb-6 uppercase">
            Çekya Randevu Takibi İster misiniz?
          </h2>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Slot açıldığı anda işlem yapılması gerekir. Profesyonel randevu
            takibi ile bekleme sürenizi kısaltabilirsiniz.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20%C3%87ekya%20vize%20randevusu%20i%C3%A7in%20destek%20almak%20istiyorum."
            className="bg-white text-blue-700 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Randevu Takibi Başlat
          </a>
        </section>

        {/* SİLO NAV */}
        <section className="text-center border-t pt-10">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Çekya Vize Süreci
          </p>

          <div className="flex flex-wrap justify-center gap-6 font-bold text-sm">

            <Link href="/cekya-vize" className="hover:underline">
              Çekya Vize Rehberi →
            </Link>

            <Link href="/cekya-vize-evraklari" className="hover:underline">
              Çekya Vize Evrakları →
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
