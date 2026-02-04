import React from 'react'
import SchengenPage from './schengen'
export const metadata = {
  title: "Schengen Vize Danışmanlığı | Ankara & İstanbul | AYA Journey",
  description: "Schengen vize randevusu bulamıyor musunuz? iData, VFS Global ve AS Travel süreçlerinde profesyonel randevu takibi ve yüksek onaylı dosya hazırlığı.",
  keywords: [
    "Schengen vizesi",
    "Schengen vize danışmanlığı",
    "Schengen vize randevusu",
    "vize reddi itirazı",
    "iData randevu takibi",
    "VFS Global randevu alma",
    "Ankara Schengen vizesi",
    "İstanbul Schengen vizesi",
    "Almanya vize danışmanlığı",
    "Fransa vize randevusu"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/schengen-vizesi",
  },
  openGraph: {
    title: "Schengen Vizenizi Şansa Bırakmayın | AYA Journey",
    description: "Avrupa seyahatleriniz için hızlı randevu ve kusursuz dosya hazırlığı. AYA Journey uzmanlığı ile vize sürecinizi kolaylaştırın.",
    url: "https://www.ayajourney.com/schengen-vizesi",
    siteName: "AYA Journey",
    images: [
      {
        url: "https://www.ayajourney.com/images/aya_logo_svg.svg",
        width: 1200,
        height: 630,
        alt: "Schengen Vizesi Danışmanlığı AYA Journey",
      },
    ],
    locale: "tr_TR",
    type: "website",
  }
};
const page = () => {
  return (
    <div>
      <SchengenPage/>
    </div>
  )
}

export default page
