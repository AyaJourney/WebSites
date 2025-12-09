"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const references = [
  { name: "Speaker Agency", logo: "/referans/speaker.webp" },
  { name: "Bahçeşehir Koleji", logo: "/referans/bahcesehir.png" },
  { name: "Erenköy Çevre Koleji", logo: "/referans/cevre koleji.jpg" },
  { name: "Inavitas", logo: "/referans/inativas.png" },
  { name: "Alfa Solar Enerji", logo: "/referans/alfasolarlogo.webp" },
  { name: "Konyaspor", logo: "/referans/konya spor.jpg" },
  { name: "Kiler Holding", logo: "/referans/kiler holding.jpg" },
  { name: "Biletinial", logo: "/referans/bilet.png" },
];

const CardReferans = () => {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);

  const itemSize = 200; // Kare boyutu
 const gap =  200;
  const speed = 1; // px/frame

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setOffset((prev) => {
        const newOffset = prev - speed;
        const totalWidth = (itemSize + gap) * references.length;
        return newOffset <= -totalWidth ? 0 : newOffset;
      });
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

return (
  <div
    ref={containerRef}
    className="w-full h-screen overflow-hidden bg-gray-100 flex items-center relative"
  >
   <div className="absolute top-10 w-full flex justify-center z-10 px-4">
  <div className="text-center">


    {/* Ana başlık */}
    <h1 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">
      <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        AYA Journey’e Güvenenlerden Bazıları
      </span>
  
     
    </h1>



  </div>
</div>

    <div
      className="flex items-center absolute"
      style={{ transform: `translateX(${offset}px)` }}
    >
      {references?.concat(references).map((ref, idx) => (
       <div
  key={idx}
  className="flex flex-col items-center w-[200px] h-[200px] m-[100px] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden"
>
  {/* Resim alanı */}
  <div className="w-full h-[80%] flex items-center justify-center">
    <Image
      src={ref.logo}
      alt={ref.name}
      width={160}
      height={160}
      className="object-contain"
    />
  </div>

  {/* Firma adı + üst çizgi */}
  <div className="w-full h-[20%] flex items-center justify-center bg-white border-t border-gray-200">
    <p className="text-center text-gray-900 text-[15px] font-medium tracking-wide">
      {ref.name}
    </p>
  </div>
</div>

      ))}
    </div>
  </div>
);




};

export default CardReferans;
