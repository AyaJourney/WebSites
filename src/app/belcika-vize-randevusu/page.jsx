import Head from "next/head";
import Link from "next/link";

export default function BelcikaVizeRandevusu() {
  return (
    <>
      <Head>
        <title>Belçika Vize Randevusu 2026 | TLScontact Randevu Alma Rehberi</title>
        <meta
          name="description"
          content="Belçika vize randevusu nasıl alınır? TLScontact sistemi üzerinden Belçika Schengen randevu alma adımları, slot açılma saatleri ve randevu bulamama çözümleri."
        />
        <meta
          name="keywords"
          content="belçika vize randevusu, belçika tls randevu, belçika schengen randevu alma, belçika no slots available, belçika randevu açılma saatleri"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/belcika-vize-randevusu"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-200">
            Belçika TLScontact Sistemi
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Belçika Vize <br/>
            <span className="text-blue-600 italic">Randevusu Nasıl Alınır?</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Belçika Schengen vizesi başvuruları TLScontact sistemi üzerinden yapılır.
            Slot bulmak özellikle yaz aylarında zorlaşabilir.
            İşte 2026 güncel randevu alma rehberi.
          </p>
        </header>

        {/* RANDEVU ADIMLARI */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center">
            Belçika Vize Randevu Alma Adımları
          </h2>

          <div className="grid md:grid-cols-5 gap-4">

            {[
              { n: "01", t: "TLS Hesabı Açın", d: "TLScontact Belçika portalında hesap oluşturun." },
              { n: "02", t: "Başvuru Formu", d: "Schengen başvuru formunu eksiksiz doldurun." },
              { n: "03", t: "Slot Seçimi", d: "Takvimden uygun tarih seçin." },
              { n: "04", t: "Ödeme", d: "Servis ücretini online ödeyin." },
              { n: "05", t: "Biyometri", d: "Randevu günü parmak izi ve evrak teslimi." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-200 relative">
                <span className="text-4xl font-black text-blue-200 absolute top-4 right-4">
                  {item.n}
                </span>
                <h4 className="font-bold text-slate-800 mt-6 mb-2">
                  {item.t}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* SLOT SORUNU */}
        <section className="bg-slate-900 text-white p-12 rounded-[3rem] mb-24 shadow-2xl">
          <h2 className="text-3xl font-black mb-8 text-center">
            Belçika Randevu Bulamıyorum
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto text-center leading-relaxed mb-6">
            “No slots available” uyarısı alıyorsanız sistem doludur.
            Ancak slotlar düzensiz aralıklarla yeniden açılır.
          </p>

          <ul className="text-slate-300 max-w-2xl mx-auto space-y-3">
            <li>• Hafta içi sabah saatleri daha aktiftir.</li>
            <li>• İptal edilen randevular anlık düşer.</li>
            <li>• Yaz sezonunda yoğunluk artar.</li>
          </ul>
        </section>

        {/* LOKASYON */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Belçika TLScontact Ofisleri
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Türkiye’de Belçika başvuruları genellikle İstanbul ve Ankara
            TLScontact merkezlerinden yapılır.
            İkamet adresinize göre doğru merkezi seçmeniz gerekir.
          </p>
        </section>

        {/* RET RİSK UYARISI */}
        <section className="mb-24 bg-red-50 border border-red-200 p-10 rounded-3xl">
          <h2 className="text-2xl font-black text-red-700 mb-4">
            Randevu Aldıktan Sonra Dosyanız Hazır mı?
          </h2>

          <p className="text-slate-700 leading-relaxed mb-4">
            Randevu almak tek başına yeterli değildir.
            Eksik evrak veya zayıf finansal profil ret sebebi olabilir.
          </p>

          <Link
            href="/belcika-vize-evraklari"
            className="font-bold text-blue-600 underline"
          >
            Belçika Vize Evrakları Listesi →
          </Link>
        </section>

        {/* SİLO NAV */}
        <section className="text-center border-t pt-10 mb-24">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Belçika Vize Serisi
          </p>

          <div className="flex flex-wrap justify-center gap-6 font-bold text-sm">

            <Link href="/belcika-vize" className="hover:underline">
              Belçika Vize Rehberi →
            </Link>

            <Link href="/belcika-vize-evraklari" className="hover:underline">
              Belçika Vize Evrakları →
            </Link>

            <Link href="/belcika-vize-reddi" className="hover:underline">
              Belçika Vize Reddi →
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6 uppercase">
            Belçika Randevunuzu Kaçırmayın
          </h2>

          <p className="mb-8 max-w-2xl mx-auto text-blue-100">
            Slot açıldığı anda sistem başında olmak gerekir.
            Profesyonel randevu takibi ile işleminizi hızlandıralım.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Belçika%20vize%20randevusu%20için%20destek%20almak%20istiyorum."
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Randevu Takibi Başlat
          </a>
        </section>

      </main>
    </>
  );
}
