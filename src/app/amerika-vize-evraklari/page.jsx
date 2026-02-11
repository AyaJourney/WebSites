import Link from "next/link";
import React from "react";
import { 
  FaCheckCircle, 
  FaExclamationTriangle, 
  FaUserShield,
  FaBriefcase,
  FaGraduationCap,
  FaFileAlt,
  FaCamera,
  FaPassport,
  FaRegClock,
  FaShieldAlt,
  FaChartLine,
  FaDownload
} from "react-icons/fa";
import { MdVerified, MdArrowForward } from "react-icons/md";

// 1. Metadata: Amerika vize evrakları odaklı SEO çalışması
export const metadata = {
  title: "Amerika Vize Evrakları 2026 | Güncel Liste ve DS-160 Rehberi",
  description: "ABD vizesi için gerekli evraklar nelerdir? Çalışan, işveren ve öğrenciler için 2026 güncel Amerika vize başvuru belgeleri, fotoğraf ölçüleri ve tam liste.",
  keywords: ["amerika vize evrakları", "abd vizesi için gerekli belgeler", "ds 160 formu evraklar", "amerika vize fotoğraf ölçüsü"],
  alternates: { canonical: "https://www.ayajourney.com/amerika-vize-evraklari" },
  openGraph: {
    title: "Amerika Vize Evrakları 2026 | Güncel Liste ve DS-160 Rehberi",
    description: "ABD vizesi için gerekli evraklar nelerdir? Çalışan, işveren ve öğrenciler için 2026 güncel Amerika vize başvuru belgeleri.",
    type: "article",
    url: "https://www.ayajourney.com/amerika-vize-evraklari"
  }
};

