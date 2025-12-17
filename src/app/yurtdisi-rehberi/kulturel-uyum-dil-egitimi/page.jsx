"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function LanguageAbroad() {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.14),transparent_30%)]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700">
            Dil Eğitimi
          </span>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Dil Öğrenmek: Dünyaya Açılan İlk Kapı
          </h1>

          <p className="italic text-slate-600 text-lg">
            “Dilin sınırları, dünyanın sınırlarıdır.”
          </p>

          <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
            Dil öğrenmek, genç yaşlardan itibaren herkesin kurduğu ortak bir
            hayaldir. Bu hayal, doğru yönlendirme ve doğru lokasyon ile Aya Journey
            sayesinde gerçeğe dönüşebilir. Günümüzde daha bebeklikten itibaren
            yabancı dil öğrenmenin önemi vurgulanmakta; küreselleşen ekonomik ve
            sosyal yaşamda yabancı dil bilmek artık bir tercih değil, kaçınılmaz
            bir gereklilik hâline gelmiştir.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/randevu"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold shadow-lg hover:-translate-y-0.5 transition"
            >
              Ücretsiz Ön Görüşme
            </Link>
            <a
              href="https://wa.me/905302199056"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
            >
              WhatsApp’tan Yaz
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section
        ref={register}
        className="max-w-5xl mx-auto px-6 py-16 edu-fade-up space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold">
          Dil = Kültür + İletişim
        </h2>

        <p className="text-lg text-slate-700 leading-relaxed">
          Dil, yalnızca kelimelerden ibaret değildir; aynı zamanda bir kültürle
          kurulan ilk temas, o kültüre açılan bir kapıdır. Bu kapıdan geçmek ise
          dünya vatandaşı olmanın ilk adımıdır. Günümüzde birçok sektör, yalnızca
          dil bilgisine değil, o dilin konuşulduğu toplumla sağlıklı iletişim
          kurabilen bireylere ihtiyaç duymaktadır.
        </p>

        <p className="text-lg text-slate-700 leading-relaxed">
          İnsanların kültürel değerleriyle şekillenen ihtiyaçlarını anlayabilmek
          için sadece dil bilmek yeterli değildir; o kültüre aşina olmak da büyük
          önem taşır. Bu nedenle seyahat etmek ve dili yerinde öğrenmek, klasik
          kişisel gelişim kalıplarının ötesine geçerek bireye gerçek anlamda
          yetkinlik kazandırır.
        </p>
      </section>

      {/* CONTENT CARDS */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Kültürel Uyum ve Global Hareketlilik",
            text: "Günümüzde pek çok ülke göçmen krizleriyle mücadele etmekte ve politik olarak göçmen nüfusunu kontrol altında tutmayı hedeflemektedir. Bu durum, farklı ülkelere seyahat eden bireylerin kültürel uyuma daha fazla özen göstermesini zorunlu kılmaktadır.",
          },
          {
            title: "Karşılıklı Saygı ve Uyum",
            text: "İster göçmen ister turist olun, bulunulan ülkenin kültürel değerlerine ve toplumsal geleneklerine saygı göstermek hem bir sorumluluk hem de evrensel bir nezakettir.",
          },
          {
            title: "Sağlıklı Kültürel Etkileşim",
            text: "Bu karşılıklı saygı ortamı sayesinde toplumlar arasında asimilasyon baskısı azalır ve sağlıklı bir kültürel etkileşim oluşur.",
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

      {/* HIGHLIGHT */}
      <section
        ref={register}
        className="max-w-5xl mx-auto px-6 pb-20 edu-fade-up"
      >
        <div className="rounded-3xl bg-emerald-50 border border-emerald-200 p-8 space-y-4">
          <h2 className="text-2xl font-bold text-emerald-800">
            Dili Yerinde Öğrenmenin Avantajı
          </h2>

          <p className="text-slate-800 text-sm leading-relaxed">
            Her ne kadar bugün Türkiye’nin birçok ilinde dil kursları ve eğitim
            programları bulunsa da, bir dili en etkili şekilde öğrenmenin yolu o
            dili konuşan toplumun içinde yaşamaktan geçer. Özellikle İngilizcenin
            yoğun olarak kullanıldığı ülkelerde dil eğitimi almak, sınıf ortamında
            öğrenmeye kıyasla çok daha hızlı ve kalıcı sonuçlar sağlar.
          </p>

          <p className="text-slate-800 text-sm leading-relaxed">
            Günlük hayatın içinde aktif iletişim kurmak, sosyal ilişkiler
            geliştirmek ve dili sürekli kullanmak; dil kazanımını katbekat
            artırır. Bu nedenle yurt dışında dil eğitimi, yalnızca akademik değil,
            aynı zamanda kültürel ve sosyal bir yatırımdır.
          </p>
        </div>
      </section>

      {/* CTA (AYNI KALDI) */}
      <section
        ref={register}
        className="max-w-6xl mx-auto px-6 pb-24 edu-fade-up"
      >
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 backdrop-blur shadow-2xl shadow-slate-200">
          <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.14),transparent_32%)]" />

          <div className="relative p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-700">
                Aya Journey ile Doğru Ülke, Doğru Planlama
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Dil eğitimi, doğru ülke ve doğru programla anlam kazanır.
              </h2>
              <p className="text-slate-700 max-w-3xl">
                Yaşamak, çalışmak veya eğitim almak istediğiniz ülkeler için
                lokasyon analizi, yaşam koşulları ve fırsatlar konusunda
                profesyonel destek sunarız.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Program & Ülke Seçimi",
                  desc: "Dil eğitimi programları ve ülke analizi.",
                },
                {
                  title: "Vize & Evrak Süreci",
                  desc: "Dil okulu vizesi ve başvuru süreci.",
                },
                {
                  title: "Aya Journey Desteği",
                  desc: "Okul, vize ve yaşam sürecinde danışmanlık.",
                },
              ].map((box) => (
                <div
                  key={box.title}
                  className="p-5 rounded-2xl bg-white/85 border border-slate-200"
                >
                  <h4 className="font-semibold text-slate-900">
                    {box.title}
                  </h4>
                  <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                    {box.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <p className="text-slate-900 font-semibold">
                Aya Journey, dil eğitimi sürecinizin her adımında yanınızda.
              </p>

              <div className="flex flex-col sm:flex-row gap-2">
                <Link href="/randevu">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:-translate-y-0.5 transition">
                    Randevu Al
                  </button>
                </Link>

                <a
                  href="tel:+903128701584"
                  className="px-4 py-2.5 rounded-xl bg-slate-900 text-white font-semibold shadow-lg"
                >
                  Hemen Ara
                </a>

                <a
                  href="https://wa.me/905302199056"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold"
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
