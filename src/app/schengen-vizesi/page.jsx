// SchengenPage.jsx (Modern UI)
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaRegFileAlt, FaRegClock, FaGlobeEurope, FaUserTie, FaEuroSign } from "react-icons/fa";

// Mevcut veri yapısı korunmuştur.
const basicInfo = {
  heroTitle: "Schengen Vize Başvuru Süreci",
  heroSubtitle:
    "Profilinizi tanıyıp evrak hazırlığından randevuya kadar tüm süreci kolaylaştırıyoruz. Hızlı, güvenilir ve kişiye özel danışmanlık.",
  cta: { href: "/randevu", label: "Ücretsiz Ön Değerlendirme" },
};

const fees = {
  visaFee: "90€ (yetişkinler)",
  appointmentRange: "440–2000 TL (ülkeye göre değişir)",
  consultancy: "200€ (14+), 100€ (0-14)",
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
    desc: "Rezervasyonlar seyahat planınızı açıkça göstermeli (biz yardımcı olabiliriz).",
    icon: FaRegFileAlt,
  },
  {
    title: "Seyahat Sağlık Sigortası",
    desc: "Seyahat süresini kapsayan poliçe (ülkeden ülkeye koşullar değişebilir).",
    icon: FaRegFileAlt,
  },
  {
    title: "İngilizce Vize Talep Dilekçesi",
    desc: "Gidiş amacı ve tarihleri belirten dilekçe (biz hazırlayabiliriz).",
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
    items: ["Ülkeden gelen davetiye (varsa)"],
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
    desc: "İkamet iliniz başvuru şehrinizi etkiler. Uygun randevu bulunduğunda tarih/saat onayınız alınır ve randevunuz oluşturulur. Randevu ücretleri ülkeye göre değişir.",
  },
  {
    title: "Randevu Sonrası",
    desc: "Randevunuz onaylandıktan sonra evrak listeniz, niyet mektubunuz ve diğer belgeler tarafınıza iletilir. Evrak teslimi için son 10 gün önceden hazırlığa başlamanızı öneririz.",
  },
  {
    title: "Evrak Teslimi & Takip",
    desc: "Evraklar aracı kuruma teslim edilir; parmak izi verilir, harç ödenir ve pasaport teslim edilir. Süreç boyunca SMS veya e-posta ile bilgilendirileceksiniz.",
  },
];

