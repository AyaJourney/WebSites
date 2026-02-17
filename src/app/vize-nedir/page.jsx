import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Vize Nedir? Vize Türleri ve Başvuru Rehberi 2026",
  description: "Vize nedir, nasıl alınır? Schengen, ABD, İngiltere vize türleri, gerekli evraklar ve 2026 vize başvuru süreçleri hakkında kapsamlı rehber.",
  keywords: ["vize nedir", "vize türleri", "vize nasıl alınır", "vize başvurusu nasıl yapılır", "pasaport ve vize farkı"],
  alternates: { canonical: "https://www.ayajourney.com/vize-nedir" }
};
const VizeNedirRehberi = () => {
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Vize nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vize, bir devletin dış temsilcilikleri veya sınır makamları aracılığıyla, ülkesine seyahat edecek bir yabancının pasaportuna koyduğu ve bu kişinin ülkeye giriş yapabileceğini gösteren resmi bir kayıttır."
          }
        },
        {
          "@type": "Question",
          "name": "Vize başvurusu için neler gereklidir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Genellikle geçerli bir pasaport, biyometrik fotoğraf, tam vukuatlı nüfus kayıt örneği, banka hesap dökümleri ve seyahat amacını belirten belgeler gereklidir."
          }
        }
      ]
    })
  }}
