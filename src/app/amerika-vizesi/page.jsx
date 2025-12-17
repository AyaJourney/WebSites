import USVisaClient from "./USVisaClient";

export const metadata = {
  title: "Amerika Vizesi | ABD Turist Vizesi Rehberi (B1/B2) – AYA Journey",
  description:
    "Amerika vizesi başvuru süreci, 10 yıllık ABD turist vizesi, mülakat hazırlığı ve AYA Journey danışmanlık süreci. Evraktan değil, görüşmeden kazanılan vize.",
  keywords: [
    "Amerika vizesi",
    "ABD vizesi",
    "Amerika turist vizesi",
    "B1 B2 vizesi",
    "ABD vize mülakatı",
    "Amerika vize danışmanlığı",
    "10 yıllık Amerika vizesi",
    "DS-160",
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/amerika-vizesi",
  },
  openGraph: {
    title: "Amerika Vizesi | AYA Journey Profesyonel Danışmanlık",
    description:
      "ABD vizesi mülakat odaklıdır. AYA Journey ile profesyonel yol haritası ve birebir hazırlık.",
    url: "https://www.ayajourney.com/amerika-vizesi",
    siteName: "AYA Journey",
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
