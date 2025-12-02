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
      
      </body>
    </html>
  );
}
