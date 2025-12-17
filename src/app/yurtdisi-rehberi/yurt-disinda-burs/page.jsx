"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function ScholarshipsAbroad() {
  const animRefs = useRef([]);

  useEffect(() => {
    animRefs.current = animRefs.current.filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("edu-show");
          }
        });
      },
      { threshold: 0.15 }
    );

    animRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const register = (el) => {
    if (el && !animRefs.current.includes(el)) {
      animRefs.current.push(el);
    }
  };

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section
        ref={register}
        className="relative overflow-hidden px-6 pt-28 pb-20 edu-scale-in"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.14),transparent_30%)]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-700">
            Yurtdışı Eğitim Bursları
          </span>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Yurt Dışında Eğitim Almak İçin Burs Olanakları
          </h1>

          <p className="text-lg text-slate-700 max-w-4xl leading-relaxed">
            Yurt dışında eğitim almak için burs arayışında Amerika, İngiltere,
            Almanya, Fransa ve İtalya'nın her birinin kendine has bir burs
            ekosistemi vardır.
          </p>

          <p className="text-slate-700 max-w-4xl">
            Finans sektöründen özel burslar genellikle <strong>Master</strong> ve{" "}
            <strong>MBA</strong> seviyesindeki öğrencilere odaklanırken, lisans
            seviyesinde daha çok üniversite ve devlet bursları ön plana çıkar.
          </p>
        </div>
      </section>

      {/* COUNTRY CARDS */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-6">
        {/* USA */}
        <div
          ref={register}
          className="p-6 rounded-2xl border border-slate-200 bg-white shadow-lg edu-fade-up"
        >
          <h3 className="text-xl font-bold mb-3">Amerika Birleşik Devletleri</h3>
          <p className="text-sm text-slate-700 mb-2">
            ABD'de burslar büyük oranda üniversitelerin kendi bütçelerinden
            (Merit-based) veya vakıflardan gelir.
          </p>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
            <li>
              <strong>Fulbright:</strong> En prestijli devlet destekli burs
              programıdır.
            </li>
            <li>
              <strong>MPOWER Financing:</strong> Uluslararası öğrencilere hem kredi
              hem de burs (Global Citizen Scholarship gibi) sağlar.
            </li>
            <li>
              <strong>Prodigy Finance:</strong> Teminatsız öğrenci kredileri ve
              zaman zaman burs/indirim imkanı sunar.
            </li>
            <li>
              Büyük bankalar (Goldman Sachs, Morgan Stanley) genellikle bursu
              “Diversity Internship” programları kapsamında verir.
            </li>
          </ul>
        </div>

        {/* UK */}
        <div
          ref={register}
          className="p-6 rounded-2xl border border-slate-200 bg-white shadow-lg edu-fade-up"
        >
          <h3 className="text-xl font-bold mb-3">
            İngiltere (Birleşik Krallık)
          </h3>
          <p className="text-sm text-slate-700 mb-2">
            İngiltere'de burslar oldukça rekabetçidir ve genellikle yüksek lisans
            odaklıdır.
          </p>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
            <li>
              <strong>Chevening:</strong> İngiliz hükümetinin tam kapsamlı bursudur.
            </li>
            <li>
              <strong>Great Scholarships:</strong> Üniversitelerle ortak 10.000
              Sterlinlik burslar.
            </li>
            <li>
              British Council ve yatırım bankaları, azınlık gruplar ve kadınlar
              için özel burslar açabilir.
            </li>
          </ul>
        </div>

        {/* Germany */}
        <div
          ref={register}
          className="p-6 rounded-2xl border border-slate-200 bg-white shadow-lg edu-fade-up"
        >
          <h3 className="text-xl font-bold mb-3">Almanya</h3>
          <p className="text-sm text-slate-700 mb-2">
            Almanya'da eğitim çoğu eyalette ücretsiz olduğu için burslar daha çok
            yaşam giderlerini karşılamaya yöneliktir.
          </p>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
            <li>
              <strong>DAAD:</strong> Almanya'nın en büyük akademik değişim servisidir.
            </li>
            <li>
              <strong>Siyasi Vakıflar:</strong> Friedrich Ebert, Konrad Adenauer,
              Heinrich Böll.
            </li>
            <li>
              <strong>Deutschlandstipendium:</strong> Aylık yaklaşık 300 Euro
              başarı bursu.
            </li>
          </ul>
        </div>

        {/* Italy */}
        <div
          ref={register}
          className="p-6 rounded-2xl border border-slate-200 bg-white shadow-lg edu-fade-up"
        >
          <h3 className="text-xl font-bold mb-3">İtalya</h3>
          <p className="text-sm text-slate-700 mb-2">
            İtalya'da burslar genellikle gelir düzeyine (DSU Bursu) göre verilir ve
            birçok eyalette Türk öğrenciler otomatik olarak bu kapsama girer.
          </p>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
            <li>
              <strong>Invest Your Talent in Italy:</strong> Mühendislik, tasarım ve
              işletme alanlarında destek sağlar.
            </li>
            <li>
              <strong>Intesa Sanpaolo & UniCredit:</strong> Üstün başarılı
              öğrenciler için düşük faizli onur kredileri.
            </li>
          </ul>
        </div>

        {/* France */}
        <div
          ref={register}
          className="p-6 rounded-2xl border border-slate-200 bg-white shadow-lg edu-fade-up md:col-span-2"
        >
          <h3 className="text-xl font-bold mb-3">Fransa</h3>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
            <li>
              <strong>Eiffel Bursu:</strong> Yüksek lisans ve doktora öğrencilerine
              verilir.
            </li>
            <li>
              <strong>Émile-Boutmy:</strong> Sciences Po gibi prestijli okulların
              uluslararası burslarıdır.
            </li>
            <li>
              <strong>TEV – Fransa Büyükelçiliği:</strong> Türk öğrencilere özel
              ortak burs programı.
            </li>
          </ul>
        </div>
      </section>

      {/* INFO */}
      <section
        ref={register}
        className="max-w-5xl mx-auto px-6 pb-20 edu-fade-up"
      >
        <div className="rounded-3xl bg-emerald-50 border border-emerald-200 p-8">
          <p className="text-slate-800 leading-relaxed">
            Burs başvuruları genellikle eğitimin başlamasından <strong>8–12 ay
            önce</strong> kapanır. Finans şirketlerinden burs almanın en kolay
            yolu, o şirketin <strong>“University Relations”</strong> veya{" "}
            <strong>“Scholarships”</strong> sayfasını LinkedIn üzerinden takip
            etmek ya da üniversitelerin finans ofislerine danışmaktır.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={register}
        className="max-w-6xl mx-auto px-6 pb-24 edu-fade-up"
      >
        <div className="rounded-3xl bg-slate-900 text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-lg font-semibold">
            Size en uygun burs ve ülke planlamasını birlikte yapalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/randevu">
              <button className="bg-white cursor-pointer text-slate-900 px-6 py-3 rounded-xl font-semibold">
                Ücretsiz Danışmanlık
              </button>
            </Link>
            <a
              href="https://wa.me/905302199056"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-500 px-6 py-3 rounded-xl font-semibold"
            >
              WhatsApp’tan Yaz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
