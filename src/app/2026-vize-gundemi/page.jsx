import Link from "next/link";

export const metadata = {
  title: "2026 Vize Gündemi | Schengen, ABD, İngiltere ve Kanada Güncel Değişiklikler",
  description:
    "2026 vize gündemi: Schengen randevu krizi, ABD 214B ret oranları, İngiltere finansal kriterleri, Kanada GCMS süreci ve yeni uygulamalar. Güncel vize haberleri ve analizler.",
  keywords: [
    "2026 vize gündemi",
    "schengen vize 2026",
    "abd vize değişiklikleri",
    "ingiltere vize kuralları 2026",
    "kanada vize ret oranı",
    "vize randevu krizi",
    "güncel vize haberleri"
  ],
  alternates: {
    canonical: "https://ayajourney.com/2026-vize-gundemi"
  },
  openGraph: {
    title: "2026 Vize Gündemi – Tüm Güncel Değişiklikler",
    description:
      "2026 yılında vize sistemlerinde neler değişti? Schengen, ABD, İngiltere ve Kanada için güncel analiz.",
    url: "https://ayajourney.com/2026-vize-gundemi",
    type: "article"
  }
};

export default function VizeGundemi2026() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-slate-900">

      {/* HERO */}
      <header className="text-center mb-16">
        <span className="bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
          Güncel Analiz & Sistem Değişiklikleri
        </span>

        <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
          2026 Vize Gündemi <br/>
          <span className="text-blue-600 italic">Tüm Güncel Değişiklikler</span>
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6 leading-relaxed">
          2026 yılında Schengen, ABD, İngiltere ve Kanada vize süreçlerinde
          önemli değişiklikler yaşandı. Randevu krizi, ret oranları ve yeni
          finansal kriterleri sizin için analiz ettik.
        </p>
      </header>

      {/* TREND KONULAR */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-10 text-center">
          2026’da En Çok Aranan Vize Konuları
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <h3 className="font-bold text-xl mb-4">
              Schengen Randevu Krizi Devam Ediyor mu?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              2026 itibariyle VFS ve iData sistemlerinde slot bulma
              sorunu hala sürüyor. Özellikle Fransa, Almanya ve Hollanda
              başvurularında yoğunluk yüksek.
            </p>

            <Link href="/schengen-vizesi" className="font-bold underline mt-3 inline-block">
              Schengen rehberine git →
            </Link>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <h3 className="font-bold text-xl mb-4">
              ABD 214B Ret Oranı Arttı mı?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              214B maddesi kapsamında verilen retlerde finansal
              tutarlılık ve bağ analizi daha sıkı inceleniyor.
            </p>

            <Link href="/amerika-vize-reddi-nedenleri" className="font-bold underline mt-3 inline-block">
              ABD ret analizine git →
            </Link>
          </div>

        </div>
      </section>

      {/* ÜLKE ANALİZ BLOKLARI */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-10 text-center">
          2026 Ülke Bazlı Vize Güncellemeleri
        </h2>

        <div className="space-y-10">

          <div>
            <h3 className="text-2xl font-bold mb-3">
              🇪🇺 Schengen Bölgesi
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Multi vize verme oranı düştü. İlk başvurularda tek girişli
              vize oranı arttı. Banka hareketleri ve seyahat geçmişi
              daha detaylı inceleniyor.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">
              🇺🇸 Amerika Birleşik Devletleri
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Mülakat soruları bağ odaklı. Özellikle yeni işe başlayanlar
              ve düşük gelir grubu başvurularında ret oranı yükseldi.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">
              🇬🇧 İngiltere
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Finansal kaynak açıklaması en kritik konu. Açıklanamayan
              nakit girişleri doğrudan ret sebebi oluyor.
            </p>

            <Link href="/ingiltere-vizesi" className="underline font-semibold">
              İngiltere rehberini inceleyin →
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">
              🇨🇦 Kanada
            </h3>
            <p className="text-slate-600 leading-relaxed">
              GCMS notu talebi artıyor. IRCC değerlendirmelerinde
              seyahat geçmişi ve bağ analizi daha agresif hale geldi.
            </p>

            <Link href="/kanada-vizesi" className="underline font-semibold">
              Kanada rehberine git →
            </Link>
          </div>

        </div>
      </section>


      {/* 2026 TRENDLER */}
      <section className="bg-blue-50 p-12 rounded-3xl mb-20 border border-blue-100">
        <h2 className="text-3xl font-black mb-6">
          2026 Vize Trendleri
        </h2>

        <ul className="space-y-3 text-slate-700 font-medium">
          <li>• Finansal şeffaflık en kritik kriter haline geldi.</li>
          <li>• Seyahat geçmişi olmayan başvurular daha riskli görülüyor.</li>
          <li>• Online başvuru sistemleri daha sık belge talep ediyor.</li>
          <li>• Ret sonrası yeniden başvurularda analiz zorunlu hale geldi.</li>
        </ul>
      </section>


      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-black mb-6">
          2026’da Vize Riskinizi Test Edelim
        </h2>

        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Güncel sistem değişikliklerine göre dosyanızı analiz edelim.
          Ret riskinizi minimize edelim.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/vize-alma-ihtimalinizi-olcun"
            className="bg-white text-blue-700 px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition"
          >
            Ücretsiz Vize Testi
          </Link>

          <Link
            href="/randevu"
            className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition"
          >
            Uzman Analizi Al
          </Link>
        </div>
      </section>

    </main>
  );
}
