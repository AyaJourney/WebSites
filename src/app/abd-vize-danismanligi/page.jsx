import Link from "next/link";

export const metadata = {
  title:
    "ABD Vize Danışmanlığı 2026 | DS-160, 214(b) Analizi, Mülakat Hazırlığı (B1/B2, F1)",
  description:
    "Amerika vize danışmanlığı: DS-160 stratejik doldurma, 214(b) risk analizi, evrak kontrolü, mülakat simülasyonu ve ret sonrası ikinci başvuru planı. Ankara & İstanbul ofis desteği.",
  keywords: [
    "amerika vize danışmanlığı",
    "abd vize danışmanlığı",
    "amerika vize danışmanlık hizmeti",
    "ds-160 doldurma",
    "amerikan vizesi danışmanlık",
    "b1 b2 vize danışmanlığı",
    "f1 öğrenci vizesi danışmanlığı",
    "214b analizi",
    "amerika vize mülakat hazırlığı",
    "amerika vize reddi sonrası ikinci başvuru"
  ],
  alternates: {
    canonical: "https://ayajourney.com/amerika-vize-danismanligi"
  },
  openGraph: {
    title: "ABD Vize Danışmanlığı 2026 | DS-160 + 214(b) Risk Analizi",
    description:
      "Amerika vizesi başvurunuzu ikna edici dosyaya dönüştürüyoruz: DS-160, evrak kontrolü, mülakat simülasyonu ve ret sonrası plan.",
    url: "https://ayajourney.com/amerika-vize-danismanligi",
    type: "article"
  }
};

const WHATSAPP =
  "https://wa.me/905302199056?text=Amerika%20vize%20dan%C4%B1%C5%9Fmanl%C4%B1%C4%9F%C4%B1%20i%C3%A7in%20%C3%BCcretsiz%20%C3%B6n%20analiz%20almak%20istiyorum.";

