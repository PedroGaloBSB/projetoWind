// Função que é executada quando o conteúdo da página é totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    
    // --- CÓDIGO DO CARROSSEL DE TESTEMUNHOS (JÁ EXISTENTE) ---
    const depoimentos = document.querySelectorAll('.depoimentos-item');
    let currentIndex = 0;

    function showDepoimentos(index) {
        depoimentos.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    function nextDepoimentos() {
        currentIndex = (currentIndex + 1) % depoimentos.length;
        showDepoimentos(currentIndex);
    }

    if (depoimentos.length > 1) {
        setInterval(nextdepoimentos, 5000); // Muda a cada 5 segundos
    }

    // --- NOVO CÓDIGO PARA TRADUÇÃO ---

    // Função para definir o idioma inicial (pode ser 'pt', 'en', ou 'es')
    // Vamos começar com português como padrão.
    setLanguage('pt');
});

// Função principal que troca o idioma da página
function changeLanguage(lang) {
    setLanguage(lang);
}

// Função que efetivamente faz a tradução
function setLanguage(lang) {
    // Pega todos os elementos que têm a nossa "etiqueta" de tradução
    const elementsToTranslate = document.querySelectorAll('[data-translate-key]');
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate-key');
        // Busca a tradução no nosso dicionário (translations.js)
        const translation = translations[lang][key];
        
        if (translation) {
            // Se o elemento for o <title> da página, muda o document.title
            if (element.tagName === 'TITLE') {
                document.title = translation;
            } else {
                // Para todos os outros elementos, muda o texto interno
                element.innerHTML = translation;
            }
        }
    });

    // Atualiza o atributo 'lang' da tag <html> para o idioma atual
    document.documentElement.setAttribute('lang', lang.toUpperCase());

    // Atualiza o estilo do link de idioma ativo
    updateActiveLanguageLink(lang);
}

// Função para destacar o link do idioma que está ativo
function updateActiveLanguageLink(lang) {
    // Remove a classe 'active' de todos os links de idioma
    document.querySelectorAll('.lang-link').forEach(link => {
        link.classList.remove('active');
    });

    // Adiciona a classe 'active' apenas ao link do idioma selecionado
    const activeLink = document.getElementById(`lang-${lang}`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}
