"use client";
import AydinlatmaFormu from "@/app/components/modals/AydinlatmaFormu";
import Link from "next/link";
import React, { useEffect, useState,useMemo } from "react";

const isMobileOrAndroid = () => {
    // ... UA kontrol kodunuz
    const ua = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
};

const STORAGE_KEY = "uk_form_data_v1";
const STORAGE_METHOD_KEY = "uk_storage_method_v1"; // "local" or "cookie"
const defaultForm = {
  currentStep: 1,
 steps: {
    1: {
      tcId:"",      
      fullName: "",
      gender: "",
      maritalStatus: "",
      partner_full_name: "",
      birthDate: "",
      birthPlace: "",
      phone_number:"",
      email:"",
      home_address:"",
      post_code:"",
      home_owner:"",
      residence_duration:"",
      maidenName:"",
      past_addresses:"",
      
    },
       2: {
  boolean_child: "",
  child_count: "",

  // Anne
  mother_full_name: "",
  mother_birth_date: "",
  mother_travel_with_you: "",

  // Baba
  father_full_name: "",
  father_birth_date: "",
  father_travel_with_you: "",

  // Çocuklar
  child_names: [],              
  child_travel_with_you: []      
},

    3: {
      passport_number: "",
      Passport_start_date: "",
      Passport_end_date: "",
      passport_issuing_authority: "",
      tc_card_end_date:""
      
    },
  4: {
 boolean_work:"",
 work_name:"",
 work_address:"",
 work_phone:"",
 worker_title:"",
 work_year:"",
 employee:"",
monthly_money:"",
savings:"",
sideline:"",
monthly_expenditure_amount:"",

},
    5: {
    uk_address:"",
    travel_start_date:"",
    travel_end_date:"",
    boolean_traveled_adroad:"",
    abroad_country:[], //Daha önce yurtdışına çıktıysanız, ülkeler ve ay/yıl olarak gidiş tarihleri ve orada kalış süreleri.
    spend_pound:"", //İngiltere’de ne kadar pound harcamayı planlıyorsunuz?
    boolean_cover_expenses:"", // masrafları siz mi karşılayacaksınız
    who_cover_expenses:"", // masrafları başkası karşılayacaksa adı soyadı
    money_cover_expenses:"", //masrafları karşılayanın katkı tutarı
    boolean_refused_visa:"",
    cover_expenses_phone:"",
cover_expenses_email:"",
cover_expenses_reason:"",
    when_refused:"",
    refused_about:"",
    travel_reason_other:"",
    travel_reason:"",
have_invitation:"",
inviter_fullname:"",
inviter_phone:"",
inviter_email:"",
invitation_type:"",
inviter_address:"",
company_name:"",
company_email:"",
company_phone:"",
company_address:"",
invitation_reason:"",
has_family_in_uk: "",
uk_family_relation: "",
uk_family_fullname: "",
uk_family_nationality: "",
uk_family_legal_status: "",
uk_family_has_temp_visa: "",
uk_family_is_resident: "",
uk_family_passport: "",
uk_family_visa_explanation: "",
 travel_with_non_family: "",
  travel_non_family_fullname: "",
  travel_non_family_relation: "",
  travel_non_family_phone: "",

  uk_visited_last10: "",
  uk_visited_count: "",
  uk_visit_purpose: "",
  uk_visit_dates: "",

  medical_treatment_uk: "",
  medical_treatment_details: "",

  national_insurance_number_exist: "",
  national_insurance_number: "",

  uk_stay_application_last10: "",
  uk_stay_application_explanation: "",

  uk_visa_last10: "",
  uk_visa_issue_date: "",

  uk_public_funds: "",
  uk_public_funds_details: "",

  visa_refused_or_banned: "",
  visa_refused_details: "",




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








export default function FormUK() {
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
       type:"uk"
    };

    await sendForm(formToSend);
  } catch (error) {
    // console.error(error);
  }

  setIsSubmitting(false);
};

async function sendForm(payload) {
  const res = await fetch("/api/submit", {
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
  1: ["tcId","fullName", "gender", "maritalStatus", "birthDate", "birthPlace","email","phone_number","home_owner","post_code","home_address","residence_duration"],
  2: ["boolean_child", "mother_full_name", "mother_birth_date","father_full_name","father_birth_date"],
  3: ["passport_number", "Passport_start_date", "Passport_end_date","passport_issuing_authority","tc_card_end_date"],
  4: ["boolean_work","monthly_money","monthly_expenditure_amount"],
  5: ["uk_address","travel_start_date","travel_end_date","spend_pound","travel_reason"],

  6: ["passportFile","photoFile"],
};



const validateStep = (step, formData) => {
  const fields = requiredFields[step] || [];
  if (!formData.steps[step]) return { valid: false, missing: fields };

  const missing = fields.filter(field => {
    const val = formData.steps[step][field];
    return val === undefined || val === null || String(val).trim() === "";
  });

  return { valid: missing.length === 0, missing: missing || [] };
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
  const current = form.currentStep;
  const goingForward = step > current;
  const goingBack = step < current;

  // 1️⃣ Adımı doğrula (her zaman validateStep çağırıyoruz)
  const { valid, missing = [] } = validateStep(current, form);

  // Eğer ileri gidiyor ve valid değilse → Hataları yaz, ilerlemeyi durdur
  if (goingForward && !valid) {
    const newErrors = {};
    missing.forEach((field) => {
      newErrors[field] = "Bu alan zorunludur";
    });
    setErrors(newErrors);
    return; // ← ileri gitmeyi tamamen engelle
  }

  // 2️⃣ Geri gidiyorsa → HER ZAMAN izin ver
  if (goingBack) {
    setForm((prev) => ({ ...prev, currentStep: step }));
    return;
  }

  // 3️⃣ İleri gidiyor ama valid → temizle ve geçir
  if (goingForward && valid) {
    setErrors({});
    setForm((prev) => ({ ...prev, currentStep: step }));
  }
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
    let base = "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold cursor-pointer";
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

  // const photoPreview = useMemo(() => {
  //   if (!form.steps[6]?.photoFile || !(form.steps[6].photoFile instanceof File)) 
  //     return "";

  //   return URL.createObjectURL(form.steps[6].photoFile);
  // }, [form.steps[6]?.photoFile]);
const updateChildName = (index, value) => {
    // Bu, önceki updateField'ın array içindeki elemanı güncelleyen özel versiyonu.
    const names = form.steps[2].child_names ? [...form.steps[2].child_names] : [];
    names[index] = value;
    
    // updateField'ı kullanarak state'i güncelle:
    updateField(2, "child_names", names);
};


// 2. onChange İşleyicisi
const handleChildNameChange = (e, i) => {
    const value = e.target.value;
    
    if (isMobile) {
        // MOBILE: Normalizasyon yapma, değeri olduğu gibi sakla
        updateChildName(i, value);
    } else {
        // DESKTOP: Hemen normalize et
        updateChildName(i, normalizeInput(value));
    }
};

// 3. onBlur İşleyicisi
const handleChildNameBlur = (e, i) => {
    const value = e.target.value;
    
    if (isMobile) {
        // MOBILE: onBlur tetiklendiğinde normalizasyonu yap
        updateChildName(i, normalizeInput(value));
    }
    // Desktop için onBlur'a gerek yok, zaten onChange'de halledildi.
};

const updateCountryName = (index, value) => {
    const newArray = [...(form.steps[5].abroad_country || [])];
    
    // Dizideki nesnenin 'country' özelliğini güncelle
    // Nesnenin kendisi değiştiği için spread operatörü kullanmak iyi bir uygulamadır.
    newArray[index] = {
        ...(newArray[index] || {}), // Diğer özellikleri koru
        country: value,
    };
    
    updateField(5, "abroad_country", newArray);
};


// 2. onChange İşleyicisi
const handleCountryChange = (e, index) => {
    const value = e.target.value;
    
    if (isMobile) {
        // MOBILE: Normalizasyon YOK, değeri olduğu gibi sakla
        updateCountryName(index, value);
    } else {
        // DESKTOP: Hemen normalize et
        updateCountryName(index, normalizeInput(value));
    }
};

// 3. onBlur İşleyicisi
const handleCountryBlur = (e, index) => {
    const value = e.target.value;
    
    if (isMobile) {
        // MOBILE: onBlur tetiklendiğinde normalizasyonu yap
        updateCountryName(index, normalizeInput(value));
    }
    // Desktop için onBlur'a gerek yok.
};
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
function normalizeDurationInput(value) {
  if (!value) return "";

  let original = value; // önemli!

  value = value.toLowerCase();

  let years = 0;
  let months = 0;

  const yearMatch = value.match(/(\d+)\s*(yıl|yr|y)/i);
  const monthMatch = value.match(/(\d+)\s*(ay|month|m)/i);

  if (!yearMatch && !monthMatch) {
    // ❗ hiçbir eşleşme yoksa normalize ETME, kullanıcının yazdığı değeri koru
    return original;
  }

  if (yearMatch) years = parseInt(yearMatch[1]);
  if (monthMatch) months = parseInt(monthMatch[1]);

  let result = "";
  if (years) result += `${years} yıl `;
  if (months) result += `${months} ay`;

  return result.trim().toUpperCase();
}






function extractMonthsFromDuration(value) {
  if (!value) return null;

  // MM/YY formatı
  if (/^\d{2}\/\d{2}$/.test(value)) {
    const [mm, yy] = value.split("/");
    return parseInt(yy) * 12 + parseInt(mm);
  }

  // "5 yıl 3 ay" formatı
  let years = 0;
  let months = 0;
  let valid = false;

  const yearMatch = value.match(/(\d+)\s*(yıl|yr|y)/i);
  const monthMatch = value.match(/(\d+)\s*(ay|month|m)/i);

  if (yearMatch) {
    years = parseInt(yearMatch[1]);
    valid = true;
  }
  if (monthMatch) {
    months = parseInt(monthMatch[1]);
    valid = true;
  }

  if (!valid) return null;

  return years * 12 + months;
}







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
  
   

    {!resMessage && ( <div className="mb-6">
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
    {[1,2,3,4,5,6].map((s, i, arr) => {
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
)}     
        {/* Title like A4 form header */}
{!resMessage && (<div className="mb-6">
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
    <h2 className="text-xl font-semibold">İngiltere Vize Başvuru Formu Bilgi Fişi</h2>
    <p className="text-sm text-gray-500">
     İngiltere vize başvuru formu bilgi fişi 6(altı) bölümden oluşmaktadır.
   
    </p>
       <p className="text-sm text-gray-500">

       Lütfen bilgilerinizi dikkatli doldurunuz.
   
    </p>
  </div>
</div>)}


        {/* Form body */}
   {!resMessage && (    <form onSubmit={handleSubmit} className="space-y-6">
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
        <label className="text-sm font-medium">Ad Soyad (Pasaportta yazan)</label>
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
          <option value="EVLI">EVLİ</option>
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
      {/* EŞ / ESKİ EŞ */}
      {form.steps[1].maritalStatus === "EVLI" && (
        <div>
          <label className="text-sm font-medium">Eşinin Adı Soyadı</label>
          <input
            name="partner_full_name"
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.partner_full_name ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[1].partner_full_name || ""}
        onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "partner_full_name", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "partner_full_name", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(1, "partner_full_name", normalizedValue);
                }
            }}
            placeholder="Örn: AHMET PARLAK"
          />
          {errors.partner_full_name && (
            <p className="text-red-500 text-xs mt-1">{errors.partner_full_name}</p>
          )}
        </div>
      )}

      {["DUL", "BOSANMIS"].includes(form.steps[1].maritalStatus) && (
        <div>
          <label className="text-sm font-medium">Eski Eşinin Adı Soyadı</label>
          <input
            name="partner_full_name"
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.partner_full_name ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[1].partner_full_name || ""}
             onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "partner_full_name", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "partner_full_name", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(1, "partner_full_name", normalizedValue);
                }
            }}
            placeholder="Örn: AHMET PARLAK"
          />
          {errors.partner_full_name && (
            <p className="text-red-500 text-xs mt-1">{errors.partner_full_name}</p>
          )}
        </div>
      )}

      {/* DOĞUM TARİHİ */}
<div>
  <label className="text-sm font-medium">Doğum Tarihi</label>
<input
  type="date"
  name="birthDate"
  max={new Date().toISOString().split("T")[0]}
  min="1900-01-01"
  className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
    ${errors.birthDate ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
  value={form.steps[1].birthDate || ""}
  onChange={(e) => {
    // ❗ Sadece değeri kaydediyoruz — HİÇBİR KONTROL yok
    updateField(1, "birthDate", e.target.value);
  }}
  onBlur={(e) => {
    const selected = e.target.value;

    // Eğer tarih TAM değilse (YYYY-MM-DD), validation yapma!
    if (selected.length < 10) return;

    const today = new Date().toISOString().split("T")[0];

    // Gelecek tarih kontrolü
    if (selected > today) {
      setErrors(prev => ({ ...prev, birthDate: "Doğum tarihi bugünden ileri olamaz." }));
      return;
    }

    // Çok eski tarih kontrolü
    if (selected < "1900-01-01") {
      setErrors(prev => ({ ...prev, birthDate: "Lütfen geçerli bir tarih giriniz." }));
      return;
    }

    // Her şey normalse hata sil
    setErrors(prev => ({ ...prev, birthDate: "" }));
  }}
/>


  {errors.birthDate && (
    <p className="text-red-500 text-xs mt-1">{errors.birthDate}</p>
  )}
</div>


      {/* DOĞUM YERİ */}
      <div>
        <label className="text-sm font-medium">Doğum Yeri(Pasaportta yazan)</label>
        <input
          name="birthPlace"
        className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.birthDate ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
         {errors.birthPlace && (
            <p className="text-red-500 text-xs mt-1">{errors.birthPlace}</p>
          )}
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

      {/* POSTA KODU */}
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

      {/* EV ADRESİ */}
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

      {/* EV SAHİBİ */}
<div>
  <label className="text-sm font-medium">Ev Sahibi</label>
  <select
    name="home_owner"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
    ${errors.home_owner ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[1].home_owner || ""}
    onChange={(e) => updateField(1, "home_owner", e.target.value)}
  >
    <option value="">Seçiniz</option>
    <option value="KENDİSİ">KENDİSİ</option>
    <option value="KİRA">KİRA</option>
    <option value="ANNE">ANNE</option>
    <option value="BABA">BABA</option>
    <option value="EŞ">EŞ</option>
  </select>

  {errors.home_owner && (
    <p className="text-red-500 text-xs mt-1">{errors.home_owner}</p>
  )}
</div>

<div>
  <label className="text-sm font-medium">Bu evde ne kadar süredir yaşıyorsunuz?</label>

  <input
    name="residence_duration"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
    ${errors.residence_duration ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[1].residence_duration || ""}
    placeholder="Örn: 5 yıl 3 ay, 8 ay, 03/24"
    onChange={(e) => {
      const raw = e.target.value;

      if (isMobile) {
        // Mobile: raw değeri yaz
        updateField(1, "residence_duration", raw);
    
      } else {
        updateField(1, "residence_duration", normalizeDurationInput(raw));
      }

      if (!raw.trim()) {
  

        updateField(1, "residence_months_total", null);
      }
    }}
onBlur={(e) => {
  let value = form.steps[1].residence_duration || "";

  if (isMobile) {
    const normalized = normalizeDurationInput(value);
    updateField(1, "residence_duration", normalized);
    value = normalized;
  }

  const totalMonths = extractMonthsFromDuration(value);

  if (totalMonths !== null) {
    updateField(1, "residence_months_total", totalMonths);
  } else {
    // ❗ Burası residence_duration'ı ASLA SİLMEMELİ
    console.warn("Geçersiz süre, ama duration korunuyor:", value);
  }
}}

  />

  {errors.residence_duration && (
    <p className="text-red-500 text-xs mt-1">{errors.residence_duration}</p>
  )}
</div>
{form.steps[1].residence_months_total !== null &&
 form.steps[1].residence_months_total < 12 && (
  <div className="mt-4">
    <label className="text-sm font-medium">Geçmiş 2 yıldaki adreslerinizi yazınız</label>

    <textarea
      name="past_addresses"
      className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300 focus:ring-2 focus:ring-blue-500 resize-none"
      placeholder="Son 2 yıldaki önceki adreslerinizi yazınız"
      rows={4}
      
      value={form.steps[1].past_addresses || ""}
      onChange={(e) => {
        const raw = e.target.value;

        if (isMobile) {
          updateField(1, "past_addresses", raw);
        } else {
          updateField(1, "past_addresses", normalizeAddressInput(raw));
        }
      }}
      onBlur={(e) => {
        if (isMobile) {
          const normalized = normalizeAddressInput(e.target.value);
          updateField(1, "past_addresses", normalized);
        }
      }}
    />

    {errors.past_addresses && (
      <p className="text-red-500 text-xs mt-1">{errors.past_addresses}</p>
    )}
  </div>
)}




    </div>
  </section>
)}




          {/* Step 2 */}
{/* Step 2 */}
{form.currentStep === 2 && (
  <section className="space-y-6">
    <h3 className="font-semibold mb-3 text-xl tracking-wide text-gray-800">
      2. Bölüm
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Anne Adı */}
      <div>
        <label className="text-sm font-medium">Anne Adı Soyadı</label>
        <input
          name="mother_full_name"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[2].mother_full_name || ""}
          onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(2, "mother_full_name", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(2, "mother_full_name", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(2, "mother_full_name", normalizedValue);
                }
            }}
          placeholder="Örn: İPEK PARLAK"
        />
      </div>

      {/* Anne Doğum Tarihi */}
  <div>
  <label className="text-sm font-medium">Anne Doğum Tarihi</label>
  <input
    type="date"
    name="mother_birth_date"
    max={new Date().toISOString().split("T")[0]}     // bugünden sonrası kapalı
    min="1900-01-01"                                // saçma eski tarihler kapalı
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.mother_birth_date ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[2].mother_birth_date || ""}
    onChange={(e) => {
      // ❗ Sadece yazılan değeri sakla — validation burada yapılmayacak
      updateField(2, "mother_birth_date", e.target.value);
    }}
    onBlur={(e) => {
      const selected = e.target.value;

      // ❗ Eğer kullanıcı tarihi TAM yazmadıysa (ör: "2023-" ya da "2") → validation yapma
      if (selected.length < 10) return;

      const today = new Date().toISOString().split("T")[0];

      // 🔴 Gelecek tarih kontrolü
      if (selected > today) {
        setErrors(prev => ({
          ...prev,
          mother_birth_date: "Doğum tarihi bugünden ileri olamaz."
        }));
        return;
      }

      // 🔴 Çok eski tarih kontrolü
      if (selected < "1900-01-01") {
        setErrors(prev => ({
          ...prev,
          mother_birth_date: "Lütfen geçerli bir tarih giriniz."
        }));
        return;
      }

      // ✔ Hata yoksa hatayı temizle
      setErrors(prev => ({ ...prev, mother_birth_date: "" }));
    }}
  />

  {errors.mother_birth_date && (
    <p className="text-red-500 text-xs mt-1">{errors.mother_birth_date}</p>
  )}
