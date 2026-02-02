import React from "react";

const Page = () => {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-12 text-gray-900">

      {/* HERO */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Portekiz D7 Oturum Vizesi Danışmanlığı Ankara
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl">
          Ankara’da Portekiz D7 oturum vizesi danışmanlığı hizmeti sunan{" "}
          <strong>AYA Journey</strong>, Portekiz’de yaşamak isteyen bireyler için
          D7 vize ve oturum izni sürecini profesyonel şekilde yürütür.
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
          Ankara’da Portekiz D7 Vizesi Danışmanlık Hizmetimiz
        </h2>

        <p className="text-gray-700 mb-4 max-w-3xl">
          AYA Journey Ankara ofisimizde Portekiz D7 vizesi başvuruları,
          başvuru sahibinin gelir kaynakları ve Portekiz’de yaşam planı
          doğrultusunda detaylı olarak değerlendirilir.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Portekiz D7 vizesi başvuru danışmanlığı</li>
          <li>Pasif gelir ve finansal yeterlilik analizi</li>
          <li>Portekiz konaklama ve adres süreci danışmanlığı</li>
          <li>D7 vizesi başvuru dosyası hazırlığı</li>
          <li>Oturum izni ve uzatma işlemleri</li>
        </ul>
      </section>

      {/* LOKAL */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Ankara Ofisimiz
        </h2>

        <p className="text-gray-700 max-w-3xl">
          Ankara <strong>Çukurambar</strong> bölgesinde yer alan ofisimiz,
          <strong> Kızılay, Söğütözü ve Eskişehir Yolu</strong> gibi merkezi
          noktalara yakın konumdadır. Portekiz D7 vizesi süreciniz için
          yüz yüze danışmanlık alabilirsiniz.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ankara’da Portekiz D7 Oturum Vizesi İçin Profesyonel Destek
        </h2>

        <p className="text-gray-700 mb-6">
          Portekiz’de yasal oturum ve yaşam planınız için ücretsiz ön danışmanlık
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
