import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cookies from "./components/Cookies";
import WhatsappButton from "./components/WhatsappButton";
export const dynamic = "force-static";
export const revalidate = 60;


export const metadata = {
  title: "Aya Journey",
  description: "Visa Education and Business",
   icons: {
    icon: "/images/logo.png",
  },
};
<link
  href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600&display=swap"
  rel="stylesheet"
/>
export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="font-arboria bg-white">
      <body 
        
      >
        <meta
  name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=1"
/>
       <nav className="fixed top-0 left-0 w-full h-20 md:h-24 z-50 bg-white shadow-md">
    <Navbar />
</nav>
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
