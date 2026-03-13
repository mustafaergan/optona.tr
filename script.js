document.addEventListener('DOMContentLoaded', () => {
    console.log("Optona.tr dinamik site yüklendi!");
    
    // Basit bir scroll animasyonu
    const cards = document.querySelectorAll('.card');
    window.addEventListener('scroll', () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if(cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    });
});
