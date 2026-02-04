import React from "react";

const Page = () => {
  return (
    <main className="max-w-300 mx-auto px-4 py-12 text-gray-900 leading-relaxed">
      
      {/* 1. HERO: Problem Çözme Odaklı Giriş */}
      <section className="mb-16">
        <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-blue-100">
          Ankara'nın En Hızlı Schengen Randevu & Başvuru Merkezi
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">
          Schengen Vize Danışmanlığı Ankara: Kolay ve Hızlı Onay
        </h1>

        <p className="text-xl text-gray-700 max-w-4xl mb-6">
          <strong>AYA Journey Ankara</strong>, Avrupa seyahatleriniz için Schengen vize sürecindeki randevu krizini ve karmaşık evrak listelerini sizin için çözer. 
          Almanya, Fransa, İtalya, Hollanda ve tüm Avrupa ülkeleri için <strong>yüksek onay oranlı</strong> profesyonel dosya hazırlığı sağlıyoruz.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="/iletisim" className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-700 transition shadow-xl transform hover:-translate-y-1">
            Ücretsiz Ön Değerlendirme Al
          </a>
          <a href="tel:+90XXXXXXXXXX" className="inline-block bg-white border-2 border-gray-300 text-gray-800 font-bold px-8 py-4 rounded-lg hover:bg-gray-50 transition">
            Hemen Ara
          </a>
        </div>
      </section>

      {/* 2. GÜVEN SİNYALLERİ & POPÜLER ÜLKELER */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 border border-gray-100 rounded-xl bg-slate-50">
            <p className="font-bold text-blue-700 text-lg">Almanya & İtalya</p>
            <p className="text-xs text-gray-500">iData İşlemleri</p>
          </div>
          <div className="p-4 border border-gray-100 rounded-xl bg-slate-50">
            <p className="font-bold text-blue-700 text-lg">Fransa </p>
            <p className="text-xs text-gray-500">VFS Global Desteği</p>
          </div>
          <div className="p-4 border border-gray-100 rounded-xl bg-slate-50">
            <p className="font-bold text-blue-700 text-lg">Yunanistan</p>
            <p className="text-xs text-gray-500">Kosmos Süreçleri</p>
          </div>
          <div className="p-4 border border-gray-100 rounded-xl bg-slate-50">
            <p className="font-bold text-blue-700 text-lg">Hollanda</p>
            <p className="text-xs text-gray-500">VFS Randevu Takibi</p>
          </div>
        </div>
      </section>

      {/* 3. HİZMET FARKI: Neden Biz? */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Ankara'da Schengen Vizesi İçin Doğru Adres</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4 items-start">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-700 font-bold italic">01</div>
            <div>
              <h3 className="font-bold text-xl mb-2">Hızlı Randevu Takibi</h3>
              <p className="text-gray-600">Ankara'daki başvuru merkezlerinde (VFS Global, iData, AS Travel) açılan boş randevuları anlık takip ederek seyahat planınıza en uygun tarihi yakalıyoruz.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-700 font-bold italic">02</div>
            <div>
              <h3 className="font-bold text-xl mb-2">Kişiye Özel Evrak Analizi</h3>
              <p className="text-gray-600">Sabit evrak listeleri yerine; mesleki durumunuz ve finansal gücünüze göre vize memurunun ikna olacağı en güçlü dosyayı hazırlıyoruz.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-700 font-bold italic">03</div>
            <div>
              <h3 className="font-bold text-xl mb-2">Profesyonel Dilekçe Yazımı</h3>
              <p className="text-gray-600">Schengen vizesinin en kritik parçası olan "Vize Talep Dilekçesi"ni her ülke için özel formatta ve ikna edici dille kaleme alıyoruz.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-700 font-bold italic">04</div>
            <div>
              <h3 className="font-bold text-xl mb-2">Seyahat Sağlık Sigortası</h3>
              <p className="text-gray-600">30.000 Euro teminatlı, tüm Schengen bölgesinde geçerli zorunlu seyahat sağlık sigortanızı anında düzenliyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LOKAL VURGU: ÇUKURAMBAR & MERKEZİ ANKARA */}
      <section className="mb-16 bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Ankara Çukurambar Ofisimizde Sizi Bekliyoruz</h2>
            <p className="text-slate-300 text-lg mb-6">
              Schengen başvurularının merkezi olan <strong>Çukurambar</strong>'dayız. 
              <strong> Kızılay, Söğütözü, Eskişehir Yolu ve GOP</strong> gibi bölgelere yakınlığımızla, Ankara'daki tüm büyükelçilik ve başvuru merkezlerine hakimiz.
            </p>
            <p className="text-blue-400 font-medium">Yüz yüze danışmanlık ile dosyanızı riske atmayın.</p>
          </div>
          <div className=" bg-white text-slate-900  rounded-2xl shadow-2xl">

           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d743.3320388142544!2d32.81232332649057!3d39.90887088085886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d349b988f4bea5%3A0x9c16ddcef1c2d4ae!2sAYA%20Journey!5e0!3m2!1str!2str!4v1770189697075!5m2!1str!2str" 
  width="600"         
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      {/* 5. FAQ: KRİTİK SORULAR (SEO BOOST) */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Ankara Schengen Vizesi Hakkında Sıkça Sorulanlar</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <details className="p-6 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition">
            <summary className="font-bold text-slate-800">Schengen vize randevusu bulamıyorum, ne yapmalıyım?</summary>
            <p className="mt-4 text-gray-600 text-sm">Ankara'daki yoğunluk nedeniyle randevu sistemleri sık sık dolmaktadır. AYA Journey olarak sistemleri 7/24 takip ediyor ve iptal edilen randevuları sizin adınıza yakalıyoruz.</p>
          </details>
          <details className="p-6 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition">
            <summary className="font-bold text-slate-800">Vize reddi aldım, tekrar başvurabilir miyim?</summary>
            <p className="mt-4 text-gray-600 text-sm">Evet. Red kararındaki maddeleri (genelde 2, 8 veya 10. maddeler) analiz ederek hataları düzeltiyor ve çok daha güçlü bir dosya ile itiraz veya yeniden başvuru sürecinizi yönetiyoruz.</p>
          </details>
        </div>
      </section>

      {/* 6. FINAL CTA: EYLEM ÇAĞRISI */}
      <section className="`bg-gradient-to-br` from-blue-700 to-indigo-900 rounded-3xl p-12 text-center text-white shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Schengen Vizenizi Şansa Bırakmayın!
        </h2>
        <p className="text-blue-900 mb-8 text-lg max-w-2xl mx-auto">
          Eksik evrak veya yanlış beyan nedeniyle reddedilen vizeler pasaportunuzda kalıcı iz bırakır. Ankara uzmanlığımızla başvurunuzu profesyonelce yapalım.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/iletisim" className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg">
            Randevu Sorgula
          </a>
          <a href="https://wa.me/905302199056" className="bg-green-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition shadow-lg flex items-center justify-center gap-2">
            WhatsApp Bilgi Hattı
          </a>
        </div>
      </section>

    </main>
  );
};

export default Page;