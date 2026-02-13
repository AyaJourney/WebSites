import React from "react";

export const metadata = {
  title: "Yunanistan Vize Evrakları 2026 | Güncel Schengen Belge Listesi",
  description:
    "Yunanistan vize evrakları 2026 güncel liste: turistik, ticari ve aile ziyareti için gerekli belgeler, banka dökümü, sponsor evrakları, fotoğraf ölçüsü ve VFS randevu hazırlığı.",
  keywords: [
    "yunanistan vize evrakları",
    "yunanistan schengen vize evrakları",
    "yunanistan vizesi için gerekli belgeler",
    "yunanistan vize evrak listesi",
    "yunanistan vize fotoğraf ölçüsü",
    "yunanistan vize banka dökümü",
    "yunanistan vfs evrakları"
  ],
  alternates: { canonical: "https://www.ayajourney.com/yunanistan-vize-evraklari" }
};

const YunanistanVizeEvraklari = () => {
  return (
<main className="min-h-screen bg-zinc-50 text-slate-900">

  {/* HERO */}
  <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
    <div className="bg-white border border-slate-200/70 rounded-3xl shadow-sm p-8 md:p-12">

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
          2026 Güncel • Schengen C Tipi
        </span>
        <span className="inline-flex items-center gap-2 bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2 rounded-full text-xs font-semibold">
          VFS Global Başvuru Dosyası
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        Yunanistan Vize Evrakları (Güncel Liste)
      </h1>

      <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-4xl">
        <strong>Yunanistan vize evrakları</strong>, başvuru türüne ve mesleki duruma göre değişir.
        Genel başvuru süreci hakkında bilgi almak için 
        <a href="/yunanistan-vize" className="text-blue-600 font-semibold underline ml-1">
          Yunanistan Schengen vize rehberine
        </a> göz atabilirsiniz.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/yunanistan-vize-randevusu"
          className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
        >
          Randevu Süreci
        </a>
        <a
          href="/yunanistan-vize-reddi"
          className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 transition"
        >
          Ret Risklerini İncele
        </a>
      </div>

    </div>
  </section>


  {/* ORTAK EVRAKLAR */}
  <section id="ortak-evraklar" className="max-w-6xl mx-auto px-6 py-12">
    <div className="bg-white border border-slate-200/70 rounded-3xl p-8 md:p-12 shadow-sm">

      <h2 className="text-3xl font-extrabold mb-6">
        Yunanistan Schengen Vizesi İçin Ortak Evraklar
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          "Pasaport (en az 2 boş sayfa)",
          "Schengen başvuru formu",
          "Biyometrik fotoğraf (35x45mm)",
          "Seyahat sağlık sigortası (30.000€)",
          "Uçuş rezervasyonu",
          "Konaklama belgesi",
          "Kimlik ve nüfus kayıt örneği",
          "VFS randevu çıktısı"
        ].map((item) => (
          <div key={item} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-sm">
            • {item}
          </div>
        ))}
      </div>

      <p className="mt-10 text-slate-700">
        Belgelerinizi tamamladıktan sonra 
        <a href="/yunanistan-vize-randevusu" className="text-blue-600 font-semibold underline ml-1">
          Yunanistan vize randevusu oluşturmanız
        </a> gerekir.
      </p>

    </div>
  </section>


  {/* BANKA & FİNANS */}
  <section className="max-w-6xl mx-auto px-6 pb-12">
    <div className="bg-white border border-slate-200/70 rounded-3xl p-8 md:p-12 shadow-sm">

      <h2 className="text-3xl font-extrabold mb-6">
        Banka Dökümü ve Finansal Belgeler
      </h2>

      <ul className="space-y-3 text-slate-600">
        <li>• Son 3–6 aylık hareketli hesap dökümü</li>
        <li>• Düzenli gelir ile uyumlu bakiye</li>
        <li>• Büyük para girişleri için açıklayıcı belge</li>
        <li>• Sponsor varsa sponsor belgeleri</li>
      </ul>

      <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-6">
        <p className="font-semibold text-red-900 mb-2">Kritik Uyarı</p>
        <p className="text-sm text-red-900/80">
          Finansal tutarsızlıklar,
          <a href="/yunanistan-vize-reddi" className="text-blue-700 font-semibold underline ml-1">
            Yunanistan vize reddi
          </a> sebeplerinden biridir.
        </p>
      </div>

    </div>
  </section>


  {/* MESLEKİ BELGELER */}
  <section className="max-w-6xl mx-auto px-6 pb-12">
    <div className="bg-white border border-slate-200/70 rounded-3xl p-8 md:p-12 shadow-sm">

      <h2 className="text-3xl font-extrabold mb-8">
        Mesleğe Göre Ek Evraklar
      </h2>

      <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-600">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <strong>Çalışan</strong>
          <ul className="mt-2 space-y-1">
            <li>• İş yeri izin yazısı</li>
            <li>• Maaş bordrosu</li>
            <li>• SGK hizmet dökümü</li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <strong>Şirket Sahibi</strong>
          <ul className="mt-2 space-y-1">
            <li>• Vergi levhası</li>
            <li>• Ticaret sicil gazetesi</li>
            <li>• Faaliyet belgesi</li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <strong>Öğrenci</strong>
          <ul className="mt-2 space-y-1">
            <li>• Öğrenci belgesi</li>
            <li>• Sponsor dilekçesi</li>
            <li>• Sponsor banka dökümü</li>
          </ul>
        </div>
      </div>

    </div>
  </section>


  {/* SSS */}
  <section className="max-w-6xl mx-auto px-6 pb-16">
    <div className="bg-white border border-slate-200/70 rounded-3xl p-8 md:p-12 shadow-sm">

      <h2 className="text-3xl font-extrabold mb-8 text-center">
        Yunanistan Vize Evrakları – Sık Sorular
      </h2>

      <div className="space-y-6 text-slate-600 max-w-3xl mx-auto">

        <div>
          <h3 className="font-semibold text-lg">
            Randevu almadan evrak hazırlayabilir miyim?
          </h3>
          <p className="mt-2">
            Evet. Ancak randevu oluşturmadan önce belgelerinizi hazır tutmanız süreci hızlandırır.
            Detaylı bilgi için 
            <a href="/yunanistan-vize-randevusu" className="text-blue-600 font-semibold underline ml-1">
              randevu rehberini
            </a> inceleyebilirsiniz.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            Eksik evrakla başvuru yapılır mı?
          </h3>
          <p className="mt-2">
            Eksik evrakla başvuru ret riskini artırır.
            Olası sonuçlar için 
            <a href="/yunanistan-vize-reddi" className="text-blue-600 font-semibold underline ml-1">
              ret nedenleri sayfasını
            </a> inceleyin.
          </p>
        </div>

      </div>

    </div>
  </section>


  {/* CTA */}
  <section className="max-w-6xl mx-auto px-6 pb-20">
    <div className="bg-gradient-to-br from-blue-700 to-indigo-700 rounded-3xl p-12 text-white text-center">

      <h2 className="text-3xl font-extrabold">
        Dosyanızı Güçlendirelim
      </h2>

      <p className="mt-6 text-blue-100 max-w-2xl mx-auto">
        Evrak uyumunu kontrol edelim, ret risklerini azaltalım.
        Başvuru sürecini birlikte planlayalım.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a
          href="/randevu"
          className="bg-white text-blue-800 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition"
        >
          Ücretsiz Ön Değerlendirme
        </a>
      </div>

    </div>
  </section>

</main>

  );
};

export default YunanistanVizeEvraklari;
