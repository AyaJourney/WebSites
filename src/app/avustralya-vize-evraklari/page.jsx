import Link from "next/link";
export const metadata = {
  title: "Avustralya Vize Evrakları 2026 | Subclass 600 Güncel Belge Listesi",
  description:
    "Avustralya turist vizesi (Subclass 600) ve öğrenci vizesi için 2026 güncel evrak listesi. Banka hesap dökümü, finansal kanıt, GTE açıklaması ve başvuru detayları.",
  keywords: [
    "avustralya vize evrakları",
    "subclass 600 evrak listesi",
    "avustralya turist vizesi belgeler",
    "avustralya banka hesap dökümü",
    "avustralya gte belgesi",
    "avustralya öğrenci vizesi evrakları"
  ],
  alternates: {
    canonical: "https://ayajourney.com/avustralya-vize-evraklari"
  },
  openGraph: {
    title: "Avustralya Vize Evrak Listesi 2026",
    description:
      "Avustralya turist ve öğrenci vizesi için gerekli belgeler.",
    url: "https://ayajourney.com/avustralya-vize-evraklari",
    type: "article"
  }
};

export default function AvustralyaVizeEvraklari() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-slate-900">

      {/* HERO */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black leading-tight">
          Avustralya Vize Evrakları <br/>
          <span className="text-emerald-600 italic">Subclass 600 Güncel Liste</span>
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6 leading-relaxed">
          Avustralya turist vizesi başvuruları online yapılır ve
          tüm belgeler sisteme PDF olarak yüklenir.
          Eksik veya zayıf belge ret sebebidir.
        </p>
      </header>

      {/* ANA EVRAKLAR */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-8">
          Zorunlu Evrak Listesi (Turist Vizesi – Subclass 600)
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <ul className="space-y-3 text-slate-700">
            <li>✓ Geçerli Pasaport (Tüm işlenmiş sayfalar)</li>
            <li>✓ Nüfus Kayıt Örneği (İngilizce çevirili)</li>
            <li>✓ Banka Hesap Dökümü (Son 3-6 Ay)</li>
            <li>✓ Çalışma Belgesi / İşveren Yazısı</li>
            <li>✓ Maaş Bordroları</li>
            <li>✓ SGK Hizmet Dökümü</li>
          </ul>

          <ul className="space-y-3 text-slate-700">
            <li>✓ Seyahat Planı</li>
            <li>✓ Otel Rezervasyonu (varsa)</li>
            <li>✓ Uçuş Planı</li>
            <li>✓ Finansal Sponsor Belgeleri (varsa)</li>
            <li>✓ GTE Açıklama Mektubu</li>
          </ul>

        </div>
      </section>

      {/* FİNANSAL DETAY */}
      <section className="bg-emerald-50 border border-emerald-200 p-10 rounded-3xl mb-20">
        <h2 className="text-2xl font-black text-emerald-800 mb-4">
          Banka Hesabı Ne Kadar Olmalı?
        </h2>

        <p className="text-emerald-900 leading-relaxed">
          Net bir resmi tutar yoktur. Ancak seyahat süresine göre
          günlük harcama planı, uçuş ve konaklama giderleri
          karşılanabilecek seviyede bakiye olmalıdır.
          Hesapta ani para girişleri risklidir.
        </p>
      </section>

      {/* ÖĞRENCİ VİZESİ */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-8">
          Öğrenci Vizesi (Subclass 500) Evrakları
        </h2>

        <ul className="space-y-3 text-slate-700">
          <li>✓ COE (Confirmation of Enrolment)</li>
          <li>✓ OSHC Sağlık Sigortası</li>
          <li>✓ Finansal Kanıt (Yaşam + Eğitim Masrafı)</li>
          <li>✓ İngilizce Dil Belgesi (IELTS/PTE)</li>
          <li>✓ Genuine Student Statement</li>
        </ul>
      </section>

      {/* RET UYARISI */}
      <section className="bg-red-50 border-2 border-red-500 p-10 rounded-3xl mb-20">
        <h2 className="text-2xl font-black text-red-800 mb-4">
          En Yaygın Ret Sebepleri
        </h2>

        <p className="text-red-700 leading-relaxed">
          Eksik finansal kanıt, zayıf Türkiye bağları ve
          yetersiz GTE açıklaması en sık ret nedenidir.
          Detaylı analiz için:
          <Link href="/avustralya-vize-reddi" className="underline font-bold ml-2">
            Avustralya Vize Reddi →
          </Link>
        </p>
      </section>

      {/* SİLO NAV */}
      <section className="border-t border-slate-200 pt-10 mb-20">
        <p className="text-xs uppercase tracking-widest text-slate-400 mb-6">
          Avustralya Vize Rehberleri
        </p>

        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <Link href="/avustralya-vize" className="hover:underline">
            Avustralya Vizesi →
          </Link>

          <Link href="/avustralya-vize-randevusu" className="hover:underline">
            Biometrik Süreç →
          </Link>

          <Link href="/avustralya-vize-reddi" className="hover:underline">
            Vize Reddi →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 rounded-3xl p-12 text-center text-white shadow-xl">
        <h2 className="text-3xl font-black mb-6">
          Evraklarınızı Profesyonel Kontrol Edelim
        </h2>

        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          PDF yükleme hataları ve eksik belgeler ret sebebidir.
          Dosyanızı başvuru öncesi analiz edelim.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/randevu"
            className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition"
          >
            Ön Kontrol Al
          </Link>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Avustralya%20vizesi%20evrak%20kontrol%C3%BC%20i%C3%A7in%20destek%20istiyorum."
            className="bg-emerald-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-emerald-700 transition"
          >
            WhatsApp Destek
          </a>
        </div>
      </section>

    </main>
  );
}
