"use client";
import { useEffect } from "react";
import React from 'react'
import Giris from './Giris';
import Card from './Card';


const YurtDisiRehberi = () => {
  useEffect(() => {
  const elements = document.querySelectorAll("[data-ydr-anim]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ydr-show");
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}, []);

return (
   <main className="flex flex-col w-full min-h-screen items-center justify-center  font-sans ">
    
  {/* Navbar yüksekliği kadar boşluk */}
<article
  data-ydr-anim
  className="flex flex-col w-full items-center justify-start  font-sans ydr-fade-up"
>
  <Giris />
</article>

<article
  data-ydr-anim
  className="flex flex-col w-full min-h-screen items-center justify-center  font-sans ydr-scale"
>
  <Card />
</article>


</main>

    );
}

export default YurtDisiRehberi
