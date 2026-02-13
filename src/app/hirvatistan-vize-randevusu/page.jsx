import Head from "next/head";
import Link from "next/link";

export default function HirvatistanVizeRandevusu() {
  return (
    <>
      <Head>
        <title>Hırvatistan Vize Randevusu 2026 | VFS Randevu Alma Rehberi</title>
        <meta
          name="description"
          content="Hırvatistan vize randevusu nasıl alınır? VFS Global üzerinden Hırvatistan Schengen randevu sistemi, slot açılma saatleri ve 2026 güncel bilgiler."
        />
        <meta
          name="keywords"
          content="hırvatistan vize randevusu, hırvatistan vfs randevu, hırvatistan schengen randevu alma, hırvatistan randevu nasıl alınır"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/hirvatistan-vize-randevusu"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-200">
            VFS Global Hırvatistan
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Hırvatistan Vize <br/>
            <span className="text-blue-600 italic">Randevusu Nasıl Alınır?</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hırvatistan Schengen vizesi başvuruları Türkiye’de VFS Global üzerinden alınmaktadır.
            Slot bulma saatleri ve sistem detaylarını aşağıda bulabilirsiniz.
          </p>
        </header>

        {/* SÜREÇ ADIMLARI */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-12 text-center">
            Hırvatistan Randevu Alma Adımları
          </h2>

          <div className="grid md:grid-cols-5 gap-4">

            {[
              { n: "01", t: "VFS Portal Girişi", d: "Hırvatistan için doğru VFS sayfasına giriş yapılır." },
              { n: "02", t: "Hesap Oluşturma", d: "Aktivasyon maili onaylanmalıdır." },
              { n: "03", t: "Başvuru Türü", d: "Turistik, ticari veya aile ziyareti seçilir." },
              { n: "04", t: "Slot Takvimi", d: "Uygun tarih seçilir." },
              { n: "05", t: "Ödeme & Onay", d: "Servis ücreti ödenir ve randevu çıktısı alınır." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative">
                <span className="text-4xl font-black text-blue-200 absolute top-4 right-4">
                  {item.n}
                </span>
                <h4 className="font-bold text-slate-800 mb-2 mt-4">{item.t}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
              </div>
            ))}

          </div>
        </section>

        {/* SLOT BİLGİLERİ */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-24 shadow-2xl">
          <h2 className="text-3xl font-black mb-10 text-center">
            Hırvatistan Randevular Ne Zaman Açılır?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-300">

            <div>
              <p>• Genellikle hafta içi sabah saatlerinde (08:30 – 10:00)</p>
              <p>• Pazartesi ve Çarşamba günleri daha yoğun</p>
              <p>• Tatil sonrası ilk iş günü yeni slot yüklenebilir</p>
            </div>

            <div>
              <p>• İptal edilen randevular anlık düşer</p>
              <p>• Sürekli yenileme IP engeline yol açabilir</p>
              <p>• Premium saatler daha erken dolabilir</p>
            </div>

          </div>
        </section>

        {/* ŞEHİRLER */}
        <section className="mb-24 text-center">
          <h2 className="text-3xl font-black mb-8">
            Türkiye’de Hırvatistan Randevu Merkezleri
          </h2>

          <div className="flex flex-wrap justify-center gap-4 font-semibold text-slate-700">
            <span className="px-6 py-3 bg-slate-100 rounded-2xl">İstanbul</span>
            <span className="px-6 py-3 bg-slate-100 rounded-2xl">Ankara</span>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 rounded-[3rem] p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase">
            Hırvatistan Randevusu Bulamıyor musunuz?
          </h2>

          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Slot açıldığı anda sistem başında olmanız gerekir.
            Profesyonel takip ile randevunuzu erkene alalım.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20H%C4%B1rvatistan%20randevu%20deste%C4%9Fi%20istiyorum."
            className="bg-white text-blue-700 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition"
          >
            Randevu Takibi Başlat
          </a>
        </section>

        {/* SİLO NAV */}
        <section className="border-t border-slate-200 pt-10 mt-20 text-sm font-bold flex flex-wrap gap-6 justify-center">
          <Link href="/hirvatistan-vize" className="hover:text-blue-600 transition">
            Hırvatistan Vize Ana Sayfa →
          </Link>

          <Link href="/hirvatistan-vize-evraklari" className="hover:text-blue-600 transition">
            Hırvatistan Vize Evrakları →
          </Link>

          <Link href="/hirvatistan-vize-reddi" className="hover:text-blue-600 transition">
            Hırvatistan Vize Reddi →
          </Link>
        </section>

      </main>
    </>
  );
}
