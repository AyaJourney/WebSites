import Link from "next/link";
import React from "react";

// 1. Metadata: Kanada vize reddi aramalarında "GCMS Notu" ve "ATIP" anahtar kelimelerini hedefliyoruz
export const metadata = {
  title: "Kanada Vize Reddi Nedenleri 2026 | GCMS Notu ve İtiraz Çözümü",
  description: "Kanada vize reddi nedenleri, ATIP/GCMS notu istemi ve teknik analiz. Kanada vizesi neden reddedilir? Profesyonel çözüm ve yeniden başvuru stratejileri.",
  keywords: ["kanada vize reddi", "gcms notu nedir", "atip istemi kanada", "kanada vize reddi nedenleri", "kanada vize danışmanlık ankara", "kanada vize itiraz"],
  alternates: { canonical: "https://www.ayajourney.com/kanada-vize-reddi-nedenleri" }
};

const KanadaRedSayfasi = () => {
  return (
  <main className="max-w-6xl mx-auto px-6 py-16 font-sans">

      {/* Hero */}
      <header className="mb-16 text-center">
        <span className="bg-rose-50 text-rose-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block border border-rose-100">
          Immigration, Refugees and Citizenship Canada (IRCC)
        </span>

        <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">
          Kanada Vize Reddi: <br/>
          <span className="text-rose-600 italic">Gerçek Nedeni Nasıl Öğrenirsiniz?</span>
        </h1>

        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Kanada vizesi reddedildiğinde standart bir metin gelir. 
          Ancak gerçek neden <strong>GCMS notlarında</strong> gizlidir.
        </p>

        {/* 🔥 Kanada Silo Üst Navigasyon */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-semibold">
          <Link href="/kanada-vizesi" className="hover:underline">
            Kanada Vizesi Rehberi →
          </Link>
          <Link href="/kanada-vize-evraklari" className="hover:underline">
            Gerekli Evraklar →
          </Link>
          <Link href="/kanada-vize-randevusu" className="hover:underline">
            Biyometrik Randevu →
          </Link>
        </div>
      </header>


      {/* Red Mekanizması */}
      <section className="grid md:grid-cols-2 gap-12 mb-20 items-stretch">

        <div className="bg-white p-10 rounded-[3rem] border-2 border-slate-100 shadow-sm flex flex-col justify-center">
          <h2 className="text-3xl font-black text-slate-800 mb-6 italic">
            Kanada Neden Ret Verir?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Kanada ret mektupları genelde şu başlıkları işaret eder:
          </p>

          <ul className="space-y-3 text-sm font-bold text-slate-700">
            <li>✓ Finansal Yetersizlik</li>
            <li>✓ Zayıf Seyahat Geçmişi</li>
            <li>✓ Türkiye’ye Geri Dönüş Bağlarının Zayıf Görülmesi</li>
            <li>✓ Amaç Dışı Başvuru Şüphesi</li>
          </ul>

          <Link
            href="/vize-reddi-gercek-nedenler"
            className="mt-6 inline-block text-rose-600 font-semibold underline"
          >
            Vize reddinin gerçek nedenlerini öğren →
          </Link>
        </div>


        {/* GCMS */}
        <div className="bg-rose-600 text-white p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-6 uppercase">
              GCMS / ATIP Notu Nedir?
            </h3>

            <p className="text-rose-100 leading-relaxed mb-8">
              GCMS (Global Case Management System), Kanada vize memurunun
              dosyanız hakkında tuttuğu detaylı değerlendirme notudur.
              Bu belge olmadan yeni başvuru yapmak risklidir.
            </p>

            <div className="inline-block bg-white text-rose-600 px-6 py-3 rounded-2xl font-black text-sm">
              GCMS notlarını sizin adınıza talep ediyoruz.
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 text-[15rem] opacity-10 pointer-events-none">
            🍁
          </div>
        </div>
      </section>


      {/* Kurtarma Planı */}
      <section className="mb-24">
        <h2 className="text-3xl font-black mb-12 text-center underline decoration-rose-200 underline-offset-8">
          Kanada Vize Kurtarma Planı
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { t: "GCMS Notu Talebi", d: "Memurun teknik değerlendirmesini öğreniyoruz." },
            { t: "Profesyonel Analiz", d: "Ret maddesini teknik olarak çözümlüyoruz." },
            { t: "Güçlü Yeni Dosya", d: "Eksikleri kapatıp yeniden başvuru hazırlıyoruz." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-3xl hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 font-black">
                {i+1}
              </div>
              <h4 className="font-bold text-lg mb-3">{item.t}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>


      {/* İç Link Güçlendirme */}
      <section className="bg-slate-50 p-10 rounded-3xl border border-slate-200 mb-24">
        <h2 className="text-2xl font-black mb-6">
          Ret Sonrası Ne Yapmalısınız?
        </h2>

        <div className="flex flex-col gap-4 font-semibold">
          <Link href="/vize-reddi-sonrasi-kontrol-listesi" className="hover:underline">
            Vize reddi sonrası kontrol listesi →
          </Link>

          <Link href="/vize-reddi-itiraz-rehberi" className="hover:underline">
            Vize reddine itiraz nasıl yapılır? →
          </Link>

          <Link href="/kanada-vize-evraklari" className="hover:underline">
            Kanada evrakları doğru hazırlanmazsa ne olur? →
          </Link>
        </div>
      </section>


      {/* CTA */}
      <section className="bg-slate-900 rounded-[3.5rem] p-12 text-center text-white shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-black mb-6 italic">
          Kanada Vize Reddinizi Analiz Edelim
        </h2>

        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Dosyanızı profesyonel analiz etmeden yeniden başvuru yapmayın.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="https://wa.me/905302199056?text=Kanada%20vize%20reddim%20için%20destek%20almak%20istiyorum."
            className="bg-rose-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-rose-700 transition"
          >
            Dosyamı İncele
          </a>

          <Link
            href="/iletisim"
            className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition"
          >
            Ofise Gel
          </Link>
        </div>
      </section>

    </main>
  );
};

export default KanadaRedSayfasi;