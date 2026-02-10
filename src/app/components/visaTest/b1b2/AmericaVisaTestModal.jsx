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
        Testi Bitir
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
  1: {
  title: "Yaş Grubu",
  description: "Lütfen yaş aralığınızı seçiniz.",
  options: [
    ["0 - 13 yaşındayım.", 0, "school_check_0_13", { isMinor: true, ageGroup: "0-13" }],
    ["14 - 17 yaşındayım.", 0, "education_check_14_17", { isMinor: true, ageGroup: "14-17" }],
    ["18 - 28 yaş arasındayım.", -10, "gender_check_18_28", { isMinor: false, ageGroup: "18-28" }],
    ["29 - 45 yaş arasındayım.", 5, "gender_check_29_45", { isMinor: false, ageGroup: "29-45" }],
    ["46 - 60 yaş arasındayım.", 10, "gender_check_46_60", { isMinor: false, ageGroup: "46-60" }],
    ["60 yaşından büyüğüm.", 15, "gender_check_61_plus", { isMinor: false, ageGroup: "60+" }],
  ],
},

school_check_0_13:{
 title: "Okul Durumu",
    description: "Okul durumunuzu belirtiniz.",
    options: [
      ["Okul Öncesi", 5, "family_visa_check_0_13"],
      ["İlkokul", 5, "family_visa_check_0_13"],
      ["Ortaokul", 5, "family_visa_check_0_13"],
    ], 
},

family_visa_check_0_13:{
 title: "Anne ve Baba Vize Durumu",
    description: "Anne ve Baba Vize Durumu",
    options: [
      ["İkisinin de var", 30, "travel_type"],
      ["Birinin var", 10, "travel_type"],
      ["İkisinin de yok", -10, "travel_type"],
    ], 
},

travel_type:{
 title: "Kiminle seyahat edeceksiniz?",
   
    options: [
      ["Anne ve/veya baba ile ", 10, "first_degree_acquaintance"],
      ["Okul takımı/heyet olarak vb.", 20, "team_events"],
    ], 
},

team_events:{
 title: "Takım olarak gidiyorsunuz.Bir etkinliğe mi katılacaksınız?",
    
    options: [
      ["Evet", 15, "invitation"],
      ["Hayır ", 10, "first_degree_acquaintance"],
    
    ], 
},

invitation:{
 title: "Davetiyeniz var mı?",
   
    options: [
      ["Evet", 10, "first_degree_acquaintance"],
      ["Hayır ", 0, "first_degree_acquaintance"],
    
    ], 
},

first_degree_acquaintance:{
 title: "Amerika'da birinci derece tanıdığınız var mı?",
   
    options: [
      ["Evet", -5, "staying_with_him_0_13"],
      ["Hayır ", 0, "america_visa_denial_0_13"],
    
    ], 
},

staying_with_him_0_13:{
 title: "Tanıdığınızın yanında mı kalacaksınız?",
   
    options: [
      ["Evet", -5, "first_degree_acquaintance_status_0_13"],
      ["Hayır ", 0, "first_degree_acquaintance_status_0_13"],
    
    ], 
},

first_degree_acquaintance_status_0_13:{
 title: "Tanıdığınız hangi statü ile Amerika'da bulunuyor?",
   
    options: [["ABD Vatandaşı.", 5, "us_contact_visit_0_13"],
      ["Green Card (Yeşil Kart) Sahibi.", 2, "us_contact_visit_0_13"],
      ["Öğrenci veya Geçici Çalışma Vizesi ile orada.", -10, "us_contact_visit_0_13"],
      ["İltica/Yasa dışı yollardan geçmiş", -30, "us_contact_visit_0_13"],]
},
 us_contact_visit_0_13: {
    title: "Türkiye Ziyareti",
    description:
      "Bu kişi en son ne zaman Türkiye'ye ziyarete geldi?",
    options: [
      ["Son 1 yıl içerisinde geldi.", 5, "america_visa_denial_0_13"],
      ["1 - 3 yıl arasında geldi.", -5, "america_visa_denial_0_13"],
      ["3 yıldan daha uzun süredir gelmedi veya hiç gelmedi.", -15, "america_visa_denial_0_13"],
    ],
  },
america_visa_denial_0_13:{
 title: "Daha önce Amerika vizesinden ret aldınız mı?",
   
    options: [
      ["Evet", -5, "us_refusal_time_0_13"],
      ["Hayır ", 0, "canada_visa_denial_0_13"],
    
    ], 
},
us_refusal_time_0_13: {
    title: "ABD Ret Zamanı",
    description: "En son ret cevabını ne zaman aldınız?",
    options: [
      ["6 aydan daha yakın bir sürede.", -10, "us_refusal_count_0_13"],
      ["6 ay - 1 yıl arasında.", -5, "us_refusal_count_0_13"],
      ["1 - 2 yıl arasında.", -2, "us_refusal_count_0_13"],
      ["2 yıldan daha uzun süre önce.", 0, "us_refusal_count_0_13"],
    ],
  },
    us_refusal_count_0_13: {
    title: "ABD Ret Sayısı",
    description: "Toplamda kaç kez ret aldınız?",
    options: [
      ["Sadece 1 kez.", 0, "canada_visa_denial_0_13"],
      ["2 kez.", -5, "canada_visa_denial_0_13"],
      ["3 veya daha fazla kez.", -10, "canada_visa_denial_0_13"],
    ],
  },
 canada_visa_denial_0_13:{
 title: "Daha önce Kanada vizesinden ret aldınız mı?",
    
    options: [
      ["Evet", -5, "passport_type_0_13"],
      ["Hayır ", 0, "passport_type_0_13"],
    
    ], 
},
passport_type_0_13:{
 title: "Pasaport türünüz nedir?",
   
    options: [
      ["Yeşil Pasaport", 20, "finish_screen"],
      ["Bordo Pasaport ", 0, "abroad_stay_0_13"],
    
    ], 
},

abroad_stay_0_13:{
 title: "Daha önce yurt dışına çıktınız mı?",
   
    options: [
      ["Evet", 5, "abroad_travel_country_0_13"],
      ["Hayır ", 0, "finish_screen"],
    
    ], 
},

abroad_travel_country_0_13:{
 title: "Hangi ülkeye seyahat ettiniz?",
   
    options: [
      ["Schengen Bölgeleri ve/veya İngiltere", 15, "finish_screen"],
      ["Diğer ülkeler(Balkanlar,Gürcistan,Dubai vs.) ", 5, "finish_screen"],
     

    
    ], 
},

education_check_14_17:{
 title: "Öğrenci misiniz?",
   
    options: [
      
      ["Evet", 0, "family_visa_check_14_17"],
      ["Hayır", -15, "family_visa_check_14_17"],

    ], 
},

family_visa_check_14_17:{
 title: "Anne ve Baba Vize Durumu",
    description: "Anne ve Baba Vize Durumu",
    options: [
      ["İkisinin de var", 15, "travel_type_14_17"],
      ["Birinin var", 5, "travel_type_14_17"],
      ["İkisinin de yok", 0, "travel_type_14_17"],
    ], 
},
travel_type_14_17:{
 title: "Kiminle seyahat edeceksiniz?",
    
    options: [
      ["Kendim", -5, "first_degree_acquaintance_status_14_17"],
      ["Anne ve/veya baba ile ", 10, "first_degree_acquaintance_status_14_17"],
      ["Okul takımı/heyet olarak vb.", 20, "team_events_14_17"],
    ], 
},
team_events_14_17:{
 title: "Takım/Heyet olarak gidiyorsunuz.Bir etkinliğe mi katılacaksınız?",
    
    options: [
      ["Evet", 12, "invitation_14_17"],
      ["Hayır ", 0, "first_degree_acquaintance_14_17"],
    
    ], 
},
invitation_14_17:{
 title: "Davetiyeniz var mı?",
    
    options: [
      ["Evet", 10, "first_degree_acquaintance_14_17"],
      ["Hayır ", -10, "first_degree_acquaintance_14_17"],
    
    ], 
},

