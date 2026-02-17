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
  FaClipboardCheck,
  FaGraduationCap,
  FaRing,
  FaHome
} from 'react-icons/fa';
import { MdAssessment, MdWorkOutline, MdFamilyRestroom,MdArrowForward } from 'react-icons/md';
import Head from 'next/head';
import Link from 'next/link';

export default function BirlesikKrallikVizeEvraklariPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedPurpose, setSelectedPurpose] = useState('standard-visitor');

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "İngiltere vizesi için bankada ne kadar para olmalı?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "İngiltere vizesi için günlük minimum 100-150 Pound arasında bir bütçe göstermeniz önerilir. Örneğin 10 günlük seyahat için yaklaşık 1000-1500 Pound bankada olmalıdır. Önemli olan son 6 aylık düzenli gelir-gider akışının görünmesidir."
            }
          },
     
          {
            "@type": "Question",
            "name": "İngiltere vizesi kaç günde çıkar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standart İngiltere vize başvurusu 3 hafta (15 iş günü) içinde sonuçlanır. Priority hizmeti (5 iş günü) veya Super Priority hizmeti (24 saat) ile süreç hızlandırılabilir. Başvuru yoğunluğuna göre süreler değişebilir."
            }
          },
     
          {
            "@type": "Question",
            "name": "İngiltere vize başvurusu nasıl yapılır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "İngiltere vize başvurusu online olarak gov.uk/apply-uk-visa adresinden yapılır. Formu doldurduktan sonra VFS Global randevusu alınır, biyometrik veriler (parmak izi ve fotoğraf) verilir ve belgeler teslim edilir. Başvuru ücreti online ödenir."
            }
          },
          {
            "@type": "Question",
            "name": "İngiltere için seyahat sigortası zorunlu mu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "İngiltere vizesi için seyahat sigortası zorunlu değildir ancak şiddetle tavsiye edilir. Özellikle sağlık masraflarını karşılayacak kapsamlı bir sigorta başvurunuzu güçlendirir. NHS (İngiltere Sağlık Sistemi) yabancılar için ücretsiz değildir."
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
            "name": "Birleşik Krallık Vize Evrakları",
            "item": "https://www.ayajourney.com/birlesik-krallik-vize-evraklari"
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "Birleşik Krallık Vize Evrakları 2026 - UK Visitor Visa Belgeler Listesi",
        "description": "İngiltere vizesi için gerekli tüm evraklar, belgeler ve başvuru şartları. Standard Visitor, Student, Work visa için güncel evrak listesi ve detaylı rehber.",
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
      id: 'standard-visitor',
      title: 'Standard Visitor Visa',
      subtitle: 'Turist/İş Ziyareti',
      icon: <FaPlane className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'student',
      title: 'Student Visa',
      subtitle: 'Öğrenci Vizesi',
      icon: <FaGraduationCap className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'work',
      title: 'Skilled Worker Visa',
      subtitle: 'Çalışma Vizesi',
      icon: <FaUserTie className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'family',
      title: 'Family Visa',
      subtitle: 'Aile Vizesi',
      icon: <MdFamilyRestroom className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const documents = {
    'standard-visitor': [
      {
        title: 'Pasaport ve Kimlik',
        icon: <FaPassport />,
        items: [
         'Eski ve yeni pasaportların tüm dolu sayfaları',
          'Kullanılan pasaportta en az 2 boş sayfa bulunmalı',
          'Kimlik kartı fotokopisi (ön-arka)',
          
        ],
        critical: true
      },
      {
        title: 'Online Başvuru Formu',
        icon: <FaFileAlt />,
        items: [
          'Gov.uk üzerinden doldurulmuş başvuru formu',
          'Tüm sorular eksiksiz cevaplanmalı',
          'Doğru ve tutarlı bilgiler verilmeli',
          'Appointment confirmation belgesi'
        ],
        critical: true
      },

      {
        title: 'Finansal Belgeler',
        icon: <FaMoneyBillWave />,
        items: [
          'Son 3 aylık banka hesap ekstreleri (tüm sayfalar)',
          'Günlük minimum 350-400 Pound bütçe göstermeli',
          'Düzenli gelir-gider akışı olmalı',
          'Maaş bordroları (son 3 ay)',
          'Sponsor varsa: Sponsor mektubu, mali belgeleri ve sponsora ait iş yeri belgeleri ',
          'Yatırım hesapları, gayrimenkul değerleme raporları (varsa)',
          'Çalışanlar ve emekliler için maaş hesabı dökümü'
        ],
        critical: true
      },
      {
        title: 'İş ve Gelir Belgeleri',
        icon: <MdWorkOutline />,
        items: [
          'Çalışanlar: İş yazısı (İngilizce, kaşeli, ıslak imzalı),Ticaret sicil gazetesi, vergi levhası, faaliyet belgesi(son bir ay içinde alınmış olmalı) ve şirkete ait imza sirküleri',
          'İş yazısında: Pozisyon, maaş, işe başlama tarihi, izin onayı',
          'Şirket Sahibi: Ticaret sicil gazetesi, vergi levhası, faaliyet belgesi(son bir ay içinde alınmış olmalı) ve şirkete ait imza sirküleri ',
          'Emekli: Emekli aylık belgesi (E-Devletten barkodlu belge alınmalı)',
          'Öğrenci: Öğrenci belgesi',
          'İşveren bilgileri ve iletişim detayları',
          'E Devletten alınmış SGK Hizmet Dökümü (uzun vadeli ve barkodlu belge olacak)',
          "E Devletten alınmış SGK İşe Giriş Bildirges (barkodlu belge olacak)",
        ],
        critical: true
      },
  
      {
        title: 'Konaklama Belgeleri',
        icon: <FaHotel />,
        items: [
         
          'Arkadaş/akraba evinde kalacaksa: Davet mektubu',
          'Ev sahibinin pasaport/kimlik fotokopisi',
          'Ev sahibinin adres belgesi (council tax bill, utility bill)',
          'Ev sahibinin BRP kartı (oturum kartı) fotokopisi (varsa)',
          'Konaklama ilişkisini açıklayan mektup'
        ],
        critical: true
      },
      {
        title: 'Türkiye\'ye Bağlılık Belgeleri',
        icon: <FaHome />,
        items: [
          'Tapu senedi (ev sahibi iseniz)',
          'Kira kontratı (kiracı iseniz)',
          'Araç ruhsatı',
          'Aile nüfus kayıt örneği (tam vukuatlı)',
          'İkametgah belgesi',
         
         
        ],
        critical: false
      },
      {
        title: 'Ek Destekleyici Belgeler',
        icon: <FaClipboardCheck />,
        items: [
          'Seyahat amaç mektubu (Cover Letter - İngilizce)',
         
          'Davet mektubu (Davet gönderen şirket bilgileri ve davet gönderme amacı)',
          'Fuar/konferans katılım belgesi (varsa)',
      
        ],
        critical: false
      }
    ],
    'student': [
      {
        title: 'Temel Belgeler',
        icon: <FaPassport />,
        items: [
          'Geçerli pasaport (kurs süresi + 6 ay geçerli)',
          'Online başvuru formu (CAS numarası ile)',
          'CAS (Confirmation of Acceptance for Studies)'
        ],
        critical: true
      },
      {
        title: 'Eğitim Belgeleri',
        icon: <FaGraduationCap />,
        items: [
          'Üniversite/okul kabul mektubu (CAS)',
          'Dil yeterlilik belgesi (IELTS/TOEFL/PTE)',
          'Akademik transkript (not dökümleri)',
          'Diploma/mezuniyet belgeleri',
          'Önlisans/Lisans diploması (yüksek lisans için)',
          'Referans mektupları (varsa)',
          'Motivasyon mektubu'
        ],
        critical: true
      },
      {
        title: 'Finansal Belgeler',
        icon: <FaMoneyBillWave />,
        items: [
          'Londra için: Aylık £1,529 x 9 aya kadar = £13,761',
          'Londra dışı: Aylık £1,171 x 9 aya kadar = £10,539',
          'Kurs ücreti + yaşam masrafları toplamı',
          'Son 28 günlük banka hesap ekstresi',
          'Para en az 28 gün hesapta durmalı',
          'Sponsor varsa: Sponsor mektubu ve belgeleri',
          'Burs belgesi (varsa)',
          'Ebeveyn gelir belgeleri (18 yaş altı için)'
        ],
        critical: true
      },

      {
        title: 'Ek Belgeler',
        icon: <FaFileAlt />,
        items: [
          'Aileden izin mektubu (18 yaş altı)',
          'Nüfus cüzdanı fotokopisi',
          'Daha önceki eğitim belgeleri',
          'Çalışma deneyimi (varsa)',
          'Mezuniyet sonrası planlar',
          'IHS bedeli ödeme dekontu',
        ],
        critical: false
      }
    ],
    'work': [
      {
        title: 'Temel Belgeler',
        icon: <FaPassport />,
        items: [
          'Geçerli pasaport (5 yıl + 6 ay geçerli)',
          'Online başvuru formu',
          'Adli sicil kaydı',

        ],
        critical: true
      },
      {
        title: 'İş İlişkisi Belgeleri',
        icon: <FaUserTie />,
        items: [
          'Certificate of Sponsorship (CoS) - UK işverenden',
          'İş teklif mektubu (job offer letter)',
          'Pozisyon detayları ve iş tanımı',
          'Maaş bilgisi',
          'Şirket sponsor lisans numarası',
          'İşverenle yapılan kontrat/sözleşme'
        ],
        critical: true
      },
      {
        title: 'Eğitim ve Deneyim',
        icon: <FaGraduationCap />,
        items: [
          'Diploma ve transkriptler (İngilizce çeviri)',
          'Mesleki sertifikalar',
          'Çalışma geçmişi belgeleri (CV)',
          'Referans mektupları',
          'Dil yeterlilik belgesi',
          'Meslek üyelik belgeleri (varsa)',
          '18 yaşından büyük olup en az 12 ay farklı bir ülkede yaşadıysanız bununla ilgili belgeler'
        ],
        critical: true
      },
      {
        title: 'Finansal Belgeler',
        icon: <FaMoneyBillWave />,
        items: [
          'Minimum £1,270 (28 gün hesapta durmalı)',
          'Son 28 günlük banka ekstresi',
          'Maaş bordroları (mevcut işten)',
         
        ],
        critical: true
      },
      {
        title: 'Aile Belgeleri (Aile ile gidecekse)',
        icon: <MdFamilyRestroom />,
        items: [
          'Evlilik cüzdanı (eş için)',
          'Doğum belgeleri (çocuklar için)',
          'Eş ve çocuklar için finansal belgeler',
          'Aile üyelerinin pasaportları',
          "Aile üyelerinin adli sicil kayıtları"
        ],
        critical: false
      }
    ],
    'family': [
      {
        title: 'Temel Belgeler',
        icon: <FaPassport />,
        items: [
          'Geçerli pasaport (2 yıl + 6 ay geçerli)',
          'Online başvuru formu',
         
          
        ],
        critical: true
      },
      {
        title: 'İlişki Belgeleri (Eş Vizesi)',
        icon: <FaRing />,
        items: [
          'Evlilik cüzdanı (apostil veya konsolosluk onaylı)',
          'İlişki geçmişi kanıtları (fotoğraflar, mesajlar, vb.)',
          'Ortak banka hesabı (varsa)',
          'Ortak faturalar, kira kontratı (varsa)',
          'Nikah şahitlerinin beyanları',
          'Daha önceki ziyaret kayıtları'
        ],
        critical: true
      },
      {
        title: 'Sponsor (UK\'deki Eş/Aile) Belgeleri',
        icon: <FaUserTie />,
        items: [
          'BRP (Biometric Residence Permit) veya pasaport',
          'İş yazısı ve maaş bordroları (son 6 ay)',
          'Minimum £29,000 yıllık gelir (çocuksuz)',
          'Her çocuk için +£3,800, 2. çocuktan sonra +£2,400',
          'P60 vergi belgesi (yıllık)',
          'Banka ekstreleri (son 6 ay)',
          'Council tax bill, utility bills (adres kanıtı)',
          'Konut belgeleri (kira kontratı veya mortgage)'
        ],
        critical: true
      },
     
      {
        title: 'Konaklama Belgeleri',
        icon: <FaHome />,
        items: [
          'Mortgage belgesi veya kira kontratı',
          'Konutun yeterli büyüklükte olduğu belgesi',
          'Council tax bill',
          'Ev sahibi izin mektubu (kiracı ise)',
          'Fatura ve hizmet belgeleri (elektrik, su, gaz)',
        ],
        critical: true
      },
      {
        title: 'Dil Yeterlilik Belgesi',
        icon: <FaGraduationCap />,
        items: [
          'IELTS Life Skills A1 (eş vizesi için minimum)',
          'Veya İngilizce konuşulan ülke vatandaşı belgesi',
          'Veya İngilizce öğretim yapan üniversite diploması',
          'Test UKVI onaylı merkezden alınmalı',
          'Sonuç 2 yıl geçerlidir',
          '65 yaş üstü veya fiziksel ya da medikal engelli ise başvuran dil yeterliliğinden muaf olabilir'
        ],
        critical: true
      },
      {
        title: 'Çocuk Vizesi İçin Ek Belgeler',
        icon: <FaFileAlt />,
        items: [
          'Doğum belgesi (apostil onaylı)',
          'Her iki ebeveynin de onayı',
          'Velayeti kanıtlayan belgeler',
          'Okul kayıt belgeleri (varsa)'
        ],
        critical: false
      }
    ]
  };

  const faqs = [
    {
      question: 'İngiltere vizesi için bankada ne kadar para olmalı?',
      answer: 'İngiltere vizesi için günlük minimum 350-400 Pound arasında bir bütçe göstermeniz önerilir. Örneğin 10 günlük seyahat için yaklaşık 1000-1500 Pound bankada olmalıdır. Önemli olan son 6 aylık düzenli gelir-gider akışının görünmesidir. Para hesapta en az 3-6 ay durmuş olmalı, son anda yatırılan büyük miktarlar şüphe uyandırabilir.'
    },

    {
      question: 'İngiltere vizesi kaç günde çıkar?',
      answer: 'Standart İngiltere vize başvurusu 3 hafta (15 iş günü) içinde sonuçlanır. Priority hizmeti ile 5 iş günü, Super Priority hizmeti ile 24 saat içinde sonuç alınabilir. Ancak bu hizmetler ek ücrete tabidir. Yaz aylarında ve tatil dönemlerinde süreç daha uzun sürebileceği için başvurunuzu seyahat tarihinden en az 1 ay önce yapmanız önerilir.'
    },
    {
      question: 'TB test zorunlu mu?',
      answer: 'TB (tüberküloz) testi, Türkiye Cumhuriyeti vatandaşları için zorunlu değildir.',
    },
    {
      question: 'İngiltere vize başvurusu nasıl yapılır?',
      answer: 'İngiltere vize başvurusu online olarak gov.uk/apply-uk-visa adresinden yapılır. 1) Vize tipini seçin ve formu doldurun, 2) Vize ücretini online ödeyin, 3) VFS Global randevusu alın, 4) Randevuda biyometrik verilerinizi (parmak izi ve fotoğraf) verin ve belgelerinizi teslim edin. Başvuru sonrası pasaportunuzu VFS Global\'e bırakırsınız ve sonuç geldiğinde geri alırsınız.'
    },
    {
      question: 'İngiltere için seyahat sigortası zorunlu mu?',
      answer: 'İngiltere vizesi için seyahat sigortası zorunlu değildir.',
    },
    {
      question: 'IHS (Immigration Health Surcharge) nedir?',
      answer: 'IHS, 6 aydan uzun süre İngiltere\'de kalacak kişilerin ödemesi gereken sağlık katkı payıdır. Öğrenciler için yıllık £776, diğer vize tipleri için £1035\'tür. Bu ücret vize başvurusu sırasında online ödenir ve NHS hizmetlerinden faydalanmanızı sağlar. Turist vizesi (6 aydan az) için IHS ödemesi gerekmez.'
    },

    {
      question: 'VFS Global randevusu nasıl alınır?',
      answer: 'Online başvurunuzu tamamladıktan ve ücretinizi ödedikten sonra VFS Global Türkiye websitesinden randevu alabilirsiniz. İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana", "Gaziantep,Trabzon\'da başvuru merkezleri bulunmaktadır. Randevu günü pasaportunuz ve randevu onay belgesi ile gidilmelidir. '
    },
      {
      question: 'Randevuya belge götürmem gerekir mi?',
      answer: 'Belgeler online olarak sisteme yüklenir ayrıca randevuya belge götürmenize gerek yoktur.'
    }
  ];

  const tips = [
    {
      title: 'Online Başvuru',
      icon: <FaCalendarAlt />,
      description: 'Başvurunuzu gov.uk üzerinden yapın. Form doldururken dikkatli olun, hatalı bilgi ret sebebidir.',
      type: 'info'
    },
    {
      title: 'Finansal Kanıt',
      icon: <FaMoneyBillWave />,
      description: 'Son 6 aylık banka ekstresi sunun. Para düzenli olmalı, son anda yatırılan büyük meblağlar şüphe yaratır.',
      type: 'warning'
    },
    {
      title: 'Dönüş Niyeti',
      icon: <FaInfoCircle />,
      description: 'Türkiye\'ye geri dönüş niyetinizi kanıtlayın. İş, ev, aile bağlarınızı gösteren belgeler önemli.',
      type: 'success'
    },
    {
      title: 'Evrak Tercümesi',
      icon: <FaCheckCircle />,
      description: 'Skilled Worker Visa(Çalışma Vizesi) ve Family Visa(Aile Vizesi) da Türkçe belgelerin İngilizce çevirilerini yeminli tercümandan yaptırın.',
      type: 'warning'
    }
  ];

  const commonMistakes = [
    'Başvuru formunda tutarsız veya yanlış bilgiler',
    'Finansal belgelerde son anda yatırılan paralar',
    'Eksik veya tarihi geçmiş belgeler',
    'Seyahat amacını net açıklamamak',
    'Sponsor gelirinin minimum şartı karşılamaması',
    'Şüpheli görünen bakiye hareketleri',
    'Dil yeterlilik belgesinin UKVI onaylı olmaması',
    'İş yazısının kaşesiz veya eksik bilgili olması',
   
  ];

  const ukSpecificInfo = [
    {
      title: 'Priority Hizmetleri',
      description: 'Standart (15 iş gününde sonuç): Normal ücret | Priority (5 iş gününde sonuç): +£500 | Super Priority (24 saatte sonuç): +£1000'
    },
    {
      title: 'IHS Ücreti',
      description: 'Öğrenciler: £776/yıl | Diğer vize tipleri: £1035/yıl | 6 aydan uzun vizeler için zorunlu'
    },
    {
      title: 'Biyometrik Veriler',
      description: 'Parmak izi ve fotoğraf VFS Global\'de alınır. Tüm başvurular için zorunludur.'
    },
    {
      title: 'VFS Global Merkezleri',
      description: 'İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana", "Gaziantep,Trabzon\'da başvuru merkezi bulunmaktadır.'
    }
  ];

  return (
    <>
      <Head>
        <title>Birleşik Krallık Vize Evrakları 2026 - UK Visitor Visa Belgeler | Aya Journey</title>
        <meta 
          name="description" 
          content="İngiltere vizesi için gerekli tüm evraklar ve belgeler. Standard Visitor, Student, Work, Family visa için güncel evrak listesi.  IHS, finansal gereksinimler." 
        />
        <meta 
          name="keywords" 
          content="ingiltere vize evrakları, uk vize belgeler, birleşik krallık vizesi, uk visitor visa evrakları, ingiltere vize başvurusu,  ihs, standard visitor visa, uk student visa" 
        />
        <meta property="og:title" content="Birleşik Krallık Vize Evrakları 2026 - UK Visa Belgeler" />
        <meta property="og:description" content="İngiltere vizesi için gerekli tüm evraklar. Standard Visitor, Student, Work, Family visa belgeler listesi." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.ayajourney.com/birlesik-krallik-vize-evraklari" />
        <link rel="canonical" href="https://www.ayajourney.com/birlesik-krallik-vize-evraklari" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
        {/* Hero Section */}
     <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-blue-800 to-blue-900 text-white">

  <div className="absolute inset-0 bg-black/10 pointer-events-none" />

  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
    <div
      className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"
      style={{ animationDelay: '1s' }}
    />
  </div>

          <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-28">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <FaCheckCircle className="w-4 h-4" />
                <span className="text-sm font-bold">2026 Güncel Bilgiler</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                Birleşik Krallık Vize Evrakları
              </h1>

              <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                İngiltere vizesi için gerekli tüm evraklar, belgeler ve başvuru şartları.
                Standard Visitor, Student, Work ve Family visa için detaylı rehber.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/30">
                  <div className="text-3xl font-black mb-1">15</div>
                  <div className="text-sm text-white/80">İş Gününde Sonuç</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/30">
                  <div className="text-3xl font-black mb-1">6</div>
                  <div className="text-sm text-white/80">Ay Kalış</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/30">
                  <div className="text-3xl font-black mb-1">4</div>
                  <div className="text-sm text-white/80">Vize Tipi</div>
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
         <div className="relative z-10 mt-10 mb-5 text-white/90 text-sm flex flex-wrap justify-center gap-6 font-medium">
  <Link href="/ingiltere-vizesi" className="hover:underline">
    İngiltere vize rehberi →
  </Link>

  <Link href="/ingiltere-vize-randevusu-nasil-alinir" className="hover:underline">
    İngiltere randevu süreci →
  </Link>

  <Link href="/ingiltere-vize-reddi-nedenleri" className="hover:underline">
    İngiltere vize reddi nedenleri →
  </Link>
</div>
        </section>
 {/* UK Specific Info */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border-2 border-blue-200 p-8 sm:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                <FaInfoCircle className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                  UK'ye Özel Bilgiler
                </h2>
                <p className="text-gray-700">
                  İngiltere vize başvurusunda bilmeniz gerekenler
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {ukSpecificInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-blue-200 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
  <p className="text-gray-700">
    Başvuru adımlarını detaylı öğrenmek için
    <a href="/ingiltere-vize" className="text-blue-600 font-semibold hover:underline ml-1">
      İngiltere vize başvuru rehberi
    </a> sayfasını inceleyebilirsiniz.
  </p>
</div>
          </div>
        </section>

        
        {/* Important Tips */}
        <section className="max-w-7xl mx-auto px-4 py-16">
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
        <section className="max-w-7xl mx-auto px-4 mt-10 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-black text-gray-900 text-center mb-6">
              Vize Tipini Seçin
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {purposes.map((purpose) => (
                <button
                  key={purpose.id}
                  onClick={() => setSelectedPurpose(purpose.id)}
                  className={`relative overflow-hidden rounded-2xl p-6 border-2 transition-all duration-300 ${
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
                    <h3 className={`text-lg font-bold mb-1 ${
                      selectedPurpose === purpose.id ? 'text-white' : 'text-gray-900'
                    }`}>
                      {purpose.title}
                    </h3>
                    <p className={`text-sm ${
                      selectedPurpose === purpose.id ? 'text-white/80' : 'text-gray-600'
                    }`}>
                      {purpose.subtitle}
                    </p>
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
              {selectedPurpose === 'standard-visitor' && 'Standard Visitor Visa için gerekli tüm belgeler'}
              {selectedPurpose === 'student' && 'Student Visa için gerekli tüm belgeler'}
              {selectedPurpose === 'work' && 'Skilled Worker Visa için gerekli tüm belgeler (İngilizce çevirisi yapılmış ve yeminli tercüman onaylı)'}
              {selectedPurpose === 'family' && 'Family Visa için gerekli tüm belgeler'}
            </p>
            <p>
              Her belgenin PDF formatında, 10 MB’tan küçük şekilde taranıp randevudan en geç 1 gün önce iletilmesi gerekmektedir. Belgelerin tek bir PDF’te toplanması önerilmez.
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
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
  <h3 className="text-lg font-bold text-gray-900 mb-3">
    Evraklar Hazır mı?
  </h3>
  <p className="text-gray-700 mb-4">
    Evraklarınızı tamamladıktan sonra
    <a href="/ingiltere-vize-randevusu" className="text-blue-600 font-semibold hover:underline ml-1">
      İngiltere vize randevusu
    </a> oluşturabilirsiniz.
  </p>
  <p className="text-gray-700">
    Daha önce ret aldıysanız
    <a href="/ingiltere-vize-reddi" className="text-blue-600 font-semibold hover:underline ml-1">
      ret analiz rehberini
    </a> incelemeniz önerilir.
  </p>
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
              İngiltere vizesi hakkında en çok merak edilenler
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

<section className="max-w-4xl mx-auto px-4 pb-12 text-center">
  <h3 className="text-xl font-bold mb-4">
   <div className="text-center mt-10">
  <a href="/ingiltere-vize" className="text-blue-600 font-semibold hover:underline">
    İngiltere vize sürecini baştan sona öğrenin →
  </a>
</div>
  </h3>

  <div className="flex flex-col sm:flex-row justify-center gap-6 text-blue-600 font-semibold">
    <a href="/ingiltere-vize" className="hover:underline">
      İngiltere vize rehberi
    </a>
    <a href="/ingiltere-vize-randevusu" className="hover:underline">
      Randevu alma adımları
    </a>
    <a href="/ingiltere-vize-reddi" className="hover:underline">
      Ret sonrası ne yapılmalı?
    </a>
  </div>
</section>

        {/* CTA Section */}
        <section id="test" className="max-w-7xl mx-auto px-4 py-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 via-blue-800 to-blue-900 text-white p-8 sm:p-12">
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                  <MdAssessment className="w-4 h-4" />
                  <span className="text-sm font-bold">Ücretsiz Değerlendirme</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black mb-4">
                  UK Vize Hazırlık Skorunuzu Öğrenin
                </h2>
                <p className="text-xl text-white/90 mb-6">
                  1 dakikada İngiltere vize başvurunuzun güçlü ve zayıf yönlerini analiz edin.
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