"use client";
import AydinlatmaFormu from "@/app/components/modals/AydinlatmaFormu";
import Link from "next/link";
import React, { useEffect, useState,useMemo } from "react";
import { countryName, languages_option, occupations, payerRelationships, state } from "@/helper/help";
import { VisitedCountriesSelect } from "./VisitedCountriesSelect";

const isMobileOrAndroid = () => {
    // ... UA kontrol kodunuz
    const ua = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
};

const STORAGE_KEY = "ds160_form_data_v1";
const STORAGE_METHOD_KEY = "ds160_storage_method_v1"; // "local" or "cookie"
const RELATIONSHIP_MAP = {
  PARENT: "P",
  SPOUSE: "S",
  CHILD: "C",
  RELATIVE: "R",
  FRIEND: "F",
  BUSINESS: "B",
  OTHER: "O",
};
const defaultForm = {
  currentStep: 1,
 steps: {
    1: {
      fullName: "",
      gender: "",
      maritalStatus: "",
      maidenName: "",
      birthDate: "",
      birthPlace: "",
      birthCountry:"",
    },
    2: {
      nationality: "",
      otherNationalityExist: "",
      otherNationality: "",
      otherNationalityPassportNo:"",
      otherSessionExist: "",
      otherSessionExistCountry:"",
      otherSession: "",
      tcId: "",
      ssn: "",
      vkn: "",
     
      
    },
    3: {
      visaType: "",
      visaTypeDesc:"",
      visaEduFullName1:"",
      visaEduAddress1:"",
      visaEduCity1:"",
      visaEduState1:"",
      visaEduPostCode1:"",
      visaEduCountry1:"",
      visaEduPhone1:"",
      visaEduMail1:"",
      visaEduFullName2:"",
      visaEduAddress2:"",
      visaEduCity2:"",
      visaEduState2:"",
      visaEduPostCode2:"",
      visaEduCountry2:"",
      visaEduPhone2:"",
      visaEduMail2:"",
      study_in_us:"",
      sevis_id:"",
      program_number:"",
      school_name:"",
      course_of_study:"",
      school_address1:"",
      school_city:"",
      school_state:"",
      school_post_code:"",
      stayDurationUnit:"",
      usaArrivalCity:"",
      usaAddress:"",
      usaAddressCity:"",
      usaAddressState:"",
      usaLocations:"",
      usaDepartureCity:"",
      tourismPlanFinalized:"",  
      exactArrival: "",
      exactDeparture:"",
      estimatedArrival: "",
      stayDuration: "",
      stayAddress: "",
      whoPays: "",
      relationDegree: "",
      relationfullName:"",
      relationCompanyfullName:"",
      payerAddress: "",
      payerPhone: "",
      payerCompanyPhone:"",
      payerRelation:"",
      payerMail:"",
      payerCompanyAddress:"",
      usContactInfo: "",
      usRelativeInfo: "",
      payerCity:"",
      payerCountry:"",
      payerState:"",
      payerRelationCountry:"",
      payerRelationCity:"",
      payerRelationAddress:"",
      payerRelationPostCode:"",


    },
    4: {
      travelAlone: "",
       companionCount: 0,        // number
    companions: [
    {
      fullName: "",
      relationship: "",
      hasVisa: "",
    }
  ],
      otherTraveler: "",
      otherTravelerConnection: "",
      otherTravelerConnectionVisa:"",
      beenToUS: "",
      travelCount:"",
      travels:[],
      lastVisitDate: "",
      lastVisitDuration: "",
      hadUSVisa: "",
      visaLostStolen:"",
      visaDate: "",
      visaNumber: "",
      visaRefused: "",
      immigrationDetail: "",
      visaDateLastRefused:"",
     
      organizationTravel:"",
      organizationTravelName:"",
      hadUSDriverLicense:"",
      driverLicanceNumber:"",
      driverLicenseState:"",
hadFingerprints:"",
visaLostStolenInfo:"",
visaLostStolenYear:"",
visaCancelledDetail:"",
visaCancelled:"",
immigrationDetail:"",
immigration:"",

    },
    5: {
    home_city: "",
    home_district: "",
    home_neighborhood: "",
    home_street: "",
    home_avenue: "",
    home_building_no: "",
    home_apartment_no: "",
    post_code:"",
      homeAddress: "",
      phone1: "",
      phone2: "",
      workPhone: "",
      email: "",
      hasSocialMedia: "",
      socialMediaAccounts:[],
      passportType: "",
      passportNumber: "",
      passportAuthority: "",
      passportStart: "",
      passportEnd: "",
      lostPassportNumber: "",
      passportAuthorityCountry:"",
      lostPassportBoolean:"",
      lostPassportNumber:"",
      lostPassportAuthorityCountry:"",
      lostPassportInfo:"",


    },

    6:{
      organizationBoolean:"",
      organizationInfo:"",
      usaRelativeFullName:"",
      usaRelative:"",
      usaRelativeInfo:"",
      usaRelativeAddress:"",
      usaRelativeAddressCity:"",
      usaRelativeAddressState:"",
      usaRelativePhone:"",
      usaRelativeEmail:"",
      usaRelativePostCode:"",
      organizationAddress:"",
      organizationAddressCity:"",
      organizationAddressState:"",
      organizationPhone:"",
      organizationEmail:"",
      organizationPostCode:"",


    },

7:{
motherFullName:"",
  fatherFullName:"",
  motherBirthDate:"",
  fatherBirthDate:"",
  isMotherInUSA:"",
  isFatherInUSA:"",
  isMotherUSAStatus:"",
  isFatherUSAStatus:"",
hasRelativeInUSA: "", // YES | NO
  relativeCount: 0,
  relatives: [
    {
      fullName: "",
      level: "",
      status: ""
    }
  ],
  otherRelativeInUSA:"",

},

8:{
  spouseFullName:"",
wifeMaidenName:"",
spouseNationality:"",
spouseBirthPlace:"",
spouseBirthPlaceCountry:"",
spouseBirthDate:"",
spouseAddress:"",
otherSpouseAddress:"",
otherSpouseAddressCity:"",
otherSpouseAddressCountry:"",
otherSpouseAddressPostCode:"",
oldSpouseFullName:"",
marriageDate:"",
oldMarriageDate:"",
oldMarriageEndDate:"",
oldSpouseBirthDate:"",
oldSpouseNationality:"",
oldSpouseBirthPlace:"",
oldSpouseEndCountry:"",
oldSpouseInfo:"",

},
   9: {
      occupation: "",
      workOrSchoolName: "",
      workOrSchoolAddress: "",
      workOrSchoolCity: "",
      workOrSchoolCountry:"",
      workOrSchoolPhone:"",
      workOrSchoolPostCode:"",
      otherJobDescription:"",
      workPhone: "",
      workStartDate: "",
      monthlyIncome: "",
      jobDescription: "",
      previousJobs: "",
      educationBoolean:"",
       previousEducations: [
        
       ] ,
     
previousJobBoolean:"",
universitySection:"",
      previousJobs: [
  {
    companyName: "",
    previusWorkAddress: "",
    previusWorkCity:"",
    previusWorkPostCode:"",
    previusWorkCountry: "",
    previusWorkPhone: "",
    previusSupervisorFullname:"",
    position: "",
    startDate: "",
    endDate: ""
  }
]
    },
    10: {
      languages: "",
      visitedCountries: "",
      militaryStatus: "",
      militaryStartDate:"",
      militaryEndDate:"",
      exemptionReason:"",
      defermentDate:"",
      additionalInfo: "",

   
    },
    11: {
      
      passportFile: null,
      photoFile: null
    },
    
  },
 
};
const getVisitStay = (df, index = 0) => {
  const travel = df?.steps?.[4]?.travels?.[index];

  return {
    length: travel?.durationValue || "",
    unit: travel?.durationUnit || ""
  };
};
const normalizeVisaType = (value) => {
  if (!value) return "";

  return String(value)
    .trim()
    .toUpperCase();
};
const normalizeNaIfEmpty = (value) => {
  if (value === undefined || value === null) return "N/A";

  const v = String(value).trim();

  return v === "" ? "N/A" : v;
};

const turkishToEnglish = (text = "") =>
  text
    .replace(/İ/g, "I")
    .replace(/İ/g, "I")
    .replace(/ı/g, "i")
    .replace(/Ş/g, "S")
    .replace(/ş/g, "s")
    .replace(/Ğ/g, "G")
    .replace(/ğ/g, "g")
    .replace(/Ü/g, "U")
    .replace(/ü/g, "u")
    .replace(/Ö/g, "O")
    .replace(/ö/g, "o")
    .replace(/Ç/g, "C")
    .replace(/ç/g, "c");

const getValueByPath = (obj, path) =>
  path?.split(".")?.reduce((acc, key) => acc?.[key], obj);
const normalizeMaritalStatus = (defaultForm) => {
  const step1 = defaultForm?.steps?.[1];
  const status = step1?.maritalStatus;

  if (!status) return "SINGLE";

  switch (status) {
    case "SINGLE":
      return "SINGLE";

    case "MARRIED":
      return "MARRIED";

    case "DIVORCED":
      return "DIVORCED";

    case "WIDOWED":
      return "WIDOWED";

    case "SEPARATED":
      return "LEGALLY SEPARATED";

    default:
      return "SINGLE";
  }
};
const inferMaritalStatus = (defaultForm) => {
  const step1 = defaultForm?.steps?.[1];

  // aktif evlilik varsa
  if (step1?.marriageDate && !step1?.marriages?.some(m => m.marriageEndDate)) {
    return "MARRIED";
  }

  // geçmiş evlilik varsa
  if (Array.isArray(step1?.marriages) && step1.marriages.length > 0) {
    return "DIVORCED";
  }

  return "SINGLE";
};
const getMaritalStatus = (defaultForm) => {
  const manual = defaultForm?.steps?.[1]?.maritalStatus;
  if (manual) return normalizeMaritalStatus(defaultForm);

  return inferMaritalStatus(defaultForm);
};

function getSurname(fullName) {
  // ❗ String değilse direkt boş dön
  if (typeof fullName !== "string") return "";

  const cleaned = fullName.trim();
  if (!cleaned) return "";

  const parts = cleaned.split(/\s+/);
  const surname = parts.at(-1) || "";

  return turkishToEnglish(surname).toUpperCase();
}
const splitFullName = (fullName = "") => {
  if (!fullName) {
    return { givenName: "", surname: "" };
  }

  const parts = fullName?.trim()?.split(/\s+/);

  if (parts.length === 1) {
    return { givenName: "", surname: parts[0] };
  }

  return {
    givenName: parts?.slice(0, -1)?.join(" "),
    surname: parts?.at(-1),
  };
};

function getGivenName(fullName) {
  if (typeof fullName !== "string") return "";

  const cleaned = fullName.trim();
  if (!cleaned) return "";

  const parts = cleaned.split(/\s+/);
  const given = parts.length > 1
    ? parts.slice(0, -1).join(" ")
    : "";

  return turkishToEnglish(given).toUpperCase();
}
const getOtherNameParts = (defaultForm) => {
  const step1 = defaultForm?.steps?.[1];

  // 1️⃣ Önce maiden name
  if (step1?.maidenName?.trim()) {
    return splitFullName(step1.maidenName);
  }

  // 2️⃣ Sonra önceki evlilikler
  const marriages = step1?.marriages;

  if (Array.isArray(marriages)) {
    for (const marriage of marriages) {
      if (marriage?.spouseFullName?.trim()) {
        return splitFullName(marriage.spouseFullName);
      }
    }
  }

  return { givenName: "", surname: "" };
};

const hasOtherName = (defaultForm) => {
  const otherSurname = getOtherNameParts(defaultForm);
  return otherSurname ? "YES" : "NO";
};
function normalizeGender(gender) {
  if (!gender) return "";
  if (gender === "Male" || gender === "M" || gender === "ERKEK") return "M";
  if (gender === "Female" || gender === "F" || gender === "KADIN") return "F";
  return "";
}
function yesNo(value) {
  if (value === true || value === "YES" || value === "EVET") return "YES";
  if (value === false || value === "NO" || value === "HAYIR") return "NO";
  return "";
}
function getDay(date) {
  if (!date) return "";
  return new Date(date).getDate().toString().padStart(2, "0");
}

function getMonth(date) {
  if (!date) return "";
  return new Date(date).toLocaleString("en-US", { month: "short" }).toUpperCase();
}

function getYear(date) {
  if (!date) return "";
  return new Date(date).getFullYear().toString();
}
const formatDs160Date = (dateValue) => {
  if (!dateValue) return "";

  let d;

  if (dateValue instanceof Date) d = dateValue;
  else if (/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
    const [y, m, day] = dateValue.split("-");
    d = new Date(+y, +m - 1, +day);
  } else {
    d = new Date(dateValue);
  }

  if (isNaN(d.getTime())) return "";

  const day = String(d.getDate()).padStart(2, "0");
  const month = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][d.getMonth()];
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
};

const buildVisitFields = (defaultForm) => {
  const visits = defaultForm?.steps?.[4]?.travels || [];
  const result = {};

  visits.forEach((travel, index) => {
    const i = index + 1;

    result[`VISIT${i}_ARRIVAL_DATE`] =
      formatDs160Date(travel?.date);

    result[`VISIT${i}_STAY_LENGTH`] =
      travel?.durationValue ? String(travel.durationValue) : "";

    result[`VISIT${i}_STAY_UNIT`] =
      travel?.durationUnit || "";
  });

  return result;
};

const isPrevVisaSameType = (defaultForm) => {
  const currentVisa = normalizeVisaType(
    defaultForm?.steps?.[3]?.visaTypeDesc
  );

  const previousVisa = normalizeVisaType(
    defaultForm?.steps?.[4]?.hadVisaType
  );

  if (!currentVisa || !previousVisa) return "";

  return currentVisa === previousVisa ? "YES" : "NO";
};
const upper = (v) =>
  String(v || "").trim().toUpperCase();
const buildHomeAddress = (defaultForm) => {
  const step5 = defaultForm?.steps?.[5];
  if (!step5) return "";

  const parts = [];

  // Mahalle
  if (step5.home_neighborhood) {
    parts.push(`${upper(step5.home_neighborhood)} MH`);
  }

  // Sokak
  if (step5.home_street) {
    parts.push(`${upper(step5.home_street)} CD`);
  }

  // Cadde (varsa)
  if (step5.home_avenue) {
    parts.push(`${upper(step5.home_avenue)} SK`);
  }

  // Bina + Daire
  if (step5.home_building_no && step5.home_apartment_no) {
    parts.push(
      `${upper(step5.home_building_no)}-${upper(step5.home_apartment_no)}`
    );
  } else if (step5.home_building_no) {
    parts.push(upper(step5.home_building_no));
  }

  // İlçe
  if (step5.home_district) {
    parts.push(upper(step5.home_district));
  }

  return parts.join(" ");
};
const parseSocialMedia = (accounts) => {
  if (!Array.isArray(accounts) || accounts.length === 0) {
    return {
      platforms: "",
      usernames: "",
    };
  }

  const platforms = [];
  const usernames = [];

  accounts.forEach((acc) => {
    if (acc?.platform) {
      platforms.push(
        String(acc.platform).trim().toUpperCase()
      );
    }

    if (acc?.username) {
      usernames.push(
        String(acc.username).trim()
      );
    }
  });

  return {
    platforms: platforms.join(","),
    usernames: usernames.join(","),
  };
};
const isNo = (v) => String(v).toUpperCase() === "NO";

const getUsPocSource = (defaultForm) => {
  const step4 = defaultForm?.steps?.[4];
  const step3 = defaultForm?.steps?.[3];
  const step6 = defaultForm?.steps?.[6];

  const useRelative = step4?.useRelative;
  const organization = step4?.organizationBoolean;

  const bothNo =
    String(useRelative).toUpperCase() === "NO" &&
    String(organization).toUpperCase() === "NO";

  if (bothNo) {
    return {
      address: step3?.usaAddress || "",
      city: step3?.usaAddressCity || "",
      state: step3?.usaAddressState || "",
      zip: step3?.usaAddressZip || "",
      phone: "05555555555" || "",
      email: "xx@mail.com" || "",
      orgName: "XXX HOTEL",
    };
  }

  return {
    address: step6?.usaRelativeAddress || "",
    city: step6?.usaRelativeAddressCity || "",
    state: step6?.usaRelativeAddressState || "",
    zip: step6?.usaRelativePostCode || "",
    phone: step6?.usaRelativePhone || "",
    email: step6?.usaRelativeEmail || "",
    orgName: step6?.organizationInfo || "",
  };
};

const buildUsImmediateRelatives = (defaultForm) => {
  const result = {};

  const hasRel = defaultForm?.steps?.[7]?.hasRelativeInUSA;
  if (hasRel !== "YES") return result;

  const relatives = defaultForm?.steps?.[7]?.relatives || [];

  relatives.forEach((rel, index) => {
    const i = index + 1;

    const parts = String(rel.fullName || "").trim().split(/\s+/);

    result[`US_REL${i}_SURNAME`] =
      parts.length > 1 ? parts.at(-1).toUpperCase() : parts[0]?.toUpperCase() || "";

    result[`US_REL${i}_GIVEN`] =
      parts.length > 1
        ? parts.slice(0, -1).join(" ").toUpperCase()
        : "";

    result[`US_REL${i}_TYPE`] = rel.level || "";
    result[`US_REL${i}_STATUS`] = rel.status || "";
  });

  return result;
};
function splitFullNameSafe(fullName) {
  if (typeof fullName !== "string") {
    return { surname: "", given: "" };
  }

  const parts = fullName.trim().split(/\s+/);
  return {
    surname: turkishToEnglish(parts.at(-1)).toUpperCase(),
    given: turkishToEnglish(parts.slice(0, -1).join(" ")).toUpperCase(),
  };
}
function splitDateSafe(dateStr) {
  if (!dateStr) return { day: "", month: "", year: "" };

  const d = new Date(dateStr);
  if (isNaN(d)) return { day: "", month: "", year: "" };

  return {
    day: String(d.getDate()).padStart(2, "0"),
    month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    year: String(d.getFullYear()),
  };
}
function getSpouseSurname(form) {
  const applicantGender = form?.steps?.[1]?.gender;
  const spouseFullName = form?.steps?.[8]?.spouseFullName;
  const maidenName = form?.steps?.[8]?.wifeMaidenName;

  if (typeof spouseFullName !== "string") return "";

  // mevcut soyadı (son kelime)
  const parts = spouseFullName.trim().split(/\s+/);
  const currentSurname = parts.at(-1);

  // Eğer eş KADINSA (başvuran erkek)
  if (
    applicantGender === "M" &&
    typeof maidenName === "string" &&
    maidenName.trim() !== ""
  ) {
    return turkishToEnglish(
      `${maidenName.trim()} ${currentSurname}`
    ).toUpperCase();
  }

  // Diğer tüm durumlar
  return turkishToEnglish(currentSurname).toUpperCase();
}
function getSpouseGivenNames(form) {
  const spouseFullName = form?.steps?.[8]?.spouseFullName;
  if (typeof spouseFullName !== "string") return "";

  const parts = spouseFullName.trim().split(/\s+/);
  parts.pop(); // soyadı çıkar

  return turkishToEnglish(parts.join(" ")).toUpperCase();
}
const splitName = (fullName = "") => {
  const parts = fullName.trim().split(" ");
  return {
    given: parts.slice(0, -1).join(" "),
    surname: parts.slice(-1)[0] || ""
  };
};
function normalizeUpper(val = "") {
  if (typeof val !== "string") return "";
  return turkishToEnglish(val).toUpperCase();
}
const formatDateToDs160 = (date) => {
  if (!date) return "";
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();
  const month = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
  return `${day}-${month}-${year}`;
};
const joinArray = (arr, fn) =>
  arr.map(fn).join(",");


const buildCrmForm = (defaultForm, crmMap) => {
  const result = {};

  for (const crmKey in crmMap) {
    const path = crmMap[crmKey];
    const rawValue = path ? getValueByPath(defaultForm, path) : undefined;
    const transform = transformByCrmKey[crmKey];

    let value;

    if (transform) {
      value = transform(rawValue, defaultForm);
    } else {
      // 🔥 transform yoksa path’ten geleni al
      value = rawValue;
    }

    // 🔥 EDU_00_*, EDU_01_* gibi çoklu alanlar
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      !(value instanceof Date)
    ) {
      Object.assign(result, value);
    } else {
      result[crmKey] =
        value === undefined || value === null ? "" : String(value);
    }
  }

  return result;
};

