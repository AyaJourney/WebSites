// app/vize-sirketleri-ankara/page.jsx
import Link from "next/link";
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
    <>
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
    
<main className="min-h-screen bg-zinc-50">

  {/* HERO */}
  <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-14 pb-10">
    <div className="bg-white border border-slate-200/70 rounded-2xl shadow-sm p-7 sm:p-10">

      <p className="text-sm text-slate-500">Ankara • Profesyonel Vize Danışmanlığı</p>

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
        Vize Şirketleri Ankara
      </h1>

      <p className="text-slate-600 mt-4 leading-relaxed max-w-3xl">
        Ankara’daki vize şirketleri arasından doğru firmayı seçmek, başvurunuzun
        olumlu sonuçlanmasında kritik rol oynar. Özellikle
        <Link href="/schengen-vizesi" className="font-semibold hover:underline mx-1">
          Schengen vizesi
        </Link>,
        <Link href="/amerika-vizesi" className="font-semibold hover:underline mx-1">
          Amerika vizesi
        </Link>
        ve
        <Link href="/ingiltere-vizesi" className="font-semibold hover:underline mx-1">
          İngiltere vizesi
        </Link>
        başvurularında uzman destek ret riskini azaltır.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mt-6">
        Ankara’da Vize Şirketi Seçerken Nelere Dikkat Edilmeli?
      </h2>

      <p className="text-slate-600 mt-2 max-w-3xl">
        Firmanın güncel konsolosluk prosedürlerine hâkim olması,
        <Link href="/vize-reddi-gercek-nedenler" className="font-semibold hover:underline mx-1">
          vize reddi nedenlerini
        </Link>
        iyi analiz edebilmesi ve şeffaf çalışması önemlidir.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link
          href="/randevu"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
        >
          Randevu Oluştur
        </Link>
        <Link
          href="/iletisim"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 transition"
        >
          İletişime Geç
        </Link>
      </div>
    </div>
  </section>

  {/* CONTENT */}
  <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-12">
    <div className="bg-white border border-slate-200/70 rounded-2xl shadow-sm p-7 sm:p-10 space-y-10">

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Güvenilir Bir Ankara Vize Şirketi Nasıl Anlaşılır?
        </h2>

        <ul className="list-disc list-inside text-slate-600 mt-4 space-y-2">
          <li>Gerçek müşteri yorumları ve doğrulanabilir referanslar</li>
          <li>Ülke bazlı uzmanlaşmış danışman kadrosu</li>
          <li>
            <Link href="/vize-alirken-yapilan-hatalar" className="hover:underline font-medium">
              Vize sürecinde yapılan hatalara
            </Link> hâkimiyet
          </li>
          <li>Süreç boyunca ulaşılabilir destek</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Aya Journey Ankara Vize Danışmanlığı Yaklaşımı
        </h2>

        <p className="text-slate-600 mt-3">
          Aya Journey, Ankara merkezli vize danışmanlığı hizmeti sunarak
          başvuruları kişiye özel şekilde planlar.
          <Link href="/aya-journey-yorumlari" className="font-semibold hover:underline mx-1">
            Müşteri yorumlarını
          </Link>
          inceleyebilir ve süreci şeffaf şekilde değerlendirebilirsiniz.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Ankara’daki Vize Şirketleri Hangi Vize Türlerinde Hizmet Verir?
        </h2>

        <p className="text-slate-600 mt-3">
          En sık başvuru yapılan vize türleri:
        </p>

        <ul className="list-disc list-inside text-slate-600 mt-3 space-y-2">
          <li>
            <Link href="/ankara-schengen-vizesi" className="hover:underline font-medium">
              Ankara Schengen Vizesi
            </Link>
          </li>
          <li>
            <Link href="/ankara-amerika-vizesi" className="hover:underline font-medium">
              Ankara Amerika Vizesi
            </Link>
          </li>
          <li>
            <Link href="/ingiltere-vize-danismanligi-ankara" className="hover:underline font-medium">
              Ankara İngiltere Vize Danışmanlığı
            </Link>
          </li>
          <li>
            <Link href="/vize-danismanlik-ankara" className="hover:underline font-medium">
              Ankara Vize Danışmanlığı Genel Rehberi
            </Link>
          </li>
        </ul>
      </div>

      {/* AUTHORITY BOOST */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Ankara’da En Sık Başvurulan Ülkeler
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mt-4 text-sm">
          <Link href="/almanya-vize" className="hover:underline">Almanya Vizesi →</Link>
          <Link href="/fransa-vize" className="hover:underline">Fransa Vizesi →</Link>
          <Link href="/italya-vize" className="hover:underline">İtalya Vizesi →</Link>
          <Link href="/hollanda-vize" className="hover:underline">Hollanda Vizesi →</Link>
          <Link href="/ispanya-vize" className="hover:underline">İspanya Vizesi →</Link>
          <Link href="/yunanistan-vize" className="hover:underline">Yunanistan Vizesi →</Link>
        </div>
      </div>

    </div>
  </section>

  {/* FINAL CTA */}
  <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-16">
    <div className="bg-slate-900 rounded-2xl p-7 sm:p-10 text-white">

      <h2 className="text-2xl font-bold">
        Ankara’da Güvenilir Bir Vize Şirketi Arıyorsanız
      </h2>

      <p className="text-slate-300 mt-3 max-w-2xl">
        Başvurunuzu profesyonel şekilde planlamak ve
        <Link href="/vize-reddi-durumunda-ne-yapilmali" className="font-semibold hover:underline mx-1 text-white">
          ret riskini minimize etmek
        </Link>
        için uzman ekibimizle iletişime geçebilirsiniz.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link
          href="/randevu"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white text-slate-900 hover:bg-slate-100 transition"
        >
          Hemen Randevu Al
        </Link>

        <Link
          href="/iletisim"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-white/40 hover:bg-white/10 transition"
        >
          Sorunuzu İletin
        </Link>
      </div>

    </div>
  </section>

</main>

    
    
    </>
  
  );
}
