"use client";
import React, { useEffect, useState, useRef } from "react";
import { FaGoogle, FaCheckCircle } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";

export default function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const [total, setTotal] = useState(0);
  const [visibleCount, setVisibleCount] = useState(8);
  const [expanded, setExpanded] = useState({});
  const [loadedCards, setLoadedCards] = useState({});
  const lastCardRef = useRef(null);
  const MAX_CHAR = 120;

  const toggleExpand = (index) =>
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));

  // Tüm verileri çek
  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setTotal(data.total || 0);

        // İlk görünür kartları placeholder ile yavaş yükle
        scheduleLoadCards(0, Math.min(visibleCount, data.reviews.length));
      });
  }, []);

  // Son kart görünür olduğunda daha fazla kart yükle
  useEffect(() => {
    if (!lastCardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const nextCount = Math.min(visibleCount + 16, reviews.length);
          scheduleLoadCards(visibleCount, nextCount);
          setVisibleCount(nextCount);
        }
      },
      {
        root: null,
        rootMargin: "200px", // son satıra gelmeden tetikle
        threshold: 0.1,
      }
    );

    observer.observe(lastCardRef.current);

    return () => {
      if (lastCardRef.current) observer.unobserve(lastCardRef.current);
    };
  }, [visibleCount, reviews, lastCardRef.current]);

  // Belirli aralıktaki kartları gecikmeli olarak yükle
  const scheduleLoadCards = (start, end) => {
    for (let i = start; i < end; i++) {
      setTimeout(() => {
        setLoadedCards((prev) => ({ ...prev, [i]: true }));
      }, 200 * (i - start));
    }
  };

  return (
    <div className="w-full max-w-9xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center gap-12 mt-30">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        Hakkımızdaki Yorumlar
      </h2>

      <div className="flex flex-col w-full max-w-7xl sm:flex-row gap-6">
        {/* Firma Bilgisi */}
        <div className="sm:w-1/3 flex flex-col items-center border-b sm:border-b-0 sm:border-r border-gray-200 pb-4 sm:pb-0 sm:pr-6">
          <h3 className="text-xl font-semibold mb-2">Aya Journey</h3>
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">★</span>
            ))}
          </div>
          <p className="text-gray-500 mb-4">+500 yorum</p>
  <button
  onClick={() =>
    window.open(
      "https://search.google.com/local/writereview?placeid=ChIJpb70iLlJ0xQRrtTC8c7dFpw",
      "_blank"
    )
  }
  className="bg-white text-gray-700 cursor-pointer mt-5  border border-blue-300 px-5 py-2.5  rounded-3xl transition duration-300  hover:text-blue-500 hover:bg-gray-100  flex items-center justify-center gap-2"
>
  <span className="text-xl flex items-center">
    <MdOutlineReviews />
  </span>
  <span className="font-medium">Yorum Yap</span>
</button>

        </div>

        {/* Yorum Kartları */}
        <div className="sm:w-2/3 flex flex-col sm:flex-row sm:flex-wrap gap-4">
          {reviews.slice(0, visibleCount).map((review, index) => {
            const isExpanded = expanded[index];
            const fullText = review.text || "";
            const displayedText =
              isExpanded || fullText.length <= MAX_CHAR
                ? fullText
                : fullText.slice(0, MAX_CHAR) + "...";

            const avatarUrl = review.avatar?.startsWith("http")
              ? review.avatar
              : `https://i.pravatar.cc/50?img=${index + 1}`;

            const loaded = loadedCards[index];

            // Son karta ref ekle
            const isLastCard = index === visibleCount - 1;

            return (
              <div
                key={index}
                ref={isLastCard ? lastCardRef : null}
                className={`relative bg-gray-50 rounded-lg shadow-md p-4 flex flex-col w-full sm:w-[220px] md:w-[250px] min-h-[140px]  transition-all duration-700 transform  ${loaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-8 scale-95"} hover:scale-105 hover:shadow-xl`}
              >
                {!loaded && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg z-10" />
                )}

                {loaded && (
                  <>
                    {review.source === "google" && (
                      <FaGoogle className="text-red-500 absolute top-3 right-3 text-lg" />
                    )}

                    <div className="flex items-center gap-2 mb-2 mt-1">
              <img
  src={avatarUrl}
  alt={review.author}
  className="w-10 h-10 rounded-full"
  onError={(e) => {
    e.currentTarget.onerror = null; // sonsuz döngü engelle
    e.currentTarget.src = `https://i.pravatar.cc/50?img=${index + 10}`; // fallback avatar
  }}
/>
                      <div className="flex flex-col">
                        <span className="font-semibold text-sm">{review.author}</span>
                        <span className="text-gray-500 text-xs">{review.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex text-yellow-400 text-sm">
                        {Array.from({ length: review.rating || 0 }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <FaCheckCircle
                        className="text-blue-500 text-sm"
                        title="Doğrulanmış kullanıcı"
                      />
                    </div>

                    <p className="text-gray-700 text-sm flex-1">{displayedText}</p>

                    {fullText.length > MAX_CHAR && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="self-end mt-2 text-blue-600 hover:underline text-xs"
                      >
                        {isExpanded ? "Gizle" : "Göster"}
                      </button>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
