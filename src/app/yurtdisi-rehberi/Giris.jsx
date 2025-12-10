import React from "react";

const Giris = () => {
  return (
    <div className="w-full font-sans">
      {/* Üst görsel alanı */}
      <div className="relative w-full h-[70vh]">
        <img
          src="./images/ornek.avif"
          alt="Aya Journey Arka Plan"
          className="w-full h-full object-cover"
        />

       
        <div className="absolute inset-0 bg-black/60 gap-6"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
            Yurt Dışı Rehberi
          </h1>
              <p className="text-white text-base md:text-lg">
          Eğitim, iş, ticaret ve diğer vize danışmanlık ihtiyaçlarınız için AYA Journey olarak her zaman yanınızdayız!
        </p>
        </div>


      </div>


    
    </div>
  );
};

export default Giris;
