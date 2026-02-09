"use client";

import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      {/* Uyarı İkonu */}
      <div className="bg-red-100 p-6 rounded-full mb-8 shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
          />
        </svg>
      </div>

      {/* Başlık ve Mesaj */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
        Bir Şeyler Yanlış Gitti
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 text-center max-w-lg mb-8">
        Üzgünüz, bir hata oluştu. Ama merak etmeyin, her şey kontrol altında!  
        Ana sayfaya dönerek tekrar başlayabilirsiniz.
      </p>

      {/* Ana Sayfa Butonu */}
      <Link href="/" className="transition-transform">
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
          Ana Sayfaya Dön
        </button>
      </Link>


    </main>
  );
};

export default ErrorPage;
