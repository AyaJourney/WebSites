"use client";
import AydinlatmaFormu from "@/app/components/modals/AydinlatmaFormu";
import { allCountries } from "@/helper/help";
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
     
      fullName: "",
      nationality:"",
      other_nationality:"",
      other_nationality_country:"",
      other_nationality_start_date:"",
      other_nationality_end_date:"",
      gender: "",
      maritalStatus: "",
      partner_full_name: "",
      partner_birth_date: "",
      partner_nationality:"",
      partner_travel_with_you:"",
      partner_passport_number:"",
      partner_lives_with_you:"",
      birthDate: "",
      birthPlace: "",
      phone_number:"",
      phone_number2:"",
      email:"",
      email2:"",
      home_address:"",
      post_code:"",
      home_owner:"",
      residence_duration:"",
      maidenName:"",
      past_addresses:"",
    bool_last_fullname:"",
      last_fullname:"",
       home_city: "",
    home_district: "",
    home_neighborhood: "",
    home_street: "",
    home_avenue: "",
    home_building_no: "",
    home_apartment_no: "",
    home_owner_info:"",
      
    },
       2: {
  boolean_child: "",
  child_count: "",

  // Anne
  mother_full_name: "",
  mother_birth_date: "",
  mother_travel_with_you: "",
  mother_nationality:"",
  mother_passport_number:"",

  // Baba
  father_full_name: "",
  father_birth_date: "",
  father_travel_with_you: "",
  father_nationality:"",
  father_passport_number:"",
  // Çocuklar
  child_names: [],              
  child_travel_with_you: []      
},

    3: {
       tcId:"",      
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
savings_type:"",
savings_type_other:"",
hasDependents:"",
dependentCount: 0,
  dependents: []

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
cover_expenses_address:"",

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
      travel_non_family_passport_number:"",
      travel_with_non_family_visa:"",
  uk_visited_last10: "",
  uk_visits: [
  {
    purpose: "",
    arrivalDate: "",
    departureDate: ""
  }
],
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
  boolean_travel_group: "",
  travel_group: "",


other_visited_countries:"",
 lastTravels: [
    {
      country: "",
      purpose: "",
      monthYear: "",
      durationDays: ""
    }
  ],
end_info:"",
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


function clearDs160Storage() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_METHOD_KEY);
  } catch (e) {
    // sessiz geç
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
    const getTravelCardCount = (value) => {
  if(value === "HAYIR") return 0;
  if (value === "1 KEZ") return 1;
  if (value === "2 KEZ") return 2;
  if (value === "3 KEZ") return 3;
  if (value === "4 KEZ") return 4;
  if (value === "5 KEZ") return 5;

  if (value === "6 VE UZERI") return 5;
  return 0;
};

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
    duplex: "half",
  });
if(res.ok){
  setResMessage(true)
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
  1: ["fullName", "gender", "maritalStatus", "birthDate", "birthPlace","email","phone_number","home_owner","post_code","home_address","residence_duration"],
  2: ["boolean_child", "mother_full_name", "mother_birth_date","mother_nationality","mother_travel_with_you","father_full_name","father_birth_date","father_nationality","father_travel_with_you"],
  3: ["tcId","passport_number", "Passport_start_date", "Passport_end_date","passport_issuing_authority","tc_card_end_date"],
  4: ["boolean_work","monthly_money","monthly_expenditure_amount","savings_type","savings","monthly_expenditure_amount","hasDependents"],
  5: ["travel_start_date","travel_end_date","spend_pound","travel_reason","boolean_cover_expenses","boolean_refused_visa","boolean_travel_group","have_invitation","has_family_in_uk","travel_with_non_family","uk_visited_last10","other_visited_countries","boolean_traveled_adroad","medical_treatment_uk","national_insurance_number_exist","uk_stay_application_last10","uk_visa_last10","uk_public_funds","visa_refused_or_banned"],

  6: ["passportFile","photoFile"],
};

