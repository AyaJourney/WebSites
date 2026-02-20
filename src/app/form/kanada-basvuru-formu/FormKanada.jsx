"use client";
import AydinlatmaFormu from "@/app/components/modals/AydinlatmaFormu";
import Link from "next/link";
import React, { useEffect, useState, useMemo } from "react";
import { FaTrashAlt } from "react-icons/fa"; 
import { languages_option } from "@/helper/help";
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
      home_city: "",
      home_district: "",
      home_neighborhood: "",
      home_street: "",
      home_avenue: "",
      home_building_no: "",
      home_apartment_no: "",
      home_address: "", 
      previousSurname:"",
      tcEndDate:"",   // Residential Address zorunlu
    },
2: {
  maritalStatus: "",        // BEKAR | EVLI | DUL | BOSANMIS

  // ✅ Mevcut evlilik (SADECE EVLI ise kullanılır)
  marriageDate: "",
  spouseFullName: "",
  spouseBirthDate: "",
  spouseBirthPlace: "",
  spouseAddress: "",
  spouseOccupation: "",

  // ✅ Geçmiş evlilik kontrolü (EVLI ise sorulur)
  otherMarriages: "",       // EVET | HAYIR

  // ✅ TÜM ESKİ EVLİLİKLER (DUL / BOSANMIS / EVET)
  marriages: [
    {
      spouseFullName: "",
      spouseBirthDate: "",
      marriageStartDate: "",
      marriageEndDate: ""
    }
  ],

  // ✅ Çocuklar (her medeni durumda olabilir)
  childrenExist: "",
  childrenCount: 0,
  children: [
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
      educationEndDate: "", // Mezuniyet tarihi
      boolean_military: "",
      military_city: "",
      military_start_date: "",
      military_end_date: ""
    },

5: {
  employmentStatus: "",
  currentCompanyName: "",
  currentJobStartDate: "",
  currentPosition: "",
  currentWorkCity: "",
  currentWorkCountry: "",
  retirementDate:"",

  last10YearsWorkExperience: [
    {
      companyName: "",
      position: "",
      startDate: "",
      endDate: "",
      city: "",
      country: ""
    }
  ]
},

    6: {
      previousVisaRefusal: "",        // Kanada veya başka bir ülke için vize reddi yaşadınız mı? (EVET/HAYIR) zorunlu
      refusalReason: "",              // Reddedildiyse nedeni
      previousCanadaApplication: "",
      travelStartDate:"",
      travelEndDate:"",
      travelAddress:"",
      totalMoney:"",  

                          
                                  // Daha önce Kanada'ya giriş yapmak için başvurdunuz mu? (EVET/HAYIR) zorunlu
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

function clearLocalStorage() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_METHOD_KEY);
  } catch (e) {
    // sessiz geç
  }
}


export default function FormKanada() {
  const [isMobile, setIsMobile] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [resMessage, setResMessage] = useState(false)
  const [form, setForm] = useState(defaultForm);
  const [storageMethod, setStorageMethod] = useState("local"); // "local" or "cookie"
  const [statusMessage, setStatusMessage] = useState("");
  const [kvkkConsent, setKvkkConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
 const today = new Date().toISOString().split("T")[0];

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
        type: "canada"
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
      duplex: "half",
    });
 if(res.ok){
  // clearLocalStorage()
  setResMessage(true)
 setForm(prev => ({
  ...prev,
  currentStep: 8
}));


}else {
 setResMessage(false)
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
      loaded = readFromLocal();
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
    1: ["tcId","tcEndDate", "fullName", "gender", "birthDate", "birthPlace", "email", "phone_number","home_city","home_district","home_neighborhood","home_building_no","home_apartment_no","post_code"],
    2: ["maritalStatus","childrenExist"],  // Evlilik tarihi ve eş bilgileri opsiyonel olabilir
    3: [
      "motherFullName", "motherMaritalStatus", "motherBirthPlace", "motherBirthDate",
      "fatherFullName", "fatherMaritalStatus", "fatherBirthPlace", "fatherBirthDate", 
      "siblingsCount","motherAddress","motherOccupation","fatherAddress","fatherOccupation","siblingsCount"
    ],
    4: ["nativeLanguage", "canCommunicateInEnglishFrench","tookProficiencyExam","postSecondaryEducation"],
    5: ["employmentStatus"],
    6: ["previousVisaRefusal", "previousCanadaApplication","travelStartDate","travelEndDate","travelAddress","totalMoney"],
    7: []  // Dosyalar opsiyonel olabilir, ya da zorunlu yapmak istersen ["passportFile", "photoFile"] ekleyebilirsin
  };




const validateStep = (step, formData) => {

  const stepData = formData.steps?.[step] || {};
  let fields = [...(requiredFields[step] || [])];

  const addField = (name) => {
    if (!fields.includes(name)) fields.push(name);
  };

  const isEmpty = (val) => {
    if (val === undefined || val === null) return true;
    if (typeof val === "string" && val.trim() === "") return true;
    return false;
  };

  // ================= STEP 1 =================
  if (step === 2) {

    if (stepData.maritalStatus === "EVLI") {
      addField("marriageDate");
      addField("spouseFullName");
      addField("spouseBirthDate");
      addField("spouseBirthPlace");
      addField("spouseOccupation");
      addField("spouseAddress");
      addField("otherMarriages");
    }

 const mustHaveMarriage =
    stepData?.otherMarriages === "EVET" ||
    ["DUL", "BOSANMIS"].includes(stepData?.maritalStatus);

  if (mustHaveMarriage) {

    const marriages = stepData?.marriages || [];

    if (!marriages.length) {
      addField("marriages_empty");
    }

    marriages.forEach((m, index) => {

      if (isEmpty(m.spouseFullName)) {
        addField(`marriage_spouseFullName_${index}`);
      }

      if (isEmpty(m.spouseBirthDate)) {
        addField(`marriage_spouseBirthDate_${index}`);
      }

      if (isEmpty(m.marriageStartDate)) {
        addField(`marriage_marriageStartDate_${index}`);
      }

      if (isEmpty(m.marriageEndDate)) {
        addField(`marriage_marriageEndDate_${index}`);
      }

    });

  }
  if (stepData?.childrenExist === "EVET") {

    const count = Number(stepData?.childrenCount);

    if (!count || count < 1) {
      addField("childrenCount");
    }

    const children = stepData?.children || [];

    children.forEach((child, index) => {

      if (isEmpty(child.fullName)) {
        addField(`child_fullName_${index}`);
      }

      if (isEmpty(child.maritalStatus)) {
        addField(`child_maritalStatus_${index}`);
      }

      if (isEmpty(child.birthPlace)) {
        addField(`child_birthPlace_${index}`);
      }

      if (isEmpty(child.birthDate)) {
        addField(`child_birthDate_${index}`);
      }

      if (isEmpty(child.address)) {
        addField(`child_address_${index}`);
      }

      if (isEmpty(child.occupation)) {
        addField(`child_occupation_${index}`);
      }

    });
  }

  }
if (step === 4) {

  const stepData = formData.steps[4];

  addField("tookProficiencyExam");

  if (stepData?.tookProficiencyExam === "EVET") {

    const exams = stepData?.exams || [];

    // En az 1 sınav olmalı
    if (!exams.length) {
      addField("exams_empty");
    }

    exams.forEach((exam, index) => {

      if (isEmpty(exam.examName)) {
        addField(`exam_examName_${index}`);
      }

      if (isEmpty(exam.examDate)) {
        addField(`exam_examDate_${index}`);
      }

      if (isEmpty(exam.score)) {
        addField(`exam_score_${index}`);
      }

    });
  }

  if(stepData.postSecondaryEducation === "EVET"){
    addField("schoolName")
    addField("programName")
    addField("educationCity")
    addField("educationCountry")
    addField("educationStartDate")
    addField("educationEndDate")

  }

   const gender = formData.steps[1]?.gender;


  if (gender === "ERKEK") {

    addField("boolean_military");
    



    // Eğer OTHER adres seçilmişse
    if (stepData?.boolean_military === "YAPTI") {
      addField("military_city");
      addField("military_start_date");
      addField("military_end_date");
   
    }
  }


}

if(step === 5){
   if (stepData.employmentStatus === "CALISIYOR") {
      addField("currentCompanyName");
      addField("currentPosition");
      addField("currentJobStartDate");
      addField("currentWorkCity");
      addField("currentWorkCountry");
  
    }
       if (stepData.employmentStatus === "OGRENCI") {
      addField("currentCompanyName");
     
      addField("currentJobStartDate");
      addField("currentWorkCity");
      addField("currentWorkCountry");
  
    }
           if (stepData.employmentStatus === "EMEKLI") {
      addField("currentCompanyName");
      addField("currentPosition");
      addField("retirementDate");
      addField("currentWorkCity");
      addField("currentWorkCountry");
  
    }
  //    const status = stepData?.employmentStatus;

  // const requiresExperience =
  //   ["CALISIYOR", "CALISMIYOR", "EMEKLI"].includes(status);

  // if (requiresExperience) {

  //   const experiences = stepData?.last10YearsWorkExperience || [];

  //   if (!experiences.length) {
  //     addField("last10YearsWorkExperience_empty");
  //   }

  //   experiences.forEach((exp, index) => {

  //     if (isEmpty(exp.companyName)) {
  //       addField(`work_companyName_${index}`);
  //     }

  //     if (isEmpty(exp.position)) {
  //       addField(`work_position_${index}`);
  //     }

  //     if (isEmpty(exp.startDate)) {
  //       addField(`work_startDate_${index}`);
  //     }

  //     if (isEmpty(exp.endDate)) {
  //       addField(`work_endDate_${index}`);
  //     }

  //     if (isEmpty(exp.city)) {
  //       addField(`work_city_${index}`);
  //     }

  //     if (isEmpty(exp.country)) {
  //       addField(`work_country_${index}`);
  //     }

  //     // Tarih kontrolü
  //     if (exp.startDate && exp.endDate) {
  //       if (new Date(exp.endDate) < new Date(exp.startDate)) {
  //         addField(`work_date_invalid_${index}`);
  //       }
  //     }

  //   });
  // }
}
if(step ===  6){
  if (stepData.previousVisaRefusal === "EVET") {
      addField("refusalReason");
    }
}

  // ================= FINAL MISSING CHECK =================

  const missing = fields.filter(field => {
    if (field.startsWith("work_")) {

  const parts = field.split("_");
  const key = parts[1];
  const index = parts[2];

  return isEmpty(
    stepData?.last10YearsWorkExperience?.[index]?.[key]
  );
}
    if (field.startsWith("exam_")) {
  const parts = field.split("_");
  const key = parts[1];
  const index = parts[2];

  return isEmpty(stepData?.exams?.[index]?.[key]);
}
    if (field.startsWith("child_")) {
  const parts = field.split("_");
  const key = parts[1];
  const index = parts[2];

  return isEmpty(stepData?.children?.[index]?.[key]);
}
if (field.startsWith("marriage_")) {
  const parts = field.split("_");
  const key = parts[1];
  const index = parts[2];

  return isEmpty(stepData?.marriages?.[index]?.[key]);
}
    // NORMAL FIELD
    return isEmpty(stepData[field]);
  });

  return { valid: missing.length === 0, missing };
};

