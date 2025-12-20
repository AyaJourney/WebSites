"use client";
import { useEffect, useState } from "react";

export default function ScoreGauge({ score }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start >= score) {
        clearInterval(interval);
        setProgress(score);
      } else {
        setProgress(start);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [score]);

  const angle = (progress / 100) * 180 - 90;

  const color =
    progress < 50
      ? "#ef4444" // kırmızı
      : progress < 75
      ? "#eab308" // sarı
      : "#22c55e"; // yeşil

  return (
    <div className="relative w-[260px] h-[140px] mx-auto flex flex-col items-center justify-center">
      {/* ARKA KADRAN */}
     
      {/* İBRE */}
      <div> <svg viewBox="0 0 200 100" className="w-full h-full">
        <path
          d="M10 100 A90 90 0 0 1 190 100"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="12"
        />
        <path
          d="M10 100 A90 90 0 0 1 190 100"
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeDasharray={`${(progress / 100) * 283} 283`}
          strokeLinecap="round"
        />
      </svg>

         <div
        className="absolute left-1/2 bottom-0 w-[3px] h-[80px] origin-bottom transition-transform duration-700"
        style={{
          background: color,
          transform: `rotate(${angle}deg) translateX(-50%)`,
        }}
      />

      {/* MERKEZ NOKTA */}
      <div className="absolute left-1/2 bottom-0 w-4 h-4 bg-slate-800 rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>
     

      {/* SKOR */}
      <div className="absolute inset-0 top-60 flex flex-col items-center justify-end pb-2 gap-4">
        <div className="text-4xl font-extrabold text-slate-900">
          {progress}
        </div>
        <div className="text-xs text-slate-500 tracking-wide mt-2">
          Vize Hazırlık Skoru
        </div>
      </div>
      
    </div>
  );
}
