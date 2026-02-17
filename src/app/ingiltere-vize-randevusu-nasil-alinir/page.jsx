import Link from "next/link";
import React from "react";

// 1. Metadata: TLScontact ve GOV.UK süreçleri odaklı SEO
export const metadata = {
  title: "İngiltere Vize Randevusu Nasıl Alınır? | 2026 TLScontact Rehberi",
  description: "İngiltere vize randevusu alma adımları. GOV.UK başvurusu, TLScontact randevu takibi, hızlı vize (Priority) ve pasaport teslim süreci.",
  keywords: ["ingiltere vize randevusu", "tlscontact randevu alma", "ingiltere vizesi hızlı randevu", "priority visa nedir", "ingiltere vizesi kaç günde çıkar"],
  alternates: { canonical: "https://www.ayajourney.com/ingiltere-vize-randevusu-nasil-alinir" }
};

const IngiltereRandevuSayfasi = () => {
  return (
<main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">
      
  {/* Hero Section */}
  <header className="text-center mb-16">
    <span className="bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-100">
      UK Visas and Immigration (UKVI) & TLScontact
    </span>

    <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
      İngiltere Randevu <br/>
      <span className="text-red-600 italic">Sistemini Çözün</span>
    </h1>

    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
      İngiltere vizesi bir "form" başarısıdır. <strong>GOV.UK</strong> onayından sonra 
      <strong> TLScontact</strong> üzerinden randevu planlamanın püf noktaları.
    </p>

    <div className="mt-10 text-sm flex flex-wrap justify-center gap-6 font-medium text-slate-600">
      <Link href="/ingiltere-vizesi" className="hover:underline">
        İngiltere vize rehberi →
      </Link>
      <Link href="/birlesik-krallik-vize-evraklari" className="hover:underline">
        İngiltere vize evrakları →
      </Link>
      <Link href="/ingiltere-vize-randevusu-nasil-alinir" className="hover:underline">
        İngiltere randevu süreci →
      </Link>
      <Link href="/ingiltere-vize-reddi-nedenleri" className="hover:underline">
        İngiltere vize reddi nedenleri →
      </Link>
    </div>
  </header>


  {/* İngiltere Sürecinin 3 Kritik Safhası */}
  <section className="grid md:grid-cols-3 gap-8 mb-24">
    <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black mb-6">1</div>
      <h4 className="font-bold text-lg mb-3">GOV.UK Başvurusu</h4>
      <p className="text-sm text-slate-500 leading-relaxed">
        Önce resmi hükümet sitesinden form doldurulur ve vize ücreti (pound olarak) ödenir.
        Detaylı süreç için{" "}
        <Link href="/ingiltere-vizesi" className="font-semibold hover:text-blue-600">
          İngiltere vize rehberini
        </Link>{" "}
        inceleyin.
      </p>
    </div>

    <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
      <div className="w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center font-black mb-6">2</div>
      <h4 className="font-bold text-lg mb-3">TLScontact Transfer</h4>
      <p className="text-sm text-slate-500 leading-relaxed">
        Ödeme sonrası sistem sizi randevu ve evrak yükleme için TLScontact sitesine yönlendirir.
        Randevu detayları için{" "}
        <Link href="/ingiltere-vize-randevusu-nasil-alinir" className="font-semibold hover:text-red-600">
          İngiltere randevu sürecini
        </Link>{" "}
        okuyun.
      </p>
    </div>

    <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
      <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black mb-6">3</div>
      <h4 className="font-bold text-lg mb-3">Biyometrik Kayıt</h4>
      <p className="text-sm text-slate-500 leading-relaxed">
        Seçtiğiniz ofiste (İstanbul, Ankara, İzmir vb.) parmak izi ve fotoğraf işlemleri tamamlanır.
        Evraklarınızı önceden{" "}
        <Link href="/birlesik-krallik-vize-evraklari" className="font-semibold hover:text-slate-900">
          kontrol etmeyi
        </Link>{" "}
        unutmayın.
      </p>
    </div>
  </section>


  {/* VIP Hizmetler */}
  <section className="bg-slate-900 text-white p-12 rounded-[3.5rem] mb-24 relative overflow-hidden">
    <h2 className="text-3xl font-black mb-10 text-center uppercase tracking-tighter">
      İngiltere'ye Özel Ayrıcalıklı Hizmetler
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="p-8 bg-white/5 rounded-3xl border border-white/10 border-l-4 border-l-red-500">
        <h4 className="font-bold text-xl mb-2 text-red-500">Priority Visa (5 İş Günü)</h4>
        <p className="text-sm text-slate-400 leading-relaxed">
          Süreci hızlandırmadan önce başvuru profilinizi{" "}
          <Link href="/ingiltere-vizesi" className="underline">
            doğru yapılandırmanız
          </Link>{" "}
          gerekir.
        </p>
      </div>

      <div className="p-8 bg-white/5 rounded-3xl border border-white/10 border-l-4 border-l-blue-500">
        <h4 className="font-bold text-xl mb-2 text-blue-500">Keep My Passport</h4>
        <p className="text-sm text-slate-400 leading-relaxed">
          Ret risklerini öğrenmek için{" "}
          <Link href="/ingiltere-vize-reddi-nedenleri" className="underline">
            ret nedenlerini
          </Link>{" "}
          inceleyin.
        </p>
      </div>
    </div>
  </section>


  {/* Ofis Bilgileri */}
  <div className="mb-24 px-8 text-center">
    <h3 className="text-2xl font-black mb-8 underline decoration-blue-500 underline-offset-8 uppercase">
      TLScontact Türkiye Merkezleri
    </h3>
    <div className="flex flex-wrap justify-center gap-4">
      {["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana", "Gaziantep,Trabzon"].map((city) => (
        <span key={city} className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-700">
          {city}
        </span>
      ))}
    </div>
  </div>


  {/* CTA */}
  <section className="bg-gradient-to-r from-blue-700 to-red-700 rounded-[3.5rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
    <div className="relative z-10">
      <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tighter uppercase">
        İngiltere Kapılarını Birlikte Açalım
      </h2>

      <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-light">
        Karmaşık GOV.UK soruları ve TLScontact ek hizmetleri arasında kaybolmayın. 
        Doğru stratejiyle İngiltere vizenizi en hızlı şekilde alalım.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a
          href="https://wa.me/905302199056?text=Merhaba%2C%20vize%20ba%C5%9Fvurum%20i%C3%A7in%20profesyonel%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum."
          className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition transform hover:scale-105"
        >
          Hızlı Randevu Al
        </a>

        <Link
          href="/iletisim"
          className="bg-slate-900/40 text-white px-12 py-5 rounded-2xl font-black text-xl border border-white/20 hover:bg-slate-900/60 transition"
        >
          Danışmanlık Al
        </Link>
      </div>
    </div>

    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/union-jack.png')]"></div>
  </section>

</main>
  );
};

export default IngiltereRandevuSayfasi;