const crmMap = {
  // ===== PERSONAL =====
  SURNAME: "steps.1.fullName",
  GIVEN_NAME: "steps.1.fullName",
  FULL_NAME_NATIVE: "steps.1.fullName",
  OTHER_NAME: "steps.1.otherMarriages",
  OTHER_SURNAME_1: "steps.1.marriages",
  OTHER_GIVEN_NAME_1: "steps.1.marriages",
  GENDER: "steps.1.gender",
  MARITAL_STATUS: "steps.1.maritalStatus",
  // ===== BIRTH =====
  BIRTH_DAY: "steps.1.birthDate",
  BIRTH_MONTH: "steps.1.birthDate",
  BIRTH_YEAR: "steps.1.birthDate",
  BIRTH_CITY: "steps.1.birthPlace",
  BIRTH_STATE: "N/A",
  BIRTH_COUNTRY: "steps.1.birthCountry",
  // ===== NATIONALITY / ID =====
  NATIONALITY: "steps.2.nationality",
  OTHER_NATIONALITY: "steps.2.otherNationalityExist",
  OTHER_NATIONALITY_1_COUNTRY: "steps.2.otherNationality",
  OTHER_NATIONALITY_1_HAS_PASSPORT: "steps.2.otherNationalityExist",
  OTHER_NATIONALITY_1_PASSPORT_NUMBER: "steps.2.otherNationalityPassportNo",
  PERMANENT_RESIDENT_OTHER_COUNTRY: "steps.2.otherSessionExist",
  PERMANENT_RESIDENT_1_COUNTRY: "steps.2.otherSessionExistCountry",
  PERMANENT_RESIDENT_2_COUNTRY: "steps.2.otherSessionExistCountry",
  NATIONAL_ID: "steps.2.tcId",
  SSN: "steps.2.ssn",
  TAX_ID: "steps.2.vkn",
  // ===== FAMILY =====
  FATHER_SURNAME: "steps.7.fatherFullName",
  FATHER_GIVEN: "steps.7.fatherFullName",
  FATHER_DOB: "steps.7.fatherBirthDate",
  FATHER_DOB_NA: "steps.7.fatherBirthDate",
  FATHER_IN_US: "steps.7.isFatherInUSA",
  FATHER_US_STATUS: "steps.7.isFatherUSAStatus",
  MOTHER_SURNAME: "steps.7.motherFullName",
  MOTHER_GIVEN: "steps.7.motherFullName",
  MOTHER_DOB: "steps.7.motherBirthDate",
  MOTHER_DOB_NA: "steps.7.motherBirthDate",
  MOTHER_IN_US: "steps.7.isMotherInUSA",
  MOTHER_US_STATUS: "steps.7.isMotherUSAStatus",
  US_IMMEDIATE_RELATIVE: "steps.7.hasRelativeInUSA",
  US_REL_SURNAME: "steps.7.relatives",
  US_REL_GIVEN: "steps.7.relatives",
  US_REL_TYPE: "steps.7.relatives",
  US_REL_STATUS: "steps.7.relatives",
  US_OTHER_RELATIVE: "steps.7.otherRelativeInUSA",
  // ===== TRAVEL / VISA =====
  PURPOSE_OF_TRIP: "steps.3.visaType",
  PURPOSE_OF_TRIP_SUB: "steps.3.visaTypeDesc",
  VISAEDUSURNAME1:"steps.3.visaEduFullName1",
  VISAEDUGIVEN1:"steps.3.visaEduFullName1",
  VISAEDADDRESS1:"steps.3.visaEduAddress1",
  VISAEDUCITY1:"steps.3.visaEduCity1",
  VISAEDUSTATE1:"steps.3.visaEduState1",
  VISAEDUPOSTCODE1:"steps.3.visaEduPostCode1",
  VISAEDUCOUNTRY1:"steps.3.visaEduCountry1",
  VISAEDUPHONE1:"steps.3.visaEduPhone1",
  VISAEDUMAIL1:"steps.3.visaEduMail1",
  VISAEDUSURNAME2:"steps.3.visaEduFullName2",
  VISAEDUGIVEN2:"steps.3.visaEduFullName2",
  VISAEDADDRESS2:"steps.3.visaEduAddress2",
  VISAEDUCITY2:"steps.3.visaEduCity2",
  VISAEDUSTATE2:"steps.3.visaEduState2",
  VISAEDUPOSTCODE2:"steps.3.visaEduPostCode2",
  VISAEDUCOUNTRY2:"steps.3.visaEduCountry2",
  VISAEDUPHONE2:"steps.3.visaEduPhone2",
  VISAEDUMAIL2:"steps.3.visaEduMail2",
  STUDY_IN_US:"steps.3.study_in_us",
  SEVIS_ID:"steps.3.sevis_id",
  PROGRAM_NUMBER:"steps.3.program_number",
  SCHOOL_NAME:"steps.3.school_name",
  COURSE_OF_STUDY:"steps.3.course_of_study",
  SCHOOL_ADDR1:"steps.3.school_address1",
  SCHOOL_ADDR2:"",
  SCHOOL_CITY:"steps.3.school_city",
  SCHOOL_STATE:"steps.3.school_state",
  SCHOOL_ZIP:"steps.3.school_post_code",
  HAS_SPECIFIC_TRAVEL_PLANS: "steps.3.tourismPlanFinalized",
  ARRIVAL_DAY: "steps.3.exactArrival",
  ARRIVAL_MONTH: "steps.3.exactArrival",
  ARRIVAL_YEAR: "steps.3.exactArrival",
  ARRIVAL_CITY: "steps.3.usaArrivalCity",
  DEPARTURE_DAY: "steps.3.exactDeparture",
  DEPARTURE_MONTH: "steps.3.exactDeparture",
  DEPARTURE_YEAR: "steps.3.exactDeparture",
  DEPARTURE_CITY: "steps.3.usaDepartureCity",
  TRAVEL_LOCATION_1: "steps.3.usaLocations",
  INTENDED_ARRIVAL_DAY: "steps.3.estimatedArrival",
  INTENDED_ARRIVAL_MONTH: "steps.3.estimatedArrival",
  INTENDED_ARRIVAL_YEAR: "steps.3.estimatedArrival",
  TRAVEL_LOS_VALUE: "steps.3.stayDurationValue",
  TRAVEL_LOS_UNIT: "steps.3.stayDurationUnit",
  // ===== US ADDRESS =====
  US_ADDRESS1: "steps.3.usaAddress",
  US_ADDRESS2: "",
  US_CITY: "steps.3.usaAddressCity",
  US_STATE: "steps.3.usaAddressState",
  // US_ZIP: "steps.3.usaAddress",
  // ===== PAYER =====
  PAYER_TYPE: "steps.3.whoPays",
  PAYER_SURNAME: "steps.3.relationfullName",
  PAYER_GIVEN_NAME: "steps.3.relationfullName",
  PAYER_PHONE: "steps.3.payerPhone",
  PAYER_EMAIL: "steps.3.payerMail",
  PAYER_RELATIONSHIP: "steps.3.relationDegree",
  PAYER_ADDRESS_SAME: "",
  PAYER_ADDRESS1: "steps.3.payerRelationAddress",
  PAYER_ADDRESS2: "",
  PAYER_CITY: "steps.3.payerRelationCity",
  PAYER_STATE: "",
  PAYER_ZIP: "steps.3.payerRelationPostCode",
  PAYER_COUNTRY: "steps.3.payerRelationCountry",
  // ŞİRKET
  PAYER_COMPANY_NAME: "steps.3.relationCompanyfullName",

  PAYER_COMPANY_PHONE: "steps.3.payerCompanyPhone",
  PAYER_COMPANY_EMAIL: "steps.3.payerMail",
  PAYER_COMPANY_RELATIONSHIP: "steps.3.payerRelation",
  PAYER_ADDRESS_SAME: "",
  PAYER_COMPANY_ADDRESS1: "steps.3.payerCompanyAddress",
  PAYER_ADDRESS2: "",
  PAYER_COMPANY_CITY: "steps.3.payerCity",
  PAYER_COMPANY_STATE: "steps.3.payerState",
  PAYER_COMPANY_ZIP: "steps.3.payerPostCode",
  PAYER_COMPANY_COUNTRY: "steps.3.payerCountry",



  // ===== PREVIOUS US TRAVEL =====
  TRAVEL_COMPANIONS: "steps.4.travelAlone",
  GROUP_TRAVEL: "steps.4.organizationTravel",
  GROUP_NAME: "steps.4.organizationTravelName",
  PREV_US_TRAVEL: "steps.4.beenToUS",
  PREV_US_VISITS: "steps.4.travelCount",
  VISIT1_ARRIVAL_DATE: "steps.4.lastVisitDate",
  VISIT1_STAY_LENGTH: "steps.4.lastVisitDuration",
  VISIT1_STAY_UNIT: "steps.4.lastVisitDuration",
  TRAVEL_COMPANIONS_LIST: "steps.4.companions",

  // ===== VISA HISTORY =====
  US_DRIVER_LICENSE: "steps.4.hadUSDriverLicense",
  US_DRIVER_LICENSE_NUMBER: "steps.4.driverLicanceNumber",
  US_DRIVER_LICENSE_STATE: "steps.4.driverLicenseState",
  PREV_VISA: "steps.4.hadUSVisa",
  PREV_VISA_ISSUE_DATE: "steps.4.visaDate",
  PREV_VISA_NUMBER: "steps.4.visaNumber",
  PREV_VISA_SAME_TYPE: "steps.4.hadUSVisa",
  PREV_VISA_SAME_COUNTRY: "steps.4.hadUSVisa",
  PREV_VISA_TEN_PRINTED: "steps.4.hadFingerprints",
  PREV_VISA_LOST: "steps.4.visaLostStolen",
  PREV_VISA_LOST_YEAR: "steps.4.visaLostStolenYear",
  PREV_VISA_LOST_EXPL: "steps.4.visaLostStolenInfo",
  PREV_VISA_CANCELLED: "steps.4.visaCancelled",
  PREV_VISA_CANCELLED_EXPL: "steps.4.visaCancelledDetail",
  PREV_VISA_REFUSED: "steps.4.visaRefused",
  PREV_VISA_REFUSED_EXPL: "steps.4.visaRefusedDetail",
  IV_PETITION: "steps.4.immigration",
  IV_PETITION_EXPL: "steps.4.immigrationDetail",
  ESTA_DENIED:"NO",
  // ===== CONTACT =====
  HOME_ADDRESS: "steps.5.homeAddress",
  HOME_CITY: "steps.5.home_city",
  HOME_POSTAL_CODE: "steps.5.post_code",
  HOME_COUNTRY: "steps.5.home_country",
  MAILING_SAME_AS_HOME:"YES",
  PRIMARY_PHONE: "steps.5.phone1",
  MOBILE_PHONE: "steps.5.phone2",
  WORK_PHONE: "steps.5.workPhone",
HAS_ADDITIONAL_PHONE:"NO",
  EMAIL: "steps.5.email",
HAS_ADDITIONAL_EMAIL:"NO",
  SOCIAL_MEDIA: "steps.5.socialMediaAccounts",
  SOCIAL_MEDIA_USERNAME: "steps.5.socialMediaAccounts",
ADDITIONAL_SOCIAL:"NO",
  // ===== PASSPORT =====
  PASSPORT_TYPE: "steps.5.passportType",
  PASSPORT_OTHER_EXPL:"steps.5.lostPassportInfo",
  PASSPORT_NUMBER: "steps.5.passportNumber",
  PASSPORT_BOOK_NUMBER: "N/A",
  PASSPORT_ISSUED_COUNTRY: "steps.5.passportAuthorityCountry",
  PASSPORT_ISSUED_IN_COUNTRY: "steps.5.passportAuthorityCountry",
  PASSPORT_ISSUED_CITY: "steps.5.passportAuthority",
  PASSPORT_ISSUE_DATE: "steps.5.passportStart",
  PASSPORT_EXPIRY_DATE: "steps.5.passportEnd",
  PASSPORT_LOST:"steps.5.lostPassportBoolean",
  LOST_PPT_NUMBERS: "steps.5.lostPassportNumber",
  US_POC_NAME_NA: "steps.6.usaRelative",
  US_POC_SURNAME: "steps.6.usaRelativeFullName",
  US_POC_GIVEN_NAME: "steps.6.usaRelativeFullName",
  US_POC_ORG_NA: "steps.6.organizationBoolean",
  US_POC_ORG_NAME: "steps.6.organizationInfo",
  US_POC_ADDR1:"steps.6.usaRelativeAddress",
  US_POC_ADDR2:"",
  US_POC_CITY:"steps.6.usaRelativeAddressCity",
  US_POC_STATE:"steps.6.usaRelativeAddressState",
  US_POC_ZIP:"steps.6.usaRelativePostCode",
  US_POC_PHONE:"steps.6.usaRelativePhone",
  US_POC_EMAIL:"steps.6.usaRelativeEmail",
  US_POC_RELATION:"steps.6.usaRelativeInfo",
  // FAMILY SPOUSE
  SPOUSE_SURNAME:"steps.8.spouseFullName",
  SPOUSE_GIVEN_NAME: "steps.8.spouseFullName",
  SPOUSE_DOB_DAY:"steps.8.spouseBirthDate",
  SPOUSE_DOB_MONTH: "steps.8.spouseBirthDate",
  SPOUSE_DOB_YEAR:"steps.8.spouseBirthDate",
  SPOUSE_NATIONALITY: "steps.8.spouseNationality",
  SPOUSE_POB_CITY:"steps.8.spouseBirthPlace",
  SPOUSE_POB_COUNTRY: "steps.8.spouseBirthPlaceCountry",
   SPOUSE_ADDRESS_TYPE: "steps.8.spouseAddress",
   SPOUSE_ADDR_LINE1: "steps.8.otherSpouseAddress",
    SPOUSE_ADDR_LINE2: "",
    SPOUSE_ADDR_CITY: "steps.8.otherSpouseAddressCity",
    SPOUSE_ADDR_STATE: "",
    SPOUSE_ADDR_POSTAL_CODE: "steps.8.otherSpouseAddressPostCode",
    SPOUSE_ADDR_COUNTRY: "steps.8.otherSpouseAddressCountry",
    HAS_FORMER_SPOUSE: "steps.1.maritalStatus",
  FORMER_SPOUSE_SURNAME: "steps.8.oldSpouseFullName",
  FORMER_SPOUSE_GIVEN: "steps.8.oldSpouseFullName",
  FORMER_SPOUSE_DOB: "steps.8.oldSpouseBirthDate",
  FORMER_SPOUSE_NATIONALITY: "steps.8.oldSpouseNationality",
  FORMER_SPOUSE_POB_CITY: "steps.8.oldSpouseBirthPlace",
  FORMER_SPOUSE_POB_COUNTRY: "steps.8.oldSpouseBirthPlaceCountry",
  FORMER_MARRIAGE_DATE: "steps.8.oldMarriageDate",
  FORMER_MARRIAGE_END_DATE: "steps.8.oldMarriageEndDate",
  FORMER_MARRIAGE_END_COUNTRY: "steps.8.oldSpouseEndCountry",
  FORMER_MARRIAGE_END_REASON: "steps.8.oldSpouseInfo",
  DECEASED_SPOUSE_SURNAME: "steps.8.oldSpouseFullName",
  DECEASED_SPOUSE_GIVEN: "steps.8.oldSpouseFullName",
  DECEASED_SPOUSE_DOB_DAY: "steps.8.oldSpouseBirthDate",
  DECEASED_SPOUSE_DOB_MONTH: "steps.8.oldSpouseBirthDate",
  DECEASED_SPOUSE_DOB_YEAR: "steps.8.oldSpouseBirthDate",
  DECEASED_SPOUSE_NATIONALITY: "steps.8.oldSpouseNationality",
  /* =========================
     PLACE OF BIRTH
  ========================= */
  DECEASED_SPOUSE_POB_CITY: "steps.8.oldSpouseBirthPlace",
  DECEASED_SPOUSE_POB_COUNTRY: "steps.8.oldSpouseBirthPlaceCountry",
  // ===== WORK / EDUCATION =====
  PRESENT_OCCUPATION: "steps.9.occupation",
  PRESENT_OCCUPATION_EXPLAIN: "steps.9.otherJobDescription",
EMP_SCH_NAME:"steps.9.workOrSchoolName",
EMP_SCH_ADDR1:"steps.9.workOrSchoolAddress",
EMP_SCH_ADDR2:"",
EMP_SCH_CITY:"steps.9.workOrSchoolCity",
EMP_SCH_STATE:"__STATIC__",
EMP_SCH_POSTAL:"steps.9.workOrSchoolPostCode",
EMP_SCH_COUNTRY:"steps.9.workOrSchoolCountry",
EMP_SCH_PHONE:"steps.9.workOrSchoolPhone",
EMP_SCH_START_DATE:"steps.9.workStartDate",
EMP_MONTHLY_SALARY:"steps.9.monthlyIncome",
EMP_DUTIES:"steps.9.jobDescription",
PREV_EMPLOYED:"steps.9.previousJobBoolean",
PREV_EMPLOYER_NAMES:"steps.9.previousJobs",
PREV_EMPLOYER_ADDR1:"steps.9.previousJobs",
PREV_EMPLOYER_ADDR2:"steps.9.previousJobs",
PREV_EMPLOYER_CITY:"steps.9.previousJobs",
PREV_EMPLOYER_STATE:"steps.9.previousJobs",
PREV_EMPLOYER_POSTAL:"steps.9.previousJobs",
PREV_EMPLOYER_COUNTRY:"steps.9.previousJobs",
PREV_EMPLOYER_PHONE:"steps.9.previousJobs",
PREV_JOB_TITLE:"steps.9.previousJobs",
PREV_SUPERVISOR_SURNAME:"steps.9.previousJobs",
PREV_SUPERVISOR_GIVEN:"steps.9.previousJobs",
PREV_EMPLOY_FROM:"steps.9.previousJobs",
PREV_EMPLOY_TO:"steps.9.previousJobs",
PREV_EMPLOY_DUTIES:"steps.9.previousJobs",
 OTHER_EDUCATION: null,
  EDUCATIONS: "steps.9.previousEducations",
  // ===== LANGUAGE / MILITARY =====
  CLAN_TRIBE:"__STATIC__",
  LANGUAGES: "steps.10.languages",
  COUNTRIES_VISITED: "steps.10.visitedCountries",
  MILITARY_SERVICE: "steps.10.militaryStatus",
  MIL_COUNTRY:"__STATIC__",
  MIL_BRANCH:"__STATIC__", 
  MIL_SPECIALTY:"__STATIC__",
  MIL_RANK:"__STATIC__", 
  MIL_FROM: "steps.10.militaryStartDate",
  MIL_TO: "steps.10.militaryEndDate",
// YASAL SOURLAR

  INSURGENT_ORG: "__STATIC__",
  COMM_DISEASE: "__STATIC__",
  DISORDER: "__STATIC__",
  DRUG_ABUSE: "__STATIC__",
  ARRESTED: "__STATIC__",
  CONTROLLED_SUBSTANCES: "__STATIC__",
  PROSTITUTION: "__STATIC__",
  MONEY_LAUNDERING: "__STATIC__",
  HUMAN_TRAFFICKING: "__STATIC__",
  ASSISTED_SEVERE_TRAFFICKING: "__STATIC__",
  HUMAN_TRAFFICKING_RELATED: "__STATIC__",
  ILLEGAL_ACTIVITY: "__STATIC__",
  TERRORIST_ACTIVITY: "__STATIC__",
  TERRORIST_SUPPORT: "__STATIC__",
  TERRORIST_ORG: "__STATIC__",
  TERRORIST_REL: "__STATIC__",
  GENOCIDE: "__STATIC__",
  TORTURE: "__STATIC__",
  EX_VIOLENCE: "__STATIC__",
  CHILD_SOLDIER: "__STATIC__",
  RELIGIOUS_FREEDOM: "__STATIC__",
  POPULATION_CONTROLS: "__STATIC__",
  TRANSPLANT: "__STATIC__",
  REMOVAL_HEARING: "__STATIC__",
  IMMIGRATION_FRAUD: "__STATIC__",
  FAIL_TO_ATTEND: "__STATIC__",
  VISA_VIOLATION: "__STATIC__",
  DEPORTED: "__STATIC__",
  CHILD_CUSTODY: "__STATIC__",
  VOTING_VIOLATION: "__STATIC__",
  RENOUNCE_CITIZENSHIP: "__STATIC__",
  // ===== FILES =====
  PHOTO_EXT: "steps.11.photoFile",
  BARCODE: "steps.11.passportFile",
};
const transformByCrmKey = {
    US_REL_SURNAME: (relatives = []) =>
    relatives.map((r) => splitName(r.fullName).surname),

  US_REL_GIVEN: (relatives = []) =>
    relatives.map((r) => splitName(r.fullName).given),

  US_REL_TYPE: (relatives = []) =>
    relatives.map((r) => r.level),

  US_REL_STATUS: (relatives = []) =>
    relatives.map((r) => r.status),
  SOCIAL_MEDIA: (accounts = []) =>
    accounts.map((a) => a.platform),

  SOCIAL_MEDIA_USERNAME: (accounts = []) =>
    accounts.map((a) => a.username),
  PAYER_ADDRESS_SAME: (_v, form) => {
  const addr = form?.steps?.[3];

  const hasAnyAddress =
    !!addr?.payerRelationAddress ||
    !!addr?.payerRelationCity ||
    !!addr?.payerRelationPostCode ||
    !!addr?.payerRelationCountry;

  return hasAnyAddress ? "NO" : "YES";
},
  
//    PASSPORT_LOST: (_v, form) => {
//   const addrs = form?.steps?.[5];

//   const hasAnyAddress =
//     !!addrs?.lostPassportNumber 
//   return hasAnyAddress ? "NO" : "YES";
// },
  VISAEDUSURNAME1: (_v, form) =>
    splitFullNameSafe(form?.steps?.[3]?.visaEduFullName1).surname,
  VISAEDUSURNAME2:(_v, form) =>
    splitFullNameSafe(form?.steps?.[3]?.visaEduFullName2).surname,
VISAEDUGIVEN1:(_v, form) =>
    splitFullNameSafe(form?.steps?.[3]?.visaEduFullName1).given,
VISAEDUGIVEN2:(_v, form) =>
    splitFullNameSafe(form?.steps?.[3]?.visaEduFullName2).given, 
EMP_SCH_STATE:()=> "N/A",
  MIL_SPECIALTY:()=>"COMPULSORY MILITARY",
  MIL_BRANCH:()=>"COMPULSORY MILITARY",
  MIL_RANK:()=> "INFANTRY",
  MIL_COUNTRY: () => "TURKEY",
  CLAN_TRIBE: () => "NO",
  MAILING_SAME_AS_HOME:()=>"YES",
  INSURGENT_ORG: () => "NO",
  COMM_DISEASE: () => "NO",
  DISORDER: () => "NO",
  DRUG_ABUSE: () => "NO",
  ARRESTED: () => "NO",
  ADDITIONAL_SOCIAL: () => "NO",
  CONTROLLED_SUBSTANCES: () => "NO",
  PROSTITUTION: () => "NO",
  MONEY_LAUNDERING: () => "NO",
  HUMAN_TRAFFICKING: () => "NO",
  ASSISTED_SEVERE_TRAFFICKING: () => "NO",
  HUMAN_TRAFFICKING_RELATED: () => "NO",
  ILLEGAL_ACTIVITY: () => "NO",
  TERRORIST_ACTIVITY: () => "NO",
  TERRORIST_SUPPORT: () => "NO",
  TERRORIST_ORG: () => "NO",
  TERRORIST_REL: () => "NO",
  GENOCIDE: () => "NO",
  TORTURE: () => "NO",
  EX_VIOLENCE: () => "NO",
  CHILD_SOLDIER: () => "NO",
  RELIGIOUS_FREEDOM: () => "NO",
  POPULATION_CONTROLS: () => "NO",
  TRANSPLANT: () => "NO",
  REMOVAL_HEARING: () => "NO",
  IMMIGRATION_FRAUD: () => "NO",
  FAIL_TO_ATTEND: () => "NO",
  VISA_VIOLATION: () => "NO",
  DEPORTED: () => "NO",
  CHILD_CUSTODY: () => "NO",
  VOTING_VIOLATION: () => "NO",
  RENOUNCE_CITIZENSHIP: () => "NO",
    TRAVEL_COMPANIONS_LIST: (companions = []) => {
    const result = {};

    companions.forEach((person, index) => {
      const i = String(index).padStart(2, "0");

      const full = (person.fullName || "").trim();
      const parts = full.split(" ");
      const surname = parts.pop() || "";
      const given = parts.join(" ");

      result[`TRAV_COMP_${i}_SURNAME`] = surname;
      result[`TRAV_COMP_${i}_GIVEN`] = given;

      result[`TRAV_COMP_${i}_RELATIONSHIP`] =
        RELATIONSHIP_MAP[person.relationship] || "O";

      result[`TRAV_COMP_${i}_HAS_VISA`] =
        person.hasVisa === "YES" ? "YES" : "NO";
    });

    return result; // 🔥 object merge edilecek
  },
 OTHER_EDUCATION: (_, form) => {
    const list = form?.steps?.[9]?.previousEducations || [];
    return list.length > 0 ? "YES" : "NO";
  },

  EDUCATIONS: (educations) => {
    if (!Array.isArray(educations)) return {};

    const result = {};

    educations.forEach((edu, index) => {
      const i = String(index).padStart(2, "0"); // ctl00, ctl01

      result[`EDU_${i}_SCHOOL_NAME`] = edu.schoolName || "";
      result[`EDU_${i}_ADDR1`] = edu.address1 || "";
      result[`EDU_${i}_ADDR2`] = edu.address2 || "";
      result[`EDU_${i}_CITY`] = edu.city || "";
      result[`EDU_${i}_STATE`] = edu.state || "";
      result[`EDU_${i}_POSTAL`] = edu.post_code || "";
      result[`EDU_${i}_COUNTRY`] = edu.country || "";
      result[`EDU_${i}_COURSE`] = edu.department || "";
      result[`EDU_${i}_DATE_FROM`] = formatDateToDs160(edu.fromDate);
      result[`EDU_${i}_DATE_TO`] = formatDateToDs160(edu.toDate);
    });

    return result;
  },
  PREV_EMPLOYED: (v) => (v === "YES" ? "YES" : "NO"),

  PREV_EMPLOYER_NAMES: (jobs) =>
    joinArray(jobs, j => normalizeUpper(j.companyName)),

  PREV_EMPLOYER_ADDR1: (jobs) =>
    joinArray(jobs, j => normalizeUpper(j.previusWorkAddress)),

  PREV_EMPLOYER_ADDR2: (jobs) =>
    joinArray(jobs, () => ""),

  PREV_EMPLOYER_CITY: (jobs) =>
    joinArray(jobs, j => normalizeUpper(j.previusWorkCity)),

  PREV_EMPLOYER_STATE: (jobs) =>
    joinArray(jobs, () => ""),

  PREV_EMPLOYER_POSTAL: (jobs) =>
    joinArray(jobs, j => normalizeUpper(j.previusWorkPostCode)),

  PREV_EMPLOYER_COUNTRY: (jobs) =>
    joinArray(jobs, j => normalizeUpper(j.previusWorkCountry)),

  PREV_EMPLOYER_PHONE: (jobs) =>
    joinArray(jobs, j => normalizeUpper(j.previusWorkPhone)),

  PREV_JOB_TITLE: (jobs) =>
    joinArray(jobs, j => normalizeUpper(j.position)),

  PREV_SUPERVISOR_SURNAME: (jobs) =>
    joinArray(jobs, j =>
      splitFullNameSafe(j.previusSupervisorFullname).surname
    ),

  PREV_SUPERVISOR_GIVEN: (jobs) =>
    joinArray(jobs, j =>
      splitFullNameSafe(j.previusSupervisorFullname).given
    ),

  PREV_EMPLOY_FROM: (jobs) =>
    joinArray(jobs, j => formatDateToDs160(j.startDate)),

  PREV_EMPLOY_TO: (jobs) =>
    joinArray(jobs, j => formatDateToDs160(j.endDate)),

  PREV_EMPLOY_DUTIES: (jobs) =>
    joinArray(jobs, j => normalizeUpper(j.previusDuties)),

  DECEASED_SPOUSE_SURNAME: (_v, form) =>
    getSurname(form?.steps?.[8]?.oldSpouseFullName),

  DECEASED_SPOUSE_GIVEN: (_v, form) =>
    getGivenName(form?.steps?.[8]?.oldSpouseFullName),

  DECEASED_SPOUSE_DOB_DAY: (_v, form) =>
    getDay(form?.steps?.[8]?.oldSpouseBirthDate),

  DECEASED_SPOUSE_DOB_MONTH: (_v, form) =>
    getMonth(form?.steps?.[8]?.oldSpouseBirthDate),

  DECEASED_SPOUSE_DOB_YEAR: (_v, form) =>
    getYear(form?.steps?.[8]?.oldSpouseBirthDate),

  /* =========================
     SPOUSE ADDRESS (MARRIED)
  ========================= */

  SPOUSE_ADDRESS_TYPE: (_v, form) => {
    const v = form?.steps?.[8]?.spouseAddress;
    if (v === "Same as Home Address") return "H";
    if (v === "Same as Mailing Address") return "M";
    if (v === "Same as U.S. Contact Address") return "U";
    if (v === "Do Not Know") return "D";
    if (v === "OTHER") return "O";
    return "";
  },

  // ===== ONLY IF OTHER =====
  SPOUSE_ADDR_LINE1: (_v, form) =>
    form?.steps?.[8]?.spouseAddress === "OTHER"
      ? normalizeUpper(form?.steps?.[3]?.otherSpouseAddress)
      : "",

  SPOUSE_ADDR_CITY: (_v, form) =>
    form?.steps?.[8]?.spouseAddress === "OTHER"
      ? normalizeUpper(form?.steps?.[3]?.otherSpouseAddressCity)
      : "",

  SPOUSE_ADDR_COUNTRY: (_v, form) =>
    form?.steps?.[8]?.spouseAddress === "OTHER"
      ? (form?.steps?.[3]?.otherSpouseAddressCountry || "")
      : "",

  SPOUSE_ADDR_POSTAL: (_v, form) =>
    form?.steps?.[8]?.spouseAddress === "OTHER"
      ? normalizeUpper(form?.steps?.[3]?.otherSpouseAddressPostCode)
      : "",

  /* =========================
     SPOUSE NAME (MARRIED)
     - senin kuralın: kadın ise
       önce kızlık soyadı + sonra mevcut soyadı
     - bunu getSpouseSurname / getSpouseGivenNames içinde çözüyorsun
  ========================= */
  US_POC_SURNAME: (_v, form) =>
    splitFullNameSafe(form?.steps?.[6]?.usaRelativeFullName).surname,
  US_POC_GIVEN_NAME: (_v, form) =>
    splitFullNameSafe(form?.steps?.[6]?.usaRelativeFullName).given,
  SPOUSE_SURNAME: (_v, form) => getSpouseSurname(form),

  SPOUSE_GIVEN_NAME: (_v, form) => getSpouseGivenNames(form),

  /* =========================
     SPOUSE BIRTH (MARRIED)
  ========================= */

  SPOUSE_POB_CITY: (_v, form) =>
    normalizeUpper(form?.steps?.[8]?.spouseBirthPlace),

  SPOUSE_DOB_DAY: (_v, form) =>
    getDay(form?.steps?.[8]?.spouseBirthDate),

  SPOUSE_DOB_MONTH: (_v, form) =>
    getMonth(form?.steps?.[8]?.spouseBirthDate),

  SPOUSE_DOB_YEAR: (_v, form) =>
    getYear(form?.steps?.[8]?.spouseBirthDate),

  /* =========================
     FORMER SPOUSE (DIVORCED)
  ========================= */

  FORMER_SPOUSE_SURNAME: (_v, form) =>
    splitFullNameSafe(form?.steps?.[8]?.oldSpouseFullName).surname,

  FORMER_SPOUSE_GIVEN: (_v, form) =>
    splitFullNameSafe(form?.steps?.[8]?.oldSpouseFullName).given,

  FORMER_SPOUSE_DOB_DAY: (_v, form) =>
    splitDateSafe(form?.steps?.[8]?.oldSpouseBirthDate).day,

  FORMER_SPOUSE_DOB_MONTH: (_v, form) =>
    splitDateSafe(form?.steps?.[8]?.oldSpouseBirthDate).month,

  FORMER_SPOUSE_DOB_YEAR: (_v, form) =>
    splitDateSafe(form?.steps?.[8]?.oldSpouseBirthDate).year,

  FORMER_MARRIAGE_DATE_DAY: (_v, form) =>
    splitDateSafe(form?.steps?.[8]?.oldMarriageDate).day,

  FORMER_MARRIAGE_DATE_MONTH: (_v, form) =>
    splitDateSafe(form?.steps?.[8]?.oldMarriageDate).month,

  FORMER_MARRIAGE_DATE_YEAR: (_v, form) =>
    splitDateSafe(form?.steps?.[8]?.oldMarriageDate).year,

  FORMER_MARRIAGE_END_DATE_DAY: (_v, form) =>
    splitDateSafe(form?.steps?.[8]?.oldMarriageEndDate).day,

  FORMER_MARRIAGE_END_DATE_MONTH: (_v, form) =>
    splitDateSafe(form?.steps?.[8]?.oldMarriageEndDate).month,

  FORMER_MARRIAGE_END_DATE_YEAR: (_v, form) =>
    splitDateSafe(form?.steps?.[8]?.oldMarriageEndDate).year,

  SURNAME: getSurname,
  GIVEN_NAME: getGivenName,
  GENDER: normalizeGender,
  MARITAL_STATUS: (_, defaultForm) => getMaritalStatus(defaultForm),
  FATHER_SURNAME: getSurname,
  FATHER_GIVEN: getGivenName,
  MOTHER_SURNAME: getSurname,
  MOTHER_GIVEN: getGivenName,
  OTHER_NAME: (_v, form) => {
  const addrs = form?.steps?.[1];

  const hasAnyAddress =
    !addrs?.steps?.otherMarriages 
  return hasAnyAddress ? "NO" : "YES";
},

  OTHER_SURNAME_1: (_, defaultForm) => {
    const { surname } = getOtherNameParts(defaultForm);
    return turkishToEnglish(surname).toUpperCase();
  },

  OTHER_GIVEN_NAME_1: (_, defaultForm) => {
    const { givenName } = getOtherNameParts(defaultForm);
    return turkishToEnglish(givenName).toUpperCase();
  },
  // US_REL_SURNAME: getSurname,
  // US_REL_GIVEN: getGivenName,
  PAYER_SURNAME: getSurname,
  PAYER_GIVEN_NAME: getGivenName,
PASSPORT_ISSUE_DATE: formatDs160Date,
  PASSPORT_EXPIRY_DATE: formatDs160Date,
  BIRTH_DAY: getDay,
  BIRTH_MONTH: getMonth,
  BIRTH_YEAR: getYear,

  ARRIVAL_DAY: getDay,
  ARRIVAL_MONTH: getMonth,
  ARRIVAL_YEAR: getYear,

  DEPARTURE_DAY: getDay,
  DEPARTURE_MONTH: getMonth,
  DEPARTURE_YEAR: getYear,
  VISIT1_STAY_LENGTH: (_, df) => getVisitStay(df, 0).length,
  VISIT1_STAY_UNIT: (_, df) => getVisitStay(df, 0).unit,
  INTENDED_ARRIVAL_DAY: getDay,
  INTENDED_ARRIVAL_MONTH: getMonth,
  INTENDED_ARRIVAL_YEAR: getYear,
  PREV_US_TRAVEL: yesNo,
  PREV_VISA: yesNo,
  PREV_VISA_ISSUE_DATE: formatDs160Date,
  EMP_SCH_START_DATE: formatDs160Date,
  PREV_VISA_SAME_TYPE: (_, df) => isPrevVisaSameType(df),
  PREV_VISA_SAME_COUNTRY: (_, df) => isPrevVisaSameType(df),
  MILITARY_SERVICE: yesNo,
  SSN: normalizeNaIfEmpty,
  TAX_ID: normalizeNaIfEmpty,
  HOME_ADDRESS: (_, df) => buildHomeAddress(df),
    US_POC_ADDR1: (_, df) => getUsPocSource(df).address,
    US_POC_CITY: (_, df) => getUsPocSource(df).city,
  US_POC_STATE: (_, df) => getUsPocSource(df).state,
  US_POC_ZIP: (_, df) => getUsPocSource(df).zip,
  US_POC_PHONE: (_, df) => getUsPocSource(df).phone,
  US_POC_EMAIL: (_, df) => getUsPocSource(df).email,
MIL_FROM:formatDs160Date,
MIL_TO:formatDs160Date,
FATHER_DOB:formatDs160Date,
MOTHER_DOB:formatDs160Date,
};










