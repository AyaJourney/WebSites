import React from 'react'
export const metadata = {
  title: "Vize Danışmanlık İstanbul | Maslak Vize Başvuru Merkezi",
  description: "İstanbul vize danışmanlık hizmetleri. Maslak ofisimizde iData, VFS Global ve AS Travel süreçleri; ABD, İngiltere, Schengen ve Kanada vize başvuruları için uzman desteği.",
  keywords: [
    "vize danışmanlık İstanbul",
    "İstanbul vize merkezi",
    "Maslak vize danışmanlık",
    "iData İstanbul randevu",
    "VFS Global İstanbul vize",
    "Schengen vizesi İstanbul",
    "İngiltere vizesi İstanbul başvuru",
    "Kanada vizesi İstanbul",
    "Portekiz D-7 vizesi İstanbul",
    "ABD vizesi danışmanlık İstanbul",
    "vize başvuru desteği İstanbul",
    "İstanbul vize hizmetleri",
    "Maslak vize ofisi",
    "Profesyonel vize danışmanlık",
    "Hızlı vize başvuru İstanbul",

  ],
  alternates: {
    canonical: "https://www.ayajourney.com/vize-danismanlik-istanbul", 
  }
};
const page = () => {
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          "name": "AYA Journey İstanbul Vize Danışmanlık Merkezi",
          "image": "https://www.ayajourney.com/images/logo.png",
          "@id": "https://www.ayajourney.com/vize-danismanlik-istanbul",
          "url": "https://www.ayajourney.com/vize-danismanlik-istanbul",
          "telephone": "+905304853115",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Maslak Bilim Sokak No:5",
            "addressLocality": "Sarıyer",
            "addressRegion": "İstanbul",
            "postalCode": "34398",
            "addressCountry": "TR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.1128, 
            "longitude": 29.0213
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://www.instagram.com/ayajourney",
            "https://wa.me/905302199056"
          ]
        },
        {
          "@type": "Service",
          "serviceType": "İstanbul Vize Danışmanlığı",
          "provider": { "@id": "https://www.ayajourney.com/vize-danismanlik-istanbul" },
          "areaServed": { "@type": "City", "name": "İstanbul" },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "İstanbul Vize Hizmetleri",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Schengen Vize Danışmanlığı İstanbul" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ABD Vizesi Başvurusu İstanbul" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kanada Vize Başvurusu İstanbul" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ABD Staj ve Au Pair Programları" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dubai Vize İşlemleri" } }
            ]
          }
        },
        {
          "@type": "FAQPage", // Bu kısım yeni
          "mainEntity": [
            {
              "@type": "Question",
              "name": "İstanbul'da vize randevusu bulmak neden zor?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Özellikle Schengen ve ABD vizeleri için seyahatinizden en az 2-3 ay önce başvuru yapmanızı öneriyoruz. Ankara ofisimizde acil randevu desteği de sunmaktayız.İstanbul, Türkiye'nin en yüksek başvuru hacmine sahip şehri olduğu için sistemler anlık dolmaktadır. AYA Journey olarak özel randevu takip algoritmalarımızla müşterilerimize öncelik sağlıyoruz."
              }
            },
            {
              "@type": "Question",
              "name": "Vize görüşmesine Maslak ofisinizde hazırlanabilir miyim?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Özellikle ABD mülakatları öncesi, ofisimizde birebir simülasyon yaparak heyecanınızı yenmenizi ve doğru cevapları vermenizi sağlıyoruz."
              }
            }
          ]
        }
      ]
    })
  }}
