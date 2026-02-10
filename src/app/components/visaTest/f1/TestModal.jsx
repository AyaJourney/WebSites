"use client";
import { useEffect, useState } from "react";
import { FaTimes,FaArrowLeft  } from "react-icons/fa";
import ScoreGauge from "./ScoreGauge";
import Image from "next/image";
import { useSearchParams,useRouter } from "next/navigation";
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
function FinishScreen({ onFinish }) {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4 ">
      <div className="relative w-full max-w-lg bg-white rounded-[28px]  p-10 text-center space-y-7">

        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-indigo-50">
            <span className="text-blue text-2xl font-bold">✓</span>
          </div>
        </div>

        <div className="pt-6">
          <h2 className="text-3xl font-semibold text-gray-800 tracking-tight">
            Test Bitti
          </h2>
        </div>

        <p className="text-gray-600 leading-relaxed text-base">
          Cevaplarınızı kaydettik. Testi bitirmek için aşağıdaki
          butona basabilirsiniz.
        </p>

        <p className="text-gray-500 italic text-sm">
          Bakalım kaderiniz nasıl yazılmış?
        </p>

        <button onClick={onFinish} className="w-full mt-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white text-lg font-medium cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:brightness-110 active:scale-[0.97]">
          Bitir
        </button>

        <div className="pt-2 text-xs text-gray-400">
          Sonuçlarınız bir sonraki adımda hazırlanacaktır
        </div>

      </div>
    </div>
  );
}

/* =========================
   VALIDATION REGEX
========================= */
const nameRegex = /^[a-zA-ZçğıöşüÇĞİÖŞÜ\s]{3,}$/;
const emailRegex =
  /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
const phoneRegex=
/^(?:\+90|0)?\s*(?:\(?5\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2})$/;
/* =========================
   QUESTIONS
========================= */


