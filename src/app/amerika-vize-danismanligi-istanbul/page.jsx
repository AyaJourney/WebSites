import React from "react";
export const metadata = {
  title: "Amerika Vize Danışmanlığı İstanbul | Maslak DS-160 & Randevu",
  description: "İstanbul Amerika vize başvurularında uzman desteği. Maslak ofisimizde DS-160 formu doldurma, İstinye Başkonsolosluğu mülakat provası ve hızlı randevu takibi.",
  keywords: [
    "Amerika vizesi İstanbul",
    "İstanbul vize danışmanlık Amerika",
    "Maslak vize danışmanlık",
    "İstinye Amerika Başkonsolosluğu randevu",
    "Amerika vize mülakatı hazırlık İstanbul",
    "Beşiktaş vize danışmanlık",
    "Şişli Amerika vizesi",
    "İstanbul DS-160 formu yardım"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/amerika-vize-danismanligi-istanbul", // Sayfa linkinizi buraya ekleyin
  }
};
const Page = () => {
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "name": "AYA Journey İstanbul",
          "image": "https://www.ayajourney.com/images/logo.png",
          "@id": "https://www.ayajourney.com/istanbul-amerika-vizesi",
          "url": "https://www.ayajourney.com/istanbul-amerika-vizesi",
          "telephone": "+905304853115",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Maslak Bilim Sokak No:5",
            "addressLocality": "Sarıyer",
            "addressRegion": "İstanbul",
            "postalCode": "34398", // Maslak posta kodu örneği
            "addressCountry": "TR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.1128, // Maslak koordinatları
            "longitude": 29.0213
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        },
        {
          "@type": "Service",
          "serviceType": "Amerika Vize Danışmanlığı İstanbul",
          "provider": { "@id": "https://www.ayajourney.com/istanbul-amerika-vizesi" },
          "areaServed": {
            "@type": "City",
            "name": "İstanbul"
          },
          "description": "İstanbul Amerika vizesi için DS-160 form girişi, İstinye mülakat simülasyonu ve acil randevu takibi."
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Amerika vize randevusu İstanbul'da ne kadar sürer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "İstanbul'daki mülakat yoğunluğu vize türüne göre değişir. AYA Journey olarak boşalan randevuları 7/24 takip ederek süreci en hızlı şekilde yönetiyoruz."
              }
            },
            {
              "@type": "Question",
              "name": "İstanbul mülakatları nerede yapılıyor?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "İstanbul'daki Amerika vize mülakatları İstinye'de bulunan ABD Başkonsolosluğu'nda gerçekleştirilmektedir. Ofisimiz bu bölgeye yakın konumdadır."
              }
            }
          ]
        }
      ]
    })
  }}
