import React from "react";

const Page = () => {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-12 text-gray-900">

      {/* HERO */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          İngiltere Vize Danışmanlığı Ankara
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl">
          Ankara’da İngiltere vize danışmanlığı hizmeti sunan <strong>AYA Journey</strong>, 
          İngiltere turist, öğrenci ve aile ziyareti vizeleri için profesyonel
          danışmanlık hizmeti vermektedir.
        </p>

        <div className="mt-6">
          <a href="/iletisim" className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Ücretsiz Ön Danışmanlık Al
          </a>
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Ankara’da İngiltere Vizesi Danışmanlık Hizmetimiz
        </h2>

        <p className="text-gray-700 mb-4 max-w-3xl">
          AYA Journey Ankara ofisimizde İngiltere vize başvuruları, doğru evrak
          hazırlığı ve başvuru stratejisi ile profesyonel şekilde yürütülmektedir.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>İngiltere turist vizesi danışmanlığı</li>
          <li>İngiltere öğrenci vizesi danışmanlığı</li>
          <li>Aile ve arkadaş ziyareti vizesi</li>
          <li>Online başvuru süreci yönetimi</li>
          <li>Vize reddi sonrası yeniden başvuru desteği</li>
        </ul>
      </section>

      {/* LOKAL */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Ankara Ofisimiz</h2>
        <p className="text-gray-700 max-w-3xl">
          Ankara <strong>Çukurambar</strong> bölgesinde yer alan ofisimiz,
          <strong> Kızılay, Söğütözü ve Eskişehir Yolu</strong> gibi merkezi
          lokasyonlara yakın konumdadır.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ankara’da İngiltere Vizesi İçin Profesyonel Destek
        </h2>
        <p className="text-gray-700 mb-6">
          İngiltere vize başvurunuzu güvenle tamamlamak için
          ücretsiz ön danışmanlık randevunuzu oluşturun.
        </p>
        <a href="/iletisim" className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
          Hemen Başvur
        </a>
      </section>

    </main>
  );
};

export default Page;
