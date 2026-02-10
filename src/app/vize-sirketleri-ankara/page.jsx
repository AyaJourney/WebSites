// app/vize-sirketleri-ankara/page.jsx
import React from "react";

export const metadata = {
  title: "Vize Şirketleri Ankara | Doğru Vize Firması Nasıl Seçilir?",
  description:
    "Ankara’daki vize şirketleri arasından doğru firmayı seçmek için nelere dikkat etmelisiniz? Güvenilir vize danışmanlığı rehberi ve profesyonel destek.",
  keywords: [
    "vize şirketleri ankara",
    "ankara vize firmaları",
    "ankara vize danışmanlığı",
    "güvenilir vize şirketi",
    "ankara vize başvuru firması",
  ],
  alternates: {
    canonical: "/vize-sirketleri-ankara",
  },
  openGraph: {
    title: "Vize Şirketleri Ankara | Doğru Vize Firması Nasıl Seçilir?",
    description:
      "Ankara’da vize şirketi seçerken dikkat edilmesi gerekenler ve profesyonel danışmanlık rehberi.",
    url: "/vize-sirketleri-ankara",
    type: "website",
    locale: "tr_TR",
    siteName: "Aya Journey",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vize Şirketleri Ankara",
    description:
      "Ankara’daki vize şirketleri arasından doğru seçimi yapmanıza yardımcı olacak rehber.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-14 pb-10">
        <div className="bg-white border border-slate-200/70 rounded-2xl shadow-sm p-7 sm:p-10">
          <p className="text-sm text-slate-500">Ankara • Vize Danışmanlığı</p>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            Vize Şirketleri Ankara
          </h1>

          <p className="text-slate-600 mt-4 leading-relaxed max-w-2xl">
            Ankara’daki vize şirketleri arasından doğru firmayı seçmek, başvurunun
            sağlıklı ilerlemesi için kritik öneme sahiptir. Bu sayfada vize
            firması seçerken dikkat edilmesi gerekenleri ve profesyonel
            danışmanlığın avantajlarını bulabilirsiniz.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="/randevu"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
            >
              Randevu Oluştur
            </a>
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 transition"
            >
              İletişime Geç
            </a>
          </div>
        </div>
      </section>

      {/* İçerik */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-12">
        <div className="bg-white border border-slate-200/70 rounded-2xl shadow-sm p-7 sm:p-10 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Ankara’da Vize Şirketi Seçerken Nelere Dikkat Edilmeli?
            </h2>
            <p className="text-slate-600 mt-3">
              Vize şirketi seçerken firmanın şeffaf çalışması, güncel vize
              prosedürlerine hakim olması ve başvuru sürecini doğru şekilde
              yönlendirmesi büyük önem taşır. Yanlış veya eksik bilgi, vize
              reddine yol açabilir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Güvenilir Vize Danışmanlığı Neden Önemlidir?
            </h2>
            <p className="text-slate-600 mt-3">
              Güvenilir vize danışmanlığı; evrakların eksiksiz hazırlanmasını,
              randevu sürecinin doğru planlanmasını ve başvurunun baştan sona
              kontrollü ilerlemesini sağlar. Bu da olası riskleri minimize eder.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Aya Journey Ankara Vize Danışmanlığı Yaklaşımı
            </h2>
            <p className="text-slate-600 mt-3">
              Aya Journey, Ankara merkezli vize danışmanlığı hizmeti sunarak
              başvuru sürecini şeffaf ve planlı şekilde yürütmeyi hedefler.
              Başvuru sahibinin durumuna göre kişiselleştirilmiş yol haritası
              oluşturur.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Ankara’da En Sık Başvurulan Vize Türleri
            </h2>
            <p className="text-slate-600 mt-3">
              Ankara’daki vize şirketleri aracılığıyla en sık Schengen, Amerika
              ve İngiltere vizelerine başvuru yapılmaktadır. Her vize türü farklı
              prosedür ve evrak gereksinimlerine sahiptir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-16">
        <div className="bg-slate-900 rounded-2xl p-7 sm:p-10 text-white">
          <h2 className="text-2xl font-bold">
            Ankara’da Güvenilir Vize Danışmanlığı Arıyorsanız
          </h2>
          <p className="text-slate-300 mt-3 max-w-2xl">
            Vize sürecinizi doğru planlamak ve başvurunuzu güvenle ilerletmek
            için uzman danışmanlarımızla iletişime geçebilirsiniz.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="/randevu"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white text-slate-900 hover:bg-slate-100 transition"
            >
              Hemen Randevu Al
            </a>
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-white/40 hover:bg-white/10 transition"
            >
              Sorunuzu İletin
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Ankara’da vize şirketi seçerken nelere dikkat edilmeli?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Firmanın güncel prosedürlere hakim olması, şeffaf çalışması ve süreci doğru yönlendirmesi önemlidir.",
                },
              },
              {
                "@type": "Question",
                name: "Vize şirketi ile çalışmak zorunlu mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Zorunlu değildir ancak profesyonel danışmanlık, hatalı başvuru riskini azaltmaya yardımcı olur.",
                },
              },
              {
                "@type": "Question",
                name: "Ankara vize danışmanlığı hangi ülkeleri kapsar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Schengen ülkeleri, Amerika ve İngiltere başta olmak üzere farklı ülke vizeleri için danışmanlık sunulabilir.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
