import IletisimClient from "./IletisimClient";

export const metadata = {
  title: "İletişim | Aya Journey",
  description:
    "Aya Journey ile iletişime geçin. Vize danışmanlığı, seyahat planlaması ve tüm sorularınız için bize hızlıca ulaşın.",
  keywords: [
    "Aya Journey iletişim",
    "vize danışmanlığı iletişim",
    "seyahat danışmanlığı iletişim",
    "Aya Journey telefon",
    "Aya Journey adres",
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/iletisim",
  },
  openGraph: {
    title: "İletişim | Aya Journey",
    description:
      "Aya Journey ile iletişime geçin. Vize ve seyahat danışmanlığı hakkında destek almak için bize ulaşın.",
    url: "https://www.ayajourney.com/iletisim",
    type: "website",
    locale: "tr_TR",
    siteName: "Aya Journey",
   
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function IletisimPage() {
  return <IletisimClient />;
}