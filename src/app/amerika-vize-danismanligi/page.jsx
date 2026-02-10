import React from "react";

// 1. Metadata: ABD vize danışmanlığı odaklı SEO
export const metadata = {
  title: "Amerika Vizesi Neden Reddedilir? | Profesyonel Vize Danışmanlığı",
 description:
  "Amerika vize danışmanlığı ile DS-160 formu, vize mülakat hazırlığı ve ret nedenlerini uzman stratejiyle yönetin. Amerika vizesi alma şansınızı artırın.",

  keywords: [
  "amerika vize danışmanlığı",
  "amerika vizesi danışmanı",
  "amerika vizesi nasıl alınır",
  "ds-160 formu doldurma",
  "amerika vize mülakat soruları",
  "amerika vize reddi nedenleri",
  "amerika vize randevu öne çekme",
  "amerika turist vizesi danışmanlığı",
  "amerika öğrenci vizesi danışmanlığı"
],
  alternates: {
    canonical: "https://www.ayajourney.com/abd-vize-danismanligi"
  },
};

const ABDDanismanlikSayfasi = () => {
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "ABD vize danışmanlığı almak zorunlu mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ABD vize danışmanlığı almak zorunlu değildir. Ancak profesyonel danışmanlık, DS-160 formunun doğru doldurulmasını, mülakat sürecine eksiksiz hazırlanılmasını ve başvurunun ret riskleri minimize edilerek yapılmasını sağlar."
          }
        },
        {
          "@type": "Question",
          "name": "ABD vize danışmanlığı vize garantisi verir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hiçbir ABD vize danışmanlığı firması vize garantisi veremez. Vize onayı tamamen ABD Konsolosluğu’nun takdirindedir. Ancak doğru stratejiyle hazırlanmış başvurular onay ihtimalini ciddi ölçüde artırır."
          }
        },
        {
          "@type": "Question",
          "name": "ABD vize mülakatı kaç dakika sürer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ABD vize mülakatları genellikle 2 ila 5 dakika arasında sürer. Bu kısa sürede doğru ve tutarlı cevaplar verebilmek, vize sonucunu doğrudan etkiler."
          }
        },
        {
          "@type": "Question",
          "name": "DS-160 formu yanlış doldurulursa ne olur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DS-160 formunda yapılan yanlış veya çelişkili beyanlar ABD vize reddine yol açabilir. Yanlış bilgiler, mülakatta güven kaybına neden olur ve 214(b) maddesi kapsamında ret riski oluşturur."
          }
        },
        {
          "@type": "Question",
          "name": "ABD vize reddi sonrası tekrar başvuru yapılabilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, ABD vizesi reddedildikten sonra tekrar başvuru yapılabilir. Ancak önceki reddin nedenleri analiz edilmeli ve yeni başvuru bu hatalar giderilerek yapılmalıdır."
          }
        }
      ]
    }),
  }}
/>
  <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">
      
      {/* Hero Section: Otorite ve Prestij */}
      <header className="text-center mb-20">
        <span className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
          U.S. Visa Specialist Services
        </span>
       <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter text-slate-900">
  Profesyonel <br />
  <span className="text-blue-600 italic">Amerika Vize Danışmanlığı</span>
</h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
          ABD vizesi bir evrak savaşı değil, bir ikna sürecidir. DS-160 formunuzdaki en küçük detaydan, 
          mülakattaki vücut dilinize kadar tüm süreci <strong>AYA Journey</strong> uzmanlığıyla yönetiyoruz.
        </p>
      </header>
<section className="mb-24 max-w-4xl mx-auto text-center">
  <h2 className="text-3xl md:text-4xl font-black mb-6">
    ABD Vize Danışmanlığı Nedir ve Neden Gereklidir?
  </h2>
  <p className="sr-only">
  Amerika vize danışmanlığı, Amerika vizesi nasıl alınır, DS-160 formu doldurma,
  Amerika vize mülakat soruları ve Amerika vize reddi nedenleri hakkında
  profesyonel danışmanlık hizmeti.
