"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  FaRegUserCircle,
  FaFileInvoiceDollar,
  FaCheckCircle,
} from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import Link from "next/link";
import { CgDanger } from "react-icons/cg";


const belgeler = [
  { icon: <CgDanger />, title: "2 adet biyometrik fotoğraf" },
  { icon: <CgDanger />, title: "En az 3 ay geçerliliği olan pasaport" },
  { icon: <CgDanger />, title: "İkametgah belgesi" },
  { icon: <CgDanger />, title: "Son 12 aylık banka hesap dökümü" },
  { icon: <CgDanger />, title: "Adli sicil kaydı" },
  { icon: <CgDanger />, title: "Pasif gelire kaynak teşkil eden belgeler" },
  { icon: <CgDanger />, title: "Portekiz’de kiraladığınız evin kontratı" },
  { icon: <CgDanger />, title: "Niyet mektubu" },
  { icon: <CgDanger />, title: "Portekizce/İngilizce tercümeler" },
];

const basvuruAdimlari = [
  {
    step: 1,
    title: "Randevu Talebi",
    description: "Portekiz Ankara Büyükelçiliği’nden randevu alın.",
  },
  {
    step: 2,
    title: "Belgelerin Teslimi",
    description: "Gerekli tüm belgeleri konsolosluğa teslim edin.",
  },
  {
    step: 3,
    title: "Onay & Vize",
    description: "Onay sonrası D7 vizenizi alın. Ortalama süreç 3–8 ay.",
  },
];

const lizbonSemtleri = [
  {
    title: "Sahil ve Tatil Semtleri",
    description:
      "Oeiras, Carcavelos, Estoril, Cascais — sahil boyu tatil ve yaşam alanları.",
  },
  {
    title: "Büyükelçilik Bölgeleri",
    description: "Restelo ve Belém — güvenli, modern ve prestijli semtler.",
  },
  {
    title: "Eski Şehir & Modern Alanlar",
    description:
      "Chiado, Baixa, Rato, Alcântara, Campo de Ourique, Arroios, Alvalade — merkezi yaşam için ideal.",
  },
];

