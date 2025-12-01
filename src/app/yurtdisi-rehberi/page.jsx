import React from 'react'
import Giris from './Giris';
import Card from './Card';
export const metadata = {
  title: "Yurt Dışı Rehberi | Aya Journey",
  description: "Visa education business.",
};
const YurtDisiRehberi = () => {
return (
   <main className="flex flex-col w-full min-h-screen items-center justify-center bg-zinc-50 font-sans ">
  {/* Navbar yüksekliği kadar boşluk */}
  <article className="flex flex-col w-full  items-center justify-start bg-zinc-50 font-sans  mt-[65px]">
    <Giris />
  </article>

  <article className="flex flex-col w-full min-h-screen items-center justify-center bg-zinc-50 font-sans ">
  <Card/>
  </article>


</main>

    );
}

export default YurtDisiRehberi
