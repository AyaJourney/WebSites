"use client";
import AydinlatmaFormu from "@/app/components/modals/AydinlatmaFormu";
import Link from "next/link";
import React, { useEffect, useState,useMemo } from "react";

const isMobileOrAndroid = () => {
    // ... UA kontrol kodunuz
    const ua = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
};

const STORAGE_KEY = "ds160_form_data_v1";
const STORAGE_METHOD_KEY = "ds160_storage_method_v1"; // "local" or "cookie"
const defaultForm = {
  currentStep: 1,
 steps: {
    1: {
      fullName: "",
      gender: "",
      maritalStatus: "",
      maidenName: "",
      birthDate: "",
      birthPlace: ""
    },
    2: {
      nationality: "",
      otherNationalityExist: "",
      otherNationality: "",
      tcId: "",
      ssn: "",
      vkn: ""
    },
    3: {
      visaType: "",
      exactArrival: "",
      estimatedArrival: "",
      stayDuration: "",
      stayAddress: "",
      whoPays: "",
      relationDegree: "",
      payerAddress: "",
      payerPhone: ""
    },
    4: {
      travelAlone: "",
      otherTraveler: "",
      beenToUS: "",
      lastVisitDate: "",
      lastVisitDuration: "",
      hadUSVisa: "",
      visaDate: "",
      visaNumber: "",
      visaRefused: ""
    },
    5: {
      homeAddress: "",
      phone1: "",
      phone2: "",
      workPhone: "",
      email: "",
      socialMedia: "",
      passportType: "",
      passportNumber: "",
      passportAuthority: "",
      passportStart: "",
      passportEnd: "",
      lostPassportNumber: ""
    },
    6: {
      occupation: "",
      workOrSchoolName: "",
      workOrSchoolAddress: "",
      workPhone: "",
      workStartDate: "",
      monthlyIncome: "",
      jobDescription: "",
      previousJobs: "",
      highSchool: "",
      university: ""
    },
    7: {
      languages: "",
      visitedCountries: "",
      militaryService: "",
      additionalInfo: "",
   
    },
    8: {
      
      passportFile: null,
      photoFile: null
    },
    
  },
 
};

 

function saveToLocal(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    // console.warn("localStorage save failed", e);
  }
}

function readFromLocal() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    // console.warn("localStorage read failed", e);
    return null;
  }
}





export default function FormDs160() {
  const [isMobile, setIsMobile] = useState(false);
    const [openInfo, setOpenInfo] = useState(false);
      const[resMessage,setResMessage]=useState(false)
  const [form, setForm] = useState(defaultForm);
  const [storageMethod, setStorageMethod] = useState("local"); // "local" or "cookie"
  const [statusMessage, setStatusMessage] = useState("");
const [kvkkConsent, setKvkkConsent] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
useEffect(() => {
        // Next.js'in client tarafında çalıştığından emin olmak için
        if (typeof window !== 'undefined') {
            setIsMobile(isMobileOrAndroid());
        }
    }, []);
function base64ToBlob(base64, mimeType = "image/jpeg") {
  const byteString = atob(base64.split(",")[1] || base64);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeType });
}


const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file); // base64 formatında okur
    reader.onload = () => {
      // data:image/png;base64,XXX kısmını temizle
      const base64 = reader.result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
  });
};


const handleSubmit = async () => {
  setIsSubmitting(true);

  try {
    const step8 = form.steps[8];

    let passportBase64 = null;
    let photoBase64 = null;

    if (step8.passportFile instanceof File) {
      passportBase64 = await fileToBase64(step8.passportFile);
    }

    if (step8.photoFile instanceof File) {
      photoBase64 = await fileToBase64(step8.photoFile);
    }

    const formToSend = {
      ...form,
      files: {
        passportFile: passportBase64 ? { data: passportBase64 } : null,
        photoFile: photoBase64 ? { data: photoBase64 } : null,
      },
       type:"ds-160"
    };

    await sendForm(formToSend);
  } catch (error) {
    // console.error(error);
  }

  setIsSubmitting(false);
};

