document.addEventListener('DOMContentLoaded', () => {
    // Typed.js per animazione nome
    const typedit = new Typed('#typed-name-it', {
        strings: ['Fabio', 'uno Sviluppatore', 'un Designer', 'un Fotografo'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });


    // Smooth scrolling per i link di navigazione
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Gestione del form di contatto
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Grazie per il tuo messaggio! Ti risponderò presto.');
        contactForm.reset();
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Skill items animation
    gsap.utils.toArray('.skill-item').forEach(item => {
        gsap.fromTo(item, 
            { opacity: 0, y: 50 }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%'
                }
            }
        );
    });

    // Project cards animation
    gsap.utils.toArray('.project-card').forEach(card => {
        gsap.fromTo(card, 
            { opacity: 0, scale: 0.8 }, 
            { 
                opacity: 1, 
                scale: 1, 
                duration: 0.8, 
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%'
                }
            }
        );
    });

    // Enhanced parallax effect
    window.addEventListener('mousemove', (e) => {
        const parallaxBg = document.querySelector('.parallax-background');
        const moveX = (e.clientX * -1 / 50);
        const moveY = (e.clientY * -1 / 50);
        parallaxBg.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    });

    // Skill progress animation
    gsap.utils.toArray('.skill-item').forEach(item => {
        const progress = item.querySelector('.skill-progress');
        gsap.fromTo(progress, 
            { width: 0 }, 
            { 
                width: progress.style.width, 
                duration: 1.5, 
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%'
                }
            }
        );
    });

    // Glitch effect
    function createGlitchEffect(element) {
        element.addEventListener('mouseenter', () => {
            element.style.animation = 'glitch-animation 0.3s infinite';
        });
        element.addEventListener('mouseleave', () => {
            element.style.animation = 'none';
        });
    }

    document.querySelectorAll('.glitch-effect').forEach(createGlitchEffect);

    // ScrollReveal animations
    ScrollReveal().reveal('.hero-text', { delay: 300, distance: '50px', origin: 'bottom' });
    ScrollReveal().reveal('.about-text', { delay: 400, distance: '50px', origin: 'left' });
    ScrollReveal().reveal('.skills-grid', { delay: 500, distance: '50px', origin: 'bottom' });
    ScrollReveal().reveal('.project-grid', { delay: 600, distance: '50px', origin: 'bottom' });
});

const typeden = new Typed('#typed-name-en', {
    strings: ['Fabio', 'a Developer', 'a Designer', 'a Photographer'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});
