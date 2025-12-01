"use client";

import React, { useState} from "react";

import Contact from "./Contact";

const IletisimClient = () => {

  const [location, setLocation] = useState("ankara");

  // Map URL’leri
  const mapUrls = {
    ankara:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.4469647703336!2d32.809882275841495!3d39.909012671525794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d349b988f4bea5%3A0x9c16ddcef1c2d4ae!2sAYA%20Journey!5e0!3m2!1str!2str!4v1762844298561!5m2!1str!2str",
    istanbul:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.1037583061943!2d29.0170220759039!3d41.11042497133646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab56507a9d513%3A0xdcd7ee8744a858e5!2zQVlBIEpvdXJuZXkgLSBLacWfaXNlbCBWaXplIERhbsSxxZ9tYW7EsQ!5e0!3m2!1str!2str!4v1762844545911!5m2!1str!2str",
  };
  // Dış tıklamada dropdown'u kapat


  return (
   <main className="flex flex-col w-full max-w-7xl mx-auto bg-zinc-50 font-sans  mt-20 px-4 md:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Sol taraf — Form */}

<Contact/>
        {/* Sağ taraf — Harita ve iletişim */}
 <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-4 w-full md:w-1/2 flex flex-col">
        {/* Butonlar */}
        <div className="flex gap-4 mb-4 justify-center">
          <button
            type="button"
            onClick={() => setLocation("ankara")}
    className={`
      w-1/2 px-4 py-2 rounded-lg font-semibold border transition
      ${
        location === "ankara"
          ? "bg-blue-600 text-white border-blue-600 shadow-lg"
          : "bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700"
      }
      cursor-pointer
    `}
          >
           Ankara
          </button>
          <button
            type="button"
            onClick={() => setLocation("istanbul")}
       className={`
      w-1/2 px-4 py-2 rounded-lg font-semibold border transition
      ${
        location === "istanbul"
          ? "bg-blue-600 text-white border-blue-600 shadow-lg"
          : "bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700"
      }
      cursor-pointer
    `}
          >
           İstanbul
          </button>
        </div>

        {/* Map */}
        <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src={mapUrls[location]}
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>

        {/* Adres bilgileri */}
{/* Adres */}
<div className="mt-6 p-4 rounded-xl border border-gray-200 dark:border-zinc-700 shadow-sm bg-white dark:bg-zinc-800 transition-all">
  {location === "ankara" && (
    <div className="space-y-2">
      <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">Ankara Paragon Tower</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Kızılırmak, Çukurambar, Ufuk Ünv. Cd No:3, 06510 Çankaya/Ankara
      </p>
      <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
        <span className="text-blue-500">📞</span> +90 312 870 15 84
      </p>
      <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
        <span className="text-green-500">📧</span> vizedestek@ayajourneys.com
      </p>
    </div>
  )}

  {location === "istanbul" && (
    <div className="space-y-2">
      <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">İstanbul Sun Plaza</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Maslak, Bilim Sk. No:5, 34398 Sarıyer/İstanbul
      </p>
      <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
        <span className="text-blue-500">📞</span> +90 312 870 15 84
      </p>
      <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
        <span className="text-green-500">📧</span> vizedestek@ayajourneys.com
      </p>
    </div>
  )}
</div>

      </div>

      </div>
    </main>
  );
};

export default IletisimClient;
