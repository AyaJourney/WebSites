import { PiSmileySadBold } from "react-icons/pi";
export default function GonePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="max-w-xl text-center">
        <h2 className="text-4xl font-black mb-6 text-red-600 flex flex-row gap-6 items-center justify-center"> <span>Üzgünüz</span> <span><PiSmileySadBold /></span> </h2>
        <h1 className="text-4xl font-black mb-6 text-red-600">
          Bu Sayfa Artık Mevcut Değil
        </h1>

        <p className="text-slate-600 mb-8">
          Aradığınız içerik kaldırılmış veya güncellenmiştir.
          Güncel vize rehberlerimize aşağıdan ulaşabilirsiniz.
        </p>

        <div className="mt-12">

  {/* Ana Butonlar */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">

    <a
      href="/amerika-vizesi"
      className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition transform hover:scale-105 text-center"
    >
      Amerika Vize Rehberi
    </a>

    <a
      href="/amerika-vize-danismanligi"
      className="group bg-white border border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold shadow-md hover:bg-blue-50 transition text-center"
    >
      Profesyonel Danışmanlık
    </a>

    <a
      href="/"
      className="group bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition text-center"
    >
      Ana Sayfa
    </a>

  </div>

  {/* Ek Link Grid */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto text-sm">

    <a
      href="/amerika-b1-b2-vizesi"
      className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-lg transition text-center font-semibold"
    >
      B1/B2 Turistik Vize
    </a>

    <a
      href="/amerika-vize-reddi-214b-itiraz"
      className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-lg transition text-center font-semibold"
    >
      214(b) Ret Çözümü
    </a>

    <a
      href="/amerika-vize-reddi-dosya-analizi"
      className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-lg transition text-center font-semibold"
    >
      Ret Dosya Analizi
    </a>

    <a
      href="/abd-vize-randevusu-nasil-alinir"
      className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-lg transition text-center font-semibold"
    >
      ABD Randevu Rehberi
    </a>

    <a
      href="/amerika-vize-ds-160-nasil-doldurulur"
      className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-lg transition text-center font-semibold"
    >
      DS-160 Rehberi
    </a>

    <a
      href="/iletisim"
      className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-lg transition text-center font-semibold"
    >
      Bizimle İletişime Geçin
    </a>

  </div>

</div>

      </div>
    </main>
  );
}
