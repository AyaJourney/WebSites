"use client";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SearchIcon from "./SearchIcon";
import Header from "./Header";

export default function TopContactBar() {
  return (
<div className="w-full bg-slate-900 text-slate-100 text-[13px] leading-none">
  <div className="lg:max-w-1320 mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between gap-3">

    {/* SOL – İLETİŞİM */}
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center">

      {/* Telefon */}
      <a
        href="tel:+903128701584"
        className="lg:text-[15px] hover:text-emerald-600 transition whitespace-nowrap"
      >
        📞 +90 312 870 15 84
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/905302199056"
        target="_blank"
        rel="noreferrer"
        className="lg:text-[15px] hover:text-emerald-400 transition flex items-center gap-1 whitespace-nowrap"
      >
        <FaWhatsapp className="text-base" /> WhatsApp
      </a>

      {/* Mail – mobilde WhatsApp altına iner */}
      <a
        href="mailto:vizedestek@ayajourney.com"
        className="lg:text-[15px] hover:text-emerald-400 transition whitespace-nowrap"
      >
        ✉️ vizedestek@ayajourney.com
      </a>
    </div>

    {/* SAĞ – SOSYAL + ARA */}
    <div className="flex gap-4 items-center justify-start sm:justify-end">

      <a
        href="https://www.instagram.com/ayajourneyvize/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-pink-500 transition"
      >
        <FaInstagram className="text-[18px]" />
      </a>

      <a
        href="https://www.linkedin.com/company/ayajourney/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-blue-500 transition"
      >
        <FaLinkedinIn className="text-[18px]" />
      </a>

      <a
        href="https://x.com/ayajourneyvize"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        className="hover:text-gray-300 transition"
      >
        <FaXTwitter className="text-[18px]" />
      </a>

      <a
        href="https://www.youtube.com/@aya.journey"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="hover:text-red-500 transition"
      >
        <FaYoutube className="text-[18px]" />
      </a>

      {/* 🔍 Arama */}
      <div className="relative group">
        <Header />
        <div className="absolute right-0 top-full mt-2 px-3 py-1 rounded-md bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
          Ara
        </div>
      </div>
    </div>

  </div>
</div>

  );
}