async function sendForm(payload) {
  const res = await fetch("api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
if(res.ok){
  setResMessage(true)
}
  if (!res.ok) {
    // console.error("PDF oluşturulamadı");
    setResMessage(false)
    return;
  }

  // const pdfBlob = await res.blob() || "";
  // const url = URL.createObjectURL(pdfBlob);
  // window.open(url, "_blank");

}
  // load storage method preference and form data on mount
  useEffect(() => {
    const storedMethod = (localStorage.getItem(STORAGE_METHOD_KEY) || "local");
    setStorageMethod(storedMethod);

    // load data depending on method but prefer local if exists and method is local
    let loaded = null;
    if (storedMethod === "local") {
      loaded = readFromLocal()
    } else {
      loaded =  readFromLocal();
    }
    if (loaded) {
      setForm((prev) => ({ ...prev, ...loaded }));
    }
  }, []);

  // utility to persist depending on selected method
  const persist = (data) => {
    if (storageMethod === "local") {
      saveToLocal(data);
    } else {
      saveToCookie(data);
    }
    localStorage.setItem(STORAGE_METHOD_KEY, storageMethod);
    setStatusMessage("Kaydedildi");
    setTimeout(() => setStatusMessage(""), 1500);
  };

  // autosave when form changes
  useEffect(() => {
    // avoid saving default on first render? but it's OK
    persist(form);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, storageMethod]);
const requiredFields = {
  1: ["fullName", "gender", "maritalStatus", "birthDate", "birthPlace",],
  2: ["nationality", "tcId",], // Diğer uyruk veya VKN isteğe bağlı
  3: [
    "visaType",
    "stayAddress",
    "whoPays","stayDuration",
    // whoPays = DIGER ise zorunlu
  ],
  4: [
    "travelAlone",
   
    "beenToUS",
  
    "hadUSVisa",
   
    "visaRefused"
  ],
  5: [
    "homeAddress",
    "phone1",
    "email",
    "passportType",
    "passportNumber",
    "passportAuthority",
    "passportStart",
    "passportEnd"
  ],
  6: [
    "occupation",
    "workOrSchoolName",
    "workOrSchoolAddress",
    // "workPhone",
    "workStartDate",
    "monthlyIncome",
    "jobDescription",
    "previousJobs",   // isteğe bağlı zorunlu yapılabilir
    "highSchool",
    "university"
  ],
  7: [
    "languages",
   
  ],
   8: [
   
    "passportFile",
   
  ]
};



const validateStep = (step, formData) => {
  const fields = requiredFields[step] || [];
  return fields.every(field => {
    const val = formData.steps[step][field];
    return val !== undefined && val !== null && String(val).trim() !== "";
  });
};
const goNext = () => {
  if (!validateStep(form.currentStep, form)) {

    return;
  }

  setForm(prev => ({ ...prev, currentStep: prev.currentStep + 1 }));
};

  const goPrev = () => {
    setForm((prev) => {
      const prevStep = Math.max(1, prev.currentStep - 1);
      return { ...prev, currentStep: prevStep };
    });
  };

  const jumpTo = (step) => {
    setForm((prev) => ({ ...prev, currentStep: step }));
  };

const updateField = (step, field, value) => {
  setForm(prev => ({
    ...prev,
    steps: {
      ...prev.steps,
      [step]: { ...(prev.steps[step] || {}), [field]: value },
    },
  }));
};
const updateFileField = async (step, key, file) => {
  if (!file) {
    setForm(prev => ({
      ...prev,
      steps: {
        ...prev.steps,
        [step]: {
          ...prev.steps[step],
          [`${key}`]: null,
          [`${key}Base64`]: null,
        },
      },
    }));
    return;
  }

  const base64 = await fileToBase64(file);

  setForm(prev => ({
    ...prev,
    steps: {
      ...prev.steps,
      [step]: {
        ...prev.steps[step],
        [`${key}`]: file,        // Preview için
        [`${key}Base64`]: base64 // API için
      },
    },
  }));
};

const markCompleted = (step) => {
  return validateStep(step, form);
};

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  
  //   try {
  //     localStorage.removeItem(STORAGE_KEY);
     
  //     setStatusMessage("Form başarıyla kaydedildi ve local storage temizlendi.");
  //     // optional: reset
  //     setForm(defaultForm);
  //   } catch (err) {
  //     console.warn(err);
  //     setStatusMessage("Gönderimde hata oluştu.");
  //   }
  // };

  // small helper to format step circle classes
  const stepCircleClass = (step) => {
    const completed = markCompleted(step);
    const isCurrent = form.currentStep === step;
    let base = "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold";
    if (completed) base += " bg-blue-600 text-white";
    else base += " bg-white border-2 border-gray-300 text-gray-700";
    if (isCurrent) base += " ring-4 ring-blue-200";
    return base;
  };
const [errors, setErrors] = React.useState({});


const normalizeInput = (value) => {
  if (!value) return "";

  const map = {
    'ç': 'c', 'Ç': 'C',
    'ğ': 'g', 'Ğ': 'G',
    'ı': 'I', 'İ': 'I',
    'ö': 'o', 'Ö': 'O',
    'ş': 's', 'Ş': 'S',
    'ü': 'u', 'Ü': 'U',
  };


  const replaced = value?.replace(/[çÇğĞıİöÖşŞüÜ]/g, (match) => map[match]);

  // Büyük harfe çevir ve boşluğu koru
  return replaced?.toUpperCase();
};

const normalizeAddressInput = (value) => {
  if (!value) return "";

  const map = {
    'ç': 'c', 'Ç': 'C',
    'ğ': 'g', 'Ğ': 'G',
    'ı': 'I', 'İ': 'I',
    'ö': 'o', 'Ö': 'O',
    'ş': 's', 'Ş': 'S',
    'ü': 'u', 'Ü': 'U',
  };

  let text = value.replace(/[çÇğĞıİöÖşŞüÜ]/g, (match) => map[match]);

  // / işaretini - yap
  text = text.replace(/\//g, "-");

  // . işaretini kaldır
  text = text.replace(/\./g, "");

  // Adres için uygun olmayan tüm karakterleri kaldır
  // (harf, rakam, boşluk ve - dışındakileri sil)
  text = text.replace(/[^A-Za-z0-9\s-]/g, "");

  // Son olarak büyük harfe çevir
  return text.toUpperCase();
};

 const passportPreview = useMemo(() => {
    if (!form.steps[8]?.passportFile || !(form.steps[8].passportFile instanceof File)) 
      return "";

    return URL.createObjectURL(form.steps[8].passportFile);
  }, [form.steps[8]?.passportFile]);

  const photoPreview = useMemo(() => {
    if (!form.steps[8]?.photoFile || !(form.steps[8].photoFile instanceof File)) 
      return "";

    return URL.createObjectURL(form.steps[8].photoFile);
  }, [form.steps[8]?.photoFile]);

const maxVisible = 4; // Mobilde görünür adım sayısı
const totalSteps = 8;

// Sadece mobilde window logic
let start = 1;
let end = maxVisible;

// Mevcut step > end → kaydır
if (form.currentStep > end) {
  start = form.currentStep - maxVisible + 1;
  end = form.currentStep;
}

// Mevcut step < start → kaydır
if (form.currentStep < start) {
  start = form.currentStep;
  end = start + maxVisible -1;
}

const visibleSteps = Array.from({length: end - start +1}, (_, i) => start + i);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-start justify-center">
      {/* A4-like container */}
      <div
        className="bg-white shadow-xl w-full max-w-[794px] p-8"
        style={{
          // A4-like height for screen; optional
          minHeight: "1122px", // ~A4 height px at 96dpi, adjust as needed
        }}
      >
  
   

        {/* Progress bar */}
      <div className="mb-6">
<div className="mb-6 sm:hidden"> {/* Mobilde göster */}
  <div className="flex items-center">
    {visibleSteps.map((s, i, arr) => {
      const completed = markCompleted(s);
      const isCurrent = form.currentStep === s;
      return (
        <div key={s} className="flex-1 flex items-center">
          <button
            onClick={() => validateStep(s, form) && jumpTo(s)}
            className={stepCircleClass(s)}
            aria-current={isCurrent}
            title={`Bölüm ${s}`}
          >
            {completed ? "✓" : s}
          </button>

          {i < arr.length - 1 && (
            <div
              className={`h-1 flex-1 mx-2 rounded ${markCompleted(s) ? "bg-blue-500" : "bg-gray-300"}`}
              aria-hidden
            />
          )}
        </div>
      );
    })}

    {/* Sağda ellipsis */}
    {end < totalSteps && (
      <div className="flex items-center justify-center px-2 text-gray-400 font-bold">
        ...
      </div>
    )}
  </div>
</div>

{/* Desktop için normal tüm step */}
<div className="hidden sm:block mb-6">
  <div className="flex items-center justify-between">
    {[1,2,3,4,5,6,7,8].map((s, i, arr) => {
      const completed = markCompleted(s);
      const isCurrent = form.currentStep === s;
      return (
        <div key={s} className="flex-1 flex items-center">
          <button
             onClick={() => validateStep(s, form) && jumpTo(s)}
            className={stepCircleClass(s)}
            aria-current={isCurrent}
            title={`Bölüm ${s}`}
          >
            {completed ? "✓" : s}
          </button>

          {i < arr.length - 1 && (
            <div
              className={`h-1 flex-1 mx-3 rounded ${markCompleted(s) ? "bg-blue-500" : "bg-gray-300"}`}
              aria-hidden
            />
          )}
        </div>
      );
    })}
  </div>
</div>

</div>


        {/* Title like A4 form header */}
<div className="mb-6">
  {/* Logo Sol Üst */}
  <div className="w-full flex justify-start items-start mb-4">
    <img
      src="/images/ayalogoxl.png"
      alt="Logo"
      className="h-12"
    />
  </div>

  {/* Başlık Ortada */}
  <div className="text-center">
    <h2 className="text-xl font-semibold">DS-160 Form</h2>
    <p className="text-sm text-gray-500">
     Amerika vize başvurularında istenen DS-160 formu 8(Sekiz) bölümden oluşmaktadır.
   
    </p>
       <p className="text-sm text-gray-500">

       Lütfen bilgilerinizi dikkatli doldurunuz.
   
    </p>
  </div>
</div>

        {/* Form body */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1 */}
          {form.currentStep === 1 && (
     <section>
  <h3 className="font-semibold mb-3 text-lg">1.Bölüm</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* AD SOYAD */}
    <div>
      <label className="text-sm font-medium">Ad-Soyad (Pasaportta yazan)</label>
      <input
      name="fullName"
        className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
        value={form.steps[1].fullName}
onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "fullName", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "fullName", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(1, "fullName", normalizedValue);
                }
            }}

        placeholder="Örn: IPEK PARLAK"
      />
      {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
    </div>

    {/* CİNSİYET */}
    <div>
      <label className="text-sm font-medium">Cinsiyet</label>
      <select
       name="gender"
        className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.gender ? "border-red-500" : "border-gray-300"}`}
        value={form.steps[1].gender || ""}
        onChange={(e) => updateField(1, "gender", e.target.value)}
      >
   <option value="">Seçiniz</option>
        <option value="KADIN">KADIN</option>
        <option value="ERKEK">ERKEK</option>
      </select>
      {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
    </div>

    {/* MEDENİ DURUM */}
    <div>
      <label className="text-sm font-medium">Medeni Durumu</label>
      <select
       name="maritalStatus"
        className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
          ${errors.maritalStatus ? "border-red-500" : "border-gray-300"}`}
        value={form.steps[1].maritalStatus || ""}
        onChange={(e) => updateField(1, "maritalStatus", e.target.value)}
      >
        <option value="">Seçiniz</option>
        <option value="BEKAR">BEKAR</option>
        <option value="EVLI">EVLI</option>
        <option value="DUL">DUL</option>
        <option value="BOSANMIS">BOSANMIS</option>
      </select>
      {errors.maritalStatus && (
        <p className="text-red-500 text-xs mt-1">{errors.maritalStatus}</p>
      )}
    </div>

    {/* EVLENMEDEN ÖNCEKİ SOYADI (KOŞULLU) */}
    {form.steps[1].gender === "KADIN" &&
      form.steps[1].maritalStatus === "EVLI" && (
        <div className="transition-all duration-300">
          <label className="text-sm font-medium">Evlenmeden Önceki Soyadı (Varsa)</label>
          <input
       name="maidenName"

            className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
              ${errors.maidenName ? "border-red-500" : "border-gray-300"}`}
            value={form.steps[1].maidenName || ""}
         onChange={(e) =>
  updateField(1, "maidenName", normalizeInput(e.target.value))
}
            placeholder="Örn: Kaya"
          />
          {errors.maidenName && (
            <p className="text-red-500 text-xs mt-1">{errors.maidenName}</p>
          )}
        </div>
      )}

    {/* DOĞUM TARİHİ */}
    <div>
      <label className="text-sm font-medium">Doğum Tarihi</label>
      <input
      name="birthDate"
        type="date"
        className="w-full mt-1 p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
        value={form.steps[1].birthDate || ""}
        onChange={(e) => updateField(1, "birthDate", e.target.value)}
      />
    </div>

    {/* DOĞUM YERİ */}
    <div>
      <label className="text-sm font-medium">Doğum Yeri (Pasaportta yazan)</label>
      <input
      name="birthPlace"
        className="w-full mt-1 p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
        value={form.steps[1].birthPlace || ""}
onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "birthPlace", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "birthPlace", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(1, "birthPlace", normalizedValue);
                }
            }}
        placeholder="Örn: İstanbul"
      />
    </div>
  </div>
</section>

          )}

          {/* Step 2 */}
{/* Step 2 */}
{form.currentStep === 2 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">2.Bölüm</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Uyruğunuz */}
      <div>
        <label className="text-sm font-medium">Uyruğunuz</label>
        <input
          name="nationality"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.nationality ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[2].nationality || ""}
       onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(2, "nationality", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(2, "nationality", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(2, "nationality", normalizedValue);
                }
            }}
          placeholder="Örn: TURKISH"
        />
        {errors.nationality && <p className="text-red-500 text-xs mt-1">{errors.nationality}</p>}
      </div>

      {/* Başka Uyruğunuz */}
      <div>
        <label className="text-sm font-medium">
          Yukarıda belirtilen dışında başka uyruğunuz var mı?
        </label>
        <select
          name="otherNationalityExist"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.otherNationalityExist ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[2].otherNationalityExist || ""}
          onChange={(e) => updateField(2, "otherNationalityExist", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">EVET</option>
          <option value="HAYIR">HAYIR</option>
        </select>
        {errors.otherNationalityExist && <p className="text-red-500 text-xs mt-1">{errors.otherNationalityExist}</p>}
      </div>

      {/* Diğer Uyruğunuz (koşullu) */}
      {form.steps[2].otherNationalityExist === "EVET" && (
        <div>
          <label className="text-sm font-medium">Diğer Uyruğunuz</label>
          <input
            name="otherNationality"
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
              ${errors.otherNationality ? "border-red-500" : "border-gray-300"}`}
            value={form.steps[2].otherNationality || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(2, "otherNationality", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(2, "otherNationality", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(2, "otherNationality", normalizedValue);
                }
            }}
            placeholder="Örn: AMERICAN"
          />
          {errors.otherNationality && <p className="text-red-500 text-xs mt-1">{errors.otherNationality}</p>}
        </div>
      )}

      {/* T.C. Kimlik No */}
      <div>
        <label className="text-sm font-medium">T.C. Kimlik Numaranız</label>
        <input
          name="tcId"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.tcId ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[2].tcId || ""}
          onChange={(e) => updateField(2, "tcId", e.target.value)}
          placeholder="Örn: 12345678901"
        />
        <p className="text-xs text-gray-400 mt-1">11 haneli rakam</p>
        {errors.tcId && <p className="text-red-500 text-xs mt-1">{errors.tcId}</p>}
      </div>

      {/* Sosyal Güvenlik Numarası */}
      <div>
        <label className="text-sm font-medium">Sosyal Güvenlik Numarası (ABD’de bulunduysanız)</label>
        <input
          name="ssn"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.ssn ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[2].ssn || ""}
                 onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(2, "ssn", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(2, "ssn", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(2, "ssn", normalizedValue);
                }
            }}
          placeholder="SSN"
        />
        {/* {errors.ssn && <p className="text-red-500 text-xs mt-1">{errors.ssn}</p>} */}
      </div>

      {/* ABD Vergi Kimlik Numarası */}
      <div>
        <label className="text-sm font-medium">ABD Vergi Kimlik Numarası (ABD’de bulunduysanız)</label>
        <input
          name="vkn"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.vkn ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[2].vkn || ""}
         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(2, "vkn", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(2, "vkn", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(2, "vkn", normalizedValue);
                }
            }}
          placeholder="VKN"
        />
        {errors.vkn && <p className="text-red-500 text-xs mt-1">{errors.vkn}</p>}
      </div>
    </div>
  </section>
)}


