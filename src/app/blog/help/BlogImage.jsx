import Image from "next/image";
import { useState } from "react";

export default function BlogImage({ p }) {
  const [imgSrc, setImgSrc] = useState(p.image || "/images/icon.png");

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden ">
      {/* BLUR BACKGROUND */}
      <Image
        src={imgSrc}
        alt="AYA blog görseli"
        fill
        className="object-cover scale-110 blur-xl opacity-40"
        aria-hidden
      />

      {/* REAL IMAGE */}
      <Image
        src={imgSrc}
        alt={p.title}
        fill
        className="object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
        onError={() => setImgSrc("/images/icon.png")}
      />
    </div>
  );
}
