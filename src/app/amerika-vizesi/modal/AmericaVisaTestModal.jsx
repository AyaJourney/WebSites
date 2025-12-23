"use client";
import { useEffect, useState } from "react";
import { FaTimes,FaArrowLeft  } from "react-icons/fa";
import ScoreGauge from "./ScoreGauge";
import Image from "next/image";
import { useSearchParams,useRouter } from "next/navigation";
// import { useRouter } from "next/router";
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
  title: "Yaş Grubu",
  description: "Lütfen yaş aralığınızı seçiniz.",
  options: [
    ["0 - 13 yaşındayım.", 0, "parents_visa", { isMinor: true, ageGroup: "0-13" }],
    ["14 - 17 yaşındayım.", 0, "parents_visa", { isMinor: true, ageGroup: "14-17" }],
    ["18 - 28 yaş arasındayım.", -10, "gender_check", { isMinor: false, ageGroup: "18-28" }],
    ["29 - 45 yaş arasındayım.", 5, "marital_status", { isMinor: false, ageGroup: "29-45" }],
    ["46 - 60 yaş arasındayım.", 10, "marital_status", { isMinor: false, ageGroup: "46-60" }],
    ["60 yaşından büyüğüm.", 15, "marital_status", { isMinor: false, ageGroup: "60+" }],
  ],
},
// education_check:{
//  title: "Eğitim Durumu",
//     description: "Eğitim hayatınıza devam ediyor musunuz?",
//     options: [
//       ["Evet", 0, "school_check"],
//       ["Hayır", 0, "parents_visa"],
     

//     ], 
// },
school_check:{
 title: "Öğrencilik Durumu",
    description: "Öğrencilik durumunuzu belirtiniz.",
    options: [
      // ["Lise", 5, "parents_visa",{gender:"female"}],
      ["Ön Lisans/Lisans", -10, "children_count"],
      ["Yüksek Lisans", -3, "children_count"],

    ], 
},
  gender_check: {
    title: "Cinsiyet",
    description: "Cinsiyetinizi belirtiniz.",
    options: [
      ["Kadın", 5, "parents_visa",{gender:"female"}],
      ["Erkek", -5, "parents_visa",{gender:"male"}],
    ],
  },

  parents_visa: {
    title: "Ebeveyn Vize Durumu",
    description:
      "Anne veya babanızın (veya her ikisinin) geçerli bir ABD vizesi bulunuyor mu?",
    options: [
      ["Evet, hem annemin hem de babamın geçerli vizesi var.", 10, "travel_with_parents"],
      ["Evet, sadece bir ebeveynimin (anne veya baba) vizesi var.", 5, "travel_with_parents"],
      ["Hayır, ebeveynlerimin vizesi yok.", -5, "travel_companion_check"],
    ],
  },

  travel_with_parents: {
    title: "Seyahat Şekli",
    description:
      "Amerika seyahatinizi, vizesi olan ebeveynlerinizle birlikte mi gerçekleştireceksiniz?",
    options: [
      ["Evet, onlarla birlikte seyahat edeceğim.", 0, "flow_router"], // specialLogic vardı
      ["Hayır, onlardan bağımsız seyahat edeceğim.", 0, "travel_companion_check"],
    ],
  },

  travel_companion_check: {
    title: "Seyahat Eşlikçisi",
    description:
      "Peki, Amerika seyahatinizi kiminle gerçekleştirmeyi planlıyorsunuz?",
    options: [
      ["Yalnız başıma seyahat edeceğim.", -2, "flow_router"],
      ["Bir arkadaşımla veya arkadaş grubumla.", 0, "flow_router"],
      ["Okul veya iş sebebiyle bir ekip/heyet ile birlikte.", 5, "flow_router"],
      ["Eşimle veya sevgilimle.", 3, "flow_router"],
    ],
  },
