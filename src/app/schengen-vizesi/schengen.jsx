"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCheckCircle,
  FaRegFileAlt,
  FaRegClock,
  FaGlobeEurope,
  FaUserTie,
  FaEuroSign,
} from "react-icons/fa";

// Mevcut veri yapısı korunmuştur.
const basicInfo = {
  heroTitle: "Schengen Vize Başvuru Süreci",
  heroSubtitle:
    "Profilinizi tanıyıp evrak hazırlığından randevuya kadar tüm süreci kolaylaştırıyoruz. Hızlı, güvenilir ve kişiye özel danışmanlık.",
  cta: { href: "/randevu", label: "Ücretsiz Ön Değerlendirme" },
};

const fees = {
  visaFee0: "Ücretsiz",
  visaFee6: "45€",
  visaFee12: "90€",

  appointmentRange: "440–2000 TL",
  consultancy0: "100€ (0-14 Yaş)",
  consultancy14: "200€ (14+)",

};

const genelEvraklar = [
  {
    title: "Schengen Başvuru Formu",
    desc: "Eksiksiz doldurulmuş Schengen vize formu.",
    icon: FaRegFileAlt,
  },
  {
    title: "Pasaport",
    desc: "Seyahat bitiminden itibaren en az 6 ay geçerlilik; eski pasaportlar varsa eklenmeli.",
    icon: FaRegFileAlt,
  },
  {
    title: "2 Adet Fotoğraf",
    desc: "35x45 mm, biyometrik, son 6 ay içinde çekilmiş.",
    icon: FaRegFileAlt,
  },
  {
    title: "Otel ve Uçak Rezervasyonları",
    desc: "Rezervasyonlar seyahat planınızı açıkça göstermeli.",
    icon: FaRegFileAlt,
  },
  {
    title: "Seyahat Sağlık Sigortası",
    desc: "Seyahat süresini kapsayan poliçe (Romanya'da kalış süresi boyunca geçerli olacak şekilde sigorta yapılmalıdır)",
    icon: FaRegFileAlt,
  },
  {
    title: "İngilizce Vize Talep Dilekçesi",
    desc: "Gidiş amacı ve tarihleri belirten dilekçe.",
    icon: FaRegFileAlt,
  },
  {
    title: "Banka Hesap Hareketleri",
    desc: "Son 3 aya ait hesap hareketleri; ıslak imza & kaşe ve imza sirküleri ekli olmalı.",
    icon: FaRegFileAlt,
  },
  {
    title: "Tarihçeli İkametgâh & Nüfus Kayıt Örneği",
    desc: "E-devletten barkodlu alınabilir.",
    icon: FaRegFileAlt,
  },
  {
    title: "Kimlik Fotokopisi",
    desc: "Nüfus cüzdanı fotokopisi.",
    icon: FaRegFileAlt,
  },
];

const ekBelgelerByProfile = [
  {
    profile: "Çalışanlar / İşveren",
    icon: FaUserTie,
    items: [
      "İşveren dilekçesi (ıslak imzalı & kaşeli, izin tarihleri belirtilmiş)",
      "SGK işe giriş bildirgesi (barkodlu)",
      "Barkodlu 4A hizmet dökümü",
      "Son 3 aylık kaşeli & imzalı maaş bordrosu",
      "Faaliyet belgesi (son 30 gün içinde alınmış)",
      "Ticaret sicil gazetesi fotokopisi, imza sirküleri, güncel vergi levhası",
    ],
  },
  {
    profile: "Emekli",
    icon: FaRegClock,
    items: ["E-devlet üzerinden alınmış Emekli Aylık Belgesi"],
  },
  {
    profile: "Öğrenci",
    icon: FaRegFileAlt,
    items: ["E-devlet üzerinden alınmış Öğrenci Belgesi"],
  },
  {
    profile: "Ticari / Aile Ziyareti",
    icon: FaGlobeEurope,
    items: ["Başvurulan ülkedeki kişi/şirketten gönderilen davetiye"],
  },
  {
    profile: "Sponsor Gerekenler",
    icon: FaEuroSign,
    items: ["Sponsor mektubu & gelir belgeleri"],
  },
];

