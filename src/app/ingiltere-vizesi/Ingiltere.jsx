"use client";
import React, { useRef, useEffect } from "react";
import {
  FaRegUserCircle,
  FaFileInvoiceDollar,
  FaCheckCircle,
  FaPassport,
  FaPlaneDeparture,
  FaClock,
} from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
// export const metadata = {
//   title: "İngiltere Vizesi - Detaylı Rehber",
//   description: "İngiltere vizesi için adım adım rehber, gerekli belgeler ve başvuru süreci.",
// };

// Belgeler
const documents = [
  { icon: <GoDotFill />, title: "Geçerli Pasaport" },
  { icon: <GoDotFill />, title: "İş yeri belgeleri" },
  { icon: <GoDotFill />, title: "İkametgah belgesi" },
  { icon: <GoDotFill />, title: "Son 3 aylık banka hesap dökümü" },
  { icon: <GoDotFill />, title: "İngilizce vize dilekçesi" },
  { icon: <GoDotFill />, title: "Seyahat sağlık sigortası (Zorunlu değil)" },
  { icon: <GoDotFill />, title: "Otel ve uçak rezervasyonları (Zorunlu değil)" },
];

// Başvuru adımları
const processSteps = [
  {
    step: 1,
    title: "Başvuru Formunun Doldurulması",
    description:
      "Vize başvurusu için gerekli olan online başvuru formu eksiksiz ve doğru bilgilerle doldurulur. Yanlış veya eksik bilgi başvurunun olumsuz sonuçlanmasına neden olabilir.",
  },
  {
    step: 2,
    title: "Vize Harcının Ödenmesi",
    description:
      "Başvuru formu tamamlandıktan sonra vize harcı online sistem üzerinden ödenir. Ödeme onayı, randevu oluşturma aşamasında zorunludur.",
  },
  {
    step: 3,
    title: "Randevu Tarihinin Belirlenmesi",
    description:
      "Vize harcı ödendikten sonra başvuru sahibine uygun tarih ve saat için randevu planlaması yapılır. Yoğunluk durumuna göre en yakın uygun tarih tercih edilir.",
  },
  {
    step: 4,
    title: "Evrakların Hazırlanması ve Online Yüklenmesi",
    description:
      "Randevu tarihine kadar gerekli tüm evraklar eksiksiz şekilde hazırlanır ve ilgili online başvuru sistemi üzerinden tarafımızca yüklenir. Evrakların güncel ve talep edilen formatta olması büyük önem taşır.",
  },
  {
    step: 5,
    title: "Randevuya Katılım",
    description:
      "Belirlenen randevu tarihinde başvuru merkezine gidilerek biyometri işlemleri tamamlanır. Randevuya katılım zorunludur.",
  },
];


// Bilgi Kartları
const infoCards = [
  {
    icon: <FaRegUserCircle />,
    title: "Kimler Başvurabilir?",
    desc: "Çalışanlar, işverenler, öğrenciler ve pasif gelir sahipleri başvurabilir."
  },
  {
    icon: <MdOutlineSchool />,
    title: "Vize Şartları",
    desc: "Gelirinizi ve finansal durumunuzu resmi evraklarla kanıtlamanız gerekir."
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Ekonomik Gereklilikler",
    desc: "Gidiş-dönüş uçak bileti, konaklama ve banka dökümü sunumu yapılabilir.(Zorunlu değil)"
  },
];

