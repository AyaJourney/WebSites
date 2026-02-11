import React from "react";

// 1. Metadata: Kanada vize reddi aramalarında "GCMS Notu" ve "ATIP" anahtar kelimelerini hedefliyoruz
export const metadata = {
  title: "Kanada Vize Reddi Nedenleri 2026 | GCMS Notu ve İtiraz Çözümü",
  description: "Kanada vize reddi nedenleri, ATIP/GCMS notu istemi ve teknik analiz. Kanada vizesi neden reddedilir? Profesyonel çözüm ve yeniden başvuru stratejileri.",
  keywords: ["kanada vize reddi", "gcms notu nedir", "atip istemi kanada", "kanada vize reddi nedenleri", "kanada vize danışmanlık ankara", "kanada vize itiraz"],
  alternates: { canonical: "https://www.ayajourney.com/kanada-vize-reddi-nedenleri" }
};

const KanadaRedSayfasi = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 font-sans">
      
      {/* Hero Section */}
      <header className="mb-16 text-center">
        <span className="bg-rose-50 text-rose-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block border border-rose-100">
          Immigration, Refugees and Citizenship Canada (IRCC)
        </span>
        <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">
          Kanada Vize Reddi: <br/>
          <span className="text-rose-600 italic">Gizli Nedenleri Çözüyoruz</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Kanada hükümeti vizenizi reddettiğinde size gerçek nedeni söylemez. 
          Biz, sistemin arkasındaki <strong>GCMS notlarını</strong> çekerek vizenizi onaylatıyoruz.
        </p>
      </header>

      {/* Kanada'nın Gizemli Red Mekanizması */}
      <section className="grid md:grid-cols-2 gap-12 mb-20 items-stretch">
        <div className="bg-white p-10 rounded-[3rem] border-2 border-slate-100 shadow-sm flex flex-col justify-center">
          <h2 className="text-3xl font-black text-slate-800 mb-6 italic">Nedenini Bilmeden <br/>Başvurmayın!</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Kanada red mektupları standarttır ve çoğu zaman size bir yol göstermez. 
            Vize memurunun asıl çekincesini öğrenmeden yapılan her yeni başvuru, 
            <strong> "otomatik ret"</strong> riskini %80 artırır.
          </p>
          <ul className="space-y-3 text-sm font-bold text-slate-700">
            <li className="flex items-center gap-2">✓ Finansal Varlıkların Analizi</li>
            <li className="flex items-center gap-2">✓ Seyahat Geçmişi (Travel History)</li>
            <li className="flex items-center gap-2">✓ Ailevi ve İş Bağları</li>
          </ul>
        </div>
        
        <div className="bg-rose-600 text-white p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-6 uppercase">GCMS / ATIP Notu Nedir?</h3>
            <p className="text-rose-100 leading-relaxed mb-8">
              Kanada Bilgiye Erişim Yasası kapsamında, dosyanız hakkında memurun tuttuğu 
              gizli sayfaları (30-50 sayfa) isteme hakkınızdır. Bu notları almadan 
              yapılan yeni başvurular karanlıkta ok atmaya benzer.
            </p>
            <div className="inline-block bg-white text-rose-600 px-6 py-3 rounded-2xl font-black text-sm">
              Sizin adınıza notları IRCC'den çekiyoruz.
            </div>
          </div>
          {/* Arka plan akçaağaç yaprağı ikonu */}
          <div className="absolute -bottom-10 -right-10 text-[15rem] opacity-10 pointer-events-none">🍁</div>
        </div>
      </section>

      {/* Adım Adım Kanada Vize Kurtarma */}
      <section className="mb-24">
        <h2 className="text-3xl font-black mb-12 text-center underline decoration-rose-200 underline-offset-8 font-serif">Kanada Vize Kurtarma Planı</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { t: "GCMS Notu Talebi", d: "Kanada sisteminden memurun gizli görüşlerini çekiyoruz (30 Gün)." },
            { t: "Teknik Analiz", d: "Notları uzman gözüyle yorumlayıp red nedenini kesinleştiriyoruz." },
            { t: "Onay Odaklı Dosya", d: "Hataları düzeltip vize memuruna teknik bir açıklama sunuyoruz." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-3xl group hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 font-black">{i+1}</div>
              <h4 className="font-bold text-lg mb-3">{item.t}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-slate-900 rounded-[3.5rem] p-12 text-center text-white relative shadow-2xl overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tight">Karanlıkta Kalmayın</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-light">
            Kanada vize reddiniz için profesyonel bir yol haritası çıkaralım. 
            GCMS notu istemi ve teknik dosya hazırlığı için uzman ekibimizle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://wa.me/905302199056?text=Merhaba%2C%20vize%20ba%C5%9Fvurum%20i%C3%A7in%20profesyonel%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.%20Uygun%20oldu%C4%9Funuzda%20s%C3%BCreci%20birlikte%20planlayabilir%20miyiz%3F"
             className="bg-rose-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-rose-700 transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg shadow-rose-600/20">
              Kanada Dosyamı İncele
            </a>
            <a href="/iletisim" className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition shadow-lg">
              Ofise Gel
            </a>
          </div>
        </div>
      </section>

      {/* Silo Navigasyonu */}
      <nav className="mt-20 border-t border-slate-100 pt-10">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">Diğer Ülkelerin Ret Analizleri</p>
        <div className="flex flex-wrap justify-center gap-4 text-xs font-black">
          <a href="/schengen-vize-reddi-nedenleri" className="px-6 py-3 bg-slate-50 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition uppercase">🇪🇺 Schengen</a>
          <a href="/abd-vize-reddi-nedenleri" className="px-6 py-3 bg-slate-50 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition uppercase">🇺🇸 ABD</a>
          <a href="/ingiltere-vize-reddi-nedenleri" className="px-6 py-3 bg-slate-50 rounded-xl text-slate-600 hover:text-red-600 hover:bg-red-50 transition uppercase">🇬🇧 İngiltere</a>
        </div>
      </nav>
    </main>
  );
};

export default KanadaRedSayfasi;