/>
<main className="max-w-5xl mx-auto px-6 py-16 font-sans text-slate-800">

  {/* HERO */}
  <header className="mb-16 text-center">
    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
      Vize Nedir? <br/>
      <span className="text-blue-600">Her Şeyiyle Vize Rehberi</span>
    </h1>

    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
      Yurt dışı planlarınız için temel rehber: 
      <Link href="/vize-alirken-yapilan-hatalar" className="text-blue-600 font-semibold hover:underline mx-1">
        en sık yapılan hatalar
      </Link>,
      <Link href="/vize-reddi-gercek-nedenler" className="text-blue-600 font-semibold hover:underline mx-1">
        ret nedenleri
      </Link>
      ve doğru başvuru stratejileri.
    </p>
  </header>

  {/* BİLGİ KARTLARI */}
  <section className="grid md:grid-cols-3 gap-8 mb-20">
    <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
      <h3 className="font-bold text-xl mb-3 text-blue-800">Tanım</h3>
      <p className="text-sm leading-relaxed italic text-blue-900/70">
        Vize, bir ülkeye giriş iznidir. Pasaportunuzun üzerine işlenen resmi onaydır.
      </p>
    </div>

    <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
      <h3 className="font-bold text-xl mb-3 text-amber-800">Pasaport vs Vize</h3>
      <p className="text-sm leading-relaxed text-amber-900/70">
        Pasaport kimliğinizdir, vize ise giriş izninizdir.
      </p>
    </div>

    <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
      <h3 className="font-bold text-xl mb-3 text-emerald-800">Onay Şansı</h3>
      <p className="text-sm leading-relaxed text-emerald-900/70">
        Doğru dosya hazırlığı ile ret riski minimize edilir.
      </p>
    </div>
  </section>

  {/* ANA VİZE TÜRLERİ */}
  <article className="prose prose-blue max-w-none mb-20">
    <h2 className="text-3xl font-bold mb-6">En Çok Başvurulan Vize Türleri</h2>

    <div className="space-y-12">

      <div>
        <h3 className="text-2xl font-bold">🇪🇺 Schengen Vizesi</h3>
        <p className="text-lg text-slate-600">
          29 Avrupa ülkesine tek vize ile giriş imkanı sağlar.
        </p>
        <div className="flex gap-4 text-sm mt-2">
          <Link href="/schengen-vizesi" className="text-blue-600 hover:underline">Schengen Rehberi →</Link>
          <Link href="/schengen-vize-evraklari" className="text-blue-600 hover:underline">Evrak Listesi →</Link>
          <Link href="/schengen-vize-reddi-nedenleri" className="text-blue-600 hover:underline">Ret Nedenleri →</Link>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold">🇺🇸 Amerika Vizesi</h3>
        <p className="text-lg text-slate-600">
          Genellikle 10 yıllık verilen, mülakatlı ve güçlü bağlar prensibine dayalı bir sistemdir.
        </p>
        <div className="flex gap-4 text-sm mt-2">
          <Link href="/amerika-vizesi" className="text-blue-600 hover:underline">ABD Vize Rehberi →</Link>
          <Link href="/amerika-vize-evraklari" className="text-blue-600 hover:underline">Evraklar →</Link>
          <Link href="/amerika-vize-reddi-nedenleri" className="text-blue-600 hover:underline">Ret Nedenleri →</Link>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold">🇬🇧 İngiltere Vizesi</h3>
        <p className="text-lg text-slate-600">
          Finansal yeterlilik ve seyahat planının tutarlılığına dayalı değerlendirme süreci vardır.
        </p>
        <div className="flex gap-4 text-sm mt-2">
          <Link href="/ingiltere-vizesi" className="text-blue-600 hover:underline">İngiltere Rehberi →</Link>
          <Link href="/birlesik-krallik-vize-evraklari" className="text-blue-600 hover:underline">Evraklar →</Link>
          <Link href="/ingiltere-vize-reddi-nedenleri" className="text-blue-600 hover:underline">Ret Analizi →</Link>
        </div>
      </div>

    </div>
  </article>

  {/* SÜREÇ */}
  <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 mb-20 shadow-2xl">
    <h2 className="text-3xl font-black mb-12 text-center italic">
      Vize Nasıl Alınır? (5 Adım)
    </h2>

    <div className="grid md:grid-cols-5 gap-6 text-center">
      {[
        { step: "01", label: "Evrak Analizi" },
        { step: "02", label: "Randevu Alımı" },
        { step: "03", label: "Dosya Hazırlığı" },
        { step: "04", label: "Parmak İzi" },
        { step: "05", label: "Pasaport Teslim" },
      ].map((item, i) => (
        <div key={i}>
          <div className="text-4xl font-black text-blue-500 opacity-30 mb-2">{item.step}</div>
          <p className="font-bold text-sm uppercase tracking-widest">{item.label}</p>
        </div>
      ))}
    </div>
  </section>

  {/* İÇ LİNK BLOĞU */}
  <section className="mb-20">
    <h2 className="text-2xl font-bold mb-6">Vize Sürecinde Bilmeniz Gerekenler</h2>
    <div className="grid md:grid-cols-2 gap-6 text-sm">
      <Link href="/vize-reddi-durumunda-ne-yapilmali" className="hover:underline">
        Vize reddi durumunda ne yapılmalı?
      </Link>
      <Link href="/vize-alirken-yapilan-hatalar" className="hover:underline">
        Vize alırken yapılan kritik hatalar
      </Link>
      <Link href="/ilk-kez-vize-alacaklar" className="hover:underline">
        İlk kez vize alacaklar için rehber
      </Link>
      <Link href="/vize-alma-ihtimalinizi-olcun" className="hover:underline">
        Vize uygunluk testi
      </Link>
    </div>
  </section>

  {/* CTA */}
  <section className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 rounded-[3rem] text-center text-white">
    <h2 className="text-3xl font-black mb-6">
      Vize Alabilir Miyim?
    </h2>
    <p className="text-xl mb-10 opacity-90">
      Profilinizi analiz edelim, ret riskinizi minimize edelim.
    </p>
    <Link
      href="/vize-alma-ihtimalinizi-olcun"
      className="bg-white text-blue-700 px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition shadow-xl inline-block"
    >
      ÜCRETSİZ TESTE BAŞLA
    </Link>
  </section>

</main>
    </>

  );
};

export default VizeNedirRehberi;