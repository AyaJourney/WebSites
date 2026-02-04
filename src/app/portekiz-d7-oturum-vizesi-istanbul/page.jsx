import React from "react";

const Page = () => {
  return (
    <main className="max-w-300 mx-auto px-4 py-12 text-gray-900 leading-relaxed">
      
      {/* 1. HERO: Yaşam Tarzı ve Uzmanlık Vurgusu */}
      <section className="mb-16">
        <div className="inline-block bg-teal-50 text-teal-700 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-teal-100">
          İstanbul'un Portekiz Göçmenlik Uzmanı
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 leading-tight">
          Portekiz D7 Oturum Vizesi Danışmanlığı İstanbul
        </h1>

        <p className="text-xl text-gray-700 max-w-4xl mb-6">
          <strong>AYA Journey İstanbul</strong>, Portekiz'de yaşamak ve Avrupa oturum izni almak isteyen pasif gelir sahipleri için anahtar teslim çözümler sunar. 
          Levent ofisimizde; <strong>NIF alımı, Portekiz banka hesabı ve uzaktan kira sözleşmesi</strong> süreçlerini yasal güvenceyle yönetiyoruz.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="/iletisim" className="inline-block bg-teal-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-xl transform hover:-translate-y-1">
            D7 Uygunluk Testi Yapın
          </a>
          <a href="tel:+90 530 485 31 15" className="inline-block bg-white border-2 border-teal-600 text-teal-700 font-bold px-8 py-4 rounded-lg hover:bg-teal-50 transition">
            Bize Ulaşın
          </a>
        </div>
      </section>

      {/* 2. GÜVEN SİNYALLERİ (Trust Signals) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 py-10 border-y border-gray-100 text-center">
        <div><p className="text-3xl font-bold text-teal-600">Levent</p><p className="text-sm text-gray-600 font-medium">Merkezi Konum</p></div>
        <div><p className="text-3xl font-bold text-teal-600">30 Günde</p><p className="text-sm text-gray-600 font-medium">NIF & Banka Hesabı</p></div>
        <div><p className="text-3xl font-bold text-teal-600">100%</p><p className="text-sm text-gray-600 font-medium">Şeffaf Süreç</p></div>
        <div><p className="text-3xl font-bold text-teal-600">AB</p><p className="text-sm text-gray-600 font-medium">Vatandaşlık Yolu</p></div>
      </div>

      {/* 3. İSTANBUL ÖZEL HİZMET PAKETİMİZ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Neden İstanbul D7 Danışmanlığımızı Seçmelisiniz?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-4 text-teal-900">Pasif Gelir Analizi</h3>
            <p className="text-gray-600 text-sm">Emekli maaşı, kira geliri veya uzaktan çalışma (Remote) gelirlerinizin Portekiz kriterlerine uyumunu denetliyoruz.</p>
          </div>
          <div className="p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-4 text-teal-900">Uzakten NIF & Hesap</h3>
            <p className="text-gray-600 text-sm">Portekiz'e gitmeden, İstanbul ofisimizden vekaletle vergi numaranızı alıp banka hesabınızı aktif ediyoruz.</p>
          </div>
          <div className="p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-4 text-teal-900">Konaklama Çözümleri</h3>
            <p className="text-gray-600 text-sm">Vize için zorunlu olan 1 yıllık kira sözleşmesini Portekiz'deki partnerlerimiz aracılığıyla güvenle yapıyoruz.</p>
          </div>
        </div>
      </section>

      {/* 4. LOKAL SEO: LEVENT / MASLAK / ŞİŞLİ HATTI */}
      <section className="mb-16 bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden">
        <div className="relative z-10 md:flex items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">İstanbul’un Merkezinde Yüz Yüze Danışmanlık</h2>
            <p className="text-slate-300 mb-6 text-lg">
              Portekiz D7 vizesi süreci ciddi bir dosya hazırlığı gerektirir. <strong>Levent</strong> bölgesindeki ofisimiz, 
              <strong> Beşiktaş, Maslak, Şişli ve Sarıyer</strong>'den ulaşım sağlayan danışanlarımız için merkezi bir buluşma noktasıdır.
            </p>
            <p className="text-slate-400 italic">"Kahvenizi içerken Portekiz'deki yeni hayatınızı birlikte planlayalım."</p>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/3 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
            <p className="text-teal-400 font-bold mb-2">VFS Global İstanbul</p>
            <p className="text-sm text-slate-200">Başvurularınızın yapılacağı VFS Global merkezlerine yakınlığımızla, randevu günü yanınızdayız.</p>
          </div>
        </div>
      </section>

      {/* 5. SIKÇA SORULAN SORULAR (SEO BOOST) */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Portekiz D7 Vizesi Hakkında Merak Edilenler</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
            <summary className="p-5 font-bold cursor-pointer flex justify-between items-center group-hover:bg-gray-50">
              D7 vizesi ile Portekiz'de çalışabilir miyim?
              <span className="text-teal-600 transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-5 text-gray-600 border-t border-gray-100 bg-white">
              Evet. D7 vizesi ile Portekiz'e yerleştikten sonra oturum kartınızla yerel şirketlerde çalışabilir veya kendi işinizi kurabilirsiniz.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
            <summary className="p-5 font-bold cursor-pointer flex justify-between items-center group-hover:bg-gray-50">
              Başvuru süreci ne kadar sürer?
              <span className="text-teal-600 transition group-open:rotate-180">▼</span>
            </summary>
            <div className="p-5 text-gray-600 border-t border-gray-100 bg-white">
              Dosya hazırlığı yaklaşık 1 ay, konsolosluk değerlendirmesi ise ortalama 60-90 gün sürmektedir. İstanbul VFS Global üzerinden süreci hızlandırıyoruz.
            </div>
          </details>
        </div>
      </section>

      {/* 6. FINAL CTA: EYLEM ÇAĞRISI */}
      <section className="`bg-gradient-to-r` from-teal-800 to-teal-950 rounded-3xl p-12 text-center text-teal-900 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Avrupa Kapılarını D7 Vizesi İle Açın
        </h2>
        <p className="text-teal-900 mb-10 text-lg max-w-2xl mx-auto">
          Portekiz'de yaşam, vergi avantajları ve vatandaşlık yolu sizi bekliyor. 
          İstanbul'un uzman ekibiyle sürecinizi sıfır hata ile tamamlayın.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="/randevu" className="bg-white text-teal-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-teal-50 transition shadow-lg">
            Randevu Alın
          </a>
          <a href="https://wa.me/905302199056" className="bg-teal-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-teal-400 transition shadow-lg border border-teal-400">
            Telefonla Bilgi Al
          </a>
        </div>
      </section>

    </main>
  );
};

export default Page;