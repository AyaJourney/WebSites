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
    title: "Yaş Grubunuz?",
  
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
    title: "Anne ve Baba Vize Durumu",
    options: [
      ["İkisinin de vizesi var", 10, 2],
      ["Sadece birinin vizesi var", 5, 2],
      ["Vizeleri yok", 0, 2],
    ],
  },

  age_14_18: {
    title: "Anne ve Baba Vize Durumu",
    options: [
      ["İkisinin de vizesi var", 7, 2],
      ["Sadece birinin vizesi var", 3, 2],
      ["Vizeleri yok", 0, 2],
    ],
  },

  age_18_30: {
    title: "Cinsiyetiniz?",
    options: [
      ["Kadın", 10, 3],
      ["Erkek", 5, 3],
    ],
  },

  age_30_45: {
    title: "Cinsiyetiniz?",
    options: [
      ["Kadın", 10, 3],
      ["Erkek", 5, 3],
    ],
  },

  age_45_60: {
    title: "Cinsiyetiniz?",
    options: [
      ["Kadın", 20, 3],
      ["Erkek", 10, 3],
    ],
  },

  age_61: {
    title: "Amerika'da Akrabanız Var mı?",
    options: [
      ["Hayır", 20, 2],
      ["Evet", 0, "relative_status"],
    ],
  },

  relative_status: {
    title: "Yakınınızın Statüsü",
    options: [
      ["ABD Vatandaşı", 10, 2],
      ["Green Card Sahibi", 5, 2],
      ["Geçici vizeyle", -10, 2],
    ],
  },

  2: {
    title: "Cinsiyetiniz?",
    options: [
      ["Kadın", 5, 3],
      ["Erkek", 0, 3],
    ],
  },

3: {
  title: "Medeni Haliniz?",
  options: [
    ["Evli", 5, "child_status"],
    ["Bekar", 0, "travel_type_single"],
  ],
},

child_status: {
  title: "Çocuk Sayısı",
  options: [
    ["Çocuğum yok", -5, "travel_type_married_no_child"],
    ["1 çocuk", 0, "child_travel"],
    ["2 veya daha fazla çocuk", 0, "child_travel"],
  ],
},

child_travel: {
  title: "Çocuklarla mı seyahat edeceksiniz?",
  options: [
    ["Evet", 4, 6],
    ["Hayır", 0, "travel_type_married_no_child"],
  ],
},



 travel_type_single: {
  title: "Seyahat Şekli",
  options: [
    ["Bekar ve tek gidecek", -10, 6],
    ["Bekar ve arkadaşıyla gidecek", 3, 6],
  ],
},
travel_type_married_no_child: {
  title: "Seyahat Şekli",
  options: [
    ["Evli ve tek gidecekse", -5, 6],
    ["Evli ve arkadaşlarıyla gidecekse", 10, 6],
    [
      "Evli ve karısıyla/kocasıyla gidecekse",
      15,
      6,
    ],
  ],
},

  6: {
    title: "Son 5 Yıldaki Batı Vizeleri",
    description:"Son 5 yılda, Amerika (Work and Travel hariç), İngiltere, Kanada, Avustralya ve Yeni Zelanda’dan vize aldınız mı?",
    options: [
      ["Birden fazla", 20, 7],
      ["1 tane", 10, 7],
      ["Hiç yok", 0, 7],
    ],
  },

  7: {
    title: "Kanada Vize Reddi",
    description:"Son 3 yıl içinde, Kanada’ya başvurup ret aldınız mı?",
    options: [
      ["Evet", -10, 8],
      ["Hayır", 0, 8],
    ],
  },

  8: {
    title: "Pasaporttaki Vize Etiketi Sayısı",
    description:"Pasaportunuzda basılı vize etiketi sayısı (Schengen, İngiltere vb ülkeler. Yunanistan adaları kapıda vize dahil)",
    options: [
      ["Hiç yok", -10, 9],
      ["1 tane", 5, 9],
      ["2 tane", 20, 9],
      ["3 tane veya daha fazla", 40, 9],
    ],
  },

  9: {
    title: "Diğer Ülke Seyahatleri",
    description:"Singapur, Japonya, Güney Kore, Dubai, Tayland, Güney Afrika, Vietnam ülkelerinden birine son 5 yılda gittiniz mi?",
    options: [
      ["Birden fazla", 10, 10],
      ["Bir tane", 3, 10],
      ["Hayır", 0, 10],
    ],
  },

  10: {
    title: "İngilizce Mülakat",
    description:"İngilizce mülakat yapabilir misiniz? (B2 ve üstü ingilizce seviyesi)",
    options: [
      ["Evet", 15, 11],
      ["Hayır", 0, 11],
    ],
  },

  11: {
    title: "Uluslararası Ödül",
    description:"Uluslararası alanda sahip olduğunuz bir ödül (örneğin turnuvada derece, yarışmada mansiyon ödülü vb) var mı?",
    options: [
      ["Evet", 20, 12],
      ["Hayır", 0, 12],
    ],
  },

 12: {
  title: "Ne iş yapıyorsunuz?",
  options: [
    ["Kamuda üst düzey memur (10 yıl üstü kariyer uzmanı ve yeşil pasaportlu)", 20, 13],
    ["Kamuda kariyer memuru (10 yıl altı kariyer uzmanı)", 8, 13],
    ["Kamuda işçi/danışman/sözleşmeli kategorisinde", 3, 13],
    ["Özel sektör – 10 personelden fazla çalışanı olan şirket sahibi", 20, 13],
    ["Özel sektör – 10 personelden az çalışanı olan şirket sahibi", 10, 13],
    ["Özel sektör – üst düzey yönetici", 20, 13],
    ["Özel sektör - uzman/mühendis/mimar/İK görevlisi/öğretmen/hemşire", 5, 13],
    ["Özel sektör – Doktor/avukat", 10, 13],
    ["Mavi yaka (işçi, sanayi çalışanı, kurye, şoför vb)", 0, 13],
    ["Emekli (kamu)", 5, 13],
    ["Emekli (özel sektör)", 0, 13],
    ["Emekli (eşinin/babasının aylığını alıyor)", -10, 13],
    ["Öğrenci (lise)", 2, 13],
    ["Öğrenci (lisans)", -10, 13],
    ["Öğrenci (yüksek lisans)", -3, 13],
    ["Ev hanımı", -5, 13],
  ],
},