const steps = {
 1  : {
  title: "Yaş Grubu",
  description: "Lütfen yaş aralığınızı seçiniz.",
  options: [
    ["18 - 22 yaş arasındayım", 5, "gender"],
    ["23 - 27 yaş arasındayım", 0, "gender"],
    ["28 - 35 yaş arasındayım", -10, "gender"],
    ["36 yaş ve üzeri", -20, "gender"],
  ],
},

gender: {
  title: "Cinsiyet",
  options: [
    ["Kadın", 3, "marital_status"],
    ["Erkek", -5, "marital_status"],
  ],
},


marital_status: {
  title: "Medeni Durum",
  options: [
    ["Evli", 10, "western_visas"],
    ["Bekar", -5, "western_visas"],
  ],
},


western_visas: {
  title: "Batı Vizeleri",
  description: "ABD, İngiltere, Kanada, Avustralya",
  options: [
    ["Birden fazla", 20, "schengen_count"],
    ["1 tane", 15, "schengen_count"],
    ["Hiç yok", 0, "schengen_count"],
  ],
},

schengen_count: {
  title: "Schengen Vize Sayısı",
  options: [
    ["3 veya daha fazla", 15, "other_countries"],
    ["2 tane", 10, "other_countries"],
    ["1 tane", 5, "other_countries"],
    ["Hiç yok", 0, "other_countries"],
  ],
},
other_countries: {
  title: "Diğer Ülkeler",
  description: "Japonya, Kore, Singapur vb.",
  options: [
    ["Birden fazla", 5, "risky_countries"],
    ["Bir tane", 3, "risky_countries"],
    ["Yok", 0, "risky_countries"],
  ],
},
risky_countries: {
  title: "Riskli Ülke Seyahati",
  description: "Rusya, İran, Çin, Libya vb.",
  options: [
    ["Evet", -5, "us_visa_denial"],
    ["Hayır", 0, "us_visa_denial"],
  ],
},
us_visa_denial: {
  title: "ABD Vize Reddi",
  options: [
    ["Evet", 0, "us_denial_time"],
    ["Hayır", 0, "canada_visa_denial"],
  ],
},
us_denial_time: {
  title: "ABD Ret Zamanı",
  options: [
    ["Son 6 ay içinde", -15, "canada_visa_denial"],
    ["Son 18 ay içinde", -10, "canada_visa_denial"],
    ["2 yıldan uzun süre önce", 0, "canada_visa_denial"],
    ["Birden fazla reddim var", -20, "canada_visa_denial"],
  ],
},
canada_visa_denial: {
  title: "Kanada Vize Reddi",
  options: [
    ["Evet", -10, "us_contact"],
    ["Hayır", 0, "us_contact"],
  ],
},
us_contact: {
  title: "Amerika'da tanıdığınız var mı?",
  options: [
    ["Hayır", 5, "education_program"],
    ["Evet", 0, "contact_relation"],
  ],
},
contact_relation: {
  title: "Yakınlık Derecesi",
  options: [
    ["Birinci derece aile", -5, "contact_status"],
    ["Akraba / arkadaş", 0, "contact_status"],
  ],
},
contact_status: {
  title: "Tanıdığınızın ABD Statüsü",
  options: [
    ["ABD Vatandaşı", 0, "contact_visit"],
    ["Green Card Sahibi", -5, "contact_visit"],
    ["Öğrenci / Geçici Vize", 0, "contact_visit"],
    ["İltica / Yasa dışı", -20, "contact_visit"],
  ],
},
contact_visit: {
  title: "Tanıdığınız en son ne zaman Türkiye'ye geldi?",
  options: [
    ["Son 1 yıl içinde", 5, "education_program"],
    ["3 yıldan uzun süredir gelmedi", -10, "education_program"],
  ],
},
education_program: {
  title: "Eğitim Planı",
  options: [
    ["Dil Okulu", 0, "turkey_language_course"],
    ["Önlisans / Lisans", 0, "academic_english"],
    ["Yüksek Lisans / Doktora", 10, "academic_english"],
  ],
},
turkey_language_course: {
  title: "Türkiye'de dil kursuna gittiniz mi?",
  options: [
    ["Evet", 5, "language_school_duration"],
    ["Hayır", -10, "language_school_duration"],
  ],
},
language_school_duration: {
  title: "Amerika'daki Dil Okulu Süresi",
  options: [
    ["1 ay", -20, "sponsor"],
    ["3 - 6 ay", -10, "sponsor"],
    ["6 - 9 ay", 5, "sponsor"],
    ["9 - 12 ay", 10, "sponsor"],
  ],
},
academic_english: {
  title: "İngilizce Seviyesi",
  options: [
    ["Yeterli (Doğrudan başlama)", 10, "sponsor"],
    ["Yetersiz (Hazırlık)", -5, "sponsor"],
  ],
},
sponsor: {
  title: "Masrafları Kim Karşılayacak?",
  options: [
    ["Tam burs", 30, "finish_screen"],
    ["Kısmi burs", 15, "finish_screen"],
    ["Kendim", -20, "finish_screen"],
    ["Ailem", 5, "family_sponsor_detail"],
  ],
},
family_sponsor_detail: {
  title: "Aile Sponsoru Detayı",
  options: [
    ["Anne / Baba", 5, "family_sponsor_job"],
    ["Akraba", -10, "family_sponsor_job"],
  ],
},
family_sponsor_job: {
  title: "Sponsor Mesleği",
  options: [
    ["İşveren", 10, "finish_screen"],
    ["Doktor / Avukat / Yargıç", 15, "finish_screen"],
    ["Kamu Çalışanı", -5, "finish_screen"],
    ["Özel Sektör", -3, "finish_screen"],
    ["Emekli", -10, "finish_screen"],
  ],
},

FINISH_SCREEN: "finish_screen",
  CALCULATE_FINAL: "calculate_final",
  flow_router: {
  hidden: true
},
};