export default function Portekiz() {
  const refs = useRef([]);

  const addRef = (el) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const anim = e.target.dataset.anim;
            if (anim) e.target.classList.add(anim + "-show");
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
          "name": "Portekiz D7 Vizesi Danışmanlığı",
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
          "description": "Portekiz D7 Pasif Gelir Vizesi başvurusu, NIF alımı, banka hesabı açılışı ve konaklama kanıtı süreç yönetimi."
        },
        {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Portekiz D7 vizesi nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portekiz D7 Vizesi, Portekiz dışından düzenli bir geliri (pasif gelir) olan Avrupa Birliği dışı ülke vatandaşlarının Portekiz'de ikamet etmesine olanak tanıyan bir oturum vizesidir. Pasif Gelir Vizesi veya Emekli Vizesi olarak da bilinen D7 vizesi, emekli maaşı, kira geliri, yatırım geliri veya telif hakları gibi düzenli gelir kaynaklarına sahip yabancı uyruklu kişilerin Portekiz'de yasal olarak yaşamasına olanak tanır. Bu vize, çalışma izni gerektirmeyen bir vize kategorisi olması nedeniyle özellikle emekliler, dijital göçebeler ve pasif gelir sahipleri için cazip bir seçenek olarak öne çıkmaktadır.",
                },
              },
              {
                "@type": "Question",
                name: "Portekiz D7 vizesi kimler için uygundur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portekiz D7 vizesi geniş bir kitle için uygundur. Öncelikle emekliler için ideal bir seçenektir çünkü düzenli emekli maaşı geliri D7 vizesi için yeterli kabul edilir. Kira geliri olan gayrimenkul sahipleri, yatırım portföyünden düzenli gelir elde edenler, telif hakkı gelirleri olanlar ve düzenli temettü geliri olan yatırımcılar da D7 vizesine başvurabilir. Ayrıca uzaktan çalışan profesyoneller, serbest meslek sahipleri ve dijital göçebeler de düzenli gelirlerini belgelemeleri halinde D7 vizesinden fararlanabilir. Portekiz'de emekli olmak isteyen, düşük maliyetli ve yüksek yaşam kalitesi arayan, güvenli ve ılıman iklime sahip bir ülkede yaşamak isteyen kişiler için D7 vizesi mükemmel bir çözümdür.",
                },
              },
              {
                "@type": "Question",
                name: "Portekiz D7 vizesi almak zor mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portekiz D7 vizesi almak, gerekli koşulları sağladığınız takdirde nispeten kolay bir süreçtir. Golden Visa gibi büyük yatırım gerektiren programlara kıyasla D7 vizesi daha erişilebilir ve bürokratik açıdan daha basittir. Başarılı bir başvuru için yeterli ve sürekli gelir kaynağını belgeleyin, Portekiz'de konaklama adresi (kira sözleşmesi veya mülk) temin edin, kapsamlı sağlık sigortası yaptırın ve temiz bir adli sicil belgesi sunmanız gerekir. Doğru belgeleri hazırladığınızda ve gereksinimleri karşıladığınızda süreç oldukça yönetilebilir hale gelir. Başka bir deyişle, gerekli belgeler eksiksiz hazırlandığında ve pasif gelir şartı net bir şekilde kanıtlandığında, D7 vizesi en erişilebilir Avrupa vizelerinden biridir. Zorluk seviyesi, gelirinizin sürekliliğini ve Portekiz'deki konaklama durumunuzu ne kadar iyi belgelediğinize bağlıdır.",
                },
              },
                     {
                "@type": "Question",
                name: "Portekiz D7 vizesi ile Portekiz’de yaşanır mı?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Portekiz D7 vizesi ile Portekiz'de tam zamanlı olarak yaşayabilirsiniz. D7 vizesi, uzun dönemli ikamet vizesi olduğu için Portekiz'de kalıcı olarak yerleşmenize olanak tanır. Vize aldıktan sonra Portekiz'de ev kiralayabilir veya satın alabilir, günlük yaşamınızı sürdürebilir, yerel hizmetlerden faydalanabilir ve Portekiz toplumuna entegre olabilirsiniz. Ancak oturum iznini korumak için belirli fiziksel bulunma gereksinimlerini karşılamanız gerekmektedir. İlk yılda en az 6 ay, sonraki yıllarda ise her iki yılda toplam 10 ay Portekiz'de bulunmanız beklenir. Bu gereksinimler, vizenizin ve oturum izninizin devam etmesi için önemlidir.",
                },
              },
                            {
                "@type": "Question",
                name: "Portekiz D7 vizesi ne kadar süreyle verilir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portekiz D7 vizesi başlangıçta 4 aylık iki girişli vize olarak verilir. Bu süre içinde Portekiz'e giriş yapmanız ve yerel göçmenlik ofisine (AIMA - Agência para a Integração, Migrações e Asilo) başvurarak oturum izni almanız gerekir. İlk oturum izni 2 yıl süreyle verilir. İki yılın sonunda, gerekli koşulları sağlamaya devam ettiğinizi kanıtlayarak oturum izninizi 3 yıl daha uzatabilirsiniz. Üçüncü uzatmada da 3 yıllık ek süre alabilirsiniz. Toplam 5 yıl kesintisiz ve yasal olarak Portekiz'de yaşadıktan sonra, kalıcı oturum izni veya Portekiz vatandaşlığı için başvurma hakkı kazanırsınız.",
                },
              },
                                         {
                "@type": "Question",
                name: "Portekiz D7 vizesi ile oturum izni alınır mı?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Portekiz D7 vizesi ile oturum izni alınır. D7 vizesi aslında iki aşamalı bir süreçtir: önce ülke dışından D7 vizesi başvurusu yapılır ve onaylanırsa 4 aylık giriş vizesi verilir. Bu vize ile Portekiz'e giriş yaptıktan sonra, belirtilen süre içinde (genellikle 3-4 ay) yerel göçmenlik makamlarına başvurarak geçici oturum izni (temporary residence permit) almanız gerekir. Bu oturum izni, Portekiz'de yasal olarak yaşamanıza, seyahat etmenize ve çeşitli haklardan faydalanmanıza olanak tanır. İlk oturum izni 2 yıl geçerlidir ve düzenli olarak yenilenebilir. Oturum izni kartınız Schengen bölgesinde seyahat etmenize de imkan sağlar.",
                },
              },
                                               {
                "@type": "Question",
                name: "Portekiz D7 vizesi için ne kadar gelir gerekir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portekiz D7 vizesi için gerekli minimum gelir, Portekiz'deki ulusal asgari ücretin (salário mínimo nacional) belirli katları üzerinden hesaplanır. 2026 yılı için Portekiz asgari ücreti aylık yaklaşık 920 Euro civarındadır. Ana başvuru sahibi için yıllık gelir minimum asgari ücretin 12 katı (yaklaşık 11040 Euro) olmalıdır. Eş için ek %50 (yaklaşık 5520 Euro), her bir çocuk için ise ek %30 (yaklaşık 3312 Euro) gelir gösterilmesi gerekir. Örneğin, eşi ve iki çocuğu olan bir başvuru sahibinin en az 23184 Euro yıllık gelir belgesi sunması gerekmektedir. Bu gelirin düzenli, sürekli ve kanıtlanabilir olması önemlidir. Gelir miktarları yıllık olarak güncellenir, bu nedenle başvuru öncesi güncel rakamları kontrol etmek önemlidir.",
                },
              },
                                                        {
                "@type": "Question",
                name: "Portekiz D7 vizesi için pasif gelir şart mı?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, D7 vizesinin ruhunda pasif gelir (kira, emekli maaşı, faiz vb.) yatar. Ancak günümüzde dijital göçebelik arttığı için, istikrarlı bir uzaktan çalışma geliri de (freelance veya şirket sahibi olarak) çoğu konsolosluk tarafından kabul edilmektedir. D7 vizesi için kabul edilen gelir kaynakları emekli maaşı, kira geliri, temettü ve faiz gelirleri, telif hakları ve patent gelirleri gibi pasif gelirleri kapsar. Ancak buna ek olarak serbest meslek gelirleri, danışmanlık ücretleri ve uzaktan çalışma gelirleri de belirli koşullar altında kabul edilebilir. Önemli olan gelirin düzenli, öngörülebilir ve sürekli olmasıdır. Portekiz'de aktif olarak çalışmayı gerektirmeyen, yurt dışından elde edilen veya yatırımlardan gelen her türlü düzenli gelir D7 vizesi için uygun kabul edilir. Gelirin en az bir yıllık süre için garanti edildiğini ve devam edeceğini belgelemelisiniz.",
                },
              },
                                                                   {
                "@type": "Question",
                name: "Portekiz D7 vizesi emekliler için uygun mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kesinlikle. Emekliler, garantili ve düzenli bir gelire (emekli maaşı) sahip oldukları için D7 vizesi için en ideal aday grubudur. EYT dahil :) Portekiz, ılıman iklimi, düşük yaşam maliyeti, yüksek yaşam kalitesi, gelişmiş sağlık sistemi ve İngilizce konuşan nüfusu ile emekliler için çok cazip bir destinasyondur. Ayrıca Portekiz, Non-Habitual Resident (NHR) vergi rejimi sunarak emekli maaşlarına özel vergi avantajları sağlamaktadır. Emekliler genellikle fiziksel bulunma gereksinimlerini karşılamakta da zorluk çekmezler çünkü çoğu zaman Portekiz'de kalıcı olarak yaşamayı planlarlar. D7 vizesi, emekliler için Golden Visa'ya göre çok daha ekonomik ve erişilebilir bir alternatiftir.",
                },
              },
 {
                "@type": "Question",
                name: "Portekiz D7 vizesi serbest meslek sahipleri için uygun mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portekiz D7 vizesi belirli koşullar altında serbest meslek sahipleri için de uygundur. Serbest meslek sahibiyseniz ve uzaktan çalışıyorsanız, yani Portekiz dışından müşteriler için çalışıp gelir elde ediyorsanız D7 vizesine başvurabilirsiniz. Önemli olan Portekiz iş piyasasında aktif olarak çalışmayacağınızı göstermektir. Dijital göçebeler, danışmanlar, yazarlar, tasarımcılar, programcılar ve online iş sahipleri genellikle D7 vizesi için uygundur. Gelirin düzenli ve öngörülebilir olduğunu kanıtlamak için geçmiş dönem gelir beyanları, sözleşmeler, banka hesap ekstreleri ve müvekkil referansları sunmanız gerekebilir. Portekiz'de yerel müşterilere hizmet sunmayı planlıyorsanız, D7 vizesi yerine çalışma izni veya iş vizesi almanız daha uygun olabilir. Her durumda, gelir kaynaklarınızın yasal ve düzenli olduğunu belgelemek kritik öneme sahiptir.",
                },
              },
               {
                "@type": "Question",
                name: "Portekiz D7 vizesi için banka hesabı Portekiz’de mi açılmalı?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Portekiz D7 vizesi başvurusu için Portekiz'de bir banka hesabı açmanız gereklidir. Portekiz bankasında açılmış hesap, başvuru sürecinde ikamet adresinizi ve mali durumunuzu kanıtlamak için önemli bir belge olarak kabul edilir. Ayrıca bu hesaba, minimum gelir gereksinimlerini karşılayacak miktarda fon transfer etmeniz beklenir. Bu hesapta en az bir yıllık asgari geçim tutarının (tek kişi için yaklaşık 11.040 €) bloke edilmiş olması şansınızı artırır.Portekiz'de banka hesabı açmak nispeten kolaydır ancak kişisel olarak bulunmanızı gerektirebilir. Bazı bankalar, NIF (Número de Identificação Fiscal - Portekiz vergi numarası) almanızı şart koşabilir. Banka hesabı açmak için pasaportunuz, adres belgesi ve gelir kaynağı belgelerinizi hazırlamanız gerekir. Banka ekstreleri başvuru belgelerinizin önemli bir parçasıdır.",
                },
              },
                       {
                "@type": "Question",
                name: "Portekiz D7 vizesi için kira sözleşmesi zorunlu mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Portekiz'de geçerli bir adres göstermeniz zorunludur. Başvuru sırasında Portekiz'de nerede yaşayacağınızı kanıtlamanız gerekir. Bu kanıt genellikle uzun süreli kira sözleşmesi (arrendamento) veya satın aldığınız bir mülkün tapu belgesi (escritura) ile sağlanır. Kira sözleşmesi en az bir yıllık olmalı ve resmi olarak kayıtlı olmalıdır. ",
                },
              },
                               {
                "@type": "Question",
                name: "Portekiz D7 vizesi başvurusu nereden yapılır?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portekiz D7 vizesi başvurusu, ikamet ettiğiniz ülkedeki Portekiz konsolosluğu veya Portekiz Vize Başvuru Merkezi (VFS Global gibi yetkili vize başvuru merkezleri) aracılığıyla yapılır. İlk başvuru mutlaka Portekiz dışından, ülkenizde veya yasal olarak ikamet ettiğiniz ülkedeki Portekiz temsilciliklerine yapılmalıdır. Türkiye'de yaşıyorsanız, Ankara'daki Portekiz Büyükelçiliği veya İstanbul'daki Portekiz Başkonsolosluğu aracılığıyla başvuru yapabilirsiniz. Başvuru sürecinde randevu almanız, gerekli belgeleri hazırlamanız ve şahsen görüşmeye gitmeniz gerekebilir. Başvuru ücreti ödendikten sonra belgeleriniz değerlendirilir. Vize onaylandığında, 4 aylık giriş vizesi pasaportunuza işlenir. Bu vize ile Portekiz'e giriş yaptıktan sonra, yerel göçmenlik ofisine (AIMA) başvurarak oturum izni kartınızı alırsınız. İlk başvuru için Portekiz'de olmanız gerekmez.",
                },
              },
                                    {
                "@type": "Question",
                name: "Portekiz D7 vizesi başvurusu online mı yapılır?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portekiz D7 vizesi başvurusu kısmen online yapılabilir ancak tamamen dijital bir süreç değildir. Bazı konsolosluklar ve vize başvuru merkezleri online randevu sistemi kullanır ve başvuru formlarını online doldurmanıza izin verir. Ancak fiziksel belgeleri şahsen teslim etmeniz ve biyometrik verilerinizi (parmak izi ve fotoğraf) vermek için konsolosluğa veya vize merkezine gitmeniz gerekir. Ayrıca mülakata çağrılabilirsiniz. Başvuru süreci şu adımları içerir: online randevu alın, başvuru formunu doldurun (online veya kağıt), gerekli belgeleri hazırlayın, randevu gününde belgeleri teslim edin ve biyometrik verilerinizi verin, başvuru ücretini ödeyin ve sürecin tamamlanmasını bekleyin. Portekiz'e giriş yaptıktan sonra oturum izni başvurusu için AIMA sistemini kullanırsınız ve bu aşamada bazı işlemler online gerçekleştirilebilir. Ancak genel olarak D7 vizesi süreci hala önemli ölçüde fiziksel katılım gerektirir.",
                },
              },
                                         {
                "@type": "Question",
                name: "Portekiz D7 vizesi kaç günde sonuçlanır?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portekiz D7 vizesi başvuru süreci genellikle 60-90 gün (2-3 ay) arasında sonuçlanır, ancak bu süre değişkenlik gösterebilir. İşlem süresi, başvuru yaptığınız konsolosluğun iş yoğunluğuna, belgelerinizin eksiksizliği ve doğruluğuna, arka plan kontrolleri ve güvenlik incelemelerinin karmaşıklığına bağlı olarak değişir. Bazı basit vakalar 30-45 gün içinde sonuçlanabilirken, daha karmaşık veya eksik belgeli başvurular 4-6 ay sürebilir. Vize onaylandıktan sonra Portekiz'e giriş yapmanız ve ardından 3-4 ay içinde AIMA'ya başvurarak oturum izni kartınızı almanız gerekir. Oturum izni kartının hazırlanması da ek 1-3 ay sürebilir. Genel süreç başvuru anından oturum izni kartını almaya kadar toplamda 6-9 ay alabilir. Bu nedenle planlamanızı önceden yapmanız ve sabırlı olmanız önemlidir. İşlem süresini kısaltmak için tüm belgeleri eksiksiz ve doğru şekilde hazırlamaya özen gösterin.",
                },
              },
                                                   {
                "@type": "Question",
                name: "Portekiz D7 vizesi ile aile bireyleri başvuru yapabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Portekiz D7 vizesi ile aile bireyleri de birlikte başvuru yapabilir. Ana başvuru sahibinin eşi, 18 yaş altındaki veya ekonomik olarak bağımlı olan çocuklar ve ekonomik olarak bağımlı ebeveynler aile birleşimi kapsamında D7 vizesine dahil edilebilir. Aile bireyleri ana başvuru ile birlikte veya ana başvuru onaylandıktan sonra ayrı olarak başvurabilir. Ancak ana başvuru sahibinin her aile üyesi için ek gelir göstermesi gerekir: eş için %50 ek gelir, her çocuk için %30 ek gelir. Örneğin dört kişilik bir aile için toplam gelir gereksinimi yaklaşık 19.000-20.000 Euro yıllık olacaktır. Aile bireyleri de ana başvuru sahibiyle aynı haklara sahip olur, Portekiz'de yaşayabilir, eğitim ve sağlık hizmetlerinden yararlanabilir. Çocuklar Portekiz okullarına kaydolabilir ve devlet eğitiminden ücretsiz faydalanabilir.",
                },
              },
   {
                "@type": "Question",
                name: "Portekiz D7 vizesi ile çalışmak mümkün mü?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portekiz D7 vizesi temelde pasif gelir sahipleri için tasarlanmış olsa da, D7 vizesi ile Portekiz'de çalışmak belirli koşullar altında mümkündür. D7 oturum izniniz, Portekiz'de bağımlı (dependent) çalışan olarak çalışmanıza ve iş kurmanıza izin verir. Ancak iş bulduğunuzda veya çalışmaya başladığınızda, işvereninizin sizi kayıt altına alması ve Sosyal Güvenlik sistemine bildirmesi gerekir. Serbest meslek yapabilir, danışmanlık hizmeti verebilir veya kendi işinizi kurabilirsiniz. Önemli olan vizenizi almak için kullandığınız pasif gelir kaynaklarınızın devam etmesi gerektiğidir çünkü vize yenileme sırasında bu gelirin devam ettiğini kanıtlamanız istenir. Eğer birincil gelir kaynağınız Portekiz'deki aktif çalışma olacaksa, D7 vizesi yerine çalışma vizesi almanız daha uygun olabilir. D7 vizesi sahipleri, çalışma faaliyetlerini vergi dairesine bildirmeli ve gerekli vergi ve sosyal güvenlik ödemelerini yapmalıdır.",
                },
              },
                 {
                "@type": "Question",
                name: "Portekiz D7 vizesi Schengen ülkelerinde geçerli mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Portekiz D7 vizesi ile Schengen ülkelerinde seyahat etmek mümkündür. Portekiz D7 oturum izni kartınız, Schengen bölgesindeki diğer ülkelere (toplam 27 AB üyesi ülke dahil) 180 günde 90 güne kadar vizesiz seyahat etmenize olanak tanır. Ancak D7 vizesi ile sadece Portekiz'de kalıcı olarak yaşayabilirsiniz; diğer Schengen ülkelerinde uzun süreli ikamet edemezsiniz. Schengen bölgesine seyahat ederken oturum izni kartınızı ve pasaportunuzu yanınızda bulundurmalısınız. D7 oturum izniniz, turist vizesi gerektirmeden Avrupa içinde seyahat etme özgürlüğü sağlar, bu da Portekiz'de yaşamanın önemli avantajlarından biridir. Ancak her bir Schengen ülkesinde kalış süresi kısıtlamaları olduğunu unutmayın. Sürekli oturum izni aldıktan sonra (5 yıl sonra) Schengen bölgesinde daha fazla hareket özgürlüğüne sahip olursunuz. Portekiz vatandaşlığı alırsanız tüm AB içinde serbestçe yaşayabilir ve çalışabilirsiniz.",
                },
              },
                   {
                "@type": "Question",
                name: "Portekiz D7 vizesi reddedilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Portekiz D7 vizesi başvuruları reddedilebilir. Ret nedenleri arasında yetersiz veya belirsiz gelir kanıtı, sahte veya eksik belgeler, adli sicil kayıtları veya güvenlik sorunları, konaklama belgelerinin olmaması veya yetersizliği, sağlık sigortasının olmaması, geçmiş göçmenlik ihlalleri ve başvuru formundaki tutarsızlıklar yer alır. Eğer başvurunuz reddedilirse, genellikle ret gerekçesini açıklayan resmi bir mektup alırsınız. Çoğu durumda, ret kararına karşı itiraz etme veya eksiklikleri gidererek yeniden başvuru yapma hakkınız vardır. ",
                },
              },
                               {
                "@type": "Question",
                name: "Portekiz D7 vizesi reddinden sonra tekrar başvuru yapılabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Portekiz D7 vizesi reddedildikten sonra tekrar başvuru yapmak mümkündür. Ret gerekçelerini dikkatlice incelemeli ve eksiklikleri veya sorunları gidermelisiniz. Yeniden başvuru yapmadan önce ret nedenlerini tam olarak anlamak ve düzeltmek kritik öneme sahiptir. Örneğin gelir yetersizliği nedeniyle reddedildiyseniz, daha güçlü gelir belgeleri sağlamalısınız. Belgeler eksik veya yanlıştı ise doğru ve eksiksiz belgeler hazırlamalısınız. Yeniden başvuru için genellikle belirli bir bekleme süresi yoktur ancak ret nedenlerini çözmeden hemen tekrar başvurmak ikinci bir reddiye yol açabilir. Bazı durumlarda ret kararına karşı itiraz etme hakkınız olabilir; bu durumda belirlenen süre içinde (genellikle 15-30 gün) itiraz başvurusu yapmalısınız. İtiraz yerine yeniden başvurmayı tercih ediyorsanız, tüm başvuru sürecini baştan başlatmanız ve yeni başvuru ücreti ödemeniz gerekir. ",
                },
              },
                                        {
                "@type": "Question",
                name: "Portekiz D7 vizesi neden reddedilir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portekiz D7 vizesi çeşitli nedenlerle reddedilebilir. En yaygın ret nedenleri şunlardır: yetersiz finansal kaynaklar veya minimum gelir gereksinimini karşılayamama, gelir kaynaklarının düzensiz, kanıtlanamayan veya sürdürülemez olması, sahte, eksik veya doğru olmayan belgeler sunmak, adli sicil kaydı veya güvenlik endişeleri, Portekiz'de geçerli konaklama adresi belgesi sunamamak, gerekli sağlık sigortası kapsamına sahip olmamak, başvuru formundaki bilgilerde tutarsızlıklar veya yanlışlıklar, geçmişte göçmenlik kurallarını ihlal etmiş olmak veya vize kötüye kullanımı, mülakatta yetersiz veya tutarsız cevaplar vermek, gelir kaynaklarının yasadışı faaliyetlerden kaynaklandığına dair şüpheler, NIF veya banka hesabı gibi gerekli belgelerin eksik olması.",
                },
              },
                                               {
                "@type": "Question",
                name: "Portekiz D7 vizesi için gerekli minimum gelir ne kadar olmalı?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "2026 yılı itibarıyla, ana başvuru sahibi için Portekiz asgari ücreti olan aylık 920 € (yıllık 11.040 €) tutarında bir gelir beyan edilmesi gerekir. Eş/Partner: + %50 (460 €) Çocuklar: + %30 (276 €)",
                },
              },
                                                      {
                "@type": "Question",
                name: "Portekiz D7 vizesi ile Portekiz’de süresiz kalınır mı?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portekiz D7 vizesi başlangıçta süresiz bir oturum hakkı vermez ancak doğru adımları takip ederek Portekiz'de süresiz kalma hakkı elde edebilirsiniz. İlk oturum izni 2 yıl sürelidir, ardından 3 yıl daha uzatılabilir. Toplamda 5 yıl yasal ve kesintisiz olarak Portekiz'de yaşadıktan sonra kalıcı oturum izni (permanent residence / residência permanente) için başvurabilirsiniz. Kalıcı oturum izni, süresiz oturum hakkı sağlar ve düzenli gelir gösterme gereksinimini ortadan kaldırır. Alternatif olarak, 5 yıl sonra Portekiz vatandaşlığı için başvurabilirsiniz (Portekizce dil sınavı ve diğer koşulları sağlamanız halinde). Vatandaşlık, size tamamen süresiz ve koşulsuz Portekiz'de kalma hakkı verir. Her iki durumda da fiziksel bulunma gereksinimlerini karşılamanız (her iki yılda toplam 10 ay) ve temiz bir adli sicil kaydınızın olması gerekir. D7 vizesi, uzun vadede Portekiz'de sürekli yerleşme yolunu açan bir başlangıç noktasıdır.",
                },
              },
  {
                "@type": "Question",
                name: "Portekiz D7 vizesi vatandaşlığa gider mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Portekiz D7 vizesi Portekiz vatandaşlığına giden yollardan biridir. D7 vizesi ile 5 yıl yasal olarak Portekiz'de yaşadıktan sonra Portekiz vatandaşlığı için başvuru yapabilirsiniz. Vatandaşlık başvurusu için gerekli koşullar şunlardır: en az 5 yıl yasal ikamet (D7 vizesi ile geçen süre sayılır), fiziksel bulunma gereksinimlerini karşılamak (her yıl ortalama 6 ay Portekiz'de olmak), temel düzeyde Portekizce bilgisi (A2 seviyesi dil sınavı), temiz adli sicil kaydı, Portekiz toplumuna entegrasyon göstermek ve mali yükümlülükleri yerine getirmek. Vatandaşlık aldığınızda Portekiz ve AB pasaportu sahibi olursunuz, bu da tüm AB ülkelerinde yaşama ve çalışma hakkı sağlar. Portekiz çifte vatandaşlığa izin verir, yani mevcut vatandaşlığınızı koruyabilirsiniz. Vatandaşlık süreci 1-2 yıl sürebilir.",
                },
              },
                {
                "@type": "Question",
                name: "Portekiz D7 vizesi ile Portekiz’de ev satın alınabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Portekiz D7 vizesi ile Portekiz'de ev satın almak mümkündür ve aslında teşvik edilmektedir. D7 vizesi gayrimenkul alımı gerektirmez (Golden Visa'nın aksine), ancak ev satın almak konaklama gereksinimini karşılamanın en güvenli yoludur. Portekiz'de mülk satın almak için D7 vizesine sahip olmanız gerekmez; vize başvurusu öncesi veya sonrasında istediğiniz zaman gayrimenkul satın alabilirsiniz. Ev satın alma süreci yabancılar için nispeten basittir: önce NIF (Portekiz vergi numarası) alın, Portekiz'de bir banka hesabı açın, avukat veya emlak danışmanı ile çalışın, ev araştırması yapın ve uygun mülkü seçin, satın alma sözleşmesi (promissory contract) imzalayın ve depozito ödeyin, noter önünde nihai satış işlemini (escritura) tamamlayın, tapu kaydını (registo predial) yaptırın. Ev sahibi olmak, D7 vizesi için konaklama belgesi sağlar ve uzun vadeli yatırım olarak değer kazanabilir. Ayrıca evinizi kiraya vererek pasif gelir elde edebilir ve bu geliri D7 vizesi gereksinimleriniz için kullanabilirsiniz.",
                },
              },
                           {
                "@type": "Question",
                name: "Portekiz D7 vizesi ile Portekiz’de vergi ödenir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Portekiz D7 vizesi ile Portekiz'de yaşarsanız Portekiz vergi mükellefiyeti altına girersiniz. Portekiz'de bir takvim yılında 183 günden fazla kalan veya Portekiz'de kalıcı ikametgahı olan kişiler Portekiz vergi rezidenti olarak kabul edilir. Vergi rezidenti olarak dünya çapındaki geliriniz üzerinden Portekiz'de vergi beyanında bulunmanız ve vergi ödemeniz gerekir. Ancak Portekiz, Non-Habitual Resident (NHR) vergi rejimi adı altında özel vergi avantajları sunmaktadır. NHR statüsü, 10 yıl süreyle bazı yabancı kaynaklı gelirler üzerinden vergi muafiyeti veya indirimli vergi oranları sağlar. Emekli maaşları, temettüler, faiz gelirleri ve bazı profesyonel gelirler NHR kapsamında %0-10 oranında vergilendirilebilir veya tamamen muaf tutulabilir. NHR başvurusu, Portekiz'de vergi rezidenti olduktan sonraki yıl içinde yapılmalıdır. Vergi konusunda profesyonel danışmanlık almanız, avantajları maksimize etmenize yardımcı olur. Portekiz'de yıllık gelir vergisi beyannamesi (IRS) vermek zorunludur.",
                },
              },
                                 {
                "@type": "Question",
                name: "Portekiz D7 vizesi vergi avantajı sağlar mı?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Portekiz D7 vizesi sahipleri, Non-Habitual Resident (NHR) vergi rejiminden yararlanarak önemli vergi avantajları elde edebilir. NHR programı, Portekiz'e yeni yerleşen kişilere 10 yıl süreyle özel vergi muafiyetleri ve indirimleri sunar. NHR kapsamında emekli maaşları, bazı koşullarda %0-10 vergi oranıyla vergilendirilebilir veya tamamen vergiden muaf tutulabilir (kaynak ülkede vergilendirilmişse). Yabancı kaynaklı temettü ve faiz gelirleri genellikle muaftır. Yüksek katma değerli meslekler (bilim, teknoloji, sanat gibi) %20 sabit vergi oranından yararlanabilir. Sermaye kazançları genellikle Portekiz dışındaysa muaf tutulur. Bu vergi avantajları, özellikle yüksek gelir vergisi olan ülkelerden gelen emekliler ve yatırımcılar için önemli tasarruf sağlar. ",
                },
              },
                                        {
                "@type": "Question",
                name: "Portekiz D7 vizesi ile sağlık hizmetlerinden yararlanılır mı?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Portekiz D7 vizesi ile Portekiz'de sağlık hizmetlerinden yararlanabilirsiniz. D7 oturum izni sahipleri, Portekiz ulusal sağlık sistemi (Serviço Nacional de Saúde - SNS) üzerinden sağlık hizmetlerine erişim hakkına sahiptir. SNS'ye kayıt olmak için Portekiz Sosyal Güvenlik sistemine (Segurança Social) kayıt olmanız ve düzenli katkı payları ödemeniz gerekir. Çalışıyorsanız işvereniniz otomatik olarak sizi sisteme kaydeder. Çalışmıyorsanız gönüllü olarak sisteme katılabilirsiniz. SNS, acil servisler, genel pratisyen hizmetleri, hastane tedavileri ve ilaçlar için düşük maliyetli veya ücretsiz sağlık hizmeti sunar. Ancak bazı hizmetlerde bekleme süreleri uzun olabilir. Bunun yanında özel sağlık sigortası yaptırmak da yaygındır ve daha hızlı erişim sağlar. D7 vizesi başvurusu için zaten kapsamlı sağlık sigortasına sahip olmanız gerekir, bu sigorta en az ilk yıl geçerlidir. Portekiz'in sağlık sistemi kaliteli olup özellikle Lizbon ve Porto gibi büyük şehirlerde modern sağlık tesisleri mevcuttur.",
                },
              },
                                                    {
                "@type": "Question",
                name: "Portekiz D7 vizesi ile çocuklar Portekiz’de okuyabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Portekiz D7 vizesi ile çocuklar Portekiz'de okula gidebilir ve eğitim haklarından tam olarak yararlanabilir. Portekiz'de yasal olarak ikamet eden tüm çocuklar, vatandaşlıktan bağımsız olarak devlet okullarında ücretsiz eğitim alma hakkına sahiptir. Zorunlu eğitim 6-18 yaş arasındadır ve devlet okullarında tamamen ücretsizdir (kitaplar, malzemeler ve yemek için bazı masraflar olabilir). Portekiz eğitim sistemi iyi kalitededir ve özellikle büyük şehirlerde İngilizce eğitim veren uluslararası okullar da mevcuttur (ücretli). Çocuklarınızı devlet okullarına veya özel okullara kaydedebilirsiniz. Devlet okulları Portekizce eğitim verirken, uluslararası okullar İngilizce veya diğer dillerde eğitim sunar. Portekiz üniversiteleri de kalitelidir ve AB vatandaşları ile aynı ücretlerle eğitim alma imkanı sunulur. Çocukların eğitimi için Portekiz mükemmel bir seçenektir ve çocuklar genellikle hızlıca Portekizce öğrenir ve yerel topluma entegre olur. ",
                },
              },
 {
                "@type": "Question",
                name: "Portekiz D7 vizesi için sağlık sigortası zorunlu mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Portekiz D7 vizesi için sağlık sigortası zorunludur. Başvuru sırasında Portekiz'de geçerli olan kapsamlı bir sağlık sigortası poliçesi sunmanız gerekir. Sağlık sigortası aşağıdaki kriterleri karşılamalıdır: Portekiz'de geçerli olmalı, acil müdahaleler ve hastane tedavilerini içeren kapsamlı tıbbi hizmetleri kapsama almalı, repatriation (ülkenize dönüş) masraflarını içermeli, minimum kapsam tutarı en az 30.000 Euro olmalı ve en az ilk oturum izni süresi boyunca (minimum 1 yıl) geçerli olmalıdır. Sağlık sigortası, yerel Portekiz sigorta şirketlerinden veya uluslararası sigorta sağlayıcılarından alınabilir. Bazı popüler seçenekler arasında Cigna Global, Allianz Care, AXA ve yerel Portekiz sigorta şirketleri yer alır. Sigorta belgesi başvuru dosyanıza dahil edilmelidir. Portekiz'e giriş yaptıktan ve oturum izni aldıktan sonra ulusal sağlık sistemine (SNS) kayıt olabilir ve özel sigortanıza gerek kalmayabilir, ancak birçok kişi hem SNS hem de özel sigortayı birlikte kullanır.",
                },
              },
               {
                "@type": "Question",
                name: "Portekiz D7 vizesi kaç yıl sonra uzatılır?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portekiz D7 vizesi ile alınan ilk oturum izni 2 yıl sürelidir. İki yılın sonunda, gerekli koşulları sağlamaya devam ettiğinizi kanıtlayarak oturum izninizi 3 yıl daha uzatabilirsiniz. Uzatma başvurusu, mevcut oturum izninizin sona ermesinden 30-90 gün önce yapılmalıdır. İlk uzatma için gereksinimler şunlardır: sürekli ve düzenli gelir kaynağının devam ettiğini kanıtlamak, Portekiz'de geçerli konaklama adresi, geçerli sağlık sigortası veya SNS kaydı, temiz adli sicil, fiziksel bulunma gereksinimlerini karşıladığınızı göstermek (ilk iki yılda toplam 10 ay) ve vergi yükümlülüklerinizi yerine getirmiş olmak. İkinci uzatma da 3 yıl sürelidir ve benzer koşullara tabidir. Toplamda 5 yıl (2+3 yıl) yasal ikamet sonrasında kalıcı oturum izni veya vatandaşlık için başvurabilirsiniz. Uzatma işlemleri genellikle ilk başvurudan daha hızlı sonuçlanır ancak yine de birkaç ay sürebilir. Uzatma başvurunuzu zamanında yapmak, oturum izninizin kesintiye uğramaması için kritik öneme sahiptir.",
                },
              },
                             {
                "@type": "Question",
                name: "Portekiz D7 vizesi uzatma süreci zor mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portekiz D7 vizesi uzatma süreci, ilk başvuruya kıyasla genellikle daha kolay ve daha hızlıdır. Gerekli koşulları sağlamaya devam ettiğiniz sürece uzatma genellikle sorunsuz gerçekleşir. Uzatma için yapmanız gerekenler şunlardır: mevcut oturum izninizin bitiminden önce başvuru yapın, düzenli gelir kaynağınızın devam ettiğini belgelerle kanıtlayın (banka ekstreleri, emekli maaşı belgeleri vb.), Portekiz'deki konaklama adresinizi güncelleyin (kira sözleşmesi veya tapu), geçerli sağlık sigortası veya SNS kayıt belgesi sunun, fiziksel bulunma gereksinimlerini karşıladığınızı kanıtlayın, temiz adli sicil belgesi sunun ve uzatma ücretini ödeyin. Uzatma başvurusu AIMA ofisine yapılır ve işlem genellikle 2-4 ay içinde tamamlanır. İlk başvurudan farklı olarak konsolosluk mülakatına veya kapsamlı değerlendirmeye gerek yoktur. Ancak belgelerinizdeki tutarsızlıklar veya koşulları karşılamama durumu uzatmanın reddedilmesine neden olabilir. Uzatma sürecini kolaylaştırmak için tüm belgeleri düzenli tutun ve gereksinimleri sürekli karşıladığınızdan emin olun.",
                },
              },
                     {
                "@type": "Question",
                name: "Portekiz D7 vizesi ile Portekiz dışında yaşanabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portekiz D7 vizesi ile teknik olarak Portekiz dışında yaşayabilirsiniz ancak ciddi kısıtlamalar vardır. D7 oturum iznini korumak için belirli fiziksel bulunma gereksinimlerini karşılamanız gerekir: ilk yılda en az 6 ay Portekiz'de bulunmalısınız, sonraki yıllarda her iki yılda toplam 10 ay Portekiz'de olmalısınız. Eğer bu gereksinimleri karşılamazsanız oturum izniniz iptal edilebilir veya uzatma başvurunuz reddedilebilir. Bu nedenle D7 vizesi, Portekiz dışında tamamen yaşamak isteyenler için uygun değildir. Ancak yılın belirli bölümlerini Portekiz'de, geri kalanını başka ülkelerde geçirmek mümkündür. Schengen bölgesinde seyahat özgürlüğünüz vardır ancak başka bir ülkede kalıcı olarak yaşamanız D7 koşullarına aykırıdır. Eğer Portekiz'de fiziksel olarak bulunmadan Avrupa'ya erişim istiyorsanız, Golden Visa gibi daha esnek fiziksel bulunma gereksinimleri olan programlar daha uygun olabilir. D7 vizesi, gerçekten Portekiz'de yaşamak isteyenler için tasarlanmıştır.",
                },
              },
                        {
                "@type": "Question",
                name: "Portekiz D7 vizesi iptal edilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Portekiz D7 vizesi ve oturum izni belirli durumlarda iptal edilebilir. İptal nedenleri şunlardır: fiziksel bulunma gereksinimlerini karşılamamak (gereken süre Portekiz'de bulunmamak), gelir kaynaklarının sona ermesi veya yetersiz hale gelmesi, sahte veya yanıltıcı belgeler sunduğunuzun ortaya çıkması, ciddi suç işlemek veya adli sicil kaydı almak, vergi yükümlülüklerini yerine getirmemek, sağlık sigortasını sürdürmemek, oturum iznini uzatmamak veya gerekli belgeleri zamanında sunmamak, Portekiz dışında sürekli yaşamak ve başka bir ülkede kalıcı oturum izni almak. İptal kararına karşı itiraz etme hakkınız vardır ve genellikle belirlenen süre içinde (30 gün) itiraz başvurusu yapabilirsiniz. Hafif ihlaller için önce uyarı alabilir ve durumu düzeltme şansınız olabilir. Ciddi ihlaller ise doğrudan iptal ile sonuçlanabilir. İptal edilirse Portekiz'den ayrılmanız gerekebilir ve gelecekte yeniden başvuru yapmanız zorlaşabilir. Oturum izni gereksinimlerinizi ciddiye almak ve sürekli uyum sağlamak çok önemlidir.",
                },
              },
                                {
                "@type": "Question",
                name: "Portekiz D7 vizesi alındıktan sonra reddedilebilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portekiz D7 vizesi onaylandıktan ve oturum izni alındıktan sonra, normal koşullarda geriye dönük olarak reddedilemez. Ancak vizeniz veya oturum izniniz iptal edilebilir veya yenilenmeyebilir. İptal durumları şunlardır: başvuru sırasında sahte veya yanıltıcı bilgi/belgeler kullandığınızın ortaya çıkması, oturum izni koşullarını ihlal etmeniz (fiziksel bulunma gereksinimleri, gelir şartları vb.), ciddi suç işlemeniz veya ulusal güvenlik tehdidi oluşturmanız, vize sahtekarlığı veya kimlik dolandırıcılığı tespit edilmesi. Bu durumlar oldukça nadir ve genellikle ciddi ihlalleri içerir. Normal koşullarda, gereksinimleri karşılamaya devam ettiğiniz sürece oturum izniniz güvendedir. Uzatma sırasında koşulları karşılamıyorsanız (örneğin gelir kaybı), uzatma reddedilebilir ancak bu geçmiş oturum izninizi geçersiz kılmaz, sadece yenilenmez. Dürüst bir başvuru yaptıysanız ve koşulları sürekli karşılıyorsanız, vizenizin sonradan reddedilmesi veya iptal edilmesi riski çok düşüktür. Yasal yükümlülüklerinizi yerine getirmek ve koşullara uymak kalıcılığınızı güvence altına alır.",
                },
              },
                                     {
                "@type": "Question",
                name: "Portekiz D7 vizesi danışmanlık olmadan alınabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Portekiz D7 vizesi danışmanlık veya avukat olmadan da alınabilir. Süreç yasal olarak bir avukat veya danışman gerektirmez ve kendiniz de başvuru yapabilirsiniz. Ancak profesyonel yardım, süreci önemli ölçüde kolaylaştırabilir ve başarı şansınızı artırabilir. Kendiniz başvurmak için yapmanız gerekenler: tüm gereksinimleri araştırın ve anlayın, gerekli belgeleri toplayın ve hazırlayın, Portekizce belgeleri çevirin (yeminli tercüme), konsoloslukta randevu alın ve başvuru yapın, Portekiz'e giriş yapın ve AIMA'ya başvurun. Kendiniz başvurmanın avantajları maliyetten tasarruf etmek ve süreci kontrol altında tutmaktır. Dezavantajları ise dil bariyeri (Portekizce belgeler ve iletişim), bürokrasi ve karmaşıklık, hata yapma riski ve sürecin daha uzun sürmesi olabilir. Profesyonel danışmanlık almanın avantajları deneyim ve uzmanlık, hatasız belge hazırlığı, zaman tasarrufu ve süreç boyunca destek almaktır. Dezavantajı ise ekstra maliyettir. Kararınız, kendi deneyiminize, dil becerinize, bütçenize ve başvurunuzun karmaşıklığına bağlıdır.",
                },
              },
                                           {
                "@type": "Question",
                name: "Portekiz D7 vizesi garantili mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır, Portekiz D7 vizesi garantili değildir. Hiçbir vize başvurusu %100 garantiyle sonuçlanmaz çünkü her başvuru bireysel olarak değerlendirilir ve çeşitli faktörler başarıyı etkiler. Ancak tüm gereksinimleri doğru şekilde karşıladığınızda başarı şansınız oldukça yüksektir. D7 vizesinin onaylanma oranları genellikle yüksektir çünkü objektif ve net kriterler vardır. Başarı şansınızı artırmak için yapmanız gerekenler: minimum gelir gereksinimlerini fazlasıyla karşılayın, tüm belgeleri eksiksiz, doğru ve düzenli hazırlayın, gelir kaynaklarınızın sürekli ve güvenilir olduğunu kanıtlayın, konaklama ve sağlık sigortası düzenlemelerinizi tamamlayın, temiz adli sicil ve güvenlik geçmişiniz olsun, başvuru formunu dikkatlice doldurun ve tutarlı bilgiler verin. Deneyimli bir danışman veya avukat kullanmak başarı şansınızı artırır ancak yine de garanti olmaz. Hiçbir meşru danışman veya şirket %100 garanti vermemelidir. Şüpheli garantili vize tekliflerinden kaçının çünkü bunlar genellikle dolandırıcılıktır. Gerçekçi beklentilere sahip olun, süreci ciddiye alın ve en iyi çabayı gösterin.",
                },
              },
                                               {
                "@type": "Question",
                name: "Portekiz D7 vizesi ile Portekiz’de şirket kurulabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, Portekiz D7 vizesi ile Portekiz'de şirket kurmak mümkündür. D7 oturum izni sahipleri, Portekiz'de iş kurma ve girişimcilik faaliyetlerinde bulunma hakkına sahiptir. Şirket kurma süreci şöyledir: NIF (Portekiz vergi numarası) alın, şirket türünü seçin (en yaygın olanlar Unipessoal Lda. - tek kişilik limited şirket veya LDA - limited şirket), Empresa na Hora sistemi üzerinden hızlı şirket kuruluşu yapın (1 gün içinde) veya noter aracılığıyla geleneksel yöntemle kurun, Sosyal Güvenlik sistemine kayıt olun, ticari faaliyetiniz için gerekli lisans ve izinleri alın. Şirket kurmanın avantajları serbest çalışma imkanı, vergi avantajları (şirket vergisi %21, küçük işletmeler için daha düşük), profesyonel imaj ve iş büyütme fırsatları içerir. Ancak D7 vizesi için kullandığınız pasif gelir kaynağınızın devam etmesi gerektiğini unutmayın çünkü vize yenileme sırasında bu gelir hala kontrol edilecektir. Şirketiniz başarılı olup ana gelir kaynağınız haline gelirse, gelecekte çalışma vizesine veya girişimci vizesine geçmeyi düşünebilirsiniz.",
                },
              },
                                                     {
                "@type": "Question",
                name: "Portekiz D7 vizesi Golden Visa yerine geçer mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portekiz D7 vizesi ve Golden Visa farklı amaçlara hizmet eden iki ayrı programdır ve birbirinin yerine tam olarak geçmezler. Her ikisi de Portekiz'de oturum izni sağlar ancak gereksinimleri ve avantajları farklıdır. D7 vizesi için düşük gelir gereksinimi (yıllık yaklaşık 10.000 Euro), yatırım gerekmez, daha fazla fiziksel bulunma gereksinimi (yılda 6+ ay), daha düşük maliyet ve pasif gelir sahipleri için uygundur. Golden Visa için yüksek yatırım gereksinimi (minimum 280.000 Euro gayrimenkul veya 500.000 Euro yatırım fonu), çok az fiziksel bulunma gereksinimi (yılda ortalama 7 gün), daha yüksek maliyet (yatırım + ücretler) ve zengin yatırımcılar için uygundur. Her iki program da 5 yıl sonra kalıcı oturum veya vatandaşlık imkanı sunar, Schengen seyahat hakkı verir ve aile birleşimi sağlar. D7 vizesi, gerçekten Portekiz'de yaşamak isteyenler ve büyük yatırım yapamayan kişiler için idealdir. Golden Visa ise çok az zaman harcayarak Avrupa'ya erişim isteyenler için uygundur. Hangi programın sizin için uygun olduğu finansal durumunuza, yaşam planlarınıza ve önceliklerinize bağlıdır.",
                },
              },
                                                                 {
                "@type": "Question",
                name: "Portekiz D7 vizesi kimler için uygun değildir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portekiz D7 vizesi bazı kişiler için uygun olmayabilir. D7 vizesi şu durumlarda uygun DEĞİLDİR: yeterli düzenli gelire sahip değilseniz (yıllık minimum 10.000 Euro), Portekiz'de fiziksel olarak yaşamayı planlamıyorsanız (yılda minimum 6 ay bulunma şartı vardır), tamamen aktif çalışma geliriyle geçiniyorsanız ve pasif gelir kaynağınız yoksa, büyük miktarda yatırım sermayesi olan ancak düzenli gelir kaynağı olmayan kişilerseniz (Golden Visa daha uygun olabilir), kısa süreli vizeler veya sık sık ülke değiştirmeyi tercih ediyorsanız, başka bir AB ülkesinde yaşamayı planlıyorsanız (D7 vizesi sadece Portekiz'de geçerlidir), bürokratik süreçlerle uğraşmak istemiyorsanız, adli sicil kaydınız veya güvenlik sorunlarınız varsa, Portekizce öğrenmeye veya yerel topluma entegre olmaya istekli değilseniz. Bu durumlarda alternatif vizeler (çalışma vizesi, öğrenci vizesi, Golden Visa veya dijital göçebe vizesi) daha uygun olabilir. D7 vizesi en çok emekliler, pasif gelir sahipleri, uzaktan çalışanlar ve gerçekten Portekiz'de yaşamak isteyenler için idealdir. Kendi durumunuzu dürüstçe değerlendirin ve D7'nin sizin için doğru seçenek olup olmadığını belirleyin.",
                },
              },
            ],
        }]
          }),
        }}
      />
        <main className="bg-zinc-50 text-gray-900  font-sans mt-20">

      {/* HERO */}
      <section
        ref={addRef}
        data-anim="portekiz-fade-down"
        className="portekiz-fade-down-init w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-16"
      >
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
            Portekiz D7 Vizesi: Sıcak İklim, Yüksek Yaşam Kalitesi, Güçlü Bir Gelecek
          </h1>
          <p className="text-gray-700  text-lg md:text-xl mb-6 max-w-lg">
            Pasif gelir veya emekli maaşıyla Avrupa’da yaşamak isteyenler için en erişilebilir oturum yolu.
          </p>

          <Link href="/randevu">
            <button className="bg-white text-gray-700 cursor-pointer mt-5 border border-blue-300 px-5 py-3 rounded-3xl transition hover:text-blue-500 hover:bg-gray-100">
              Hemen Başvur
            </button>
          </Link>
        </div>

        <div
          className="flex-1 flex justify-center"
          ref={addRef}
          data-anim="portekiz-scale"
        >
          <Image
            src="/images/portekiz.jpg"
            alt="Portekiz"
            width={500}
            height={400}
            className="rounded-2xl object-cover shadow-xl"
            priority
          />
        </div>
      </section>

      {/* 3 BİLGİ KARTI */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <FaRegUserCircle className="text-blue-500 text-3xl" />,
            title: "Kimler Başvurabilir?",
            desc: "Pasif gelir elde edenler, uzaktan çalışanlar ve emekliler başvurabilir.",
          },
          {
            icon: <MdOutlineSchool className="text-blue-500 text-3xl" />,
            title: "Vize Şartları",
            desc: "Aylık en az 870 € gelir. Aile için ek gereksinimler uygulanır.",
          },
          {
            icon: <FaFileInvoiceDollar className="text-blue-500 text-3xl" />,
            title: "Ekonomik Faydalar",
            desc: "Düşük yaşam maliyeti, sıcak iklim ve güvenli yaşam alanları.",
          },
        ].map((item, i) => (
          <div
            key={i}
            ref={addRef}
            data-anim="portekiz-fade-up"
            className="portekiz-fade-up-init bg-white  rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            {item.icon}
            <h2 className="font-semibold text-xl mt-3 mb-2">{item.title}</h2>
            <p className="text-gray-700  text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* GEREKLİ BELGELER */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2
          ref={addRef}
          data-anim="portekiz-fade-up"
          className="portekiz-fade-up-init text-3xl font-bold mb-8 text-center"
        >
          Gerekli Belgeler
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {belgeler.map((item, i) => (
            <div
              key={i}
              ref={addRef}
              data-anim="portekiz-slide"
              className="portekiz-slide-init flex flex-col items-center bg-white  rounded-xl p-6 shadow hover:shadow-lg transition hover:scale-105 hakkimizda-hover-fill  hakkimizda-scale-init  relative p-8 rounded-2xl bg-[#f9fafb]  transition-all duration-300 hover:shadow-md"
            >
              <div className="text-red-500 text-4xl mb-3">{item.icon}</div>
              <p className="text-center text-gray-700 text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BAŞVURU SÜRECİ */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2
          ref={addRef}
          data-anim="portekiz-fade-up"
          className="portekiz-fade-up-init text-3xl font-bold mb-8 text-center"
        >
          Başvuru Süreci
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {basvuruAdimlari.map((step) => (
            <div
              key={step.step}
              ref={addRef}
              data-anim="portekiz-scale"
              className="portekiz-scale-init flex flex-col items-center bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <span className="text-orange-500 text-3xl font-bold mb-3">{step.step}</span>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-center text-gray-700 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LİZBON SEMTLERİ */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2
          ref={addRef}
          data-anim="portekiz-fade-up"
          className="portekiz-fade-up-init text-3xl font-bold mb-8 text-center"
        >
          Lizbon’da Yaşamak İçin En Popüler Semtler
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {lizbonSemtleri.map((item, i) => (
            <div
              key={i}
              ref={addRef}
              data-anim="portekiz-slide"
              className="portekiz-slide-init flex flex-col items-center bg-white  rounded-xl p-6 shadow hover:shadow-xl transition hover:scale-105"
            >
              <FaCheckCircle className="text-green-500 text-4xl mb-3" />
              <h3 className="font-semibold mb-2 text-center">{item.title}</h3>
              <p className="text-center text-gray-700  text-sm">
                {item.description}
              </p>
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
      Portekiz D7 Vizesi Hakkında En Çok Sorulan Sorular
    </h2>
  </div>

  <div className="space-y-4">

    <details open className="rounded-xl border border-slate-200 bg-white p-5 text-justify">
      <summary className="font-semibold cursor-pointer">
       Portekiz D7 vizesi nedir?
      </summary>
      <p className="mt-3 text-slate-700">
       Portekiz D7 Vizesi, Portekiz dışından düzenli bir geliri (pasif gelir) olan Avrupa Birliği dışı ülke vatandaşlarının Portekiz'de ikamet etmesine olanak tanıyan bir oturum vizesidir. "Pasif Gelir Vizesi" veya "Emekli Vizesi" olarak da bilinen D7 vizesi, emekli maaşı, kira geliri, yatırım geliri veya telif hakları gibi düzenli gelir kaynaklarına sahip yabancı uyruklu kişilerin Portekiz'de yasal olarak yaşamasına olanak tanır. Bu vize, çalışma izni gerektirmeyen bir vize kategorisi olması nedeniyle özellikle emekliler, dijital göçebeler ve pasif gelir sahipleri için cazip bir seçenek olarak öne çıkmaktadır.

      </p>
    </details>

    <details className="rounded-xl border border-slate-200 bg-white p-5 text-justify">
      <summary className="font-semibold cursor-pointer">
       Portekiz D7 vizesi kimler için uygundur?
      </summary>
      <p className="mt-3 text-slate-700">
       Portekiz D7 vizesi geniş bir kitle için uygundur. Öncelikle emekliler için ideal bir seçenektir çünkü düzenli emekli maaşı geliri D7 vizesi için yeterli kabul edilir. Kira geliri olan gayrimenkul sahipleri, yatırım portföyünden düzenli gelir elde edenler, telif hakkı gelirleri olanlar ve düzenli temettü geliri olan yatırımcılar da D7 vizesine başvurabilir. Ayrıca uzaktan çalışan profesyoneller, serbest meslek sahipleri ve dijital göçebeler de düzenli gelirlerini belgelemeleri halinde D7 vizesinden fararlanabilir. Portekiz'de emekli olmak isteyen, düşük maliyetli ve yüksek yaşam kalitesi arayan, güvenli ve ılıman iklime sahip bir ülkede yaşamak isteyen kişiler için D7 vizesi mükemmel bir çözümdür.

      </p>
    </details>

    <details className="rounded-xl border border-slate-200 bg-white p-5 text-justify">
      <summary className="font-semibold cursor-pointer">
      Portekiz D7 vizesi almak zor mu?
      </summary>
      <p className="mt-3 text-slate-700">
       Portekiz D7 vizesi almak, gerekli koşulları sağladığınız takdirde nispeten kolay bir süreçtir. Golden Visa gibi büyük yatırım gerektiren programlara kıyasla D7 vizesi daha erişilebilir ve bürokratik açıdan daha basittir. Başarılı bir başvuru için yeterli ve sürekli gelir kaynağını belgeleyin, Portekiz'de konaklama adresi (kira sözleşmesi veya mülk) temin edin, kapsamlı sağlık sigortası yaptırın ve temiz bir adli sicil belgesi sunmanız gerekir. Doğru belgeleri hazırladığınızda ve gereksinimleri karşıladığınızda süreç oldukça yönetilebilir hale gelir. Başka bir deyişle, gerekli belgeler eksiksiz hazırlandığında ve pasif gelir şartı net bir şekilde kanıtlandığında, D7 vizesi en erişilebilir Avrupa vizelerinden biridir. Zorluk seviyesi, gelirinizin sürekliliğini ve Portekiz'deki konaklama durumunuzu ne kadar iyi belgelediğinize bağlıdır.

      </p>
    </details>

    <details className="rounded-xl border border-slate-200 bg-white p-5 text-justify">
      <summary className="font-semibold cursor-pointer">
       Portekiz D7 vizesi ile Portekiz’de yaşanır mı?

      </summary>
      <p className="mt-3 text-slate-700">
      Evet, Portekiz D7 vizesi ile Portekiz'de tam zamanlı olarak yaşayabilirsiniz. D7 vizesi, uzun dönemli ikamet vizesi olduğu için Portekiz'de kalıcı olarak yerleşmenize olanak tanır. Vize aldıktan sonra Portekiz'de ev kiralayabilir veya satın alabilir, günlük yaşamınızı sürdürebilir, yerel hizmetlerden faydalanabilir ve Portekiz toplumuna entegre olabilirsiniz. Ancak oturum iznini korumak için belirli fiziksel bulunma gereksinimlerini karşılamanız gerekmektedir. İlk yılda en az 6 ay, sonraki yıllarda ise her iki yılda toplam 10 ay Portekiz'de bulunmanız beklenir. Bu gereksinimler, vizenizin ve oturum izninizin devam etmesi için önemlidir.

      </p>
    </details>

    <details className="rounded-xl border border-slate-200 bg-white p-5 text-justify">
      <summary className="font-semibold cursor-pointer">
     Portekiz D7 vizesi ne kadar süreyle verilir?

      </summary>
      <p className="mt-3 text-slate-700">
      Portekiz D7 vizesi başlangıçta 4 aylık iki girişli vize olarak verilir. Bu süre içinde Portekiz'e giriş yapmanız ve yerel göçmenlik ofisine (AIMA - Agência para a Integração, Migrações e Asilo) başvurarak oturum izni almanız gerekir. İlk oturum izni 2 yıl süreyle verilir. İki yılın sonunda, gerekli koşulları sağlamaya devam ettiğinizi kanıtlayarak oturum izninizi 3 yıl daha uzatabilirsiniz. Üçüncü uzatmada da 3 yıllık ek süre alabilirsiniz. Toplam 5 yıl kesintisiz ve yasal olarak Portekiz'de yaşadıktan sonra, kalıcı oturum izni veya Portekiz vatandaşlığı için başvurma hakkı kazanırsınız.

      </p>
    </details>
<details className="rounded-xl border border-slate-200 bg-white p-5">
  <summary className="cursor-pointer font-semibold text-slate-900">
    Diğer sık sorulan sorular
  </summary>

  <div className="mt-4 space-y-4 text-slate-700 text-justify">

    <p><strong>Portekiz D7 vizesi ile oturum izni alınır mı?</strong><br />
    Evet, Portekiz D7 vizesi ile oturum izni alınır. D7 vizesi aslında iki aşamalı bir süreçtir: önce ülke dışından D7 vizesi başvurusu yapılır ve onaylanırsa 4 aylık giriş vizesi verilir. Bu vize ile Portekiz'e giriş yaptıktan sonra, belirtilen süre içinde (genellikle 3-4 ay) yerel göçmenlik makamlarına başvurarak geçici oturum izni (temporary residence permit) almanız gerekir. Bu oturum izni, Portekiz'de yasal olarak yaşamanıza, seyahat etmenize ve çeşitli haklardan faydalanmanıza olanak tanır. İlk oturum izni 2 yıl geçerlidir ve düzenli olarak yenilenebilir. Oturum izni kartınız Schengen bölgesinde seyahat etmenize de imkan sağlar.
</p>

    <p><strong>Portekiz D7 vizesi için ne kadar gelir gerekir?</strong><br />
   Portekiz D7 vizesi için gerekli minimum gelir, Portekiz'deki ulusal asgari ücretin (salário mínimo nacional) belirli katları üzerinden hesaplanır. 2026 yılı için Portekiz asgari ücreti aylık yaklaşık 920 Euro civarındadır. Ana başvuru sahibi için yıllık gelir minimum asgari ücretin 12 katı (yaklaşık 11040 Euro) olmalıdır. Eş için ek %50 (yaklaşık 5520 Euro), her bir çocuk için ise ek %30 (yaklaşık 3312 Euro) gelir gösterilmesi gerekir. Örneğin, eşi ve iki çocuğu olan bir başvuru sahibinin en az 23184 Euro yıllık gelir belgesi sunması gerekmektedir. Bu gelirin düzenli, sürekli ve kanıtlanabilir olması önemlidir. Gelir miktarları yıllık olarak güncellenir, bu nedenle başvuru öncesi güncel rakamları kontrol etmek önemlidir.
</p>

    <p><strong>Portekiz D7 vizesi için pasif gelir şart mı?
</strong><br />
   Evet, D7 vizesinin "ruhunda" pasif gelir (kira, emekli maaşı, faiz vb.) yatar. Ancak günümüzde dijital göçebelik arttığı için, istikrarlı bir uzaktan çalışma geliri de (freelance veya şirket sahibi olarak) çoğu konsolosluk tarafından kabul edilmektedir. D7 vizesi için kabul edilen gelir kaynakları emekli maaşı, kira geliri, temettü ve faiz gelirleri, telif hakları ve patent gelirleri gibi pasif gelirleri kapsar. Ancak buna ek olarak serbest meslek gelirleri, danışmanlık ücretleri ve uzaktan çalışma gelirleri de belirli koşullar altında kabul edilebilir. Önemli olan gelirin düzenli, öngörülebilir ve sürekli olmasıdır. Portekiz'de aktif olarak çalışmayı gerektirmeyen, yurt dışından elde edilen veya yatırımlardan gelen her türlü düzenli gelir D7 vizesi için uygun kabul edilir. Gelirin en az bir yıllık süre için garanti edildiğini ve devam edeceğini belgelemelisiniz.
</p>

    <p><strong>Portekiz D7 vizesi emekliler için uygun mu?
</strong><br />
    Kesinlikle. Emekliler, garantili ve düzenli bir gelire (emekli maaşı) sahip oldukları için D7 vizesi için en ideal aday grubudur. EYT dahil :) Portekiz, ılıman iklimi, düşük yaşam maliyeti, yüksek yaşam kalitesi, gelişmiş sağlık sistemi ve İngilizce konuşan nüfusu ile emekliler için çok cazip bir destinasyondur. Ayrıca Portekiz, "Non-Habitual Resident" (NHR) vergi rejimi sunarak emekli maaşlarına özel vergi avantajları sağlamaktadır. Emekliler genellikle fiziksel bulunma gereksinimlerini karşılamakta da zorluk çekmezler çünkü çoğu zaman Portekiz'de kalıcı olarak yaşamayı planlarlar. D7 vizesi, emekliler için Golden Visa'ya göre çok daha ekonomik ve erişilebilir bir alternatiftir.
</p>

    <p><strong>Portekiz D7 vizesi serbest meslek sahipleri için uygun mu?
</strong><br />
   Portekiz D7 vizesi belirli koşullar altında serbest meslek sahipleri için de uygundur. Serbest meslek sahibiyseniz ve uzaktan çalışıyorsanız, yani Portekiz dışından müşteriler için çalışıp gelir elde ediyorsanız D7 vizesine başvurabilirsiniz. Önemli olan Portekiz iş piyasasında aktif olarak çalışmayacağınızı göstermektir. Dijital göçebeler, danışmanlar, yazarlar, tasarımcılar, programcılar ve online iş sahipleri genellikle D7 vizesi için uygundur. Gelirin düzenli ve öngörülebilir olduğunu kanıtlamak için geçmiş dönem gelir beyanları, sözleşmeler, banka hesap ekstreleri ve müvekkil referansları sunmanız gerekebilir. Portekiz'de yerel müşterilere hizmet sunmayı planlıyorsanız, D7 vizesi yerine çalışma izni veya iş vizesi almanız daha uygun olabilir. Her durumda, gelir kaynaklarınızın yasal ve düzenli olduğunu belgelemek kritik öneme sahiptir.
</p>

    <p><strong>Portekiz D7 vizesi için banka hesabı Portekiz’de mi açılmalı?</strong><br />
   Evet, Portekiz D7 vizesi başvurusu için Portekiz'de bir banka hesabı açmanız gereklidir. Portekiz bankasında açılmış hesap, başvuru sürecinde ikamet adresinizi ve mali durumunuzu kanıtlamak için önemli bir belge olarak kabul edilir. Ayrıca bu hesaba, minimum gelir gereksinimlerini karşılayacak miktarda fon transfer etmeniz beklenir. Bu hesapta en az bir yıllık asgari geçim tutarının (tek kişi için yaklaşık 11.040 €) bloke edilmiş olması şansınızı artırır.Portekiz'de banka hesabı açmak nispeten kolaydır ancak kişisel olarak bulunmanızı gerektirebilir. Bazı bankalar, NIF (Número de Identificação Fiscal - Portekiz vergi numarası) almanızı şart koşabilir. Banka hesabı açmak için pasaportunuz, adres belgesi ve gelir kaynağı belgelerinizi hazırlamanız gerekir. Banka ekstreleri başvuru belgelerinizin önemli bir parçasıdır.
</p>

    <p><strong>Portekiz D7 vizesi için kira sözleşmesi zorunlu mu?</strong><br />
   Evet, Portekiz'de geçerli bir adres göstermeniz zorunludur. Başvuru sırasında Portekiz'de nerede yaşayacağınızı kanıtlamanız gerekir. Bu kanıt genellikle uzun süreli kira sözleşmesi (arrendamento) veya satın aldığınız bir mülkün tapu belgesi (escritura) ile sağlanır. Kira sözleşmesi en az bir yıllık olmalı ve resmi olarak kayıtlı olmalıdır. 
</p>

    <p><strong>Portekiz D7 vizesi başvurusu nereden yapılır?</strong><br />
   Portekiz D7 vizesi başvurusu, ikamet ettiğiniz ülkedeki Portekiz konsolosluğu veya Portekiz Vize Başvuru Merkezi (VFS Global gibi yetkili vize başvuru merkezleri) aracılığıyla yapılır. İlk başvuru mutlaka Portekiz dışından, ülkenizde veya yasal olarak ikamet ettiğiniz ülkedeki Portekiz temsilciliklerine yapılmalıdır. Türkiye'de yaşıyorsanız, Ankara'daki Portekiz Büyükelçiliği veya İstanbul'daki Portekiz Başkonsolosluğu aracılığıyla başvuru yapabilirsiniz. Başvuru sürecinde randevu almanız, gerekli belgeleri hazırlamanız ve şahsen görüşmeye gitmeniz gerekebilir. Başvuru ücreti ödendikten sonra belgeleriniz değerlendirilir. Vize onaylandığında, 4 aylık giriş vizesi pasaportunuza işlenir. Bu vize ile Portekiz'e giriş yaptıktan sonra, yerel göçmenlik ofisine (AIMA) başvurarak oturum izni kartınızı alırsınız. İlk başvuru için Portekiz'de olmanız gerekmez.
</p>

    <p><strong>Portekiz D7 vizesi başvurusu online mı yapılır?
</strong><br />
   Portekiz D7 vizesi başvurusu kısmen online yapılabilir ancak tamamen dijital bir süreç değildir. Bazı konsolosluklar ve vize başvuru merkezleri online randevu sistemi kullanır ve başvuru formlarını online doldurmanıza izin verir. Ancak fiziksel belgeleri şahsen teslim etmeniz ve biyometrik verilerinizi (parmak izi ve fotoğraf) vermek için konsolosluğa veya vize merkezine gitmeniz gerekir. Ayrıca mülakata çağrılabilirsiniz. Başvuru süreci şu adımları içerir: online randevu alın, başvuru formunu doldurun (online veya kağıt), gerekli belgeleri hazırlayın, randevu gününde belgeleri teslim edin ve biyometrik verilerinizi verin, başvuru ücretini ödeyin ve sürecin tamamlanmasını bekleyin. Portekiz'e giriş yaptıktan sonra oturum izni başvurusu için AIMA sistemini kullanırsınız ve bu aşamada bazı işlemler online gerçekleştirilebilir. Ancak genel olarak D7 vizesi süreci hala önemli ölçüde fiziksel katılım gerektirir.
</p>

    <p><strong>Portekiz D7 vizesi kaç günde sonuçlanır?</strong><br />
   Portekiz D7 vizesi başvuru süreci genellikle 60-90 gün (2-3 ay) arasında sonuçlanır, ancak bu süre değişkenlik gösterebilir. İşlem süresi, başvuru yaptığınız konsolosluğun iş yoğunluğuna, belgelerinizin eksiksizliği ve doğruluğuna, arka plan kontrolleri ve güvenlik incelemelerinin karmaşıklığına bağlı olarak değişir. Bazı basit vakalar 30-45 gün içinde sonuçlanabilirken, daha karmaşık veya eksik belgeli başvurular 4-6 ay sürebilir. Vize onaylandıktan sonra Portekiz'e giriş yapmanız ve ardından 3-4 ay içinde AIMA'ya başvurarak oturum izni kartınızı almanız gerekir. Oturum izni kartının hazırlanması da ek 1-3 ay sürebilir. Genel süreç başvuru anından oturum izni kartını almaya kadar toplamda 6-9 ay alabilir. Bu nedenle planlamanızı önceden yapmanız ve sabırlı olmanız önemlidir. İşlem süresini kısaltmak için tüm belgeleri eksiksiz ve doğru şekilde hazırlamaya özen gösterin.
</p>

    <p><strong>Portekiz D7 vizesi ile aile bireyleri başvuru yapabilir mi?
</strong><br />
   Evet, Portekiz D7 vizesi ile aile bireyleri de birlikte başvuru yapabilir. Ana başvuru sahibinin eşi, 18 yaş altındaki veya ekonomik olarak bağımlı olan çocuklar ve ekonomik olarak bağımlı ebeveynler aile birleşimi kapsamında D7 vizesine dahil edilebilir. Aile bireyleri ana başvuru ile birlikte veya ana başvuru onaylandıktan sonra ayrı olarak başvurabilir. Ancak ana başvuru sahibinin her aile üyesi için ek gelir göstermesi gerekir: eş için %50 ek gelir, her çocuk için %30 ek gelir. Örneğin dört kişilik bir aile için toplam gelir gereksinimi yaklaşık 19.000-20.000 Euro yıllık olacaktır. Aile bireyleri de ana başvuru sahibiyle aynı haklara sahip olur, Portekiz'de yaşayabilir, eğitim ve sağlık hizmetlerinden yararlanabilir. Çocuklar Portekiz okullarına kaydolabilir ve devlet eğitiminden ücretsiz faydalanabilir.
</p>

    <p><strong>Portekiz D7 vizesi ile çalışmak mümkün mü?</strong><br />
   Portekiz D7 vizesi temelde pasif gelir sahipleri için tasarlanmış olsa da, D7 vizesi ile Portekiz'de çalışmak belirli koşullar altında mümkündür. D7 oturum izniniz, Portekiz'de bağımlı (dependent) çalışan olarak çalışmanıza ve iş kurmanıza izin verir. Ancak iş bulduğunuzda veya çalışmaya başladığınızda, işvereninizin sizi kayıt altına alması ve Sosyal Güvenlik sistemine bildirmesi gerekir. Serbest meslek yapabilir, danışmanlık hizmeti verebilir veya kendi işinizi kurabilirsiniz. Önemli olan vizenizi almak için kullandığınız pasif gelir kaynaklarınızın devam etmesi gerektiğidir çünkü vize yenileme sırasında bu gelirin devam ettiğini kanıtlamanız istenir. Eğer birincil gelir kaynağınız Portekiz'deki aktif çalışma olacaksa, D7 vizesi yerine çalışma vizesi almanız daha uygun olabilir. D7 vizesi sahipleri, çalışma faaliyetlerini vergi dairesine bildirmeli ve gerekli vergi ve sosyal güvenlik ödemelerini yapmalıdır.
</p>

    <p><strong>Portekiz D7 vizesi Schengen ülkelerinde geçerli mi?</strong><br />
   Evet, Portekiz D7 vizesi ile Schengen ülkelerinde seyahat etmek mümkündür. Portekiz D7 oturum izni kartınız, Schengen bölgesindeki diğer ülkelere (toplam 27 AB üyesi ülke dahil) 180 günde 90 güne kadar vizesiz seyahat etmenize olanak tanır. Ancak D7 vizesi ile sadece Portekiz'de kalıcı olarak yaşayabilirsiniz; diğer Schengen ülkelerinde uzun süreli ikamet edemezsiniz. Schengen bölgesine seyahat ederken oturum izni kartınızı ve pasaportunuzu yanınızda bulundurmalısınız. D7 oturum izniniz, turist vizesi gerektirmeden Avrupa içinde seyahat etme özgürlüğü sağlar, bu da Portekiz'de yaşamanın önemli avantajlarından biridir. Ancak her bir Schengen ülkesinde kalış süresi kısıtlamaları olduğunu unutmayın. Sürekli oturum izni aldıktan sonra (5 yıl sonra) Schengen bölgesinde daha fazla hareket özgürlüğüne sahip olursunuz. Portekiz vatandaşlığı alırsanız tüm AB içinde serbestçe yaşayabilir ve çalışabilirsiniz.
</p>

    <p><strong>Portekiz D7 vizesi reddedilir mi?</strong><br />
   Evet, Portekiz D7 vizesi başvuruları reddedilebilir. Ret nedenleri arasında yetersiz veya belirsiz gelir kanıtı, sahte veya eksik belgeler, adli sicil kayıtları veya güvenlik sorunları, konaklama belgelerinin olmaması veya yetersizliği, sağlık sigortasının olmaması, geçmiş göçmenlik ihlalleri ve başvuru formundaki tutarsızlıklar yer alır. Eğer başvurunuz reddedilirse, genellikle ret gerekçesini açıklayan resmi bir mektup alırsınız. Çoğu durumda, ret kararına karşı itiraz etme veya eksiklikleri gidererek yeniden başvuru yapma hakkınız vardır. 
</p>

    <p><strong>Portekiz D7 vizesi reddinden sonra tekrar başvuru yapılabilir mi?
</strong><br />
   Evet, Portekiz D7 vizesi reddedildikten sonra tekrar başvuru yapmak mümkündür. Ret gerekçelerini dikkatlice incelemeli ve eksiklikleri veya sorunları gidermelisiniz. Yeniden başvuru yapmadan önce ret nedenlerini tam olarak anlamak ve düzeltmek kritik öneme sahiptir. Örneğin gelir yetersizliği nedeniyle reddedildiyseniz, daha güçlü gelir belgeleri sağlamalısınız. Belgeler eksik veya yanlıştı ise doğru ve eksiksiz belgeler hazırlamalısınız. Yeniden başvuru için genellikle belirli bir bekleme süresi yoktur ancak ret nedenlerini çözmeden hemen tekrar başvurmak ikinci bir reddiye yol açabilir. Bazı durumlarda ret kararına karşı itiraz etme hakkınız olabilir; bu durumda belirlenen süre içinde (genellikle 15-30 gün) itiraz başvurusu yapmalısınız. İtiraz yerine yeniden başvurmayı tercih ediyorsanız, tüm başvuru sürecini baştan başlatmanız ve yeni başvuru ücreti ödemeniz gerekir. 
</p>

    <p><strong>Portekiz D7 vizesi neden reddedilir??</strong><br />
    Portekiz D7 vizesi çeşitli nedenlerle reddedilebilir. En yaygın ret nedenleri şunlardır: yetersiz finansal kaynaklar veya minimum gelir gereksinimini karşılayamama, gelir kaynaklarının düzensiz, kanıtlanamayan veya sürdürülemez olması, sahte, eksik veya doğru olmayan belgeler sunmak, adli sicil kaydı veya güvenlik endişeleri, Portekiz'de geçerli konaklama adresi belgesi sunamamak, gerekli sağlık sigortası kapsamına sahip olmamak, başvuru formundaki bilgilerde tutarsızlıklar veya yanlışlıklar, geçmişte göçmenlik kurallarını ihlal etmiş olmak veya vize kötüye kullanımı, mülakatta yetersiz veya tutarsız cevaplar vermek, gelir kaynaklarının yasadışı faaliyetlerden kaynaklandığına dair şüpheler, NIF veya banka hesabı gibi gerekli belgelerin eksik olması. 
</p>

    <p><strong>Portekiz D7 vizesi için minimum gelir ne kadar?</strong><br />
   2026 yılı itibarıyla, ana başvuru sahibi için Portekiz asgari ücreti olan aylık 920 € (yıllık 11.040 €) tutarında bir gelir beyan edilmesi gerekir.
<br />
Eş/Partner: + %50 (460 €)
<br />
Çocuklar: + %30 (276 €)
</p>

    <p><strong>Portekiz D7 vizesi ile Portekiz’de süresiz kalınır mı?</strong><br />
   Portekiz D7 vizesi başlangıçta süresiz bir oturum hakkı vermez ancak doğru adımları takip ederek Portekiz'de süresiz kalma hakkı elde edebilirsiniz. İlk oturum izni 2 yıl sürelidir, ardından 3 yıl daha uzatılabilir. Toplamda 5 yıl yasal ve kesintisiz olarak Portekiz'de yaşadıktan sonra kalıcı oturum izni (permanent residence / residência permanente) için başvurabilirsiniz. Kalıcı oturum izni, süresiz oturum hakkı sağlar ve düzenli gelir gösterme gereksinimini ortadan kaldırır. Alternatif olarak, 5 yıl sonra Portekiz vatandaşlığı için başvurabilirsiniz (Portekizce dil sınavı ve diğer koşulları sağlamanız halinde). Vatandaşlık, size tamamen süresiz ve koşulsuz Portekiz'de kalma hakkı verir. Her iki durumda da fiziksel bulunma gereksinimlerini karşılamanız (her iki yılda toplam 10 ay) ve temiz bir adli sicil kaydınızın olması gerekir. D7 vizesi, uzun vadede Portekiz'de sürekli yerleşme yolunu açan bir başlangıç noktasıdır.
</p>

    <p><strong>Portekiz D7 vizesi vatandaşlığa gider mi?</strong><br />
   Evet, Portekiz D7 vizesi Portekiz vatandaşlığına giden yollardan biridir. D7 vizesi ile 5 yıl yasal olarak Portekiz'de yaşadıktan sonra Portekiz vatandaşlığı için başvuru yapabilirsiniz. Vatandaşlık başvurusu için gerekli koşullar şunlardır: en az 5 yıl yasal ikamet (D7 vizesi ile geçen süre sayılır), fiziksel bulunma gereksinimlerini karşılamak (her yıl ortalama 6 ay Portekiz'de olmak), temel düzeyde Portekizce bilgisi (A2 seviyesi dil sınavı), temiz adli sicil kaydı, Portekiz toplumuna entegrasyon göstermek ve mali yükümlülükleri yerine getirmek. Vatandaşlık aldığınızda Portekiz ve AB pasaportu sahibi olursunuz, bu da tüm AB ülkelerinde yaşama ve çalışma hakkı sağlar. Portekiz çifte vatandaşlığa izin verir, yani mevcut vatandaşlığınızı koruyabilirsiniz. Vatandaşlık süreci 1-2 yıl sürebilir.
</p>

    <p><strong>Portekiz D7 vizesi ile Portekiz’de ev satın alınabilir mi?</strong><br />
    Evet, Portekiz D7 vizesi ile Portekiz'de ev satın almak mümkündür ve aslında teşvik edilmektedir. D7 vizesi gayrimenkul alımı gerektirmez (Golden Visa'nın aksine), ancak ev satın almak konaklama gereksinimini karşılamanın en güvenli yoludur. Portekiz'de mülk satın almak için D7 vizesine sahip olmanız gerekmez; vize başvurusu öncesi veya sonrasında istediğiniz zaman gayrimenkul satın alabilirsiniz. Ev satın alma süreci yabancılar için nispeten basittir: önce NIF (Portekiz vergi numarası) alın, Portekiz'de bir banka hesabı açın, avukat veya emlak danışmanı ile çalışın, ev araştırması yapın ve uygun mülkü seçin, satın alma sözleşmesi (promissory contract) imzalayın ve depozito ödeyin, noter önünde nihai satış işlemini (escritura) tamamlayın, tapu kaydını (registo predial) yaptırın. Ev sahibi olmak, D7 vizesi için konaklama belgesi sağlar ve uzun vadeli yatırım olarak değer kazanabilir. Ayrıca evinizi kiraya vererek pasif gelir elde edebilir ve bu geliri D7 vizesi gereksinimleriniz için kullanabilirsiniz.
</p>

    <p><strong>Portekiz D7 vizesi ile Portekiz’de vergi ödenir mi?
</strong><br />
  Evet, Portekiz D7 vizesi ile Portekiz'de yaşarsanız Portekiz vergi mükellefiyeti altına girersiniz. Portekiz'de bir takvim yılında 183 günden fazla kalan veya Portekiz'de kalıcı ikametgahı olan kişiler Portekiz vergi rezidenti olarak kabul edilir. Vergi rezidenti olarak dünya çapındaki geliriniz üzerinden Portekiz'de vergi beyanında bulunmanız ve vergi ödemeniz gerekir. Ancak Portekiz, "Non-Habitual Resident" (NHR) vergi rejimi adı altında özel vergi avantajları sunmaktadır. NHR statüsü, 10 yıl süreyle bazı yabancı kaynaklı gelirler üzerinden vergi muafiyeti veya indirimli vergi oranları sağlar. Emekli maaşları, temettüler, faiz gelirleri ve bazı profesyonel gelirler NHR kapsamında %0-10 oranında vergilendirilebilir veya tamamen muaf tutulabilir. NHR başvurusu, Portekiz'de vergi rezidenti olduktan sonraki yıl içinde yapılmalıdır. Vergi konusunda profesyonel danışmanlık almanız, avantajları maksimize etmenize yardımcı olur. Portekiz'de yıllık gelir vergisi beyannamesi (IRS) vermek zorunludur.
</p>

    <p><strong>Portekiz D7 vizesi vergi avantajı sağlar mı?</strong><br />
    Evet, Portekiz D7 vizesi sahipleri, "Non-Habitual Resident" (NHR) vergi rejiminden yararlanarak önemli vergi avantajları elde edebilir. NHR programı, Portekiz'e yeni yerleşen kişilere 10 yıl süreyle özel vergi muafiyetleri ve indirimleri sunar. NHR kapsamında emekli maaşları, bazı koşullarda %0-10 vergi oranıyla vergilendirilebilir veya tamamen vergiden muaf tutulabilir (kaynak ülkede vergilendirilmişse). Yabancı kaynaklı temettü ve faiz gelirleri genellikle muaftır. Yüksek katma değerli meslekler (bilim, teknoloji, sanat gibi) %20 sabit vergi oranından yararlanabilir. Sermaye kazançları genellikle Portekiz dışındaysa muaf tutulur. Bu vergi avantajları, özellikle yüksek gelir vergisi olan ülkelerden gelen emekliler ve yatırımcılar için önemli tasarruf sağlar. 
</p>

    <p><strong>Portekiz D7 vizesi ile sağlık hizmetlerinden yararlanılır mı?</strong><br />
   Evet, Portekiz D7 vizesi ile Portekiz'de sağlık hizmetlerinden yararlanabilirsiniz. D7 oturum izni sahipleri, Portekiz ulusal sağlık sistemi (Serviço Nacional de Saúde - SNS) üzerinden sağlık hizmetlerine erişim hakkına sahiptir. SNS'ye kayıt olmak için Portekiz Sosyal Güvenlik sistemine (Segurança Social) kayıt olmanız ve düzenli katkı payları ödemeniz gerekir. Çalışıyorsanız işvereniniz otomatik olarak sizi sisteme kaydeder. Çalışmıyorsanız gönüllü olarak sisteme katılabilirsiniz. SNS, acil servisler, genel pratisyen hizmetleri, hastane tedavileri ve ilaçlar için düşük maliyetli veya ücretsiz sağlık hizmeti sunar. Ancak bazı hizmetlerde bekleme süreleri uzun olabilir. Bunun yanında özel sağlık sigortası yaptırmak da yaygındır ve daha hızlı erişim sağlar. D7 vizesi başvurusu için zaten kapsamlı sağlık sigortasına sahip olmanız gerekir, bu sigorta en az ilk yıl geçerlidir. Portekiz'in sağlık sistemi kaliteli olup özellikle Lizbon ve Porto gibi büyük şehirlerde modern sağlık tesisleri mevcuttur.
</p>

    <p><strong>Portekiz D7 vizesi ile çocuklar Portekiz’de okuyabilir mi?</strong><br />
   Evet, Portekiz D7 vizesi ile çocuklar Portekiz'de okula gidebilir ve eğitim haklarından tam olarak yararlanabilir. Portekiz'de yasal olarak ikamet eden tüm çocuklar, vatandaşlıktan bağımsız olarak devlet okullarında ücretsiz eğitim alma hakkına sahiptir. Zorunlu eğitim 6-18 yaş arasındadır ve devlet okullarında tamamen ücretsizdir (kitaplar, malzemeler ve yemek için bazı masraflar olabilir). Portekiz eğitim sistemi iyi kalitededir ve özellikle büyük şehirlerde İngilizce eğitim veren uluslararası okullar da mevcuttur (ücretli). Çocuklarınızı devlet okullarına veya özel okullara kaydedebilirsiniz. Devlet okulları Portekizce eğitim verirken, uluslararası okullar İngilizce veya diğer dillerde eğitim sunar. Portekiz üniversiteleri de kalitelidir ve AB vatandaşları ile aynı ücretlerle eğitim alma imkanı sunulur. Çocukların eğitimi için Portekiz mükemmel bir seçenektir ve çocuklar genellikle hızlıca Portekizce öğrenir ve yerel topluma entegre olur. 
</p>

    <p><strong>Portekiz D7 vizesi için sağlık sigortası zorunlu mu?
</strong><br />
   Evet, Portekiz D7 vizesi için sağlık sigortası zorunludur. Başvuru sırasında Portekiz'de geçerli olan kapsamlı bir sağlık sigortası poliçesi sunmanız gerekir. Sağlık sigortası aşağıdaki kriterleri karşılamalıdır: Portekiz'de geçerli olmalı, acil müdahaleler ve hastane tedavilerini içeren kapsamlı tıbbi hizmetleri kapsama almalı, repatriation (ülkenize dönüş) masraflarını içermeli, minimum kapsam tutarı en az 30.000 Euro olmalı ve en az ilk oturum izni süresi boyunca (minimum 1 yıl) geçerli olmalıdır. Sağlık sigortası, yerel Portekiz sigorta şirketlerinden veya uluslararası sigorta sağlayıcılarından alınabilir. Bazı popüler seçenekler arasında Cigna Global, Allianz Care, AXA ve yerel Portekiz sigorta şirketleri yer alır. Sigorta belgesi başvuru dosyanıza dahil edilmelidir. Portekiz'e giriş yaptıktan ve oturum izni aldıktan sonra ulusal sağlık sistemine (SNS) kayıt olabilir ve özel sigortanıza gerek kalmayabilir, ancak birçok kişi hem SNS hem de özel sigortayı birlikte kullanır.
</p>

    <p><strong>Portekiz D7 vizesi kaç yıl sonra uzatılır?
</strong><br />
Portekiz D7 vizesi ile alınan ilk oturum izni 2 yıl sürelidir. İki yılın sonunda, gerekli koşulları sağlamaya devam ettiğinizi kanıtlayarak oturum izninizi 3 yıl daha uzatabilirsiniz. Uzatma başvurusu, mevcut oturum izninizin sona ermesinden 30-90 gün önce yapılmalıdır. İlk uzatma için gereksinimler şunlardır: sürekli ve düzenli gelir kaynağının devam ettiğini kanıtlamak, Portekiz'de geçerli konaklama adresi, geçerli sağlık sigortası veya SNS kaydı, temiz adli sicil, fiziksel bulunma gereksinimlerini karşıladığınızı göstermek (ilk iki yılda toplam 10 ay) ve vergi yükümlülüklerinizi yerine getirmiş olmak. İkinci uzatma da 3 yıl sürelidir ve benzer koşullara tabidir. Toplamda 5 yıl (2+3 yıl) yasal ikamet sonrasında kalıcı oturum izni veya vatandaşlık için başvurabilirsiniz. Uzatma işlemleri genellikle ilk başvurudan daha hızlı sonuçlanır ancak yine de birkaç ay sürebilir. Uzatma başvurunuzu zamanında yapmak, oturum izninizin kesintiye uğramaması için kritik öneme sahiptir.
</p>

    <p><strong>Portekiz D7 vizesi uzatma süreci zor mu?</strong><br />
  Portekiz D7 vizesi uzatma süreci, ilk başvuruya kıyasla genellikle daha kolay ve daha hızlıdır. Gerekli koşulları sağlamaya devam ettiğiniz sürece uzatma genellikle sorunsuz gerçekleşir. Uzatma için yapmanız gerekenler şunlardır: mevcut oturum izninizin bitiminden önce başvuru yapın, düzenli gelir kaynağınızın devam ettiğini belgelerle kanıtlayın (banka ekstreleri, emekli maaşı belgeleri vb.), Portekiz'deki konaklama adresinizi güncelleyin (kira sözleşmesi veya tapu), geçerli sağlık sigortası veya SNS kayıt belgesi sunun, fiziksel bulunma gereksinimlerini karşıladığınızı kanıtlayın, temiz adli sicil belgesi sunun ve uzatma ücretini ödeyin. Uzatma başvurusu AIMA ofisine yapılır ve işlem genellikle 2-4 ay içinde tamamlanır. İlk başvurudan farklı olarak konsolosluk mülakatına veya kapsamlı değerlendirmeye gerek yoktur. Ancak belgelerinizdeki tutarsızlıklar veya koşulları karşılamama durumu uzatmanın reddedilmesine neden olabilir. Uzatma sürecini kolaylaştırmak için tüm belgeleri düzenli tutun ve gereksinimleri sürekli karşıladığınızdan emin olun.
</p>

    <p><strong>Portekiz D7 vizesi ile Portekiz dışında yaşanabilir mi?
</strong><br />
   Portekiz D7 vizesi ile teknik olarak Portekiz dışında yaşayabilirsiniz ancak ciddi kısıtlamalar vardır. D7 oturum iznini korumak için belirli fiziksel bulunma gereksinimlerini karşılamanız gerekir: ilk yılda en az 6 ay Portekiz'de bulunmalısınız, sonraki yıllarda her iki yılda toplam 10 ay Portekiz'de olmalısınız. Eğer bu gereksinimleri karşılamazsanız oturum izniniz iptal edilebilir veya uzatma başvurunuz reddedilebilir. Bu nedenle D7 vizesi, Portekiz dışında tamamen yaşamak isteyenler için uygun değildir. Ancak yılın belirli bölümlerini Portekiz'de, geri kalanını başka ülkelerde geçirmek mümkündür. Schengen bölgesinde seyahat özgürlüğünüz vardır ancak başka bir ülkede kalıcı olarak yaşamanız D7 koşullarına aykırıdır. Eğer Portekiz'de fiziksel olarak bulunmadan Avrupa'ya erişim istiyorsanız, Golden Visa gibi daha esnek fiziksel bulunma gereksinimleri olan programlar daha uygun olabilir. D7 vizesi, gerçekten Portekiz'de yaşamak isteyenler için tasarlanmıştır.
</p>

    <p><strong>Portekiz D7 vizesi iptal edilir mi?</strong><br />
    Evet, Portekiz D7 vizesi ve oturum izni belirli durumlarda iptal edilebilir. İptal nedenleri şunlardır: fiziksel bulunma gereksinimlerini karşılamamak (gereken süre Portekiz'de bulunmamak), gelir kaynaklarının sona ermesi veya yetersiz hale gelmesi, sahte veya yanıltıcı belgeler sunduğunuzun ortaya çıkması, ciddi suç işlemek veya adli sicil kaydı almak, vergi yükümlülüklerini yerine getirmemek, sağlık sigortasını sürdürmemek, oturum iznini uzatmamak veya gerekli belgeleri zamanında sunmamak, Portekiz dışında sürekli yaşamak ve başka bir ülkede kalıcı oturum izni almak. İptal kararına karşı itiraz etme hakkınız vardır ve genellikle belirlenen süre içinde (30 gün) itiraz başvurusu yapabilirsiniz. Hafif ihlaller için önce uyarı alabilir ve durumu düzeltme şansınız olabilir. Ciddi ihlaller ise doğrudan iptal ile sonuçlanabilir. İptal edilirse Portekiz'den ayrılmanız gerekebilir ve gelecekte yeniden başvuru yapmanız zorlaşabilir. Oturum izni gereksinimlerinizi ciddiye almak ve sürekli uyum sağlamak çok önemlidir.
</p>

    <p><strong>Portekiz D7 vizesi alındıktan sonra reddedilebilir mi?
</strong><br />
   Portekiz D7 vizesi onaylandıktan ve oturum izni alındıktan sonra, normal koşullarda geriye dönük olarak reddedilemez. Ancak vizeniz veya oturum izniniz iptal edilebilir veya yenilenmeyebilir. İptal durumları şunlardır: başvuru sırasında sahte veya yanıltıcı bilgi/belgeler kullandığınızın ortaya çıkması, oturum izni koşullarını ihlal etmeniz (fiziksel bulunma gereksinimleri, gelir şartları vb.), ciddi suç işlemeniz veya ulusal güvenlik tehdidi oluşturmanız, vize sahtekarlığı veya kimlik dolandırıcılığı tespit edilmesi. Bu durumlar oldukça nadir ve genellikle ciddi ihlalleri içerir. Normal koşullarda, gereksinimleri karşılamaya devam ettiğiniz sürece oturum izniniz güvendedir. Uzatma sırasında koşulları karşılamıyorsanız (örneğin gelir kaybı), uzatma reddedilebilir ancak bu geçmiş oturum izninizi geçersiz kılmaz, sadece yenilenmez. Dürüst bir başvuru yaptıysanız ve koşulları sürekli karşılıyorsanız, vizenizin sonradan reddedilmesi veya iptal edilmesi riski çok düşüktür. Yasal yükümlülüklerinizi yerine getirmek ve koşullara uymak kalıcılığınızı güvence altına alır.</p>

    <p><strong>Portekiz D7 vizesi danışmanlık olmadan alınabilir mi?</strong><br />
 Evet, Portekiz D7 vizesi danışmanlık veya avukat olmadan da alınabilir. Süreç yasal olarak bir avukat veya danışman gerektirmez ve kendiniz de başvuru yapabilirsiniz. Ancak profesyonel yardım, süreci önemli ölçüde kolaylaştırabilir ve başarı şansınızı artırabilir. Kendiniz başvurmak için yapmanız gerekenler: tüm gereksinimleri araştırın ve anlayın, gerekli belgeleri toplayın ve hazırlayın, Portekizce belgeleri çevirin (yeminli tercüme), konsoloslukta randevu alın ve başvuru yapın, Portekiz'e giriş yapın ve AIMA'ya başvurun. Kendiniz başvurmanın avantajları maliyetten tasarruf etmek ve süreci kontrol altında tutmaktır. Dezavantajları ise dil bariyeri (Portekizce belgeler ve iletişim), bürokrasi ve karmaşıklık, hata yapma riski ve sürecin daha uzun sürmesi olabilir. Profesyonel danışmanlık almanın avantajları deneyim ve uzmanlık, hatasız belge hazırlığı, zaman tasarrufu ve süreç boyunca destek almaktır. Dezavantajı ise ekstra maliyettir. Kararınız, kendi deneyiminize, dil becerinize, bütçenize ve başvurunuzun karmaşıklığına bağlıdır.</p>

    <p><strong>Portekiz D7 vizesi garantili mi?</strong><br />
    Hayır, Portekiz D7 vizesi garantili değildir. Hiçbir vize başvurusu %100 garantiyle sonuçlanmaz çünkü her başvuru bireysel olarak değerlendirilir ve çeşitli faktörler başarıyı etkiler. Ancak tüm gereksinimleri doğru şekilde karşıladığınızda başarı şansınız oldukça yüksektir. D7 vizesinin onaylanma oranları genellikle yüksektir çünkü objektif ve net kriterler vardır. Başarı şansınızı artırmak için yapmanız gerekenler: minimum gelir gereksinimlerini fazlasıyla karşılayın, tüm belgeleri eksiksiz, doğru ve düzenli hazırlayın, gelir kaynaklarınızın sürekli ve güvenilir olduğunu kanıtlayın, konaklama ve sağlık sigortası düzenlemelerinizi tamamlayın, temiz adli sicil ve güvenlik geçmişiniz olsun, başvuru formunu dikkatlice doldurun ve tutarlı bilgiler verin. Deneyimli bir danışman veya avukat kullanmak başarı şansınızı artırır ancak yine de garanti olmaz. Hiçbir meşru danışman veya şirket %100 garanti vermemelidir. Şüpheli "garantili vize" tekliflerinden kaçının çünkü bunlar genellikle dolandırıcılıktır. Gerçekçi beklentilere sahip olun, süreci ciddiye alın ve en iyi çabayı gösterin.
</p>

    <p><strong>Portekiz D7 vizesi ile Portekiz’de şirket kurulabilir mi?</strong><br />
    Evet, Portekiz D7 vizesi ile Portekiz'de şirket kurmak mümkündür. D7 oturum izni sahipleri, Portekiz'de iş kurma ve girişimcilik faaliyetlerinde bulunma hakkına sahiptir. Şirket kurma süreci şöyledir: NIF (Portekiz vergi numarası) alın, şirket türünü seçin (en yaygın olanlar Unipessoal Lda. - tek kişilik limited şirket veya LDA - limited şirket), "Empresa na Hora" sistemi üzerinden hızlı şirket kuruluşu yapın (1 gün içinde) veya noter aracılığıyla geleneksel yöntemle kurun, Sosyal Güvenlik sistemine kayıt olun, ticari faaliyetiniz için gerekli lisans ve izinleri alın. Şirket kurmanın avantajları serbest çalışma imkanı, vergi avantajları (şirket vergisi %21, küçük işletmeler için daha düşük), profesyonel imaj ve iş büyütme fırsatları içerir. Ancak D7 vizesi için kullandığınız pasif gelir kaynağınızın devam etmesi gerektiğini unutmayın çünkü vize yenileme sırasında bu gelir hala kontrol edilecektir. Şirketiniz başarılı olup ana gelir kaynağınız haline gelirse, gelecekte çalışma vizesine veya girişimci vizesine geçmeyi düşünebilirsiniz.
</p>

    <p><strong>Portekiz D7 vizesi Golden Visa yerine geçer mi?</strong><br />
    Portekiz D7 vizesi ve Golden Visa farklı amaçlara hizmet eden iki ayrı programdır ve birbirinin yerine tam olarak geçmezler. Her ikisi de Portekiz'de oturum izni sağlar ancak gereksinimleri ve avantajları farklıdır. D7 vizesi için düşük gelir gereksinimi (yıllık yaklaşık 10.000 Euro), yatırım gerekmez, daha fazla fiziksel bulunma gereksinimi (yılda 6+ ay), daha düşük maliyet ve pasif gelir sahipleri için uygundur. Golden Visa için yüksek yatırım gereksinimi (minimum 280.000 Euro gayrimenkul veya 500.000 Euro yatırım fonu), çok az fiziksel bulunma gereksinimi (yılda ortalama 7 gün), daha yüksek maliyet (yatırım + ücretler) ve zengin yatırımcılar için uygundur. Her iki program da 5 yıl sonra kalıcı oturum veya vatandaşlık imkanı sunar, Schengen seyahat hakkı verir ve aile birleşimi sağlar. D7 vizesi, gerçekten Portekiz'de yaşamak isteyenler ve büyük yatırım yapamayan kişiler için idealdir. Golden Visa ise çok az zaman harcayarak Avrupa'ya erişim isteyenler için uygundur. Hangi programın sizin için uygun olduğu finansal durumunuza, yaşam planlarınıza ve önceliklerinize bağlıdır.</p>

    <p><strong>Portekiz D7 vizesi kimler için uygun değildir?</strong><br />
   Portekiz D7 vizesi bazı kişiler için uygun olmayabilir. D7 vizesi şu durumlarda uygun DEĞİLDİR: yeterli düzenli gelire sahip değilseniz (yıllık minimum 10.000 Euro), Portekiz'de fiziksel olarak yaşamayı planlamıyorsanız (yılda minimum 6 ay bulunma şartı vardır), tamamen aktif çalışma geliriyle geçiniyorsanız ve pasif gelir kaynağınız yoksa, büyük miktarda yatırım sermayesi olan ancak düzenli gelir kaynağı olmayan kişilerseniz (Golden Visa daha uygun olabilir), kısa süreli vizeler veya sık sık ülke değiştirmeyi tercih ediyorsanız, başka bir AB ülkesinde yaşamayı planlıyorsanız (D7 vizesi sadece Portekiz'de geçerlidir), bürokratik süreçlerle uğraşmak istemiyorsanız, adli sicil kaydınız veya güvenlik sorunlarınız varsa, Portekizce öğrenmeye veya yerel topluma entegre olmaya istekli değilseniz. Bu durumlarda alternatif vizeler (çalışma vizesi, öğrenci vizesi, Golden Visa veya dijital göçebe vizesi) daha uygun olabilir. D7 vizesi en çok emekliler, pasif gelir sahipleri, uzaktan çalışanlar ve gerçekten Portekiz'de yaşamak isteyenler için idealdir. Kendi durumunuzu dürüstçe değerlendirin ve D7'nin sizin için doğru seçenek olup olmadığını belirleyin.</p>

    
  </div>
</details>



  </div>
</section>
    <section
        ref={addRef}
        data-anim="ukvisa-fade-up"
        className="ukvisa-fade-up-init max-w-6xl mx-auto px-6 pb-20 rounded-3xl"
      >
 <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-xl">
 
 <div
  className="absolute inset-0 rounded-3xl"
  style={{
    background:
      "radial-gradient(circle at 18% 30%, rgba(22,163,74,0.22), transparent 45%), radial-gradient(circle at 82% 32%, rgba(220,38,38,0.16), transparent 45%), radial-gradient(circle at 50% 80%, rgba(234,179,8,0.14), transparent 50%), linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)",
  }}
/>
{/* SOFT PORTUGAL STRIPES */}
<div
  className="absolute inset-0 opacity-20 rounded-3xl"
  style={{
    background:
      "repeating-linear-gradient(135deg, rgba(22,163,74,0.12) 0 12px, rgba(255,255,255,0) 12px 26px)",
    mixBlendMode: "multiply",
  }}
/>

          
          <div className="relative p-6 md:p-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Başvuru Süreçleri</h2>

            <div className="grid md:grid-cols-3 gap-4">
              {[ "Tecrübe", "Profesyonellik", "Aya Journey" ].map((t, i) => (
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
