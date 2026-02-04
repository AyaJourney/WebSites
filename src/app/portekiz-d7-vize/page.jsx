import React from 'react'
import Portekiz from './portekiz'
export const metadata = {
  title: "Portekiz D7 Vizesi Danışmanlığı | Pasif Gelirle Oturum | AYA Journey",
  description: "Portekiz'de yaşamın kapılarını D7 vizesi ile açın. NIF alımı, banka hesabı ve pasif gelir analizi ile profesyonel oturum izni danışmanlığı.",
  keywords: [
    "Portekiz D7 vizesi",
    "Portekiz oturum izni",
    "pasif gelir vizesi Portekiz",
    "Portekiz NIF numarası alımı",
    "Portekiz banka hesabı açılışı",
    "D7 vizesi danışmanlığı İstanbul",
    "Portekiz emekli vizesi",
    "Portekiz uzaktan çalışma vizesi",
    "Portekiz kira geliri vizesi",
    "Portekiz vatandaşlık yolu"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/portekiz-d7-vize",
  },
  openGraph: {
    title: "Portekiz D7 Vizesi ile Avrupa'da Yaşam | AYA Journey",
    description: "Emekli maaşı, kira geliri veya uzaktan çalışma gelirinizle Portekiz'de yasal oturum hakkı kazanın. AYA Journey uzmanlığı ile tanışın.",
    url: "https://www.ayajourney.com/portekiz-d7-vize",
    siteName: "AYA Journey",
    images: [
      {
        url: "https://www.ayajourney.com/images/aya_logo_svg.svg",
        width: 1200,
        height: 630,
        alt: "Portekiz D7 Vizesi Danışmanlığı",
      },
    ],
    locale: "tr_TR",
    type: "website",
  }
};
const page = () => {
  return (
    <div>
      <Portekiz/>
    </div>
  )
}

export default page
