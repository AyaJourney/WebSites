"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function GlobalCareer() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        <Image 
          src="/images/work.webp" 
          alt="Yurtdışında İş Bulma Rehberi" 
          fill 
          className="object-cover brightness-[80%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/55 to-white/15" />
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Yurtdışında İş Bulma Rehberi: <br />
            <span className="text-blue-600">Küresel Kariyerinize Giden Yol</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700">
            Yeteneklerinizi dünyaya açmak artık hayal değil. Doğru strateji, doğru hazırlık ve doğru yönlendirme ile global rekabetin bir adım önüne geçebilirsiniz.
          </p>
        </div>
      </section>

      {/* 3 ANA ÖZELLİK BLOĞU */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Güçlü CV Stratejisi",
            desc: "ATS uyumlu, global standartta CV ve portföy ile filtreleri ilk turda geçin.",
          },
          {
            title: "Doğru Platformlarda Görünün",
            desc: "LinkedIn, Indeed, Glassdoor’da profil optimizasyonu ve görünürlük.",
          },
          {
            title: "Ülke Bazlı Yol Haritası",
            desc: "Almanya’dan Kanada’ya, her ülke için ayrı strateji ve kaynaklar.",
          },
        ].map((card) => (
          <article
            key={card.title}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/95 backdrop-blur p-6 shadow-lg shadow-slate-200 transition hover:-translate-y-1 hover:shadow-emerald-200/60"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/60 to-emerald-50" />
            <div className="relative space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{card.desc}</p>
            </div>
          </article>
        ))}
      </section>

      {/* İÇERİK BÖLÜMÜ */}
      <section className="max-w-5xl mx-auto px-6 pb-12 space-y-12">
        <article className="space-y-4 p-6 rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-xl shadow-slate-200">
          <p className="text-sm font-semibold text-emerald-700">1. Altın Anahtarlar</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Güçlü CV ve dil hakimiyeti olmadan kapılar açılmaz
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Global şirketler önce ATS filtresini uygular, sonra işe alımcılar devreye girer.
            Temiz format, doğru anahtar kelimeler ve hedef ülkenin dilinde akıcı iletişim
            kritik. Mülakatlarda teknik terimlere hakimiyet ve akıcılık, teklif aşamasını
            belirler.
          </p>
        </article>

        <article className="space-y-4 p-6 rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-xl shadow-blue-200/50">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <p className="text-sm font-semibold text-blue-700">2. Global Platformlar</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            LinkedIn, Indeed, Glassdoor’da görünürlük
          </h2>
          <ul className="mt-2 space-y-2 text-slate-700 leading-relaxed">
            <li><strong>LinkedIn:</strong> Global ağ, “Open to Work”, işe alımcı görünürlüğü.</li>
            <li><strong>Indeed:</strong> Dünyanın en büyük iş arama motoru, ülke bazlı filtreler.</li>
            <li><strong>Glassdoor:</strong> Maaş analizleri, şirket yorumları, mülakat soruları.</li>
          </ul>
        </article>

        <article className="space-y-4 p-6 rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-xl shadow-indigo-200/60">
          <p className="text-sm font-semibold text-indigo-700">3. Yerel Odaklı</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Ülkelere özel kariyer siteleri ile rekabette öne geç
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { country: "Almanya", sites: "XING • StepStone" },
              { country: "ABD", sites: "Monster • Dice" },
              { country: "İngiltere", sites: "Reed • Totaljobs" },
              { country: "Kanada", sites: "JobBank (resmi hükümet sitesi)" },
            ].map((row) => (
              <div
                key={row.country}
                className="p-4 rounded-2xl bg-white/85 border border-slate-200"
              >
                <p className="text-sm font-semibold text-indigo-700">{row.country}</p>
                <p className="text-sm text-slate-700 mt-1">{row.sites}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="space-y-4 p-6 rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-xl shadow-emerald-200/60">
          <p className="text-sm font-semibold text-emerald-700">4. Bir sonraki adım</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            İş teklifi aldın mı? Çalışma izni ve vizeyi paralel planla
          </h2>
          <p className="text-slate-700 leading-relaxed">
            İş bulmak sürecin yarısı; diğer yarısı, teklifi yasal oturum iznine çevirmek.
            Aya Journey, evrak kontrolü, randevu ve takipte yanında. Hayal satan sahte
            ilanlar yerine gerçekçi strateji.
          </p>
        </article>
      </section>
            <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-2xl shadow-slate-200">
          <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.14),transparent_32%)]" />
          <div className="relative p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-700">Başvuru Akışı</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                 Uluslararası kariyerinize ilk adımı atın
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
                  className="inline-flex px-4 py-2.5 rounded-xl bg-slate-900 text-white font-semibold shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 transition"
                >
                  Hemen Ara
                </a>
                <a
                  href="https://wa.me/903128701584"
                  className="inline-flex px-4 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold ring-1 ring-emerald-200/60 hover:bg-emerald-600 hover:-translate-y-0.5 transition"
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
      {/* CTA BÖLÜMÜ */}
      {/* <section className="pb-16">
        <div className="relative overflow-hidden max-w-5xl mx-auto px-6 py-12 rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-2xl shadow-slate-200 text-center">
          <div className="absolute -inset-8 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.14),transparent_32%)]" />
          <div className="relative space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Uluslararası kariyerinize ilk adımı atın
            </h2>
            <p className="text-lg text-slate-700">
              Ücretsiz ön değerlendirme ile doğru ülke, doğru vize ve doğru stratejiyi birlikte belirleyelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+903128701584"
                className="inline-flex px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:translate-y-[1px] transition"
              >
                0312 870 15 84 – Şimdi Ara
              </a>
              <a
                href="https://wa.me/903128701584"
                className="inline-flex px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl ring-1 ring-emerald-200/60 hover:bg-emerald-600 transition"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp’tan Yaz
              </a>
            </div>
          </div>
        </div>
      </section> */}

    </main>
  );
}
