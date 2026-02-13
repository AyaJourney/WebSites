import Head from "next/head";
import Link from "next/link";

export default function PortekizVizeEvraklari() {
  const evrakGruplari = [
    {
      baslik: "Temel Kimlik Belgeleri",
      icon: "👤",
      liste: [
        "Pasaport (Son 10 yıl içinde alınmış, en az 2 boş sayfası olan)",
        "Varsa eski pasaportların işlenmiş sayfalarının fotokopileri",
        "2 adet Biyometrik Fotoğraf (35x45mm, son 6 ayda çekilmiş, beyaz fon)",
        "Nüfus Kayıt Örneği (E-devletten barkodlu, tüm aile üyelerini gösteren)",
      ],
    },
    {
      baslik: "Seyahat ve Konaklama",
      icon: "✈️",
      liste: [
        "Uçak Rezervasyonu (Gidiş-dönüş, PNR kodlu)",
        "Konaklama Kanıtı (Otel rezervasyonu veya Portekiz'den davetiye/Termo de Responsabilidade)",
        "30.000 € Teminatlı Seyahat Sağlık Sigortası (Tüm Schengen bölgesini kapsamalı)",
      ],
    },
    {
      baslik: "Finansal Durum (2026 Güncel)",
      icon: "💰",
      liste: [
        "Son 3 aylık Banka Hesap Dökümü (En az 150.000 - 200.000 TL bakiye önerilir)",
        "Banka imza sirküleri (Dökümü veren memurun imza yetkisi belgesi)",
        "Varsa Tapu, Ruhsat veya Ek Gelir (Kira sözleşmesi vb.) fotokopileri",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Portekiz Vize Evrakları 2026 | Güncel Liste ve Şartlar</title>
        <meta
          name="description"
          content="2026 Portekiz Schengen vizesi için gerekli tüm evraklar. Çalışan, işveren ve öğrenciler için güncel finansal yeterlilik belgeleri."
        />
      </Head>

      <main className="max-w-5xl mx-auto px-6 py-16 font-sans text-slate-900">
        {/* Breadcrumb / Geri Dönüş */}
        <div className="mb-8">
          <Link href="/portekiz-vize" className="text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-2">
            ← Portekiz Vize Rehberi'ne Dön
          </Link>
        </div>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Gerekli <span className="text-emerald-600">Evrak Listesi</span>
          </h1>
          <p className="text-lg text-slate-600">
            Başvurunuzun olumlu sonuçlanması için belgelerin eksiksiz, güncel ve 
            Portekiz Konsolosluğu standartlarına uygun olması kritiktir.
          </p>
        </header>

        {/* Evrak Grupları */}
        <section className="space-y-10 mb-16">
          {evrakGruplari.map((grup, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">{grup.icon}</span>
                <h3 className="text-2xl font-bold">{grup.baslik}</h3>
              </div>
              <ul className="grid md:grid-cols-1 gap-4">
                {grup.liste.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="text-emerald-500 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Mesleki Duruma Göre Ek Belgeler */}
        <div className="bg-slate-900 text-white p-10 rounded-3xl mb-16 shadow-xl">
          <h3 className="text-2xl font-bold mb-6">Mesleki Duruma Göre Ek Belgeler</h3>
          <div className="grid md:grid-cols-2 gap-8 text-slate-300">
            <div className="border-l-2 border-emerald-500 pl-6">
              <h4 className="text-white font-bold mb-2 text-lg">SGK'lı Çalışanlar</h4>
              <p className="text-sm">İşe giriş bildirgesi, son 3 aylık imzalı maaş bordrosu, faaliyet belgesi.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-6">
              <h4 className="text-white font-bold mb-2 text-lg">İşverenler / Şirket Sahipleri</h4>
              <p className="text-sm">Vergi levhası (güncel), imza sirküleri, ticaret sicil gazetesi fotokopisi.</p>
            </div>
          </div>
        </div>

        {/* Özel Durum Kartı */}
        <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-3xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black mb-2 text-emerald-800">
              Uzun Süreli mi Kalacaksınız?
            </h3>
            <p className="text-emerald-700 opacity-90">
              D7 Vizesi (Pasif Gelir) için Portekiz'de banka hesabı ve NIF numarası gibi ek şartlar aranmaktadır.
            </p>
          </div>
          <Link href="/portekiz-d7-vize" className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition flex-shrink-0">
            D7 Vizesi Detayları →
          </Link>
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
        {/* Alt Navigasyon */}
        <nav className="flex flex-wrap gap-4 py-8 border-t border-slate-100">
          <Link href="/portekiz-vize-randevusu" className="text-slate-500 hover:text-slate-900 transition font-medium">
            Sıradaki Adım: Randevu Süreci →
          </Link>
        </nav>

      </main>
    </>
  );
}