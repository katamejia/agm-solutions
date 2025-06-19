document.addEventListener("DOMContentLoaded", function () {
    // Slideshow functionality
    const images = document.querySelectorAll(".image-slideshow img");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    // Start slideshow if there are images
    if (images.length > 0) {
        setInterval(showNextImage, 3000);
    }

    // Fact numbers animation
    const factNumbers = document.querySelectorAll('.fact-number');
    
    function animateFactNumbers() {
        factNumbers.forEach(number => {
            number.classList.remove('animate');
        });
        
        factNumbers.forEach((number, index) => {
            setTimeout(() => {
                number.classList.add('animate');
            }, index * 500);
        });
    }

    // Observer for facts section
    const factsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateFactNumbers();
            }
        });
    }, { threshold: 0.5 });

    const factsSection = document.querySelector('.facts-section');
    if (factsSection) {
        factsObserver.observe(factsSection);
    }

    // Title animation
    const title = document.querySelector('.title');
    
    function triggerAnimation() {
        title.classList.remove('animate');
        void title.offsetWidth;
        title.classList.add('animate');
    }

    triggerAnimation();

    // Scroll handling
    let lastScrollTop = 0;
    let isAnimating = false;

    function handleScroll() {
        if (isAnimating) return;

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (Math.abs(scrollTop - lastScrollTop) > 50) {
            isAnimating = true;
            
            title.classList.add('fade-out');
            title.classList.remove('fade-in');
            
            setTimeout(() => {
                title.classList.remove('fade-out');
                title.classList.add('fade-in');
                
                setTimeout(() => {
                    isAnimating = false;
                }, 1000);
            }, 1000);
            
            lastScrollTop = scrollTop;
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Mobile menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
            nav.classList.remove('active');
        }
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                nav.classList.remove('active');
            }
        });
    });

    // Comentario de prueba