const UKVisaPage = () => {
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
      { threshold: 0.25 }
    );

    refs.current.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "İngiltere Vize Danışmanlığı",
          "provider": {
            "@type": "LocalBusiness",
            "name": "AYA Journey",
            "url": "https://www.ayajourney.com",
              "telephone": "+903128701584", // Kendi numaranı ekle
            "priceRange": "$$", // Orta segment hizmet anlamında kullanılır
            "image": "https://www.ayajourney.com/logo.png", // İşletme logosu
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kızılırmak Mahallesi Ufuk Ünv. Caddesi Paragon Tower No:3/49", // Sokak, No ve Daire bilgisi
      "addressLocality": "Çankaya", // İlçe
      "addressRegion": "Ankara", // Şehir
      "postalCode": "06510", // Posta Kodu (Kritik!)
      
           
              "addressCountry": "TR"
            }
          },
          "description": "UK Standard Visitor Visa başvuruları, TLScontact randevu yönetimi ve finansal dosya hazırlığı."
        },
        {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "İngiltere Schengen vizesi midir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. İngiltere Schengen vizesi değildir ve Schengen bölgesine dahil olmadığı için kendine ait ayrı bir vize vermektedir."
          }
        },
        {
          "@type": "Question",
          "name": "Yeşil pasaportla İngiltere’ye vizesiz gidebilir miyim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. Yeşil pasaport sahipleri de İngiltere’ye giriş için mutlaka İngiltere vizesi almak zorundadır."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi ne kadar süreli verilir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "İngiltere vizeleri genellikle 6 aylık, 2 yıllık, 5 yıllık ve 10 yıllık olarak düzenlenir. Her bir vize türünün harç ücreti farklıdır."
          }
        },
        {
          "@type": "Question",
          "name": "Randevular ne zamana veriliyor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Genellikle randevular en fazla 10 gün sonrasına bulunabilir. Çok nadir olmakla birlikte randevu bulunamadığı durumlar olabilir; böyle zamanlarda premium randevu seçenekleri sunulur ve ek ücret ödeyerek yine yakın tarihlere randevu almanız mümkündür."
          }
        },
        {
          "@type": "Question",
          "name": "Başvuru kaç günde sonuçlanır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "İngiltere vizesi başvuruları çoğunlukla 2 haftada sonuçlanır ancak bazı durumlarda 3 haftaya kadar uzayabilir. En erken sonuçlanma süresi ortalama 2 haftadır."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi multi mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. İngiltere vizesi çok girişlidir (multiple-entry). Ancak her bir girişte maksimum 6 ay kalma hakkınız bulunur."
          }
        },
        {
          "@type": "Question",
          "name": "En fazla kaç gün kalabilirim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tek girişte en fazla 6 ay kalabilirsiniz. Bu süreyi aşmanız durumunda ihlal oluşur."
          }
        },
        {
          "@type": "Question",
          "name": "Banka hesabımda ne kadar para olmalı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Banka hesabınızda, İngiltere’de yapacağınız tüm harcamaları karşılayacak ve dönüşte de hâlâ hesabınızda kalacak makul bir miktar bulunmalıdır. Bunun amacı, seyahate tüm birikiminizi harcamayacağınızı ve Türkiye’deki yaşamınızı sürdürebileceğinizi göstermek içindir."
          }
        },
        {
          "@type": "Question",
          "name": "Hesabıma son dakika para girişi oldu, sorun olur mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Genellikle hoş karşılanmaz. Ancak bu para girişinin neden ve nereden geldiği açıklanabiliyorsa, durum düzeltilebilir. Açıklaması olmayan ani para girişleri risk oluşturabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Hiçbir ülkeye gitmedim, yine de İngiltere’ye başvurabilir miyim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, boş pasaportla da İngiltere vizesi almak mümkündür. İngiltere için seyahat geçmişinden ziyade finansal durum daha önemlidir. Yine de öneri olarak, önce birkaç ülke seyahati yapmak faydalı olur."
          }
        },
        {
          "@type": "Question",
          "name": "Başvurumu iptal edince ücret iadesi alabilir miyim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, teknik olarak ücret iadesi mümkündür ancak bu süreç çoğunlukla çok uzun sürer ve hızlı geri ödeme beklenmemelidir."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vize reddi aldım, itiraz hakkım var mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. Standart ziyaretçi vizelerinde itiraz hakkı yoktur. Karara itiraz edebileceğiniz bir mecra bulunmaz. Ret almanız halinde tekrar başvuru yapmanız gerekir."
          }
        },
        {
          "@type": "Question",
          "name": "Seyahatimi ne kadar sonrasına planlamalıyım?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Başvuru tarihinden itibaren en fazla 6 ay içerisinde planlama yapabilirsiniz."
          }
        },
        {
          "@type": "Question",
          "name": "Vizem açıklandıktan sonra hangi tarihten itibaren başlar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Başvurunuzda belirtilen tarihe göre vize memurları düzenlemektedirler."
          }
        },
        {
          "@type": "Question",
          "name": "Kaç günlük bir seyahat planlamalıyım?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seyahat amacınıza göre değişmekle birlikte turistik seyahatlerde önerimiz en fazla 10 günlük bir plan yapmanızdan yana olacaktır, daha fazlası şüpheli durabilmektedir."
          }
        },
        {
          "@type": "Question",
          "name": "Ne kadar harcama yapacağımı beyan etmeliyim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seyahat sürenize göre değişir ancak 750-1500 pound arası değişir."
          }
        },
        {
          "@type": "Question",
          "name": "Belgeleri ne zaman hazırlamaya başlıyoruz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Başvuru formu tamamlanıp vize harç ücreti ödendikten sonra randevu tarihiniz belirlenir ve belirlenen randevu tarihine kadar evrakları toparlamaya başlayabilirsiniz."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi almak zor mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "İngiltere vizesi, alınması zor vizelerden biri olarak kabul edilir. Ancak doğru ve eksiksiz bir başvuru yapıldığında olumlu sonuç almak mümkündür."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesinde mülakat var mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. İngiltere vize başvurularında çoğu durumda mülakat yapılmaz. Değerlendirme, sunulan belgeler üzerinden gerçekleştirilir."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi neden reddedilir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vize reddinin en yaygın nedeni finansal unsurlardır. Hesaba giren paraların şüpheli görünmesi, son dakika yapılan para girişleri veya finansal açıdan güven vermeyen durumlar vize reddine yol açabilir."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi başvurusu online mı yapılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Başvuru formu online olarak doldurulur ve gerekli belgeler sisteme online şekilde yüklenir."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi için davetiye gerekli mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. Davetiye sunma zorunluluğu İngiltere vizesi için bulunmamaktadır."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi için uçak bileti almak gerekir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. Uçak bileti satın almak veya rezervasyon göstermek zorunlu değildir. Ancak mevcutsa sunulabilir."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi için otel rezervasyonu şart mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. Otel rezervasyonu zorunlu değildir; ancak varsa başvuruya eklenebilir."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi reddinden sonra tekrar başvuru yapılabilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Vize harcı ödendiği sürece yeniden başvuru yapılabilir."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi ilk başvuruda çıkar mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Başvuru sahibinin profili uygunsa, ilk başvuruda vize alınmaması için bir neden yoktur."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi için sponsor gerekli mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Profilinize bağlı olarak değişir. Her başvuru için sponsor zorunlu değildir."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi çocuklar için nasıl alınır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Çocuklar için başvuru süreci, yetişkinler ile aynı prosedürlere tabidir."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi öğrenci olmayanlar için zor mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gerekli şartlar eksiksiz yerine getirildiği sürece herkes için vize alma ihtimali hemen hemen aynıdır."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi için çalışıyor olmak şart mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Profilinize göre değişir. Birinci derece yakınınızdan (anne, baba veya eş) sponsor gösterebiliyorsanız aktif olarak çalışmıyor olsanız da başvuru yapabilirsiniz."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi serbest meslek sahipleri için nasıl alınır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gelir kaynağı yasal şekilde belgelenebildiği ve şüpheye yer bırakılmadığı sürece olumlu sonuç almak mümkündür."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi başvurusunda evli olmak avantaj mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Profilinize bağlı olarak evli olmak avantaj sağlayabilir; ancak bu durum bekar kişilerin vize alamayacağı anlamına gelmez."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi neden zor veriliyor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Genellikle başvuru sahibinin ülkesine geri dönüp dönmeyeceği konusunda şüphe duyulması nedeniyle vize şartları ağırdır."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi reddi sicile işler mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "İngiltere vize reddi yalnızca İngiltere başvurularında görünür. Diğer ülkeler bu reddi göremez."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi reddi pasaporta işlenir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır, pasaporta işlenmez."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi için banka hesap dökümü kaç aylık olmalı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En az 3 aylık banka hesap dökümü sunulmalıdır."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi için maaş bordrosu şart mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Son 3 aya ait maaş bordrosu gerekli belgeler arasındadır."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi için tapu veya araç ruhsatı gerekli mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zorunlu değildir ancak varsa destekleyici belge olarak sunulabilir."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesiyle çalışabilir miyim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bu durum, alınan vize türüne göre değişiklik gösterir."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi ile başka ülkelere gidilebilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "İngiltere üzerinden giriş yapmak şartıyla İrlanda veya İskoçya’ya seyahat edilebilir."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi uzatılabilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vize süresi sona erdiğinde yeniden vize başvurusu yapılması gerekir."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi ile İngiltere’de evlenilebilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. İngiltere’deki Türk Konsolosluğu’nda nikah kıyılabilir."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesiyle İngiltere’de iş bulunur mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bu durum alınan vize türüne bağlıdır."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi için express (hızlı) başvuru var mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Başvurunun sonuçlanma süresini hızlandıran seçenekler bulunmaktadır."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi başvurusu hangi şehirlerden yapılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "İstanbul (standart/premium), Ankara (standart/premium), İzmir (premium), Trabzon (premium), Antalya (premium), Adana (premium), Bursa (premium), Gaziantep (premium), İstanbul Altunizade (premium)."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi için İngilizce bilmek şart mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. İngilizce bilme zorunluluğu yoktur."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi alındıktan sonra reddedilebilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reddedilme durumu olmaz ama iptal edilebilir."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi garantili mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. Hiçbir vize başvurusu için garanti verilemez. Garanti veren kişi veya kurumlara itibar edilmemelidir."
          }
        },
        {
          "@type": "Question",
          "name": "İngiltere vizesi için danışmanlık almak avantaj sağlar mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Başvuru sürecinin doğru yönetilmesi ve olumlu sonuç alınabilmesi adına uzman danışmanlardan destek almak faydalı olabilir."
          }
        }
      ]
    }]
    }),
  }}