const AmerikaEvrakSayfasi = () => {
  // SEO için FAQ Schema (Google sonuçlarında zengin görünüm sağlar)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Amerika vizesi için bankada ne kadar para olmalı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amerika vizesi için bankada belirli bir alt limit yoktur. Önemli olan, seyahat masraflarınızı karşılayacak tutarın hesapta olması ve bu paranın kaynağının belgelenebilir olmasıdır."
          }
        },
        {
          "@type": "Question",
          "name": "Amerika vize fotoğrafı hangi ölçüde olmalıdır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amerika vize başvurusu için fotoğraf 5x5 cm (2x2 inch) boyutunda, beyaz fonlu ve son 6 ay içinde çekilmiş olmalıdır."
          }
        },
        {
          "@type": "Question",
          "name": "DS-160 formu nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DS-160, Amerika vizesi için doldurulması zorunlu olan online başvuru formudur. Form doldurulduktan sonra confirmation sayfası (barkodlu çıktı) mülakatta ibraz edilmelidir."
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
          "name": "Amerika Vize Evrakları",
          "item": "https://www.ayajourney.com/amerika-vize-evraklari"
        }
      ]
    }
  ]
};

  return (
    <>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

          <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* JSON-LD Schema Scripts */}
   
 

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-blue-300 mb-8">
            <a href="/" className="hover:text-white transition-colors">Ana Sayfa</a>
            <span>/</span>
            <span className="text-white font-medium">Amerika Vize Evrakları</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-5 py-2 text-sm font-bold text-red-300 mb-6">
                <MdVerified className="w-4 h-4" />
                2026 Güncel Liste
              </div>

              <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
                Amerika Vize
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Evrak Listesi
                </span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Amerika vize evrakları eksik veya hatalı hazırlandığında,
  Amerika vize reddi kaçınılmaz hale gelir.
  Mesleki durumunuza göre hazırladığımız bu güncel evrak listesi
  ile Amerika vize başvurunuzu güvence altına alın.
              
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl font-black text-white mb-1">15+</div>
                  <div className="text-xs text-blue-200">Zorunlu Belge</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl font-black text-white mb-1">100%</div>
                  <div className="text-xs text-blue-200">Güncel</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl font-black text-white mb-1">24/7</div>
                  <div className="text-xs text-blue-200">Destek</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#evrak-listesi" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-2xl font-bold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Listeyi İncele
                  <MdArrowForward className="w-5 h-5" />
                </a>
 
              </div>
            </div>

            {/* Right content - Visual card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <FaFileAlt className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">DS-160 Formu</h3>
                      <p className="text-sm text-blue-200">Barkodlu confirmation sayfası zorunlu</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <FaCamera className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Vize Fotoğrafı</h3>
                      <p className="text-sm text-blue-200">5x5 cm, beyaz fon, son 6 ay</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <FaPassport className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Pasaport</h3>
                      <p className="text-sm text-blue-200">Dönüşten 6 ay sonraya kadar geçerli</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kritik Bilgiler Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Fotoğraf Standartları */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <FaCamera className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-black">Amerika Vize Fotoğrafı Standartları</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">Boyut: 5x5 cm (2x2 inch)</p>
                      <p className="text-sm text-blue-100">Standart Amerikan vize fotoğraf ölçüsü</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">Beyaz Fon Zorunlu</p>
                      <p className="text-sm text-blue-100">Arka plan tamamen beyaz olmalı</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">Son 6 Ay İçinde Çekilmiş</p>
                      <p className="text-sm text-blue-100">Güncel görünümünüzü yansıtmalı</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/20 backdrop-blur-sm rounded-2xl p-5 border border-red-300/30">
                  <div className="flex items-start gap-3">
                    <FaExclamationTriangle className="w-5 h-5 text-red-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1 text-red-200">Dikkat!</p>
                      <p className="text-sm text-red-100">Gözlük takılmamalı, kulaklar görünmeli</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pasaport Gereksinimleri */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full -mr-20 -mt-20 blur-3xl" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <FaPassport className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-black">Amerika Vizesi İçin Pasaport Gereksinimleri</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-black">✓</span>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Geçerlilik Süresi</p>
                      <p className="text-sm text-slate-300">Seyahat bitişinden itibaren en az 6 ay geçerli olmalı</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-black">✓</span>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Eski Pasaportlar</p>
                      <p className="text-sm text-slate-300">Son 10 yıla ait tüm eski pasaportlar mülakatta yanınızda olmalı</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-black">✓</span>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Önceki Vizeler</p>
                      <p className="text-sm text-slate-300">Varsa eski pasaportlardaki tüm ABD vizeleri</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DS-160 Bilgi Kartı */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-lg">
                <FaFileAlt className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-black text-gray-900 mb-4">  DS-160 Formu Nedir? Amerika Vizesi İçin Nasıl Doldurulur?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                DS-160, Amerika vizesi için doldurulması zorunlu olan online başvuru formudur. 
                Form doldurulduktan sonra <strong>confirmation sayfası (barkodlu çıktı)</strong> alınmalı 
                ve mülakatta mutlaka ibraz edilmelidir. Bu belge olmadan mülakat yapılamaz.
              </p>
              <Link href="/amerika-vize-ds-160-nasil-doldurulur" className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-purple-700 transition-colors cursor-pointer">
                <FaDownload className="w-4 h-4" />
                DS-160 Doldurma Rehberi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mesleki Durum Kartları */}
      <section id="mesleki-evraklar" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-5 py-2 text-sm font-bold text-blue-700 mb-4">
            <FaShieldAlt className="w-4 h-4" />
            Ziyaret Durumuna Özel
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Kimler Hangi Evrakları Hazırlamalı?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Amerika vize evrakları ziyaret durumunuza göre değişiklik gösterir. Aşağıda size uygun listeyi inceleyin.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Çalışan Kartı */}
          <article className="group relative overflow-hidden bg-white border-2 border-blue-100 rounded-3xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity" />
            
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaBriefcase className="w-8 h-8 text-white" />
                </div>
              
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-4">B1-B2 Turist Vizesi İçin Gerekli Evraklar</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>DS-160 Formu</strong> </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>5x5 Biometrik Fotoğraf</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>Randevu Onay Sayfası</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>Geçerli Pasaport</strong> (Yeni ve eski pasaportlar)</span>
                </li>
                 
              </ul>

              <div className="pt-4 border-t border-blue-100">

              </div>
            </div>
          </article>

          {/* İşveren Kartı */}
          <article className="group relative overflow-hidden bg-white border-2 border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-100 to-gray-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity" />
            
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaUserShield className="w-8 h-8 text-white" />
                </div>
               
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-4"> J1 Kültürel Değişim Vizesi Gerekli Evraklar</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>DS 20-19 Belgesi</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>DS-160 Formu</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>SEVIS Ödeme Dekontu</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>5x5 Biometrik Fotoğraf</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>Banka Dökümleri</strong></span>
                </li>
                    <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>Karşı kurumdan alınmış bilgilendirme yazısı</strong></span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-200">
           
              </div>
            </div>
          </article>

          {/* Öğrenci Kartı */}
          <article className="group relative overflow-hidden bg-white border-2 border-orange-100 rounded-3xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity" />
            
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaGraduationCap className="w-8 h-8 text-white" />
                </div>
               
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-4">F1 Akademik Öğrenci Vizesi Evrak Listesi</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>Öğrenci Belgesi</strong> (QR Kodlu)</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>Sponsor Gelir Belgeleri</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>F1/M1 için I-20 Belgesi</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>DS-160 Formu</strong> </span>
                </li>
                  <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>SEVIS Ödeme Dekontu</strong> </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>5x5 Biometrik Fotoğraf</strong></span>
                </li>
              </ul>

              <div className="pt-4 border-t border-orange-100">
         
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* Kritik Uyarı Section */}
      {/* <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-3xl p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-200/30 rounded-full -mr-32 -mt-32 blur-3xl" />
          
          <div className="relative flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl flex items-center justify-center shadow-lg">
                <FaExclamationTriangle className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-black text-red-900 mb-4">
                Mülakatta Yanılmayın!
              </h2>
              <div className="space-y-4 text-gray-800 leading-relaxed">
                <p>
                  Amerika vize memurları <strong>genellikle belgelerinize bakmaz</strong>, ancak talep ettiklerinde 
                  hazır bulundurmamak <span className="font-bold text-red-700">doğrudan ret sebebidir</span>.
                </p>
                <p>
                  Asıl önemli olan belgelerinizden çok, mülakat sırasında verdiğiniz <strong>tutarlı ve samimi cevaplardır</strong>. 
                  Evraklarınızın tam olması size sadece mülakatta <span className="inline-flex items-center gap-1 font-bold text-red-700">
                    <FaShieldAlt className="w-4 h-4" /> özgüven
                  </span> kazandırır.
                </p>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-red-200 mt-6">
                  <p className="font-bold text-red-900 mb-2">💡 Profesyonel İpucu:</p>
                  <p className="text-sm">
                    Tüm belgelerinizi kronolojik sıraya göre düzenli bir dosyada tutun. 
                    Memur talep ettiğinde hızlıca sunabilmek profesyonellik gösterir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Ortak Evraklar Section */}
      <section id="evrak-listesi" className="max-w-7xl mx-auto px-6 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
           Amerika Vizesi İçin Gerekli Ortak Evraklar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meslek grubunuz ne olursa olsun, aşağıdaki belgeler tüm başvurular için zorunludur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaFileAlt className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">DS-160 Confirmation</h3>
                <p className="text-sm text-gray-600">Barkodlu çıktı, yanında taşınmalı</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaPassport className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Geçerli Pasaport</h3>
                <p className="text-sm text-gray-600">Dönüşten 6 ay sonraya kadar geçerli</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaCamera className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Vize Fotoğrafı</h3>
                <p className="text-sm text-gray-600">5x5 cm, beyaz fon, son 6 ay içinde</p>
              </div>
            </div>
          </div>

      

          <div className="bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaRegClock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Randevu Onay Sayfası</h3>
                <p className="text-sm text-gray-600">CGI Randevu sisteminden alınan çıktı</p>
              </div>
            </div>
          </div>

         
        </div>
      </section>
      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-lg text-gray-600">
            Amerika vize evrakları hakkında en çok merak edilenler
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <details className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-colors">
            <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 text-lg">
              Amerika vizesi için bankada ne kadar para olmalı?
              <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-gray-700 leading-relaxed">
              Amerika vizesi için bankada belirli bir alt limit yoktur. Önemli olan, seyahat masraflarınızı karşılayacak tutarın hesapta olması ve bu paranın kaynağının belgelenebilir olmasıdır. F1 ve J1 vizesinde genellikle 3-6 aylık hareketli hesap dökümü istenir.
            </div>
          </details>

          <details className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-colors">
            <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 text-lg">
              Amerika vize fotoğrafı hangi ölçüde olmalıdır?
              <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-gray-700 leading-relaxed">
              Amerika vize başvurusu için fotoğraf 5x5 cm (2x2 inch) boyutunda, beyaz fonlu ve son 6 ay içinde çekilmiş olmalıdır. Gözlük takılmamalı ve kulaklar görünmelidir.
            </div>
          </details>

          <details className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-colors">
            <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 text-lg">
              DS-160 formu nedir ve nasıl doldurulur?
              <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-gray-700 leading-relaxed">
              DS-160, Amerika vizesi için doldurulması zorunlu olan online başvuru formudur. Amerikan Konsolosluğu'nun resmi web sitesinden doldurulur. Form tamamlandıktan sonra confirmation sayfası (barkodlu çıktı) alınmalı ve mülakatta ibraz edilmelidir.
            </div>
          </details>

          <details className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-colors">
            <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 text-lg">
              Eski pasaportları getirmem gerekli mi?
              <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-gray-700 leading-relaxed">
              Evet,  tüm eski pasaportlarınızı ve bu pasaportlardaki ABD vizelerini (varsa) mülakatta yanınızda bulundurmanız gerekmektedir. Bu belgeler seyahat geçmişinizi gösterir ve başvurunuzu güçlendirir.
            </div>
          </details>
        </div>
      </section>
      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full -mr-48 -mt-48 blur-3xl" />
          
          <div className="relative px-8 py-12 md:p-16 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-5 py-2 text-sm font-bold text-blue-300 mb-6">
              <FaShieldAlt className="w-4 h-4" />
              Profesyonel Destek
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Evraklarınız Profesyonelce
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                İncelensin
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Amerika vize başvurusu hata kabul etmez. DS-160 formunuzun evraklarınızla uyumunu kontrol edelim, 
              vize reddi riskinizi minimize edelim.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                  <a
                  href="/vize-alma-ihtimalinizi-olcun"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Teste Başla
                  <FaCheckCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>
              <a 
                href="https://wa.me/905302199056" 
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

            <div className="flex items-center justify-center gap-8 text-blue-200 text-sm">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-4 h-4 text-blue-400" />
                <span>7/24 Destek</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-4 h-4 text-blue-400" />
                <span>Uzman Danışmanlar</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-4 h-4 text-blue-400" />
                <span>Garanti</span>
              </div>
            </div>
          </div>
        </div>
      </section>



    </main>
    </>

  );
};

export default AmerikaEvrakSayfasi;