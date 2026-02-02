import React from "react";

const Page = () => {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-12 text-gray-900">

      {/* HERO */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Schengen Vize Danışmanlığı Ankara
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl">
          Ankara’da Schengen vize danışmanlığı hizmeti sunan <strong>AYA Journey</strong>, 
          Avrupa ülkelerine yapılacak turistik, ticari ve kısa süreli seyahatler için 
          Schengen vize başvurularında profesyonel ve kişiye özel danışmanlık sağlar.
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
          Ankara’da Schengen Vizesi Danışmanlık Hizmetimiz
        </h2>

        <p className="text-gray-700 mb-4 max-w-3xl">
          AYA Journey Ankara ofisimizde Schengen vize başvuruları, seyahat amacına ve
          başvuru sahibinin profiline göre detaylı şekilde analiz edilir.
          Evrak hazırlığından randevu sürecine kadar tüm aşamalar titizlikle yönetilir.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Turistik Schengen vizesi danışmanlığı</li>
          <li>Ticari Schengen vizesi danışmanlığı</li>
          <li>Aile ve arkadaş ziyareti vizesi</li>
          <li>Randevu alma ve evrak kontrolü</li>
          <li>Vize reddi sonrası yeniden başvuru desteği</li>
        </ul>
      </section>

      {/* LOKAL SİNYAL */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Ankara Ofisimiz
        </h2>

        <p className="text-gray-700 max-w-3xl">
          Ankara <strong>Çukurambar</strong> bölgesinde yer alan ofisimiz,
          <strong> Kızılay, Söğütözü ve Eskişehir Yolu</strong> gibi merkezi
          noktalardan kolay ulaşım imkânı sunmaktadır.
          Schengen vize başvurularınız için yüz yüze danışmanlık hizmeti alabilirsiniz.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Ankara’dan Schengen Vizesi Hakkında Sıkça Sorulan Sorular
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              Schengen vizesi Ankara’dan başvurulur mu?
            </h3>
            <p className="text-gray-700">
              Evet. Ankara’dan Schengen vize başvuruları, ilgili ülkenin Ankara’daki
              büyükelçiliği veya yetkili vize başvuru merkezleri üzerinden yapılmaktadır.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Ankara’da Schengen vize başvuruları nereden yapılır?
            </h3>
            <p className="text-gray-700">
              Başvurular, ilgili ülkenin Ankara Büyükelçiliği veya yetkili
              vize başvuru merkezleri aracılığıyla yapılmaktadır.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Schengen vizesi kaç günde sonuçlanır?
            </h3>
            <p className="text-gray-700">
              Başvurular genellikle 7–15 iş günü içerisinde sonuçlanmakla birlikte,
              resmi tatiller ve dönemsel yoğunluklara göre süre değişebilir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ankara’da Schengen Vizesi İçin Profesyonel Destek
        </h2>

        <p className="text-gray-700 mb-6">
          Schengen vize başvurunuzu güvenle ve doğru planlama ile yapmak için
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
