import React from "react";

export const metadata = {
  title: "Yunanistan Vize Evrakları 2026 | Güncel Schengen Belge Listesi",
  description:
    "Yunanistan vize evrakları 2026 güncel liste: turistik, ticari ve aile ziyareti için gerekli belgeler, banka dökümü, sponsor evrakları, fotoğraf ölçüsü ve VFS randevu hazırlığı.",
  keywords: [
    "yunanistan vize evrakları",
    "yunanistan schengen vize evrakları",
    "yunanistan vizesi için gerekli belgeler",
    "yunanistan vize evrak listesi",
    "yunanistan vize fotoğraf ölçüsü",
    "yunanistan vize banka dökümü",
    "yunanistan vfs evrakları"
  ],
  alternates: { canonical: "https://www.ayajourney.com/yunanistan-vize-evraklari" }
};

const YunanistanVizeEvraklari = () => {
  return (
    <main className="min-h-screen bg-zinc-50 text-slate-900">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="bg-white border border-slate-200/70 rounded-3xl shadow-sm p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              2026 Güncel • Schengen C Tipi
            </span>
            <span className="inline-flex items-center gap-2 bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2 rounded-full text-xs font-semibold">
              VFS Global Başvuru Dosyası
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Yunanistan Vize Evrakları (Güncel Liste)
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-4xl">
            <strong>Yunanistan vize evrakları</strong>, başvuru türüne (turistik / ticari / aile ziyareti)
            ve başvuru sahibinin mesleki durumuna göre değişir. Bu sayfada,
            <strong> Yunanistan Schengen vizesi için gerekli belgeleri</strong> eksiksiz ve pratik şekilde
            topladık. Eksik veya tutarsız belge, ret riskini artırır.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/randevu"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
            >
              Evrak Kontrolü & Randevu
            </a>
            <a
              href="/yunanistan-vize"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 transition"
            >
              Yunanistan Vize Rehberi
            </a>
          </div>

          {/* quick trust */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <div className="text-2xl font-extrabold">20+</div>
              <div className="text-xs text-slate-600">Temel + destekleyici belge</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <div className="text-2xl font-extrabold">3</div>
              <div className="text-xs text-slate-600">Turistik / Ticari / Ziyaret</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <div className="text-2xl font-extrabold">0</div>
              <div className="text-xs text-slate-600">Eksik evrakla başvuru</div>
            </div>
          </div>
        </div>
      </section>

      {/* ANCHOR NAV */}
      <section className="max-w-6xl mx-auto px-6 pb-6">
        <div className="bg-white border border-slate-200/70 rounded-2xl p-5 flex flex-wrap gap-3">
          {[
            { href: "#ortak-evraklar", label: "Ortak Evraklar" },
            { href: "#foto-standartlari", label: "Fotoğraf" },
            { href: "#banka-ve-finans", label: "Banka & Finans" },
            { href: "#turistik", label: "Turistik" },
            { href: "#ticari", label: "Ticari" },
            { href: "#aile-ziyareti", label: "Aile Ziyareti" },
            { href: "#mesleki", label: "Mesleğe Göre" },
            { href: "#sss", label: "SSS" }
          ].map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="text-sm font-semibold text-slate-700 hover:text-blue-700 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full transition"
            >
              {a.label}
            </a>
          ))}
        </div>
      </section>

      {/* ORTAK EVRAKLAR */}
      <section id="ortak-evraklar" className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white border border-slate-200/70 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-extrabold mb-4">
            Yunanistan Schengen Vizesi İçin Ortak Evraklar
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-4xl mb-10">
            Mesleğiniz ne olursa olsun, <strong>Yunanistan vizesi için gerekli belgeler</strong> içinde aşağıdakiler
            standarttır. Evrakların güncel ve birbiriyle tutarlı olması önemlidir.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                t: "Pasaport",
                d: "En az 2 boş sayfa, mümkünse seyahat bitişinden sonra en az 3 ay daha geçerli."
              },
              {
                t: "Schengen Başvuru Formu",
                d: "Eksiksiz doldurulmuş ve imzalanmış başvuru formu."
              },
              {
                t: "Biyometrik Fotoğraf",
                d: "Schengen standartlarında (detaylar aşağıda)."
              },
              {
                t: "Seyahat Sağlık Sigortası",
                d: "Schengen bölgesinde geçerli, minimum 30.000€ teminat."
              },
              {
                t: "Ulaşım Belgesi",
                d: "Gidiş-dönüş uçuş rezervasyonu (satın alma zorunlu değil; tutarlı olmalı)."
              },
              {
                t: "Konaklama Belgesi",
                d: "Otel rezervasyonu veya davet mektubu + adres bilgileri."
              },
              {
                t: "Kimlik & Nüfus Kaydı",
                d: "Kimlik fotokopisi ve (gerekiyorsa) tam tekmil nüfus kayıt örneği."
              },
              {
                t: "VFS Randevu / Başvuru Belgeleri",
                d: "Randevu çıktısı, hizmet bedeli/başvuru merkezi süreç dokümanları."
              }
            ].map((x) => (
              <div key={x.t} className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="font-bold text-slate-900 mb-2">{x.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="font-semibold text-amber-900 mb-1">Kritik Not</p>
            <p className="text-sm text-amber-900/80 leading-relaxed">
              Belgelerinizin “çok olması” değil, <strong>doğru ve tutarlı olması</strong> önemlidir.
              Örneğin banka dökümü, iş yazısı ve seyahat planı birbirini desteklemelidir.
            </p>
          </div>
        </div>
      </section>

      {/* FOTO */}
      <section id="foto-standartlari" className="max-w-6xl mx-auto px-6 pb-12">
        <div className="bg-white border border-slate-200/70 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-extrabold mb-4">Yunanistan Vize Fotoğraf Ölçüsü ve Standartları</h2>
          <p className="text-slate-600 leading-relaxed max-w-4xl mb-8">
            Schengen vizesi fotoğrafında en çok hata yapılan konu ölçü ve arka plan uyumsuzluğudur.
            Fotoğrafınızı bu standartlara göre hazırlayın.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Ölçü", d: "35x45 mm (Schengen standardı)." },
              { t: "Arka Plan", d: "Açık renk / beyaz, gölgesiz." },
              { t: "Güncellik", d: "Son 6 ay içinde çekilmiş." },
              { t: "Yüz Oranı", d: "Yüz kadrajın %70–80’i." },
              { t: "Gözlük", d: "Tercihen gözlüksüz; yansıma olmamalı." },
              { t: "Aksesuar", d: "Şapka/aksesuar yok; dini zorunluluk hariç." }
            ].map((x) => (
              <div key={x.t} className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="font-bold mb-2">{x.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANKA */}
      <section id="banka-ve-finans" className="max-w-6xl mx-auto px-6 pb-12">
        <div className="bg-white border border-slate-200/70 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-extrabold mb-4">Yunanistan Vize Banka Dökümü ve Finansal Belgeler</h2>
          <p className="text-slate-600 leading-relaxed max-w-4xl mb-8">
            Konsolosluk, seyahatinizi karşılayabilecek finansal gücü ve bu paranın kaynağını görmek ister.
            Bu nedenle hareketli ve açıklanabilir hesaplar önemlidir.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold mb-2">Genel Beklenti</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Son 3–6 ay <strong>hesap hareketli</strong> banka dökümü</li>
                <li>• Kaşeli / imzalı veya bankadan alınmış doğrulanabilir çıktı</li>
                <li>• Düzenli gelir (maaş/iş/ciro) ile uyumlu bakiye</li>
                <li>• Büyük para girişleri varsa açıklayıcı evrak (satış, prim, vb.)</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold mb-2">Sponsor Durumu</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Sponsor dilekçesi</li>
                <li>• Sponsorun gelir belgeleri ve banka dökümü</li>
                <li>• Yakınlık bağını gösteren belge (nüfus kaydı vb.)</li>
                <li>• Seyahat masraflarını sponsorun karşılayacağı net yazılmalı</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6">
            <p className="font-semibold text-red-900 mb-1">Sık Yapılan Hata</p>
            <p className="text-sm text-red-900/80 leading-relaxed">
              Başvuru öncesi son günlerde tek seferde yüksek para yatırmak,
              “kaynağı belirsiz” algısı yaratabilir. Bu tür hareketler mutlaka belgeyle açıklanmalıdır.
            </p>
          </div>
        </div>
      </section>

      {/* TURISTIK */}
      <section id="turistik" className="max-w-6xl mx-auto px-6 pb-12">
        <div className="bg-white border border-slate-200/70 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-extrabold mb-4">Turistik Yunanistan Vizesi Evrakları</h2>
          <p className="text-slate-600 leading-relaxed max-w-4xl mb-8">
            Turistik başvuruda amaç: seyahatin netliği, finansal uygunluk ve Türkiye’ye dönüş bağlarının güçlü görünmesidir.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { t: "Seyahat Planı", d: "Şehir/konaklama/ulaşım planı, tarihlerle uyumlu olmalı." },
              { t: "Konaklama", d: "Otel rezervasyonları veya Airbnb belgeleri (isim/tarih uyumlu)." },
              { t: "Uçuş Rezervasyonu", d: "Gidiş-dönüş; randevu tarihine göre gerçekçi." },
              { t: "Dilekçe", d: "Seyahat amacı, masraf karşılanması, dönüş planı açık anlatılmalı." }
            ].map((x) => (
              <div key={x.t} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold mb-2">{x.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICARI */}
      <section id="ticari" className="max-w-6xl mx-auto px-6 pb-12">
        <div className="bg-white border border-slate-200/70 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-extrabold mb-4">Ticari Yunanistan Vizesi Evrakları</h2>
          <p className="text-slate-600 leading-relaxed max-w-4xl mb-8">
            Ticari başvuruda en kritik belge: <strong>davet mektubu</strong> ve iş ilişkisini ispatlayan dökümanlardır.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { t: "Davet Mektubu", d: "Yunanistan’daki firma tarafından; antetli, imzalı/kaşeli." },
              { t: "Şirket Yazısı", d: "Görev, pozisyon, izin tarihleri ve masraflar belirtilmeli." },
              { t: "Ticari Bağlar", d: "Fatura/kontrat/email yazışmaları/meeting/fuar kayıtları." },
              { t: "Şirket Evrakları", d: "Vergi levhası, sicil, imza sirküleri vb. (duruma göre)." }
            ].map((x) => (
              <div key={x.t} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold mb-2">{x.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <p className="font-semibold text-blue-900 mb-1">İpucu</p>
            <p className="text-sm text-blue-900/80 leading-relaxed">
              Davet mektubu tarihleri ile uçuş/otel tarihleri uyuşmalı; “iş amaçlı” seyahatte turistik plan da varsa,
              programı net bir akışta göstermek ret riskini azaltır.
            </p>
          </div>
        </div>
      </section>

      {/* AILE ZIYARETI */}
      <section id="aile-ziyareti" className="max-w-6xl mx-auto px-6 pb-12">
        <div className="bg-white border border-slate-200/70 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-extrabold mb-4">Aile / Arkadaş Ziyareti Evrakları</h2>
          <p className="text-slate-600 leading-relaxed max-w-4xl mb-8">
            Ziyaret vizesinde davet eden kişinin statüsü ve konaklama/masraf planı çok önemlidir.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { t: "Davet Mektubu", d: "Konaklama adresi, davet süresi, ilişki açıklaması." },
              { t: "Davet Edenin Oturum/kimlik", d: "Yunanistan kimliği/oturum kartı/pasaport kopyası." },
              { t: "Adres Kanıtı", d: "Kira kontratı, fatura veya resmi adres belgesi." },
              { t: "Masraf Planı", d: "Masrafları kim karşılıyor? Sponsor ise sponsor evrakları." }
            ].map((x) => (
              <div key={x.t} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold mb-2">{x.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MESLEKI */}
      <section id="mesleki" className="max-w-6xl mx-auto px-6 pb-12">
        <div className="bg-white border border-slate-200/70 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-extrabold mb-4">Mesleğe Göre Ek Evraklar</h2>
          <p className="text-slate-600 leading-relaxed max-w-4xl mb-10">
            Yunanistan vize dosyanızın “gücü”, Türkiye’ye geri dönüş bağları ve gelir düzeninin netliği ile artar.
            Aşağıdaki ek belgeler mesleğinize göre istenebilir.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Çalışan",
                items: [
                  "• İş yeri izin yazısı",
                  "• Maaş bordrosu (son 3 ay)",
                  "• SGK hizmet dökümü / işe giriş",
                  "• Şirket evrakları (varsa)"
                ]
              },
              {
                t: "İşveren / Şirket Sahibi",
                items: [
                  "• Faaliyet belgesi",
                  "• Vergi levhası",
                  "• Ticaret sicil / imza sirküleri",
                  "• Şirket hesap dökümleri (duruma göre)"
                ]
              },
              {
                t: "Öğrenci",
                items: [
                  "• Öğrenci belgesi",
                  "• Sponsor dilekçesi",
                  "• Sponsor gelir/banka dökümü",
                  "• Aile bağları (nüfus kaydı vb.)"
                ]
              },
              {
                t: "Emekli",
                items: [
                  "• Emeklilik belgesi",
                  "• Emekli maaş dökümü",
                  "• Ek gelir belgeleri (varsa)",
                  "• Tapu/araç gibi varlık belgeleri (varsa)"
                ]
              },
              {
                t: "Freelance / Serbest Meslek",
                items: [
                  "• Vergi kaydı / levha",
                  "• Fatura/iş sözleşmeleri",
                  "• Gelir dökümleri",
                  "• Banka hareketleri (düzenli)"
                ]
              },
              {
                t: "Sponsorlu Başvuru",
                items: [
                  "• Sponsor dilekçesi",
                  "• Sponsor gelir/banka",
                  "• Yakınlık kanıtı",
                  "• Masraf planı açıklaması"
                ]
              }
            ].map((c) => (
              <div key={c.t} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold mb-3">{c.t}</h3>
                <ul className="text-sm text-slate-600 space-y-2">
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section id="sss" className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white border border-slate-200/70 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-extrabold mb-10 text-center">
            Yunanistan Vize Evrakları Hakkında Sık Sorulan Sorular
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <summary className="cursor-pointer font-bold text-slate-900 flex items-center justify-between">
                Yunanistan vizesi için bankada ne kadar para olmalı?
                <span className="text-slate-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Kesin bir alt limit yoktur. Önemli olan seyahat masraflarını karşılayabilecek tutar ve bu tutarın
                <strong> kaynağının açıklanabilir</strong> olmasıdır. Düzenli gelir + hareketli hesap dökümü dosyayı güçlendirir.
              </p>
            </details>

            <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <summary className="cursor-pointer font-bold text-slate-900 flex items-center justify-between">
                Evraklar İngilizce mi olmalı?
                <span className="text-slate-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Belgelerin dili konusunda başvuru merkezinin ve konsolosluğun güncel uygulaması önemlidir.
                Genel pratikte; resmi belgeler çoğunlukla Türkçe kabul edilse de, şirket yazısı/dilekçe gibi belgelerin
                İngilizce hazırlanması dosyayı daha “okunabilir” hale getirir.
              </p>
            </details>

            <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <summary className="cursor-pointer font-bold text-slate-900 flex items-center justify-between">
                Yunanistan vizesi için randevu şart mı?
                <span className="text-slate-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Evet. Başvurular biyometri işlemi gerektirdiği için randevu zorunludur. Randevu günü,
                dosyanızın düzenli ve tutarlı olması işlem sürecini hızlandırır.
              </p>
            </details>
          </div>

          <div className="mt-10 text-center">
            <a
              href="/randevu"
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
            >
              Dosyanızı Kontrol Edelim (Ücretsiz Ön Değerlendirme)
            </a>
            <p className="text-xs text-slate-500 mt-3">
              Evraklarınızı göndermeden önce kontrol ettirmek, ret riskini düşürür.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-blue-700 to-indigo-700 rounded-3xl p-12 md:p-16 text-white text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Yunanistan Schengen Vizesi Dosyanızı Güçlendirelim
          </h2>
          <p className="mt-6 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Evraklarınızın birbiriyle uyumunu kontrol edelim, eksikleri başvuru öncesi tamamlayalım.
            Randevu, evrak düzeni ve dilekçe stratejisiyle başvurunuzu sağlamlaştıralım.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/905302199056"
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold bg-white text-blue-800 hover:bg-slate-100 transition"
            >
              WhatsApp’tan Evrak Sor
            </a>
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold border border-white/40 hover:bg-white/10 transition"
            >
              İletişim & Ofis Randevusu
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default YunanistanVizeEvraklari;