const processSteps = [
  {
    title: "Profilinizi Tanıyalım",
    desc: "Mesleğiniz, medeni durumunuz, yaşınız ve önceki seyahat geçmişinizi inceleyip size en uygun Schengen ülkesini ve stratejiyi belirliyoruz.",
  },
  {
    title: "Bilgi Paylaşımı",
    desc: "Pasaport, e-posta ve telefon bilgilerinizi aldıktan sonra randevu arama sürecine başlıyoruz.",
  },
  {
    title: "Randevu Süreci",
    desc: "İkamet iliniz başvuru şehrinizi etkiler. Uygun randevu bulunduğunda tarih/saat onayınız alınır ve randevunuz oluşturulur.",
  },
  {
    title: "Randevu Sonrası",
    desc: "Randevunuz onaylandıktan sonra evrak listeniz, niyet mektubunuz ve diğer belgeler tarafınıza iletilir.",
  },
  {
    title: "Evrak Teslimi & Takip",
    desc: "Evraklar aracı kuruma teslim edilir; parmak izi verilir, harç ödenir ve pasaport teslim edilir.",
  },
];

export default function SchengenPage() {
  const animRefs = useRef([]);

  const register = (el) => {
    if (el && !animRefs.current.includes(el)) {
      animRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const anim = entry.target.dataset.anim;
            if (anim) {
              entry.target.classList.add(anim + "-show");
            }
          }
        }),
      { threshold: 0.25 }
    );

    animRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
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
          "name": "Schengen Vize Danışmanlığı",
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
          "description": "Tüm Avrupa ülkeleri için Schengen vize başvurusu, iData/VFS/AS Travel randevu takibi ve dosya hazırlığı."
        },
        {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Schengen vizesi almak zor mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, eskisine göre daha zor ama imkansız değil. Konsolosluklar düzensiz göç riskini azaltmak için başvurularda geri dönüş niyeti ve finansal yeterliliği daha detaylı inceler. Doğru evrak, tutarlı seyahat planı ve güçlü profil ile Schengen vizesi almak mümkündür."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi kaç ülke için geçerlidir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Schengen vizesi Almanya, Avusturya, Belçika, Bulgaristan, Çekya, Danimarka, Estonya, Finlandiya, Fransa, Hollanda, İspanya, İsveç, İsviçre, İtalya, İzlanda, Letonya, Litvanya, Lüksemburg, Macaristan, Malta, Norveç, Polonya, Portekiz, Romanya, Slovakya, Slovenya, Yunanistan ve Lihtenştayn ülkeleri için geçerlidir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi Schengen ülkeleri arasında serbest dolaşım sağlar mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Geçerli bir Schengen vizeniz olduğunda Schengen bölgesindeki 29 üye ülke arasında iç sınır kontrolleri olmadan serbestçe dolaşabilirsiniz. Ancak vize kuralları gereği seyahatinize vizeyi aldığınız (başvurduğunuz) ülke üzerinden başlamanız tavsiye edilir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi ile tüm Schengen ülkelerine girilebilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, aldığınız Schengen vizesi ile tüm Schengen ülkelerine giriş yapabilirsiniz. Yine de uygulamada sorun yaşamamak için seyahate vizeyi aldığınız ülkeden başlamak ve planınızı başvurunuzla tutarlı yürütmek önerilir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi ile kaç gün kalınabilir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Schengen vizesiyle, vizenizin üzerinde yazan süreyi aşmamak kaydıyla 180 günlük zaman dilimi içinde en fazla 90 gün kalabilirsiniz. 90/180 kuralı tüm Schengen alanı için geçerlidir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi kaç yıl verilir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vize süresi tamamen konsolosluğun inisiyatifindedir. Seyahat geçmişiniz ve profilinize bağlı olarak, seyahat sürenizden başlayıp 5 yıla kadar uzayabilir. Güçlü vize geçmişi ve düzenli seyahat profili, daha uzun süreli vize ihtimalini artırabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi başvurusu online mı yapılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Süreç hibrit şekilde ilerler. Randevu ve hazırlıkların önemli kısmı online gerçekleşir; ancak randevu günü fiziken başvuru merkezine gidip parmak izi (biyometri) vermeniz ve evrak teslimi yapmanız beklenir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi randevusu nasıl alınır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Randevular genellikle ilgili ülkenin yetkilendirdiği aracı kurumlar/vize başvuru merkezleri üzerinden alınır. Başvuru formu doldurulur, vize türü seçilir ve uygun bir tarih belirlenerek randevu oluşturulur."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi başvurusu kaç günde sonuçlanır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Schengen vizesi sonuçlanma süresi ortalama bir aydır. Bazı ülkelerde 15 gün içerisinde de sonuç alınabilir. Yoğun dönemler, resmi tatiller ve ek evrak talepleri süreyi uzatabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi ne kadar sürede çıkar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Schengen vizesi için açıklanma süresi çoğunlukla ortalama bir ay olarak görülebilir; bazı başvurular 15 gün içinde de sonuçlanabilir. Değerlendirme süresi ülkeye, döneme ve dosyanın içeriğine göre değişir."
          }
        },
        {
          "@type": "Question",
          "name": "Hangi ülkeye Schengen başvurusu yapmalıyım?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En uzun konaklamayı yapacağınız ülkeye başvuru yapılmalıdır. Konaklama günleri eşitse ilk giriş yapacağınız ülkeye başvurulur. Profil, seyahat geçmişi ve meslek gibi etkenlere göre başvuru stratejisi kişiye özel şekillendirilebilir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi hangi ülke üzerinden alınmalı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Birden fazla ülkeyi ziyaret edecekseniz en çok vakit geçireceğiniz ülke üzerinden başvuru yapmalısınız. Eğer süreler eşitse ilk giriş ülkesine başvurmak gerekir. Başvurunun seyahat planıyla tutarlı olması önemlidir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi için banka hesabında ne kadar para olmalı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hesabınızda göstereceğiniz bakiyenin amacı, seyahat edebilecek yeterlilikte bir profil olduğunuzu ve ülkenizde de yeterli birikim ve kazanca sahip olduğunuzu ispat etmektir. Seyahat gün sayısı ve planlanan harcamalara göre günlük ortalama Euro baz alınarak masrafları karşılayacak bakiye göstermek gerekir. Düzenli gelir ve tutarlı hesap hareketleri de önemlidir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi için hesap dökümü kaç aylık olmalı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Genellikle ülkeler 3 aylık hesap dökümü talep eder. Bazı ülkeler ve profiller için 6 aylık hesap dökümü de istenebilir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi için maaş bordrosu şart mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Çalışan olarak başvuruda bulunuyorsanız, maaş bordrosu sunulması zorunludur. Sponsorunuz çalışan ise sponsorun maaş bordrosu da dosyaya eklenmelidir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi için uçak bileti almak gerekir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ülkeden ülkeye değişmekle birlikte genel olarak satın alınmış uçak bileti zorunlu değildir. Çoğu durumda gidiş-dönüş tarihlerinizi gösteren uçak rezervasyonu sunmanız yeterlidir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi için otel rezervasyonu şart mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Seyahat sürecinizi kapsayacak şekilde otel rezervasyonu sunmak zorunludur. Alternatif olarak, bir yakının yanında kalacaksanız davetiye/konaklama belgesi otel yerine geçebilir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi için seyahat sağlık sigortası zorunlu mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, zorunludur. En az 30.000 Euro teminatlı ve tüm seyahat sürenizi kapsayan seyahat sağlık sigortası poliçesi sunmanız gerekir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi için davetiye gerekli mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. Turistik başvurularda davetiye zorunlu değildir. Ancak bir akraba veya arkadaş yanında konaklayacaksanız, onaylı davetiye otel rezervasyonu yerine geçebilir ve konaklama belgesi olarak sunulur."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi ilk başvuruda çıkar mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vize onayı tamamen konsolosluğun takdirindedir ve hiçbir başvurunun %100 garantisi yoktur. İlk başvuruda da onay alınabilir; dosyanın tutarlılığı ve başvuru sahibinin profili belirleyicidir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi garantili mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. Hiçbir Schengen vizesi başvurusu %100 garantili değildir. Nihai karar konsolosluğa aittir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi danışmanlık almak avantaj sağlar mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Danışmanlık almak evrak hatalarını minimize etmeye, size özel başvuru stratejisi oluşturmaya ve randevu/evrak takibini doğru yapmaya yardımcı olabilir. Bu da dosyanın ikna ediciliğini artırarak onay şansına olumlu katkı sağlayabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi hangi ülkeden daha kolay alınır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bu, başvuru sahibinin profiline ve seyahat planına göre değişir. İlk Schengen vizesi başvurularında turistik ülkeler üzerinden, planla uyumlu ve belgeleri güçlü bir dosya ile başvurmak onay ihtimalini artırabilir."
          }
        },
          {
          "@type": "Question",
          "name": "Schengen vizesi reddi neden olur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Schengen vizesi reddi; geri döneceğinize dair ülkenizle bağların zayıf görülmesi, yetersiz finansal kaynaklar, sahte/çelişkili evrak, eksik belge, tutarsız banka hareketleri, şüpheli seyahat planı ve geçmiş reddler gibi nedenlerle verilebilir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi reddi pasaporta işlenir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pasaportunuzun içine 'vize reddi' yazan fiziksel bir damga vurulmaz veya yazı yazılmaz. Ancak ret kararı Schengen ülkelerinin ortak dijital veri tabanına kaydedilebilir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi reddi sicile işler mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Konsoloslukların ortak veri tabanında (Schengen Bilgi Sistemi gibi) ret kararları kayıtlı kalabilir. Bu kayıtlar sonraki başvuruların değerlendirilmesinde etkili olabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi reddinden sonra tekrar başvuru yapılabilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, ret aldıktan sonra tekrar başvuru yapabilirsiniz. Ancak yeni başvuruda önceki ret gerekçelerini belgelerle çürütemezseniz sonuç büyük ihtimalle yine ret olacaktır."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi reddinden sonra ne kadar süre beklenmeli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eğer seyahat planınız sabitse, ret gerekçelerini güçlü evraklarla gidererek kısa sürede yeniden başvuru yapılabilir. Farklı bir seyahat planı oluşturacaksanız 4–5 ay beklemek daha sağlıklı olabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi çok girişli (multiple) olur mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Schengen vizesi 'MULT' ibaresiyle çok girişli olarak verilebilir; böylece vize geçerlilik süresi boyunca Schengen bölgesine defalarca girip çıkabilirsiniz."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi kaç girişlidir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Schengen vizesinde giriş hakkı üç şekilde tanımlanır: Tek giriş (single), ikili giriş (double) ve çoklu giriş (multiple/MULT)."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi ile çalışabilir miyim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kısa dönem C tipi Schengen vizesi ile çalışamazsınız. Çalışma hakkı, D tipi ulusal vize veya oturum izni gibi başvurularda vize türüne göre mümkündür."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi ile başka ülkelere gidilebilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "İlk girişi vize aldığınız ülkeden yapmak mantıklı olandır. Sonrasında Schengen bölgesi içinde farklı ülkelere geçiş sağlayabilirsiniz."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi uzatılabilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Schengen vizesinin uzatılması genellikle istisnai durumlarda mümkündür ve her başvuru kabul edilmez. Uzatma koşulları ülkeye ve duruma göre değerlendirilir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi express başvuru var mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır. Schengen vize başvurularında resmi bir 'express' başvuru hizmeti sunulmaz."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi alındıktan sonra iptal edilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Vize onayından sonra otel veya uçuş rezervasyonlarının iptal edilmesi, yanıltıcı belge sunulduğunun sonradan tespit edilmesi gibi durumlarda vize iptal edilebilir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi alındıktan sonra reddedilebilir mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Vize onaylanıp pasaporta basıldıktan sonra bile sahte belge tespiti, konaklama/uçuş rezervasyonlarının iptali veya sınır kapısında sunulan çelişkili bilgiler nedeniyle vize iptal edilebilir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi çocuklar için nasıl alınır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Çocuklar için de bireysel vize başvurusu zorunludur. Başvuru formu ebeveynler tarafından imzalanmalıdır. Çocuk ebeveynleri dışında biriyle seyahat edecekse, her iki ebeveynden noter onaylı muvafakatname dosyaya eklenmelidir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi ev hanımları için nasıl alınır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ev hanımları için başvuru genellikle sponsorlu şekilde ilerler. Seyahat masraflarını karşılayacak birinci derece yakının (çoğunlukla eşin) mali belgeleri ile başvuru yapılır."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi serbest meslek sahipleri için zor mu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hayır, zor değildir. Şirketin ticaret sicil kayıtları, güncel vergi levhası ve şahsi banka hesaplarının düzenli akışı ile gelirin şeffaf şekilde belgelenmesi önemlidir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi neden zor veriliyor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Schengen vizesinin zor verilmesinin temel nedeni, Avrupa ülkelerinin artan düzensiz göç riskini önlemek istemesi ve başvuranın ülkesine geri döneceğinden ve seyahat masraflarını karşılayabileceğinden emin olmaya çalışmasıdır."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi en uzun hangi ülke veriyor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bu durum başvuru sahibinin profiline göre değişir. Güçlü vize geçmişi, ticari bağlantılar veya kanıtlanmış turistik seyahat profili olan kişilere bazı ülkeler daha uzun süreli vize verme eğiliminde olabilir."
          }
        },
        {
          "@type": "Question",
          "name": "Schengen vizesi için tapu veya araba ruhsatı gerekli mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zorunlu değildir. Ancak tapu ve araç ruhsatı gibi belgeler, ülkenizdeki bağlarınızı ve maddi durumunuzu destekleyen ek evrak olarak dosyayı güçlendirebilir."
          }
        }
      ]
    }]
    })
  }}