const isValidResidenceDuration = (value = "") => {
  const text = value.trim().toUpperCase();

  // En az bir sayı + birim olmalı
  const pattern = /^(\d+\s*(YIL|AY|GÜN))(?:\s+\d+\s*(YIL|AY|GÜN))*$/;

  return pattern.test(text);
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
  if (step === 1) {
const duration = formData.steps[1]?.residence_duration;

  if (isEmpty(duration)) {
    addField("residence_duration");
  } else if (!isValidResidenceDuration(duration)) {
    addField("residence_duration_format");
  }
    if (stepData.home_owner === "DIGER") {
      addField("home_owner_info");
    }

    if (stepData.residence_months_total < 24) {
      addField("past_addresses");
    }
  }
if(step ===2){
      if (stepData.father_travel_with_you === "EVET") {

      addField("father_passport_number");
      }
      if (stepData.mother_travel_with_you === "EVET") {

      addField("mother_passport_number");
      }
}
  // ================= STEP 2 (CHILD) =================
  if (step === 2 && stepData.boolean_child === "EVET") {

    if (!stepData.child_count || Number(stepData.child_count) < 1) {
      addField("child_count");
    }

    const count = Number(stepData.child_count || 0);

    for (let i = 0; i < count; i++) {

      if (isEmpty(stepData.child_names?.[i]))
        addField(`child_name_${i}`);

      if (isEmpty(stepData.child_birth_date?.[i]))
        addField(`child_birth_date_${i}`);

      if (isEmpty(stepData.child_travel_with_you?.[i]))
        addField(`child_travel_with_you_${i}`);

      if (isEmpty(stepData.child_live?.[i]))
        addField(`child_live_${i}`);

      if (isEmpty(stepData.child_visa?.[i]))
        addField(`child_visa_${i}`);

      if (
        stepData.child_travel_with_you?.[i] === "EVET" &&
        isEmpty(stepData.child_passport_numbers?.[i])
      ) {
        addField(`child_passport_number_${i}`);
      }

      if (
        stepData.child_live?.[i] === "HAYIR" &&
        isEmpty(stepData.child_address?.[i])
      ) {
        addField(`child_address_${i}`);
      }
    }
  }

  // ================= STEP 4 =================
  if (step === 4) {

    if (stepData.boolean_work === "CALISIYOR") {
      ["work_year","own_work","work_name","work_address","work_phone","worker_title"]
        .forEach(addField);
    }

    if (stepData.boolean_work === "OGRENCI") {
      ["school_name","school_department","school_year"]
        .forEach(addField);
    }

    if (stepData.hasDependents === "EVET") {

      addField("dependentCount");

      (stepData.dependents || []).forEach((person, index) => {

        if (isEmpty(person.fullName))
          addField(`dependent_fullName_${index}`);

        if (isEmpty(person.relationship))
          addField(`dependent_relationship_${index}`);

        if (isEmpty(person.birthDate))
          addField(`dependent_birthDate_${index}`);

        if (isEmpty(person.livesWithYou))
          addField(`dependent_livesWithYou_${index}`);

        if (isEmpty(person.travelsWithYou))
          addField(`dependent_travelsWithYou_${index}`);
      });
    }
  }

  // ================= STEP 5 =================
  if (step === 5) {

    const {
      boolean_refused_visa,
      boolean_cover_expenses,
      have_invitation,
      invitation_type,
      has_family_in_uk,
      travel_with_non_family,
      medical_treatment_uk,
      national_insurance_number_exist,
      uk_stay_application_last10,
      uk_visa_last10,
      uk_public_funds,
      visa_refused_or_banned,
      uk_visited_last10
    } = stepData;

    if (boolean_refused_visa === "EVET")
      ["when_refused","refused_about"].forEach(addField);

    if (medical_treatment_uk === "EVET")
      addField("medical_treatment_details");

    if (national_insurance_number_exist === "EVET")
      addField("national_insurance_number");

    if (uk_stay_application_last10 === "EVET")
      addField("uk_stay_application_explanation");

    if (uk_visa_last10 === "EVET")
      addField("uk_visa_issue_date");

    if (uk_public_funds === "EVET")
      addField("uk_public_funds_details");

    if (visa_refused_or_banned === "EVET")
      addField("visa_refused_details");

    if (uk_visited_last10 === "EVET") {

      if (!stepData.uk_visited_count || stepData.uk_visited_count < 1)
        addField("uk_visited_count");

      (stepData.uk_visits || []).forEach((visit, index) => {

        if (isEmpty(visit.purpose))
          addField(`uk_visit_purpose_${index}`);

        if (isEmpty(visit.arrivalDate))
          addField(`uk_visit_arrivalDate_${index}`);

        if (isEmpty(visit.departureDate))
          addField(`uk_visit_departureDate_${index}`);

        if (
          visit.arrivalDate &&
          visit.departureDate &&
          visit.departureDate < visit.arrivalDate
        ) {
          addField(`uk_visit_invalidDate_${index}`);
        }
      });
    }

    if (boolean_cover_expenses === "HAYIR")
      ["who_cover_expenses","cover_expenses_phone","cover_expenses_email","money_cover_expenses","cover_expenses_reason","cover_expenses_address"]
        .forEach(addField);

    if (have_invitation === "EVET") {

      addField("invitation_type");

      if (invitation_type === "BIREYSEL")
        ["inviter_fullname","inviter_email","inviter_phone","inviter_address","invitation_reason"]
          .forEach(addField);

      if (invitation_type === "SIRKET")
        ["company_name","company_email","company_phone","company_address","invitation_reason"]
          .forEach(addField);
    }

    if (has_family_in_uk === "EVET")
      ["uk_family_relation","uk_family_fullname","uk_family_nationality","uk_family_legal_status","uk_family_has_temp_visa","uk_family_is_resident"]
        .forEach(addField);

    if (travel_with_non_family === "EVET")
      ["travel_non_family_fullname","travel_non_family_relation","travel_non_family_phone","travel_non_family_passport_number","travel_with_non_family_visa"]
        .forEach(addField);

    // OTHER TRAVEL CARDS
    const travelCount = getTravelCardCount(stepData.other_visited_countries);

    for (let i = 1; i <= travelCount; i++) {

      if (isEmpty(stepData[`lastTravel${i}_country`]))
        addField(`lastTravel${i}_country`);

      if (isEmpty(stepData[`lastTravel${i}_purpose`]))
        addField(`lastTravel${i}_purpose`);

      if (isEmpty(stepData[`lastTravel${i}_monthYear`]))
        addField(`lastTravel${i}_monthYear`);

      if (isEmpty(stepData[`lastTravel${i}_duration`]))
        addField(`lastTravel${i}_duration`);

      const arrival = stepData[`lastTravel${i}_monthYear`];
      const departure = stepData[`lastTravel${i}_duration`];

      if (arrival && departure && departure < arrival)
        addField(`lastTravel${i}_invalidDate`);
    }

    // ABROAD COUNTRY ARRAY
    if (stepData.boolean_traveled_adroad === "EVET") {

      const travels = stepData.abroad_country || [];

      if (!travels.length)
        addField("abroad_country_empty");

      travels.forEach((item, index) => {

        if (isEmpty(item.country))
          addField(`abroad_country_country_${index}`);

        if (isEmpty(item.purpose))
          addField(`abroad_country_purpose_${index}`);

        if (isEmpty(item.start))
          addField(`abroad_country_start_${index}`);

        if (isEmpty(item.end))
          addField(`abroad_country_end_${index}`);

        if (item.start && item.end && item.end < item.start)
          addField(`abroad_country_invalidDate_${index}`);
      });
    }
  }

  // ================= FINAL MISSING CHECK =================

  const missing = fields.filter(field => {
if (field === "residence_duration_format") {
  return !isValidResidenceDuration(
    stepData?.residence_duration
  );
}
    // DEPENDENT
    if (field.startsWith("dependent_")) {
      const [_, key, index] = field.split("_");
      return isEmpty(stepData.dependents?.[index]?.[key]);
    }

    // CHILD
    if (field.match(/_\d+$/)) {
      const parts = field.split("_");
      const index = parts.pop();
      const baseKey = parts.join("_");
      return isEmpty(stepData?.[baseKey]?.[index]);
    }

    // UK VISIT
    if (field.startsWith("uk_visit_")) {
      const parts = field.split("_");
      const key = parts[2];
      const index = parts[3];
      return isEmpty(stepData.uk_visits?.[index]?.[key]);
    }

    // ABROAD COUNTRY
    if (field.startsWith("abroad_country_")) {
      const parts = field.split("_");
      const key = parts[2];
      const index = parts[3];
      return isEmpty(stepData.abroad_country?.[index]?.[key]);
    }

    // NORMAL FIELD
    return isEmpty(stepData[field]);
  });

  return { valid: missing.length === 0, missing };
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
  setForm((prev) => {
    const updatedSteps = {
      ...prev.steps,
      [step]: {
        ...(prev.steps?.[step] || {}), // 🔥 KRİTİK SATIR
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
const updateChildAddress = (index, value) => {
    // Bu, önceki updateField'ın array içindeki elemanı güncelleyen özel versiyonu.
    const address = form.steps[2].child_address ? [...form.steps[2].child_address] : [];
    address[index] = value;
    
    // updateField'ı kullanarak state'i güncelle:
    updateField(2, "child_address", address);
};

const updateChildPassportNumber = (index, value) => {

 const passportNumbers = form.steps[2].child_passport_numbers ? [...form.steps[2].child_passport_numbers] : [];
    passportNumbers[index] = value;
    
    // updateField'ı kullanarak state'i güncelle:
    updateField(2, "child_passport_numbers", passportNumbers);
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
const handleChildAddressChange = (e, i) => {
    const value = e.target.value;
    
    if (isMobile) {
        // MOBILE: Normalizasyon yapma, değeri olduğu gibi sakla
        updateChildAddress(i, value);
    } else {
        // DESKTOP: Hemen normalize et
        updateChildAddress(i, normalizeInput(value));
    }
};
const handleChildAddressBlur = (e, i) => {
    const value = e.target.value;
    
    if (isMobile) {
        // MOBILE: onBlur tetiklendiğinde normalizasyonu yap
        updateChildAddress(i, normalizeInput(value));
    }
    // Desktop için onBlur'a gerek yok, zaten onChange'de halledildi.
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

const handleChildPassportNumberChange = (e, i) => {
    const value = e.target.value;
    
    if (isMobile) {
        // MOBILE: Normalizasyon yapma, değeri olduğu gibi sakla
        updateChildPassportNumber(i, value);
    } else {
        // DESKTOP: Hemen normalize et
        updateChildPassportNumber(i, normalizeInput(value));
    }
};

// 3. onBlur İşleyicisi
const handleChildPassportNumberBlur = (e, i) => {
    const value = e.target.value;
    
    if (isMobile) {
        // MOBILE: onBlur tetiklendiğinde normalizasyonu yap
        updateChildPassportNumber(i, normalizeInput(value));
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
function normalizeAndExtractDuration(value) {
  if (!value) return { formatted: "", months: null };

  let input = value.toUpperCase().trim();

  // Türkçe karakter düzeltme
  input = input
    .replace(/İ/g, "I")
    .replace(/Ü/g, "U")
    .replace(/Ş/g, "S")
    .replace(/Ç/g, "C")
    .replace(/Ö/g, "O")
    .replace(/Ğ/g, "G");

  // Birim kısaltmaları normalize
  input = input
    .replace(/YIL|YR|Y\b/g, "YIL")
    .replace(/AY|A\b/g, "AY")
    .replace(/HAFTA|HF|H\b/g, "HAFTA")
    .replace(/GUN|GÜN|G\b/g, "GUN");

  // Sayı ile birim arasına boşluk koy
  input = input.replace(/(\d)([A-Z])/g, "$1 $2");

  let totalMonths = 0;

  const yearMatch = input.match(/(\d+)\s*YIL/);
  const monthMatch = input.match(/(\d+)\s*AY/);
  const weekMatch = input.match(/(\d+)\s*HAFTA/);
  const dayMatch = input.match(/(\d+)\s*GUN/);

  let formattedParts = [];

  if (yearMatch) {
    const y = parseInt(yearMatch[1]);
    totalMonths += y * 12;
    formattedParts.push(`${y} YIL`);
  }

  if (monthMatch) {
    const m = parseInt(monthMatch[1]);
    totalMonths += m;
    formattedParts.push(`${m} AY`);
  }

  if (weekMatch) {
    const w = parseInt(weekMatch[1]);
    totalMonths += w / 4;
    formattedParts.push(`${w} HAFTA`);
  }

  if (dayMatch) {
    const d = parseInt(dayMatch[1]);
    totalMonths += d / 30;
    formattedParts.push(`${d} GÜN`);
  }

  if (formattedParts.length === 0) {
    return { formatted: input, months: null };
  }

  return {
    formatted: formattedParts.join(" "),
    months: parseFloat(totalMonths.toFixed(2)),
  };
}
function extractMonthsFromDuration(value) {
  if (!value) return null;

  let totalMonths = 0;

  const yearMatch = value.match(/(\d+)\s*YIL/);
  const monthMatch = value.match(/(\d+)\s*AY/);
  const weekMatch = value.match(/(\d+)\s*HAFTA/);
  const dayMatch = value.match(/(\d+)\s*GÜN|GUN/);

  if (yearMatch) {
    totalMonths += parseInt(yearMatch[1]) * 12;
  }

  if (monthMatch) {
    totalMonths += parseInt(monthMatch[1]);
  }

  if (weekMatch) {
    totalMonths += parseInt(weekMatch[1]) / 4;
  }

  if (dayMatch) {
    totalMonths += parseInt(dayMatch[1]) / 30;
  }

  if (
    !yearMatch &&
    !monthMatch &&
    !weekMatch &&
    !dayMatch
  ) {
    return null; // format algılanmadı ama input silinmez
  }

  return parseFloat(totalMonths.toFixed(2));
}
console.log(form)
const normalizeAddressPart = (value) => {
  if (!value) return "";

  let v = value.trim().toUpperCase();

  // Türkçe karakter düzeltme
  const map = { "Ç":"C","Ö":"O","Ş":"S","İ":"I","I":"I","Ğ":"G","Ü":"U" };
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
  if (suffix === "MAHALLESİ") {
    value = value.replace(/\b(MAH|MAH\.|MH|MH\.|MAHALE|MAHALLE|MAHALLESI)\b/gi, "");
  }

  // --- Cadde için temizleme ---
  if (suffix === "CADDE") {
    value = value.replace(/\b(CD|CAD|CAD\.|CADDE|CADDES|CADDESII|CADDESI)\b/gi, "");
  }

  // --- Sokak için temizleme ---
  if (suffix === "SOKAK") {
    value = value.replace(/\b(SK|SOK|SOK\.|SOKA|SOKAK|SOKAGI)\b/gi, "");
  }

  value = value.trim();

  return `${value} ${suffix}`.trim();
};



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


const updateDependent = (stepIndex, personIndex, field, value) => {

  let newValue = value;

  // 🔥 Sadece fullName alanında normalize uygula
  if (field === "fullName") {
    newValue = normalizeInput(value);
  }

  const updated = [...form.steps[stepIndex].dependents];

  updated[personIndex] = {
    ...updated[personIndex],
    [field]: newValue,
  };

  updateField(stepIndex, "dependents", updated);
};



  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-start justify-center">

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
     İngiltere vize başvuru formu 6(altı) bölümden oluşmaktadır.
   
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
    

      {/* AD SOYAD */}
      <div>
        <label className="text-sm font-medium">Ad Soyad (Pasaportta yazan)</label>
        <input
          name="fullName"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.fullName ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[1].fullName ||""}
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
<div>
  <label className="text-sm font-medium">
    Hangi Ülke Vatandaşısınız (Pasaportta yazan)
  </label>

  <select
    name="nationality"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${
        errors.nationality
          ? "border-red-500"
          : "border-gray-300 focus:ring-2 focus:ring-blue-500"
      }`}
    value={form.steps[1].nationality || ""}
    onChange={(e) => updateField(1, "nationality", e.target.value)}
  >
    <option value="">Seçiniz</option>

    {allCountries.map((country) => (
      <option key={country.value} value={country.value}>
        {country.label}
      </option>
    ))}
  </select>

  {errors.nationality && (
    <p className="text-red-500 text-xs mt-1">{errors.nationality}</p>
  )}
</div>


 <div>
        <label className="text-sm font-medium">Başka Ülke Vatandaşlığınız Oldu mu??</label>
        <select
          name="other_nationality"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.other_nationality ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[1].other_nationality || ""}
          onChange={(e) => updateField(1, "other_nationality", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">EVET</option>
          <option value="HAYIR">HAYIR</option>
        </select>
        {errors.other_nationality && <p className="text-red-500 text-xs mt-1">{errors.other_nationality}</p>}
      </div>
 {form.steps[1].other_nationality === "EVET" && (
  <>
<div>
  <label className="text-sm font-medium">
    Vatandaşlık Alınan Ülke
  </label>

  <select
    name="other_nationality_country"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${
        errors.other_nationality_country
          ? "border-red-500"
          : "border-gray-300 focus:ring-2 focus:ring-blue-500"
      }`}
    value={form.steps[1].other_nationality_country || ""}
    onChange={(e) =>
      updateField(1, "other_nationality_country", e.target.value)
    }
  >
    <option value="">Seçiniz</option>

    {allCountries.map((country) => (
      <option key={country.value} value={country.value}>
        {country.label}
      </option>
    ))}
  </select>

  {errors.other_nationality_country && (
    <p className="text-red-500 text-xs mt-1">
      {errors.other_nationality_country}
    </p>
  )}
</div>

         <div>
          <label className="text-sm font-medium">Vatandaşlık Başlama Tarihi</label>
          <input
            name="other_nationality_start_date"
            type="date"
             max={new Date().toISOString().split("T")[0]}  
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.other_nationality_start_date ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[1].other_nationality_start_date || ""}
        onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "other_nationality_start_date", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "other_nationality_start_date", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(1, "other_nationality_start_date", normalizedValue);
                }
            }}
            placeholder="Örn: AHMET PARLAK"
          />
          {errors.other_nationality_start_date && (
            <p className="text-red-500 text-xs mt-1">{errors.other_nationality_start_date}</p>
          )}
        </div>
           <div>
          <label className="text-sm font-medium">Vatandaşlık Bitiş Tarihi</label>
          <input
            name="other_nationality_end_date"
            type="date"
              
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.other_nationality_end_date ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[1].other_nationality_end_date || ""}
        onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "other_nationality_end_date", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "other_nationality_end_date", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(1, "other_nationality_end_date", normalizedValue);
                }
            }}
            placeholder="Örn: AHMET PARLAK"
          />
          {errors.other_nationality_end_date && (
            <p className="text-red-500 text-xs mt-1">{errors.other_nationality_end_date}</p>
          )}
        </div>

  </>
       
      )}
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
          <option value="KAYIT DIŞI BİRLİKTELİK">KAYIT DIŞI BİRLİKTELİK</option>

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
        <>
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
            <div>
          <label className="text-sm font-medium">Eşinin Doğum Tarihi</label>
          <input
          type="date"
          max={new Date().toISOString().split("T")[0]}
            name="partner_birth_date"
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.partner_birth_date ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[1].partner_birth_date || ""}
        onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "partner_birth_date", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "partner_birth_date", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(1, "partner_birth_date", normalizedValue);
                }
            }}
            // placeholder="Örn: AHMET PARLAK"
          />
          {errors.partner_birth_date && (
            <p className="text-red-500 text-xs mt-1">{errors.partner_birth_date}</p>
          )}
        </div>
    <div>
  <label className="text-sm font-medium">Eşinin Uyruğu</label>

  <select
    name="partner_nationality"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${
        errors.partner_nationality
          ? "border-red-500"
          : "border-gray-300 focus:ring-2 focus:ring-blue-500"
      }`}
    value={form.steps[1].partner_nationality || ""}
    onChange={(e) =>
      updateField(1, "partner_nationality", e.target.value)
    }
  >
    <option value="">Seçiniz</option>

    {allCountries.map((country) => (
      <option key={country.value} value={country.value}>
        {country.label}
      </option>
    ))}
  </select>

  {errors.partner_nationality && (
    <p className="text-red-500 text-xs mt-1">
      {errors.partner_nationality}
    </p>
  )}
</div>


   <div>
        <label className="text-sm font-medium">Eşinizle Birlikte mi Yaşıyorsunuz?</label>
        <select
          name="partner_lives_with_you"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.partner_lives_with_you ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[1].partner_lives_with_you || ""}
          onChange={(e) => updateField(1, "partner_lives_with_you", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">EVET</option>
          <option value="HAYIR">HAYIR</option>
         

        </select>
        {errors.partner_lives_with_you && (
          <p className="text-red-500 text-xs mt-1">{errors.partner_lives_with_you}</p>
        )}
      </div>
   <div>
        <label className="text-sm font-medium">İngiltere'ye Eşinizle mi Seyahat Edeceksiniz?</label>
        <select
          name="partner_travel_with_you"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.partner_travel_with_you ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[1].partner_travel_with_you || ""}
          onChange={(e) => updateField(1, "partner_travel_with_you", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">EVET</option>
          <option value="HAYIR">HAYIR</option>
         

        </select>
        {errors.partner_travel_with_you && (
          <p className="text-red-500 text-xs mt-1">{errors.partner_travel_with_you}</p>
        )}
      </div>
    {form.steps[1].partner_travel_with_you === "EVET" && (    <div>
          <label className="text-sm font-medium">Eşinin Pasaport Numarası</label>
          <input
            name="partner_passport_number"
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.partner_passport_number ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[1].partner_passport_number || ""}
        onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "partner_passport_number", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "partner_passport_number", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(1, "partner_passport_number", normalizedValue);
                }
            }}

          />
          {errors.partner_passport_number && (
            <p className="text-red-500 text-xs mt-1">{errors.partner_passport_number}</p>
          )}
        </div>)}   
    
        </>
      
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
        <label className="text-sm font-medium">Daha Önce Başka Ad veya Soyad Kullandınız mı?</label>
        <select
          name="bool_last_fullname"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.bool_last_fullname ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[1].bool_last_fullname || ""}
          onChange={(e) => updateField(1, "bool_last_fullname", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">EVET</option>
          <option value="HAYIR">HAYIR</option>
         

        </select>
        {errors.bool_last_fullname && (
          <p className="text-red-500 text-xs mt-1">{errors.bool_last_fullname}</p>
        )}
      </div>
            {form.steps[1].bool_last_fullname === "EVET" && (
        <div>
          <label className="text-sm font-medium">Önceden Kullandığınız Ad veya Soyad</label>
          <input
            name="last_fullname"
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.last_fullname ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[1].last_fullname || ""}
        onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(1, "last_fullname", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(1, "last_fullname", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(1, "last_fullname", normalizedValue);
                }
            }}
            // placeholder="Örn: AHMET PARLAK"
          />
          {errors.last_fullname && (
            <p className="text-red-500 text-xs mt-1">{errors.last_fullname}</p>
          )}
        </div>
      )}
<div>
  <label className="text-sm font-medium">Doğum Tarihiniz</label>
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
        <label className="text-sm font-medium">Doğum Yeriniz(Pasaportta yazan)</label>
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
          value={form.steps[1].phone_number ||""}
          onChange={(e) => updateField(1, "phone_number", e.target.value)}
          placeholder="+90 5XX XXX XX XX"
        />
        {errors.phone_number && (
          <p className="text-red-500 text-xs mt-1">{errors.phone_number}</p>
        )}
      </div>
      <div>
        <label className="text-sm font-medium">Size Ait Başka Telefon Numarası(varsa)</label>
        <input
          name="phone_number2"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.phone_number2 ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[1].phone_number2 || ""}
          onChange={(e) => updateField(1, "phone_number2", e.target.value)}
          placeholder="+90 5XX XXX XX XX"
        />
        {errors.phone_number2 && (
          <p className="text-red-500 text-xs mt-1">{errors.phone_number2}</p>
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
          value={form.steps[1].email ||""}
          onChange={(e) => updateField(1, "email", e.target.value)}
          placeholder="ornek@mail.com"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>
   <div>
        <label className="text-sm font-medium">Size Ait Başka E-posta Adresi(varsa)</label>
        <input
          name="email2"
          type="email"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.email2 ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[1].email2 || ""}
          onChange={(e) => updateField(1, "email2", e.target.value)}
          placeholder="ornek@mail.com"
        />
        {errors.email2 && (
          <p className="text-red-500 text-xs mt-1">{errors.email2}</p>
        )}
      </div>
      {/* POSTA KODU */}
      {/* <div>
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
      </div> */}

      {/* EV ADRESİ */}
           <div className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

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
    <label className="text-sm font-medium">Cadde *</label>
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
    <label className="text-sm font-medium">Sokak *</label>
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
          value={form.steps[1].post_code}
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
    <option value="DIGER">DİĞER</option>
 
  </select>

  {errors.home_owner && (
    <p className="text-red-500 text-xs mt-1">{errors.home_owner}</p>
  )}
</div>
{form.steps[1].home_owner == "DIGER" &&
 (
  <div className="col-span-full mt-4">
    <label className="text-sm font-medium">Açıklayınız</label>

    <textarea
      name="home_owner_info"
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300 focus:ring-2 focus:ring-blue-500 resize-none ${errors.home_owner_info ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      placeholder="ÖRN: Ev sahibi babam ama kira vermiyorum"
      rows={4}
      
      value={form.steps[1].home_owner_info || ""}
      onChange={(e) => {
        const raw = e.target.value;

        if (isMobile) {
          updateField(1, "home_owner_info", raw);
        } else {
          updateField(1, "home_owner_info", normalizeAddressInput(raw));
        }
      }}
      onBlur={(e) => {
        if (isMobile) {
          const normalized = normalizeAddressInput(e.target.value);
          updateField(1, "home_owner_info", normalized);
        }
      }}
    />

    {errors.home_owner_info && (
      <p className="text-red-500 text-xs mt-1">{errors.home_owner_info}</p>
    )}
  </div>
)}
<div>
  <label className="text-sm font-medium">
    Bulunduğunuz evde ne kadar süredir yaşıyorsunuz?
  </label>

<input
  name="residence_duration"
  className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
  ${errors.residence_duration ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
  value={form.steps[1].residence_duration || ""}
  placeholder="Örn: 3 YIL 1 AY 8 GÜN"
  
  onChange={(e) => {
    // SADECE büyük harfe çevir
    updateField(1, "residence_duration", e.target.value.toUpperCase());
  }}

  onBlur={(e) => {
    const raw = e.target.value;

    const { formatted, months } = normalizeAndExtractDuration(raw);

    // Blur'da düzenle
    updateField(1, "residence_duration", formatted);

    if (months !== null) {
      updateField(1, "residence_months_total", months);
    } else {
      updateField(1, "residence_months_total", null);
    }
  }}
/>

  {errors.residence_duration && (
    <p className="text-red-500 text-xs mt-1">
      {errors.residence_duration}
    </p>
  )}
  {errors.residence_duration_format && (
  <p className="text-red-500 text-xs mt-1">
    Lütfen süreyi YIL AY GÜN formatında giriniz.
  </p>
)}
</div>

{form.steps[1].residence_months_total !== null &&
 form.steps[1].residence_months_total < 24 && (
  <div className="col-span-full mt-4">
    <label className="text-sm font-medium">Geçmiş 2 yıldaki adreslerinizi yazınız</label>

    <textarea
      name="past_addresses"
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300 focus:ring-2 focus:ring-blue-500 resize-none ${errors.past_addresses ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
           className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.mother_full_name ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
        {errors.mother_full_name && (
            <p className="text-red-500 text-xs mt-1">{errors.mother_full_name}</p>
          )}
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
  <label className="text-sm font-medium">Anne Uyruğu</label>

  <select
    name="mother_nationality"
     className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.mother_nationality ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[2].mother_nationality || ""}
    onChange={(e) =>
      updateField(2, "mother_nationality", e.target.value)
    }
  >
    <option value="">Seçiniz</option>

    {allCountries.map((country) => (
      <option key={country.value} value={country.value}>
        {country.label}
      </option>
    ))}
  </select>
   {errors.mother_nationality && (
            <p className="text-red-500 text-xs mt-1">{errors.mother_nationality}</p>
          )}
</div>

               
<div>
  <label className="text-sm font-medium">Anne sizinle seyahat edecek mi?</label>
  <select
    name="mother_travel_with_you"
   className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.mother_travel_with_you ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[2].mother_travel_with_you || ""}
    onChange={(e) => updateField(2, "mother_travel_with_you", e.target.value)}
  >
    <option value="">Seçiniz</option>
    <option value="EVET">Evet</option>
    <option value="HAYIR">Hayır</option>
  </select>
     {errors.mother_travel_with_you && (
            <p className="text-red-500 text-xs mt-1">{errors.mother_travel_with_you}</p>
          )}
</div>

    {form.steps[2].mother_travel_with_you === "EVET" && (    <div>
          <label className="text-sm font-medium">Annenizin Pasaport Numarası</label>
          <input
            name="mother_passport_number"
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.mother_passport_number ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[2].mother_passport_number || ""}
        onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(2, "mother_passport_number", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(2, "mother_passport_number", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(2, "mother_passport_number", normalizedValue);
                }
            }}

          />
          {errors.mother_passport_number && (
            <p className="text-red-500 text-xs mt-1">{errors.mother_passport_number}</p>
          )}
        </div>)}   




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
  <label className="text-sm font-medium">Baba Uyruğu</label>

  <select
    name="father_nationality"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.father_nationality ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[2].father_nationality || ""}
    onChange={(e) =>
      updateField(2, "father_nationality", e.target.value)
    }
  >
    <option value="">Seçiniz</option>

    {allCountries.map((country) => (
      <option key={country.value} value={country.value}>
        {country.label}
      </option>
    ))}
  </select>
   {errors.father_nationality && (
    <p className="text-red-500 text-xs mt-1">{errors.father_nationality}</p>
  )}
</div>

<div>
  <label className="text-sm font-medium">Babanız sizinle seyahat edecek mi?</label>
  <select
    name="father_travel_with_you"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.father_travel_with_you ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[2].father_travel_with_you || ""}
    onChange={(e) => updateField(2, "father_travel_with_you", e.target.value)}
  >
    <option value="">Seçiniz</option>
    <option value="EVET">Evet</option>
    <option value="HAYIR">Hayır</option>
  </select>
   {errors.father_travel_with_you && (
    <p className="text-red-500 text-xs mt-1">{errors.father_travel_with_you}</p>
  )}
</div>
  {form.steps[2].father_travel_with_you === "EVET" && (   
     <div>
          <label className="text-sm font-medium">Babanızın Pasaport Numarası</label>
          <input
            name="father_passport_number"
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.father_passport_number ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[2].father_passport_number || ""}
        onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(2, "father_passport_number", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(2, "father_passport_number", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(2, "father_passport_number", normalizedValue);
                }
            }}

          />
          {errors.father_passport_number && (
            <p className="text-red-500 text-xs mt-1">{errors.father_passport_number}</p>
          )}
        </div>)}  
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
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.child_count ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[2].child_count || ""}
            onChange={(e) => updateField(2, "child_count", e.target.value)}
          />
          {errors.child_count && (
            <p className="text-red-500 text-xs mt-1">{errors.child_count}</p>
          )}
        </div>
      )}

      {/* Çocuk isimleri */}
      {form.steps[2].boolean_child === "EVET" &&
        Array.from({ length: Number(form.steps[2].child_count || 0) }).map((_, i) => (
          <div key={i} className="col-span-full grid grid-cols-1 md:grid-cols-2  gap-6" >
            <div>
        <label className="text-sm font-medium">{i + 1}. Çocuk Adı Soyadı</label>
        <input
          name={`child_name_${i}`}
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
  ${errors[`child_name_${i}`] ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[2].child_names?.[i] || ""}
          onChange={(e) => handleChildNameChange(e, i)}
          onBlur={(e) => handleChildNameBlur(e, i)}
          placeholder="Örn: ALİ PARLAK"
        />
        {errors[`child_name_${i}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`child_name_${i}`]}
  </p>
)}
      </div>
   <div>
  <label className="text-sm font-medium">{i + 1}. Doğum Tarihi</label>
  <input
    type="date"
   name={`child_birth_date_${i}`}
    max={new Date().toISOString().split("T")[0]}   // bugünden sonrası kapalı
    min="1900-01-01"                                // saçma eski tarihler kapalı
             className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
  ${errors[`child_birth_date_${i}`] ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[2].child_birth_date?.[i] || ""}
    onChange={(e) => {
      // ❗ Sadece değeri sakla — validation burada çalışmayacak
      updateField(2, "child_birth_date", {
        ...(form.steps[2].child_birth_date || {}),
        [i]: e.target.value
      });
    }}
    onBlur={(e) => {
      const selected = e.target.value;

      // ❗ Eğer tarih TAM değilse validation yapma
      if (selected.length < 10) return;

      const today = new Date().toISOString().split("T")[0];

      // 🔴 Gelecek tarih kontrolü


      // 🔴 Çok eski tarih kontrolü


    
    }}
  />
{errors[`child_birth_date_${i}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`child_birth_date_${i}`]}
  </p>
)}
</div>
      {/* 🔥 Çocuk Sizinle Seyahat Edecek mi? */}
      <div>
        <label className="text-sm font-medium">{i + 1}. Çocuk sizinle seyahat edecek mi?</label>
        <select
          name={`child_travel_with_you_${i}`}
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
  ${errors[`child_travel_with_you_${i}`] ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
      <div>
        <label className="text-sm font-medium">{i + 1}. Çocuk sizinle beraber mi yaşıyor?</label>
        <select
          name={`child_live_${i}`}
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
  ${errors[`child_live_${i}`] ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[2].child_live?.[i] || ""}
          onChange={(e) => updateField(2, "child_live", {
            ...(form.steps[2].child_live || {}),
            [i]: e.target.value
          })}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
        {errors[`child_live_${i}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`child_live_${i}`]}
  </p>
)}
      </div>

     {form.steps[2].child_live?.[i] === "HAYIR" && (   <div>
        <label className="text-sm font-medium">{i + 1}. Çocuk Adresi</label>
        <input
          name={`child_address_${i}`}
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
  ${errors[`child_address_${i}`] ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[2].child_address?.[i] || ""}
          onChange={(e) => handleChildAddressChange(e, i)}
          onBlur={(e) => handleChildAddressBlur(e, i)}
          placeholder="Adresi giriniz"
        />
      {errors[`child_address_${i}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`child_address_${i}`]}
  </p>
)}
      </div>)}  




          <div>
        <label className="text-sm font-medium">{i + 1}. Çocuk İngiltere vizesi var mı?</label>
        <select
          name={`child_visa_${i}`}
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
  ${errors[`child_visa_${i}`] ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[2].child_visa?.[i] || ""}
          onChange={(e) => updateField(2, "child_visa", {
            ...(form.steps[2].child_visa || {}),
            [i]: e.target.value
          })}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
                {errors[`child_visa_${i}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`child_visa_${i}`]}
  </p>
)}
      </div>
        {form.steps[2].child_travel_with_you?.[i] === "EVET" && (   <div>
        <label className="text-sm font-medium">{i + 1}. Çocuk Pasaport No</label>
        <input
          name={`child_passport_number_${i}`}
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
  ${errors[`child_passport_number_${i}`] ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[2].child_passport_numbers?.[i] || ""}
          onChange={(e) => handleChildPassportNumberChange(e, i)}
          onBlur={(e) => handleChildPassportNumberBlur(e, i)}
          placeholder="Örn: C12345678"
        />
                        {errors[`child_passport_number_${i}`] && (
  <p className="text-red-500 text-xs mt-1">
    {errors[`child_passport_number_${i}`]}
  </p>
)}
      </div>)}           

        
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
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
  ${errors.passport_number ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
                                {errors.passport_number && (
  <p className="text-red-500 text-xs mt-1">
    {errors.passport_number}
  </p>
)}
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
          placeholder="Pasaportta yazanı giriniz"
        />
          {errors.passport_issuing_authority && (
    <p className="text-red-500 text-xs mt-1">{errors.passport_issuing_authority}</p>
  )}
      </div>
  <div>
        <label className="text-sm font-medium">T.C. Kimlik No</label>
        <input
          name="tcId"
          maxLength={11}
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.tcId ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[3].tcId ||""}
          onChange={(e) => updateField(3, "tcId", e.target.value)}
          placeholder="Örn: 12345678901"
        />
        {errors.tcId && <p className="text-red-500 text-xs mt-1">{errors.tcId}</p>}
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
          <option value="CALISMIYOR">Çalışmıyor</option>
        </select>
           {errors.boolean_work && (
            <p className="text-red-500 text-xs mt-1">{errors.boolean_work}</p>
          )}
      </div>
   {form.steps[4].boolean_work === "OGRENCI" && (
        <>
          <div>
            <label className="text-sm font-medium">Okul Adı</label>
            <input
              name="school_name"
              className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.school_name ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
                       {errors.school_name && (
            <p className="text-red-500 text-xs mt-1">{errors.school_name}</p>
          )}
          </div>

          <div>
            <label className="text-sm font-medium">Bölüm</label>
            <input
              name="school_department"
              className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.school_department ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
                       {errors.school_department && (
            <p className="text-red-500 text-xs mt-1">{errors.school_department}</p>
          )}
          </div>

          <div>
            <label className="text-sm font-medium">Eğitim başlangıç tarihi</label>
            <input
              type="date"
            
              name="school_year"
              className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.school_year ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
              value={form.steps[4].school_year || ""}
              onChange={(e) => updateField(4, "school_year", normalizeInput(e.target.value))}
            />
                       {errors.school_year && (
            <p className="text-red-500 text-xs mt-1">{errors.school_year}</p>
          )}
          </div>
        </>
      )}
      {/* Çalışan veya emekli veya çalışmıyor ise iş yeri bilgileri */}
      {(form.steps[4].boolean_work === "CALISIYOR") && (
        <>
          <div>
        <label className="text-sm font-medium">İş Yeri Adı</label>  
            <input
              name="work_name"
              className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.work_name ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
             {errors.work_name && (
            <p className="text-red-500 text-xs mt-1">{errors.work_name}</p>
          )}
          </div>

          <div>
       <label className="text-sm font-medium">İş Yeri Adresi</label>        
            <input
              name="work_address"
              className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.work_address ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
             {errors.work_address && (
            <p className="text-red-500 text-xs mt-1">{errors.work_address}</p>
          )}
          </div>

          <div>
              <label className="text-sm font-medium">İş Yeri Telefonu</label>     
      
            <input
              name="work_phone"
              className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.work_phone ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
              value={form.steps[4].work_phone || ""}
              onChange={(e) => updateField(4, "work_phone", e.target.value)}
            />
             {errors.work_phone && (
            <p className="text-red-500 text-xs mt-1">{errors.work_phone}</p>
          )}
          </div>

          <div>
              <label className="text-sm font-medium">Göreviniz / Ünvanınız</label>        

            <input
              name="worker_title"
              className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.worker_title ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
             {errors.worker_title && (
            <p className="text-red-500 text-xs mt-1">{errors.worker_title}</p>
          )}
          </div>

          <div>
           
            <label className="text-sm font-medium">Şu an çalıştığınız işe başlama tarihi</label>       

            <input
              type="date"
              // min="0"
              name="work_year"
              className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.work_year ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
              value={form.steps[4].work_year || ""}
              onChange={(e) => updateField(4, "work_year",normalizeInput( e.target.value))}
              placeholder="Örn: 5 Yıl"
            />
             {errors.work_year && (
            <p className="text-red-500 text-xs mt-1">{errors.work_year}</p>
          )}
          </div>

          {form.steps[4].boolean_work === "CALISIYOR" && (
            <div>
              <label className="text-sm font-medium">Bu iş yeri sizin mi?</label>
              <select
                name="own_work"
                className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.own_work ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
                value={form.steps[4].own_work || ""}
                onChange={(e) => updateField(4, "own_work", e.target.value)}
              >
                <option value="">Seçiniz</option>
                <option value="EVET">Evet</option>
                <option value="HAYIR">Hayır</option>
                <option value="DIGER">Diğer</option>

              </select>
               {errors.own_work && (
            <p className="text-red-500 text-xs mt-1">{errors.own_work}</p>
          )}
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
        <label className="text-sm font-medium">Düzenli bir birikime sahip misiniz?</label>
        <select
          name="savings_type"
                   className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.savings_type ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[4].savings_type || ""}
          onChange={(e) => updateField(4, "savings_type", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="HAYIR">Hayır</option>
          <option value="AILE DESTEGI">Aile Desteği</option>
          <option value="EMEKLI MAASI">Emekli Maaşı</option>
          <option value="YATIRIM">Yatırım</option>

          <option value="DIGER">Diğer</option>

        </select>
          {errors.savings_type && <p className="text-red-500 text-xs mt-1">{errors.savings_type}</p>}
      </div>

{form.steps[4].savings_type === "DIGER" && (
  <div className="mt-2">
    <label className="text-sm font-medium">Lütfen diğer birikiminizi detaylandırınız</label>
    <input
      name="savings_type_other"
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.savings_type_other ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      value={form.steps[4].savings_type_other || ""}
      onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "savings_type_other", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "savings_type_other", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "savings_type_other", normalizedValue);
                }
            }}
      placeholder="Detaylandırınız"
    />
      {errors.savings_type_other && <p className="text-red-500 text-xs mt-1">{errors.savings_type_other}</p>}
  </div>
)}


    <div>
      <label className="text-sm font-medium">Bu gelir dışında birikiminiz var mı?</label>
      <input
        name="savings"
        className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.savings ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
        {errors.savings && <p className="text-red-500 text-xs mt-1">{errors.savings}</p>}
    </div>

    <div>
      <label className="text-sm font-medium">Aylık kazancınız dışında yan gelirleriniz var mı?</label>
      <input
        name="sideline"
        className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.sideline ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
        {errors.sideline && <p className="text-red-500 text-xs mt-1">{errors.sideline}</p>}
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


<div>
  <label className="text-sm font-medium">
    Bakmakla yükümlü olduğunuz biri(leri) var mı?
  </label>

  <select
    name="hasDependents"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
            ${errors.hasDependents ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[4].hasDependents || ""}
    onChange={(e) => {
      updateField(4, "hasDependents", e.target.value);

      if (e.target.value === "HAYIR") {
        updateField(4, "dependentCount", 0);
        updateField(4, "dependents", []);
      }
    }}
  >
    <option value="">Seçiniz</option>
    <option value="EVET">EVET</option>
    <option value="HAYIR">HAYIR</option>
  </select>
    {errors.hasDependents && <p className="text-red-500 text-xs mt-1">{errors.hasDependents}</p>}
</div>
{form.steps[4].hasDependents === "EVET" && (
  <div >
    <label className="text-sm font-medium">
      Kaç kişiye bakmakla yükümlüsünüz?
    </label>

    <input
      type="number"
      min={1}
      max={10}
      placeholder="Örn: 2"
      className="w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300"
      value={form.steps[4].dependentCount || ""}
      onChange={(e) => {
        let count = Number(e.target.value);

        // güvenlik
        if (count < 1) count = 1;
        if (count > 10) count = 10;

        updateField(4, "dependentCount", count);
        updateField(
          4,
          "dependents",
          Array.from({ length: count }, () => ({
            fullName: "",
            relationship: "",
            birthDate: "",
            livesWithYou: "",
            travelsWithYou: "",
          }))
        );
      }}
    />
  </div>
)}

{form.steps[4].dependents?.map((person, index) => (
  <div
    key={index}
    className="mt-6 rounded-2xl border border-gray-200 p-4 shadow-sm"
  >
    <h4 className="font-semibold text-gray-800 mb-4">
      Kişi {index + 1}
    </h4>

     <label>Adı Soyadı</label>
    <input
      type="text"
      placeholder="Ad Soyad"
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors[`dependent_fullName_${index}`]  ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      value={person.fullName}
      onChange={(e) =>
        updateDependent(4, index, "fullName", e.target.value)
      }
    />
 {errors[`dependent_fullName_${index}`]  && (
    <p className="text-red-500 text-xs mt-1">{errors[`dependent_fullName_${index}`] }</p>
  )}
      <label>Sizinle olan ilişkisi</label>
    <select
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors[`dependent_relationship_${index}`]  ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      value={person.relationship}
      onChange={(e) =>
        updateDependent(4, index, "relationship", e.target.value)
      }
    >
      <option value="">İlişki</option>
      <option value="ES">Eş</option>
      <option value="COCUK">Çocuk</option>
      <option value="ANNE">Anne</option>
      <option value="BABA">Baba</option>
      <option value="DIGER">Diğer</option>
    </select>
 {errors[`dependent_relationship_${index}`]  && (
    <p className="text-red-500 text-xs mt-1">{errors[`dependent_relationship_${index}`] }</p>
  )}
   <label>Doğum Tarihi</label>
    <input
      type="date"
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors[`dependent_birthDate_${index}`]  ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      value={person.birthDate}
      onChange={(e) =>
        updateDependent(4, index, "birthDate", e.target.value)
      }
    />
 {errors[`dependent_birthDate_${index}`]  && (
    <p className="text-red-500 text-xs mt-1">{errors[`dependent_birthDate_${index}`] }</p>
  )}
      <label>Sizinle mi yaşıyor?</label>
    <select
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors[`dependent_livesWithYou_${index}`]  ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      value={person.livesWithYou}
      onChange={(e) =>
        updateDependent(4, index, "livesWithYou", e.target.value)
      }
    >
      <option value="">Sizinle mi yaşıyor?</option>
      <option value="EVET">EVET</option>
      <option value="HAYIR">HAYIR</option>
    </select>
 {errors[`dependent_livesWithYou_${index}`]  && (
    <p className="text-red-500 text-xs mt-1">{errors[`dependent_livesWithYou_${index}`] }</p>
  )}
      <label>Sizinle mi seyahat edecek?</label>
    <select
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors[`dependent_travelsWithYou_${index}`]  ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      value={person.travelsWithYou}
      onChange={(e) =>
        updateDependent(4, index, "travelsWithYou", e.target.value)
      }
    >
      <option value="">Sizinle mi seyahat edecek?</option>
      <option value="EVET">EVET</option>
      <option value="HAYIR">HAYIR</option>
    </select>
     {errors[`dependent_travelsWithYou_${index}`]  && (
    <p className="text-red-500 text-xs mt-1">{errors[`dependent_travelsWithYou_${index}`] }</p>
  )}
  </div>
))}

    
  </>
)}


      {/* Öğrenci ise okul bilgileri */}
   
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
           className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.boolean_cover_expenses ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[5].boolean_cover_expenses || ""}
          onChange={(e) => updateField(5, "boolean_cover_expenses", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
        {errors.boolean_cover_expenses && (
            <p className="text-red-500 text-xs mt-1">{errors.boolean_cover_expenses}</p>
          )}
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
        className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.who_cover_expenses ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
       {errors.who_cover_expenses && (
            <p className="text-red-500 text-xs mt-1">{errors.who_cover_expenses}</p>
          )}
    </div>


    {/* Telefon */}
    <div>
      <label className="text-sm font-medium">
        Masrafları Karşılayacak Kişinin Telefonu
      </label>
      <input
        name="cover_expenses_phone"
        className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.cover_expenses_phone ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
       {errors.cover_expenses_phone && (
            <p className="text-red-500 text-xs mt-1">{errors.cover_expenses_phone}</p>
          )}
    </div>

    {/* Email */}
    <div>
      <label className="text-sm font-medium">
        Masrafları Karşılayacak Kişinin Email Adresi
      </label>
      <input
        type="email"
        name="cover_expenses_email"
        className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.cover_expenses_email ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
        value={form.steps[5].cover_expenses_email || ""}
        onChange={(e) => {
         
            updateField(5, "cover_expenses_email", e.target.value);
         
          }
        }
       
      />
       {errors.cover_expenses_email && (
            <p className="text-red-500 text-xs mt-1">{errors.cover_expenses_email}</p>
          )}
    </div>


    {/* Katkı Tutarı */}
    <div>
      <label className="text-sm font-medium">
        Masrafları Karşılayanın Katkı Tutarı (Pound)
      </label>
      <input
        name="money_cover_expenses"
        className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.money_cover_expenses ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
       {errors.money_cover_expenses && (
            <p className="text-red-500 text-xs mt-1">{errors.money_cover_expenses}</p>
          )}
    </div>
    {/* Katkı Sebebi */}
    <div>
      <label className="text-sm font-medium">
        Masrafları Karşılayanın Katkıda Bulunma Sebebi
      </label>
      <textarea
        name="cover_expenses_reason"
        className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300 resize-none ${errors.cover_expenses_reason ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
       {errors.cover_expenses_reason && (
            <p className="text-red-500 text-xs mt-1">{errors.cover_expenses_reason}</p>
          )}
    </div>

       <div>
      <label className="text-sm font-medium">
        Masrafları Karşılayacak Kişinin Adresi
      </label>
      <textarea
        name="cover_expenses_address"
               className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300 resize-none ${errors.cover_expenses_address ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
        rows={3}
        value={form.steps[5].cover_expenses_address || ""}
        onChange={(e) => {
          if (isMobile) {
            updateField(5, "cover_expenses_address", e.target.value);
          } else {
            updateField(5, "cover_expenses_address", normalizeInput(e.target.value));
          }
        }}
        onBlur={(e) => {
          if (isMobile) {
            const normalizedValue = normalizeInput(e.target.value);
            updateField(5, "cover_expenses_address", normalizedValue);
          }
        }}
      />
       {errors.cover_expenses_address && (
            <p className="text-red-500 text-xs mt-1">{errors.cover_expenses_address}</p>
          )}
    </div>
  </>
)}




      {/* Daha önce vize reddi */}
      <div>
        <label className="text-sm font-medium">Daha önce İngiltere'den ret aldınız mı?</label>
        <select
          name="boolean_refused_visa"
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.boolean_refused_visa ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[5].boolean_refused_visa || ""}
          onChange={(e) => updateField(5, "boolean_refused_visa", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
        {errors.boolean_refused_visa && (
            <p className="text-red-500 text-xs mt-1">{errors.boolean_refused_visa}</p>
          )}
      </div>

      {form.steps[5].boolean_refused_visa === "EVET" && (
        <>
          <div>
            <label className="text-sm font-medium">Ne Zaman?</label>
            <input
              type="month"
              name="when_refused"
              className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300 ${errors.when_refused ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
              value={form.steps[5].when_refused || ""}
              onChange={(e) => updateField(5, "when_refused", e.target.value)}

            />
             {errors.when_refused && <p className="text-red-500 text-xs mt-1">{errors.when_refused}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Reddin Sebebi</label>
            <textarea
              name="refused_about"
              rows={3}
              className={`w-full resize-none mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300 ${errors.refused_about ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
              {errors.refused_about && <p className="text-red-500 text-xs mt-1">{errors.refused_about}</p>}
          </div>
        </>
      )}
    </div>
{/* GRUP SEYAHAT */}
    <div>
        <label className="text-sm font-medium">Grup İle mi Seyahat Edeceksiniz?</label>
        <select
          name="boolean_travel_group"
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.boolean_travel_group ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[5].boolean_travel_group || ""}
          onChange={(e) => updateField(5, "boolean_travel_group", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
         {errors.boolean_travel_group && (
            <p className="text-red-500 text-xs mt-1">{errors.boolean_travel_group}</p>
          )}
      </div>
      
        {form.steps[5].boolean_travel_group === "EVET" && (
       
          <div>
            <label className="text-sm font-medium">Grup Adı Nedir?</label>
            <input
              type="text"
              name="travel_group"
              className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.boolean_cover_expenses ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
              value={form.steps[5].travel_group || ""}
                     onChange={(e) => {
          if (isMobile) {
            updateField(5, "travel_group", e.target.value);
          } else {
            updateField(5, "travel_group", normalizeInput(e.target.value));
          }
        }}
        onBlur={(e) => {
          if (isMobile) {
            const normalizedValue = normalizeInput(e.target.value);
            updateField(5, "travel_group", normalizedValue);
          }
        }}
            />
          </div>

      
     
      )}
      
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
    <option value="AILE ZIYARETI">Aile ziyareti</option>
    <option value="ARKADAŞ ZIYARETI">Arkadaş ziyareti</option>
    <option value="IS">İş</option>
    <option value="TRANSİT">Transit</option>
    <option value="TURISTIK">Turistik</option>
    <option value="AKADEMIK ZIYARET">Akademik ziyaret</option>
    <option value="KISA SURELI EGITIM">Kısa süreli eğitim</option>
    <option value="SAGLIK">Sağlık</option>
    <option value="EVLILIK">Evlilik</option>
    <option value="DIGER">Diğer (açıklayınız)</option>
  </select>

  {errors.travel_reason && (
    <p className="text-red-500 text-xs mt-1">{errors.travel_reason}</p>
  )}
</div>

{/* DİĞER SEBEP AÇIKLAMASI — SADECE "DİĞER" SEÇİLİNCE GÖRÜNÜR */}
{form.steps[5].travel_reason === "DIGER" && (
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
 className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.have_invitation ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
     {errors.have_invitation && (
            <p className="text-red-500 text-xs mt-1">{errors.have_invitation}</p>
          )}
  </div>

  {/* DAVETİYE TÜRÜ — sadece EVET ise */}
  {form.steps[5].have_invitation === "EVET" && (
    <div>
      <label className="text-sm font-medium">Davetiye Türü</label>
      <select
        name="invitation_type"
       className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.invitation_type ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
       {errors.invitation_type && (
            <p className="text-red-500 text-xs mt-1">{errors.invitation_type}</p>
          )}
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
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.inviter_fullname ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
           {errors.inviter_fullname && (
            <p className="text-red-500 text-xs mt-1">{errors.inviter_fullname}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">Davet Eden Email</label>
          <input
            type="email"
            name="inviter_email"
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.inviter_email ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            value={form.steps[5].inviter_email || ""}
            onChange={(e) =>
              updateField(
                5,
                "inviter_email",
            e.target.value 
              )
            }
            
          />
           {errors.inviter_email && (
            <p className="text-red-500 text-xs mt-1">{errors.inviter_email}</p>
          )}
        </div>
      </div>

      {/* Telefon + Adres */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="text-sm font-medium">Davet Eden Telefon</label>
          <input
            name="inviter_phone"
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.inviter_phone ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
           {errors.inviter_phone && (
            <p className="text-red-500 text-xs mt-1">{errors.inviter_phone}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">Davet Eden Adres</label>
          <input
            name="inviter_address"
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.inviter_address ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
           {errors.inviter_address && (
            <p className="text-red-500 text-xs mt-1">{errors.inviter_address}</p>
          )}
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
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.company_name ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
          {errors.company_name && (
            <p className="text-red-500 text-xs mt-1">{errors.company_name}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">Şirket Email</label>
          <input
            type="email"
            name="company_email"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.company_email ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
          {errors.company_email && (
            <p className="text-red-500 text-xs mt-1">{errors.company_email}</p>
          )}
        </div>
      </div>

      {/* Şirket Telefon + Şirket Adres */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="text-sm font-medium">Şirket Telefon</label>
          <input
            name="company_phone"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.company_phone ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
          {errors.company_phone && (
            <p className="text-red-500 text-xs mt-1">{errors.company_phone}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">Şirket Adresi</label>
          <input
            name="company_address"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.company_address ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
          {errors.company_address && (
            <p className="text-red-500 text-xs mt-1">{errors.company_address}</p>
          )}
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
        className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300 resize-none ${errors.invitation_reason ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
       {errors.invitation_reason && (
            <p className="text-red-500 text-xs mt-1">{errors.invitation_reason}</p>
          )}
    </div>
  )}


{/* ===============================
   BİRLEŞİK KRALLIKTA AİLE VAR MI?
================================= */}
<div className="mt-6">
  <label className="text-sm font-medium">Birleşik Krallıkta ailenizden biri yaşıyor mu?</label>

  <select
    name="has_family_in_uk"
   className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.has_family_in_uk ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[5].has_family_in_uk || ""}
    onChange={(e) => updateField(5, "has_family_in_uk", e.target.value)}
  >
    <option value="">Seçiniz</option>
    <option value="EVET">Evet</option>
    <option value="HAYIR">Hayır</option>
  </select>
  
</div>
 {errors.has_family_in_uk && (
            <p className="text-red-500 text-xs mt-1">{errors.has_family_in_uk}</p>
          )}

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
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.uk_family_relation ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[5].uk_family_relation || ""}
          onChange={(e) =>
            updateField(5, "uk_family_relation", isMobile ? e.target.value : normalizeInput(e.target.value))
          }
        />
        {errors.uk_family_relation && (
            <p className="text-red-500 text-xs mt-1">{errors.uk_family_relation}</p>
          )}
      </div>

      {/* Adı Soyadı */}
      <div>
        <label className="text-sm font-medium">Adı Soyadı</label>
        <input
          name="uk_family_fullname"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.uk_family_fullname ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[5].uk_family_fullname || ""}
          onChange={(e) =>
            updateField(5, "uk_family_fullname", isMobile ? e.target.value : normalizeInput(e.target.value))
          }
        />
        {errors.uk_family_fullname && (
            <p className="text-red-500 text-xs mt-1">{errors.uk_family_fullname}</p>
          )}
      </div>

      {/* Uyruğu */}

<div>
  <label className="text-sm font-medium">Uyruğu</label>

  <select
    name="uk_family_nationality"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.uk_family_nationality ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={form.steps[5].uk_family_nationality || ""}
    onChange={(e) =>
      updateField(5, "uk_family_nationality", e.target.value)
    }
  >
    <option value="">Seçiniz</option>

    {allCountries.map((country) => (
      <option key={country.value} value={country.value}>
        {country.label}
      </option>
    ))}
  </select>
  {errors.uk_family_nationality && (
            <p className="text-red-500 text-xs mt-1">{errors.uk_family_nationality}</p>
          )}
</div>





      {/* Yasal Durumu */}
      <div>
        <label className="text-sm font-medium">Birleşik Krallıktaki Yasal Durumu</label>
        <input
          name="uk_family_legal_status"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.uk_family_legal_status ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[5].uk_family_legal_status || ""}
          onChange={(e) =>
            updateField(5, "uk_family_legal_status", isMobile ? e.target.value : normalizeInput(e.target.value))
          }
        />
        {errors.uk_family_legal_status && (
            <p className="text-red-500 text-xs mt-1">{errors.uk_family_legal_status}</p>
          )}
      </div>

      {/* Geçici vizeye sahip mi? */}
      <div>
        <label className="text-sm font-medium">Geçici vizeye sahip mi?</label>
        <select
          name="uk_family_has_temp_visa"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.uk_family_has_temp_visa ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[5].uk_family_has_temp_visa || ""}
          onChange={(e) => updateField(5, "uk_family_has_temp_visa", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
        {errors.uk_family_has_temp_visa && (
            <p className="text-red-500 text-xs mt-1">{errors.uk_family_has_temp_visa}</p>
          )}
      </div>

      {/* Temelli olarak UK’de mi? */}
      <div>
        <label className="text-sm font-medium">Temelli olarak Birleşik Krallıkta mı?</label>
        <select
          name="uk_family_is_resident"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.uk_family_is_resident ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={form.steps[5].uk_family_is_resident || ""}
          onChange={(e) => updateField(5, "uk_family_is_resident", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
        {errors.uk_family_is_resident && (
            <p className="text-red-500 text-xs mt-1">{errors.uk_family_is_resident}</p>
          )}
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
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.has_family_in_uk ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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

<label className="text-sm font-medium mt-4 block">Beraber seyahat edeceğiniz birisi var mı?</label>
<select
  value={form.steps[5].travel_with_non_family || ""}
  onChange={(e) => updateField(5, "travel_with_non_family", e.target.value)}
  className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.travel_with_non_family ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
>
  <option value="">Seçiniz</option>
  <option value="EVET">Evet</option>
  <option value="HAYIR">Hayır</option>
  
</select>
 {errors.travel_with_non_family && (
            <p className="text-red-500 text-xs mt-1">{errors.travel_with_non_family}</p>
          )}
{form.steps[5].travel_with_non_family === "EVET" && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 border p-2 rounded-xl">
    <div>
       <label className="text-sm font-medium mt-4 block">Seyahat edeceğiniz kişinin adı soyadı</label>
    <input
      placeholder="Seyahat edeceğiniz kişinin adı soyadı"
       className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.travel_non_family_fullname ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      value={form.steps[5].travel_non_family_fullname || ""}
      onChange={(e) => updateField(5, "travel_non_family_fullname", normalizeInput(e.target.value))}
    />
     {errors.travel_non_family_fullname && (
          <p className="text-red-500 text-xs mt-1">{errors.travel_non_family_fullname}</p>
        )}
    </div>
   <div>
     <label className="text-sm font-medium mt-4 block">Yakınlık Derecesi</label>
    <input
      placeholder="Yakınlık Derecesi"
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.travel_non_family_relation ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      value={form.steps[5].travel_non_family_relation || ""}
      onChange={(e) => updateField(5, "travel_non_family_relation", normalizeInput(e.target.value))}
    />
     {errors.travel_non_family_relation && (
          <p className="text-red-500 text-xs mt-1">{errors.travel_non_family_relation}</p>
        )}
   </div>
   <div>
    <label className="text-sm font-medium mt-4 block">Telefon Numarası</label>
    <input
      placeholder="Telefon Numarası"
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.travel_non_family_phone ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      value={form.steps[5].travel_non_family_phone || ""}
      onChange={(e) => updateField(5, "travel_non_family_phone", e.target.value)}
    />
     {errors.travel_non_family_phone && (
          <p className="text-red-500 text-xs mt-1">{errors.travel_non_family_phone}</p>
        )}
   </div>
  <div>
    <label className="text-sm font-medium mt-4 block">Pasaport Numarası</label>
    <input
      placeholder="Pasaport Numarası"
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.travel_non_family_passport_number ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      value={form.steps[5].travel_non_family_passport_number || ""}
      onChange={(e) => updateField(5, "travel_non_family_passport_number", e.target.value)}
    />
     {errors.travel_non_family_passport_number && (
          <p className="text-red-500 text-xs mt-1">{errors.travel_non_family_passport_number}</p>
        )}
  </div>
      <div>
         <label className="text-sm font-medium mt-4 block">İngiltere Vizesi Var mı?</label>
    <select
  value={form.steps[5].travel_with_non_family_visa || ""}
  onChange={(e) => updateField(5, "travel_with_non_family_visa", e.target.value)}
   className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.travel_with_non_family_visa ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
>
  <option value="">Seçiniz</option>
  <option value="EVET">Evet</option>
  <option value="HAYIR">Hayır</option>
</select>
 {errors.travel_with_non_family_visa && (
          <p className="text-red-500 text-xs mt-1">{errors.travel_with_non_family_visa}</p>
        )}
      </div>
    
  </div>
)}

{/* --------------------------------------------------- */}
{/* 2) Son 10 yıl UK'de bulundunuz mu? */}
{/* --------------------------------------------------- */}

<label className="text-sm font-medium mt-6 block">
  Son 10 yıl içinde Birleşik Krallık’ta bulundunuz mu?
</label>

<div className="flex flex-col col-span-1 md:col-span-2 gap-2 mt-2">
  {/* EVET / HAYIR */}
  <select
    value={form.steps[5].uk_visited_last10 || ""}
    onChange={(e) => {
      updateField(5, "uk_visited_last10", e.target.value);

      // HAYIR seçilirse resetle
      if (e.target.value !== "EVET") {
        updateField(5, "uk_visited_count", "");
        updateField(5, "uk_visits", []);
      }
    }}
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.uk_visited_last10 ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
  >
    <option value="">Seçiniz</option>
    <option value="EVET">Evet</option>
    <option value="HAYIR">Hayır</option>
    
  </select>
 {errors.uk_visited_last10 && (
            <p className="text-red-500 text-xs mt-1">{errors.uk_visited_last10}</p>
          )}
  {/* KAÇ KERE – SADECE EVET İSE */}
  {form.steps[5].uk_visited_last10 === "EVET" && (
    <input
      type="number"
      min={1}
      placeholder="Kaç kere gittiniz?"
     className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.uk_visited_count ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      value={form.steps[5].uk_visited_count || ""}
      onChange={(e) => {
        const count = Number(e.target.value);

        updateField(5, "uk_visited_count", count);

        const visits = Array.from({ length: count }, (_, i) => ({
          purpose: form.steps[5].uk_visits?.[i]?.purpose || "",
          arrivalDate: form.steps[5].uk_visits?.[i]?.arrivalDate || "",
          departureDate: form.steps[5].uk_visits?.[i]?.departureDate || "",
        }));

        updateField(5, "uk_visits", visits);
      }}
    />
    
  )}
  {errors.uk_visited_count && (
            <p className="text-red-500 text-xs mt-1">{errors.uk_visited_count}</p>
          )}
</div>


{/* ZİYARET KARTLARI */}
{form.steps[5].uk_visited_last10 === "EVET" &&
  Array.isArray(form.steps[5].uk_visits) &&
  form.steps[5].uk_visits.map((visit, index) => (
    <div
      key={index}
      className="mt-4 p-4 border rounded-2xl bg-gray-50"
    >
      <h4 className="font-semibold mb-3">
        {index + 1}. Gidiş
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Ziyaret Amacı */}
      <div>
  <label className="text-sm font-medium">Ziyaret Amacı</label>

  <select
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
       ${errors[`uk_visit_purpose_${index}`] ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
    value={visit.purpose || ""}
    onChange={(e) => {
      const updated = [...form.steps[5].uk_visits];
      updated[index].purpose = e.target.value;
      updateField(5, "uk_visits", updated);
    }}
  >
    <option value="">Seçiniz</option>
    <option value="AILE ZIYARETI">Aile ziyareti</option>
    <option value="ARKADAS ZIYARETI">Arkadaş ziyareti</option>
    <option value="IS">İş</option>
    <option value="TRANSIT">Transit</option>
    <option value="TURISTIK">Turistik</option>
    <option value="AKADEMIK ZIYARET">Akademik ziyaret</option>
    <option value="KISA SURELI EGITIM">Kısa süreli eğitim</option>
    <option value="SAGLIK">Sağlık</option>
    <option value="EVLILIK">Evlilik</option>
    {/* <option value="DIGER">Diğer (açıklayınız)</option> */}
  </select>
   {errors[`uk_visit_purpose_${index}`] && (
            <p className="text-red-500 text-xs mt-1">{errors[`uk_visit_purpose_${index}`]}</p>
          )}
</div>

        {/* Gidiş Tarihi */}
        <div>
  <label className="text-sm font-medium">Gidiş Tarihi</label>
      <input
          placeholder="Gidiş Tarihi"
           type="date"
           className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors[`uk_visit_arrivalDate_${index}`] ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={visit.arrivalDate || ""}
          onChange={(e) => {
            const updated = [...form.steps[5].uk_visits];
            updated[index].arrivalDate = e.target.value;
            updateField(5, "uk_visits", updated);
          }}
        />
         {errors[`uk_visit_arrivalDate_${index}`] && (
            <p className="text-red-500 text-xs mt-1">{errors[`uk_visit_arrivalDate_${index}`]}</p>
          )}
  </div>
  
        <div>
  <label className="text-sm font-medium">Dönüş Tarihi</label>
 <input
          placeholder="Dönüş Tarihi"
          type="date"
           className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
       ${errors[`uk_visit_departureDate_${index}`] ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
          value={visit.departureDate || ""}
          onChange={(e) => {
            const updated = [...form.steps[5].uk_visits];
            updated[index].departureDate = e.target.value;
            updateField(5, "uk_visits", updated);
          }}
        />
         {errors[`uk_visit_departureDate_${index}`] && (
            <p className="text-red-500 text-xs mt-1">{errors[`uk_visit_departureDate_${index}`]}</p>
          )}
  </div>
        {/* Dönüş Tarihi */}
       
      </div>
    </div>
  ))}



<label className="text-sm font-medium mt-6 block">
Avustralya, Kanada, Yeni Zelanda, Amerika, İsviçre, Schengen Ülkelerini Son 10 Yıl İçinde Seyahat Ettiniz mi?
  </label>
<select
  value={form.steps[5].other_visited_countries || ""}
  onChange={(e) => updateField(5, "other_visited_countries", e.target.value)}
  className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.other_visited_countries ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
>
  <option value="">Seçiniz</option>
  <option value="HAYIR">HAYIR</option>
  <option value="1 KEZ">1 KEZ</option>
  <option value="2 KEZ">2 KEZ</option>
  <option value="3 KEZ">3 KEZ</option>
  <option value="4 KEZ">4 KEZ</option>
  <option value="5 KEZ">5 KEZ</option>

  <option value="6 VE UZERI">6 VE ÜZERİ</option>

</select>
 {errors.other_visited_countries && (
            <p className="text-red-500 text-xs mt-1">{errors.other_visited_countries}</p>
          )}
{getTravelCardCount(form.steps[5].other_visited_countries) > 0 && (
  <div className="mt-6 space-y-6">
    {Array.from({ length: getTravelCardCount(form.steps[5].other_visited_countries) }).map((_, index) => (
      <div key={index} className="relative p-4 border rounded-2xl bg-gray-50 shadow-sm">
        <h4 className="absolute -top-3 left-4 bg-gray-50 px-2 text-sm font-medium">Son {index + 1}. Seyahat</h4>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">

      <div>
  <label className="text-sm font-medium block">Ülke</label>

  <select
   className={`w-full mt-1 p-3 border rounded-xl
  ${errors[`lastTravel${index + 1}_country`]
    ? "border-red-500"
    : "border-gray-300"}`}
    value={form.steps[5][`lastTravel${index + 1}_country`] || ""}
    onChange={(e) =>
      updateField(
        5,
        `lastTravel${index + 1}_country`,
        e.target.value
      )
    }
  >
    <option value="">Seçiniz</option>

    {allCountries.map((country) => (
      <option key={country.value} value={country.value}>
        {country.label}
      </option>
    ))}
  </select>
   {errors[`lastTravel${index + 1}_country`] && (
            <p className="text-red-500 text-xs mt-1">{errors[`lastTravel${index + 1}_country`]}</p>
          )}
</div>

          <div>
            <label className="text-sm font-medium block">Seyahat Amacı</label>
            <input
             className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
    ${errors[`lastTravel${index + 1}_purpose`]
      ? "border-red-500"
      : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
             value={form.steps[5][`lastTravel${index + 1}_purpose`] || ""} onChange={(e) => updateField(5, `lastTravel${index + 1}_purpose`, normalizeInput(e.target.value))} />
 {errors[`lastTravel${index + 1}_purpose`] && (
            <p className="text-red-500 text-xs mt-1">{errors[`lastTravel${index + 1}_purpose`]}</p>
          )}
  
          </div>

          <div>
            <label className="text-sm font-medium block">Gidiş Tarihi</label>
            <input type="date"
               className={`w-full mt-1 p-3 border rounded-xl
  ${errors[`lastTravel${index + 1}_monthYear`]
    ? "border-red-500"
    : "border-gray-300"}`}
              value={form.steps[5][`lastTravel${index + 1}_monthYear`] || ""} onChange={(e) => updateField(5, `lastTravel${index + 1}_monthYear`, e.target.value)} />
          {errors[`lastTravel${index + 1}_monthYear`] && (
            <p className="text-red-500 text-xs mt-1">{errors[`lastTravel${index + 1}_monthYear`]}</p>
          )}
          </div>

          <div>
            <label className="text-sm font-medium block">Dönüş Tarihi</label>
            <input type="date"
            className={`w-full mt-1 p-3 border rounded-xl
  ${
    errors[`lastTravel${index + 1}_duration`] ||
    errors[`lastTravel${index + 1}_invalidDate`]
      ? "border-red-500"
      : "border-gray-300"
  }`}
              value={form.steps[5][`lastTravel${index + 1}_duration`] || ""} onChange={(e) => updateField(5, `lastTravel${index + 1}_duration`, e.target.value)} />
          {errors[`lastTravel${index + 1}_duration`] && (
            <p className="text-red-500 text-xs mt-1">{errors[`lastTravel${index + 1}_duration`]}</p>
          )}
          </div>

        </div>
      </div>
    ))}
  </div>
)}
<div className="md:col-span-2">
  <label className="text-sm font-medium block">
    Son 10 yılda İngiltere, ABD, Kanada, Avustralya, Yeni Zelanda, İsviçre veya Schengen ülkeleri dışında başka ülkelere gittiniz mi? (Hepsini belirtiniz.)
  </label>
  <select
  
   className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.boolean_traveled_adroad ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
  
  value={form.steps[5].boolean_traveled_adroad || ""}
  
  onChange={(e) => {
      const value = e.target.value;
    updateField(5, "boolean_traveled_adroad", e.target.value);
    if (value === "EVET") {
    const currentList = form.steps[5].abroad_country || [];

    if (currentList.length === 0) {
      updateField(5, "abroad_country", [
        { country: "", purpose: "", start: "", end: "" }
      ]);
    }
  }

  if (value === "HAYIR") {
    // istersek temizleyebiliriz
    updateField(5, "abroad_country", []);
  }
  }}>
    <option value="">Seçiniz</option>
    <option value="EVET">Evet</option>
    <option value="HAYIR">Hayır</option>
  </select>
   {errors.boolean_traveled_adroad && (
            <p className="text-red-500 text-xs mt-1">{errors.boolean_traveled_adroad}</p>
          )}
</div>

{form.steps[5].boolean_traveled_adroad === "EVET" && (
  <div className="md:col-span-2 space-y-4">

    {(form.steps[5].abroad_country || []).map((item, index) => (
      <div key={index} className="relative p-4 border rounded-2xl bg-gray-50 shadow-sm">

        <h4 className="absolute -top-3 left-4 bg-gray-50 px-2 text-sm font-medium">
          {index + 1}. Ülke
        </h4>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Ülke */}
          <div>
  <label className="text-sm font-medium block">Gidilen Ülke</label>

  <select
    name={`abroad_country[${index}].country`}
 className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
  ${errors[`abroad_country_country_${index}`]
    ? "border-red-500"
    : "border-gray-300"}`}
    value={item.country || ""}
    onChange={(e) => handleCountryChange(e, index)}
    onBlur={(e) => handleCountryBlur(e, index)}
  >
    <option value="">Seçiniz</option>

    {allCountries.map((country) => (
      <option key={country.value} value={country.value}>
        {country.label}
      </option>
    ))}
  </select>
   {errors[`abroad_country_country_${index}`] && (
            <p className="text-red-500 text-xs mt-1">{errors[`abroad_country_country_${index}`]}</p>
          )}
</div>

          {/* Amaç */}
          <div>
            <label className="text-sm font-medium block">Seyahat Amacı</label>
            <input name={`abroad_country[${index}].purpose`} placeholder="Turizm, iş, eğitim, aile ziyareti vb."
             className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
  ${errors[`abroad_country_purpose_${index}`]
    ? "border-red-500"
    : "border-gray-300"}`}
             value={item.purpose || ""} onChange={(e) => {
              const arr = [...form.steps[5].abroad_country];
              arr[index].purpose = normalizeInput(e.target.value);
              updateField(5, "abroad_country", arr);
            }} />
              {errors[`abroad_country_purpose_${index}`] && (
            <p className="text-red-500 text-xs mt-1">{errors[`abroad_country_purpose_${index}`]}</p>
          )}
          </div>

          {/* Giriş Tarihi */}
          <div>
            <label className="text-sm font-medium block">Giriş Tarihi</label>
            <input type="date" name={`abroad_country[${index}].start`} 
           className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
  ${errors[`abroad_country_start_${index}`]
    ? "border-red-500"
    : "border-gray-300"}`}
            value={item.start || ""} onChange={(e) => {
              const arr = [...form.steps[5].abroad_country];
              arr[index].start = e.target.value;
              updateField(5, "abroad_country", arr);
            }} onBlur={(e) => {
              const value = e.target.value;
              if (!value || value.length < 10) return;
              const today = new Date().toISOString().split("T")[0];
              if (value > today || value < "1900-01-01") {
                const arr = [...form.steps[5].abroad_country];
                arr[index].start = "";
                updateField(5, "abroad_country", arr);
              }
            }} />
             {errors[`abroad_country_start_${index}`] && (
            <p className="text-red-500 text-xs mt-1">{errors[`abroad_country_start_${index}`]}</p>
          )}
          </div>

          {/* Çıkış Tarihi */}
          <div>
            <label className="text-sm font-medium block">Çıkış Tarihi</label>
            <input type="date" name={`abroad_country[${index}].end`}
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
  ${
    errors[`abroad_country_end_${index}`] ||
    errors[`abroad_country_invalidDate_${index}`]
      ? "border-red-500"
      : "border-gray-300"
  }`}
             value={item.end || ""} onChange={(e) => {
              const arr = [...form.steps[5].abroad_country];
              arr[index].end = e.target.value;
              updateField(5, "abroad_country", arr);
            }} onBlur={(e) => {
              const value = e.target.value;
              const startDate = form.steps[5].abroad_country[index]?.start || "";
              if (!value || value.length < 10) return;
              const today = new Date().toISOString().split("T")[0];
              if (value > today || value < "1900-01-01" || (startDate && value < startDate)) {
                const arr = [...form.steps[5].abroad_country];
                arr[index].end = "";
                updateField(5, "abroad_country", arr);
              }
            }} />
            {errors[`abroad_country_end_${index}`] && (
            <p className="text-red-500 text-xs mt-1">{errors[`abroad_country_end_${index}`]}</p>
          )}
          </div>

        </div>

        <button type="button" onClick={() => {
          const arr = [...form.steps[5].abroad_country];
          arr.splice(index, 1);
          updateField(5, "abroad_country", arr);
        }} className="absolute top-3 right-3 px-3 py-1 text-xs bg-red-500 text-white rounded-lg">
          Sil
        </button>

      </div>
    ))}

    <button type="button" onClick={() => {
      const newArray = [...(form.steps[5].abroad_country || []), { country: "", purpose: "", start: "", end: "" }];
      updateField(5, "abroad_country", newArray);
    }} className="px-4 py-2 bg-blue-600 text-white rounded-xl">
      Yeni Ülke Ekle
    </button>

  </div>
)}







{/* --------------------------------------------------- */}
{/* 3) İngiltere’de tıbbi tedavi gördünüz mü? */}
{/* --------------------------------------------------- */}

<label className="text-sm font-medium mt-6 block">İngiltere’de daha önce tıbbi tedavi gördünüz mü?</label>
<select
  value={form.steps[5].medical_treatment_uk || ""}
  onChange={(e) => updateField(5, "medical_treatment_uk", e.target.value)}
 className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.medical_treatment_uk ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
>
  <option value="">Seçiniz</option>
  <option value="EVET">Evet</option>
  <option value="HAYIR">Hayır</option>
  
</select>
 {errors.medical_treatment_uk && (
            <p className="text-red-500 text-xs mt-1">{errors.medical_treatment_uk}</p>
          )}
{form.steps[5].medical_treatment_uk === "EVET" && (
  <div>
        <label className="text-sm font-medium mt-6 block">Tedavi ile ilgili açıklama</label>
          <textarea
    placeholder="Tedavi ile ilgili açıklama"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300 focus:ring-2 focus:ring-blue-500 resize-none ${errors.medical_treatment_details ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
  {errors.medical_treatment_details && (
      <p className="text-red-500 text-xs mt-1">{errors.medical_treatment_details}</p>
    )}
  </div>

)}

{/* --------------------------------------------------- */}
{/* 4) Ulusal sigorta numaranız var mı? */}
{/* --------------------------------------------------- */}

<label className="text-sm font-medium mt-6 block">Ulusal Sigorta Numaranız var mı?</label>
<select
  value={form.steps[5].national_insurance_number_exist || ""}
  onChange={(e) => updateField(5, "national_insurance_number_exist", e.target.value)}
  className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.national_insurance_number_exist ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
>
  <option value="">Seçiniz</option>
  <option value="EVET">Evet</option>
  <option value="HAYIR">Hayır</option>
  
</select>
 {errors.national_insurance_number_exist && (
            <p className="text-red-500 text-xs mt-1">{errors.national_insurance_number_exist}</p>
          )}
{form.steps[5].national_insurance_number_exist === "EVET" && (
  <div>
      <label className="text-sm font-medium mt-6 block">Ulusal Sigorta Numarası</label>
       <input
    placeholder="Ulusal Sigorta Numarası"
     className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.national_insurance_number ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
   {errors.national_insurance_number && (
            <p className="text-red-500 text-xs mt-1">{errors.national_insurance_number}</p>
          )}
  </div>
 
)}

{/* --------------------------------------------------- */}
{/* 5) UK kalma izni başvurusu */}
{/* --------------------------------------------------- */}

<label className="text-sm font-medium mt-6 block">Son 10 yılda İngiltere'de kalma izni için başvuruda bulundunuz mu?</label>
<select
  value={form.steps[5].uk_stay_application_last10 || ""}
  onChange={(e) => updateField(5, "uk_stay_application_last10", e.target.value)}
  className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.uk_stay_application_last10 ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
>
  <option value="">Seçiniz</option>
  <option value="EVET">Evet</option>
  <option value="HAYIR">Hayır</option>
   
</select>
{errors.uk_stay_application_last10 && (
            <p className="text-red-500 text-xs mt-1">{errors.uk_stay_application_last10}</p>
          )}
{form.steps[5].uk_stay_application_last10 === "EVET" && (
  <div>
    <label className="text-sm font-medium mt-6 block">Açıklama</label>
   <textarea
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300 focus:ring-2 focus:ring-blue-500 resize-none ${errors.uk_stay_application_explanation ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
 {errors.uk_stay_application_explanation && (
            <p className="text-red-500 text-xs mt-1">{errors.uk_stay_application_explanation}</p>
          )}
  </div>
 
)}

{/* --------------------------------------------------- */}
{/* 6) Son 10 yılda UK vizesi aldınız mı? */}
{/* --------------------------------------------------- */}

<label className="text-sm font-medium mt-6 block">Son 10 yılda İngiltere vizesi aldınız mı?</label>
<select
  value={form.steps[5].uk_visa_last10 || ""}
  onChange={(e) => updateField(5, "uk_visa_last10", e.target.value)}
  className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.uk_visa_last10 ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
>
  <option value="">Seçiniz</option>
  <option value="EVET">Evet</option>
  <option value="HAYIR">Hayır</option>
  
</select>
 {errors.uk_visa_last10 && (
            <p className="text-red-500 text-xs mt-1">{errors.uk_visa_last10}</p>
          )}
{form.steps[5].uk_visa_last10 === "EVET" && (
  <div>
    <label className="text-sm font-medium mt-6 block">Vize Veriliş Tarihi</label>
<input
  type="date"
   className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.uk_visa_last10 ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
{errors.uk_visa_issue_date && (
            <p className="text-red-500 text-xs mt-1">{errors.uk_visa_issue_date}</p>
          )}
  </div>
  
)}

{/* --------------------------------------------------- */}
{/* 7) Kamu fonu aldınız mı? */}
{/* --------------------------------------------------- */}

<label className="text-sm font-medium mt-6 block">İngiltere'de herhangi bir kamu fonu aldınız mı?</label>
<select
  value={form.steps[5].uk_public_funds || ""}
  onChange={(e) => updateField(5, "uk_public_funds", e.target.value)}
   className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.uk_public_funds ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
>
  <option value="">Seçiniz</option>
  <option value="EVET">Evet</option>
  <option value="HAYIR">Hayır</option>
  
</select>
 {errors.uk_public_funds && (
            <p className="text-red-500 text-xs mt-1">{errors.uk_public_funds}</p>
          )}
{form.steps[5].uk_public_funds === "EVET" && (
  <div>
<label className="text-sm font-medium mt-6 block">Aldığınız fonu açıklayın</label>
  <textarea
   className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300 focus:ring-2 focus:ring-blue-500 resize-none ${errors.uk_public_funds_details ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
   {errors.uk_public_funds_details && (
            <p className="text-red-500 text-xs mt-1">{errors.uk_public_funds_details}</p>
          )}
  </div>

)}

{/* --------------------------------------------------- */}
{/* 8) Vize reddi, sınır dışı, giriş yasağı vs */}
{/* --------------------------------------------------- */}

<label className="text-sm font-medium mt-6 block">Herhangi bir ülkede vize reddi, sınır dışı edilme veya giriş yasağı yaşadınız mı?</label>
<select
  value={form.steps[5].visa_refused_or_banned || ""}
  onChange={(e) => updateField(5, "visa_refused_or_banned", e.target.value)}
  className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
      ${errors.visa_refused_or_banned ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
>
  <option value="">Seçiniz</option>
  <option value="EVET">Evet</option>
  <option value="HAYIR">Hayır</option>
  
</select>
 {errors.visa_refused_or_banned && (
            <p className="text-red-500 text-xs mt-1">{errors.visa_refused_or_banned}</p>
          )}
{form.steps[5].visa_refused_or_banned === "EVET" && (
  <div>
<label className="text-sm font-medium mt-6 block">Açıklayınız (ülke, yıl, durum)</label>
  <textarea
     className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none border-gray-300 focus:ring-2 focus:ring-blue-500 resize-none ${errors.visa_refused_details ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
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
   {errors.visa_refused_details && (
            <p className="text-red-500 text-xs mt-1">{errors.visa_refused_details}</p>
          )}
  </div>




)}






  <div>
<label className="text-sm font-medium mt-6 block">Belirtmek istediğiniz bir açıklama varsa yazınız</label>
  <textarea
    className="w-full mt-3 p-3 border rounded-xl resize-none"
    rows={3}
    placeholder="Belirtmek istediğiniz bir açıklama varsa yazınız"
    value={form.steps[5].end_info || ""}
    onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "end_info", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "end_info", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(5, "end_info", normalizedValue);
                }
            }}
  />
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
    <Link href="/">
     <button 
     onClick={() => {
    clearDs160Storage();
    
  }} className="bg-white text-gray-700 cursor-pointer mt-5 border border-blue-300 px-4 py-2 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100">
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

