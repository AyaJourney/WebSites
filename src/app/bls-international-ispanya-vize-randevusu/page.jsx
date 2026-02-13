import Link from "next/link";
import React from "react";

// 1. Metadata: İspanya ve BLS özelinde SEO ayarları
export const metadata = {
  title: "BLS International İspanya Vize Randevusu Nasıl Alınır? | 2026",
  description: "İspanya vizesi için BLS International randevu alma rehberi. Pasaport teslimi, biyometrik işlemler ve BLS sistem hataları çözümleri.",
  keywords: ["bls international randevu", "ispanya vize randevusu", "bls ispanya randevu alma", "ispanya vizesi kaç günde çıkar", "bls vize takip"],
  alternates: { canonical: "https://www.ayajourney.com/bls-international-ispanya-vize-randevusu" }
};

const BlsRandevuSayfasi = () => {
  return (
 <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">
      
  {/* Hero Section */}
  <header className="text-center mb-16">
    <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-yellow-200">
      İspanya Krallığı Yetkili Merkezi
    </span>

    <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
      BLS <span className="text-yellow-500 italic">İspanya</span> <br/>
      Randevu Rehberi
    </h1>

    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
      İspanya vizesi başvurularında yetkili tek kurum BLS International'dır. 
      Sistem üzerinden randevu alırken dikkat etmeniz gereken kritik noktalar ve 2026 güncel prosedürleri.
    </p>

    {/* Internal Links */}
    <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-semibold text-yellow-600">
      <Link href="/ispanya-vize" className="hover:underline">
        İspanya vize rehberi →
      </Link>
      <Link href="/ispanya-vize-evraklari" className="hover:underline">
        İspanya vize evrakları →
      </Link>
      <Link href="/ispanya-vize-reddi-nedenleri" className="hover:underline">
        İspanya vize reddi nedenleri →
      </Link>
    </div>
  </header>

  {/* BLS Spesifik Süreç Akışı */}
  <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
    <div className="space-y-8">
      <h2 className="text-3xl font-black text-slate-800 tracking-tight">
        Sistem Nasıl İşler?
      </h2>

      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
          <p className="text-slate-600">
            <strong className="text-slate-900 font-bold">Doğru Ofisi Seçin:</strong> 
            İstanbul ve Ankara ofislerinin yetki alanları farklıdır. 
            İkamet yerinize göre seçim yapmazsanız başvurunuz kabul edilmez.
          </p>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
          <p className="text-slate-600">
            <strong className="text-slate-900 font-bold">OTP Doğrulaması:</strong> 
            Kayıt sırasında telefonunuza gelen onay kodunu (OTP) girmek için sadece 2 dakikanız var.
          </p>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
          <p className="text-slate-600">
            <strong className="text-slate-900 font-bold">Ek Hizmetler:</strong> 
            BLS üzerinden randevu alırken fotokopi, SMS veya kurye gibi hizmetleri önceden seçebilirsiniz.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-inner">
      <h3 className="text-xl font-black mb-6 flex items-center gap-2">
        ⚠️ BLS Randevu İpuçları
      </h3>

      <ul className="space-y-4 text-sm text-slate-500 leading-relaxed">
        <li>• Randevular genellikle haftalık olarak açılır.</li>
        <li>• Randevu onay belgenizin çıktısını mutlaka yanınızda bulundurun.</li>
        <li>• Pasaportunuzun son 10 yıl içinde alınmış olması zorunludur.</li>
        <li>• İspanya, uçak ve otel rezervasyonlarının satın alınmış olmasını tercih eder.</li>
      </ul>

      <div className="mt-6 text-sm font-semibold text-yellow-600">
        <Link href="/ispanya-vize-evraklari" className="hover:underline">
          Evrak listesine git →
        </Link>
      </div>
    </div>
  </div>

  {/* BLS Hata Çözümleri */}
  <section className="mb-24 px-8 py-12 bg-yellow-50 rounded-[4rem] border border-yellow-100">
    <h2 className="text-3xl font-black mb-10 text-center">
      BLS Sistem Sorunları
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="text-center">
        <div className="text-4xl mb-4">📵</div>
        <h4 className="font-bold mb-2">SMS Gelmiyor</h4>
        <p className="text-xs text-slate-500">
          Operatörünüzün yurt dışından gelen SMS'lere açık olduğunu kontrol edin.
        </p>
      </div>

      <div className="text-center">
        <div className="text-4xl mb-4">💳</div>
        <h4 className="font-bold mb-2">Ödeme Reddi</h4>
        <p className="text-xs text-slate-500">
          Visa veya Mastercard tercih edin.
        </p>
      </div>

      <div className="text-center">
        <div className="text-4xl mb-4">🔄</div>
        <h4 className="font-bold mb-2">Sayfa Donması</h4>
        <p className="text-xs text-slate-500">
          Uzun süre işlem yapmazsanız sistem sizi dışarı atabilir.
        </p>
      </div>
    </div>

    <div className="mt-10 text-center text-sm font-semibold text-yellow-700">
      <Link href="/ispanya-vize-reddi-nedenleri" className="hover:underline">
        İspanya vize reddi sebeplerini incele →
      </Link>
    </div>
  </section>

  {/* STRATEJİK CTA SECTION */}
  <section className="bg-slate-900 rounded-[3.5rem] p-12 text-center text-white relative shadow-2xl overflow-hidden border-t-8 border-yellow-500">
    <div className="relative z-10">
      <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tight uppercase">
        İspanya Hayalinizi Ertelemeyin
      </h2>

      <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-light">
        BLS sistemindeki yoğunluk veya teknik hatalar sizi durdurmasın. 
        Uzman ekibimizle randevu sürecinizi ve dosya hazırlığınızı kusursuz yönetelim.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a
          href="https://wa.me/905302199056?text=Merhaba%2C%20vize%20ba%C5%9Fvurum%20i%C3%A7in%20profesyonel%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.%20Uygun%20oldu%C4%9Funuzda%20s%C3%BCreci%20birlikte%20planlayabilir%20miyiz%3F"
          className="bg-yellow-500 text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-xl shadow-yellow-500/20"
        >
          Hızlı Randevu & Destek
        </a>

        <Link
          href="/iletisim"
          className="bg-white/10 text-white px-12 py-5 rounded-2xl font-black text-xl border border-white/20 hover:bg-white/20 transition shadow-lg"
        >
          İletişime Geç
        </Link>
      </div>
    </div>

    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center text-[20rem]">
      🇪🇸
    </div>
  </section>

</main>

  );
};

export default BlsRandevuSayfasi;