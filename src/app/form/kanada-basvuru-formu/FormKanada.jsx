"use client";
import AydinlatmaFormu from "@/app/components/modals/AydinlatmaFormu";
import Link from "next/link";
import React, { useEffect, useState,useMemo } from "react";

const isMobileOrAndroid = () => {
    // ... UA kontrol kodunuz
    const ua = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
};


const STORAGE_KEY = "canada_form_data_v1";
const STORAGE_METHOD_KEY = "canada_storage_method_v1"; // "local" or "cookie"
const defaultForm = {
  currentStep: 1,
 steps: {
    1: {
  tcId: "",            // National ID Number zorunlu
  fullName: "",        // Full Name zorunlu
  email: "",           // Email zorunlu
  phone_number: "",    // Phone Number zorunlu
  gender: "",          // Gender zorunlu
  birthPlace: "",      // Place of Birth zorunlu
  birthDate: "",       // Date of Birth zorunlu
  home_address: ""     // Residential Address zorunlu
},
    2: {
  maritalStatus: "",            // Medeni Durum zorunlu
  marriageDate: "",             // Evlilik Tarihi
  spouseFullName: "",           // Eş Adı-Soyadı
  spouseBirthDate: "",          // Eş Doğum Tarihi
  spouseBirthPlace: "",         // Eş Doğum Yeri
  spouseAddress: "",            // Eş İkamet Adresi
  spouseOccupation: "",         // Eş Meslek
  otherMarriages: "",           // Başka Evlilik Yaptınız mı? (EVET/HAYIR)
  exSpouseFullName: "",         // Eski Eş Adı-Soyadı
  exSpouseBirthDate: "",        // Eski Eş Doğum Tarihi
  childrenExist: "",            // Çocuğunuz var mı? (EVET/HAYIR)
  childrenCount: 0,             // Çocuk Sayısı
  children: [                   // Çocuklar (Dizi)
    {
      fullName: "",
      maritalStatus: "",
      birthPlace: "",
      birthDate: "",
      address: "",
      occupation: ""
    }
  ]
},

3: {
  motherFullName: "",           // Annenizin Adı-Soyadı  zorunlu
  motherMaritalStatus: "",      // Annenizin Medeni Durumu  zorunlu
  motherBirthPlace: "",         // Annenizin Doğum Yeri  zorunlu
  motherBirthDate: "",          // Annenizin Doğum Tarihi  zorunlu
  motherAddress: "",            // Annenizin İkamet Adresi  zorunlu
  motherOccupation: "",         // Annenizin Mesleği  zorunlu

  fatherFullName: "",           // Babanızın Adı-Soyadı  zorunlu
  fatherMaritalStatus: "",      // Babanızın Medeni Durumu  zorunlu
  fatherBirthPlace: "",         // Babanızın Doğum Yeri  zorunlu
  fatherBirthDate: "",          // Babanızın Doğum Tarihi  zorunlu
  fatherAddress: "",            // Babanızın İkamet Adresi  zorunlu
  fatherOccupation: "",         // Babanızın Mesleği zorunlu

  siblingsCount: 0,             // Kardeş Sayısı  zorunlu
  siblings: [                   // Kardeşler (Dizi)
    {
      fullName: "",
      maritalStatus: "",
      birthPlace: "",
      birthDate: "",
      address: "",
      occupation: ""
    }
  ]
},

4: {
  nativeLanguage: "",              // Ana diliniz zorunlu
  canCommunicateInEnglishFrench: "", // İngilizce veya Fransızca iletişim kurabiliyor musunuz? (EVET/HAYIR) zorunlu
  tookProficiencyExam: "",         // İngilizce/Fransızca yeterliliğini ölçmek için sınava girdiniz mi? (EVET/HAYIR) zorunlu
  exams: [                         // Girilen sınavlar (Dizi)
    {
      examName: "",                 // Sınav adı
      examDate: "",                 // Sınav tarihi (opsiyonel ekleyebilirsin)
      score: ""                     // Skor (opsiyonel)
    }
  ],
  postSecondaryEducation: "",       // Orta öğretim sonrası eğitim aldınız mı? (EVET/HAYIR) zorunlu
  schoolName: "",                   // Okul adı
  programName: "",                  // Bölüm adı
  educationCity: "",                // Eğitimi aldığınız şehir
  educationCountry: "",             // Eğitimi aldığınız ülke
  educationStartDate: "",           // Eğitime başlama tarihi
  educationEndDate: ""   , // Mezuniyet tarihi
  boolean_military:"",
  military_city:"",
  military_start_date:"",
military_end_date:""  
},

5: {
  employmentStatus: "",          // Çalışma durumu (Örn: ÇALIŞIYOR, EMEKLİ, ÖĞRENCİ vs.) zorunlu
  currentCompanyName: "",        // Şu an çalıştığı şirket adı
  currentJobStartDate: "",       // İşe giriş tarihi
  currentPosition: "",           // Çalıştığınız pozisyon
  currentWorkCity: "",           // Çalıştığınız şehir
  currentWorkCountry: "",        // Çalıştığınız ülke
  last10YearsWorkExperience: [   // Son 10 yıl iş deneyimleri (Dizi)
    {
      companyName: "",           // Çalıştığınız şirket
      position: "",              // Pozisyon
      startDate: "",             // İşe giriş tarihi
      endDate: "",               // İşten çıkış tarihi
      city: "",                  // Hangi şehirde çalıştınız
      country: ""                // Hangi ülkede çalıştınız
    }
  ]
},
6: {
  previousVisaRefusal: "",        // Kanada veya başka bir ülke için vize reddi yaşadınız mı? (EVET/HAYIR) zorunlu
  refusalReason: "",              // Reddedildiyse nedeni
  previousCanadaApplication: "",  // Daha önce Kanada'ya giriş yapmak için başvurdunuz mu? (EVET/HAYIR) zorunlu
  last5YearsTravel: [             // Son 5 yılda hangi ülkelere seyahat ettiniz (Dizi)
    {
      country: "",                // Ülke adı
      travelStartDate: "",        // Gidiş tarihi
      travelEndDate: "",          // Dönüş tarihi
      travelPurpose: ""           // Seyahat amacı
    }
  ]
},

   
    7: {

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





export default function FormKanada() {
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
      type:"canada"
    };

    await sendForm(formToSend);
  } catch (error) {
    console.error(error);
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
  1: ["tcId", "fullName", "gender", "birthDate", "birthPlace", "email", "phone_number", "home_address"],
  2: ["maritalStatus"],  // Evlilik tarihi ve eş bilgileri opsiyonel olabilir
  3: [
    "motherFullName", "motherMaritalStatus", "motherBirthPlace", "motherBirthDate", "motherAddress", "motherOccupation",
    "fatherFullName", "fatherMaritalStatus", "fatherBirthPlace", "fatherBirthDate", "fatherAddress", "fatherOccupation",
    "siblingsCount"
  ],
  4: ["nativeLanguage", "canCommunicateInEnglishFrench", "tookProficiencyExam", "postSecondaryEducation"],
  5: ["employmentStatus"],
  6: ["previousVisaRefusal", "previousCanadaApplication"],
  7: []  // Dosyalar opsiyonel olabilir, ya da zorunlu yapmak istersen ["passportFile", "photoFile"] ekleyebilirsin
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
const updateChildField = (index, field, value) => {
  const updatedChildren = [...form.steps[2].children];
  updatedChildren[index] = { ...updatedChildren[index], [field]: value };
  updateField(2, "children", updatedChildren);
};

const addExam = () => {
  updateField(4, "exams", [...form.steps[4].exams, {
    examName: "",
    examDate: "",
    score: ""
  }]);
};

const removeExam = (index) => {
  const newExams = form.steps[4].exams.filter((_, i) => i !== index);
  updateField(4, "exams", newExams);
};
const updateSiblingField = (index, field, value) => {
  const updatedSiblings = [...form.steps[3].siblings];
  updatedSiblings[index] = { ...updatedSiblings[index], [field]: value };
  updateField(3, "siblings", updatedSiblings);
};
const updateArrayField = (step, arrayField, index, field, value) => {
  setForm(prev => ({
    ...prev,
    steps: {
      ...prev.steps,
      [step]: {
        ...prev.steps[step],
        [arrayField]: prev.steps[step][arrayField].map((item, idx) =>
          idx === index ? { ...item, [field]: value } : item
        )
      }
    }
  }));
};

const addArrayItem = (step, arrayField, newItem) => {
  setForm(prev => ({
    ...prev,
    steps: {
      ...prev.steps,
      [step]: {
        ...prev.steps[step],
        [arrayField]: [...prev.steps[step][arrayField], newItem]
      }
    }
  }));
};
const removeArrayItem = (step, arrayField, index) => {
  setForm(prev => ({
    ...prev,
    steps: {
      ...prev.steps,
      [step]: {
        ...prev.steps[step],
        [arrayField]: prev.steps[step][arrayField].filter((_, i) => i !== index)
      }
    }
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
    if (!form.steps[7]?.passportFile || !(form.steps[7].passportFile instanceof File)) 
      return "";

    return URL.createObjectURL(form.steps[7].passportFile);
  }, [form.steps[7]?.passportFile]);

  const photoPreview = useMemo(() => {
    if (!form.steps[7]?.photoFile || !(form.steps[7].photoFile instanceof File)) 
      return "";

    return URL.createObjectURL(form.steps[7].photoFile);
  }, [form.steps[7]?.photoFile]);
const maxVisible = 4; // Mobilde görünür adım sayısı
const totalSteps = 7;

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
    <h2 className="text-xl font-semibold">Kanada Vize Başvuru Formu Bilgi Fişi</h2>
    <p className="text-sm text-gray-500">
     Kanada vize başvuru formu bilgi fişi 6(altı) bölümden oluşmaktadır.
   
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

      {/* T.C. Kimlik No */}
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

      {/* Ad Soyad */}
      <div>
        <label className="text-sm font-medium">Ad Soyad</label>
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
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
      </div>

      {/* Cinsiyet */}
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

      {/* Doğum Tarihi */}
      <div>
        <label className="text-sm font-medium">Doğum Tarihi</label>
        <input
          type="date"
          name="birthDate"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.birthDate ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[1].birthDate || ""}
          onChange={(e) => updateField(1, "birthDate", e.target.value)}
        />
        {errors.birthDate && <p className="text-red-500 text-xs mt-1">{errors.birthDate}</p>}
      </div>

      {/* Doğum Yeri */}
      <div>
        <label className="text-sm font-medium">Doğum Yeri</label>
        <input
          name="birthPlace"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.birthPlace ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[1].birthPlace}
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
        {errors.birthPlace && <p className="text-red-500 text-xs mt-1">{errors.birthPlace}</p>}
      </div>

      {/* Telefon */}
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
        {errors.phone_number && <p className="text-red-500 text-xs mt-1">{errors.phone_number}</p>}
      </div>

      {/* E-mail */}
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
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Ev Adresi */}
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
        {errors.home_address && <p className="text-red-500 text-xs mt-1">{errors.home_address}</p>}
      </div>



      
    </div>
  </section>
)}



          {/* Step 2 */}
{/* Step 2 */}
{form.currentStep === 2 && (
  <section className="space-y-6">
    <h3 className="font-semibold mb-3 text-lg">2. Bölüm</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Medeni Durum */}
      <div>
        <label className="text-sm font-medium">Medeni Durum</label>
        <select
          name="maritalStatus"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.maritalStatus ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[2].maritalStatus || ""}
          onChange={(e) => updateField(2, "maritalStatus", e.target.value)}
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

      {/* Evlilik Tarihi */}
      {form.steps[2].maritalStatus === "EVLI" && (
        <div>
          <label className="text-sm font-medium">Evlilik Tarihi</label>
          <input
            type="date"
            name="marriageDate"
            className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
            value={form.steps[2].marriageDate || ""}
            onChange={(e) => updateField(2, "marriageDate", e.target.value)}
          />
        </div>
      )}

      {/* Eş Bilgileri */}
      {form.steps[2].maritalStatus === "EVLI" && (
        <>
          <div>
            <label className="text-sm font-medium">Eş Adı Soyadı</label>
            <input
              name="spouseFullName"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
              value={form.steps[2].spouseFullName || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(2, "spouseFullName", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(2, "spouseFullName", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(2, "spouseFullName", normalizedValue);
                }
            }}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Eş Doğum Tarihi</label>
            <input
              type="date"
              name="spouseBirthDate"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
              value={form.steps[2].spouseBirthDate || ""}
              onChange={(e) => updateField(2, "spouseBirthDate", e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Eş Doğum Yeri</label>
            <input
              name="spouseBirthPlace"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
              value={form.steps[2].spouseBirthPlace || ""}
                          onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(2, "spouseBirthPlace", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(2, "spouseBirthPlace", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(2, "spouseBirthPlace", normalizedValue);
                }
            }}
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Eş İkamet Adresi</label>
            <textarea
              name="spouseAddress"
              rows={2}
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
              value={form.steps[2].spouseAddress || ""}
                                      onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(2, "spouseAddress", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(2, "spouseAddress", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(2, "spouseAddress", normalizedValue);
                }
            }}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Eş Mesleği</label>
            <input
              name="spouseOccupation"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
              value={form.steps[2].spouseOccupation || ""}
                                           onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(2, "spouseOccupation", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(2, "spouseOccupation", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(2, "spouseOccupation", normalizedValue);
                }
            }}
            />
          </div>
        </>
      )}

      {/* Başka evlilik yaptınız mı? */}
      <div>
        <label className="text-sm font-medium">Başka evlilik yaptınız mı?</label>
        <select
          name="otherMarriages"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={form.steps[2].otherMarriages || ""}
          onChange={(e) => updateField(2, "otherMarriages", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">EVET</option>
          <option value="HAYIR">HAYIR</option>
        </select>
      </div>

      {/* Eski Eş Bilgileri */}
      {form.steps[2].otherMarriages === "EVET" && (
        <>
          <div>
            <label className="text-sm font-medium">Eski Eş Adı Soyadı</label>
            <input
              name="exSpouseFullName"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
              value={form.steps[2].exSpouseFullName || ""}
                                                onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(2, "exSpouseFullName", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(2, "exSpouseFullName", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(2, "exSpouseFullName", normalizedValue);
                }
            }}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Eski Eş Doğum Tarihi</label>
            <input
              type="date"
              name="exSpouseBirthDate"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
              value={form.steps[2].exSpouseBirthDate || ""}
              onChange={(e) => updateField(2, "exSpouseBirthDate", e.target.value)}
            />
          </div>
        </>
      )}

      {/* Çocuğunuz var mı? */}
      <div>
        <label className="text-sm font-medium">Çocuğunuz var mı?</label>
        <select
          name="childrenExist"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={form.steps[2].childrenExist || ""}
          onChange={(e) => updateField(2, "childrenExist", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">EVET</option>
          <option value="HAYIR">HAYIR</option>
        </select>
      </div>

      {/* Çocuk sayısı */}
      {form.steps[2].childrenExist === "EVET" && (
        <div>
          <label className="text-sm font-medium">Çocuk Sayısı</label>
          <input
            type="number"
            min={1}
            className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
            value={form.steps[2].childrenCount || ""}
            onChange={(e) => updateField(2, "childrenCount", Number(e.target.value))}
          />
        </div>
      )}

      {/* Çocuk Bilgileri */}
      {form.steps[2].childrenExist === "EVET" &&
        Array.from({ length: form.steps[2].childrenCount }).map((_, idx) => (
          <div key={idx} className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 border p-4 rounded-xl shadow-sm mt-4">
            <h4 className="col-span-2 font-semibold">Çocuk {idx + 1} Bilgileri</h4>

            <div>
              <label className="text-sm font-medium">Ad Soyad</label>
              <input
                className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
                value={form.steps[2].children[idx]?.fullName || ""}
               
                                                 onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateChildField(idx, "fullName", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateChildField(idx, "fullName", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateChildField(idx, "fullName", normalizedValue);
                }
            }}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Medeni Durumu</label>
              <input
                className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
                value={form.steps[2].children[idx]?.maritalStatus || ""}
                                                  onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateChildField(idx, "maritalStatus", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateChildField(idx, "maritalStatus", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateChildField(idx, "maritalStatus", normalizedValue);
                }
            }}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Doğum Yeri</label>
              <input
                className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
                value={form.steps[2].children[idx]?.birthPlace || ""}
                                             onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateChildField(idx, "birthPlace", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateChildField(idx, "birthPlace", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateChildField(idx, "birthPlace", normalizedValue);
                }
            }}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Doğum Tarihi</label>
              <input
                type="date"
                className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
                value={form.steps[2].children[idx]?.birthDate || ""}
                onChange={(e) => updateChildField(idx, "birthDate", e.target.value)}
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium">İkamet Adresi</label>
              <textarea
                rows={2}
                className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
                value={form.steps[2].children[idx]?.address || ""}
                                         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateChildField(idx, "address", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateChildField(idx, "address", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateChildField(idx, "address", normalizedValue);
                }
            }}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Mesleği</label>
              <input
                className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
                value={form.steps[2].children[idx]?.occupation || ""}
                                onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateChildField(idx, "occupation", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateChildField(idx, "occupation", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateChildField(idx, "occupation", normalizedValue);
                }
            }}
              />
            </div>
          </div>
        ))}

    </div>
  </section>
)}