first_degree_acquaintance_14_17:{
 title: "Amerika'da birinci derece tanıdığınız var mı?",
    
    options: [
      ["Evet", -10, "staying_with_him_14_17"],
      ["Hayır ", 0, "america_visa_denial_14_17"],
    
    ], 
},

staying_with_him_14_17:{
 title: "Tanıdığınızın yanında mı kalacaksınız?",
    
    options: [
      ["Evet", -10, "first_degree_acquaintance_status_14_17"],
      ["Hayır ", 0, "first_degree_acquaintance_status_14_17"],
    
    ], 
},


first_degree_acquaintance_status_14_17:{
 title: "Tanıdığınızın hangi statü ile Amerika'da bulunuyor?",
    
    options: [["ABD Vatandaşı.", 5, "us_contact_visit_14_17"],
      ["Green Card (Yeşil Kart) Sahibi.", 2, "us_contact_visit_14_17"],
      ["Öğrenci veya Geçici Çalışma Vizesi ile orada.", -10, "us_contact_visit_14_17"],
      ["İltica/Yasa dışı yollardan geçmiş", -30, "us_contact_visit_14_17"],]
},
 us_contact_visit_14_17: {
    title: "Türkiye Ziyareti",
    description:
      "Bu kişi en son ne zaman Türkiye'ye ziyarete geldi?",
    options: [
      ["Son 1 yıl içerisinde geldi.", 5, "america_visa_denial_14_17"],
      ["1 - 3 yıl arasında geldi.", -5, "america_visa_denial_14_17"],
      ["3 yıldan daha uzun süredir gelmedi veya hiç gelmedi.", -15, "america_visa_denial_14_17"],
    ],
  },
america_visa_denial_14_17:{
 title: "Daha önce Amerika vizesinden ret aldınız mı?",
    
    options: [
      ["Evet", -10, "us_refusal_time_14_17"],
      ["Hayır ", 0, "canada_visa_denial_14_17"],
    
    ], 
},
us_refusal_time_14_17: {
    title: "ABD Ret Zamanı",
    description: "En son ret cevabını ne zaman aldınız?",
    options: [
      ["6 aydan daha yakın bir sürede.", -10, "us_refusal_count_14_17"],
      ["6 ay - 1 yıl arasında.", -5, "us_refusal_count_14_17"],
      ["1 - 2 yıl arasında.", -2, "us_refusal_count_14_17"],
      ["2 yıldan daha uzun süre önce.", 0, "us_refusal_count_14_17"],
    ],
  },
    us_refusal_count_14_17: {
    title: "ABD Ret Sayısı",
    description: "Toplamda kaç kez ret aldınız?",
    options: [
      ["Sadece 1 kez.", 0, "canada_visa_denial_14_17"],
      ["2 kez.", -5, "canada_visa_denial_14_17"],
      ["3 veya daha fazla kez.", -10, "canada_visa_denial_14_17"],
    ],
  },
 canada_visa_denial_14_17:{
 title: "Daha önce Kanada vizesinden ret aldınız mı?",
    
    options: [
      ["Evet", -10, "passport_type_14_17"],
      ["Hayır ", 0, "passport_type_14_17"],
    
    ], 
},
passport_type_14_17:{
 title: "Pasaport türünüz nedir?",
   
    options: [
      ["Yeşil Pasaport", 20, "english_interwiew_14_17"],
      ["Bordo Pasaport ", 0, "abroad_stay_14_17"],
    
    ], 
},

abroad_stay_14_17:{
 title: "Daha önce yurt dışına çıktınız mı?",
   
    options: [
      ["Evet", 5, "abroad_travel_country_14_17"],
      ["Hayır ", 0, "english_interwiew_14_17"],
    
    ], 
},

abroad_travel_country_14_17:{
 title: "Hangi ülkeye seyahat ettiniz?",
  
    options: [
      ["Schengen Bölgeleri ve/veya İngiltere", 15, "english_interwiew_14_17"],
      ["Diğer ülkeler(Balkanlar,Gürcistan,Dubai vs.) ", 5, "english_interwiew_14_17"],
      

    
    ], 
},
english_interwiew_14_17:{
 title: "İngilizce mülakat yapabilir misiniz?",
  
    options: [
      ["Evet", 20, "finish_screen"],
      ["Hayır", -5, "finish_screen"],
 

    
    ], 
},





// 18-28 YAŞ İÇİN


  gender_check_18_28: {
    title: "Cinsiyet",
    description: "Cinsiyetinizi belirtiniz.",
    options: [
      ["Kadın", 5, "parents_visa_18_28",{gender:"female"}],
      ["Erkek", -5, "parents_visa_18_28",{gender:"male"}],
    ],
  },

  parents_visa_18_28: {
    title: "Ebeveyn Vize Durumu",
    description:
      "Anne veya babanızın (veya her ikisinin) geçerli bir ABD vizesi bulunuyor mu?",
    options: [
      ["Evet, hem annemin hem de babamın geçerli vizesi var.", 10, "travel_with_parents_18_28"],
      ["Evet, sadece bir ebeveynimin (anne veya baba) vizesi var.", 5, "travel_with_parents_18_28"],
      ["Hayır, ebeveynlerimin vizesi yok.", 0, "travel_companion_check_18_28"],
    ],
  },

  travel_with_parents_18_28: {
    title: "Seyahat Şekli",
    description:
      "Amerika seyahatinizi, vizesi olan ebeveynlerinizle birlikte mi gerçekleştireceksiniz?",
    options: [
      ["Evet, onlarla birlikte seyahat edeceğim.", 0, "marital_status_18_28"], // specialLogic vardı
      ["Hayır, onlardan bağımsız seyahat edeceğim.", 0, "marital_status_18_28"],
    ],
  },
marital_status_18_28: {
  title: "Medeni Durum",
  description: "Medeni durumunuz nedir?",
  options: [
    [
      "Bekar / Dul / Boşanmış",
      0,
      "children_count_18_28",
      { maritalStatus: "single" }
    ],
    [
      "Evli",
      5,
      "children_count_18_28",
      { maritalStatus: "married" }
    ],
  ],
},
  children_count_18_28: {
    title: "Çocuk Sayısı",
    description: "Sahip olduğunuz çocuk sayısını belirtiniz.",
    options: [
      ["Çocuğum yok.", 0, "travel_companion_check_18_28"],
      ["1 çocuk sahibiyim.", 5, "travel_companion_check_18_28"],
      ["2 veya daha fazla çocuğum var.", 10, "travel_companion_check_18_28"],
    ],
  },
  travel_companion_check_18_28: {
    title: "Seyahat Eşlikçisi",
    description:
      "Peki, Amerika seyahatinizi kiminle gerçekleştirmeyi planlıyorsunuz?",
    options: [
      ["Yalnız başıma seyahat edeceğim.", -4, "travel_friend_visa_18_28"],
      ["Bir arkadaşımla veya arkadaş grubumla.", 5, "travel_friend_visa_18_28"],
      ["Okul veya iş sebebiyle bir ekip/heyet ile birlikte.", 5, "travel_school_visa_18_28"],
      ["Eşimle veya sevgilimle.", 3, "travel_friend_visa_18_28"],
      ["Ailecek çocuklar dahil.", 3, "travel_family_visa_18_28"],
    ],
  },

travel_school_visa_18_28: {
    title: "Seyahat Eşlikçisi Vize Durumu",
    description:
      "Seyahat edeceğiniz grubun ABD vizesi var mı?",
    options: [
      ["Hepsinin var.", 2, "job_status_18_28"],
      ["Bazılarının var.", 0, "job_status_18_28"],
      ["Hiçbirinin yok.", -3, "job_status_18_28"],
    ],
  },
