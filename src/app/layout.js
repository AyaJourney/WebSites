import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cookies from "./components/Cookies";
import WhatsappButton from "./components/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aya Journey",
  description: "Visa Education and Business",
   icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" >
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
       <nav className="fixed top-0 left-0 w-full h-20 md:h-24 z-50 bg-white shadow-md">
    <Navbar />
</nav>
     <main className="flex-1 mt-24 bg-gray-50 ">
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
