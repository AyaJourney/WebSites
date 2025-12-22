"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import NavbarİletisimCard from "./NavbarİletisimCard";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMega, setOpenMega] = useState(null);
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Hakkımızda",
      href: "/hakkimizda",
      description:
        "2022 yılında kurulan AYA Journey, seyahat ve uluslararası deneyimlerin kapılarını açma misyonuyla yola çıktı.",
      submenu: [
        { name: "Biz Kimiz", href: "/biz-kimiz" },
        { name: "Referanslarımız", href: "/referanslarimiz" },
        { name: "Yorumlar", href: "/hakkimizdaki-yorumlar" },
        { name: "İletişim", href: "/iletisim" },
      ],
    },
    {
      name: "Hizmetlerimiz",
      href: "/hizmetlerimiz",
      description: "Aya Journey tarafından sunulan hizmetler.",
      submenu: [
        { name: "Amerika Vizesi", href: "/amerika-vizesi" },
        { name: "Schengen Vizesi", href: "/schengen-vizesi" },
        { name: "İngiltere Vizesi", href: "/ingiltere-vizesi" },
        { name: "Portekiz D7 Vizesi", href: "/portekiz-d7-vize" },
        { name: "Yurt Dışı Eğitim & Kariyer Programları", href: "/egitim" },

      ],
    },
    {
      name: "Formlar",
      href: "/formlar",
      description: "Vize başvurularında kullanılan resmi formlar.",
      submenu: [
        { name: "Amerika DS-160 Vize Başvuru Formu", href: "/form/ds-160" },
        { name: "Schengen Vize Başvuru Formu", href: "/form/schengen" },
        { name: "Birleşik Krallık Vize Başvuru Formu", href: "/form/birlesik-krallik-bilgi-fisi" },
        { name: "Kanada Vize Başvuru Formu", href: "/form/kanada-basvuru-formu" },
      ],
    },
    { name: "Yurt Dışı Rehberi", href: "/yurtdisi-rehberi" },
    { name: "Sıkça Sorulan Sorular", href: "/sikca-sorulan-sorular" },
    { name: "Hadi Başlayalım !", href: "/randevu" },
  ];

  return (
    <nav
      className="bg-white shadow-md sticky top-0 z-50"
      // onMouseLeave={() => setOpenMega(null)}
    >
      {/* BAR */}
      <div className="w-full max-w-[1320px] mx-auto px-4 flex justify-between h-24 items-center">
        {/* Logo */}
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="AYA Journey"
            width={250}
            height={100}
            className="cursor-pointer"
          />
        </Link>

        {/* BURGER – TABLET & MOBİL */}
        <div className="xl:hidden">
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              setOpenMega(null);
            }}
            className="text-2xl focus:outline-none"
            aria-label="Menüyü aç"
          >
            ☰
          </button>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden xl:flex space-x-6 items-center min-w-0">
          {menuItems.map((item) =>
            item.submenu ? (
              <div
                key={item.href}
                onClick={() => setOpenMega(openMega === item.href ? null : item.href)}
                className="relative"
              >
                <span
                  className={`text-[17px] flex items-center gap-1 cursor-pointer transition
                    ${
                      pathname.startsWith(item.href) || openMega === item.href
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                >
                  {item.name}
                  {openMega === item.href ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[17px] px-3 py-2 rounded transition
                  ${
                    item.name === "Hadi Başlayalım !"
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : pathname === item.href
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                // onMouseEnter={() => setOpenMega(null)}
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </div>

      {/* MEGA MENU – SADECE DESKTOP */}
      {openMega && (
        <div className="hidden xl:block absolute top-full left-0 w-full bg-white shadow-lg z-50">
          <div className="max-w-[1130px] mx-auto p-6 flex gap-6">
            <div className="w-1/2 text-gray-600 flex flex-col justify-center items-center">
              <p className="mb-4">
                {menuItems.find((m) => m.href === openMega)?.description}
              </p>
              {/* <NavbarİletisimCard /> */}
            </div>

            <div className="w-1/2 flex flex-col gap-2">
              {menuItems
                .find((m) => m.href === openMega)
                ?.submenu.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="text-gray-700 hover:text-blue-600 font-medium underline underline-offset-4"
                  >
                    {sub.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE / TABLET MENU */}
      {menuOpen && (
        <div className="xl:hidden px-4 pt-2 pb-4 bg-white border-t space-y-2">
    <NavbarİletisimCard />

          {menuItems.map((item) =>
            item.submenu ? (
              <div key={item.href}>
                <button
                  className="w-full text-left py-2 font-semibold text-gray-700"
                  onClick={() =>
                    setOpenMega(openMega === item.href ? null : item.href)
                  }
                >
                  {item.name}
                </button>

                {openMega === item.href &&
                  item.submenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block py-2 pl-5 text-gray-700 hover:bg-blue-100"
                      onClick={() => {
                        setMenuOpen(false);
                        setOpenMega(null);
                      }}
                    >
                      {sub.name}
                    </Link>
                  ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 px-3 rounded
                  ${
                    item.name === "Hadi Başlayalım !"
                      ? "bg-red-600 text-white"
                      : "text-gray-700 hover:bg-blue-100"
                  }`}
                onClick={() => {
                  setMenuOpen(false);
                  setOpenMega(null);
                }}
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      )}
      {/* MOBILE MENU */}

    </nav>
  );
}
