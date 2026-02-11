import React from "react";

export const metadata = {
  title: "Fransa Vize Evrakları 2026 | Fransa Schengen Evrak Listesi Ankara",
  description:
    "Fransa vize evrakları tam listesi. Fransa Schengen turist ve ticari vize için gerekli belgeler, banka şartı ve VFS Ankara başvuru rehberi.",
  keywords: [
    "fransa vize evrakları",
    "fransa schengen evrak listesi",
    "fransa turist vizesi evrakları",
    "fransa ticari vize evrakları",
    "fransa vize evrakları ankara",
    "vfs fransa evrak listesi"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/fransa-vize-evraklari"
  }
};

const FransaVizeEvraklari = () => {
  return (
    <main className="min-h-screen bg-zinc-50">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">

          <p className="text-sm text-slate-500 mb-2">
            Fransa Cumhuriyeti • Schengen Bölgesi • Ankara
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Fransa Vize Evrakları 2026
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
            Fransa Schengen vizesi başvurularında en sık ret sebebi eksik veya
            hatalı evraktır. Fransa vize evrakları başvuru türüne ve kişinin
            çalışma durumuna göre değişiklik gösterir.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/randevu"
              className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition"
            >
              Evrak Kontrol Randevusu Al
            </a>
            <a
              href="/fransa-vize"
              className="border border-slate-300 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition"
            >
              Fransa Vize Rehberi →
            </a>
          </div>

        </div>
      </section>

      {/* TEMEL EVRAKLAR */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white p-10 rounded-2xl border border-slate-200">

          <h2 className="text-3xl font-bold mb-8">
            Fransa Schengen Vize Evrakları (Temel Liste)
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-slate-700">
            <li>• En az 3 ay geçerli pasaport</li>
            <li>• 2 adet biyometrik fotoğraf</li>
            <li>• Schengen başvuru formu</li>
            <li>• Seyahat sağlık sigortası (min. 30.000€ teminat)</li>
            <li>• Uçak rezervasyonu</li>
            <li>• Otel rezervasyonu veya davetiye</li>
            <li>• Banka hesap dökümü (son 3 ay)</li>
            <li>• Kimlik fotokopisi</li>
          </ul>

        </div>
      </section>

      {/* TURİST VİZESİ */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold mb-4">
              Fransa Turist Vizesi Evrakları
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li>• Çalışanlar için maaş bordrosu</li>
              <li>• SGK hizmet dökümü</li>
              <li>• İşveren izin yazısı</li>
              <li>• Şirket sahipleri için vergi levhası</li>
              <li>• Öğrenciler için öğrenci belgesi</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold mb-4">
              Fransa Ticari Vize Evrakları
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li>• Fransa’daki firmadan davetiye</li>
              <li>• Şirket faaliyet belgesi</li>
              <li>• Ticaret sicil gazetesi</li>
              <li>• İmza sirküleri</li>
              <li>• Vergi levhası</li>
            </ul>
          </div>

        </div>
      </section>

      {/* BANKA ŞARTI */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200">

          <h2 className="text-3xl font-bold mb-6">
            Fransa Vizesi İçin Bankada Ne Kadar Para Olmalı?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Fransa Schengen vizesi için resmi bir alt limit açıklanmaz.
            Ancak günlük en az 65-120 Euro arası masrafı karşılayabilecek
            bakiye gösterilmesi önerilir. Hesabın hareketli ve tutarlı
            olması önemlidir.
          </p>

        </div>
      </section>

      {/* ANKARA VFS */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-white p-10 rounded-2xl border border-slate-200">

          <h2 className="text-3xl font-bold mb-6">
            VFS Fransa Ankara Evrak Teslim Süreci
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            Fransa vize başvuruları Ankara’da VFS Global üzerinden yapılır.
            Randevu günü tüm evrakların eksiksiz ve doğru sıralanmış şekilde
            teslim edilmesi gerekir.
          </p>

          <a
            href="/fransa-vize-randevusu"
            className="font-semibold hover:underline"
          >
            Fransa vize randevusu nasıl alınır? →
          </a>

        </div>
      </section>

      {/* RET RİSKİ */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-white p-10 rounded-2xl border border-slate-200">

          <h2 className="text-3xl font-bold mb-6">
            Eksik Evrak Fransa Vize Reddine Neden Olur mu?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Evet. Özellikle banka dökümü, sigorta veya seyahat planındaki
            tutarsızlıklar Fransa Schengen vize reddi ile sonuçlanabilir.
          </p>

          <a
            href="/fransa-vize-reddi"
            className="font-semibold hover:underline"
          >
            Fransa vize reddi nedenleri →
          </a>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-slate-900 text-white rounded-2xl p-12 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Fransa Vize Evraklarınızı Uzmanlar Kontrol Etsin
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Evraklarınızı başvuru öncesi inceleyelim, Fransa vize reddi
            riskinizi minimize edelim.
          </p>

          <a
           href="https://wa.me/905302199056?text=Merhaba%2C%20vize%20ba%C5%9Fvurum%20i%C3%A7in%20profesyonel%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.%20Uygun%20oldu%C4%9Funuzda%20s%C3%BCreci%20birlikte%20planlayabilir%20miyiz%3F"
            className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition"
          >
            WhatsApp ile Evrak Kontrolü
          </a>

        </div>
      </section>

    </main>
  );
};

export default FransaVizeEvraklari;