13: {
  title: "ABD Vize Reddi",
  description: "Daha önce Amerika vizesine başvurup ret aldınız mı?",
  options: [
    ["Evet", 0, "last_reject"],
    ["Hayır", 0, 14],
  ],
},


last_reject: {
  title: "Son Reddiniz Ne Zamandı?",
  options: [
    ["Son 6 ay içinde", -15, 14],
    ["Son 18 ay içinde", -10, 14],
    ["2 yıldan fazla zaman önce", 0, 14],
    ["Birden fazla ret varsa", -20, 14],
  ],
},
 14: {
  title: "Amerika'da Akraba",
  description:
    "Amerika’da yaşayan birinci ve ikinci derecede akrabanız var mı (baba, anne, kardeş, amca, dayı, teyze, hala, kuzen vb)",
  options: [
    ["Evet", 0, "relative_status_14"],
    ["Hayır", 0, "result"],
  ],
},

relative_status_14: {
  title: "Hangi statü ile Amerika’da bulunuyorlar?",
  options: [
    ["ABD vatandaşı", 10, "relative_job_14"],
    ["Green Card sahibi", 5, "relative_job_14"],
    ["Göçmen olmayan vize ile bulunuyor", -10, "relative_job_14"],
  ],
},

relative_job_14: {
  title: "Bu kişi ne iş yapıyor?",
  options: [
    [
      "En az 100 kişinin çalıştığı bir şirkette üst düzey yönetici / şirket sahibi",
      10,
      "relative_visit_14",
    ],
    [
      "Beyaz yaka (uzman personel, banka şube müdürü, iç mimar vb)",
      5,
      "relative_visit_14",
    ],
    [
      "Günlük işler yapıyor (örneğin uber, doordash, inşaat-tadilat, barmenlik vb)",
      -20,
      "relative_visit_14",
    ],
  ],
},

relative_visit_14: {
  title: "Yakınınız en son ne zaman Türkiye’ye geldi?",
  options: [
    [
      "Son 1 yıl içinde en az 1 defa Türkiye’ye geldi",
      10,
      "result",
    ],
    [
      "Seyahat engeli yok ama son 1-2 yıldır gelmedi",
      -10,
      "result",
    ],
    [
      "Statü değiştirdiği için gelemiyor",
      -30,
      "result",
    ],
  ],
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
  const [user, setUser] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
const [history, setHistory] = useState([]);
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

const finish = async(pts) => {
  setHistory((h) => [...h, { step, pts }]);

  const raw = score + pts + 40;
  const final = Math.min(Math.max(raw, 15), 99);

  setScore(final);
  setStep("result");
   router.replace("/amerika-vizesi", { scroll: false });
     try {
    await fetch("/api/send-test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        score: final,
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
    {steps[step]?.description && (
      <p className="text-slate-600 text-sm">
        {steps[step].description}
      </p>
    )}

    {/* ✅ ŞIKLAR */}
    {steps[step].options?.map(([label, pts, nextStep], i) => (
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
