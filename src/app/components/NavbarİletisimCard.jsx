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
      <div className="max-w-[1320px] mx-auto px-4 py-1.5 flex flex-row justify-between items-center gap-4">

        {/* SOL – İLETİŞİM */}
        <div className="flex gap-4 items-center">
          <a
            href="tel:+903128701584"
            className="text-[15px] hover:text-emerald-600 transition whitespace-nowrap"
          >
            📞 +90 312 870 15 84
          </a>

          <a
            href="mailto:vizedestek@ayajourney.com"
            className="text-[15px]  hover:text-emerald-400 transition whitespace-nowrap hidden sm:inline"
          >
            ✉️ vizedestek@ayajourney.com
          </a>

          <a
            href="https://wa.me/905302199056"
            target="_blank"
            rel="noreferrer"
            className="text-[15px] hover:text-emerald-400 transition flex items-center gap-1 whitespace-nowrap"
          >
            <FaWhatsapp className="text-base" /> WhatsApp
          </a>
        </div>

        {/* SAĞ – SOSYAL + ARA */}
        <div className="flex gap-4 items-center">
          <a
            href="https://www.instagram.com/ayajourneyvize/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram className="text-[20px] "/>
          </a>

          <a
            href="https://www.linkedin.com/company/ayajourney/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedinIn  className="text-[20px] "/>
          </a>

          <a
            href="https://x.com/ayajourneyvize"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="hover:text-gray-300 transition"
          >
            <FaXTwitter className="text-[20px] " />
          </a>

          <a
            href="https://www.youtube.com/@aya.journey"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-500 transition"
          >
            <FaYoutube className="text-[20px] "/>
          </a>

          {/* 🔍 Arama + Tooltip */}
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
