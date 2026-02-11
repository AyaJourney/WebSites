import React from "react";

export const metadata = {
  title: "VFS No Slots Available Ne Demek? | Randevu Yok Çözümü",
  description:
    "VFS 'No slots available' hatası neden çıkar? VFS randevu yok sorunu ve slot açılma saatleri hakkında detaylı rehber.",
  keywords: [
    "vfs no slots available",
    "vfs randevu yok",
    "vfs slot yok",
    "vfs no appointment available",
    "vfs sürekli dolu"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/vfs-no-slots-available"
  }
};

const VfsNoSlots = () => {
  return (
    <main className="min-h-screen bg-zinc-50">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            VFS “No Slots Available” Ne Demek?
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            VFS sisteminde “No slots available” uyarısı, o an için
            boş randevu bulunmadığını gösterir. Bu hata değildir,
            kontenjanın dolu olduğu anlamına gelir.
          </p>

        </div>
      </section>

      {/* NEDEN ÇIKAR */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-white p-10 rounded-2xl border border-slate-200">

          <h2 className="text-3xl font-bold mb-6">
            VFS No Slots Available Neden Çıkar?
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Günlük konsolosluk kontenjanı dolmuştur.</li>
            <li>• Yaz ve tatil dönemlerinde yoğunluk artmıştır.</li>
            <li>• Yeni randevular henüz sisteme yüklenmemiştir.</li>
            <li>• İptal edilen slotlar henüz düşmemiştir.</li>
          </ul>

        </div>
      </section>

      {/* NE ZAMAN AÇILIR */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-slate-900 text-white p-10 rounded-2xl">

          <h2 className="text-3xl font-bold mb-6">
            VFS Randevular Ne Zaman Açılır?
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            Slotlar düzensiz aralıklarla açılır. En sık gözlemlenen saatler:
          </p>

          <ul className="space-y-3 text-slate-200">
            <li>• Hafta içi 08:30 – 10:00 arası</li>
            <li>• Pazartesi ve Çarşamba günleri</li>
            <li>• Konsolosluk tatil sonrası ilk iş günü</li>
          </ul>

        </div>
      </section>

      {/* NE YAPMALI */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-white p-10 rounded-2xl border border-slate-200">

          <h2 className="text-3xl font-bold mb-6">
            VFS Slot Yoksa Ne Yapmalıyım?
          </h2>

          <ol className="space-y-4 text-slate-700 list-decimal list-inside leading-relaxed">
            <li>Günde belirli saatlerde kontrol edin (sürekli yenilemeyin).</li>
            <li>Farklı şehirleri kontrol edin (Ankara / İstanbul).</li>
            <li>Premium veya Prime Time seçeneklerini değerlendirin.</li>
            <li>Profesyonel randevu takibi alın.</li>
          </ol>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-orange-600 text-white rounded-2xl p-12 text-center shadow-xl">

          <h2 className="text-3xl font-bold mb-6">
            VFS Slot Açıldığı Anda Yakalamak İster misiniz?
          </h2>

          <p className="max-w-2xl mx-auto mb-8 text-orange-100">
            Slot açıldığı an sistem başında olmanız gerekir.
            Profesyonel takip ile randevunuzu erkene alabiliriz.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20vize%20ba%C5%9Fvurum%20i%C3%A7in%20profesyonel%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.%20Uygun%20oldu%C4%9Funuzda%20s%C3%BCreci%20birlikte%20planlayabilir%20miyiz%3F"
            className="bg-white text-orange-700 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition"
          >
            Slot Takibi Başlat
          </a>

        </div>
      </section>

    </main>
  );
};

export default VfsNoSlots;