// Yeni, modernleştirilmiş bileşen
export default function SchengenPage() {
  // Renk ve tema ayarları
  const primaryColor = "indigo-600";
  const darkPrimary = "indigo-500";
  const hoverColor = "indigo-700";
  const shadowStyle = "shadow-xl hover:shadow-2xl transition duration-300";

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 dark:bg-zinc-900 dark:text-gray-100 font-sans">
      {/* HERO */}
      <section className="relative w-full bg-white dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
     
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-5">
              {basicInfo.heroTitle}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl text-lg">
              {basicInfo.heroSubtitle}
            </p>
            <Link href={basicInfo.cta.href}>
              <button
               className="bg-white text-gray-700 cursor-pointer mt-5 border border-blue-300 px-4 py-2 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100"
              >
                {basicInfo.cta.label}
              </button>
            </Link>
            <div className="mt-8 text-base text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-zinc-700 pt-4">
              <div className="flex items-center gap-3">
                <FaRegFileAlt className={`text-${primaryColor} text-xl`} />
                <span>Randevu ücretleri: **{fees.appointmentRange}**</span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaRegClock className={`text-${primaryColor} text-xl`} />
                <span>
                  Tahmini süreç: **3–8 ay** (ülke ve dosya türüne göre değişir)
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <Image
              src="/images/vize.jpg"
              alt="Schengen Vize Danışmanlığı"
              width={560}
              height={600}
            
              className="rounded-3xl object-cover border-4 border-white dark:border-zinc-700 shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>
      
      {/* PROFIL VE SUREC - Akış Şeması Görünümü */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Başvuru Süreci Adımları
        </h2>
        <div className="grid lg:grid-cols-5 gap-8 relative">
            {/* Dikey çizgi - mobil cihazlarda gizli, büyük ekranlarda görünür */}
            <div className={`hidden lg:block absolute inset-y-0 left-1/2 w-0.5 bg-gray-200 dark:bg-zinc-700 -ml-0.5`}></div>
            
            {/* Yatay Çizgi - her bir adım arasında bağlantı */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 dark:bg-zinc-700 hidden lg:block"></div>

            {processSteps.map((step, i) => (
                <div key={i} className="relative z-10 p-5 bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-700 flex flex-col items-center text-center lg:pt-16">
                    {/* Dairesel Adım İndikatörü */}
                    <div className={`absolute lg:top-[-1.25rem] top-[-1rem] lg:left-1/2 lg:-translate-x-1/2 bg-${primaryColor} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border-4 border-gray-50 dark:border-zinc-900 shadow-md`}>
                        {i + 1}
                    </div>
                    
                    <h4 className="font-semibold text-lg mt-0 mb-3">{step.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{step.desc}</p>
                </div>
            ))}
        </div>
        
        {/* Profil Bilgisi - Yan Kutu olarak eklendi */}
        <div className="mt-16 max-w-4xl mx-auto bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-inner border border-gray-100 dark:border-zinc-700">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaUserTie className={`text-${primaryColor}`} />
                Başvuru Stratejisi
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base">
                Başvuru stratejisi kişinin profiline göre değişir. Mesleğiniz, medeni durumunuz, yaşınız ve seyahat geçmişiniz en uygun Schengen ülkesini ve başvuru taktiğini belirlemek için titizlikle değerlendirilir.
            </p>
        </div>
      </section>
      
      <div className="bg-gray-100 dark:bg-zinc-800">
        {/* GEREKLİ BELGELER */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Gerekli Belgeler Listesi
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {genelEvraklar.map((item, i) => {
              const Icon = item.icon || FaRegFileAlt;
              return (
                <div
                  key={i}
                  className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-zinc-700"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`text-xl text-${primaryColor}`}>
                      <Icon />
                    </div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* EK BELGELER PROFİLLERE GÖRE */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Profile Göre Ek Belge Gereksinimleri
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ekBelgelerByProfile.map((block, i) => {
             const Icon = block.icon || FaRegFileAlt;
            return (
              <div
                key={i}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-zinc-700"
              >
                <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-${primaryColor} bg-opacity-10 text-${primaryColor} mr-3`}>
                        <Icon className="text-2xl" />
                    </div>
                    <h3 className="font-bold text-xl">{block.profile}</h3>
                </div>
                <ul className="text-sm text-gray-700 dark:text-gray-400 list-none space-y-3">
                  {block.items.map((it, j) => (
                    <li key={j} className="flex items-start">
                        <FaCheckCircle className={`text-green-500 mr-2 mt-1 flex-shrink-0`} size={12}/>
                        <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* EVRAK HAZIRLIGI VE ÖNEMLI NOTLAR */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50 dark:bg-zinc-800 rounded-t-3xl border-t border-gray-200 dark:border-zinc-700">
        <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold mb-5 flex items-center gap-2">
            <FaRegFileAlt className={`text-red-500`} />
            Evrak Hazırlığı & Önemli Notlar
          </h3>
          <ul className="list-none pl-0 text-base space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
                <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span>Randevu tarihinden **en az 10 gün önce** hazırlıklara başlayın; son dakikaya bırakmayın.</span>
            </li>
            <li className="flex items-start">
                <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span>
                    Banka dökümleri ve barkodlu e-devlet belgelerini **son hafta** alın; aracı kurum güncel tarihli talep edebilir.
                </span>
            </li>
            <li className="flex items-start">
                <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span>
                    Randevuya gitmeme durumunda randevu ücreti **yanar**; yeniden randevu alınması gerekir.
                </span>
            </li>
            <li className="flex items-start">
                <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span>
                    **Almanya randevu süreci** aracı kurum üzerinden farklı işlemektedir; onay e-postası ve ücret sonrası rezervasyon tamamlanır.
                </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ÜCRETLER */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Ücret Bilgileri</h3>
        <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-700">
                <FaEuroSign className={`text-4xl mx-auto mb-3 text-${primaryColor}`} />
                <p className="font-semibold text-lg">Vize Harcı</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{fees.visaFee}</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-700">
                <FaRegClock className={`text-4xl mx-auto mb-3 text-${primaryColor}`} />
                <p className="font-semibold text-lg">Randevu Bedeli</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{fees.appointmentRange}</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-700">
                <FaUserTie className={`text-4xl mx-auto mb-3 text-${primaryColor}`} />
                <p className="font-semibold text-lg">Danışmanlık Ücreti</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{fees.consultancy}</p>
            </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="w-full bg-white dark:bg-zinc-800 border-t border-gray-200 dark:border-zinc-700 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <p className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-6">
            Hazırsanız ilk adımı atalım — profilinizi paylaşın, size uygun planı hazırlayalım.
          </p>
          <Link href="/randevu">
            <button  
               className="bg-white text-gray-700 cursor-pointer mt-5 border border-blue-300 px-4 py-2 rounded-3xl transition duration-300 hover:text-blue-500 hover:bg-gray-100"
            >
              Hemen Başvur
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}