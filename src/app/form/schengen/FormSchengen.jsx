"use client";
import AydinlatmaFormu from "@/app/components/modals/AydinlatmaFormu";
import Link from "next/link";
import React, { useEffect, useState,useMemo } from "react";

const isMobileOrAndroid = () => {
    // ... UA kontrol kodunuz
    const ua = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
};


const STORAGE_KEY = "schengen_form_data_v1";
const STORAGE_METHOD_KEY = "schengen_storage_method_v1"; // "local" or "cookie"
const defaultForm = {
  currentStep: 1,
 steps: {
    1: {
      tcId:"",      
      fullName: "",
      gender: "",
      maritalStatus: "",
      maidenName: "",
      birthDate: "",
      birthPlace: "",
      phone_number:"",
      email:"",
      home_address:"",
      post_code:"",
    },
    2: {
      passport_number: "",
      Passport_start_date: "",
      Passport_end_date: "",
      passport_issuing_authority: "",
      
    },
  3: {
  sector: "",              
  company_type: "",       
  company_name: "",
  company_statu: "",
  company_address: "",
  company_phone_number: "",
  your_title: "",
},
    4: {
      boolean_invitation: "",
      invitation_sender_fullname: "",
      invitation_sender_birthdate: "",
      invitation_sender_phone_number: "",
      invitation_sender_email: "",
      invitation_sender_tc_id: "",
      invitation_sender_home_address: "",
     
    },
    5: {
      travel_start_date: "",
      travel_end_date: "",
      boolean_schengen_visa: "",
      fingerprint_taken: "",
      fingerprint_taken_date: "",
      schengen_visa_label_number: "",

    },
   
    6: {

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





export default function FormSchengen() {
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
// 📌 Dosyayı Base64'e dönüştüren fonksiyon

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
    const step6 = form.steps[6];

    let passportBase64 = null;
    let photoBase64 = null;

    if (step6.passportFile instanceof File) {
      passportBase64 = await fileToBase64(step6.passportFile);
    }

    if (step6.photoFile instanceof File) {
      photoBase64 = await fileToBase64(step6.photoFile);
    }

    const formToSend = {
      ...form,
      files: {
        passportFile: passportBase64 ? { data: passportBase64 } : null,
        photoFile: photoBase64 ? { data: photoBase64 } : null,
      },
       type:"schengen"
    };

    await sendForm(formToSend);
  } catch (error) {
    console.error(error);
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
    console.error("PDF oluşturulamadı");
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
  1: ["tcId","fullName", "gender", "maritalStatus", "birthDate", "birthPlace","email","phone_number"],
  2: ["passport_number", "Passport_start_date", "Passport_end_date","passport_issuing_authority"],
  3: [],
  4: [],
  5: ["travel_start_date","travel_end_date","boolean_schengen_visa"],
  6: ["passportFile","photoFile"],
};



const validateStep = (step, formData) => {
  const fields = requiredFields[step] || [];
  if (!formData.steps[step]) return { valid: false, missing: fields };

  const missing = fields.filter(field => {
    const val = formData.steps[step][field];
    return val === undefined || val === null || String(val).trim() === "";
  });

  return { valid: missing.length === 0, missing: missing || [] }; // <-- missing undefined olursa []
};

const goNext = () => {
  const { valid, missing = [] } = validateStep(form.currentStep, form);

  if (!valid) {
    setErrors(prev => {
      const newErrors = { ...prev };
      missing.forEach(field => newErrors[field] = "Bu alan zorunludur");
      return newErrors;
    });
    return;
  }

  setErrors({});
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
  // Kullanıcı bu adımı geçtiyse -> tamamlandı
  return form.currentStep > step;
};

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

  // Türkçe karakterleri İngilizceye çevir
  const replaced = value.replace(/[çÇğĞıİöÖşŞüÜ]/g, (match) => map[match]);

  // Büyük harfe çevir
  return replaced.toUpperCase();
};

 const passportPreview = useMemo(() => {
    if (!form.steps[6]?.passportFile || !(form.steps[6].passportFile instanceof File)) 
      return "";

    return URL.createObjectURL(form.steps[6].passportFile);
  }, [form.steps[6]?.passportFile]);

  const photoPreview = useMemo(() => {
    if (!form.steps[6]?.photoFile || !(form.steps[6].photoFile instanceof File)) 
      return "";

    return URL.createObjectURL(form.steps[6].photoFile);
  }, [form.steps[6]?.photoFile]);

const maxVisible = 4; // Mobilde görünür adım sayısı
const totalSteps = 6;

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
    <h2 className="text-xl font-semibold">Schengen Vize Başvuru Formu Bilgi Fişi</h2>
    <p className="text-sm text-gray-500">
     Schengen vize başvuru formu bilgi fişi 6(altı) bölümden oluşmaktadır.
   
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
  <section className="space-y-6">
    <h3 className="font-semibold mb-3 text-xl tracking-wide text-gray-800">
      1. Bölüm 
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* T.C. KİMLİK */}
      <div>
        <label className="text-sm font-medium">T.C. Kimlik No</label>
        <input
          name="tcId"
          maxLength={11}
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.tcId ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[1].tcId}
          onChange={(e) => updateField(1, "tcId", e.target.value)}
          placeholder="Örn: 12345678901"
        />
        {errors.tcId && <p className="text-red-500 text-xs mt-1">{errors.tcId}</p>}
      </div>

      {/* AD SOYAD */}
      <div>
        <label className="text-sm font-medium">Ad Soyad (Pasaport ile aynı)</label>
        <input
          name="fullName"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.fullName ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
        {errors.fullName && (
          <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
        )}
      </div>

      {/* CİNSİYET */}
      <div>
        <label className="text-sm font-medium">Cinsiyet</label>
        <select
          name="gender"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.gender ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.maritalStatus ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[1].maritalStatus || ""}
          onChange={(e) => updateField(1, "maritalStatus", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="BEKAR">BEKAR</option>
          <option value="EVLI">EVLI</option>
          <option value="DUL">DUL</option>
          <option value="BOSANMIS">BOŞANMIŞ</option>
        </select>
        {errors.maritalStatus && (
          <p className="text-red-500 text-xs mt-1">{errors.maritalStatus}</p>
        )}
      </div>

     
      {form.steps[1].gender === "KADIN" &&
        form.steps[1].maritalStatus === "EVLI" && (
          <div className="transition-all duration-300">
            <label className="text-sm font-medium">Evlenmeden Önceki Soyadı (Varsa)</label>
            <input
              name="maidenName"
              className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
              ${errors.maidenName ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
              value={form.steps[1].maidenName || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "maidenName", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "maidenName", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(1, "maidenName", normalizedValue);
                }
            }}
              placeholder="Örn: KAYA"
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
          type="date"
          name="birthDate"
          className="w-full mt-1 p-3 border border-gray-300 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={form.steps[1].birthDate || ""}
          onChange={(e) => updateField(1, "birthDate", e.target.value)}
        />
      </div>

      {/* DOĞUM YERİ */}
      <div>
        <label className="text-sm font-medium">Doğum Yeri</label>
        <input
          name="birthPlace"
          className="w-full mt-1 p-3 border border-gray-300 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
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

      {/* TELEFON NUMARASI */}
      <div>
        <label className="text-sm font-medium">Telefon Numarası</label>
        <input
          name="phone_number"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.phone_number ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[1].phone_number}
          onChange={(e) => updateField(1, "phone_number", e.target.value)}
          placeholder="+90 5XX XXX XX XX"
        />
        {errors.phone_number && (
          <p className="text-red-500 text-xs mt-1">{errors.phone_number}</p>
        )}
      </div>

      {/* E-MAIL */}
      <div>
        <label className="text-sm font-medium">E-posta Adresi</label>
        <input
          name="email"
          type="email"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.email ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[1].email}
          onChange={(e) => updateField(1, "email", e.target.value)}
          placeholder="ornek@mail.com"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>
    <div>
        <label className="text-sm font-medium">Posta Kodu</label>
        <input
          name="post_code"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.post_code ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[1].post_code}
          onChange={(e) => updateField(1, "post_code", e.target.value)}
          placeholder="Örn: 06510"
        />
        {errors.post_code && (
          <p className="text-red-500 text-xs mt-1">{errors.post_code}</p>
        )}
      </div>
      {/* ADRES */}
      <div className="md:col-span-2">
        <label className="text-sm font-medium">Ev Adresi</label>
        <textarea
          name="home_address"
          rows={3}
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.home_address ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[1].home_address}
                      onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "home_address", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "home_address", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(1, "home_address", normalizedValue);
                }
            }}
          placeholder="Mahalle, Cadde, Sokak, No, İlçe, İl"
        ></textarea>
        {errors.home_address && (
          <p className="text-red-500 text-xs mt-1">{errors.home_address}</p>
        )}
      </div>

      {/* POSTA KODU */}
  
    </div>
  </section>
)}



          {/* Step 2 */}
{/* Step 2 */}
{form.currentStep === 2 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">2. Bölüm</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Pasaport Numarası */}
      <div>
        <label className="text-sm font-medium">Pasaport Numaranız</label>
        <input
          name="passport_number"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.passport_number ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[2].passport_number || ""}
     onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(2, "passport_number", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(2, "passport_number", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(2, "passport_number", normalizedValue);
                }
            }}
          placeholder="Örn: U12345678"
        />
        {errors.passport_number && (
          <p className="text-red-500 text-xs mt-1">{errors.passport_number}</p>
        )}
      </div>

      {/* Pasaport Başlangıç Tarihi */}
      <div>
        <label className="text-sm font-medium">Pasaport Veriliş Tarihi</label>
        <input
          type="date"
          name="Passport_start_date"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.Passport_start_date ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[2].Passport_start_date || ""}
          onChange={(e) =>
            updateField(2, "Passport_start_date", e.target.value)
          }
        />
        {errors.Passport_start_date && (
          <p className="text-red-500 text-xs mt-1">{errors.Passport_start_date}</p>
        )}
      </div>

      {/* Pasaport Bitiş Tarihi */}
      <div>
        <label className="text-sm font-medium">Pasaport Geçerlilik Bitiş Tarihi</label>
        <input
          type="date"
          name="Passport_end_date"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.Passport_end_date ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[2].Passport_end_date || ""}
          onChange={(e) =>
            updateField(2, "Passport_end_date", e.target.value)
          }
        />
        {errors.Passport_end_date && (
          <p className="text-red-500 text-xs mt-1">{errors.Passport_end_date}</p>
        )}
      </div>

      {/* Pasaport Veren Makam */}
      <div>
        <label className="text-sm font-medium">Pasaportu Veren Makam</label>
        <input
          name="passport_issuing_authority"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.passport_issuing_authority ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[2].passport_issuing_authority || ""}
           onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(2, "passport_issuing_authority", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(2, "passport_issuing_authority", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(2, "passport_issuing_authority", normalizedValue);
                }
            }}
          placeholder="Örn: NÜFUS VE VATANDAŞLIK İŞLERİ"
        />
        {errors.passport_issuing_authority && (
          <p className="text-red-500 text-xs mt-1">
            {errors.passport_issuing_authority}
          </p>
        )}
      </div>
    </div>
  </section>
)}



