"use client";

import React, { useState, useEffect,useRef } from "react";
import CountryList from "country-list-with-dial-code-and-flag";

const Contact = ({ onClose, fullWidth = false }) => {
     const countries = CountryList.getAll(); 
  const [selected, setSelected] = useState(countries.find(c => c.code === "TR") || countries[0]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  return (
 <form className={`bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-10 w-full ${!fullWidth ? 'md:w-1/2' : ''}`}>
      {/* Başlık */}
      <div className="mb-6 border-b border-gray-300 dark:border-zinc-700 pb-4">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100 text-left">
          İletişim Formu
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Formu doldurduktan sonra en kısa zamanda temsilcimiz size dönüş sağlayacaktır.
        </p>
      </div>

      {/* Ad Soyad */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Adınız*
          </label>
          <input
          required
            type="text"
            placeholder="Adınızı girin"
            className="w-full border border-gray-300 dark:border-zinc-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Soyadınız*
          </label>
          <input
          required
            type="text"
            placeholder="Soyadınızı girin"
            className="w-full border border-gray-300 dark:border-zinc-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
          />
        </div>
      </div>

      {/* Mail ve Telefon */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Mail */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            E-posta*
          </label>
          <input
          required
            type="email"
            placeholder="ornek@mail.com"
            className="w-full border border-gray-300 dark:border-zinc-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
          />
        </div>

        {/* Telefon */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Telefon*
          </label>
          <div
            ref={dropdownRef}
            className="flex items-center border border-gray-300 dark:border-zinc-700 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 bg-white dark:bg-zinc-800"
          >
            {/* Dropdown */}
            <div className="relative flex-shrink-0">
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1 px-3 py-3 text-sm rounded-l-lg bg-white dark:bg-zinc-800 border-r border-gray-300 dark:border-zinc-700 focus:outline-none"
              >
                <span className="text-lg">{selected.flag}</span>
                <span className="ml-1">{selected.dial_code}</span>
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M5.25 7.5l4.5 4.5 4.5-4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </button>

              {open && (
                <ul className="absolute z-50 mt-1 w-56 max-h-60 overflow-auto bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-md shadow-lg text-sm">
                  {countries.map((c,index) => (
                    <li
                    key={`${c.code}-${index}`}
                      onClick={() => {
                        setSelected(c);
                        setOpen(false);
                      }}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer"
                    >
                      <span className="text-lg">{c.flag}</span>
                      <span className="flex-1">{c.name}</span>
                      <span className="text-gray-500">{c.dial_code}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Telefon input */}
            <input
            required
              type="tel"
              placeholder="5xx xxx xx xx"
              className="flex-1 p-3 text-sm bg-transparent focus:outline-none text-gray-900 dark:text-white rounded-r-lg"
            />
          </div>
        </div>
      </div>

      {/* Mesaj */}
      <div className="mb-8">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Mesajınız
        </label>
        <textarea
          rows="5"
          placeholder="Mesajınızı yazın..."
          className="w-full border border-gray-300 dark:border-zinc-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white resize-none"
        ></textarea>
      </div>

      {/* Gönder */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition"
        >
          Gönder
        </button>
      </div>
    </form>
  )
}

export default Contact
