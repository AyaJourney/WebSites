"use client";
import { useEffect, useState } from "react";
import { FaTimes,FaArrowLeft  } from "react-icons/fa";
import ScoreGauge from "./ScoreGauge";
import Image from "next/image";
 function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-2 text-slate-500 hover:text-slate-900 cursor-pointer"
      title="Geri dön"
    >
      <FaArrowLeft className="text-sm" />
      <span className="text-sm font-medium">Geri</span>
    </button>
  );
}
/* =========================
   VALIDATION REGEX
========================= */
const nameRegex = /^[a-zA-ZçğıöşüÇĞİÖŞÜ\s]{3,}$/;
const emailRegex =
  /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

/* =========================
   QUESTIONS
========================= */
const steps = {
  1: {
    title: "1. Yaş Grubunuz?",
    description:
      "Yaş grubu, göçmenlik risk analizinde en temel kriterlerden biridir.",
    options: [
      ["0–14 Yaş", 0, "age_0_14"],
      ["14–18 Yaş", 0, "age_14_18"],
      ["18–30 Yaş", 0, "age_18_30"],
      ["30–45 Yaş", 0, "age_30_45"],
      ["45–60 Yaş", 0, "age_45_60"],
      ["61 Yaş ve Üstü", 0, "age_61"],
    ],
  },

  age_0_14: {
    title: "Anne & Baba Vize Durumu",
    description:
      "Reşit olmayan başvurularda ebeveynlerin seyahat geçmişi çok önemlidir.",
    options: [
      ["İkisinin de vizesi var", 10, 2],
      ["Sadece birinin vizesi var", 5, 2],
      ["Vizeleri yok", 0, 2],
    ],
  },

  age_14_18: {
    title: "Anne & Baba Vize Durumu",
    description:
      "Aile bağları ve geri dönüş ihtimali bu yaş grubunda yakından incelenir.",
    options: [
      ["İkisinin de vizesi var", 7, 2],
      ["Sadece birinin vizesi var", 3, 2],
      ["Vizeleri yok", 0, 2],
    ],
  },

  age_18_30: {
    title: "Ailenizin Vize Durumu",
    description:
      "Genç yetişkinlerde aileyle bağ ve seyahat geçmişi dengeleyici faktördür.",
    options: [
      ["Kadınım, anne & baba vizesi var", 3, 2],
      ["Diğer durumlar", 0, 2],
    ],
  },

  age_30_45: {
    title: "Cinsiyetiniz?",
    description:
      "Bu yaş grubunda sosyo-ekonomik bağlam puanlamaya etki eder.",
    options: [
      ["Kadın", 10, 3],
      ["Erkek", 5, 3],
    ],
  },

  age_45_60: {
    title: "Cinsiyetiniz?",
    description:
      "Yerleşik hayat ve geri dönüş ihtimali değerlendirilir.",
    options: [
      ["Kadın", 20, 3],
      ["Erkek", 10, 3],
    ],
  },

  age_61: {
    title: "Amerika'da Akrabanız Var mı?",
    description:
      "Yakın akraba varlığı göçmenlik riskini artırabilir.",
    options: [
      ["Hayır", 20, 2],
      ["Evet", 0, "relative_status"],
    ],
  },

  relative_status: {
    title: "Yakınınızın Statüsü",
    description:
      "Akrabanın yasal durumu değerlendirmede belirleyicidir.",
    options: [
      ["ABD Vatandaşı", 10, 2],
      ["Green Card Sahibi", 5, 2],
      ["Geçici vizeyle", -10, 2],
    ],
  },

  2: {
    title: "2. Cinsiyetiniz?",
    description:
      "İstatistiksel değerlendirme amacıyla sorulmaktadır.",
    options: [
      ["Kadın", 5, 3],
      ["Erkek", 0, 3],
    ],
  },

  3: {
    title: "3. Medeni Haliniz?",
    description:
      "Aile bağları, geri dönüş niyeti açısından önemlidir.",
    options: [
      ["Evli", 5, 4],
      ["Bekar", 0, 4],
    ],
  },

  4: {
    title: "4. Çocuk Sayısı",
    description:
      "Çocuklar, ülkeye geri dönüş bağlarını güçlendirir.",
    options: [
      ["Çocuğum yok", -5, 5],
      ["1 çocuk (çocuksuz seyahat)", 3, 5],
      ["2+ çocuk (çocuksuz)", 15, 5],
      ["1 çocuk (çocukla)", 2, 5],
      ["2+ çocuk (çocuklarla)", 0, 5],
    ],
  },

  5: {
    title: "5. Seyahat Şekli",
    description:
      "Seyahat şekli, göçmenlik niyetinin analizinde kullanılır.",
    options: [
      ["Bekar & yalnız", -10, 6],
      ["Evli & yalnız", -5, 6],
      ["Bekar & arkadaşla", 3, 6],
      ["Evli & arkadaşlarla", 10, 6],
      ["Eşimle", 15, 6],
      ["Ailece", 4, 6],
    ],
  },

  6: {
    title: "6. Son 5 Yıldaki Batı Vizeleri",
    description:
      "ABD, İngiltere, Kanada, Avustralya veya NZ vizeleri.",
    options: [
      ["Birden fazla", 20, 7],
      ["1 kez", 10, 7],
      ["Hiç yok", 0, 7],
    ],
  },

  7: {
    title: "7. Kanada Vize Reddi",
    description:
      "Son 3 yıl içindeki retler risk puanını etkiler.",
    options: [
      ["Evet", -10, 8],
      ["Hayır", 0, 8],
    ],
  },

  8: {
    title: "8. Pasaporttaki Vize Sayısı",
    description:
      "Toplam basılı vize etiketi sayısı.",
    options: [
      ["Hiç yok", -10, 9],
      ["1 tane", 5, 9],
      ["2 tane", 20, 9],
      ["3 veya daha fazla", 40, 9],
    ],
  },

  9: {
    title: "9. Diğer Ülke Seyahatleri",
    description:
      "Asya, Orta Doğu veya Afrika seyahatleri.",
    options: [
      ["Birden fazla", 10, 10],
      ["Bir tane", 3, 10],
      ["Hayır", 0, 10],
    ],
  },

  10: {
    title: "10. İngilizce Mülakat",
    description:
      "Konsolosluk görüşmesini İngilizce yapabilir misiniz?",
    options: [
      ["Evet", 15, 11],
      ["Hayır", 0, 11],
    ],
  },

  11: {
    title: "11. Uluslararası Ödül",
    description:
      "Spor, sanat veya bilim alanında derece.",
    options: [
      ["Evet", 20, 12],
      ["Hayır", 0, 12],
    ],
  },

  12: {
    title: "12. Meslek",
    description:
      "Mesleki ve ekonomik istikrar değerlendirilir.",
    options: [
      ["Kamu üst düzey / Yeşil Pasaport", 20, 13],
      ["Kamu kariyer memuru", 8, 13],
      ["Kamu işçi", 3, 13],
      ["Şirket sahibi (10+)", 20, 13],
      ["Şirket sahibi (<10)", 10, 13],
      ["Üst düzey yönetici", 20, 13],
      ["Doktor / Avukat", 10, 13],
      ["Beyaz yaka", 5, 13],
    ],
  },

  13: {
    title: "13. ABD Vize Reddi",
    description:
      "Daha önce ABD vizesinden ret aldınız mı?",
    options: [
      ["Evet", 0, "last_reject"],
      ["Hayır", 0, "result"],
    ],
  },

  last_reject: {
    title: "Son Reddiniz Ne Zamandı?",
    description:
      "Ret tarihi, risk skorunu doğrudan etkiler.",
    options: [
      ["Son 6 ay", -15, "result"],
      ["Son 18 ay", -10, "result"],
      ["2 yıldan fazla", 0, "result"],
      ["Birden fazla", -20, "result"],
    ],
  },
};

