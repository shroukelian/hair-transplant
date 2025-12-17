document.addEventListener('DOMContentLoaded', function() {
    
    const menuToggle = document.querySelector('.menu-toggle'); 
    const menuClose = document.querySelector('.menu-close');  
    const headerNavWrapper = document.querySelector('.header-nav-wrapper');
    const body = document.body;
    
    function openMenu() {
        headerNavWrapper.classList.add('active');
        body.classList.add('menu-active');
    }

    function closeMenu() {
        headerNavWrapper.classList.remove('active');
        body.classList.remove('menu-active');
    }
    
    if (menuToggle) {
        menuToggle.addEventListener('click', openMenu);
    }
    
    if (menuClose) {
        menuClose.addEventListener('click', closeMenu);
    }
    
    if (headerNavWrapper) {
        headerNavWrapper.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    animatedElements.forEach(element => {
        element.classList.add('hidden-scroll');
        const delay = element.getAttribute('data-delay');
        if (delay) {
            element.style.transitionDelay = delay;
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hidden-scroll');
            } else {
                entry.target.classList.remove('show');
                entry.target.classList.add('hidden-scroll');
            }
        });
    }, {
        threshold: 0.15 
    });

    animatedElements.forEach((element) => {
        observer.observe(element);
    });
    
    
    // 3. Placeholder for other logic
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
