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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%)]" />

        <div className="absolute inset-0">
          <Image
            src="/images/6.jpg"
            alt="Yurt Dışı Sağlık Sigortası"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Yurt Dışında Sağlık Sigortası Neden Gerekli?
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-4xl leading-relaxed">
            Yurt dışı seyahatlerinde en önemli gerekliliklerden biri seyahat sağlık
            sigortasıdır. Özellikle Schengen vizesi başvurularında zorunlu olan bu
            sigorta, seyahat süresince karşılaşabileceğiniz sağlık sorunlarını,
            acil durumları ve vefat halinde cenaze işlemlerini kapsayarak hem sizi
            hem de ziyaret ettiğiniz ülkeyi güvence altına alır.
          </p>
        </div>
      </section>

      {/* INFO CARDS */}
      <section
        ref={register}
        className="visa-fade-up max-w-6xl mx-auto px-6 py-16"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Neden Zorunlu Tutuluyor?
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Üye devletler, kendi sağlık sistemleri üzerindeki ekonomik yükü
              azaltmak ve turistlerin mağduriyet yaşamamasını sağlamak amacıyla bu
              sigortayı zorunlu kılar. Nitekim yalnızca 2024 yılında Avrupa Birliği
              ülkeleri toplamda yaklaşık 758 milyon turist ağırlamıştır. Bu kadar
              yüksek bir ziyaretçi trafiğinde sağlık giderlerinin bireysel ya da
              ulusal düzeyde karşılanması ciddi maliyetler doğurabilir. Bu nedenle
              seyahat sağlık sigortası hem turistler hem de ülkeler için temel bir
              gereklilik hâline gelmiştir.
            </p>
          </div>

          <div className="rounded-3xl bg-emerald-50 border border-emerald-200 p-8">
            <h2 className="text-xl font-bold mb-4">
              Vizesiz Ülkelerde de Güvence
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Pek çok kişi yalnızca vize zorunluluğu olan ülkelerde sigortaya
              ihtiyaç duyulduğunu düşünse de, vizesiz gidilen ülkelerde bile
              seyahat sigortası yaptırmak büyük bir güvence sağlar. Beklenmedik bir
              sağlık problemi, bagaj kaybı, kazalar veya diğer acil durumlarda
              masraflar oldukça yüksek olabilir.
            </p>
          </div>
        </div>
      </section>

      {/* SCHENGEN COVERAGE */}
      <section
        ref={register}
        className="visa-fade-up max-w-6xl mx-auto px-6 pb-16"
      >
        <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Schengen Seyahat Sağlık Sigortası Neleri Kapsar?
          </h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            Schengen bölgesi için yaptırılan sigortalar genellikle en az 30.000 Euro
            teminat limitine sahiptir ve özellikle acil durumlarda oluşabilecek
            sağlık giderlerini karşılamak için hazırlanır. Bununla birlikte birçok
            sigorta şirketi çok daha geniş kapsamlı paketler de sunabilir.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Acil tıbbi yardım",
              "Hastane tedavi giderleri",
              "Acil tıbbi tahliye",
              "Vefat durumunda cenaze nakli",
              "Bagaj kaybı ve hasarı",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 p-4 bg-slate-50"
              >
                <p className="font-semibold text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USA */}
      <section
        ref={register}
        className="visa-fade-up max-w-6xl mx-auto px-6 pb-16"
      >
        <div className="rounded-3xl bg-indigo-50 border border-indigo-200 p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ABD ve Diğer Ülkelerde Seyahat Sağlık Sigortası Zorunluluğu
          </h2>

          <p className="text-slate-700 leading-relaxed">
            Her ne kadar birçok ülke Schengen kadar katı bir sigorta zorunluluğu
            uygulamasa da, ABD gibi ülkelerde bazı vize kategorilerinde sigorta
            gereklilikleri bulunmaktadır. Özellikle J-1 Exchange Visitor
            (öğrenci/değişim programı) vizelerinde uzun süreli ve kapsamlı bir
            sağlık sigortası zorunludur. Bu sigortalar, standart seyahat sağlık
            sigortalarından daha geniş kapsam taşır.
          </p>
        </div>
      </section>

      {/* AYA JOURNEY */}
      <section
        ref={register}
        className="visa-fade-up max-w-6xl mx-auto px-6 pb-24"
      >
        <div className="rounded-3xl bg-slate-900 text-white p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Aya Journey Güvencesi ile Sorunsuz Seyahat
          </h2>

          <p className="text-white/90 leading-relaxed mb-6">
            Seyahatinizin keyfini çıkarabilmeniz ve riskleri en aza indirebilmeniz
            için, ister vizeli ister vizesiz tüm yurt dışı yolculuklarınızda Aya
            Journey olarak seyahat sağlık sigortası yaptırmanızı tavsiye ediyoruz.
            Doğru poliçe seçimi, kapsamlı teminatlar ve hızlı işlem süreçleri ile
            güvenli bir seyahat planlamanıza yardımcı oluyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/randevu">
              <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold">
                Randevu Al
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