/* =========================
   COMPONENT
========================= */
export default function AmericaVisaTestModal({ open, setOpen }) {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [user, setUser] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
const [history, setHistory] = useState([]);
  useEffect(() => {
    if (!open) {
      setStep(0);
      setScore(0);
      setUser({ name: "", email: "" });
      setErrors({});
    }
  }, [open]);

  if (!open) return null;

  const validateStart = () => {
    const e = {};
    if (!nameRegex.test(user.name)) {
      e.name = "Geçerli bir ad soyad giriniz";
    }
    if (!emailRegex.test(user.email)) {
      e.email = "Geçerli bir e-posta giriniz";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

const next = (pts, nextStep) => {
  setHistory((h) => [...h, { step, pts }]);
  setScore((s) => s + pts);
  setStep(nextStep);
};

const finish = (pts) => {
  setHistory((h) => [...h, { step, pts }]);

  const raw = score + pts + 40;
  const final = Math.min(Math.max(raw, 15), 99);

  setScore(final);
  setStep("result");
};

const goBack = () => {
  if (history.length === 0) return;

  const last = history[history.length - 1];

  setHistory((h) => h.slice(0, -1));
  setScore((s) => s - last.pts);
  setStep(last.step);
};
  return (
    <div className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm flex justify-center px-4 pt-6 pb-10">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <Image
          src="/images/aya_logo_svg.svg"
          alt="Logo"
          width={150}
          height={150}
          />
         

          <div className="group relative">
            <FaTimes
              onClick={() => setOpen(false)}
              className="cursor-pointer text-slate-400 hover:text-black transition"
            />
            <span className="absolute right-0 top-6 opacity-0 group-hover:opacity-100 text-xs bg-black text-white px-2 py-1 rounded">
              Kapat
            </span>
          </div>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">

          {/* STEP 0 */}
          {step === 0 && (
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-extrabold">
           Ücretsiz Amerika Vize Analizi
              </h2>
              <p className="text-slate-600">
                2 dakikada Amerika vize hazırlık skorunuzu öğrenin.
              </p>

              <input
                placeholder="Ad Soyad"
                className="w-full p-4 border rounded-xl"
                value={user.name}
                onChange={(e) =>
                  setUser({ ...user, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-red-500 text-sm">
                  {errors.name}
                </p>
              )}

              <input
                placeholder="E-posta"
  className="w-full p-4 border rounded-xl"
  value={user.email}
  onChange={(e) => setUser({ ...user, email: e.target.value })}

              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {errors.email}
                </p>
              )}

              <button
                onClick={() => validateStart() && setStep(1)}
                className="w-full bg-black text-white py-4 rounded-xl font-bold"
              >
                Analize Başla
              </button>
            </div>
          )}

          {/* QUESTIONS */}
  {steps[step] && (
  <div className="space-y-5 relative">
    
    {/* 🔙 BACK BUTTON – SORU ALANININ İÇİNDE */}
   {history.length > 0 && step !== "result" && (
      <BackButton onClick={goBack} />
    )}

    {/* 🧠 SORU */}
    <h3 className="text-xl font-bold">
      {steps[step].title}
    </h3>

    {/* 📄 AÇIKLAMA */}
    {steps[step].description && (
      <p className="text-slate-600 text-sm">
        {steps[step].description}
      </p>
    )}

    {/* ✅ ŞIKLAR */}
    {steps[step].options.map(([label, pts, nextStep], i) => (
      <button
        key={i}
        onClick={() =>
          nextStep === "result"
            ? finish(pts)
            : next(pts, nextStep)
        }
        className="w-full text-left p-4 border rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition font-semibold"
      >
        {label}
      </button>
    ))}
  </div>
)}


          {/* RESULT */}
          {step === "result" && (
            <div className="text-center space-y-8">
              <h3 className="text-2xl font-extrabold">
                Teşekkürler {user?.name?.toUpperCase("tr-TR")}
              </h3>

              <ScoreGauge score={score} />

              <p className="text-slate-600 max-w-md mx-auto mt-50">
                Bu skor, Amerika vizesi açısından genel
                hazırlık ve risk seviyenizi göstermektedir.
              </p>

              <div className="flex flex-col sm:flex-row gap-2 w-full justify-center">
      
      {/* RANDEVU AL */}
      <a
        href="/randevu"
        className="w-full sm:w-auto"
      >
        <button className=" cursor-pointer w-full sm:w-auto bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:-translate-y-0.5 transition">
          Randevu Al
        </button>
      </a>

      {/* HEMEN ARA */}
      <a
        href="tel:+903128701584"
        className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-slate-900 text-white font-semibold hover:-translate-y-0.5 transition"
      >
        Hemen Ara
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/905302199056"
        target="_blank"
        rel="noreferrer"
        className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold hover:-translate-y-0.5 transition"
      >
        WhatsApp’tan Yaz
      </a>

    </div>

              <button
                onClick={() => setOpen(false)}
                className="text-sm text-slate-500 underline cursor-pointer"
              >
                Kapat
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