{/* Step 3 */}
{form.currentStep === 3 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">3.Bölüm</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Almak İstediğiniz Vize Türü */}
      <div>
        <label className="text-sm font-medium">Almak İstediğiniz Vize Türü</label>
        <input
          name="visaType"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[3].visaType || ""}
          onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "visaType", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "visaType", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "visaType", normalizedValue);
                }
            }}
          placeholder="Örn: B1/B2"
        />
      </div>

      {/* Kesin Gidiş Tarihi */}
      <div>
        <label className="text-sm font-medium">ABD’ye Kesin Bir Gidiş Tarihiniz Var mı?</label>
        <input
          type="date"
          name="exactArrival"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[3].exactArrival || ""}
          onChange={(e) => updateField(3, "exactArrival", e.target.value)}
        />
      </div>

      {/* Tahmini Gidiş Tarihi */}
      <div>
        <label className="text-sm font-medium">Kesin Değilse Tahmini Gidiş Tarihiniz</label>
        <input
          type="date"
          name="estimatedArrival"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[3].estimatedArrival || ""}
          onChange={(e) => updateField(3, "estimatedArrival", e.target.value)}
        />
      </div>

      {/* ABD’de Kalış Süresi */}
      <div>
        <label className="text-sm font-medium">ABD’de Ne Kadar Kalacaksınız?</label>
        <input
          name="stayDuration"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[3].stayDuration || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "stayDuration", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "stayDuration", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "stayDuration", normalizedValue);
                }
            }}
          placeholder="Örn: 2 Hafta, 1 Ay, 10 gün gibi"
        />
      </div>

      {/* ABD’de Kalacağınız Açık Adres */}
      <div className="md:col-span-2">
        <label className="text-sm font-medium">ABD’de Kalacağınız Açık Adres</label>
        <textarea
          name="stayAddress"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[3].stayAddress || ""}
              onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "stayAddress", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "stayAddress", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(3, "stayAddress", normalizedValue);
                }
            }}
          placeholder="Posta kodu ve şehir dahil"
          rows={3}
        />
      </div>

      {/* Masrafı Karşılayacak */}
      <div>
        <label className="text-sm font-medium">ABD Gezinizin Masraflarını Kim Karşılayacak?</label>
        <select
          name="whoPays"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[3].whoPays || ""}
          onChange={(e) => updateField(3, "whoPays", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="KENDISI">Kendisi</option>
          <option value="ANNE_BABA">Anne/Baba</option>
          <option value="IS_YERI">İş Yeri</option>
          <option value="ES">Eş</option>
          <option value="DIGER">Diğer</option>
        </select>
      </div>

      {/* Masrafı karşılayacak kişi farklı ise detay */}
      {form.steps[3].whoPays === "DIGER" && (
        <>
          <div>
            <label className="text-sm font-medium">Yakınlık Derecesi</label>
            <input
              name="relationDegree"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[3].relationDegree || ""}
                     onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "relationDegree", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "relationDegree", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "relationDegree", normalizedValue);
                }
            }}
              placeholder="Örn: Arkadaş / Kuzen"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Adres</label>
            <input
              name="payerAddress"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[3].payerAddress || ""}
                         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "payerAddress", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "payerAddress", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(3, "payerAddress", normalizedValue);
                }
            }}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Telefon</label>
            <input
              name="payerPhone"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[3].payerPhone || ""}
              onChange={(e) => updateField(3, "payerPhone", e.target.value)}
            />
          </div>
        </>
      )}
    </div>
  </section>
)}




          {/* Step 4 */}
{form.currentStep === 4 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">4.Bölüm</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Tek mi seyahat edeceksiniz? */}
      <div>
        <label className="text-sm font-medium">Tek Mi Seyahat Edeceksiniz?</label>
        <select
          name="travelAlone"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[4].travelAlone || ""}
          onChange={(e) => updateField(4, "travelAlone", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
      </div>

      {/* Başka birisi varsa adı, soyadı ve ilişkiniz */}
      {form.steps[4].travelAlone === "HAYIR" && (
        <div className="md:col-span-2">
          <label className="text-sm font-medium">Başka birisi varsa adı, soyadı ve ilişkiniz</label>
          <input
            name="otherTraveler"
            className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.steps[4].otherTraveler || ""}
            
                         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "otherTraveler", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "otherTraveler", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "otherTraveler", normalizedValue);
                }
            }}
            placeholder="Örn: Ayşe Yılmaz – Kuzen"
          />
        </div>
      )}

      {/* Daha önce ABD’de bulundunuz mu? */}
      <div>
        <label className="text-sm font-medium">Daha Önce ABD’de bulundunuz mu?</label>
        <select
          name="beenToUS"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[4].beenToUS || ""}
          onChange={(e) => updateField(4, "beenToUS", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
      </div>

      {/* Evet ise gittiğiniz gün ve kaldığınız süre */}
      {form.steps[4].beenToUS === "EVET" && (
        <>
          <div>
            <label className="text-sm font-medium">Gittiğiniz Günün Tarihi</label>
            <input
              type="date"
              name="lastVisitDate"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[4].lastVisitDate || ""}
              onChange={(e) => updateField(4, "lastVisitDate", e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">ABD’de Kaldığınız Süre</label>
            <input
              name="lastVisitDuration"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[4].lastVisitDuration || ""}
                     onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "lastVisitDuration", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "lastVisitDuration", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "lastVisitDuration", normalizedValue);
                }
            }}
              placeholder="Örn: 2 Hafta, 10 Gün"
            />
          </div>
        </>
      )}

      {/* Daha önce ABD Vizesi aldınız mı? */}
      <div>
        <label className="text-sm font-medium">Daha Önce ABD Vizesi Aldınız mı?</label>
        <select
          name="hadUSVisa"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[4].hadUSVisa || ""}
          onChange={(e) => updateField(4, "hadUSVisa", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
      </div>

      {/* Evet ise tarihi ve vize numarası */}
      {form.steps[4].hadUSVisa === "EVET" && (
        <>
          <div>
            <label className="text-sm font-medium">Vize Tarihi</label>
            <input
              type="date"
              name="visaDate"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[4].visaDate || ""}
              onChange={(e) => updateField(4, "visaDate", e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Vize Numarası</label>
            <input
              name="visaNumber"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[4].visaNumber || ""}
                       onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "visaNumber", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "visaNumber", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "visaNumber", normalizedValue);
                }
            }}
              placeholder="Örn: 123456789"
            />
          </div>
        </>
      )}

      {/* Daha önce ABD vizesi başvurusunda ret aldınız mı? */}
      <div>
        <label className="text-sm font-medium">Daha Önce ABD Vizesi Başvurusunda Ret Aldınız mı?</label>
        <select
          name="visaRefused"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[4].visaRefused || ""}
          onChange={(e) => updateField(4, "visaRefused", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
      </div>

    </div>
  </section>
)}


          {/* Step 5 */}
{form.currentStep === 5 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">5.Bölüm</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Ev Adresi */}
      <div className="md:col-span-2">
        <label className="text-sm font-medium">Ev Adresiniz (Posta Kodu, Mah., Sk.)</label>
        <input
          name="homeAddress"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.homeAddress ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[5].homeAddress || ""}
              onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "homeAddress", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "homeAddress", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(5, "homeAddress", normalizedValue);
                }
            }}
          placeholder="Örn: Mahalle, Sokak, No, Posta Kodu"
        />
        {errors.homeAddress && <p className="text-red-500 text-xs mt-1">{errors.homeAddress}</p>}
      </div>

      {/* İletişim Numaraları */}
      <div>
        <label className="text-sm font-medium">İletişim Numarası 1</label>
        <input
          name="phone1"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[5].phone1 || ""}
          onChange={(e) => updateField(5, "phone1", e.target.value)}
          placeholder="Örn: +90 555 123 45 67"
        />
      </div>
      <div>
        <label className="text-sm font-medium">İletişim Numarası 2</label>
        <input
          name="phone2"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[5].phone2 || ""}
          onChange={(e) => updateField(5, "phone2", e.target.value)}
          placeholder="Örn: +90 555 987 65 43"
        />
      </div>

      {/* İş Telefonu */}
      <div>
        <label className="text-sm font-medium">İş Telefonu (Varsa)</label>
        <input
          name="workPhone"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[5].workPhone || ""}
          onChange={(e) => updateField(5, "workPhone", e.target.value)}
          placeholder="Örn: +90 212 123 45 67"
        />
      </div>

      {/* E-posta */}
      <div>
        <label className="text-sm font-medium">E-posta Adresiniz</label>
        <input
          type="email"
          name="email"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[5].email || ""}
          onChange={(e) => updateField(5, "email", e.target.value)}
          placeholder="Örn: ornek@mail.com"
        />
      </div>

      {/* Sosyal Medya */}
      <div className="md:col-span-2">
        <label className="text-sm font-medium">Sosyal Medya Hesaplarınız (Instagram, LinkedIn, Facebook, X, vs.)</label>
        <input
          name="socialMedia"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[5].socialMedia || ""}
            onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "socialMedia", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "socialMedia", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(5, "socialMedia", normalizedValue);
                }
            }}
          placeholder="Örn: @username, linkedin.com/in/username"
        />
      </div>

      {/* Pasaport Türü */}
      <div>
        <label className="text-sm font-medium">Pasaport Türünüz</label>
        <select
          name="passportType"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[5].passportType || ""}
          onChange={(e) => updateField(5, "passportType", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="HUSUSI">HUSUSI (YESIL)</option>
          <option value="HIZMET">HIZMET (GRI)</option>
          <option value="DIPLOMATIK">DIPLOMATIK (SIYAH)</option>
          <option value="UMUMA MAHSUS">UMUMA MAHSUS (BORDO)</option>
          <option value="GECICI">GECICI (PEMBE)</option>
        </select>
      </div>

      {/* Pasaport Numarası */}
      <div>
        <label className="text-sm font-medium">Pasaport Numaranız</label>
        <input
          name="passportNumber"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[5].passportNumber || ""}
            onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "passportNumber", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "passportNumber", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(5, "passportNumber", normalizedValue);
                }
            }}
          placeholder="Örn: A1234567"
        />
      </div>

      {/* Pasaportu Veren Makam */}
      <div>
        <label className="text-sm font-medium">Pasaportu Veren Makam</label>
        <input
          name="passportAuthority"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[5].passportAuthority || ""}
     onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "passportAuthority", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "passportAuthority", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(5, "passportAuthority", normalizedValue);
                }
            }}
          placeholder="Örn: Nüfus Müdürlüğü"
        />
      </div>

      {/* Pasaport Başlangıç ve Bitiş Tarihi */}
      <div>
        <label className="text-sm font-medium">Pasaport Başlangıç Tarihi</label>
        <input
          type="date"
          name="passportStart"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[5].passportStart || ""}
          onChange={(e) => updateField(5, "passportStart", e.target.value)}
        />
      </div>
      <div>
        <label className="text-sm font-medium">Pasaport Bitiş Tarihi</label>
        <input
          type="date"
          name="passportEnd"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[5].passportEnd || ""}
          onChange={(e) => updateField(5, "passportEnd", e.target.value)}
        />
      </div>

      {/* Daha önce kayıp pasaport */}
      <div className="md:col-span-2">
        <label className="text-sm font-medium">Daha Önce Pasaport Kaybettiyseniz ya da Çaldırdıysanız Kayıp Pasaportun Numarası</label>
        <input
          name="lostPassportNumber"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[5].lostPassportNumber || ""}
       onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "lostPassportNumber", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "lostPassportNumber", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(5, "lostPassportNumber", normalizedValue);
                }
            }}
          placeholder="Örn: A1234567"
        />
      </div>

    </div>
  </section>
)}

