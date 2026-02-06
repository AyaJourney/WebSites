import React from "react";

export const metadata = {
  title: "iDATA Vize Randevusu Nasıl Alınır? | 2026 Almanya & İtalya",
  description: "Almanya ve İtalya vize randevusu iDATA üzerinden nasıl alınır? Randevu bekleme süreleri, PNR sorgulama ve VIP randevu detayları.",
  keywords: ["idata randevu alma", "almanya vize randevusu", "italya vize randevusu idata", "idata randevu takip"],
};

const IdataRandevu = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase italic">iDATA Randevu Rehberi</h1>
        <p className="text-xl text-slate-500">Almanya ve İtalya başvuruları için resmi randevu süreci ve ipuçları.</p>
      </header>

      {/* Adım Adım Bölümü */}
      <section className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
          <h4 className="font-bold text-blue-900 mb-4">1. Kayıt Oluşturun</h4>
          <p className="text-sm text-blue-800">iDATA sistemine geçerli bir e-posta ile kayıt olun ve pasaport bilgilerinizi girin.</p>
        </div>
        <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
          <h4 className="font-bold text-blue-900 mb-4">2. Ofis Seçimi</h4>
          <p className="text-sm text-blue-800">İkamet ettiğiniz şehre göre yetkili ofisi (İstanbul, Ankara, İzmir vb.) seçin.</p>
        </div>
        <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
          <h4 className="font-bold text-blue-900 mb-4">3. Ödeme ve Onay</h4>
          <p className="text-sm text-blue-800">Ön ödemenizi yaparak randevu barkodunuzu alın. Barkodsuz randevu geçersizdir.</p>
        </div>
      </section>

      {/* CTA: Randevu bulamayanlar için */}
      <section className="bg-slate-900 text-white p-12 rounded-[3rem] text-center">
        <h2 className="text-3xl font-bold mb-6 italic">Randevu Bulamıyor Musunuz?</h2>
        <p className="text-slate-400 mb-10">iDATA sistemindeki yoğunluk nedeniyle randevular hızla tükeniyor. VIP randevu ve takip desteği için bize ulaşın.</p>
        <a href="https://wa.me/905302199056" className="bg-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition">Hızlı Randevu Desteği</a>
      </section>
    </main>
  );
};

export default IdataRandevu;