/>
      <main className="max-w-300 mx-auto px-4 py-12 text-gray-900 leading-relaxed">
      
      {/* 1. HERO: Güçlü Başlık ve Güven Sinyalleri */}
      <section className="mb-16">
        <div className="inline-block bg-indigo-50 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-indigo-100">
          İstanbul'un Lider Amerika Vize Danışmanlık Merkezi
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">
          Amerika Vize Danışmanlığı İstanbul: Garantili Randevu & Mülakat Hazırlığı
        </h1>

        <p className="text-xl text-gray-700 max-w-4xl mb-6">
          <strong>AYA Journey İstanbul</strong>, ABD vize sürecindeki en zorlu engelleri profesyonelce aşmanızı sağlar. 
          İstinye'deki Başkonsolosluk mülakatları için <strong>DS-160 form uzmanlığı</strong> ve birebir 
          simülasyonlarla İstanbul'un en yüksek onay oranına sahip danışmanlık hizmetini sunuyoruz.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="/iletisim" className="inline-block bg-indigo-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-indigo-700 transition shadow-xl transform hover:-translate-y-1">
            Ücretsiz Vize Analizi Al
          </a>
          <a href="tel:+90 530 485 31 15" className="inline-block bg-white border-2 border-gray-300 text-gray-800 font-bold px-8 py-4 rounded-lg hover:bg-gray-50 transition">
            Danışmanla Görüş
          </a>
        </div>
      </section>

      {/* 2. ETKİLEŞİM SAYACI & LOKAL GÜÇ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 py-8 border-y border-gray-100 shadow-sm rounded-2xl bg-white px-6">
        <div className="text-center">
          <p className="text-3xl font-bold text-indigo-600">Maslak</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Merkezi Ofis</p>
        </div>
        <div className="text-center border-x border-gray-100">
          <p className="text-3xl font-bold text-indigo-600">10 Yıl</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">ABD Vize Deneyimi</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-indigo-600">%99</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">DS-160 Doğruluğu</p>
        </div>
        <div className="text-center border-l border-gray-100">
          <p className="text-3xl font-bold text-indigo-600">7/24</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Randevu Takibi</p>
        </div>
      </div>

      {/* 3. ÖZEL HİZMET DETAYLARI: Kullanıcı Niyetine Göre (User Intent) */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">İstanbul’da Sunduğumuz Profesyonel Çözümler</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-indigo-300 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-indigo-900">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              Stratejik DS-160 Formu Doldurma
            </h3>
            <p className="text-gray-600 text-sm italic">Amerika vizesinin temeli doğru formdur. İstanbul ofisimizde profilinizi en iyi yansıtan, konsolosluk algısına uygun İngilizce form girişi sağlıyoruz.</p>
          </div>
          <div className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-indigo-300 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-indigo-900">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              Birebir Mülakat Koçluğu
            </h3>
            <p className="text-gray-600 text-sm italic">İstinye ABD Başkonsolosluğu’ndaki mülakat öncesi, stres yönetimi ve soru-cevap simülasyonları ile özgüveninizi artırıyoruz.</p>
          </div>
          <div className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-indigo-300 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-indigo-900">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              Acil Vize Randevusu Takibi
            </h3>
            <p className="text-gray-600 text-sm italic">Eğitim veya acil iş seyahatleriniz için İstanbul ve çevre illerdeki en erken randevu tarihlerini sistem üzerinden anlık takip ediyoruz.</p>
          </div>
          <div className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-indigo-300 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-indigo-900">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              Vize Reddi Sonrası Başvuru
            </h3>
            <p className="text-gray-600 text-sm italic">Daha önce 214(b) maddesi ile ret alan başvuruları analiz ediyor, hataları düzelterek güçlü bir niyet mektubuyla yeniden başvuruyoruz.</p>
          </div>
        </div>
      </section>

      {/* 4. LOKAL SİNYAL: LEVENT & İSTİNYE ODAKLI */}
      <section className="mb-16 bg-indigo-900 text-white rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Maslak Ofisimizle Vize Süreci Daha Kolay</h2>
            <p className="mb-4 opacity-90">
              İstanbul’un iş merkezi <strong>Maslak</strong>’te bulunan ofisimiz; <strong>Beşiktaş, Şişli ve Mecidiyeköy</strong>’den metro ile dakikalar içinde ulaşabileceğiniz konumdadır.
            </p>
            <p className="opacity-90">
              <strong>İstinye</strong>’deki ABD Başkonsolosluğu mülakatınız öncesi son hazırlıklarınızı ofisimizde uzmanlarımızla yüz yüze gerçekleştirebilirsiniz.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
            <h4 className="font-bold mb-4 text-indigo-300 uppercase tracking-widest text-sm text-center">Ofis Avantajları</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 font-medium">✓ Ücretsiz Wi-Fi ve Evrak Tarama Hizmeti</li>
              {/* <li className="flex items-center gap-2 font-medium">✓ Profesyonel İngilizce Tercüme Desteği</li> */}
              <li className="flex items-center gap-2 font-medium">✓ Ödeme ve Harç İşlemleri Rehberliği</li>
              <li className="flex items-center gap-2 font-medium">✓ Metro Hattına 2 Dakika Yürüme Mesafesi</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. FAQ: ŞEMA YAPISINA UYGUN SORULAR */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">İstanbul Amerika Vizesi Sıkça Sorulan Sorular</h2>
        <div className="space-y-4">
          <details className="group border-b border-gray-200 pb-4 cursor-pointer">
            <summary className="font-bold text-lg list-none flex justify-between items-center group-hover:text-indigo-600 transition">
              Amerika vize randevusu İstanbul'da ne kadar sürer?
              <span className="text-indigo-600 transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-gray-600">Randevu bekleme süreleri vize türüne göre değişmektedir. B1/B2 turist vizeleri için İstanbul yoğun bir merkezdir; ancak danışmanlık hizmetimizle boşalan randevuları anlık takip ederek süreci hızlandırıyoruz.</p>
          </details>
          <details className="group border-b border-gray-200 pb-4 cursor-pointer">
            <summary className="font-bold text-lg list-none flex justify-between items-center group-hover:text-indigo-600 transition">
              Mülakat sırasında hangi belgeler yanımda olmalı?
              <span className="text-indigo-600 transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-gray-600">Pasaport, DS-160 onay sayfası ve randevu konfirme belgesi zorunludur. Ancak başarınızı artırmak için finansal durumunuzu ve Türkiye'ye bağlarınızı kanıtlayan destekleyici belgeleri de hazırlıyoruz.</p>
          </details>
        </div>
      </section>

      {/* 6. FINAL CTA: ACİLİYET VE EYLEM */}
      <section className="bg-gray-100 rounded-[2.5rem] p-10 text-center border border-gray-200 shadow-inner">
        <h2 className="text-3xl font-bold mb-4 text-slate-900 uppercase tracking-tight">
          Hayalinizdeki Amerika Seyahati İçin İlk Adımı Atın
        </h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg leading-snug font-medium">
          İstanbul’un en tecrübeli vize ekibiyle çalışarak <strong>DS-160 formu</strong> hatalarından ve mülakat heyecanından kurtulun.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/iletisim" className="bg-black text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition shadow-lg">
            Hemen Başvur
          </a>
          <a href="https://wa.me/905302199056?text=Merhaba%2C%20vize%20ba%C5%9Fvurum%20i%C3%A7in%20profesyonel%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.%20Uygun%20oldu%C4%9Funuzda%20s%C3%BCreci%20birlikte%20planlayabilir%20miyiz%3F"
          className="bg-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-lg flex items-center justify-center gap-2">
            WhatsApp Hattı
          </a>
        </div>
      </section>

    </main>
    </>
  
  );
};

export default Page;