{/* Step 3 */}
{form.currentStep === 3 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">3. Bölüm </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Sektör */}
      <div>
        <label className="text-sm font-medium">Çalıştığınız Sektör</label>
        <select
          name="sector"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
          value={form.steps[3].sector || ""}
                 onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "sector", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "sector", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "sector", normalizedValue);
                }
            }}
        >
          <option value="">Seçiniz</option>
          <option value="KAMU">Kamu</option>
          <option value="OZEL">Özel Sektör</option>
        </select>
      </div>

      {/* Şirket Türü – sadece özel sektör seçildiyse */}
      {form.steps[3].sector === "OZEL" && (
        <div>
          <label className="text-sm font-medium">Şirket Türü</label>
          <select
            name="company_type"
            className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
            value={form.steps[3].company_type || ""}
            onChange={(e) => updateField(3, "company_type", e.target.value)}
          >
            <option value="">Seçiniz</option>
            <option value="SAHIS">Şahıs Şirketi</option>
            <option value="LIMITED">Limited Şirketi (Ltd. Şti.)</option>
            <option value="ANONIM">Anonim Şirket (A.Ş.)</option>
            <option value="KOMANDIT">Komandit Şirketi</option>
            <option value="KOLLEKTIF">Kollektif Şirketi</option>
            <option value="KOOPERATIF">Kooperatif</option>
            <option value="DERNEK_VAKIF">Dernek / Vakıf</option>
            <option value="DIGER">Diğer</option>
          </select>
        </div>
      )}

      {/* Şirket Adı */}
      <div className={form.steps[3].sector === "OZEL" ? "" : "md:col-span-2"}>
        <label className="text-sm font-medium">{form.steps[3].sector === "OZEL" ? "Şirket Adı" :"Kurum Adı"} </label>
        <input
          name="company_name"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
          value={form.steps[3].company_name || ""}
                onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "company_name", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "company_name", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "company_name", normalizedValue);
                }
            }}
          placeholder="Örn: ABC TEKNOLOJİ A.Ş."
        />
      </div>

      {/* Şirket Statüsü */}
      <div>
        <label className="text-sm font-medium">Şirket Statünüz</label>
        <input
          name="company_statu"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
          value={form.steps[3].company_statu || ""}
                         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "company_statu", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "company_statu", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "company_statu", normalizedValue);
                }
            }}
          placeholder="Örn: ÇALIŞAN / SAHİP / ORTAK"
        />
      </div>

      {/* Şirket Adresi */}
      <div className="md:col-span-2">
        <label className="text-sm font-medium">Şirket Adresi</label>
        <textarea
          name="company_address"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
          value={form.steps[3].company_address || ""}
                           onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "company_address", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "company_address", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(3, "company_address", normalizedValue);
                }
            }}
          placeholder="Adres / cadde / posta kodu / şehir"
          rows={3}
        />
      </div>

      {/* Şirket Telefonu */}
      <div>
        <label className="text-sm font-medium">Şirket Telefon Numarası</label>
        <input
          name="company_phone_number"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
          value={form.steps[3].company_phone_number || ""}
          onChange={(e) => updateField(3, "company_phone_number", e.target.value)}
          placeholder="0312 123 45 67"
        />
      </div>

      {/* Göreviniz */}
      <div>
        <label className="text-sm font-medium">Göreviniz / Ünvanınız</label>
        <input
          name="your_title"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
          value={form.steps[3].your_title || ""}
                                    onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "your_title", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "your_title", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "your_title", normalizedValue);
                }
            }}
          placeholder="Örn: YAZILIM GELİŞTİRİCİ"
        />
      </div>

    </div>
  </section>
)}




          {/* Step 4 */}
{form.currentStep === 4 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">4.Bölüm</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* SCHENGEN – Davetiye Var mı? */}
      <div>
        <label className="text-sm font-medium">Davetiyeniz Var mı?</label>
        <select
          name="boolean_invitation"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[4].boolean_invitation || ""}
          onChange={(e) => updateField(4, "boolean_invitation", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
      </div>

      {form.steps[4].boolean_invitation === "EVET" && (
        <>
          <div>
            <label className="text-sm font-medium">Davetiye Gönderen Ad Soyad</label>
            <input
              name="invitation_sender_fullname"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[4].invitation_sender_fullname || ""}
              onChange={(e) =>
                updateField(4, "invitation_sender_fullname", normalizeInput(e.target.value))
              }
              placeholder="Örn: MARIA SCHMIDT"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Doğum Tarihi</label>
            <input
              type="date"
              name="invitation_sender_birthdate"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[4].invitation_sender_birthdate || ""}
              onChange={(e) =>
                updateField(4, "invitation_sender_birthdate", e.target.value)
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">Telefon Numarası</label>
            <input
              name="invitation_sender_phone_number"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[4].invitation_sender_phone_number || ""}
              onChange={(e) =>
                updateField(4, "invitation_sender_phone_number", e.target.value)
              }
              placeholder="+49 ___"
            />
          </div>

          <div>
            <label className="text-sm font-medium">E-mail</label>
            <input
              type="email"
              name="invitation_sender_email"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[4].invitation_sender_email || ""}
              onChange={(e) =>
                updateField(4, "invitation_sender_email", e.target.value)
              }
              placeholder="example@mail.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Kimlik / Ülke ID Numarası</label>
            <input
              name="invitation_sender_tc_id"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[4].invitation_sender_tc_id || ""}
                                       onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "invitation_sender_tc_id", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "invitation_sender_tc_id", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "invitation_sender_tc_id", normalizedValue);
                }
            }}
              placeholder="Örn: PASSPORT NO / ID NO"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Davetiye Gönderen Ev Adresi</label>
            <textarea
              name="invitation_sender_home_address"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[4].invitation_sender_home_address || ""}
                                      onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "invitation_sender_home_address", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "invitation_sender_home_address", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(4, "invitation_sender_home_address", normalizedValue);
                }
            }}
              rows={3}
              placeholder="Sokak / Cadde – Şehir – Posta Kodu – Ülke"
            />
          </div>
        </>
      )}
    </div>
  </section>
)}




          {/* Step 5 */}
{form.currentStep === 5 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">5.Bölüm</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Seyahat Başlangıç Tarihi */}
      <div>
        <label className="text-sm font-medium">Seyahat Başlangıç Tarihi *</label>
        <input
          type="date"
          name="travel_start_date"
           className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.passport_number ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[5].travel_start_date || ""}
          onChange={(e) => updateField(5, "travel_start_date", e.target.value)}
          
        />
         {errors.travel_start_date && (
          <p className="text-red-500 text-xs mt-1">{errors.travel_start_date}</p>
        )}
      </div>

      {/* Seyahat Bitiş Tarihi */}
      <div>
        <label className="text-sm font-medium">Seyahat Bitiş Tarihi *</label>
        <input
          type="date"
          name="travel_end_date"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.passport_number ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[5].travel_end_date || ""}
          onChange={(e) => updateField(5, "travel_end_date", e.target.value)}
        />
         {errors.travel_end_date && (
          <p className="text-red-500 text-xs mt-1">{errors.travel_end_date}</p>
        )}
      </div>

      {/* Daha Önce Schengen Vizesi Aldınız mı */}
      <div>
        <label className="text-sm font-medium">Daha Önce Schengen Vizesi Aldınız mı? *</label>
        <select
          name="boolean_schengen_visa"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.passport_number ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[5].boolean_schengen_visa || ""}
          onChange={(e) => updateField(5, "boolean_schengen_visa", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
                {errors.boolean_schengen_visa && (
          <p className="text-red-500 text-xs mt-1">{errors.boolean_schengen_visa}</p>
        )}
      </div>

      {/* Schengen EVET ise fingerprint ve etiket */}
      {form.steps[5].boolean_schengen_visa === "EVET" && (
        <>
          <div>
            <label className="text-sm font-medium">Parmak İzi Alındı mı? *</label>
            <select
              name="fingerprint_taken"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[5].fingerprint_taken || ""}
              onChange={(e) => updateField(5, "fingerprint_taken", e.target.value)}
            >
              <option value="">Seçiniz</option>
              <option value="EVET">Evet</option>
              <option value="HAYIR">Hayır</option>
            </select>
          </div>

          {/* Parmak izi EVET ise tarih zorunlu */}
          {form.steps[5].fingerprint_taken === "EVET" && (
            <div>
              <label className="text-sm font-medium">Parmak İzi Alınma Tarihi *</label>
              <input
                type="date"
                name="fingerprint_taken_date"
                className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                value={form.steps[5].fingerprint_taken_date || ""}
                onChange={(e) => updateField(5, "fingerprint_taken_date", e.target.value)}
              />
            </div>
          )}

          <div>
            <label className="text-sm font-medium">Son Schengen vizenizin etiket numarası *</label>
            <input
              name="schengen_visa_label_number"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[5].schengen_visa_label_number || ""}
                                       onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "schengen_visa_label_number", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "schengen_visa_label_number", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(5, "schengen_visa_label_number", normalizedValue);
                }
            }}
              placeholder="Örn: 123456789"
            />
          </div>
        </>
      )}
    </div>
  </section>
)}


{form.currentStep === 6 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">6. Bölüm</h3>

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
          {!form.steps[6].passportFile ? (
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
                  updateFileField(6, "passportFile", null);
                }}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
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
            onChange={(e) => updateFileField(6, "passportFile", e.target.files[0])}
          />
        </div>

        {form.steps[6].passportFile && (
          <p className="mt-2 text-sm text-gray-600 truncate w-48 md:w-60 text-center">
            {form.steps[6].passportFile.name}
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
          {!form.steps[6].photoFile ? (
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
                  updateFileField(6, "photoFile", null);
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
            onChange={(e) => updateFileField(6, "photoFile", e.target.files[0])}
          />
        </div>

        {form.steps[6].photoFile && (
          <p className="mt-2 text-sm text-gray-600 truncate w-48 md:w-60 text-center">
            {form.steps[6].photoFile.name}
          </p>
        )}
      </div>
    </div>
  </section>
)}

          {/* Navigation */}
<div className="flex items-center justify-between mt-6">
  {form.currentStep < 6 && (
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

  {form.currentStep === 6 && validateStep(6, form) && (
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
      <span className="flex items-center gap-3">
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
 
  <div className="bg-white  p-5 max-w-md text-center">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">
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