/>
      {/* Schema buraya gelecek */}
      <main className="max-w-7xl mx-auto px-4 py-12 text-gray-900 leading-relaxed font-sans">
        
        {/* HERO: İstanbul'un Hızına Vurgu */}
        <section className="mb-20 text-center md:text-left md:flex items-center gap-12">
          <div className="md:w-3/5">
            <span className="inline-block bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-widest border border-sky-200">
              İstanbul'un En Güvenilir Vize Hattı
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 leading-tight">
              İstanbul Vize Danışmanlık <br/> 
              <span className="text-sky-600 font-extrabold italic"> Merkezi</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              İstanbul'daki randevu karmaşasına son veriyoruz. <strong>Maslak ofisimizde</strong>, iData ve VFS Global süreçlerinizi profesyonelce yönetiyor, 
              evraklarınızı konsolosluk beklentilerine göre %100 kusursuz hazırlıyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/randevu" className="bg-sky-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-sky-700 transition shadow-2xl transform hover:-translate-y-1">
                İstanbul Randevumu Al
              </a>
              <a href="tel:+905304853115" className="bg-white border-2 border-sky-600 text-sky-700 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-sky-50 transition">
                Maslak Ofisi Ara
              </a>
            </div>
          </div>
          <div className="hidden md:block md:w-2/5 bg-slate-900 rounded-[3rem] p-12 text-center shadow-2xl">
            <div className="text-sky-500 text-6xl mb-4 font-black">24/7</div>
            <h3 className="text-2xl font-bold text-white mb-2">Anlık Randevu Takibi</h3>
            <p className="text-slate-400 text-sm italic">İstanbul'un yoğun randevu trafiğinde boşlukları yakalayan özel sistemimizle yanınızdayız.</p>
          </div>
        </section>

        {/* İSTANBUL OPERASYON ALANLARI */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-xl transition">
            <h3 className="text-2xl font-black text-sky-700 mb-4">iData Süreçleri</h3>
            <p className="text-sm text-gray-600">Almanya ve İtalya başvurularınız için Gayrettepe ve Altunizade merkezlerine tam uyumlu dosya hazırlığı.</p>
          </div>
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-xl transition">
            <h3 className="text-2xl font-black text-sky-700 mb-4">VFS Global</h3>
            <p className="text-sm text-gray-600">Fransa, Hollanda ve Yunanistan vizeleri için Harbiye ve Beyoğlu süreçlerinde VIP destek.</p>
          </div>
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-xl transition">
            <h3 className="text-2xl font-black text-sky-700 mb-4">Deniz Aşırı Vizeler</h3>
            <p className="text-sm text-gray-600">ABD, Kanada ve İngiltere başvurularınızda mülakat hazırlığı ve profesyonel form doldurma.</p>
          </div>
        </section>

        {/* Neden Biz? - İstanbul Vizyonu */}
        <section className="mb-20">
          <div className="bg-sky-900 rounded-[4rem] overflow-hidden">
             <div className="p-10 md:p-20 text-white md:flex items-center gap-16">
               <div className="md:w-1/2">
                 <h2 className="text-3xl font-bold mb-6">İstanbul'un Kalbinde Profesyonel Destek</h2>
                 <ul className="space-y-6">
                    <li className="flex gap-4 items-start">
                      <span className="text-sky-400 text-2xl font-black">✓</span>
                      <p><strong>Lokasyon Avantajı:</strong> Maslak, Levent ve Beşiktaş bölgesindeki iş dünyasına yakın, ulaşımı kolay ofis.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="text-sky-400 text-2xl font-black">✓</span>
                      <p><strong>Karmaşık Dosya Çözümleri:</strong> Ret almış başvurular veya eksik evrak krizlerinde uzman müdahalesi.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="text-sky-400 text-2xl font-black">✓</span>
                      <p><strong>Özel Programlar:</strong> ABD Staj (J1), Au Pair ve Portekiz D7 vizelerinde Türkiye'nin en deneyimli ekibi.</p>
                    </li>
                 </ul>
               </div>
               <div className="md:w-1/2 mt-12 md:mt-0 grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-6 rounded-3xl text-center backdrop-blur-sm">
                    <p className="text-3xl font-bold">Yüksek</p>
                    <p className="text-xs uppercase tracking-widest text-sky-300">Başarılı Onay</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-3xl text-center backdrop-blur-sm">
                    <p className="text-3xl font-bold">10+</p>
                    <p className="text-xs uppercase tracking-widest text-sky-300">Yıllık Tecrübe</p>
                  </div>
               </div>
             </div>
          </div>
        </section>

        {/* SIKÇA SORULANLAR */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">İstanbul Vize Rehberi</h2>
          <div className="space-y-4">
            <details className="group bg-white border border-slate-200 p-6 rounded-2xl cursor-pointer hover:bg-slate-50">
              <summary className="font-bold text-lg flex justify-between items-center">
                İstanbul'da vize randevusu bulmak neden zor?
                <span className="text-sky-600 transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed border-t pt-4">İstanbul, Türkiye'nin en yüksek başvuru hacmine sahip şehri olduğu için sistemler anlık dolmaktadır. AYA Journey olarak özel randevu takip algoritmalarımızla müşterilerimize öncelik sağlıyoruz.</p>
            </details>
            <details className="group bg-white border border-slate-200 p-6 rounded-2xl cursor-pointer hover:bg-slate-50">
              <summary className="font-bold text-lg flex justify-between items-center">
                Vize görüşmesine Maslak ofisinizde hazırlanabilir miyim?
                <span className="text-sky-600 transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed border-t pt-4">Özellikle ABD mülakatları öncesi, ofisimizde birebir simülasyon yaparak heyecanınızı yenmenizi ve doğru cevapları vermenizi sağlıyoruz.</p>
            </details>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-sky-600 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Vizenizi Şansa Bırakmayın!</h2>
            <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto font-light">
              Hatalı bir evrak binlerce liralık tatilinizin yanmasına neden olabilir. İstanbul'un tecrübeli ekibiyle riskleri sıfıra indirin.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="/iletisim" className="bg-white text-sky-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-sky-50 transition">
               Danışmanlık Al
              </a>
              <a href="https://wa.me/905302199056" className="bg-emerald-500 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-emerald-600 transition flex items-center justify-center gap-2">
                WhatsApp'tan Yazın
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default page