</div>

<div>
  <label className="text-sm font-medium">Anne sizinle seyahat edecek mi?</label>
  <select
    name="mother_travel_with_you"
   className="w-full mt-1 p-3.5 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
    value={form.steps[2].mother_travel_with_you || ""}
    onChange={(e) => updateField(2, "mother_travel_with_you", e.target.value)}
  >
    <option value="">Seçiniz</option>
    <option value="EVET">Evet</option>
    <option value="HAYIR">Hayır</option>
  </select>
</div>
      {/* Baba Adı */}
      <div>
        <label className="text-sm font-medium">Baba Adı Soyadı</label>
        <input
          name="father_full_name"
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.mother_birth_date ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[2].father_full_name || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(2, "father_full_name", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(2, "father_full_name", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(2, "father_full_name", normalizedValue);
                }
            }}
          placeholder="Örn: MEHMET PARLAK"
        />
        {errors.father_full_name && (
    <p className="text-red-500 text-xs mt-1">{errors.father_full_name}</p>
  )}
      </div>

      {/* Baba Doğum Tarihi */}
   <div>
  <label className="text-sm font-medium">Baba Doğum Tarihi</label>
  <input
    type="date"
    name="father_birth_date"
    max={new Date().toISOString().split("T")[0]}   // bugünden sonrası kapalı
    min="1900-01-01"                                // saçma eski tarihler kapalı
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.father_birth_date ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[2].father_birth_date || ""}
    onChange={(e) => {
      // ❗ Sadece değeri sakla — validation burada çalışmayacak
      updateField(2, "father_birth_date", e.target.value);
    }}
    onBlur={(e) => {
      const selected = e.target.value;

      // ❗ Eğer tarih TAM değilse validation yapma
      if (selected.length < 10) return;

      const today = new Date().toISOString().split("T")[0];

      // 🔴 Gelecek tarih kontrolü
      if (selected > today) {
        setErrors(prev => ({
          ...prev,
          father_birth_date: "Doğum tarihi bugünden ileri olamaz."
        }));
        return;
      }

      // 🔴 Çok eski tarih kontrolü
      if (selected < "1900-01-01") {
        setErrors(prev => ({
          ...prev,
          father_birth_date: "Lütfen geçerli bir tarih giriniz."
        }));
        return;
      }

      // ✔ Hata yok → temizle
      setErrors(prev => ({ ...prev, father_birth_date: "" }));
    }}
  />

  {errors.father_birth_date && (
    <p className="text-red-500 text-xs mt-1">{errors.father_birth_date}</p>
  )}
