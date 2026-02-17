import Link from "next/link";
export const metadata = {
  title: "Avustralya Vize Randevusu 2026 | Biometrik Süreç ve VFS Global Rehberi",
  description:
    "Avustralya vize başvurusu sonrası biometrik randevu nasıl alınır? VFS Global Türkiye ofisleri, online sistem ve 2026 güncel randevu süreci.",
  keywords: [
    "avustralya vize randevusu",
    "avustralya biometrik randevu",
    "avustralya vfs global",
    "avustralya vize parmak izi",
    "subclass 600 randevu",
    "avustralya vfs ankara istanbul"
  ],
  alternates: {
    canonical: "https://ayajourney.com/avustralya-vize-randevusu"
  },
  openGraph: {
    title: "Avustralya Vize Randevusu Nasıl Alınır?",
    description:
      "Biometrik talimat mektubu sonrası VFS Global randevu süreci.",
    url: "https://ayajourney.com/avustralya-vize-randevusu",
    type: "article"
  }
};

export default function AvustralyaVizeRandevusu() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-slate-900">

      {/* HERO */}
      <header className="text-center mb-16">
        <span className="bg-emerald-50 text-emerald-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-100">
          Department of Home Affairs
        </span>

        <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
          Avustralya Vize Randevusu <br />
          <span className="text-emerald-600 italic">Biometrik Süreç Rehberi</span>
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6 leading-relaxed">
          Avustralya vize başvurusu online yapılır. Ancak başvurudan sonra
          biometrik (parmak izi ve fotoğraf) işlemi için VFS Global
          randevusu zorunludur.
        </p>
      </header>

      {/* RANDEVU NASIL ALINIR */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-10 text-center">
          Avustralya Biometrik Randevu Nasıl Alınır?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">

          {[
            "ImmiAccount Üzerinden Başvuru",
            "Biometric Collection Letter",
            "VFS Global Randevu",
            "Parmak İzi İşlemi"
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-3xl font-black text-emerald-200 mb-2">
                0{i+1}
              </div>
              <p className="font-semibold text-sm">{item}</p>
            </div>
          ))}

        </div>
      </section>

      {/* KRİTİK UYARI */}
      <section className="bg-red-50 border-2 border-red-500 p-10 rounded-3xl mb-20">
        <h2 className="text-2xl font-black text-red-800 mb-4">
          Randevu Almadan Önce Bilmeniz Gerekenler
        </h2>

        <p className="text-red-700 leading-relaxed">
          Biometric Collection Letter gelmeden randevu alınamaz.
          Ayrıca randevuya geç kalmak veya belge eksikliği
          başvurunun iptal edilmesine neden olabilir.
        </p>
      </section>

      {/* VFS OFİSLERİ */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-8">
          Türkiye’de Avustralya VFS Ofisleri
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <h3 className="font-bold text-lg mb-4">İstanbul VFS Global</h3>
            <p className="text-sm text-slate-600">
              Levent bölgesinde hizmet verir.
              Marmara ve Ege bölgesi başvuruları yoğunlukla buradan yapılır.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <h3 className="font-bold text-lg mb-4">Ankara VFS Global</h3>
            <p className="text-sm text-slate-600">
              Çankaya bölgesindedir.
              İç Anadolu ve Karadeniz bölgesi başvuruları için tercih edilir.
            </p>
          </div>

        </div>
      </section>

      {/* RANDEVU GÜNÜ CHECKLIST */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-8 text-center">
          Randevu Günü Yanınızda Olmalı
        </h2>

        <ul className="space-y-4 max-w-2xl mx-auto text-slate-700">
          <li>✓ Biometric Collection Letter</li>
          <li>✓ Pasaport (orijinal)</li>
          <li>✓ Randevu Onay Belgesi</li>
          <li>✓ VFS ödeme dekontu (varsa)</li>
        </ul>
      </section>

      {/* İŞLEM SÜRESİ */}
      <section className="bg-emerald-50 border border-emerald-200 p-10 rounded-3xl mb-20">
        <h2 className="text-2xl font-black text-emerald-800 mb-4">
          Randevu Sonrası Süreç
        </h2>

        <p className="text-emerald-900 leading-relaxed">
          Biometrik işlem tamamlandıktan sonra dosyanız değerlendirmeye alınır.
          Ortalama turist vizesi sonuçlanma süresi 3-6 hafta arasındadır.
        </p>
      </section>

      {/* SİLO NAV */}
      <section className="border-t border-slate-200 pt-10 mb-20">
        <p className="text-xs uppercase tracking-widest text-slate-400 mb-6">
          Avustralya Vize Rehberi
        </p>

        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <Link href="/avustralya-vize" className="hover:underline">
            Avustralya Vizesi →
          </Link>

          <Link href="/avustralya-vize-evraklari" className="hover:underline">
            Evrak Listesi →
          </Link>

          <Link href="/avustralya-vize-reddi" className="hover:underline">
            Vize Reddi →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 rounded-3xl p-12 text-center text-white shadow-xl">
        <h2 className="text-3xl font-black mb-6">
          Randevunuzu Biz Planlayalım
        </h2>

        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          Yanlış randevu tarihi veya eksik belge nedeniyle
          sürecinizi riske atmayın.
          Uzman ekibimiz süreci sıfır hata ile yönetsin.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/randevu"
            className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition"
          >
            Randevu Planla
          </Link>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Avustralya%20vize%20randevusu%20i%C3%A7in%20destek%20istiyorum."
            className="bg-emerald-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-emerald-700 transition"
          >
            WhatsApp Destek
          </a>
        </div>
      </section>

    </main>
  );
}
