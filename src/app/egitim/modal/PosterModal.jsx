"use client";

import Image from "next/image";

export default function PosterModal({
  isOpen,
  onClose,
  images = [],

  slide,
  setSlide,
}) {
  if (!isOpen) return null;

  const nextSlide = () =>
    setSlide((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setSlide((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <div className="fixed inset-0 z-50">
      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full h-full">
        <Image
          src={images[slide]}
          alt={`Poster ${slide + 1}`}
          fill
          priority
          className="object-contain"
        />

        {/* TOP BAR */}
        <div className="absolute top-0 left-0 w-full flex items-center justify-center px-6 py-4 bg-gradient-to-b from-black/60 to-transparent">


          <button
            onClick={onClose}
            className="absolute right-6 text-white text-3xl leading-none hover:opacity-80"
          >
            ×
          </button>
        </div>

        {/* LEFT */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/40 hover:bg-black/60 backdrop-blur rounded-full flex items-center justify-center transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* RIGHT */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/40 hover:bg-black/60 backdrop-blur rounded-full flex items-center justify-center transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* DOTS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`h-2 rounded-full transition-all ${
                slide === i
                  ? "w-6 bg-white"
                  : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