</p>
  <p className="text-slate-600 leading-relaxed text-lg">
    ABD vize danışmanlığı; başvuru sahibinin seyahat amacına, finansal durumuna,
    mesleki geçmişine ve göçmenlik risklerine göre stratejik bir başvuru süreci
    oluşturulmasını kapsar. Amerika Birleşik Devletleri vize başvurularında
    yapılan en küçük tutarsızlıklar dahi <strong>214(b)</strong> maddesi kapsamında
    ret sebebi olabilir.
  </p>
  <p className="text-slate-600 leading-relaxed text-lg mt-6">
    Profesyonel ABD vize danışmanlığı hizmeti sayesinde DS-160 formu doğru
    doldurulur, mülakat cevapları önceden planlanır ve başvuru dosyası
    konsolosluk memurunun bakış açısına göre hazırlanır.
  </p>
</section>

      {/* Neden Biz? (Value Propositions) */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {[
          { t: "DS-160 Analizi", d: "Formunuzu konsolosluk memurunun görmek istediği 'stratejik' dille dolduruyoruz.", icon: "✍️" },
          { t: "Mülakat Simülasyonu", d: "Karşınıza çıkabilecek zor soruları mülakat öncesi birlikte çalışıyoruz.", icon: "🎙️" },
          { t: "Randevu Takibi", d: "Aylar sonrasına verilen randevuları sistem takip yazılımlarımızla öne çekiyoruz.", icon: "📅" },
          { t: "Ret Analizi", d: "Daha önce ret aldıysanız, nedenini bulup yeni başvurunuzu hatasız kurguluyoruz.", icon: "🔍" }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h4 className="font-bold text-lg mb-3">{item.t}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
          </div>
        ))}
      </section>

      {/* Hizmet Süreç Akışı */}
      <section className="mb-24 bg-slate-50 p-12 rounded-[4rem] border border-slate-100">
        <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-tighter">Danışmanlık Sürecimiz Nasıl İşler?</h2>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-3xl flex items-center justify-center font-black text-2xl flex-shrink-0 shadow-lg shadow-blue-200">1</div>
            <div>
              <h4 className="text-xl font-bold mb-2 uppercase italic">Profil Değerlendirmesi</h4>
              <p className="text-slate-600 leading-relaxed">Mevcut iş, finansal durum ve seyahat geçmişinizi inceleyerek size özel bir strateji belirliyoruz. Eksik yanlarınızı başvurudan önce kapatıyoruz.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="bg-slate-900 text-white w-16 h-16 rounded-3xl flex items-center justify-center font-black text-2xl flex-shrink-0">2</div>
            <div>
              <h4 className="text-xl font-bold mb-2 uppercase italic">Form ve Randevu Yönetimi</h4>
              <p className="text-slate-600 leading-relaxed">DS-160 formunuzu 214(b) maddesi risklerini minimize ederek dolduruyor, vize ücretinizi yatırıp randevu takviminizi en kısa sürede netleştiriyoruz.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-3xl flex items-center justify-center font-black text-2xl flex-shrink-0 shadow-lg shadow-blue-200">3</div>
            <div>
              <h4 className="text-xl font-bold mb-2 uppercase italic">Birebir Mülakat Eğitimi</h4>
              <p className="text-slate-600 leading-relaxed">Konsolosluk memurunun sorması muhtemel soruları (Nereye gideceksiniz? Neden Amerika? Türkiye'ye neden döneceksiniz?) cevaplamanız için profesyonel eğitim veriyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABD Vize Türleri */}
      <section className="mb-24 px-8">
        <h2 className="text-3xl font-black mb-12 text-center">Hangi Amerika Vizesi Size Uygun?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 bg-white border-2 border-slate-100 rounded-[3rem] hover:border-blue-500 transition-colors">
            <h4 className="text-2xl font-black mb-4">B1/B2 Turistik & Ticari</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Turizm, iş toplantıları veya tıbbi tedavi amaçlı 10 yıllık vize başvuruları için tam destek.</p>
          </div>
          <div className="p-10 bg-white border-2 border-slate-100 rounded-[3rem] hover:border-blue-500 transition-colors">
            <h4 className="text-2xl font-black mb-4">F1 Öğrenci Vizesi</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Dil okulu, lisans veya yüksek lisans kabulleriniz sonrası I-20 belgesiyle yapılan profesyonel başvurular.</p>
          </div>
        </div>
      </section>
<section className="mb-24 bg-white border border-slate-100 rounded-[3rem] p-12">
  <h2 className="text-3xl font-black mb-10 text-center">
    ABD Vizesi En Sık Neden Reddedilir?
  </h2>
  <ul className="space-y-6 text-slate-600 leading-relaxed">
    <li>• DS-160 formunda tutarsız veya eksik bilgiler</li>
    <li>• Türkiye’ye geri dönüş bağlarının zayıf görülmesi</li>
    <li>• Seyahat amacının net ifade edilememesi</li>
    <li>• Finansal belgelerin yetersiz veya ikna edici olmaması</li>
    <li>• Mülakatta kısa, çelişkili veya ezber cevaplar</li>
  </ul>
  <p className="mt-8 text-slate-700 font-medium">
    AYA Journey olarak, başvurunuzu bu riskleri ortadan kaldıracak şekilde
    yapılandırıyor ve vize memurunun zihninde soru işareti bırakmıyoruz.
  </p>
</section>
<section className="mb-24 max-w-4xl mx-auto">
  <h2 className="text-3xl font-black mb-12 text-center">
    ABD Vize Danışmanlığı Hakkında Sık Sorulan Sorular
  </h2>

  <div className="space-y-10">
    <div>
      <h3 className="font-bold text-lg mb-2">
        ABD vize danışmanlığı almak zorunlu mu?
      </h3>
      <p className="text-slate-600">
        Hayır, zorunlu değildir. Ancak profesyonel danışmanlık, başvurunun
        hatasız ilerlemesini sağlar ve özellikle ilk başvurularda onay
        ihtimalini ciddi şekilde artırır.
      </p>
    </div>

    <div>
      <h3 className="font-bold text-lg mb-2">
        ABD vize danışmanlığı vize garantisi verir mi?
      </h3>
      <p className="text-slate-600">
        Hiçbir danışmanlık firması vize garantisi veremez. Ancak doğru
        stratejiyle hazırlanmış dosyalar, ret riskini minimum seviyeye indirir.
      </p>
    </div>

    <div>
      <h3 className="font-bold text-lg mb-2">
        ABD vize mülakatı kaç dakika sürer?
      </h3>
      <p className="text-slate-600">
        Ortalama 2–5 dakika sürer. Bu kısa sürede doğru mesajı verebilmek,
        mülakat eğitiminin en kritik noktasıdır.
      </p>
    </div>
  </div>
</section>
<section className="mb-24 text-center max-w-3xl mx-auto">
  <h2 className="text-3xl font-black mb-6">
    Türkiye Genelinde ABD Vize Danışmanlığı
  </h2>
  <p className="text-slate-600 leading-relaxed">
    İstanbul merkezli ofisimizden Türkiye’nin dört bir yanına online ve yüz yüze
    ABD vize danışmanlığı hizmeti sunuyoruz. İstanbul, Ankara, İzmir ve diğer
    illerden yapılan başvurular için konsolosluk süreçlerini yakından takip ediyoruz.
  </p>
</section>
      {/* STRATEJİK CTA SECTION */}
<section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-8 py-20 md:px-16 shadow-xl">
  {/* soft background blur */}
  <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-white/10 rounded-full blur-3xl" />
  <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-black/10 rounded-full blur-3xl" />

  <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-semibold tracking-wide uppercase mb-6">
      Profesyonel Amerika Vize Danışmanlığı
    </span>

    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
      10 Yıllık Amerika Vizesi  
      <span className="block text-blue-200 font-semibold">
        Doğru Stratejiyle Başlar
      </span>
    </h2>

    <p className="text-blue-100/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
      Amerika vizesi şans işi değildir. DS-160 formu, mülakat cevapları ve başvuru
      stratejisi doğru kurgulanmadığında en güçlü dosyalar bile reddedilebilir.
      <strong className="font-semibold"> Biz süreci baştan sona sizin için yönetiyoruz.</strong>
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="https://wa.me/905302199056"
        className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-blue-700 transition hover:scale-[1.02] hover:shadow-xl"
      >
        Ücretsiz Ön Değerlendirme
      </a>

      <a
        href="/iletisim"
        className="inline-flex items-center justify-center rounded-xl border border-white/30 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
      >
        Ofisten Randevu Al
      </a>
    </div>

    <p className="mt-8 text-xs text-blue-200 tracking-wide">
      Ücretsiz ön analiz • Vize garantisi verilmez • Stratejik danışmanlık sunulur
    </p>
  </div>
</section>


    </main>
    </>
  
  );
};

export default ABDDanismanlikSayfasi;