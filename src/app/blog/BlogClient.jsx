"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function formatTR(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric" });
  } catch {
    return "";
  }
}

export default function BlogClient({ posts, categories }) {
  const [activeCat, setActiveCat] = useState("Tümü");

  const featured = useMemo(() => posts.find((p) => p.featured) || posts[0], [posts]);

  const filtered = useMemo(() => {
    const list = activeCat === "Tümü" ? posts : posts.filter((p) => p.category === activeCat);
    // En yeni üstte
    return [...list].sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO));
  }, [posts, activeCat]);

  const rest = useMemo(() => filtered.filter((p) => p.slug !== featured?.slug), [filtered, featured]);

  const leftGrid = rest.slice(0, 6);
  const rightGrid = rest.slice(6, 10);

  return (
    <main className="max-w-[1320px] mx-auto px-4 py-10">
      {/* Top heading */}
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Yazılarımız
        </h1>
        <p className="text-slate-600 max-w-3xl">
          Vize, yurt dışı eğitim ve seyahat süreçleriyle ilgili pratik rehberler. En güncel içerikler, net adımlar, hızlı sonuç.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* ================= LEFT – CATEGORIES ================= */}
        <aside className="col-span-12 md:col-span-2">
          <div className="md:sticky md:top-28">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Kategoriler
                </h3>
                <span className="text-xs text-slate-400">{activeCat}</span>
              </div>

              <div className="mt-3 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-1">
                {categories.map((cat) => {
                  const isActive = cat === activeCat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCat(cat)}
                      className={cn(
                        "whitespace-nowrap md:whitespace-normal text-sm font-semibold rounded-xl px-3 py-2 transition",
                        "border",
                        isActive
                          ? "bg-slate-900 border-slate-900 text-white"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      )}
                      aria-pressed={isActive}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 text-xs text-slate-500 leading-relaxed">
                Kategori seçerek içerikleri filtreleyebilirsiniz.
              </div>
            </div>
          </div>
        </aside>

        {/* ================= RIGHT – CONTENT ================= */}
        <section className="col-span-12 md:col-span-10 space-y-10">
          {/* ===== HERO (Featured) ===== */}
          {featured && (
            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-[260px] sm:h-[320px] w-full">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 75vw, 900px"
                  className="object-cover"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute left-5 bottom-5 right-5 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-900">
                      En Yeni Yazı
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white border border-white/30">
                      {featured.category}
                    </span>
                    <time className="ml-auto text-xs text-white/90">
                      {formatTR(featured.dateISO)}
                    </time>
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    {featured.title}
                  </h2>

                  <p className="text-sm sm:text-base text-white/90 max-w-3xl">
                    {featured.excerpt}
                  </p>

                  <div>
                    <Link
                      href={`/blog/${featured.slug}`}
                      className="inline-flex items-center justify-center rounded-2xl bg-white text-slate-900 px-5 py-2.5 text-sm font-extrabold shadow-sm hover:-translate-y-0.5 transition"
                    >
                      Detayı Oku →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* ===== GRID AREA ===== */}
          <div className="grid grid-cols-12 gap-8">
            {/* -------- LEFT GRID (8) -------- */}
            <div className="col-span-12 lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {leftGrid.map((p) => (
                <article
                  key={p.slug}
                  className="group rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-44 w-full">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 420px"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute left-4 top-4 flex items-center gap-2">
                      <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-900">
                        {p.category}
                      </span>
                      <time className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white border border-white/30">
                        {formatTR(p.dateISO)}
                      </time>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-lg font-extrabold text-slate-900 leading-snug line-clamp-2">
                      {p.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {p.excerpt}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/blog/${p.slug}`}
                        className="inline-flex items-center text-sm font-extrabold text-blue-600 hover:text-blue-700"
                      >
                        Detayı Oku →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* -------- RIGHT GRID (4) -------- */}
            <aside className="col-span-12 lg:col-span-4 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Önerilen Yazılar
                  </h3>
                  <span className="text-xs text-slate-500">{rightGrid.length}</span>
                </div>

                <div className="mt-4 space-y-3">
                  {rightGrid.map((p) => (
                    <article
                      key={p.slug}
                      className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-3 hover:bg-slate-50 transition"
                    >
                      <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          sizes="96px"
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                        />
                      </div>

                      <div className="flex flex-col justify-between min-w-0">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
                              {p.category}
                            </span>
                            <span className="text-[11px] text-slate-400">•</span>
                            <time className="text-[11px] text-slate-500">
                              {formatTR(p.dateISO)}
                            </time>
                          </div>

                          <h4 className="mt-1 text-sm font-extrabold text-slate-900 leading-snug line-clamp-2">
                            {p.title}
                          </h4>

                          <p className="mt-1 text-xs text-slate-600 leading-relaxed line-clamp-2">
                            {p.excerpt}
                          </p>
                        </div>

                        <div className="pt-2">
                          <Link
                            href={`/blog/${p.slug}`}
                            className="text-xs font-extrabold text-blue-600 hover:text-blue-700"
                          >
                            Detayı Oku →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}

                  {rightGrid.length === 0 && (
                    <div className="text-sm text-slate-600">
                      Bu kategoride öneri bulunamadı.
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Card */}
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
                <h4 className="text-lg font-extrabold text-slate-900">
                  Vize dosyanı güçlendirelim
                </h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Profilini hızlıca analiz edip doğru stratejiyi çıkaralım. İstersen randevu al, istersen WhatsApp’tan yaz.
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href="/randevu"
                    className="text-center rounded-2xl bg-slate-900 text-white px-4 py-3 text-sm font-extrabold hover:-translate-y-0.5 transition"
                  >
                    Randevu Al
                  </Link>

                  <a
                    href="https://wa.me/905302199056"
                    target="_blank"
                    rel="noreferrer"
                    className="text-center rounded-2xl bg-emerald-500 text-white px-4 py-3 text-sm font-extrabold hover:-translate-y-0.5 transition"
                  >
                    WhatsApp’tan Yaz
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
