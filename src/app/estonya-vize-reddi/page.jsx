import Head from "next/head";
import Link from "next/link";

export default function EstonyaVizeReddi() {
  return (
    <>
      <Head>
        <title>Estonya Vize Reddi 2026 | Ret Nedenleri ve Çözüm Yolları</title>
        <meta
          name="description"
          content="Estonya Schengen vize reddi neden olur? Madde 10, finansal yetersizlik, geri dönüş şüphesi ve Estonya vize reddi sonrası yeniden başvuru stratejileri."
        />
        <meta
          name="keywords"
          content="estonya vize reddi, estonya schengen ret nedenleri, estonya vize itiraz, estonya ret kodu"
        />
        <link
          rel="canonical"
          href="https://ayajourney.com/estonya-vize-reddi"
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">

        {/* HERO */}
        <header className="text-center mb-20">
          <span className="bg-red-100 text-red-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-red-200">
            Estonya Schengen Ret Analizi 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Estonya Vize Reddi <br/>
            <span className="text-red-600 italic">Neden Olur?</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Estonya Schengen vize reddi aldıysanız panik yapmayın.
            Ret nedenini doğru analiz ederek ikinci başvuruda onay ihtimalinizi artırabilirsiniz.
          </p>
        </header>

        {/* EN SIK RET NEDENLERİ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">
            Estonya Vize Reddi Nedenleri
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>• Banka hesap hareketlerinin yetersiz veya düzensiz olması</li>
            <li>• Türkiye’ye geri dönüş bağlarının zayıf görülmesi</li>
            <li>• Seyahat planının net olmaması</li>
            <li>• Konaklama veya uçuş rezervasyonlarının tutarsızlığı</li>
            <li>• Önceki Schengen ret geçmişi</li>
          </ul>
        </section>

        {/* RET KODLARI */}
        <section className="mb-24 bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            Estonya Ret Kodu Ne Anlama Gelir?
          </h2>

          <div className="space-y-4 text-slate-300 max-w-3xl mx-auto text-center">
            <p><strong>Madde 10:</strong> Seyahat amacı yeterince kanıtlanmamış.</p>
            <p><strong>Madde 8:</strong> Finansal yeterlilik şüpheli.</p>
            <p><strong>Madde 2:</strong> Geri dönüş niyeti konusunda şüphe.</p>
          </div>
        </section>

        {/* YENİDEN BAŞVURU */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-6">
            Estonya Vize Reddi Sonrası Ne Yapılmalı?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
              <h4 className="font-bold mb-2">Ret Analizi</h4>
              <p className="text-sm text-slate-600">
                Ret mektubundaki madde dikkatlice analiz edilmelidir.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
              <h4 className="font-bold mb-2">Dosya Güçlendirme</h4>
              <p className="text-sm text-slate-600">
                Finansal ve bağlayıcı belgeler yeniden düzenlenmelidir.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
              <h4 className="font-bold mb-2">Yeniden Başvuru</h4>
              <p className="text-sm text-slate-600">
                Eksikler giderildikten sonra fresh application yapılmalıdır.
              </p>
            </div>
          </div>
        </section>

        {/* SERİ NAV */}
        <section className="mb-24 text-center border-t pt-10">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Estonya Vize Serisi
          </p>

          <div className="flex flex-wrap justify-center gap-6 font-bold text-sm">

            <Link href="/estonya-vize" className="hover:underline">
              Estonya Vize Rehberi →
            </Link>

            <Link href="/estonya-vize-evraklari" className="hover:underline">
              Estonya Vize Evrakları →
            </Link>

            <Link href="/estonya-vize-randevusu" className="hover:underline">
              Estonya Vize Randevusu →
            </Link>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-6 uppercase">
            Estonya Ret Analizi Yapalım
          </h2>

          <p className="mb-8 max-w-2xl mx-auto text-red-100">
            Ret mektubunuzu analiz edelim ve ikinci başvurunuzu güçlü bir dosya ile hazırlayalım.
          </p>

          <a
            href="https://wa.me/905302199056?text=Merhaba%2C%20Estonya%20vize%20reddi%20aldım.%20Dosyamı%20analiz%20ettirmek%20istiyorum."
            className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition"
          >
            Ret Analizi Al
          </a>
        </section>

      </main>
    </>
  );
}