const goNext = () => {
  const { valid, missing = [] } = validateStep(form.currentStep, form);
  const step = form.currentStep;

  let newErrors = { ...errors };
  let hasInlineError = false;

  // -------------------------------
  // 🟥 2. ADIM — PASAPORT TARİHLERİ
  // -------------------------------
  if (step === 2) {
    const start = form.steps[2].Passport_start_date;
    const end = form.steps[2].Passport_end_date;

    if (start && end) {
      if (new Date(end) < new Date(start)) {
        newErrors.Passport_end_date = "Pasaport bitiş tarihi verilişten önce olamaz";
        hasInlineError = true;
      }
    }
  }

  // -------------------------------
  // 🟥 5. ADIM — SEYAHAT TARİHLERİ + PARMAK İZİ
  // -------------------------------
  if (step === 5) {
    const start = form.steps[5].travel_start_date;
    const end = form.steps[5].travel_end_date;
    const fpStatus = form.steps[5].fingerprint_taken;
    const fpDate = form.steps[5].fingerprint_taken_date;
const fpDateDetail= new Date(form.steps[5].fingerprint_taken_date)
    const today = new Date();
    today.setHours(0,0,0,0);
fpDateDetail.setHours(0,0,0,0);
    // 1) Seyahat başlangıcı bugünden önce olamaz
    if (start && new Date(start) < today) {
      newErrors.travel_start_date = "Seyahat başlangıç tarihi bugünden önce olamaz";
      hasInlineError = true;
    }

    // 2) Seyahat bitiş tarihi başlangıçtan önce olamaz
    if (start && end && new Date(end) < new Date(start)) {
      newErrors.travel_end_date = "Seyahat bitiş tarihi başlangıçtan önce olamaz";
      hasInlineError = true;
    }

    // 3) PARMAK İZİ KONTROLÜ
    if (fpStatus === "EVET") {

      // a) tarih boşsa hata
      if (!fpDate) {
        newErrors.fingerprint_taken_date = "Parmak izi alınma tarihi zorunludur";
        hasInlineError = true;
      }

      // b) tarih dolu ama bugünden sonra ise hata
      else if (fpDateDetail > today) {
        newErrors.fingerprint_taken_date = "Parmak izi alınma tarihi bugünden sonra olamaz";
        hasInlineError = true;
      }
    }
  }

  // -------------------------------
  // REQUIRED alanları ekle
  // -------------------------------
  if (!valid) {
    missing.forEach(field => {
      newErrors[field] = "Bu alan zorunludur";
    });
  }

  // -------------------------------
  // HATA VARSA İLERLEME
  // -------------------------------
  if (!valid || hasInlineError) {
    setErrors(newErrors);
    return;
  }

  // -------------------------------
  // HATA YOK → SONRAKİ STEP
  // -------------------------------
  setErrors({});
  setForm(prev => ({
    ...prev,
    currentStep: prev.currentStep + 1
  }));
};




  const goPrev = () => {
    setForm((prev) => {
      const prevStep = Math.max(1, prev.currentStep - 1);
      return { ...prev, currentStep: prevStep };
    });
  };

  const jumpTo = (step) => {
    
     if (Object.keys(errors).length === 0) {
    setForm((prev) => ({ ...prev, currentStep: step }));
}

  };

  const updateField = (step, field, value) => {
    setForm((prev) => {
      const updatedSteps = {
        ...prev.steps,
        [step]: {
          ...prev.steps[step],
          [field]: value,
        },
      };


      if (step === 1) {
        const s = updatedSteps[1];

        const mahalle = normalizeWithSuffix(s.home_neighborhood, "MAHALLESI");
        const cadde = normalizeWithSuffix(s.home_street, "CADDE");
        const sokak = normalizeWithSuffix(s.home_avenue, "SOKAK");

        const binaNo = s.home_building_no
          ? `APT NO: ${normalizeAddressPart(s.home_building_no)}`
          : "";

        const daireNo = s.home_apartment_no
          ? `DAIRE NO: ${normalizeAddressPart(s.home_apartment_no)}`
          : "";

        const ilce = s.home_district
          ? normalizeAddressPart(s.home_district)
          : "";

        const il = s.home_city
          ? normalizeAddressPart(s.home_city)
          : "";

        const addressParts = [
          mahalle,
          cadde,
          sokak,
          binaNo,
          daireNo,
          ilce,
          il,
        ].filter(Boolean);

        updatedSteps[1].home_address = addressParts.join(" ");
      }


      return { ...prev, steps: updatedSteps };
    });
  };
  const normalizeAddressPart = (value) => {
    if (!value) return "";

    let v = value.trim().toUpperCase();

    // Türkçe karakter düzeltme
    const map = { "Ç": "C", "Ö": "O", "Ş": "S", "İ": "I", "I": "I", "Ğ": "G", "Ü": "U" };
    v = v.replace(/[ÇÖŞİIĞÜ]/g, (m) => map[m]);

    // Fazla boşlukları temizle
    v = v.replace(/\s+/g, " ");

    return v;
  };

  // Mahalle - Cadde - Sokak için suffix üretici
  const normalizeWithSuffix = (value, suffix) => {
    if (!value) return "";

    value = normalizeAddressPart(value);

    // --- Mahalle için temizleme ---
    if (suffix === "MAHALLESI") {
      value = value?.replace(/\b(MAH|MAH\.|MH|MH\.|MAHALE|MAHALLE|MAHALLESI)\b/gi, "");
    }

    // --- Cadde için temizleme ---
    if (suffix === "CADDE") {
      value = value?.replace(/\b(CD|CAD|CAD\.|CADDE|CADDES|CADDESII|CADDESI)\b/gi, "");
    }

    // --- Sokak için temizleme ---
    if (suffix === "SOKAK") {
      value = value?.replace(/\b(SK|SOK|SOK\.|SOKA|SOKAK|SOKAGI)\b/gi, "");
    }

    value = value?.trim();

    return `${value} ${suffix}`.trim();
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

    let text = value?.replace(/[çÇğĞıİöÖşŞüÜ]/g, (match) => map[match]);

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
  if (value === null || value === undefined) return "";

  // Her şeyi string'e çevir (kritik nokta)
  const stringValue = String(value);

  const map = {
    ç: "c", Ç: "C",
    ğ: "g", Ğ: "G",
    ı: "I", İ: "I",
    ö: "o", Ö: "O",
    ş: "s", Ş: "S",
    ü: "u", Ü: "U",
  };

  const replaced = stringValue.replace(
    /[çÇğĞıİöÖşŞüÜ]/g,
    (match) => map[match]
  );

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
    end = start + maxVisible - 1;
  }

  const visibleSteps = Array.from({ length: end - start + 1 }, (_, i) => start + i);
 
 // Evlilik ekle
const addMarriage = () => {
  updateField(2, "marriages", [
    ...(form?.steps[2]?.marriages || []),
    {
      spouseFullName: "",
      spouseBirthDate: "",
      marriageStartDate: "",
      marriageEndDate: ""
    }
  ]);
};

const updateMarriageField = (i, field, value) => {
  const list = [...form.steps[2].marriages];
  list[i][field] = value;
  updateField(2, "marriages", list);
};

