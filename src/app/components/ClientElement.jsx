"use client"; // Bu dosya tarayıcıda çalışacak

import dynamic from 'next/dynamic';

// Bileşenleri burada dinamik olarak içe aktarıyoruz
const Cookies = dynamic(() => import("./Cookies"), { ssr: false });
const WhatsappButton = dynamic(() => import("./WhatsappButton"), { ssr: false });

export default function ClientElements() {
  return (
    <>
      <Cookies />
      <WhatsappButton />
    </>
  );
}