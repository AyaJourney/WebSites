"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

/* --- DATA --- */
const shortVisas = [
  {
    icon: "🏖️",
    title: "Turistik Vize",
    description:
      "Gezi, tatil veya kültürel ziyaretler için 90 güne kadar düzenlenen kısa süreli vizedir.",
    keywords: "Turistik gezi, tatil vizesi, kısa süreli seyahat",
  },
  {
    icon: "💼",
    title: "Ticari / İş Vizesi",
    description:
      "Toplantı, fuar ve iş görüşmeleri için talep edilir. Çalışma izni içermez.",
    keywords: "İş seyahati, fuar vizesi, ticari davetiye",
  },
  {
    icon: "✈️",
    title: "Transit Vize",
    description:
      "Aktarmalı uçuşlarda belirli ülkelere giriş gerekiyorsa zorunludur.",
    keywords: "Transit geçiş, aktarma vizesi",
  },
];

const longVisas = [
  {
    icon: "🎓",
    title: "Öğrenci Vizesi",
    description:
      "Dil okulu, üniversite ve mesleki eğitim için uzun süreli eğitim vizesi.",
    keywords: "Yurtdışı eğitim, öğrenci vizesi",
  },
  {
    icon: "👷",
    title: "Çalışma Vizesi",
    description:
      "Yurt dışında yasal olarak çalışma hakkı veren vizedir; iş teklifi gerekir.",
    keywords: "Work permit, çalışma izni",
  },
  {
    icon: "🛂",
    title: "E-Vize / Kapıda Vize",
    description:
      "Bazı ülkelerde online başvuru veya sınır kapısında alınan hızlı vizelerdir.",
    keywords: "E-vize başvurusu, hızlı vize",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Aile Birleşimi",
    description:
      "Yurt dışında yaşayan aile fertleriyle kalıcı yaşam için alınır.",
    keywords: "Aile birleşimi, uzun dönem vize",
  },
];

