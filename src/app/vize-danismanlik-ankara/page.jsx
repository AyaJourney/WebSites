import React from 'react'
export const metadata = {
  title: "Vize Danışmanlık Ankara | Çukurambar Vize Başvuru Merkezi",
  description: "Ankara vize danışmanlık hizmetleri. Çukurambar ofisimizde ABD, İngiltere, Schengen ve Portekiz vize başvurularınız için profesyonel dosya hazırlığı ve randevu desteği.",
  keywords: [
    "vize danışmanlık Ankara",
    "Ankara vize merkezi",
    "Çukurambar vize danışmanlık",
    "vize randevusu Ankara",
    "Ankara vize başvuru merkezi",
    "Schengen vizesi Ankara",
    "ABD vizesi Ankara danışmanlık"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/vize-danismanlik-ankara", 
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
          "name": "AYA Journey Ankara Vize Danışmanlık Merkezi",
          "image": "https://www.ayajourney.com/images/logo.png",
          "@id": "https://www.ayajourney.com/vize-danismanlik-ankara",
          "url": "https://www.ayajourney.com/vize-danismanlik-ankara",
          "telephone": "+903128701584", // Burayı Ankara sabit numaranla güncelle
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kızılırmak, Çukurambar, Ufuk Ünv. Cd No:3, 06530 Çankaya/Ankara",
            "addressLocality": "Çankaya",
            "addressRegion": "Ankara",
            "postalCode": "06530",
            "addressCountry": "TR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 39.9048, 
            "longitude": 32.8092
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
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
          "serviceType": "Vize Danışmanlık Hizmetleri",
          "provider": {
            "@id": "https://www.ayajourney.com/vize-danismanlik-ankara"
          },
          "areaServed": {
            "@type": "State",
            "name": "Ankara"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Vize Hizmetleri",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Schengen Vize Danışmanlığı Ankara"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "ABD Vizesi Başvurusu Ankara"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "İngiltere Vize Hizmetleri"
                }
              },
               {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Canada Vizesi Başvurusu Ankara"
                }
              },
               {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Portekiz D7 Vizesi Başvurusu Ankara"
                }
              },
               {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dubai Vizesi Başvurusu Ankara"
                }
              },
               {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "ABD Turizm ve Gastronomi Staj Başvurusu Ankara"
                }
              },
                     {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "ABD Au Pair Başvurusu Ankara"
                }
              },
                     {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "ABD Göçmenlik Başvurusu Ankara"
                }
              },
                     {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "ABD Dil Okulu Başvurusu Ankara"
                }
              },
            ]
          }
        }
      ]
    })
  }}
