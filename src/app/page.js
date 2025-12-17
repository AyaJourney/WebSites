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
import AmericaVisa from "./components/home/AmericaVisa";



export const metadata = {

  title: "Aya Journey Vize Danışmanlık | ABD, İngiltere,Portekiz, Schengen Vizesi ve Göçmenlik Uzmanı",


  description: "Aya Journey ile vize reddi riskini azaltın! Portekiz, ABD, İngiltere ve Schengen vize başvurularınızda kişiye özel, hızlı ve hatasız danışmanlık hizmeti alın.",
};
export default function Home() {
  return (
    <main className="flex flex-col w-full font-sans bg-white">

      {/* HERO */}
          <section className="w-full mb-20">
        <AmericaVisa />
      </section>
      <section className="w-full min-h-[100svh]">
        <Giris />
      </section>


      {/* CONTENT SECTIONS */}
      <section className="w-full py-20">
        <Aya />
      </section>

      <section className="w-full py-20">
        <CardEgitim />
      </section>

      <section className="w-full py-20">
        <Portugal />
      </section>

      <section className="w-full py-20">
        <CardHizmet />
      </section>

      <section className="w-full py-20">
        <CardReferans />
      </section>

      <section className="w-full py-20">
        <CardBizKimiz />
      </section>

      <section className="w-full py-20">
        <WhyAya />
      </section>

      <section className="w-full py-20">
        <Aya2 />
      </section>

      <section className="w-full py-20">
        <GoogleYorum />
      </section>

    </main>
  );
}

