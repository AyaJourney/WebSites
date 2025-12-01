"use-client"
import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const Aya2 = () => {
  const maddeler = [
    {
      title: "Herkese ayrı fikir. Herkese ayrı söylem. Çünkü herkes ayrı.",
      desc: "Görmeye can attığınız filmin sonunu çok izledik.",
    },
    {
      title: "Olası zorluklar",
      desc: "Büyükelçiliklerin son dönemdeki yaklaşımları, eski onay ve retlerin bize öğrettiklerinden ders çıkarma…",
    },
    {
      title: "Günceli takip etme",
      desc: "Süreci en güncel haliyle takip ederek doğru yönlendirme yapıyoruz.",
    },
    {
      title: "Çok iyi bildiğimiz konular",
      desc: "Size yardım teklif ettiğimiz vizeleri bizzat kendimiz de aldık. Ekibimiz gerçekten işi bilen kişilerden oluşuyor.",
    },
  ];

  return (
    <section className="w-full bg-[#e7f5f8] text-black py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Sol: Görsel */}
<div className="flex-1 flex justify-center">
  <div className="relative w-full h-full p-1">
    <Image
      src="/images/aya2.jpg" 
      alt="Tanıtım görseli"
    width={1000}
    height={1000}

      className="rounded-2xl shadow-lg object-cover"
    />
  </div>
</div>


        {/* Sağ: Metin + Liste */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 leading-snug">
            Herkese ayrı fikir. Herkese ayrı söylem. Çünkü herkes ayrı.
          </h2>
   

          {/* Maddeli Liste */}
          <div className="space-y-5">
            {maddeler.map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow flex items-start gap-4 hover:shadow-lg hover:scale-[1.02] transition"
              >
                <div className="text-blue-600 text-3xl">
                  <FaCheckCircle />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Aya2;

