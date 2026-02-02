import React from "react";

const Page = () => {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-12 text-gray-900">

      {/* HERO */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Amerika Vize Danışmanlığı Ankara
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl">
          Ankara’da Amerika vize danışmanlığı hizmeti sunan <strong>AYA Journey</strong>, 
          ABD B1/B2 turist vizesi, F1 öğrenci vizesi ve J1 değişim programları için 
          mülakat odaklı profesyonel danışmanlık sağlar.
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
          Ankara’da Amerika Vizesi Danışmanlık Hizmetimiz
        </h2>

        <p className="text-gray-700 mb-4 max-w-3xl">
          AYA Journey Ankara ofisimizde Amerika vize başvuruları, başvuru sahibinin
          profiline özel olarak değerlendirilir. Evrak kontrolünden DS-160 form
          doldurmaya, mülakat hazırlığından başvuru sonrası sürece kadar tüm aşamalar
          titizlikle yönetilir.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>B1/B2 Amerika turist vizesi danışmanlığı</li>
          <li>F1 Amerika öğrenci vizesi danışmanlığı</li>
          <li>J1 değişim programı vizesi danışmanlığı</li>
          <li>DS-160 form doldurma ve kontrol</li>
          <li>Mülakat simülasyonu ve birebir hazırlık</li>
        </ul>
      </section>

      {/* LOKAL SİNYAL */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Ankara Ofisimiz
        </h2>

        <p className="text-gray-700 max-w-3xl">
          Ankara <strong>Çukurambar</strong> bölgesinde yer alan ofisimiz,
          <strong> Kızılay, Söğütözü ve Eskişehir Yolu</strong>’na kolay ulaşım
          imkânı sunmaktadır. Amerika vizesi başvurularınız için yüz yüze
          danışmanlık hizmeti alabilirsiniz.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Ankara’dan Amerika Vizesi Hakkında Sıkça Sorulan Sorular
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              Amerika vizesi Ankara’dan başvurulur mu?
            </h3>
            <p className="text-gray-700">
              Evet. Ankara’dan Amerika vize başvurusu yapılabilir ve mülakatlar
              ABD Ankara Büyükelçiliği’nde gerçekleştirilmektedir.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Ankara’da Amerika vize mülakatı nerede yapılır?
            </h3>
            <p className="text-gray-700">
              Amerika vize mülakatları Ankara’da ABD Büyükelçiliği’nde yapılmaktadır.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Amerika vizesi danışmanlık almak avantaj sağlar mı?
            </h3>
            <p className="text-gray-700">
              Profesyonel danışmanlık, doğru başvuru stratejisi ve mülakat hazırlığı
              ile vize alma ihtimalini artırabilir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ankara’da Amerika Vizesi İçin Profesyonel Destek
        </h2>

        <p className="text-gray-700 mb-6">
          Amerika vize başvurunuzu güvenle ve doğru stratejiyle yapmak için
          ücretsiz ön danışmanlık randevunuzu oluşturun.
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
