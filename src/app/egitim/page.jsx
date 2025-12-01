import EgitimCards from "./EgitimCards";
import HeroEgitim from "./HeroEgitim";

export const metadata = {
  title: "Eğitim | Aya Journey",
  description: "Yurtdışı eğitim, staj ve kariyer programlarımız.",
};



export default function EgitimPage() {
  return (
    <div className="w-full min-h-screen bg-white ">

      {/* HERO */}
      {/* <HeroEgitim /> */}

      {/* CARD LIST */}
      <section className="w-full max-w-10xl mx-auto px-4 py-16">
        <EgitimCards />
      </section>

    </div>
  );
}
