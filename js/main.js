// JavaScript para filtrar elementos por categoria e alterar a cor
const categoryLinks = document.querySelectorAll('ul li a');
const elementCards = document.querySelectorAll('.element-card');

categoryLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedCategory = e.target.getAttribute('data-category');

        elementCards.forEach((card) => {
            if (selectedCategory === 'all' || card.classList.contains(selectedCategory)) {
                // Altere a cor de fundo dos elementos filtrados
                card.style.backgroundColor = getColorByCategory(selectedCategory);
            } else {
                // Restaure a cor de fundo padrão dos elementos não filtrados
                card.style.backgroundColor = '';
            }
        });
    });
});

// Função para obter a cor com base na categoria
function getColorByCategory(category) {
    switch (category) {
        case 'nao-metal':
            return 'rgb(180, 210, 100, 0.200)';
        case 'gas-nobre':
            return 'hsl(202, 68%, 64%, 0.300)';
        case 'metal-alcalino':
            return 'rgb(245,200,100, 0.200)';
        case 'metal-alcalino-terroso':
            return 'rgb(240,230,90, 0.100)';
        case 'semimetal':
            return 'rgb(110,200,190, 0.300)';
        case 'halogenio':
            return 'rgb(170,225,255, 0.200)';
        case 'outros-metais':
            return 'rgb(190,210,210, 0.300)';
        case 'metal-transicao':
            return 'rgb(245,175,175, 0.300)';
        case 'lantanideo':
            return 'rgb(150,225,225, 0.300)';
        case 'actinidio':
            return 'rgb(230,190,220, 0.300)';
        default:
            return ''; // Cor padrão
    }
}