"use client";

import React, { useEffect, useState, useRef } from "react";
import { FaGoogle, FaCheckCircle } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";

export default function AyaJourneyYorumlari() {
  const [reviews, setReviews] = useState([]);
  const [total, setTotal] = useState(0);
  const [visibleCount, setVisibleCount] = useState(8);
  const [expanded, setExpanded] = useState({});
  const [loadedCards, setLoadedCards] = useState({});
  const lastCardRef = useRef(null);

  const MAX_CHAR = 120;
  const STEP = 16;

  const toggleExpand = (index) =>
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));

  const scheduleLoadCards = (start, end) => {
    for (let i = start; i < end; i++) {
      setTimeout(() => {
        setLoadedCards((prev) => ({ ...prev, [i]: true }));
      }, 120 * (i - start));
    }
  };

  // 🔹 Veriyi çek – ilk 8 görünür
  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        const all = data.reviews || [];
        setReviews(all);
        setTotal(data.total || all.length);

        const initial = Math.min(8, all.length);
        setVisibleCount(initial);
        scheduleLoadCards(0, initial);
      });
  }, []);

  // 🔹 Infinite reveal
  useEffect(() => {
    if (!lastCardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const next = Math.min(visibleCount + STEP, reviews.length);
          scheduleLoadCards(visibleCount, next);
          setVisibleCount(next);
        }
      },
      { rootMargin: "200px", threshold: 0.1 }
    );

    observer.observe(lastCardRef.current);
    return () => observer.disconnect();
  }, [visibleCount, reviews.length]);

  return (
    <main className="min-h-screen bg-zinc-50">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-14 pb-10">
        <div className="bg-white border border-slate-200/70 rounded-2xl shadow-sm p-7 sm:p-10">
          <p className="text-sm text-slate-500">Aya Journey</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            Aya Journey Yorumları
          </h1>
          <p className="text-slate-600 mt-4 max-w-2xl">
            Vize danışmanlığı hizmetimizden faydalanan müşterilerimizin gerçek
            deneyim ve değerlendirmelerini aşağıda inceleyebilirsiniz.
          </p>
        </div>
      </section>

      {/* İçerik */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-16">
        <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Firma Bilgisi */}
            <div className="sm:w-1/3 flex flex-col items-center border-b sm:border-b-0 sm:border-r border-gray-200 pb-4 sm:pb-0 sm:pr-6">
              <h2 className="text-xl font-semibold mb-2">Aya Journey</h2>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-500 mb-4">
                { "+500 yorum"}
              </p>

              <button
                onClick={() =>
                  window.open(
                    "https://search.google.com/local/writereview?placeid=ChIJpb70iLlJ0xQRrtTC8c7dFpw",
                    "_blank"
                  )
                }
                className="bg-white text-gray-700 border border-blue-300 px-5 py-2.5 rounded-3xl hover:text-blue-500 hover:bg-gray-100 transition flex items-center gap-2"
              >
                <MdOutlineReviews className="text-xl" />
                <span className="font-medium">Yorum Yap</span>
              </button>
            </div>

            {/* Yorum Kartları */}
            <div className="sm:w-2/3 flex flex-wrap gap-4">
              {reviews.slice(0, visibleCount).map((review, index) => {
                const fullText = review.text || "";
                const isExpanded = expanded[index];
                const text =
                  isExpanded || fullText.length <= MAX_CHAR
                    ? fullText
                    : fullText.slice(0, MAX_CHAR) + "...";

                const avatar =
                  review.avatar?.startsWith("http")
                    ? review.avatar
                    : `https://i.pravatar.cc/50?img=${index + 1}`;

                const loaded = loadedCards[index];
                const isLast = index === visibleCount - 1;

                return (
                  <div
                    key={index}
                    ref={isLast ? lastCardRef : null}
                    className={`relative bg-gray-50 rounded-lg shadow-md p-4 flex flex-col w-full sm:w-[230px] min-h-[140px] transition-all duration-700 ${
                      loaded
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-6"
                    }`}
                  >
                    {!loaded && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
                    )}

                    {loaded && (
                      <>
                        {review.source === "google" && (
                          <FaGoogle className="text-red-500 absolute top-3 right-3" />
                        )}

                        <div className="flex items-center gap-2 mb-2">
                          <img
                            src={avatar}
                            alt={review.author}
                            className="w-10 h-10 rounded-full"
                            loading="lazy"
                          />
                          <div>
                            <p className="font-semibold text-sm">
                              {review.author}
                            </p>
                            <p className="text-xs text-gray-500">
                              {review.date}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 mb-2">
                          <div className="flex text-yellow-400 text-sm">
                            {Array.from({ length: review.rating || 0 }).map(
                              (_, i) => (
                                <span key={i}>★</span>
                              )
                            )}
                          </div>
                          <FaCheckCircle
                            className="text-blue-500 text-sm"
                            title="Doğrulanmış kullanıcı"
                          />
                        </div>

                        <p className="text-gray-700 text-sm flex-1">{text}</p>

                        {fullText.length > MAX_CHAR && (
                          <button
                            onClick={() => toggleExpand(index)}
                            className="self-end mt-2 text-blue-600 text-xs hover:underline"
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
      </section>
    </main>
  );
}