{/* Step 3 */}
{form.currentStep === 3 && (
  <section className="space-y-6">
    <h3 className="font-semibold mb-3 text-lg">3. Bölüm</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Anne Bilgileri */}
      <h4 className="col-span-2 font-semibold">Anne Bilgileri</h4>
      <div>
        <label className="text-sm font-medium">Adı Soyadı</label>
        <input
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={form.steps[3].motherFullName || ""}
   onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "motherFullName", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "motherFullName", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "motherFullName", normalizedValue);
                }
            }}
        />
      </div>
      <div>
        <label className="text-sm font-medium">Medeni Durumu</label>
        <input
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={form.steps[3].motherMaritalStatus || ""}
         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "motherMaritalStatus", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "motherMaritalStatus", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "motherMaritalStatus", normalizedValue);
                }
            }}
        />
      </div>
      <div>
        <label className="text-sm font-medium">Doğum Yeri</label>
        <input
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={form.steps[3].motherBirthPlace || ""}
          onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "motherBirthPlace", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "motherBirthPlace", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "motherBirthPlace", normalizedValue);
                }
            }}
        />
      </div>
      <div>
        <label className="text-sm font-medium">Doğum Tarihi</label>
        <input
          type="date"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={form.steps[3].motherBirthDate || ""}
          onChange={(e) => updateField(3, "motherBirthDate", e.target.value)}
        />
      </div>
      <div className="md:col-span-2">
        <label className="text-sm font-medium">İkamet Adresi</label>
        <textarea
          rows={2}
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={form.steps[3].motherAddress || ""}
             onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "motherAddress", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "motherAddress", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(3, "motherAddress", normalizedValue);
                }
            }}
        />
      </div>
      <div>
        <label className="text-sm font-medium">Mesleği</label>
        <input
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={form.steps[3].motherOccupation || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "motherOccupation", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "motherOccupation", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "motherOccupation", normalizedValue);
                }
            }}
        />
      </div>

      {/* Baba Bilgileri */}
      <h4 className="col-span-2 font-semibold mt-6">Baba Bilgileri</h4>
      <div>
        <label className="text-sm font-medium">Adı Soyadı</label>
        <input
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={form.steps[3].fatherFullName || ""}
             onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "fatherFullName", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "fatherFullName", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "fatherFullName", normalizedValue);
                }
            }}
        />
      </div>
      <div>
        <label className="text-sm font-medium">Medeni Durumu</label>
        <input
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={form.steps[3].fatherMaritalStatus || ""}
            onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "fatherMaritalStatus", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "fatherMaritalStatus", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "fatherMaritalStatus", normalizedValue);
                }
            }}
        />
      </div>
      <div>
        <label className="text-sm font-medium">Doğum Yeri</label>
        <input
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={form.steps[3].fatherBirthPlace || ""}
            onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "fatherBirthPlace", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "fatherBirthPlace", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "fatherBirthPlace", normalizedValue);
                }
            }}
        />
      </div>
      <div>
        <label className="text-sm font-medium">Doğum Tarihi</label>
        <input
          type="date"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={form.steps[3].fatherBirthDate || ""}
          onChange={(e) => updateField(3, "fatherBirthDate", e.target.value)}
        />
      </div>
      <div className="md:col-span-2">
        <label className="text-sm font-medium">İkamet Adresi</label>
        <textarea
          rows={2}
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={form.steps[3].fatherAddress || ""}
             onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "fatherAddress", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "fatherAddress", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(3, "fatherAddress", normalizedValue);
                }
            }}
        />
      </div>
      <div>
        <label className="text-sm font-medium">Mesleği</label>
        <input
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={form.steps[3].fatherOccupation || ""}
                      onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "fatherOccupation", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "fatherOccupation", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "fatherOccupation", normalizedValue);
                }
            }}
        />
      </div>

      {/* Kardeş Sayısı */}
      <div className="md:col-span-2 mt-6">
        <label className="text-sm font-medium">Kardeş Sayısı</label>
        <input
          type="number"
          min={0}
          className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={form.steps[3].siblingsCount || 0}
          onChange={(e) => updateField(3, "siblingsCount", Number(e.target.value))}
        />
      </div>

      {/* Kardeş Bilgileri */}
      {Array.from({ length: form.steps[3].siblingsCount }).map((_, idx) => (
        <div key={idx} className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 border p-4 rounded-xl shadow-sm mt-4">
          <h4 className="col-span-2 font-semibold">Kardeş {idx + 1} Bilgileri</h4>

          <div>
            <label className="text-sm font-medium">Ad Soyad</label>
            <input
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
              value={form.steps[3].siblings[idx]?.fullName || ""}
            
                              onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateSiblingField(idx, "fullName", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateSiblingField(idx, "fullName", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateSiblingField(idx, "fullName", normalizedValue);
                }
            }}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Medeni Durumu</label>
            <input
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
              value={form.steps[3].siblings[idx]?.maritalStatus || ""}
                                 onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateSiblingField(idx, "maritalStatus", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateSiblingField(idx, "maritalStatus", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateSiblingField(idx, "maritalStatus", normalizedValue);
                }
            }}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Doğum Yeri</label>
            <input
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
              value={form.steps[3].siblings[idx]?.birthPlace || ""}
                                          onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateSiblingField(idx, "birthPlace", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateSiblingField(idx, "birthPlace", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateSiblingField(idx, "birthPlace", normalizedValue);
                }
            }}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Doğum Tarihi</label>
            <input
              type="date"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
              value={form.steps[3].siblings[idx]?.birthDate || ""}
              onChange={(e) => updateSiblingField(idx, "birthDate", e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium">İkamet Adresi</label>
            <textarea
              rows={2}
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
              value={form.steps[3].siblings[idx]?.address || ""}
                                                        onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateSiblingField(idx, "address", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateSiblingField(idx, "address", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateSiblingField(idx, "address", normalizedValue);
                }
            }}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Mesleği</label>
            <input
              className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
              value={form.steps[3].siblings[idx]?.occupation || ""}
                                                              onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateSiblingField(idx, "occupation", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateSiblingField(idx, "occupation", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateSiblingField(idx, "occupation", normalizedValue);
                }
            }}
            />
          </div>
        </div>
      ))}

    </div>
  </section>
)}





          {/* Step 4 */}
{form.currentStep === 4 && (
  <section >
    <h3 className="font-semibold mb-3 text-lg">4. Bölüm</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Ana Dil */}
      <div>
        <label className="text-sm font-medium">Ana Diliniz</label>
        <input
          name="nativeLanguage"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm"
          value={form.steps[4].nativeLanguage}
         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "nativeLanguage", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "nativeLanguage", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "nativeLanguage", normalizedValue);
                }
            }}
          placeholder="Örn: Türkçe"
        />
      </div>

      {/* İngilizce/Fransızca iletişim */}
      <div>
        <label className="text-sm font-medium">İngilizce/Fransızca iletişim kurabiliyor musunuz?</label>
        <select
          className="w-full mt-1 p-3 border rounded-xl shadow-sm"
          value={form.steps[4].canCommunicateInEnglishFrench}
          onChange={(e) => updateField(4, "canCommunicateInEnglishFrench", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="INGILIZCE">İngilizce</option>
          <option value="FRANSIZCA">Fransızca</option>
          <option value="HAYIR">Hayır</option>
        </select>
      </div>

      {/* Yeterlilik sınavına girdiniz mi */}
      <div>
        <label className="text-sm font-medium">Yeterlilik sınavına girdiniz mi?</label>
        <select
          className="w-full mt-1 p-3 border rounded-xl shadow-sm"
          value={form.steps[4].tookProficiencyExam}
          onChange={(e) => updateField(4, "tookProficiencyExam", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
      </div>
    </div>

    {/* Sınav ekleme alanı */}
    {form.steps[4].tookProficiencyExam === "EVET" && (
      <div className="mt-6">
        <h4 className="font-semibold text-md mb-3">Girdiğiniz Sınavlar</h4>

        {form.steps[4].exams.map((exam, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 border rounded-xl">

            <div>
              <label className="text-sm font-medium">Sınav Adı</label>
              <input
                className="w-full mt-1 p-3 border rounded-xl"
                value={exam.examName}
                onChange={(e) => {
                  const newExams = [...form.steps[4].exams];
                  newExams[index].examName = (e.target.value);
                  updateField(4, "exams", newExams);
                }}
                placeholder="Örn: TOEFL, IELTS"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Sınav Tarihi</label>
              <input
                type="date"
                className="w-full mt-1 p-3 border rounded-xl"
                value={exam.examDate}
                onChange={(e) => {
                  const newExams = [...form.steps[4].exams];
                  newExams[index].examDate = e.target.value;
                  updateField(4, "exams", newExams);
                }}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Skor</label>
              <input
                className="w-full mt-1 p-3 border rounded-xl"
                value={exam.score}
                onChange={(e) => {
                  const newExams = [...form.steps[4].exams];
                  newExams[index].score = e.target.value;
                  updateField(4, "exams", newExams);
                }}
                placeholder="Örn: 85, 6.5"
              />
            </div>

            {index > 0 && (
              <button
                type="button"
                onClick={() => removeExam(index)}
                className="text-red-600 text-sm mt-2 underline"
              >
                Sınavı Sil
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addExam}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow mt-2"
        >
          + Yeni Sınav Ekle
        </button>
      </div>
    )}

    {/* --- Eğitim Alanları --- */}
    <div className="mt-8">
      <label className="text-sm font-medium">Orta öğretim sonrası eğitim aldınız mı?</label>
      <select
        className="w-full mt-1 p-3 border rounded-xl shadow-sm"
        value={form.steps[4].postSecondaryEducation}
        onChange={(e) => updateField(4, "postSecondaryEducation", e.target.value)}
      >
        <option value="">Seçiniz</option>
        <option value="EVET">Evet</option>
        <option value="HAYIR">Hayır</option>
      </select>
    </div>

    {form.steps[4].postSecondaryEducation === "EVET" && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <label className="text-sm font-medium">Okul Adı</label>
          <input
            className="w-full mt-1 p-3 border rounded-xl"
            value={form.steps[4].schoolName}
                   onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "schoolName", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "schoolName", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "schoolName", normalizedValue);
                }
            }}
            placeholder="Üniversite adı"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Bölüm Adı</label>
          <input
            className="w-full mt-1 p-3 border rounded-xl"
            value={form.steps[4].programName}
                 onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "programName", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "programName", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "programName", normalizedValue);
                }
            }}
            placeholder="Örn: Bilgisayar Mühendisliği"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Şehir</label>
          <input
            className="w-full mt-1 p-3 border rounded-xl"
            value={form.steps[4].educationCity}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "educationCity", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "educationCity", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "educationCity", normalizedValue);
                }
            }}
          />
        </div>

        <div>
          <label className="text-sm font-medium">Ülke</label>
          <input
            className="w-full mt-1 p-3 border rounded-xl"
            value={form.steps[4].educationCountry}
                  onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "educationCountry", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "educationCountry", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "educationCountry", normalizedValue);
                }
            }}
          />
        </div>

        <div>
          <label className="text-sm font-medium">Başlangıç Tarihi</label>
          <input
            type="date"
            className="w-full mt-1 p-3 border rounded-xl"
            value={form.steps[4].educationStartDate}
            onChange={(e) => updateField(4, "educationStartDate", e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium">Mezuniyet Tarihi</label>
          <input
            type="date"
            className="w-full mt-1 p-3 border rounded-xl"
            value={form.steps[4].educationEndDate}
            onChange={(e) => updateField(4, "educationEndDate", e.target.value)}
          />
        </div>
      </div>
    )}

    {/* --- Askerlik Bilgileri --- */}
    <div className="mt-8">
      <label className="text-sm font-medium">Askerlik durumunuz</label>
      <select
        className="w-full mt-1 p-3 border rounded-xl shadow-sm"
        value={form.steps[4].boolean_military}
        onChange={(e) => updateField(4, "boolean_military", e.target.value)}
      >
        <option value="">Seçiniz</option>
        <option value="YAPTI">Yaptı</option>
        <option value="YAPMADI">Yapmadı</option>
        <option value="MUAF">MUAF</option>

      </select>
    </div>

    {form.steps[4].boolean_military === "YAPTI" && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <label className="text-sm font-medium">Askerlik Şehri</label>
          <input
            className="w-full mt-1 p-3 border rounded-xl"
            value={form.steps[4].military_city}
                onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "military_city", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "military_city", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "military_city", normalizedValue);
                }
            }}
          />
        </div>

        <div>
          <label className="text-sm font-medium">Başlangıç Tarihi</label>
          <input
            type="date"
            className="w-full mt-1 p-3 border rounded-xl"
            value={form.steps[4].military_start_date}
            onChange={(e) => updateField(4, "military_start_date", e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium">Bitiş Tarihi</label>
          <input
            type="date"
            className="w-full mt-1 p-3 border rounded-xl"
            value={form.steps[4].military_end_date}
            onChange={(e) => updateField(4, "military_end_date", e.target.value)}
          />
        </div>
      </div>
    )}
  </section>
)}







          {/* Step 5 */}
{form.currentStep === 5 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">5. Bölüm — Çalışma Bilgileri</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Çalışma Durumu */}
      <div>
        <label className="text-sm font-medium">Çalışma Durumu *</label>
        <select
          name="employmentStatus"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[5].employmentStatus || ""}
          onChange={(e) => updateField(5, "employmentStatus", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="ÇALIŞIYOR">Çalışıyor</option>
          <option value="ÇALIŞMIYOR">Çalışmıyor</option>
          <option value="ÖĞRENCİ">Öğrenci</option>
          <option value="EMEKLİ">Emekli</option>
        </select>
      </div>

      {/* Şirket Adı */}
      <div>
        <label className="text-sm font-medium">Şu an Çalıştığınız Şirket</label>
        <input
          name="currentCompanyName"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[5].currentCompanyName || ""}
                  onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "currentCompanyName", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "currentCompanyName", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(5, "currentCompanyName", normalizedValue);
                }
            }}
          placeholder="Şirket Adı"
        />
      </div>

      {/* İşe Giriş Tarihi */}
      <div>
        <label className="text-sm font-medium">İşe Giriş Tarihi</label>
        <input
          type="date"
          name="currentJobStartDate"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[5].currentJobStartDate || ""}
          onChange={(e) => updateField(5, "currentJobStartDate", e.target.value)}
        />
      </div>

      {/* Pozisyon */}
      <div>
        <label className="text-sm font-medium">Pozisyon</label>
        <input
          name="currentPosition"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[5].currentPosition || ""}
                 onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "currentPosition", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "currentPosition", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(5, "currentPosition", normalizedValue);
                }
            }}
          placeholder="Örn: Yazılım Geliştirici"
        />
      </div>

      {/* Çalışılan Şehir */}
      <div>
        <label className="text-sm font-medium">Çalıştığınız Şehir</label>
        <input
          name="currentWorkCity"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[5].currentWorkCity || ""}
                   onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "currentWorkCity", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "currentWorkCity", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(5, "currentWorkCity", normalizedValue);
                }
            }}
        />
      </div>

      {/* Çalışılan Ülke */}
      <div>
        <label className="text-sm font-medium">Çalıştığınız Ülke</label>
        <input
          name="currentWorkCountry"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[5].currentWorkCountry || ""}
                         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "currentWorkCountry", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "currentWorkCountry", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(5, "currentWorkCountry", normalizedValue);
                }
            }}
        />
      </div>

    </div>

    {/* ---------------- SON 10 YIL İŞ TECRÜBELERİ DİNAMİK ---------------- */}
    <div className="mt-10">
      <h4 className="font-semibold text-md mb-2">Son 10 Yıldaki İş Deneyimleriniz</h4>

      {form.steps[5].last10YearsWorkExperience.map((exp, index) => (
        <div key={index} className="border p-4 rounded-xl mb-4 bg-gray-50">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="text-sm font-medium">Şirket Adı</label>
              <input
                className="w-full mt-1 p-3 border rounded-xl"
                value={exp.companyName}
               
                                         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateArrayField(5, "last10YearsWorkExperience",index, "companyName",);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateArrayField(5, "last10YearsWorkExperience",index, "companyName",normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateArrayField(5, "last10YearsWorkExperience",index, "companyName", normalizedValue);
                }
            }}
                placeholder="Şirket"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Pozisyon</label>
              <input
                className="w-full mt-1 p-3 border rounded-xl"
                value={exp.position}
             
                
                                         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateArrayField(5, "last10YearsWorkExperience",index, "position",);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateArrayField(5, "last10YearsWorkExperience",index, "position",normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateArrayField(5, "last10YearsWorkExperience",index, "position", normalizedValue);
                }
            }}
                placeholder="Pozisyon"
              />
            </div>

            <div>
              <label className="text-sm font-medium">İşe Giriş Tarihi</label>
              <input
                type="date"
                className="w-full mt-1 p-3 border rounded-xl"
                value={exp.startDate}
                onChange={(e) =>
                  updateArrayField(5, "last10YearsWorkExperience", index, "startDate", e.target.value)
                }
              />
            </div>

            <div>
              <label className="text-sm font-medium">İşten Çıkış Tarihi</label>
              <input
                type="date"
                className="w-full mt-1 p-3 border rounded-xl"
                value={exp.endDate}
                onChange={(e) =>
                  updateArrayField(5, "last10YearsWorkExperience", index, "endDate", e.target.value)
                }
              />
            </div>

            <div>
              <label className="text-sm font-medium">Şehir</label>
              <input
                className="w-full mt-1 p-3 border rounded-xl"
                value={exp.city}
          

     onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateArrayField(5, "last10YearsWorkExperience",index, "city",);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateArrayField(5, "last10YearsWorkExperience",index, "city",normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateArrayField(5, "last10YearsWorkExperience",index, "city", normalizedValue);
                }
            }}


                placeholder="Örn: Ankara"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Ülke</label>
              <input
                className="w-full mt-1 p-3 border rounded-xl"
                value={exp.country}
       
                 onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateArrayField(5, "last10YearsWorkExperience",index, "country",);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateArrayField(5, "last10YearsWorkExperience",index, "country",normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateArrayField(5, "last10YearsWorkExperience",index, "country", normalizedValue);
                }
            }}
                placeholder="Örn: Türkiye"
              />
            </div>

          </div>

          {/* Silme Butonu */}
          {index > 0 && (
            <button
              type="button"
              className="mt-3 text-red-600 text-sm underline"
              onClick={() => removeArrayItem(5, "last10YearsWorkExperience", index)}
            >
              Bu Deneyimi Sil
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl shadow"
        onClick={() =>
          addArrayItem(5, "last10YearsWorkExperience", {
            companyName: "",
            position: "",
            startDate: "",
            endDate: "",
            city: "",
            country: ""
          })
        }
      >
        + Yeni İş Deneyimi Ekle
      </button>
    </div>
  </section>
)}

