import React from "react";

// 1. Metadata: Ankara özelinde mülakat ve adres aramaları için
export const metadata = {
  title: "ABD Vize Ankara | Amerika Vize Ankara Mülakat ve Başvuru Rehberi 2026",
  description:
    "ABD Vize Ankara başvurusu ve Amerika vize Ankara mülakat süreci hakkında güncel rehber. Çukurambar ABD Büyükelçiliği adresi, randevu ve danışmanlık desteği.",
  keywords: [
    "abd vize ankara",
    "amerika vize ankara",
    "ankara amerika vizesi",
    "ankara abd büyükelçiliği vize",
    "amerika vize danışmanlık ankara"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/abd-vize-ankara"
  }
};


const ABDAnkaraSayfasi = () => {
return (
  <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

    {/* HEADER */}
    <header className="text-center mb-20">
      <span className="bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
        ABD Vize Ankara Rehberi
      </span>

      <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
        ABD Vize Ankara <br />
        <span className="text-blue-600">
          Amerika Vize Ankara Mülakat ve Başvuru Rehberi
        </span>
      </h1>

      <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
        <strong>ABD vize Ankara</strong> başvurusu yapacak adaylar için 
        Amerika Birleşik Devletleri Ankara Büyükelçiliği mülakat sürecini,
        randevu adımlarını ve <strong className="ml-1 mr-1">Amerika vize Ankara danışmanlık</strong> 
        desteğini detaylı şekilde anlatıyoruz.
      </p>
    </header>


    {/* BAŞVURU SÜRECİ */}
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-6">
        Amerika Vize Ankara Başvurusu Nasıl Yapılır?
      </h2>

      <p className="text-slate-600 leading-relaxed mb-6">
        Amerika vize Ankara başvurusu DS-160 formunun doldurulması,
        ABD vize ücretinin yatırılması ve Ankara ABD Büyükelçiliği’nden
        mülakat randevusu alınması ile başlar. Ankara’da yapılan ABD vize
        başvurularında mülakat aşaması en kritik süreçtir.
      </p>

      <p className="text-slate-600 leading-relaxed">
        Ankara Amerika vizesi başvurularında seyahat amacı,
        finansal yeterlilik ve Türkiye’ye geri dönüş niyeti
        konsolosluk tarafından değerlendirilir.
      </p>
    </section>


    {/* ELÇİLİK ADRESİ */}
    <section className="grid md:grid-cols-2 gap-12 mb-24 items-center">
      <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-xl">
        <h3 className="text-2xl font-bold mb-6">
          📍 Ankara ABD Büyükelçiliği Adresi
        </h3>

        <p className="text-slate-300 mb-6 leading-relaxed">
          ABD Ankara Büyükelçiliği Çukurambar bölgesinde yer almaktadır.
          Amerika vize Ankara mülakatları bu adreste yapılır.
        </p>

        <div className="bg-white/10 p-6 rounded-xl border border-white/20">
          <p className="text-sm text-blue-300 mb-2 uppercase tracking-widest">
            Tam Adres:
          </p>
          <p className="font-bold">
            Çukurambar, 1480. Sk. No:1, 06530 Çankaya / Ankara
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6">
          Ankara Amerika Vizesi Mülakatında Dikkat Edilmesi Gerekenler
        </h3>

        <ul className="space-y-4 text-slate-600">
          <li>• Randevu saatinizden 15–20 dakika önce kapıda olun.</li>
          <li>• Elektronik cihazlar içeri alınmaz.</li>
          <li>• DS-160 onay sayfası ve randevu belgesi hazır olmalıdır.</li>
          <li>• Sorulara net ve tutarlı cevap verin.</li>
        </ul>
      </div>
    </section>


    {/* DANIŞMANLIK */}
    <section className="mb-24 bg-blue-50 p-12 rounded-3xl border border-blue-100">
      <h2 className="text-3xl font-black mb-6 text-center">
        Amerika Vize Danışmanlık Ankara Hizmeti
      </h2>

      <p className="text-slate-600 max-w-3xl mx-auto text-center leading-relaxed mb-8">
        Aya Journey olarak Ankara’da Amerika vize danışmanlık hizmeti sunuyoruz.
        ABD vize Ankara başvuru sürecinde evrak kontrolü, DS-160 form desteği,
        mülakat simülasyonu ve randevu planlaması konularında profesyonel destek sağlıyoruz.
      </p>

      <div className="flex justify-center gap-8 text-blue-700 font-semibold">
        <span>✓ Evrak Kontrolü</span>
        <span>✓ Mülakat Hazırlığı</span>
        <span>✓ Randevu Stratejisi</span>
      </div>
    </section>


    {/* SEO GÜÇ BÖLÜMÜ */}
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-6">
        Ankara Amerika Vize Danışmanlık Hizmeti Neden Önemli?
      </h2>

      <p className="text-slate-600 leading-relaxed mb-4">
        Ankara Amerika vizesi başvurularında yapılan küçük hatalar bile
        ret ile sonuçlanabilir. Profesyonel Amerika vize danışmanlık desteği,
        başvurunun doğru stratejiyle hazırlanmasını sağlar.
      </p>

      <p className="text-slate-600 leading-relaxed">
        Özellikle ilk kez başvuru yapan adaylar için Ankara ABD vize
        mülakatına hazırlık süreci kritik öneme sahiptir.
      </p>
    </section>


    {/* CTA */}
    <section className="bg-slate-900 rounded-3xl p-12 text-center text-white shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-black mb-6">
        ABD Vize Ankara Süreciniz İçin Destek Alın
      </h2>

      <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
        Amerika vize Ankara başvurunuzu riske atmayın.
        Ankara ABD Büyükelçiliği mülakatına hazırlıklı girin.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a
          href="/randevu"
          className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-500 transition"
        >
          Ankara İçin Randevu Al
        </a>

        <a
         href="https://wa.me/905302199056?text=Merhaba%2C%20vize%20ba%C5%9Fvurum%20i%C3%A7in%20profesyonel%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.%20Uygun%20oldu%C4%9Funuzda%20s%C3%BCreci%20birlikte%20planlayabilir%20miyiz%3F"
          className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition"
        >
          Danışmanlık Talep Et
        </a>
      </div>
    </section>

  </main>
);

};

export default ABDAnkaraSayfasi;