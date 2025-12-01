// src/app/randevu/Card.jsx
"use client";
import React, { useState } from "react";
import RandevuCard from "./RandevuCard";
import Image from "next/image";
import { titleCase } from "@/helper/help"; // Veri kaynağınız

const Card = () => {
  const [randevuOpen, setRandevuOpen] = useState(false);
  const [person, setPerson] = useState(null);

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-10">
      {!randevuOpen ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
          {titleCase.map((item) => (
            <div
              key={item.id}
              title="Randevu oluştur"
              className="max-w-xs w-full bg-white rounded-2xl shadow-lg p-4 sm:p-5 flex flex-col items-center space-y-3 sm:space-y-4 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => {
                setRandevuOpen(true);
                setPerson(item);
              }}
            >
              <div className="flex items-center w-full gap-3">
                <Image
                  src={item.photo}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover border-2 border-blue-400" // Border rengi güncellendi
                />
                <div>
                  <h2 className="text-base sm:text-md font-semibold text-gray-900">
                    {item.name}
                  </h2>
                  <p className="text-sm text-blue-600 text-start font-medium"> 
                    {item.title}
                  </p>
                </div>
              </div>
              
              {/* Vurgulu Açıklama (Yeni Yapı: descriptions dizisi) */}
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside pl-1 w-full text-left">
                {/* descriptions alanının varlığını kontrol et (id:1'deki gibi) */}
                {item.descriptions ? ( 
                    item.descriptions.map((desc, index) => (
                        <li key={index} className="leading-tight text-start">
                            {desc}
                        </li>
                    ))
                ) : (
                    // Eğer descriptions yoksa (eski description yapısı kaldıysa diye önlem)
                    <li className="leading-tight text-justify">{item.description}</li>
                )}
              </ul>
              
            </div>
          ))}
        </div>
      ) : (
        <RandevuCard person={person} setRandevuOpen={setRandevuOpen} />
      )}
    </div>
  );
};

export default Card;