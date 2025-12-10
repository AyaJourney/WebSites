"use client";
import React from "react";
import SmartImage from "../components/SmartImage";
import { abroad } from "../../helper/help";
import Link from "next/link";

const Card = () => {
  return (
    <div className="w-full px-6 py-12 bg-zinc-50 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {abroad.map((item) => (
            <div
              key={item.id}
              className="relative cursor-pointer bg-white dark:bg-zinc-900 rounded-2xl shadow-md overflow-hidden w-full max-w-xs transition-all duration-300  hover:shadow-2xl"
            
            >
              <Link href={item.address} aria-placeholder={item.title}>

                      <div className="relative w-full h-44 overflow-hidden rounded-t-2xl">
                <SmartImage
                  src={item.image}
                  alt={item.title}
                  priority={true}
                />
              </div>



              {/* İçerik */}
              <div className="p-5 flex flex-col h-[220px] justify-between relative z-10">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                    {item.shortDescription}
                  </p>
                  {/* Örnek etiket */}
       <div className="mt-2 flex flex-wrap gap-2">
  {item?.etiketler?.map((etiket, index) => {
    // Renkleri sırayla atayalım (artık bg yerine text ve border için kullanacağız)
    const renkler = [
      { text: "text-blue-700", border: "border-blue-700" },
      { text: "text-green-700", border: "border-green-700" },
      { text: "text-orange-700", border: "border-orange-700" }
    ];

    const renk = renkler[index % renkler.length];

    return (
      <span
        key={index}
        className={`
          bg-white 
          ${renk.text} 
          ${renk.border}
          border 
          text-xs px-2 py-1 rounded-full min-w-[60px] text-center
        `}
      >
        {etiket}
      </span>
    );
  })}
</div>


                </div>

                {/* <button
                  className="mt-4 w-full py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all cursor-pointer"
                >
                  Daha Fazla
                </button> */}
              </div>
              </Link> 
         
              {/* Resim */}
          
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
