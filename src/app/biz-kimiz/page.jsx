
import React from "react";

export const metadata = {
  title: "Hakkımızda | Aya Journey",
  description: "Vize, eğitim ve yatırım danışmanlığı hizmetleri sunan firma hakkında bilgiler.",
};

const Hakkimizda = () => {
  
  return (
    <main className="min-h-screen font-sans text-gray-900 py-20 lg:py-28 px-4 sm:px-8 xl:px-16 overflow-hidden relative">

      {/* Arka Plan Şekilleri */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/40 to-teal-200/30 rounded-full blur-3xl opacity-40 animate-pulse-slow" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-gradient-to-tr from-teal-300/40 to-blue-200/30 rounded-full blur-3xl opacity-40 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Başlık Bölümü */}
        <header className="text-center mb-16 lg:mb-24">
          <h1 className="text-6xl sm:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500 tracking-tight leading-none">
            Biz Kimiz?
          </h1>
          <p className="mt-4 text-xl font-semibold text-teal-600 uppercase tracking-widest animate-fade-in">
            Sizin İçin Farklı Bir Yol Çiziyoruz.
          </p>
        </header>

        {/* Ana İçerik */}
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Sol Taraf: Metin İçeriği */}
          <div className="lg:w-1/2 space-y-8 order-2 lg:order-1 animate-fade-in-left">
            
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl border-l-4 border-gradient-to-r from-blue-500 to-teal-400 transition-transform hover:scale-[1.02] duration-500">
              <p className="text-xl font-semibold text-gray-800 leading-relaxed">
                Aya Journey olarak, 2022'den bu yana Ankara Çukurambar'dan başlayan yolculuğumuzda, danışanlarımızın vize, eğitim ve yatırım hedeflerine ulaşmaları için <span className="text-teal-500 font-bold">kişiye özel, bütüncül bir deneyim</span> sunuyoruz.
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Kısa sürede, güven odaklı yaklaşımımız sayesinde sektörün önde gelen firmalarından biri haline geldik. Bugün, <span className="text-blue-500 font-semibold">Ankara ve İstanbul Maslak</span> ofislerimizle Türkiye genelinde hizmet veriyor, her bir dosyayı ayrı bir proje titizliğiyle ele alıyoruz.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg font-medium text-blue-600">
              <li className="flex items-center space-x-2">
                <span className="text-teal-500 text-2xl">✔</span> <span>ABD, BK, Kanada Vizeleri</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-teal-500 text-2xl">✔</span> <span>Schengen ve Dubai Vizeleri</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-teal-500 text-2xl">✔</span> <span>Eğitim ve Yatırım Danışmanlığı</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-teal-500 text-2xl">✔</span> <span>10 Kişilik Profesyonel Kadro</span>
              </li>
            </ul>

            <p className="text-lg text-gray-600 leading-relaxed pt-4 border-t border-gray-200">
              Mottomuz olan <span className="font-extrabold text-gradient bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">“Bir Şeyleri Farklı Yapmaya Çalışıyoruz.”</span> yaklaşımıyla, danışmanlığı sadece evrak işi olmaktan çıkarıp, size özel bir başarı hikayesine dönüştürmeyi hedefliyoruz.
            </p>
          </div>

          {/* Sağ Taraf: Görsel */}
          <div className="lg:w-1/2 flex flex-col gap-10 order-1 lg:order-2 animate-fade-in-right">

            <div className="relative w-full rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-gray-400/30 transform transition duration-700 hover:scale-[1.03] border border-gray-100 ">
              <img
                src="/images/aya_logo_svg.svg" 
                alt="Aya Journey Ekibi"
                className="object-contain w-full h-full opacity-90"
              />
            </div>
<blockquote className="relative p-8 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105 bg-gradient-to-r from-blue-50 to-teal-50 border-l-8 border-teal-400 overflow-hidden">
  {/* Büyük tırnak işareti arka planda */}
  <span className="absolute -top-6 -left-4 text-9xl font-extrabold text-teal-100 opacity-20 select-none pointer-events-none">
    ❝
  </span>

  <p className="relative text-2xl sm:text-3xl md:text-4xl font-extrabold italic text-gray-900 leading-snug">
    Bir Şeyleri <span className="text-teal-500">Farklı Yapmaya Çalışıyoruz.</span>
  </p>

  {/* Alt sağ köşeye küçük renkli shape */}
  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tr from-blue-200 to-teal-300 rounded-full opacity-40 rotate-12 pointer-events-none"></div>
</blockquote>


          </div>

        </section>
      </div>
    </main>
  );
};

export default Hakkimizda;
