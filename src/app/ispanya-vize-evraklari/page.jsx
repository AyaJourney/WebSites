import React from "react";

export const metadata = {
  title: "İspanya Vize Evrakları 2026 | Güncel Schengen Belge Listesi",
  description:
    "İspanya Schengen vizesi için gerekli evraklar nelerdir? Turistik ve ticari İspanya vize evrak listesi ve başvuru rehberi.",
  keywords: [
    "ispanya vize evrakları",
    "ispanya schengen evrak listesi",
    "ispanya turistik vize evrakları",
    "ispanya ticari vize evrakları",
    "ispanya vize için gerekli belgeler"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/ispanya-vize-evraklari"
  }
};

const IspanyaVizeEvraklari = () => {
  return (
<main className="min-h-screen bg-zinc-50">

  {/* HERO */}
  <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
    <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">

      <p className="text-sm text-red-600 font-semibold mb-2">
        İspanya • Schengen Evrak Rehberi
      </p>

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
        İspanya Vize Evrakları Nelerdir?
      </h1>

      <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
        İspanya Schengen vizesi başvurularında evrakların eksiksiz ve
        tutarlı hazırlanması en kritik aşamadır. Eksik belge veya
        finansal yetersizlik, <a href="/ispanya-vize-reddi" className="font-semibold text-red-600 hover:underline">
        ret riskini</a> artırır.
        Başvuru sürecinin tamamını görmek için{" "}
        <a href="/ispanya-vize" className="font-semibold text-red-600 hover:underline">
          İspanya vize rehberine
        </a>{" "}
        göz atabilirsiniz.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="/randevu"
          className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition"
        >
          Evrak Kontrolü İçin Randevu Al
        </a>

        <a
          href="/ispanya-vize-randevusu"
          className="border border-slate-300 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition"
        >
          Randevu Sürecini İncele →
        </a>
      </div>

    </div>
  </section>

  {/* TEMEL EVRAKLAR */}
  <section className="max-w-6xl mx-auto px-6 pb-16">
    <div className="bg-white p-10 rounded-2xl border border-slate-200">

      <h2 className="text-3xl font-bold mb-8">
        İspanya Schengen Vizesi İçin Temel Evraklar
      </h2>

      <ul className="space-y-4 text-slate-700 leading-relaxed">
        <li>• En az 6 ay geçerli pasaport</li>
        <li>• Schengen başvuru formu</li>
        <li>• 2 adet biyometrik fotoğraf</li>
        <li>• Randevu onay belgesi (BLS)</li>
        <li>• Seyahat sağlık sigortası (minimum 30.000 €)</li>
        <li>• Gidiş-dönüş uçak rezervasyonu</li>
        <li>• Otel rezervasyonu veya davetiye</li>
        <li>• Son 3 aylık banka hesap dökümü</li>
      </ul>

      <p className="mt-8 text-slate-600">
        Evraklar hazırlanırken tarih uyumu, banka hareketlerinin düzenli olması ve
        konaklama bilgilerinin net olması önemlidir. Bu detaylar doğrudan
        <a href="/ispanya-vize-reddi" className="font-semibold text-red-600 hover:underline">
          ret gerekçelerine
        </a>{" "}
        yansıyabilir.
      </p>

    </div>
  </section>

  {/* ÇALIŞMA DURUMUNA GÖRE */}
  <section className="max-w-6xl mx-auto px-6 pb-16">
    <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200">

      <h2 className="text-3xl font-bold mb-8">
        Çalışma Durumuna Göre İspanya Vize Evrakları
      </h2>

      <div className="grid md:grid-cols-2 gap-8 text-slate-700">

        <div>
          <h3 className="font-semibold mb-3">Çalışanlar İçin</h3>
          <ul className="space-y-2">
            <li>• İş yerinden izin yazısı</li>
            <li>• SGK hizmet dökümü</li>
            <li>• Maaş bordroları</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Şirket Sahipleri İçin</h3>
          <ul className="space-y-2">
            <li>• Vergi levhası</li>
            <li>• Faaliyet belgesi</li>
            <li>• Ticaret sicil gazetesi</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Öğrenciler İçin</h3>
          <ul className="space-y-2">
            <li>• Öğrenci belgesi</li>
            <li>• Sponsor dilekçesi</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Emekliler İçin</h3>
          <ul className="space-y-2">
            <li>• Emekli maaş dökümü</li>
            <li>• SGK emeklilik belgesi</li>
          </ul>
        </div>

      </div>

    </div>
  </section>

  {/* KRİTİK UYARILAR */}
  <section className="max-w-6xl mx-auto px-6 pb-16">
    <div className="bg-white p-10 rounded-2xl border border-slate-200">

      <h2 className="text-3xl font-bold mb-6">
        İspanya Vize Evraklarında En Sık Yapılan Hatalar
      </h2>

      <ul className="space-y-4 text-slate-700">
        <li>• Banka bakiyesinin seyahat süresine göre yetersiz olması</li>
        <li>• Konaklama belgelerinde tutarsızlık</li>
        <li>• Sahte rezervasyon kullanımı</li>
        <li>• Sponsorluk belgelerinin eksik olması</li>
      </ul>

      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <p className="font-semibold text-slate-800">
          📌 Başvuru öncesi mutlaka{" "}
          <a href="/ispanya-vize-randevusu" className="underline">
            randevu sürecini
          </a>{" "}
          ve{" "}
          <a href="/ispanya-vize" className="underline">
            genel başvuru akışını
          </a>{" "}
          gözden geçirin.
        </p>
      </div>

    </div>
  </section>

  {/* INTERNAL CLUSTER */}
  <section className="max-w-6xl mx-auto px-6 pb-16">
    <div className="bg-white p-10 rounded-2xl border border-slate-200">

      <h2 className="text-3xl font-bold mb-6">
        İspanya Vize Sürecini İnceleyin
      </h2>

      <div className="space-y-3">
        <a href="/ispanya-vize" className="block font-semibold hover:underline">
          İspanya vize rehberi →
        </a>
        <a href="/ispanya-vize-randevusu" className="block font-semibold hover:underline">
          İspanya vize randevusu →
        </a>
        <a href="/ispanya-vize-reddi" className="block font-semibold hover:underline">
          İspanya vize reddi →
        </a>
      </div>

      <p className="mt-6 text-slate-600">
        Bu sayfalar birlikte okunduğunda İspanya Schengen başvuru süreci eksiksiz şekilde anlaşılır.
      </p>

    </div>
  </section>

  {/* CTA */}
  <section className="max-w-6xl mx-auto px-6 pb-24">
    <div className="bg-red-600 text-white rounded-2xl p-12 text-center">

      <h2 className="text-3xl font-bold mb-6">
        Evraklarınızı Uzman Gözüyle Kontrol Edelim
      </h2>

      <p className="max-w-2xl mx-auto mb-8 text-red-100">
        İspanya vize reddi riskini azaltmak için başvuru dosyanızı
        profesyonel şekilde hazırlayalım.
      </p>

      <a
        href="https://wa.me/905302199056?text=Merhaba%2C%20vize%20ba%C5%9Fvurum%20i%C3%A7in%20profesyonel%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.%20Uygun%20oldu%C4%9Funuzda%20s%C3%BCreci%20birlikte%20planlayabilir%20miyiz%3F"
        className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition"
      >
        WhatsApp Evrak Kontrolü
      </a>

    </div>
  </section>

</main>

  );
};

export default IspanyaVizeEvraklari;