travel_friend_visa_18_28: {
    title: "Seyahat Eşlikçisi Vize Durumu",
    description:
      "Seyahat arkadaşınızın ABD vizesi var mı?",
    options: [
      ["Evet, vizesi var.", 0, "job_status_18_28"],
      ["Hayır, vizesi yok.", -3, "job_status_18_28"],
    ],
  },
travel_family_visa_18_28: {
    title: "Seyahat Eşlikçisi Vize Durumu",
    description:
      "Seyahat edeceğiniz aile bireylerinizin ABD vizesi var mı?",
    options: [
      ["Evet, vizesi var.", 2, "job_status_18_28"],
      ["Hayır, vizesi yok.", -3, "job_status_18_28"],
    ],
  },
  job_status_18_28: {
    title: "Meslek Durumu",
    description:
      "Mevcut çalışma durumunuzu en iyi ifade eden seçenek hangisidir?",
    options: [
      ["Kamu çalışanıyım (Memur, Akademisyen vb.)", 10, "work_time_18_28"],
      ["Özel sektörde çalışanım (SGK'lı).", 5, "work_time_18_28"],
      ["İşverenim / Şirket Sahibiyim.", 10, "work_time_18_28"],
      ["Öğrenciyim.", 2, "school_check_18_28"],
      ["Emekliyim.", 8, "monthly_income_18_28"],
      ["Çalışmıyorum / Ev hanımıyım.", -5, "monthly_income_18_28"],
      ["Freelance(Yazılımcı, Tasarımcı,İç Mimar vb.)", -10, "work_time_18_28"]
    ],
  },
  school_check_18_28:{
 title: "Öğrencilik Durumu",
    description: "Öğrencilik durumunuzu belirtiniz.",
    options: [
      // ["Lise", 5, "parents_visa",{gender:"female"}],
      ["Ön Lisans/Lisans", -10, "monthly_income_18_28"],
      ["Yüksek Lisans", -3, "monthly_income_18_28"],

    ], 
},

  work_time_18_28: {
    title: "Çalışma Süresi",
    description: "Şu anki işinizde ne kadar süredir çalışıyorsunuz?",
    options: [
      ["0-6 AY", -15, "monthly_income_18_28"],
      ["6-12 AY", -10, "monthly_income_18_28"],
      ["1-2 YIL", 0, "monthly_income_18_28"],
      ["2-4 YIL", 10, "monthly_income_18_28"],
      ["4 YIL ve üzeri", 12, "monthly_income_18_28"],

    ],
  },
  monthly_income_18_28: {
    title: "Aylık Geliriniz",
   
    options: [
      ["0-50000TL", -5, "us_contact_18_28"],
 ["500001-100000TL", 3, "us_contact_18_28"],
 ["100001-150000TL", 4, "us_contact_18_28"],
  ["150001TL ve üzeri", 5, "us_contact_18_28"],
    ]  
},

  us_contact_18_28: {
    title: "Amerika'daki Tanıdıklar",
    description:
      "Amerika Birleşik Devletleri'nde yaşayan birinci derece akrabanız veya yakın tanıdığınız var mı?",
    options: [
      ["Evet, birinci derece akrabam var.", -10, "us_contact_status_18_28"],
      ["Evet, uzak akrabam veya arkadaşlarım var.", -5, "us_contact_status_18_28"],
      ["Hayır, Amerika'da kimsem yok.", 0, "travel_western_visas_18_28"],
    ],
  },

  us_contact_status_18_28: {
    title: "Tanıdığınızın Statüsü",
    description:
      "Amerika'daki tanıdığınızın oradaki yasal statüsü nedir?",
    options: [
      ["ABD Vatandaşı.", 5, "us_contact_visit_18_28"],
      ["Green Card (Yeşil Kart) Sahibi.", 2, "us_contact_visit_18_28"],
      ["Öğrenci veya Geçici Çalışma Vizesi ile orada.", -10, "us_contact_visit_18_28"],
      ["İltica/Yasa dışı yollardan geçmiş", -30, "us_contact_visit_18_28"],

    ],
  },

  us_contact_visit_18_28: {
    title: "Türkiye Ziyareti",
    description:
      "Bu kişi en son ne zaman Türkiye'ye ziyarete geldi?",
    options: [
      ["Son 1 yıl içerisinde geldi.", 5, "travel_western_visas_18_28"],
      ["1 - 3 yıl arasında geldi.", -5, "travel_western_visas_18_28"],
      ["3 yıldan daha uzun süredir gelmedi veya hiç gelmedi.", -15, "travel_western_visas_18_28"],
    ],
  },

  travel_western_visas_18_28: {
    title: "Son 5 Yıldaki Batı Vizeleri",
    description:
      "Son 5 yılda, Amerika (Work and Travel hariç), İngiltere, Kanada, Avustralya ve Yeni Zelanda’dan vize aldınız mı?",
    options: [
      ["Birden fazla", 20, "travel_visa_labels_18_28"],
      ["1 tane", 8, "travel_visa_labels_18_28"],
      ["Hiç yok", 0, "travel_visa_labels_18_28"],
    ],
  },

  travel_visa_labels_18_28: {
    title: "Pasaporttaki Schengen Vize Etiketi Sayısı",
    description:
      "Yunanistan kapıda vize dahil.",
    options: [
      ["Hiç yok", -10, "russia_china_visit_18_28"],
      ["1 tane", 3, "schengen_russia_china_visit_18_28"],
      ["2 tane", 8, "schengen_russia_china_visit_18_28"],
      ["3 tane veya daha fazla", 15, "schengen_russia_china_visit_18_28"],
      
    ],
  },

schengen_russia_china_visit_18_28: {
    title: "Rusya,Çin,İran,Irak,Libya ve Belarus Seyahatleri",
    description:
      "Son 5 yılda Rusya,Çin,İran,Irak,Libya ve Belarus bu ülkelere seyahat ettiniz mi?",
    options: [
      ["Evet", -10, "russia_china_visit_info_18_28"],
      ["Hayır", 0, "travel_other_countries_18_28"],
     
      
    ],
  },
  russia_china_visit_18_28: {
    title: "Rusya,Çin,İran,Irak,Libya ve Belarus Seyahatleri",
    description:
      "Son 5 yılda Rusya,Çin,İran,Irak,Libya ve Belarus bu ülkelere seyahat ettiniz mi?",
    options: [
      ["Evet", -15, "russia_china_visit_info_18_28"],
      ["Hayır", 0, "travel_other_countries_18_28"],
     
      
    ],
  },

  russia_china_visit_info_18_28: {
    title: "Rusya,Çin,İran,Irak,Libya ve Belarus Seyahatleri Gidiş Sebebi",
    description:
      "Rusya,Çin,İran,Irak,Libya ve Belarus bu ülkelere seyahat ettiyseniz sebebi nedir?",
    options: [
      ["İş Seyahati", 10, "travel_other_countries_18_28"],
      ["Turistik Gezi", 3, "travel_other_countries_18_28"],
      ["Diğer", 0, "travel_other_countries_18_28"],

     
      
    ],
  },



  travel_other_countries_18_28: {
    title: "Diğer Ülke Seyahatleri",
    description:
      "Japonya,Güney Kore,Singapur,Tayland,Birleşik Arap Emirlikleri,Güney Afrika bu ülkelere son 5 yılda seyahat ettiniz mi?",
    options: [
      ["Birden fazla", 8, "us_refusal_18_28"],
      ["Bir tane", 2, "us_refusal_18_28"],
      ["Hayır", 0, "us_refusal_18_28"],
    ],
  },

  us_refusal_18_28: {
    title: "ABD Vize Geçmişi",
    description:
      "Daha önce Amerika vizesi başvurunuzdan ret aldınız mı?",
    options: [
      ["Hayır, almadım.", 0, "canada_refusal_18_28"],
      ["Evet, aldım.", -10, "us_refusal_time_18_28"],
    ],
  },

  us_refusal_time_18_28: {
    title: "ABD Ret Zamanı",
    description: "En son ret cevabını ne zaman aldınız?",
    options: [
      ["6 aydan daha yakın bir sürede.", -10, "us_refusal_count_18_28"],
      ["6 ay - 1 yıl arasında.", -5, "us_refusal_count_18_28"],
      ["1 - 2 yıl arasında.", -2, "us_refusal_count_18_28"],
      ["2 yıldan daha uzun süre önce.", 0, "us_refusal_count_18_28"],
    ],
  },

  us_refusal_count_18_28: {
    title: "ABD Ret Sayısı",
    description: "Toplamda kaç kez ret aldınız?",
    options: [
      ["Sadece 1 kez.", 0, "canada_refusal_18_28"],
      ["2 kez.", -2, "canada_refusal_18_28"],
      ["3 veya daha fazla kez.", -5, "canada_refusal_18_28"],
    ],
  },

  canada_refusal_18_28: {
    title: "Kanada Vize Geçmişi",
    description:
      "Son üç yılda Kanada'dan vize reddi aldınız mı?",
    options: [
      ["Hayır, almadım.", 0, "english_interwiew_18_28"],
      ["Evet, aldım.", -15, "english_interwiew_18_28"],
      
    ],
  },
  english_interwiew_18_28:{
 title: "İngilizce mülakat yapabilir misiniz?",
  
    options: [
      ["Evet", 15, "finish_screen"],
      ["Hayır", 0, "finish_screen"],
 

    
    ], },
