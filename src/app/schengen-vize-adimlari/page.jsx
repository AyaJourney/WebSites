import React from "react";
export const metadata = {
  title: "Schengen Vizesi Nasıl Alınır? | 6 Adımda Başvuru Rehberi 2026",
  description: "Schengen vize başvuru adımları, gerekli evraklar ve randevu süreci. 2026 güncel kurallarıyla Schengen vizesi almanın en hızlı yolu ve profesyonel ipuçları.",
  keywords: [
    "Schengen vize adımları",
    "Schengen vizesi nasıl alınır",
    "Schengen vize başvuru aşamaları",
    "vize randevusu nasıl alınır",
    "Schengen vizesi kaç günde çıkar",
    "Schengen vize evrak listesi 2026"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/vize-nedir", // Eğer bu bölüm 'vize nedir' sayfasındaysa
  },
  openGraph: {
    title: "Adım Adım Schengen Vizesi Alım Rehberi",
    description: "Vize sürecini karmaşadan kurtarıyoruz. 6 basit adımda vizenizi nasıl alacağınızı öğrenin.",
    images: [{ url: 'https://www.ayajourney.com/images/schengen-rehberi.jpg' }],
  },
};
const SchengenSteps = () => {
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Schengen Vizesi Nasıl Alınır? 6 Adımda Başvuru Rehberi",
      "description": "Schengen vize başvuru sürecini hatasız tamamlamanız için gereken tüm adımlar.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Ülke ve Vize Türü Seçimi",
          "text": "Seyahatinizin ana amacına göre hangi ülkeden başvuracağınızı belirleyin."
        },
        {
          "@type": "HowToStep",
          "name": "Randevu Oluşturma",
          "text": "iData, VFS Global veya AS Travel üzerinden uygun tarihli randevu alın."
        },
        {
          "@type": "HowToStep",
          "name": "Kusursuz Dosya Hazırlığı",
          "text": "Finansal belgeler, konaklama ve ulaşım rezervasyonlarını eksiksiz hazırlayın."
        }
      ]
    })
  }}
/>
       <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            6 Adımda <span className="text-blue-600">Schengen Vize Süreci</span>
          </h2>
          <p className="text-gray-500 text-lg">Hatasız bir başvuru için izlemeniz gereken yol haritası.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Adım 1 */}
          <div className="relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition group">
            <span className="absolute -top-6 left-8 bg-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">1</span>
            <h3 className="text-xl font-bold mb-3 mt-4">Doğru Ülke Seçimi</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              En çok kalacağınız veya ilk giriş yapacağınız ülkeyi belirlemek, vize onayının ilk kuralıdır.
            </p>
          </div>

          {/* Adım 2 */}
          <div className="relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition">
            <span className="absolute -top-6 left-8 bg-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">2</span>
            <h3 className="text-xl font-bold mb-3 mt-4">Randevu Slotu Yakalama</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              İstanbul ve Ankara'daki yoğunluk nedeniyle randevular hızla dolar. Profesyonel sistemimizle boşlukları sizin yerinize takip ediyoruz.
            </p>
          </div>

          {/* Adım 3 */}
          <div className="relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition">
            <span className="absolute -top-6 left-8 bg-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">3</span>
            <h3 className="text-xl font-bold mb-3 mt-4">Kişiselleştirilmiş Dosya</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Herkes için aynı liste değil, sizin mesleki durumunuza özel (emekli, çalışan, işveren) bir dosya kurguluyoruz.
            </p>
          </div>

          {/* Adım 4 */}
          <div className="relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition">
            <span className="absolute -top-6 left-8 bg-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">4</span>
            <h3 className="text-xl font-bold mb-3 mt-4">Biyometrik İşlemler</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Randevu günü parmak izi verme sürecinde size eşlik ediyor, tüm süreci kontrol altında tutuyoruz.
            </p>
          </div>

          {/* Adım 5 */}
          <div className="relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition">
            <span className="absolute -top-6 left-8 bg-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">5</span>
            <h3 className="text-xl font-bold mb-3 mt-4">Konsolosluk Değerlendirmesi</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Başvurunuz incelenirken biz sürecin her aşamasını takip ediyoruz. Eksik evrak talebi olursa anında müdahale ediyoruz.
            </p>
          </div>

          {/* Adım 6 - SEO KÖPRÜSÜ */}
          <div className="relative p-8 bg-blue-600 rounded-3xl text-white shadow-2xl flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-black mb-4 tracking-tight leading-tight italic">
              Vizenizi Hazırlayalım!
            </h3>
            <p className="text-sm opacity-90 mb-6">
              Schengen vizesi hakkında daha detaylı bilgi ve lokasyon bazlı hizmetlerimiz için sayfalarımıza göz atın.
            </p>
            <div className="flex flex-col gap-2 w-full">
              <a href="/schengen-vizesi" className="bg-white text-blue-600 py-2 rounded-xl text-xs font-bold hover:bg-blue-50 transition">
                Detaylı Bilgi
              </a>
              {/* <a href="/istanbul-schengen-vizesi" className="bg-white text-blue-600 py-2 rounded-xl text-xs font-bold hover:bg-blue-50 transition">
                İSTANBUL SCHENGEN →
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
 
  );
};

export default SchengenSteps;