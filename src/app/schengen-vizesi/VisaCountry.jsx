import Link from "next/link";

const visaLinks = [
  {
    href: "/almanya-vize",
    label: "Almanya Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg",
    alt: "Almanya Bayrağı",
  },
  {
    href: "/avusturya-vize",
    label: "Avusturya Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg",
    alt: "Avusturya Bayrağı",
  },
  {
    href: "/belcika-vize",
    label: "Belçika Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg",
    alt: "Belçika Bayrağı",
  },
  {
    href: "/bulgaristan-vize",
    label: "Bulgaristan Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg",
    alt: "Bulgaristan Bayrağı",
  },
  {
    href: "/cekya-vize",
    label: "Çekya Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg",
    alt: "Çekya Bayrağı",
  },
  {
    href: "/danimarka-vize",
    label: "Danimarka Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg",
    alt: "Danimarka Bayrağı",
  },
  {
    href: "/estonya-vize",
    label: "Estonya Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg",
    alt: "Estonya Bayrağı",
  },
  {
    href: "/finlandiya-vize",
    label: "Finlandiya Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg",
    alt: "Finlandiya Bayrağı",
  },
  {
    href: "/fransa-vize",
    label: "Fransa Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg",
    alt: "Fransa Bayrağı",
  },
  {
    href: "/hirvatistan-vize",
    label: "Hırvatistan Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg",
    alt: "Hırvatistan Bayrağı",
  },
  {
    href: "/hollanda-vize",
    label: "Hollanda Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg",
    alt: "Hollanda Bayrağı",
  },
  {
    href: "/ispanya-vize",
    label: "İspanya Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg",
    alt: "İspanya Bayrağı",
  },
  {
    href: "/isvec-vize",
    label: "İsveç Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg",
    alt: "İsveç Bayrağı",
  },
  {
    href: "/isvicre-vize",
    label: "İsviçre Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg",
    alt: "İsviçre Bayrağı",
  },
  {
    href: "/italya-vize",
    label: "İtalya Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg",
    alt: "İtalya Bayrağı",
  },
  {
    href: "/izlanda-vize",
    label: "İzlanda Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg",
    alt: "İzlanda Bayrağı",
  },
  {
    href: "/kibris-vize",
    label: "Kıbrıs Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg",
    alt: "Kıbrıs Bayrağı",
  },
  {
    href: "/letonya-vize",
    label: "Letonya Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg",
    alt: "Letonya Bayrağı",
  },
  // {
  //   href: "/liechtenstein-vize",
  //   label: "Liechtenstein Schengen Vizesi",
  //   flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg",
  //   alt: "Liechtenstein Bayrağı",
  // },
  // {
  //   href: "/litvanya-vize",
  //   label: "Litvanya Schengen Vizesi",
  //   flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg",
  //   alt: "Litvanya Bayrağı",
  // },
  // {
  //   href: "/luksemburg-vize",
  //   label: "Lüksemburg Schengen Vizesi",
  //   flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg",
  //   alt: "Lüksemburg Bayrağı",
  // },
  {
    href: "/macaristan-vize",
    label: "Macaristan Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg",
    alt: "Macaristan Bayrağı",
  },
  // {
  //   href: "/malta-vize",
  //   label: "Malta Schengen Vizesi",
  //   flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg",
  //   alt: "Malta Bayrağı",
  // },
  // {
  //   href: "/norvec-vize",
  //   label: "Norveç Schengen Vizesi",
  //   flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg",
  //   alt: "Norveç Bayrağı",
  // },
  // {
  //   href: "/polonya-vize",
  //   label: "Polonya Schengen Vizesi",
  //   flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg",
  //   alt: "Polonya Bayrağı",
  // },
  {
    href: "/portekiz-vize",
    label: "Portekiz Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg",
    alt: "Portekiz Bayrağı",
  },
  // {
  //   href: "/romanya-vize",
  //   label: "Romanya Schengen Vizesi",
  //   flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg",
  //   alt: "Romanya Bayrağı",
  // },
  // {
  //   href: "/slovakya-vize",
  //   label: "Slovakya Schengen Vizesi",
  //   flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg",
  //   alt: "Slovakya Bayrağı",
  // },
  // {
  //   href: "/slovenya-vize",
  //   label: "Slovenya Schengen Vizesi",
  //   flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg",
  //   alt: "Slovenya Bayrağı",
  // },
  {
    href: "/yunanistan-vize",
    label: "Yunanistan Schengen Vizesi",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg",
    alt: "Yunanistan Bayrağı",
  },
];

export default function SchengenVisaGrid() {
return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {visaLinks.map(({ href, label, flag, alt }) => (
        <Link
          key={href}
          href={href}
          className="group relative flex flex-col items-center justify-center gap-4 p-6 rounded-2xl  bg-white/70 backdrop-blur-lg  border border-gray-200  shadow-sm hover:shadow-xl  hover:-translate-y-1 transition-all duration-300 ease-out"
        >
          {/* Hover Gradient Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

          <img
            src={flag}
            alt={alt}
            width={56}
            height={40}
            className="rounded-md shadow-md object-cover transition-transform duration-300 group-hover:scale-110"
          />

          <span className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
}