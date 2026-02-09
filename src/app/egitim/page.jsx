import EgitimCards from "./EgitimCards";
import "./egitim.css"

export const metadata = {
  title: "Yurtdışı Eğitim & Kariyer Programları | AYA Journey",
  description: "Amerika Work and Travel, Avrupa Erasmus Vizesi, Dil Okulları ve Sertifika programları. AYA Journey ile kariyerinizi yurt dışında şekillendirin.",
  keywords: [
    "yurtdışı eğitim danışmanlığı",
    "Amerika work and travel",
    "Erasmus vizesi danışmanlığı",
    "yurtdışı dil okulları",
    "Almanya Ausbildung danışmanlık",
    "yurtdışı kariyer programları",
    "Polonya eğitim vizesi",
    "Kanada sertifika programları"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/egitim",
  }
};


export default function EgitimPage() {
  return (
    <div className="w-full min-h-screen bg-white ">

   

      {/* CARD LIST */}
      <section className="w-full max-w-8xl">
        <EgitimCards />
      </section>

    </div>
  );
}
