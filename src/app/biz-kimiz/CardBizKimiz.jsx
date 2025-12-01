import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const CardBizKimiz = () => {
return (
  <div className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center font-sans gap-5 p-4 md:p-10">

    {/* Görsel Alan */}
    <div className="w-full md:w-1/2 flex items-center justify-center">
      <Image
        src="/images/ayalogoxl.png"
        alt="Giriş Resmi"
        width={600}
        height={400}
        className="object-contain"
      />
    </div>

    {/* Metin Alanı */}
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center mt-5 md:mt-0 md:ml-10 text-center md:text-left">

      {/* Başlık (Küçük) */}
      <h2 className="text-2xl font-semibold leading-relaxed text-gray-700">
        Vize Süreçlerinde Stresi <span className="text-red-500">Sıfırlayın.</span>
      </h2>

      {/* Ana Başlık (Büyük) */}
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold leading-relaxed mt-2">
        Hayallerinizdeki <span className="text-black">Seyahate İlk Adımı</span>
        <span className="italic text-blue-500 px-2 py-1 rounded ml-2 mr-2">
          Aya Journey
        </span>
        ile Atın.
      </h1>

      {/* Açıklama Paragrafı */}
      <p className="text-gray-600 mt-4 text-base sm:text-lg md:text-base text-justify">
        ABD, İngiltere, Portekiz ve tüm Schengen vizelerinde uzman ekibimizle, başvurularınızı en hızlı ve hatasız şekilde yönetiyoruz.
      </p>

      {/* Buton */}
      <div className="mt-5">
        <Link href="/randevu">
          <button className="bg-white text-gray-700 cursor-pointer mt-5 border border-blue-300 px-4 py-2 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100">
            Ücretsiz Ön Danışmanlık Alın
          </button>
        </Link>
      </div>

    </div>

  </div>
);

}

export default CardBizKimiz
