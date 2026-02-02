import React from "react";

const Page = () => {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-12 text-gray-900">

      {/* HERO */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Portekiz D7 Oturum Vizesi Danışmanlığı İstanbul
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl">
          İstanbul’da Portekiz D7 oturum vizesi danışmanlığı hizmeti sunan{" "}
          <strong>AYA Journey</strong>, pasif gelir sahipleri, emekliler ve
          yurt dışında yaşamak isteyenler için Portekiz oturum sürecini
          profesyonel şekilde yönetir.
        </p>

        <div className="mt-6">
          <a
            href="/iletisim"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Ücretsiz Ön Danışmanlık Al
          </a>
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          İstanbul’da Portekiz D7 Vizesi Danışmanlık Hizmetimiz
        </h2>

        <p className="text-gray-700 mb-4 max-w-3xl">
          AYA Journey İstanbul ofisimizde Portekiz D7 vizesi başvuruları,
          başvuru sahibinin gelir durumu ve yaşam planına göre detaylı olarak
          analiz edilir. Vize başvurusundan Portekiz’de oturum izni alınmasına
          kadar tüm süreç adım adım takip edilir.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Portekiz D7 vizesi uygunluk analizi</li>
          <li>Pasif gelir ve finansal yeterlilik değerlendirmesi</li>
          <li>Portekiz kira sözleşmesi süreci danışmanlığı</li>
          <li>D7 vizesi başvuru dosyası hazırlığı</li>
          <li>Oturum izni ve uzatma süreçleri</li>
        </ul>
      </section>

      {/* LOKAL */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          İstanbul Ofisimiz
        </h2>

        <p className="text-gray-700 max-w-3xl">
          İstanbul ofisimiz <strong>Levent</strong> bölgesinde yer almakta olup,
          <strong> Beşiktaş, Şişli, Maslak ve Mecidiyeköy</strong> gibi merkezi
          lokasyonlardan kolay ulaşım imkânı sunmaktadır. Portekiz D7 vizesi
          süreciniz için yüz yüze danışmanlık alabilirsiniz.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          İstanbul’da Portekiz D7 Oturum Vizesi İçin Profesyonel Destek
        </h2>

        <p className="text-gray-700 mb-6">
          Portekiz’de yasal oturum hakkı elde etmek için ücretsiz ön danışmanlık
          randevunuzu oluşturun.
        </p>

        <a
          href="/iletisim"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Hemen Başvur
        </a>
      </section>

    </main>
  );
};

export default Page;
