import React from "react";
import {
  AiFillCheckCircle,
  AiFillSafetyCertificate,
  AiOutlineThunderbolt,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { FaUsers, FaGlobeAmericas } from "react-icons/fa";

const WhyAya = () => {
const items = [
    {
      icon: <AiFillCheckCircle className="w-10 h-10 text-teal-600" />,
      title: "Vize Reddi Riskini Azaltma", // Anahtar kelime: Vize Reddi
      desc: "Başvurunuz, vize reddi riskini minimize etmek için uzmanlarımızca detaylıca incelenir ve hazırlanır."
    },
    {
      icon: <AiFillSafetyCertificate className="w-10 h-10 text-teal-600" />,
      title: "Güvenli Belge Yönetimi", // Anahtar kelime: Güvenli, Belge
      desc: "Tüm kişisel ve finansal verileriniz, modern sistemlerle tam koruma altındadır."
    },
    {
      icon: <AiOutlineThunderbolt className="w-10 h-10 text-teal-600" />,
      title: "Hızlı Vize Randevusu Takibi", // Anahtar kelime: Hızlı, Vize Randevusu
      desc: "İhtiyaç duyulan tüm resmi randevularınız ve süreçleriniz en kısa sürede sonuçlandırılır."
    },
    {
      icon: <FaUsers className="w-10 h-10 text-teal-600" />,
      title: "Kişiye Özel Uzman Danışmanlık", // Anahtar kelime: Kişiye Özel, Uzman
      desc: "Deneyimli vize uzmanlarımız, her müşteriye özel strateji belirleyerek yanınızdadır."
    },
    {
      icon: <FaGlobeAmericas className="w-10 h-10 text-teal-600" />,
      title: "Küresel Vize Çözümleri", // Anahtar kelime: Küresel Vize
      desc: "ABD, İngiltere, Schengen ve Portekiz dahil, dünya standartlarında kapsamlı vize danışmanlığı."
    },
    {
      icon: <AiOutlineFieldTime className="w-10 h-10 text-teal-600" />,
      title: "Kesintisiz Başvuru Desteği", // Anahtar kelime: Başvuru Desteği
      desc: "Sürecinizin her aşamasında, günün her saatinde destek ekibimizle iletişime geçebilirsiniz."
    }
];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Neden Aya Journey?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300"
          >
            <div className="flex flex-col items-center text-center gap-4">
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyAya;
