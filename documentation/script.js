document.addEventListener('DOMContentLoaded', () => {
    // --- INICIALIZAÇÃO DO MERMAID ---
    // É importante inicializar o Mermaid para renderizar os diagramas.
    try {
        mermaid.initialize({
            startOnLoad: true,
            securityLevel: 'loose',
            theme: document.body.classList.contains('dark') ? 'dark' : 'default',
        });
    } catch (e) {
        console.error("Erro ao inicializar o Mermaid.js:", e);
    }

    // --- ELEMENTOS DO DOM ---
    const themeToggle = document.getElementById('theme-toggle');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobile-overlay');
    const progressBar = document.getElementById('progressBar');
    const backToTopBtn = document.getElementById('back-to-top-btn');
    const navLinks = document.querySelectorAll('.nav-link');

    // --- GERENCIAMENTO DE TEMA ---
    const applyTheme = (theme) => {
        const themeIcon = document.getElementById('theme-icon');
        const themeText = document.getElementById('theme-text');
        if (theme === 'dark') {
            document.body.classList.add('dark');
            themeIcon.className = 'fas fa-sun';
            themeText.textContent = 'Light';
        } else {
            document.body.classList.remove('dark');
            themeIcon.className = 'fas fa-moon';
            themeText.textContent = 'Dark';
        }
    };

    const toggleTheme = () => {
        const isDark = document.body.classList.contains('dark');
        const newTheme = isDark ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    // Carregar tema salvo
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeToggle.addEventListener('click', toggleTheme);

    // --- MENU MOBILE ---
    const toggleMobileMenu = () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
    };

    const closeMobileMenu = () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);
    navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

    // --- BARRA DE PROGRESSO E BOTÃO 'VOLTAR AO TOPO' ---
    const handleScroll = () => {
        // Lógica da Barra de Progresso
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = `${scrollPercent}%`;

        // Lógica do Botão 'Voltar ao Topo'
        if (scrollTop > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', handleScroll);
    backToTopBtn.addEventListener('click', scrollToTop);

    // --- NAVEGAÇÃO ATIVA E SCROLL SUAVE ---
    const updateActiveNavigation = () => {
        const sections = document.querySelectorAll('.section');
        let current = '';
        const offset = window.innerHeight / 3;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= offset && rect.bottom >= offset) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };
    
    // Scroll Suave para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const offsetTop = targetElement.offsetTop - headerHeight - 20;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Inicializar e adicionar listeners de scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveNavigation, 50);
    });
    
    updateActiveNavigation(); // Executa na carga inicial

    // --- BOTÃO DE COPIAR CÓDIGO ---
    const allCopyButtons = document.querySelectorAll('.copy-btn');

    allCopyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const currentButton = e.currentTarget;
            const codeBlock = currentButton.closest('.code-block');
            const codeToCopy = codeBlock.querySelector('pre code').innerText;

            // Usa um elemento textarea para copiar o texto
            const textArea = document.createElement('textarea');
            textArea.value = codeToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            
            try {
                document.execCommand('copy');
                // Feedback visual
                currentButton.innerHTML = '<i class="fas fa-check"></i> Copiado!';
                setTimeout(() => {
                    currentButton.innerHTML = '<i class="fas fa-copy"></i> Copiar';
                }, 2000);
            } catch (err) {
                console.error('Falha ao copiar o texto: ', err);
                currentButton.innerHTML = '<i class="fas fa-times"></i> Erro';
                 setTimeout(() => {
                    currentButton.innerHTML = '<i class="fas fa-copy"></i> Copiar';
                }, 2000);
            }

            document.body.removeChild(textArea);
        });
    });
});
