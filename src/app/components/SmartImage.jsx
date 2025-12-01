"use client";
import Image from "next/image";
import { useState } from "react";

const SmartImage = ({ src, alt, className = "", priority = false, placeholderColor = "#f0f0f0", height = "180px" }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: placeholderColor, height }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        priority={priority}
        placeholder="empty"
        onLoad={() => setLoaded(true)}
        className={`transition-transform duration-500 ease-in-out transform ${loaded ? "opacity-100" : "opacity-0"} hover:scale-110`}
      />
    </div>
  );
};

export default SmartImage;
