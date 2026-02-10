"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import Image from "next/image";
import BlogImage from "./help/BlogImage";
/* ================= UTILS ================= */
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/* ================= PAGE ================= */
export default function BlogPage() {
 
  const [posts, setPosts] = useState([]);
  const [activeCat, setActiveCat] = useState("Tümü");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res?.json())
      .then((data) => {
        const normalized = (data || [])?.map((b) => ({
          slug: b.slug,
          title: b.title,
          excerpt: b.summary,
          image: b.image_url,
          category: b.category || "Genel",
          featured: b.is_featured,
          dateISO: b.created_at,
        }));
        setPosts(normalized);
        setLoading(false);
      });
  }, []);

const categories = useMemo(() => {
  const map = new Map();

  posts.forEach((p) => {
    if (!p.category) return;

    const normalized = p.category.trim().toLowerCase();

    if (!map.has(normalized)) {
      map.set(normalized, p.category.trim());
    }
  });

  return ["Tümü", ...Array.from(map.values())];
}, [posts]);


  const featured = useMemo(() => {
    return posts
      .filter((p) => p.featured)
      .sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO))[0];
  }, [posts]);

  const filtered = useMemo(() => {
    const list =
      activeCat === "Tümü"
        ? posts
        : posts.filter((p) => p.category === activeCat);

    return list
      .filter((p) => p.slug !== featured?.slug)
      .sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO));
  }, [posts, activeCat, featured]);

  const recommended = posts.filter((p) => p.featured).slice(0, 3);

  if (loading) {
    return (
      <div className="py-32 text-center text-slate-500">
        Bloglar yükleniyor...
      </div>
    );
  }

  return (
   <main className="max-w-330 mx-auto px-4 py-10 bg-slate-50 overflow-x-hidden">

      {/* HEADER */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Yazılarımız
        </h1>
        <p className="mt-2 max-w-3xl text-slate-600">
          Vize, yurt dışı eğitim ve seyahat süreçleriyle ilgili rehberler.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">

        {/* ================= LEFT SIDEBAR ================= */}
<aside className="col-span-12 lg:col-span-3 space-y-6">
  <div className="px-0 sm:px-2 lg:px-0 space-y-6">
     <div className="rounded-3xl border bg-white p-5">
  <h3 className="text-xs font-bold uppercase text-slate-500 mb-4">
    Kategoriler
  </h3>

  <div className="flex flex-col gap-2">
    {categories.map((cat) => {
      const isActive = cat === activeCat;

      return (
        <button
          key={cat}
          onClick={() => setActiveCat(cat)}
          className={cn(
            "w-full text-left rounded-xl px-4 py-2 text-sm font-semibold border transition",
            isActive
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
          )}
        >
          {cat}
        </button>
      );
    })}
  </div>
</div>


          {/* Recommended */}
          <div className="rounded-3xl border bg-white p-5">
            <h3 className="text-sm font-extrabold mb-4 text-slate-900">
              Önerilen Yazılar
            </h3>

            <div className="space-y-3">
              {recommended.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block rounded-xl border border-slate-200 p-3 hover:bg-slate-50 transition"
                >
                  <h4 className="text-sm font-bold text-slate-900 line-clamp-2">
                    {p.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-3xl border bg-white p-6">
            <h4 className="text-lg font-extrabold text-slate-900">
              Vize dosyanı güçlendirelim
            </h4>
            <p className="mt-2 text-sm text-slate-600">
              Profilini analiz edelim, doğru stratejiyi çıkaralım.
            </p>

            <div className="mt-4 space-y-2">
              <Link
                href="/randevu"
                className="block rounded-2xl bg-slate-900 text-white py-3 text-center text-sm font-extrabold"
              >
                Randevu Al
              </Link>

              <a
                href="https://wa.me/905302199056"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl bg-emerald-500 text-white py-3 text-center text-sm font-extrabold"
              >
                WhatsApp’tan Yaz
              </a>
            </div>
          </div>
  </div>
          {/* Categories */}
      
        </aside>

        {/* ================= RIGHT CONTENT ================= */}
        <section className="col-span-12 lg:col-span-9 space-y-10">
          {/* FEATURED */}
{featured && (
  <Link
    href={`/blog/${featured.slug}`}
    className="group relative block overflow-hidden rounded-[28px]"
  >
    {/* IMAGE */}
<div className="relative h-65 sm:h-80 lg:h-155 bg-slate-100 overflow-hidden rounded-xl">
  <Image
    src={featured.image || "/images/icon.png"}
    alt={featured.title || "Öne çıkan görsel"}
    fill
    priority={true} // Sayfa açılır açılmaz yüklenmesi için (LCP dostu)
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    className="object-cover object-center transition duration-700 hover:scale-105"
  />
</div>

    {/* BLUR + CONTENT AREA */}
    <div className="absolute bottom-0 left-0 right-0">
      {/* gradient geçiş */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

      {/* blur alan */}
  <div className="relative p-4 sm:p-6 lg:p-8 backdrop-blur-xs bg-black/10">

     <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6">

          {/* SOL TARAF */}
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
              {featured.title}
            </h2>

            <p className="mt-2 text-sm text-white/85 line-clamp-2">
              {featured.excerpt}
            </p>

            <span className="mt-3 block text-xs text-white/70">
              {new Date(featured.dateISO).toLocaleDateString("tr-TR")}
            </span>
          </div>

          {/* SAĞ ALT */}
<div className="flex flex-nowrap items-center gap-2">
  <span className="flex items-center justify-center h-7 rounded-full bg-white/20 px-3 text-xs font-semibold text-white backdrop-blur whitespace-nowrap">
    {featured.category}
  </span>

  <span className="flex items-center justify-center h-7 rounded-full bg-white/20 px-3 text-xs font-semibold text-white backdrop-blur whitespace-nowrap">
    En Yeni
  </span>

  <span className="ml-1 text-lg text-white/80 shrink-0">↗</span>
</div>


        </div>
      </div>
    </div>
  </Link>
)}




          {/* GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-x-8 lg:gap-y-12">

  {filtered.map((p) => (
  <article
  key={p.slug}
  className="group p-3 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
>
      {/* IMAGE */}
      <Link
        href={`/blog/${p.slug}`}
        className="block overflow-hidden rounded-2xl"
      >
        <BlogImage p={p} />


      </Link>

      {/* CONTENT */}
      <div className="mt-4">
        {/* CATEGORY */}
        <span className="text-xs font-semibold text-orange-500">
          {p.category}
        </span>

        {/* TITLE */}
        <h3 className="mt-1 text-lg font-extrabold leading-snug line-clamp-2">
          {p.title}
        </h3>

        {/* EXCERPT */}
        <p className="mt-2 text-sm text-slate-600 line-clamp-3">
          {p.excerpt}
        </p>

        {/* META */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
          <span>
            {new Date(p.dateISO).toLocaleDateString("tr-TR")}
          </span>

          <Link
            href={`/blog/${p.slug}`}
            className="flex items-center gap-1 font-semibold text-orange-500 hover:underline"
          >
            Detay oku
            <span>→</span>
          </Link>
        </div>
      </div>
    </article>
  ))}
</div>


        </section>
      </div>

    </main>
  );
}
