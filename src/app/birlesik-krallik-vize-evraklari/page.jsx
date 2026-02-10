import React from 'react'
import BirlesikKrallikVizeEvraklariPage from './BirlesikKrallikEvrak'
export const metadata = {
  title: "Birleşik Krallık Vize Evrakları | İngiltere Vize Başvurusu Rehberi",
  description:
    "Birleşik Krallık (İngiltere) vizesi için gerekli evraklar nelerdir? Güncel belge listesi, başvuru süreci ve dikkat edilmesi gerekenler bu rehberde.",
  keywords: [
    "Birleşik Krallık vize evrakları",
    "İngiltere vizesi gerekli belgeler",
    "UK vize başvurusu",
    "İngiltere vize dosyası",
    "İngiltere turist vizesi evrakları",
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/birlesik-krallik-vize-evraklari",
  },
  openGraph: {
    title: "Birleşik Krallık Vize Evrakları | İngiltere Vize Başvurusu Rehberi",
    description:
      "İngiltere vizesi için gerekli evrakların güncel listesi ve başvuru sürecine dair rehber.",
    url: "https://www.ayajourney.com/birlesik-krallik-vize-evraklari",
    type: "website",
    locale: "tr_TR",
    siteName: "AyaJourney",
    
    
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
const page = () => {
  return (
    <div>
      <BirlesikKrallikVizeEvraklariPage/>
    </div>
  )
}

export default page
