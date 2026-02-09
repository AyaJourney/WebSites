"use client";
import { useState } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HomeSideNav = () => {
  const [open, setOpen] = useState(false);

  const items = [
    { label: "Giriş", href: "#giris-1" },
    { label: "Amerika vize", href: "#giris-2" },
    { label: "İngiltere vize", href: "#giris-3" },
    { label: "Schengen vize", href: "#giris-4" },
    { label: "Amerika staj programı", href: "#giris-6" },
    { label: "Portekiz D7 vize", href: "#giris-7" },
    { label: "Hizmetlerimiz", href: "#giris-8" },
    { label: "Referanslarımız", href: "#giris-9" },
    { label: "Neden Biz?", href: "#giris-11" },
    { label: "Google yorumlar", href: "#giris-13" },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex items-center">

      {/* OK */}
<div className="relative group flex items-center">
  {/* Tooltip: Butonun soluna veya sağına göre konumu ayarlanabilir */}
  <span className="absolute right-12 scale-0 transition-all rounded-lg bg-slate-900 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-white group-hover:scale-100 whitespace-nowrap shadow-xl z-50">
    {open ? "Menüyü Kapat" : "Menüyü Aç"}
    {/* Küçük bir ok ucu ekleyelim (Opsiyonel) */}
    <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
  </span>

  <button
    onClick={() => setOpen(!open)}
    aria-label={open ? "Menüyü Kapat" : "Menüyü Aç"} // SEO ve Erişilebilirlik için kritik
    className="h-28 w-10 flex items-center justify-center bg-white/30 backdrop-blur border border-white/40 rounded-l-2xl shadow-md hover:bg-white/50 transition cursor-pointer"
  >
    {open ? (
      <FaChevronRight className="text-slate-700" />
    ) : (
      <FaChevronLeft className="text-slate-700" />
    )}
  </button>
</div>

      {/* PANEL */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out
        ${open ? "w-64 opacity-100" : "w-0 opacity-0"}`}
      >
        <nav
          className="bg-white/30 backdrop-blur-md border border-white/40 rounded-l-2xl px-4 py-5 shadow-lg"
        >
          <ul className="flex flex-col gap-2">
            {items.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-slate-800 cursor-pointer rounded-md transition hover:bg-white/40 hover:border hover:border-blue-400/60 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HomeSideNav;
