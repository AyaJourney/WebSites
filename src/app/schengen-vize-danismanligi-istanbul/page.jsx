import React from "react";
export const metadata = {
  title: "Schengen Vize Danışmanlığı İstanbul | Maslak Ofisi & Hızlı Randevu",
  description: "İstanbul Schengen vizesi başvurularında uzman desteği. Maslak ofisimizde iData, VFS Global ve AS Travel süreçleri, profesyonel niyet mektubu ve %98 onay başarısı.",
  keywords: [
    "Schengen vizesi İstanbul",
    "İstanbul vize danışmanlık firmaları",
    "iData İstanbul randevu alma",
    "VFS Global İstanbul Schengen",
    "Almanya vizesi İstanbul",
    "Fransa vize randevusu İstanbul",
    "Mecidiyeköy vize danışmanlık",
    "Schengen vize sigortası İstanbul"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/istanbul-schengen-vizesi", 
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
          "name": "AYA Journey İstanbul - Schengen Vize Uzmanı",
          "image": "https://www.ayajourney.com/images/istanbul-schengen-visa.jpg",
          "@id": "https://www.ayajourney.com/istanbul-schengen-vizesi",
          "url": "https://www.ayajourney.com/istanbul-schengen-vizesi",
          "telephone": "+905304853115",
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
          }
        },
        {
          "@type": "Service",
          "serviceType": "İstanbul Schengen Vize Danışmanlığı",
          "provider": { "@id": "https://www.ayajourney.com/istanbul-schengen-vizesi" },
          "description": "İstanbul'dan yapılacak tüm Schengen başvuruları için randevu takibi, profesyonel dosya hazırlığı ve seyahat sigortası hizmeti."
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "İstanbul'da Schengen randevusu ne zaman açılır?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "İstanbul randevuları iData ve VFS Global sistemlerinde periyodik olarak açılır. AYA Journey olarak sistemleri 7/24 takip ederek en hızlı randevuyu alıyoruz."
              }
            },
            {
              "@type": "Question",
              "name": "İstanbul Schengen vize danışmanlık ücretleri nedir?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ücretler gidilecek ülke ve vize türüne göre değişmektedir. Ücretsiz ön değerlendirme için Maslak ofisimizle iletişime geçebilirsiniz."
              }
            }
          ]
        }
      ]
    })
  }}
