"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import NavbarİletisimCard from "./NavbarİletisimCard";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // mobil menü
  const [openMega, setOpenMega] = useState(null); // hangi mega menu açık
  const pathname = usePathname();

  const menuItems = [
   
    {
      name: "Hakkımızda",
      href: "/hakkimizda",
      description: "2022 yılında kurulan AYA Journey, seyahat ve uluslararası deneyimlerin kapılarını açma misyonuyla yola çıktı. Bizler, müşterilerimizin dünya genelindeki keşiflerini ve maceralarını gerçekleştirmelerine yardımcı olma vizyonuyla hareket ediyoruz.",
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
      description: "AyaJourney olarak verdiğimiz hizmetler hakkında bilgiler.",
      submenu: [
        { name: "Eğitim", href: "/egitim" },
        // { name: "İş/Ticaret", href: "/is-ticaret" },
        { name: "Schengen Vizesi", href: "/schengen-vizesi" },
        { name: "İngiltere Vizesi", href: "/ingiltere-vizesi" },
        { name: "Portekiz D7 Vizesi", href: "/portekiz-d7-vize" },

      ],
    },
 {
      name: "Formlar",
      href: "/formlar",
      description: "Vize başvurularında kullanılan formlar hakkında bilgiler.",
      submenu: [
        { name: "DS-160", href: "/form/ds-160" },
        { name: "Schengen", href: "/form/schengen" },
        { name: "Birleşik Krallık Bilgi Fişi", href: "/form/birlesik-krallik-bilgi-fisi" },
        { name: "Kanada Başvuru Formu", href: "/form/kanada-basvuru-formu" },

      ],
    },
    { name: "Yurtdışı Rehberi", href: "/yurtdisi-rehberi" },
   
    { name: "SSS", href: "/sikca-sorulan-sorular" },
    { name: "Hadi Başlayalım !", href: "/randevu" },



  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 relative" onMouseLeave={() => setOpenMega(null)}>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-24 items-center">
        {/* Logo */}
        <Link href="/"> <div className="text-2xl font-bold cursor-pointer" >
          <img
            src="/images/aya_logo_svg.svg"
            alt="Ekibimiz"
            // className="rounded-2xl w-full max-w-md object-cover"
            width={250}
            height={100}
          />
        </div>
        </Link>


        {/* Mobil Menü Butonu */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Menü linkleri (Masaüstü) */}
        <div className="hidden sm:flex space-x-6 items-center" >
          {menuItems?.map((item) =>
            item.submenu ?
              (
                <div
                  key={item.href}
                  onMouseEnter={() => setOpenMega(item.href)}

                  className="relative"
                >
<span

  className={`
text-[17px]
    cursor-pointer 
    flex flex-row items-center gap-1
    hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-10 transition
    ${
      pathname.startsWith(item.href) || openMega === item.href
        ? "text-blue-600"
        : "text-gray-700"
    }
  `}
>
  {item.name}

  {openMega === item.href
    ? <FaChevronUp />
    : <FaChevronDown />
  }
</span>


                  {/* Alt menü sadece hover ile açık olan item gösterilir */}
                  {openMega === item.href && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-zinc-800 shadow-lg rounded-md overflow-hidden z-50 transition-all duration-200 hidden">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="  text-lg block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"

                        >
                          {sub.name} 
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
              
                  key={item.href}
                  href={item.href}
                  className={`  text-[17px] transition px-3 py-2 rounded ${item.name === "Hadi Başlayalım !"
                      ? "bg-red-600 text-white hover:bg-red-700 rounded-lg"
                      : `hover:text-blue-600 hover:underline hover:decoration-2 hover:decoration-blue-600 hover:decoration-blue-600 hover:underline-offset-10 transition ${pathname === item.href && "text-gray-700 "}`
                    }`}
                  onMouseEnter={() => setOpenMega(null)}
                >
                  {item.name}
                </Link>
              )
          )}
        </div>

      </div>

      {/* Mega Menu */}
      {openMega && (
        <div className="absolute  top-full left-0 w-screen bg-white shadow-lg z-50 " >
          <div className="max-w-7xl mx-auto p-6 flex flex-col sm:flex-row justify-between gap-6">
            {/* Açıklama */}
            <div className="sm:w-1/2 text-gray-600 flex flex-col justify-center flex items-center">
              <p>{menuItems.find((m) => m.href === openMega)?.description}</p>
              <NavbarİletisimCard />
            </div>

            {/* Alt Sayfa Linkleri */}
            <div className="flex flex-col sm:w-1/2 space-y-2 gap-2">
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

      {/* Mobil Menü */}
      {menuOpen && (
        <div className="sm:hidden px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-200">
          {menuItems.map((item) =>
            item.submenu ? (
              <div key={item.href}>
                <span
                  className="block py-2 px-3 rounded cursor-pointer hover:bg-blue-100 text-gray-700 font-semibold"
                  onClick={() =>
                    setOpenMega(openMega === item.href ? null : item.href)
                  }
                >
                  {item.name}
                </span>
                {openMega === item.href &&
                  item.submenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block py-2 px-5 rounded hover:bg-blue-100 text-gray-700"
                      onClick={() => {setMenuOpen(false);setOpenMega(null)}}
                    >
                      {sub.name}
                    </Link>
                  ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 px-3 rounded ${item.name === "Randevu Al"
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "hover:bg-blue-100 text-gray-700"
                  }`}
            onClick={() => {setMenuOpen(false);setOpenMega(null)}} 
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