marital_status: {
  title: "Medeni Durum",
  description: "Medeni durumunuz nedir?",
  options: [
    [
      "Bekar / Dul / Boşanmış",
      0,
      "job_status",
      { maritalStatus: "single" }
    ],
    [
      "Evli",
      5,
      "job_status",
      { maritalStatus: "married" }
    ],
  ],
},

  job_status: {
    title: "Meslek Durumu",
    description:
      "Mevcut çalışma durumunuzu en iyi ifade eden seçenek hangisidir?",
    options: [
      ["Kamu çalışanıyım (Memur, Akademisyen vb.)", 10, "children_count"],
      ["Özel sektörde çalışanım (SGK'lı).", 5, "children_count"],
      ["İşverenim / Şirket Sahibiyim.", 10, "children_count"],
      ["Öğrenciyim.", 2, "school_check"],
      ["Emekliyim.", 8, "children_count"],
      ["Çalışmıyorum / Ev hanımıyım.", -5, "children_count"],
      ["Freelance(Yazılımcı, Tasarımcı,İç Mimar vb.)", -10, "children_count"]
    ],
  },

  children_count: {
    title: "Çocuk Sayısı",
    description: "Sahip olduğunuz çocuk sayısını belirtiniz.",
    options: [
      ["Çocuğum yok.", 0, "us_contact"],
      ["1 çocuk sahibiyim.", 5, "us_contact"],
      ["2 veya daha fazla çocuğum var.", 10, "us_contact"],
    ],
  },

  us_contact: {
    title: "Amerika'daki Tanıdıklar",
    description:
      "Amerika Birleşik Devletleri'nde yaşayan birinci derece akrabanız veya yakın tanıdığınız var mı?",
    options: [
      ["Evet, birinci derece akrabam var.", -10, "us_contact_status"],
      ["Evet, uzak akrabam veya arkadaşlarım var.", -5, "us_contact_status"],
      ["Hayır, Amerika'da kimsem yok.", 0, "travel_western_visas"],
    ],
  },

  us_contact_status: {
    title: "Tanıdığınızın Statüsü",
    description:
      "Amerika'daki tanıdığınızın oradaki yasal statüsü nedir?",
    options: [
      ["ABD Vatandaşı.", 5, "us_contact_visit"],
      ["Green Card (Yeşil Kart) Sahibi.", 2, "us_contact_visit"],
      ["Öğrenci veya Geçici Çalışma Vizesi ile orada.", -10, "us_contact_visit"],
      ["İltica/Yasa dışı yollardan geçmiş", -30, "us_contact_visit"],

    ],
  },

  us_contact_visit: {
    title: "Türkiye Ziyareti",
    description:
      "Bu kişi en son ne zaman Türkiye'ye ziyarete geldi?",
    options: [
      ["Son 1 yıl içerisinde geldi.", 5, "travel_western_visas"],
      ["1 - 3 yıl arasında geldi.", -5, "travel_western_visas"],
      ["3 yıldan daha uzun süredir gelmedi veya hiç gelmedi.", -15, "travel_western_visas"],
    ],
  },

  travel_western_visas: {
    title: "Son 5 Yıldaki Batı Vizeleri",
    description:
      "Son 5 yılda, Amerika (Work and Travel hariç), İngiltere, Kanada, Avustralya ve Yeni Zelanda’dan vize aldınız mı?",
    options: [
      ["Birden fazla", 20, "travel_visa_labels"],
      ["1 tane", 8, "travel_visa_labels"],
      ["Hiç yok", 0, "travel_visa_labels"],
    ],
  },

  travel_visa_labels: {
    title: "Pasaporttaki Vize Etiketi Sayısı",
    description:
      "Pasaportunuzda basılı vize etiketi sayısı.",
    options: [
      ["Hiç yok", -10, "travel_other_countries"],
      ["1 tane", 3, "travel_other_countries"],
      ["2 tane", 8, "travel_other_countries"],
      ["3 tane veya daha fazla", 15, "travel_other_countries"],
    ],
  },

  travel_other_countries: {
    title: "Diğer Ülke Seyahatleri",
    description:
      "Japonya,Güney Kore,Singapur,Tayland,Birleşik Arap Emirlikleri,Güney Afrika bu ülkelere son 5 yılda seyahat ettiniz mi?",
    options: [
      ["Birden fazla", 8, "us_refusal"],
      ["Bir tane", 2, "us_refusal"],
      ["Hayır", 0, "us_refusal"],
    ],
  },

  us_refusal: {
    title: "ABD Vize Geçmişi",
    description:
      "Daha önce Amerika vizesi başvurunuzdan ret aldınız mı?",
    options: [
      ["Hayır, almadım.", 0, "canada_refusal"],
      ["Evet, aldım.", -10, "us_refusal_time"],
    ],
  },

  us_refusal_time: {
    title: "ABD Ret Zamanı",
    description: "En son ret cevabını ne zaman aldınız?",
    options: [
      ["6 aydan daha yakın bir sürede.", -10, "us_refusal_count"],
      ["6 ay - 1 yıl arasında.", -5, "us_refusal_count"],
      ["1 - 2 yıl arasında.", -2, "us_refusal_count"],
      ["2 yıldan daha uzun süre önce.", 0, "us_refusal_count"],
    ],
  },

  us_refusal_count: {
    title: "ABD Ret Sayısı",
    description: "Toplamda kaç kez ret aldınız?",
    options: [
      ["Sadece 1 kez.", 0, "canada_refusal"],
      ["2 kez.", -2, "canada_refusal"],
      ["3 veya daha fazla kez.", -5, "canada_refusal"],
    ],
  },

  canada_refusal: {
    title: "Kanada Vize Geçmişi",
    description:
      "Son üç yılda Kanada'dan vize reddi aldınız mı?",
    options: [
      ["Evet, Kanada'dan ret aldım.", -15, "calculate_final"],
      ["Hayır, Kanada'dan hiç ret almadım.", 0, "calculate_final"],
    ],
  },
  flow_router: {
  hidden: true
},
};



