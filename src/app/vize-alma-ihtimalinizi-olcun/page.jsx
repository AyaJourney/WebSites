'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  MdAssessment,
  MdSearch,
  MdTimer,
  MdCheckCircle,
  MdArrowForward,
  MdFilterList,
  MdTrendingUp,
  MdStar,
} from 'react-icons/md';
import AmericaVisaTestModal from '../components/visaTest/b1b2/AmericaVisaTestModal';
import TestModal from '../components/visaTest/f1/TestModal';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Örnek data — API'den çekmek istersen bunu fetch ile doldurursun
const TESTS = [
  // {
  //   id: 'schengen-quick',
  //   title: 'Schengen Vize Hızlı Değerlendirme',
  //   desc: '1 dakikada temel profil analizi ve yönlendirme.',
  //   minutes: 1,
  //   free: true,
  //   category: 'Schengen',
  //   href: '/vize-test/schengen-hizli',
  //   tags: ['Hızlı', 'Popüler'],
  //   gradient: 'from-blue-500 to-cyan-500',
  // },
  {
    id: 'usa-b1b2',
    title: 'ABD B1/B2 Vize Uygunluk Testi',
    desc: 'Seyahat amacı, finansal durum ve bağlar üzerinden kontrol.',
    minutes: 3,
    free: true,
    category: 'ABD',
    href: '/vize-test/abd-b1b2',
    tags: ['Detaylı'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'usa-f1',
    title: 'ABD F1 Vize Değerlendirmesi',
    desc: 'Güncel kriterlerle uyumlu adım adım analiz.',
    minutes: 4,
    free: true,
    category: 'ABD',
    href: '/vize-test/abd-f1',
    tags: ['Güncel'],
    gradient: 'from-orange-500 to-red-500',
  },
  // {
  //   id: 'canada-visitor',
  //   title: 'Kanada Visitor Vize Kontrol Listesi + Test',
  //   desc: 'Evrak ve profil uyumunu hızlıca ölç.',
  //   minutes: 5,
  //   free: false,
  //   category: 'Kanada',
  //   href: '/vize-test/kanada-visitor',
  //   tags: ['Kontrol Listesi'],
  //   gradient: 'from-green-500 to-emerald-500',
  // },
  // {
  //   id: 'work-study',
  //   title: 'Eğitim / Çalışma Vizesi Ön Değerlendirme',
  //   desc: 'Program, bütçe ve geri dönüş planı üzerinden puanlama.',
  //   minutes: 6,
  //   free: true,
  //   category: 'Eğitim/Çalışma',
  //   href: '/vize-test/egitim-calisma',
  //   tags: ['Puanlama'],
  //   gradient: 'from-indigo-500 to-purple-500',
  // },
];

const CATEGORIES = ['Tümü',"ABD","Schengen","Kanada","Eğitim/Çalışma"];

function Badge({ children, tone = 'slate' }) {
  const tones = {
    slate: 'bg-slate-100 text-slate-700 border border-slate-200/50',
    green: 'bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200/50',
    blue: 'bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border border-blue-200/50',
    purple: 'bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border border-purple-200/50',
    amber: 'bg-gradient-to-r from-amber-50 to-orange-50 text-amber-800 border border-amber-200/50',
  };

  return (
    <span className={cn('inline-flex items-center rounded-full px-3 py-1 text-xs font-bold backdrop-blur-sm', tones[tone])}>
      {children}
    </span>
  );
}

function TestCard({ t,setOpen,setOpenF1 }) {
  return (
    <div
     
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
    >
      {/* Gradient üst çizgi */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.gradient}`} />
      
      {/* Hover gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500`} />

      <div className="relative p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${t.gradient} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
            <MdAssessment className="h-7 w-7 text-white" />
          </div>

          {t.tags?.includes('Popüler') && (
            <div className="flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200 px-3 py-1.5 text-xs font-bold text-amber-700">
              <MdStar className="h-3.5 w-3.5" />
              Popüler
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3 line-clamp-2 group-hover:text-gray-800 transition-colors">
          {t.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
          {t.desc}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <Badge tone="blue">{t.category}</Badge>
          {t.free ? (
            <Badge tone="green">
              <span className="inline-flex items-center gap-1">
                <MdCheckCircle className="h-3.5 w-3.5" />
                Ücretsiz
              </span>
            </Badge>
          ) : (
            <Badge tone="amber">Pro</Badge>
          )}
          <Badge tone="slate">
            <span className="inline-flex items-center gap-1">
              <MdTimer className="h-3.5 w-3.5" />
              {t.minutes} dk
            </span>
          </Badge>
        </div>

        {/* Tags */}
        {t.tags && t.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {t.tags.filter(tag => tag !== 'Popüler').slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-700 border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA Button - Always at bottom */}
        <div className="mt-auto"  onClick={()=>{
              if(t.id === "usa-b1b2"){
                setOpen(true);
              } else if(t.id === "usa-f1"){
                setOpenF1(true);
              }
            }}>
          <div className={`flex items-center justify-between rounded-2xl bg-gradient-to-r ${t.gradient} px-5 py-3.5 text-white shadow-md group-hover:shadow-xl transition-all duration-300`}>
            <span className="text-sm font-bold" >Teste Başla</span>
            <MdArrowForward className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VizeTestleriPage() {
  const [open, setOpen] = useState(false);
  const [openF1, setOpenF1] = useState(false);

  
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('Tümü');
  const [onlyFree, setOnlyFree] = useState(false);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return TESTS.filter((t) => {
      if (cat !== 'Tümü' && t.category !== cat) return false;
      if (onlyFree && !t.free) return false;

      if (!query) return true;

      const hay = `${t.title} ${t.desc} ${t.category} ${(t.tags || []).join(' ')}`.toLowerCase();
      return hay.includes(query);
    });
  }, [q, cat, onlyFree]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-xl mb-12">
          {/* Animated gradient background */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60" />
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-20 blur-3xl animate-pulse" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}} /> */}

          <div className="relative p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              {/* Left content */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white text-sm font-bold mb-6 shadow-lg">
                  <MdTrendingUp className="h-4 w-4" />
                  Vize Başarı Yolculuğunuz
                </div>

                <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 leading-tight">
                  Vize Testleri
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  1–6 dakika içinde profilini ölç, hangi noktaları güçlendirmen gerektiğini gör.
                  Sonuçlara göre sana uygun yol haritasını önerelim.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Badge tone="green">
                    <span className="inline-flex items-center gap-1.5">
                      <MdCheckCircle className="h-4 w-4" /> Ücretsiz seçenekler
                    </span>
                  </Badge>
                  <Badge tone="blue">Mobil uyumlu</Badge>
                  <Badge tone="purple">Adım adım</Badge>
                </div>
              </div>

              {/* Right stats */}
              <div className="grid grid-cols-2 gap-4 sm:w-[380px]">
                <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 shadow-lg">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-10 -mt-10 opacity-50" />
                  <div className="relative">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Ortalama süre</div>
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">3 dk</div>
                    <div className="text-xs text-gray-600 mt-1">Hızlı sonuç</div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 shadow-lg">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -mr-10 -mt-10 opacity-50" />
                  <div className="relative">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Kapsam</div>
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">5+</div>
                    <div className="text-xs text-gray-600 mt-1">Test türü</div>
                  </div>
                </div>
              </div>
            </div>

            {/* SEARCH + FILTER */}
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12">
              <div className="md:col-span-6">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  <div className="relative flex items-center gap-3 rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 shadow-sm group-hover:border-transparent transition-all duration-300">
                    <MdSearch className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    <input
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      placeholder="Test ara (örn:ABD)"
                      className="w-full bg-transparent text-sm outline-none text-gray-900 placeholder:text-gray-400 font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  <div className="relative flex items-center gap-3 rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 shadow-sm group-hover:border-transparent transition-all duration-300">
                    <MdFilterList className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                    <select
                      value={cat}
                      onChange={(e) => setCat(e.target.value)}
                      className="w-full bg-transparent text-sm outline-none text-gray-900 font-medium cursor-pointer"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <button
                  onClick={() => setOnlyFree((v) => !v)}
                  className={cn(
                    'relative w-full rounded-2xl px-5 py-4 text-sm font-bold transition-all duration-300 shadow-sm overflow-hidden',
                    onlyFree
                      ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg shadow-emerald-500/30'
                      : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-emerald-600 hover:text-emerald-600'
                  )}
                >
                  {onlyFree ? (
                    <span className="inline-flex items-center gap-2">
                      <MdCheckCircle className="h-4 w-4" />
                      Ücretsiz
                    </span>
                  ) : (
                    'Sadece Ücretsiz'
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* LIST */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-gray-900">
              Uygun testler
            </h2>
            <div className="flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-2 shadow-sm">
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse" />
              <span className="text-sm font-bold text-gray-600">
                {filtered.length} sonuç
              </span>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-6 rounded-3xl border-2 border-dashed border-gray-300 bg-white p-12 text-center">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 mb-4">
                <MdSearch className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Test bulunamadı</h3>
              <p className="text-gray-600">
                Aramanla eşleşen bir test bulamadık. Filtreleri temizleyip tekrar dene.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((t) => (
                <TestCard key={t.id} t={t} setOpen={setOpen} setOpenF1={setOpenF1} />
              ))}
            </div>
          )}
        </section>

        {/* FOOTER CTA */}
        <section className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 border border-gray-800 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-blue-600/5 to-transparent" />
          
          <div className="relative p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-2xl">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  Sonuçlara göre dosyanı güçlendirelim
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Test sonucunu inceleyelim, riskli alanları tespit edip stratejiyi birlikte çıkaralım.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/randevu"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Randevu Al
                  <MdArrowForward className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/905302199056"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  WhatsApp'tan Yaz
                  <MdArrowForward className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
        <AmericaVisaTestModal open={open} setOpen={setOpen} />
  <TestModal openF1={openF1} setOpenF1={setOpenF1}/>
      
    </main>
  );
}