// 29-45 YAŞ İÇİN
  gender_check_29_45: {
    title: "Cinsiyet",
    description: "Cinsiyetinizi belirtiniz.",
    options: [
      ["Kadın", 5, "marital_status_29_45",{gender:"female"}],
      ["Erkek", -5, "marital_status_29_45",{gender:"male"}],
    ],
  },
  marital_status_29_45: {
  title: "Medeni Durum",
  description: "Medeni durumunuz nedir?",
  options: [
    [
      "Bekar / Dul / Boşanmış",
      0,
      "children_count_29_45",
      { maritalStatus: "single" }
    ],
    [
      "Evli",
      5,
      "children_count_29_45",
      { maritalStatus: "married" }
    ],
  ],
},

  children_count_29_45: {
    title: "Çocuk Sayısı",
    description: "Sahip olduğunuz çocuk sayısını belirtiniz.",
    options: [
      ["Çocuğum yok.", 0, "travel_companion_check_18_28"],
      ["1 çocuk sahibiyim.", 5, "travel_companion_check_18_28"],
      ["2 veya daha fazla çocuğum var.", 10, "travel_companion_check_18_28"],
    ],
  },
travel_companion_check_29_45: {
    title: "Seyahat Eşlikçisi",
    description:
      "Peki, Amerika seyahatinizi kiminle gerçekleştirmeyi planlıyorsunuz?",
    options: [
      ["Yalnız başıma seyahat edeceğim.", -4, "travel_friend_visa_29_45"],
      ["Bir arkadaşımla veya arkadaş grubumla.", 5, "travel_friend_visa_29_45"],
      ["Okul veya iş sebebiyle bir ekip/heyet ile birlikte.", 5, "travel_school_visa_29_45"],
      ["Eşimle veya sevgilimle.", 3, "travel_friend_visa_29_45"],
      ["Ailecek çocuklar dahil.", 3, "travel_family_visa_29_45"],
    ],
  },

travel_school_visa_29_45: {
    title: "Seyahat Eşlikçisi Vize Durumu",
    description:
      "Seyahat edeceğiniz grubun ABD vizesi var mı?",
    options: [
      ["Hepsinin var.", 2, "job_status_29_45"],
      ["Bazılarının var.", 0, "job_status_29_45"],
      ["Hiçbirinin yok.", -3, "job_status_29_45"],
    ],
  },
travel_friend_visa_29_45: {
    title: "Seyahat Eşlikçisi Vize Durumu",
    description:
      "Seyahat arkadaşınızın ABD vizesi var mı?",
    options: [
      ["Evet, vizesi var.", 0, "job_status_29_45"],
      ["Hayır, vizesi yok.", -3, "job_status_29_45"],
    ],
  },
travel_family_visa_29_45: {
    title: "Seyahat Eşlikçisi Vize Durumu",
    description:
      "Seyahat edeceğiniz aile bireylerinizin ABD vizesi var mı?",
    options: [
      ["Evet, vizesi var.", 2, "job_status_29_45"],
      ["Hayır, vizesi yok.", -3, "job_status_29_45"],
    ],
  },


  

  job_status_29_45: {
    title: "Meslek Durumu",
    description:
      "Mevcut çalışma durumunuzu en iyi ifade eden seçenek hangisidir?",
    options: [
      ["Kamu çalışanıyım (Memur, Akademisyen vb.)", 10, "work_time_29_45"],
      ["Özel sektörde çalışanım (SGK'lı).", 5, "work_time_29_45"],
      ["İşverenim / Şirket Sahibiyim.", 10, "work_time_29_45"],
      ["Öğrenciyim.", 2, "school_check_29_45"],
      ["Emekliyim.", 8, "monthly_income_29_45"],
      ["Çalışmıyorum / Ev hanımıyım.", -5, "monthly_income_29_45"],
      ["Freelance(Yazılımcı, Tasarımcı,İç Mimar vb.)", -10, "work_time_29_45"]
    ],
  },
  school_check_29_45:{
 title: "Öğrencilik Durumu",
    description: "Öğrencilik durumunuzu belirtiniz.",
    options: [
      // ["Lise", 5, "parents_visa",{gender:"female"}],
      ["Ön Lisans/Lisans", -10, "monthly_income_29_45"],
      ["Yüksek Lisans", -3, "monthly_income_29_45"],

    ], 
},

  work_time_29_45: {
    title: "Çalışma Süresi",
    description: "Şu anki işinizde ne kadar süredir çalışıyorsunuz?",
    options: [
      ["0-6 AY", -15, "monthly_income_29_45"],
      ["6-12 AY", -10, "monthly_income_29_45"],
      ["1-2 YIL", 0, "monthly_income_29_45"],
      ["2-4 YIL", 10, "monthly_income_29_45"],
      ["4 YIL ve üzeri", 12, "monthly_income_29_45"],

    ],
  },
  monthly_income_29_45: {
    title: "Aylık Geliriniz",
   
    options: [
      ["0-50000TL", -5, "us_contact_29_45"],
 ["500001-100000TL", 3, "us_contact_29_45"],
 ["100001-150000TL", 4, "us_contact_29_45"],

  ["150001TL ve üzeri", 5, "us_contact_29_45"],
    ]  
},

  us_contact_29_45: {
    title: "Amerika'daki Tanıdıklar",
    description:
      "Amerika Birleşik Devletleri'nde yaşayan birinci derece akrabanız veya yakın tanıdığınız var mı?",
    options: [
      ["Evet, birinci derece akrabam var.", -10, "us_contact_status_29_45"],
      ["Evet, uzak akrabam veya arkadaşlarım var.", -5, "us_contact_status_29_45"],
      ["Hayır, Amerika'da kimsem yok.", 0, "travel_western_visas_29_45"],
    ],
  },

  us_contact_status_29_45: {
    title: "Tanıdığınızın Statüsü",
    description:
      "Amerika'daki tanıdığınızın oradaki yasal statüsü nedir?",
    options: [
      ["ABD Vatandaşı.", 5, "us_contact_visit_29_45"],
      ["Green Card (Yeşil Kart) Sahibi.", 2, "us_contact_visit_29_45"],
      ["Öğrenci veya Geçici Çalışma Vizesi ile orada.", -10, "us_contact_visit_29_45"],
      ["İltica/Yasa dışı yollardan geçmiş", -30, "us_contact_visit_29_45"],

    ],
  },

  us_contact_visit_29_45: {
    title: "Türkiye Ziyareti",
    description:
      "Bu kişi en son ne zaman Türkiye'ye ziyarete geldi?",
    options: [
      ["Son 1 yıl içerisinde geldi.", 5, "travel_western_visas_29_45"],
      ["1 - 3 yıl arasında geldi.", -5, "travel_western_visas_29_45"],
      ["3 yıldan daha uzun süredir gelmedi veya hiç gelmedi.", -15, "travel_western_visas_29_45"],
    ],
  },

  travel_western_visas_29_45: {
    title: "Son 5 Yıldaki Batı Vizeleri",
    description:
      "Son 5 yılda, Amerika (Work and Travel hariç), İngiltere, Kanada, Avustralya ve Yeni Zelanda’dan vize aldınız mı?",
    options: [
      ["Birden fazla", 20, "travel_visa_labels_29_45"],
      ["1 tane", 8, "travel_visa_labels_29_45"],
      ["Hiç yok", 0, "travel_visa_labels_29_45"],
    ],
  },

  travel_visa_labels_29_45: {
    title: "Pasaporttaki Schengen Vize Etiketi Sayısı",
    description:
      "Yunanistan kapıda vize dahil.",
    options: [
      ["Hiç yok", -10, "russia_china_visit_29_45"],
      ["1 tane", 3, "schengen_russia_china_visit_29_45"],
      ["2 tane", 8, "schengen_russia_china_visit_29_45"],
      ["3 tane veya daha fazla", 15, "schengen_russia_china_visit_29_45"],
      
    ],
  },