/* =========================
   COMPONENT
========================= */
export default function AmericaVisaTestModal({ open, setOpen }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [user, setUser] = useState({ name: "", email: "",phoneNumber:"" });
  const [errors, setErrors] = useState({});
const [history, setHistory] = useState([]);
const [answers, setAnswers] = useState([]);
const [userState, setUserState] = useState({
  // score: 50,
  ageGroup: "",
  gender: "",
  maritalStatus: "",
  isMinor: false,
});
 useEffect(() => {
    if (searchParams.get("test") === "1") {
      setOpen(true);
      router.replace("/amerika-vizesi", { scroll: false });
    }
  }, [searchParams]);
  useEffect(() => {
    if (!open) {
      setStep(0);
      setScore(0);
      setUser({ name: "", email: "",phoneNumber:"" });
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

const next = (pts, nextStep,payload = null,answerLabel = "",questionTitle = "") => {
   if (questionTitle && answerLabel) {
    setAnswers((prev) => [
      ...prev,
      {
        step,
        question: questionTitle,
        answer: answerLabel,
        points: pts,
      },
    ]);
  }
  setHistory((h) => [...h, { step, pts }]);
  setScore((s) => s + pts);
 const nextUserState = payload
    ? { ...userState, ...payload }
    : userState;

  setUserState(nextUserState);

  // 🔀 FLOW ROUTER
  if (nextStep === "flow_router") {
    setStep(nextUserState.isMinor ? "us_refusal" : "marital_status");
    return;
  }

  // 🧮 FINAL
  if (nextStep === "calculate_final") {
    finish(0);
    return;
  }

  setStep(nextStep);
};
// console.log("userState:",answers );
const finish = async (pts) => {
  setHistory((h) => [...h, { step, pts }]);

  // 🔢 Base hesap
  let finalScore = score + pts + 40;

  // 🔻 Genç Yaş (18–28) Kesintisi
  if (userState.ageGroup === "18-28" && finalScore >= 90) {
    if (userState.maritalStatus === "single") finalScore -= 20;
    else if (userState.maritalStatus === "married") finalScore -= 15;
  }

  // 🔻 Orta Yaş (29–45) Kesintisi
  if (userState.ageGroup === "29-45" && finalScore >= 90) {
    if (userState.maritalStatus === "single") finalScore -= 12;
    else if (userState.maritalStatus === "married") finalScore -= 5;
  }

  // 🔒 Alt / Üst sınır
  finalScore = Math.min(Math.max(finalScore, 15), 93);

  setScore(finalScore);
  setStep("result");

  try {
    await fetch("/api/send-test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        phoneNumber:user.phoneNumber,
        score: finalScore,
        answers:answers,
      }),
    });
  } catch (err) {
    console.error("Mail gönderilemedi");
  }
};


const goBack = () => {
  if (history.length === 0) return;

  const last = history[history.length - 1];

  setHistory((h) => h.slice(0, -1));
  setAnswers((a) => a.slice(0, -1));
  setScore((s) => s - last.pts);
  setStep(last.step);
};
  return (
    <div className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm flex justify-center px-4 pt-6 pb-10">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <div className="flex items-center justify-center w-full">
<Image
          src="/images/aya_logo_svg.svg"
          alt="Logo"
          width={250}
          height={250}
          />
         
          </div>
          

          <div className="group relative">
            <FaTimes
              onClick={() => setOpen(false)}
              className="cursor-pointer text-slate-400 hover:text-black transition"
            />
            <span  className="absolute right-0 top-6 opacity-0 group-hover:opacity-100 text-xs bg-black text-white px-2 py-1 rounded">
              Kapat
            </span>
          </div>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">

          {/* STEP 0 */}
          {step === 0 && (
            <div className="space-y-10 text-center">
              <h2 className="text-3xl font-extrabold">
            Amerika Vize Analizi
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

              <input
                placeholder="Telefon Numarası"
  className="w-full p-4 border rounded-xl"
  value={user.phoneNumber}
  onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}

              />
              
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
    {steps[step]?.description && (
      <p className="text-slate-600 text-sm">
        {steps[step].description}
      </p>
    )}

    {/* ✅ ŞIKLAR */}
    {steps[step].options?.map(([label, pts, nextStep,payload], i) => (
      <button
        key={i}
        onClick={() =>
          nextStep === "result"
            ? finish(pts)
            : next(
    pts,
    nextStep,
    payload,
    label,
    steps[step].title
  )
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
              Verilen puanlarin herhangi bir bağlayıcılığı bulunmamakta olup, kullanıcıya fikir vermesi ve eğlendirmesi amaçlanmaktadır.
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
     <a
        href="/iletisim"
        className="w-full sm:w-auto"
      >
        <button className=" cursor-pointer w-full sm:w-auto bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:-translate-y-0.5 transition">
         Size Ulaşalım
                 </button>
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
