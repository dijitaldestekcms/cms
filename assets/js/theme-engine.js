/* Dizini: assets/js/theme-engine.js
   Açıklama: Tema değiştirme mantığı ve Yerel Depolama (LocalStorage) kaydı.
*/

const themeSwitcher = () => {
    const themes = ['default', 'modern', 'dark'];
    let currentThemeIndex = localStorage.getItem('themeIndex') || 0;

    const applyTheme = (index) => {
        const themeName = themes[index];
        document.documentElement.setAttribute('data-theme', themeName);
        localStorage.setItem('themeIndex', index);
        console.log(`Tema Değiştirildi: ${themeName.toUpperCase()}`);
    };

    // İlk yüklemede temayı uygula
    applyTheme(currentThemeIndex);

    // Dışarıdan tetiklenecek fonksiyon (Örn: Bir butona basıldığında)
    window.nextTheme = () => {
        currentThemeIndex = (parseInt(currentThemeIndex) + 1) % themes.length;
        applyTheme(currentThemeIndex);
    };
};

document.addEventListener('DOMContentLoaded', themeSwitcher);