import React from "react";

// 1. Metadata: "İlk kez vize" ve "Vize nasıl alınır" anahtar kelimelerini hedefliyoruz
export const metadata = {
  title: "İlk Kez Vize Alacaklar İçin Rehber 2026 | Adım Adım Vize Süreci",
  description: "İlk defa yurt dışına çıkacaklar için vize alma rehberi. Pasaport çıkartma, evrak hazırlığı ve mülakat teknikleri. Vizenizi riske atmayın!",
  keywords: ["ilk kez vize almak", "vize nasıl alınır", "vize başvurusu nasıl yapılır", "pasaport vize süreci", "vize danışmanlık ilk başvuru"],
  alternates: { canonical: "https://www.ayajourney.com/ilk-kez-vize-alacaklar" }
};

const IlkKezVizeSayfasi = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 font-sans">
      
      {/* Hero Section: Bilgilendirici ve Rahatlatıcı */}
      <header className="text-center mb-16">
        <span className="bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">
          Yeni Başlayanlar İçin %100 Rehber
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
          İlk Kez Vize Alacaksınız, <br/>
          <span className="text-emerald-600 italic">Nereden Başlamalısınız?</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Sıfırdan bir pasaportla vize almak zor değil, ancak hata payı düşüktür. 
          Doğru adımlarla ilk vizenizi uzun süreli almanız için yanınızdayız.
        </p>
      </header>

      {/* Yol Haritası (Step by Step) */}
      <section className="grid md:grid-cols-4 gap-6 mb-24">
        {[
          { icon: "📂", t: "Pasaport", d: "En az 1 yıl geçerli bir pasaport edinin." },
          { icon: "📍", t: "Hedef Belirle", d: "Gidilecek ülkenin vize tipini seçin." },
          { icon: "📝", t: "Dosya Hazırla", d: "Mesleğinize uygun evrakları toplayın." },
          { icon: "📅", t: "Randevu Al", d: "Yetkili merkezden gününüzü ayırtın." }
        ].map((item, i) => (
          <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 text-center relative">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h4 className="font-black text-slate-800 mb-2">{item.t}</h4>
            <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
            {i < 3 && <div className="hidden md:block absolute -right-4 top-1/2 text-slate-300">→</div>}
          </div>
        ))}
      </section>

      {/* İlk Başvuruda En Sık Yapılan 3 Hata */}
      <section className="bg-slate-900 text-white p-12 rounded-[3.5rem] mb-24 relative overflow-hidden">
        <h2 className="text-3xl font-black mb-10 text-center">Dikkat: Bu Hataları Yapmayın!</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-l-2 border-emerald-500 pl-6">
            <h4 className="font-bold text-emerald-400 mb-2">Eksik Evrak</h4>
            <p className="text-sm text-slate-400">"Bu belgeye gerek yoktur" demeyin. Konsolosluk listesindeki her virgül kritiktir.</p>
          </div>
          <div className="border-l-2 border-emerald-500 pl-6">
            <h4 className="font-bold text-emerald-400 mb-2">Yetersiz Bakiye</h4>
            <p className="text-sm text-slate-400">Hesabınıza aniden yatan yüksek paralar güven sarsar, vizeyi zora sokar.</p>
          </div>
          <div className="border-l-2 border-emerald-500 pl-6">
            <h4 className="font-bold text-emerald-400 mb-2">Hatalı Form</h4>
            <p className="text-sm text-slate-400">Vize formunda vereceğiniz yanlış bir bilgi kalıcı ret almanıza neden olabilir.</p>
          </div>
        </div>
      </section>

      {/* Mesleğinize Göre İlk Adım */}
      <section className="mb-24">
        <h2 className="text-3xl font-black mb-12 text-center uppercase">Hangi Gruptasınız?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-200 rounded-3xl hover:border-emerald-300 transition cursor-default">
            <h3 className="font-bold text-lg mb-4 text-emerald-600">Öğrenci misiniz?</h3>
            <p className="text-sm text-slate-500 italic leading-relaxed">Sponsorlu başvuru ve öğrenci belgelerinizle en kolay vize alma yollarını gösteriyoruz.</p>
          </div>
          <div className="p-8 border border-slate-200 rounded-3xl hover:border-emerald-300 transition cursor-default">
            <h3 className="font-bold text-lg mb-4 text-emerald-600">Çalışan mısınız?</h3>
            <p className="text-sm text-slate-500 italic leading-relaxed">Şirket yazınız ve SGK dökümünüzle "güvenilir gezgin" dosyanızı hazırlıyoruz.</p>
          </div>
          <div className="p-8 border border-slate-200 rounded-3xl hover:border-emerald-300 transition cursor-default">
            <h3 className="font-bold text-lg mb-4 text-emerald-600">İş Sahibi misiniz?</h3>
            <p className="text-sm text-slate-500 italic leading-relaxed">Ticari sicilinizle prestijli bir ilk vize almanızı sağlıyoruz.</p>
          </div>
        </div>
      </section>

      {/* STRATEJİK CTA SECTION */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-[3rem] p-12 text-center text-white shadow-2xl relative">
        <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tight uppercase">Pasaportunuz Boş Kalmasın</h2>
        <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
          İlk başvurunuz, sonraki vizelerinizin referansıdır. Profesyonel destek alarak 
          süreci şansa bırakmayın, dünyayı keşfetmeye AYA Journey ile başlayın.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a  href="https://wa.me/905302199056?text=Merhaba%2C%20vize%20ba%C5%9Fvurum%20i%C3%A7in%20profesyonel%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.%20Uygun%20oldu%C4%9Funuzda%20s%C3%BCreci%20birlikte%20planlayabilir%20miyiz%3F"
          className="bg-white text-emerald-700 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition-all transform hover:scale-105">
           Yol Haritası Al
          </a>
          <a href="/iletisim" className="bg-emerald-900/30 text-white px-12 py-5 rounded-2xl font-black text-xl border border-white/20 hover:bg-emerald-900/50 transition">
            Danışmanlık Al
          </a>
        </div>
      </section>

    </main>
  );
};

export default IlkKezVizeSayfasi;