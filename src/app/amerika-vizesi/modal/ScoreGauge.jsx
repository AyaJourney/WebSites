"use client";
import { useEffect, useState } from "react";

export default function ScoreGauge({ score }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= score) {
        current = score;
        clearInterval(interval);
      }
      setProgress(current);
    }, 18);

    return () => clearInterval(interval);
  }, [score]);

  // açı (-90 → +90)
  const angle = (progress / 100) * 180 - 90;

  const color =
    progress < 50
      ? "#ef4444"
      : progress < 75
      ? "#eab308"
      : "#22c55e";

  const label =
    progress < 50
      ? "Yüksek Risk"
      : progress < 75
      ? "Orta Seviye"
      : "Güçlü Profil";

  const description =
    progress < 50
      ? "Profiliniz vize açısından riskli görünüyor."
      : progress < 75
      ? "Doğru strateji ile şansınız arttırılabilir."
      : "Profiliniz Amerika vizesi için oldukça güçlü. Yine de risklerden korunmak için AYA Journey ile temasa geçmenizi öneririz.";

  return (
    <div className="relative w-full h-[220px] mx-auto flex flex-col items-center justify-start">
      
      {/* GAUGE */}
      <div className="relative w-full h-[140px]">
        <svg viewBox="0 0 200 110" className="w-full h-full">
          {/* Arka zemin */}
          <path
            d="M10 100 A90 90 0 0 1 190 100"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="14"
          />

          {/* Gradient tanımı */}
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#eab308" />
              <stop offset="80%" stopColor="#22c55e" />

              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>

          {/* Doluluk */}
          <path
            d="M10 100 A90 90 0 0 1 190 100"
            fill="none"
            stroke="url(#scoreGradient)"
            strokeWidth="14"
            strokeDasharray={`${(progress / 100) * 283} 283`}
            strokeLinecap="round"
          />
        </svg>

        {/* İBRE */}
        <div
          className="absolute left-1/2 bottom-[12px] w-[4px] h-[95px] rounded-full transition-transform duration-700 ease-out"
          style={{
            background: color,
            transform: `translateX(-50%) rotate(${angle}deg)`,
            transformOrigin: "bottom center",
            boxShadow: `0 0 12px ${color}`,
          }}
        />

        {/* Merkez Nokta */}
        <div className="absolute left-1/2 bottom-[6px] w-5 h-5 bg-slate-900 rounded-full -translate-x-1/2 shadow-lg border-2 border-white" />
      </div>

      {/* SKOR KARTI */}
<div className="mt-4 w-full text-center px-4">
  <div
    className="text-5xl font-extrabold"
    style={{ color }}
  >
    {progress}
  </div>

  <div className="mt-1 text-sm font-bold tracking-wide uppercase">
    {label}
  </div>

  {progress < 90 && (
    <div className="w-full mt-4 rounded-2xl border border-blue-200 bg-blue-50 px-6 py-5 text-left">
      <p className="text-sm leading-relaxed text-blue-900">
        🚀 <strong>Biliyor muydunuz?</strong>
        <br />
        AYA Journey ile çalıştığınızda çok daha iyi sonuç alabilirsiniz.
       
    
      </p>
    </div>
  )}

  <p className="mt-2 text-md text-slate-500 leading-snug">
    {description}
  </p>
</div>


    </div>
  );
}
