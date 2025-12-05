"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGoogle, FaCheckCircle } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
const MAX_CHAR = 120;

const GoogleYorum = () => {
  const [reviews, setReviews] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [companyInfo, setCompanyInfo] = useState({ rating: 0, totalReviews: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        if (data.reviews) {
          setReviews(data.reviews.slice(0, 6)); // sadece ilk 6 yorum
          setCompanyInfo({
            rating: 5, // Sabit, dilersen API’den çekebilirsin
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

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  if (loading)
    return <div className="p-5 text-center">Yorumlar Yükleniyor...</div>;

  return (
 <div className="w-full max-w-9xl h-auto mx-auto p-4 bg-gray-100 rounded-lg shadow-md flex flex-col justify-start items-center gap-4">
  <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
   Herkes kendini över. Siz en iyisi daha önce bizimle calışan yüzlerce kişiye kulak verin.
  </h2>

  <div className="flex flex-col sm:flex-row w-full max-w-7xl gap-6">
    {/* Sol Taraf: Firma Bilgisi */}
    <div className="sm:w-1/3 flex flex-col items-center border-b sm:border-b-0 sm:border-r border-gray-200 pb-4 sm:pb-0 sm:pr-6">
      <h3 className="text-xl font-semibold mb-2">AYA Journey</h3>
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < Math.round(companyInfo.rating) ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700 mb-4">+500 yorum</p>

      <button
        onClick={() =>
          window.open(
            "https://search.google.com/local/writereview?placeid=ChIJpb70iLlJ0xQRrtTC8c7dFpw",
            "_blank"
          )
        }
        className="bg-white text-gray-700 cursor-pointer mt-5 border border-blue-300 px-5 py-2.5 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100 flex items-center justify-center gap-2"
      >
        <span className="text-xl flex items-center">
          <MdOutlineReviews />
        </span>
        <span className="font-medium">Yorum Yap</span>
      </button>
    </div>

    {/* Sağ Taraf: Kartlar */}
    <div className="sm:w-2/3 flex flex-row sm:flex-wrap gap-4 overflow-x-auto scroll-smooth">
      {reviews.map((review, index) => {
        const isExpanded = expanded[index];
        const displayedText =
          isExpanded || review.text.length <= MAX_CHAR
            ? review.text
            : review.text.slice(0, MAX_CHAR) + "...";

        return (
          <div
            key={index}
            className="relative bg-gray-50 rounded-lg shadow-md p-4 flex flex-col min-w-[220px] sm:min-w-0 sm:w-[220px] md:w-[250px]"
          >
            <FaGoogle
              className="text-red-500 absolute top-3 right-3 text-lg"
              title="Google Yorum"
            />

            <div className="flex items-center gap-2 mb-2 mt-1">
              <img
                src={review.avatar || `https://i.pravatar.cc/50?img=${index + 1}`}
                alt={review.author}
                className="w-10 h-10 rounded-full"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `https://i.pravatar.cc/50?img=${index + 10}`;
                }}
              />
              <div className="flex flex-col">
                <span className="font-semibold text-sm">{review.author}</span>
                <span className="text-gray-500 text-xs">{review.date}</span>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-2">
              <div className="flex text-yellow-400 text-sm">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <FaCheckCircle
                className="text-blue-500 text-sm"
                title="Doğrulanmış kullanıcı"
              />
            </div>

            <p className="text-gray-700 text-sm flex-1">{displayedText}</p>

            {review.text.length > MAX_CHAR && (
              <button
                onClick={() => toggleExpand(index)}
                className="self-end mt-2 text-blue-600 hover:underline text-xs"
              >
                {isExpanded ? "Gizle" : "Göster"}
              </button>
            )}
          </div>
        );
      })}
    </div>
  </div>

  {/* Tüm yorumlar sayfasına yönlendirme */}
  <Link href="/hakkimizdaki-yorumlar">
    <button className="bg-white text-gray-700 cursor-pointer mt-3 border border-blue-300 px-4 py-2 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100">
      Daha Fazla Yorum
    </button>
  </Link>
</div>

  );
};

export default GoogleYorum;