</div>
<div>
  <label className="text-sm font-medium">Baba sizinle seyahat edecek mi?</label>
  <select
    name="father_travel_with_you"
    className="w-full mt-1 p-3.5 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
    value={form.steps[2].father_travel_with_you || ""}
    onChange={(e) => updateField(2, "father_travel_with_you", e.target.value)}
  >
    <option value="">Seçiniz</option>
    <option value="EVET">Evet</option>
    <option value="HAYIR">Hayır</option>
  </select>
</div>

      {/* Çocuğunuz var mı? */}
      <div>
        <label className="text-sm font-medium">Çocuğunuz var mı?</label>
        <select
          name="boolean_child"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[2].boolean_child || ""}
          onChange={(e) => updateField(2, "boolean_child", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
      </div>

      {/* Çocuğu varsa sayısı */}
      {form.steps[2].boolean_child === "EVET" && (
        <div>
          <label className="text-sm font-medium">Çocuk Sayısı</label>
          <input
            type="number"
            min={1}
            max={10}
            className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.steps[2].child_count || ""}
            onChange={(e) => updateField(2, "child_count", e.target.value)}
          />
        </div>
      )}

      {/* Çocuk isimleri */}
      {form.steps[2].boolean_child === "EVET" &&
        Array.from({ length: Number(form.steps[2].child_count || 0) }).map((_, i) => (
          <div key={i} >
            <div>
        <label className="text-sm font-medium">{i + 1}. Çocuk Adı</label>
        <input
          name={`child_name_${i}`}
         className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[2].child_names?.[i] || ""}
          onChange={(e) => handleChildNameChange(e, i)}
          onBlur={(e) => handleChildNameBlur(e, i)}
          placeholder="Örn: ALİ PARLAK"
        />
      </div>

      {/* 🔥 Çocuk Sizinle Seyahat Edecek mi? */}
      <div>
        <label className="text-sm font-medium">{i + 1}. Çocuk sizinle seyahat edecek mi?</label>
        <select
          name={`child_travel_with_you_${i}`}
         className="w-full mt-1 p-3.5 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[2].child_travel_with_you?.[i] || ""}
          onChange={(e) => updateField(2, "child_travel_with_you", {
            ...(form.steps[2].child_travel_with_you || {}),
            [i]: e.target.value
          })}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
      </div>
          </div>
        ))}
    </div>
  </section>
)}




{/* Step 3 */}
{form.currentStep === 3 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">3. Bölüm</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Pasaport Numarası */}
      <div>
        <label className="text-sm font-medium">Pasaport Numarası</label>
        <input
          name="passport_number"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
          value={form.steps[3].passport_number || ""}
         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "passport_number", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "passport_number", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "passport_number", normalizedValue);
                }
            }}
          placeholder="Örn: C12345678"
        />
      </div>

      {/* Pasaport Başlangıç Tarihi */}
  <div>
  <label className="text-sm font-medium">Pasaport Başlangıç Tarihi</label>
  <input
    type="date"
    name="Passport_start_date"
    max={new Date().toISOString().split("T")[0]}   // gelecekteki tarihler kapalı
    min="1900-01-01"                                // saçma eski tarihler kapalı
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.Passport_start_date ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[3].Passport_start_date || ""}
    onChange={(e) => {
      // ❗ Yazarken validation yapma, sadece değeri sakla
      updateField(3, "Passport_start_date", e.target.value);
    }}
    onBlur={(e) => {
      const selected = e.target.value;

      // ❗ Tarih tam yazılmadıysa validation yapma
      if (selected.length < 10) return;

      const today = new Date().toISOString().split("T")[0];

      // 🔴 Gelecek tarih kontrolü
      if (selected > today) {
        setErrors(prev => ({
          ...prev,
          Passport_start_date: "Pasaport başlangıç tarihi bugünden ileri olamaz."
        }));
        return;
      }

      // 🔴 Çok eski tarih kontrolü
      if (selected < "1900-01-01") {
        setErrors(prev => ({
          ...prev,
          Passport_start_date: "Lütfen geçerli bir tarih giriniz."
        }));
        return;
      }

      // ✔ Hata yok → temizle
      setErrors(prev => ({ ...prev, Passport_start_date: "" }));
    }}
  />

  {errors.Passport_start_date && (
    <p className="text-red-500 text-xs mt-1">{errors.Passport_start_date}</p>
  )}
</div>


      {/* Pasaport Bitiş Tarihi */}
