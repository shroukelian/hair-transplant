document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // 1. منطق قائمة الهامبرغر (Mobile Menu)
    // ===================================
    const menuToggle = document.querySelector('.menu-toggle'); // زر الهامبرغر
    const menuClose = document.querySelector('.menu-close');   // زر الإغلاق الجديد (X)
    const headerNavWrapper = document.querySelector('.header-nav-wrapper');
    const body = document.body;
    
    // وظيفة فتح القائمة
    function openMenu() {
        headerNavWrapper.classList.add('active');
        body.classList.add('menu-active');
    }

    // وظيفة إغلاق القائمة
    function closeMenu() {
        headerNavWrapper.classList.remove('active');
        body.classList.remove('menu-active');
    }
    
    // ربط زر الهامبرغر بالفتح
    if (menuToggle) {
        menuToggle.addEventListener('click', openMenu);
    }
    
    // ربط زر الإغلاق بالوظيفة
    if (menuClose) {
        menuClose.addEventListener('click', closeMenu);
    }
    
    // إغلاق القائمة عند النقر على أي رابط داخلها 
    if (headerNavWrapper) {
        headerNavWrapper.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // ===================================
    // 2. منطق حركة الظهور عند التمرير (Scroll Reveal)
    // ===================================
    // ... (هذا القسم يظل كما هو) ...
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
