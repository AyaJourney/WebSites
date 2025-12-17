"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function VisaTips() {
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
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-700">
            Vize Rehberi
          </span>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Vize Almak İçin
            <span className="text-blue-600"> En Önemli Tüyolar</span>
          </h1>

          <p className="text-lg text-slate-700 max-w-3xl">
            Vize almak sanıldığı kadar zor değildir. En önemli unsur tutarlılık,
            doğru anlatım ve ikna edici bir dosyadır.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section
        ref={register}
        className="max-w-5xl mx-auto px-6 py-16 edu-fade-up space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold">
          Vize değerlendirmesinin temel mantığı
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed">
          Vize süreci, başvuru yapılan ülkeye kalıcı olmayacağınıza dair güven
          vermeye dayanır. Bu güven; ülkenizle olan bağlarınızı tutarlı, belgeli
          ve mantıklı şekilde sunmanızla oluşur.
        </p>
      </section>

      {/* CONTENT CARDS */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Mesleki ve Mali Tutarlılık",
            text: "Düzenli iş, istikrarlı gelir ve belgelerle desteklenen bir yaşam profili vize açısından en güçlü unsurlardır.",
          },
          {
            title: "Banka Hesabı ve Birikimler",
            text: "Yüksek bakiyeler değil, zamana yayılmış ve kaynağı belli birikimler güven verir.",
          },
          {
            title: "Aile ve Sosyal Bağlar",
            text: "Ailenizin ülkenizde olması, özellikle çocuklar, geri dönüş niyetinizi güçlendirir.",
          },
        ].map((item, i) => (
          <div
            key={i}
            ref={register}
            className="p-6 rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200 edu-fade-up hover:-translate-y-1 transition"
          >
            <h3 className="font-semibold text-lg text-slate-900">
              {item.title}
            </h3>
            <p className="text-sm text-slate-700 mt-2 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </section>

      {/* DETAIL SECTION */}
      <section
        ref={register}
        className="max-w-5xl mx-auto px-6 pb-20 edu-fade-up space-y-6"
      >
        <p className="text-slate-700 leading-relaxed">
          Kariyer geçmişinizde boşluklar bulunmaması büyük önem taşır. SGK
          dökümleri yalnızca son 3 ayı değil, geçmiş çalışma hayatınızı da
          yansıtır. Bu nedenle kısa süreli kayıtlarla yapılan başvurular risk
          oluşturabilir.
        </p>

        <p className="text-slate-700 leading-relaxed">
          Sunulan tüm evraklar birbiriyle uyumlu olmalı ve tek bir hikâye
          anlatmalıdır. Uçuşlar, konaklama, izin yazıları ve tarihler çelişki
          içermemelidir.
        </p>

        <p className="text-slate-700 leading-relaxed">
          Niyet mektubu; ülkenize olan bağlarınızı, sorumluluklarınızı ve geri
          dönüş nedenlerinizi net şekilde ifade etmeniz gereken en önemli
          belgedir.
        </p>
      </section>

      {/* HIGHLIGHT */}
      <section
        ref={register}
        className="max-w-5xl mx-auto px-6 pb-20 edu-fade-up"
      >
        <div className="rounded-3xl bg-blue-50 border border-blue-200 p-8 space-y-4">
          <h2 className="text-2xl font-bold text-blue-800">
            Unutulmaması Gerekenler
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-slate-800 text-sm">
            <li>✔️ Gerçekçi seyahat süresi</li>
            <li>✔️ Tutarlı mülakat cevapları</li>
            <li>✔️ Geçmiş seyahatlerin avantaja çevrilmesi</li>
            <li>✔️ Ret sonrası doğru strateji</li>
          </ul>
        </div>
      </section>

      {/* CTA – AYNI FORMAT */}
      <section
        ref={register}
        className="max-w-6xl mx-auto px-6 pb-24 edu-fade-up"
      >
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-2xl shadow-slate-200">
          <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.14),transparent_32%)]" />

          <div className="relative p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-700">
                Vize Danışmanlığı
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Doğru dosya, doğru anlatım, doğru sonuç.
              </h2>
              <p className="text-slate-700 max-w-3xl">
                Vize sürecinizi profesyonel şekilde yönetmek, başarı oranını ciddi
                ölçüde artırır. Aya Journey tüm aşamalarda yanınızda.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Dosya & Evrak Kontrolü",
                  desc: "Tüm belgelerin tutarlılık ve uygunluk kontrolü.",
                },
                {
                  title: "Niyet Mektubu & Strateji",
                  desc: "Geri dönüş niyetinizi güçlü şekilde anlatan metinler.",
                },
                {
                  title: "Aya Journey Desteği",
                  desc: "Başvurudan mülakata kadar uçtan uca danışmanlık.",
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
                Aya Journey, vize sürecinizi güvenle yönetir.
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
                  href="https://wa.me/905302199056"
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
