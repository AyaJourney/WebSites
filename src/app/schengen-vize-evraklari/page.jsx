import React from 'react'
import SchengenVizeEvraklariPage from './SchengenVizeEvraklar'
export const metadata = {
  title: "Schengen Vize Evrakları | Güncel ve Eksiksiz Liste",
  description:
    "Schengen vizesi başvurusu için gerekli evraklar nelerdir? Güncel belge listesi, başvuru süreci ve dikkat edilmesi gerekenler bu sayfada.",
  keywords: [
    "Schengen vize evrakları",
    "Schengen vizesi gerekli belgeler",
    "Schengen vize başvurusu",
    "Schengen vize dosyası",
    "Avrupa vizesi evrakları",
  ],
  alternates: {
    canonical: "https://ayajourney.com/schengen-vize-evraklari",
  },
  openGraph: {
    title: "Schengen Vize Evrakları | Güncel ve Eksiksiz Liste",
    description:
      "Schengen vizesi için gerekli evrakların güncel listesi ve başvuru rehberi.",
    url: "https://ayajourney.com/schengen-vize-evraklari",
    type: "website",
    locale: "tr_TR",
    siteName: "Aya Journey",
   
  },
  twitter: {
    card: "summary_large_image",
    title: "Schengen Vize Evrakları | Güncel ve Eksiksiz Liste",
    description:
      "Schengen vizesi başvurusu için gerekli evrakların güncel listesi.",
  
  },
  robots: {
    index: true,
    follow: true,
  },
};
const page = () => {
  return (
    <div>
      <SchengenVizeEvraklariPage/>
    </div>
  )
}

export default page
