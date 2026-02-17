import Link from "next/link";
export const metadata = {
  title: "Avustralya Vizesi 2026 | Turist, Öğrenci ve Çalışma Başvuru Rehberi",
  description:
    "Avustralya turist vizesi (Subclass 600), öğrenci ve çalışma vizeleri için 2026 güncel başvuru rehberi. Evrak listesi, biometrik süreç ve ret nedenleri.",
  keywords: [
    "avustralya vizesi",
    "avustralya turist vizesi",
    "avustralya subclass 600",
    "avustralya öğrenci vizesi",
    "avustralya vize reddi",
    "avustralya biometrik randevu"
  ],
  alternates: {
    canonical: "https://ayajourney.com/avustralya-vize"
  },
  openGraph: {
    title: "Avustralya Vizesi Başvuru Rehberi 2026",
    description:
      "Avustralya vizesi nasıl alınır? Evraklar, biometrik süreç ve ret nedenleri.",
    url: "https://ayajourney.com/avustralya-vize",
    type: "article"
  }
};

export default function AvustralyaVize() {
  return (
 <main className="max-w-6xl mx-auto px-6 py-16 text-slate-900">

      {/* HERO */}
      <header className="text-center mb-16">
        <span className="bg-emerald-50 text-emerald-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-100">
          Department of Home Affairs 2026
        </span>

        <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
          Avustralya Vizesi <br/>
          <span className="text-emerald-600 italic">Güncel Başvuru Rehberi</span>
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6 leading-relaxed">
          Avustralya turist vizesi (Subclass 600), öğrenci (Subclass 500) ve
          çalışma vizeleri için başvuru süreci tamamen online yürütülür.
          Güçlü dosya hazırlığı ret riskini doğrudan etkiler.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/avustralya-vize-evraklari"
            className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition"
          >
            Evrak Listesi
          </Link>

          <Link
            href="/avustralya-vize-randevusu"
            className="bg-white border border-slate-300 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition"
          >
            Biometrik Süreç
          </Link>
        </div>
      </header>


      {/* VİZE TÜRLERİ */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-10 text-center">
          Avustralya Vize Türleri
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <h3 className="font-bold text-xl mb-4">
              Turist Vizesi (Subclass 600)
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              3, 6 veya 12 aylık verilebilir. Banka hareketleri,
              Türkiye’ye geri dönüş bağları ve seyahat geçmişi kritik önemdedir.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <h3 className="font-bold text-xl mb-4">
              Öğrenci Vizesi (Subclass 500)
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              COE belgesi, finansal kanıt ve Genuine Temporary Entrant (GTE)
              değerlendirmesi yapılır.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <h3 className="font-bold text-xl mb-4">
              Çalışma Vizeleri
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sponsor destekli veya geçici çalışma kategorileri bulunur.
            </p>
          </div>

        </div>
      </section>


      {/* BAŞVURU ADIMLARI */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-10 text-center">
          Avustralya Vizesi Nasıl Alınır?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">

          {[
            "ImmiAccount Oluşturma",
            "Evrak Yükleme",
            "Biometrik Randevu",
            "Karar Süreci (4-8 Hafta)"
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200">
              <div className="text-3xl font-black text-emerald-200 mb-2">
                0{i+1}
              </div>
              <p className="font-semibold text-sm">{item}</p>
            </div>
          ))}

        </div>
      </section>


      {/* GTE DETAY */}
      <section className="bg-red-50 border-2 border-red-500 p-10 rounded-3xl mb-20">
        <h2 className="text-2xl font-black text-red-800 mb-4">
          Genuine Temporary Entrant (GTE) Nedir?
        </h2>

        <p className="text-red-700 leading-relaxed">
          Avustralya hükümeti başvuru sahibinin ülkeye geçici amaçla
          geldiğine ikna olmak ister. Finansal tutarsızlık,
          zayıf iş bağı veya yetersiz seyahat geçmişi ret sebebidir.
        </p>

        <Link
          href="/avustralya-vize-reddi"
          className="inline-block mt-4 font-bold underline"
        >
          Avustralya Vize Reddi Nedenlerini İnceleyin →
        </Link>
      </section>


      {/* FAQ SEO BOOST */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-10 text-center">
          Sık Sorulan Sorular
        </h2>

        <div className="space-y-4">

          <details className="p-6 border border-slate-200 rounded-xl">
            <summary className="font-bold cursor-pointer">
              Avustralya vizesi kaç günde çıkar?
            </summary>
            <p className="mt-3 text-sm text-slate-600">
              Ortalama 4–8 hafta arasında sonuçlanır. Yoğun dönemlerde
              bu süre uzayabilir.
            </p>
          </details>

          <details className="p-6 border border-slate-200 rounded-xl">
            <summary className="font-bold cursor-pointer">
              Avustralya vizesi mülakat var mı?
            </summary>
            <p className="mt-3 text-sm text-slate-600">
              Genellikle mülakat yoktur. Ancak ek belge talebi gelebilir.
            </p>
          </details>

        </div>
      </section>


      {/* SİLO NAV */}
      <section className="border-t border-slate-200 pt-10 mb-20">
        <p className="text-xs uppercase tracking-widest text-slate-400 mb-6">
          Avustralya Vize Rehberleri
        </p>

        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <Link href="/avustralya-vize-evraklari" className="hover:underline">
            Evrak Listesi →
          </Link>

          <Link href="/avustralya-vize-randevusu" className="hover:underline">
            Biometrik Randevu →
          </Link>

          <Link href="/avustralya-vize-reddi" className="hover:underline">
            Vize Reddi →
          </Link>
        </div>
      </section>


      {/* CTA */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-12 text-center text-white shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-black mb-6">
          Avustralya Dosyanızı Uzman Hazırlasın
        </h2>

        <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
          Subclass 600 ve öğrenci vizelerinde dosya kalitesi
          sonucu doğrudan etkiler. Risk analizli başvuru yapalım.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/randevu"
            className="bg-white text-emerald-700 px-12 py-5 rounded-2xl font-black text-xl hover:bg-emerald-50 transition"
          >
            Ücretsiz Ön Analiz
          </Link>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Avustralya%20vizesi%20i%C3%A7in%20destek%20almak%20istiyorum."
            className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition"
          >
            WhatsApp Destek
          </a>
        </div>
      </section>

    </main>
  );
}