/* --- COMPONENT --- */
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.12),transparent_32%)]" />
        <div className="absolute inset-0">
          <Image
            src="/images/vize.jpg"
            alt="Vize türleri"
            fill
            priority
            className="object-cover opacity-45"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/75 to-white/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 ring-1 ring-slate-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-800">
                Aya Journey
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
              Vize Türleri ve Başvuru Süreçleri
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              Seyahat amacınız ne olursa olsun doğru vizeyi seçmek kritik. Aya Journey,
              kısa ve uzun dönem tüm kategorilerde strateji, evrak ve randevu desteği sunar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+903128701584"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-slate-900 text-white font-semibold shadow-lg shadow-blue-500/20 hover:translate-y-[1px] transition"
              >
                0312 870 15 84’ü Ara
              </a>
              <a
                href="https://wa.me/903128701584"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold ring-1 ring-emerald-200/60 hover:bg-emerald-600 transition"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp’tan Yaz
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="p-4 rounded-2xl bg-white/85 ring-1 ring-slate-200 backdrop-blur">
                <p className="text-sm text-emerald-700 font-semibold">
                  Kısa Dönem (C Tipi)
                </p>
                <p className="text-sm text-slate-700 mt-1">
                  90 güne kadar turistik, ticari, kültürel, sağlık amaçlı seyahatler.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/85 ring-1 ring-slate-200 backdrop-blur">
                <p className="text-sm text-indigo-700 font-semibold">
                  Uzun Dönem (D Tipi)
                </p>
                <p className="text-sm text-slate-700 mt-1">
                  Eğitim, çalışma, aile birleşimi gibi kalıcı/uzun süreli kalışlar.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/18 via-emerald-400/16 to-indigo-500/16 blur-3xl" />
            <div className="relative p-6 rounded-3xl bg-white/90 ring-1 ring-slate-200 backdrop-blur space-y-4 shadow-2xl shadow-blue-500/10">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-2xl">
                  🗺️
                </div>
                <div>
                  <p className="text-sm text-slate-700">Aya Journey Yol Haritası</p>
                  <p className="text-base font-semibold text-slate-900">
                    4 adımda doğru vizeyi seçin
                  </p>
                </div>
              </div>
              {[
                "1) Seyahat amacını belirle, kısa/uzun dönem seç",
                "2) Evrak listesi ve randevu takvimi oluştur",
                "3) Başvuru, mülakat ve ek belge yönetimi",
                "4) Onay sonrası seyahat/oturum hazırlığı",
              ].map((step) => (
                <div
                  key={step}
                  className="flex items-start gap-3 text-sm text-slate-800"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <p>{step}</p>
                </div>
              ))}
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-700">Ücretsiz ön görüşme</div>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900 text-xs font-semibold text-white">
                  Hazırız
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHORT VISA SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-emerald-600">Kısa Dönem</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              90 güne kadar popüler vizeler
            </h2>
            <p className="text-slate-600 mt-2">
              Turistik, ticari veya aktarmalı seyahatler için en sık başvurulan türler.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 ring-1 ring-slate-200 text-xs text-slate-700">
            Hızlı randevu planı
          </span>
        </header>

        <div className="grid gap-4 md:grid-cols-3 mt-8">
          {shortVisas.map((v) => (
            <article
              key={v.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/95 backdrop-blur p-6 shadow-lg shadow-slate-200 transition hover:-translate-y-1 hover:shadow-emerald-200/70"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/60 to-emerald-50" />
              <div className="relative">
                {/* <div className="text-3xl">{v.icon}</div> */}
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  {v.description}
                </p>
                <p className="mt-3 inline-flex px-2 py-1 rounded-lg text-[11px] font-semibold bg-emerald-100 text-emerald-700 ring-1 ring-emerald-300/60">
                  {v.keywords}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LONG VISA SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-indigo-600">Uzun Dönem</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Eğitim, çalışma ve yerleşim vizeleri
            </h2>
            <p className="text-slate-600 mt-2">
              Kalıcı veya uzun süreli kalışlar için gereken temel şartlar.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 ring-1 ring-slate-200 text-xs text-slate-700">
            Strateji + Evrak + Takip
          </span>
        </header>

        <div className="grid gap-4 md:grid-cols-2 mt-8">
          {longVisas.map((v) => (
            <article
              key={v.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/95 backdrop-blur p-6 shadow-lg shadow-slate-200 transition hover:-translate-y-1 hover:shadow-indigo-200/70"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/60 to-indigo-50" />
              <div className="relative">
                {/* <div className="text-3xl">{v.icon}</div> */}
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  {v.description}
                </p>
                <p className="mt-3 inline-flex px-2 py-1 rounded-lg text-[11px] font-semibold bg-indigo-100 text-indigo-700 ring-1 ring-indigo-300/60">
                  {v.keywords}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-2xl shadow-slate-200">
          <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.14),transparent_32%)]" />
          <div className="relative p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-700">Başvuru Akışı</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Başvuru Süreçleri
              </h2>
              <p className="text-slate-700 max-w-3xl">
                Her ülke farklı politika uygular. Doğru evrak, doğru planlama ve doğru kategori
                süreci hızlandırır. Randevu, mülakat ve ek belge yönetimini bizimle planlayın.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Başvuru Kanalları",
                  desc: "Elçilik, aracı yetkili firma veya online platformlar.",
                },
                {
                  title: "Belgeler & Randevu",
                  desc: "Formlar, davetiyeler, gelir/konaklama kanıtları ve randevu planı.",
                },
                {
                  title: "Aya Journey Desteği",
                  desc: "Evrak kontrolü, başvuru, mülakat ve takipte uçtan uca destek.",
                },
              ].map((box) => (
                <div
                  key={box.title}
                  className="p-5 rounded-2xl bg-white/85 border border-slate-200"
                >
                  <h4 className="font-semibold text-slate-900">{box.title}</h4>
                  <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                    {box.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <p className="text-slate-900 font-semibold">
                Aya Journey, kısa veya uzun dönem tüm vize süreçlerinizde yanınızda.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                        <Link href="/randevu">
              <button className="bg-white text-blue-600 cursor-pointer px-6 py-3 rounded-xl font-semibold shadow-lg hover:-translate-y-0.5 transition">
                Randevu Al
              </button>
            </Link>
                <a
                  href="tel:+903128701584"
                  className="inline-flex px-4 py-2.5 rounded-xl bg-slate-900 text-white font-semibold shadow-lg shadow-blue-500/20 hover:translate-y-[1px] transition"
                >
                  Hemen Ara
                </a>
                <a
                  href="https://wa.me/903128701584"
                  className="inline-flex px-4 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold ring-1 ring-emerald-200/60 hover:bg-emerald-600 transition"
                  target="_blank"
                  rel="noreferrer"
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
