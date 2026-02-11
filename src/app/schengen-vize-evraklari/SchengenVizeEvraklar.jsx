'use client';

import { useState } from 'react';
import { 
  FaPassport, 
  FaFileAlt, 
  FaMoneyBillWave, 
  FaCalendarAlt,
  FaPlane,
  FaHotel,
  FaUserTie,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaExclamationTriangle,
  FaInfoCircle,
  FaClipboardCheck
} from 'react-icons/fa';
import { MdAssessment, MdWorkOutline,MdArrowForward } from 'react-icons/md';
import Head from 'next/head';

export default function SchengenVizeEvraklariPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedPurpose, setSelectedPurpose] = useState('tourist');

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Schengen vizesi için bankada ne kadar para olmalı?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Schengen vizesi için günlük minimum 50-70 Euro arasında bir bütçe göstermeniz önerilir. Örneğin 15 günlük seyahat için yaklaşık 750-1000 Euro bankada olmalıdır. Ancak bu tutar ülkeden ülkeye değişiklik gösterebilir."
            }
          },
          {
            "@type": "Question",
            "name": "Schengen vize fotoğrafı nasıl olmalı?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Schengen vize fotoğrafı 35x45 mm boyutunda, beyaz veya açık renkli arka planda, son 6 ay içinde çekilmiş ve biyometrik standartlara uygun olmalıdır. Başınız fotoğrafın %70-80'ini kaplamalı ve yüzünüz net görünmelidir."
            }
          },
          {
            "@type": "Question",
            "name": "Schengen vizesi kaç günde çıkar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Schengen vizesi başvurusu genellikle 15 iş günü içinde sonuçlanır. Ancak özel durumlarda bu süre 30 güne kadar uzayabilir veya acil durumlar için 3 iş gününe kadar kısaltılabilir."
            }
          },
          {
            "@type": "Question",
            "name": "Schengen vizesi için seyahat sigortası zorunlu mu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Evet, Schengen vizesi için minimum 30.000 Euro teminatı olan seyahat sağlık sigortası zorunludur. Sigorta tüm Schengen ülkelerinde geçerli olmalı ve kalış sürenizi kapsamalıdır."
            }
          },
          {
            "@type": "Question",
            "name": "İş yazısında neler olmalı?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "İş yazısında; çalışanın tam adı, pozisyonu, maaşı, işe başlama tarihi, izin onayı ve firma yetkililerin imzası bulunmalıdır. Yazı kaşeli ve imzalı olmalı, seyahat tarihlerini belirtmelidir."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": "https://www.ayajourney.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Schengen Vize Evrakları",
            "item": "https://www.ayajourney.com/schengen-vize-evraklari"
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "Schengen Vize Evrakları 2026 - Güncel Liste ve Gereksinimler",
        "description": "Schengen vizesi için gerekli tüm evraklar, belgeler ve başvuru şartları hakkında detaylı rehber. Turist, iş ve aile vizesi için güncel evrak listesi.",
        "datePublished": "2026-02-10",
        "dateModified": "2026-02-10",
        "author": {
          "@type": "Organization",
          "name": "Aya Journey"
        }
      }
    ]
  };

  const purposes = [
    {
      id: 'tourist',
      title: 'Turist Vizesi',
      icon: <FaPlane className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'business',
      title: 'İş Vizesi',
      icon: <FaUserTie className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'family',
      title: 'Aile Ziyareti',
      icon: <FaHotel className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const documents = {
    tourist: [
      {
        title: 'Pasaport',
        icon: <FaPassport />,
        items: [
          'Son kullanma tarihi vize bitiş tarihinden en az 3 ay sonra olmalı',
          'En az 2 boş sayfa bulunmalı',
          'Varsa eski pasaportların ve diğer bütün vize ve damgaların bulunduğu sayfaların fotokopisi'

        ],
        critical: true
      },
      {
        title: 'Vize Başvuru Formu',
        icon: <FaFileAlt />,
        items: [
          'Başvuran tarafından ıslak imzalanmalı',
          'Tüm bilgiler evraklar ile tutarlı olmalı',
          'Eksiksiz doldurulmalı',
          'İmza pasaport imzası ile aynı olmalı'
        ],
        critical: true
      },
      {
        title: 'Fotoğraf',
        icon: <FaFileAlt />,
        items: [
          '35x45 mm boyutunda, renkli',
          'Beyaz veya açık renkli fon',
          'Son 6 ay içinde çekilmiş',
          'Biyometrik standartlara uygun',
          'Mat kağıda basılmış (parlak olmamalı)'
        ],
        critical: true
      },
      {
        title: 'Seyahat Sağlık Sigortası',
        icon: <FaClipboardCheck />,
        items: [
          'Minimum 30.000 Euro teminat',
          'Tüm Schengen ülkelerinde geçerli',
          'Seyahat tarihlerini kapsayan',
          'Acil sağlık hizmetleri ve repatriasyon dahil'
        ],
        critical: true
      },
      {
        title: 'Uçak Bileti Rezervasyonu',
        icon: <FaPlane />,
        items: [
          'Gidiş-dönüş rezervasyonu',
          'Başvuru sahibinin adına kayıtlı',
          'Seyahat tarihleri net belirtilmiş',
          'Rezervasyon kodu içermeli'
        ],
        critical: true
      },
      {
        title: 'Konaklama Belgesi',
        icon: <FaHotel />,
        items: [
          'Otel rezervasyon belgesi tüm konaklamayı kapsamalı',
          'Veya davet mektubu (akraba/arkadaş evinde kalınacaksa)',
          'Airbnb rezervasyonu kabul edilebilir',
          'Tüm seyahat süresini kapsamalı'
        ],
        critical: true
      },
      {
        title: 'Finansal Durum Belgeleri',
        icon: <FaMoneyBillWave />,
        items: [
          'Son 3-6 aylık banka hesap özeti',
          'Günlük ortalama 50-70 Euro gösterebilmeli',
          'Düzenli gelir/gider akışı olmalı',
          'Sponsor varsa sponsor mektubu ve mali belgeleri',
          
        ],
        critical: true
      },
      {
        title: 'İş/Gelir Durumu Belgeleri',
        icon: <MdWorkOutline />,
        items: [
          'Çalışanlar ve şirket sahipleri için: Şirkete ait, şirket faaliyet durumuna uygun belgeler ',
          'Emekli: Emekli maaşı belgesi',
          'Öğrenci: Öğrenci belgesi ve veli izin mektubu',
         
        ],
        critical: false
      },
      {
        title: 'Ek Destekleyici Belgeler',
        icon: <FaFileAlt />,
        items: [
          'Türkiye\'ye bağlılık gösteren belgeler (tapu, araç ruhsatı)',
          'Medeni durum belgesi',
          'Evlilik cüzdanı fotokopisi',
          'Seyahat programı/gezi planı',
        'Seyahat planınız ile alakalı ek belgeler (araç kiralama, şehirler arası tren bileti, seyahat programı vs.)' 

        ],
        critical: false
      }
    ],
    business: [
      {
        title: 'Pasaport & Temel Belgeler',
        icon: <FaPassport />,
        items: [
          'Geçerli pasaport (3+ ay geçerlilik)',
          'Başvuru formu (imzalı)',
          'Fotoğraf (35x45mm, biyometrik)',
          'Seyahat sağlık sigortası (30.000 Euro)'
        ],
        critical: true
      },
      {
        title: 'İş İlişkisi Belgeleri',
        icon: <FaUserTie />,
        items: [
          'Türkiye\'deki şirketten iş yazısı (kaşeli ve imzalı)',
          'Gidilecek ülkedeki firma/kuruluştan davet mektubu',
          'Davet mektubunda toplantı/fuar detayları',
          'Ticari ilişki belgeleri (varsa)',
          'Şirket imza sirküleri'
        ],
        critical: true
      },
      {
        title: 'Şirket Evrakları',
        icon: <MdWorkOutline />,
        items: [
          'Ticaret sicil gazetesi',
          'Vergi levhası',
          'SGK işyeri bildirge belgesi',
          'Son 3 aylık şirket banka ekstreleri',
          'Faaliyet belgesi'
        ],
        critical: true
      },
      {
        title: 'Seyahat Belgeleri',
        icon: <FaPlane />,
        items: [
          'Uçak bileti rezervasyonu',
          'Otel rezervasyonu veya ev sahibi davet mektubu',
          'Seyahat programı/takvimi',
          'Fuar/konferans katılım belgesi (varsa)'
        ],
        critical: true
      }
    ],
    family: [
      {
        title: 'Pasaport & Temel Belgeler',
        icon: <FaPassport />,
        items: [
          'Geçerli pasaport (3+ ay geçerlilik)',
          'Başvuru formu (imzalı)',
          'Fotoğraf (35x45mm, biyometrik)',
          'Seyahat sağlık sigortası (30.000 Euro)'
        ],
        critical: true
      },
      {
        title: 'Davet Mektubu ve Ev Sahibi Belgeleri',
        icon: <FaHotel />,
        items: [
          'Ev sahibinden resmi davet mektubu (noter onaylı)',
          'Ev sahibinin kimlik/pasaport fotokopisi',
          'Ev sahibinin oturma izni veya vatandaşlık belgesi',
          'Ev sahibinin adres belgesi (ikametgah)',
          'Barınma taahhütnamesi (verpflichtungserklärung)'
        ],
        critical: true
      },
      {
        title: 'Akrabalık Belgeleri',
        icon: <FaFileAlt />,
        items: [
          'Akrabalığı ispatlayan belgeler (nüfus kayıt örneği, vb.)',
          'Evlilik cüzdanı (eş ziyareti için)',
          'Doğum belgesi (çocuk/ebeveyn ziyareti için)',
          'Aile beyannamesi',
          'Apostil veya konsolosluk onaylı belgeler'
        ],
        critical: true
      },
      {
        title: 'Finansal ve İş Belgeleri',
        icon: <FaMoneyBillWave />,
        items: [
          'Son 3-6 aylık banka hesap özeti',
          'İş yazısı (çalışıyorsanız)',
          'Ev sahibinin mali sorumluluk belgesi (gerekirse)',
          'Gelir belgesi',
          'Emlak, araç gibi varlık belgeleri'
        ],
        critical: true
      },
      {
        title: 'Seyahat Belgeleri',
        icon: <FaPlane />,
        items: [
          'Uçak bileti rezervasyonu (gidiş-dönüş)',
          'Seyahat programı',
          'Daha önceki ziyaret belgeleri (varsa)',
          'Dönüş niyetini gösteren belgeler'
        ],
        critical: false
      }
    ]
  };

  const faqs = [
    {
      question: 'Schengen vizesi için bankada ne kadar para olmalı?',
      answer: 'Schengen vizesi için bankada belirli bir alt limit yoktur ancak günlük minimum 50-70 Euro arasında bir bütçe göstermeniz önerilir. Örneğin 15 günlük seyahat için yaklaşık 750-1000 Euro bankada olmalıdır. Önemli olan, seyahat masraflarınızı karşılayacak tutarın hesapta olması ve düzenli gelir/gider akışının görünmesidir. Son 3-6 aylık banka ekstresi istenebilir.'
    },
    {
      question: 'Schengen vize fotoğrafı nasıl olmalı?',
      answer: 'Schengen vize fotoğrafı 35x45 mm (3.5cm x 4.5cm) boyutunda, renkli, beyaz veya açık renkli arka planda olmalıdır. Fotoğraf son 6 ay içinde çekilmiş olmalı ve biyometrik standartlara uygun olmalıdır. Başınız fotoğrafın %70-80\'ini kaplamalı, yüzünüz net görünmeli ve gözlükler yansımasız olmalıdır. Fotoğraf mat kağıda basılmalı, parlak olmamalıdır.'
    },
    {
      question: 'Schengen vizesi kaç günde çıkar?',
      answer: 'Schengen vizesi başvurusu genellikle 15 iş günü içinde sonuçlanır. Bazı özel durumlarda inceleme süresi 30 güne kadar uzayabilir. Acil durumlar için ek ücret ödeyerek 3 iş günü içinde sonuç alınabilir. Yaz ayları ve tatil dönemlerinde süreç daha uzun sürebileceği için başvurunuzu seyahat tarihinden en az 3-4 hafta önce yapmanız önerilir.'
    },
    {
      question: 'Schengen vizesi için seyahat sigortası zorunlu mu?',
      answer: 'Evet, Schengen vizesi için minimum 30.000 Euro teminatlı seyahat sağlık sigortası zorunludur. Sigorta tüm Schengen ülkelerinde geçerli olmalı ve tüm kalış sürenizi kapsamalıdır. Sigorta acil sağlık hizmetleri, hastane masrafları, ambulans ve repatriasyon (ülkeye geri dönüş) masraflarını içermelidir. Başvuru sırasında sigorta poliçesi ibraz edilmelidir.'
    },
    {
      question: 'İş yazısında neler olmalı?',
      answer: 'İş yazısında; çalışanın tam adı-soyadı, TC kimlik numarası, pozisyonu/ünvanı, maaş bilgisi, işe başlama tarihi, izin onayı ve izin süresinin belirtilmesi gerekir. Yazı firma antetli kağıda yazılmalı, yetkili imza ve kaşe içermelidir. Seyahat tarihlerinin ve amacının (tatil/iş seyahati) belirtilmesi önemlidir. Şirket adres ve iletişim bilgileri de yer almalıdır.'
    },
    {
      question: 'Davet mektubu nasıl olmalı?',
      answer: 'Davet mektubu ev sahibi tarafından yazılmalı ve noter onaylı olmalıdır. Mektupta; davet eden kişinin tam kimlik bilgileri, adresi, ziyaretçi ile ilişkisi, kalış süresi, barınma ve masrafların kim tarafından karşılanacağı belirtilmelidir. Davet edenin pasaport/kimlik fotokopisi, oturma izni ve adres belgesi eklenmelidir. Bazı ülkeler için belediyeden alınan resmi davet belgesi (Verpflichtungserklärung) gerekebilir.'
    },
    {
      question: 'Schengen vizesi hangi ülkelerde geçerlidir?',
      answer: 'Schengen vizesi 27 Avrupa ülkesinde geçerlidir: Almanya, Avusturya, Belçika, Çekya, Danimarka, Estonya, Finlandiya, Fransa, Hollanda, İspanya, İsveç, İsviçre, İtalya, İzlanda, Letonya, Litvanya, Lüksemburg, Macaristan, Malta, Norveç, Polonya, Portekiz, Slovakya, Slovenya, Yunanistan, Liechtenstein ve Hırvatistan. Tek vize ile bu ülkelerin tamamında seyahat edebilirsiniz.'
    },
    {
      question: 'Hangi konsolosluğa başvuru yapmalıyım?',
      answer: 'Tek ülke ziyaret edecekseniz o ülkenin konsolosluğuna, birden fazla ülke gezecekseniz en uzun süre kalacağınız ülkenin konsolosluğuna başvurmalısınız. Eşit süre kalacaksanız ilk giriş yapacağınız ülkeyi seçmelisiniz. Transit geçiş yapacaksanız, asıl hedef ülkenin konsolosluğuna başvurulur.'
    }
  ];

  const tips = [
    {
      title: 'Başvuru Zamanlaması',
      icon: <FaCalendarAlt />,
      description: 'Başvurunuzu seyahat tarihinden 3-4 hafta önce yapın. Yaz aylarında ve tatil dönemlerinde süreç uzayabilir.',
      type: 'info'
    },
    {
      title: 'Evrak Eksiksizliği',
      icon: <FaCheckCircle />,
      description: 'Tüm evrakları başvuru öncesi kontrol edin. Eksik evrak ret sebebidir.',
      type: 'warning'
    },
    {
      title: 'Banka Hesabı',
      icon: <FaMoneyBillWave />,
      description: 'Son anda büyük para yatırmayın. Düzenli gelir-gider akışı önemlidir.',
      type: 'warning'
    },
    {
      title: 'Dönüş Niyeti',
      icon: <FaInfoCircle />,
      description: 'Türkiye\'ye bağlılığınızı gösteren belgeleri (tapu, iş, aile) ekleyin.',
      type: 'success'
    }
  ];

  const commonMistakes = [
    'Pasaport geçerliliğinin 3 aydan az olması',
    'Banka ekstresinde düzensiz veya son anda yatırılan paralar',
    'Seyahat sigortasının tüm seyahat süresini kapsamaması',
    'Otel rezervasyonunun sadece birkaç gün olması',
    'İş yazısının kaşesiz veya imzasız olması',
    'Fotoğrafların biyometrik standartlara uygun olmaması',
    'Başvuru formundaki bilgi hataları veya tutarsızlıklar',
    'Uçak biletinin kesilmiş olması (rezervasyon olmalı)'
  ];

  return (
    <>
      <Head>
        <title>Schengen Vize Evrakları 2026 - Güncel Liste ve Gereksinimler | Aya Journey</title>
        <meta 
          name="description" 
          content="Schengen vizesi için gerekli tüm evraklar, belgeler ve başvuru şartları. Turist, iş ve aile vizesi için güncel evrak listesi. Bankada ne kadar para olmalı, hangi belgeler şart?" 
        />
        <meta 
          name="keywords" 
          content="schengen vize evrakları, schengen vizesi belgeler, schengen vize başvurusu, schengen vizesi için gerekli evraklar, schengen vize fotoğrafı, schengen vize sigortası, schengen vize bankada ne kadar para" 
        />
        <meta property="og:title" content="Schengen Vize Evrakları 2026 - Güncel Liste | Aya Journey" />
        <meta property="og:description" content="Schengen vizesi için gerekli tüm evraklar ve belgeler. Turist, iş, aile vizesi için detaylı rehber." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.ayajourney.com/schengen-vize-evraklari" />
        <link rel="canonical" href="https://www.ayajourney.com/schengen-vize-evraklari" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-28">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <FaCheckCircle className="w-4 h-4" />
                <span className="text-sm font-bold">2026 Güncel Bilgiler</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                Schengen Vize Evrakları Rehberi
              </h1>

              <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                Schengen vizesi için gerekli tüm evraklar, belgeler ve başvuru şartları.
                Eksiksiz hazırlık için adım adım rehber.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/30">
                  <div className="text-3xl font-black mb-1">27</div>
                  <div className="text-sm text-white/80">Schengen Ülkesi</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/30">
                  <div className="text-3xl font-black mb-1">15</div>
                  <div className="text-sm text-white/80">İş Günü</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/30">
                  <div className="text-3xl font-black mb-1">90</div>
                  <div className="text-sm text-white/80">Gün Kalış</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#evraklar"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Evrak Listesi
                  <FaChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </a>
                <a
                  href="#test"
                  className="group inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  <MdAssessment className="w-5 h-5" />
                  Ücretsiz Test
                </a>
              </div>
            </div>
          </div>
        </section>
   {/* Important Tips */}
        <section className="max-w-7xl mx-auto px-4 py-16 mt-10 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl p-6 border-2 ${
                  tip.type === 'warning' 
                    ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200' 
                    : tip.type === 'success'
                    ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200'
                    : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  tip.type === 'warning'
                    ? 'bg-amber-500 text-white'
                    : tip.type === 'success'
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-500 text-white'
                }`}>
                  {tip.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Purpose Selection */}
        <section className="max-w-7xl mx-auto px-4 mt-10 relative z-10 ">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-black text-gray-900 text-center mb-6">
              Vize Amacınızı Seçin
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4 ">
              {purposes.map((purpose) => (
                <button
                  key={purpose.id}
                  onClick={() => setSelectedPurpose(purpose.id)}
                  className={`cursor-pointer relative overflow-hidden rounded-2xl p-6 border-2 transition-all duration-300 ${
                    selectedPurpose === purpose.id
                      ? 'border-transparent shadow-xl scale-105'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${purpose.color} ${
                    selectedPurpose === purpose.id ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
                      selectedPurpose === purpose.id 
                        ? 'bg-white/20 text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {purpose.icon}
                    </div>
                    <h3 className={`text-lg font-bold ${
                      selectedPurpose === purpose.id ? 'text-white' : 'text-gray-900'
                    }`}>
                      {purpose.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

     

        {/* Documents List */}
        <section id="evraklar" className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Gerekli Evraklar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {selectedPurpose === 'tourist' && 'Turist vizesi için gerekli tüm belgeler'}
              {selectedPurpose === 'business' && 'İş vizesi için gerekli tüm belgeler'}
              {selectedPurpose === 'family' && 'Aile ziyareti vizesi için gerekli tüm belgeler'}
            </p>
          </div>

          <div className="space-y-6">
            {documents[selectedPurpose].map((doc, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {doc.critical && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500" />
                )}

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${
                      doc.critical 
                        ? 'bg-gradient-to-br from-red-500 to-orange-500 text-white' 
                        : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      {doc.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-xl font-bold text-gray-900">
                          {doc.title}
                        </h3>
                        {doc.critical && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">
                            <FaExclamationTriangle className="w-3 h-3" />
                            Zorunlu
                          </span>
                        )}
                      </div>

                      <ul className="space-y-3">
                        {doc.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl border-2 border-red-200 p-8 sm:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white">
                <FaExclamationTriangle className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                  Sık Yapılan Hatalar
                </h2>
                <p className="text-gray-700">
                  Bu hataları yapmamanız için dikkat edilmesi gerekenler
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {commonMistakes.map((mistake, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-red-200"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                    ✕
                  </div>
                  <span className="text-gray-800 leading-relaxed">{mistake}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-lg text-gray-600">
              Schengen vizesi hakkında en çok merak edilenler
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <FaChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <FaChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="test" className="max-w-7xl mx-auto px-4 py-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white p-8 sm:p-12">
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                  <MdAssessment className="w-4 h-4" />
                  <span className="text-sm font-bold">Ücretsiz Değerlendirme</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black mb-4">
                  Vize Hazırlık Skorunuzu Öğrenin
                </h2>
                <p className="text-xl text-white/90 mb-6">
                  1 dakikada Schengen vize başvurunuzun güçlü ve zayıf yönlerini analiz edin.
                  Eksik evraklarınızı ve dikkat edilmesi gerekenleri öğrenin.
                </p>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>Ücretsiz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>1 Dakika</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>Anında Sonuç</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                                 href="/vize-alma-ihtimalinizi-olcun"
                                 className="group inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                               >
                                 Teste Başla
                                 <FaCheckCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                               </a>
                             <a 
                              href="https://wa.me/905302199056?text=Merhaba%2C%20vize%20ba%C5%9Fvurum%20i%C3%A7in%20profesyonel%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.%20Uygun%20oldu%C4%9Funuzda%20s%C3%BCreci%20birlikte%20planlayabilir%20miyiz%3F"
                               className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
                             >
                               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                               </svg>
                               Başvuru Desteği Al
                               <MdArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                             </a>
                             
                             <a 
                               href="/iletisim" 
                               className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all duration-300"
                             >
                               Ücretsiz Ön Değerlendirme
                               <MdArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                             </a>
              </div>
            </div>
          </div>
        </section>


      </main>
    </>
  );
}