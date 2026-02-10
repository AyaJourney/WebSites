import React from 'react'
import AyaJourneyYorumlari from './Yorumlar'
export const metadata = {
  title: "Aya Journey Yorumları | Gerçek Müşteri Deneyimleri",
  description:
    "Aya Journey vize danışmanlığı hizmeti alan müşterilerimizin gerçek yorumlarını ve değerlendirmelerini inceleyin. Google yorumları, deneyimler ve memnuniyetler burada.",
  keywords: [
    "aya journey yorumları",
    "aya journey değerlendirme",
    "aya journey müşteri yorumları",
    "aya journey güvenilir mi",
    "vize danışmanlığı yorumları",
  ],
  alternates: {
    canonical: "https://ayajourney.com/aya-journey-yorumlari",
  },
  openGraph: {
    title: "Aya Journey Yorumları | Gerçek Müşteri Deneyimleri",
    description:
      "Aya Journey vize danışmanlığı hizmeti alan müşterilerin gerçek yorum ve değerlendirmeleri.",
    url: "https://ayajourney.com/aya-journey-yorumlari",
    type: "website",
    locale: "tr_TR",
    siteName: "Aya Journey",
  },
 
  robots: {
    index: true,
    follow: true,
  },
};
const page = () => {
  return (
    <div>
      <AyaJourneyYorumlari/>
    </div>
  )
}

export default page
