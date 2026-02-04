"use client";
import Link from "next/link";
import React,{useState} from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
    const [location, setLocation] = useState("ankara");
    const mapUrls = {
    ankara:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.4469647703336!2d32.809882275841495!3d39.909012671525794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d349b988f4bea5%3A0x9c16ddcef1c2d4ae!2sAYA%20Journey!5e0!3m2!1str!2str!4v1762844298561!5m2!1str!2str",
    istanbul:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.1037583061943!2d29.0170220759039!3d41.11042497133646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab56507a9d513%3A0xdcd7ee8744a858e5!2zQVlBIEpvdXJuZXkgLSBLacWfaXNlbCBWaXplIERhbsSxxZ9tYW7EsQ!5e0!3m2!1str!2str!4v1762844545911!5m2!1str!2str",
  };
  return (
    <footer
      className="w-full text-white py-6 mt-10 flex flex-col"
      style={{ background: "linear-gradient(135deg, #1f2a38, #334155ff)" }}
    >
      {/* Üst açıklama + butonlar */}
      <div className="w-full max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-start border-b border-gray-300/20 gap-2">
        <div className="w-full sm:w-3/4 mt-3 flex flex-col">
         
          <p className="text-sm sm:text-base">
           AYA Journey, herhangi bir ülkenin Büyükelçiliği, Başkonsolosluğu veya  devlet kurumu ile doğrudan bağlantısı olmayan, bağımsız bir danışmanlık şirketi olup, tecrübesini profesyonel yönlendirme olarak sunmayı hedeflemektedir.
          </p>
        </div>

        <div className="w-full sm:w-1/4 mt-3 flex flex-col sm:flex-row gap-3">
      <Link href="/randevu">
  <button className="cursor-pointer w-full sm:w-auto px-4 py-2 `bg-gradient-to-r` from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg text-white font-medium transition-all shadow-lg">
    Randevu Al
  </button>
</Link>
  <Link href="/iletisim">  <button className="cursor-pointer w-full sm:w-auto px-4 py-2 `bg-gradient-to-r` from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 rounded-lg text-white font-medium transition-all shadow-lg">
            Bize Ulaşın
          </button>
  </Link>
        
        </div>
      </div>

      {/* Alt Ana Bölüm */}
      <div className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-8 items-stretch">
          
          {/* SOL BLOK */}
          <div className="flex flex-col flex-1 rounded-lg p-4 bg-white/10 gap-6">
            
            {/* Logo */}
            <div className="flex justify-center w-full px-1">
              <img src="/images/logo_beyaz.svg" alt="aya journey logo" className="h-16" />
            </div>

            {/* Adres ve İletişim */}
            <div className="w-full text-white flex flex-col gap-4">

              {/* Ankara */}
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-white text-xl mt-1" />
                <div className="flex flex-col text-md opacity-90 cursor-pointer" onClick={()=>{setLocation("ankara")}}>
                  <span className="font-semibold">Ankara Paragon Tower</span>
                  <span>Kızılırmak, Çukurambar, Ufuk Ünv. Cd No:3, 06510 Çankaya/Ankara</span>
                </div>
              </div>

              <a href="tel:+903128701584" aria-label="Telefon numarasını ara" className="flex items-center gap-3  hover:opacity-80 transition">
                <FiPhone className="text-white text-lg" />
                <span className="text-md opacity-90">+90 312 870 15 84</span>
              </a>

              {/* İstanbul */}
              <div className="flex items-start gap-3 mt-2">
                <FaMapMarkerAlt className="text-white text-xl mt-1" />
                <div className="flex flex-col text-md opacity-90 cursor-pointer" onClick={()=>{setLocation("istanbul")}}>
                  <span className="font-semibold">İstanbul Sun Plaza</span>
                  <span>Maslak, Bilim Sk. No:5, 34398 Sarıyer/İstanbul</span>
                </div>
              </div>

              <a href="tel:+905304853115" aria-label="Telefon numarasını ara" className="flex items-center gap-3  hover:opacity-80 transition">
                <FiPhone className="text-white text-lg" />
                <span className="text-md opacity-90">+90 530 485 31 15</span>
              </a>

              {/* Mail */}
              <a
                href="mailto:vizedestek@ayajourney.com"
                aria-label="E-Posta gönder"
                className="flex items-center gap-3 mt-2 hover:opacity-80 transition"
              >
                <HiOutlineMail className="text-white text-xl" />
                <span className="text-md opacity-90">vizedestek@ayajourney.com</span>
              </a>
            </div>

            {/* Sosyal ikonlar */}
            <div className="flex gap-6 mt-3 items-center justify-start w-full bg-black/30 rounded-md">
              {/* <a href="https://www.facebook.com/people/AYA-Journey-Vize/100095568336692/" aria-label="Aya Journey Facebook" target="_blank" rel="noopener noreferrer" className="group p-3 inline-flex items-center justify-center min-w-11 min-h-11">
                <FaFacebookF className="text-blue-600 w-10 h-10 transition-all group-hover:bg-white group-hover:text-blue-600 p-2 rounded-full border-2 border-transparent group-hover:border-blue-600" />
              </a> */}
              <a href="https://www.instagram.com/ayajourneyvize/" target="_blank" aria-label="Aya Journey Instagram" rel="noopener noreferrer" className="group p-3 inline-flex items-center justify-center min-w-11 min-h-11">
                <FaInstagram className="text-pink-500 w-10 h-10 transition-all group-hover:bg-white group-hover:text-pink-500 p-2 rounded-full border-2 border-transparent group-hover:border-pink-500" />
              </a>
              <a href="https://www.linkedin.com/company/ayajourney/" target="_blank" rel="noopener noreferrer" aria-label="Aya Journey Linkedn" className="group p-3 inline-flex items-center justify-center min-w-11 min-h-11">
                <FaLinkedinIn className="text-blue-700 w-10 h-10 transition-all group-hover:bg-white group-hover:text-blue-700 p-2 rounded-full border-2 border-transparent group-hover:border-blue-700" />
              </a>
              <a href="https://x.com/ayajourneyvize" target="_blank" rel="noopener noreferrer" aria-label="Aya Journey Twitter" className="group p-3 inline-flex items-center justify-center min-w-11 min-h-11">
                <FaXTwitter className="text-black w-10 h-10 p-2 rounded-full border-2 border-transparent transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-black" />
              </a>
              <a href="https://www.youtube.com/@aya.journey" target="_blank" rel="noopener noreferrer" aria-label="Aya Journey Youtube" className="group p-3 inline-flex items-center justify-center min-w-11 min-h-11">
                <FaYoutube className="text-red-600 w-10 h-10 transition-all group-hover:bg-white group-hover:text-red-600 p-2 rounded-full border-2 border-transparent group-hover:border-red-600" />
              </a>
            </div>

          </div>

          {/* SAĞ BLOK — Menü */}
   {/* Sağ taraf navbar + harita */}
<div className="flex flex-col  gap-1 rounded-lg p-2 bg-white/10 flex-1">

  {/* Harita */}
  <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-lg h-200">
    <iframe
      src={mapUrls[location]}
      width="100%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
      className="border-0"
      title="Konum bilgisi"
    ></iframe>
  </div>

  {/* Butonlar */}
  <div className="flex gap-2 justify-center mt-1">
    <button
      type="button"
      onClick={() => setLocation("ankara")}
      className={`
        w-1/2 px-3 py-1.5 rounded-lg font-semibold border transition cursor-pointer
        ${
          location === "ankara"
            ? "bg-blue-600 text-white border-blue-600 shadow-lg"
            : "bg-white/90 text-gray-900 border-gray-300 hover:bg-gray-100"
        }
      `}
    >
      Ankara
    </button>
    <button
      type="button"
      onClick={() => setLocation("istanbul")}
      className={`
        w-1/2 px-3 py-1.5 rounded-lg font-semibold border transition cursor-pointer
        ${
          location === "istanbul"
            ? "bg-blue-600 text-white border-blue-600 shadow-lg"
            : "bg-white/90 text-gray-900 border-gray-300 hover:bg-gray-100"
        }
      `}
    >
      İstanbul
    </button>
  </div>

  {/* Menü */}
  <div className="mt-4">
    <ul className="flex flex-wrap justify-center gap-2 text-white text-sm opacity-90">
      <li><a href="/biz-kimiz" className="hover:opacity-70 transition" aria-label="Biz Kimiz">Biz Kimiz</a></li>
      <li><a href="/referanslarimiz" className="hover:opacity-70 transition" aria-label="Referanslarımız">Referanslarımız</a></li>
      <li><a href="/iletisim" className="hover:opacity-70 transition" aria-label="İletişim">İletişim</a></li>
      <li><a href="/egitim" className="hover:opacity-70 transition"aria-label="Eğitim">Yurt Dışı Eğitim & Kariyer Programları</a></li>
      <li><a href="/schengen-vizesi" className="hover:opacity-70 transition">Schengen Vizesi</a></li>
      <li><a href="/ingiltere-vizesi" className="hover:opacity-70 transition">İngiltere Vizesi</a></li>
      <li><a href="/portekiz-d7-vize" className="hover:opacity-70 transition">Portekiz D-7 Vizesi</a></li>
      <li><a href="/amerika-vizesi" className="hover:opacity-70 transition">Amerika Vizesi</a></li>




      {/* <li><a href="/vize" className="hover:opacity-70 transition">Vize</a></li> */}
      <li><a href="/yurtdisi-rehberi" className="hover:opacity-70 transition" aria-label="Yurtdışı Rehberi">Yurtdışı Rehberi</a></li>
      <li><a href="/sikca-sorulan-sorular" className="hover:opacity-70 transition" aria-label="SSS">Sıkça Sorulan Sorular</a></li>
    </ul>
  </div>

</div>




        </div>
      </div>

      {/* Footer Alt */}
      <div className="w-full max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex justify-center items-center">
        <p className="text-sm opacity-70">
          &copy; {new Date().getFullYear()} AyaJourney. Tüm hakları saklıdır.
        </p>
      </div>

    </footer>
  );
}
