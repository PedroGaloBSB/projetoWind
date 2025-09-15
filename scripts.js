document.addEventListener('DOMContentLoaded', () => {
    const testemunhos = document.querySelectorAll('.testemunho-item');
    let currentIndex = 0;

    function showTestemunho(index) {
        testemunhos.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    function nextTestemunho() {
        currentIndex = (currentIndex + 1) % testemunhos.length;
        showTestemunho(currentIndex);
    }

    if (testemunhos.length > 1) {
        setInterval(nextTestemunho, 5000); // Muda a cada 5 segundos
    }
});
