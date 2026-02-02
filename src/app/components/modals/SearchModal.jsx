"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { searchMap } from "@/helper/searchMap";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const handleSearch = (e) => {
    e.preventDefault();

    const normalizedQuery = query.toLowerCase().trim();
    const matchedKey = Object.keys(searchMap).find((key) =>
      normalizedQuery.includes(key)
    );

    onClose();

    if (matchedKey) {
      router.push(searchMap[matchedKey]);
    } else {
      router.push("/iletisim");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-20 mt-24 w-full max-w-3xl px-6">
        <div className="rounded-2xl bg-white/90 shadow-xl backdrop-blur-xl animate-searchDrop">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <p className="text-sm text-gray-500">
              Vize & Yurt Dışı Eğitim Araması
            </p>

            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black transition"
              aria-label="Kapat"
            >
              ✕
            </button>
          </div>

          {/* Input */}
          <form onSubmit={handleSearch} className="px-6 py-6">
            <input
              autoFocus
              type="text"
              placeholder="Amerika vizesi, İngiltere, Schengen, Portekiz D7..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
             className="w-full bg-transparent text-2xl text-gray-900 placeholder-gray-400 outline-none focus:placeholder-gray-300"
            />

            <p className="mt-3 text-sm text-gray-400">
              Enter’a basarak arama yapabilirsiniz
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
