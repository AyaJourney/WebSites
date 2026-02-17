import Link from "next/link";
export const metadata = {
  title: "Avustralya Vize Reddi 2026 | Ret Nedenleri ve İtiraz Rehberi",
  description:
    "Avustralya vize reddi neden olur? Genuine Temporary Entrant (GTE) redleri, finansal yetersizlik ve yanlış beyan hataları. Ret sonrası yeniden başvuru stratejisi.",
  keywords: [
    "avustralya vize reddi",
    "avustralya vize red nedenleri",
    "genuine temporary entrant reddi",
    "avustralya turist vizesi reddi",
    "avustralya subclass 600 reddi",
    "avustralya vize itiraz"
  ],
  alternates: {
    canonical: "https://ayajourney.com/avustralya-vize-reddi"
  },
  openGraph: {
    title: "Avustralya Vize Reddi Nedenleri",
    description:
      "GTE reddi nedir? Finansal yetersizlik ve risk değerlendirmesi.",
    url: "https://ayajourney.com/avustralya-vize-reddi",
    type: "article"
  }
};

export default function AvustralyaVizeReddi() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-slate-900">

      {/* HERO */}
      <header className="text-center mb-16">
        <span className="bg-red-50 text-red-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-red-100">
          Department of Home Affairs
        </span>

        <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
          Avustralya Vize Reddi <br />
          <span className="text-red-600 italic">Gerçek Nedenleri</span>
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6 leading-relaxed">
          Avustralya vize reddi çoğu zaman "risk değerlendirmesi"
          sonucudur. Gerçek red nedenini analiz etmeden yapılan
          ikinci başvurular genellikle tekrar ret ile sonuçlanır.
        </p>
      </header>

      {/* EN YAYGIN NEDENLER */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-10 text-center">
          Avustralya Vize Red Nedenleri
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <h3 className="font-bold text-lg mb-4 text-red-600">
              Genuine Temporary Entrant (GTE) Reddi
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Başvuru sahibinin Avustralya'da kalıcı kalma riski
              olduğu düşünülürse vize reddedilir.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <h3 className="font-bold text-lg mb-4 text-red-600">
              Finansal Yetersizlik
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Banka hesap hareketleri, gelir belgeleri ve
              sponsor kanıtları ikna edici değilse ret gelir.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <h3 className="font-bold text-lg mb-4 text-red-600">
              Yanlış / Eksik Beyan
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Formda verilen bilgiler ile belgeler çelişiyorsa
              sistem otomatik risk üretir.
            </p>
          </div>

        </div>
      </section>

      {/* KRİTİK ANALİZ */}
      <section className="bg-red-50 border-2 border-red-400 p-10 rounded-3xl mb-20">
        <h2 className="text-2xl font-black text-red-800 mb-4">
          En Kritik Madde: Genuine Temporary Entrant
        </h2>

        <p className="text-red-700 leading-relaxed">
          Avustralya, başvuru sahibinin Türkiye’ye geri döneceğine
          ikna olmak ister. Güçlü iş bağı, aile bağı ve mali bağ
          gösteremeyen dosyalar yüksek riskli sayılır.
        </p>
      </section>

      {/* RET SONRASI NE YAPILMALI */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-8 text-center">
          Avustralya Vize Reddi Sonrası Ne Yapılmalı?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          {[
            "Ret Mektubunu Teknik Analiz Et",
            "Risk Unsurlarını Düzelt",
            "Güçlü Niyet Mektubu Hazırla"
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200">
              <div className="text-3xl font-black text-red-200 mb-2">
                0{i+1}
              </div>
              <p className="font-semibold text-sm">{item}</p>
            </div>
          ))}

        </div>
      </section>

      {/* UYARI */}
      <section className="bg-slate-900 text-white p-12 rounded-3xl mb-20">
        <h2 className="text-2xl font-black mb-6">
          Aynı Dosya ile Yeniden Başvurmayın
        </h2>

        <p className="text-slate-300 leading-relaxed">
          Dosyanızda hiçbir değişiklik yapmadan tekrar başvurmak,
          sistemdeki risk skorunuzu artırır.
          Önce ret gerekçesini teknik olarak çözmek gerekir.
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

          <Link href="/avustralya-vize-randevusu" className="hover:underline">
            Randevu Süreci →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 rounded-3xl p-12 text-center text-white shadow-xl">
        <h2 className="text-3xl font-black mb-6">
          Avustralya Vize Reddi Aldınız mı?
        </h2>

        <p className="text-red-100 mb-8 max-w-2xl mx-auto">
          Ret mektubunuzu analiz edelim, risk puanınızı düşürelim
          ve ikinci başvurunuzu onay odaklı hazırlayalım.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/randevu"
            className="bg-white text-red-700 px-12 py-5 rounded-2xl font-black text-xl hover:bg-red-50 transition"
          >
            Dosyamı İncele
          </Link>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Avustralya%20vize%20reddi%20ald%C4%B1m%2C%20destek%20istiyorum."
            className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition"
          >
            WhatsApp Destek
          </a>
        </div>
      </section>

    </main>
  );
}
