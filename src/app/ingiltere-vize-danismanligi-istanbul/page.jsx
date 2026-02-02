import React from "react";

const Page = () => {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-12 text-gray-900">

      {/* HERO */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          İngiltere Vize Danışmanlığı İstanbul
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl">
          İstanbul’da İngiltere vize danışmanlığı hizmeti sunan <strong>AYA Journey</strong>, 
          İngiltere turist vizesi, öğrenci vizesi ve aile ziyareti vizeleri için
          profesyonel ve kişiye özel danışmanlık sağlar.
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
          İstanbul’da İngiltere Vizesi Danışmanlık Hizmetimiz
        </h2>

        <p className="text-gray-700 mb-4 max-w-3xl">
          AYA Journey İstanbul ofisimizde İngiltere vize başvuruları, başvuru sahibinin
          profiline göre detaylı olarak değerlendirilir. Evrak hazırlığı, online başvuru
          ve biyometri süreci titizlikle yönetilir.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>İngiltere turist vizesi danışmanlığı</li>
          <li>İngiltere öğrenci vizesi danışmanlığı</li>
          <li>Aile & arkadaş ziyareti vizesi</li>
          <li>Online başvuru ve evrak kontrolü</li>
          <li>Vize reddi sonrası yeniden başvuru</li>
        </ul>
      </section>

      {/* LOKAL */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">İstanbul Ofisimiz</h2>
        <p className="text-gray-700 max-w-3xl">
          İstanbul ofisimiz <strong>Levent</strong> bölgesinde yer almakta olup,
          <strong> Beşiktaş, Şişli, Maslak ve Mecidiyeköy</strong> gibi merkezi
          lokasyonlardan kolay ulaşım imkânı sunmaktadır.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          İstanbul’da İngiltere Vizesi İçin Profesyonel Destek
        </h2>
        <p className="text-gray-700 mb-6">
          İngiltere vize başvurunuzu doğru planlama ile gerçekleştirmek için
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
