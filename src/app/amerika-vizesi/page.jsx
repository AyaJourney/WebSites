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
  return <USVisaClient />;
}
