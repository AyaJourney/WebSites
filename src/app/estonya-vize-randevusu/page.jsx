import Head from "next/head";
import Link from "next/link";

export default function EstonyaVizeRandevusu() {
  return (
    <>
      <Head>
        <title>Estonya Vize Randevusu 2026 | VFS Global Randevu Alma</title>
        <meta
          name="description"
          content="Estonya vize randevusu nasıl alınır? VFS Global üzerinden Estonya Schengen randevu alma adımları, slot açılma saatleri ve 2026 güncel bilgiler."
        />
        <meta
          name="keywords"
          content="estonya vize randevusu, estonya vfs randevu, estonya schengen randevu alma, estonya no slots available"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/estonya-vize-randevusu"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-indigo-200">
            Estonya Schengen Randevu Rehberi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Estonya Vize Randevusu <br/>
            <span className="text-indigo-600 italic">Nasıl Alınır?</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Estonya Schengen başvuruları Türkiye’de VFS Global üzerinden alınmaktadır.
            Randevu sürecini adım adım anlattık.
          </p>
        </header>

        {/* RANDEVU SÜRECİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Estonya Vize Randevusu Alma Adımları
          </h2>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { n: "01", t: "VFS Hesabı Aç", d: "Estonya için doğru VFS portalına giriş yap." },
              { n: "02", t: "Başvuru Türü", d: "Turistik, ticari veya aile ziyareti seç." },
              { n: "03", t: "Form Bilgileri", d: "Pasaport ve iletişim bilgilerini gir." },
              { n: "04", t: "Slot Seçimi", d: "Takvimden uygun günü seç." },
              { n: "05", t: "Ödeme", d: "Servis ücretini öde ve randevu belgesini indir." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-200 relative">
                <span className="text-4xl font-black text-indigo-200 absolute top-4 right-4">{item.n}</span>
                <h4 className="font-bold text-slate-800 mb-2 mt-4">{item.t}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SLOT BİLGİSİ */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            Estonya VFS Slot Ne Zaman Açılır?
          </h2>

          <ul className="space-y-4 text-slate-300 text-center">
            <li>• Genellikle hafta içi sabah 08:30 – 10:00 arası</li>
            <li>• Pazartesi ve Çarşamba günleri daha aktif</li>
            <li>• İptal edilen randevular rastgele saatlerde düşer</li>
          </ul>
        </section>

        {/* NO SLOTS */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-6">
            “No Slots Available” Ne Demek?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Bu uyarı sistemde o an için boş randevu bulunmadığını gösterir.
            Slotlar düzensiz aralıklarla açılır.
          </p>
        </section>

        {/* VFS LİNKİ */}
        <section className="mb-24 px-8 py-12 bg-indigo-50 rounded-[3rem] border border-indigo-100">
          <h2 className="text-2xl font-black mb-6 text-center">
            Estonya VFS Merkezleri
          </h2>

          <div className="flex flex-wrap justify-center gap-4 font-semibold">
            <span className="px-6 py-3 bg-white border border-slate-200 rounded-2xl">İstanbul</span>
            <span className="px-6 py-3 bg-white border border-slate-200 rounded-2xl">Ankara</span>
          </div>
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

            <Link href="/estonya-vize-evraklari" className="hover:underline">
              Estonya Vize Evrakları →
            </Link>

            <Link href="/estonya-vize-reddi" className="hover:underline">
              Estonya Vize Reddi →
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-indigo-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6 uppercase">
            Estonya Randevunuzu Hızlandıralım
          </h2>

          <p className="mb-8 max-w-2xl mx-auto text-indigo-100">
            Slot takibi ve başvuru sürecinizi profesyonel olarak yönetelim.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Estonya%20vize%20randevusu%20i%C3%A7in%20destek%20almak%20istiyorum."
            className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Randevu Desteği Al
          </a>
        </section>

      </main>
    </>
  );
}
