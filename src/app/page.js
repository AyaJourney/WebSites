import React from "react";
import Giris from "./components/home/Giris";
import CardHizmet from "./hizmetlerimiz/CardHizmet";
import CardReferans from "./referanslarimiz/CardReferans";
import CardBizKimiz from "./biz-kimiz/CardBizKimiz";
import WhyAya from "./components/home/WhyAya";
import GoogleYorum from "./components/home/GoogleYorum";
import Portugal from "./components/home/Portugal";
import CardEgitim from "./egitim/CardEgitim";
import Aya from "./components/home/Aya";
import Aya2 from "./components/home/Aya2";



export const metadata = {

  title: "Aya Journey Vize Danışmanlık | ABD, İngiltere,Portekiz, Schengen Vizesi ve Göçmenlik Uzmanı",


  description: "Aya Journey ile vize reddi riskini azaltın! Portekiz, ABD, İngiltere ve Schengen vize başvurularınızda kişiye özel, hızlı ve hatasız danışmanlık hizmeti alın.",
};
export default function Home() {
return (
  <main className="flex flex-col w-full font-sans bg-gray-50 ">
    
    <article className="flex flex-col w-full min-h-screen md:h-screen items-center justify-center mb-30 mt-1">
       <Giris />
    </article>
      <article className="flex flex-col w-full min-h-screen md:h-screen items-center justify-center">
      <Aya />
    </article>
    <article className="flex flex-col w-full min-h-screen md:h-screen items-center justify-center">
      <CardEgitim />
    </article>

    <article className="flex flex-col w-full min-h-screen md:h-screen items-center justify-center">
      <Portugal />
    </article>

    <article className="flex flex-col w-full items-start md:items-center justify-center py-10 md:py-0">
      <CardHizmet />
    </article>

    <article className="flex flex-col w-full min-h-screen md:h-screen items-center justify-center">
      <CardReferans />
    </article>

    <article className="flex flex-col w-full min-h-screen md:h-screen items-center justify-center">
      <CardBizKimiz />
    </article>

    <article className="flex flex-col w-full min-h-screen md:h-screen items-center justify-center">
      <WhyAya />
    </article>
  
          <article className="flex flex-col w-full min-h-screen md:h-screen items-center justify-center">
      <Aya2 />
    </article>

    <article className="flex flex-col w-full min-h-screen md:h-screen items-center justify-center">
      <GoogleYorum />
    </article>

  </main>
)

}