// const crmForm = buildCrmForm(defaultForm, crmMap);

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



export default function FormDs160() {

const [crmForm, setCrmForm] = useState(() =>
  buildCrmForm(defaultForm, crmMap)
);
  const [isMobile, setIsMobile] = useState(false);
    const [openInfo, setOpenInfo] = useState(false);
      const[resMessage,setResMessage]=useState(false)
  const [form, setForm] = useState( defaultForm
 );
  const [storageMethod, setStorageMethod] = useState("local"); // "local" or "cookie"
  const [statusMessage, setStatusMessage] = useState("");
const [kvkkConsent, setKvkkConsent] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const [langOpen, setLangOpen] = useState(false);
useEffect(() => {
        // Next.js'in client tarafında çalıştığından emin olmak için
        if (typeof window !== 'undefined') {
            setIsMobile(isMobileOrAndroid());
        }
    }, []);
useEffect(() => {
  setCrmForm(buildCrmForm(form, crmMap));
}, [form]);

console.log(crmForm, "default crm form")
function base64ToBlob(base64, mimeType = "image/jpeg") {
  const byteString = atob(base64?.split(",")[1] || base64);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeType });
}

const getSelectedLanguages = (value = "") =>
  value ? value.split(",").map(v => v.trim()) : [];

const toggleLanguage = (currentValue, langValue) => {
  const arr = getSelectedLanguages(currentValue);
  return arr.includes(langValue)
    ? arr.filter(v => v !== langValue).join(",")
    : [...arr, langValue].join(",");
};
const selectedLangs = getSelectedLanguages(
  form?.steps?.[10]?.languages
);
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
    const step8 = form.steps[11];

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

    await sendForm(formToSend,crmForm);
  } catch (error) {
    // console.error(error);
  }

  setIsSubmitting(false);
};


async function sendForm(payload, crmForm) {
  const res = await fetch("/api/submit", {
    method: "POST",
    body: JSON.stringify({
      payload,
      crmForm,
      type: "ds-160",
    }),
    duplex: "half", // 🍎 Apple fix
  });

  if (res.ok) {
    setResMessage(true);
    setForm(prev => ({
      ...prev,
      currentStep: prev.currentStep + 1,
    }));
  } else {
    setResMessage(false);
  }
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
  1: ["fullName", "gender", "maritalStatus", "birthDate", "birthPlace","birthCountry"],
  2: ["nationality","otherNationalityExist", "otherSessionExist",], // Diğer uyruk veya VKN isteğe bağlı
  3: [
    "visaType",
    "visaTypeDesc",
   "tourismPlanFinalized",
    "whoPays",
   
  ],
  4: [
    "travelAlone",
   "organizationTravel",
    "beenToUS",
    "hadUSVisa",
    "immigration",
    "hadUSDriverLicense",
    "visaRefused"
  ],
  5: [
    "home_country",
    "home_city",
    "home_district",
    "home_neighborhood",
    "home_building_no",
    "post_code",
  
    "phone1",
    "email",
    "hasSocialMedia",
    "passportType",
    "passportNumber",
    "passportAuthority",
    "passportAuthorityCountry",
    "passportStart",
    "passportEnd",
    "lostPassportBoolean",
  ],
  6:[
    "usaRelative",
    "organizationBoolean"
  ],
  7: [
  "motherFullName",
  "motherBirthDate",
  "isMotherInUSA",
  "fatherFullName",
  "fatherBirthDate",
  "isFatherInUSA",
  "hasRelativeInUSA",
  "otherRelativeInUSA",


  ],
  8: [
  

   
  ],
   9: [

   "occupation",
   "monthlyIncome",
   "previousJobBoolean",
   "educationBoolean"


  ],
  10:[
"languages",
"militaryStatus",

  ]
};
const adjustCompanions = (count) => {
  const current = form.steps[4].companions || [];
  let updated = [...current];

  if (count > current.length) {
    for (let i = current.length; i < count; i++) {
      updated.push({
        fullName: "",
        relationship: "",
        hasVisa: "",
      });
    }
  } else {
    updated = updated.slice(0, count);
  }

  updateField(4, "companions", updated);
};
const handleEducationChange = (value) => {
  updateField(9, "educationBoolean", value);

  const levels = EDUCATION_FLOW[value] || [];

  const educations = levels.map(level => ({
    level,
    schoolName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    course: "",
    fromDate: "",
    toDate: ""
  }));

  updateField(9, "previousEducations", educations);
};
const handleMirrorSelect = (field, value) => {
  const otherField =
    field === "usaRelative" ? "organizationBoolean" : "usaRelative";

  if (value === "YES") {
    updateField(6, otherField, "NO");
    updateField(6, field, "YES");
  }

  if (value === "NO") {
    updateField(6, otherField, "YES");
    updateField(6, field, "NO");
  }
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
  let newErrors = { ...errors };
 console.log(newErrors)
    if (!valid) {
    missing.forEach(field => {
      newErrors[field] = "Bu alan zorunludur";
    });
  }
    if (!valid) {
    setErrors(newErrors);
    return;
  } 
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


if (step === 5) {
  const s = updatedSteps[5];

  const mahalle = normalizeWithSuffix(s.home_neighborhood, "MAHALLESİ");
  const cadde = normalizeWithSuffix(s.home_street, "CADDE");
  const sokak = normalizeWithSuffix(s.home_avenue, "SOKAK");

  const binaNo = s.home_building_no
    ? `APT NO: ${normalizeAddressPart(s.home_building_no)}`
    : "";

  const daireNo = s.home_apartment_no
    ? `DAİRE NO: ${normalizeAddressPart(s.home_apartment_no)}`
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

  updatedSteps[5].homeAddress = addressParts.join(" ");
}


    return { ...prev, steps: updatedSteps };
  });
};

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

const normalizeInputFullName = (value) => {
  if (!value) return "";

  const map = {
    'ç': 'c', 'Ç': 'C',
    'ğ': 'g', 'Ğ': 'G',
    'ı': 'I', 'İ': 'I',
    'ö': 'o', 'Ö': 'O',
    'ş': 's', 'Ş': 'S',
    'ü': 'u', 'Ü': 'U',
  };


  const replaced = value;

  // Büyük harfe çevir ve boşluğu koru
  return replaced?.toLocaleUpperCase("tr-TR");
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
    if (!form.steps[11]?.passportFile || !(form.steps[11].passportFile instanceof File)) 
      return "";

    return URL.createObjectURL(form.steps[11].passportFile);
  }, [form.steps[11]?.passportFile]);

  const photoPreview = useMemo(() => {
    if (!form.steps[11]?.photoFile || !(form.steps[11].photoFile instanceof File)) 
      return "";

    return URL.createObjectURL(form.steps[11].photoFile);
  }, [form.steps[11]?.photoFile]);

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
const addMarriage = () => {
  updateField(2, "marriages", [
    ...(form?.steps[1]?.marriages || []),
    {
      spouseFullName: "",
      spouseBirthDate: "",
      marriageStartDate: "",
      marriageEndDate: ""
    }
  ]);
};

const updateMarriageField = (i, field, value) => {
  const list = [...form.steps[1].marriages];
  list[i][field] = value;
  updateField(2, "marriages", list);
};

const removeMarriage = (index) => {
  setForm((prev) => {
    const updated = { ...prev };

    if (updated.steps[1].marriages.length <= 1) {
      return updated; // en az 1 evlilik kalsın
    }

    updated.steps[1].marriages = updated.steps[1].marriages.filter(
      (_, i) => i !== index
    );

    return updated;
  });
};
const addArrayItem = (step, field, emptyItem) => {
  setForm(prev => {
    const updated = [...(prev.steps[step][field] || [])];
    updated.push(emptyItem);

    return {
      ...prev,
      steps: {
        ...prev.steps,
        [step]: {
          ...prev.steps[step],
          [field]: updated
        }
      }
    };
  });
};

const removeArrayItem = (step, field, index) => {
  setForm(prev => {
    const updated = [...prev.steps[step][field]];
    updated.splice(index, 1);

    return {
      ...prev,
      steps: {
        ...prev.steps,
        [step]: {
          ...prev.steps[step],
          [field]: updated
        }
      }
    };
  });
};

const updateArrayField = (step, field, index, key, value) => {
  setForm(prev => {
    const updated = [...prev.steps[step][field]];
    updated[index] = {
      ...updated[index],
      [key]: value
    };

    return {
      ...prev,
      steps: {
        ...prev.steps,
        [step]: {
          ...prev.steps[step],
          [field]: updated
        }
      }
    };
  });
};
const EDUCATION_FLOW = {
  HIGH_SCHOOL: ["HIGH_SCHOOL"],
  ASSOCIATE_DEGREE: ["HIGH_SCHOOL", "BACHELOR_DEGREE"],
  BACHELOR_DEGREE: ["HIGH_SCHOOL", "BACHELOR_DEGREE"],
  MASTER_DEGREE: ["HIGH_SCHOOL", "BACHELOR_DEGREE", "MASTER_DEGREE"],
  PHD: ["HIGH_SCHOOL", "BACHELOR_DEGREE", "MASTER_DEGREE", "PHD"]
};

const EDUCATION_LABELS = {
  HIGH_SCHOOL: "Lise",
  BACHELOR_DEGREE: "Üniversite",
  MASTER_DEGREE: "Yüksek Lisans",
  PHD: "Doktora"
};

