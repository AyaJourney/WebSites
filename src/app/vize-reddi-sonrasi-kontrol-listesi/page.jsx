import React from "react";

// 1. Metadata: "Vize reddi sonrası" ve "Checklist" odaklı SEO
export const metadata = {
  title: "Vize Reddi Aldıysanız Bunları Kontrol Edin | Uzman Rehberi 2026",
  description: "Vize reddi sonrası izlenmesi gereken adımlar. Red maddeleri nasıl analiz edilir? İtiraz mı edilmeli, yeni başvuru mu yapılmalı? İşte 7 maddelik kontrol listesi.",
  keywords: ["vize reddi sonrası ne yapmalı", "vize reddi kontrol listesi", "vize reddi itiraz süresi", "vize reddi analiz", "schengen reddi çözümü"],
  alternates: { canonical: "https://www.ayajourney.com/vize-reddi-sonrasi-kontrol-listesi" }
};

const VizeReddiKontrolSayfasi = () => {
  const adimlar = [
    {
      t: "Red Mektubundaki Maddeleri Not Edin",
      d: "Genellikle 8, 9 veya 10. maddeler işaretlenir. Bu maddeler vize memurunun 'resmi' gerekçesidir. Hangi kutucuğun işaretli olduğunu kesinleştirin."
    },
    {
      t: "Banka Hesap Hareketlerinizi İnceleyin",
      d: "Son 3 ayda hesabınıza yatan toplu paralar veya kaynağı belirsiz girişler var mı? Memurlar genellikle bu hareketleri 'borç para' olarak yorumlar."
    },
    {
      t: "Mesleki Belgelerinizin Güncelliği",
      d: "Şirket faaliyet belgeniz veya oda kayıt belgeniz 3 aydan eski miydi? e-devlet barkodlarının süresi dolmuş olabilir mi?"
    },
    {
      t: "Otel ve Uçak Rezervasyonlarını Sorgulayın",
      d: "Başvurunuz incelemedeyken otel rezervasyonunuz iptal edildi mi? Konsolosluklar artık 'iptal-iade edilebilir' rezervasyonları anlık kontrol ediyor."
    },
    {
      t: "Sponsorun Durumunu Gözden Geçirin",
      d: "Sponsorlu bir başvuruda, sponsorun gelir belgeleri sizin seyahat maliyetinizi karşılayacak kadar şeffaf mıydı?"
    },
    {
      t: "İtiraz Süresini Kaçırmayın",
      d: "Schengen ülkeleri için genellikle 1 aylık itiraz süreniz vardır. Bu süreyi geçirdiyseniz tek çareniz yeni bir başvurudur."
    },
    {
      t: "Mülakat Cevaplarınızı Hatırlayın",
      d: "Eğer mülakata girdiyseniz (ABD gibi), verdiğiniz bir cevabın formdaki bilgilerle çelişip çelişmediğini düşünün."
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">
      
      {/* Hero Section */}
      <header className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-rose-100">
            <span className="w-2 h-2 bg-rose-600 rounded-full animate-pulse"></span>
            Acil Durum Rehberi
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
          Vize Reddi Sonrası <br/>
          <span className="text-slate-500 italic">7 Maddelik Kontrol Listesi</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Red aldığınız an her şey bitmiş değildir. Sakin olun ve profesyonel ekibimiz tarafından hazırlanan 
          bu teknik kontrol listesini uygulayarak hatanın nerede olduğunu bulun.
        </p>
      </header>

      {/* Checklist Grid */}
      <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        {adimlar.map((step, i) => (
          <div key={i} className="flex gap-6 p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all group">
            <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-rose-600 transition-colors">
              {i + 1}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-slate-800 tracking-tight">{step.t}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.d}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Kritik Bilgi Paneli */}
      <div className="bg-slate-900 text-white p-12 rounded-[3.5rem] mb-24 relative overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6">İtiraz mı, <br/>Yeni Başvuru mu?</h2>
            <p className="text-slate-400 leading-relaxed italic">
              "Çoğu başvuru sahibi hatayı itirazda arar, ancak bazen dosyadaki hata o kadar büyüktür ki 
              itiraz etmek zaman kaybıdır. Biz, hangi yolun sizin için en hızlı ve güvenli olduğunu 
              analiz ediyoruz."
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h4 className="font-bold text-rose-400 mb-4 tracking-widest uppercase text-xs text-center">Analiz İstatistiklerimiz</h4>
            <div className="space-y-4">
              <div className="flex justify-between text-sm italic"><span>Hata Tespiti Oranı</span><span className="font-bold">%98</span></div>
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden"><div className="bg-rose-500 h-full w-[98%]"></div></div>
              <div className="flex justify-between text-sm italic"><span>İkinci Başvuru Onay Oranı</span><span className="font-bold">%92</span></div>
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden"><div className="bg-blue-500 h-full w-[92%]"></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-br from-rose-600 to-rose-800 rounded-[3rem] p-12 text-center text-white shadow-2xl relative">
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase">Hatanızı Biz Bulalım</h2>
        <p className="text-rose-100 text-lg mb-10 max-w-2xl mx-auto font-light">
          Red kağıdınızdaki maddeler kafa karıştırıcı olabilir. Uzman ekibimiz dosyanızı 
          baştan sona tarasın ve vizenizi nasıl kurtaracağımızı size ücretsiz anlatsın.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="https://wa.me/905302199056" className="bg-white text-rose-700 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition transform hover:scale-105">
            Analiz İçin WhatsApp
          </a>
          <a href="/iletisim" className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition">
            Ofisten Destek Al
          </a>
        </div>
      </section>

    </main>
  );
};

export default VizeReddiKontrolSayfasi;