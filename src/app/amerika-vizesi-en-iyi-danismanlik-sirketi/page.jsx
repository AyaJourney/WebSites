import React from "react";

// 1. Metadata: "En iyi" ve "Güvenilir" aramalarını domine etmek için
export const metadata = {
  title: "Amerika Vizesi İçin En İyi Danışmanlık Şirketi Nasıl Seçilir?",
  description: "ABD vizesi danışmanlığında neden AYA Journey tercih edilmeli? Onay oranları, mülakat başarısı ve profesyonel DS-160 yönetimi ile farkımızı görün.",
  keywords: ["en iyi amerika vize danışmanlık", "güvenilir vize şirketleri", "abd vizesi danışmanlık tavsiye", "amerika vize onay oranı yüksek şirketler"],
  alternates: { canonical: "https://www.ayajourney.com/amerika-vizesi-en-iyi-danismanlik-sirketi" }
};

const EnIyiABDDanismanlik = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">
      
      {/* Hero: Prestijli ve İddialı Giriş */}
      <header className="text-center mb-24">
        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-amber-100">
          <span className="text-lg">⭐</span> Sektörün Lider Danışmanlık Vizyonu
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
          Amerika Vizesinde <br/>
          <span className="text-blue-700 italic underline decoration-slate-200 underline-offset-8">En İyi Olmanın</span> Sırrı
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
          "En iyi" olmak sadece randevu almak değildir. Gerçek bir danışmanlık, 
          konsolosluk memurunun psikolojisini bilmek ve dosyayı bir hikaye gibi kurgulamaktır.
        </p>
      </header>

      {/* Neden AYA Journey "En İyi"? - Karşılaştırmalı Otorite */}
      <section className="grid md:grid-cols-2 gap-16 mb-24 items-center">
        <div>
          <h2 className="text-3xl font-black mb-8 tracking-tight">Sıradan Bir Acente mi, <br/>Stratejik Bir İş Ortağı mı?</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="font-black text-lg text-blue-900 uppercase">Kişiye Özel Senaryo</h4>
              <p className="text-slate-600 text-sm">Herkes için aynı taslağı kullanmayız. Sizin iş, aile ve finansal geçmişinizden bir 'onay hikayesi' çıkarırız.</p>
            </div>
            <div className="border-l-4 border-slate-900 pl-6">
              <h4 className="font-black text-lg text-slate-900 uppercase">Yapay Zeka Destekli Takip</h4>
              <p className="text-slate-600 text-sm">ABD randevu sistemini (AIS) 7/24 tarayan altyapımızla, manuel takibin çok ötesinde hız sunarız.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="font-black text-lg text-blue-900 uppercase">Mülakat Psikolojisi</h4>
              <p className="text-slate-600 text-sm">Memurun 'neden gidiyorsun?' sorusunun altındaki gerçek endişeyi nasıl gidereceğinizi size biz öğretiriz.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-slate-900 rounded-[4rem] p-12 text-white shadow-2xl relative z-10">

            <h3 className="text-2xl font-bold mb-6">Rakamlarla Başarımız</h3>
            <div className="space-y-6">
              <div>
                <span className="block text-4xl font-black text-blue-400">94%</span>
                <p className="text-sm text-slate-400">İlk Başvuruda Onay Oranı</p>
              </div>
              <hr className="border-white/10" />
              <div>
                <span className="block text-4xl font-black text-blue-400">10+</span>
                <p className="text-sm text-slate-400">Yıl Tecrübe</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 w-full h-full bg-blue-600 rounded-[4rem] -z-10 rotate-3"></div>
        </div>
      </section>

      {/* Şeffaflık Bölümü */}
      <div className="bg-slate-50 p-12 rounded-[4rem] mb-24 text-center">
        <h3 className="text-2xl font-black mb-6 italic">"En İyi" Şirketi Nasıl Tanırsınız?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <p className="text-sm text-slate-500 font-medium italic">"Asla vize garantisi vermez, sürecin risklerini şeffafça söyler."</p>
          <p className="text-sm text-slate-500 font-medium italic">"Konsolosluk mülakatı öncesi sizinle mülakat simülasyonu yapar."</p>
          <p className="text-sm text-slate-500 font-medium italic">"Referanslarını ve onaylanmış vizelerini açıkça paylaşabilir."</p>
        </div>
      </div>

      {/* STRATEJİK CTA: "En İyi" İle Çalışma Çağrısı */}
      <section className="bg-slate-900 rounded-[4rem] p-16 text-center text-white relative shadow-2xl overflow-hidden border-b-8 border-blue-600">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter uppercase">Şansınızı Şansa Bırakmayın</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Amerika vizesi bir kez reddedildiğinde, ikinci şansınız çok daha zorlaşır. 
            İlk seferde, işin en iyisiyle başlayın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://wa.me/905302199056" className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition transform hover:scale-105">
               Neden En İyiyiz? Sorun
            </a>
            <a href="/iletisim" className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition shadow-lg">
              Ofisimizi Ziyaret Edin
            </a>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none text-[20rem] font-black italic">AYA</div>
      </section>

    </main>
  );
};

export default EnIyiABDDanismanlik;