schengen_russia_china_visit_29_45: {
    title: "Rusya,Çin,İran,Irak,Libya ve Belarus Seyahatleri",
    description:
      "Son 5 yılda Rusya,Çin,İran,Irak,Libya ve Belarus bu ülkelere seyahat ettiniz mi?",
    options: [
      ["Evet", -10, "russia_china_visit_info_29_45"],
      ["Hayır", 0, "travel_other_countries_29_45"],
     
      
    ],
  },
  russia_china_visit_29_45: {
    title: "Rusya,Çin,İran,Irak,Libya ve Belarus Seyahatleri",
    description:
      "Son 5 yılda Rusya,Çin,İran,Irak,Libya ve Belarus bu ülkelere seyahat ettiniz mi?",
    options: [
      ["Evet", -15, "russia_china_visit_info_29_45"],
      ["Hayır", 0, "travel_other_countries_29_45"],
     
      
    ],
  },

  russia_china_visit_info_29_45: {
    title: "Rusya,Çin,İran,Irak,Libya ve Belarus Seyahatleri Gidiş Sebebi",
    description:
      "Rusya,Çin,İran,Irak,Libya ve Belarus bu ülkelere seyahat ettiyseniz sebebi nedir?",
    options: [
      ["İş Seyahati", 10, "travel_other_countries_29_45"],
      ["Turistik Gezi", 3, "travel_other_countries_29_45"],
      ["Diğer", 0, "travel_other_countries_29_45"],

     
      
    ],
  },



  travel_other_countries_29_45: {
    title: "Diğer Ülke Seyahatleri",
    description:
      "Japonya,Güney Kore,Singapur,Tayland,Birleşik Arap Emirlikleri,Güney Afrika bu ülkelere son 5 yılda seyahat ettiniz mi?",
    options: [
      ["Birden fazla", 8, "us_refusal_29_45"],
      ["Bir tane", 2, "us_refusal_29_45"],
      ["Hayır", 0, "us_refusal_29_45"],
    ],
  },

  us_refusal_29_45: {
    title: "ABD Vize Geçmişi",
    description:
      "Daha önce Amerika vizesi başvurunuzdan ret aldınız mı?",
    options: [
      ["Hayır, almadım.", 0, "canada_refusal_29_45"],
      ["Evet, aldım.", -10, "us_refusal_time_29_45"],
    ],
  },

  us_refusal_time_29_45: {
    title: "ABD Ret Zamanı",
    description: "En son ret cevabını ne zaman aldınız?",
    options: [
      ["6 aydan daha yakın bir sürede.", -10, "us_refusal_count_29_45"],
      ["6 ay - 1 yıl arasında.", -5, "us_refusal_count_29_45"],
      ["1 - 2 yıl arasında.", -2, "us_refusal_count_29_45"],
      ["2 yıldan daha uzun süre önce.", 0, "us_refusal_count_29_45"],
    ],
  },

  us_refusal_count_29_45: {
    title: "ABD Ret Sayısı",
    description: "Toplamda kaç kez ret aldınız?",
    options: [
      ["Sadece 1 kez.", 0, "canada_refusal_29_45"],
      ["2 kez.", -2, "canada_refusal_29_45"],
      ["3 veya daha fazla kez.", -5, "canada_refusal_29_45"],
    ],
  },

  canada_refusal_29_45: {
    title: "Kanada Vize Geçmişi",
    description:
      "Son üç yılda Kanada'dan vize reddi aldınız mı?",
    options: [
      ["Evet, aldım.", -15, "english_interwiew_29_45"],
      ["Hayır, almadım.", 0, "english_interwiew_29_45"],
    ],
  },
    english_interwiew_29_45:{
 title: "İngilizce mülakat yapabilir misiniz?",
  
    options: [
      ["Evet", 10, "finish_screen"],
      ["Hayır", 0, "finish_screen"],
 

    
    ], },
// 46-60 YAŞ İÇİN
  gender_check_46_60: {
    title: "Cinsiyet",
    description: "Cinsiyetinizi belirtiniz.",
    options: [
      ["Kadın", 5, "travel_companion_check_46_60",{gender:"female"}],
      ["Erkek", -5, "travel_companion_check_46_60",{gender:"male"}],
    ],
  },

 
  marital_status_46_60: {
  title: "Medeni Durum",
  description: "Medeni durumunuz nedir?",
  options: [
    [
      "Bekar / Dul / Boşanmış",
      0,
      "children_count_46_60",
      { maritalStatus: "single" }
    ],
    [
      "Evli",
      5,
      "children_count_46_60",
      { maritalStatus: "married" }
    ],
  ],
},

  children_count_46_60: {
    title: "Çocuk Sayısı",
    description: "Sahip olduğunuz çocuk sayısını belirtiniz.",
    options: [
      ["Çocuğum yok.", 0, "travel_companion_check_18_28"],
      ["1 çocuk sahibiyim.", 5, "travel_companion_check_18_28"],
      ["2 veya daha fazla çocuğum var.", 10, "travel_companion_check_18_28"],
    ],
  },
travel_companion_check_46_60: {
    title: "Seyahat Eşlikçisi",
    description:
      "Peki, Amerika seyahatinizi kiminle gerçekleştirmeyi planlıyorsunuz?",
    options: [
      ["Yalnız başıma seyahat edeceğim.", -4, "travel_friend_visa_46_60"],
      ["Bir arkadaşımla veya arkadaş grubumla.", 5, "travel_friend_visa_46_60"],
      ["Okul veya iş sebebiyle bir ekip/heyet ile birlikte.", 5, "travel_school_visa_46_60"],
      ["Eşimle veya sevgilimle.", 3, "travel_friend_visa_46_60"],
      ["Ailecek çocuklar dahil.", 3, "travel_family_visa_46_60"],
    ],
  },

