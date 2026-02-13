import Head from "next/head";
import Link from "next/link";

export default function AvusturyaVizeRandevusu() {
  return (
    <>
      <Head>
        <title>Avusturya Vize Randevusu 2026 | VFS Global Randevu Alma Rehberi</title>
        <meta
          name="description"
          content="Avusturya Schengen vizesi için VFS Global randevusu nasıl alınır? Slot ne zaman açılır? No slots available hatası çözümü ve 2026 güncel randevu rehberi."
        />
        <meta
          name="keywords"
          content="avusturya vize randevusu, vfs avusturya randevu, avusturya schengen randevu nasıl alınır, no slots available avusturya"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/avusturya-vize-randevusu"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-red-100 text-red-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-red-200">
            VFS Global Avusturya
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Avusturya Vize Randevusu <br/>
            <span className="text-red-600 italic">Nasıl Alınır?</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Avusturya Schengen başvuruları Türkiye’de VFS Global üzerinden yapılır.
            Slot bulamıyor musunuz? “No slots available” hatası mı alıyorsunuz?
            İşte adım adım randevu süreci.
          </p>
        </header>

        {/* ADIM ADIM */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Avusturya Randevu Alma Adımları
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              { n: "01", t: "VFS Hesabı", d: "VFS Global sitesinde hesap oluşturun." },
              { n: "02", t: "Ülke Seçimi", d: "Austria / Short Stay (C Type) seçilir." },
              { n: "03", t: "Başvuru Türü", d: "Turistik, ticari veya aile ziyareti seçin." },
              { n: "04", t: "Slot Takvimi", d: "Uygun tarih seçilir ve onaylanır." },
              { n: "05", t: "Ödeme", d: "Servis bedeli ödenir ve randevu belgesi alınır." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-200 relative">
                <span className="text-4xl font-black text-red-200 absolute top-4 right-4">
                  {item.n}
                </span>
                <h4 className="font-bold text-slate-800 mt-6 mb-2">{item.t}</h4>
                <p className="text-xs text-slate-500">{item.d}</p>
              </div>
            ))}

          </div>
        </section>

        {/* NO SLOTS */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-24 shadow-2xl">
          <h2 className="text-3xl font-black mb-8 text-center">
            “No Slots Available” Ne Demek?
          </h2>

          <p className="text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
            Bu uyarı, sistemde o an için boş randevu bulunmadığını gösterir.
            Slotlar genellikle hafta içi sabah saatlerinde veya iptaller sonrası
            anlık olarak sisteme düşer.
          </p>

          <div className="mt-10 text-center">
            <Link
              href="/vfs-no-slots-availables"
              className="underline text-red-400 font-bold"
            >
              Detaylı Slot Sorunu Rehberi →
            </Link>
          </div>
        </section>

        {/* NERELERDE */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Avusturya VFS Merkezleri
          </h2>

          <ul className="space-y-3 text-slate-700">
            <li>• İstanbul VFS</li>
            <li>• Ankara VFS</li>
            <li>• İzmir VFS</li>
          </ul>
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

            <Link href="/avusturya-vize-evraklari" className="hover:underline">
              Avusturya Vize Evrakları →
            </Link>

            <Link href="/avusturya-vize-reddi" className="hover:underline">
              Avusturya Vize Reddi →
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6 uppercase">
            Slot Açıldığında Kaçırmak İstemiyor musunuz?
          </h2>

          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            VFS sistemi başında saatler geçirmek yerine profesyonel
            randevu takibi ile süreci hızlandıralım.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Avusturya%20vize%20randevusu%20için%20destek%20almak%20istiyorum."
            className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Randevu Desteği Al
          </a>
        </section>

      </main>
    </>
  );
}
