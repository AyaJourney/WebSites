// src/app/blog/page.jsx
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Blog | AYA Journey",
  description:
    "Vize, yurt dışı eğitim ve seyahat süreçleriyle ilgili güncel rehberler ve ipuçları. En yeni yazılar burada.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | AYA Journey",
    description:
      "Vize, yurt dışı eğitim ve seyahat süreçleriyle ilgili güncel rehberler ve ipuçları.",
    url: "/blog",
    siteName: "AYA Journey",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  // Normalde bunu CMS’ten / DB’den çekersin.
  // Şimdilik statik demo data:
  const posts = [
    {
      slug: "amerika-vizesi-mulakat-hatalari",
      category: "Amerika Vizesi",
      title: "Amerika Vizesi Mülakatında En Sık Yapılan 7 Hata",
      excerpt:
        "ABD vize mülakatlarında yapılan kritik hatalar ve başvurunuzun reddedilmesine yol açabilecek detaylar...",
      image: "/images/1.webp",
      dateISO: "2025-12-10",
      featured: true,
    },
    {
      slug: "schengen-banka-hesabi",
      category: "Schengen",
      title: "Schengen Vizesi İçin Banka Hesabı Nasıl Olmalı?",
      excerpt:
        "Schengen vizesinde banka hesabı değerlendirmesi nasıl yapılır, kaç aylık olmalı, bakiyede nelere dikkat edilir?",
      image: "/images/1.webp",
      dateISO: "2025-12-05",
      featured: false,
    },
    {
      slug: "ingiltere-vize-retleri",
      category: "İngiltere",
      title: "İngiltere Vizesi Ret Nedenleri Nelerdir?",
      excerpt:
        "İngiltere vizesinde en sık karşılaşılan ret sebeplerini, nasıl önleyebileceğinizi derledik.",
      image: "/images/1.webp",
      dateISO: "2025-11-28",
      featured: false,
    },
    {
      slug: "kanada-vize-basvuru-ipuclari",
      category: "Kanada",
      title: "Kanada Vizesi Başvurusu: 10 Pratik İpucu",
      excerpt:
        "Kanada vizesinde profilinizi güçlendirecek, dosyanızı daha net anlatacak 10 pratik adım.",
      image: "/images/1.webp",
      dateISO: "2025-11-20",
      featured: false,
    },
    {
      slug: "yurtdisi-egitim-hazirlik",
      category: "Yurt Dışı Eğitim",
      title: "Yurt Dışı Eğitim İçin Hazırlık Listesi",
      excerpt:
        "Başvurudan vize sürecine kadar eğitim planınızı hızlandıracak kontrol listesi.",
      image: "/images/1.webp",
      dateISO: "2025-11-12",
      featured: false,
    },
  ];

  const categories = [
    "Tümü",
    "Amerika Vizesi",
    "Schengen",
    "İngiltere",
    "Kanada",
    "Yurt Dışı Eğitim",
  ];

  // Schema.org (CollectionPage)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AYA Journey Blog",
    description: metadata.description,
    url: "https://ayajourney.com/blog",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient posts={posts} categories={categories} />
    </>
  );
}
