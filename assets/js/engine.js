/* Dizini: assets/js/engine.js 
   Açıklama: Görsel etkileşim ve scroll animasyon tetikleyicileri.
*/

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    
    // Scroll edilince Navbar'ın daha belirgin olması
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.top = '10px';
            document.querySelector('.navbar').style.padding = '0.6rem 2rem';
        } else {
            header.style.top = '20px';
            document.querySelector('.navbar').style.padding = '0.8rem 2.5rem';
        }
    });

    // Kartlar için basit giriş animasyonu (Intersection Observer)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .team-item, .blog-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
});