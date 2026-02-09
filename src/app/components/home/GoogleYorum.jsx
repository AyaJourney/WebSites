"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { FaGoogle, FaCheckCircle } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
const MAX_CHAR = 120;

const GoogleYorum = () => {
  const [reviews, setReviews] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [companyInfo, setCompanyInfo] = useState({ rating: 0, totalReviews: 0 });
  const [loading, setLoading] = useState(true);
  const cardRefs = useRef([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        if (data.reviews) {
          setReviews(data.reviews.slice(0, 6)); // sadece ilk 6 yorum
          setCompanyInfo({
            rating: 5, // Sabit, dilersen API'den çekebilirsin
            totalReviews: data.total,
          });
        }
      } catch (err) {
        // console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  // Scroll reveal animasyonu
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("google-yorum-show");
            }, idx * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [reviews]);

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  if (loading)
    return <div className="p-5 text-center">Yorumlar Yükleniyor...</div>;

  return (
 <div className="w-full max-w-9xl h-auto mx-auto p-4 bg-gradient-to-b from-gray-50/50 to-white rounded-lg flex flex-col justify-start items-center gap-6 py-8 ">
  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-2 text-center px-4 max-w-4xl leading-tight">
   Herkes kendini över. Siz en iyisi daha önce bizimle çalışan yüzlerce kişiye kulak verin.
  </h2>

  <div className="flex flex-col sm:flex-row w-full max-w-7xl gap-6 px-2">
    {/* Sol Taraf: Firma Bilgisi */}
    <div className="sm:w-1/3 flex flex-col items-center border-b sm:border-b-0 sm:border-r border-gray-200/60 pb-6 sm:pb-0 sm:pr-8">
      <h3 className="text-2xl font-bold mb-3 text-gray-800">AYA Journey</h3>
      <div className="flex mb-3 gap-0.5">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-xl ${
              i < Math.round(companyInfo.rating) 
                ? "text-yellow-400 drop-shadow-sm" 
                : "text-gray-300"
            } transition-all duration-200`}
          >
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-600 font-medium mb-6 text-lg">+600 yorum</p>

      <button
        onClick={() =>
          window.open(
            "https://search.google.com/local/writereview?placeid=ChIJpb70iLlJ0xQRrtTC8c7dFpw",
            "_blank"
          )
        }
        className="bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700 cursor-pointer mt-2 border border-blue-300/60 px-6 py-3 rounded-3xl transition-all duration-300 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 hover:border-blue-400 hover:shadow-md hover:scale-105 flex items-center justify-center gap-2 font-medium"
      >
        <span className="text-xl flex items-center">
          <MdOutlineReviews />
        </span>
        <span>Yorum Yap</span>
      </button>
    </div>

    {/* Sağ Taraf: Kartlar */}
    <div className="sm:w-2/3 flex flex-row sm:flex-wrap gap-4 overflow-x-auto scroll-smooth pb-2">
      {reviews.map((review, index) => {
        const isExpanded = expanded[index];
        const displayedText =
          isExpanded || review.text.length <= MAX_CHAR
            ? review.text
            : review.text.slice(0, MAX_CHAR) + "...";

        return (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="google-yorum-card-init google-yorum-hover-fill relative bg-white rounded-xl p-5 flex flex-col min-w-[220px] sm:min-w-0 sm:w-[220px] md:w-[250px] backdrop-blur border border-slate-200/80 transition-all duration-300 hover:-translate-y-2 group shadow-sm md:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.2)] hover:border-blue-300/60 pb-4"
          >
            {/* Bloom fill overlay */}
<div className="google-yorum-content relative z-10 flex flex-col flex-1">

  <FaGoogle
    className="text-red-500 absolute -top-2 -right-2 text-3xl bg-white rounded-full p-1.5 shadow-md group-hover:scale-110 transition-transform duration-300"
    title="Google Yorum"
  />

  {/* Kullanıcı Bilgisi */}
  <div className="flex items-center gap-3 mb-3 mt-1">
    <div className="relative">
      <img
        src={review.avatar || `https://i.pravatar.cc/50?img=${index + 1}`}
        alt={review.author}
        className="w-12 h-12 rounded-full border-2 border-gray-100 shadow-sm object-cover group-hover:border-blue-200 transition-colors duration-300"
      />
      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-white rounded-full border-2 border-white flex items-center justify-center">
        <FaGoogle className="text-red-500 text-md" />
      </div>
    </div>

    <div className="flex flex-col flex-1 min-w-0">
      <span className="font-semibold text-sm text-gray-800 truncate">{review.author}</span>
      <span className="text-gray-500 text-xs">{review.date}</span>
    </div>
  </div>

  {/* Rating */}
  <div className="flex items-center gap-2 mb-3">
    <div className="flex text-yellow-400 text-base gap-0.5 drop-shadow-sm">
      {[...Array(review.rating)].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
    <FaCheckCircle className="text-blue-500 text-sm" />
  </div>

  {/* Yorum Metni - ÜST DIV */}
  <div className="flex-1 mb-3">
    <p className="text-gray-700 text-sm leading-relaxed">
      {displayedText}
    </p>
  </div>

</div>

{/* ALT SABİT BUTON — Ayrı DIV !!!! */}
{review.text.length > MAX_CHAR && (
  <div className="google-yorum-footer mt-auto pt-2">
    <button
      onClick={() => toggleExpand(index)}
      className="text-blue-600 hover:text-blue-700 font-medium text-xs transition-colors duration-200 hover:underline"
    >
      {isExpanded ? "Gizle" : "Daha Fazla"}
    </button>
  </div>
)}


          </div>
        );
      })}
    </div>
  </div>

  {/* Tüm yorumlar sayfasına yönlendirme */}
<Link href="/hakkimizdaki-yorumlar" className="inline-flex items-center justify-center p-2"> 
  <button type="button" aria-label="Tüm kullanıcı yorumlarını gör" className="min-h-[52px] min-w-[220px] px-10 py-4 m-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700 cursor-pointer border border-blue-300/60 rounded-full font-semibold transition-all duration-300 hover:text-blue-600 hover:shadow-lg hover:scale-105 touch-manipulation">
    Daha Fazla Yorum
  </button>
</Link>
</div>

  );
};

export default GoogleYorum;