const fillOrganizationFallback = () => {
  // Şartlar sağlanmıyorsa çık
  if (
    form.steps[6].usaRelative !== "NO" ||
    form.steps[6].organizationBoolean !== "NO"
  ) {
    return;
  }

  updateField(6, "organizationInfo", "XXXX XXXX");
  updateField(6, "usaRelativeAddress", "XXXX XXX XXXXX XXXXX");
  updateField(6, "usaRelativeAddressCity", "XXXXXXXX");
  updateField(6, "usaRelativeAddressState", "CALIFORNIA");
  updateField(6, "usaRelativePhone", "+905556664487");
  updateField(6, "usaRelativeEmail", "deneme@deneme.com");
  updateField(6, "usaRelativePostCode", "06580");
  updateField(6, "usaRelativeInfo", "OTHER");
};
useEffect(() => {
  fillOrganizationFallback();
}, [form.steps[6].usaRelative, form.steps[6].organizationBoolean]);
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
         {form?.currentStep < 12 && (          <div className="mb-6">
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
    {[1,2,3,4,5,6,7,8,9,10,11].map((s, i, arr) => {
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
 {!resMessage && (<div className="text-center">
    <h2 className="text-xl font-semibold">DS-160 Form</h2>
    <p className="text-sm text-gray-500">
     Amerika vize başvurularında istenen DS-160 formu 11(Onbir) bölümden oluşmaktadır.
   
    </p>
       <p className="text-sm text-gray-500">

       Lütfen bilgilerinizi dikkatli doldurunuz.
   
    </p>
  </div>)} 
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
                    updateField(1, "fullName", normalizeInputFullName(e.target.value)); 
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInputFullName(e.target.value);
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
        <option value="F">KADIN</option>
        <option value="M">ERKEK</option>
      </select>
      {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
    </div>

   
 
      <div className="transition-all duration-300">
          <label className="text-sm font-medium">Daha Önce Kullanılan Adı veya Soyadı (Varsa)</label>
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

    {/* DOĞUM TARİHİ */}
    <div>
      <label className="text-sm font-medium">Doğum Tarihi</label>
      <input
      name="birthDate"
        type="date"
        max={new Date().toISOString().split("T")[0]}
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.birthDate ? "border-red-500" : "border-gray-300"}`}
        value={form.steps[1].birthDate || ""}
        onChange={(e) => updateField(1, "birthDate", e.target.value)}
      />
      {errors.birthDate && <p className="text-red-500 text-xs mt-1">{errors.birthDate}</p>}
    </div>

    {/* DOĞUM YERİ */}
    <div>
      <label className="text-sm font-medium">Doğum Yeri (Pasaportta yazan)</label>
      <input
      name="birthPlace"
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.birthPlace ? "border-red-500" : "border-gray-300"}`}
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
  <label className="text-sm font-medium">Doğum Yeri Ülke</label>

  <select
    name="birthCountry"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
      ${errors.birthCountry ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[1].birthCountry || ""}
    onChange={(e) => {
      const selectedValue = e.target.value;

      if (isMobile) {
        // Mobil: normalizasyon YOK
        updateField(1, "birthCountry", selectedValue);
      } else {
        // Desktop: normalizasyon VAR
        updateField(1, "birthCountry",(selectedValue));
      }
    }}
   
  >
    <option value="">Ülke Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 GÖSTERİLEN LABEL = VALUE
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.birthCountry && (
    <p className="text-red-500 text-xs mt-1">{errors.birthCountry}</p>
  )}
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
        <option value="SINGLE">BEKAR</option>
        <option value="MARRIED">EVLI</option>
        <option value="WIDOWED">DUL</option>
        <option value="DIVORCED">BOSANMIS</option>
      </select>
      {errors.maritalStatus && (
        <p className="text-red-500 text-xs mt-1">{errors.maritalStatus}</p>
      )}
    </div>

      {/* ================= EVLİ → MEVCUT EVLİLİK ================= */}


      {/* ================= ESKİ EVLİLİKLER ================= */}
      {(form.steps[1].otherMarriages === "EVET" ||
        ["DUL", "BOSANMIS"].includes(form.steps[1].maritalStatus)) && (
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

{form.steps[1].marriages?.map((m, i) => (
  <div
    key={i}
    className="relative grid grid-cols-1 md:grid-cols-2 gap-6 border p-4 rounded-xl"
  >
    {/* SİL BUTONU */}
    {form.steps[1].marriages.length > 1 && (
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
      <label className="text-sm font-medium">Eski Eş Adı Soyadı</label>
      <input
        placeholder="ADI SOYADI"
        className="w-full mt-1 p-3 border rounded-xl"
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
    </div>

    {/* DOĞUM TARİHİ */}
    <div>
      <label className="text-sm font-medium">Eski Eş Doğum Tarihi</label>
      <input
        type="date"
        max={new Date().toISOString().split("T")[0]}
        className="w-full mt-1 p-3 border rounded-xl"
        value={m.spouseBirthDate}
        onChange={(e) =>
          updateMarriageField(i, "spouseBirthDate", e.target.value)
        }
      />
    </div>

    {/* ESKİ EVLİLİK BAŞLANGIÇ */}
    <div>
      <label className="text-sm font-medium">
        Evlilik Başlangıç Tarihi
      </label>
      <input
        type="date"
        // min={new Date().toISOString().split("T")[0]}
        className="w-full mt-1 p-3 border rounded-xl"
        value={m.marriageStartDate}
        max={
          form.steps[1].maritalStatus === "EVLI" &&
          form.steps[1].marriageDate
            ? form.steps[1].marriageDate
            : undefined
        }
        onChange={(e) =>
          updateMarriageField(i, "marriageStartDate", e.target.value)
        }
      />
      {/* {form.steps[2].maritalStatus === "EVLI" && (
        <p className="text-xs text-gray-500 mt-1">
          Şimdiki evlilikten önce olmalıdır
        </p>
      )} */}
    </div>

    {/* ESKİ EVLİLİK BİTİŞ */}
    <div>
      <label className="text-sm font-medium">
        Evlilik Bitiş Tarihi
      </label>
      <input
        type="date"
        className="w-full mt-1 p-3 border rounded-xl"
        value={m.marriageEndDate}
        min={m.marriageStartDate || undefined}
        max={
          form.steps[1].maritalStatus === "EVLI" &&
          form.steps[1].marriageDate
            ? form.steps[1].marriageDate
            : undefined
        }
        onChange={(e) =>
          updateMarriageField(i, "marriageEndDate", e.target.value)
        }
      />
      {/* <p className="text-xs text-gray-500 mt-1">
        Başlangıçtan sonra ve şimdiki evlilikten önce olmalıdır
      </p> */}
    </div>
  </div>
))}


        </div>
      )}
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

  <select
    name="nationality"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.nationality ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[2].nationality || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(2, "nationality", e.target.value);
      } else {
        // Desktop: Normalizasyon VAR
        updateField(2, "nationality", (e.target.value));
      }
    }}
   
  >
    <option value="">Uyruk Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.nationality && (
    <p className="text-red-500 text-xs mt-1">
      {errors.nationality}
    </p>
  )}
</div>

      {/* Başka Uyruğunuz */}
      <div>
        <label className="text-sm font-medium">
          Yukarıda belirtilen dışında başka uyruğunuz var mı?
        </label>
        <select
          name="otherNationalityExist"
          className={`w-full mt-1 p-3.5 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.otherNationalityExist ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[2].otherNationalityExist || ""}
          onChange={(e) => updateField(2, "otherNationalityExist", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="YES">EVET</option>
          <option value="NO">HAYIR</option>
        </select>
        {errors.otherNationalityExist && <p className="text-red-500 text-xs mt-1">{errors.otherNationalityExist}</p>}
      </div>

      {/* Diğer Uyruğunuz (koşullu) */}
      {form.steps[2].otherNationalityExist === "YES" && (
      <div>
  <label className="text-sm font-medium">Diğer Uyruğunuz</label>

  <select
    name="otherNationality"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.otherNationality ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[2].otherNationality || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(2, "otherNationality", e.target.value);
      } else {
        // Desktop/Diğer: Normalizasyon VAR
        updateField(2, "otherNationality", (e.target.value));
      }
    }}
   
  >
    <option value="">Diğer Uyruğunuzu Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.otherNationality && (
    <p className="text-red-500 text-xs mt-1">
      {errors.otherNationality}
    </p>
  )}
</div>
      )}
         {form.steps[2].otherNationalityExist === "YES" && (
        <div>
          <label className="text-sm font-medium">Diğer Uyruğunuza ait pasaport numarası(varsa)</label>
          <input
            name="otherNationalityPassportNo"
            className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
              ${errors.otherNationalityPassportNo ? "border-red-500" : "border-gray-300"}`}
            value={form.steps[2].otherNationalityPassportNo || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(2, "otherNationalityPassportNo", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(2, "otherNationalityPassportNo", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(2, "otherNationalityPassportNo", normalizedValue);
                }
            }}
            placeholder="Örn: A12345678"
          />
          {errors.otherNationalityPassportNo && <p className="text-red-500 text-xs mt-1">{errors.otherNationalityPassportNo}</p>}
        </div>
      )}
   <div>
        <label className="text-sm font-medium">
         Kendi Ülkeniz Dışında Bir Ülkede Oturumunuz Var Mı?
        </label>
        <select
          name="otherSessionExist"
          className={`w-full mt-1 p-3.5 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.otherSessionExist ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[2].otherSessionExist || ""}
          onChange={(e) => updateField(2, "otherSessionExist", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="YES">EVET</option>
          <option value="NO">HAYIR</option>
        </select>
        {errors.otherSessionExist && <p className="text-red-500 text-xs mt-1">{errors.otherNationalityExist}</p>}
      </div>
          {form.steps[2].otherSessionExist === "YES" && (
       <div>
  <label className="text-sm font-medium">Oturum Aldığınız Ülke</label>

  <select
    name="otherSessionExistCountry"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.otherSessionExistCountry ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[2].otherSessionExistCountry || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(2, "otherSessionExistCountry", e.target.value);
      } else {
        // Desktop/Diğer: Normalizasyon VAR
        updateField(2, "otherSessionExistCountry", (e.target.value));
      }
    }}
 
  >
    <option value="">Oturum Aldığınız Ülkeyi Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.otherSessionExistCountry && (
    <p className="text-red-500 text-xs mt-1">
      {errors.otherSessionExistCountry}
    </p>
  )}
</div>
      )}
      {/* T.C. Kimlik No */}
      <div>
        <label className="text-sm font-medium">Ulusal Kimlik Numaranız</label>
        <input
          name="tcId"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.tcId ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[2].tcId || ""}
          onChange={(e) => updateField(2, "tcId", e.target.value)}
          placeholder="Örn: 12345678901"
        />
        {/* <p className="text-xs text-gray-400 mt-1">11 haneli rakam</p> */}
        {errors.tcId && <p className="text-red-500 text-xs mt-1">{errors.tcId}</p>}
      </div>
 {/* <div>
                  <label className="text-sm font-medium">TC Kimlik Kartı Son Geçerlilik Tarihi</label>
                  <input
                    type="date"
                    name="tcEndDate"
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition
          ${errors.tcEndDate ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
                    value={form.steps[2].tcEndDate || ""}
                    onChange={(e) => updateField(2, "tcEndDate", e.target.value)}
                  />
                  {errors.tcEndDate && <p className="text-red-500 text-xs mt-1">{errors.tcEndDate}</p>}
                </div> */}



              {/* BURASI TAŞINACAK */}
                
{/* BURAYA KADAR */}





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
  <label className="text-sm font-medium">Vize Amacı</label>
  <select
    name="visaType"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
    ${errors.visaType ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[3].visaType || ""}
    onChange={(e) => updateField(3, "visaType", e.target.value)}
  >
    <option value="">SEÇİNİZ</option>

    <option value="TEMP. BUSINESS OR PLEASURE VISITOR (B)">
     Geçici İş ve/veya Eğlence Amaçlı Ziyaretçi
    </option>

    <option value="ACADEMIC OR LANGUAGE STUDENT (F)">
     Akademik veya Dil Öğrencisi
    </option>

    <option value="EXCHANGE VISITOR (J)">
     Değişim Programı
    </option>
  </select>

  {errors.visaType && (
    <p className="text-red-500 text-xs mt-1">{errors.visaType}</p>
  )}
</div>
   {form.steps[3].visaType == "TEMP. BUSINESS OR PLEASURE VISITOR (B)" && (
          <div>
  <label className="text-sm font-medium">Vize Türü</label>
  <select
    name="visaTypeDesc"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
    ${errors.visaTypeDesc ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[3].visaTypeDesc || ""}
    onChange={(e) => updateField(3, "visaTypeDesc", e.target.value)}
  >
    <option value="">SEÇİNİZ</option>

    <option value="BUSINESS OR TOURISM (TEMPORARY VISITOR) (B1/B2)">
     GEÇİCİ İŞ VEYA EĞLENCE AMAÇLI ZİYARETÇİ (B1/B2)
    </option>

    <option value="BUSINESS/CONFERENCE (B1)">
    İŞ/KONFERANS (B1)
    </option>

    <option value="TOURISM/MEDICAL TREATMENT (B2)">
    TURİZM/TIBBİ TEDAVİ (B2)
    </option>
  </select>

  {errors.visaTypeDesc && (
    <p className="text-red-500 text-xs mt-1">{errors.visaTypeDesc}</p>
  )}
</div>
   )} 
      {form.steps[3].visaType == "ACADEMIC OR LANGUAGE STUDENT (F)" && (
          <div>
  <label className="text-sm font-medium">Vize Türü</label>
  <select
    name="visaTypeDesc"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
    ${errors.visaTypeDesc ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[3].visaTypeDesc || ""}
    onChange={(e) => updateField(3, "visaTypeDesc", e.target.value)}
  >
    <option value="">SEÇİNİZ</option>

    <option value="STUDENT (F1)">
    ÖĞRENCİ (F1)
    </option>

    <option value="CHILD OF AN F1 (F2)">
   ÇOCUKLARI (F2)
    </option>

    <option value="SPOUSE OF AN F1 (F2)">
    EŞİ (F2)
    </option>
  </select>

  {errors.visaTypeDesc && (
    <p className="text-red-500 text-xs mt-1">{errors.visaTypeDesc}</p>
  )}
</div>
   )} 
         {form.steps[3].visaType == "EXCHANGE VISITOR (J)" && (
          <div>
  <label className="text-sm font-medium">Vize Türü</label>
  <select
    name="visaTypeDesc"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
    ${errors.visaTypeDesc ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[3].visaTypeDesc || ""}
    onChange={(e) => updateField(3, "visaTypeDesc", e.target.value)}
  >
    <option value="">SEÇİNİZ</option>

    <option value="EXCHANGE VISITOR (J1)">
   DEĞİŞİM PROGRAMI (J1)
    </option>

    <option value="CHILD OF A J1 (J2)">
   ÇOCUKLARI (J2)
    </option>

    <option value="SPOUSE OF A J1 (J2)">
    EŞİ (J2)
    </option>
  </select>

  {errors.visaTypeDesc && (
    <p className="text-red-500 text-xs mt-1">{errors.visaTypeDesc}</p>
  )}
</div>
   )} 
     
{(form.steps[3].visaType == "ACADEMIC OR LANGUAGE STUDENT (F)"  || form.steps[3].visaType == "EXCHANGE VISITOR (J)" ) &&(
<div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-10">


<div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-10 border p-2 rounded-xl">
  <div className="col-span-2 flex justify-center items-center">
    <p>
      Amerika'da eğitim alacağınızı beyan ettiniz. Burada akraba olarak belirttikleriniz haricinde Amerika'da bulunan 2(iki) tanıdığınızın bilgilerini giriniz. 
    </p>
  </div>
<div className="flex flex-col gap-4">
  <div className="flex justify-center items-center">
  <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b-2 border-gray-400 pb-2">
  Tanıdık 1
</h3>
  </div>
    <div>
            <label className="text-sm font-medium">Adı Soyadı</label>
            <input
              className="w-full mt-1 p-3 border rounded-xl"
              value={form.steps[3].visaEduFullName1 || ""}
              onChange={(e) =>
                updateField(
                  3,
                  "visaEduFullName1",
                  isMobile ? e.target.value : normalizeInput(e.target.value)
                )
              }
              onBlur={(e) =>
                isMobile &&
                updateField(3, "visaEduFullName1", normalizeInput(e.target.value))
              }
            />
          </div>
            <div>
        <label className="text-sm font-medium">Adresi</label>
        <input
          name="visaEduAddress1"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.visaEduAddress1 ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].visaEduAddress1 || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "visaEduAddress1", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "visaEduAddress1", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "visaEduAddress1", normalizedValue);
                }
            }}
          
        />
        {errors.visaEduAddress1 && <p className="text-red-500 text-xs mt-1">{errors.visaEduAddress1}</p>}

      </div>
              <div>
        <label className="text-sm font-medium"> Şehir</label>
        <input
          name="visaEduCity1"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.visaEduCity1 ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].visaEduCity1 || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "visaEduCity1", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "visaEduCity1", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "visaEduCity1", normalizedValue);
                }
            }}
          
        />
        {errors.visaEduCity1 && <p className="text-red-500 text-xs mt-1">{errors.visaEduCity1}</p>}

      </div>
          <div>
        <label className="text-sm font-medium">Eyalet</label>
        <input
          name="visaEduState1"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.visaEduState1 ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].visaEduState1 || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "visaEduState1", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "visaEduState1", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "visaEduState1", normalizedValue);
                }
            }}
          
        />
        {errors.visaEduState1 && <p className="text-red-500 text-xs mt-1">{errors.visaEduState1}</p>}

      </div>        
        <div>
        <label className="text-sm font-medium">Posta Kodu</label>
        <input
          name="visaEduPostCode1"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.visaEduPostCode1 ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].visaEduPostCode1 || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "visaEduPostCode1", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "visaEduPostCode1", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "visaEduPostCode1", normalizedValue);
                }
            }}
          
        />
        {errors.visaEduPostCode1 && <p className="text-red-500 text-xs mt-1">{errors.visaEduPostCode1}</p>}

      </div>
      <div>
  <label className="text-sm font-medium">Ülke</label>

  <select
    name="visaEduCountry1"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.visaEduCountry1 ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[3].visaEduCountry1 || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(3, "visaEduCountry1", e.target.value);
      } else {
        // Desktop/Diğer: Normalizasyon VAR
        updateField(3, "visaEduCountry1", (e.target.value));
      }
    }}
   
  >
    <option value="">Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.visaEduCountry1 && (
    <p className="text-red-500 text-xs mt-1">
      {errors.visaEduCountry1}
    </p>
  )}


</div>
      <div>
            <label className="text-sm font-medium"> Telefon</label>
            <input
              name="visaEduPhone1"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[3].visaEduPhone1 || ""}
              onChange={(e) => updateField(3, "visaEduPhone1", e.target.value)}
            />
          </div>
            <div>
            <label className="text-sm font-medium"> E-Posta</label>
            <input
              name="visaEduMail1"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[3].visaEduMail1 || ""}
              onChange={(e) => updateField(3, "visaEduMail1", e.target.value)}
            />
          </div>
</div>


<div className="flex flex-col gap-4">
    <div className="flex justify-center items-center">
  <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b-2 border-gray-400 pb-2">
  Tanıdık 2
</h3>
  </div>
    <div>
            <label className="text-sm font-medium">Adı Soyadı</label>
            <input
              className="w-full mt-1 p-3 border rounded-xl"
              value={form.steps[3].visaEduFullName2}
              onChange={(e) =>
                updateField(
                  3,
                  "visaEduFullName2",
                  isMobile ? e.target.value : normalizeInput(e.target.value)
                )
              }
              onBlur={(e) =>
                isMobile &&
                updateField(3, "visaEduFullName2", normalizeInput(e.target.value))
              }
            />
          </div>
            <div>
        <label className="text-sm font-medium">Adresi</label>
        <input
          name="visaEduAddress2"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.visaEduAddress2 ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].visaEduAddress2 || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "visaEduAddress2", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "visaEduAddress2", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "visaEduAddress2", normalizedValue);
                }
            }}
          
        />
        {errors.visaEduAddress2 && <p className="text-red-500 text-xs mt-1">{errors.visaEduAddress2}</p>}

      </div>
              <div>
        <label className="text-sm font-medium"> Şehir</label>
        <input
          name="visaEduCity2"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.visaEduCity2 ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].visaEduCity2 || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "visaEduCity2", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "visaEduCity2", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "visaEduCity2", normalizedValue);
                }
            }}
          
        />
        {errors.visaEduCity2 && <p className="text-red-500 text-xs mt-1">{errors.visaEduCity2}</p>}

      </div>
          <div>
        <label className="text-sm font-medium">Eyalet</label>
        <input
          name="visaEduState2"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.visaEduState2 ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].visaEduState2 || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "visaEduState2", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "visaEduState2", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "visaEduState2", normalizedValue);
                }
            }}
          
        />
        {errors.visaEduState2 && <p className="text-red-500 text-xs mt-1">{errors.visaEduState2}</p>}

      </div>        
        <div>
        <label className="text-sm font-medium">Posta Kodu</label>
        <input
          name="visaEduPostCode2"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.visaEduPostCode2 ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].visaEduPostCode2 || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "visaEduPostCode2", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "visaEduPostCode2", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "visaEduPostCode2", normalizedValue);
                }
            }}
          
        />
        {errors.visaEduPostCode2 && <p className="text-red-500 text-xs mt-1">{errors.visaEduPostCode2}</p>}

      </div>
      <div>
  <label className="text-sm font-medium">Ülke</label>

  <select
    name="visaEduCountry2"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.visaEduCountry2 ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[3].visaEduCountry2 || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(3, "visaEduCountry2", e.target.value);
      } else {
        // Desktop/Diğer: Normalizasyon VAR
        updateField(3, "visaEduCountry2", (e.target.value));
      }
    }}
   
  >
    <option value="">Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.visaEduCountry2 && (
    <p className="text-red-500 text-xs mt-1">
      {errors.visaEduCountry2}
    </p>
  )}


</div>
      <div>
            <label className="text-sm font-medium"> Telefon</label>
            <input
              name="visaEduPhone2"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[3].visaEduPhone2 || ""}
              onChange={(e) => updateField(3, "visaEduPhone2", e.target.value)}
            />
          </div>
            <div>
            <label className="text-sm font-medium"> E-Posta</label>
            <input
              name="visaEduMail2"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[3].visaEduMail2 || ""}
              onChange={(e) => updateField(3, "visaEduMail2", e.target.value)}
            />
          </div>
</div>

</div>



<div className="col-span-2 flex lg:flex-row gap-5 border p-2 rounded-xl">
  <div className="flex flex-col gap-4">
    <div>
  <label className="text-sm font-medium">Amerika'da eğitim görmeyi düşünüyor musunuz?</label>
  <select
    className="w-full mt-1 p-3 border rounded-xl"
    value={form.steps[3]?.study_in_us || ""}
    onChange={(e) => {
      const val = e.target.value;
      updateField(3, "study_in_us", val);

    
    }}
  >
    <option value="">Seçiniz</option>
    <option value="YES">Evet</option>
    <option value="NO">Hayır</option>
  </select>
</div>
   <div>
        <label className="text-sm font-medium">SEVIS Kodu</label>
        <input
          name="sevis_id"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.sevis_id ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].sevis_id || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "sevis_id", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "sevis_id", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "sevis_id", normalizedValue);
                }
            }}
          
        />
        {errors.sevis_id && <p className="text-red-500 text-xs mt-1">{errors.sevis_id}</p>}

      </div>
         <div>
        <label className="text-sm font-medium">Program Numarası</label>
        <input
          name="program_number"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.program_number ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].program_number || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "program_number", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "program_number", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "program_number", normalizedValue);
                }
            }}
          
        />
        {errors.program_number && <p className="text-red-500 text-xs mt-1">{errors.program_number}</p>}

      </div>
  </div>
 {form.steps[3]?.study_in_us == "YES" && (
   <div className="flex flex-col gap-4">
      <div>
        <label className="text-sm font-medium">Okul Adı</label>
        <input
          name="school_name"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.school_name ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].school_name || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "school_name", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "school_name", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "school_name", normalizedValue);
                }
            }}
          
        />
        {errors.school_name && <p className="text-red-500 text-xs mt-1">{errors.school_name}</p>}

      </div>
             <div>
        <label className="text-sm font-medium">Müfredat Programı</label>
        <input
          name="course_of_study"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.course_of_study ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].course_of_study || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "course_of_study", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "course_of_study", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "course_of_study", normalizedValue);
                }
            }}
          
        />
        {errors.course_of_study && <p className="text-red-500 text-xs mt-1">{errors.course_of_study}</p>}

      </div>
              <div>
        <label className="text-sm font-medium">Okul Adresi</label>
        <input
          name="school_address1"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.school_address1 ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].school_address1 || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "school_address1", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "school_address1", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "school_address1", normalizedValue);
                }
            }}
          
        />
        {errors.school_address1 && <p className="text-red-500 text-xs mt-1">{errors.school_address1}</p>}

      </div>
                    <div>
        <label className="text-sm font-medium">Okulun Bulunduğu Şehir</label>
        <input
          name="school_city"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.school_city ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].school_city || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "school_city", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "school_city", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "school_city", normalizedValue);
                }
            }}
          
        />
        {errors.school_city && <p className="text-red-500 text-xs mt-1">{errors.school_city}</p>}

      </div>
                  <div>
  <label className="text-sm font-medium">Okulun Bulunduğu Eyalet</label>

  <select
    name="school_state"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.school_state ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[3].school_state || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(3, "school_state", e.target.value);
      } else {
        // Desktop/Diğer: Normalizasyon VAR
        updateField(3, "school_state", (e.target.value));
      }
    }}
   
  >
    <option value="">Seçiniz</option>

    {state.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.school_state && (
    <p className="text-red-500 text-xs mt-1">
      {errors.school_state}
    </p>
  )}
</div>

                 <div>
        <label className="text-sm font-medium">Okulun  Posta Kodu</label>
        <input
          name="school_post_code"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.school_post_code ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].school_post_code || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "school_post_code", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "school_post_code", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "school_post_code", normalizedValue);
                }
            }}
          
        />
        {errors.school_post_code && <p className="text-red-500 text-xs mt-1">{errors.school_post_code}</p>}

      </div>
  </div>)}


          
</div>
</div>



)}
    <div>
  <label className="text-sm font-medium">Seyahat Planınızı Kesinleştirdiniz mi?</label>
  <select
    name="tourismPlanFinalized"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
    ${errors.tourismPlanFinalized ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[3].tourismPlanFinalized || ""}
    onChange={(e) => updateField(3, "tourismPlanFinalized", e.target.value)}
  >
    <option value="">SEÇİNİZ</option>

    <option value="YES">
    EVET
    </option>

    <option value="NO">
    HAYIR
    </option>

  </select>

  {errors.tourismPlanFinalized && (
    <p className="text-red-500 text-xs mt-1">{errors.tourismPlanFinalized}</p>
  )}
</div>

{form.steps[3].tourismPlanFinalized === "YES" && (
  <>
      <div>
        <label className="text-sm font-medium">ABD’ye Kesin Gidiş Tarihi</label>
        <input
          type="date"
          name="exactArrival"
          min={new Date().toISOString().split("T")[0]}
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[3].exactArrival || ""}
          onChange={(e) => updateField(3, "exactArrival", e.target.value)}
        />
      </div>
        <div>
        <label className="text-sm font-medium">ABD’ye Varış Şehri</label>
        <input
          name="usaArrivalCity"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.usaArrivalCity ? "border-red-500" : "border-gray-300"}`}

          value={form.steps[3].usaArrivalCity || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "usaArrivalCity", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "usaArrivalCity", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "usaArrivalCity", normalizedValue);
                }
            }}
         
        />
        {errors.usaArrivalCity && <p className="text-red-500 text-xs mt-1">{errors.usaArrivalCity}</p>}

      </div>
          <div>
        <label className="text-sm font-medium">ABD’den Kesin Dönüş Tarihi</label>
        <input
          type="date"
          name="exactDeparture"
          min={new Date().toISOString().split("T")[0]}
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[3].exactDeparture || ""}
          onChange={(e) => updateField(3, "exactDeparture", e.target.value)}
        />
      </div>
            <div>
        <label className="text-sm font-medium">ABD’den Ayrılış Şehri</label>
        <input
          name="usaDepartureCity"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.usaDepartureCity ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].usaDepartureCity || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "usaDepartureCity", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "usaDepartureCity", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "usaDepartureCity", normalizedValue);
                }
            }}
          
        />
        {errors.usaDepartureCity && <p className="text-red-500 text-xs mt-1">{errors.usaDepartureCity}</p>}

      </div>
         <div>
        <label className="text-sm font-medium">ABD’de Ziyaret Etmeyi Planladığınız Yerler</label>
        <input
          name="usaLocations"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.usaLocations ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].usaLocations || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "usaLocations", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "usaLocations", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "usaLocations", normalizedValue);
                }
            }}
          
        />
        {errors.usaLocations && <p className="text-red-500 text-xs mt-1">{errors.usaLocations}</p>}

      </div>


               <div>
        <label className="text-sm font-medium">ABD’de Konaklayacağınız Adres</label>
        <input
          name="usaAddress"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.usaAddress ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].usaAddress || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "usaAddress ", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "usaAddress", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "usaAddress", normalizedValue);
                }
            }}
          
        />
        {errors.usaAddress && <p className="text-red-500 text-xs mt-1">{errors.usaAddress}</p>}

      </div>
              <div>
        <label className="text-sm font-medium">ABD’de Konaklayacağınız Şehir</label>
        <input
          name="usaAddressCity"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.usaAddressCity ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].usaAddressCity || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "usaAddressCity ", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "usaAddressCity", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "usaAddressCity", normalizedValue);
                }
            }}
          
        />
        {errors.usaAddressCity && <p className="text-red-500 text-xs mt-1">{errors.usaAddressCity}</p>}

      </div>



            <div>
  <label className="text-sm font-medium">ABD’de Konaklayacağınız Eyalet</label>

  <select
    name="usaAddressState"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.usaAddressState ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[3].usaAddressState || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(3, "usaAddressState", e.target.value);
      } else {
        // Desktop/Diğer: Normalizasyon VAR
        updateField(3, "usaAddressState", (e.target.value));
      }
    }}
   
  >
    <option value="">Seçiniz</option>

    {state.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.usaAddressState && (
    <p className="text-red-500 text-xs mt-1">
      {errors.usaAddressState}
    </p>
  )}
</div>
  </>
  



)}
{form.steps[3].tourismPlanFinalized === "NO" && (
  <>
     <div>
        <label className="text-sm font-medium">Kesin Değilse Tahmini Gidiş Tarihiniz</label>
        <input
          type="date"
          min={new Date().toISOString().split("T")[0]}
          name="estimatedArrival"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[3].estimatedArrival || ""}
          onChange={(e) => updateField(3, "estimatedArrival", e.target.value)}
        />
      </div>

      {/* ABD’de Kalış Süresi */}
      <div>
  <label className="text-sm font-medium">ABD’de Ne Kadar Kalacaksınız?</label>

  <div className="flex gap-2 mt-1">
    {/* SÜRE SAYISI */}
    <input
      type="text"
      name="stayDurationValue"
      className={`w-24 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
        ${errors.stayDuration ? "border-red-500" : "border-gray-300"}`}
      value={form.steps[3].stayDurationValue || ""}
      onChange={(e) => {
        if (isMobile) {
          updateField(3, "stayDurationValue", e.target.value);
        } else {
          updateField(3, "stayDurationValue", normalizeInput(e.target.value));
        }
      }}
      onBlur={(e) => {
        if (isMobile) {
          updateField(3, "stayDurationValue", normalizeInput(e.target.value));
        }
      }}
      placeholder="Örn: 1"
    />

    {/* SÜRE BİRİMİ */}
    <select
      name="stayDurationUnit"
      className={`w-40 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
        ${errors.stayDuration ? "border-red-500" : "border-gray-300"}`}
      value={form.steps[3].stayDurationUnit || ""}
      onChange={(e) => updateField(3, "stayDurationUnit", e.target.value)}
    >
      <option value="">Seçiniz</option>
      <option value="Year(s)">Yıl</option>
      <option value="Month(s)">Ay</option>
      <option value="Week(s)">Hafta</option>
      <option value="Day(s)">Gün</option>
      <option value="Less Than 24 Hours">24 Saatten Az</option>
    </select>
  </div>

  {errors.stayDuration && (
    <p className="text-red-500 text-xs mt-1">
      {errors.stayDuration}
    </p>
  )}
</div>

                     <div>
        <label className="text-sm font-medium">ABD’de Konaklayacağınız Adres</label>
        <input
          name="usaAddress"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.usaAddress ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].usaAddress || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "usaAddress ", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "usaAddress", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "usaAddress", normalizedValue);
                }
            }}
          
        />
        {errors.usaAddress && <p className="text-red-500 text-xs mt-1">{errors.usaAddress}</p>}

      </div>
              <div>
        <label className="text-sm font-medium">ABD’de Konaklayacağınız Şehir</label>
        <input
          name="usaAddressCity"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.usaAddressCity ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].usaAddressCity || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "usaAddressCity ", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "usaAddressCity", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "usaAddressCity", normalizedValue);
                }
            }}
          
        />
        {errors.usaAddressCity && <p className="text-red-500 text-xs mt-1">{errors.usaAddressCity}</p>}

      </div>



            <div>
  <label className="text-sm font-medium">ABD’de Konaklayacağınız Eyalet</label>

  <select
    name="usaAddressState"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.usaAddressState ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[3].usaAddressState || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(3, "usaAddressState", e.target.value);
      } else {
        // Desktop/Diğer: Normalizasyon VAR
        updateField(3, "usaAddressState", (e.target.value));
      }
    }}
   
  >
    <option value="">Seçiniz</option>

    {state.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.usaAddressState && (
    <p className="text-red-500 text-xs mt-1">
      {errors.usaAddressState}
    </p>
  )}
