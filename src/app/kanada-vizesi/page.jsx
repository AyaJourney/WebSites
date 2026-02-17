import Link from "next/link";

export const metadata = {
  title: "Kanada Vizesi 2026 | Güncel Başvuru Rehberi, Evrak Listesi ve Ret Analizi",
  description:
    "Kanada turist vizesi (TRV), öğrenci ve çalışma izni başvuruları için 2026 güncel rehber. IRCC online sistem, biyometrik randevu ve vize reddi nedenleri detaylı anlatım.",
  keywords: [
    "kanada vizesi",
    "kanada turist vizesi",
    "kanada visitor visa",
    "kanada vize evrakları",
    "kanada biyometrik randevu",
    "kanada vize reddi nedenleri",
    "kanada gcms notu"
  ],
  alternates: {
    canonical: "https://ayajourney.com/kanada-vizesi"
  },
  openGraph: {
    title: "Kanada Vizesi Başvuru Rehberi 2026",
    description:
      "Kanada vizesi nasıl alınır? Evrak listesi, IRCC sistemi ve ret nedenleri.",
    url: "https://ayajourney.com/kanada-vizesi",
    type: "article"
  }
};

export default function KanadaVizesi() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-slate-900">

      {/* HERO */}
      <header className="text-center mb-16">
        <span className="bg-red-50 text-red-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-red-100">
          IRCC Resmi Başvuru Süreci 2026
        </span>

        <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
          Kanada Vizesi Nasıl Alınır? <br />
          <span className="text-red-600 italic">Güncel Başvuru Rehberi</span>
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6 leading-relaxed">
          Kanada turist vizesi (Visitor Visa – TRV), öğrenci ve çalışma izinleri için
          IRCC sistemine uygun, güçlü ve ikna edici başvuru dosyası hazırlama rehberi.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/kanada-vize-evraklari"
            className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition"
          >
            Kanada Vize Evrakları
          </Link>

          <Link
            href="/kanada-vize-randevusu"
            className="bg-white border border-slate-300 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition"
          >
            Biyometrik Randevu Süreci
          </Link>
        </div>
      </header>


      {/* VİZE TÜRLERİ */}
      <section className="grid md:grid-cols-3 gap-8 mb-20">

        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
          <h2 className="font-bold text-xl mb-4">Turist Vizesi (TRV)</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            6 aya kadar Kanada’da kalış hakkı sağlar. Banka hesap hareketleri,
            seyahat geçmişi ve Türkiye’ye güçlü bağlar kritik önem taşır.
          </p>
        </div>

        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
          <h2 className="font-bold text-xl mb-4">Öğrenci İzni (Study Permit)</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            DLI kabul mektubu, finansal yeterlilik ve eğitim planı gerektirir.
            IRCC değerlendirmesi detaylıdır.
          </p>
        </div>

        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
          <h2 className="font-bold text-xl mb-4">Çalışma İzni (Work Permit)</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            LMIA destekli veya açık çalışma izni kategorileri üzerinden başvuru yapılır.
          </p>
        </div>

      </section>


      {/* RET BLOĞU */}
      <section className="bg-red-50 border-2 border-red-500 p-10 rounded-3xl mb-20">
        <h2 className="text-2xl font-black text-red-800 mb-4">
          Kanada Vize Retlerinin En Yaygın Nedeni
        </h2>

        <p className="text-red-700 leading-relaxed">
          IRCC, başvuru sahibinin Kanada’da kalıcı kalma ihtimalini değerlendirir.
          Türkiye’ye dönüş bağları zayıf görünürse ret kararı verilebilir.
        </p>

        <div className="mt-4 flex flex-col gap-2 font-semibold">
          <Link href="/kanada-vize-reddi" className="underline">
            Kanada Vize Reddi Detaylı Analiz →
          </Link>

          <Link href="/vize-reddi-itiraz-rehberi" className="underline">
            Vize reddine nasıl itiraz edilir? →
          </Link>
        </div>
      </section>


      {/* BAŞVURU ADIMLARI */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-10 text-center">
          Kanada Vizesi Başvuru Adımları
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">

          {[
            "IRCC Online Hesap Açma",
            "Evrakların Dijital Yüklenmesi",
            "Biometrik Randevu (VFS)",
            "Değerlendirme ve Karar"
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200">
              <div className="text-3xl font-black text-red-200 mb-2">0{i+1}</div>
              <p className="font-semibold">{item}</p>
            </div>
          ))}

        </div>
      </section>

{/* STRONG CTA SECTION */}
<section className="bg-gradient-to-br from-red-600 to-rose-700 rounded-3xl p-12 text-center text-white shadow-2xl mb-20">
  
  <h2 className="text-3xl md:text-4xl font-black mb-6">
    Kanada Vizenizi Şansa Bırakmayın
  </h2>

  <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
    IRCC sistemi teknik değerlendirme yapar. Eksik finansal analiz,
    zayıf seyahat geçmişi veya hatalı form yüklemesi doğrudan ret sebebidir.
    Dosyanızı Kanada standartlarında profesyonelce hazırlayalım.
  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-6">

    <Link
      href="/randevu"
      className="bg-white text-red-700 px-12 py-5 rounded-2xl font-black text-xl hover:bg-red-50 transition shadow-xl"
    >
      Ücretsiz Dosya Analizi Al
    </Link>

    <a
      href="https://wa.me/905302199056?text=Merhaba%2C%20Kanada%20vizesi%20i%C3%A7in%20dosya%20analizi%20yapt%C4%B1rmak%20istiyorum."
      className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition shadow-lg"
    >
      WhatsApp Destek
    </a>

  </div>

  <p className="text-xs mt-8 text-red-200 uppercase tracking-widest">
    IRCC Uyumlu Profesyonel Başvuru Hazırlığı
  </p>

</section>

      {/* STRATEJİK SİLO NAV */}
      <section className="border-t border-slate-200 pt-10">
        <p className="text-xs uppercase tracking-widest text-slate-400 mb-6">
          Kanada Vize Rehberleri
        </p>

        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <Link href="/kanada-vize-evraklari" className="hover:underline">
            Kanada Vize Evrak Listesi →
          </Link>

          <Link href="/kanada-vize-randevusu" className="hover:underline">
            Kanada Biyometrik Randevu →
          </Link>

          <Link href="/kanada-vize-reddi" className="hover:underline">
            Kanada Vize Reddi Analizi →
          </Link>
        </div>
      </section>

    </main>
  );
}
