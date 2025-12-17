"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const animatedRefs = useRef([]);

  useEffect(() => {
    animatedRefs.current = animatedRefs.current.filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visa-show");
          }
        });
      },
      { threshold: 0.15 }
    );

    animatedRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const register = (el) => el && animatedRefs.current.push(el);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section
        ref={register}
        className="visa-fade-up relative isolate w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.12),transparent_30%)]" />

        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Vize Reddi Durumunda Ne Yapmalı?
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-4xl leading-relaxed">
            Vize başvurularında en önemli konulardan biri, hiçbir ülke için vize
            garantisi verilemeyeceğinin bilinmesidir. Şirketimiz dahil olmak üzere
            hiçbir danışmanlık firması yasal olarak vize garantisi sunamaz. Bu
            nedenle vize garantisi verdiğini iddia eden kişi veya kurumlarla
            çalışmamak son derece önemlidir.
          </p>
        </div>
      </section>

      {/* INTRO CARDS */}
      <section
        ref={register}
        className="visa-fade-up max-w-6xl mx-auto px-6 py-16"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-lg">
            <p className="text-slate-700 leading-relaxed">
              Her ne kadar başvuru sahibinin profili çok güçlü görünse de, en sağlam
              dosyalar dahi vize reddi alabilir. Tam da bu noktada vize reddi, yeni
              bir başvuru için önemli bir rehber niteliği taşır. Çünkü reddin
              arkasındaki nedenler, sonraki başvurunun nasıl şekillendirilmesi
              gerektiğine ışık tutar.
            </p>
          </div>

          <div className="rounded-3xl bg-indigo-50 border border-indigo-200 p-8">
            <p className="text-slate-700 leading-relaxed">
              Bu durum, vize reddinin kişiye özel ve her zaman net açıklamalar
              içermeyen bir süreç olduğunu göstermektedir.
            </p>
          </div>
        </div>
      </section>

      {/* COUNTRY EXPLANATIONS */}
      <section
        ref={register}
        className="visa-fade-up max-w-6xl mx-auto px-6 pb-16"
      >
        <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ülkeler Vize Reddini Nasıl Açıklar?
          </h2>

          <div className="space-y-4">
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
              <p className="font-semibold">Birleşik Krallık</p>
              <p className="text-slate-700 mt-1">
                Genellikle detaylı ve sohbet tarzında yazılmış bir ret mektubu
                sunarak hangi hususların eksik veya yetersiz olduğunu açıkça
                belirtir.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
              <p className="font-semibold">Amerika Birleşik Devletleri</p>
              <p className="text-slate-700 mt-1">
                Çoğu zaman yalnızca 214(b) maddesi kapsamında reddedildiğinizi
                belirten kısa bir belge verir.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
              <p className="font-semibold">Schengen Ülkeleri</p>
              <p className="text-slate-700 mt-1">
                Standart bir form üzerinden, genel ret maddelerinden size uygun
                olanları işaretler. Özellikle meşhur “10. madde” reddinin gerekçesi
                çoğu zaman net biçimde anlaşılamaz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOT THE END */}
      <section
        ref={register}
        className="visa-fade-up max-w-6xl mx-auto px-6 pb-16"
      >
        <div className="rounded-3xl bg-emerald-50 border border-emerald-200 p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Vize Reddi Dünyanın Sonu Değildir
          </h2>

          <p className="text-slate-700 leading-relaxed mb-4">
            Vize reddi, herkesin başına gelebilecek ve doğru analiz edildiğinde
            ciddi avantajlar sunan bir süreçtir. Çoğu zaman reddin nedeni:
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 list-disc pl-6 text-slate-700">
            <li>Ekonomik yetersizlik</li>
            <li>Eksik veya güncel olmayan evrak</li>
            <li>Göçmenlik niyeti şüphesi</li>
          </ul>
        </div>
      </section>

      {/* ROADMAP */}
      <section
        ref={register}
        className="visa-fade-up max-w-6xl mx-auto px-6 pb-16"
      >
        <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            En Kritik Soru: “Son Başvurudan Sonra Ne Değişti?”
          </h2>

          <p className="text-slate-700 leading-relaxed mb-4">
            Yeni bir vize başvurusunda her zaman şu soru sorulmalıdır:
          </p>

          <p className="italic font-semibold mb-4">
            “Son başvurumdan bu yana ne değişti?”
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 list-disc pl-6 text-slate-700">
            <li>Rezervasyon yapılan otelin satın alınması</li>
            <li>Daha güçlü mali belgeler sunulması</li>
            <li>Yeni yurt dışı seyahat geçmişi oluşturulması</li>
            <li>Evrakların güncel ve eksiksiz hâle getirilmesi</li>
          </ul>
        </div>
      </section>

      {/* AYA JOURNEY */}
      <section
        ref={register}
        className="visa-fade-up max-w-6xl mx-auto px-6 pb-24"
      >
        <div className="rounded-3xl bg-slate-900 text-white p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Aya Journey ile Vize Reddi Analizi
          </h2>

          <p className="text-white/90 leading-relaxed mb-4">
            Eğer vize reddi aldıysanız ve yolunuz Aya Journey ile kesiştiyse,
            başvurunuzun tüm detayları titizlikle incelenir. Süreç en baştan ele
            alınır, olası ret sebepleri belirlenir ve hangi unsurların
            düzeltilebilir olduğu analiz edilir.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            Bu değerlendirme ücretsiz olarak yapılır. Böylece vize reddinizin
            arka planını daha net anlayabilir, farklı bir bakış açısı kazanabilir
            ve yeni başvurunuzu Aya Journey’in deneyimli ekibine güvenle teslim
            edebilirsiniz.
          </p>

          <p className="font-semibold mb-6">
            Aya Journey danışmanlığı ile vize başvurusu yapıp red almanız
            durumunda, ikinci başvurunuz için danışmanlık ücreti alınmaz.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/randevu">
              <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold">
                Ücretsiz Analiz Al
              </button>
            </Link>
            <a
              href="https://wa.me/903128701584"
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