</div>
  </>
)}

   

      {/* Tahmini Gidiş Tarihi */}
   

      {/* ABD’de Kalacağınız Açık Adres */}
      {/* <div className="md:col-span-2">
        <label className="text-sm font-medium">ABD’de Kalacağınız Açık Adres(varsa)</label>
        <textarea
          name="stayAddress"
          className={`w-full resize-none mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.stayAddress ? "border-red-500" : "border-gray-300"}`}

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
           {errors.stayAddress && <p className="text-red-500 text-xs mt-1">{errors.stayAddress}</p>}

      </div> */}

      {/* Masrafı Karşılayacak */}
      <div>
        <label className="text-sm font-medium">ABD Gezinizin Masraflarını Kim Karşılayacak?</label>
        <select
          name="whoPays"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.whoPays ? "border-red-500" : "border-gray-300"}`}

          value={form.steps[3].whoPays || ""}
          onChange={(e) => updateField(3, "whoPays", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="SELF">Kendisi</option>
          <option value="OTHER">Anne/Baba/Eş</option>
          <option value="COMPANY">İş Yeri/Organizasyon</option>
          {/* <option value="ES">Eş</option> */}
          {/* <option value="DIGER">Diğer</option> */}
        </select>
         {errors.whoPays && <p className="text-red-500 text-xs mt-1">{errors.whoPays}</p>}
      </div>

      {/* Masrafı karşılayacak kişi farklı ise detay */}
      {( (form.steps[3].whoPays === "OTHER")) && (
        <>
         <div>
            <label className="text-sm font-medium">Karşılayan Adı Soyadı</label>
            <input
              name="relationfullName"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[3].relationfullName || ""}
                     onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "relationfullName", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "relationfullName", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "relationfullName", normalizedValue);
                }
            }}
              // placeholder="Örn: Arkadaş / Kuzen"
            />
            {errors.relationfullName && <p className="text-red-500 text-xs mt-1">{errors.relationfullName}</p>}

          </div>
      <div>
  <label className="text-sm font-medium">Karşılayan Yakınlık Derecesi</label>

  <select
    name="relationDegree"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.relationDegree ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[3].relationDegree || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(3, "relationDegree", e.target.value);
      } else {
        // Desktop/Diğer: Normalizasyon VAR
        updateField(3, "relationDegree", normalizeInput(e.target.value));
      }
    }}
    onBlur={(e) => {
      if (isMobile) {
        const normalizedValue = normalizeInput(e.target.value);
        updateField(3, "relationDegree", normalizedValue);
      }
    }}
  >
    <option value="">SEÇİNİZ</option>

    {payerRelationships?.map((item) => (
      <option
        key={item.value}
        value={item.value}  
      >
        {item.label}       
      </option>
    ))}
  </select>

  {errors.relationDegree && (
    <p className="text-red-500 text-xs mt-1">
      {errors.relationDegree}
    </p>
  )}
</div>
{/* Buradan */}
                         <div>
        <label className="text-sm font-medium">Karşılayan Kişinin Adresi</label>
        <input
          name="payerRelationAddress"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.payerRelationAddress ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].payerRelationAddress || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "payerRelationAddress", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "payerRelationAddress", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "payerRelationAddress", normalizedValue);
                }
            }}
          
        />
        {errors.payerRelationAddress && <p className="text-red-500 text-xs mt-1">{errors.payerRelationAddress}</p>}

      </div>
              <div>
        <label className="text-sm font-medium">Karşılayan Kişi Şehir</label>
        <input
          name="payerRelationCity"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.payerRelationCity ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].payerRelationCity || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "payerRelationCity", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "payerRelationCity", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "payerRelationCity", normalizedValue);
                }
            }}
          
        />
        {errors.payerRelationCity && <p className="text-red-500 text-xs mt-1">{errors.payerRelationCity}</p>}

      </div>

      <div>
  <label className="text-sm font-medium">Karşılayan Kişi Ülke</label>

  <select
    name="payerRelationCountry"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.payerRelationCountry ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[3].payerRelationCountry || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(3, "payerRelationCountry", e.target.value);
      } else {
        // Desktop/Diğer: Normalizasyon VAR
        updateField(3, "payerRelationCountry", (e.target.value));
      }
    }}
   
  >
    <option value="">Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.payerRelationCountry && (
    <p className="text-red-500 text-xs mt-1">
      {errors.payerRelationCountry}
    </p>
  )}
</div>
             <div>
        <label className="text-sm font-medium">Karşılayan Kişi Posta Kodu</label>
        <input
          name="payerRelationPostCode"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.payerRelationPostCode ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].payerRelationPostCode || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "payerRelationPostCode", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "payerRelationPostCode", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "payerRelationPostCode", normalizedValue);
                }
            }}
          
        />
        {errors.payerRelationPostCode && <p className="text-red-500 text-xs mt-1">{errors.payerRelationPostCode}</p>}

      </div>
          <div>
            <label className="text-sm font-medium">Karşılayan Telefon</label>
            <input
              name="payerPhone"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[3].payerPhone || ""}
              onChange={(e) => updateField(3, "payerPhone", e.target.value)}
            />
          </div>
           <div>
            <label className="text-sm font-medium">Karşılayan E-Posta</label>
            <input
              name="payerMail"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[3].payerMail || ""}
              onChange={(e) => updateField(3, "payerMail", e.target.value)}
            />
          </div>
        </>
      )}
    {( (form.steps[3].whoPays === "COMPANY")) && (
        <>
         <div>
            <label className="text-sm font-medium">Karşılayan Şirket/Organizasyon Adı</label>
            <input
              name="relationCompanyfullName"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[3].relationCompanyfullName || ""}
                     onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "relationCompanyfullName", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "relationCompanyfullName", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "relationCompanyfullName", normalizedValue);
                }
            }}
              // placeholder="Örn: Arkadaş / Kuzen"
            />
            {errors.relationCompanyfullName && <p className="text-red-500 text-xs mt-1">{errors.relationCompanyfullName}</p>}

          </div>

       
          <div>
            <label className="text-sm font-medium">Karşılayan Şirket/Organizasyon Telefon</label>
            <input
              name="payerCompanyPhone"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[3].payerCompanyPhone || ""}
              onChange={(e) => updateField(3, "payerCompanyPhone", e.target.value)}
            />
          </div>
           <div>
            <label className="text-sm font-medium">Karşılayanın Sizinle Olan İlişkisi</label>
            <input
              name="payerRelation"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[3].payerRelation || ""}
              onChange={(e) => updateField(3, "payerRelation", e.target.value)}
            />
          </div>

                     <div>
        <label className="text-sm font-medium">Karşılayan Şirket/Organisazyon Adres</label>
        <input
          name="payerCompanyAddress"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.payerCompanyAddress ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].payerCompanyAddress || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "payerCompanyAddress", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "payerCompanyAddress", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "payerCompanyAddress", normalizedValue);
                }
            }}
          
        />
        {errors.payerCompanyAddress && <p className="text-red-500 text-xs mt-1">{errors.payerCompanyAddress}</p>}

      </div>
              <div>
        <label className="text-sm font-medium">Karşılayan Şirket/Organisazyon  Şehir</label>
        <input
          name="payerCity"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.payerCity ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].payerCity || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "payerCity ", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "payerCity", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "payerCity", normalizedValue);
                }
            }}
          
        />
        {errors.payerCity && <p className="text-red-500 text-xs mt-1">{errors.payerCity}</p>}

      </div>

              <div>
        <label className="text-sm font-medium">Karşılayan Şirket/Organisazyon  Eyalet</label>
        <input
          name="payerState"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.payerState ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].payerState || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "payerState ", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "payerState", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "payerState", normalizedValue);
                }
            }}
          
        />
        {errors.payerState && <p className="text-red-500 text-xs mt-1">{errors.payerState}</p>}

      </div>
             <div>
        <label className="text-sm font-medium">Karşılayan Şirket/Organisazyon  Posta Kodu</label>
        <input
          name="payerPostCode"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.payerPostCode ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].payerPostCode || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "payerPostCode ", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "payerPostCode", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "payerPostCode", normalizedValue);
                }
            }}
          
        />
        {errors.payerPostCode && <p className="text-red-500 text-xs mt-1">{errors.payerPostCode}</p>}

      </div>
            <div>
  <label className="text-sm font-medium">Karşılayan Şirket/Organisazyon Ülkesi</label>

  <select
    name="payerCountry"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.payerCountry ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[3].payerCountry || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(3, "payerCountry", e.target.value);
      } else {
        // Desktop/Diğer: Normalizasyon VAR
        updateField(3, "payerCountry", (e.target.value));
      }
    }}
   
  >
    <option value="">Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.payerCountry && (
    <p className="text-red-500 text-xs mt-1">
      {errors.payerCountry}
    </p>
  )}
</div>




        </>
      )}



{/* <div className="md:col-span-2 mt-6">
  <h4 className="font-semibold text-base text-slate-800">
    Amerika’da İrtibatınız Olan Kişi / Kurum
  </h4>
</div>

<div className="md:col-span-2">
  <label className="text-sm font-medium">
    Ad Soyad / Kurum Adı, Ünvan, Açık Adres ve Telefon
  </label>
  <textarea
    rows={3}
    className="w-full resize-none mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
    value={form.steps[3].usContactInfo || ""}
    onChange={(e) =>
      updateField(3, "usContactInfo", normalizeAddressInput(e.target.value))
    }
    placeholder="Örn: John Smith – ABC Company / Address / Phone"
  />
</div> */}

{/* ===================== */}
{/* ABD'DE YAKIN AKRABA */}
{/* ===================== */}
{/* <div className="md:col-span-2 mt-6">
  <h4 className="font-semibold text-base text-slate-800">
    ABD’de Eş / Çocuk / Nişanlı / Kardeş
  </h4>
</div>

<div className="md:col-span-2">
  <label className="text-sm font-medium">
    Ad Soyad ve Oradaki Statüsü
  </label>
  <textarea
    rows={3}
    className="w-full resize-none mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
    value={form.steps[3].usRelativeInfo || ""}
    onChange={(e) =>
      updateField(3, "usRelativeInfo", normalizeInput(e.target.value))
    }
    placeholder="Örn: Ayşe Yılmaz – ABD Vatandaşı / Green Card / Öğrenci"
  />
</div> */}
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
  <label className="text-sm font-medium">Tek mi Seyahat Edeceksiniz?</label>
  <select
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.beenToUS ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[4]?.travelAlone || ""}
    onChange={(e) => {
      const val = e.target.value;
      updateField(4, "travelAlone", val);

      if (val === "YES") {
        updateField(4, "companionCount", 0);
        updateField(4, "companions", []);
      }
    }}
  >
    <option value="">Seçiniz</option>
    <option value="NO">Evet</option>
    <option value="YES">Hayır</option>
  </select>
    {errors.travelAlone && <p className="text-red-500 text-xs mt-1">{errors.travelAlone}</p>}
</div>
{form.steps[4]?.travelAlone === "YES" && (
  <div>
    <label className="text-sm font-medium">
      Kaç Kişi ile Seyahat Edeceksiniz?
    </label>
    <input
      type="number"
      min={1}
      max={10}
      className="w-full mt-1 p-3 border rounded-xl"
      value={form.steps[4]?.companionCount || ""}
      onChange={(e) => {
        const count = Number(e.target.value || 0);
        updateField(4, "companionCount", count);
        adjustCompanions(count);
      }}
    />
  </div>
)}

{form.steps[4]?.companionCount > 0 && (
  form.steps[4]?.companions?.map((person, index) => (
  <div
    key={index}
    className="border rounded-xl p-4 mt-4 bg-gray-50"
  >
    <h4 className="font-semibold mb-3">
      Seyahat Eden Kişi {index + 1}
    </h4>

    {/* AD SOYAD */}
    <div className="mb-3">
      <label className="text-sm font-medium">Adı Soyadı</label>
      <input
        className="w-full mt-1 p-3 border rounded-xl"
        value={person.fullName || ""}
        onChange={(e) =>
          updateArrayField(
            4,
            "companions",
            index,
            "fullName",
            normalizeInput(e.target.value)
          )
        }
      />
    </div>

    {/* YAKINLIK */}
    <div className="mb-3">
      <label className="text-sm font-medium">Yakınlık Derecesi</label>
      <select
        className="w-full mt-1 p-3 border rounded-xl"
        value={person.relationship || ""}
        onChange={(e) =>
          updateArrayField(
            4,
            "companions",
            index,
            "relationship",
            e.target.value
          )
        }
      >
        <option value="">Seçiniz</option>
        <option value="PARENT">Ebeveyn</option>
        <option value="SPOUSE">Eş</option>
        <option value="CHILD">Çocuk</option>
        <option value="RELATIVE">Diğer Akraba</option>
        <option value="FRIEND">Arkadaş</option>
        <option value="BUSINESS">İş Ortağı</option>
        <option value="OTHER">Diğer</option>
      </select>
    </div>

    {/* VİZE */}
    <div>
      <label className="text-sm font-medium">Vizesi Var mı?</label>
      <select
        className="w-full mt-1 p-3 border rounded-xl"
        value={person.hasVisa || ""}
        onChange={(e) =>
          updateArrayField(
            4,
            "companions",
            index,
            "hasVisa",
            e.target.value
          )
        }
      >
        <option value="">Seçiniz</option>
        <option value="YES">Evet</option>
        <option value="NO">Hayır</option>
      </select>
    </div>
  </div>
))
)}


   <div>
        <label className="text-sm font-medium">Grup veya organizasyon kapsamında mı seyahat ediyorsunuz?</label>
        <select
          name="organizationTravel"
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.organizationTravel ? "border-red-500" : "border-gray-300"}`}

          value={form.steps[4].organizationTravel || ""}
          onChange={(e) => updateField(4, "organizationTravel", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="YES">Evet</option>
          <option value="NO">Hayır</option>
        </select>
         {errors.organizationTravel && <p className="text-red-500 text-xs mt-1">{errors.organizationTravel}</p>}

      </div>
       {form.steps[4].organizationTravel === "YES" && (
  <>
   <div>
            <label className="text-sm font-medium">Grup veya Organizasyon Adı</label>
            <input
              type="text"
              name="organizationTravelName"
          
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[4].organizationTravelName || ""}
              onChange={(e) =>
      updateField(
        4,
        "organizationTravelName",
        isMobile ? e.target.value : normalizeInput(e.target.value)
      )
    }
    onBlur={(e) =>
      isMobile &&
      updateField(
        4,
        "organizationTravelName",
        normalizeInput(e.target.value)
      )
    }
        
            />
          </div>


    
  </>

 )}
      {/* Daha önce ABD’de bulundunuz mu? */}
      <div>
        <label className="text-sm font-medium">Daha Önce ABD’de bulundunuz mu?</label>
        <select
          name="beenToUS"
        className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.beenToUS ? "border-red-500" : "border-gray-300"}`}

          value={form.steps[4].beenToUS || ""}
          onChange={(e) => updateField(4, "beenToUS", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="YES">Evet</option>
          <option value="NO">Hayır</option>
        </select>
        {errors.beenToUS && <p className="text-red-500 text-xs mt-1">{errors.beenToUS}</p>}

      </div>

      {/* Evet ise gittiğiniz gün ve kaldığınız süre */}
{form.steps[4].beenToUS === "YES" && (
  <div>
    <label className="text-sm font-medium">
      ABD’ye Kaç Kere Seyahat Ettiniz?
    </label>

  <select
  className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
  value={form.steps[4].travelCount || ""}
  onChange={(e) => {
    const value = e.target.value;

    if (value === "5+") {
      updateField(4, "travelCount", "5+");

      // 🔴 KRİTİK: 5 adet input oluştur
      updateField(
        4,
        "travels",
        Array.from({ length: 5 }, () => ({
          date: "",
          duration: "",
        }))
      );
    } else {
      const count = Number(value);
      updateField(4, "travelCount", count);
      updateField(
        4,
        "travels",
        Array.from({ length: count }, () => ({
          date: "",
          duration: "",
        }))
      );
    }
  }}
>
  <option value="">Seçiniz</option>
  {[1, 2, 3, 4].map((n) => (
    <option key={n} value={n}>{n}</option>
  ))}
  <option value="5">5 ve daha fazla</option>
</select>

  </div>
)}

{form.steps[4].beenToUS === "YES" && form.steps[4].travels?.length > 0 && (
  <>
    {/* 5+ için üst başlık */}


   {form.steps[4].travels.map((travel, index) => (
  <div
    key={index}
    className="relative mt-4 p-4 border rounded-2xl shadow-sm bg-gray-50"
  >
    {/* Kart Başlığı – sol üst */}
    <h4 className="absolute -top-3 left-4 bg-gray-50 px-2 text-sm font-medium">
      {form.steps[4].travelCount === "5"
        ? `Son 5 Seyahat – ${index + 1}. Seyahat`
        : `${index + 1}. Seyahat`}
    </h4>

    {/* Input Grid */}
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Gidiş Tarihi */}
      <div>
        <label className="text-sm font-medium">Gidiş Tarihi</label>
        <input
          type="date"
          max={new Date().toISOString().split("T")[0]}
          className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          value={travel.date}
          onChange={(e) => {
            const updated = [...form.steps[4].travels];
            updated[index].date = e.target.value;
            updateField(4, "travels", updated);
          }}
        />
      </div>

      {/* Kaldığınız Süre */}
     <div className=" flex flex-col">
 <label className="text-sm font-medium">Kaldığınız Süre</label>
  <div className="grid grid-cols-2 gap-2">
  
    <input
      type="number"
      min="1"
      className="w-full mt-1 p-3 border rounded-xl"
      value={travel.durationValue || ""}
      onChange={(e) => {
        const updated = [...form.steps[4].travels];
        updated[index].durationValue = e.target.value;
        updateField(4, "travels", updated);
      }}
    />
        <select
      className="w-full mt-1 p-3 border rounded-xl"
      value={travel.durationUnit || ""}
      onChange={(e) => {
        const updated = [...form.steps[4].travels];
        updated[index].durationUnit = e.target.value;
        updateField(4, "travels", updated);
      }}
    >
      <option value="">Seçiniz</option>
      <option value="DAYS">Gün</option>
      <option value="MONTHS">Ay</option>
      <option value="YEARS">Yıl</option>
    </select>
  </div>


</div>
    </div>
  </div>
))}

  </>
)}
{/* ehliyet sorusu */}
    <div>
        <label className="text-sm font-medium">Daha Önce ABD Ehliyeti Aldınız mı?</label>
        <select
          name="hadUSDriverLicense"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.hadUSDriverLicense ? "border-red-500" : "border-gray-300"}`}

          value={form.steps[4].hadUSDriverLicense || ""}
          onChange={(e) => updateField(4, "hadUSDriverLicense", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="YES">Evet</option>
          <option value="NO">Hayır</option>
        </select>
         {errors.hadUSDriverLicense && <p className="text-red-500 text-xs mt-1">{errors.hadUSDriverLicense}</p>}

      </div>

      {/* Evet ise tarihi ve vize numarası */}
      {form.steps[4].hadUSDriverLicense === "YES" && (
        <>
      
          <div>
            <label className="text-sm font-medium">Sürücü Belge Numarası</label>
            <input
              name="driverLicanceNumber"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[4].driverLicanceNumber || ""}
                       onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "driverLicanceNumber", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "driverLicanceNumber", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "driverLicanceNumber", normalizedValue);
                }
            }}
                  placeholder="Bilmiyorsanız boş bırakabilirsiniz"
            />
          </div>
            <div>
  <label className="text-sm font-medium">Sürücü Belgesinin Bulunduğu Eyalet</label>

  <select
    name="driverLicenseState"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.driverLicenseState ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[3].driverLicenseState || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(3, "driverLicenseState", e.target.value);
      } else {
        // Desktop/Diğer: Normalizasyon VAR
        updateField(3, "driverLicenseState", (e.target.value));
      }
    }}
   
  >
    <option value="">Seçiniz</option>

    {state.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.driverLicenseState && (
    <p className="text-red-500 text-xs mt-1">
      {errors.driverLicenseState}
    </p>
  )}
</div>
        </>
      )}

      {/* Daha önce ABD Vizesi aldınız mı? */}
      <div>
        <label className="text-sm font-medium">Daha Önce ABD Vizesi Aldınız mı?</label>
        <select
          name="hadUSVisa"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.hadUSVisa ? "border-red-500" : "border-gray-300"}`}

          value={form.steps[4].hadUSVisa || ""}
          onChange={(e) => updateField(4, "hadUSVisa", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="EVET">Evet</option>
          <option value="HAYIR">Hayır</option>
        </select>
         {errors.hadUSVisa && <p className="text-red-500 text-xs mt-1">{errors.hadUSVisa}</p>}

      </div>

      {/* Evet ise tarihi ve vize numarası */}
      {form.steps[4].hadUSVisa === "EVET" && (
        <>
          <div>
            <label className="text-sm font-medium">Son Alınan Vize Başlangıç Tarihi</label>
            <input
              type="date"
              name="visaDate"
              max={new Date().toISOString().split("T")[0]}
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[4].visaDate || ""}
              onChange={(e) => updateField(4, "visaDate", e.target.value)}
        
            />
          </div>
          <div>
            <label className="text-sm font-medium">Son Alınan Vize Numarası</label>
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
                  placeholder="Sağ altta bulunan kırmızı ile yazılmış numara"
            />
          </div>
                <div>
  <label className="text-sm font-medium">Son Alınan Vize Türü</label>
  <select
    name="hadVisaType"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
    ${errors.hadVisaType ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[4].hadVisaType || ""}
    onChange={(e) => updateField(4, "hadVisaType", e.target.value)}
  >
    <option value="">SEÇİNİZ</option>

    <option value="BUSINESS OR TOURISM (TEMPORARY VISITOR) (B1/B2)">
      B1/B2 – Turistik ve İş Amaçlı Kısa Süreli Ziyaret
    </option>

    <option value="STUDENT (F1)">
      F1 – Öğrenci Vizesi (Dil Okulu / Üniversite / Akademik Eğitim)
    </option>

    <option value="EXCHANGE VISITOR (J1)">
      J1 – Değişim Programı (Work & Travel, Staj, Kültürel Değişim)
    </option>
  </select>


</div>

  <div>
  <label className="text-sm font-medium">10 Parmak İzi Verdiniz Mi?</label>
  <select
    name="hadFingerprints"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
    ${errors.hadFingerprints ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[4].hadFingerprints || ""}
    onChange={(e) => updateField(4, "hadFingerprints", e.target.value)}
  >
    <option value="">SEÇİNİZ</option>

    <option value="YES">
   EVET
    </option>

    <option value="NO">
      HAYIR
    </option>

  </select>


</div>









  <div>
  <label className="text-sm font-medium">Son Alınan Vize Kayboldu/Çalındı mı?</label>
  <select
    name="visaLostStolen"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
    ${errors.visaLostStolen ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[4].visaLostStolen || ""}
    onChange={(e) => updateField(4, "visaLostStolen", e.target.value)}
  >
    <option value="">SEÇİNİZ</option>

    <option value="YES">
   EVET
    </option>

    <option value="NO">
      HAYIR
    </option>

  </select>


</div>


  {form.steps[4].visaLostStolen === "YES" && (
    <>
      <div>
            <label className="text-sm font-medium">Son Alınan Vizenin Kaybolduğu/Çalındığı Yıl</label>
            <input
              name="visaLostStolenYear"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[4].visaLostStolenYear || ""}
                       onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "visaLostStolenYear", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "visaLostStolenYear", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "visaLostStolenYear", normalizedValue);
                }
            }}
                  placeholder="Örn: 2020"
            />
          </div>
      <div>
            <label className="text-sm font-medium">Kaybolma/Çalınma Olayını Açıklayınız</label>
            <input
              name="visaLostStolenInfo"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[4].visaLostStolenInfo || ""}
                       onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(4, "visaLostStolenInfo", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(4, "visaLostStolenInfo", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(4, "visaLostStolenInfo", normalizedValue);
                }
            }}
                  placeholder="Açıklayınız"
            />
          </div>
    </>

  )}  



      <div>
        <label className="text-sm font-medium">Daha Önce ABD Vizeniz İptal Edildi mi?</label>
        <select
          name="visaCancelled"
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.visaCancelled ? "border-red-500" : "border-gray-300"}`}

          value={form.steps[4].visaCancelled || ""}
          onChange={(e) => updateField(4, "visaCancelled", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="YES">Evet</option>
          <option value="NO">Hayır</option>
        </select>
         {errors.visaCancelled && <p className="text-red-500 text-xs mt-1">{errors.visaCancelled}</p>}

      </div>
 {form.steps[4].visaCancelled === "YES" && (
  <>
 
<div className="md:col-span-2">
  <label className="text-sm font-medium">İptal Nedenini Açıklayınız</label>
  <textarea
    rows={2}
    className="w-full mt-1 p-3 border rounded-xl resize-none"
    value={form.steps[4].visaCancelledDetail || ""}
    onChange={(e) =>
      updateField(
        4,
        "visaCancelledDetail",
        isMobile ? e.target.value : normalizeInput(e.target.value)
      )
    }
    onBlur={(e) =>
      isMobile &&
      updateField(
        4,
        "visaCancelledDetail",
        normalizeInput(e.target.value)
      )
    }
  />
</div>

    
  </>

 )}





        </>
      )}



      {/* Daha önce ABD vizesi başvurusunda ret aldınız mı? */}
      <div>
        <label className="text-sm font-medium">Daha Önce ABD Vizesi Başvurusunda Ret Aldınız mı?</label>
        <select
          name="visaRefused"
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.visaRefused ? "border-red-500" : "border-gray-300"}`}

          value={form.steps[4].visaRefused || ""}
          onChange={(e) => updateField(4, "visaRefused", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="YES">Evet</option>
          <option value="NO">Hayır</option>
        </select>
         {errors.visaRefused && <p className="text-red-500 text-xs mt-1">{errors.visaRefused}</p>}

      </div>
 {form.steps[4].visaRefused === "YES" && (
  <>
   <div>
            <label className="text-sm font-medium">Vize Ret Tarihi</label>
            <input
              type="date"
              name="visaDateLastRefused"
              max={new Date().toISOString().split("T")[0]}
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[4].visaDateLastRefused || ""}
              onChange={(e) => updateField(4, "visaDateLastRefused", e.target.value)}
        
            />
          </div>
<div className="md:col-span-2">
  <label className="text-sm font-medium">Vize Reddi Nedenini Açıklayınız</label>
  <textarea
    rows={2}
    className="w-full mt-1 p-3 border rounded-xl resize-none"
    value={form.steps[4].visaRefusedDetail || ""}
    onChange={(e) =>
      updateField(
        4,
        "visaRefusedDetail",
        isMobile ? e.target.value : normalizeInput(e.target.value)
      )
    }
    onBlur={(e) =>
      isMobile &&
      updateField(
        4,
        "visaRefusedDetail",
        normalizeInput(e.target.value)
      )
    }
  />
</div>

    
  </>

 )}
 


      <div>
        <label className="text-sm font-medium">Daha Önce ABD'ye Göçmenlik Başvurusu Yaptınız mı?</label>
        <select
          name="immigration"
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.immigration ? "border-red-500" : "border-gray-300"}`}

          value={form.steps[4].immigration || ""}
          onChange={(e) => updateField(4, "immigration", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="YES">Evet</option>
          <option value="NO">Hayır</option>
        </select>
         {errors.immigration && <p className="text-red-500 text-xs mt-1">{errors.immigration}</p>}

      </div>
 {form.steps[4].immigration === "YES" && (
  <>

<div className="md:col-span-2">
  <label className="text-sm font-medium">Göçmenlik Başvurusunu Açıklayınız</label>
  <textarea
    rows={2}
    className="w-full mt-1 p-3 border rounded-xl resize-none"
    value={form.steps[4].immigrationDetail || ""}
    onChange={(e) =>
      updateField(
        4,
        "immigrationDetail",
        isMobile ? e.target.value : normalizeInput(e.target.value)
      )
    }
    onBlur={(e) =>
      isMobile &&
      updateField(
        4,
        "immigrationDetail",
        normalizeInput(e.target.value)
      )
    }
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

    <div className="mb-6">
      <h4 className="font-semibold text-base text-slate-800">
        Açık Adresiniz</h4>
    </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* ülke */}
<div>
  <label className="text-sm font-medium">Ülke</label>

  <select
    name="home_country"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.home_country ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[5].home_country || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(5, "home_country", e.target.value);
      } else {
        // Desktop: Normalizasyon VAR
        updateField(5, "home_country", (e.target.value));
      }
    }}
   
  >
    <option value="">Ülke Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}  
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.home_country && (
    <p className="text-red-500 text-xs mt-1">
      {errors.home_country}
    </p>
  )}
