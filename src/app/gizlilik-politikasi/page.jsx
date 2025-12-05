import React from 'react';

const PrivacyPolicyPage = () => {
    // Styling için basit bir obje
    const styles = {
        container: {
            maxWidth: '900px',
            margin: '40px auto',
            padding: '20px',
            lineHeight: '1.6',
            color: '#333',
            fontFamily: 'Arial, sans-serif'
        },
        heading: {
            borderBottom: '2px solid #ddd',
            paddingBottom: '10px',
            marginBottom: '20px',
            color: '#0056b3'
        },
        sectionHeading: {
            marginTop: '30px',
            color: '#007bff'
        },
        list: {
            paddingLeft: '20px'
        },
        contact: {
            backgroundColor: '#f9f9f9',
            padding: '15px',
            borderRadius: '5px',
            borderLeft: '4px solid #007bff'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>AYA JOURNEY GİZLİLİK POLİTİKASI</h1>
            {/* <p>**(Son Güncelleme Tarihi: [Günün Tarihi])**</p> */}

            <h2 style={styles.sectionHeading}>1. Giriş</h2>
            <p>
                Bu Gizlilik Politikası, **AYA Journey** ("Biz" veya "Şirket") tarafından işletilen web sitesi ve hizmetler aracılığıyla kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır. Sitemizi kullanarak bu politikada açıklanan veri toplama ve kullanma yöntemlerini kabul etmiş olursunuz.
            </p>

            <h2 style={styles.sectionHeading}>2. İletişim Bilgileri</h2>
            <div style={styles.contact}>
                <p>Gizlilik politikamız veya kişisel verilerinizle ilgili her türlü soru, yorum veya talep için bize ulaşabilirsiniz:</p>
                <p><strong>Şirket Adı:</strong> AYA Journey</p>
                <p><strong>E-posta:</strong> vizedestek@ayajourney.com</p>
            </div>

            <h2 style={styles.sectionHeading}>3. Topladığımız Veriler</h2>
            <p>Sitemiz iki ana yolla veri toplamaktadır:</p>

            <h3>A. Doğrudan Sağladığınız Veriler</h3>
            <p>Hizmet talebi, kayıt veya iletişim formlarını doldurmanız aracılığıyla bize doğrudan ilettiğiniz kişisel bilgileri toplarız. Bu veriler şunlardır:</p>
            <ul style={styles.list}>
                <li>Ad ve Soyad</li>
                <li>E-posta Adresi</li>
                <li>Telefon Numarası</li>
                <li>Adres Bilgisi</li>
            </ul>
            
            <h3>B. Otomatik Olarak Toplanan Veriler (Çerezler ve Sunucu Kayıtları)</h3>
            <p>Sitemizi ziyaret ettiğinizde otomatik olarak toplanan teknik veriler ve çerezler şunlardır:</p>
            <ul style={styles.list}>
                <li>**Zorunlu Çerezler:** Oturum kimlikleri, güvenlik ayarları ve çerez onay tercihinizin kaydedilmesi.</li>
                <li>**İsteğe Bağlı Çerezler (Google Analytics):** Site trafiği, sayfa görüntüleme süresi gibi istatistiksel veriler (açık rızanız ile).</li>
                <li>**Sunucu Kayıtları:** IP adresiniz, tarayıcı türü ve ziyaret zamanı.</li>
            </ul>

            <h2 style={styles.sectionHeading}>4. Veri İşleme Amaçları (Neden Topluyoruz?)</h2>
            <p>Kişisel verilerinizi aşağıdaki amaçlarla işliyoruz:</p>
            <ul style={styles.list}>
                <li>**Hizmetin Sunumu:** Sitemizin düzgün çalışmasını sağlamak (Zorunlu Çerezler).</li>
                <li>**Sözleşmenin İfası ve Hizmet Sunumu:** Vize danışmanlık hizmetlerini sağlamak, sizinle iletişim kurmak, hizmet taleplerinizi işlemek, randevuları organize etmek, fatura kesmek ve yasal yükümlülüklerimizi yerine getirmek (Doğrudan Sağlanan Veriler).</li>
                <li>**Güvenlik:** Sistem güvenliğini sağlamak.</li>
                <li>**Performans Analizi (Rızanızla):** Sunduğumuz hizmetleri iyileştirmek için site kullanımını analiz etmek (Analitik Çerezler).</li>
            </ul>
            
            <h2 style={styles.sectionHeading}>5. Çerez Politikası ve Yönetimi</h2>
            <ul style={styles.list}>
                <li>**Zorunlu Çerezler:** Bu çerezler sitemizin çalışması için esastır ve kapatılamaz.</li>
                <li>**Analitik Çerezler (Google Analytics):** Bu çerezler, kullanıcı deneyimini iyileştirmek için site kullanımını analiz etmemize olanak tanır. Çerez banner'ı üzerinde **açık onay vermediğiniz sürece bu çerezler aktif edilmez.**</li>
                <li>**Çerezleri Yönetme:** Dilediğiniz zaman tarayıcı ayarlarınız üzerinden çerezleri reddetme veya silme hakkına sahipsiniz.</li>
            </ul>

            <h2 style={styles.sectionHeading}>6. Verilerin Paylaşılması</h2>
            <p>
                Topladığımız kişisel veriler, **AYA Journey** hizmetlerinin sunulması amacıyla (örneğin vize başvuru süreçlerinde ilgili Konsolosluklar/Büyükelçilikler veya hizmetin gerektirdiği resmi kurumlar ile) ve yasal zorunluluklar gereği üçüncü taraflarla paylaşılabilir. Verileriniz, hizmetin gerektirmediği durumlar haricinde pazarlama amacıyla üçüncü taraflara satılmaz.
            </p>

            <h2 style={styles.sectionHeading}>7. Kullanıcı Hakları</h2>
            <p>Kişisel verilerinizle ilgili ilgili yasalara tabi olarak aşağıdaki haklara sahipsiniz:</p>
            <ul style={styles.list}>
                <li>Verilerinizin işlenip işlenmediğini öğrenme.</li>
                <li>Verileriniz işlenmişse buna ilişkin bilgi talep etme.</li>
                <li>Yanlış veya eksik işlenmiş verilerin düzeltilmesini isteme.</li>
                <li>**Rızanızı geri çekme ve verilerinizin silinmesini talep etme.**</li>
            </ul>
            <p>Bu haklarınızı kullanmak için lütfen yukarıdaki iletişim e-posta adresini kullanın.</p>
        </div>
    );
};

export default PrivacyPolicyPage;