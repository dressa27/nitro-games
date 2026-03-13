document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Suave para os links internos
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Só aplica o scroll suave se o link for para uma seção na mesma página
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 2. Efeito de Brilho Dinâmico nos Cards
    const cards = document.querySelectorAll('.brand-summary, .card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.filter = "brightness(1.2)";
            card.style.transition = "0.4s";
            card.style.boxShadow = "0 0 20px rgba(16, 185, 129, 0.4)"; // Brilho verde
        });

        card.addEventListener('mouseleave', () => {
            card.style.filter = "brightness(1)";
            card.style.boxShadow = "none";
        });
    });

    // 3. Mensagem no console para confirmar que está rodando
    console.log("Portal Nitro Games carregado por Andressa Ribeiro.");
});