import React from "react";

export const metadata = {
  title: "Hakkımızda | Aya Journey",
  description: "Vize, eğitim ve yatırım danışmanlığı hizmetleri sunan firma hakkında bilgiler.",
};

const Hakkimizda = () => {
  return (
    <main className="min-h-screen font-sans text-gray-900 py-20 lg:py-28 px-4 sm:px-8 xl:px-16 relative overflow-hidden">

      {/* Soft Background Accents */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <header className="text-center mb-16 lg:mb-24">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-neutral-900 tracking-tight">
            Biz Kimiz?
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-[#0d8cff] font-medium tracking-wide">
            Sizin İçin En Doğru Yolu Tasarlıyoruz.
          </p>
        </header>

        {/* Content */}
        <section className="flex flex-col lg:flex-row gap-14 items-center">

          {/* Left — Text Content */}
          <div className="lg:w-1/2 space-y-10 order-2 lg:order-1 bg-[#f9fafb]">

            {/* Highlight Box */}
            <div className=" backdrop-blur-md p-7 md:p-8 rounded-2xl bg-[#f9fafb] transition-all duration-300 hover:shadow-md">
              <p className="text-xl font-semibold text-gray-800 leading-relaxed">
                Aya Journey olarak, 2022’den bu yana danışanlarımızın vize, eğitim ve yatırım hedeflerine 
                ulaşmaları için <span className="text-[#0d8cff] font-bold">kişiye özel, güven odaklı bir danışmanlık deneyimi</span> sunuyoruz.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed transition-all duration-300 hover:shadow-md">
              Kurulduğumuz günden bu yana binlerce danışanımıza 
              <span className="text-[#0d8cff] font-semibold"> başarıyla eşlik ettik</span>.  
              Ankara ve İstanbul ofislerimizle Türkiye’nin her yerine hizmet sunarken,  
              her başvuruyu özel bir proje gibi ele alıyoruz.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg font-medium text-gray-800 bg-[#f9fafb] transition-all duration-300 hover:shadow-md">
              <li className="flex items-center gap-2">
                <span className="text-[#0d8cff] text-2xl">•</span> ABD, BK, Kanada Vizeleri
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0d8cff] text-2xl">•</span> Schengen & Dubai Vizeleri
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0d8cff] text-2xl">•</span> Eğitim ve Yatırım Danışmanlığı
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0d8cff] text-2xl">•</span> 10 Kişilik Profesyonel Kadro
              </li>
            </ul>

            <p className="text-lg text-gray-700 bg-[#f9fafb] border-t pt-6 border-gray-200 transition-all duration-300 hover:shadow-md">
              <span className="font-extrabold text-[#0d8cff]">
                “Bir Şeyleri Gerçekten Farklı Yapıyoruz.”
              </span>
              <br />
              Çünkü danışmanlığı sadece evrak hazırlamak değil,  
              <strong className="font-semibold"> doğru yol haritasını oluşturmak</strong> olarak görüyoruz.
            </p>
          </div>

          {/* Right — Visual Section */}
          <div className="lg:w-1/2 flex flex-col gap-10 order-1 lg:order-2">

            {/* Large Quote Box */}
            <blockquote className="relative p-8 rounded-2xl bg-[#f9fafb] transition-all duration-300 hover:shadow-md">
              {/* <span className="absolute -top-6 -left-4 text-8xl font-bold text-gray-300/30 select-none">
                ❝
              </span> */}

              <p className="relative text-2xl sm:text-3xl font-bold text-gray-800 leading-snug">
                Bir Şeyleri <span className="text-[#0d8cff]">Farklı Yapmaya</span> Çalışıyoruz
              </p>
            </blockquote>

            {/* Logo Image */}
            <div className="relative w-full rounded-2xl overflow-hidden aspect-[5/3] bg-[#f9fafb] transition-all duration-300 hover:shadow-md">
              <img
                src="/images/aya_logo_svg.svg"
                alt="Aya Journey Ekibi"
                className="object-contain w-full h-full opacity-95"
              />
            </div>

          </div>
        </section>
      </div>
    </main>
  );
};

export default Hakkimizda;
