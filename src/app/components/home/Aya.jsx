import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    title: "Profil Analizi",
    text: "Vize başvurusunda en kritik adımlardan biri, başvuru sahibinin mevcut durumunun doğru şekilde değerlendirilmesidir.",
  },
  {
    title: "İyi Bir Plan",
    text: "Yurtdışında eğitim, çalışma ya da yatırım yapmayı hedefleyen herkes için en kritik unsur doğru plandır.",
  },
  {
    title: "Adım Adım Uygulama",
    text: "Başarılı bir vize başvurusu veya yurtdışı kariyer yolculuğu, sistematik bir uygulama süreciyle mümkün olur.",
  },
  {
    title: "Sonuç",
    text: "Tüm süreç boyunca atılan adımların doğru şekilde planlanması ve uygulanması, istenilen sonuca ulaşmanın temelini oluşturur.",
  },
];

const Aya = () => {
  return (
    <main className="bg-white text-black font-sans px-6 py-16">
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* SOL TARAF — Başlık + Alt Metin */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
            Şimdi Başrol Sırası Sizde
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-xl">
            Belgelerinizin hazırlanmasından randevu sürecine kadar tüm aşamaları
            sizin adınıza profesyonelce takip ediyoruz.
          </p>
        </div>

        {/* SAĞ TARAF — Adım Kartları */}
        <div className="grid gap-6">
          {steps.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl p-6 transition transform flex gap-4"
            >
              {/* İkon */}
              <div className="text-blue-600 text-3xl mt-1 group-hover:scale-110 transition">
                <FaCheckCircle />
              </div>

              {/* Metinler */}
              <div>
                <h2 className="font-semibold text-xl mb-1">{item.title}</h2>
                <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
};

export default Aya;

