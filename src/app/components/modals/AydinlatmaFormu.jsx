import React from "react";

const AydinlatmaFormu = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <h2>Aydınlatma Metni</h2>
          <button onClick={onClose} style={styles.closeBtn}>✕</button>
        </div>

        <div style={styles.content}>
          <h3>AYA JOURNEY DANIŞMANLIK HİZMETLERİ LİMİTED ŞİRKETİ<br />AYDINLATMA METNİ</h3>

          <p>
            Aya Journey Danışmanlık Hizmetleri Limited Şirketi (“Şirket”) olarak,
            6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında
            kişisel verilerinizin işlenmesine ilişkin olarak sizleri bilgilendirmek
            amacıyla bu Aydınlatma Metnini hazırladık.
          </p>

          <h4>1. Veri Sorumlusu</h4>
          <p>
            Veri Sorumlusu: Aya Journey Danışmanlık Hizmetleri Limited Şirketi<br />
            Adres: Kızılırmak Mah. Ufuk Üniversitesesi Cd. Paragon Tower No:49 Çankaya/Ankara<br />
            Telefon: 0312 870 15 84<br />
            E-posta: vizedestek@ayajourneys.com<br />
            MERSİS No: 0108104091400001
          </p>

          <h4>2. İşlenen Kişisel Veriler</h4>
          <p>
            Kimlik, iletişim, finans, sözleşme/müşteri işlem, seyahat/operasyon,
            özel nitelikli veri (varsa açık rıza ile), çalışan/aday bilgileri,
            kamera görüntüleri, teknik veriler.
          </p>

          <h4>3. İşleme Amaçları</h4>
          <p>
            Sözleşme kurulması/ifası, hizmet sunumu, operasyon ve rezervasyon
            süreçleri, iletişim, müşteri ilişkileri yönetimi, yasal yükümlülük,
            muhasebe/finans süreçleri, insan kaynakları, güvenlik, talep-şikayet yönetimi.
          </p>

          <h4>4. Kişisel Verilerin Aktarılması</h4>
          <p>
            Havayolu şirketleri, oteller, tedarikçiler, resmi kurumlar,
            finans-muhasebe hizmeti verenler, hukuk/danışmanlık/IT sağlayıcıları,
            iş ortakları.
          </p>

          <h4>5. Toplama Yöntemi ve Hukuki Sebepler</h4>
          <p>
            Web sitesi, e-posta, telefon, formlar, sözleşmeler, çerezler,
            güvenlik kameraları, resmi belgeler.<br />
            Hukuki sebepler: Kanunlarda öngörülme, sözleşme kurulması/ifası,
            hukuki yükümlülük, meşru menfaat, açık rıza.
          </p>

          <h4>6. KVKK Kapsamındaki Haklar</h4>
          <p>
            KVKK m.11 kapsamındaki tüm haklar (öğrenme, düzeltme, silme, itiraz,
            zarar tazmini vb.)
          </p>

          <h4>7. Başvuru Yöntemi</h4>
          <p>
            Başvurular yazılı veya KEP/e-posta ile Şirkete iletilebilir.
          </p>

          <h4>8. Yürürlük</h4>
          <p>
            Bu Aydınlatma Metni yayımlandığı tarihte yürürlüğe girer ve gerektiğinde
            güncellenebilir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AydinlatmaFormu;

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  modal: {
    width: "90%",
    maxWidth: "700px",
    maxHeight: "85vh",
    background: "#fff",
    borderRadius: "10px",
    overflowY: "auto",
    padding: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
    alignItems: "center",
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    fontSize: "22px",
    cursor: "pointer",
  },
  content: {
    fontSize: "15px",
    lineHeight: "1.6",
  },
};
















