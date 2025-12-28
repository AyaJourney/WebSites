"use client"
import React, { useState } from 'react';

export default function VizeSimulasyonu() {
  // --- STATE TANIMLARI ---
  const [yas, setYas] = useState('');
  const [cinsiyet, setCinsiyet] = useState('');
  const [medeniDurum, setMedeniDurum] = useState('');

  // SEYAHAT
  const [batiVizeleri, setBatiVizeleri] = useState(''); 
  const [schengenSayisi, setSchengenSayisi] = useState(''); 
  const [digerUlkeler, setDigerUlkeler] = useState(''); 
  const [riskliUlkeler, setRiskliUlkeler] = useState(''); 

  // RET GEÇMİŞİ
  const [abdRed, setAbdRed] = useState(''); 
  const [abdRedDetay, setAbdRedDetay] = useState(''); 
  const [kanadaRed, setKanadaRed] = useState(''); 

  // BAĞLANTILAR
  const [abdTanidik, setAbdTanidik] = useState('');
  const [tanidikYakinlik, setTanidikYakinlik] = useState('');
  const [tanidikStatu, setTanidikStatu] = useState(''); 
  const [tanidikTrZiyaret, setTanidikTrZiyaret] = useState(''); 

  // EĞİTİM
  const [program, setProgram] = useState('');
  const [dilOkuluSure, setDilOkuluSure] = useState(''); 
  const [ingilizceSeviyesi, setIngilizceSeviyesi] = useState(''); 
  const [trDilKursu, setTrDilKursu] = useState(''); 

  // SPONSOR
  const [sponsor, setSponsor] = useState('');
  const [aileUyesi, setAileUyesi] = useState('');
  const [sponsorMeslek, setSponsorMeslek] = useState('');
  
  const [hesaplananPuan, setHesaplananPuan] = useState(null);

  // --- HESAPLAMA MOTORU (Gizli Mantık) ---
  const hesapla = () => {
    let puan = 50; // Başlangıç
    const yasInt = parseInt(yas);

    if (!yas) { alert("Lütfen yaşınızı giriniz."); return; }

    // 1. DEMOGRAFİK
    if (yasInt >= 18 && yasInt <= 22) puan += 5;
    else if (yasInt > 22 && yasInt <= 27) puan += 0;
    else if (yasInt > 27 && yasInt <= 35) puan -= 10;
    else if (yasInt > 35) puan -= 20;

    if (cinsiyet === 'kadin') puan += 3;
    if (cinsiyet === 'erkek') puan -= 5;

    if (medeniDurum === 'evli') puan += 10;
    if (medeniDurum === 'bekar') puan -= 5;

    // 2. SEYAHAT GEÇMİŞİ
    if (batiVizeleri === 'birdenFazla') puan += 20;
    else if (batiVizeleri === 'birTane') puan += 15;

    if (schengenSayisi === '3+') puan += 15;
    else if (schengenSayisi === '2') puan += 10;
    else if (schengenSayisi === '1') puan += 5;

    if (digerUlkeler === 'birdenFazla') puan += 5;
    else if (digerUlkeler === 'birTane') puan += 3;

    if (riskliUlkeler === 'evet') puan -= 5; 

    // Pasaport boş ise ceza
    if (batiVizeleri === 'yok' && schengenSayisi === 'yok' && digerUlkeler === 'hayir') {
      puan -= 5;
    }

    // 3. VİZE REDDİ (Kritik)
    if (abdRed === 'evet') {
        if (abdRedDetay === '6ay') puan -= 15;
        else if (abdRedDetay === '18ay') puan -= 10;
        else if (abdRedDetay === '2yil') puan += 0; 
        else if (abdRedDetay === 'coklu') puan -= 20; 
    }
    if (kanadaRed === 'evet') puan -= 10;

    // 4. AMERİKA BAĞLANTISI
    if (abdTanidik === 'hayir') {
      puan += 5;
    } else {
      if (tanidikYakinlik === 'birinciDerece') puan -= 5;
      
      if (tanidikStatu === 'vatandas') puan += 0; 
      else if (tanidikStatu === 'greencard') puan -= 5;
      else if (tanidikStatu === 'iltica') puan -= 20; // Büyük Risk

      if (tanidikTrZiyaret === 'son1yil') puan += 5; 
      else if (tanidikTrZiyaret === 'uzunSureYok') puan -= 10; 
    }

    // 5. EĞİTİM PLANI
    if (program === 'yuksek') puan += 10;
    else if (program === 'lisans') {
      if (yasInt > 25) puan -= 15;
      else if (yasInt >= 21) puan -= 5;
    } 
    else if (program === 'dil') {
      // Dil Okulu mantığı
      if (trDilKursu === 'evet') puan += 5;
      else if (trDilKursu === 'hayir') puan -= 10;

      // Süre Puanlaması
      if (dilOkuluSure === '1ay') puan -= 20;
      else if (dilOkuluSure === '3-6ay') puan -= 10;
      else if (dilOkuluSure === '6-9ay') puan += 5;
      else if (dilOkuluSure === '9-12ay') puan += 10;
    }

    if (program !== 'dil') {
       if (ingilizceSeviyesi === 'dogrudan') puan += 10;
       if (ingilizceSeviyesi === 'hazirlik') puan -= 5;
    }

    // 6. SPONSORLUK
    if (sponsor === 'tamBurs') puan += 30;
    else if (sponsor === 'kismiBurs') puan += 15;
    else if (sponsor === 'kendim') puan -= 20;
    else if (sponsor === 'aile') {
      puan += 5;
      if (aileUyesi === 'anneBaba') puan += 5;
      if (aileUyesi === 'akraba') puan -= 10;

      if (sponsorMeslek === 'isveren') puan += 10;
      if (sponsorMeslek === 'vip') puan += 15;
      if (sponsorMeslek === 'kamu') puan -= 5;
      if (sponsorMeslek === 'ozel') puan -= 3;
      if (sponsorMeslek === 'emekli') puan -= 10;
    }

    // LİMİTLEME
    if (puan > 85) puan = 85;
    if (puan < 15) puan = 15;

    setHesaplananPuan(puan);
  };

  const renkGetir = (p) => {
    if (p >= 70) return 'bg-green-600';
    if (p >= 50) return 'bg-yellow-500';
    return 'bg-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans text-gray-800 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-blue-900 p-6 text-center text-white">
          <h1 className="text-2xl font-bold">Vize Şans Simülatörü</h1>
          <p className="text-blue-200 text-sm">Yapay Zeka Destekli Profil Analizi</p>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* --- SOL SÜTUN --- */}
          <div className="space-y-6">
            
            {/* 1. KİMLİK */}
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-blue-800 font-bold text-sm uppercase mb-3 border-b pb-1">1. Kişisel Bilgiler</h3>
              <div className="grid grid-cols-3 gap-2">
                <input type="number" placeholder="Yaşınız" value={yas} onChange={(e)=>setYas(e.target.value)} className="p-2 border rounded outline-none focus:border-blue-500"/>
                <select value={cinsiyet} onChange={(e)=>setCinsiyet(e.target.value)} className="p-2 border rounded outline-none focus:border-blue-500">
                  <option value="">Cinsiyet</option>
                  <option value="kadin">Kadın</option>
                  <option value="erkek">Erkek</option>
                </select>
                <select value={medeniDurum} onChange={(e)=>setMedeniDurum(e.target.value)} className="p-2 border rounded outline-none focus:border-blue-500">
                  <option value="">Medeni Hal</option>
                  <option value="bekar">Bekar</option>
                  <option value="evli">Evli</option>
                </select>
              </div>
            </div>

            {/* 2. SEYAHAT GEÇMİŞİ */}
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-blue-800 font-bold text-sm uppercase mb-3 border-b pb-1">2. Seyahat Geçmişi</h3>
              
              <div className="space-y-3">
                <div className="flex flex-col">
                    <label className="text-xs font-semibold text-gray-600 mb-1">Batı Vizeleri (ABD, UK, Kanada, Avustralya)</label>
                    <select value={batiVizeleri} onChange={(e)=>setBatiVizeleri(e.target.value)} className="p-2 border rounded bg-gray-50">
                    <option value="">Seçiniz...</option>
                    <option value="birdenFazla">Birden Fazla</option>
                    <option value="birTane">1 Tane</option>
                    <option value="yok">Hiç Yok</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-xs font-semibold text-gray-600 mb-1">Schengen Vize Sayısı</label>
                    <select value={schengenSayisi} onChange={(e)=>setSchengenSayisi(e.target.value)} className="p-2 border rounded bg-gray-50">
                    <option value="">Seçiniz...</option>
                    <option value="3+">3 tane veya daha fazla</option>
                    <option value="2">2 tane</option>
                    <option value="1">1 tane</option>
                    <option value="yok">Hiç yok</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-xs font-semibold text-gray-600 mb-1">Diğer Ülkeler (Japonya, Kore, Singapur vb.)</label>
                    <select value={digerUlkeler} onChange={(e)=>setDigerUlkeler(e.target.value)} className="p-2 border rounded bg-gray-50">
                    <option value="">Seçiniz...</option>
                    <option value="birdenFazla">Birden Fazla</option>
                    <option value="birTane">Bir tane</option>
                    <option value="hayir">Yok</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-xs font-semibold text-gray-600 mb-1">Riskli Ülke Seyahati (Rusya, İran, Çin, Libya vb.)?</label>
                    <select value={riskliUlkeler} onChange={(e)=>setRiskliUlkeler(e.target.value)} className="p-2 border rounded bg-gray-50">
                    <option value="">Seçiniz...</option>
                    <option value="evet">Evet</option>
                    <option value="hayir">Hayır</option>
                    </select>
                </div>
              </div>
            </div>

            {/* 3. VİZE REDDİ GEÇMİŞİ */}
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-red-800 font-bold text-sm uppercase mb-3 border-b border-red-200 pb-1">3. Vize Reddi Geçmişi</h3>
              
              <div className="mb-3">
                <label className="block text-xs font-bold mb-1">ABD Vize Reddiniz Var mı?</label>
                <select value={abdRed} onChange={(e)=>setAbdRed(e.target.value)} className="w-full p-2 border rounded bg-white">
                  <option value="">Seçiniz...</option>
                  <option value="evet">Evet, reddim var</option>
                  <option value="hayir">Hayır, yok</option>
                </select>
              </div>

              {abdRed === 'evet' && (
                <div className="mb-3 ml-2 pl-2 border-l-2 border-red-300">
                    <label className="block text-xs font-bold mb-1">Son reddiniz ne zamandı?</label>
                    <select value={abdRedDetay} onChange={(e)=>setAbdRedDetay(e.target.value)} className="w-full p-2 border rounded bg-white">
                        <option value="">Seçiniz...</option>
                        <option value="6ay">Son 6 ay içinde</option>
                        <option value="18ay">Son 18 ay içinde</option>
                        <option value="2yil">2 yıldan fazla zaman önce</option>
                        <option value="coklu">Birden fazla reddim var</option>
                    </select>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold mb-1">Kanada Vize Reddiniz Var mı?</label>
                <select value={kanadaRed} onChange={(e)=>setKanadaRed(e.target.value)} className="w-full p-2 border rounded bg-white">
                  <option value="">Seçiniz...</option>
                  <option value="evet">Evet</option>
                  <option value="hayir">Hayır</option>
                </select>
              </div>
            </div>

          </div>

          {/* --- SAĞ SÜTUN --- */}
          <div className="space-y-6">

            {/* 4. AMERİKA BAĞLANTISI */}
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-blue-800 font-bold text-sm uppercase mb-3 border-b pb-1">4. Amerika Bağlantısı</h3>
              
              <div className="mb-2">
                <select value={abdTanidik} onChange={(e)=>setAbdTanidik(e.target.value)} className="w-full p-2 border rounded">
                  <option value="">Amerika'da tanıdığınız var mı?</option>
                  <option value="hayir">Hayır</option>
                  <option value="evet">Evet</option>
                </select>
              </div>

              {abdTanidik === 'evet' && (
                <div className="bg-blue-50 p-3 rounded space-y-3 border border-blue-100 text-sm">
                  <div>
                      <label className="block text-xs font-bold mb-1">Yakınlık Derecesi:</label>
                      <select value={tanidikYakinlik} onChange={(e)=>setTanidikYakinlik(e.target.value)} className="w-full p-2 border rounded bg-white">
                          <option value="">Seçiniz...</option>
                          <option value="birinciDerece">Birinci Derece (Aile)</option>
                          <option value="akraba">Akraba / Arkadaş</option>
                      </select>
                  </div>
                  <div>
                      <label className="block text-xs font-bold mb-1">Tanıdığın ABD Statüsü:</label>
                      <select value={tanidikStatu} onChange={(e)=>setTanidikStatu(e.target.value)} className="w-full p-2 border rounded bg-white">
                          <option value="">Seçiniz...</option>
                          <option value="vatandas">ABD Vatandaşı</option>
                          <option value="greencard">Green Card Sahibi</option>
                          <option value="ogrenci">Öğrenci / Geçici Vize</option>
                          <option value="iltica">İltica / Yasa Dışı Geçiş</option>
                      </select>
                  </div>
                  <div>
                      <label className="block text-xs font-bold mb-1">En son ne zaman TR'ye geldi?</label>
                      <select value={tanidikTrZiyaret} onChange={(e)=>setTanidikTrZiyaret(e.target.value)} className="w-full p-2 border rounded bg-white">
                          <option value="">Seçiniz...</option>
                          <option value="son1yil">Son 1 yıl içerisinde</option>
                          <option value="1-3yil">1 - 3 yıl arasında</option>
                          <option value="uzunSureYok">3 yıldan uzun süredir gelmedi</option>
                      </select>
                  </div>
                </div>
              )}
            </div>

            {/* 5. EĞİTİM & SPONSOR */}
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-blue-800 font-bold text-sm uppercase mb-3 border-b pb-1">5. Eğitim ve Finans</h3>
              
              {/* Program */}
              <div className="mb-3">
                <label className="block text-xs font-bold mb-1">Eğitim Planı:</label>
                <select value={program} onChange={(e)=>setProgram(e.target.value)} className="w-full p-2 border rounded">
                  <option value="">Seçiniz...</option>
                  <option value="dil">Dil Okulu</option>
                  <option value="lisans">Önlisans / Lisans</option>
                  <option value="yuksek">Yüksek Lisans / Doktora</option>
                </select>
              </div>

              {/* DİL OKULU ÖZEL */}
              {program === 'dil' && (
                 <div className="mb-3 pl-3 border-l-4 border-orange-400 bg-orange-50 p-3 rounded space-y-3">
                    <div>
                        <label className="block text-xs font-bold mb-1">Türkiye'de dil kursuna gittiniz mi?</label>
                        <select value={trDilKursu} onChange={(e)=>setTrDilKursu(e.target.value)} className="w-full p-2 border rounded bg-white">
                        <option value="">Seçiniz...</option>
                        <option value="evet">Evet</option>
                        <option value="hayir">Hayır</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-bold mb-1 text-orange-900">Amerika'da ki kursun süresi</label>
                        <select value={dilOkuluSure} onChange={(e)=>setDilOkuluSure(e.target.value)} className="w-full p-2 border rounded bg-white">
                        <option value="">Seçiniz...</option>
                        <option value="1ay">1 ay (Kısa Dönem)</option>
                        <option value="3-6ay">3 - 6 ay arası</option>
                        <option value="6-9ay">6 - 9 ay arası</option>
                        <option value="9-12ay">9 - 12 ay (Uzun Dönem)</option>
                        </select>
                    </div>
                 </div>
              )}

              {/* Akademik İngilizce */}
              {program !== 'dil' && program !== '' && (
                 <div className="mb-3">
                    <label className="block text-xs font-bold mb-1">İngilizce Seviyeniz?</label>
                    <select value={ingilizceSeviyesi} onChange={(e)=>setIngilizceSeviyesi(e.target.value)} className="w-full p-2 border rounded">
                      <option value="">Seçiniz...</option>
                      <option value="dogrudan">Yeterli (Doğrudan Başlama)</option>
                      <option value="hazirlik">Yetersiz (Önce Hazırlık)</option>
                    </select>
                 </div>
              )}

              {/* Sponsor */}
              <div className="mt-4 border-t pt-3">
                 <label className="block text-xs font-bold mb-1">Masrafları Kim Karşılayacak?</label>
                 <select value={sponsor} onChange={(e)=>setSponsor(e.target.value)} className="w-full p-2 border rounded">
                    <option value="">Seçiniz...</option>
                    <option value="tamBurs">Tam Burslu</option>
                    <option value="kismiBurs">Kısmi Burslu</option>
                    <option value="kendim">Kendim</option>
                    <option value="aile">Ailem</option>
                 </select>
              </div>

              {/* Aile Detay */}
              {sponsor === 'aile' && (
                <div className="grid grid-cols-2 gap-2 mt-2 bg-gray-50 p-2 rounded border border-gray-200">
                   <select value={aileUyesi} onChange={(e)=>setAileUyesi(e.target.value)} className="w-full p-2 border rounded text-sm bg-white">
                      <option value="">Yakınlık...</option>
                      <option value="anneBaba">Anne / Baba</option>
                      <option value="akraba">Akraba</option>
                   </select>
                   <select value={sponsorMeslek} onChange={(e)=>setSponsorMeslek(e.target.value)} className="w-full p-2 border rounded text-sm bg-white">
                      <option value="">Meslek...</option>
                      <option value="isveren">İş Yeri Sahibi</option>
                      <option value="vip">Doktor/Avukat/Yargıç</option>
                      <option value="kamu">Kamu Çalışanı</option>
                      <option value="ozel">Özel Sektör</option>
                      <option value="emekli">Emekli</option>
                   </select>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* --- AKSİYON ALANI --- */}
        <div className="p-6 bg-gray-100 border-t flex flex-col items-center justify-center">
          <button 
            onClick={hesapla}
            className="w-full md:w-1/2 bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-lg shadow-lg transition transform active:scale-95 text-lg"
          >
            SİMÜLASYONU BAŞLAT
          </button>

          {hesaplananPuan !== null && (
             <div className="mt-6 text-center animate-bounce-in">
                <p className="text-gray-500 font-semibold mb-1">Tahmini Başarı Skoru</p>
                <div className={`text-6xl font-black text-white px-12 py-4 rounded-2xl shadow-xl inline-block ${renkGetir(hesaplananPuan)}`}>
                   %{hesaplananPuan}
                </div>
                <p className="text-xs text-gray-400 mt-3 max-w-lg mx-auto">
                   *Bu sonuç yapay zeka destekli bir simülasyondur. Vize onayı garantisi vermez; nihai karar konsolosluk memuruna aittir.
                </p>
             </div>
          )}
        </div>

      </div>
    </div>
  );
}