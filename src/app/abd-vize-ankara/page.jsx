import React from "react";

// 1. Metadata: Ankara özelinde mülakat ve adres aramaları için
export const metadata = {
  title: "ABD Vizesi Ankara Başvuru ve Mülakat Rehberi | 2026",
  description: "Ankara ABD Büyükelçiliği vize mülakatı hakkında her şey. Yeni elçilik adresi, mülakat hazırlığı ve Ankara'da randevu öne çekme desteği.",
  keywords: ["abd vize ankara", "amerika büyükelçiliği ankara vize randevusu", "ankara amerika vizesi mülakat", "çukurambar abd elçiliği ulaşım"],
  alternates: { canonical: "https://www.ayajourney.com/abd-vize-ankara" }
};

const ABDAnkaraSayfasi = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">
      
      {/* Header: Lokasyon Odaklı */}
      <header className="text-center mb-16">
        <span className="bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
          U.S. Embassy Ankara - Local Guide
        </span>
        <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
          Ankara ABD <br/>
          <span className="text-blue-600 italic">Mülakat Rehberi</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Çukurambar'daki yeni büyükelçilik binasında mülakata mı gireceksiniz? 
          Adres tarifinden mülakat stratejilerine kadar bilmeniz gereken her şey.
        </p>
      </header>

      {/* Adres ve Lokasyon Bilgisi */}
      <section className="grid md:grid-cols-2 gap-12 mb-24 items-center">
        <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 italic">
            <span className="text-3xl">📍</span> Yeni Elçilik Adresi
          </h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            ABD Ankara Büyükelçiliği artık Atatürk Bulvarı'nda değil, Çukurambar'daki yeni ve yüksek güvenlikli binasında hizmet vermektedir.
          </p>
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 mb-6">
            <p className="font-mono text-sm uppercase text-blue-400 mb-2 tracking-widest">Tam Adres:</p>
            <p className="font-bold">Çukurambar, 1480. Sk. No:1, 06530 Çankaya/Ankara</p>
          </div>
          <div className="flex gap-4">
            <span className="text-xs bg-white/20 px-3 py-1 rounded-full italic">#Çukurambar</span>
            <span className="text-xs bg-white/20 px-3 py-1 rounded-full italic">#ABD-Elçiliği</span>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-3xl font-black tracking-tight">Mülakat Günü İçin 3 Kritik Uyarı</h3>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-black flex-shrink-0">!</div>
            <p className="text-slate-600 text-sm"><strong className="text-slate-900">Elektronik Eşya Yasağı:</strong> İçeriye kesinlikle laptop, büyük çanta veya yanıcı madde alınmaz. Telefonunuzu emanete bırakmanız gerekebilir.</p>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-black flex-shrink-0">!</div>
            <p className="text-slate-600 text-sm"><strong className="text-slate-900">Erken Gidiş:</strong> Randevu saatinizden tam 15-30 dakika önce kapıda hazır olun. Çok erken gitmek içeri alınmanızı sağlamaz.</p>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-black flex-shrink-0">!</div>
            <p className="text-slate-600 text-sm"><strong className="text-slate-900">Belge Düzeni:</strong> DS-160 onay sayfası ve randevu belgeniz en üstte olacak şekilde şeffaf bir dosyada olmalıdır.</p>
          </div>
        </div>
      </section>

      {/* Ankara'da Vize Danışmanlığı Vurgusu */}
      <section className="mb-24 px-12 py-16 bg-blue-50 rounded-[4rem] text-center border border-blue-100">
        <h2 className="text-3xl font-black mb-6">Ankara Başvurularında AYA Journey Farkı</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ankara'daki mülakat trendlerini, hangi memurun hangi sorulara odaklandığını yakından takip ediyoruz. 
          Özellikle İç Anadolu bölgesinden başvuran adaylar için Ankara mülakat simülasyonu yapıyoruz.
        </p>
        <div className="flex justify-center gap-8 text-blue-700 font-bold italic">
          <span>✓ Birebir Hazırlık</span>
          <span>✓ Dosya Kontrolü</span>
          <span>✓ Randevu Öne Çekme</span>
        </div>
      </section>

      {/* STRATEJİK CTA SECTION */}
      <section className="bg-slate-900 rounded-[3.5rem] p-12 text-center text-white relative shadow-2xl overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tight uppercase underline decoration-blue-600">Ankara Mülakatına Hazır mısınız?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-light">
            Ankara ABD Büyükelçiliği'ndeki randevunuzu riske atmayın. 
            Mülakat öncesi bizden profesyonel destek alın, heyecanınızı kontrol altına alın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://wa.me/905302199056" className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-500 transition shadow-xl">
               Ankara İçin Destek Al
            </a>
            <a href="/iletisim" className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition shadow-lg">
              Ofisimize Bekliyoruz
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ABDAnkaraSayfasi;