export default function AmerikaVizeDanismanligi() {
  const steps = [
    {
      n: "01",
      t: "Profil & Risk Haritası",
      d: "Bağ analizi, seyahat geçmişi ve finansal tutarlılık üzerinden 214(b) risklerini netleştiririz."
    },
    {
      n: "02",
      t: "DS-160 Stratejisi",
      d: "Formu sadece doldurmayız; tutarlılık ve ikna kurgusunu başvuru amacıyla uyumlu hale getiririz."
    },
    {
      n: "03",
      t: "Evrak & Kanıt Seti",
      d: "Zorunlu evrakların yanında “kanıt gücü” yüksek dokümanları doğru sırayla kurgularız."
    },
    {
      n: "04",
      t: "Mülakat Simülasyonu",
      d: "Soru seti + cevap stratejisi + stres yönetimi: kısa, net, tutarlı cevaplar."
    },
    {
      n: "05",
      t: "Randevu & Son Kontrol",
      d: "Randevu öncesi final kontrol: DS-160, teyit sayfası, fotoğraf ve evrak çakışmaları."
    }
  ];

  const serviceCards = [
    {
      t: "B1/B2 Turistik / Ziyaret",
      d: "En kritik konu: geri dönüş bağları + finansal tutarlılık + seyahat amacı netliği."
    },
    {
      t: "F1 Öğrenci Vizesi",
      d: "Okul seçimi mantığı + eğitim planı + Türkiye bağları + finansal sürdürülebilirlik."
    },
    {
      t: "Ret Sonrası 2. Başvuru",
      d: "Aynı dosyayla tekrar başvuru = yüksek risk. Strateji ve kanıt setini yeniden kurarız."
    }
  ];

  const internalHubLinks = [
    { href: "/amerika-vize-evraklari", label: "Amerika Vize Evrakları →" },
    { href: "/amerika-vize-ucretleri", label: "Amerika Vize Ücretleri →" },
    { href: "/amerika-vize-mulakat-sorulari", label: "Mülakat Soruları →" },
    { href: "/abd-vize-randevusu-nasil-alinir", label: "ABD Vize Randevusu Alma →" },
    { href: "/amerika-vize-214b", label: "214(b) Maddesi Rehberi →" },
    { href: "/amerika-vize-reddi-dosya-analizi", label: "Ret Dosya Analizi →" }
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-slate-900">
      {/* BREADCRUMB */}
      <nav className="text-sm text-slate-500 mb-10">
        <Link href="/" className="hover:underline">
          Ana Sayfa
        </Link>{" "}
        /{" "}
        <Link href="/amerika-vizesi" className="hover:underline">
          Amerika Vizesi
        </Link>{" "}
        / ABD Vize Danışmanlığı
      </nav>

      {/* HERO */}
      <header className="text-center mb-20">
        <span className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest inline-block">
          Profesyonel ABD Vize Danışmanlığı 2026
        </span>

        <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight tracking-tight">
          ABD Vize Danışmanlığı <br />
          <span className="text-blue-600">Amerika Vize Danışmanlık Hizmeti</span>
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-8 leading-relaxed">
          <strong>Amerika vize danışmanlığı</strong> sürecinde DS-160 form doldurma,
          evrak kontrolü, mülakat simülasyonu ve{" "}
          <strong>214(b) risk analizi</strong> yapıyoruz. Hedef: başvurunuzu yalnızca
          “tam” değil, <strong>ikna edici</strong> hale getirmek.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={WHATSAPP}
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-500 transition"
          >
            WhatsApp Ücretsiz Ön Analiz
          </a>

          <Link
            href="/randevu"
            className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition"
          >
            Ofis Randevusu
          </Link>

          <Link
            href="/amerika-vize-evraklari"
            className="bg-white border border-blue-600 text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition"
          >
            Evrak Listesi
          </Link>
        </div>

        {/* QUICK TRUST STRIP */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="text-2xl font-black text-blue-600">DS-160</div>
            <div className="text-xs text-slate-500 mt-1">Tutarlılık Odaklı</div>
          </div>
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="text-2xl font-black text-blue-600">214(b)</div>
            <div className="text-xs text-slate-500 mt-1">Risk Haritalama</div>
          </div>
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="text-2xl font-black text-blue-600">Mülakat</div>
            <div className="text-xs text-slate-500 mt-1">Simülasyon + Set</div>
          </div>
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="text-2xl font-black text-blue-600">Ret Sonrası</div>
            <div className="text-xs text-slate-500 mt-1">2. Başvuru Planı</div>
          </div>
        </div>
      </header>

      {/* SERVICE TYPES */}
      <section className="mb-20">
        <h2 className="text-3xl font-black mb-10 text-center">
          Amerika Vize Danışmanlığında Hangi Başvurulara Odaklanıyoruz?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {serviceCards.map((c, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-3xl border border-slate-200 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-3">{c.t}</h3>
              <p className="text-slate-600 leading-relaxed">{c.d}</p>
              <div className="mt-6 text-sm font-semibold text-blue-700">
                <Link href="/amerika-vizesi" className="hover:underline">
                  Amerika Vizesi Genel Rehber →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mb-24">
        <h2 className="text-3xl font-black mb-12 text-center">
          Amerika Vizesi Nasıl Alınır? Biz Nasıl Yönetiyoruz?
        </h2>

        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative"
            >
              <div className="text-4xl font-black text-blue-200 absolute top-4 right-4">
                {s.n}
              </div>
              <h3 className="font-bold text-slate-900 mt-6">{s.t}</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/abd-vize-randevusu-nasil-alinir"
            className="text-blue-600 font-bold hover:underline"
          >
            ABD vize randevusu nasıl alınır? → (detaylı rehber)
          </Link>
        </div>
      </section>

      {/* 214B POWER BLOCK */}
      <section className="mb-24 bg-red-50 border border-red-200 p-12 rounded-3xl">
        <h2 className="text-3xl font-black mb-6 text-center text-red-700">
          214(b) Riski: Ret Gelmeden Önce Görülür
        </h2>
        <p className="text-slate-700 text-center max-w-3xl mx-auto leading-relaxed text-lg">
          214(b) reddi çoğu zaman “göçmen niyeti şüphesi”dir. DS-160’ta küçük bir
          tutarsızlık, finansal akışta açıklamasız para girişi veya zayıf bağlar
          ret sebebi olabilir. Bu yüzden strateji{" "}
          <strong>başvuru öncesinde</strong> kurulur.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/amerika-vize-214b"
            className="bg-white border border-red-300 text-red-700 px-8 py-4 rounded-xl font-bold hover:bg-red-50 transition"
          >
            214(b) Rehberi
          </Link>
          <Link
            href="/amerika-vize-reddi-dosya-analizi"
            className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition"
          >
            Ret Dosya Analizi
          </Link>
        </div>
      </section>

      {/* E-E-A-T BLOCK */}
      <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
        <h2 className="text-3xl font-black mb-10 text-center uppercase tracking-tight">
          E-E-A-T: Neden Bize Güveniyorlar?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold mb-3">Deneyim (Experience)</h3>
            <p className="text-slate-300 leading-relaxed">
              DS-160 + mülakat + bağ analizi aynı anda çalışır. Biz süreci “tek tek”
              değil, <strong>bütün</strong> olarak kurgularız.
            </p>
          </div>

          <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold mb-3">Uzmanlık (Expertise)</h3>
            <p className="text-slate-300 leading-relaxed">
              Form tutarlılığı, finansal kanıt seti, iş/okul bağları ve seyahat amacı
              tek bir hikâyede birleştirilir.
            </p>
          </div>

          <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold mb-3">Güven (Trust)</h3>
            <p className="text-slate-300 leading-relaxed">
              Süreç şeffaf ilerler: kontrol listesi, risk notları ve randevu öncesi final
              doğrulama.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-semibold">
          <Link href="/aya-journey-yorumlari" className="bg-white text-slate-900 px-6 py-3 rounded-2xl hover:bg-slate-100 transition">
            Müşteri Yorumları →
          </Link>
          <Link href="/referanslarimiz" className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-2xl hover:bg-white/20 transition">
            Referanslar →
          </Link>
          <Link href="/biz-kimiz" className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-2xl hover:bg-white/20 transition">
            Biz Kimiz? →
          </Link>
        </div>
      </section>

      {/* LOCATION LANDINGS */}
      <section className="mb-24">
        <h2 className="text-3xl font-black mb-10 text-center">
          Ankara & İstanbul ABD Vize Danışmanlığı
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900">Ankara</h3>
            <p className="text-slate-600 mt-4 leading-relaxed">
              Ankara ofisimizde yüz yüze DS-160 stratejisi, evrak kontrolü ve mülakat
              hazırlığı yapabilirsiniz.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/amerika-vize-danismanligi-ankara" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition">
                Ankara Danışmanlık →
              </Link>
              <Link href="/abd-vize-ankara" className="bg-white border border-slate-300 px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition">
                ABD Vize Ankara →
              </Link>
            </div>
          </div>

          <div className="p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900">İstanbul</h3>
            <p className="text-slate-600 mt-4 leading-relaxed">
              İstanbul tarafında hızlı koordinasyon, evrak düzeni ve mülakat simülasyonu
              ile dosyanızı güçlendiriyoruz.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/amerika-vize-danismanligi-istanbul" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition">
                İstanbul Danışmanlık →
              </Link>
              <Link href="/abd-vize-istanbul" className="bg-white border border-slate-300 px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition">
                ABD Vize İstanbul →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CLUSTER */}
      <section className="mb-24 border-t border-slate-200 pt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Amerika Vizesi İçin En Çok Aranan Rehberler
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {internalHubLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="p-5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md transition font-semibold text-slate-900"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      {/* HARD CTA */}
      <section className="bg-blue-700 rounded-3xl p-16 text-center text-white shadow-2xl mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Amerika Vize Sürecinizi Şansa Bırakmayın
        </h2>

        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          DS-160 hataları, mülakat stresi ve 214(b) riskini azaltmak için
          profesyonel danışmanlık alın.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href={WHATSAPP}
            className="bg-white text-blue-700 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            WhatsApp’tan Başla
          </a>

          <Link
            href="/iletisim"
            className="bg-blue-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-black transition"
          >
            Ofis Randevusu
          </Link>
        </div>

        <p className="text-xs text-blue-100/80 mt-8 max-w-3xl mx-auto">
          Not: Vize kararı konsolosluk yetkisindedir. Danışmanlık hizmeti; form/evrak/mülakat hazırlığı ve
          risk azaltma odaklı profesyonel destektir.
        </p>
      </section>

      {/* FAQ UI */}
      <section className="mb-24">
        <h2 className="text-3xl font-black mb-10 text-center">
          Sık Sorulan Sorular
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <details className="p-6 border border-slate-200 rounded-2xl bg-white hover:bg-slate-50 transition cursor-pointer">
            <summary className="font-bold text-slate-900">
              Amerika vize danışmanlığı gerekli mi?
            </summary>
            <p className="mt-3 text-slate-600 leading-relaxed">
              DS-160 tutarlılığı, finansal kanıt seti ve mülakat cevap stratejisi doğru kurulmazsa 214(b) riski artar.
              Danışmanlık, süreci profesyonelce yapılandırır.
            </p>
          </details>

          <details className="p-6 border border-slate-200 rounded-2xl bg-white hover:bg-slate-50 transition cursor-pointer">
            <summary className="font-bold text-slate-900">
              DS-160 formunu yanlış doldurdum, ne olur?
            </summary>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Tutarsızlık mülakatta sorun çıkarabilir. Gerekiyorsa DS-160 yeniden düzenlenir ve randevu stratejisi buna göre planlanır.
            </p>
          </details>

          <details className="p-6 border border-slate-200 rounded-2xl bg-white hover:bg-slate-50 transition cursor-pointer">
            <summary className="font-bold text-slate-900">
              214(b) ret aldım, ne zaman tekrar başvurmalıyım?
            </summary>
            <p className="mt-3 text-slate-600 leading-relaxed">
              “Zaman” değil “değişim” önemlidir. Dosyada bağları güçlendirecek somut gelişmeler olmadan tekrar başvuru genelde ikinci ret getirir.
            </p>
          </details>

          <details className="p-6 border border-slate-200 rounded-2xl bg-white hover:bg-slate-50 transition cursor-pointer">
            <summary className="font-bold text-slate-900">
              Amerika vize danışmanlık ücreti neye göre değişir?
            </summary>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Başvuru türü (B1/B2, F1), ret geçmişi, finansal dosya karmaşıklığı ve hazırlık kapsamına göre değişir. Ücretsiz ön analizle netleşir.
            </p>
          </details>
        </div>
      </section>

      {/* SCHEMA: FAQ + ARTICLE + ORG */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Amerika vize danışmanlığı gerekli mi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DS-160 tutarlılığı, finansal kanıt seti ve mülakat stratejisi doğru kurulmazsa 214(b) riski artar. Danışmanlık, başvuruyu ikna edici şekilde yapılandırır."
                  }
                },
                {
                  "@type": "Question",
                  "name": "DS-160 formunu yanlış doldurdum, ne olur?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tutarsızlık mülakatta sorun çıkarabilir. Gerekiyorsa DS-160 yeniden düzenlenir ve randevu stratejisi buna göre planlanır."
                  }
                },
                {
                  "@type": "Question",
                  "name": "214(b) ret aldım, ne zaman tekrar başvurmalıyım?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tekrar başvuru zamanı değil, dosyada somut değişim önemlidir. Bağları güçlendiren kanıtlar olmadan tekrar başvuru genelde ikinci ret getirir."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Amerika vize danışmanlık ücreti neye göre değişir?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Başvuru türü, ret geçmişi ve dosya karmaşıklığına göre değişir. Ücretsiz ön analiz sonrası netleşir."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "ABD Vize Danışmanlığı 2026 | DS-160, 214(b) Analizi ve Mülakat Hazırlığı",
              "description":
                "Amerika vize danışmanlığı: DS-160 stratejisi, evrak kontrolü, 214(b) risk analizi ve mülakat simülasyonu. Ankara & İstanbul ofis desteği.",
              "mainEntityOfPage": "https://ayajourney.com/amerika-vize-danismanligi",
              "author": {
                "@type": "Organization",
                "name": "AYA Journey"
              },
              "publisher": {
                "@type": "Organization",
                "name": "AYA Journey"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AYA Journey",
              "url": "https://ayajourney.com",
              "sameAs": [
                "https://ayajourney.com/aya-journey-yorumlari",
                "https://ayajourney.com/referanslarimiz"
              ]
            }
          ])
        }}
      />
    </main>
  );
}
