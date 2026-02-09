"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import NavbarİletisimCard from "./NavbarİletisimCard";
import NextImage from 'next/image';
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
    { name: "AYA Blog", href: "/blog" },
    { name: "Vize alma ihtimalinizi ölçün!", href: "/vize-alma-ihtimalinizi-olcun" },
  ];
const mobileMenuItems = menuItems.filter(
  (item) => item.name !== "Formlar"
);

const mobileFormsItem = menuItems.find(
  (item) => item.name === "Formlar"
);
return (
  <nav className="bg-white shadow-md sticky top-0 z-50">

    {/* ================= TOP BAR ================= */}
    <div className="w-full max-w-[1520px] mx-auto px-4 flex justify-between h-24 items-center gap-4">

      {/* LOGO */}
 <Link href="/" className="inline-block relative">
  <NextImage
    src="/images/logo.webp"
    alt="AYA Journey Logo"
    width={250}
    height={100}
    priority
    // Stil çakışmasını önlemek için sadece gerekli sınıfları bırakıyoruz
    className="cursor-pointer object-contain" 
    // Eğer resim hala çok büyük veya küçükse style ile zorlayabiliriz:
    style={{ width: '250px', height: 'auto' }}
  />
</Link>

      {/* BURGER – MOBILE & TABLET */}
      <div className="xl:hidden lg:mr-10">
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
            setOpenMega(null);
          }}
          className="text-2xl"
          aria-label="Menüyü aç"
        >
          ☰
        </button>
      </div>

      {/* ================= DESKTOP MENU ================= */}
 <div className="hidden xl:flex space-x-4 xl:space-x-8 items-center justify-end">
  {menuItems.map((item) =>
    item.submenu ? (
      <div
        key={item.href}
        onClick={() => setOpenMega(openMega === item.href ? null : item.href)}
        className="relative cursor-pointer"
      >
        {/* whitespace-nowrap eklendi: Asla alt satıra geçmez */}
        {/* text-[15px] varsayılan (1280px'den itibaren), 2xl'de 17px olur */}
        <span
          className={`text-[15px] 2xl:text-[17px] whitespace-nowrap flex items-center gap-1 transition ${
            pathname.startsWith(item.href) || openMega === item.href
              ? "text-blue-600"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          {item.name}
          {openMega === item.href ? <FaChevronUp className="w-3 h-3" /> : <FaChevronDown className="w-3 h-3" />}
        </span>
      </div>
    ) : (
      <Link
        key={item.href}
        href={item.href}
      
        className={`text-[15px] 2xl:text-[17px] whitespace-nowrap px-2 xl:px-3 py-2 rounded transition ${
          item.name === "Vize alma ihtimalinizi ölçün!"
            ? "bg-emerald-500 text-white hover:bg-emerald-700"
            : pathname === item.href
            ? "text-blue-600"
            : "text-gray-700 hover:text-blue-600"
        }`}
      >
        {item.name}
      </Link>
    )
  )}
</div>
    </div>

    {/* ================= DESKTOP MEGA MENU ================= */}
    {openMega && (
      <div className="hidden xl:block absolute top-full left-0 w-full bg-white shadow-lg z-50">
        <div className="max-w-[1130px] mx-auto p-6 flex gap-6">

          <div className="w-1/2 text-gray-600 flex items-center justify-center">
            <p>{menuItems.find(m => m.href === openMega)?.description}</p>
          </div>

          <div className="w-1/2 flex flex-col gap-3">
            {menuItems
              .find(m => m.href === openMega)
              ?.submenu.map(sub => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="text-gray-700 hover:text-blue-600 font-medium underline underline-offset-4"
                  onClick={() => setOpenMega(null)}
                >
                  {sub.name}
                </Link>
              ))}
          </div>

        </div>
      </div>
    )}

    {/* ================= MOBILE / TABLET MENU ================= */}
    {menuOpen && (
     <div className="xl:hidden px-4 pt-4 pb-6 bg-white border-t space-y-2 max-h-[80svh] overflow-y-auto">


        {/* Mobile Contact Card */}
        <div className="lg:hidden mb-4">
          <NavbarİletisimCard />
        </div>

        {/* === MOBILE MENU (FORM LAR HARİÇ) === */}
        {mobileMenuItems.map(item =>
          item.submenu ? (
            <div key={item.href}>
              <button
                className="w-full text-left py-2 font-semibold text-gray-700 flex"
                onClick={() =>
                  setOpenMega(openMega === item.href ? null : item.href)
                }
              >
              <span>{item.name}</span>
  {openMega === item.href ? (
    <FaChevronUp className="text-sm text-gray-500 mt-1" />
  ) : (
    <FaChevronDown className="text-sm text-gray-500 mt-1" />
  )}
              </button>

              {openMega === item.href &&
                item.submenu.map(sub => (
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
              className="block py-2 px-3 rounded text-gray-700 hover:bg-blue-100"
              onClick={() => {
                setMenuOpen(false);
                setOpenMega(null);
              }}
            >
              {item.name}
            </Link>
          )
        )}

        {/* === FORM LAR (HER ZAMAN EN ALTTA) === */}
        {mobileFormsItem && (
          <div className="pt-4 mt-4 ">
            <button
              className="w-full text-left py-2 font-semibold text-gray-700 flex"
              onClick={() =>
                setOpenMega(
                  openMega === mobileFormsItem.href
                    ? null
                    : mobileFormsItem.href
                )
              }
            >
             <span>{mobileFormsItem.name}</span>
  {openMega === mobileFormsItem.href ? ( 
    <FaChevronUp className="text-sm text-gray-500 mt-1" />
  ) : (
    <FaChevronDown className="text-sm text-gray-500 mt-1" />
  )}
            </button>

            {openMega === mobileFormsItem.href &&
              mobileFormsItem.submenu.map(sub => (
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
        )}

      </div>
    )}

  </nav>
);

}