const removeMarriage = (index) => {
  setForm((prev) => {
    const updated = { ...prev };

    if (updated.steps[2].marriages.length <= 1) {
      return updated; // en az 1 evlilik kalsın
    }

    updated.steps[2].marriages = updated.steps[2].marriages.filter(
      (_, i) => i !== index
    );

    return updated;
  });
};

 
 
 console.log(form)
 
 
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
             {form?.currentStep < 8 && (          <div className="mb-6">
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
    {[1,2,3,4,5,6,7].map((s, i, arr) => {
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

</div>)}

        {/* Title like A4 form header */}
     {form.currentStep < 8 && (
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
              Kanada vize başvuru formu 7(Yedi) bölümden oluşmaktadır.

            </p>
            <p className="text-sm text-gray-500">

              Lütfen bilgilerinizi dikkatli doldurunuz.

            </p>
          </div>
        </div>
     )}  

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
                    value={form.steps[1].tcId || ""}
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
                    value={form.steps[1].fullName || ""}
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
                    max={new Date().toISOString().split("T")[0]}
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
                  {errors.birthPlace && <p className="text-red-500 text-xs mt-1">{errors.birthPlace}</p>}
                </div>
       <div>
                  <label className="text-sm font-medium">TC Kimlik Kartı Son Geçerlilik Tarihi</label>
                  <input
                    type="date"
                    name="tcEndDate"
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.tcEndDate ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
                    value={form.steps[1].tcEndDate || ""}
                    onChange={(e) => updateField(1, "tcEndDate", e.target.value)}
                  />
                  {errors.tcEndDate && <p className="text-red-500 text-xs mt-1">{errors.tcEndDate}</p>}
                </div>
                {/* Telefon */}
                <div>
                  <label className="text-sm font-medium">Telefon Numarası</label>
                  <input
                    name="phone_number"
                    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.phone_number ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
                    value={form.steps[1].phone_number || ""}
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
                    value={form.steps[1].email || ""}
                    onChange={(e) => updateField(1, "email", e.target.value)}
                    placeholder="ornek@mail.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Ev Adresi */}
     <div>
  <label className="text-sm font-medium">Önceki Adı veya Soyadı (Varsa)</label>
  <input
    name="previousSurname"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.previousSurname ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[1].previousSurname || ""}
    onChange={(e) => {
      if (isMobile) {
        updateField(1, "previousSurname", e.target.value);
      } else {
        updateField(1, "previousSurname", normalizeInput(e.target.value));
      }
    }}
    onBlur={(e) => {
      if (isMobile) {
        updateField(1, "previousSurname", normalizeInput(e.target.value));
      }
    }}
    placeholder="ÖRN: PARLAK"
  />
  {errors.previousSurname && (
    <p className="text-red-500 text-xs mt-1">{errors.previousSurname}</p>
  )}
</div>

  





              </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  {/* İl */}
  <div>
    <label className="text-sm font-medium">İl *</label>
    <input
      name="home_city"
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.home_city ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
     
      value={form.steps[1].home_city || ""}
                      onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "home_city", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "home_city", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(1, "home_city", normalizedValue);
                }
            }}
      placeholder="Örn: İstanbul"
    />
    {errors.home_city && (
      <p className="text-red-500 text-xs mt-1">{errors.home_city}</p>
    )}
  </div>

  {/* İlçe */}
  <div>
    <label className="text-sm font-medium">İlçe *</label>
    <input
      name="home_district"
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.home_district ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      value={form.steps[1].home_district || ""}
                         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "home_district", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "home_district", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(1, "home_district", normalizedValue);
                }
            }}
      placeholder="Örn: Kadıköy"
    />
    {errors.home_district && (
      <p className="text-red-500 text-xs mt-1">{errors.home_district}</p>
    )}
  </div>

  {/* Mahalle */}
  <div>
    <label className="text-sm font-medium">Mahalle *</label>
    <input
      name="home_neighborhood"
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.home_neighborhood ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      value={form.steps[1].home_neighborhood || ""}
                         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "home_neighborhood", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "home_neighborhood", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(1, "home_neighborhood", normalizedValue);
                }
            }}
      placeholder="Örn: Kanuni Mah."
    />
    {errors.home_neighborhood && (
      <p className="text-red-500 text-xs mt-1">{errors.home_neighborhood}</p>
    )}
  </div>

  {/* Cadde */}
  <div>
    <label className="text-sm font-medium">Cadde </label>
    <input
      name="home_street"
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.home_street ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      value={form.steps[1].home_street || ""}
                         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "home_street", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "home_street", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(1, "home_street", normalizedValue);
                }
            }}
      placeholder="Örn: Örnek Cd"
    />
    {errors.home_street && (
      <p className="text-red-500 text-xs mt-1">{errors.home_street}</p>
    )}
  </div>

  {/* Sokak */}
  <div>
    <label className="text-sm font-medium">Sokak </label>
    <input
      name="home_avenue"
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.home_avenue ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      value={form.steps[1].home_avenue || ""}
                         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "home_avenue", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "home_avenue", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(1, "home_avenue", normalizedValue);
                }
            }}
      placeholder="Örn: Gülistan Sk"
    />
    {errors.home_avenue && (
      <p className="text-red-500 text-xs mt-1">{errors.home_avenue}</p>
    )}
  </div>

  {/* Bina No */}
  <div>
    <label className="text-sm font-medium">Bina No *</label>
    <input
      name="home_building_no"
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.home_building_no ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      value={form.steps[1].home_building_no || ""}
                      onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "home_building_no", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "home_building_no", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(1, "home_building_no", normalizedValue);
                }
            }}
      placeholder="Örn: 12"
    />
    {errors.home_building_no && (
      <p className="text-red-500 text-xs mt-1">{errors.home_building_no}</p>
    )}
  </div>

  {/* Daire No */}
  <div>
    <label className="text-sm font-medium">Daire No *</label>
    <input
      name="home_apartment_no"
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.home_apartment_no ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      value={form.steps[1].home_apartment_no || ""}
                       onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "home_apartment_no", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "home_apartment_no", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(1, "home_apartment_no", normalizedValue);
                }
            }}
      placeholder="Örn: 4"
    />
    {errors.home_apartment_no && (
      <p className="text-red-500 text-xs mt-1">{errors.home_apartment_no}</p>
    )}
  </div>
<div>
        <label className="text-sm font-medium">Posta Kodu</label>
        <input
          name="post_code"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.post_code ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[1].post_code || ""}
                           onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "post_code", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "post_code", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(1, "post_code", normalizedValue);
                }
            }}
          placeholder="Örn: 06510"
        />
        {errors.post_code && (
          <p className="text-red-500 text-xs mt-1">{errors.post_code}</p>
        )}
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

      {/* MEDENİ DURUM */}
      <div>
        <label className="text-sm font-medium">Medeni Durum</label>
        <select
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.maritalStatus ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[2].maritalStatus}
          onChange={(e) => updateField(2, "maritalStatus", e.target.value)}
        >
          <option value="">SEÇİNİZ</option>
          <option value="BEKAR">BEKAR</option>
          <option value="EVLI">EVLI</option>
          <option value="DUL">DUL</option>
          <option value="BOSANMIS">BOSANMIS</option>
        </select>
         {errors.maritalStatus && (
          <p className="text-red-500 text-xs mt-1">{errors.maritalStatus}</p>
        )}
      </div>

      {/* ================= EVLİ → MEVCUT EVLİLİK ================= */}
      {form.steps[2].maritalStatus === "EVLI" && (
        <>
          <div>
            <label className="text-sm font-medium">Evlilik Tarihi</label>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
               className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.marriageDate ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
              value={form.steps[2].marriageDate}
              onChange={(e) => updateField(2, "marriageDate", e.target.value)}
            />
             {errors.marriageDate && (
          <p className="text-red-500 text-xs mt-1">{errors.marriageDate}</p>
        )}
          </div>

          <div>
            <label className="text-sm font-medium">Eşinin Adı Soyadı</label>
            <input
               className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.spouseFullName ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
              value={form.steps[2].spouseFullName}
              onChange={(e) =>
                updateField(
                  2,
                  "spouseFullName",
                  isMobile ? e.target.value : normalizeInput(e.target.value)
                )
              }
              onBlur={(e) =>
                isMobile &&
                updateField(2, "spouseFullName", normalizeInput(e.target.value))
              }
            />
             {errors.spouseFullName && (
          <p className="text-red-500 text-xs mt-1">{errors.spouseFullName}</p>
        )}
          </div>

          <div>
            <label className="text-sm font-medium">Eşinin Doğum Tarihi</label>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
               className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.spouseBirthDate ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
              value={form.steps[2].spouseBirthDate}
              onChange={(e) =>
                updateField(2, "spouseBirthDate", e.target.value)
              }
            />
             {errors.spouseBirthDate && (
          <p className="text-red-500 text-xs mt-1">{errors.spouseBirthDate}</p>
        )}
          </div>
{/* EŞ DOĞUM YERİ */}
<div>
  <label className="text-sm font-medium">Eşinin Doğum Yeri</label>
  <input
     className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.spouseBirthPlace ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[2].spouseBirthPlace || ""}
    onChange={(e) =>
      updateField(
        2,
        "spouseBirthPlace",
        isMobile ? e.target.value : normalizeInput(e.target.value)
      )
    }
    onBlur={(e) =>
      isMobile &&
      updateField(2, "spouseBirthPlace", normalizeInput(e.target.value))
    }
  />
   {errors.spouseBirthPlace && (
          <p className="text-red-500 text-xs mt-1">{errors.spouseBirthPlace}</p>
        )}
</div>

{/* EŞ MESLEĞİ */}
<div>
  <label className="text-sm font-medium">Eşinin Mesleği</label>
  <input
   className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.spouseOccupation ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[2].spouseOccupation || ""}
    onChange={(e) =>
      updateField(
        2,
        "spouseOccupation",
        isMobile ? e.target.value : normalizeInput(e.target.value)
      )
    }
    onBlur={(e) =>
      isMobile &&
      updateField(2, "spouseOccupation", normalizeInput(e.target.value))
    }
  />
   {errors.spouseOccupation && (
          <p className="text-red-500 text-xs mt-1">{errors.spouseOccupation}</p>
        )}