/>
      <main className="max-w-300 mx-auto px-4 py-12 text-gray-900 leading-relaxed">
      
      {/* 1. HERO: İstanbul Hızı ve Profesyonellik */}
      <section className="mb-16">
        <div className="inline-block bg-sky-50 text-sky-700 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-sky-100">
          İstanbul'un En Güvenilir Schengen Başvuru Hattı
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">
          Schengen Vize Danışmanlığı İstanbul: Hızlı Randevu & Kesin Çözüm
        </h1>

        <p className="text-xl text-gray-700 max-w-4xl mb-6">
          <strong>AYA Journey İstanbul</strong>, Avrupa seyahatleriniz için Schengen vize sürecindeki karmaşayı ortadan kaldırıyor. 
          Maslak oayızmizde; <strong>iData, VFS Global ve AS Travel</strong> süreçlerinizi yönetiyor, randevu krizine takılmadan dosyanızı en güçlü şekilde hazırlıyoruz.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="/iletisim" className="inline-block bg-sky-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-sky-700 transition shadow-xl transform hover:-translate-y-1">
            Vize Durumunu Ücretsiz Sorgula
          </a>
          <a href="tel:+90 530 485 31 15" className="inline-block bg-white border-2 border-sky-600 text-sky-700 font-bold px-8 py-4 rounded-xl hover:bg-sky-50 transition">
            Bize Ulaşın!
          </a>
        </div>
      </section>

      {/* 2. OPERASYONEL GÜÇ: İstanbul Vize Merkezleri */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="text-3xl mb-2 text-sky-600 font-bold">iData</div>
          <p className="text-sm font-bold text-slate-800">Almanya & İtalya</p>
          <p className="text-xs text-slate-500 mt-1">Gayrettepe - Altunizade</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="text-3xl mb-2 text-sky-600 font-bold">VFS Global</div>
          <p className="text-sm font-bold text-slate-800">Fransa - Hollanda - Yunanistan</p>
          <p className="text-xs text-slate-500 mt-1">Beyoğlu - Harbiye</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="text-3xl mb-2 text-sky-600 font-bold">AS Travel</div>
          <p className="text-sm font-bold text-slate-800">İspanya & Avusturya</p>
          <p className="text-xs text-slate-500 mt-1">Mecidiyeköy Merkezi</p>
        </div>
      </section>

      {/* 3. ÖNEMLİ: KULLANICIYI İKNA EDEN HİZMETLER */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-10">Schengen Başvurunuzu Neden Biz Yönetmeliyiz?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4 p-6 bg-white border border-gray-100 rounded-3xl hover:shadow-lg transition">
            <span className="text-4xl">🚀</span>
            <div>
              <h3 className="font-bold text-xl mb-2 text-sky-900">VIP Randevu Desteği</h3>
              <p className="text-gray-600 text-sm italic">İstanbul'daki aşırı yoğunlukta boş randevuları anlık yakalayan sistemimizle seyahatinizi garantiye alıyoruz.</p>
            </div>
          </div>
          <div className="flex gap-4 p-6 bg-white border border-gray-100 rounded-3xl hover:shadow-lg transition">
            <span className="text-4xl">📄</span>
            <div>
              <h3 className="font-bold text-xl mb-2 text-sky-900">Kusursuz Dilekçe & Form</h3>
              <p className="text-gray-600 text-sm italic">Her ülkenin farklı beklentileri vardır. Profilinize özel hazırlanan niyet mektubu ile ret riskini %90 azaltıyoruz.</p>
            </div>
          </div>
          <div className="flex gap-4 p-6 bg-white border border-gray-100 rounded-3xl hover:shadow-lg transition">
            <span className="text-4xl">🛡️</span>
            <div>
              <h3 className="font-bold text-xl mb-2 text-sky-900">Schengen Sağlık Sigortası</h3>
              <p className="text-gray-600 text-sm italic">Konsoloslukların kabul ettiği 30.000€ teminatlı sigortanızı ofisimizde 5 dakikada hazırlıyoruz.</p>
            </div>
          </div>
          <div className="flex gap-4 p-6 bg-white border border-gray-100 rounded-3xl hover:shadow-lg transition">
            <span className="text-4xl">↩️</span>
            <div>
              <h3 className="font-bold text-xl mb-2 text-sky-900">Ret İtiraz Süreçleri</h3>
              <p className="text-gray-600 text-sm italic">Daha önce aldığınız ret kararlarını analiz ediyor, eksiklikleri gidererek yeni bir şans yaratıyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LOKASYON: MERKEZİ İSTANBUL ODAĞI */}
      <section className="mb-16 bg-slate-900 text-white rounded-[3rem] p-12 overflow-hidden relative">
        <div className="md:flex items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 italic">İstanbul'un Kalbinde, Maslak'tayız</h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
             
              <strong> Beşiktaş,  Şişli ve Mecidiyeköy</strong>'den bize ulaşmak çok kolay. 
              Vize başvurusu öncesi yüz yüze strateji belirlemek her zaman kazandırır.
            </p>
            <div className="flex gap-4">
               {/* <div className="px-4 py-2 bg-white/10 rounded-lg text-sm">✓ Metroya 2 Dakika</div> */}
               {/* <div className="px-4 py-2 bg-white/10 rounded-lg text-sm">✓ Otopark Mevcut</div> */}
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/3 bg-sky-600 p-8 rounded-4xl text-center shadow-2xl">
            <p className="text-sky-100 uppercase text-xs tracking-widest font-bold mb-2">Hızlı İletişim</p>
            <p className="text-2xl font-black mb-4 tracking-tight leading-none">İstanbul Vize Masası</p>
            <a href="tel:+90 530 485 31 15" className="inline-block bg-white text-sky-600 font-bold px-6 py-2 rounded-full shadow-md">Şimdi Ara</a>
          </div>
        </div>
      </section>

      {/* 5. FAQ: İSTANBUL KULLANICISININ SORULARI */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Schengen Vizesi İstanbul Rehberi</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          <details className="group border border-slate-200 p-5 rounded-2xl hover:bg-slate-50 cursor-pointer">
            <summary className="font-bold flex justify-between items-center text-lg">
              İstanbul'da en kolay hangi ülkeden Schengen vizesi alınır?
              <span className="text-sky-600 transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-4 text-slate-600 border-t pt-4">Bu, seyahat amacınıza ve mevcut finansal profilinize bağlıdır. Genelde Yunanistan ve Fransa gibi ülkeler yoğun olsa da doğru dosya ile her ülkeden onay almak mümkündür. Profil analizi için ofisimize bekliyoruz.</p>
          </details>
          <details className="group border border-slate-200 p-5 rounded-2xl hover:bg-slate-50 cursor-pointer">
            <summary className="font-bold flex justify-between items-center text-lg">
              Schengen randevuları ne zaman açılır?
              <span className="text-sky-600 transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-4 text-slate-600 border-t pt-4">Randevular sistem üzerinden genellikle haftalık veya aylık periyotlarla güncellenir. İstanbul'daki yoğunluğu aşmak için randevu takip botlarımız ve uzman ekibimiz sürekli sistem başındadır.</p>
          </details>
        </div>
      </section>

      {/* 6. FINAL CTA: CONVERSION FOCUS */}
      <section className="`bg-gradient-to-br` from-sky-800 to-indigo-900 rounded-[3rem] p-12 text-center text-sky-900 shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          Schengen Vizeniz Pasaportunuza <br className="hidden md:block"/> Gelmeden Önce Bizimle Konuşun!
        </h2>
        <p className="text-sky-900 mb-10 text-lg max-w-2xl mx-auto font-light">
          Hatalı bir evrak veya tutarsız bir niyet mektubu vize reddine yol açabilir. 
          İstanbul'un tecrübeli ekibiyle riskleri ortadan kaldırın.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="/randevu" className="bg-white text-sky-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-sky-50 transition shadow-lg">
            Randevumu Planla
          </a>
          <a href="https://wa.me/905302199056" className="bg-emerald-500 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-emerald-600 transition shadow-lg flex items-center justify-center gap-2">
            WhatsApp Bilgi
          </a>
        </div>
      </section>

    </main> 
    </>
 
  );
};

export default Page;