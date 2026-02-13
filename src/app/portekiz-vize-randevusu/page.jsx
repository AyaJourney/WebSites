import Head from "next/head";
import Link from "next/link";

export default function PortekizVizeRandevusu() {
  const adimlar = [
    {
      sayi: "01",
      baslik: "VFS Global Hesabı Oluşturun",
      detay: "Portekiz'in resmi aracı kurumu VFS Global üzerinden pasaport bilgilerinizle kayıt olun. 2026 itibarıyla iki aşamalı doğrulama (2FA) zorunludur."
    },
    {
      sayi: "02",
      baslik: "Vize Türünü Belirleyin",
      detay: "Turistik, Ticari veya Aile Ziyareti seçeneklerinden size uygun olanı seçin. D7/D8 gibi uzun süreli vizeler için süreç doğrudan konsolosluk sistemine bağlıdır."
    },
    {
      sayi: "03",
      baslik: "Slot Takibi ve Rezervasyon",
      detay: "Randevular genellikle hafta içi sabah saatlerinde güncellenir. Yoğun sezonda randevu bulamazsanız 'Premium Lounge' seçeneğini kontrol edin."
    },
    {
      sayi: "04",
      baslik: "Biyometrik Veri ve Mülakat",
      detay: "Randevu günü parmak izi verilir. Portekiz genellikle yüz yüze mülakat yapmasa da dosyanızın içeriğine göre sizi konsolosluğa çağırabilir."
    }
  ];

  return (
    <>
      <Head>
        <title>Portekiz Vize Randevusu 2026 | VFS Slot Açılış Takvimi</title>
        <meta
          name="description"
          content="Portekiz vize randevusu alma rehberi. VFS Global 2026 güncel randevu sistemi, slot bulma taktikleri ve VIP hizmetler hakkında bilgi."
        />
      </Head>

      <main className="max-w-5xl mx-auto px-6 py-16 font-sans text-slate-900">
        {/* Navigasyon */}
        <div className="mb-8">
          <Link href="/portekiz-vize" className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-2">
            ← Ana Sayfaya Dön
          </Link>
        </div>

        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Randevu <span className="text-blue-600">Süreci ve Taktikler</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            2026 yılında Portekiz vizesi için randevu bulmak, doğru zamanlama ve sistem takibi gerektirir. 
            İşte adım adım başvuru yol haritanız.
          </p>
        </header>

        {/* Adımlar Akışı */}
        <section className="relative space-y-8 mb-20">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-blue-100 hidden md:block"></div>
          {adimlar.map((adim, index) => (
            <div key={index} className="relative flex flex-col md:flex-row gap-8 items-start">
              <div className="z-10 bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg shadow-blue-200 shrink-0">
                {adim.sayi}
              </div>
              <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition w-full">
                <h3 className="text-2xl font-bold mb-3">{adim.baslik}</h3>
                <p className="text-slate-600 leading-relaxed">{adim.detay}</p>
              </div>
            </div>
          ))}
        </section>

        {/* İpucu Kartı */}
        <div className="bg-indigo-900 text-indigo-50 p-10 rounded-[3rem] mb-20 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
              <span className="text-3xl text-yellow-400">💡</span> Uzman Taktikleri (2026)
            </h3>
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="bg-indigo-800/50 p-4 rounded-xl">
                <strong>Erken Kontrol:</strong> Randevu slotları genellikle Salı ve Perşembe sabahları sistemde açılmaktadır.
              </li>
              <li className="bg-indigo-800/50 p-4 rounded-xl">
                <strong>Mobil Biyometrik:</strong> Randevu bulamazsanız, ek ücret karşılığında adresinize gelen mobil biyometrik hizmetini sorgulayın.
              </li>
              <li className="bg-indigo-800/50 p-4 rounded-xl">
                <strong>D7 ve Uzun Süreli:</strong> Bu vizeler için VFS yerine doğrudan Portekiz Konsolosluğu randevu sistemi (E-viza) kullanılabilir.
              </li>
              <li className="bg-indigo-800/50 p-4 rounded-xl">
                <strong>İptaller:</strong> Gece 00:00 - 02:00 arası iptal edilen randevular sisteme geri düşmektedir.
              </li>
            </ul>
          </div>
          {/* Dekoratif Arka Plan */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
        </div>

        {/* Alt Bilgi ve Yönlendirme */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-200 pt-12 gap-8">
          <div className="flex gap-8">
            <Link href="/portekiz-vize-evraklari" className="group">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Önceki Adım</p>
              <p className="font-black group-hover:text-blue-600 transition">Evrak Listesi →</p>
            </Link>
            <Link href="/portekiz-vize-reddi" className="group text-right">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Riskleri İnceleyin</p>
              <p className="font-black group-hover:text-red-600 transition">Vize Reddi Analizi →</p>
            </Link>
          </div>
          
          <div className="bg-amber-100 text-amber-900 px-6 py-3 rounded-full text-sm font-bold animate-pulse">
            ⚠️ 2026 Yaz Sezonu İçin Randevular Dolmak Üzere!
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