</div>

{/* EŞ İKAMET ADRESİ */}
<div className="md:col-span-2">
  <label className="text-sm font-medium">Eşinin İkamet Adresi</label>
  <textarea
    rows={2}
     className={`w-full mt-1 p-3 border rounded-xl
          ${errors.spouseAddress ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
   
    value={form.steps[2].spouseAddress || ""}
    onChange={(e) =>
      updateField(
        2,
        "spouseAddress",
        isMobile ? e.target.value : normalizeAddressInput(e.target.value)
      )
    }
    onBlur={(e) =>
      isMobile &&
      updateField(
        2,
        "spouseAddress",
        normalizeAddressInput(e.target.value)
      )
    }
  />
   {errors.spouseAddress && (
          <p className="text-red-500 text-xs mt-1">{errors.spouseAddress}</p>
        )}
</div>

          <div>
            <label className="text-sm font-medium">
              Başka evlilik yaptınız mı?
            </label>
            <select
              className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.otherMarriages ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
              value={form.steps[2].otherMarriages}
              onChange={(e) =>{
                    const selectedValue = e.target.value;

 updateField(2, "otherMarriages", e.target.value)
 if (selectedValue === "HAYIR") {
      updateField(2, "marriages", [
        {
          spouseFullName: "",
          spouseBirthDate: "",
          marriageStartDate: "",
          marriageEndDate: ""
        }
      ]);
    }
              }
               
                
              }
            >
              <option value="">SEÇİNİZ</option>
              <option value="EVET">EVET</option>
              <option value="HAYIR">HAYIR</option>
            </select>
             {errors.otherMarriages && (
          <p className="text-red-500 text-xs mt-1">{errors.otherMarriages}</p>
        )}
          </div>
        </>
      )}

      {/* ================= ESKİ EVLİLİKLER ================= */}
      {(form.steps[2].otherMarriages === "EVET" ||
        ["DUL", "BOSANMIS"].includes(form.steps[2].maritalStatus)) && (
        <div className="md:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">Eski Evlilik Bilgileri</h4>
            <button
              type="button"
              onClick={addMarriage}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm"
            >
              + EVLİLİK EKLE
            </button>
          </div>

{form.steps[2].marriages?.map((m, i) => (
  <div
    key={i}
    className="relative grid grid-cols-1 md:grid-cols-2 gap-6 border p-4 rounded-xl"
  >
    {/* SİL BUTONU */}
    {form.steps[2].marriages.length > 1 && (
      <button
        type="button"
        onClick={() => removeMarriage(i)}
        title="Bu evliliği sil"
        className="absolute cursor-pointer top-3 right-3 text-red-500 hover:text-red-700 transition"
      >
        <FaTrashAlt size={16} />
      </button>
    )}

    {/* ESKİ EŞ ADI */}
    <div>
      <label className="text-sm font-medium">Eski Eşinizin Adı Soyadı</label>
      <input
        placeholder="ADI SOYADI"
       className={`w-full mt-1 p-3 border rounded-xl
${errors[`marriage_spouseFullName_${i}`]
  ? "border-red-500"
  : "border-gray-300"}
`}
        value={m.spouseFullName}
        onChange={(e) =>
          updateMarriageField(
            i,
            "spouseFullName",
            isMobile ? e.target.value : normalizeInput(e.target.value)
          )
        }
        onBlur={(e) => {
          if (isMobile) {
            updateMarriageField(i, "spouseFullName", normalizeInput(e.target.value));
          }
        }}
      />
      {errors[`marriage_spouseFullName_${i}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`marriage_spouseFullName_${i}`]}
  </p>
)}
    </div>

    {/* DOĞUM TARİHİ */}
    <div>
      <label className="text-sm font-medium">Eski Eşinizin Doğum Tarihi</label>
      <input
        type="date"
        max={new Date().toISOString().split("T")[0]}
       className={`w-full mt-1 p-3 border rounded-xl
${errors[`marriage_spouseBirthDate_${i}`]
  ? "border-red-500"
  : "border-gray-300"}
`}
        value={m.spouseBirthDate}
        onChange={(e) =>
          updateMarriageField(i, "spouseBirthDate", e.target.value)
        }
      />
      {errors[`marriage_spouseBirthDate_${i}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`marriage_spouseBirthDate_${i}`]}
  </p>
)}
    </div>

    {/* ESKİ EVLİLİK BAŞLANGIÇ */}
    <div>
      <label className="text-sm font-medium">
        Evlilik Başlangıç Tarihi
      </label>
      <input
        type="date"
        // min={new Date().toISOString().split("T")[0]}
      className={`w-full mt-1 p-3 border rounded-xl
${errors[`marriage_marriageStartDate_${i}`]
  ? "border-red-500"
  : "border-gray-300"}
`}
        value={m.marriageStartDate}
        max={
          form.steps[2].maritalStatus === "EVLI" &&
          form.steps[2].marriageDate
            ? form.steps[2].marriageDate
            : undefined
        }
        onChange={(e) =>
          updateMarriageField(i, "marriageStartDate", e.target.value)
        }
      />
    {errors[`marriage_marriageStartDate_${i}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`marriage_marriageStartDate_${i}`]}
  </p>
)}
    </div>

    {/* ESKİ EVLİLİK BİTİŞ */}
    <div>
      <label className="text-sm font-medium">
        Evlilik Bitiş Tarihi
      </label>
      <input
        type="date"
       className={`w-full mt-1 p-3 border rounded-xl
${errors[`marriage_marriageEndDate_${i}`]
  ? "border-red-500"
  : "border-gray-300"}
`}
        value={m.marriageEndDate}
        min={m.marriageStartDate || undefined}
        max={
          form.steps[2].maritalStatus === "EVLI" &&
          form.steps[2].marriageDate
            ? form.steps[2].marriageDate
            : undefined
        }
        onChange={(e) =>
          updateMarriageField(i, "marriageEndDate", e.target.value)
        }
      />
    {errors[`marriage_marriageEndDate_${i}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`marriage_marriageEndDate_${i}`]}
  </p>
)}
    </div>
  </div>
))}


        </div>
      )}

      {/* ================= ÇOCUKLAR ================= */}
      <div>
        <label className="text-sm font-medium">Çocuğunuz var mı?</label>
        <select
           className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.childrenExist ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[2].childrenExist}
          onChange={(e) => updateField(2, "childrenExist", e.target.value)}
        >
          <option value="">SEÇİNİZ</option>
          <option value="EVET">EVET</option>
          <option value="HAYIR">HAYIR</option>
        </select>
        {errors.childrenExist && (
          <p className="text-red-500 text-xs mt-1">{errors.childrenExist}</p>
        )}
      </div>

      {form.steps[2].childrenExist === "EVET" && (
        <>
          <div>
            <label className="text-sm font-medium">Çocuk Sayısı</label>
           <input
  type="number"
  min={1}
  className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
  ${errors.childrenCount
    ? "border-red-500"
    : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
  value={form.steps[2].childrenCount || ""}
  onChange={(e) => {
    const val = e.target.value;

    updateField(
      2,
      "childrenCount",
      val === "" ? "" : Number(val)
    );
  }}
/>
                    {errors.childrenCount && (
          <p className="text-red-500 text-xs mt-1">{errors.childrenCount}</p>
        )}
          </div>

        {Array.from({ length: form.steps[2].childrenCount }).map((_, idx) => (
  <div
    key={idx}
    className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 border p-4 rounded-xl"
  >
    <h4 className="md:col-span-2 font-semibold">
      Çocuk {idx + 1} Bilgileri
    </h4>

    {/* AD SOYAD */}
    <div>
      <label className="text-sm font-medium">Ad Soyad</label>
      <input
       className={`w-full mt-1 p-3 border rounded-xl
${errors[`child_fullName_${idx}`]
  ? "border-red-500"
  : "border-gray-300"}
`}
        value={form.steps[2].children[idx]?.fullName || ""}
        onChange={(e) =>
    updateChildField(
      idx,
      "fullName",
      isMobile
        ? e.target.value
        : normalizeInput(e.target.value)
    )
  }
  onBlur={(e) => {
    if (isMobile) {
      updateChildField(
        idx,
        "fullName",
        normalizeInput(e.target.value)
      );
    }
  }}
      />
      {errors[`child_fullName_${idx}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`child_fullName_${idx}`]}
  </p>
)}
    </div>

    {/* MEDENİ DURUM */}
    <div>
      <label className="text-sm font-medium">Medeni Durum</label>
      <select
       className={`w-full mt-1 p-3 border rounded-xl
${errors[`child_maritalStatus_${idx}`]
  ? "border-red-500"
  : "border-gray-300"}
`}
        value={form.steps[2].children[idx]?.maritalStatus || ""}
        onChange={(e) =>
          updateChildField(idx, "maritalStatus", e.target.value)
        }
      >
        <option value="">SEÇİNİZ</option>
        <option value="BEKAR">BEKAR</option>
        <option value="EVLI">EVLİ</option>
        <option value="DUL">DUL</option>
        <option value="BOSANMIS">BOŞANMIŞ</option>
      </select>
      {errors[`child_maritalStatus_${idx}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`child_maritalStatus_${idx}`]}
  </p>
)}
    </div>

    {/* DOĞUM YERİ */}
    <div>
      <label className="text-sm font-medium">Doğum Yeri</label>
      <input
      className={`w-full mt-1 p-3 border rounded-xl
${errors[`child_birthPlace_${idx}`]
  ? "border-red-500"
  : "border-gray-300"}
`}
        value={form.steps[2].children[idx]?.birthPlace || ""}
        onChange={(e) =>
    updateChildField(
      idx,
      "birthPlace",
      isMobile
        ? e.target.value
        : normalizeInput(e.target.value)
    )
  }
  onBlur={(e) => {
    if (isMobile) {
      updateChildField(
        idx,
        "birthPlace",
        normalizeInput(e.target.value)
      );
    }
  }}
      />
      {errors[`child_birthPlace_${idx}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`child_birthPlace_${idx}`]}
  </p>
)}
    </div>

    {/* DOĞUM TARİHİ */}
    <div>
      <label className="text-sm font-medium">Doğum Tarihi</label>
      <input
        type="date"
      max={new Date().toISOString().split("T")[0]}
       className={`w-full mt-1 p-3 border rounded-xl
${errors[`child_birthDate_${idx}`]
  ? "border-red-500"
  : "border-gray-300"}
`}
        value={form.steps[2].children[idx]?.birthDate || ""}
        onChange={(e) =>
          updateChildField(idx, "birthDate", e.target.value)
        }
      />
      {errors[`child_birthDate_${idx}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`child_birthDate_${idx}`]}
  </p>
)}
    </div>

    {/* ADRES */}
    <div className="md:col-span-2">
      <label className="text-sm font-medium">Adres</label>
      <input
       className={`w-full mt-1 p-3 border rounded-xl
${errors[`child_address_${idx}`]
  ? "border-red-500"
  : "border-gray-300"}
`}
        value={form.steps[2].children[idx]?.address || ""}
        onChange={(e) =>
    updateChildField(
      idx,
      "address",
      isMobile
        ? e.target.value
        : normalizeInput(e.target.value)
    )
  }
  onBlur={(e) => {
    if (isMobile) {
      updateChildField(
        idx,
        "address",
        normalizeInput(e.target.value)
      );
    }
  }}
      />
      {errors[`child_address_${idx}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`child_address_${idx}`]}
  </p>
)}
    </div>

    {/* MESLEK */}
    <div>
      <label className="text-sm font-medium">Meslek</label>
      <input
       className={`w-full mt-1 p-3 border rounded-xl
${errors[`child_occupation_${idx}`]
  ? "border-red-500"
  : "border-gray-300"}
`}
        value={form.steps[2].children[idx]?.occupation || ""}
        onChange={(e) =>
    updateChildField(
      idx,
      "occupation",
      isMobile
        ? e.target.value
        : normalizeInput(e.target.value)
    )
  }
  onBlur={(e) => {
    if (isMobile) {
      updateChildField(
        idx,
        "occupation",
        normalizeInput(e.target.value)
      );
    }
  }}
      />
      {errors[`child_occupation_${idx}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`child_occupation_${idx}`]}
  </p>
)}
    </div>
  </div>
))}

        </>
      )}
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
                    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.motherFullName ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
                    {errors.motherFullName && (
      <p className="text-red-500 text-xs mt-1">{errors.motherFullName}</p>
    )}

                </div>
                <div>
                  <label className="text-sm font-medium">Medeni Durumu</label>
                  <input
                    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.motherMaritalStatus ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
                                     {errors.motherMaritalStatus && (
      <p className="text-red-500 text-xs mt-1">{errors.motherMaritalStatus}</p>
    )}
                </div>
               
              <div>
  <label className="text-sm font-medium">Anne Doğum Tarihi</label>
  <input
    type="date"
     className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.motherBirthDate ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[3].motherBirthDate || ""}
    max={
      form.steps[1].birthDate
        ? new Date(
            new Date(form.steps[1].birthDate).setDate(
              new Date(form.steps[1].birthDate).getDate() - 1
            )
          )
            .toISOString()
            .split("T")[0]
        : undefined
    }
    onChange={(e) => {
      const motherDate = e.target.value;
      const personDate = form.steps[1].birthDate;

      // Eğer başvuru sahibinin doğum tarihi yoksa direkt yaz
      if (!personDate) {
        updateField(3, "motherBirthDate", motherDate);
        return;
      }

      // Anne tarihi >= kişinin tarihi ise ENGELLE
      if (new Date(motherDate) >= new Date(personDate)) {
        return; // hiçbir şey yapma → tarih değişmez
      }

      updateField(3, "motherBirthDate", motherDate);
    }}
  />
    {errors.motherBirthDate && (
      <p className="text-red-500 text-xs mt-1">{errors.motherBirthDate}</p>
    )}

</div>
 <div>
                  <label className="text-sm font-medium">Doğum Yeri</label>
                  <input
                    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.motherBirthPlace ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
                    {errors.motherBirthPlace && (
      <p className="text-red-500 text-xs mt-1">{errors.motherBirthPlace}</p>
    )}

                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium">İkamet Adresi</label>
                  <textarea
                    rows={2}
                      className={`w-full resize-none mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500
        ${errors.motherAddress ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
                  
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
                  {errors.motherAddress && (
      <p className="text-red-500 text-xs mt-1">{errors.motherAddress}</p>
    )}
                </div>
                <div>
                  <label className="text-sm font-medium">Mesleği</label>
                  <input
                                       className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.motherOccupation ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
                  {errors.motherOccupation && (
      <p className="text-red-500 text-xs mt-1">{errors.motherOccupation}</p>
    )}
                </div>

                {/* Baba Bilgileri */}
                <h4 className="col-span-2 font-semibold mt-6">Baba Bilgileri</h4>
                <div>
                  <label className="text-sm font-medium">Adı Soyadı</label>
                  <input
                    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.fatherFullName ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}

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
                    {errors.fatherFullName && (
      <p className="text-red-500 text-xs mt-1">{errors.fatherFullName}</p>
    )}

                </div>
                <div>
                  <label className="text-sm font-medium">Medeni Durumu</label>
                  <input
                   className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.fatherMaritalStatus ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}

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
                    {errors.fatherMaritalStatus && (
      <p className="text-red-500 text-xs mt-1">{errors.fatherMaritalStatus}</p>
    )}

                </div>
                <div>
  <label className="text-sm font-medium">Baba Doğum Tarihi</label>
  <input
    type="date"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${
        errors.fatherBirthDate
          ? "border-red-500"
          : "border-gray-300 focus:ring-2 focus:ring-blue-500"
      }`}
    value={form.steps[3].fatherBirthDate || ""}
    max={
      form.steps[1].birthDate
        ? new Date(
            new Date(form.steps[1].birthDate).setDate(
              new Date(form.steps[1].birthDate).getDate() - 1
            )
          )
            .toISOString()
            .split("T")[0]
        : undefined
    }
    onChange={(e) => {
      const fatherDate = e.target.value;
      const personDate = form.steps[1].birthDate;

      // Kişinin doğum tarihi yoksa direkt yaz
      if (!personDate) {
        updateField(3, "fatherBirthDate", fatherDate);
        return;
      }

      // Baba tarihi >= kişinin tarihi OLAMAZ
      if (new Date(fatherDate) >= new Date(personDate)) {
        updateField(3, "fatherBirthDate", "");
        return;
      }

      updateField(3, "fatherBirthDate", fatherDate);
    }}
  />

  {errors.fatherBirthDate && (
    <p className="text-red-500 text-xs mt-1">
      {errors.fatherBirthDate}
    </p>
  )}
</div>

                <div>
                  <label className="text-sm font-medium">Doğum Yeri</label>
                  <input
                   className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.fatherBirthPlace ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}

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
                    {errors.fatherBirthPlace && (
      <p className="text-red-500 text-xs mt-1">{errors.fatherBirthPlace}</p>
    )}

                </div>
            
                <div className="md:col-span-2">
                  <label className="text-sm font-medium">İkamet Adresi</label>
                  <textarea
                    rows={2}
                    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500 
        ${errors.fatherAddress ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
               
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
                                     {errors.fatherAddress && (
      <p className="text-red-500 text-xs mt-1">{errors.fatherAddress}</p>
    )}
                </div>
                <div>
                  <label className="text-sm font-medium">Mesleği</label>
                  <input
                    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.fatherOccupation ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}

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
                                     {errors.fatherOccupation && (
      <p className="text-red-500 text-xs mt-1">{errors.fatherOccupation}</p>
    )}
                </div>

                {/* Kardeş Sayısı */}
                <div className="md:col-span-2 mt-6">
                  <label className="text-sm font-medium">Kardeş Sayısı</label>
                  <input
                    type="number"
                    min={0}
                    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.siblingsCount ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}

                    value={form.steps[3].siblingsCount || ""}
                    onChange={(e) => updateField(3, "siblingsCount", e.target.value)}
                  />
                    {errors.siblingsCount && (
      <p className="text-red-500 text-xs mt-1">{errors.siblingsCount}</p>
    )}

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

  <select
    name="nativeLanguage"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
      ${errors.nativeLanguage
        ? "border-red-500"
        : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[4].nativeLanguage || ""}
    onChange={(e) =>
      updateField(4, "nativeLanguage", e.target.value)
    }
  >
    <option value="">Seçiniz</option>

    {languages_option.map((lang) => (
      <option key={lang.value} value={lang.value}>
        {lang.label}
      </option>
    ))}
  </select>

  {errors.nativeLanguage && (
    <p className="text-red-500 text-xs mt-1">
      {errors.nativeLanguage}
    </p>
  )}
</div>

                {/* İngilizce/Fransızca iletişim */}
                <div>
                  <label className="text-sm font-medium">İngilizce/Fransızca iletişim kurabiliyor musunuz?</label>
                  <select
                     className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.canCommunicateInEnglishFrench ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}

                    value={form.steps[4].canCommunicateInEnglishFrench}
                    onChange={(e) => updateField(4, "canCommunicateInEnglishFrench", e.target.value)}
                  >
                    <option value="">Seçiniz</option>
                    <option value="INGILIZCE">İngilizce</option>
                    <option value="FRANSIZCA">Fransızca</option>
                    <option value="HAYIR">Hayır</option>
                  </select>
                    {errors.canCommunicateInEnglishFrench && (
      <p className="text-red-500 text-xs mt-1">{errors.canCommunicateInEnglishFrench}</p>
    )}

                </div>

                {/* Yeterlilik sınavına girdiniz mi */}
                <div>
                  <label className="text-sm font-medium">Yeterlilik sınavına girdiniz mi?</label>
                  <select
                   className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.tookProficiencyExam ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
                    value={form.steps[4].tookProficiencyExam}
                    onChange={(e) => updateField(4, "tookProficiencyExam", e.target.value)}
                  >
                    <option value="">Seçiniz</option>
                    <option value="EVET">Evet</option>
                    <option value="HAYIR">Hayır</option>
                  </select>
                                      {errors.tookProficiencyExam && (
      <p className="text-red-500 text-xs mt-1">{errors.tookProficiencyExam}</p>
    )}
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
   className={`w-full mt-1 p-3 border rounded-xl
${errors[`exam_examName_${index}`]
  ? "border-red-500"
  : "border-gray-300"}
`}
    value={exam.examName}
    onChange={(e) => {
      const value = e.target.value;
      const newExams = [...form.steps[4].exams];

      newExams[index].examName = isMobile
        ? value
        : normalizeInput(value);

      updateField(4, "exams", newExams);
    }}
    onBlur={(e) => {
      if (isMobile) {
        const newExams = [...form.steps[4].exams];
        newExams[index].examName = normalizeInput(e.target.value);
        updateField(4, "exams", newExams);
      }
    }}
    placeholder="Örn: TOEFL, IELTS"
  />
  {errors[`exam_examName_${index}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`exam_examName_${index}`]}
  </p>
)}
</div>

                      <div>
                        <label className="text-sm font-medium">Sınav Tarihi</label>
                        <input
                          type="date"
                         className={`w-full mt-1 p-3 border rounded-xl
${errors[`exam_examDate_${index}`]
  ? "border-red-500"
  : "border-gray-300"}
`}
                          value={exam.examDate}
                          onChange={(e) => {
                            const newExams = [...form.steps[4].exams];
                            newExams[index].examDate = e.target.value;
                            updateField(4, "exams", newExams);
                          }}
                        />
                        {errors[`exam_examDate_${index}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`exam_examDate_${index}`]}
  </p>
)}
                      </div>

                      <div>
                        <label className="text-sm font-medium">Alınan Puan</label>
                        <input
                          className={`w-full mt-1 p-3 border rounded-xl
${errors[`exam_score_${index}`]
  ? "border-red-500"
  : "border-gray-300"}
`}
                          value={exam.score}
                          onChange={(e) => {
                            const newExams = [...form.steps[4].exams];
                            newExams[index].score = e.target.value;
                            updateField(4, "exams", newExams);
                          }}
                          placeholder="Örn: 85, 6.5"
                        />
                        {errors[`exam_score_${index}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`exam_score_${index}`]}
  </p>
)}
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
                                    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.postSecondaryEducation ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
                  value={form.steps[4].postSecondaryEducation}
                  onChange={(e) => updateField(4, "postSecondaryEducation", e.target.value)}
                >
                  <option value="">Seçiniz</option>
                  <option value="EVET">Evet</option>
                  <option value="HAYIR">Hayır</option>
                </select>
                {errors.postSecondaryEducation && (
      <p className="text-red-500 text-xs mt-1">{errors.postSecondaryEducation}</p>
    )}
              </div>

              {form.steps[4].postSecondaryEducation === "EVET" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <label className="text-sm font-medium">Okul Adı</label>
                    <input
                      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.schoolName ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
                    {errors.schoolName && (
      <p className="text-red-500 text-xs mt-1">{errors.schoolName}</p>
    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium">Bölüm Adı</label>
                    <input
                      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.programName ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
                    {errors.programName && (
      <p className="text-red-500 text-xs mt-1">{errors.programName}</p>
    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium">Şehir</label>
                    <input
                      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.educationCity ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
                    {errors.educationCity && (
      <p className="text-red-500 text-xs mt-1">{errors.educationCity}</p>
    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium">Ülke</label>
                    <input
                      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.educationCountry ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
                    {errors.educationCountry && (
      <p className="text-red-500 text-xs mt-1">{errors.educationCountry}</p>
    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium">Başlangıç Tarihi</label>
                    <input
                      type="date"
                      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.educationStartDate ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
                      value={form.steps[4].educationStartDate}
                      onChange={(e) => updateField(4, "educationStartDate", e.target.value)}
                    />
                    {errors.educationStartDate && (
      <p className="text-red-500 text-xs mt-1">{errors.educationStartDate}</p>
    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium">Mezuniyet Tarihi</label>
                    <input
                      type="date"
                      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.educationEndDate ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
                      value={form.steps[4].educationEndDate}
                      onChange={(e) => updateField(4, "educationEndDate", e.target.value)}
                    />
                    {errors.educationEndDate && (
      <p className="text-red-500 text-xs mt-1">{errors.educationEndDate}</p>
    )}
                  </div>
                </div>
              )}

              {/* --- Askerlik Bilgileri --- */}
          {form.steps[1].gender ==="ERKEK"}    <div className="mt-8">
                <label className="text-sm font-medium">Askerlik durumunuz</label>
                <select
                  className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.boolean_military ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
                  value={form.steps[4].boolean_military}
                  onChange={(e) => updateField(4, "boolean_military", e.target.value)}
                >
                  <option value="">Seçiniz</option>
                  <option value="YAPTI">Yaptı</option>
                  <option value="YAPMADI">Yapmadı</option>
            

                </select>
                {errors.boolean_military && (
      <p className="text-red-500 text-xs mt-1">{errors.boolean_military}</p>
    )}
              </div>

              {form.steps[4].boolean_military === "YAPTI" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <label className="text-sm font-medium">Askerlik Yaptığınız Şehir</label>
                    <input
                      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.military_city ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
                    {errors.military_city && (
      <p className="text-red-500 text-xs mt-1">{errors.military_city}</p>
    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium">Askerlik Başlangıç Tarihi</label>
                    <input
                      type="date"
                      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.military_start_date ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
                      value={form.steps[4].military_start_date}
                      onChange={(e) => updateField(4, "military_start_date", e.target.value)}
                    />
                    {errors.military_start_date && (
      <p className="text-red-500 text-xs mt-1">{errors.military_start_date}</p>
    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium">Askerlik Bitiş Tarihi</label>
                    <input
                      type="date"
                      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.military_end_date ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
                      value={form.steps[4].military_end_date}
                      onChange={(e) => updateField(4, "military_end_date", e.target.value)}
                    />
                    {errors.military_end_date && (
      <p className="text-red-500 text-xs mt-1">{errors.military_end_date}</p>
    )}
                  </div>
                </div>
              )}
            </section>
          )}







          {/* Step 5 */}
{form.currentStep === 5 && (
  <section className="space-y-8">
    <h3 className="font-semibold text-lg">
      5. Bölüm — Çalışma Bilgileri
    </h3>

    {/* ================= ÇALIŞMA DURUMU ================= */}
    <div>
      <label className="text-sm font-medium">Çalışma Durumu *</label>
      <select
        className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.employmentStatus ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
        value={form.steps[5].employmentStatus || ""}
        onChange={(e) => {
          const value = e.target.value;
          updateField(5, "employmentStatus", value);

          // reset
          updateField(5, "currentCompanyName", "");
          updateField(5, "currentPosition", "");
          updateField(5, "currentJobStartDate", "");
          updateField(5, "currentWorkCity", "");
          updateField(5, "currentWorkCountry", "");
          updateField(5, "retirementDate", "");
        }}
      >
        <option value="">Seçiniz</option>
        <option value="CALISIYOR">ÇALIŞIYOR</option>
        <option value="CALISMIYOR">ÇALIŞMIYOR</option>
        <option value="OGRENCI">ÖĞRENCİ</option>
        <option value="EMEKLI">EMEKLİ</option>
      </select>
      {errors.employmentStatus && (
      <p className="text-red-500 text-xs mt-1">{errors.employmentStatus}</p>
    )}
    </div>

    {/* ================= ÇALIŞIYOR ================= */}
    {form.steps[5].employmentStatus === "CALISIYOR" && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium">Şu an Çalıştığınız Şirket Adı</label>
          <input
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.currentCompanyName ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[5].currentCompanyName || ""}
            onChange={(e) =>
              updateField(5, "currentCompanyName", normalizeInput(e.target.value))
            }
          />
          {errors.currentCompanyName && (
      <p className="text-red-500 text-xs mt-1">{errors.currentCompanyName}</p>
    )}
        </div>

        <div>
          <label className="text-sm font-medium">Göreviniz</label>
          <input
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.currentPosition ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[5].currentPosition}
            onChange={(e) =>
              updateField(5, "currentPosition", normalizeInput(e.target.value))
            }
          />
          {errors.currentPosition && (
      <p className="text-red-500 text-xs mt-1">{errors.currentPosition}</p>
    )}
        </div>

        <div>
          <label className="text-sm font-medium">İşe Giriş Tarihi</label>
          <input
            type="date"
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.currentJobStartDate ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[5].currentJobStartDate}
            onChange={(e) =>
              updateField(5, "currentJobStartDate", e.target.value)
            }
          />
          {errors.currentJobStartDate && (
      <p className="text-red-500 text-xs mt-1">{errors.currentJobStartDate}</p>
    )}
        </div>

        <div>
          <label className="text-sm font-medium">Çalıştığınız Şehir</label>
          <input
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.currentWorkCity ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[5].currentWorkCity}
            onChange={(e) =>
              updateField(5, "currentWorkCity", normalizeInput(e.target.value))
            }
          />
          {errors.currentWorkCity && (
      <p className="text-red-500 text-xs mt-1">{errors.currentWorkCity}</p>
    )}
        </div>

        <div>
          <label className="text-sm font-medium">Çalıştığınız Ülke</label>
          <input
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.currentWorkCountry ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[5].currentWorkCountry}
            onChange={(e) =>
              updateField(5, "currentWorkCountry", normalizeInput(e.target.value))
            }
          />
          {errors.currentWorkCountry && (
      <p className="text-red-500 text-xs mt-1">{errors.currentWorkCountry}</p>
    )}
        </div>
      </div>
    )}

    {/* ================= ÖĞRENCİ ================= */}
    {form.steps[5].employmentStatus === "OGRENCI" && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium">Okul Adı</label>
          <input
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.currentCompanyName ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[5].currentCompanyName || ""}
            onChange={(e) =>
              updateField(5, "currentCompanyName", normalizeInput(e.target.value))
            }
          />
          {errors.currentCompanyName && (
      <p className="text-red-500 text-xs mt-1">{errors.currentCompanyName}</p>
    )}
        </div>

        <div>
          <label className="text-sm font-medium">Okula Giriş Tarihi</label>
          <input
            type="date"
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.currentJobStartDate ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[5].currentJobStartDate}
            onChange={(e) =>
              updateField(5, "currentJobStartDate", e.target.value)
            }
          />
          {errors.currentJobStartDate && (
      <p className="text-red-500 text-xs mt-1">{errors.currentJobStartDate}</p>
    )}
        </div>

        <div>
          <label className="text-sm font-medium">Okulun Bulunduğu Şehir</label>
          <input
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.currentWorkCity ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[5].currentWorkCity}
            onChange={(e) =>
              updateField(5, "currentWorkCity", normalizeInput(e.target.value))
            }
          />
          {errors.currentWorkCity && (
      <p className="text-red-500 text-xs mt-1">{errors.currentWorkCity}</p>
    )}
        </div>

        <div>
          <label className="text-sm font-medium">Okulun Bulunduğu Ülke</label>
          <input
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.currentWorkCountry ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[5].currentWorkCountry}
            onChange={(e) =>
              updateField(5, "currentWorkCountry", normalizeInput(e.target.value))
            }
          />
          {errors.currentWorkCountry && (
      <p className="text-red-500 text-xs mt-1">{errors.currentWorkCountry}</p>
    )}
        </div>
      </div>
    )}

    {/* ================= EMEKLİ ================= */}
    {form.steps[5].employmentStatus === "EMEKLI" && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium">Emekli Olunan Kurum</label>
          <input
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.currentCompanyName ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[5].currentCompanyName || ""}
            onChange={(e) =>
              updateField(5, "currentCompanyName", normalizeInput(e.target.value))
            }
          />
          {errors.currentCompanyName && (
      <p className="text-red-500 text-xs mt-1">{errors.currentCompanyName}</p>
    )}
        </div>

        <div>
          <label className="text-sm font-medium">Göreviniz</label>
          <input
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.currentPosition ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[5].currentPosition}
            onChange={(e) =>
              updateField(5, "currentPosition", normalizeInput(e.target.value))
            }
          />
          {errors.currentPosition && (
      <p className="text-red-500 text-xs mt-1">{errors.currentPosition}</p>
    )}
        </div>

        <div>
          <label className="text-sm font-medium">Çalışılan Şehir</label>
          <input
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.currentWorkCity ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[5].currentWorkCity}
            onChange={(e) =>
              updateField(5, "currentWorkCity", normalizeInput(e.target.value))
            }
          />
          {errors.currentWorkCity && (
      <p className="text-red-500 text-xs mt-1">{errors.currentWorkCity}</p>
    )}
        </div>

        <div>
          <label className="text-sm font-medium">Çalışılan Ülke</label>
          <input
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.currentWorkCountry ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[5].currentWorkCountry}
            onChange={(e) =>
              updateField(5, "currentWorkCountry", normalizeInput(e.target.value))
            }
          />
          {errors.currentWorkCountry && (
      <p className="text-red-500 text-xs mt-1">{errors.currentWorkCountry}</p>
    )}
        </div>

        <div>
          <label className="text-sm font-medium">Emeklilik Tarihi</label>
          <input
            type="date"
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.retirementDate ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[5].retirementDate}
            onChange={(e) =>
              updateField(5, "retirementDate", e.target.value)
            }
          />
          {errors.retirementDate && (
      <p className="text-red-500 text-xs mt-1">{errors.retirementDate}</p>
    )}
        </div>
      </div>
    )}

    {/* ================= SON 10 YIL İŞ DENEYİMİ ================= */}
    {(form.steps[5].employmentStatus === "CALISIYOR" ||
      form.steps[5].employmentStatus === "CALISMIYOR" ||
      form.steps[5].employmentStatus === "EMEKLI") && (
      <div className="mt-10">
        <h4 className="font-semibold mb-3">
          Son 10 Yıldaki İş Deneyimleriniz
        </h4>

        {form.steps[5].last10YearsWorkExperience.map((exp, index) => (
          <div
            key={index}
            className="border p-4 rounded-xl mb-4 bg-gray-50"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className={`p-3 border rounded-xl
    ${errors[`work_companyName_${index}`]
      ? "border-red-500"
      : "border-gray-300"}
  `}
                placeholder="Şirket Adı"
                value={exp.companyName}
                onChange={(e) =>
                  updateArrayField(5, "last10YearsWorkExperience", index, "companyName", normalizeInput(e.target.value))
                }
              />
{errors[`work_companyName_${index}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`work_companyName_${index}`]}
  </p>
)}
              <input
                               className={`p-3 border rounded-xl
    ${errors[`work_position_${index}`]
      ? "border-red-500"
      : "border-gray-300"}
  `}
                placeholder="Göreviniz"
                value={exp.position}
                onChange={(e) =>
                  updateArrayField(5, "last10YearsWorkExperience", index, "position", normalizeInput(e.target.value))
                }
              />
              {errors[`work_position_${index}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`work_position_${index}`]}
  </p>
)}
              <div className="flex flex-col">
                 <label className="text-sm font-medium">İşe Giriş Tarihi</label>
              <input
                type="date"
                               className={`p-3 border rounded-xl
    ${errors[`work_startDate_${index}`]
      ? "border-red-500"
      : "border-gray-300"}
  `}
                value={exp.startDate}
                onChange={(e) =>
                  updateArrayField(5, "last10YearsWorkExperience", index, "startDate", e.target.value)
                }
              />
              {errors[`work_startDate_${index}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`work_startDate_${index}`]}
  </p>
)}
              </div>

<div className="flex flex-col"> <label className="text-sm font-medium">İşten Çıkış Tarihi</label>

              <input
                type="date"
                               className={`p-3 border rounded-xl
    ${errors[`work_endDate_${index}`]
      ? "border-red-500"
      : "border-gray-300"}
  `}
                value={exp.endDate}
                onChange={(e) =>
                  updateArrayField(5, "last10YearsWorkExperience", index, "endDate", e.target.value)
                }
              />
              {errors[`work_endDate_${index}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`work_endDate_${index}`]}
  </p>
)}
              </div>


              <input
                               className={`p-3 border rounded-xl
    ${errors[`work_city_${index}`]
      ? "border-red-500"
      : "border-gray-300"}
  `}
                placeholder="Şehir"
                value={exp.city}
                onChange={(e) =>
                  updateArrayField(5, "last10YearsWorkExperience", index, "city", normalizeInput(e.target.value))
                }
              />
{errors[`work_city_${index}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`work_city_${index}`]}
  </p>
)}
              <input
                               className={`p-3 border rounded-xl
    ${errors[`work_country_${index}`]
      ? "border-red-500"
      : "border-gray-300"}
  `}
                placeholder="Ülke"
                value={exp.country}
                onChange={(e) =>
                  updateArrayField(5, "last10YearsWorkExperience", index, "country", normalizeInput(e.target.value))
                }
              />
              {errors[`work_country_${index}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`work_country_${index}`]}
  </p>
)}
            </div>

            {index > 0 && (
              <button
                type="button"
                className="mt-3 text-red-600 underline text-sm"
                onClick={() =>
                  removeArrayItem(5, "last10YearsWorkExperience", index)
                }
              >
                Bu Deneyimi Sil
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className="px-4 py-2 bg-blue-600 text-white rounded-xl"
          onClick={() =>
            addArrayItem(5, "last10YearsWorkExperience", {
              companyName: "",
              position: "",
              startDate: "",
              endDate: "",
              city: "",
              country: "",
            })
          }
        >
          + Yeni İş Deneyimi Ekle
        </button>
      </div>
    )}
  </section>
)}







          {form.currentStep === 6 && (
            <section>
              <h3 className="font-semibold mb-3 text-lg">6. Bölüm — Vize Geçmişi & Seyahatler</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Önceki Vize Reddi */}
                <div>
                  <label className="text-sm font-medium">
                    Kanada veya başka bir ülke için vize reddi yaşadınız mı?*
                  </label>
                  <select
                    name="previousVisaRefusal"
                    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.previousVisaRefusal ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}

                    value={form.steps[6].previousVisaRefusal || ""}
                    onChange={(e) => updateField(6, "previousVisaRefusal", e.target.value)}
                  >
                    <option value="">Seçiniz</option>
                    <option value="EVET">Evet</option>
                    <option value="HAYIR">Hayır</option>
                  </select>
                    {errors.previousVisaRefusal && (
      <p className="text-red-500 text-xs mt-1">{errors.previousVisaRefusal}</p>
    )}

                </div>

                {/* Reddedildi ise nedeni */}
                {form.steps[6].previousVisaRefusal === "EVET" && (
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium">Vize reddi nedeni</label>
                    <textarea
                     className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.previousVisaRefusal ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
                   
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
                     {errors.refusalReason && (
      <p className="text-red-500 text-xs mt-1">{errors.refusalReason}</p>
    )}

                  </div>
                )}

                {/* Daha önce Kanada'ya başvuru yapıldı mı? */}
                <div>
                  <label className="text-sm font-medium">
                    Daha önce Kanada’ya giriş yapmak için başvurdunuz mu?
                  </label>
                  <select
                    name="previousCanadaApplication"
                    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.previousCanadaApplication ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}

                    value={form.steps[6].previousCanadaApplication || ""}
                    onChange={(e) =>
                      updateField(6, "previousCanadaApplication", e.target.value)
                    }
                  >
                    <option value="">Seçiniz</option>
                    <option value="EVET">Evet</option>
                    <option value="HAYIR">Hayır</option>
                  </select>
                    {errors.previousCanadaApplication && (
      <p className="text-red-500 text-xs mt-1">{errors.previousCanadaApplication}</p>
    )}

                </div>
 <div>
      <label className="text-sm font-medium">
        Seyahat Başlangıç Tarihi *
      </label>
      <input
        type="date"
        min={today}
        className={`w-full mt-1 p-3 border rounded-xl 
          ${errors.travelStartDate ? "border-red-500" : ""}`}
        value={form.steps[6].travelStartDate || ""}
        onChange={(e) => {
          const value = e.target.value;

          updateField(6, "travelStartDate", value);

          if (value < today) {
            updateField(6, "errors", {
              ...form.steps[6].errors,
              travelStartDate: "Başlangıç tarihi bugünden önce olamaz"
            });
          } else {
            updateField(6, "errors", {
              ...form.steps[6].errors,
              travelStartDate: ""
            });
          }

          // Bitiş tarihi varsa tekrar kontrol et
          if (
            form.steps[6].travelEndDate &&
            form.steps[6].travelEndDate < value
          ) {
            updateField(6, "errors", {
              ...form.steps[6].errors,
              travelEndDate: "Bitiş tarihi başlangıçtan önce olamaz"
            });
          }
        }}
      />
      {errors.travelStartDate && (
        <p className="text-red-500 text-xs mt-1">
          {errors.travelStartDate}
        </p>
      )}
    </div>

    {/* SEYAHAT BİTİŞ */}
    <div>
      <label className="text-sm font-medium">
        Seyahat Bitiş Tarihi *
      </label>
      <input
        type="date"
        min={form.steps[6].travelStartDate || today}
        className={`w-full mt-1 p-3 border rounded-xl 
          ${errors.travelEndDate ? "border-red-500" : ""}`}
        value={form.steps[6].travelEndDate || ""}
        onChange={(e) => {
          const value = e.target.value;
          const start = form.steps[6].travelStartDate;

          updateField(6, "travelEndDate", value);

          if (value < today) {
            updateField(6, "errors", {
              ...form.steps[6].errors,
              travelEndDate: "Bitiş tarihi bugünden önce olamaz"
            });
          } else if (start && value < start) {
            updateField(6, "errors", {
              ...form.steps[6].errors,
              travelEndDate: "Bitiş tarihi başlangıçtan önce olamaz"
            });
          } else {
            updateField(6, "errors", {
              ...form.steps[6].errors,
              travelEndDate: ""
            });
          }
        }}
      />
      {errors.travelEndDate && (
        <p className="text-red-500 text-xs mt-1">
          {errors.travelEndDate}
        </p>
      )}
    </div>

    {/* KALINAN ADRES */}
    <div>
      <label className="text-sm font-medium">
       Konaklama Adresi
      </label>
      <input
       className={`w-full mt-1 p-3 border rounded-xl 
          ${errors.travelAddress ? "border-red-500" : ""}`}
        value={form.steps[6].travelAddress || ""}
        onChange={(e) =>
          updateField(
            6,
            "travelAddress",
            isMobile ? e.target.value : normalizeInput(e.target.value)
          )
        }
        onBlur={(e) => {
          if (isMobile) {
            updateField(
              6,
              "travelAddress",
              normalizeInput(e.target.value)
            );
          }
        }}
      />
       {errors.travelAddress && (
        <p className="text-red-500 text-xs mt-1">
          {errors.travelAddress}
        </p>
      )}
    </div>

    {/* TOPLAM PARA */}
    <div>
      <label className="text-sm font-medium">
        Toplam Birikim Miktarı(Banka Hesaplarındaki)
      </label>
      <input
        type="text"
        placeholder="100000 TL"
        min={0}
       className={`w-full mt-1 p-3 border rounded-xl 
          ${errors.totalMoney ? "border-red-500" : ""}`}
        value={form.steps[6].totalMoney || ""}
        onChange={(e) =>
          updateField(6, "totalMoney", e.target.value)
        }
      />
       {errors.totalMoney && (
        <p className="text-red-500 text-xs mt-1">
          {errors.totalMoney}
        </p>
      )}
    </div>
              </div>

              {/* -------------------------------------------------- */}
              {/* SON 5 YIL SEYAHATLER — DİNAMİK DİZİ */}
              {/* -------------------------------------------------- */}
              <div className="mt-10">
                <h4 className="font-semibold text-md mb-3">Son 5 Yılda Yaptığınız Seyahatler</h4>

                {form.steps[6].last5YearsTravel?.map((item, index) => (
                  <div key={index} className="border p-4 rounded-xl bg-gray-50 mb-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                      {/* Ülke */}
                      <div>
                        <label className="text-sm font-medium">Ülke *</label>
                       <input
  className="w-full mt-1 p-3 border rounded-xl"
  value={item.country || ""}
  placeholder="Örn: Almanya"
  onChange={(e) => {
    const value = e.target.value;

    updateArrayField(
      6,
      "last5YearsTravel",
      index,
      "country",
      isMobile ? value : normalizeInput(value)
    );
  }}
  onBlur={(e) => {
    if (isMobile) {
      updateArrayField(
        6,
        "last5YearsTravel",
        index,
        "country",
        normalizeInput(e.target.value)
      );
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
                          value={item.travelStartDate || ""}
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
                          value={item.travelEndDate || ""}
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
  value={item.travelPurpose || ""}
  onChange={(e) => {
    const value = e.target.value;

    updateArrayField(
      6,
      "last5YearsTravel",
      index,
      "travelPurpose",
      isMobile ? value : normalizeInput(value)
    );
  }}
  onBlur={(e) => {
    if (isMobile) {
      updateArrayField(
        6,
        "last5YearsTravel",
        index,
        "travelPurpose",
        normalizeInput(e.target.value)
      );
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
     
        <div className="flex items-center gap-3">
       {form.currentStep < 8 && (    <button
            type="button"
            onClick={goPrev}
            disabled={form.currentStep === 1}
            className="px-4 py-2 bg-white border rounded disabled:opacity-50 cursor-pointer"
          >
            Geri
          </button>)}
     {form.currentStep < 7 && (
          <button
            type="button"
            onClick={goNext}
            // disabled={!validateStep(form.currentStep, form)}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 cursor-pointer"
          >
            İleri
          </button> )}
        </div>
   
    
      {form.currentStep >= 7 && validateStep(7, form) && (
        <div className="flex flex-col gap-4 w-full">
     {!resMessage && (<div className="flex items-center gap-3">
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
     
      <div className="p-5 max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Formunuz başarılı şekilde gönderilmiştir.
        </h2>
        <Link href="/">   <button 
         onClick={() => {
        clearLocalStorage();
        
      }}
        className=" text-gray-700 cursor-pointer mt-5 border border-blue-300 px-4 py-2 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100">
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
      <AydinlatmaFormu open={openInfo}
        onClose={() => setOpenInfo(false)} />
    </div>
  );
}

