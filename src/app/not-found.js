"use client";
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Üzgünüz, aradığınız sayfa bulunamadı.
      </p>
      <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-500 transition">
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
