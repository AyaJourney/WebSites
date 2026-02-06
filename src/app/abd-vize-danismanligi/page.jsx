import React from "react";

// 1. Metadata: ABD vize danışmanlığı odaklı SEO
export const metadata = {
  title: "Profesyonel ABD Vize Danışmanlığı | 2026 Mülakat Hazırlığı",
  description: "Amerika vizesi mülakat teknikleri, DS-160 formu doldurma ve randevu öne çekme desteği. ABD vize danışmanlığında uzman kadro ile onay şansınızı artırın.",
  keywords: ["abd vize danışmanlığı", "amerika vize danışmanı", "abd vize mülakat soruları", "ds-160 formu danışmanlık", "abd vizesi nasıl alınır"],
  alternates: { canonical: "https://www.ayajourney.com/abd-vize-danismanligi" }
};

const ABDDanismanlikSayfasi = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">
      
      {/* Hero Section: Otorite ve Prestij */}
      <header className="text-center mb-20">
        <span className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
          U.S. Visa Specialist Services
        </span>
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter text-slate-900">
          Amerika Rüyası <br/>
          <span className="text-blue-600 italic">Mülakatta Başlar.</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
          ABD vizesi bir evrak savaşı değil, bir ikna sürecidir. DS-160 formunuzdaki en küçük detaydan, 
          mülakattaki vücut dilinize kadar tüm süreci <strong>AYA Journey</strong> uzmanlığıyla yönetiyoruz.
        </p>
      </header>

      {/* Neden Biz? (Value Propositions) */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {[
          { t: "DS-160 Analizi", d: "Formunuzu konsolosluk memurunun görmek istediği 'stratejik' dille dolduruyoruz.", icon: "✍️" },
          { t: "Mülakat Simülasyonu", d: "Karşınıza çıkabilecek zor soruları mülakat öncesi birlikte çalışıyoruz.", icon: "🎙️" },
          { t: "Randevu Takibi", d: "Aylar sonrasına verilen randevuları sistem takip yazılımlarımızla öne çekiyoruz.", icon: "📅" },
          { t: "Ret Analizi", d: "Daha önce ret aldıysanız, nedenini bulup yeni başvurunuzu hatasız kurguluyoruz.", icon: "🔍" }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h4 className="font-bold text-lg mb-3">{item.t}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
          </div>
        ))}
      </section>

      {/* Hizmet Süreç Akışı */}
      <section className="mb-24 bg-slate-50 p-12 rounded-[4rem] border border-slate-100">
        <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-tighter">Danışmanlık Sürecimiz Nasıl İşler?</h2>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-3xl flex items-center justify-center font-black text-2xl flex-shrink-0 shadow-lg shadow-blue-200">1</div>
            <div>
              <h4 className="text-xl font-bold mb-2 uppercase italic">Profil Değerlendirmesi</h4>
              <p className="text-slate-600 leading-relaxed">Mevcut iş, finansal durum ve seyahat geçmişinizi inceleyerek size özel bir strateji belirliyoruz. Eksik yanlarınızı başvurudan önce kapatıyoruz.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="bg-slate-900 text-white w-16 h-16 rounded-3xl flex items-center justify-center font-black text-2xl flex-shrink-0">2</div>
            <div>
              <h4 className="text-xl font-bold mb-2 uppercase italic">Form ve Randevu Yönetimi</h4>
              <p className="text-slate-600 leading-relaxed">DS-160 formunuzu 214(b) maddesi risklerini minimize ederek dolduruyor, vize ücretinizi yatırıp randevu takviminizi en kısa sürede netleştiriyoruz.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-3xl flex items-center justify-center font-black text-2xl flex-shrink-0 shadow-lg shadow-blue-200">3</div>
            <div>
              <h4 className="text-xl font-bold mb-2 uppercase italic">Birebir Mülakat Eğitimi</h4>
              <p className="text-slate-600 leading-relaxed">Konsolosluk memurunun sorması muhtemel soruları (Nereye gideceksiniz? Neden Amerika? Türkiye'ye neden döneceksiniz?) cevaplamanız için profesyonel eğitim veriyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABD Vize Türleri */}
      <section className="mb-24 px-8">
        <h2 className="text-3xl font-black mb-12 text-center">Hangi Amerika Vizesi Size Uygun?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 bg-white border-2 border-slate-100 rounded-[3rem] hover:border-blue-500 transition-colors">
            <h4 className="text-2xl font-black mb-4">B1/B2 Turistik & Ticari</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Turizm, iş toplantıları veya tıbbi tedavi amaçlı 10 yıllık vize başvuruları için tam destek.</p>
          </div>
          <div className="p-10 bg-white border-2 border-slate-100 rounded-[3rem] hover:border-blue-500 transition-colors">
            <h4 className="text-2xl font-black mb-4">F1 Öğrenci Vizesi</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Dil okulu, lisans veya yüksek lisans kabulleriniz sonrası I-20 belgesiyle yapılan profesyonel başvurular.</p>
          </div>
        </div>
      </section>

      {/* STRATEJİK CTA SECTION */}
      <section className="bg-blue-700 rounded-[3.5rem] p-16 text-center text-white relative shadow-2xl overflow-hidden border-b-8 border-blue-900">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter uppercase">Pasaportunuzda 10 Yıllık Amerika <br/>Vizesi Olsun İster misiniz?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            ABD vizesi almak sanıldığı kadar zor değil, sadece doğru bir strateji işidir. 
            On binlerce onaylı dosyamızın arasına sizinkini de ekleyelim.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://wa.me/905302199056" className="bg-white text-blue-700 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition transform hover:scale-105">
              Ücretsiz Ön Değerlendirme
            </a>
            <a href="/iletisim" className="bg-blue-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-black transition shadow-lg">
              Ofisimizden Randevu Al
            </a>
          </div>
        </div>
        {/* Dekoratif Yıldız ve Şerit Efekti */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none select-none">
          <div className="text-[30rem] absolute top-[-5rem] right-[-5rem]">🇺🇸</div>
        </div>
      </section>

    </main>
  );
};

export default ABDDanismanlikSayfasi;