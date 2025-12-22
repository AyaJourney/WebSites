"use client";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function TopContactBar() {
  return (
    <div className="w-full bg-slate-900 text-slate-100 text-sm">
      <div className="max-w-[1320px] mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-3">

        {/* SOL – İLETİŞİM */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
          <a
            href="tel:+903128701584"
            className="hover:text-emerald-400 transition"
          >
            📞 +90 312 870 15 84
          </a>

          <a
            href="mailto:vizedektek@ayajourney.com"
            className="hover:text-emerald-400 transition"
          >
            ✉️ vizedektek@ayajourney.com
          </a>

          <a
            href="https://wa.me/905302199056"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 transition flex items-center gap-1"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

        {/* SAĞ – SOSYAL */}
        <div className="flex gap-4 items-center">
          <a
            href="https://www.instagram.com/ayajourneyvize/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/company/ayajourney/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://x.com/ayajourneyvize"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="hover:text-gray-300 transition"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.youtube.com/@aya.journey"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-500 transition"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}