travel_school_visa_46_60: {
    title: "Seyahat Eşlikçisi Vize Durumu",
    description:
      "Seyahat edeceğiniz grubun ABD vizesi var mı?",
    options: [
      ["Hepsinin var.", 2, "job_status_46_60"],
      ["Bazılarının var.", 0, "job_status_46_60"],
      ["Hiçbirinin yok.", -3, "job_status_46_60"],
    ],
  },
travel_friend_visa_46_60: {
    title: "Seyahat Eşlikçisi Vize Durumu",
    description:
      "Seyahat arkadaşınızın ABD vizesi var mı?",
    options: [
      ["Evet, vizesi var.", 0, "job_status_46_60"],
      ["Hayır, vizesi yok.", -3, "job_status_46_60"],
    ],
  },
travel_family_visa_46_60: {
    title: "Seyahat Eşlikçisi Vize Durumu",
    description:
      "Seyahat edeceğiniz aile bireylerinizin ABD vizesi var mı?",
    options: [
      ["Evet, vizesi var.", 2, "job_status_46_60"],
      ["Hayır, vizesi yok.", -3, "job_status_46_60"],
    ],
  },
  job_status_46_60: {
    title: "Meslek Durumu",
    description:
      "Mevcut çalışma durumunuzu en iyi ifade eden seçenek hangisidir?",
    options: [
      ["Kamu çalışanıyım (Memur, Akademisyen vb.)", 10, "work_time_46_60"],
      ["Özel sektörde çalışanım (SGK'lı).", 5, "work_time_46_60"],
      ["İşverenim / Şirket Sahibiyim.", 10, "work_time_46_60"],
      ["Öğrenciyim.", 2, "school_check_46_60"],
      ["Emekliyim.", 8, "monthly_income_46_60"],
      ["Çalışmıyorum / Ev hanımıyım.", -5, "monthly_income_46_60"],
      ["Freelance(Yazılımcı, Tasarımcı,İç Mimar vb.)", -10, "work_time_46_60"]
    ],
  },
  school_check_46_60:{
 title: "Öğrencilik Durumu",
    description: "Öğrencilik durumunuzu belirtiniz.",
    options: [
      // ["Lise", 5, "parents_visa",{gender:"female"}],
      ["Ön Lisans/Lisans", -10, "monthly_income_46_60"],
      ["Yüksek Lisans", -3, "monthly_income_46_60"],

    ], 
},

  work_time_46_60: {
    title: "Çalışma Süresi",
    description: "Şu anki işinizde ne kadar süredir çalışıyorsunuz?",
    options: [
      ["0-6 AY", -15, "monthly_income_46_60"],
      ["6-12 AY", -10, "monthly_income_46_60"],
      ["1-2 YIL", 0, "monthly_income_46_60"],
      ["2-4 YIL", 10, "monthly_income_46_60"],
      ["4 YIL ve üzeri", 12, "monthly_income_46_60"],

    ],
  },
  monthly_income_46_60: {
    title: "Aylık Geliriniz",
   
    options: [
      ["0-50000TL", -5, "us_contact_46_60"],
 ["500001-100000TL", 3, "us_contact_46_60"],
 ["100001-150000TL", 4, "us_contact_46_60"],

  ["150001TL ve üzeri", 5, "us_contact_46_60"],
    ]  
},

  us_contact_46_60: {
    title: "Amerika'daki Tanıdıklar",
    description:
      "Amerika Birleşik Devletleri'nde yaşayan birinci derece akrabanız veya yakın tanıdığınız var mı?",
    options: [
      ["Evet, birinci derece akrabam var.", -10, "us_contact_status_46_60"],
      ["Evet, uzak akrabam veya arkadaşlarım var.", -5, "us_contact_status_46_60"],
      ["Hayır, Amerika'da kimsem yok.", 0, "travel_western_visas_46_60"],
    ],
  },

  us_contact_status_46_60: {
    title: "Tanıdığınızın Statüsü",
    description:
      "Amerika'daki tanıdığınızın oradaki yasal statüsü nedir?",
    options: [
      ["ABD Vatandaşı.", 5, "us_contact_visit_46_60"],
      ["Green Card (Yeşil Kart) Sahibi.", 2, "us_contact_visit_46_60"],
      ["Öğrenci veya Geçici Çalışma Vizesi ile orada.", -10, "us_contact_visit_46_60"],
      ["İltica/Yasa dışı yollardan geçmiş", -30, "us_contact_visit_46_60"],

    ],
  },

  us_contact_visit_46_60: {
    title: "Türkiye Ziyareti",
    description:
      "Bu kişi en son ne zaman Türkiye'ye ziyarete geldi?",
    options: [
      ["Son 1 yıl içerisinde geldi.", 5, "travel_western_visas_46_60"],
      ["1 - 3 yıl arasında geldi.", -5, "travel_western_visas_46_60"],
      ["3 yıldan daha uzun süredir gelmedi veya hiç gelmedi.", -15, "travel_western_visas_46_60"],
    ],
  },

  travel_western_visas_46_60: {
    title: "Son 5 Yıldaki Batı Vizeleri",
    description:
      "Son 5 yılda, Amerika (Work and Travel hariç), İngiltere, Kanada, Avustralya ve Yeni Zelanda’dan vize aldınız mı?",
    options: [
      ["Birden fazla", 20, "travel_visa_labels_46_60"],
      ["1 tane", 8, "travel_visa_labels_46_60"],
      ["Hiç yok", 0, "travel_visa_labels_46_60"],
    ],
  },

  travel_visa_labels_46_60: {
    title: "Pasaporttaki Schengen Vize Etiketi Sayısı",
    description:
      "Yunanistan kapıda vize dahil.",
    options: [
      ["Hiç yok", -10, "russia_china_visit_46_60"],
      ["1 tane", 3, "schengen_russia_china_visit_46_60"],
      ["2 tane", 8, "schengen_russia_china_visit_46_60"],
      ["3 tane veya daha fazla", 15, "schengen_russia_china_visit_46_60"],
      
    ],
  },