{form.currentStep === 6 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">6. Bölüm — Vize Geçmişi & Seyahatler</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Önceki Vize Reddi */}
      <div>
        <label className="text-sm font-medium">
          Kanada veya başka bir ülke için vize reddi yaşadınız mı? *
        </label>
        <select
          name="previousVisaRefusal"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[6].previousVisaRefusal || ""}
          onChange={(e) => updateField(6, "previousVisaRefusal", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
      </div>

      {/* Reddedildi ise nedeni */}
      {form.steps[6].previousVisaRefusal === "EVET" && (
        <div className="md:col-span-2">
          <label className="text-sm font-medium">Vize reddi nedeni *</label>
          <textarea
            className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none"
            rows={3}
            value={form.steps[6].refusalReason || ""}
           onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(6, "refusalReason", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(6, "refusalReason", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(6, "refusalReason", normalizedValue);
                }
            }}
            placeholder="Reddedilme nedeni"
          />
        </div>
      )}

      {/* Daha önce Kanada'ya başvuru yapıldı mı? */}
      <div>
        <label className="text-sm font-medium">
          Daha önce Kanada’ya giriş yapmak için başvurdunuz mu? *
        </label>
        <select
          name="previousCanadaApplication"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[6].previousCanadaApplication || ""}
          onChange={(e) =>
            updateField(6, "previousCanadaApplication", e.target.value)
          }
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
      </div>

    </div>

    {/* -------------------------------------------------- */}
    {/* SON 5 YIL SEYAHATLER — DİNAMİK DİZİ */}
    {/* -------------------------------------------------- */}
    <div className="mt-10">
      <h4 className="font-semibold text-md mb-3">Son 5 Yılda Yaptığınız Seyahatler</h4>

      {form.steps[6].last5YearsTravel.map((item, index) => (
        <div key={index} className="border p-4 rounded-xl bg-gray-50 mb-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Ülke */}
            <div>
              <label className="text-sm font-medium">Ülke *</label>
              <input
                className="w-full mt-1 p-3 border rounded-xl"
                value={item.country}
                placeholder="Örn: Almanya"
             
                  onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateArrayField(6, "last5YearsTravel",index, "country",);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateArrayField(6, "last5YearsTravel",index, "country",normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateArrayField(6, "last5YearsTravel",index, "country", normalizedValue);
                }
            }}

              />
            </div>

            {/* Gidiş */}
            <div>
              <label className="text-sm font-medium">Gidiş Tarihi *</label>
              <input
                type="date"
                className="w-full mt-1 p-3 border rounded-xl"
                value={item.travelStartDate}
                onChange={(e) =>
                  updateArrayField(6, "last5YearsTravel", index, "travelStartDate", e.target.value)
                }
              />
            </div>

            {/* Dönüş */}
            <div>
              <label className="text-sm font-medium">Dönüş Tarihi *</label>
              <input
                type="date"
                className="w-full mt-1 p-3 border rounded-xl"
                value={item.travelEndDate}
                onChange={(e) =>
                  updateArrayField(6, "last5YearsTravel", index, "travelEndDate", e.target.value)
                }
              />
            </div>

            {/* Amaç */}
            <div>
              <label className="text-sm font-medium">Seyahat Amacı *</label>
              <input
                className="w-full mt-1 p-3 border rounded-xl"
                placeholder="Örn: Turistik, İş, Aile ziyareti..."
                value={item.travelPurpose}
        
                 onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateArrayField(6, "last5YearsTravel",index, "travelPurpose",);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateArrayField(6, "last5YearsTravel",index, "travelPurpose",normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateArrayField(6, "last5YearsTravel",index, "travelPurpose", normalizedValue);
                }
            }}
              />
            </div>

          </div>

          {/* Silme Butonu */}
          {index > 0 && (
            <button
              type="button"
              className="mt-3 text-red-600 text-sm underline"
              onClick={() =>
                removeArrayItem(6, "last5YearsTravel", index)
              }
            >
              Bu Seyahati Sil
            </button>
          )}
        </div>
      ))}

      {/* Yeni Seyahat Ekle */}
      <button
        type="button"
        className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow"
        onClick={() =>
          addArrayItem(6, "last5YearsTravel", {
            country: "",
            travelStartDate: "",
            travelEndDate: "",
            travelPurpose: ""
          })
        }
      >
        + Yeni Seyahat Ekle
      </button>
    </div>
  </section>
)}


{form.currentStep === 7 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">7. Bölüm</h3>

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
          {!form.steps[7].passportFile ? (
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
                  updateFileField(7, "passportFile", null);
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
            onChange={(e) => updateFileField(7, "passportFile", e.target.files[0])}
          />
        </div>

        {form.steps[7].passportFile && (
          <p className="mt-2 text-sm text-gray-600 truncate w-48 md:w-60 text-center">
            {form.steps[7].passportFile.name}
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
          {!form.steps[7].photoFile ? (
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
                  updateFileField(7, "photoFile", null);
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
            onChange={(e) => updateFileField(7, "photoFile", e.target.files[0])}
          />
        </div>

        {form.steps[7].photoFile && (
          <p className="mt-2 text-sm text-gray-600 truncate w-48 md:w-60 text-center">
            {form.steps[7].photoFile.name}
          </p>
        )}
      </div>
    </div>
  </section>
)}

          {/* Navigation */}
<div className="flex items-center justify-between mt-6">
  {form.currentStep < 7 && (
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

  {form.currentStep === 7 && validateStep(7, form) && (
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

