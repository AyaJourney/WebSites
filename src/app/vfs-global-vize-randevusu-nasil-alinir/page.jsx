import React from "react";

// 1. Metadata: VFS Global aramalarında "hata çözümü" ve "randevu alma" odaklı
export const metadata = {
  title: "VFS Global Vize Randevusu Nasıl Alınır? | 2026 Adım Adım Rehber",
  description: "Fransa, Hollanda, Polonya, Avusturya ve Litvanya vize randevusu VFS Global üzerinden nasıl alınır? Sistem hataları, Premium randevu ve güncel ipuçları.",
  keywords: ["vfs global randevu alma", "vfs global hata çözümü", "fransa vize randevusu", "hollanda vize randevusu vfs", "vfs global sistem hatası 2026"],
  alternates: { canonical: "https://www.ayajourney.com/vfs-global-vize-randevusu-nasil-alinir" }
};

const VfsGlobalRandevu = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">
      
      {/* Hero Section */}
      <header className="text-center mb-16">
        <span className="bg-orange-100 text-orange-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-orange-200">
          VFS Global Yetkili Başvuru Rehberi
        </span>
        <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
          VFS Global <br/>
          <span className="text-orange-600 italic">Randevu Sistemi</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Fransa, Hollanda veya Polonya gibi ülkelere gitmek istiyorsanız, kapı VFS Global'den geçer. 
          Sistem hatalarıyla boğuşmadan randevu almanız için hazırladığımız teknik rehber.
        </p>
      </header>

      {/* Adım Adım VFS Süreci */}
      <section className="mb-24">
        <h2 className="text-3xl font-black mb-12 text-center underline decoration-orange-200 underline-offset-8">5 Adımda Sorunsuz Randevu</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { n: "01", t: "Ülke Seçimi", d: "Gideceğiniz ülkenin VFS portalına girin (Her ülkenin linki farklıdır)." },
            { n: "02", t: "Hesap Açma", d: "Aktivasyon e-postasını onaylamadan sisteme giriş yapamazsınız." },
            { n: "03", t: "Grup Oluşturma", d: "Ailenizle gidiyorsanız 'Add Applicant' ile herkesi tek dosyada toplayın." },
            { n: "04", t: "Slot Seçimi", d: "Mavi kutucuklar boş randevuları, kırmızı kutucuklar dolu günleri gösterir." },
            { n: "05", t: "Ön Ödeme", d: "Servis ücretini online ödeyerek randevu onayınızı (Appointment Letter) indirin." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative">
              <span className="text-4xl font-black text-orange-200 absolute top-4 right-4 leading-none">{item.n}</span>
              <h4 className="font-bold text-slate-800 mb-2 mt-4">{item.t}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Teknik Sorunlar ve Çözümleri - En çok trafik çeken kısım */}
      <section className="bg-slate-900 text-white p-12 rounded-[3.5rem] mb-24 shadow-2xl">
        <h2 className="text-3xl font-black mb-10 text-center uppercase tracking-tighter">En Sık Karşılaşılan VFS Hataları</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-orange-500 transition-colors">
            <h4 className="font-bold text-orange-400 mb-2">"Access Denied" Hatası</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Sistemi çok sık yenilediğinizde IP adresiniz geçici olarak engellenir. Çözüm için gizli sekme kullanın veya modem resetleyerek IP değiştirin.
            </p>
          </div>
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-orange-500 transition-colors">
            <h4 className="font-bold text-orange-400 mb-2">Aktivasyon Gelmiyor mu?</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              VFS sistemi Outlook ve Hotmail e-postalarına karşı bazen direnç gösterir. Mümkünse "Gmail" adresi kullanarak kayıt olmayı deneyin.
            </p>
          </div>
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-orange-500 transition-colors">
            <h4 className="font-bold text-orange-400 mb-2">Ödeme Başarısız (Error 1015)</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Yurt dışı işleme açık, 3D Secure destekleyen bir kredi kartı kullanın. Bankanızın mobil uygulamasından onayı beklerken sayfa zaman aşımına uğrayabilir, hızlı olun.
            </p>
          </div>
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-orange-500 transition-colors">
            <h4 className="font-bold text-orange-400 mb-2">Slotlar Görünmüyor mu?</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              "No slots available" mesajı sistemin tamamen dolu olduğunu gösterir. VFS genellikle mesai saati başlangıçlarında (08:30 - 09:30) yeni kontenjan açar.
            </p>
          </div>
        </div>
      </section>

      {/* Premium Lounge Vurgusu */}
      <div className="mb-24 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-black mb-6 italic">Zamanınız Kısıtlı mı?</h3>
        <p className="text-slate-600 leading-relaxed">
          Standart randevu bulamadığınız durumlarda <strong>VFS Premium Lounge</strong> veya 
          <strong> Prime Time (Mesai dışı)</strong> randevuları kurtarıcı olabilir. 
          Bu hizmetlerin ek ücreti olduğunu unutmayın, ancak acil seyahatler için en garanti yoldur.
        </p>
      </div>

      {/* STRATEJİK CTA SECTION */}
      <section className="bg-orange-600 rounded-[3rem] p-12 text-center text-white relative shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase">VFS Randevunuzu Biz Takip Edelim</h2>
        <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto font-light">
          Sistem başında beklemekten yoruldunuz mu? Sizin adınıza randevu takibi yapıyor, 
          en uygun slot açıldığı an dosyanızı sisteme giriyoruz.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="https://wa.me/905302199056" className="bg-white text-orange-700 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition transform hover:scale-105">
            Hızlı Randevu Takibi
          </a>
          <a href="/iletisim" className="bg-orange-900/30 text-white px-12 py-5 rounded-2xl font-black text-xl border border-white/20 hover:bg-orange-900/50 transition">
            Bize Ulaşın
          </a>
        </div>
      </section>

    </main>
  );
};

export default VfsGlobalRandevu;