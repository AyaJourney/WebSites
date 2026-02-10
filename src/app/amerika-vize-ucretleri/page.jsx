import React from "react";
export const metadata = {
  title: "Amerika Vize Ücretleri | DS-160, Randevu ve İşlem Masrafları (2026)",
  description:
    "Amerika vize ücretleri nelerdir? DS-160 başvuru ücreti, randevu masrafı, konsolosluk harcı ve ek işlem ücretlerini 2026 güncel haliyle öğrenin.",
  keywords: [
    "amerika vize ücretleri",
    "abd vize ucretleri 2026",
    "amerika vize harci",
    "ds-160 ucret",
    "abd vize randevu ucret"
  ],
  alternates: {
    canonical: "https://www.ayajourney.com/amerika-vize-ucretleri"
  },
};

const AmerikaVizeUcretleri = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-slate-900">

      {/* HERO */}
      <header className="text-center mb-20">
        <span className="inline-block mb-6 rounded-full bg-blue-100 px-6 py-2 text-xs font-semibold uppercase tracking-widest text-blue-700">
          ABD Vize Masrafları
        </span>

        <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8">
          Amerika Vize <span className="text-blue-600 italic">Ücretleri</span> 2026
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
          Amerika vizesi (B1/B2, F1 ve diğer türler) için ödemeniz gereken resmi
          ücretleri bilmek, başvuru sürecini planlamakta kritik önemdedir.
          Aşağıda güncel ücretleri ve masraf kalemlerini bulabilirsiniz.
        </p>
      </header>

      {/* CEVAP BLOĞU */}
      <section className="mb-24 max-w-4xl mx-auto bg-slate-50 p-10 rounded-[2.5rem]">
        <h2 className="text-2xl font-black mb-4">Amerika Vize Ücretlerine Kısa Bakış</h2>

        <p className="text-slate-700 leading-relaxed">
          Amerika vize sürecinde ödemeniz gereken başlıca ücretler:
        </p>

        <ul className="mt-4 list-disc list-inside space-y-2 text-slate-700">
          <li><strong>DS-160 Başvuru Ücreti:</strong> Konsolosluk tarafından belirlenen sabit ücret</li>
          <li><strong>Randevu / İşlem Masrafı:</strong> Banka işlemleri ve hizmet ücreti</li>
          <li><strong>Konsolosluk Harcı:</strong> Vize türüne göre değişebilir</li>
          <li><strong>Kargo / Teslim Ücreti:</strong> Pasaport gönderim bedeli</li>
        </ul>
      </section>

      {/* DETAYLI ÜCRETLER */}
      <section className="mb-24">
        <h2 className="text-3xl font-black mb-10 text-center">Amerika Vize Ücret Detayları</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border rounded-2xl">
            <h3 className="font-bold mb-3">DS-160 Başvuru Ücreti</h3>
            <p className="text-slate-600">
              DS-160 formu için ödenen resmi başvuru ücretidir ve genellikle sabittir.
              Banka kanalıyla yatırılır.
            </p>
          </div>

          <div className="p-8 border rounded-2xl">
            <h3 className="font-bold mb-3">ABD Vize Randevu / İşlem Ücreti</h3>
            <p className="text-slate-600">
              Konsolosluk randevusu alırken banka ve hizmet sağlayıcısına ödenen
              işlem ücretidir.
            </p>
          </div>

          <div className="p-8 border rounded-2xl">
            <h3 className="font-bold mb-3">Konsolosluk Harcı</h3>
            <p className="text-slate-600">
              Vize türüne ve ülkeye göre değişebilir; başvuru esnasında net rakam çıkar.
            </p>
          </div>

          <div className="p-8 border rounded-2xl">
            <h3 className="font-bold mb-3">Kargo / Teslim Ücreti</h3>
            <p className="text-slate-600">
              Pasaport tesliminde PTT veya kurye ile yapılan teslim ücreti.
            </p>
          </div>
        </div>
      </section>

      {/* NOTLAR */}
      <section className="mb-24 max-w-4xl mx-auto bg-slate-50 p-10 rounded-[2.5rem]">
        <h2 className="text-3xl font-black mb-6">Bilmeniz Gerekenler</h2>
        <ul className="space-y-3 text-slate-600 leading-relaxed">
          <li>• Konsolosluk ücretleri dönemsel olarak güncellenebilir.</li>
          <li>• Banka işlem ücretleri bankaya göre değişir.</li>
          <li>• Vize ücretleri geri iade edilmez.</li>
          <li>• Ücretlerin güncel hali DS-160 formunda otomatik gösterilir.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 rounded-[2.5rem] p-16 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Amerika Vize Ücret Planınızı Netleştirelim
        </h2>

        <p className="max-w-2xl mx-auto text-blue-100 mb-10">
          Ücret kalemleri hakkında profesyonel değerlendirme alın ve başvuru sürecinizi
          hatasız planlayın.
        </p>

        <a
          href="https://wa.me/905302199056"
          className="inline-block rounded-xl bg-white px-10 py-4 text-blue-700 font-semibold hover:shadow-xl transition"
        >
          Ücretsiz Ön Değerlendirme
        </a>
      </section>

    </main>
  );
};

export default AmerikaVizeUcretleri;
