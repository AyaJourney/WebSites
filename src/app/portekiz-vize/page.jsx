import Head from "next/head";
import Link from "next/link";

export default function PortekizVize() {
  return (
    <>
      <Head>
        <title>Portekiz Vize Rehberi 2026 | Schengen, D7 ve Dijital Göçebe</title>
        <meta
          name="description"
          content="2026 Portekiz vize başvurusu için güncel rehber. D7 pasif gelir (920€) ve D8 dijital göçebe (3.680€) şartları, gerekli evraklar ve VFS randevu süreci."
        />
        <meta
          name="keywords"
          content="portekiz vize 2026, portekiz d7 vizesi şartları, portekiz dijital göçebe vizesi, vfs global portekiz randevu"
        />
        <link rel="canonical" href="https://www.siteadresin.com/portekiz-vize" />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">
        {/* Header Bölümü */}
        <header className="text-center mb-20">
          <span className="bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-emerald-200">
            Avrupa'nın Kapısı: Portekiz
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            Portekiz Vize <span className="text-emerald-600">Rehberi 2026</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Schengen vizesinden D7 emeklilik vizesine kadar tüm süreçler, 2026 asgari ücret 
            güncellemeleriyle yeniden yapılandırıldı. İşte bilmeniz gereken her şey.
          </p>
        </header>

        {/* Hızlı Bilgi Kartları (2026 Güncel Veriler) */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-500 uppercase text-xs mb-2">Schengen Harcı</h4>
            <p className="text-3xl font-black text-slate-800">90 €</p>
            <p className="text-sm text-slate-500 mt-2">Kısa süreli turistik vizeler için.</p>
          </div>
          <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
            <h4 className="font-bold text-emerald-600 uppercase text-xs mb-2">D7 Gelir Şartı</h4>
            <p className="text-3xl font-black text-emerald-800">920 € / Ay</p>
            <p className="text-sm text-emerald-600 mt-2">Pasif gelir (Kira, Emeklilik vb.)</p>
          </div>
          <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100">
            <h4 className="font-bold text-blue-600 uppercase text-xs mb-2">D8 (Dijital Göçebe)</h4>
            <p className="text-3xl font-black text-blue-800">3.680 € / Ay</p>
            <p className="text-sm text-blue-600 mt-2">Uzaktan çalışma geliri şartı.</p>
          </div>
        </div>

        {/* Ana Kategoriler */}
        <section className="grid md:grid-cols-2 gap-8 mb-24">
          <Link href="/portekiz-vize-evraklari" className="group p-10 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <h3 className="text-2xl font-black mb-4">Gerekli Evraklar</h3>
            <p className="text-slate-600 leading-relaxed">
              2026 yılı güncel banka dökümü, konaklama kanıtı ve biyometrik fotoğraf standartları.
            </p>
          </Link>

          <Link href="/portekiz-vize-randevusu" className="group p-10 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-2xl font-black mb-4">VFS Global Randevu</h3>
            <p className="text-slate-600 leading-relaxed">
              Ankara, İstanbul ve İzmir merkezlerinden randevu alma ipuçları ve bekleme süreleri.
            </p>
          </Link>

          <Link href="/portekiz-d7-vize" className="group p-10 bg-emerald-600 rounded-3xl shadow-xl hover:shadow-emerald-200 hover:-translate-y-1 transition-all duration-300 text-white md:col-span-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-3xl font-black mb-4">Portekiz D7 Vizesi & Oturum İzni</h3>
                <p className="text-emerald-50 text-lg max-w-2xl">
                  Portekiz'de yaşamak isteyenler için en avantajlı vize. Emekliler ve pasif gelir sahipleri için 2026 başvuru rehberi.
                </p>
              </div>
              <div className="mt-8 md:mt-0 bg-white text-emerald-700 px-8 py-4 rounded-2xl font-bold">
                Detayları İncele →
              </div>
            </div>
          </Link>
        </section>

        {/* Uyarı Bölümü */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-bold text-amber-800 uppercase tracking-wider">Önemli Not</h3>
              <p className="mt-2 text-amber-700 leading-relaxed">
                Portekiz Konsolosluğu, 2026 itibarıyla konaklama belgelerinde "onaylı kira kontratı" veya "othel rezervasyonu" detaylarını daha sıkı incelemektedir. Sahte rezervasyonlar doğrudan 10 yıllık vize reddine yol açabilir.
              </p>
            </div>
          </div>
        </div>
        {/* Ortak CTA Bölümü */}
<section className="mt-24 mb-12">
  <div className="bg-gradient-to-br from-emerald-600 to-blue-700 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
    {/* Arka Plan Deseni */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-400/20 rounded-full -ml-10 -mb-10 blur-2xl"></div>

    <div className="relative z-10 max-w-3xl">
      <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
        Portekiz Hayalinizi <br />
        <span className="text-emerald-300">Birlikte Planlayalım</span>
      </h2>
      <p className="text-lg md:text-xl text-emerald-50/90 mb-10 leading-relaxed">
        2026 vize prosedürleri karmaşık görünebilir. Doğru evrak takibi, 
        hatasız randevu alımı ve profesyonel dosya hazırlığı ile reddedilme 
        riskini minimize edin.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/iletisim" 
          className="bg-white text-blue-700 px-10 py-5 rounded-2xl font-black text-center hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-xl"
        >
          Ücretsiz Ön Danışmanlık Al
        </Link>
        <Link 
          href="/portekiz-d7-vize" 
          className="bg-blue-800/40 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-center hover:bg-white/20 transition-all"
        >
          D7 Oturum Vizesi Rehberi
        </Link>
      </div>

      <div className="mt-10 flex items-center gap-6 text-sm text-emerald-100/80">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          2026 Güncel Mevzuat
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          %98 Başvuru Başarısı
        </div>
      </div>
    </div>
  </div>
  
  <p className="text-center text-slate-400 text-sm mt-8">
    Resmi başvuru merkezi değildir. Bilgilendirme amaçlı hazırlanmıştır.
  </p>
</section>
      </main>
    </>
  );
}