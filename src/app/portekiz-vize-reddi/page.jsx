import Head from "next/head";
import Link from "next/link";

export default function PortekizVizeReddi() {
  const retNedenleri = [
    {
      id: "02",
      baslik: "Finansal Kanıt Yetersizliği",
      aciklama: "Hesabınızdaki paranın kaynağının belirsiz olması veya son dakika yatırılan yüklü miktarlar 2026'da en sık ret sebebidir.",
      cozum: "Gelirinizle orantılı, geçmişe dönük 3-6 aylık aktif bir hesap dökümü sunun."
    },
    {
      id: "08",
      baslik: "Seyahat Amacının Kanıtlanamaması",
      aciklama: "Otel rezervasyonlarının iptal edilmesi veya uçuş planının tutarsız olması şüphe uyandırır.",
      cozum: "Onaylı konaklama belgeleri ve detaylı bir şahsi dilekçe (Cover Letter) ekleyin."
    },
    {
      id: "10",
      baslik: "Dönüş Şüphesi (Bağların Zayıflığı)",
      aciklama: "Başvuru sahibinin ülkesine döneceğine dair yeterli mülkiyet, iş veya aile bağı gösterememesi.",
      cozum: "Üzerinize kayıtlı tapu, ruhsat, öğrenci belgesi veya iş yerinden alınan izin mektubunu güçlendirin."
    }
  ];

  return (
    <>
      <Head>
        <title>Portekiz Vize Reddi 2026 | Ret Maddeleri ve İtiraz Süreci</title>
        <meta
          name="description"
          content="Portekiz vize reddi sonrası ne yapılmalı? 2. madde, 8. madde ve 10. madde ret nedenleri, itiraz dilekçesi hazırlama ve 2026 güncel çözüm yolları."
        />
      </Head>

      <main className="max-w-5xl mx-auto px-6 py-16 font-sans">
        {/* Üst Bilgi */}
        <div className="mb-12">
          <Link href="/portekiz-vize" className="text-rose-600 hover:text-rose-700 font-bold flex items-center gap-2 transition">
           Portekiz Vizesi
          </Link>
        </div>

        <header className="mb-16">
          <div className="inline-block bg-rose-100 text-rose-700 px-4 py-1 rounded-lg text-sm font-bold mb-4">
            Analiz & Çözüm Merkezi
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Portekiz Vize <span className="text-rose-600">Reddi</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Vize reddi bir son değil, dosyanızdaki eksikleri tamamlamanız için bir geri bildirimdir. 
            2026 protokollerine göre süreci nasıl tersine çevirebileceğinizi inceleyin.
          </p>
        </header>

        {/* Ret Maddeleri Kartları */}
        <section className="grid gap-6 mb-20">
          {retNedenleri.map((item) => (
            <div key={item.id} className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-rose-200 transition-colors shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="bg-rose-50 text-rose-600 w-16 h-16 rounded-2xl flex flex-col items-center justify-center shrink-0">
                  <span className="text-xs font-bold uppercase">Madde</span>
                  <span className="text-2xl font-black">{item.id}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{item.baslik}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{item.aciklama}</p>
                  <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl text-sm border border-emerald-100">
                    <strong>💡 Çözüm Yolu:</strong> {item.cozum}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* İtiraz Süreci Paneli */}
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white mb-20 relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6">İtiraz mı Etmeli, <br/>Yeniden mi Başvurmalı?</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Portekiz Konsolosluğu'ndan gelen ret mektubuna karşı 15-30 gün içinde itiraz hakkınız bulunur. 
                Ancak belgelerinizde köklü bir hata varsa, yeni bir başvuru yapmak genellikle daha hızlı sonuç verir.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span>İtiraz dilekçesi Portekizce veya İngilizce olmalıdır.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span>Yeni başvuruda önceki reddin nedenleri tek tek çürütülmelidir.</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center">
              <h3 className="text-xl font-bold mb-4 italic">"Reddin en büyük düşmanı şeffaflıktır."</h3>
              <p className="text-sm text-slate-300">
                2026 yılındaki başvurularda yapay zeka sistemleri tüm Schengen geçmişinizi anlık tarar. 
                Bilgi gizlemek doğrudan kalıcı ret sebebidir.
              </p>
            </div>
          </div>
        </div>

        {/* Alt Navigasyon */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center py-10 border-t border-slate-100">
          <Link href="/portekiz-vize-evraklari" className="px-8 py-4 bg-slate-100 text-slate-700 rounded-2xl font-bold hover:bg-slate-200 transition">
            Evrak Listesini Kontrol Et
          </Link>
          <Link href="/portekiz-d7-vize" className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-100 transition">
            D7 Oturum Vizesi Şartları →
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
      </main>
    </>
  );
}