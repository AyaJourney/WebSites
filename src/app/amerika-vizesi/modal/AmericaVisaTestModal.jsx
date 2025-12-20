"use client";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import ScoreGauge from "./ScoreGauge";

const steps = { 1: { title: "1. Yaş Grubunuz?", options: [ ["0-14 Yaş (Anne & Baba vizesi var)", 10, 2], ["0-14 Yaş (Sadece bir ebeveyn)", 5, 2], ["0-14 Yaş (Ebeveyn yok)", 0, 2], ["14-18 Yaş (Anne & Baba)", 7, 2], ["14-18 Yaş (Tek ebeveyn)", 3, 2], ["18-30 Yaş (Kadın + ebeveyn)", 3, 2], ["18-30 Yaş (Diğer)", 0, 2], ["30-45 Yaş (Kadın)", 10, 2], ["30-45 Yaş (Erkek)", 5, 2], ["45-60 Yaş (Kadın)", 20, 2], ["45-60 Yaş (Erkek)", 10, 2], ["61 Yaş ve Üstü", 20, 2], ], }, 2: { title: "2. Cinsiyetiniz?", options: [ ["Kadın", 5, 3], ["Erkek", 0, 3], ], }, 3: { title: "3. Medeni Haliniz?", options: [ ["Evli", 5, 4], ["Bekar", 0, 4], ], }, 4: { title: "4. Çocuk Sayısı ve Seyahat Durumu", options: [ ["Çocuğum yok", -5, 5], ["1 Çocuk (Çocuksuz)", 3, 5], ["2+ Çocuk (Çocuksuz)", 15, 5], ["1 Çocuk (Çocukla)", 2, 5], ["2+ Çocuk (Çocuklarla)", 0, 5], ], }, 5: { title: "5. Seyahati nasıl yapacaksınız?", options: [ ["Bekar ve tek başıma", -10, 6], ["Evli ve tek başıma", -5, 6], ["Bekar ve arkadaşla", 3, 6], ["Evli ve arkadaşlarla", 10, 6], ["Eşimle", 15, 6], ["Ailece", 4, 6], ], }, 6: { title: "6. Son 5 yılda ABD / İngiltere / Kanada / Avustralya / NZ vizesi aldınız mı?", options: [ ["Evet (Birden fazla)", 20, 7], ["Evet (1 kez)", 10, 7], ["Hayır", 0, 7], ], }, 7: { title: "7. Son 3 yıl içinde Kanada’dan ret aldınız mı?", options: [ ["Evet", -10, 8], ["Hayır", 0, 8], ], }, 8: { title: "8. Pasaporttaki toplam vize etiketi sayısı?", options: [ ["Hiç yok", -10, 9], ["1 tane", 5, 9], ["2 tane", 20, 9], ["3 veya daha fazla", 40, 9], ], }, 9: { title: "9. Asya / Orta Doğu / Afrika ülkelerine gittiniz mi?", options: [ ["Birden fazla", 10, 10], ["Birine gittim", 3, 10], ["Hayır", 0, 10], ], }, 10: { title: "10. İngilizce mülakat yapabilir misiniz?", options: [ ["Evet", 15, 11], ["Hayır", 0, 11], ], }, 11: { title: "11. Uluslararası ödül / derece var mı?", options: [ ["Evet", 20, 12], ["Hayır", 0, 12], ], }, 12: { title: "12. Mesleğiniz?", options: [ ["Kamu Üst Düzey / Yeşil Pasaport", 20, 13], ["Kamu Kariyer Memuru", 8, 13], ["Kamu İşçi", 3, 13], ["Şirket Sahibi (10+)", 20, 13], ["Şirket Sahibi (<10)", 10, 13], ["Üst Düzey Yönetici", 20, 13], ["Doktor / Avukat", 10, 13], ["Beyaz Yaka", 5, 13], ], }, 13: { title: "13. Daha önce ABD vizesinden ret aldınız mı?", options: [ ["Evet", 0, 14], ["Hayır", 0, "result"], ], }, 14: { title: "Son reddiniz ne zamandı?", options: [ ["Son 6 ay", -15, "result"], ["Son 18 ay", -10, "result"], ["2 yıldan fazla", 0, "result"], ["Birden fazla ret", -20, "result"], ], }, };
export default function AmericaVisaTestModal({ open, setOpen }) {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [user, setUser] = useState({ name: "", email: "" });
const getScoreText = (score) => {
  if (score < 50) return "Dosyanız riskli görünüyor, strateji şart.";
  if (score < 75) return "Doğru yönlendirme ile olumlu sonuç alınabilir.";
  return "Profiliniz oldukça güçlü, başarı ihtimali yüksek.";
};

  useEffect(() => {
    if (!open) {
      setStep(0);
      setScore(0);
      setUser({ name: "", email: "" });
    }
  }, [open]);

  if (!open) return null;

  const next = (points, nextStep) => {
    setScore((s) => s + points);
    setStep(nextStep);
  };

  const finish = (points) => {
    const total = Math.min(Math.max(score + points + 30, 5), 98);
    setScore(total);
    setStep("result");
  };

  return (
    <div className="fixed inset-0 z-[999] flex justify-center bg-black/30 backdrop-blur-[2px] px-4 pt-6">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="font-bold text-lg">Amerika Vize Başarı Analizi</h2>
          <button onClick={() => setOpen(false)} className="text-slate-500 hover:text-black">
            <FaTimes />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">

          {/* STEP 0 – USER INFO */}
          {step === 0 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold">Ücretsiz Vize Analizi</h3>
              <p className="text-slate-600">
                Yapay zeka destekli sistem ile Amerika vizesi şansınızı ölçün.
              </p>

              <input
                placeholder="Ad Soyad"
                className="w-full p-4 border rounded-xl"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <input
                placeholder="E-posta"
                className="w-full p-4 border rounded-xl"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />

              <button
                onClick={() => {
                  if (!user.name || !user.email) {
                    alert("Lütfen bilgileri doldurun");
                    return;
                  }
                  setStep(1);
                }}
                className="w-full bg-black text-white py-4 rounded-xl font-bold"
              >
                Analize Başla
              </button>
            </div>
          )}

          {/* DYNAMIC STEPS */}
          {steps[step] && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold">{steps[step].title}</h3>

              {steps[step].options.map(([label, pts, nextStep], i) => (
                <Choice
                  key={i}
                  text={label}
                  onClick={() =>
                    nextStep === "result"
                      ? finish(pts)
                      : next(pts, nextStep)
                  }
                />
              ))}
            </div>
          )}

          {/* RESULT */}
       {step === "result" && (
  <div className="text-center space-y-6">
    <h3 className="text-2xl font-extrabold">
      Teşekkürler {user.name?.toUpperCase("TR-tr")}
    </h3>

    <ScoreGauge score={score} />

    <p className="text-slate-600 max-w-md mx-auto mt-40">
      Bu skor, profilinizin Amerika vizesi açısından genel risk ve
      tutarlılık durumunu göstermektedir.
    </p>

    <a
      href="https://wa.me/905302199056"
      target="_blank"
      className="block bg-emerald-500 text-white py-4 rounded-xl font-bold"
    >
      WhatsApp’tan Uzmanla Görüş
    </a>

    <button
      onClick={() => setOpen(false)}
      className="text-sm text-slate-500 underline"
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

function Choice({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-4 border rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition font-semibold"
    >
      {text}
    </button>
  );
}