/>

       <main className="min-h-screen bg-white text-gray-800">

      {/* HERO */}
      <section
        ref={register}
        data-anim="schengen-fade-down"
        className="schengen-fade-down-init relative w-full bg-white border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Sol */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-5">
              {basicInfo.heroTitle}
            </h1>
            <p className="text-gray-600 mb-8 max-w-2xl text-lg">
              {basicInfo.heroSubtitle}
            </p>

            <Link href={basicInfo.cta.href}>
              <button className="bg-white text-gray-700 cursor-pointer mt-5 border border-blue-300 px-4 py-2 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100">
                {basicInfo.cta.label}
              </button>
            </Link>

            <div className="mt-8 text-base text-gray-600 border-t border-gray-100 pt-4 space-y-3">
              <div className="flex items-center gap-3">
                <FaRegFileAlt className="text-blue-600 text-xl" />
                <span>Randevu ücretleri: {fees.appointmentRange}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaRegClock className="text-blue-600 text-xl" />
                <span>Tahmini süreç: 3–8 ay (ülke ve dosya türüne göre değişkenlik gösterebilir)</span>
              </div>
            </div>
          </div>

          {/* Sağ görsel */}
          <div
            ref={register}
            data-anim="schengen-scale"
            className="schengen-scale-init w-full flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 `bg-gradient-to-br` from-blue-500/15 via-indigo-500/10 to-fuchsia-500/10 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/images/visa schengen.jpg"
                  alt="Schengen Vize Danışmanlığı"
                  width={560}
                  height={600}
                  className="rounded-3xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAŞVURU SÜRECİ */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2
          ref={register}
          data-anim="schengen-fade-up"
          className="schengen-fade-up-init text-3xl font-bold mb-12 text-center text-gray-900"
        >
          Başvuru Süreci Adımları
        </h2>

        <div className="grid lg:grid-cols-5 gap-8">
          {processSteps.map((step, i) => (
            <div
              key={i}
              ref={register}
              data-anim="schengen-slide"
              className="schengen-slide-init relative z-10 p-5 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shadow-md">
                {i + 1}
              </div>
              <h4 className="font-semibold text-lg mt-4 mb-3">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div
          ref={register}
          data-anim="schengen-fade-up"
          className="schengen-fade-up-init mt-16 max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-inner border border-gray-100"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaUserTie className="text-blue-600" />
            Başvuru Stratejisi
          </h3>
          <p className="text-gray-700 text-base">
            Başvuru stratejisi kişinin profiline göre değişir. Mesleğiniz, medeni
            durumunuz, yaşınız ve seyahat geçmişiniz en uygun Schengen ülkesini ve
            başvuru taktiğini belirlemek için titizlikle değerlendirilir.
          </p>
        </div>
      </section>

      {/* GEREKLİ BELGELER */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2
            ref={register}
            data-anim="schengen-fade-up"
            className="schengen-fade-up-init text-3xl font-bold mb-12 text-center text-gray-900"
          >
            Gerekli Belgeler Listesi
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {genelEvraklar.map((item, i) => {
              const Icon = item.icon || FaRegFileAlt;
              return (
                <div
                  key={i}
                  ref={register}
                  data-anim="schengen-fade-up"
                  className="schengen-fade-up-init bg-white rounded-2xl p-6 shadow-md border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-xl text-rose-400">
                      <Icon />
                    </div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROFİLE GÖRE EK BELGELER */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2
          ref={register}
          data-anim="schengen-fade-up"
          className="schengen-fade-up-init text-3xl font-bold mb-12 text-center text-gray-900"
        >
          Profile Göre Ek Belge Gereksinimleri
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ekBelgelerByProfile.map((block, i) => {
            const Icon = block.icon || FaRegFileAlt;
            return (
              <div
                key={i}
                ref={register}
                data-anim="schengen-slide"
                className="schengen-slide-init bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-blue-50 text-violet-400 mr-3">
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="font-bold text-xl">{block.profile}</h3>
                </div>
                <ul className="text-sm text-gray-700 list-none space-y-3">
                  {block.items.map((it, j) => (
                    <li key={j} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mr-2 mt-1 flex shrink-0" size={12} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* EVRAK HAZIRLIĞI & NOTLAR */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white rounded-t-3xl border-t border-gray-200">
        <div
          ref={register}
          data-anim="schengen-fade-up"
          className="schengen-fade-up-init max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-2xl border border-gray-100"
        >
          <h3 className="text-2xl font-bold mb-5 flex items-center gap-2">
            <FaRegFileAlt className="text-red-500" />
            Evrak Hazırlığı & Önemli Notlar
          </h3>
          <ul className="list-none pl-0 text-base space-y-4 text-gray-700">
            <li className="flex items-start">
              <FaCheckCircle className="text-red-500 mr-3 mt-1 flex shrink-0" />
              <span>
                Randevu tarihinden <strong>en az 10 gün önce</strong> hazırlıklara başlayın; son dakikaya
                bırakmayın.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-red-500 mr-3 mt-1 flex shrink-0" />
              <span>
                Banka dökümleri ve barkodlu e-devlet belgelerini <strong>son hafta</strong> alın; aracı kurum
                güncel tarihli talep edebilir.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-red-500 mr-3 mt-1 flex shrink-0" />
              <span>
                Randevuya gitmeme durumunda randevu ücreti <strong>yanar</strong>; yeniden randevu alınması
                gerekir.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-red-500 mr-3 mt-1 flex shrink-0" />
              <span>
                Almanya randevu süreci aracı kurum üzerinden farklı işlemektedir; onay e-postası ve ücret
                sonrası rezervasyon tamamlanır.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ÜCRETLER */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h3
          ref={register}
          data-anim="schengen-fade-up"
          className="schengen-fade-up-init text-3xl font-bold mb-8 text-gray-900"
        >
          Ücret Bilgileri
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div
            ref={register}
            data-anim="schengen-scale"
            className="schengen-scale-init bg-white p-6 rounded-xl shadow-lg border border-gray-100 g-2"
          >
            <FaEuroSign className="text-4xl mx-auto mb-3 text-amber-600" />
            <p className="font-semibold text-lg">Vize Harcı</p>
            <p className="text-xl font-bold text-gray-900 mt-1">{fees.visaFee0} (0-6 yaş)</p>
            <p className="text-xl font-bold text-gray-900 mt-1">{fees.visaFee6} (6-12 Yaş)</p>
            <p className="text-xl font-bold text-gray-900 mt-1">{fees.visaFee12} (12+)</p>

          </div>

          <div
            ref={register}
            data-anim="schengen-scale"
            className="schengen-scale-init bg-white p-6 rounded-xl shadow-lg border border-gray-100 g-2"
          >
            <FaRegClock className="text-4xl mx-auto mb-3 text-amber-600" />
            <p className="font-semibold text-lg">Randevu Bedeli</p>
            <p className="font-semibold text-xs">(Ülkeye göre değişkenlik gösterebilir)</p>


            <p className="text-xl font-bold text-gray-900 mt-1">{fees.appointmentRange}</p>
          </div>

          <div
            ref={register}
            data-anim="schengen-scale"
            className="schengen-scale-init bg-white p-6 rounded-xl shadow-lg border border-gray-100 g-2"
          >
            <FaUserTie className="text-4xl mx-auto mb-3 text-amber-600" />
            <p className="font-semibold text-lg">Danışmanlık Ücreti</p>
            <p className="text-xl font-bold text-gray-900 mt-1">{fees.consultancy0}</p>
            <p className="text-xl font-bold text-gray-900 mt-1">{fees.consultancy14}</p>

          </div>
        </div>
      </section>
{/* FAQ – Schengen vizesi (Schema ile birebir uyumlu) */}
<section
  id="faq"
  className="max-w-6xl mx-auto px-6 py-16"
>
  <div className="mb-10">
    <p className="text-sm text-slate-500 uppercase">Sık Sorulan Sorular</p>
    <h2 className="text-3xl font-bold text-slate-900">
      Schengen Vizesi Hakkında Sık Sorulan Sorular
    </h2>
  </div>

  <div className="space-y-4 text-justify">

    {/* ÖNE ÇIKAN SORULAR */}
    {[
      {
        q: "Schengen vizesi almak zor mu?",
        a: "Schengen vizesi eskisine göre daha zorlayıcı kriterlere sahip olsa da doğru evrak, tutarlı seyahat planı ve güçlü bir profil ile alınması mümkündür. İmkansız değildir."
      },
      {
        q: "Schengen vizesi kaç ülke için geçerlidir?",
        a: "Schengen vizesi Almanya, Fransa, İtalya, İspanya, Hollanda, Yunanistan dahil olmak üzere toplam 29 Schengen ülkesinde geçerlidir."
      },
      {
        q: "Schengen vizesi kaç yıl verilir?",
        a: "Schengen vizesinin süresi tamamen konsolosluğun inisiyatifindedir. Başvuru sahibinin seyahat geçmişi ve profiline göre seyahat süresi kadar ya da 1 yıldan 5 yıla kadar verilebilir."
      },
      {
        q: "Schengen vizesi ile kaç gün kalınabilir?",
        a: "Schengen vizesi ile 180 günlük zaman dilimi içerisinde en fazla 90 gün kalınabilir. Bu kural tüm Schengen bölgesi için geçerlidir."
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

    <p><strong>Schengen vizesi başvurusu online mı yapılır?</strong><br />
    Schengen vizesi başvuru süreci hibrit şekilde ilerler. Randevu alma ve başvuru formu doldurma işlemleri online yapılır; randevu günü ise fiziken parmak izi verilmesi ve evrak teslimi gerçekleştirilir.</p>

    <p><strong>Schengen vizesi randevusu nasıl alınır?</strong><br />
    Randevular, başvuru yapılacak ülkenin yetkilendirdiği vize başvuru merkezleri üzerinden online olarak alınır.</p>

    <p><strong>Schengen vizesi ne kadar sürede çıkar?</strong><br />
    Schengen vizesi genellikle 7–15 iş günü içerisinde sonuçlanır. Konsolosluk yoğunluğu ve resmi tatiller süreci uzatabilir.</p>

    <p><strong>Hangi ülkeye Schengen vizesi başvurusu yapılmalıdır?</strong><br />
    En uzun süre konaklama yapılacak ülkeye başvuru yapılmalıdır. Konaklama süreleri eşitse ilk giriş yapılacak ülke esas alınır.</p>

    <p><strong>Schengen vizesi için banka hesabında ne kadar para olmalı?</strong><br />
    Banka hesabında seyahat süresince masrafları karşılayabilecek yeterli bakiye bulunmalıdır. Günlük harcama ortalaması baz alınır ve düzenli hesap hareketleri önemlidir.</p>

    <p><strong>Schengen vizesi için hesap dökümü kaç aylık olmalı?</strong><br />
    Genellikle son 3 aylık banka hesap dökümü talep edilir. Bazı ülkeler ve profiller için 6 aylık hesap dökümü istenebilir.</p>

    <p><strong>Schengen vizesi için maaş bordrosu şart mı?</strong><br />
    Çalışan olarak başvuruda bulunuyorsanız maaş bordrosu sunulması zorunludur. Sponsorlu başvurularda sponsorun maaş bordrosu da eklenmelidir.</p>

    <p><strong>Schengen vizesi için uçak bileti almak gerekir mi?</strong><br />
    Satın alınmış uçak bileti zorunlu değildir. Çoğu ülke için gidiş-dönüş tarihlerini gösteren uçak rezervasyonu yeterlidir.</p>

    <p><strong>Schengen vizesi için otel rezervasyonu şart mı?</strong><br />
    Evet. Seyahat süresini kapsayan otel rezervasyonu veya geçerli bir konaklama belgesi sunulmalıdır.</p>

    <p><strong>Schengen vizesi için seyahat sağlık sigortası zorunlu mu?</strong><br />
    Evet. En az 30.000 Euro teminatlı ve tüm seyahat süresini kapsayan seyahat sağlık sigortası zorunludur.</p>

    <p><strong>Schengen vizesi için davetiye gerekli mi?</strong><br />
    Turistik başvurularda davetiye zorunlu değildir. Ancak bir yakının yanında konaklanacaksa onaylı davetiye otel yerine geçebilir.</p>

    <p><strong>Schengen vizesi ilk başvuruda çıkar mı?</strong><br />
    İlk başvuruda da Schengen vizesi alınabilir. Ancak başvurunun sonucu tamamen konsolosluğun değerlendirmesine bağlıdır.</p>

    <p><strong>Schengen vizesi reddi neden olur?</strong><br />
    Yetersiz finansal durum, eksik veya hatalı evrak, tutarsız seyahat planı ve geri dönüş bağlarının zayıf görülmesi başlıca ret nedenleridir.</p>

    <p><strong>Schengen vizesi reddinden sonra tekrar başvuru yapılabilir mi?</strong><br />
    Evet, ret sonrası tekrar başvuru yapılabilir. Ancak önceki ret gerekçeleri yeni başvuruda güçlü belgelerle giderilmelidir.</p>

    <p><strong>Schengen vizesi reddi pasaporta işlenir mi?</strong><br />
    Vize reddi pasaporta fiziksel olarak işlenmez. Ancak ret kararı Schengen Bilgi Sistemi (SIS) üzerinde kayıtlı kalır.</p>

    <p><strong>Schengen vizesi reddi sicile işler mi?</strong><br />
    Ret kararları Schengen ülkelerinin ortak veri tabanı olan SIS sisteminde kayıtlı tutulur.</p>

    <p><strong>Schengen vizesi reddinden sonra ne kadar süre beklenmeli?</strong><br />
    Ret gerekçeleri giderilebiliyorsa kısa sürede yeniden başvuru yapılabilir. Farklı bir seyahat planı varsa 4–5 ay beklemek daha sağlıklı olabilir.</p>

    <p><strong>Schengen vizesi çok girişli (multiple) olur mu?</strong><br />
    Evet. Schengen vizesi MULT ibaresiyle çok girişli olarak verilebilir ve vize süresi boyunca birden fazla giriş-çıkış yapılabilir.</p>

    <p><strong>Schengen vizesi kaç girişlidir?</strong><br />
    Schengen vizeleri tek girişli, çift girişli veya çok girişli (multiple) olarak düzenlenebilir.</p>

    <p><strong>Schengen vizesi ile çalışabilir miyim?</strong><br />
    Hayır. Kısa dönem C tipi Schengen vizesi ile çalışma hakkı bulunmamaktadır.</p>

    <p><strong>Schengen vizesi ile başka ülkelere gidilebilir mi?</strong><br />
    İlk girişin vize alınan ülkeden yapılması tavsiye edilir. Sonrasında Schengen bölgesi içinde serbestçe seyahat edilebilir.</p>

    <p><strong>Schengen vizesi uzatılabilir mi?</strong><br />
    Schengen vizesi yalnızca istisnai durumlarda ve nadiren uzatılabilir. Her başvuru kabul edilmez.</p>

    <p><strong>Schengen vizesi express başvuru var mı?</strong><br />
    Hayır. Schengen vize başvurularında resmi bir express başvuru hizmeti bulunmamaktadır.</p>

    <p><strong>Schengen vizesi alındıktan sonra iptal edilir mi?</strong><br />
    Yanıltıcı belge sunulması, rezervasyonların iptali veya vize şartlarının ihlal edilmesi durumunda vize iptal edilebilir.</p>

    <p><strong>Schengen vizesi alındıktan sonra reddedilebilir mi?</strong><br />
    Evet. Vize onaylandıktan sonra dahi sahte belge tespiti veya sınır kapısında verilen çelişkili bilgiler nedeniyle iptal edilebilir.</p>

    <p><strong>Schengen vizesi çocuklar için nasıl alınır?</strong><br />
    Çocuklar için de bireysel başvuru yapılır. Ebeveyn imzaları ve gerekli durumlarda noter onaylı muvafakatname sunulmalıdır.</p>

    <p><strong>Schengen vizesi ev hanımları için nasıl alınır?</strong><br />
    Ev hanımları için başvurular genellikle sponsorlu şekilde yapılır ve masrafları karşılayan birinci derece yakının belgeleri sunulur.</p>

    <p><strong>Schengen vizesi serbest meslek sahipleri için zor mu?</strong><br />
    Hayır. Ticaret sicil kayıtları, güncel vergi levhası ve düzenli banka hesap hareketleri ile başvuru yapılabilir.</p>

    <p><strong>Schengen vizesi neden zor veriliyor?</strong><br />
    Avrupa ülkeleri düzensiz göç riskini azaltmak amacıyla başvurularda geri dönüş niyetini ve finansal yeterliliği daha sıkı incelemektedir.</p>

    <p><strong>Schengen vizesi en uzun hangi ülke veriyor?</strong><br />
    Bu durum başvuru sahibinin profiline bağlıdır. Güçlü vize geçmişi olan kişilere bazı ülkeler daha uzun süreli vize verebilmektedir.</p>

    <p><strong>Schengen vizesi garantili midir?</strong><br />
    Hayır. Hiçbir Schengen vizesi başvurusu %100 garantili değildir.</p>

  </div>
</details>

  </div>
</section>

      {/* CTA FOOTER */}
      <section
        ref={register}
        data-anim="ukvisa-fade-up"
        className="ukvisa-fade-up-init max-w-6xl mx-auto px-6 pb-20"
      >
        
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-xl">
          <div
  className="absolute inset-0 rounded-3xl"
  style={{
    background:
      "radial-gradient(circle at 20% 25%, rgba(37, 99, 235, 0.18), transparent 45%), radial-gradient(circle at 80% 30%, rgba(234, 179, 8, 0.14), transparent 45%), linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)",
  }}
/>

{/* SOFT EURO STARS / STRIPES */}
<div
  className="absolute inset-0 opacity-20 rounded-3xl"
  style={{
    background:
      "repeating-linear-gradient(135deg, rgba(234,179,8,0.12) 0 10px, rgba(255,255,255,0) 10px 22px)",
    mixBlendMode: "multiply",
  }}
/>
          <div className="relative p-6 md:p-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Başvuru Süreçleri</h2>

            <div className="grid md:grid-cols-3 gap-4">
              {["Tecrübe", "Profesyonellik", "Aya Journey"  ].map((t, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/85 border border-slate-200">
                  <h4 className="font-semibold text-slate-900">{t}</h4>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <p className="text-slate-900 font-semibold">Aya Journey her aşamada yanınızda.</p>

              <div className="flex flex-col sm:flex-row gap-2">
                <Link href="/randevu">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:-translate-y-0.5 transition">
                    Randevu Al
                  </button>
                </Link>
                <a href="tel:+903128701584" className="px-4 py-2.5 rounded-xl bg-slate-900 text-white font-semibold">
                  Hemen Ara
                </a>
                <a
                  href="https://wa.me/905302199056"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold"
                  target="_blank"
                >
                  WhatsApp’tan Yaz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ JSON-LD */}




    </main>
    </>
 
  );
}
