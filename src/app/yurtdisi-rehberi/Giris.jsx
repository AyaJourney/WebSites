import React from "react";

const Giris = () => {
  return (
    <div className="w-full font-sans bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.14),transparent_30%)]">
      {/* Üst görsel alanı */}
      <div className="relative w-full h-[40vh]">
 

       
        <div className="absolute inset-0 gap-6"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <h1 className="text-black text-3xl md:text-5xl font-bold drop-shadow-lg">
            Yurt Dışı Rehberi
          </h1>
              <p className="text-black text-center md:text-lg">
          Eğitim, iş, ticaret ve diğer vize danışmanlık ihtiyaçlarınız için AYA Journey olarak her zaman yanınızdayız!
        </p>
        </div>


      </div>


    
    </div>
  );
};

export default Giris;
