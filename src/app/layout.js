import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import NavbarIletisimCard from "./components/NavbarİletisimCard";
import Footer from "./components/Footer";
import Cookies from "./components/Cookies";
import WhatsappButton from "./components/WhatsappButton";
import ScrollToTop from "./components/ScrollTop";
import { Plus_Jakarta_Sans } from "next/font/google";
export const dynamic = "force-static";
export const revalidate = 60;
export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta",
});
export const metadata = {
  metadataBase: new URL("https://ayajourney.com"),

  title: {
    default: "Aya Journey",
    template: "%s | Aya Journey",
  },

  description: "Visa Education and Business",

  applicationName: "Aya Journey",

  keywords: [
    "ABD vizesi",
    "Kanada vizesi",
    "İngiltere vizesi",
    "Schengen vizesi",
    "Vize danışmanlığı",
    "Aya Journey",
  ],

  authors: [{ name: "Aya Journey", url: "https://ayajourney.com" }],
  creator: "Aya Journey",
  publisher: "Aya Journey",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },

  openGraph: {
    title: "Aya Journey",
    description: "Visa Education and Business",
    url: "https://ayajourney.com",
    siteName: "Aya Journey",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://ayajourney.com/images/ayaiconsmall.jpg",
        width: 1200,
        height: 630,
        alt: "Aya Journey",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aya Journey",
    description: "Visa Education and Business",
    images: ["https://ayajourney.com/images/ayaiconsmall.jpg"],
  },

  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_CODE",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
<link
  href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600&display=swap"
  rel="stylesheet"
/>
export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={plusJakartaSans.variable}>
      <body 
        
      >
            <ScrollToTop />
        <meta
  name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=1"
/>
<div className="hidden lg:block fixed top-0 left-0 w-full z-50">
  <NavbarIletisimCard />
</div>

{/* NAVBAR */}
<div className="fixed top-0 lg:top-[35px] left-0 w-full z-40">
  <Navbar />
</div>
     <main className="flex-1 mt-24 bg-white ">
      {children}
      <Cookies/>
      <WhatsappButton/>
      </main> 
     <footer>
        <Footer />
     </footer>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": "AyaJourney",
      "url": "https://ayajourney.com",
      "logo": "https://ayajourney.com/images/logo.png",
      "description": "Kanada, ABD, İngiltere,Portekiz ve Schengen vizeleri için profesyonel danışmanlık hizmeti.",
      "telephone": "+90 312 870 15 84",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kızılırmak Mahallesi Ufuk Ünv. Caddesi No: 3 Paragon Tower",
        "addressLocality": "Ankara",
        "postalCode": "06510",
        "addressCountry": "TR"
      },
      "image": "https://ayajourney.com/images/logo.png",
      "priceRange": "$$",
      "sameAs": [
        "https://www.instagram.com/ayajourneyvize/",
        "https://www.linkedin.com/company/ayajourney/",
        "https://x.com/ayajourneyvize",
        "https://www.youtube.com/@aya.journey"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "Türkiye"
      }
    })
  }}
/>

      </body>
    </html>
  );
}
