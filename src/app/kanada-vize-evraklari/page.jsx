import Link from "next/link";
export const metadata = {
  title: "Kanada Vize Evrakları 2026 | Güncel TRV Belge Listesi",
  description:
    "Kanada turist vizesi (TRV) için gerekli evraklar 2026 güncel liste. Banka hesap tutarı, IMM formları, biyometrik randevu ve meslek gruplarına göre belgeler.",
  keywords: [
    "kanada vize evrakları",
    "kanada turist vizesi belgeleri",
    "kanada visitor visa evrak listesi",
    "kanada banka hesap tutarı",
    "kanada biometrik randevu",
    "kanada IMM 5257"
  ],
  alternates: {
    canonical: "https://ayajourney.com/kanada-vize-evraklari"
  },
  openGraph: {
    title: "Kanada Vize Evrakları 2026",
    description:
      "Kanada vizesi için gerekli belgeler, banka hesap şartları ve biyometrik süreci.",
    url: "https://ayajourney.com/kanada-vize-evraklari",
    type: "article"
  }
};

export default function KanadaVizeEvraklari() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-slate-900">

      {/* HERO */}
      <header className="text-center mb-16">
        <span className="bg-red-50 text-red-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-red-100">
          IRCC Güncel Evrak Listesi 2026
        </span>

        <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
          Kanada Vize Evrakları <br />
          <span className="text-red-600 italic">Tam Liste</span>
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6 leading-relaxed">
          Kanada turist vizesi (Visitor Visa – TRV) başvurusu için gerekli tüm
          belgeler, finansal kanıtlar ve IRCC sistemine yükleme detaylarını
          eksiksiz hazırlayın.
        </p>
      </header>

      {/* TEMEL BELGELER */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-8">
          Zorunlu Kanada Vize Belgeleri
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <ul className="space-y-3 text-slate-700">
            <li>• Geçerli pasaport (seyahat sonrası en az 6 ay geçerli)</li>
            <li>• Dijital biyometrik fotoğraf</li>
            <li>• Online başvuru formu (IMM 5257)</li>
            <li>• Aile bilgi formu (IMM 5645)</li>
            <li>• Niyet mektubu (Letter of Explanation)</li>
          </ul>

          <ul className="space-y-3 text-slate-700">
            <li>• Banka hesap dökümü (son 6 ay, kaşeli)</li>
            <li>• Maaş bordroları veya gelir belgeleri</li>
            <li>• SGK hizmet dökümü</li>
            <li>• Çalışma yazısı veya şirket evrakları</li>
            <li>• Seyahat planı (uçuş & konaklama)</li>
          </ul>

        </div>
      </section>

      {/* FİNANSAL KANIT */}
      <section className="bg-slate-50 p-10 rounded-3xl border border-slate-100 mb-20">
        <h2 className="text-2xl font-black mb-6">
          Kanada Vizesi İçin Bankada Ne Kadar Para Olmalı?
        </h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          IRCC sabit bir tutar belirtmez. Ancak seyahat süresine göre
          masrafları karşılayabileceğinizi göstermeniz gerekir.
        </p>

        <ul className="space-y-2 text-slate-700">
          <li>• 7–10 günlük seyahat için ortalama 4.000 – 6.000 CAD karşılığı bakiye</li>
          <li>• Düzenli gelir akışı</li>
          <li>• Açıklanamayan toplu para girişleri olmamalı</li>
        </ul>

        <p className="mt-6 text-sm text-slate-500">
          Finansal zayıflık, en yaygın ret nedenlerinden biridir.
          <Link href="/kanada-vize-reddi-nedenleri" className="font-semibold underline ml-1">
            Ret sebeplerini inceleyin →
          </Link>
        </p>
      </section>

      {/* MESLEK GRUBUNA GÖRE EVRAK */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-10">
          Meslek Durumuna Göre Ek Belgeler
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 bg-white border border-slate-200 rounded-2xl">
            <h3 className="font-bold mb-4">Çalışanlar</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• İşveren yazısı</li>
              <li>• Son 3 ay maaş bordrosu</li>
              <li>• SGK dökümü</li>
            </ul>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl">
            <h3 className="font-bold mb-4">Şirket Sahipleri</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Vergi levhası</li>
              <li>• Faaliyet belgesi</li>
              <li>• Ticaret sicil gazetesi</li>
            </ul>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl">
            <h3 className="font-bold mb-4">Öğrenciler</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Öğrenci belgesi</li>
              <li>• Sponsor dilekçesi</li>
              <li>• Sponsor banka dökümü</li>
            </ul>
          </div>

        </div>
      </section>

      {/* BİYOMETRİK */}
      <section className="mb-20 bg-red-50 border border-red-200 p-10 rounded-3xl">
        <h2 className="text-2xl font-black text-red-800 mb-6">
          Kanada Biometrik Randevu
        </h2>

        <p className="text-red-700 leading-relaxed">
          Online başvurudan sonra 30 gün içinde biyometrik (parmak izi) 
          randevusuna gitmeniz gerekir. Randevu süreci hakkında detaylar için:
        </p>

        <Link
          href="/kanada-vize-randevusu-nasil-alinir"
          className="inline-block mt-4 font-bold underline text-red-800"
        >
          Kanada Randevu Rehberi →
        </Link>
      </section>

      {/* SİLO NAV */}
      <section className="border-t border-slate-200 pt-10">
        <p className="text-xs uppercase tracking-widest text-slate-400 mb-6">
          Kanada Vize Rehberi
        </p>

        <div className="flex flex-wrap gap-6 text-sm font-semibold">
          <Link href="/kanada-vizesi" className="hover:underline">
            Kanada Vizesi →
          </Link>

          <Link href="/kanada-vize-randevusu-nasil-alinir" className="hover:underline">
            Kanada Randevu →
          </Link>

          <Link href="/kanada-vize-reddi-nedenleri" className="hover:underline">
            Kanada Vize Reddi →
          </Link>
        </div>
      </section>

    </main>
  );
}
