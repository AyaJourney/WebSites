"use client";
import React, { useState, useEffect, useRef } from "react";
import { hizmetlerimiz } from "../../helper/help";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";


const CardHizmet = () => {
  const containerRef = useRef(null);

  // Kart animasyonlarını scroll ile tetikleyen IntersectionObserver
  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".card-rise-init");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full px-6 py-12 bg-zinc-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          
          {hizmetlerimiz.map((item) => (
            <FlipCard key={item.id} item={item} />
          ))}

        </div>
      </div>

      <div className="w-full max-w-8xl flex justify-center items-center px-10 mt-5"></div>
    </div>
  );
};

const FlipCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const backgroundImage = item.image ? item.image : "/images/ornek.jpg";

  return (
    <div
      className="card-rise-init w-64 h-80 perspective cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
    >
      <div
        className={`relative rounded-2xl w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isHovered
            ? "rotate-y-180 scale-105 shadow-2xl"
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
              <FiArrowRight className={`${isHovered ? "translate-x-1" : ""}`} />
            </div>
          </div>
        </div>

        {/* Arka yüz */}
        <div
          className="absolute w-full h-full backface-hidden rounded-2xl shadow-md p-5 flex flex-col justify-center text-white rotate-y-180"
       style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <p className="text-sm">{item.longDescription}</p>

          <div className="absolute bottom-4 left-4 text-white text-lg transition-transform duration-300">
            <FiArrowLeft className={`${isHovered ? "-translate-x-1" : ""}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHizmet;
