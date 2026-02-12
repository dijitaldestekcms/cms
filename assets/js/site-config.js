/* Dizini: assets/js/site-config.js
   Açıklama: Admin panelden gelen dinamik ayarları tutan ve uygulayan motor.
*/

const SiteConfig = {
    // 1. GÖRSEL AYARLAR (Admin Panelden Değiştirilebilir)
    styles: {
        primaryColor: '#1e3a8a',
        backgroundColor: '#f8fafc',
        fontFamily: "'Inter', sans-serif",
        borderRadius: '12px',
        cardColor: '#ffffff'
    },

    // 2. YERLEŞİM (LAYOUT) AYARLARI 
    // Admin panelde sürükle bırak yapıldığında bu dizilim değişecek
    homePageLayout: [
        { id: 'hero', active: true, order: 1 },
        { id: 'slider', active: true, order: 2 },
        { id: 'about', active: true, order: 3 },
        { id: 'services-grid', active: false, order: 4 }, // Bu temada kapalı olabilir
        { id: 'products-carousel', active: true, order: 5 }
    ]
};

// Ayarları Sayfaya Uygulayan Fonksiyon
function applyAdminSettings() {
    const root = document.documentElement;
    const s = SiteConfig.styles;

    // CSS Değişkenlerini Admin Ayarlarıyla Ezme
    root.style.setProperty('--accent', s.primaryColor);
    root.style.setProperty('--bg-page', s.backgroundColor);
    root.style.setProperty('--font-main', s.fontFamily);
    root.style.setProperty('--radius-lg', s.borderRadius);
    root.style.setProperty('--bg-card', s.cardColor);

    // Yerleşimi Düzenleme
    const mainContainer = document.getElementById('app-content');
    const sections = Array.from(mainContainer.children);

    // Adminin belirlediği sıraya göre elementleri diz
    SiteConfig.homePageLayout
        .sort((a, b) => a.order - b.order)
        .forEach(config => {
            const el = document.getElementById(config.id);
            if (el) {
                el.style.display = config.active ? 'block' : 'none';
                mainContainer.appendChild(el); // Sıralamayı değiştirir
            }
        });
}

document.addEventListener('DOMContentLoaded', applyAdminSettings);