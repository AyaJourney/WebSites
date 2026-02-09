"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaRegUserCircle,
  FaCheckCircle,
  FaPassport,
  FaClock,
  FaPlaneDeparture,
} from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import "./america.css"

const highlights = [
  {
    label: "Vize süresi",
    value: "10 yıl",
    icon: <FaPassport />,
    desc: "İstisnai durumlar haricinde turist vizeleri 10 yıllık verilir.",
  },
  {
    label: "Kalış hakkı",
    value: "Yıllık 180 güne kadar",
    icon: <FaClock />,
    desc: "10 yıllık vize ile her yıl 180 güne kadar ABD’de kalış hakkı olabilir.",
  },
  {
    label: "Değerlendirme",
    value: "Mülakat esaslı",
    icon: <FaRegUserCircle />,
    desc: "Evrak değil, vize memuru ile birebir görüşme belirleyicidir.",
  },
  {
    label: "Sonuç",
    value: "Görüşme sonunda",
    icon: <FaCheckCircle />,
    desc: "Onay/ret bilgisi görüşmenin hemen sonunda sözlü olarak bildirilir.",
  },
];

const infoCards = [
  {
    icon: <FaRegUserCircle />,
    title: "ABD vize sistemi nasıl işler?",
    desc: "ABD turist vizesi sürecinde en kritik aşama kısa süren birebir mülakattır. Dosyanızın dili ve stratejisi bu görüşmeye hazırlanmak için kurulmalıdır.",
  },
  {
    icon: <FaPassport />,
    title: "İstanbul veya Ankara’dan başvuru",
    desc: "İkamet ettiğiniz şehir neresi olursa olsun, randevunuzu İstanbul veya Ankara’daki ABD temsilciliklerinden alabilirsiniz.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Şeffaflık",
    desc: "Başvuru formunuza ne yazıldığını bilirsiniz, önceden görürsünüz ve sizin onayınızdan geçmeden hiçbir şey yapılmaz.",
  },
];

const documents = [
  { icon: <GoDotFill />, title: "Geçerli pasaport" },
  { icon: <GoDotFill />, title: "DS-160  onay (confirmation) sayfasının çıktısı" },
  { icon: <GoDotFill />, title: "Son altı ay içinde beyaz fon ile çekilmiş, 5×5 cm boyutunda bir adet renkli biometrik fotoğraf" },
  { icon: <GoDotFill />, title: "Eski pasaportlar veya önceki seyahatleri kanıtlayan belgeler (varsa)" },
  { icon: <GoDotFill />, title: "Başvuruyu destekleyebilecek ek belgeler (davetiye vb.)" },
];


const processSteps = [
  {
    step: 1,
    title: "Sizi Tanıyalım & Randevunuzu Alalım",
    description:
      "İngilizce seviyeniz, eski vize başvurularınız, yurt dışı geçmişiniz ve iş hayatınız gibi kritik bilgileri analiz ediyoruz. Ardından vize randevunuzu alıyor, kullanıcı bilgilerini sizinle paylaşıyor ve randevu tarihini öne çekmek için sistemi beraber takip ediyoruz.",
  },
  {
    step: 2,
    title: "Görüşmenize 1 Ay Kalana Kadar",
    description:
      "Bu süreçte kopmuyoruz. Sürekli temas halinde kalarak size özel yurt dışı seyahat önerilerinde bulunuyoruz. Vize görüşmesi için stratejimizi belirliyor, söylemlerimizi ve fikir yapımızı birlikte oluşturuyoruz.",
  },
  {
    step: 3,
    title: "Görüşmenize 1–2 Hafta Kala",
    description:
      "Sizden aldığımız bilgiler ışığında resmi başvuru formunuzu (DS-160) dolduruyoruz. Taslak formu birlikte kontrol edip varsa hataları düzeltiyor, formu onaylayarak başvuru sürecini resmiyete döküyoruz.",
  },
  {
    step: 4,
    title: "Görüşmenize 1–3 Gün Kala (Final Hazırlığı)",
    description:
      "Mülakat günü binaya girişten çıkışa kadar sizi nelerin beklediğini detaylandırıyoruz. Güçlü yanlarımızı nasıl öne çıkaracağımızı konuşuyor, simülasyonlar yapıyoruz. Desteğimiz vizeyi alana kadar değil; vize sonrası Amerika’ya gidişinize kadar devam eder.",
  },
  {
    step: 5,
    title: "Vize Sonrası Destek",
    description:
      "Vize onayı sonrası yolculuk planı, giriş hazırlığı ve genel süreçte destek olmaya devam ediyoruz.",
  },
];

