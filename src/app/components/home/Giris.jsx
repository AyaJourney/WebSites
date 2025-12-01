import React from 'react'
import Image from "next/image";
import "../../globals.css"
import Link from 'next/link';
const Giris = () => {
return (
  <div className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center font-sans gap-6 p-4 md:p-10">

    {/* Görsel Alan */}
    <div className="w-full md:w-1/2 lg:w-[700px] h-[250px] sm:h-[300px] md:h-[400px] relative flex-shrink-0">
      <Image
        src="/images/schengen3.jpg"
        alt="Hadi topla bavulları"
        fill
        className="object-cover md:object-center object-top rounded-xl mask-fade"
      />
    </div>

    {/* Metin Alanı */}
    <div className="w-full md:w-1/2 lg:w-[500px] flex flex-col items-start justify-center mt-5 md:mt-0 md:ml-10 text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed">
        Hadi, topla bavulları!
      </h1>
      <p className="mt-4 text-sm sm:text-base md:text-base lg:text-lg  text-justify">
        Eğitim, iş, ticaret ve diğer vize danışmanlık ihtiyaçlarınız için AYA Journey olarak
        her zaman yanınızdayız
      </p>
      <Link href="/randevu">
        <button className="bg-white text-gray-700 cursor-pointer mt-5 border border-blue-300 px-4 py-2 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100">
        Randevu Al
        </button>
      </Link>
    </div>

  </div>
)


}

export default Giris
