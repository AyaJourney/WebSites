import React from "react";

// 1. Metadata: "Perde arkası" ve "vize memuru görüşü" odaklı SEO
export const metadata = {
  title: "Vize Reddi Gelmesinin Arkasındaki Gerçek Nedenler | 2026 Analizi",
  description: "Vize reddi kağıdındaki maddelerin ötesinde, konsolosluk memurlarının asıl baktığı kriterler nelerdir? Gizli ret nedenleri ve profil analizi.",
  keywords: ["vize reddi gerçek nedenleri", "vize memuru neye bakar", "vize reddi neden gelir", "schengen vize reddi gizli nedenler", "vize onay stratejileri"],
  alternates: { canonical: "https://www.ayajourney.com/vize-reddi-gercek-nedenler" }
};

const GercekNedenlerSayfasi = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">
      
      {/* Header: Merak Uyandırıcı */}
      <header className="text-center mb-20">
        <span className="bg-amber-100 text-amber-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
          Konsolosluk Perde Arkası
        </span>
        <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter text-slate-900">
          Ret Maddelerinin <br/>
          <span className="text-blue-600 italic">Arkasındaki Gerçek</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
          Size verilen o standart kağıt, dosyanızın neden elendiğini tam olarak söylemez. 
          Vize memurlarının karar verirken kullandığı <strong>"gizli teraziyi"</strong> keşfedin.
        </p>
      </header>

      {/* Gerçek Nedenler Listesi */}
      <section className="space-y-8 mb-24">
        
        {/* Neden 1 */}
        <div className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all border-l-8 border-l-blue-600">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="text-5xl opacity-20 font-black">01</div>
            <div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Ekonomik İllüzyonlar</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Banka hesabınızdaki yüksek bakiye tek başına hiçbir şey ifade etmez. Memur, bu paranın 
                <strong> "yaşam standartlarınızla uyumuna"</strong> bakar. Asgari ücret alıp hesabında 
                500.000 TL olan bir başvuru, memur için "ödünç para" sinyalidir.
              </p>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Gerçek: Gelir akışı, toplam bakiyeden daha önemlidir.</span>
            </div>
          </div>
        </div>

        {/* Neden 2 */}
        <div className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all border-l-8 border-l-slate-900">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="text-5xl opacity-20 font-black">02</div>
            <div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Sosyal Çıpa Eksikliği</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Konsolosluklar sizi bir turist olarak değil, bir "potansiyel sığınmacı" olarak görür. 
                Türkiye'ye geri dönmek için <strong>"zorlayıcı bir nedeniniz"</strong> (evlilik, çocuk, 
                kurulu düzen, mülk) yoksa, seyahatiniz riskli kabul edilir.
              </p>
              <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">Gerçek: Sizi Türkiye'ye bağlayan "görünmez ipler" zayıf bulunmuştur.</span>
            </div>
          </div>
        </div>

        {/* Neden 3 */}
        <div className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all border-l-8 border-l-rose-600">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="text-5xl opacity-20 font-black">03</div>
            <div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Profil - Rota Tutarsızlığı</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Hiç yurt dışı tecrübesi olmayan birinin ilk seyahatinde 20 günlük en pahalı İskandinav rotasını 
                seçmesi memur için "mantık dışıdır". Seyahat planınızın geçmişinizle paralel olması gerekir.
              </p>
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">Gerçek: Planınız "hayatın olağan akışına" aykırı bulunmuştur.</span>
            </div>
          </div>
        </div>

      </section>

      {/* İstatistik Paneli */}
      <section className="bg-slate-900 text-white p-12 rounded-[4rem] mb-24 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-4xl font-black text-blue-500 mb-2">%65</div>
          <p className="text-sm text-slate-400">Retlerin ana nedeni: <br/><strong>Yanlış Finansal Beyan</strong></p>
        </div>
        <div>
          <div className="text-4xl font-black text-blue-500 mb-2">%20</div>
          <p className="text-sm text-slate-400">Retlerin ana nedeni: <br/><strong>Zayıf Sosyal Bağlar</strong></p>
        </div>
        <div>
          <div className="text-4xl font-black text-blue-500 mb-2">%15</div>
          <p className="text-sm text-slate-400">Retlerin ana nedeni: <br/><strong>Hatalı Form & Belge</strong></p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-600 rounded-[3.5rem] p-12 text-center text-white relative shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tighter uppercase">Profilinizi Bir Memur Gözüyle İnceleyelim</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto font-light">
            Siz "vize alabilir miyim?" diye soruyorsunuz, biz ise "konsolosluk neden ret verir?" sorusuna yanıt arıyoruz. 
            Dosyanızı sunmadan önce bizden profesyonel analiz alın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://wa.me/905302199056" className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition shadow-xl">
              Ücretsiz Profil Analizi
            </a>
            <a href="/iletisim" className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition shadow-lg">
              Randevu Al
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default GercekNedenlerSayfasi;