document.addEventListener('DOMContentLoaded', function() {
    // Code du formulaire de contact
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
    alert("Merci pour votre message ! Nous vous contacterons bientôt.");
            this.reset();
});
    }

    // Code pour Typed.js
    const animationElement = document.querySelector('.animation');
    if (animationElement && typeof Typed !== 'undefined') {
var typed = new Typed('.animation', {
    strings: ['Bienvenue', 'Chez GYA Foncière'],
    typeSpeed: 200,
    backSpeed: 200,
            loop: true
        });
    }

    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Empêche la propagation du clic
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Fermer le menu en cliquant ailleurs
    document.addEventListener('click', function(e) {
        const nav = document.querySelector('nav');
        const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
        
        if (nav && nav.classList.contains('active')) {
            if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                nav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        }
    });

    // Code pour le slider
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach(slide => {
                slide.style.display = 'none';
                slide.classList.remove('active');
            });
            slides[index].style.display = 'block';
            slides[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // Montrer la première slide
        showSlide(0);

        // Changer de slide toutes les 5 secondes
        setInterval(nextSlide, 5000);
    }

    // Animation du header au scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Animation des éléments au scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about-text, .about-image, .footer, .contact-info-section, .contact-form-section');
        elements.forEach(element => {
            if (element) {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                if (elementTop < window.innerHeight && elementBottom > 0) {
                    element.classList.add('animate');
                }
            }
        });
    };

    if (document.querySelectorAll('.about-text, .about-image, .footer, .contact-info-section, .contact-form-section').length > 0) {
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll();
    }

    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});