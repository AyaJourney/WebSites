import React from "react";

export const metadata = {
  title: "ABD Vize Randevusu Nasıl Alınır? | 2026 Randevu Öne Çekme",
  description: "Amerika vize randevusu alma rehberi. AIS sistem kullanımı, DS-160 formu ve 2026 yılı randevu bekleme süreleri. Randevu nasıl öne çekilir?",
  keywords: ["abd vize randevusu", "amerika vize randevusu alma", "ais randevu öne çekme", "ds-160 formu nasıl doldurulur", "abd acil vize randevusu"],
  alternates: { canonical: "https://www.ayajourney.com/abd-vize-randevusu-nasil-alinir" }
};

const ABDRandevuSayfasi = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">
      
      {/* Hero Section */}
      <header className="text-center mb-16">
        <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-200">
          U.S. Visa Appointment Service (AIS)
        </span>
        <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
          ABD Randevusu: <br/>
          <span className="text-blue-600 italic">Beklemek Zorunda Değilsiniz</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Amerika randevuları çok mu uzak tarihe veriliyor? 2026 güncel sisteminde randevu alma, 
          DS-160 onayı ve <strong>randevu öne çekme</strong> stratejilerimizle yanınızdayız.
        </p>
      </header>

      {/* ABD Randevu Süreci - Kritik 3'lü */}
      <section className="grid md:grid-cols-3 gap-8 mb-24">
        <div className="p-10 bg-white border border-slate-200 rounded-[3rem] shadow-sm hover:shadow-xl transition-all">
          <h3 className="text-2xl font-black mb-4 text-slate-800 italic">DS-160</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-6">
            Randevu almadan önce bu formu hatasız doldurmalısınız. Formdaki bir hata, mülakat günü reddedilmenize neden olabilir.
          </p>
          <div className="text-xs font-bold text-blue-600 uppercase">İLK ADIM</div>
        </div>
        <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-xl relative overflow-hidden">
          <h3 className="text-2xl font-black mb-4 italic text-blue-400">Ödeme & Slot</h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Vize ücretini (MRV) yatırdıktan sonra takvim açılır. Genellikle 10-14 ay sonrasını görürseniz panik yapmayın.
          </p>
          <div className="text-xs font-bold text-blue-400 uppercase">KRİTİK EŞİK</div>
        </div>
        <div className="p-10 bg-white border border-slate-200 rounded-[3rem] shadow-sm hover:shadow-xl transition-all">
          <h3 className="text-2xl font-black mb-4 text-slate-800 italic">Mülakat</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-6">
            Ankara veya İstanbul'da yüz yüze mülakata girersiniz. Karar genellikle mülakat sonunda hemen verilir.
          </p>
          <div className="text-xs font-bold text-blue-600 uppercase">SON ADIM</div>
        </div>
      </section>

      {/* Randevu Öne Çekme / Bot Sorunsalı */}
      <section className="bg-blue-50 p-12 rounded-[4rem] mb-24 border border-blue-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-blue-900 mb-6 text-center">Randevu Nasıl Öne Çekilir?</h2>
          <p className="text-blue-800 leading-relaxed text-center mb-8">
            AIS sistemi, iptal edilen randevuları günün belirsiz saatlerinde tekrar sisteme salar. 
            Bu slotları yakalamak için manuel takip imkansızdır. <strong>AYA Journey</strong> olarak, 
            profesyonel takip sistemlerimizle randevunuzu aylar öncesine çekmek için çalışıyoruz.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center font-bold text-blue-700">
              Acil Randevu (Emergency) Talebi
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center font-bold text-blue-700">
              Düzenli Slot Takibi
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-slate-900 rounded-[3.5rem] p-12 text-center text-white relative shadow-2xl overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tight uppercase">Amerika Seyahatiniz Hayal Olmasın</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-light">
            2026 randevu takvimindeki yoğunluğu dert etmeyin. Sizin adınıza takibini yapalım, 
            mülakat hazırlığınızı tamamlayalım ve o vizeyi birlikte alalım.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://wa.me/905302199056" className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-500 transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20">
               Randevumu Öne Çek
            </a>
            <a href="/iletisim" className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition shadow-lg">
              DS-160 Danışmanlığı
            </a>
          </div>
        </div>
        {/* Dekoratif Yıldızlar */}
        <div className="absolute top-0 right-0 p-20 opacity-10 text-9xl">🇺🇸</div>
      </section>

    </main>
  );
};

export default ABDRandevuSayfasi;