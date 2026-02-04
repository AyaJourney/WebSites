import React from 'react'
import UKVisaPage from './Ingiltere'
export const metadata = {
  title: "İngiltere Vizesi Danışmanlığı | Ankara & İstanbul | AYA Journey",
  description: "İngiltere turist vizesi, ticari vize ve aile ziyareti vizelerinde profesyonel dosya hazırlığı. TLScontact randevu takibi ve yüksek onay oranlı danışmanlık.",
  keywords: [
    "İngiltere vizesi",
    "İngiltere vize danışmanlığı",
    "UK Standard Visitor Visa",
    "İngiltere vize randevusu",
    "TLScontact randevu",
    "İngiltere vize danışmanlığı Ankara",
    "İngiltere vize danışmanlığı İstanbul",
    "İngiltere vize reddi itiraz",
    "6 aylık İngiltere vizesi",
    "İngiltere yerleşim vizesi"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/ingiltere-vizesi",
  },
  openGraph: {
    title: "İngiltere Vizesi Uzman Danışmanlık | AYA Journey",
    description: "İngiltere vizesinde finansal dökümler ve niyet mektubu başarının anahtarıdır. Profesyonel destekle riskleri minimize edin.",
    url: "https://www.ayajourney.com/ingiltere-vizesi",
    siteName: "AYA Journey",
    images: [
      {
        url: "https://www.ayajourney.com/images/aya_logo_svg.svg",
        width: 1200,
        height: 630,
        alt: "İngiltere Vizesi Danışmanlık AYA Journey",
      },
    ],
    locale: "tr_TR",
    type: "website",
  }
};
const page = () => {
  return (
 <UKVisaPage/>
  )
}

export default page
