"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function AccommodationTransportAbroad() {
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
            Avrupa & Amerika Rehberi
          </span>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Yurt Dışında Konaklama ve Ulaşım
            <span className="text-emerald-600"> Deneyimden Notlar</span>
          </h1>

          <p className="text-lg text-slate-700 max-w-3xl">
            Nerede kalacağım? Ulaşımı nasıl çözerim? Tur mu, bireysel mi?
            Bu yazı broşür diliyle değil, gerçekten yolda öğrenilmiş bilgilerle yazıldı.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section
        ref={register}
        className="max-w-5xl mx-auto px-6 py-14 edu-fade-up space-y-5"
      >
        <p className="text-lg text-slate-700 leading-relaxed">
          Yurt dışına çıkma fikri ilk akla düştüğünde herkesin kafasında aynı sorular döner.
          Açık konuşalım: doğru konaklama ve ulaşım tercihi, seyahatin kalitesini doğrudan etkiler.
        </p>

        <p className="text-lg text-slate-700 leading-relaxed">
          Elbette herkesin seyahat tarzı farklıdır ama hatrı sayılır gezginler olarak
          bizim deneyimimiz bu yönde şekillendi.
        </p>
      </section>

      {/* EUROPE ACCOMMODATION */}
      <section className="max-w-6xl mx-auto px-6 pb-20 space-y-12">
        <div ref={register} className="edu-fade-up space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Avrupa’da Konaklama: Neyi, Neden Seçmeli?
          </h2>

          <p className="text-slate-700 text-lg">
            Avrupa bu konuda inanılmaz rahat. Seçenek çok, fiyat skalası geniş.
          </p>
        </div>

        {/* Hostel */}
        <div ref={register} className="edu-fade-up space-y-4">
          <h3 className="text-xl font-semibold">Hostel Neden Hâlâ Mantıklı?</h3>
          <ul className="space-y-2 text-slate-700">
            <li>• Orta ve Batı Avrupa’da hosteller çok temiz ve düzenli</li>
            <li>• Kış aylarında daha sakin ve uygun fiyatlı</li>
            <li>• Ortalama fiyatlar 20–40 € bandında</li>
            <li>• Ortak mutfak sayesinde ciddi bütçe tasarrufu</li>
            <li>• Yalnız seyahat edenler için sosyalleşme avantajı</li>
          </ul>
          <p className="text-slate-700">
            Hostelworld ve Booking bu konuda en pratik platformlar.
            Booking’de Genius indirimlerini mutlaka kontrol et.
          </p>
        </div>

        {/* Tour */}
        <div ref={register} className="edu-fade-up space-y-4">
          <h3 className="text-xl font-semibold">
            Tur Mantıklı mı, Mantıksız mı?
          </h3>

          <p className="text-slate-700">
            Tur tamamen beklenti ve karakter meselesi.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border bg-slate-50">
              <h4 className="font-semibold mb-2">Neden Mantıklı?</h4>
              <ul className="text-sm space-y-1">
                <li>• Konaklama ve ulaşım hazır</li>
                <li>• Rehberli geziler</li>
                <li>• Daha az yorucu</li>
                <li>• Kültürel turlarda büyük avantaj</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border bg-slate-50">
              <h4 className="font-semibold mb-2">Neden Mantıksız?</h4>
              <ul className="text-sm space-y-1">
                <li>• Özgürlük ve macera yok</li>
                <li>• Program pahalı olabilir</li>
                <li>• İlginizi çekmeyen yerlere gitmek zorunda kalırsınız</li>
                <li>• Grup temposuna uymak zor</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Capsule & Airbnb */}
        <div ref={register} className="edu-fade-up space-y-4">
          <h3 className="text-xl font-semibold">Kapsül Oteller & Airbnb</h3>

          <p className="text-slate-700">
            Kapsül oteller sadece uyumalık. Alan dar, uzun kalışta bunaltıcı.
          </p>

          <p className="text-slate-700">
            Airbnb ise sadece konaklama değil, deneyim meselesi.
            Uzun kalışlarda ekonomik ve daha yerel hissettirir.
          </p>
        </div>
      </section>

      {/* TRANSPORT */}
      <section className="max-w-5xl mx-auto px-6 pb-20 space-y-10">
        <div ref={register} className="edu-fade-up">
          <h2 className="text-2xl md:text-3xl font-bold">
            Avrupa & Amerika’da Ulaşım
          </h2>
        </div>

        <div ref={register} className="edu-fade-up space-y-3">
          <h3 className="text-xl font-semibold">Avrupa</h3>
          <ul className="text-slate-700 space-y-1">
            <li>• Metro, tramvay, otobüs çok sistemli</li>
            <li>• Günlük / haftalık kartlar avantajlı</li>
            <li>• Tren yolculukları keyifli</li>
            <li>• Interrail / Eurail çok mantıklı</li>
          </ul>
        </div>

        <div ref={register} className="edu-fade-up space-y-3">
          <h3 className="text-xl font-semibold">Amerika</h3>
          <p className="text-slate-700">
            New York dışında araç kiralamak büyük rahatlık.
          </p>
          <ul className="text-slate-700 space-y-1">
            <li>• Toplu taşıma sınırlı</li>
            <li>• Mesafeler uzun</li>
            <li>• Araç = özgürlük</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={register}
        className="max-w-5xl mx-auto px-6 pb-24 edu-fade-up"
      >
        <div className="rounded-3xl bg-emerald-50 border border-emerald-200 p-8 space-y-4">
          <h2 className="text-2xl font-bold text-emerald-800">
            Doğru seçim “iyi ki gelmişim” dedirtir
          </h2>
          <p className="text-slate-800">
            Eğer bu yazıyı okuyorsan zaten yola çıkmaya niyetlisin.
            Aya Journey olarak deneyimi ve yolu seninle paylaşmak için buradayız.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link
              href="/randevu"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold"
            >
              Ücretsiz Görüşme Al
            </Link>
            <a
              href="https://wa.me/903128701584"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold"
            >
              WhatsApp’tan Yaz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