</div>
  {/* İl */}

  <div>
    <label className="text-sm font-medium">İl *</label>
    <input
      name="home_city"
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.home_city ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
     
      value={form.steps[5].home_city}
                      onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "home_city", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "home_city", normalizeAddressInput(e.target.value));
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
      value={form.steps[5].home_district || ""}
                         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "home_district", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "home_district", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(5, "home_district", normalizedValue);
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
      value={form.steps[5].home_neighborhood || ""}
                         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "home_neighborhood", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "home_neighborhood", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(5, "home_neighborhood", normalizedValue);
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
      value={form.steps[5].home_street || ""}
                         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "home_street", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "home_street", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(5, "home_street", normalizedValue);
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
      value={form.steps[5].home_avenue || ""}
                         onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "home_avenue", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "home_avenue", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(5, "home_avenue", normalizedValue);
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
      value={form.steps[5].home_building_no || ""}
                      onChange={(e) => {
               updateField(5, "home_building_no", e.target.value);
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(5, "home_building_no", normalizedValue);
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
    <label className="text-sm font-medium">Daire No </label>
    <input
      name="home_apartment_no"
      className={`w-full mt-1 p-3 border rounded-xl shadow-sm outline-none transition 
        ${errors.home_apartment_no ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      value={form.steps[5].home_apartment_no || ""}
                       onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "home_apartment_no", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "home_apartment_no", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(5, "home_apartment_no", normalizedValue);
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
          value={form.steps[5].post_code}
                           onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "post_code", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "post_code", normalizeAddressInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeAddressInput(e.target.value);
                    updateField(5, "post_code", normalizedValue);
                }
            }}
          placeholder="Örn: 06510"
        />
        {errors.post_code && (
          <p className="text-red-500 text-xs mt-1">{errors.post_code}</p>
        )}
      </div>
       {/* İletişim Numaraları */}
      <div>
        <label className="text-sm font-medium">İletişim Numarası 1</label>
        <input
          name="phone1"
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.phone1 ? "border-red-500" : "border-gray-300"}`}

          value={form.steps[5].phone1 || ""}
          onChange={(e) => updateField(5, "phone1", e.target.value)}
          placeholder="Örn: +90 555 123 45 67"
        />
        {errors.phone1 && <p className="text-red-500 text-xs mt-1">{errors.phone1}</p>}

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
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.email ? "border-red-500" : "border-gray-300"}`}

          value={form.steps[5].email || ""}
          onChange={(e) => updateField(5, "email", e.target.value)}
          placeholder="Örn: ornek@mail.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}

      </div>
</div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7">

      {/* Sosyal Medya */}
 <div>
  <label className="text-sm font-medium">
    Sosyal Medya Hesabınız Var mı?
  </label>
  <select
   className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.email ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[5].hasSocialMedia || ""}
    onChange={(e) => {
      const value = e.target.value;
      updateField(5, "hasSocialMedia", value);

      if (value === "NO") {
        updateField(5, "socialMediaAccounts", []);
      }
    }}
  >
    <option value="">Seçiniz</option>
    <option value="YES">Evet</option>
    <option value="NO">Hayır</option>
  </select>
    {errors.hasSocialMedia && <p className="text-red-500 text-xs mt-1">{errors.hasSocialMedia}</p>}
</div>
{form.steps[5].hasSocialMedia === "YES" && (
  <div className="mt-4 p-4 border rounded-2xl bg-gray-50">
    <h4 className="font-medium mb-3">Kullandığınız Sosyal Medyalar</h4>

    {["Instagram", "LinkedIn", "Facebook", "X(Twitter)","Youtube"].map((platform) => {
      const exists = form.steps[5].socialMediaAccounts?.find(
        (p) => p.platform === platform
      );

      return (
        <div key={platform} className="mb-4">
          {/* Checkbox */}
          <label className="flex items-center gap-2 font-medium">
            <input
              type="checkbox"
              checked={!!exists}
              onChange={(e) => {
                let updated = [...(form.steps[5].socialMediaAccounts || [])];

                if (e.target.checked) {
                  updated.push({ platform, username: "" });
                } else {
                  updated = updated.filter((p) => p.platform !== platform);
                }

                updateField(5, "socialMediaAccounts", updated);
              }}
            />
            {platform}
          </label>

          {/* Username input */}
          {exists && (
            <input
              className="w-full mt-2 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder={`${platform} kullanıcı adınız`}
              value={exists.username}
              onChange={(e) => {
                const updated = [...form.steps[5].socialMediaAccounts];
                const index = updated.findIndex(
                  (p) => p.platform === platform
                );

                updated[index].username = isMobile
                  ? e.target.value
                  : normalizeInput(e.target.value);

                updateField(5, "socialMediaAccounts", updated);
              }}
              onBlur={(e) => {
                if (isMobile) {
                  const updated = [...form.steps[5].socialMediaAccounts];
                  const index = updated.findIndex(
                    (p) => p.platform === platform
                  );
                  updated[index].username = normalizeInput(e.target.value);
                  updateField(5, "socialMediaAccounts", updated);
                }
              }}
            />
          )}
        </div>
      );
    })}
  </div>
)}


      {/* Pasaport Türü */}
      <div>
        <label className="text-sm font-medium">Pasaport Türünüz</label>
        <select
          name="passportType"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.passportType ? "border-red-500" : "border-gray-300"}`}

          value={form.steps[5].passportType || ""}
          onChange={(e) => updateField(5, "passportType", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="OFFICIAL">HUSUSI (YESIL)</option>
          <option value="OTHER">HIZMET (GRI)</option>
          <option value="DIPLOMATIC">DIPLOMATIK (SIYAH)</option>
          <option value="REGULAR">UMUMA MAHSUS (BORDO)</option>
          <option value="GECICI">GECICI (PEMBE)</option>
        </select>
        {errors.passportType && <p className="text-red-500 text-xs mt-1">{errors.passportType}</p>}

      </div>

      {/* Pasaport Numarası */}
      <div>
        <label className="text-sm font-medium">Pasaport Numaranız</label>
        <input
          name="passportNumber"
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.passportNumber ? "border-red-500" : "border-gray-300"}`}

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
        {errors.passportNumber && <p className="text-red-500 text-xs mt-1">{errors.passportNumber}</p>}

      </div>

      {/* Pasaportu Veren Makam */}


<div>
  <label className="text-sm font-medium">Pasaportu Veren Ülke</label>

  <select
    name="passportAuthorityCountry"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.passportAuthorityCountry ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[5].passportAuthorityCountry || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(5, "passportAuthorityCountry", e.target.value);
      } else {
        // Desktop: Normalizasyon VAR
        updateField(5, "passportAuthorityCountry", (e.target.value));
      }
    }}
   
  >
    <option value="">Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}  
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.passportAuthorityCountry && (
    <p className="text-red-500 text-xs mt-1">
      {errors.passportAuthorityCountry}
    </p>
  )}
</div>

      <div>
        <label className="text-sm font-medium">Pasaportu Veren Makam(Pasarpotta Yazan)</label>
        <input
          name="passportAuthority"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.passportAuthority ? "border-red-500" : "border-gray-300"}`}

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
          placeholder="Pasaportta Yazan"
        />
         {errors.passportAuthority && <p className="text-red-500 text-xs mt-1">{errors.passportAuthority}</p>}

      </div>

      {/* Pasaport Başlangıç ve Bitiş Tarihi */}
      <div>
        <label className="text-sm font-medium">Pasaport Başlangıç Tarihi</label>
        <input
          type="date"
          name="passportStart"
          max={new Date().toISOString().split("T")[0]}
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.passportStart ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[5].passportStart || ""}
          onChange={(e) => updateField(5, "passportStart", e.target.value)}
        />
         {errors.passportStart && <p className="text-red-500 text-xs mt-1">{errors.passportStart}</p>}

      </div>
      <div>
        <label className="text-sm font-medium">Pasaport Bitiş Tarihi</label>
        <input
          type="date"
          name="passportEnd"
          min={new Date().toISOString().split("T")[0]}
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.passportEnd ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[5].passportEnd || ""}
          onChange={(e) => updateField(5, "passportEnd", e.target.value)}
        />
          {errors.passportEnd && <p className="text-red-500 text-xs mt-1">{errors.passportEnd}</p>}

      </div>

      {/* Daha önce kayıp pasaport */}
     <div>
        <label className="text-sm font-medium">Daha Önce Pasaportu Kaybettiniz/Çaldırdınız mı?</label>
        <select
          name="lostPassportBoolean"
           className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.lostPassportBoolean ? "border-red-500" : "border-gray-300"}`}

          onChange={(e) => updateField(5, "lostPassportBoolean", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="YES">Evet</option>
          <option value="NO">Hayır</option>
        </select>
        {errors.lostPassportBoolean && <p className="text-red-500 text-xs mt-1">{errors.lostPassportBoolean}</p>}

      </div>


{form.steps[5].lostPassportBoolean === "YES" && (
  <>
   <div>
        <label className="text-sm font-medium">Kaybolan/Çalınan Pasaport Numaranız</label>
        <input
          name="lostPassportNumber"
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.lostPassportNumber ? "border-red-500" : "border-gray-300"}`}

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
        {errors.lostPassportNumber && <p className="text-red-500 text-xs mt-1">{errors.lostPassportNumber}</p>}

      </div>
<div>
  <label className="text-sm font-medium">Kaybolan/Çalınan Pasaportu Veren Ülke</label>

  <select
    name="lostPassportAuthorityCountry"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.lostPassportAuthorityCountry ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[5].lostPassportAuthorityCountry || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(5, "lostPassportAuthorityCountry", e.target.value);
      } else {
        // Desktop: Normalizasyon VAR
        updateField(5, "lostPassportAuthorityCountry", (e.target.value));
      }
    }}
   
  >
    <option value="">Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}  
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.lostPassportAuthorityCountry && (
    <p className="text-red-500 text-xs mt-1">
      {errors.lostPassportAuthorityCountry}
    </p>
  )}
</div>

      <div className="md:col-span-2">
        <label className="text-sm font-medium">Kaybolan/Çalınan Pasaport Açıklaması</label>
        <input
          name="lostPassportInfo"
          className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.steps[5].lostPassportInfo || ""}
       onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(5, "lostPassportInfo", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(5, "lostPassportInfo", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(5, "lostPassportInfo", normalizedValue);
                }
            }}
         
        />
      </div>
  </>
)}
  

    </div>
  </section>
)}

{form.currentStep === 6 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">6.Bölüm</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 
     <div>
        <label className="text-sm font-medium">ABD'de Yakınınız Var mı?</label>
      <select
  name="usaRelative"
  className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
  ${errors.usaRelative ? "border-red-500" : "border-gray-300"}`}
  value={form.steps[6].usaRelative || ""}
  onChange={(e) => updateField(6, "usaRelative", e.target.value)}
>
  <option value="">Seçiniz</option>
  <option value="YES">Evet</option>
  <option value="NO">Hayır</option>
</select>

        {errors.usaRelative && <p className="text-red-500 text-xs mt-1">{errors.usaRelative}</p>}

      </div>
 {form.steps[6].usaRelative === "YES" && (
  <>
   <div>
        <label className="text-sm font-medium">Adı Soyadı</label>
        <input
          name="usaRelativeFullName"
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.usaRelativeFullName ? "border-red-500" : "border-gray-300"}`}
 value={form.steps[6].usaRelativeFullName || ""}
           onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(6, "usaRelativeFullName", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(6, "usaRelativeFullName", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(6, "usaRelativeFullName", normalizedValue);
                }
            }}

        />
           {errors.usaRelativeFullName && <p className="text-red-500 text-xs mt-1">{errors.usaRelativeFullName}</p>}

      </div>
           <div>
        <label className="text-sm font-medium">Yakınlık Derecesi</label>
        <select
          name="usaRelativeInfo"
           className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.usaRelativeInfo ? "border-red-500" : "border-gray-300"}`}
        value={form.steps[6].usaRelativeInfo || ""}
          onChange={(e) => updateField(6, "usaRelativeInfo", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="RELATIVE">AKRABA</option>
          <option value="SPOUSE">EŞ</option>
          <option value="FRIEND">ARKADAŞ</option>
          <option value="BUSINESS ASSOCIATE">İŞ ORTAĞI</option>
          <option value="EMPLOYER">İŞ VEREN</option>
          <option value="SCHOOL OFFICIAL">OKUL YETKİLİSİ</option>
          <option value="OTHER">DİĞER</option>

        </select>
        {errors.usaRelativeInfo && <p className="text-red-500 text-xs mt-1">{errors.usaRelativeInfo}</p>}

      </div>
               <div>
        <label className="text-sm font-medium">Yakınınızın Yaşadığı Adresi</label>
        <input
          name="usaRelativeAddress"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.usaRelativeAddress ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[6].usaRelativeAddress || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(6, "usaRelativeAddress ", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(6, "usaRelativeAddress", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(6, "usaRelativeAddress", normalizedValue);
                }
            }}
          
        />
        {errors.usaRelativeAddress && <p className="text-red-500 text-xs mt-1">{errors.usaRelativeAddress}</p>}

      </div>
              <div>
        <label className="text-sm font-medium">Yakınınızın Yaşadığı Şehir</label>
        <input
          name="usaRelativeAddressCity"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.usaRelativeAddressCity ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[6].usaRelativeAddressCity || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(6, "usaRelativeAddressCity ", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(6, "usaRelativeAddressCity", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(6, "usaRelativeAddressCity", normalizedValue);
                }
            }}
          
        />
        {errors.usaRelativeAddressCity && <p className="text-red-500 text-xs mt-1">{errors.usaRelativeAddressCity}</p>}

      </div>
  <div>
            <label className="text-sm font-medium">Yakınınızın Telefonu</label>
            <input
              name="usaRelativePhone"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[6].usaRelativePhone || ""}
              onChange={(e) => updateField(6, "usaRelativePhone", e.target.value)}
            />
          </div>
    <div>
            <label className="text-sm font-medium">Yakınınızın E-Postası</label>
            <input
              name="usaRelativeEmail"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[6].usaRelativeEmail || ""}
              onChange={(e) => updateField(6, "usaRelativeEmail", e.target.value)}
            />
          </div>
 <div>
            <label className="text-sm font-medium">Yakınınızın Posta Kodu</label>
            <input
              name="usaRelativePostCode"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[6].usaRelativePostCode || ""}
              onChange={(e) => updateField(6, "usaRelativePostCode", e.target.value)}
            />
          </div>
            <div>
  <label className="text-sm font-medium">Yakınınızın Yaşadığı Eyalet</label>

  <select
    name="usaRelativeAddressState"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.usaRelativeAddressState ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[6].usaRelativeAddressState || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(6, "usaRelativeAddressState", e.target.value);
      } else {
        // Desktop/Diğer: Normalizasyon VAR
        updateField(6, "usaRelativeAddressState", (e.target.value));
      }
    }}
   
  >
    <option value="">Seçiniz</option>

    {state.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.usaRelativeAddressState && (
    <p className="text-red-500 text-xs mt-1">
      {errors.usaRelativeAddressState}
    </p>
  )}
</div>


  </>

      
 )}


  <div>
        <label className="text-sm font-medium">ABD'de Bir Organizasyon/Etkinliğe Katılacak mısınız?</label>
 <select
  name="organizationBoolean"
  className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
  ${errors.organizationBoolean ? "border-red-500" : "border-gray-300"}`}
  value={form.steps[6].organizationBoolean || ""}
onChange={(e) => updateField(6, "organizationBoolean", e.target.value)}
>
  <option value="">Seçiniz</option>
  <option value="YES">Evet</option>
  <option value="NO">Hayır</option>
</select>

         {errors.organizationBoolean && <p className="text-red-500 text-xs mt-1">{errors.organizationBoolean}</p>}

      </div>
       {form.steps[6].organizationBoolean === "YES" && (
  <>
   <div>
            <label className="text-sm font-medium">Etkinlik/Organizasyon Adı</label>
            <input
              type="text"
              name="organizationInfo"
          
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[6].organizationInfo || ""}
              onChange={(e) =>
      updateField(
        6,
        "organizationInfo",
        isMobile ? e.target.value : normalizeInput(e.target.value)
      )
    }
    onBlur={(e) =>
      isMobile &&
      updateField(
        6,
        "organizationInfo",
        normalizeInput(e.target.value)
      )
    }
        
            />
          </div>

   {form.steps[6].usaRelative === "NO" && (
    <>
        <div>
        <label className="text-sm font-medium">Etkinlik/Organizasyon Adresi</label>
        <input
          name="usaRelativeAddress"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.usaRelativeAddress ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[6].usaRelativeAddress || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(6, "usaRelativeAddress ", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(6, "usaRelativeAddress", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(6, "usaRelativeAddress", normalizedValue);
                }
            }}
          
        />
        {errors.usaRelativeAddress && <p className="text-red-500 text-xs mt-1">{errors.usaRelativeAddress}</p>}

      </div>
              <div>
        <label className="text-sm font-medium">Etkinlik/Organizasyon Şehir</label>
        <input
          name="usaRelativeAddressCity"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.usaRelativeAddressCity ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[6].usaRelativeAddressCity || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(6, "usaRelativeAddressCity ", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(6, "usaRelativeAddressCity", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(6, "usaRelativeAddressCity", normalizedValue);
                }
            }}
          
        />
        {errors.usaRelativeAddressCity && <p className="text-red-500 text-xs mt-1">{errors.usaRelativeAddressCity}</p>}

      </div>
                  <div>
  <label className="text-sm font-medium">Etkinlik/Organizasyon Eyalet</label>

  <select
    name="usaRelativeAddressState"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.usaRelativeAddressState ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[6].usaRelativeAddressState || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(6, "usaRelativeAddressState", e.target.value);
      } else {
        // Desktop/Diğer: Normalizasyon VAR
        updateField(6, "usaRelativeAddressState", (e.target.value));
      }
    }}
   
  >
    <option value="">Seçiniz</option>

    {state.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.usaRelativeAddressState && (
    <p className="text-red-500 text-xs mt-1">
      {errors.usaRelativeAddressState}
    </p>
  )}
</div>
  <div>
            <label className="text-sm font-medium">Etkinlik/Organizasyon Telefon</label>
            <input
              name="usaRelativePhone"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[6].usaRelativePhone || ""}
              onChange={(e) => updateField(6, "usaRelativePhone", e.target.value)}
            />
          </div>
    <div>
            <label className="text-sm font-medium">Etkinlik/Organizasyon E-Posta</label>
            <input
              name="usaRelativeEmail"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[6].usaRelativeEmail || ""}
              onChange={(e) => updateField(6, "usaRelativeEmail", e.target.value)}
            />
          </div>
 <div>
            <label className="text-sm font-medium">Etkinlik/Organizasyon Posta Kodu</label>
            <input
              name="usaRelativePostCode"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[6].usaRelativePostCode || ""}
              onChange={(e) => updateField(6, "usaRelativePostCode", e.target.value)}
            />
          </div>
    </>
   )}


    
  </>

 )}

    </div>
</section>
)}




{form.currentStep === 7 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">7.Bölüm</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div>
  <label className="text-sm font-medium">Anne Adı Soyadı</label>
  <input
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.motherFullName ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[7].motherFullName || ""}
    onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(7, "motherFullName", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(7, "motherFullName", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(7, "motherFullName", normalizedValue);
                }
            }}
    placeholder="Anne Adı Soyadı"
  />
    {errors.motherFullName && (
    <p className="text-red-500 text-xs mt-1">
      {errors.motherFullName}
    </p>
  )}
</div>

<div>
  <label className="text-sm font-medium">Anne Doğum Tarihi</label>
  <input
    type="date"
     className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.motherBirthDate ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[7].motherBirthDate || ""}
    onChange={(e) =>
      updateField(7, "motherBirthDate", e.target.value)
    }
  />
   {errors.motherBirthDate && (
    <p className="text-red-500 text-xs mt-1">
      {errors.motherBirthDate}
    </p>
  )}
</div>
   <div>
        <label className="text-sm font-medium">Anneniz ABD'de mi Yaşıyor?</label>
        <select
          name="isMotherInUSA"
           className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.isMotherInUSA ? "border-red-500" : "border-gray-300"}`}

          onChange={(e) => updateField(7, "isMotherInUSA", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="YES">Evet</option>
          <option value="NO">Hayır</option>
        </select>
        {errors.isMotherInUSA && <p className="text-red-500 text-xs mt-1">{errors.isMotherInUSA}</p>}

      </div>

{form.steps[7].isMotherInUSA === "YES" && (
   <div>
        <label className="text-sm font-medium">Anneniz ABD'de de Statüsü Nedir?</label>
        <select
          name="isMotherUSAStatus"
           className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.isMotherUSAStatus ? "border-red-500" : "border-gray-300"}`}

          onChange={(e) => updateField(7, "isMotherUSAStatus", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="U.S. CITIZEN">ABD Vatandaşı</option>
          <option value="U.S. LEGAL PERMANENT RESIDENT (LPR)">Yasal İkamet Sahibi</option>
          <option value="NONIMMIGRANT">Göçmen</option>
          <option value="OTHER/I DON'T KNOW">Diğer/Bilmiyorum</option>


        </select>
        {errors.isMotherUSAStatus && <p className="text-red-500 text-xs mt-1">{errors.isMotherUSAStatus}</p>}

      </div>
)}



