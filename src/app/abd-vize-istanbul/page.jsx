import React from "react";

// 1. Metadata: İstanbul ve İstinye odaklı yerel SEO
export const metadata = {
  title: "ABD Vizesi İstanbul Başvuru ve Mülakat Rehberi | 2026",
  description: "ABD İstanbul Başkonsolosluğu vize mülakatı hakkında her şey. İstinye yerleşkesi ulaşım, mülakat hazırlığı ve İstanbul'da randevu öne çekme desteği.",
  keywords: ["abd vize istanbul", "amerika başkonsolosluğu istanbul vize randevusu", "istinye amerika vizesi mülakat", "sarıyer abd başkonsolosluğu ulaşım"],
  alternates: { canonical: "https://www.ayajourney.com/abd-vize-istanbul" }
};

const ABDIstanbulSayfasi = () => {
return (
  <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

    {/* HEADER */}
    <header className="text-center mb-20">
      <span className="bg-red-50 text-red-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-red-100">
        ABD Vize İstanbul Rehberi
      </span>

      <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
        ABD Vize İstanbul <br />
        <span className="text-red-600">
          Amerika Vize İstanbul İstinye Mülakat Rehberi
        </span>
      </h1>

      <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
        <strong>ABD vize İstanbul</strong> başvurusu yapacak adaylar için 
        İstinye’de bulunan Amerika Başkonsolosluğu mülakat sürecini,
        randevu adımlarını ve <strong>Amerika vize İstanbul danışmanlık</strong> 
        desteğini detaylı şekilde anlatıyoruz.
      </p>
    </header>


    {/* BAŞVURU SÜRECİ */}
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-6">
        Amerika Vize İstanbul Başvurusu Nasıl Yapılır?
      </h2>

      <p className="text-slate-600 leading-relaxed mb-6">
        Amerika vize İstanbul başvuruları DS-160 formunun doldurulması,
        vize ücretinin yatırılması ve İstanbul ABD Başkonsolosluğu’ndan
        mülakat randevusu alınması ile başlar.
      </p>

      <p className="text-slate-600 leading-relaxed">
        İstanbul Amerika vizesi mülakatında seyahat amacı,
        finansal durum ve Türkiye’ye geri dönüş planı değerlendirilir.
        İstinye’de yapılan mülakatlar genellikle hızlı ve nettir.
      </p>
    </section>


    {/* KONSolosluk ve LOKASYON */}
    <section className="grid md:grid-cols-2 gap-12 mb-24 items-center">
      <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-xl">
        <h3 className="text-2xl font-bold mb-6 text-red-500">
          📍 İstanbul ABD Başkonsolosluğu Adresi
        </h3>

        <p className="text-slate-300 mb-6 leading-relaxed">
          ABD Başkonsolosluğu Sarıyer, İstinye bölgesinde yer almaktadır.
          Amerika vize İstanbul mülakatları bu adreste yapılır.
        </p>

        <div className="bg-white/10 p-6 rounded-xl border border-white/20">
          <p className="text-sm text-red-300 mb-2 uppercase tracking-widest">
            Açık Adres:
          </p>
          <p className="font-bold text-sm">
            Poligon, Poligon Cd. No:75, 34460 Sarıyer / İstanbul
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6">
          İstanbul Amerika Vizesi Mülakatında Dikkat Edilmesi Gerekenler
        </h3>

        <ul className="space-y-4 text-slate-600">
          <li>• Sabah trafiğini hesaba katın.</li>
          <li>• Elektronik eşyalar içeri alınmaz.</li>
          <li>• DS-160 ve randevu belgesi hazır olmalıdır.</li>
          <li>• Kısa ve net cevaplar verin.</li>
        </ul>
      </div>
    </section>


    {/* DANIŞMANLIK BLOĞU */}
    <section className="mb-24 bg-red-50 p-12 rounded-3xl border border-red-100">
      <h2 className="text-3xl font-black mb-6 text-center">
        Amerika Vize Danışmanlık İstanbul Hizmeti
      </h2>

      <p className="text-slate-600 max-w-3xl mx-auto text-center leading-relaxed mb-8">
        Aya Journey olarak İstanbul’da Amerika vize danışmanlık hizmeti sunuyoruz.
        ABD vize İstanbul başvuru sürecinde DS-160 form kontrolü,
        mülakat simülasyonu ve randevu planlaması konularında
        profesyonel destek sağlıyoruz.
      </p>

      <div className="flex justify-center gap-8 text-red-700 font-semibold">
        <span>✓ Evrak Kontrolü</span>
        <span>✓ Mülakat Eğitimi</span>
        <span>✓ Randevu Takibi</span>
      </div>
    </section>


    {/* FAQ - LONG TAIL YAKALAMA */}
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-8 text-center">
        İstanbul ABD Vizesi Hakkında Sık Sorulan Sorular
      </h2>

      <div className="space-y-6 max-w-3xl mx-auto">
        <div>
          <h3 className="font-bold text-lg">
            İstanbul ABD vize randevusu ne kadar sürede bulunur?
          </h3>
          <p className="text-slate-600 text-sm">
            Randevu süreleri dönemsel olarak değişir. İstanbul yoğunluk
            nedeniyle Ankara’ya göre daha farklı tarihler verebilir.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg">
            İstanbul’da Amerika vizesi almak zor mu?
          </h3>
          <p className="text-slate-600 text-sm">
            İstanbul’da mülakatlar genellikle kısa sürer.
            Doğru hazırlık ile onay alma ihtimali artar.
          </p>
        </div>
      </div>
    </section>


    {/* CTA */}
    <section className="bg-slate-900 rounded-3xl p-12 text-center text-white shadow-2xl border-t-8 border-red-600">
      <h2 className="text-3xl md:text-4xl font-black mb-6">
        ABD Vize İstanbul Süreciniz İçin Destek Alın
      </h2>

      <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
        Amerika vize İstanbul başvurunuzu riske atmayın.
        İstinye mülakatına profesyonel hazırlık ile girin.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a
          href="https://wa.me/905302199056"
          className="bg-red-600 text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
        >
          İstanbul İçin Destek Al
        </a>

        <a
          href="/iletisim"
          className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition"
        >
          Ofis Randevusu
        </a>
      </div>
    </section>

  </main>
);

};

export default ABDIstanbulSayfasi;