export default function USVisaClient() {



  const refs = useRef([]);

  const register = (el) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const anim = entry.target.dataset.anim;
            entry.target.classList.add(anim + "-show");
          }
        }),
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 min-h-screen">
      {/* HERO */}
      <section
        ref={register}
        data-anim="ukvisa-fade-down"
        className="ukvisa-fade-down-init relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(220,38,38,0.10),transparent_30%)]" />

        <div className="relative max-w-6xl mx-auto px-6 py-18 md:py-20 flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow border border-slate-200/70">
              <FaPassport className="text-blue-600" />
              <span className="text-sm text-slate-700">ABD Vize Rehberi</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
         <span className="text-slate-900">
  Amerika Vizesi
</span>
              ,
              <br />
              <span className="text-blue-600">Evraktan Değil Görüşmeden Kazanılır</span>
            </h1>

            <p className="text-slate-700 text-lg md:text-xl max-w-2xl">
              Amerika Birleşik Devletleri’ne seyahat etmek heyecan verici bir adım.
              AYA Journey olarak, vize başvuru sürecinizi profesyonel bir yol haritasıyla yönetiyor,
              mülakat aşamasına sizi en iyi şekilde hazırlıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/iletisim">
                <button className="bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-500">
                 Hadi Başlayalım!
                </button>
              </Link>

              <Link href="/randevu">
                <button className="bg-white text-blue-600 px-5 py-3 rounded-xl border border-blue-100 font-semibold shadow-sm hover:bg-blue-50">
                  Randevu Al
                </button>
              </Link>
              <Link href="/vize-alma-ihtimalinizi-olcun">
                            <button

  className="bg-emerald-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-emerald-600 transition flex-none"
>
Vize alma ihtimalinizi ölçün!
</button>
              </Link>

             
            </div>

            {/* HIGHLIGHTS */}
        <div
  ref={register}
  data-anim="ukvisa-stagger"
  className="ukvisa-stagger grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto"
>
  {highlights.map((item, idx) => (
    <div
      key={idx}
      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 flex flex-col gap-2 shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-center gap-3">
        <div className="text-green-600 text-xl shrink-0">{item.icon}</div>
        <p className="text-xs uppercase text-slate-500 tracking-wide">
          {item.label}
        </p>
      </div>

      <p className="font-semibold text-lg text-slate-900">{item.value}</p>
      <p className="text-[11px] text-slate-600 leading-relaxed">{item.desc}</p>
    </div>
  ))}