/>

           <main className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 font-sans min-h-screen">

      {/* HERO ----------------------------------------------------- */}
      <section
        ref={register}
        data-anim="ukvisa-fade-down"
        className="ukvisa-fade-down-init relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.12),transparent_25%)]" />

        <div className="relative max-w-6xl mx-auto px-6 py-18 md:py-20 flex flex-col lg:flex-row items-center gap-12">

          {/* Sol içerik */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow border border-slate-200/70">
              <FaPassport className="text-blue-500" />
              <span className="text-sm text-slate-700">İngiltere Vize Rehberi</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              İngiltere vizesi için modern, hızlı ve güvenli rehber
            </h1>

            <p className="text-slate-700 text-lg md:text-xl max-w-2xl">
              Belgeleri toparlayın, başvurunuzu planlayın ve süreci adım adım takip edin.
              Tüm kritik noktalar ve ipuçları tek ekranda.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/randevu">
                <button className="bg-blue-500 text-white px-5 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-400">
                  Hemen Başvur
                </button>
              </Link>

              <Link href="/iletisim">
                <button className="bg-white text-blue-600 px-5 py-3 rounded-xl border border-blue-100 font-semibold shadow-sm hover:bg-blue-50">
                  Uzmanla Görüş
                </button>
              </Link>
            </div>

            {/* İstatistikler */}
          <div
  ref={register}
  data-anim="ukvisa-stagger"
  className="ukvisa-stagger grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg"
>
  {[
    { label: "Ortalama randevu bulma süresi", value: "15 iş günü", icon: <FaClock /> },
    { label: "6 aylık harç bedeli", value: "173 $",desc:"İstenen süreye göre harç miktarı değişmektedir", icon: <FaFileInvoiceDollar /> },
    { label: "Başarı ihtimali", value: "Yüksek", icon: <FaCheckCircle /> },
    { label: "Açıklanma / değerlendirme süresi", value: "10 iş günü", icon: <FaClock /> },
    { label: "Hizmet bedeli", value: "400 $", icon: <FaFileInvoiceDollar /> },



  ].map((item, idx) => (
    <div
      key={idx}
      className="bg-white border border-slate-200 rounded-xl px-1 py-3 flex flex-col items-center justify-center  shadow-sm"
    >
      <div className=" px-2 py-3 flex items-center gap-4">
<div className="text-lime-500 text-xl">{item.icon}</div>
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase text-slate-500">{item.label}</p>
<p
  className={`font-semibold text-md ${
    item.value === "Yüksek"
      ? "text-orange-600"
      : "text-slate-900"
  }`}
>
  {item.value}
</p>

       
 
      </div>
      </div>
      
      <p className="text-[10px]">{item.desc || ""}</p>
    </div>
    
  ))}
</div>

          </div>

          {/* Sağ görsel */}
          <div
            ref={register}
            data-anim="ukvisa-scale"
            className="ukvisa-scale-init flex-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-fuchsia-500/10 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <Image
                  src="/images/ukdetail.jpg"
                  alt="İngiltere vizesi görseli"
                  width={620}
                  height={480}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="absolute -bottom-6 -left-4 bg-white border border-slate-200 backdrop-blur-lg rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg">
                <FaPlaneDeparture className="text-blue-500 text-2xl" />
                <div>
                  <p className="text-xs text-slate-600">Hazırlık Tamamlandı</p>
                  <p className="font-semibold text-slate-900">Bavulları toplamaya başlayabilirsiniz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BİLGİ KARTLARI -------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-slate-500 uppercase">İlk adımlar</p>
            <h2 className="text-3xl font-bold text-slate-900">Kimler ve hangi şartlarda?</h2>
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
              <div className="mt-4 h-1 w-12 bg-green-300 rounded-full group-hover:w-32 transition-all duration-750"></div>
            </div>
          ))}
        </div>
      </section>

      {/* BELGELER -------------------------------------------------- */}
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
              <div className="text-rose-500 text-2xl">{doc.icon}</div>
              <p className="text-slate-800 text-sm">{doc.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SÜREÇ -------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-sm text-slate-500 uppercase">Süreç</p>
            <h2 className="text-3xl font-bold text-slate-900">Başvuruyu 5 adımda tamamlayın</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              ref={register}
              data-anim="ukvisa-slide"
              className="ukvisa-slide-init relative bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-blue-400/60 transition "
            >
              <div className="absolute -top-5 -left-2 bg-orange-500 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold ">
                {step.step}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-700 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
<section id="faq" className="max-w-6xl mx-auto px-6 py-20">
  <div className="mb-10">
    <p className="text-sm uppercase text-slate-500 tracking-wide">
      Sık Sorulan Sorular
    </p>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
      İngiltere Vizesi Hakkında En Çok Sorulan Sorular
    </h2>
  </div>

  <div className="space-y-4">

    <details open className="rounded-xl border border-slate-200 bg-white p-5 text-justify">
      <summary className="font-semibold cursor-pointer">
        İngiltere Schengen vizesi midir?
      </summary>
      <p className="mt-3 text-slate-700">
        Hayır. İngiltere Schengen bölgesine dahil değildir ve kendine ait ayrı bir vize sistemi vardır.
      </p>
    </details>

    <details className="rounded-xl border border-slate-200 bg-white p-5 text-justify">
      <summary className="font-semibold cursor-pointer">
        Yeşil pasaportla İngiltere’ye vizesiz gidilir mi?
      </summary>
      <p className="mt-3 text-slate-700">
        Hayır. Yeşil pasaport sahipleri de İngiltere için vize almak zorundadır.
      </p>
    </details>

    <details className="rounded-xl border border-slate-200 bg-white p-5 text-justify">
      <summary className="font-semibold cursor-pointer">
        İngiltere vizesi ne kadar süreli verilir?
      </summary>
      <p className="mt-3 text-slate-700">
        İngiltere vizeleri genellikle 6 ay, 2 yıl, 5 yıl ve 10 yıl süreli olarak verilir.
      </p>
    </details>

    <details className="rounded-xl border border-slate-200 bg-white p-5 text-justify">
      <summary className="font-semibold cursor-pointer">
        İngiltere vizesi kaç günde sonuçlanır?
      </summary>
      <p className="mt-3 text-slate-700">
        Başvurular çoğunlukla 2 hafta içinde sonuçlanır, bazı durumlarda 3 haftaya uzayabilir.
      </p>
    </details>

    <details className="rounded-xl border border-slate-200 bg-white p-5 text-justify">
      <summary className="font-semibold cursor-pointer">
       Randevular ne zamana veriliyor?

      </summary>
      <p className="mt-3 text-slate-700">
       Genellikle randevular en fazla 10 gün sonrasına bulunabilir. Çok nadir olmakla birlikte randevu bulunamadığı durumlar olabilir; böyle zamanlarda premium randevu seçenekleri sunulur ve ek ücret ödeyerek yine yakın tarihlere randevu almanız mümkündür.

      </p>
    </details>
<details className="rounded-xl border border-slate-200 bg-white p-5">
  <summary className="cursor-pointer font-semibold text-slate-900">
    Diğer sık sorulan sorular
  </summary>

  <div className="mt-4 space-y-4 text-slate-700 text-justify">

    <p><strong>İngiltere vizesi multi mi?</strong><br />
    Evet. İngiltere vizesi çok girişlidir (multiple-entry). Ancak her bir girişte maksimum 6 ay kalma hakkınız bulunur.</p>

    <p><strong>En fazla kaç gün kalabilirim?</strong><br />
    Tek girişte en fazla 6 ay kalabilirsiniz. Bu süreyi aşmanız durumunda vize ihlali oluşur.</p>

    <p><strong>Banka hesabımda ne kadar para olmalı?</strong><br />
    İngiltere’de yapılacak tüm masrafları karşılayacak ve dönüşte de hesabınızda bakiye kalacak makul bir tutar bulunmalıdır.</p>

    <p><strong>Hesabıma son dakika para girişi oldu, sorun olur mu?</strong><br />
    Genellikle olumsuz değerlendirilir. Ancak para girişinin kaynağı belgelenebiliyorsa durum açıklanabilir.</p>

    <p><strong>Hiçbir ülkeye gitmedim, yine de İngiltere’ye başvurabilir miyim?</strong><br />
    Evet. Boş pasaportla da İngiltere vizesi almak mümkündür. Finansal durum seyahat geçmişinden daha önemlidir.</p>

    <p><strong>Başvurumu iptal edince ücret iadesi alabilir miyim?</strong><br />
    Teknik olarak mümkündür ancak ücret iade süreci genellikle uzun sürer.</p>

    <p><strong>İngiltere vize reddi aldım, itiraz hakkım var mı?</strong><br />
    Hayır. Standart ziyaretçi vizelerinde itiraz hakkı bulunmaz. Yeniden başvuru yapılması gerekir.</p>

    <p><strong>Seyahatimi ne kadar sonrasına planlamalıyım?</strong><br />
    Başvuru tarihinden itibaren en fazla 6 ay ileri tarihli seyahat planlaması yapılabilir.</p>

    <p><strong>Vizem açıklandıktan sonra hangi tarihten itibaren başlar?</strong><br />
    Vize başlangıç tarihi, başvuruda belirtilen tarihe göre vize memurları tarafından düzenlenir.</p>

    <p><strong>Kaç günlük bir seyahat planlamalıyım?</strong><br />
    Turistik seyahatlerde genellikle en fazla 10 günlük planlama önerilir.</p>

    <p><strong>Ne kadar harcama yapacağımı beyan etmeliyim?</strong><br />
    Seyahat süresine göre değişmekle birlikte genellikle 750–1500 GBP arası beyan edilir.</p>

    <p><strong>Belgeleri ne zaman hazırlamaya başlıyoruz?</strong><br />
    Vize harcı ödendikten ve randevu alındıktan sonra evrak hazırlığına başlanır.</p>

    <p><strong>İngiltere vizesi almak zor mu?</strong><br />
    İngiltere vizesi zor vizelerden biridir ancak doğru ve eksiksiz başvuru ile olumlu sonuç alınabilir.</p>

    <p><strong>İngiltere vizesinde mülakat var mı?</strong><br />
    Hayır. Çoğu İngiltere vizesinde mülakat yapılmaz, değerlendirme belgeler üzerinden yapılır.</p>

    <p><strong>İngiltere vizesi neden reddedilir?</strong><br />
    En yaygın ret nedeni finansal unsurlardır. Şüpheli banka hareketleri vize reddine yol açabilir.</p>

    <p><strong>İngiltere vizesi başvurusu online mı yapılır?</strong><br />
    Evet. Başvuru formu online doldurulur ve belgeler online yüklenir.</p>

    <p><strong>İngiltere vizesi için davetiye gerekli mi?</strong><br />
    Hayır. Davetiye zorunlu değildir ancak varsa destekleyici belge olarak sunulabilir.</p>

    <p><strong>İngiltere vizesi için uçak bileti almak gerekir mi?</strong><br />
    Hayır. Satın alınmış uçak bileti veya rezervasyon zorunlu değildir.</p>

    <p><strong>İngiltere vizesi için otel rezervasyonu şart mı?</strong><br />
    Hayır. Otel rezervasyonu zorunlu değildir ancak varsa sunulabilir.</p>

    <p><strong>İngiltere vizesi reddinden sonra tekrar başvuru yapılabilir mi?</strong><br />
    Evet. Vize harcı ödendiği sürece yeniden başvuru yapılabilir.</p>

    <p><strong>İngiltere vizesi ilk başvuruda çıkar mı?</strong><br />
    Profil uygunsa ilk başvuruda vize alınabilir.</p>

    <p><strong>İngiltere vizesi için sponsor gerekli mi?</strong><br />
    Profilinize bağlıdır. Her başvuru için sponsor zorunlu değildir.</p>

    <p><strong>İngiltere vizesi çocuklar için nasıl alınır?</strong><br />
    Çocuklar için başvuru süreci yetişkinlerle aynıdır.</p>

    <p><strong>İngiltere vizesi öğrenci olmayanlar için zor mu?</strong><br />
    Hayır. Gerekli şartlar sağlandığında herkes için değerlendirme aynıdır.</p>

    <p><strong>İngiltere vizesi için çalışıyor olmak şart mı?</strong><br />
    Hayır. Birinci derece yakın sponsor gösterilerek başvuru yapılabilir.</p>

    <p><strong>İngiltere vizesi serbest meslek sahipleri için nasıl alınır?</strong><br />
    Gelir yasal şekilde belgelenebiliyorsa olumlu sonuç alınabilir.</p>

    <p><strong>İngiltere vizesinde evli olmak avantaj mı?</strong><br />
    Profilinize bağlı olarak avantaj sağlayabilir ancak zorunlu değildir.</p>

    <p><strong>İngiltere vizesi reddi sicile işler mi?</strong><br />
    Hayır. İngiltere reddi sadece İngiltere sisteminde görünür.</p>

    <p><strong>İngiltere vizesi reddi pasaporta işlenir mi?</strong><br />
    Hayır. Pasaporta fiziksel olarak işlenmez.</p>

    <p><strong>İngiltere vizesi için banka hesap dökümü kaç aylık olmalı?</strong><br />
    En az 3 aylık banka hesap dökümü sunulmalıdır.</p>

    <p><strong>İngiltere vizesi için maaş bordrosu şart mı?</strong><br />
    Evet. Son 3 aya ait maaş bordrosu gereklidir.</p>

    <p><strong>İngiltere vizesi için tapu veya araç ruhsatı gerekli mi?</strong><br />
    Zorunlu değildir ancak destekleyici belge olarak sunulabilir.</p>

    <p><strong>İngiltere vizesiyle çalışabilir miyim?</strong><br />
    Alınan vize türüne göre değişiklik gösterir.</p>

    <p><strong>İngiltere vizesi ile başka ülkelere gidilebilir mi?</strong><br />
    İngiltere üzerinden giriş yapmak şartıyla İrlanda ve İskoçya’ya seyahat edilebilir.</p>

    <p><strong>İngiltere vizesi uzatılabilir mi?</strong><br />
    Hayır. Süre bitiminde yeniden başvuru yapılmalıdır.</p>

    <p><strong>İngiltere vizesi ile İngiltere’de evlenilebilir mi?</strong><br />
    Evet. İngiltere’de Türk Konsolosluğu’nda nikah kıyılabilir.</p>

    <p><strong>İngiltere vizesiyle İngiltere’de iş bulunur mu?</strong><br />
    Bu durum alınan vize türüne bağlıdır.</p>

    <p><strong>İngiltere vizesi için express başvuru var mı?</strong><br />
    Evet. Başvuruyu hızlandıran ücretli seçenekler mevcuttur.</p>

    <p><strong>İngiltere vizesi başvurusu hangi şehirlerden yapılır?</strong><br />
    İstanbul, Ankara, İzmir, Antalya, Bursa, Adana, Gaziantep, Trabzon ve Altunizade ofislerinden yapılabilir.</p>

    <p><strong>İngiltere vizesi için İngilizce bilmek şart mı?</strong><br />
    Hayır. İngilizce bilme zorunluluğu yoktur.</p>

    <p><strong>İngiltere vizesi alındıktan sonra reddedilebilir mi?</strong><br />
    Reddedilmez ancak şart ihlali halinde iptal edilebilir.</p>

    <p><strong>İngiltere vizesi garantili midir?</strong><br />
    Hayır. Hiçbir vize başvurusu %100 garantili değildir.</p>

    <p><strong>İngiltere vizesi için danışmanlık almak avantaj sağlar mı?</strong><br />
    Sürecin doğru yönetilmesi adına profesyonel danışmanlık fayda sağlayabilir.</p>

  </div>
</details>



  </div>
</section>

      {/* CTA -------------------------------------------------- */}
      <section
        ref={register}
        data-anim="ukvisa-fade-up"
        className="ukvisa-fade-up-init max-w-6xl mx-auto px-6 pb-20 "
      >

 <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-xl">
 
   <div
  className="absolute inset-0 rounded-3xl"
  style={{
    background:
      "radial-gradient(circle at 18% 28%, rgba(1,33,105,0.22), transparent 45%), radial-gradient(circle at 82% 32%, rgba(200,16,46,0.16), transparent 45%), linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)",
  }}
/>

{/* SOFT UNION JACK STRIPES */}
<div
  className="absolute inset-0 opacity-20 rounded-3xl"
  style={{
    background:
      "repeating-linear-gradient(135deg, rgba(200,16,46,0.12) 0 10px, rgba(255,255,255,0) 10px 22px)",
    mixBlendMode: "multiply",
  }}
/>
          
          <div className="relative p-6 md:p-8 space-y-6 ">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Sizinleyiz</h2>

            <div className="grid md:grid-cols-3 gap-4">
              {[ "Tecrübe", "Profesyonellik", "Aya Journey" ].map((t, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/85 border border-slate-200">
                  <h4 className="font-semibold text-slate-900">{t}</h4>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <p className="text-slate-900 font-semibold">Aya Journey her aşamada yanınızda.</p>

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
    </>

  );
};

export default UKVisaPage;