{form.currentStep === 6 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">6.Bölüm</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Mesleğiniz */}
      <div>
        <label className="text-sm font-medium">Mesleğiniz</label>
        <input
          name="occupation"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[6].occupation || ""}
    onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(6, "occupation", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(6, "occupation", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(6, "occupation", normalizedValue);
                }
            }}
          placeholder="Örn: Yazılım Mühendisi / Öğrenci"
        />
      </div>

      {/* İşyerinizin/Okul Adı */}
      <div>
        <label className="text-sm font-medium">İşyerinizin Tam Adı / Okul Adı</label>
        <input
          name="workOrSchoolName"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[6].workOrSchoolName || ""}
           onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(6, "workOrSchoolName", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(6, "workOrSchoolName", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(6, "workOrSchoolName", normalizedValue);
                }
            }}
          placeholder="Örn: ABC Şirketi / XYZ Üniversitesi"
        />
      </div>

      {/* İşyeri Adresi */}
      <div className="md:col-span-2">
        <label className="text-sm font-medium">İşyeri / Okul Adresi (Posta Kodu, Mah., Sk.)</label>
        <input
          name="workOrSchoolAddress"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[6].workOrSchoolAddress || ""}
            onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(6, "workOrSchoolAddress", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(6, "workOrSchoolAddress", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(6, "workOrSchoolAddress", normalizedValue);
                }
            }}
          placeholder="Örn: Mahalle, Sokak, No, Posta Kodu"
        />
      </div>

      {/* İşyeri Telefon */}
      <div>
        <label className="text-sm font-medium">İşyeri Telefon Numarası</label>
        <input
          name="workPhone"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[6].workPhone || ""}
          onChange={(e) => updateField(6, "workPhone", e.target.value)}
          placeholder="Örn: +90 212 123 45 67"
        />
      </div>

      {/* İşe Giriş Tarihi */}
      <div>
        <label className="text-sm font-medium">İşe Giriş Tarihiniz</label>
        <input
          type="date"
          name="workStartDate"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[6].workStartDate || ""}
          onChange={(e) => updateField(6, "workStartDate", e.target.value)}
        />
      </div>

      {/* Aylık Gelir */}
      <div>
        <label className="text-sm font-medium">Aylık Geliriniz (Yan gelirler dahil)</label>
        <input
          name="monthlyIncome"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[6].monthlyIncome || ""}
      onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(6, "monthlyIncome", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(6, "monthlyIncome", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(6, "monthlyIncome", normalizedValue);
                }
            }}
          placeholder="Örn: 15.000 TL"
        />
      </div>

      {/* İş Tanımı & Ünvan */}
      <div className="md:col-span-2">
        <label className="text-sm font-medium">Açık İş Tanımınız, Görevleriniz ve Ünvanınız</label>
        <textarea
          name="jobDescription"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[6].jobDescription || ""}
              onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(6, "jobDescription", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(6, "jobDescription", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(6, "jobDescription", normalizedValue);
                }
            }}
          placeholder="Örn: Yazılım geliştirme, proje yönetimi, takım liderliği"
          rows={3}
        />
      </div>

      {/* Önceki İşler (isteğe bağlı) */}
      <div className="md:col-span-2">
        <label className="text-sm font-medium">Daha Önce Çalıştığınız Yerler</label>
        <textarea
          name="previousJobs"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[6].previousJobs || ""}
                onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(6, "previousJobs", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(6, "previousJobs", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(6, "previousJobs", normalizedValue);
                }
            }}
          placeholder="Meslek, işyeri ünvanı, açık adres, amir adı, telefon, iş tanımı, işe giriş-çıkış tarihleri"
          rows={3}
        />
      </div>

      {/* Lise */}
      <div className="md:col-span-2">
        <label className="text-sm font-medium">Okuduğunuz Lisenin Adı,Tarihleri ve Adresi</label>
        <input
          name="highSchool"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[6].highSchool || ""}
                  onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(6, "highSchool", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(6, "highSchool", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(6, "highSchool", normalizedValue);
                }
            }}
          placeholder="Okul Adı, Başlangıç ve Mezuniyet Tarihi, Adres"
        />
      </div>

      {/* Üniversite */}
      <div className="md:col-span-2">
        <label className="text-sm font-medium">Okuduğunuz Üniversite Adı,Tarihleri ve Adresi</label>
        <input
          name="university"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[6].university || ""}
                onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(6, "university", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(6, "university", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(6, "university", normalizedValue);
                }
            }}
          placeholder="Üniversite Adı, Başlangıç ve Mezuniyet Tarihi, Adres"
        />
      </div>

    </div>
  </section>
)}
{form.currentStep === 7 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">7. Bölüm</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* LANGUAGES - ZORUNLU */}
      <div>
        <label className="text-sm font-medium">Bildiğiniz Diller *</label>
        <input
          name="languages"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
            ${errors.languages ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[7].languages || ""}
              onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(7, "languages", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(7, "languages", normalizeInputr(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInputr(e.target.value);
                    updateField(7, "languages", normalizedValue);
                }
            }}
          placeholder="Örn: İngilizce, Almanca"
        />
        {errors.languages && (
          <p className="text-red-500 text-xs mt-1">{errors.languages}</p>
        )}
      </div>

      {/* GİDİLEN ÜLKELER */}
      <div>
        <label className="text-sm font-medium">Ziyaret Edilen Ülkeler</label>
        <input
          name="visitedCountries"
          className="w-full mt-1 p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[7].visitedCountries || ""}
          onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(7, "visitedCountries", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(7, "visitedCountries", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(7, "visitedCountries", normalizedValue);
                }
            }}
          placeholder="Örn: Almanya, Portekiz"
        />
      </div>

      {/* ASKERLİK DURUMU */}
      <div>
        <label className="text-sm font-medium">Askerlik Durumu (Varsa)</label>
        <input
          name="militaryService"
          className="w-full mt-1 p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[7].militaryService || ""}
   onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(7, "militaryService", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(7, "militaryService", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(7, "militaryService", normalizedValue);
                }
            }}
          placeholder="Örn: Tecilli / Yapıldı"
        />
      </div>

      {/* EK BİLGİ */}
      <div className="md:col-span-2">
        <label className="text-sm font-medium">Ek Bilgiler (Varsa)</label>
        <textarea
          name="additionalInfo"
          className="w-full mt-1 p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          rows="4"
          value={form.steps[7].additionalInfo || ""}
onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(7, "additionalInfo", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(7, "additionalInfo", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(7, "militaryService", normalizedValue);
                }
            }}
          placeholder="Eklemek istediğiniz bilgiler..."
        ></textarea>
      </div>

    </div>
  </section>
)}

{form.currentStep === 8 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">8. Bölüm</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Pasaport Bilgi Sayfası */}
      <div className="flex flex-col items-center md:col-span-2">
        <label className="text-sm font-medium mb-1">
          Pasaport Bilgi Sayfası Yükleyiniz (jpeg/png)
        </label>

        <div
          className="w-48 md:w-60 h-48 md:h-60 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 relative transition-colors"
          onClick={() => document.getElementById("passportFileInput").click()}
        >
          {!form.steps[8].passportFile ? (
            <span className="text-gray-400 text-center px-2">Dosya seçmek için tıklayın</span>
          ) : (
            <>
       <img
  src={passportPreview}
  alt="Passport Preview"
  className="w-full h-full object-cover rounded-lg transition-transform duration-200 hover:scale-105"
/>
              <button
                type="button"
                title="Sil"
                onClick={(e) => {
                  e.stopPropagation();
                  updateFileField(8, "passportFile", null);
                }}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs hover:bg-red-700"
              >
                ×
              </button>
            </>
          )}

          <input
            type="file"
            id="passportFileInput"
            accept="image/jpeg, image/png"
            className="hidden"
            onChange={(e) => updateFileField(8, "passportFile", e.target.files[0])}
          />
        </div>

        {form.steps[8].passportFile && (
          <p className="mt-2 text-sm text-gray-700 truncate w-48 md:w-70 text-center">
            {form.steps[8].passportFile.name}
          </p>
        )}
      </div>

    
      <div className="flex flex-col items-center md:col-span-2">
        <label className="text-sm font-medium mb-1">
          5x5 Biyometrik Fotoğraf Yükleyiniz (jpeg/png)
        </label>

        <div
          className="w-48 md:w-60 h-48 md:h-60 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 relative transition-colors"
          onClick={() => document.getElementById("photoFileInput").click()}
        >
          {!form.steps[8].photoFile ? (
            <span className="text-gray-400 text-center px-2">Dosya seçmek için tıklayın</span>
          ) : (
            <>

           <img
  src={photoPreview}
  alt="Photo Preview"
  className="w-full h-full object-cover rounded-lg transition-transform duration-200 hover:scale-105"
/>
              <button
                type="button"
                title="Sil"
                onClick={(e) => {
                  e.stopPropagation();
                  updateFileField(8, "photoFile", null);
                }}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
              >
                ×
              </button>
            </>
          )}

          <input
            type="file"
            id="photoFileInput"
            accept="image/jpeg,image/png"
            className="hidden"
            onChange={(e) => updateFileField(8, "photoFile", e.target.files[0])}
          />
        </div>

        {form.steps[8].photoFile && (
          <p className="mt-2 text-sm text-gray-600 truncate w-48 md:w-60 text-center">
            {form.steps[8].photoFile.name}
          </p>
        )}
      </div>
    </div>
  </section>
)}

          {/* Navigation */}