/>

   <main className="max-w-7xl mx-auto px-4 py-12 text-gray-900 leading-relaxed font-sans">
      
      {/* 1. HERO: Ankara Odaklı Güçlü Giriş */}
      <section className="mb-20 text-center md:text-left md:flex items-center gap-12">
        <div className="md:w-3/5">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-widest">
            Ankara'nın Vize Uzmanı: AYA Journey
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 leading-tight">
            Ankara Vize Danışmanlık <br/> 
            <span className="text-blue-600">Profesyonel Başvuru Merkezi</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Çukurambar ofisimizde; dünya genelindeki tüm ülkeler için <strong>yüksek onay oranlı</strong>, 
            kişiye özel vize danışmanlığı sunuyoruz. Elçiliklerin kalbinde, sürecinizi riske atmadan yönetiyoruz.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/iletisim" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition shadow-2xl">
              Ücretsiz Ön Görüşme Yap
            </a>
            <a href="tel:+903128701584" className="bg-white border-2 border-gray-200 text-gray-800 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition">
              Hemen Ara
            </a>
          </div>
        </div>
        <div className="hidden md:block md:w-2/5 bg-slate-100 rounded-[3rem] p-12 text-center border border-slate-200">
          <div className="text-5xl mb-4">📍</div>
          <h3 className="text-2xl font-bold text-slate-800">Merkezi Konum</h3>
          <p className="text-gray-500 mt-2 italic">Kızılırmak Mahallesi, Çankaya/Ankara</p>
          <div className="mt-6 space-y-2 text-sm font-medium text-slate-600">
            <p>✓ Elçiliklere Yakın</p>
            <p>✓ VIP Başvuru Desteği</p>
            <p>✓ Hızlı Randevu Takibi</p>
          </div>
        </div>
      </section>

      {/* 2. HİZMET KAPSAMI: ANKARA'DAKİ EN ÇOK ARANANLAR */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Hizmet Verdiğimiz Popüler Ülkeler</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Schengen Vizesi", desc: "Almanya, Fransa, İtalya ve tüm Avrupa.", icon: "🇪🇺" },
            { title: "Amerika Vizesi", desc: "B1/B2 Turistik ve Ticari vize uzmanlığı.", icon: "🇺🇸" },
            { title: "İngiltere Vizesi", desc: "Standard Visitor ve yerleşim vizeleri.", icon: "🇬🇧" },
            { title: "Portekiz D7", desc: "Pasif gelirle oturum ve vatandaşlık yolu.", icon: "🇵🇹" },
          ].map((item, index) => (
            <div key={index} className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all border-b-4 border-b-blue-500">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SÜREÇ YÖNETİMİ: ANKARA OFİS FARKI */}
      <section className="mb-20 bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white">
        <div className="md:flex gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 italic text-blue-400">Neden AYA Journey Ankara?</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-blue-600/20 text-blue-400 w-10 h-10 rounded-full flex items-center justify-center font-bold border border-blue-400/30 shrink-0">1</div>
                <p className="text-lg"><span className="font-bold text-white">Bölgesel Hakimiyet:</span> Ankara'daki VFS Global, iData ve AS Travel merkezlerine sadece birkaç dakika mesafedeyiz.</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-600/20 text-blue-400 w-10 h-10 rounded-full flex items-center justify-center font-bold border border-blue-400/30 shrink-0">2</div>
                <p className="text-lg"><span className="font-bold text-white">Kişisel Dilekçeler:</span> Standart evrak listeleriyle değil, size özel ikna edici dilekçelerle başvuru yapıyoruz.</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-600/20 text-blue-400 w-10 h-10 rounded-full flex items-center justify-center font-bold border border-blue-400/30 shrink-0">3</div>
                <p className="text-lg"><span className="font-bold text-white">Anlık Randevu Takibi:</span> Sistemlerimizle açılan boş randevuları anında yakalıyoruz.</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 text-center">
              <p className="text-5xl font-black text-blue-500 mb-2">%98</p>
              <p className="text-xl font-bold">Vize Onay Başarısı</p>
              <p className="text-slate-400 text-sm mt-4 italic">Son 3 yılda Ankara ofisimizden yapılan binlerce başarılı başvuru verisidir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIKÇA SORULANLAR (SEO İÇİN KRİTİK) */}
      <section className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Ankara Vize İşlemleri Hakkında Sıkça Sorulanlar</h2>
        <div className="space-y-4">
          <details className="group bg-slate-50 p-6 rounded-2xl cursor-pointer">
            <summary className="font-bold text-lg flex justify-between items-center">
              Vize randevusunu ne kadar önceden almalıyım?
              <span className="text-blue-600 transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">Özellikle Schengen ve ABD vizeleri için seyahatinizden en az 2-3 ay önce başvuru yapmanızı öneriyoruz. Ankara ofisimizde acil randevu desteği de sunmaktayız.</p>
          </details>
          <details className="group bg-slate-50 p-6 rounded-2xl cursor-pointer">
            <summary className="font-bold text-lg flex justify-between items-center">
              Vize reddi durumunda ne yapılır?
              <span className="text-blue-600 transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">Ret mektubunu analiz ederek hataları tespit ediyoruz. İtiraz dilekçesi hazırlıyor veya daha güçlü bir dosya ile yeniden başvuru sürecini başlatıyoruz.</p>
          </details>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-900 rounded-[3rem] p-12 text-center text-white shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-black mb-6 italic">Ankara'da Vize Sürecinizi Bugün Başlatın!</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Zaman kaybetmeyin, randevu krizlerine takılmayın. AYA Journey uzmanlığıyla vizenizi hızlı ve güvenle alın.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="/randevu" className="bg-white text-blue-900 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-xl transition transform hover:-translate-y-1">
            Randevu Sorgula
          </a>
          <a href="https://wa.me/905302199056?text=Merhaba%2C%20vize%20ba%C5%9Fvurum%20i%C3%A7in%20profesyonel%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.%20Uygun%20oldu%C4%9Funuzda%20s%C3%BCreci%20birlikte%20planlayabilir%20miyiz%3F"
          className="bg-green-500 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-green-600 transition shadow-xl flex items-center justify-center gap-2">
            WhatsApp Bilgi Hattı
          </a>
        </div>
      </section>

    </main>
    </>
 
  );
}

export default page