/* =========================
   COMPONENT
========================= */
export default function TestModal({ openF1, setOpenF1 }) {
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
  if (step === "calculate_final") {
    finish(0);
  }
}, [step]);
 useEffect(() => {
    if (searchParams.get("test") === "1") {
      setOpenF1(true);
      router.replace("/amerika-vizesi", { scroll: false });
    }
  }, [searchParams]);
  useEffect(() => {
    if (!openF1) {
      setStep(0);
      setScore(0);
      setUser({ name: "", email: "",phoneNumber:"" });
      setErrors({});
    }
  }, [openF1]);


  if (!openF1) return null;

  const validateStart = () => {
    const e = {};
    if (!nameRegex.test(user.name)) {
      e.name = "Geçerli bir ad soyad giriniz";
    }
    if (!emailRegex.test(user.email)) {
      e.email = "Geçerli bir e-posta giriniz";
    }
    // if (!phoneRegex.test(user.phoneNumber)) {
    //   e.phoneNumber = "Geçerli bir telefon numarası giriniz";
    // }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

const next = (
  pts,
  nextStep,
  payload = null,
  answerLabel = "",
  questionTitle = ""
) => {
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

  // 🧮 FINAL — ❗ return ETME
  if (nextStep === "calculate_final") {
    // step'i değiştir, finish'i effect yakalasın
    setStep("calculate_final");
    return;
  }
if (nextStep === "finish_screen") {
  setStep("finish_screen");
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
const youngAgeGroups = ["0-13", "14-18",];

const maxScore = youngAgeGroups.includes(userState.ageGroup)
  ? 85
  : 93;

finalScore = Math.min(Math.max(finalScore, 15), maxScore);

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
        key:"F1-Amerika-Vize-Testi"
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
              onClick={() => setOpenF1(false)}
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
  <div className="space-y-6">
    {/* Header */}
    <div className="text-center space-y-3">
     
      
      <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
        Amerika F1 Vize Analizi
      </h2>
      
      <p className="text-lg text-gray-600 max-w-md mx-auto">
        2 dakikada Amerika vize hazırlık skorunuzu öğrenin.
      </p>
      
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
        <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
        <span className="text-sm font-semibold text-blue-700">Ücretsiz Değerlendirme</span>
      </div>
    </div>

    {/* Form */}
    <div className="space-y-4 mt-8">
      {/* Ad Soyad */}
      <div className="group">
        <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
          Ad Soyad
        </label>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
          <div className="relative">
            <input
              placeholder="Adınızı ve soyadınızı girin"
              className={`w-full px-5 py-4 border-2 rounded-2xl bg-white text-gray-900 placeholder:text-gray-400 font-medium outline-none transition-all duration-300 ${
                errors.name
                  ? 'border-red-300 focus:border-red-500 bg-red-50/50'
                  : 'border-gray-200 focus:border-transparent focus:ring-2 focus:ring-blue-500'
              }`}
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              {user.name && !errors.name && (
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </div>
        </div>
        {errors.name && (
          <div className="flex items-center gap-2 mt-2 ml-1">
            <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-red-600 text-sm font-medium">{errors.name}</p>
          </div>
        )}
      </div>

      {/* E-posta */}
      <div className="group">
        <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
          E-posta Adresi
        </label>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
          <div className="relative">
            <input
              type="email"
              placeholder="ornek@email.com"
              className={`w-full px-5 py-4 border-2 rounded-2xl bg-white text-gray-900 placeholder:text-gray-400 font-medium outline-none transition-all duration-300 ${
                errors.email
                  ? 'border-red-300 focus:border-red-500 bg-red-50/50'
                  : 'border-gray-200 focus:border-transparent focus:ring-2 focus:ring-blue-500'
              }`}
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              {user.email && !errors.email && (
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </div>
        </div>
        {errors.email && (
          <div className="flex items-center gap-2 mt-2 ml-1">
            <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-red-600 text-sm font-medium">{errors.email}</p>
          </div>
        )}
      </div>

      {/* Telefon */}
      {/* <div className="group">
        <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
          Telefon Numarası
        </label>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
          <div className="relative">
            <input
              type="tel"
              placeholder="+90 5XX XXX XX XX"
              className={`w-full px-5 py-4 border-2 rounded-2xl bg-white text-gray-900 placeholder:text-gray-400 font-medium outline-none transition-all duration-300 ${
                errors.phoneNumber
                  ? 'border-red-300 focus:border-red-500 bg-red-50/50'
                  : 'border-gray-200 focus:border-transparent focus:ring-2 focus:ring-blue-500'
              }`}
              value={user.phoneNumber}
              onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              {user.phoneNumber && !errors.phoneNumber && (
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </div>
        </div>
        {errors.phoneNumber && (
          <div className="flex items-center gap-2 mt-2 ml-1">
            <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-red-600 text-sm font-medium">{errors.phoneNumber}</p>
          </div>
        )}
      </div> */}
    </div>

    {/* Submit Button */}
    <button
       onClick={() => validateStart() && setStep(1)}
      className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-5 text-white font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mt-8"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative flex items-center justify-center gap-2">
        Analize Başla
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </button>

    {/* Trust badges */}
    <div className="flex items-center justify-center gap-6 pt-6 border-t border-gray-200">
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-600 font-medium">Güvenli & Gizli</span>
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-gray-600 font-medium">Ücretsiz Analiz</span>
      </div>
    </div>
  </div>
)}

          {/* QUESTIONS */}
  {steps[step] && (
  <div className="space-y-5 relative">
    
    {/* 🔙 BACK BUTTON – SORU ALANININ İÇİNDE */}
   {history.length > 0  && (
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

{step === "finish_screen" && (
  <>
     {history.length > 0  && (
      <BackButton onClick={goBack} />
    )}
      <FinishScreen
     onFinish={() => setStep("calculate_final")}
  />
  </>

)}

          {/* RESULT */}
          {step === "result" && (
            <div className="text-center space-y-8">
              <h3 className="text-2xl font-extrabold">
                Teşekkürler {user?.name?.toUpperCase("tr-TR")}
              </h3>

              <ScoreGauge score={score} />

              <p className="text-slate-600 max-w-md mx-auto mt-50 text-[8px]">
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
                onClick={() => setOpenF1(false)}
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
