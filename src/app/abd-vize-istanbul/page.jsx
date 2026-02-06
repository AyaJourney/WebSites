import React from "react";

// 1. Metadata: İstanbul ve İstinye odaklı yerel SEO
export const metadata = {
  title: "ABD Vizesi İstanbul Başvuru ve Mülakat Rehberi | 2026",
  description: "ABD İstanbul Başkonsolosluğu vize mülakatı hakkında her şey. İstinye yerleşkesi ulaşım, mülakat hazırlığı ve İstanbul'da randevu öne çekme desteği.",
  keywords: ["abd vize istanbul", "amerika başkonsolosluğu istanbul vize randevusu", "istinye amerika vizesi mülakat", "sarıyer abd başkonsolosluğu ulaşım"],
  alternates: { canonical: "https://www.ayajourney.com/abd-vize-istanbul" }
};

const ABDIstanbulSayfasi = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">
      
      {/* Header: İstanbul'un Görkemli ve Kaotik Havası */}
      <header className="text-center mb-16">
        <span className="bg-red-50 text-red-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-red-100">
          U.S. Consulate General Istanbul - Local Guide
        </span>
        <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
          İstanbul ABD <br/>
          <span className="text-red-600 italic">İstinye Mülakat Rehberi</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          İstinye'nin tepesindeki o meşhur kaleye davetlisiniz. Randevu gününden önce 
          İstanbul'un trafik ve güvenlik dinamiklerine hakim olun.
        </p>
      </header>

      {/* Konsolosluk Bilgileri ve Ulaşım Stratejisi */}
      <section className="grid md:grid-cols-2 gap-12 mb-24 items-center">
        <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 italic text-red-500">
            <span className="text-3xl text-white">📍</span> İstinye Yerleşkesi
          </h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Sarıyer, İstinye yokuşunda yer alan Başkonsolosluk, Türkiye'nin en yoğun vize işlem merkezidir.
          </p>
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 mb-6">
            <p className="font-mono text-sm uppercase text-red-400 mb-2 tracking-widest text-xs">Açık Adres:</p>
            <p className="font-bold text-sm">Poligon, Poligon Cd. No:75, 34460 Sarıyer/İstanbul</p>
          </div>
          <div className="space-y-3">
             <div className="flex items-center gap-3 text-xs text-slate-400">
               <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> Hafta içi: 08:00 – 16:30
             </div>
             <div className="flex items-center gap-3 text-xs text-slate-400">
               <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> Telefon: +90 212 335 90 00
             </div>
          </div>
          {/* Dekoratif Boğaz Esintisi */}
          <div className="absolute -bottom-10 -right-10 text-[10rem] opacity-5 pointer-events-none">⚓</div>
        </div>
        
        <div className="space-y-8">
          <h3 className="text-3xl font-black tracking-tight">İstanbul Mülakatı İçin Lojistik Tüyolar</h3>
          <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-bold text-red-600 mb-2 uppercase text-xs tracking-widest">Trafik ve Ulaşım</h5>
            <p className="text-slate-600 text-sm italic">Metroyu (M2 Hattı - İTÜ Ayazağa Durağı) tercih edip sonrasında taksi kullanmak, sabah trafiğinde mülakata gecikmenizi önler.</p>
          </div>
          <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-bold text-red-600 mb-2 uppercase text-xs tracking-widest">Güvenlik ve Emanet</h5>
            <p className="text-slate-600 text-sm italic">Konsolosluk çevresindeki özel işletmeler (kırtasiye/kafe) emanet kabul etse de, mümkünse değerli eşyalarınızı yanınızda getirmeyin.</p>
          </div>
          <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-bold text-red-600 mb-2 uppercase text-xs tracking-widest">Otopark Sorunu</h5>
            <p className="text-slate-600 text-sm italic">Konsolosluğun hemen önünde otopark yoktur; araçla geliyorsanız sokak aralarında yer bulmak vaktinizi alabilir.</p>
          </div>
        </div>
      </section>

      {/* İstanbul'a Özel Danışmanlık */}
      <section className="mb-24 px-12 py-16 bg-red-50 rounded-[4rem] text-center border border-red-100 relative overflow-hidden">
        <h2 className="text-3xl font-black mb-6 relative z-10">İstanbul Mülakat Simülasyonu</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
          İstanbul Başkonsolosluğu'ndaki vize memurlarının hızı ve dinamizmi Ankara'dan farklıdır. 
          Kısa ve net cevaplarla mülakatı nasıl yöneteceğinizi İstinye tecrübemizle size öğretiyoruz.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-red-800 font-bold italic relative z-10">
          <span>#İstinyeOnay</span>
          <span>#HızlıMülakat</span>
          <span>#İstanbulStratejisi</span>
        </div>
      </section>

      {/* STRATEJİK CTA SECTION */}
      <section className="bg-slate-900 rounded-[3.5rem] p-12 text-center text-white relative shadow-2xl overflow-hidden border-t-8 border-red-600">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tight uppercase">AYA Journey İle İstinye'den Gülerek Çıkın</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-light">
            İstanbul'un yoğun randevu trafiğinde kaybolmayın. Randevu öne çekme ve 
            İstanbul'a özel mülakat eğitimiyle yanınızdayız.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://wa.me/905302199056" className="bg-red-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition transform hover:scale-105">
               İstanbul İçin Destek Al
            </a>
            <a href="/iletisim" className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition shadow-lg">
              Ofis Randevusu
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ABDIstanbulSayfasi;