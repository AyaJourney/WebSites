"use client";
import React, { useState } from "react";
import { hizmetlerimiz } from "../../helper/help";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

const CardHizmet = () => {
  return (
    <div className="w-full px-6 py-12 bg-zinc-50 d">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {hizmetlerimiz.map((item) => (
            <FlipCard key={item.id} item={item} />
          ))}
        </div>
        
      </div>
    <div className="w-full max-w-8xl flex justify-center items-center px-10 mt-5">
            {/* <Link href="/vize-hizmetleri">
               <button className="bg-white text-gray-700 cursor-pointer mt-5 border border-blue-300 px-4 py-2 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100">
          Daha Fazla Bilgi
        </button>
      </Link> */}
 
</div>
    </div>
  );
};

const FlipCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const backgroundImage = item.image ? item?.image : "/images/ornek.jpg";

  return (
    <div
      className="w-64 h-80 perspective cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isHovered
            ? "rotate-y-180 scale-105 shadow-2xl translate-z-2"
            : "shadow-md"
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Ön yüz */}
<div
  className="absolute w-full h-full backface-hidden rounded-2xl shadow-md flex flex-col justify-end p-5 text-white overflow-hidden"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="relative z-10">
    <h2 className="text-xl font-semibold">{item.title}</h2>
    <p className="text-sm line-clamp-3">{item.description}</p>
    <div className="mt-2 flex justify-end text-lg font-bold transition-transform duration-300">
      <FiArrowRight
        className={`transform ${isHovered ? "translate-x-1" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
      />
    </div>
  </div>
</div>



        {/* Arka yüz */}
        <div
          className="absolute w-full h-full backface-hidden rounded-2xl shadow-md p-5 flex flex-col justify-center text-white rotate-y-180"
          style={{
            background:
              "linear-gradient(135deg, rgba(34,197,94,0.85), rgba(16,185,129,0.85))",
            boxShadow: isHovered
              ? "0 20px 40px rgba(34,197,94,0.5)"
              : "0 10px 20px rgba(0,0,0,0.15)",
          }}
        >
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <p className="text-sm">{item.longDescription}</p>

          {/* Sol alt ikon */}
          <div className="absolute bottom-4 left-4 text-white text-lg transition-transform duration-300">
            <FiArrowLeft
              className={`transform ${isHovered ? "-translate-x-1" : ""}`}
              onMouseEnter={() => setIsHovered(false)}
            />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default CardHizmet;
