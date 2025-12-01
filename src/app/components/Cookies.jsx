"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Cookies() {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false); // animasyon için

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShow(true);
      // küçük bir gecikme ile animasyon başlasın
      setTimeout(() => setVisible(true), 50);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    setTimeout(() => setShow(false), 300); // animasyon süresi kadar bekle
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
    setTimeout(() => setShow(false), 300);
  };

  if (!show) return null;

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[500px] bg-gray-900 text-white p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4 shadow-lg z-50
      transition-all duration-300 ease-in-out
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <p className="text-sm sm:text-base text-center sm:text-left">
        Bu site çerezleri ve benzeri teknolojileri kullanarak size daha iyi bir deneyim sunmayı amaçlamaktadır. 
        <Link href="/gizlilik-politikasi" className="underline hover:text-blue-400 ml-1">
          Gizlilik Politikası
        </Link>
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleReject}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition"
        >
          Reddet
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
        >
          Kabul Et
        </button>
      </div>
    </div>
  );
}