schengen_russia_china_visit_46_60: {
    title: "Rusya,Çin,İran,Irak,Libya ve Belarus Seyahatleri",
    description:
      "Son 5 yılda Rusya,Çin,İran,Irak,Libya ve Belarus bu ülkelere seyahat ettiniz mi?",
    options: [
      ["Evet", -10, "russia_china_visit_info_46_60"],
      ["Hayır", 0, "travel_other_countries_46_60"],
     
      
    ],
  },
  russia_china_visit_46_60: {
    title: "Rusya,Çin,İran,Irak,Libya ve Belarus Seyahatleri",
    description:
      "Son 5 yılda Rusya,Çin,İran,Irak,Libya ve Belarus bu ülkelere seyahat ettiniz mi?",
    options: [
      ["Evet", -15, "russia_china_visit_info_46_60"],
      ["Hayır", 0, "travel_other_countries_46_60"],
     
      
    ],
  },

  russia_china_visit_info_46_60: {
    title: "Rusya,Çin,İran,Irak,Libya ve Belarus Seyahatleri Gidiş Sebebi",
    description:
      "Rusya,Çin,İran,Irak,Libya ve Belarus bu ülkelere seyahat ettiyseniz sebebi nedir?",
    options: [
      ["İş Seyahati", 10, "travel_other_countries_46_60"],
      ["Turistik Gezi", 3, "travel_other_countries_46_60"],
      ["Diğer", 0, "travel_other_countries_46_60"],

     
      
    ],
  },



  travel_other_countries_46_60: {
    title: "Diğer Ülke Seyahatleri",
    description:
      "Japonya,Güney Kore,Singapur,Tayland,Birleşik Arap Emirlikleri,Güney Afrika bu ülkelere son 5 yılda seyahat ettiniz mi?",
    options: [
      ["Birden fazla", 8, "us_refusal_46_60"],
      ["Bir tane", 2, "us_refusal_46_60"],
      ["Hayır", 0, "us_refusal_46_60"],
    ],
  },

  us_refusal_46_60: {
    title: "ABD Vize Geçmişi",
    description:
      "Daha önce Amerika vizesi başvurunuzdan ret aldınız mı?",
    options: [
      ["Hayır, almadım.", 0, "canada_refusal_46_60"],
      ["Evet, aldım.", -10, "us_refusal_time_46_60"],
    ],
  },

  us_refusal_time_46_60: {
    title: "ABD Ret Zamanı",
    description: "En son ret cevabını ne zaman aldınız?",
    options: [
      ["6 aydan daha yakın bir sürede.", -10, "us_refusal_count_46_60"],
      ["6 ay - 1 yıl arasında.", -5, "us_refusal_count_46_60"],
      ["1 - 2 yıl arasında.", -2, "us_refusal_count_46_60"],
      ["2 yıldan daha uzun süre önce.", 0, "us_refusal_count_46_60"],
    ],
  },

  us_refusal_count_46_60: {
    title: "ABD Ret Sayısı",
    description: "Toplamda kaç kez ret aldınız?",
    options: [
      ["Sadece 1 kez.", 0, "canada_refusal_46_60"],
      ["2 kez.", -2, "canada_refusal_46_60"],
      ["3 veya daha fazla kez.", -5, "canada_refusal_46_60"],
    ],
  },

  canada_refusal_46_60: {
    title: "Kanada Vize Geçmişi",
    description:
      "Son üç yılda Kanada'dan vize reddi aldınız mı?",
    options: [
         ["Hayır, almadım.", 0, "english_interwiew_46_60"],
      ["Evet, aldım.", -15, "english_interwiew_46_60"],
   
    ],
  },
   english_interwiew_46_60:{
 title: "İngilizce mülakat yapabilir misiniz?",
  
    options: [
      ["Evet", 10, "finish_screen"],
      ["Hayır", 0, "finish_screen"],
 

    
    ], },
// +60 YAŞ İÇİN
  gender_check_61_plus: {
    title: "Cinsiyet",
    description: "Cinsiyetinizi belirtiniz.",
    options: [
      ["Kadın", 5, "travel_companion_check_61_plus",{gender:"female"}],
      ["Erkek", -5, "travel_companion_check_61_plus",{gender:"male"}],
    ],
  },

 
 
  marital_status_61_plus: {
  title: "Medeni Durum",
  description: "Medeni durumunuz nedir?",
  options: [
    [
      "Bekar / Dul / Boşanmış",
      0,
      "children_count_61_plus",
      { maritalStatus: "single" }
    ],
    [
      "Evli",
      5,
      "children_count_61_plus",
      { maritalStatus: "married" }
    ],
  ],
},

  children_count_61_plus: {
    title: "Çocuk Sayısı",
    description: "Sahip olduğunuz çocuk sayısını belirtiniz.",
    options: [
      ["Çocuğum yok.", 0, "travel_companion_check_18_28"],
      ["1 çocuk sahibiyim.", 5, "travel_companion_check_18_28"],
      ["2 veya daha fazla çocuğum var.", 10, "travel_companion_check_18_28"],
    ],
  },
travel_companion_check_61_plus: {
    title: "Seyahat Eşlikçisi",
    description:
      "Peki, Amerika seyahatinizi kiminle gerçekleştirmeyi planlıyorsunuz?",
    options: [
      ["Yalnız başıma seyahat edeceğim.", -4, "travel_friend_visa_61_plus"],
      ["Bir arkadaşımla veya arkadaş grubumla.", 5, "travel_friend_visa_61_plus"],
      ["Okul veya iş sebebiyle bir ekip/heyet ile birlikte.", 5, "travel_school_visa_61_plus"],
      ["Eşimle veya sevgilimle.", 3, "travel_friend_visa_61_plus"],
      ["Ailecek çocuklar dahil.", 3, "travel_family_visa_61_plus"],
    ],
  },

travel_school_visa_61_plus: {
    title: "Seyahat Eşlikçisi Vize Durumu",
    description:
      "Seyahat edeceğiniz grubun ABD vizesi var mı?",
    options: [
      ["Hepsinin var.", 2, "job_status_61_plus"],
      ["Bazılarının var.", 0, "job_status_61_plus"],
      ["Hiçbirinin yok.", -3, "job_status_61_plus"],
    ],
  },
travel_friend_visa_61_plus: {
    title: "Seyahat Eşlikçisi Vize Durumu",
    description:
      "Seyahat arkadaşınızın ABD vizesi var mı?",
    options: [
      ["Evet, vizesi var.", 0, "job_status_61_plus"],
      ["Hayır, vizesi yok.", -3, "job_status_61_plus"],
    ],
  },
travel_family_visa_61_plus: {
    title: "Seyahat Eşlikçisi Vize Durumu",
    description:
      "Seyahat edeceğiniz aile bireylerinizin ABD vizesi var mı?",
    options: [
      ["Evet, vizesi var.", 2, "job_status_61_plus"],
      ["Hayır, vizesi yok.", -3, "job_status_61_plus"],
    ],
  },
  job_status_61_plus: {
    title: "Meslek Durumu",
    description:
      "Mevcut çalışma durumunuzu en iyi ifade eden seçenek hangisidir?",
    options: [
      ["Kamu çalışanıyım (Memur, Akademisyen vb.)", 10, "work_time_61_plus"],
      ["Özel sektörde çalışanım (SGK'lı).", 5, "work_time_61_plus"],
      ["İşverenim / Şirket Sahibiyim.", 10, "work_time_61_plus"],
      ["Öğrenciyim.", 2, "school_check_61_plus"],
      ["Emekliyim.", 8, "monthly_income_61_plus"],
      ["Çalışmıyorum / Ev hanımıyım.", -5, "monthly_income_61_plus"],
      ["Freelance(Yazılımcı, Tasarımcı,İç Mimar vb.)", -10, "work_time_61_plus"]
    ],
  },
  school_check_61_plus:{
 title: "Öğrencilik Durumu",
    description: "Öğrencilik durumunuzu belirtiniz.",
    options: [
      // ["Lise", 5, "parents_visa",{gender:"female"}],
      ["Ön Lisans/Lisans", -10, "monthly_income_61_plus"],
      ["Yüksek Lisans", -3, "monthly_income_61_plus"],

    ], 
},

  work_time_61_plus: {
    title: "Çalışma Süresi",
    description: "Şu anki işinizde ne kadar süredir çalışıyorsunuz?",
    options: [
      ["0-6 AY", -15, "monthly_income_61_plus"],
      ["6-12 AY", -10, "monthly_income_61_plus"],
      ["1-2 YIL", 0, "monthly_income_61_plus"],
      ["2-4 YIL", 10, "monthly_income_61_plus"],
      ["4 YIL ve üzeri", 12, "monthly_income_61_plus"],

    ],
  },
  monthly_income_61_plus: {
    title: "Aylık Geliriniz",
   
    options: [
      ["0-50000TL", -5, "us_contact_61_plus"],
 ["500001-100000TL", 3, "us_contact_61_plus"],
 ["100001-150000TL", 4, "us_contact_61_plus"],

  ["150001TL ve üzeri", 5, "us_contact_61_plus"],
    ]  
},

  us_contact_61_plus: {
    title: "Amerika'daki Tanıdıklar",
    description:
      "Amerika Birleşik Devletleri'nde yaşayan birinci derece akrabanız veya yakın tanıdığınız var mı?",
    options: [
      ["Evet, birinci derece akrabam var.", -10, "us_contact_status_61_plus"],
      ["Evet, uzak akrabam veya arkadaşlarım var.", -5, "us_contact_status_61_plus"],
      ["Hayır, Amerika'da kimsem yok.", 0, "travel_western_visas_61_plus"],
    ],
  },

  us_contact_status_61_plus: {
    title: "Tanıdığınızın Statüsü",
    description:
      "Amerika'daki tanıdığınızın oradaki yasal statüsü nedir?",
    options: [
      ["ABD Vatandaşı.", 5, "us_contact_visit_61_plus"],
      ["Green Card (Yeşil Kart) Sahibi.", 2, "us_contact_visit_61_plus"],
      ["Öğrenci veya Geçici Çalışma Vizesi ile orada.", -10, "us_contact_visit_61_plus"],
      ["İltica/Yasa dışı yollardan geçmiş", -30, "us_contact_visit_61_plus"],

    ],
  },

  us_contact_visit_61_plus: {
    title: "Türkiye Ziyareti",
    description:
      "Bu kişi en son ne zaman Türkiye'ye ziyarete geldi?",
    options: [
      ["Son 1 yıl içerisinde geldi.", 5, "travel_western_visas_61_plus"],
      ["1 - 3 yıl arasında geldi.", -5, "travel_western_visas_61_plus"],
      ["3 yıldan daha uzun süredir gelmedi veya hiç gelmedi.", -15, "travel_western_visas_61_plus"],
    ],
  },

  travel_western_visas_61_plus: {
    title: "Son 5 Yıldaki Batı Vizeleri",
    description:
      "Son 5 yılda, Amerika (Work and Travel hariç), İngiltere, Kanada, Avustralya ve Yeni Zelanda’dan vize aldınız mı?",
    options: [
      ["Birden fazla", 20, "travel_visa_labels_61_plus"],
      ["1 tane", 8, "travel_visa_labels_61_plus"],
      ["Hiç yok", 0, "travel_visa_labels_61_plus"],
    ],
  },

  travel_visa_labels_61_plus: {
    title: "Pasaporttaki Schengen Vize Etiketi Sayısı",
    description:
      "Yunanistan kapıda vize dahil.",
    options: [
      ["Hiç yok", -10, "russia_china_visit_61_plus"],
      ["1 tane", 3, "schengen_russia_china_visit_61_plus"],
      ["2 tane", 8, "schengen_russia_china_visit_61_plus"],
      ["3 tane veya daha fazla", 15, "schengen_russia_china_visit_61_plus"],
      
    ],
  },