</div>

          </div>

          {/* RIGHT */}
          <div
            ref={register}
            data-anim="ukvisa-scale"
            className="ukvisa-scale-init flex-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/15 via-slate-200/10 to-red-500/10 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <Image
                  src="/images/visaamericaexam.webp"
                  alt="Amerika vizesi mülakat hazırlığı – AYA Journey"
                  width={620}
                  height={480}
                  priority
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="absolute -bottom-6 -left-4 bg-white border border-slate-200 backdrop-blur-lg rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg">
                <FaPlaneDeparture className="text-blue-600 text-2xl" />
                <div>
                  <p className="text-xs text-slate-600">Final Hazırlığı</p>
                  <p className="font-semibold text-slate-900">Mülakata hazır mısınız?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-slate-500 uppercase">Temel Bilgiler</p>
            <h2 className="text-3xl font-bold text-slate-900">
              ABD (Turist) Vizesi Hakkında Bilmeniz Gerekenler
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {infoCards.map((item, i) => (
            <div
              key={i}
              ref={register}
              data-anim="ukvisa-slide"
              className="ukvisa-slide-init group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-400/60 transition shadow-md"
            >
              <div className="text-amber-500 text-3xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-700 text-sm">{item.desc}</p>
              <div className="mt-4 h-1 w-12 bg-emerald-300 rounded-full group-hover:w-32 transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* IMPORTANT NOTE */}
        <div
          ref={register}
          data-anim="ukvisa-fade-up"
          className="ukvisa-fade-up-init mt-10 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 text-sm text-slate-800"
        >
          <strong>Önemli Not:</strong>Vize verme yetkisi yalnızca konsoloslukta mülakatı yapan memura aittir. AYA Journey, vize alma garantisi sunmaz, bu tür sözler veren kişi veya kurumlardan uzak durmanızı önemle tavsiye eder.
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-slate-500 uppercase">Check-list</p>
            <h2 className="text-3xl font-bold text-slate-900">Gerekli belgeleri tamamlayın</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {documents.map((doc, i) => (
            <div
              key={i}
              ref={register}
              data-anim="ukvisa-fade-up"
              className="ukvisa-fade-up-init bg-white border border-slate-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-blue-400/60 transition"
            >
              <div className="text-red-600 text-2xl">{doc.icon}</div>
              <p className="text-slate-800 text-sm">{doc.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-sm text-slate-500 uppercase">Yol Haritası</p>
            <h2 className="text-3xl font-bold text-slate-900">AYA Journey ile adım adım başarıya</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              ref={register}
              data-anim="ukvisa-slide"
              className="ukvisa-slide-init relative bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-blue-400/60 transition"
            >
              <div className="absolute -top-5 -left-2 bg-rose-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                {step.step}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
{/* FAQ – Schema ile birebir eşleşen HTML */}
{/* FAQ – Schema ile birebir uyumlu */}
<section
  id="faq"
  className="max-w-6xl mx-auto px-6 py-16"
>
  <div className="mb-10 ">
    <p className="text-sm text-slate-500 uppercase">Sık Sorulan Sorular</p>
    <h2 className="text-3xl font-bold text-slate-900">
      Amerika Vizesi Hakkında Sık Sorulan Sorular
    </h2>
  </div>

  <div className="space-y-4 text-justify">

    {/* ÖNE ÇIKAN SORULAR */}
    {[
      {
        q: "Amerika vizesi almak zor mu?",
        a: "Amerika vizesi almak iyi doldurulmuş bir DS-160 formu ve doğru bir mülakat hazırlığı ile zor değildir. Ancak yapılacak basit hatalar vize reddine yol açabilir."
      },
      {
        q: "Amerika turist vizesi kaç yıl geçerli?",
        a: "Türk vatandaşları için Amerika turist vizesi (B1/B2) standart olarak 10 yıl geçerli verilmektedir. Ancak bazı durumlarda daha kısa süreli vizeler de düzenlenebilir."
      },
      {
        q: "Amerika vizesi mülakatı Türkçe mi yapılır?",
        a: "Amerika vizesi mülakat dili başvurulan vize türüne göre değişir. Turistik vizelerde Türkçe mülakat yapılabilirken, öğrenci ve staj vizelerinde İngilizce mülakat beklenir."
      },
      {
        q: "Amerika vizesi reddi neden olur?",
        a: "Amerika vizesi reddi genellikle 214(b) maddesi kapsamında göçmenlik şüphesi nedeniyle verilir. Ekonomik durumun zayıf görülmesi, boş pasaport ve geri dönüş bağlarının yetersizliği başlıca nedenlerdir."
      }
    ].map((item, i) => (
      <details
        key={i}
        className="group rounded-xl border border-slate-200 bg-white p-5"
        open={i === 0}
      >
        <summary className="cursor-pointer font-semibold text-slate-900 flex justify-between items-center">
          {item.q}
          <span className="ml-4 transition group-open:rotate-180">⌄</span>
        </summary>
        <p className="mt-3 text-slate-700 leading-relaxed">
          {item.a}
        </p>
      </details>
    ))}

    {/* DİĞER TÜM SORULAR */}
<details className="rounded-xl border border-slate-200 bg-white p-5">
  <summary className="cursor-pointer font-semibold text-slate-900">
    Diğer sık sorulan sorular
  </summary>

  <div className="mt-4 space-y-4 text-slate-700">

    <p><strong>Amerika vizesi reddinden sonra tekrar başvuru yapılabilir mi?</strong><br />
    Amerika vizesi reddinden sonra tekrar başvuru yapmak mümkündür. Sistem izin verdiği sürece ertesi gün dahi başvuru yapılabilir ancak anlamlı değişiklikler olmadan yeniden başvurmak farklı bir sonuç doğurmayabilir.</p>

    <p><strong>DS-160 formu nedir?</strong><br />
    DS-160 formu, göçmen olmayan Amerika vizesi başvurularında doldurulması zorunlu olan online başvuru formudur. İngilizce doldurulur ve elektronik olarak imzalanır.</p>

    <p><strong>DS-160 formu yanlış doldurulursa ne olur?</strong><br />
    DS-160 formu imzalandıktan sonra değiştirilemez. Hata fark edilirse yeni bir form doldurulmalı, randevu alınmışsa yeni form numarası ile başvuru yenilenmelidir.</p>

    <p><strong>Amerika vizesi randevusu ne kadar sürede bulunur?</strong><br />
    Amerika vizesi randevuları İstanbul ve Ankara’da yapılmaktadır. Turist vize randevuları genellikle 6 ay içerisinde bulunabilmektedir.</p>

    <p><strong>Amerika vizesi için sponsor gerekli mi?</strong><br />
    Amerika vizesi için sponsor zorunlu değildir. Ancak ekonomik yeterliliği olmayan başvurular sponsorlu olarak yapılabilir.</p>

    <p><strong>Amerika vizesiyle kaç ay kalınabilir?</strong><br />
    Amerika vizesiyle bir yıl içerisinde en fazla 6 ay kalınabilir. Daha uzun kalışlar göçmenlik şüphesi doğurabilir.</p>

    <p><strong>Amerika vizesi alındıktan sonra hemen seyahat etmek gerekir mi?</strong><br />
    Hayır. Amerika vizesi alındıktan sonra hemen seyahat etmek zorunlu değildir. Vize geçerlilik süresi boyunca uygun bir tarihte seyahat edilebilir.</p>

    <p><strong>Amerika vizesi uzatılabilir mi?</strong><br />
    Amerika vizesi, bitiş tarihinden itibaren 12 ay içinde başvurulması şartıyla mülakatsız olarak yenilenebilir. Çocuk yaşta alınan vizeler bu kapsama girmez.</p>

    <p><strong>Amerika vizesi ile çalışabilir miyim?</strong><br />
    Amerika turist vizesi ile çalışılamaz. Ancak iş görüşmeleri, toplantılar ve pazar araştırmaları yapılabilir.</p>

    <p><strong>Amerika vizesi mülakatı kaç dakika sürer?</strong><br />
    Amerika vize mülakatı genellikle birkaç dakika sürer. Konsolosluk memuru gerekli görürse süreyi uzatabilir.</p>

    <p><strong>Amerika vizesi mülakatında ne giymeli?</strong><br />
    Mülakata temiz, bakımlı ve şık bir şekilde gitmek yeterlidir. Özel bir kıyafet zorunluluğu bulunmamaktadır.</p>

    <p><strong>Amerika vizesi için uçak bileti almak gerekir mi?</strong><br />
    Hayır. Amerika vizesi başvurusu için uçak bileti satın almak veya rezervasyon yaptırmak zorunlu değildir.</p>

    <p><strong>Amerika vizesi için otel rezervasyonu şart mı?</strong><br />
    Hayır. DS-160 formunda kalınacak yerin belirtilmesi yeterlidir.</p>

    <p><strong>Amerika vizesi reddi pasaporta işlenir mi?</strong><br />
    Amerika vizesi reddi pasaporta fiziksel olarak işlenmez. Ancak konsolosluk kayıtlarında yer alır.</p>

    <p><strong>Amerika vizesi reddi sicile işler mi?</strong><br />
    Amerika vizesi reddi özel bir sicile işlemez. Ancak konsolosluk sisteminde kayıtlı kalır.</p>

    <p><strong>Amerika vizesi ilk başvuruda çıkar mı?</strong><br />
    Evet. Amerika vizesi ilk başvuruda da alınabilir. Başvurunun kaçıncı olduğu değil, başvuru sahibinin profili önemlidir.</p>

    <p><strong>Amerika vizesi için evli olmak avantaj mı?</strong><br />
    Evli olmak bazı durumlarda geri dönüş bağlarını güçlendirebilir ancak tek başına bir avantaj değildir. Gelir, kariyer ve seyahat geçmişi daha belirleyicidir.</p>

    <p><strong>Amerika vizesi için davetiye gerekli mi?</strong><br />
    Davetiye zorunlu değildir. Ancak bir etkinlik veya özel ziyaret için gidiliyorsa davetiye başvuruyu destekleyebilir.</p>

    <p><strong>Amerika vizesiyle Amerika’da kalıcı olunur mu?</strong><br />
    Amerika turist vizesi ile statü değiştirmeden kalıcı olunamaz. Kalıcı olmak farklı vize türleri veya Green Card gerektirir.</p>

    <p><strong>Amerika vizesiyle Green Card alınır mı?</strong><br />
    Hayır. Amerika turist vizesi ile Green Card alınamaz. Green Card için ayrı başvuru yolları vardır.</p>

    <p><strong>Amerika vizesi mülakatında heyecan sorun olur mu?</strong><br />
    Heyecan tek başına sorun değildir. Ancak sorulara tutarsız veya çelişkili cevaplar verilmesine neden olursa olumsuz etkileyebilir.</p>

    <p><strong>Amerika vizesi için sabıka kaydı istenir mi?</strong><br />
    Sabıka kaydı zorunlu değildir. DS-160 formunda belirli suçlarla ilgili sorular yer alır, nadiren ek belge istenebilir.</p>

    <p><strong>Amerika vizesi çocuklar için nasıl alınır?</strong><br />
    Çocuklar için de bireysel vize başvurusu yapılır ve mülakata ebeveynlerinden biri eşlik eder.</p>

    <p><strong>Amerika vizesi kaç günde sonuçlanır?</strong><br />
    Vize sonucu genellikle mülakat sırasında sözlü olarak bildirilir. Pasaportun teslim süresi ortalama 1 haftadır.</p>

    <p><strong>Amerika vizesi mülakatına geç kalınırsa ne olur?</strong><br />
    Mesai saatleri içinde kalındığı sürece genellikle mülakata alınabilirsiniz. Mesai saatleri sonrasında giriş mümkün olmayabilir.</p>

    <p><strong>Amerika vizesi mülakatına kimler girmez?</strong><br />
    Türkçe, İngilizce veya Farsça dillerinden hiçbirini bilmeyen kişiler için mülakat verimsiz olabilir. Bunun dışında genel bir engel bulunmamaktadır.</p>

    <p><strong>Amerika vizesi iptal edilir mi?</strong><br />
    Evet. Vize ihlali, amacı dışında kullanım veya yanlış beyan gibi durumlarda Amerika vizesi iptal edilebilir.</p>

    <p><strong>Amerika vizesi alındıktan sonra reddedilebilir mi?</strong><br />
    Evet. Mülakat sonrası yapılan ek incelemeler sonucunda vize reddine dönülebilir. Ayrıca vize almak Amerika’ya giriş garantisi değildir.</p>

  </div>
</details>

  </div>
</section>


      {/* WHY + CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
<div ref={register} data-anim="ukvisa-fade-up" className="ukvisa-fade-up-init relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-xl">
  {/* 🇺🇸 Background (SSR-safe) */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(circle at 20% 25%, rgba(37, 99, 235, 0.14), transparent 45%), radial-gradient(circle at 80% 30%, rgba(220, 38, 38, 0.12), transparent 45%), linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)",
    }}
  />
  {/* Optional: very soft stripes */}
  <div
    className="absolute inset-0 opacity-25"
    style={{
      background:
        "repeating-linear-gradient(135deg, rgba(220,38,38,0.10) 0 10px, rgba(255,255,255,0.0) 10px 22px)",
      mixBlendMode: "multiply",
    }}
  />

  <div className="relative p-6 md:p-8 space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Neden AYA Journey?</h2>
    <p className="text-slate-700">
      Biz sadece bir form doldurma hizmeti değil, bir yol arkadaşlığı sunuyoruz. Stratejik yaklaşımımız ve şeffaf iletişimimizle, Amerika rüyanıza bir adım daha yaklaşmanız için yanınızdayız.
    </p>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { t: "Stratejik yaklaşım", d: "Mülakat odaklı plan ve söylem kurgusu." },
        // { t: "Şeffaf iletişim", d: "Vize kararı memura aittir; garanti değil, hazırlık." },
        { t: "Uçtan uca destek", d: "Vize sonrası Amerika’ya gidiş sürecine kadar sizinleyiz." },
      ].map((x, i) => (
        <div key={i} className="p-6 rounded-2xl bg-white/85 backdrop-blur border border-slate-200 shadow-sm hover:shadow-md transition">
          <h4 className="font-semibold text-slate-900">{x.t}</h4>
          <p className="text-sm text-slate-700 mt-1 leading-relaxed">{x.d}</p>
        </div>
      ))}
    </div>

    <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
      <p className="text-slate-900 font-semibold">Amerika vizesi için ilk adımı atalım.</p>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
         <Link href="/randevu" className="w-full sm:w-auto">
           <button className="w-full sm:w-auto bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:-translate-y-0.5 transition">
             Randevu Al
           </button>
         </Link>
       
         <a
           href="tel:+903128701584"
           className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-slate-900 text-white font-semibold hover:-translate-y-0.5 transition"
         >
           Hemen Ara
         </a>
       
         <a
           href="https://wa.me/905302199056"
           target="_blank"
           rel="noreferrer"
           className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold hover:-translate-y-0.5 transition"
         >
           WhatsApp’tan Yaz
         </a>
      </div>
    </div>
  </div>
</div>



     
      </section>


    </main>
  );





}
