import Head from "next/head";
import Link from "next/link";

export default function FinlandiyaVizeRandevusu() {
  return (
    <>
      <Head>
        <title>Finlandiya Vize Randevusu 2026 | VFS Global Başvuru Süreci</title>
        <meta
          name="description"
          content="Finlandiya Schengen vizesi randevusu nasıl alınır? VFS Global üzerinden Finlandiya vize randevu alma adımları, slot açılma saatleri ve dikkat edilmesi gerekenler."
        />
        <meta
          name="keywords"
          content="finlandiya vize randevusu, finlandiya vfs randevu, finlandiya schengen randevu alma, finlandiya slot açılma saatleri"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/finlandiya-vize-randevusu"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-200">
            Finlandiya Randevu Sistemi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Finlandiya Vize Randevusu <br/>
            <span className="text-blue-600 italic">Nasıl Alınır?</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Finlandiya Schengen vizesi için randevular Türkiye’de
            VFS Global üzerinden alınmaktadır. Slot bulma süreci ve
            dikkat edilmesi gereken kritik detaylar burada.
          </p>
        </header>

        {/* RANDEVU SÜRECİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Finlandiya Randevu Alma Adımları
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-sm text-slate-600">

            <div className="p-6 bg-slate-50 rounded-2xl border">
              <h4 className="font-bold mb-3 text-slate-900">1. Hesap Oluşturma</h4>
              <p>VFS Global Finlandiya portalında hesap açılır.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border">
              <h4 className="font-bold mb-3 text-slate-900">2. Başvuru Türü</h4>
              <p>Turistik, ticari veya aile ziyareti kategorisi seçilir.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border">
              <h4 className="font-bold mb-3 text-slate-900">3. Slot Seçimi</h4>
              <p>Takvimden uygun tarih ve saat seçilir.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border">
              <h4 className="font-bold mb-3 text-slate-900">4. Onay & Ödeme</h4>
              <p>Randevu servis ücreti ödenir ve onay belgesi indirilir.</p>
            </div>

          </div>
        </section>

        {/* SLOT SORUNU */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-24">
          <h2 className="text-3xl font-black mb-6">
            Finlandiya Randevuları Ne Zaman Açılır?
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            Slotlar düzensiz aralıklarla sisteme yüklenir. Genellikle:
          </p>

          <ul className="space-y-3 text-slate-200 text-sm">
            <li>• Hafta içi sabah saatlerinde (08:30 – 10:00)</li>
            <li>• Tatil sonrası ilk iş günü</li>
            <li>• İptal edilen randevular anlık düşebilir</li>
          </ul>

          <p className="mt-6 text-slate-400 text-xs italic">
            Not: Sürekli yenileme yapmak IP engeline sebep olabilir.
          </p>
        </section>

        {/* MERKEZLER */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">
            Finlandiya VFS Başvuru Merkezleri
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Türkiye’de Finlandiya başvuruları genellikle İstanbul ve Ankara
            üzerinden alınmaktadır. İkamet adresinize göre doğru merkez seçimi
            yapılmalıdır.
          </p>
        </section>

        {/* SİLO NAV */}
        <section className="border-t border-slate-200 pt-10 text-sm font-bold flex flex-wrap gap-6 justify-center">
          <Link href="/finlandiya-vize" className="hover:text-blue-600 transition">
            Finlandiya Vize Rehberi →
          </Link>

          <Link href="/finlandiya-vize-evraklari" className="hover:text-blue-600 transition">
            Finlandiya Vize Evrakları →
          </Link>

          <Link href="/finlandiya-vize-reddi" className="hover:text-red-600 transition">
            Finlandiya Vize Reddi →
          </Link>
        </section>

      </main>
    </>
  );
}