schengen_russia_china_visit_61_plus: {
    title: "Rusya,Çin,İran,Irak,Libya ve Belarus Seyahatleri",
    description:
      "Son 5 yılda Rusya,Çin,İran,Irak,Libya ve Belarus bu ülkelere seyahat ettiniz mi?",
    options: [
      ["Evet", -10, "russia_china_visit_info_61_plus"],
      ["Hayır", 0, "travel_other_countries_61_plus"],
     
      
    ],
  },
  russia_china_visit_61_plus: {
    title: "Rusya,Çin,İran,Irak,Libya ve Belarus Seyahatleri",
    description:
      "Son 5 yılda Rusya,Çin,İran,Irak,Libya ve Belarus bu ülkelere seyahat ettiniz mi?",
    options: [
      ["Evet", -15, "russia_china_visit_info_61_plus"],
      ["Hayır", 0, "travel_other_countries_61_plus"],
     
      
    ],
  },

  russia_china_visit_info_61_plus: {
    title: "Rusya,Çin,İran,Irak,Libya ve Belarus Seyahatleri Gidiş Sebebi",
    description:
      "Rusya,Çin,İran,Irak,Libya ve Belarus bu ülkelere seyahat ettiyseniz sebebi nedir?",
    options: [
      ["İş Seyahati", 10, "travel_other_countries_61_plus"],
      ["Turistik Gezi", 3, "travel_other_countries_61_plus"],
      ["Diğer", 0, "travel_other_countries_61_plus"],

     
      
    ],
  },



  travel_other_countries_61_plus: {
    title: "Diğer Ülke Seyahatleri",
    description:
      "Japonya,Güney Kore,Singapur,Tayland,Birleşik Arap Emirlikleri,Güney Afrika bu ülkelere son 5 yılda seyahat ettiniz mi?",
    options: [
      ["Birden fazla", 8, "us_refusal_61_plus"],
      ["Bir tane", 2, "us_refusal_61_plus"],
      ["Hayır", 0, "us_refusal_61_plus"],
    ],
  },

  us_refusal_61_plus: {
    title: "ABD Vize Geçmişi",
    description:
      "Daha önce Amerika vizesi başvurunuzdan ret aldınız mı?",
    options: [
      ["Evet, aldım.", -10, "us_refusal_time_61_plus"],
      ["Hayır, almadım.", 0, "canada_refusal_61_plus"],
    ],
  },

  us_refusal_time_61_plus: {
    title: "ABD Ret Zamanı",
    description: "En son ret cevabını ne zaman aldınız?",
    options: [
      ["6 aydan daha yakın bir sürede.", -10, "us_refusal_count_61_plus"],
      ["6 ay - 1 yıl arasında.", -5, "us_refusal_count_61_plus"],
      ["1 - 2 yıl arasında.", -2, "us_refusal_count_61_plus"],
      ["2 yıldan daha uzun süre önce.", 0, "us_refusal_count_61_plus"],
    ],
  },

  us_refusal_count_61_plus: {
    title: "ABD Ret Sayısı",
    description: "Toplamda kaç kez ret aldınız?",
    options: [
      ["Sadece 1 kez.", 0, "canada_refusal_61_plus"],
      ["2 kez.", -2, "canada_refusal_61_plus"],
      ["3 veya daha fazla kez.", -5, "canada_refusal_61_plus"],
    ],
  },

  canada_refusal_61_plus: {
    title: "Kanada Vize Geçmişi",
    description:
      "Son üç yılda Kanada'dan vize reddi aldınız mı?",
    options: [
      ["Evet, aldım.", -15, "english_interwiew_61_plus"],
      ["Hayır, almadım.", 0, "english_interwiew_61_plus"],
    ],
  },
   english_interwiew_61_plus:{
 title: "İngilizce mülakat yapabilir misiniz?",
  
    options: [
      ["Evet", 5, "finish_screen"],
      ["Hayır", 0, "finish_screen"],
 

    
    ], },
FINISH_SCREEN: "finish_screen",
  CALCULATE_FINAL: "calculate_final",
  flow_router: {
  hidden: true
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
      setOpen(true);
      router.replace("/amerika-vizesi", { scroll: false });
    }
  }, [searchParams]);
  useEffect(() => {
    if (!open) {
      setStep(0);
      setScore(0);
      setUser({ name: "", email: "",phoneNumber:"" });
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
        key:"B1/B2-Amerika-Vize-Testi"
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
    <div className="fixed inset-0 z-999 bg-black/40 backdrop-blur-sm flex justify-center px-4 pt-6 pb-10">
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
              onClick={() => setOpen(false)}
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
          {/* {step === 0 && (
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-extrabold">
            Amerika Vize Analizi
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

              <input
                placeholder="Telefon Numarası"
  className="w-full p-4 border rounded-xl"
  value={user.phoneNumber}
  onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}

              />
               {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber}
                </p>
              )}
              <button
                onClick={() => validateStart() && setStep(1)}
                className="w-full bg-black text-white py-4 rounded-xl font-bold"
              >
                Analize Başla
              </button>
            </div>
          )} */}
{step === 0 && (
  <div className="space-y-6">
    {/* Header */}
    <div className="text-center space-y-3">
     
      
      <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
        Amerika B1/B2 Vize Analizi
      </h2>
      
      <p className="text-lg text-gray-600 max-w-md mx-auto">
        4 dakikada Amerika vize hazırlık skorunuzu öğrenin.
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