<div>
  <label className="text-sm font-medium">Baba Adı Soyadı</label>
  <input
   className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.fatherFullName ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[7].fatherFullName || ""}
    onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(7, "fatherFullName", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(7, "fatherFullName", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(2, "fatherFullName", normalizedValue);
                }
            }}
    placeholder="Baba Adı Soyadı"
  />
   {errors.fatherFullName && <p className="text-red-500 text-xs mt-1">{errors.fatherFullName}</p>}
</div>

<div>
  <label className="text-sm font-medium">Baba Doğum Tarihi</label>
  <input
    type="date"
   className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.fatherBirthDate ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[7].fatherBirthDate || ""}
    onChange={(e) =>
      updateField(7, "fatherBirthDate", e.target.value)
    }
  />
   {errors.fatherBirthDate && <p className="text-red-500 text-xs mt-1">{errors.fatherBirthDate}</p>}
</div>

   <div>
        <label className="text-sm font-medium">Babanız ABD'de mi Yaşıyor?</label>
        <select
          name="isFatherInUSA"
           className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.isFatherInUSA ? "border-red-500" : "border-gray-300"}`}
          onChange={(e) => updateField(7, "isFatherInUSA", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="YES">Evet</option>
          <option value="NO">Hayır</option>
        </select>
        {errors.isFatherInUSA && <p className="text-red-500 text-xs mt-1">{errors.isFatherInUSA}</p>}

      </div>

{form.steps[7].isFatherInUSA === "YES" && (
   <div>
        <label className="text-sm font-medium">Babanızın ABD'de de Statüsü Nedir?</label>
        <select
          name="isFatherUSAStatus"
           className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.isFatherUSAStatus ? "border-red-500" : "border-gray-300"}`}

          onChange={(e) => updateField(7, "isFatherUSAStatus", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="U.S. CITIZEN">ABD Vatandaşı</option>
          <option value="U.S. LEGAL PERMANENT RESIDENT (LPR)">Yasal İkamet Sahibi</option>
          <option value="NONIMMIGRANT">Göçmen</option>
          <option value="OTHER/I DON'T KNOW">Diğer/Bilmiyorum</option>


        </select>
        {errors.isFatherUSAStatus && <p className="text-red-500 text-xs mt-1">{errors.isFatherUSAStatus}</p>}

      </div>
)}
<div>
  <label className="text-sm font-medium">
    Anne/Baba Hariç ABD'de Yaşayan Yakın Akrabanız Var mı?
  </label>
  <select
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.hasRelativeInUSA ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[7].hasRelativeInUSA || ""}
    onChange={(e) => {
      const value = e.target.value;
      updateField(7, "hasRelativeInUSA", value);

      if (value === "NO") {
        updateField(7, "relativeCount", 0);
        updateField(7, "relatives", []);
      }
    }}
  >
    <option value="">Seçiniz</option>
    <option value="YES">Evet</option>
    <option value="NO">Hayır</option>
  </select>
   {errors.hasRelativeInUSA && <p className="text-red-500 text-xs mt-1">{errors.hasRelativeInUSA}</p>}
</div>



{form.steps[7].hasRelativeInUSA === "YES" && (
  <div>
    <label className="text-sm font-medium">Kaç Kişi?</label>
    <input
      type="number"
      min={1}
      className="w-full mt-1 p-3 border rounded-xl"
      value={form.steps[7].relativeCount || ""}
      onChange={(e) => {
        const count = Number(e.target.value);

        updateField(7, "relativeCount", count);

        const relativesArray = Array.from({ length: count }, (_, i) => ({
          fullName: form.steps[7].relatives?.[i]?.fullName || "",
          level: form.steps[7].relatives?.[i]?.level || "",
          status: form.steps[7].relatives?.[i]?.status || ""
        }));

        updateField(7, "relatives", relativesArray);
      }}
    />
  </div>
)}
{ form.steps[7].relativeCount > 0 && (
 form.steps[7].relatives?.map((relative, index) => (
  <div
    key={index}
    className="mt-4 p-4 border rounded-2xl shadow-sm bg-gray-50"
  >
    <h4 className="font-semibold mb-3">
      {index + 1}. Yakın Bilgileri
    </h4>

    {/* Ad Soyad */}
    <div className="mb-3">
      <label className="text-sm font-medium">Ad Soyad</label>
      <input
        className="w-full mt-1 p-3 border rounded-xl"
        value={relative.fullName}
        onChange={(e) => {
          const updated = [...form.steps[7].relatives];
          updated[index].fullName = isMobile
            ? e.target.value
            : normalizeInput(e.target.value);
          updateField(7, "relatives", updated);
        }}
        onBlur={(e) => {
          if (isMobile) {
            const updated = [...form.steps[7].relatives];
            updated[index].fullName = normalizeInput(e.target.value);
            updateField(7, "relatives", updated);
          }
        }}
        placeholder="Ad Soyad"
      />
    </div>

    {/* Yakınlık Derecesi */}
    <div className="mb-3">
      <label className="text-sm font-medium">Yakınlık Derecesi</label>
      <select
        className="w-full mt-1 p-3 border rounded-xl"
        value={relative.level}
        onChange={(e) => {
          const updated = [...form.steps[7].relatives];
          updated[index].level = e.target.value;
          updateField(7, "relatives", updated);
        }}
      >
        <option value="">Seçiniz</option>
        <option value="SPOUSE">Eşi</option>
        <option value="FIANCE">Nişanlısı</option>
        <option value="CHILD">Çocuğu</option>
        <option value="SIBLING">Kardeşi</option>
      </select>
    </div>

    {/* Yasal Statü */}
    <div>
      <label className="text-sm font-medium">Yasal Statüsü</label>
      <select
        className="w-full mt-1 p-3 border rounded-xl"
        value={relative.status}
        onChange={(e) => {
          const updated = [...form.steps[7].relatives];
          updated[index].status = e.target.value;
          updateField(7, "relatives", updated);
        }}
      >
        <option value="">Seçiniz</option>
        <option value="US_CITIZEN">ABD Vatandaşı</option>
        <option value="U.S. LEGAL PERMANENT RESIDENT (LPR)">Yasal İkamet Sahibi</option>
        <option value="NONIMMIGRANT">Göçmen Olmayan</option>
        <option value="OTHER/I DON'T KNOW">Diğer/Bilmiyorum</option>
      </select>
    </div>
  </div>
)   

))}
<div>
  <label className="text-sm font-medium">
    ABD'de Yaşayan Başka Yakınınız Var mı?
  </label>
  <select
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.otherRelativeInUSA ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[7].otherRelativeInUSA || ""}
    onChange={(e) => {
      const value = e.target.value;
      updateField(7, "otherRelativeInUSA", value);

      
    }}
  >
    <option value="">Seçiniz</option>
    <option value="YES">Evet</option>
    <option value="NO">Hayır</option>
  </select>
   {errors.otherRelativeInUSA && <p className="text-red-500 text-xs mt-1">{errors.otherRelativeInUSA}</p>}
</div>
    </div>
    </section>
)}




{form.currentStep === 8 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">8.Bölüm</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

{form.steps[1].maritalStatus === "MARRIED" && (
    <>
      <div>
            <label className="text-sm font-medium">Eş Adı Soyadı</label>
            <input
              className="w-full mt-1 p-3 border rounded-xl"
              value={form.steps[8].spouseFullName}
              onChange={(e) =>
                updateField(
                  8,
                  "spouseFullName",
                  isMobile ? e.target.value : normalizeInput(e.target.value)
                )
              }
              onBlur={(e) =>
                isMobile &&
                updateField(8, "spouseFullName", normalizeInput(e.target.value))
              }
            />
          </div>

         {form.steps[1].gender === "M" && (  
          <div>
            <label className="text-sm font-medium">Eşinizin Kızlık Soyadı</label>
            <input
              className="w-full mt-1 p-3 border rounded-xl"
              value={form.steps[8].wifeMaidenName}
              onChange={(e) =>
                updateField(
                  8,
                  "wifeMaidenName",
                  isMobile ? e.target.value : normalizeInput(e.target.value)
                )
              }
              onBlur={(e) =>
                isMobile &&
                updateField(8, "wifeMaidenName", normalizeInput(e.target.value))
              }
            />
          </div>)}  
        
          <div>
            <label className="text-sm font-medium">Evlilik Tarihi</label>
            <input
              type="date"
              max={new Date().toISOString().split("T")[0]}
              className="w-full mt-1 p-3 border rounded-xl"
              value={form.steps[8].marriageDate}
              onChange={(e) => updateField(8, "marriageDate", e.target.value)}
            />
          </div>

        

          <div>
            <label className="text-sm font-medium">Eş Doğum Tarihi</label>
            <input
              type="date"
              max={new Date().toISOString().split("T")[0]}
              className="w-full mt-1 p-3 border rounded-xl"
              value={form.steps[8].spouseBirthDate}
              onChange={(e) =>
                updateField(8, "spouseBirthDate", e.target.value)
              }
            />
          </div>

<div>
  <label className="text-sm font-medium">Eşinizin Uyruğu</label>

  <select
    name="spouseNationality"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.spouseNationality ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[8].spouseNationality || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(8, "spouseNationality", e.target.value);
      } else {
        // Desktop: Normalizasyon VAR
        updateField(8, "spouseNationality", (e.target.value));
      }
    }}
   
  >
    <option value="">Uyruk Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.spouseNationality && (
    <p className="text-red-500 text-xs mt-1">
      {errors.spouseNationality}
    </p>
  )}
</div>



{/* EŞ DOĞUM YERİ */}
<div>
  <label className="text-sm font-medium">Eş Doğum Yeri</label>
  <input
    className="w-full mt-1 p-3 border rounded-xl"
    value={form.steps[8].spouseBirthPlace || ""}
    onChange={(e) =>
      updateField(
        8,
        "spouseBirthPlace",
        isMobile ? e.target.value : normalizeInput(e.target.value)
      )
    }
    onBlur={(e) =>
      isMobile &&
      updateField(8, "spouseBirthPlace", normalizeInput(e.target.value))
    }
  />
</div>
<div>
  <label className="text-sm font-medium">Eşinizin Doğduğu Ülke</label>

  <select
    name="spouseBirthPlaceCountry"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.spouseBirthPlaceCountry ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[8].spouseBirthPlaceCountry || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(8, "spouseBirthPlaceCountry", e.target.value);
      } else {
        // Desktop: Normalizasyon VAR
        updateField(8, "spouseBirthPlaceCountry", (e.target.value));
      }
    }}
   
  >
    <option value="">Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.spouseBirthPlaceCountry && (
    <p className="text-red-500 text-xs mt-1">
      {errors.spouseBirthPlaceCountry}
    </p>
  )}
</div>
{/* EŞ MESLEĞİ */}
<div>
  <label className="text-sm font-medium">Eş Mesleği</label>
  <input
    className="w-full mt-1 p-3 border rounded-xl"
    value={form.steps[1].spouseOccupation || ""}
    onChange={(e) =>
      updateField(
        1,
        "spouseOccupation",
        isMobile ? e.target.value : normalizeInput(e.target.value)
      )
    }
    onBlur={(e) =>
      isMobile &&
      updateField(1, "spouseOccupation", normalizeInput(e.target.value))
    }
  />
</div>

{/* EŞ İKAMET ADRESİ */}
    <div>
        <label className="text-sm font-medium">Eş Adresi</label>
        <select
          name="spouseAddress"
           className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.spouseAddress ? "border-red-500" : "border-gray-300"}`}

          onChange={(e) => updateField(8, "spouseAddress", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="Same as Home Address">Ev Adresi İle Aynı</option>
          <option value="OTHER">Diğer</option>
        </select>
        {errors.spouseAddress && <p className="text-red-500 text-xs mt-1">{errors.spouseAddress}</p>}

      </div>
{form.steps[8].spouseAddress === "OTHER" && (
  <>
                           <div>
        <label className="text-sm font-medium">Eşinizin Adresi</label>
        <input
          name="otherSpouseAddress"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.otherSpouseAddress ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].otherSpouseAddress || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "otherSpouseAddress", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "otherSpouseAddress", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "otherSpouseAddress", normalizedValue);
                }
            }}
          
        />
        {errors.otherSpouseAddress && <p className="text-red-500 text-xs mt-1">{errors.otherSpouseAddress}</p>}

      </div>
              <div>
        <label className="text-sm font-medium">Eşinizin Yaşadığı Şehir</label>
        <input
          name="otherSpouseAddressCity"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.otherSpouseAddressCity ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].otherSpouseAddressCity || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "otherSpouseAddressCity", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "otherSpouseAddressCity", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "otherSpouseAddressCity", normalizedValue);
                }
            }}
          
        />
        {errors.otherSpouseAddressCity && <p className="text-red-500 text-xs mt-1">{errors.otherSpouseAddressCity}</p>}

      </div>

      <div>
  <label className="text-sm font-medium">Eşinizin Yaşadığı Ülke</label>

  <select
    name="otherSpouseAddressCountry"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.otherSpouseAddressCountry ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[3].otherSpouseAddressCountry || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(3, "otherSpouseAddressCountry", e.target.value);
      } else {
        // Desktop/Diğer: Normalizasyon VAR
        updateField(3, "otherSpouseAddressCountry", (e.target.value));
      }
    }}
   
  >
    <option value="">Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.otherSpouseAddressCountry && (
    <p className="text-red-500 text-xs mt-1">
      {errors.otherSpouseAddressCountry}
    </p>
  )}
</div>
             <div>
        <label className="text-sm font-medium">Eşinizin Posta Kodu</label>
        <input
          name="otherSpouseAddressPostCode"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.otherSpouseAddressPostCode ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[3].otherSpouseAddressPostCode || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(3, "otherSpouseAddressPostCode", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(3, "otherSpouseAddressPostCode", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(3, "otherSpouseAddressPostCode", normalizedValue);
                }
            }}
          
        />
        {errors.otherSpouseAddressPostCode && <p className="text-red-500 text-xs mt-1">{errors.otherSpouseAddressPostCode}</p>}

      </div>
  
  </>
)}

          {/* <div>
            <label className="text-sm font-medium">
              Başka evlilik yaptınız mı?
            </label>
            <select
              className="w-full mt-1 p-3 border rounded-xl"
              value={form.steps[1].otherMarriages}
              onChange={(e) =>{
                    const selectedValue = e.target.value;

 updateField(1, "otherMarriages", e.target.value)
 if (selectedValue === "HAYIR") {
      updateField(1, "marriages", [
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
          </div> */}
        </>
)}

      {(
        ["WIDOWED","DIVORCED"].includes(form.steps[1].maritalStatus)) && (
     <>
      <div className="md:col-span-2 ">
            <h4 className="font-semibold">Eski Evlilik Bilgileri</h4>
    
          </div>
      <div>
            <label className="text-sm font-medium">Eski Eş Adı Soyadı</label>
            <input
              className="w-full mt-1 p-3 border rounded-xl"
              value={form.steps[8].oldSpouseFullName}
              onChange={(e) =>
                updateField(
                  8,
                  "oldSpouseFullName",
                  isMobile ? e.target.value : normalizeInput(e.target.value)
                )
              }
              onBlur={(e) =>
                isMobile &&
                updateField(8, "oldSpouseFullName", normalizeInput(e.target.value))
              }
            />
          </div>
 <div>
            <label className="text-sm font-medium">Eski Eş Doğum Tarihi</label>
            <input
              type="date"
              max={new Date().toISOString().split("T")[0]}
              className="w-full mt-1 p-3 border rounded-xl"
              value={form.steps[8].oldSpouseBirthDate}
              onChange={(e) =>
                updateField(8, "oldSpouseBirthDate", e.target.value)
              }
            />
          </div>
     
    <div>
            <label className="text-sm font-medium">Eski Evlilik Başlama Tarihi</label>
            <input
              type="date"
              max={new Date().toISOString().split("T")[0]}
              className="w-full mt-1 p-3 border rounded-xl"
              value={form.steps[8].oldMarriageDate}
              onChange={(e) => updateField(8, "oldMarriageDate", e.target.value)}
            />
          </div>

            <div>
            <label className="text-sm font-medium">Eski Evlilik Bitiş Tarihi</label>
            <input
              type="date"
              max={new Date().toISOString().split("T")[0]}
              className="w-full mt-1 p-3 border rounded-xl"
              value={form.steps[8].oldMarriageEndDate}
              onChange={(e) => updateField(8, "oldMarriageEndDate", e.target.value)}
            />
          </div>

         

<div>
  <label className="text-sm font-medium">Eski Eşinizin Uyruğu</label>

  <select
    name="oldSpouseNationality"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.oldSpouseNationality ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[8].oldSpouseNationality || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(8, "oldSpouseNationality", e.target.value);
      } else {
        // Desktop: Normalizasyon VAR
        updateField(8, "oldSpouseNationality", (e.target.value));
      }
    }}
   
  >
    <option value="">Uyruk Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.oldSpouseNationality && (
    <p className="text-red-500 text-xs mt-1">
      {errors.oldSpouseNationality}
    </p>
  )}
</div>




<div>
  <label className="text-sm font-medium">Eski Eş Doğum Yeri</label>
  <input
    className="w-full mt-1 p-3 border rounded-xl"
    value={form.steps[8].oldSpouseBirthPlace || ""}
    onChange={(e) =>
      updateField(
        8,
        "oldSpouseBirthPlace",
        isMobile ? e.target.value : normalizeInput(e.target.value)
      )
    }
    onBlur={(e) =>
      isMobile &&
      updateField(8, "oldSpouseBirthPlace", normalizeInput(e.target.value))
    }
  />
</div>
<div>
  <label className="text-sm font-medium">Eski Eşinizin Doğduğu Ülke</label>

  <select
    name="oldSpouseBirthPlaceCountry"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.oldSpouseBirthPlaceCountry ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[8].oldSpouseBirthPlaceCountry || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(8, "oldSpouseBirthPlaceCountry", e.target.value);
      } else {
        // Desktop: Normalizasyon VAR
        updateField(8, "oldSpouseBirthPlaceCountry", (e.target.value));
      }
    }}
   
  >
    <option value="">Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.oldSpouseBirthPlaceCountry && (
    <p className="text-red-500 text-xs mt-1">
      {errors.oldSpouseBirthPlaceCountry}
    </p>
  )}
</div>
<div>
  <label className="text-sm font-medium">Evliliğinizi Bitirdiğiniz Ülke</label>

  <select
    name="oldSpouseEndCountry"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.oldSpouseEndCountry ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[8].oldSpouseEndCountry || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(8, "oldSpouseEndCountry", e.target.value);
      } else {
        // Desktop: Normalizasyon VAR
        updateField(8, "oldSpouseEndCountry", (e.target.value));
      }
    }}
   
  >
    <option value="">Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.oldSpouseEndCountry && (
    <p className="text-red-500 text-xs mt-1">
      {errors.oldSpouseEndCountry}
    </p>
  )}
</div>
  <div className="md:col-span-2">
        <label className="text-sm font-medium">Evliliğiniz Nasıl Sona Erdi?</label>
        <textarea
          name="oldSpouseInfo"
          className="w-full resize-none  mt-1 p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          rows="4"
          value={form.steps[8].oldSpouseInfo || ""}
onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(8, "oldSpouseInfo", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(8, "oldSpouseInfo", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(8, "oldSpouseInfo", normalizedValue);
                }
            }}
          placeholder="Eklemek istediğiniz bilgiler..."
        ></textarea>
      </div>



     </>
         
    
      )}

    </div>
    </section>
)}












{form.currentStep === 9 && (
  <section className="col-span-2">
    <h3 className="font-semibold mb-3 text-lg">9.Bölüm</h3>
    <div className=" col-span-2 gap-6">

      {/* Mesleğiniz */}
  <div >
  <label className="text-sm font-medium">Mesleğiniz</label>

  <select
    name="occupation"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.occupation ? "border-red-500" : "border-gray-300"}`}
    value={form?.steps[9]?.occupation || ""}
    onChange={(e) => updateField(9, "occupation", e.target.value)}
  >
    <option value="">Meslek Seçiniz</option>

    {occupations.map((occup) => (
      <option 
        key={occup.value}
        value={occup.value}  
      >
        {occup.label}
      </option>
    ))}
  </select>

  {errors.occupation && (
    <p className="text-red-500 text-xs mt-1">{errors.occupation}</p>
  )}
