"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function NavbarİletisimCard({
  phone = "+903128701584",
  email = "vizedestek@ayajourney.com",
}) {
  const telHref = `tel:${phone.replace(/\s+/g, "")}`;
  const mailHref = `mailto:${email}`;

  return (
    <div className="w-full max-w-xl mx-auto mt-4">
      <div
        className="
        backdrop-blur-md 
        bg-white/70 
       
        rounded-2xl 
       
        px-6 py-6
        flex flex-col 
        items-center
      "
      >
        <div className="mb-4 w-full flex items-start justify-start">
            
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900 ">
          Bize Ulaşın
        </h3>
        </div>
       

        {/* Telefon + Mail Satırı */}
        <div
          className="
          w-full 
          flex items-center justify-between 
          gap-6
        "
        >
          {/* Telefon */}
          <a
            href={telHref}
            className="flex items-center gap-3 group cursor-pointer"
            aria-label="Telefon aç"
          >
            <div
              className="
              p-3 rounded-full 
              bg-white 
              shadow-sm 
              border border-gray-100 
              group-hover:scale-110 transition
            "
            >
              <FaPhoneAlt className="text-blue-600 w-[18px] h-[18px]" />
            </div>

            <span
              className="
              text-sm font-medium 
              text-gray-800 
              group-hover:text-blue-600 
              transition
            "
            >
              {phone}
            </span>
          </a>

          {/* Mail */}
          <a
            href={mailHref}
            className="flex items-center gap-3 group cursor-pointer"
            aria-label="Mail aç"
          >
            <div
              className="
              p-3 rounded-full 
              bg-white 
              shadow-sm 
              border border-gray-100
              group-hover:scale-110 transition
            "
            >
              <FaEnvelope className="text-blue-600 w-[18px] h-[18px]" />
            </div>

            <span
              className="
              text-sm font-medium 
              text-gray-800 dark:text-gray-900 
              group-hover:text-blue-600 transition
            "
            >
              {email}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
