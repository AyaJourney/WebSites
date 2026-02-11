import React from "react";

export const metadata = {
  title: "Fransa Vize Ankara | Fransa Schengen Vizesi Başvuru Rehberi 2026",
  description:
    "Fransa vize başvurusu Ankara rehberi. Fransa Schengen vizesi evrakları, VFS randevu süreci ve ret nedenleri. Ankara’dan Fransa vizesi danışmanlığı.",
  keywords: [
    "fransa vize",
    "fransa vize ankara",
    "fransa schengen vizesi",
    "fransa vize başvurusu",
    "vfs fransa ankara",
    "fransa vize evrakları"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/fransa-vize"
  }
};

const FransaVizeSayfasi = () => {
  return (
    <main className="min-h-screen bg-zinc-50">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">

          <p className="text-sm text-slate-500 mb-2">
            Ankara • Fransa Cumhuriyeti • Schengen Bölgesi
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Fransa Vize Başvurusu Ankara
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
            Fransa vize başvurusu Ankara’dan yapılacaksa süreç; doğru vize türünün
            seçilmesi, evrakların eksiksiz hazırlanması ve VFS randevu adımlarının
            doğru yönetilmesi ile ilerler. Fransa Schengen vizesi başvurularında
            yapılan küçük hatalar ret ile sonuçlanabilir.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/randevu"
              className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition"
            >
              Fransa Vize Randevusu Oluştur
            </a>
            <a
              href="/iletisim"
              className="border border-slate-300 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition"
            >
              Uzmanla Görüş
            </a>
          </div>
        </div>
      </section>

      {/* FRANSA SCHENGEN NEDİR */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-white p-10 rounded-2xl border border-slate-200 space-y-6">

          <h2 className="text-3xl font-bold">
            Fransa Schengen Vizesi Nedir?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Fransa Schengen vizesi, Fransa’ya ve Schengen bölgesine dahil diğer
            ülkelere 90 güne kadar turistik, ticari veya aile ziyareti amacıyla
            seyahat etmenizi sağlayan kısa süreli vizedir.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Ankara’dan yapılan Fransa vize başvuruları genellikle
            <strong> VFS Global Ankara </strong> üzerinden alınan randevu ile
            gerçekleştirilir ve biyometri işlemleri tamamlanır.
          </p>

        </div>
      </section>

      {/* EVRAKLAR */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold mb-4">
              Fransa Vize Evrakları (Temel)
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li>• En az 3 ay geçerli pasaport</li>
              <li>• Schengen başvuru formu</li>
              <li>• 2 adet biyometrik fotoğraf</li>
              <li>• Seyahat sağlık sigortası</li>
              <li>• Uçuş ve konaklama rezervasyonu</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold mb-4">
              Destekleyici Belgeler
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li>• Banka hesap dökümü (son 3 ay)</li>
              <li>• Maaş bordrosu / şirket evrakları</li>
              <li>• SGK dökümü</li>
              <li>• Davetiye (varsa)</li>
            </ul>

            <a
              href="/fransa-vize-evraklari"
              className="inline-block mt-4 font-semibold hover:underline"
            >
              Detaylı Fransa vize evrakları listesi →
            </a>
          </div>

        </div>
      </section>

      {/* SÜREÇ */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200 space-y-6">

          <h2 className="text-3xl font-bold">
            Fransa Vize Başvuru Süreci Ankara
          </h2>

          <ol className="space-y-4 text-slate-700">
            <li>1️⃣ Vize türünün belirlenmesi</li>
            <li>2️⃣ Evrakların eksiksiz hazırlanması</li>
            <li>3️⃣ VFS Fransa Ankara randevusu alınması</li>
            <li>4️⃣ Biyometri ve belge teslimi</li>
            <li>5️⃣ Sonucun değerlendirilmesi</li>
          </ol>

        </div>
      </section>

      {/* RET NEDENLERİ */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-white p-10 rounded-2xl border border-slate-200">

          <h2 className="text-3xl font-bold mb-6">
            Fransa Vizesi Neden Reddedilir?
          </h2>

          <ul className="space-y-3 text-slate-600">
            <li>• Yetersiz finansal durum</li>
            <li>• Seyahat amacının net olmaması</li>
            <li>• Eksik veya tutarsız evrak</li>
            <li>• Önceki Schengen ihlalleri</li>
          </ul>

          <a
            href="/fransa-vize-reddi"
            className="inline-block mt-6 font-semibold hover:underline"
          >
            Fransa vize reddi sonrası ne yapılmalı? →
          </a>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-slate-900 text-white rounded-2xl p-12 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Fransa Vize Başvurunuzu Profesyonelce Yönetin
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Ankara’dan Fransa Schengen vizesi başvurunuzu eksiksiz
            hazırlayalım, ret riskinizi minimize edelim.
          </p>

          <a
            href="https://wa.me/905302199056"
            className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition"
          >
            WhatsApp ile Danışmanlık Al
          </a>

        </div>
      </section>

    </main>
  );
};

export default FransaVizeSayfasi;