<div className="flex items-center justify-between mt-6">
  {form.currentStep <8 && (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={goPrev}
        disabled={form.currentStep === 1}
        className="px-4 py-2 bg-white border rounded disabled:opacity-50 cursor-pointer"
      >
        Geri
      </button>

      <button
        type="button"
        onClick={goNext}
        disabled={!validateStep(form.currentStep, form)}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 cursor-pointer"
      >
        İleri
      </button>
    </div>
  )}

  {form.currentStep === 8 && validateStep(8, form) && (
    <div className="flex flex-col gap-4 w-full">
 <div className="flex items-center gap-3">
  <input
    type="checkbox"
    id="kvkkConsent"
    checked={kvkkConsent}
    onChange={(e) => {setKvkkConsent(e.target.checked);
      if(!kvkkConsent){
        setOpenInfo(true)
      }
      }}
    className="w-4 h-4"
  />
  <label htmlFor="kvkkConsent" className="text-sm">
   <div
     onClick={() => setOpenInfo(true)}
      className="text-blue-600 hover:underline cursor-pointer"
    >
      KVKK aydınlatma metnini
    </div>   okudum,

      onaylıyorum
   
    .
  </label>
</div>
  
<div className="flex justify-center mt-6">
 { !resMessage ? ( <button
    type="button"
    onClick={handleSubmit}
    disabled={!kvkkConsent || isSubmitting}
    className={`
      relative flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 cursor-pointer
      ${kvkkConsent && !isSubmitting 
        ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl" 
        : "bg-gray-400 cursor-not-allowed"
      }
      max-w-xs w-full sm:w-auto
    `}
  >
    {    (isSubmitting ) ? (
      <span className="flex flex-col items-center gap-3">
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 018 8h-4l3 3-3 3h4a8 8 0 01-8 8v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
          ></path>
        </svg>
       Form Gönderiliyor...
       <h2>Lütfen sayfayı kapatmayınız.</h2>
      </span>
    ) : (
      "Formu Gönder"
    )}
  </button>) : (
 
  <div className="bg-white w-full  p-5 max-w-md text-center ">
    <h2 className="text-xl font-bold text-gray-800 mb-6">
      Formunuz başarılı şekilde gönderilmiştir.
    </h2>
    <Link href="/">   <button className="bg-white text-gray-700 cursor-pointer mt-5 border border-blue-300 px-4 py-2 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100">
    Ana Sayfa
    </button>
    </Link>

  </div>

   
  )} 

</div>


    </div>
  )}
</div>



          <div className="text-sm text-gray-500 mt-2">{statusMessage}</div>
        </form>
      </div>
       <AydinlatmaFormu   open={openInfo}
        onClose={() => setOpenInfo(false)} />
    </div>
  );
}