</div>


      {/* İşyerinizin/Okul Adı */}
  {
    (form?.steps[9]?.occupation !== "HOMEMAKER" && form?.steps[9]?.occupation !== "RETIRED"&& form?.steps[9]?.occupation !== "NOT EMPLOYED" ) && (
<>
{(form?.steps[9]?.occupation == "OTHER" ) && (
   <div>
        <label className="text-sm font-medium">Açıklama Yazınız</label>
        <input
          name="otherJobDescription"
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.otherJobDescription ? "border-red-500" : "border-gray-300"}`}
 value={form?.steps[9]?.otherJobDescription || ""}
           onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(9, "otherJobDescription", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(9, "otherJobDescription", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(9, "otherJobDescription", normalizedValue);
                }
            }}
        
        />
           {errors.otherJobDescription && <p className="text-red-500 text-xs mt-1">{errors.otherJobDescription}</p>}

      </div>
)}
 <div>
        <label className="text-sm font-medium">İşyerinizin Tam Adı / Okul Adı</label>
        <input
          name="workOrSchoolName"
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.workOrSchoolName ? "border-red-500" : "border-gray-300"}`}
 value={form?.steps[9]?.workOrSchoolName || ""}
           onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(9, "workOrSchoolName", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(9, "workOrSchoolName", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(9, "workOrSchoolName", normalizedValue);
                }
            }}
          placeholder="Örn: ABC Şirketi / XYZ Üniversitesi"
        />
           {errors.workOrSchoolName && <p className="text-red-500 text-xs mt-1">{errors.workOrSchoolName}</p>}

      </div>

               <div>
        <label className="text-sm font-medium">İş Yerinin/Okulun Adresi</label>
        <input
          name="workOrSchoolAddress"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.workOrSchoolAddress ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[9].workOrSchoolAddress || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(9, "workOrSchoolAddress", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(9, "workOrSchoolAddress", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(9, "workOrSchoolAddress", normalizedValue);
                }
            }}
          
        />
        {errors.workOrSchoolAddress && <p className="text-red-500 text-xs mt-1">{errors.workOrSchoolAddress}</p>}

      </div>


              <div>
        <label className="text-sm font-medium">İş Yerinin/Okulun Bulunduğu Şehir</label>
        <input
          name="workOrSchoolCity"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.workOrSchoolCity ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[9].workOrSchoolCity || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(9, "workOrSchoolCity", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(9, "workOrSchoolCity", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(9, "workOrSchoolCity", normalizedValue);
                }
            }}
          
        />
        {errors.workOrSchoolCity && <p className="text-red-500 text-xs mt-1">{errors.workOrSchoolCity}</p>}

      </div>

      <div>
  <label className="text-sm font-medium">İş Yerinin/Okulun Bulunduğu Ülke</label>

  <select
    name="workOrSchoolCountry"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.workOrSchoolCountry ? "border-red-500" : "border-gray-300"}`}
    value={form.steps[9].workOrSchoolCountry || ""}
    onChange={(e) => {
      if (isMobile) {
        // Mobile: Normalizasyon YOK
        updateField(9, "workOrSchoolCountry", e.target.value);
      } else {
        // Desktop/Diğer: Normalizasyon VAR
        updateField(9, "workOrSchoolCountry", (e.target.value));
      }
    }}
   
  >
    <option value="">Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.workOrSchoolCountry && (
    <p className="text-red-500 text-xs mt-1">
      {errors.workOrSchoolCountry}
    </p>
  )}
</div>
             <div>
        <label className="text-sm font-medium">İş Yeri/Okul Posta Kodu</label>
        <input
          name="workOrSchoolPostCode"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.workOrSchoolPostCode ? "border-red-500" : "border-gray-300"}`}   
          value={form.steps[9].workOrSchoolPostCode || ""}
               onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(9, "workOrSchoolPostCode", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(9, "workOrSchoolPostCode", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(9, "workOrSchoolPostCode", normalizedValue);
                }
            }}
          
        />
        {errors.workOrSchoolPostCode && <p className="text-red-500 text-xs mt-1">{errors.workOrSchoolPostCode}</p>}

      </div>
          <div>
            <label className="text-sm font-medium">İş Yeri/Okul Telefon</label>
            <input
              name="workOrSchoolPhone"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.steps[9]?.workOrSchoolPhone || ""}
              onChange={(e) => updateField(9, "workOrSchoolPhone", e.target.value)}
            />
          </div>

      {/* İşe Giriş Tarihi */}
      <div>
        <label className="text-sm font-medium">İşe/Okula Başlama Tarihiniz</label>
        <input
          type="date"
          name="workStartDate"
          max={new Date().toISOString().split("T")[0]}
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.workStartDate ? "border-red-500" : "border-gray-300"}`}
          value={form?.steps[9]?.workStartDate || ""}
          onChange={(e) => updateField(9, "workStartDate", e.target.value)}
        />
        {errors.workStartDate && <p className="text-red-500 text-xs mt-1">{errors.workStartDate}</p>}

      </div>

    


      {/* İş Tanımı & Ünvan */}
      <div className="md:col-span-2">
        <label className="text-sm font-medium">Açık İş Tanımınız, Görevleriniz ve Ünvanınız</label>
        <textarea
          name="jobDescription"
          className={`w-full resize-none mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.jobDescription ? "border-red-500" : "border-gray-300"}`}

          value={form?.steps[9]?.jobDescription || ""}
              onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(9, "jobDescription", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(9, "jobDescription", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(9, "jobDescription", normalizedValue);
                }
            }}
          placeholder="Örn: Yazılım geliştirme, proje yönetimi, takım liderliği"
          rows={3}
        />
        {errors.jobDescription && <p className="text-red-500 text-xs mt-1">{errors.jobDescription}</p>}

      </div>

</>
    )
  }   
  
{(form?.steps[9]?.occupation == "NOT EMPLOYED" ) && (
   <div>
        <label className="text-sm font-medium">Açıklama Yazınız</label>
        <input
          name="otherJobDescription"
         className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.otherJobDescription ? "border-red-500" : "border-gray-300"}`}
 value={form?.steps[9]?.otherJobDescription || ""}
           onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(9, "otherJobDescription", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(9, "otherJobDescription", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(9, "otherJobDescription", normalizedValue);
                }
            }}
        
        />
           {errors.otherJobDescription && <p className="text-red-500 text-xs mt-1">{errors.otherJobDescription}</p>}

      </div>
)}



  {/* Aylık Gelir */}


      <div>
        <label className="text-sm font-medium">Aylık Geliriniz (Yan gelirler dahil)</label>
        <input
          name="monthlyIncome"
           className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.monthlyIncome ? "border-red-500" : "border-gray-300"}`}

          value={form?.steps[9]?.monthlyIncome || ""}
      onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(9, "monthlyIncome", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(9, "monthlyIncome", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(9, "monthlyIncome", normalizedValue);
                }
            }}
          placeholder="Örn: 15.000 TL"
        />
        {errors.monthlyIncome && <p className="text-red-500 text-xs mt-1">{errors.monthlyIncome}</p>}

      </div>

    <div>
        <label className="text-sm font-medium">
         Daha Önce Başka İşte Çalıştınız mı?
        </label>
        <select
          name="previousJobBoolean"
          className={`w-full mt-1 p-3.5 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.previousJobBoolean ? "border-red-500" : "border-gray-300"}`}
          value={form.steps[9].previousJobBoolean || ""}
          onChange={(e) => updateField(9, "previousJobBoolean", e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="YES">EVET</option>
          <option value="NO">HAYIR</option>
        </select>
        {errors.previousJobBoolean && <p className="text-red-500 text-xs mt-1">{errors.previousJobBoolean}</p>}
      </div>


{  form?.steps[9]?.previousJobBoolean === "YES" && ( 
  <div className="md:col-span-2 mt-8">
  <h4 className="font-semibold mb-3">Daha Önce Çalıştığınız Yerler</h4>

  {form?.steps[9]?.previousJobs?.map((job, index) => (
    <div
      key={index}
      className="relative border p-4 rounded-xl mb-4 bg-gray-50"
    >
      {/* SİL BUTONU */}
      {form?.steps[9]?.previousJobs.length > 0 && (
        <button
          type="button"
          onClick={() => removeArrayItem(9, "previousJobs", index)}
          className="absolute top-3 right-3 text-red-900 text-sm underline"
        >
          Sil
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* İŞ YERİ ADI */}
        <div>
          <label className="text-sm font-medium">İş Yeri Adı</label>
          <input
            className="w-full mt-1 p-3 border rounded-xl"
            value={job.companyName || ""}
            onChange={(e) => {
              const val = e.target.value;
              updateArrayField(
                9,
                "previousJobs",
                index,
                "companyName",
                isMobile ? val : normalizeInput(val)
              );
            }}
            onBlur={(e) => {
              if (isMobile) {
                updateArrayField(
                  9,
                  "previousJobs",
                  index,
                  "companyName",
                  normalizeInput(e.target.value)
                );
              }
            }}
            placeholder="Firma Adı"
          />
        </div>

 
        <div>
          <label className="text-sm font-medium">Ünvan</label>
          <input
            className="w-full mt-1 p-3 border rounded-xl"
            value={job.position || ""}
            onChange={(e) => {
              const val = e.target.value;
              updateArrayField(
                9,
                "previousJobs",
                index,
                "position",
                isMobile ? val : normalizeInput(val)
              );
            }}
            onBlur={(e) => {
              if (isMobile) {
                updateArrayField(
                  9,
                  "previousJobs",
                  index,
                  "position",
                  normalizeInput(e.target.value)
                );
              }
            }}
            placeholder="Örn: Yazılım Uzmanı"
          />
        </div>

        {/* İŞ YERİ ADRESİ */}


               <div>
        <label className="text-sm font-medium">İş Yerinin Adresi</label>
        <input
          name="previusWorkAddress"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.previusWorkAddress ? "border-red-500" : "border-gray-300"}`}   
          value={job?.previusWorkAddress || ""}
       onChange={(e) => {
              const val = e.target.value;
              updateArrayField(
                9,
                "previousJobs",
                index,
                "previusWorkAddress",
                isMobile ? val : normalizeInput(val)
              );
            }}
            onBlur={(e) => {
              if (isMobile) {
                updateArrayField(
                  9,
                  "previousJobs",
                  index,
                  "previusWorkAddress",
                  normalizeInput(e.target.value)
                );
              }
            }}
          
        />
        {errors.previusWorkAddress && <p className="text-red-500 text-xs mt-1">{errors.previusWorkAddress}</p>}

      </div>


              <div>
        <label className="text-sm font-medium">İş Yerinin Bulunduğu Şehir</label>
        <input
          name="previusWorkCity"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.workOrSchoolCity ? "border-red-500" : "border-gray-300"}`}   
   
             value={job?.previusWorkCity || ""}
       onChange={(e) => {
              const val = e.target.value;
              updateArrayField(
                9,
                "previousJobs",
                index,
                "previusWorkCity",
                isMobile ? val : normalizeInput(val)
              );
            }}
            onBlur={(e) => {
              if (isMobile) {
                updateArrayField(
                  9,
                  "previousJobs",
                  index,
                  "previusWorkCity",
                  normalizeInput(e.target.value)
                );
              }
            }}
          
        />
        {errors.previusWorkCity && <p className="text-red-500 text-xs mt-1">{errors.previusWorkCity}</p>}

      </div>

      <div>
  <label className="text-sm font-medium">İş Yerinin Bulunduğu Ülke</label>

  <select
    name="previusWorkCountry"
    className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
      ${errors.previusWorkCountry ? "border-red-500" : "border-gray-300"}`}
    value={job?.previusWorkCountry || ""}
       onChange={(e) => {
              const val = e.target.value;
              updateArrayField(
                9,
                "previousJobs",
                index,
                "previusWorkCountry",
                isMobile ? val : normalizeInput(val)
              );
            }}
   
  >
    <option value="">Seçiniz</option>

    {countryName.map((country) => (
      <option
        key={country.value}
        value={country.value}   // 👈 VALUE = LABEL
      >
        {country.label}
      </option>
    ))}
  </select>

  {errors.previusWorkCountry && (
    <p className="text-red-500 text-xs mt-1">
      {errors.previusWorkCountry}
    </p>
  )}
</div>
             <div>
        <label className="text-sm font-medium">İş Yeri Posta Kodu</label>
        <input
          name="previusWorkPostCode"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.previusWorkPostCode ? "border-red-500" : "border-gray-300"}`}   
          value={job?.previusWorkPostCode || ""}
       onChange={(e) => {
              const val = e.target.value;
              updateArrayField(
                9,
                "previousJobs",
                index,
                "previusWorkPostCode",
                isMobile ? val : normalizeInput(val)
              );
            }}
            onBlur={(e) => {
              if (isMobile) {
                updateArrayField(
                  9,
                  "previousJobs",
                  index,
                  "previusWorkPostCode",
                  normalizeInput(e.target.value)
                );
              }
            }}
          
        />
        {errors.previusWorkPostCode && <p className="text-red-500 text-xs mt-1">{errors.previusWorkPostCode}</p>}

      </div>
          <div>
            <label className="text-sm font-medium">İş Yeri Telefon</label>
            <input
              name="previusWorkPhone"
              className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
             value={job?.previusWorkPhone || ""}
              onChange={(e) => {
              const val = e.target.value;
              updateArrayField(
                9,
                "previousJobs",
                index,
                "previusWorkPhone",
                isMobile ? val : normalizeInput(val)
              );
            }}
            />
          </div>


        {/* İŞE GİRİŞ TARİHİ */}
        <div>
          <label className="text-sm font-medium">İşe Giriş Tarihi</label>
          <input
            type="date"
            max={new Date().toISOString().split("T")[0]}
            className="w-full mt-1 p-3 border rounded-xl"
            value={job.startDate || ""}
            onChange={(e) =>
              updateArrayField(9, "previousJobs", index, "startDate", e.target.value)
            }
          />
        </div>

        {/* İŞTEN ÇIKIŞ TARİHİ */}
        <div>
          <label className="text-sm font-medium">İşten Çıkış Tarihi</label>
          <input
            type="date"
            
            className="w-full mt-1 p-3 border rounded-xl"
            min={job.startDate || undefined}
            max={new Date().toISOString().split("T")[0]}
            value={job.endDate || ""}
            onChange={(e) =>
              updateArrayField(9, "previousJobs", index, "endDate", e.target.value)
            }
          />
        </div>

{/* YONETİCİ BİLGİSİ */}
              <div>
        <label className="text-sm font-medium">Yönetici Adı Soyadı</label>
        <input
          name="previusSupervisorFullname"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.previusSupervisorFullname ? "border-red-500" : "border-gray-300"}`}   
   
             value={job?.previusSupervisorFullname || ""}
       onChange={(e) => {
              const val = e.target.value;
              updateArrayField(
                9,
                "previousJobs",
                index,
                "previusSupervisorFullname",
                isMobile ? val : normalizeInput(val)
              );
            }}
            onBlur={(e) => {
              if (isMobile) {
                updateArrayField(
                  9,
                  "previousJobs",
                  index,
                  "previusSupervisorFullname",
                  normalizeInput(e.target.value)
                );
              }
            }}
          
        />
        {errors.previusSupervisorFullname && <p className="text-red-500 text-xs mt-1">{errors.previusSupervisorFullname}</p>}

      </div>

{/* GOREV */}
    <div className="md:col-span-2">
        <label className="text-sm font-medium">Kısaca Görevinizi Yazınız</label>
        <input
          name="previusDuties"
          className={`w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none 
          ${errors.previusDuties ? "border-red-500" : "border-gray-300"}`}   
   
             value={job?.previusDuties || ""}
       onChange={(e) => {
              const val = e.target.value;
              updateArrayField(
                9,
                "previousJobs",
                index,
                "previusDuties",
                isMobile ? val : normalizeInput(val)
              );
            }}
            onBlur={(e) => {
              if (isMobile) {
                updateArrayField(
                  9,
                  "previousJobs",
                  index,
                  "previusDuties",
                  normalizeInput(e.target.value)
                );
              }
            }}
          
        />
        {errors.previusDuties && <p className="text-red-500 text-xs mt-1">{errors.previusDuties}</p>}

      </div>

      </div>
    </div>
  ))}

  {/* YENİ İŞ EKLE */}
  <button
    type="button"
    className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow cursor-pointer hover:bg-blue-700"
    onClick={() =>
      addArrayItem(9, "previousJobs", {
        companyName: "",
        companyAddress: "",
        position: "",
        startDate: "",
        endDate: ""
      })
    }
  >
    + Eski İş Bilgisi Ekle
  </button>
</div>)}
 

 <div className="col-span-2">
        <label className="text-sm font-medium">
       Eğitim Durumunuzu Belirtiniz?
        </label>
        <select
          name="educationBoolean"
          className={`w-full mt-1 p-3.5 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.educationBoolean ? "border-red-500" : "border-gray-300"}`}
           value={form.steps[9].educationBoolean || ""}
  onChange={(e) => handleEducationChange(e.target.value)}
        >
          <option value="">Seçiniz</option>
  <option value="PRIMARY_SCHOOL">İlkokul</option>
<option value="MIDDLE_SCHOOL">Ortaokul</option>
<option value="HIGH_SCHOOL">Lise</option>
<option value="ASSOCIATE_DEGREE">Ön Lisans</option>
<option value="BACHELOR_DEGREE">Lisans</option>
<option value="MASTER_DEGREE">Yüksek Lisans</option>
<option value="PHD">Doktora</option>
        </select>
        {errors.educationBoolean && <p className="text-red-500 text-xs mt-1">{errors.educationBoolean}</p>}
      </div>
{form.steps[9]?.previousEducations?.map((edu, index) => (
  <div
    key={index}
    className="relative border border-gray-200 rounded-2xl bg-white shadow-sm p-6 mb-8"
  >
    {/* BAŞLIK */}
    <h4 className="text-lg font-semibold text-gray-800 mb-6 border-b pb-2">
      {EDUCATION_LABELS[edu.level]}
    </h4>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      {/* OKUL ADI */}
      <div className="md:col-span-2">
        <label className="text-sm font-medium text-gray-700">
          Kurumun Adı
        </label>
        <input
          className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          value={edu.schoolName ?? ""}
          onChange={(e) =>
            updateArrayField(
              9,
              "previousEducations",
              index,
              "schoolName",
              normalizeInput(e.target.value)
            )
          }
        />
      </div>

      {/* ADRES */}
      <div className="md:col-span-2">
        <label className="text-sm font-medium text-gray-700">
         Adresi
        </label>
        <input
          className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          value={edu.address1 ?? ""}
          onChange={(e) =>
            updateArrayField(
              9,
              "previousEducations",
              index,
              "address1",
              normalizeInput(e.target.value)
            )
          }
        />
      </div>

      {/* ŞEHİR */}
      <div>
        <label className="text-sm font-medium text-gray-700">Şehir</label>
        <input
          className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          value={edu.city ?? ""}
          onChange={(e) =>
            updateArrayField(
              9,
              "previousEducations",
              index,
              "city",
              normalizeInput(e.target.value)
            )
          }
        />
      </div>

      {/* EYALET */}
      <div>
        <label className="text-sm font-medium text-gray-700">Eyalet</label>
        <input
          className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          value={edu.state ?? ""}
          onChange={(e) =>
            updateArrayField(
              9,
              "previousEducations",
              index,
              "state",
              normalizeInput(e.target.value)
            )
          }
        />
      </div>

      {/* POSTA KODU */}
      <div>
        <label className="text-sm font-medium text-gray-700">
          Posta Kodu
        </label>
        <input
          className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          value={edu.post_code ?? ""}
          onChange={(e) =>
            updateArrayField(
              9,
              "previousEducations",
              index,
              "post_code",
              normalizeInput(e.target.value)
            )
          }
        />
      </div>

      {/* ÜLKE */}
      <div>
        <label className="text-sm font-medium text-gray-700">Ülke</label>
        <select
          className="w-full mt-1 p-3 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 outline-none"
          value={edu.country ?? ""}
          onChange={(e) =>
            updateArrayField(
              9,
              "previousEducations",
              index,
              "country",
              e.target.value
            )
          }
        >
          <option value="">Seçiniz</option>
          {countryName.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      {/* BÖLÜM */}
   <div className="md:col-span-2">
  <label className="text-sm font-medium text-gray-700">
    Bölüm / Program
  </label>

  {edu.level === "HIGH_SCHOOL" ? (
    /* 🎓 SADECE LİSE → SELECT */
    <select
      className="w-full mt-1 p-3.5 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
      value={edu.department ?? ""}
      onChange={(e) =>
        updateArrayField(
          9,
          "previousEducations",
          index,
          "department",
          e.target.value
        )
      }
    >
      <option value="">Seçiniz</option>
      <option value="ACADEMIC">Akademik</option>
      <option value="VOCATIONAL">Meslek</option>
    </select>
  ) : (
    /* 🎓 ÜNİ / YL / DR → INPUT */
    <input
      type="text"
      className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
      value={edu.department ?? ""}
      onChange={(e) =>
        updateArrayField(
          9,
          "previousEducations",
          index,
          "department",
          normalizeInput(e.target.value)
        )
      }
      placeholder="Bölüm / Program"
    />
  )}
</div>

      {/* TARİHLER */}
      <div>
        <label className="text-sm font-medium text-gray-700">
          Başlangıç Tarihi
        </label>
        <input
          type="date"
          className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          value={edu.fromDate ?? ""}
          onChange={(e) =>
            updateArrayField(
              9,
              "previousEducations",
              index,
              "fromDate",
              e.target.value
            )
          }
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">
          Bitiş Tarihi
        </label>
        <input
          type="date"
          className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          value={edu.toDate ?? ""}
          onChange={(e) =>
            updateArrayField(
              9,
              "previousEducations",
              index,
              "toDate",
              e.target.value
            )
          }
        />
      </div>

    </div>
  </div>
))}



    </div>
  </section>
)}
{form.currentStep === 10 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">10. Bölüm</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

      {/* LANGUAGES - ZORUNLU */}
<div className="relative md:col-span-2 w-full">
  <label className="text-sm font-medium">
    Bildiğiniz Diller
  </label>

  {/* DROPDOWN HEADER */}
  <button
    type="button"
    onClick={() => setLangOpen(!langOpen)}
    className={`w-full mt-1 px-4 py-3 border rounded-xl text-left  flex justify-between items-center bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200 ${errors.languages ? "border-red-500" : "border-gray-300"}`}
  >
    <span className="text-sm text-gray-700 truncate">
      {selectedLangs.length
        ? selectedLangs
            .map(v => languages_option?.find(l => l.value === v)?.label)
            .join(", ")
        : "Dil seçiniz"}
    </span>

    <span
      className={`text-gray-500 text-sm transition-transform duration-200 ${
        langOpen ? "rotate-180" : ""
      }`}
    >
      ▼
    </span>
  </button>

  {/* DROPDOWN LIST */}
  {langOpen && (
    <div className="absolute left-0 right-0 z-50 mt-2 bg-white border rounded-xl shadow-xl max-h-60 md:max-h-64 overflow-y-auto overscroll-contain
    ">
      {languages_option.map(lang => {
        const checked = selectedLangs.includes(lang.value) || false;

        return (
          <label
            key={lang.value}
            className="flex items-center gap-3 px-4 py-3  hover:bg-gray-50 active:bg-gray-100  cursor-pointer"
          >
            <input
              type="checkbox"
              checked={checked}
              className="w-4 h-4"
              onChange={() => {
                const newValue = toggleLanguage(
                  form?.steps?.[10]?.languages || "",
                  lang.value
                );
                updateField(10, "languages", newValue);
              }}
            />
            <span className="text-sm select-none">
              {lang.label}
            </span>
          </label>
        );
      })}
    </div>
  )}

  {errors.languages && (
    <p className="text-red-500 text-xs mt-1">
      {errors.languages}
    </p>
  )}
</div>




      {/* GİDİLEN ÜLKELER */}
  <div className="col-span-2">
  <label className="text-sm font-medium">Ziyaret Edilen Ülkeler</label>

  <VisitedCountriesSelect
    value={form?.steps?.[10]?.visitedCountries || ""}
    onChange={(val) =>
      updateField(10, "visitedCountries", val || "")
    }
  />
</div>
 
      {/* ASKERLİK DURUMU */}
<div className="col-span-2">
  <label className="text-sm font-medium">Askerlik Durumu</label>

  <select
   className={`w-full mt-1 p-3 border rounded-xl text-left flex justify-between items-center
      ${errors.militaryStatus ? "border-red-500" : "border-gray-300"}`}
    value={form?.steps[10]?.militaryStatus || ""}
    onChange={(e) => {
      const value = e.target.value;
      updateField(10, "militaryStatus", value);

      // Temizlik
      updateField(10, "militaryStartDate", "");
      updateField(10, "militaryEndDate", "");
      updateField(10, "exemptionReason", "");
      updateField(10, "defermentDate", "");
    }}
  >
    <option value="">Seçiniz</option>
    <option value="YES">Yaptı</option>
    <option value="NO">Yapmadı</option>
   
  </select>
   {errors.militaryStatus && (
    <p className="text-red-500 text-xs mt-1">{errors.militaryStatus}</p>
  )}
</div>
{form?.steps[10]?.militaryStatus === "YES" && (
  <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="text-sm font-medium">Başlangıç Tarihi</label>
      <input
        type="date"
        className="w-full mt-1 p-3 border rounded-xl"
        value={form?.steps[10]?.militaryStartDate || ""}
        onChange={(e) =>
          updateField(10, "militaryStartDate", e.target.value)
        }
      />
    </div>

    <div>
      <label className="text-sm font-medium">Bitiş Tarihi</label>
      <input
        type="date"
        className="w-full mt-1 p-3 border rounded-xl"
        value={form?.steps[10]?.militaryEndDate || ""}
        onChange={(e) =>
          updateField(10, "militaryEndDate", e.target.value)
        }
      />
    </div>
  </div>
)}
{form?.steps[10]?.militaryStatus === "MUAF" && (
  <div className="">
    <label className="text-sm font-medium">Muafiyet Nedeni</label>
    <select
      className="w-full mt-1 p-3 border rounded-xl"
      value={form?.steps[10]?.exemptionReason || ""}
      onChange={(e) =>
        updateField(10, "exemptionReason", e.target.value)
      }
    >
      <option value="">Seçiniz</option>
      <option value="SAGLIK">Sağlık</option>
      <option value="BEDELLI">Bedelli</option>
      <option value="YAS">Yaş</option>
      <option value="DIGER">Diğer</option>
    </select>
  </div>
)}
{form?.steps[10]?.militaryStatus === "YAPMADI" && (
  <div className="">
    <label className="text-sm font-medium">Tecil Tarihi</label>
    <input
      type="date"
      className="w-full mt-1 p-3 border rounded-xl"
      value={form?.steps[10]?.defermentDate || ""}
      onChange={(e) =>
        updateField(10, "defermentDate", e.target.value)
      }
    />
  </div>
)}
{/*  */}

      {/* EK BİLGİ */}
      <div className="col-span-2">
        <label className="text-sm font-medium">Ek Bilgiler (Varsa)</label>
        <textarea
          name="additionalInfo"
          className="w-full resize-none  mt-1 p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          rows="4"
          value={form?.steps[10]?.additionalInfo || ""}
onChange={(e) => {
                if (isMobile) {
                    // Mobile: Normalizasyon YOK, sadece değeri sakla
                    updateField(10, "additionalInfo", e.target.value);
                } else {
                    // Desktop/Diğer: Normalizasyon YAP
                    updateField(10, "additionalInfo", normalizeInput(e.target.value));
                }
            }}
            
            // Eğer **Mobilse** onBlur'da normalizasyonu uygula
            onBlur={(e) => {
                if (isMobile) {
                    const normalizedValue = normalizeInput(e.target.value);
                    updateField(10, "additionalInfo", normalizedValue);
                }
            }}
          placeholder="Eklemek istediğiniz bilgiler..."
        ></textarea>
      </div>

    </div>
  </section>
)}

{form.currentStep === 11 && (
  <section>
    <h3 className="font-semibold mb-3 text-lg">11. Bölüm</h3>

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
          {!form.steps[11].passportFile ? (
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
                  updateFileField(11, "passportFile", null);
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
            onChange={(e) => updateFileField(11, "passportFile", e.target.files[0])}
          />
        </div>

        {form.steps[11].passportFile && (
          <p className="mt-2 text-sm text-gray-700 truncate w-49 md:w-70 text-center">
            {form.steps[11].passportFile.name}
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
          {!form?.steps[11]?.photoFile ? (
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
                  updateFileField(11, "photoFile", null);
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
            onChange={(e) => updateFileField(11, "photoFile", e.target.files[0])}
          />
        </div>

        {form?.steps[11]?.photoFile && (
          <p className="mt-2 text-sm text-gray-600 truncate w-48 md:w-60 text-center">
            {form?.steps[11]?.photoFile.name}
          </p>
        )}
      </div>
    </div>
  </section>
)}

          {/* Navigation */}
<div className="flex items-center justify-between mt-6">
  {form.currentStep < 11 && (
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
        // disabled={!validateStep(form.currentStep, form)}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 cursor-pointer"
      >
        İleri
      </button>
    </div>
  )}

  {form.currentStep >= 11 && validateStep(11, form) && (
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
    clearDs160Storage();
    
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
       <AydinlatmaFormu   open={openInfo}
        onClose={() => setOpenInfo(false)} />
    </div>
  );
}

 