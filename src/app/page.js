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
import İngiltereVisa from "./components/home/İngiltereVisa";
import SchengenVisa from "./components/home/SchengenVisa";
import SideNav from "./components/home/SideNav";
import HomeClient from "./components/home/HomeClient";


export const metadata = {

  title: "Aya Journey Vize Danışmanlık | Amerika Vizesi Danışmanlık Ankara ve İstanbul,İngiltere Vizesi Danışmanlık Ankara ve İstanbul, Portekiz Vizesi Danışmanlık Ankara ve İstanbul,  Schengen Vizesi Danışmanlık Ankara ve İstanbul ve Göçmenlik Uzmanı",


  description: "Aya Journey ile vize reddi riskini azaltın! Portekiz, ABD, İngiltere ve Schengen vize başvurularınızda kişiye özel, hızlı ve hatasız danışmanlık hizmeti alın.",
};
export default function Home() {
  return (
    <main className="flex flex-col w-full bg-white mt-9">
      <HomeClient />
      {/* HERO */}
   <SideNav />
      <section className="w-full mb-15" id="giris-1" >
        <Giris />
      </section>

       <section className="w-full mb-15" id="giris-2">
        <AmericaVisa />
      </section>
           <section className="w-full mb-15" id="giris-3">
        <İngiltereVisa />
      </section>
                 <section className="w-full mb-15" id="giris-4">
        <SchengenVisa />
      </section>
      {/* CONTENT SECTIONS */}
      <section className="w-full mb-15" id="giris-5">
        <Aya /> 
      </section>

      <section className="w-full mb-15" id="giris-6">
        <CardEgitim />
      </section>

      <section className="w-full mb-15" id="giris-7">
        <Portugal />
      </section>

      <section className="w-full mb-15" id="giris-8 ">
        <CardHizmet />
      </section>

      <section className="w-full mb-15" id="giris-9">
        <CardReferans />
      </section>

      <section className="w-full mb-15" id="giris-10">
        <CardBizKimiz />
      </section>

      <section className="w-full mb-15" id="giris-11">
        <WhyAya />
      </section>

      <section className="w-full mb-15" id="giris-12">
        <Aya2 />
      </section>

      <section className="w-full mb-15" id="giris-13">
        <GoogleYorum />
      </section>

    </main>
  );
}

