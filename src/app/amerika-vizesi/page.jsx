import USVisaClient from "./USVisaClient";

export const metadata = {
  title:"Amerika Vizesi Danışmanlığı | Ankara & İstanbul | AYA Journey",
  description:
"Amerika vizesi başvurusu, B1/B2 turist vizesi, J1 ve F1 öğrenci vizeleri için profesyonel danışmanlık. Ankara ve İstanbul ofislerimizde birebir mülakat hazırlığı.",
keywords: [
  "Amerika vizesi",
  "ABD vizesi danışmanlığı",
  "Amerika turist vizesi",
  "B1 B2 Amerika vizesi",
  "ABD vize mülakatı hazırlığı",
  "Amerika vize danışmanlığı Ankara",
  "Amerika vize danışmanlığı İstanbul",
  "10 yıllık Amerika vizesi",
  "DS-160 formu",
  "J1 vizesi danışmanlığı",
  "F1 öğrenci vizesi",
  "Amerika çalışma ve seyahat vizesi"
],
  alternates: {
    canonical: "https://www.ayajourney.com/amerika-vizesi",
  },
  openGraph: {
   title: "Amerika Vizesi Danışmanlığı | AYA Journey",
  description:
    "ABD vizesi mülakat odaklıdır. AYA Journey ile birebir hazırlık, doğru strateji ve profesyonel danışmanlık.",
    url: "https://www.ayajourney.com/amerika-vizesi",
    siteName: "AYA Journey",
    metadataBase: new URL("https://www.ayajourney.com"),
    images: [
      {
        url: "https://www.ayajourney.com/images/visaamericaexam.jpg",
        width: 1200,
        height: 630,
        alt: "Amerika Vizesi AYA Journey",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
  <>
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Amerika vizesi almak zor mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amerika vizesi almak iyi doldurulmuş bir DS-160 formu ve doğru bir mülakat hazırlığı ile zor değildir. Ancak yapılacak basit hatalar vize reddine yol açabilir. Bu nedenle sürecin dikkatli ve bilinçli şekilde yürütülmesi önemlidir."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika turist vizesi kaç yıl geçerli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Türk vatandaşları için Amerika turist vizesi (B1/B2) standart olarak 10 yıl geçerli verilmektedir. Ancak bazı durumlarda 1 yıl veya daha kısa süreli vizeler de düzenlenebilmektedir."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesi mülakatı Türkçe mi yapılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amerika vizesi mülakat dili başvurulan vize türüne göre değişir. Turistik vizelerde Türkçe mülakat yapılabilirken, F1, J1 gibi öğrenci ve staj vizelerinde genellikle İngilizce mülakat beklenir."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesi için banka hesabında ne kadar para olmalı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amerika vizesi için banka hesabında, planlanan seyahat süresini karşılayabilecek yeterli bakiye bulunmalıdır. Banka dökümü sunmak zorunlu değildir ancak istenmesi halinde maddi yeterliliğin ispat edilmesi beklenir."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesi mülakatında ne sorulur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mülakatta Amerika’ya gidiş amacınız, işiniz, geliriniz, medeni durumunuz, daha önce yurt dışına çıkıp çıkmadığınız ve Amerika’da tanıdığınız olup olmadığı gibi sorular sorulabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesi reddi neden olur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amerika vizesi reddi genellikle 214(b) maddesi kapsamında göçmenlik şüphesi nedeniyle verilir. Boş pasaport, zayıf ekonomik durum, iş ve sosyal bağların yetersiz görülmesi ret sebepleri arasındadır."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesi reddinden sonra tekrar başvuru yapılabilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, Amerika vizesi reddinden sonra tekrar başvuru yapılabilir. Ancak aynı koşullarla yeniden başvurmak farklı bir sonuç doğurmayabilir; anlamlı değişikliklerden sonra başvurmak daha sağlıklıdır."
          }
        },
        {
          "@type": "Question",
          "name": "DS-160 formu nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DS-160 formu, göçmen olmayan Amerika vizesi başvurularında doldurulması zorunlu olan online başvuru formudur. İngilizce doldurulur ve elektronik olarak imzalanır."
          }
        },
        {
          "@type": "Question",
          "name": "DS-160 formu yanlış doldurulursa ne olur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DS-160 formu imzalandıktan sonra değiştirilemez. Hata fark edilirse yeni bir form doldurulabilir. Randevu alınmışsa, yeni form numarasıyla randevunun da yenilenmesi gerekir."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesi randevusu ne kadar sürede bulunur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amerika vizesi randevuları İstanbul ve Ankara’da yapılır. Turist vize randevuları genellikle 6 ay içinde bulunabilmektedir; acil durumlar için daha erken randevu imkanları da olabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesi için sponsor gerekli mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amerika vizesi için sponsor zorunlu değildir. Ancak ekonomik yeterliliği olmayan başvurular sponsorlu olarak yapılabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesiyle kaç ay kalınabilir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amerika vizesiyle bir yıl içinde en fazla 6 ay kalınabilir. Uzun süreli kalışlar göçmenlik şüphesi oluşturabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesi başvurusu online mı yapılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amerika vizesi başvurusu ustraveldocs sistemi üzerinden online olarak yapılır. DS-160 formu online doldurulur ve randevu alınır."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesi garantili mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. Amerika vizesi dahil hiçbir vize başvurusu %100 garantili değildir. Nihai karar konsolosluk memuruna aittir."
          }
        }
      ]
    })
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Amerika vizesi uzatılabilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amerika vizesi, vize bitiş tarihinden itibaren 12 ay içinde başvurulması şartıyla mülakatsız olarak yenilenebilir. Çocuk yaşta alınan vizeler bu kapsama girmez."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesi ile çalışabilir miyim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amerika turist vizesi ile çalışılamaz. Ancak iş görüşmeleri, toplantılar ve pazar araştırmaları yapılabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesi reddi pasaporta işlenir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amerika vizesi reddi pasaporta fiziksel olarak işlenmez ancak konsolosluk kayıtlarında görünür."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesi reddi sicile işler mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amerika vizesi reddi özel bir sicile işlemez. Ancak konsolosluk kayıtlarında yer alır ve sonraki başvurularda görülebilir."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesi ilk başvuruda çıkar mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Amerika vizesi ilk başvuruda da alınabilir. Başvurunun kaçıncı kez yapıldığı değil, başvuru sahibinin profili önemlidir."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesi mülakatı kaç dakika sürer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amerika vize mülakatı genellikle birkaç dakika sürer. Ancak konsolosluk memuru gerekli görürse mülakat süresini uzatabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesi mülakatında ne giymeli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mülakata temiz, bakımlı ve şık bir şekilde gitmek yeterlidir. Özel bir kıyafet zorunluluğu yoktur."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesi iptal edilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Amerika vizesi vize ihlali, amacı dışında kullanım veya yanlış beyan gibi durumlarda konsolosluk tarafından iptal edilebilir."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesi alındıktan sonra reddedilebilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Mülakat sonrası yapılan ek incelemeler sonucunda vize reddedilebilir. Ayrıca vize almak Amerika’ya giriş garantisi değildir."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vizesi çocuklar için nasıl alınır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amerika vizesi çocuklar için de bireysel olarak alınır ve mülakata anne veya babadan biri ile birlikte girilir."
          }
        }
      ]
    })
  }}
/>

   <USVisaClient />
  </>
  
 );
}