<div>
  <label className="text-sm font-medium">Pasaport Bitiş Tarihi</label>
  <input
    type="date"
    name="Passport_end_date"
    disabled={!form.steps[3].Passport_start_date}   // başlangıç yoksa seçilemez
    min={
      form.steps[3].Passport_start_date 
        ? form.steps[3].Passport_start_date
        : "1900-01-01"
    }
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${
        errors.Passport_end_date
          ? "border-red-500"
          : "border-gray-300 focus:ring-2 focus:ring-blue-500"
      }
      ${!form.steps[3].Passport_start_date ? "opacity-50 cursor-not-allowed" : ""}
    `}
    value={form.steps[3].Passport_end_date || ""}
    onChange={(e) => {
      updateField(3, "Passport_end_date", e.target.value); // sadece yazılanı kaydet
    }}
    onBlur={(e) => {
      const endDate = e.target.value;
      const startDate = form.steps[3].Passport_start_date;

      // tarih tam yazılmadıysa validation yapma
      if (endDate.length < 10) return;

      // Başlangıç seçilmemişse validation yapılmaz
      if (!startDate) return;

      // 🔴 Bitiş tarihi başlangıçtan ÖNCE olamaz
      if (endDate < startDate) {
        setErrors((prev) => ({
          ...prev,
          Passport_end_date:
            "Pasaport bitiş tarihi, başlangıç tarihinden önce olamaz.",
        }));
        return;
      }

      // 🔴 Bitiş tarihi başlangıç tarihiyle AYNI da olamaz
      if (endDate === startDate) {
        setErrors((prev) => ({
          ...prev,
          Passport_end_date:
            "Pasaport bitiş tarihi, başlangıç tarihinden büyük olmalıdır.",
        }));
        return;
      }

      // 🔴 Bitiş tarihi çok eski olamaz
      if (endDate < "1900-01-01") {
        setErrors((prev) => ({
          ...prev,
          Passport_end_date: "Lütfen geçerli bir tarih giriniz.",
        }));
        return;
      }

      // ✔ Hata yok
      setErrors((prev) => ({ ...prev, Passport_end_date: "" }));
    }}
  />

  {errors.Passport_end_date && (
    <p className="text-red-500 text-xs mt-1">{errors.Passport_end_date}</p>
  )}
</div>


      {/* Pasaportu Veren Kurum */}
      <div>
        <label className="text-sm font-medium">Pasaportu Veren Makam(Pasaportta yazan)</label>
        <input
          name="passport_issuing_authority"
           className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.tc_card_end_date ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[3].passport_issuing_authority || ""}
           onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "passport_issuing_authority", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "passport_issuing_authority", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "passport_issuing_authority", normalizedValue);
                }
            }}
          placeholder="Örn: Nüfus Müdürlüğü"
        />
          {errors.passport_issuing_authority && (
    <p className="text-red-500 text-xs mt-1">{errors.passport_issuing_authority}</p>
  )}
      </div>

      {/* T.C. Kimlik Kartı Bitiş Tarihi */}
<div>
  <label className="text-sm font-medium">T.C. Kimlik Kartı Bitiş Tarihi</label>
  <input
    type="date"
    name="tc_card_end_date"
    min={new Date().toISOString().split("T")[0]}  // bugünden öncesi kapalı
    max="2040-01-01"                              // saçma ileri tarihler engelleniyor (istersen değiştiririz)
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.tc_card_end_date ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[3].tc_card_end_date || ""}
    onChange={(e) => {
      // yazarken validation yok — sadece değer kaydedilir
      updateField(3, "tc_card_end_date", e.target.value);
    }}
    onBlur={(e) => {
      const selected = e.target.value;
      const today = new Date().toISOString().split("T")[0];

      if (selected.length < 10) return;  // tarih tam değilse validation yok

      // 🔴 1900 öncesi saçma tarih
      if (selected < "1900-01-01") {
        setErrors(prev => ({
          ...prev,
          tc_card_end_date: "Lütfen geçerli bir tarih giriniz."
        }));
        return;
      }

      // 🔴 Bugünden önce olamaz
      if (selected < today) {
        setErrors(prev => ({
          ...prev,
          tc_card_end_date: "Kimlik kartı bitiş tarihi bugünden önce olamaz."
        }));
        return;
      }

      // 🔴 Çok ileri (20–30 yıl sonrası) tarihler engellensin
      // İstersen bu kuralı kaldırabiliriz
      const year = parseInt(selected.split("-")[0]);
      const currentYear = new Date().getFullYear();
      if (year - currentYear > 15) {
        setErrors(prev => ({
          ...prev,
          tc_card_end_date: "Lütfen mantıklı bir bitiş tarihi seçiniz."
        }));
        return;
      }

      // ✔ Hata yok → temizle
      setErrors(prev => ({
        ...prev,
        tc_card_end_date: ""
      }));
    }}
  />

  {errors.tc_card_end_date && (
    <p className="text-red-500 text-xs mt-1">{errors.tc_card_end_date}</p>
  )}
</div>


    </div>
  </section>
)}





          {/* Step 4 */}
{form.currentStep === 4 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">4. Bölüm</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Çalışma Durumu */}
      <div>
        <label className="text-sm font-medium">Çalışma Durumu</label>
        <select
          name="boolean_work"
                className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.boolean_work ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[4].boolean_work || ""}
          onChange={(e) => updateField(4, "boolean_work", e.target.value)}
        >
          <option value="">Seçiniz</option>
          {form.steps[1].gender === "KADIN" && (
            <option value="EV_HANIMI">Ev Hanımı</option>
          )}
          <option value="OGRENCI">Öğrenci</option>
          <option value="CALISIYOR">Çalışıyor</option>
          <option value="EMEKLI">Emekli</option>
          <option value="CALISMAYAN">Çalışmıyor</option>
        </select>
           {errors.boolean_work && (
            <p className="text-red-500 text-xs mt-1">{errors.boolean_work}</p>
          )}
      </div>

      {/* Çalışan veya emekli veya çalışmıyor ise iş yeri bilgileri */}
      {(form.steps[4].boolean_work === "CALISIYOR" ||
        form.steps[4].boolean_work === "EMEKLI" ||
        form.steps[4].boolean_work === "CALISMAYAN") && (
        <>
          <div>
         {form.steps[4].boolean_work === "CALISMAYAN" ?  <label className="text-sm font-medium">Eski İş Yeri Adı (varsa)</label>  :  <label className="text-sm font-medium">İş Yeri Adı</label> }  
            <input
              name="work_name"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
              value={form.steps[4].work_name || ""}
                    onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "work_name", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "work_name", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "work_name", normalizedValue);
                }
            }}
            />
          </div>

          <div>
       {form.steps[4].boolean_work === "CALISMAYAN" ?  <label className="text-sm font-medium">Eski İş Yeri Adresi (varsa)</label>  :   <label className="text-sm font-medium">İş Yeri Adresi</label> }       
            <input
              name="work_address"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
              value={form.steps[4].work_address || ""}
                        onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "work_address", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "work_address", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(4, "work_address", normalizedValue);
                }
            }}
            />
          </div>

          <div>
              {form.steps[4].boolean_work === "CALISMAYAN" ?  <label className="text-sm font-medium">Eski İş Yeri Telefonu (varsa)</label>  :   <label className="text-sm font-medium">İş Yeri Telefonu</label> }       
      
            <input
              name="work_phone"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
              value={form.steps[4].work_phone || ""}
              onChange={(e) => updateField(4, "work_phone", e.target.value)}
            />
          </div>

          <div>
              {form.steps[4].boolean_work === "CALISMAYAN" ?  <label className="text-sm font-medium">Eski Göreviniz / Ünvanınız (varsa)</label>  :   <label className="text-sm font-medium">Göreviniz / Ünvanınız</label> }       

            <input
              name="worker_title"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
              value={form.steps[4].worker_title || ""}
                           onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "worker_title", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "worker_title", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "worker_title", normalizedValue);
                }
            }}
            />
          </div>

          <div>
             {form.steps[4].boolean_work === "CALISMAYAN" ?  <label className="text-sm font-medium">Kaç yıl çalıştınız? (varsa)</label>  :   
            <label className="text-sm font-medium">Toplam çalışma süreniz</label> }       

            <input
              type="text"
              // min="0"
              name="work_year"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
              value={form.steps[4].work_year || ""}
              onChange={(e) => updateField(4, "work_year",normalizeInput( e.target.value))}
              placeholder="Örn: 5 Yıl"
            />
          </div>

          {form.steps[4].boolean_work === "CALISIYOR" && (
            <div>
              <label className="text-sm font-medium">Bu iş yeri sizin mi?</label>
              <select
                name="own_work"
                className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
                value={form.steps[4].own_work || ""}
                onChange={(e) => updateField(4, "own_work", e.target.value)}
              >
                <option value="">Seçiniz</option>
                <option value="EVET">Evet</option>
                <option value="HAYIR">Hayır</option>
                <option value="DIGER">Diğer</option>

              </select>
            </div>
          )}
        </>
      )}

      {/* Maddi Durum Soruları (Ev Hanımı, Öğrenci, Çalışıyor) */}
{/* Maddi Durum Soruları - HERKES İÇİN GÖZÜKECEK */}
{form.steps[4].boolean_work !== "" && (
  <>
    <div>
      <label className="text-sm font-medium">Aylık Geliriniz</label>
      <input
        name="monthly_money"
        className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.monthly_money ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
        value={form.steps[4].monthly_money || ""}
                        onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "monthly_money", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "monthly_money", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "monthly_money", normalizedValue);
                }
            }}
        placeholder="Örn: 5000 TL"
      />
       {errors.monthly_money && (
            <p className="text-red-500 text-xs mt-1">{errors.monthly_money}</p>
          )}
    </div>

    <div>
      <label className="text-sm font-medium">Bu gelir dışında birikiminiz var mı?</label>
      <input
        name="savings"
        className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
        value={form.steps[4].savings || ""}
                         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "savings", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "savings", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "savings", normalizedValue);
                }
            }}
        placeholder="Örn: 20000 TL"
      />
    </div>

    <div>
      <label className="text-sm font-medium">Aylık kazancınız dışında yan gelirleriniz var mı?</label>
      <input
        name="sideline"
        className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
        value={form.steps[4].sideline || ""}
                    onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "sideline", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "sideline", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "sideline", normalizedValue);
                }
            }}
        placeholder="Örn: 1000 TL"
      />
    </div>

    <div>
      <label className="text-sm font-medium">Aylık Harcama Miktarınız</label>
      <input
        name="monthly_expenditure_amount"
        className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.monthly_expenditure_amount ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
        value={form.steps[4].monthly_expenditure_amount || ""}
                      onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "monthly_expenditure_amount", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "monthly_expenditure_amount", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "monthly_expenditure_amount", normalizedValue);
                }
            }}
        placeholder="Örn: 3000 TL"
      />
       {errors.monthly_expenditure_amount && (
            <p className="text-red-500 text-xs mt-1">{errors.monthly_expenditure_amount}</p>
          )}
    </div>
  </>
)}


      {/* Öğrenci ise okul bilgileri */}
      {form.steps[4].boolean_work === "OGRENCI" && (
        <>
          <div>
            <label className="text-sm font-medium">Okul Adı</label>
            <input
              name="school_name"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
              value={form.steps[4].school_name || ""}
                                onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "school_name", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "school_name", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "school_name", normalizedValue);
                }
            }}
              placeholder="Örn: Boğaziçi Üniversitesi"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Bölüm</label>
            <input
              name="school_department"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
              value={form.steps[4].school_department || ""}
                                       onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "school_department", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "school_department", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "school_department", normalizedValue);
                }
            }}
              placeholder="Örn: Bilgisayar Mühendisliği"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Kaç yıldır okuyor?</label>
            <input
              type="text"
              min="0"
              name="school_year"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
              value={form.steps[4].school_year || ""}
              onChange={(e) => updateField(4, "school_year", normalizeInput(e.target.value))}
            />
          </div>
        </>
      )}
    </div>
  </section>
)}






          {/* Step 5 */}
{form.currentStep === 5 && 
(
  <section className="space-y-6">
    <h3 className="font-semibold mb-3 text-lg">5. Bölüm</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* İngiltere Adresi */}
      <div className="md:col-span-2">
        <label className="text-sm font-medium">İngiltere'de Kalacağınız Adres</label>
        <input
          name="uk_address"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.uk_address ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[5].uk_address || ""}
                                         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "uk_address", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "uk_address", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(5, "uk_address", normalizedValue);
                }
            }}
          placeholder="Adres / Cadde / Posta kodu / Şehir"
        />
           {errors.uk_address && (
            <p className="text-red-500 text-xs mt-1">{errors.uk_address}</p>
          )}
      </div>

      {/* Seyahat Tarihleri */}
<div>
  <label className="text-sm font-medium">Seyahat Başlangıç Tarihi</label>
  <input
    type="date"
    name="travel_start_date"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.travel_start_date ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[5].travel_start_date || ""}
    min={new Date().toISOString().split("T")[0]}            // 🔥 Bugünden önce seçilemez
    max={new Date(new Date().setFullYear(new Date().getFullYear() + 2))
      .toISOString().split("T")[0]}                         // 🔥 2 yıldan ileri tarih seçilemez
    onChange={(e) => {
      const value = e.target.value;

      // Eğer kullanıcı saçma/gün aşan tarih girerse engelle
      const today = new Date().toISOString().split("T")[0];
      const maxDate = new Date(
        new Date().setFullYear(new Date().getFullYear() + 5)
      )
        .toISOString()
        .split("T")[0];

      if (value < today) {
        updateField(5, "travel_start_date", "");
        return;
      }

      if (value > maxDate) {
        updateField(5, "travel_start_date", "");
        return;
      }

      updateField(5, "travel_start_date", value);
    }}
  />

  {errors.travel_start_date && (
    <p className="text-red-500 text-xs mt-1">{errors.travel_start_date}</p>
  )}
</div>


<div>
  <label className="text-sm font-medium">Seyahat Bitiş Tarihi</label>
  <input
    type="date"
    name="travel_end_date"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.travel_end_date ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[5].travel_end_date || ""}

    // Kullanıcı yazarken hiçbir şekilde engelleme yok
    onChange={(e) => updateField(5, "travel_end_date", e.target.value)}

    // Kullanıcı yazmayı bitirdiğinde (blur) kontrol et
    onBlur={(e) => {
      const value = e.target.value;

      // 🔥 Eğer tarih formatı değilse — kullanıcı elle yazarken silinmez
      if (!value || isNaN(new Date(value).getTime())) {
        return;
      }

      const start = form.steps[5].travel_start_date;
      const today = new Date().toISOString().split("T")[0];
      const maxDate = new Date(
        new Date().setFullYear(new Date().getFullYear() + 2)
      ).toISOString().split("T")[0];

      // ❌ Bugünden önce olamaz
      if (value < today) {
        updateField(5, "travel_end_date", "");
        return;
      }

      // ❌ Başlangıçtan önce olamaz
      if (start && value < start) {
        updateField(5, "travel_end_date", "");
        return;
      }

      // ❌ Çok ileri tarih olamaz
      if (value > maxDate) {
        updateField(5, "travel_end_date", "");
        return;
      }

      // ✔ Geçerli tarih — hiçbir işlem yok
    }}
  />

  {errors.travel_end_date && (
    <p className="text-red-500 text-xs mt-1">{errors.travel_end_date}</p>
  )}
</div>


      {/* Daha önce yurtdışına çıktı mı */}
      <div className="md:col-span-2">
        <label className="text-sm font-medium">
          Daha önce yurtdışına çıktıysanız, ülkeler ve ay/yıl olarak gidiş tarihleri ve orada kalış süreleri
        </label>
        <select
          name="boolean_traveled_adroad"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
          value={form.steps[5].boolean_traveled_adroad || ""}
          onChange={(e) => updateField(5, "boolean_traveled_adroad", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
      </div>

      {/* Yurtdışına çıktıysa detaylar */}
{form.steps[5].boolean_traveled_adroad === "EVET" && (
  <div className="md:col-span-2 space-y-3">
    {(form.steps[5].abroad_country || []).map((item, index) => (
      <div key={index} className="flex flex-col md:flex-row gap-3 items-center">
        <input
          name={`abroad_country_name_${index}`}
          placeholder="Ülke"
          className="flex-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
          value={item.country || ""}
        onChange={(e) => handleCountryChange(e, index)}
    onBlur={(e) => handleCountryBlur(e, index)}
        />
  <input
  type="date"
  name={`abroad_country_start_${index}`}
  placeholder="Gidiş Tarihi (Gün/Ay/Yıl)"
  className="w-40 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
  value={item.start || ""}
  onChange={(e) => {
    const newArray = [...form.steps[5].abroad_country];
    newArray[index].start = e.target.value;
    updateField(5, "abroad_country", newArray);
  }}
  onBlur={(e) => {
    const value = e.target.value;

    // Eğer format tam değilse (örn: 2025-0, 2025-, 2025 vs.) → Hiçbir şey yapma
    if (!value || value.length < 10) return;

    const today = new Date().toISOString().split("T")[0];

    // ❌ Gelecek tarih olamaz
    if (value > today) {
      const arr = [...form.steps[5].abroad_country];
      arr[index].start = ""; // alanı temizle
      updateField(5, "abroad_country", arr);
      return;
    }

    // ❌ 1900 öncesi olamaz
    if (value < "1900-01-01") {
      const arr = [...form.steps[5].abroad_country];
      arr[index].start = "";
      updateField(5, "abroad_country", arr);
      return;
    }
  }}
/>
<input
  type="date"
  name={`abroad_country_end_${index}`}
  placeholder="Dönüş Tarihi (Gün/Ay/Yıl)"
  className="w-40 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
  value={item.end || ""}
  onChange={(e) => {
    const newArray = [...form.steps[5].abroad_country];
    newArray[index].end = e.target.value;
    updateField(5, "abroad_country", newArray);
  }}
  onBlur={(e) => {
    const value = e.target.value;

    // Eğer format tam değilse → hiçbir şey yapma
    if (!value || value.length < 10) return;

    const today = new Date().toISOString().split("T")[0];
    const startDate = form.steps[5].abroad_country[index]?.start || "";

    // ❌ Bugünden ileri tarih olamaz
    if (value > today) {
      const arr = [...form.steps[5].abroad_country];
      arr[index].end = "";
      updateField(5, "abroad_country", arr);
      return;
    }

    // ❌ 1900 öncesi olamaz
    if (value < "1900-01-01") {
      const arr = [...form.steps[5].abroad_country];
      arr[index].end = "";
      updateField(5, "abroad_country", arr);
      return;
    }

    // ❌ Başlangıç tarihinden önce olamaz
    if (startDate && value < startDate) {
      const arr = [...form.steps[5].abroad_country];
      arr[index].end = "";
      updateField(5, "abroad_country", arr);
      return;
    }
  }}
/>

        <button
          type="button"
          onClick={() => {
            const newArray = [...form.steps[5].abroad_country];
            newArray.splice(index, 1);
            updateField(5, "abroad_country", newArray);
          }}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          Sil
        </button>
      </div>
    ))}

    <button
      type="button"
      onClick={() => {
        const newArray = [...(form.steps[5].abroad_country || []), { country: "", start: "", end: "" }];
        updateField(5, "abroad_country", newArray);
      }}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Yeni Ülke Ekle
    </button>
  </div>
)}



      {/* İngiltere’de harcama planı */}
      <div>
        <label className="text-sm font-medium">İngiltere’de ne kadar pound harcamayı planlıyorsunuz?</label>
        <input
          name="spend_pound"
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.spend_pound ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[5].spend_pound || ""}
          onChange={(e) => updateField(5, "spend_pound", e.target.value)}
          placeholder="Örn: 2000"
        />
                {errors.spend_pound && (
            <p className="text-red-500 text-xs mt-1">{errors.spend_pound}</p>
          )}
      </div>

      {/* Masrafları kim karşılayacak */}
      <div>
        <label className="text-sm font-medium">Masrafları siz mi karşılayacaksınız?</label>
        <select
          name="boolean_cover_expenses"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
          value={form.steps[5].boolean_cover_expenses || ""}
          onChange={(e) => updateField(5, "boolean_cover_expenses", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
      </div>

 {form.steps[5].boolean_cover_expenses === "HAYIR" && (
  <>
    {/* Ad Soyad */}
    <div>
      <label className="text-sm font-medium">
        Masrafları Karşılayacak Kişinin Adı Soyadı
      </label>
      <input
        name="who_cover_expenses"
        className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
        value={form.steps[5].who_cover_expenses || ""}
        onChange={(e) => {
          if (isMobile) {
            updateField(5, "who_cover_expenses", e.target.value);
          } else {
            updateField(5, "who_cover_expenses", normalizeInput(e.target.value));
          }
        }}
        onBlur={(e) => {
          if (isMobile) {
            const normalizedValue = normalizeInput(e.target.value);
            updateField(5, "who_cover_expenses", normalizedValue);
          }
        }}
      />
    </div>


    {/* Telefon */}
    <div>
      <label className="text-sm font-medium">
        Masrafları Karşılayacak Kişinin Telefonu
      </label>
      <input
        name="cover_expenses_phone"
        className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
        value={form.steps[5].cover_expenses_phone || ""}
        onChange={(e) => {
          if (isMobile) {
            updateField(5, "cover_expenses_phone", e.target.value);
          } else {
            updateField(5, "cover_expenses_phone", normalizeInput(e.target.value));
          }
        }}
        onBlur={(e) => {
          if (isMobile) {
            const normalizedValue = normalizeInput(e.target.value);
            updateField(5, "cover_expenses_phone", normalizedValue);
          }
        }}
      />
    </div>

    {/* Email */}
    <div>
      <label className="text-sm font-medium">
        Masrafları Karşılayacak Kişinin Email Adresi
      </label>
      <input
        type="email"
        name="cover_expenses_email"
        className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
        value={form.steps[5].cover_expenses_email || ""}
        onChange={(e) => {
          if (isMobile) {
            updateField(5, "cover_expenses_email", e.target.value);
          } else {
            updateField(5, "cover_expenses_email", normalizeInput(e.target.value));
          }
        }}
        onBlur={(e) => {
          if (isMobile) {
            const normalizedValue = normalizeInput(e.target.value);
            updateField(5, "cover_expenses_email", normalizedValue);
          }
        }}
      />
    </div>

    {/* Katkı Tutarı */}
    <div>
      <label className="text-sm font-medium">
        Masrafları Karşılayanın Katkı Tutarı (Pound)
      </label>
      <input
        name="money_cover_expenses"
        className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
        value={form.steps[5].money_cover_expenses || ""}
        onChange={(e) => {
          if (isMobile) {
            updateField(5, "money_cover_expenses", e.target.value);
          } else {
            updateField(5, "money_cover_expenses", normalizeInput(e.target.value));
          }
        }}
        onBlur={(e) => {
          if (isMobile) {
            const normalizedValue = normalizeInput(e.target.value);
            updateField(5, "money_cover_expenses", normalizedValue);
          }
        }}
      />
    </div>
    {/* Katkı Sebebi */}
    <div>
      <label className="text-sm font-medium">
        Masrafları Karşılayanın Katkıda Bulunma Sebebi
      </label>
      <textarea
        name="cover_expenses_reason"
        className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300 resize-none"
        rows={3}
        value={form.steps[5].cover_expenses_reason || ""}
        onChange={(e) => {
          if (isMobile) {
            updateField(5, "cover_expenses_reason", e.target.value);
          } else {
            updateField(5, "cover_expenses_reason", normalizeInput(e.target.value));
          }
        }}
        onBlur={(e) => {
          if (isMobile) {
            const normalizedValue = normalizeInput(e.target.value);
            updateField(5, "cover_expenses_reason", normalizedValue);
          }
        }}
      ></textarea>
    </div>
  </>
)}




      {/* Daha önce vize reddi */}
      <div>
        <label className="text-sm font-medium">Daha önce vize reddi aldınız mı?</label>
        <select
          name="boolean_refused_visa"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
          value={form.steps[5].boolean_refused_visa || ""}
          onChange={(e) => updateField(5, "boolean_refused_visa", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
      </div>

      {form.steps[5].boolean_refused_visa === "EVET" && (
        <>
          <div>
            <label className="text-sm font-medium">Ne Zaman?</label>
            <input
              type="month"
              name="when_refused"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
              value={form.steps[5].when_refused || ""}
              onChange={(e) => updateField(5, "when_refused", e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Reddin Sebebi</label>
            <textarea
              name="refused_about"
              rows={3}
              className="w-full resize-none mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
              value={form.steps[5].refused_about || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "refused_about", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "refused_about", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(5, "refused_about", normalizedValue);
                }
            }}
            ></textarea>
          </div>
        </>
      )}
    </div>

{/* SEYAHAT SEBEBİ */}
<div>
  <label className="text-sm font-medium">Seyahat Sebebi</label>

  <select
    name="travel_reason"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.travel_reason ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[5].travel_reason || ""}
    onChange={(e) => updateField(5, "travel_reason", e.target.value)}
  >
    <option value="">Seçiniz</option>
    <option value="Aile ziyareti">Aile ziyareti</option>
    <option value="Arkadaş ziyareti">Arkadaş ziyareti</option>
    <option value="İş">İş</option>
    <option value="Transit">Transit</option>
    <option value="Akademik ziyaret">Akademik ziyaret</option>
    <option value="Kısa süreli eğitim">Kısa süreli eğitim</option>
    <option value="Sağlık">Sağlık</option>
    <option value="Evlilik">Evlilik</option>
    <option value="Diğer">Diğer (açıklayınız)</option>
  </select>

  {errors.travel_reason && (
    <p className="text-red-500 text-xs mt-1">{errors.travel_reason}</p>
  )}
</div>

{/* DİĞER SEBEP AÇIKLAMASI — SADECE "DİĞER" SEÇİLİNCE GÖRÜNÜR */}
{form.steps[5].travel_reason === "Diğer" && (
  <div className="mt-3">
    <label className="text-sm font-medium">Seyahat Sebebi Açıklaması</label>
    <textarea
      name="travel_reason_other"
      className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300 resize-none"
      rows={3}
      placeholder="Lütfen seyahat sebebinizi açıklayınız..."
      value={form.steps[5].travel_reason_other || ""}
      onChange={(e) => {
        if (isMobile) {
          updateField(5, "travel_reason_other", e.target.value);
        } else {
          updateField(5, "travel_reason_other", normalizeInput(e.target.value));
        }
      }}
      onBlur={(e) => {
        if (isMobile) {
          const normalizedValue = normalizeInput(e.target.value);
          updateField(5, "travel_reason_other", normalizedValue);
        }
      }}
    ></textarea>

    {errors.travel_reason_other && (
      <p className="text-red-500 text-xs mt-1">{errors.travel_reason_other}</p>
    )}
  </div>
)}

{/* 1. SATIR — Davet var mı + Davetiye türü */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
  {/* DAVET SORUSU */}
  <div>
    <label className="text-sm font-medium">Davetiyeniz Var mı?</label>
    <select
      name="have_invitation"
      className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300 transition focus:ring-2 focus:ring-blue-500"
      value={form.steps[5].have_invitation || ""}
      onChange={(e) => {
        const val = e.target.value;
        updateField(5, "have_invitation", val);

        // Hayır seçilince tüm davetiye alanlarını temizle
        if (val !== "EVET") {
          updateField(5, "invitation_type", "");
          updateField(5, "inviter_fullname", "");
          updateField(5, "inviter_email", "");
          updateField(5, "inviter_phone", "");
          updateField(5, "inviter_address", "");
          updateField(5, "company_name", "");
          updateField(5, "company_email", "");
          updateField(5, "company_phone", "");
          updateField(5, "company_address", "");
          updateField(5, "invitation_reason", "");
        }
      }}
    >
      <option value="">Seçiniz</option>
      <option value="EVET">Evet</option>
      <option value="HAYIR">Hayır</option>
    </select>
  </div>

  {/* DAVETİYE TÜRÜ — sadece EVET ise */}
  {form.steps[5].have_invitation === "EVET" && (
    <div>
      <label className="text-sm font-medium">Davetiye Türü</label>
      <select
        name="invitation_type"
        className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300 transition focus:ring-2 focus:ring-blue-500"
        value={form.steps[5].invitation_type || ""}
        onChange={(e) => {
          const val = e.target.value;
          updateField(5, "invitation_type", val);

          // Tür değişince alanları sıfırla
          updateField(5, "inviter_fullname", "");
          updateField(5, "inviter_email", "");
          updateField(5, "inviter_phone", "");
          updateField(5, "inviter_address", "");
          updateField(5, "company_name", "");
          updateField(5, "company_email", "");
          updateField(5, "company_phone", "");
          updateField(5, "company_address", "");
          updateField(5, "invitation_reason", "");
        }}
      >
        <option value="">Seçiniz</option>
        <option value="BIREYSEL">Bireysel</option>
        <option value="SIRKET">Şirket</option>
      </select>
    </div>
  )}
</div>

{/* BİREYSEL DAVETİYE ALANLARI */}
{form.steps[5].have_invitation === "EVET" &&
  form.steps[5].invitation_type === "BIREYSEL" && (
    <>
      {/* Adı Soyadı + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="text-sm font-medium">
            Davet Eden Adı Soyadı
          </label>
          <input
            name="inviter_fullname"
            className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
            value={form.steps[5].inviter_fullname || ""}
            onChange={(e) =>
              updateField(
                5,
                "inviter_fullname",
                isMobile ? e.target.value : normalizeInput(e.target.value)
              )
            }
            onBlur={(e) => {
              if (isMobile) {
                updateField(
                  5,
                  "inviter_fullname",
                  normalizeInput(e.target.value)
                );
              }
            }}
          />
        </div>

        <div>
          <label className="text-sm font-medium">Davet Eden Email</label>
          <input
            type="email"
            name="inviter_email"
            className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
            value={form.steps[5].inviter_email || ""}
            onChange={(e) =>
              updateField(
                5,
                "inviter_email",
                isMobile ? e.target.value : normalizeInput(e.target.value)
              )
            }
            onBlur={(e) => {
              if (isMobile) {
                updateField(
                  5,
                  "inviter_email",
                  normalizeInput(e.target.value)
                );
              }
            }}
          />
        </div>
      </div>

      {/* Telefon + Adres */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="text-sm font-medium">Davet Eden Telefon</label>
          <input
            name="inviter_phone"
            className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
            value={form.steps[5].inviter_phone || ""}
            onChange={(e) =>
              updateField(
                5,
                "inviter_phone",
                isMobile ? e.target.value : normalizeInput(e.target.value)
              )
            }
            onBlur={(e) => {
              if (isMobile) {
                updateField(
                  5,
                  "inviter_phone",
                  normalizeInput(e.target.value)
                );
              }
            }}
          />
        </div>

        <div>
          <label className="text-sm font-medium">Davet Eden Adres</label>
          <input
            name="inviter_address"
            className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
            value={form.steps[5].inviter_address || ""}
            onChange={(e) =>
              updateField(
                5,
                "inviter_address",
                isMobile ? e.target.value : normalizeAddressInput(e.target.value)
              )
            }
            onBlur={(e) => {
              if (isMobile) {
                updateField(
                  5,
                  "inviter_address",
                  normalizeAddressInput(e.target.value)
                );
              }
            }}
          />
        </div>
      </div>
    </>
  )}

{/* ŞİRKET DAVETİYE ALANLARI */}
{form.steps[5].have_invitation === "EVET" &&
  form.steps[5].invitation_type === "SIRKET" && (
    <>
      {/* Şirket Adı + Şirket Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="text-sm font-medium">Şirket Adı</label>
          <input
            name="company_name"
            className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
            value={form.steps[5].company_name || ""}
            onChange={(e) =>
              updateField(
                5,
                "company_name",
                isMobile ? e.target.value : normalizeInput(e.target.value)
              )
            }
            onBlur={(e) => {
              if (isMobile) {
                updateField(
                  5,
                  "company_name",
                  normalizeInput(e.target.value)
                );
              }
            }}
          />
        </div>

        <div>
          <label className="text-sm font-medium">Şirket Email</label>
          <input
            type="email"
            name="company_email"
            className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
            value={form.steps[5].company_email || ""}
            onChange={(e) =>
              updateField(
                5,
                "company_email",
                isMobile ? e.target.value : normalizeInput(e.target.value)
              )
            }
            onBlur={(e) => {
              if (isMobile) {
                updateField(
                  5,
                  "company_email",
                  normalizeInput(e.target.value)
                );
              }
            }}
          />
        </div>
      </div>

      {/* Şirket Telefon + Şirket Adres */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="text-sm font-medium">Şirket Telefon</label>
          <input
            name="company_phone"
            className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
            value={form.steps[5].company_phone || ""}
            onChange={(e) =>
              updateField(
                5,
                "company_phone",
                isMobile ? e.target.value : normalizeInput(e.target.value)
              )
            }
            onBlur={(e) => {
              if (isMobile) {
                updateField(
                  5,
                  "company_phone",
                  normalizeInput(e.target.value)
                );
              }
            }}
          />
        </div>

        <div>
          <label className="text-sm font-medium">Şirket Adresi</label>
          <input
            name="company_address"
            className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
            value={form.steps[5].company_address || ""}
            onChange={(e) =>
              updateField(
                5,
                "company_address",
                isMobile ? e.target.value : normalizeAddressInput(e.target.value)
              )
            }
            onBlur={(e) => {
              if (isMobile) {
                updateField(
                  5,
                  "company_address",
                  normalizeAddressInput(e.target.value)
                );
              }
            }}
          />
        </div>
      </div>
    </>
  )}

{/* ORTAK — Davet Sebebi (her iki türde de) */}
{form.steps[5].have_invitation === "EVET" &&
  form.steps[5].invitation_type && (
    <div className="mt-4">
      <label className="text-sm font-medium">Davet Sebebi</label>
      <textarea
        name="invitation_reason"
        className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300 resize-none"
        rows={3}
        placeholder="Lütfen davet sebebini yazınız..."
        value={form.steps[5].invitation_reason || ""}
        onChange={(e) =>
          updateField(
            5,
            "invitation_reason",
            isMobile ? e.target.value : normalizeInput(e.target.value)
          )
        }
        onBlur={(e) => {
          if (isMobile) {
            updateField(
              5,
              "invitation_reason",
              normalizeInput(e.target.value)
            );
          }
        }}
      ></textarea>
    </div>
  )}


{/* ===============================
   BİRLEŞİK KRALLIKTA AİLE VAR MI?
================================= */}
<div className="mt-6">
  <label className="text-sm font-medium">Birleşik Krallıkta ailenizden biri yaşıyor mu?</label>

  <select
    name="has_family_in_uk"
    className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
    value={form.steps[5].has_family_in_uk || ""}
    onChange={(e) => updateField(5, "has_family_in_uk", e.target.value)}
  >
    <option value="">Seçiniz</option>
    <option value="EVET">Evet</option>
    <option value="HAYIR">Hayır</option>
  </select>
</div>


{/* ==========================================
      Aile varsa gösterilecek tüm inputlar
========================================== */}
{form.steps[5].has_family_in_uk === "EVET" && (
  <>

    {/* Grid — Desktop 2, Mobile 1 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

      {/* Yakınlık Derecesi */}
      <div>
        <label className="text-sm font-medium">Yakınlık Derecesi</label>
        <input
          name="uk_family_relation"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
          value={form.steps[5].uk_family_relation || ""}
          onChange={(e) =>
            updateField(5, "uk_family_relation", isMobile ? e.target.value : normalizeInput(e.target.value))
          }
        />
      </div>

      {/* Adı Soyadı */}
      <div>
        <label className="text-sm font-medium">Adı Soyadı</label>
        <input
          name="uk_family_fullname"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
          value={form.steps[5].uk_family_fullname || ""}
          onChange={(e) =>
            updateField(5, "uk_family_fullname", isMobile ? e.target.value : normalizeInput(e.target.value))
          }
        />
      </div>

      {/* Uyruğu */}
      <div>
        <label className="text-sm font-medium">Uyruğu</label>
        <input
          name="uk_family_nationality"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
          value={form.steps[5].uk_family_nationality || ""}
          onChange={(e) =>
            updateField(5, "uk_family_nationality", isMobile ? e.target.value : normalizeInput(e.target.value))
          }
        />
      </div>

      {/* Yasal Durumu */}
      <div>
        <label className="text-sm font-medium">Birleşik Krallıktaki Yasal Durumu</label>
        <input
          name="uk_family_legal_status"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
          value={form.steps[5].uk_family_legal_status || ""}
          onChange={(e) =>
            updateField(5, "uk_family_legal_status", isMobile ? e.target.value : normalizeInput(e.target.value))
          }
        />
      </div>

      {/* Geçici vizeye sahip mi? */}
      <div>
        <label className="text-sm font-medium">Geçici vizeye sahip mi?</label>
        <select
          name="uk_family_has_temp_visa"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
          value={form.steps[5].uk_family_has_temp_visa || ""}
          onChange={(e) => updateField(5, "uk_family_has_temp_visa", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
      </div>

      {/* Temelli olarak UK’de mi? */}
      <div>
        <label className="text-sm font-medium">Temelli olarak Birleşik Krallıkta mı?</label>
        <select
          name="uk_family_is_resident"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
          value={form.steps[5].uk_family_is_resident || ""}
          onChange={(e) => updateField(5, "uk_family_is_resident", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
      </div>

    </div> {/* grid bitiş */}


    {/* ==========================================
         TEK ADET PASAPORT NUMARASI (ALTTA)
       ========================================== */}

    {(form.steps[5].uk_family_has_temp_visa === "EVET" ||
      form.steps[5].uk_family_is_resident === "EVET") && (
      <div className="mt-4">
        <label className="text-sm font-medium">Pasaport Numarası</label>
        <input
          name="uk_family_passport"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
          value={form.steps[5].uk_family_passport || ""}
          onChange={(e) =>
            updateField(5, "uk_family_passport", isMobile ? e.target.value : normalizeInput(e.target.value))
          }
        />
      </div>
    )}


    {/* Vize Durumu Açıklaması - sadece geçici vize HAYIR ise */}
    {form.steps[5].uk_family_has_temp_visa === "HAYIR" && (
      <div className="mt-4">
        <label className="text-sm font-medium">Vize Durumu Açıklaması</label>
        <textarea
          name="uk_family_visa_explanation"
          rows={3}
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300 resize-none"
          value={form.steps[5].uk_family_visa_explanation || ""}
          onChange={(e) =>
            updateField(5, "uk_family_visa_explanation", isMobile ? e.target.value : normalizeInput(e.target.value))
          }
        />
      </div>
    )}

  </>
)}

{/* --------------------------------------------------- */}
{/* 1) Aile bireyleri dışında biriyle seyahat edecek misiniz? */}
{/* --------------------------------------------------- */}

<label className="text-sm font-medium mt-4 block">Aile bireyleri dışında biriyle seyahat edecek misiniz?</label>
<select
  value={form.steps[5].travel_with_non_family || ""}
  onChange={(e) => updateField(5, "travel_with_non_family", e.target.value)}
  className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none"
>
  <option value="">Seçiniz</option>
  <option value="EVET">Evet</option>
  <option value="HAYIR">Hayır</option>
</select>

{form.steps[5].travel_with_non_family === "EVET" && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
    
    <input
      placeholder="Seyahat edeceğiniz kişinin adı soyadı"
      className="p-3 border rounded-xl"
      value={form.steps[5].travel_non_family_fullname || ""}
      onChange={(e) => updateField(5, "travel_non_family_fullname", normalizeInput(e.target.value))}
    />

    <input
      placeholder="Yakınlık Derecesi"
      className="p-3 border rounded-xl"
      value={form.steps[5].travel_non_family_relation || ""}
      onChange={(e) => updateField(5, "travel_non_family_relation", normalizeInput(e.target.value))}
    />

    <input
      placeholder="Telefon"
      className="p-3 border rounded-xl"
      value={form.steps[5].travel_non_family_phone || ""}
      onChange={(e) => updateField(5, "travel_non_family_phone", e.target.value)}
    />
  </div>
)}

{/* --------------------------------------------------- */}
{/* 2) Son 10 yıl UK'de bulundunuz mu? */}
{/* --------------------------------------------------- */}

<label className="text-sm font-medium mt-6 block">Son 10 yıl içinde Birleşik Krallık’ta bulundunuz mu?</label>
<select
  value={form.steps[5].uk_visited_last10 || ""}
  onChange={(e) => updateField(5, "uk_visited_last10", e.target.value)}
  className="w-full mt-1 p-3 border rounded-xl"
>
  <option value="">Seçiniz</option>
  <option value="EVET">Evet</option>
  <option value="HAYIR">Hayır</option>
</select>

{form.steps[5].uk_visited_last10 === "EVET" && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
<div>
<label className="text-sm font-medium mt-6 block">Kaç kere bulundunuz?</label>

   <input
      placeholder="Kaç kere bulundunuz?"
      type="number"
      className="p-3 border rounded-xl"
      value={form.steps[5].uk_visited_count || ""}
      onChange={(e) => updateField(5, "uk_visited_count", e.target.value)}
    />
</div>
   
<div>
  <label className="text-sm font-medium mt-6 block">Ziyaret Amacı</label>
    <input
      placeholder="Ziyaret Amacı"
      className="p-3 border rounded-xl"
      value={form.steps[5].uk_visit_purpose || ""}
      onChange={(e) => updateField(5, "uk_visit_purpose", normalizeInput(e.target.value))}
    />
</div>
<div>
    <label className="text-sm font-medium mt-6 block">Ziyaret Tarihleri</label>
        <input
      placeholder=" (örn: 2019 Mart)"
      className="p-3 border rounded-xl col-span-1 md:col-span-2"
      value={form.steps[5].uk_visit_dates || ""}
      onChange={(e) => updateField(5, "uk_visit_dates", e.target.value)}
    />
</div>


  </div>
)}

{/* --------------------------------------------------- */}
{/* 3) İngiltere’de tıbbi tedavi gördünüz mü? */}
{/* --------------------------------------------------- */}

<label className="text-sm font-medium mt-6 block">İngiltere’de daha önce tıbbi tedavi gördünüz mü?</label>
<select
  value={form.steps[5].medical_treatment_uk || ""}
  onChange={(e) => updateField(5, "medical_treatment_uk", e.target.value)}
  className="w-full mt-1 p-3 border rounded-xl"
>
  <option value="">Seçiniz</option>
  <option value="EVET">Evet</option>
  <option value="HAYIR">Hayır</option>
</select>

{form.steps[5].medical_treatment_uk === "EVET" && (
  <div>
        <label className="text-sm font-medium mt-6 block">Tedavi ile ilgili açıklama</label>
          <textarea
    placeholder="Tedavi ile ilgili açıklama"
    className="w-full mt-3 p-3 border rounded-xl resize-none"
    rows={3}
    value={form.steps[5].medical_treatment_details || ""}
     onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "medical_treatment_details", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "medical_treatment_details", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(5, "medical_treatment_details", normalizedValue);
                }
            }}
  />
  </div>

)}

{/* --------------------------------------------------- */}
{/* 4) Ulusal sigorta numaranız var mı? */}
{/* --------------------------------------------------- */}

<label className="text-sm font-medium mt-6 block">Ulusal Sigorta Numaranız var mı?</label>
<select
  value={form.steps[5].national_insurance_number_exist || ""}
  onChange={(e) => updateField(5, "national_insurance_number_exist", e.target.value)}
  className="w-full mt-1 p-3 border rounded-xl"
>
  <option value="">Seçiniz</option>
  <option value="EVET">Evet</option>
  <option value="HAYIR">Hayır</option>
</select>

{form.steps[5].national_insurance_number_exist === "EVET" && (
  <div>
      <label className="text-sm font-medium mt-6 block">Ulusal Sigorta Numarası</label>
       <input
    placeholder="Ulusal Sigorta Numarası"
    className="mt-3 p-3 border rounded-xl w-full"
    value={form.steps[5].national_insurance_number || ""}
    onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "national_insurance_number", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "national_insurance_number", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(5, "national_insurance_number", normalizedValue);
                }
            }}
  />
  </div>
 
)}

{/* --------------------------------------------------- */}
{/* 5) UK kalma izni başvurusu */}
{/* --------------------------------------------------- */}

<label className="text-sm font-medium mt-6 block">Son 10 yılda İngiltere'de kalma izni için başvuruda bulundunuz mu?</label>
<select
  value={form.steps[5].uk_stay_application_last10 || ""}
  onChange={(e) => updateField(5, "uk_stay_application_last10", e.target.value)}
  className="w-full mt-1 p-3 border rounded-xl"
>
  <option value="">Seçiniz</option>
  <option value="EVET">Evet</option>
  <option value="HAYIR">Hayır</option>
</select>

{form.steps[5].uk_stay_application_last10 === "EVET" && (
  <div>
    <label className="text-sm font-medium mt-6 block">Açıklama</label>
   <textarea
    className="w-full mt-3 p-3 border rounded-xl resize-none"
    rows={3}
    placeholder="Açıklama"
    value={form.steps[5].uk_stay_application_explanation || ""}
     onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "uk_stay_application_explanation", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "uk_stay_application_explanation", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(5, "uk_stay_application_explanation", normalizedValue);
                }
            }}
  />
 
  </div>
 
)}

{/* --------------------------------------------------- */}
{/* 6) Son 10 yılda UK vizesi aldınız mı? */}
{/* --------------------------------------------------- */}

<label className="text-sm font-medium mt-6 block">Son 10 yılda İngiltere vizesi aldınız mı?</label>
<select
  value={form.steps[5].uk_visa_last10 || ""}
  onChange={(e) => updateField(5, "uk_visa_last10", e.target.value)}
  className="w-full mt-1 p-3 border rounded-xl"
>
  <option value="">Seçiniz</option>
  <option value="EVET">Evet</option>
  <option value="HAYIR">Hayır</option>
</select>

{form.steps[5].uk_visa_last10 === "EVET" && (
  <div>
    <label className="text-sm font-medium mt-6 block">Vize Veriliş Tarihi</label>
<input
  type="date"
  className="mt-3 p-3 border rounded-xl w-full"
  value={form.steps[5].uk_visa_issue_date || ""}

  onChange={(e) => {
    updateField(5, "uk_visa_issue_date", e.target.value);
  }}

  onBlur={(e) => {
    const value = e.target.value;

    // Eğer tarih tam yazılmamışsa (YYYY-AA-GG değilse) → kontrol yok
    if (!value || value.length < 10) return;

    const today = new Date().toISOString().split("T")[0];

    // ❌ Bugünden ileri tarih olamaz
    if (value > today) {
      updateField(5, "uk_visa_issue_date", "");
      return;
    }

    // ❌ 1900'den küçük tarih olamaz
    if (value < "1900-01-01") {
      updateField(5, "uk_visa_issue_date", "");
      return;
    }
  }}
/>

  </div>
  
)}

{/* --------------------------------------------------- */}
{/* 7) Kamu fonu aldınız mı? */}
{/* --------------------------------------------------- */}

<label className="text-sm font-medium mt-6 block">İngiltere'de herhangi bir kamu fonu aldınız mı?</label>
<select
  value={form.steps[5].uk_public_funds || ""}
  onChange={(e) => updateField(5, "uk_public_funds", e.target.value)}
  className="w-full mt-1 p-3 border rounded-xl"
>
  <option value="">Seçiniz</option>
  <option value="EVET">Evet</option>
  <option value="HAYIR">Hayır</option>
</select>

{form.steps[5].uk_public_funds === "EVET" && (
  <div>
<label className="text-sm font-medium mt-6 block">Aldığınız fonu açıklayın</label>
  <textarea
    className="w-full mt-3 p-3 border rounded-xl resize-none"
    rows={3}
    placeholder="Aldığınız fonu açıklayın"
    value={form.steps[5].uk_public_funds_details || ""}
    onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "uk_public_funds_details", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "uk_public_funds_details", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(5, "uk_public_funds_details", normalizedValue);
                }
            }}
  />
  </div>

)}

{/* --------------------------------------------------- */}
{/* 8) Vize reddi, sınır dışı, giriş yasağı vs */}
{/* --------------------------------------------------- */}

<label className="text-sm font-medium mt-6 block">Herhangi bir ülkede vize reddi, sınır dışı edilme veya giriş yasağı yaşadınız mı?</label>
<select
  value={form.steps[5].visa_refused_or_banned || ""}
  onChange={(e) => updateField(5, "visa_refused_or_banned", e.target.value)}
  className="w-full mt-1 p-3 border rounded-xl"
>
  <option value="">Seçiniz</option>
  <option value="EVET">Evet</option>
  <option value="HAYIR">Hayır</option>
</select>

{form.steps[5].visa_refused_or_banned === "EVET" && (
  <div>
<label className="text-sm font-medium mt-6 block">Açıklayınız (ülke, yıl, durum)</label>
  <textarea
    className="w-full mt-3 p-3 border rounded-xl resize-none"
    rows={3}
    placeholder="Açıklayınız (ülke, yıl, durum)"
    value={form.steps[5].visa_refused_details || ""}
    onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "visa_refused_details", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "visa_refused_details", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(5, "visa_refused_details", normalizedValue);
                }
            }}
  />
  </div>

)}


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
{passportPreview && (
  <img
    src={passportPreview}
    alt="Passport Preview"
    className="w-full h-full object-cover rounded-lg transition-transform duration-200 hover:scale-105"
  />
)}
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
        {/* <label className="text-sm font-medium mb-1">
          5x5 Biyometrik Fotoğraf Yükleyiniz (jpeg/png)
        </label> */}
{/* 
        <div
          className="w-48 md:w-60 h-48 md:h-60 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 relative transition-colors"
          onClick={() => document.getElementById("photoFileInput").click()}
        >
          {!form.steps[6].photoFile ? (
            <span className="text-gray-400 text-center px-2">Dosya seçmek için tıklayın</span>
          ) : (
            <>
           <img
  src={form.steps[6].photoFile ? URL.createObjectURL(form.steps[6].photoFile) : ""}
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
            accept="image/jpeg, image/png"
            className="hidden"
            onChange={(e) => updateFileField(6, "photoFile", e.target.files[0])}
          />
        </div> */}

        {/* {form.steps[6].photoFile && (
          <p className="mt-2 text-sm text-gray-600 truncate w-48 md:w-60 text-center">
            {form.steps[6].photoFile.name}
          </p>
        )} */}
      </div>
    </div>
  </section>
)}

          {/* Navigation */}



     {statusMessage && (
  <div
    className="
      fixed top-4 right-4
      z-50
      px-4 py-3
      rounded-xl
      shadow-xl
      backdrop-blur-md
      bg-white/90 
      text-gray-800 
      border border-gray-200/50 
      animate-toast-slide
      pointer-events-none
      max-w-xs
    "
  >
    {statusMessage}
  </div>
)}
        </form>)}   
 

<div className="flex items-center justify-between mt-6">
  {form.currentStep <6 && (
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
        onClick={()=>{goNext();window.scrollTo({ top: 0, behavior: "smooth" })}}
        disabled={!validateStep(form.currentStep, form)}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 cursor-pointer"
      >
        İleri
      </button>
    </div>
  )}

  {form.currentStep === 6 && validateStep(8, form) && (
    <div className="flex flex-col gap-4 w-full">
{ (!resMessage) && ( <div className="flex items-center gap-3">
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
</div>)}

  
<div className="flex justify-center mt-6">
 { !resMessage ?
  ( <button
    type="button"
    onClick={()=>{handleSubmit();window.scrollTo({ top: 30, behavior: "smooth" })}}
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
    {    (isSubmitting ) ? 
    (
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
 
  <div className="bg-white w-full h-screen p-5 max-w-md text-center flex items-center justify-center flex-col ">
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

      <div>
      <AydinlatmaFormu   open={openInfo}
        onClose={() => setOpenInfo(false)} />
    </div>
    </div>
      </div>
  );
}

