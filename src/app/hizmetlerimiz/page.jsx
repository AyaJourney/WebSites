import React from 'react'
import Card from './CardHizmet';
export const metadata = {
  title: "Hizmetlerimiz | Aya Journey",
  description: "Visa education business.",
};
const Hizmetlerimiz = () => {
 return (
    <main className="flex flex-col w-full h-screen items-center justify-center bg-zinc-50 font-sans ">
      <Card/>
    </main>
    );
}

export default Hizmetlerimiz
