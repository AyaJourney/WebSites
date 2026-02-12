import React from "react";

// 1. Metadata: ABD vize danışmanlığı odaklı SEO
export const metadata = {
  title: "Profesyonel ABD Vize Danışmanlığı | 2026 Mülakat Hazırlığı",
  description: "Amerika vizesi mülakat teknikleri, DS-160 formu doldurma ve randevu öne çekme desteği. ABD vize danışmanlığında uzman kadro ile onay şansınızı artırın.",
  keywords: ["abd vize danışmanlığı", "amerika vize danışmanı", "abd vize mülakat soruları", "ds-160 formu danışmanlık", "abd vizesi nasıl alınır"],
  alternates: { canonical: "https://www.ayajourney.com/abd-vize-danismanligi" }
};

const ABDDanismanlikSayfasi = () => {
return (
<main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

  {/* HERO */}
  <header className="text-center mb-20">
    <span className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
      Profesyonel ABD Vize Danışmanlığı
    </span>

    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
      ABD Vize Danışmanlığı <br />
      <span className="text-blue-600">
        Amerika Vize Danışmanlık Hizmeti
      </span>
    </h1>

    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
      <strong>Amerika vize danışmanlığı</strong> sürecinde DS-160 form doldurma,
      evrak kontrolü, mülakat simülasyonu ve stratejik başvuru planlaması sağlıyoruz.
      Hedefimiz başvurunuzu yalnızca “tam” değil, <strong>ikna edici</strong> hale getirmektir.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6">
      <a
        href="https://wa.me/905302199056?text=Amerika%20vize%20dan%C4%B1%C5%9Fmanl%C4%B1%C4%9F%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
        className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-500 transition"
      >
        Ücretsiz Ön Analiz
      </a>

      <a
        href="/amerika-vize-danismanligi-istanbul"
        className="bg-white border border-blue-600 text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition"
      >
        İstanbul Ofisi
      </a>

      <a
        href="/amerika-vize-danismanligi-ankara"
        className="bg-white border border-blue-600 text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition"
      >
        Ankara Ofisi
      </a>
    </div>
  </header>


  {/* HİZMET DETAY */}
  <section className="mb-24 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">
      Amerika Vize Danışmanlık Hizmeti Neleri Kapsar?
    </h2>

    <ul className="space-y-4 text-slate-600">
      <li>✓ Profil analizi ve risk haritası</li>
      <li>✓ DS-160 formunun stratejik doldurulması</li>
      <li>✓ Amerika vize evraklarının kontrolü</li>
      <li>✓ Mülakat simülasyonu</li>
      <li>✓ 214(b) risk analizi</li>
      <li>✓ Ret sonrası ikinci başvuru planı</li>
    </ul>

    <p className="mt-6 text-slate-600">
      Evrak listesi için
      <a href="/amerika-vize-evraklari" className="text-blue-600 underline ml-1">
        Amerika vize evrakları rehberini
      </a>
      inceleyebilirsiniz.
    </p>
  </section>


  {/* 214B BAĞLANTI */}
  <section className="mb-24 bg-red-50 border border-red-200 p-12 rounded-3xl">
    <h2 className="text-3xl font-black mb-6 text-center text-red-700">
      214(b) Reddi Aldıysanız
    </h2>

    <p className="text-slate-700 text-center max-w-3xl mx-auto leading-relaxed">
      Eğer ret mektubunuzda <strong>214(b)</strong> yazıyorsa,
      başvurunuzda göçmen niyeti şüphesi oluşmuştur.
      Aynı dosya ile tekrar başvurmak genellikle ikinci ret getirir.
    </p>

    <div className="text-center mt-6">
      <a
        href="/amerika-vize-reddi-dosya-analizi"
        className="text-red-600 font-bold underline text-lg"
      >
        Amerika Vize Reddi Dosya Analizi →
      </a>
    </div>
  </section>


  {/* ÜCRET BLOĞU */}
  <section className="mb-24 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">
      Amerika Vize Danışmanlık Ücreti
    </h2>

    <p className="text-slate-600 leading-relaxed mb-4">
      Danışmanlık ücreti başvuru türüne göre değişir:
    </p>

    <ul className="space-y-2 text-slate-600">
      <li>• B1/B2 Turistik Vize</li>
      <li>• F1 Öğrenci Vizesi</li>
      <li>• Ret Sonrası İkinci Başvuru</li>
      <li>• Karmaşık Finansal Dosyalar</li>
    </ul>

    <p className="mt-6 text-slate-600">
      Net fiyat bilgisi için ücretsiz ön değerlendirme yapılır.
    </p>
  </section>


  {/* GÜVEN BLOĞU */}
  <section className="mb-24 bg-slate-50 p-12 rounded-3xl border border-slate-200">
    <h2 className="text-3xl font-black mb-8 text-center">
      Neden Profesyonel Amerika Vize Danışmanı?
    </h2>

    <div className="grid md:grid-cols-2 gap-8 text-slate-600">
      <div>
        <h3 className="font-bold mb-2">Stratejik Başvuru</h3>
        <p>Başvurunuz yalnızca doldurulmaz, ikna edici hale getirilir.</p>
      </div>

      <div>
        <h3 className="font-bold mb-2">Ret Risk Azaltma</h3>
        <p>214(b) ve profil riskleri başvuru öncesinde analiz edilir.</p>
      </div>

      <div>
        <h3 className="font-bold mb-2">Mülakat Simülasyonu</h3>
        <p>
          <a href="/amerika-vize-mulakat-sorulari" className="text-blue-600 underline">
            Mülakat sorularına
          </a>
          profesyonel hazırlık yapılır.
        </p>
      </div>

      <div>
        <h3 className="font-bold mb-2">Ret Sonrası Uzmanlık</h3>
        <p>İkinci başvurular stratejik olarak yeniden yapılandırılır.</p>
      </div>
    </div>
  </section>


  {/* SEO DESTEK BLOK */}
  <section className="mb-24 border-t pt-12">
    <h2 className="text-2xl font-bold mb-6 text-center">
      Amerika Vizesi Hakkında Rehberler
    </h2>

    <div className="grid md:grid-cols-2 gap-4 text-blue-700 font-medium">
      <a href="/amerika-vizesi-kac-gunde-cikar" className="hover:underline">
        • Amerika Vizesi Kaç Günde Çıkar?
      </a>
      <a href="/amerika-vize-ucretleri" className="hover:underline">
        • Amerika Vize Ücretleri
      </a>
      <a href="/amerika-vize-214b" className="hover:underline">
        • 214(b) Maddesi Nedir?
      </a>
      <a href="/amerika-vizesi-en-iyi-danismanlik-sirketi" className="hover:underline">
        • En İyi Amerika Vize Danışmanlık Şirketi
      </a>
    </div>
  </section>


  {/* FINAL CTA */}
  <section className="bg-blue-700 rounded-3xl p-16 text-center text-white shadow-2xl">
    <h2 className="text-4xl md:text-5xl font-black mb-6">
      Amerika Vize Sürecinizi Riske Atmayın
    </h2>

    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
      DS-160 hataları, mülakat stresi ve 214(b) riskini azaltmak için
      profesyonel destek alın.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-6">
      <a
        href="https://wa.me/905302199056?text=Amerika%20vize%20dan%C4%B1%C5%9Fmanl%C4%B1%C4%9F%C4%B1%20i%C3%A7in%20bilgi%20almak%20istiyorum."
        className="bg-white text-blue-700 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
      >
        WhatsApp’tan Başla
      </a>

      <a
        href="/iletisim"
        className="bg-blue-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-black transition"
      >
        Ofis Randevusu
      </a>
    </div>
  </section>

</main>

);

};

export default ABDDanismanlikSayfasi;