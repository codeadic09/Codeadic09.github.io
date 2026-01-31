// ==============================================
// COMPLETE ANIMATIONS - WITH MOBILE MENU
// ==============================================

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Animate logo on load
    animateLogo();
    
    // Mobile menu animations
    initMobileMenuAnimations();
    
    // Start hero animations
    setTimeout(() => {
        initHeroAnimations();
        initTextRollingAnimation();
        initScrollAnimations();
    }, 500);
});

// ========== LOGO ANIMATION ========== //
function animateLogo() {
    gsap.fromTo('.logo-img',
        { opacity: 0, scale: 0.5, rotation: -180 },
        { 
            opacity: 1, 
            scale: 1, 
            rotation: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
            delay: 0.3
        }
    );
    
    gsap.fromTo('.logo-text',
        { opacity: 0, x: -20 },
        { 
            opacity: 1, 
            x: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: 0.5
        }
    );
}

// ========== MOBILE MENU ANIMATIONS (DROPDOWN) ========== //
function initMobileMenuAnimations() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    if (!hamburger || !mobileMenu) return;
    
    // Set initial state for links
    gsap.set(mobileLinks, { opacity: 0, y: -10 });
    
    hamburger.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
            // Animate dropdown
            gsap.to(mobileMenu, {
                duration: 0.4,
                ease: 'back.out(1.5)'
            });
            
            // Animate links stagger
            gsap.to(mobileLinks, {
                opacity: 1,
                y: 0,
                stagger: 0.05,
                duration: 0.3,
                ease: 'power2.out',
                delay: 0.1
            });
        } else {
            // Reset links when closing
            gsap.to(mobileLinks, {
                opacity: 0,
                y: -10,
                duration: 0.2,
                ease: 'power2.in'
            });
        }
    });
}


// ========== TEXT ROLLING ANIMATION ========== //
function initTextRollingAnimation() {
    const roleTexts = document.querySelectorAll('.role-text');
    if (roleTexts.length === 0) return;
    
    roleTexts.forEach((text, index) => {
        gsap.set(text, { y: index * 100 + '%', opacity: 1 });
    });
    
    function animateRoles() {
        roleTexts.forEach((text) => {
            gsap.to(text, {
                y: '-=100%',
                duration: 0.8,
                ease: 'power2.inOut',
                onComplete: () => {
                    let currentY = parseFloat(gsap.getProperty(text, 'y'));
                    if (currentY <= -100) {
                        gsap.set(text, { y: (roleTexts.length - 1) * 100 + '%' });
                    }
                }
            });
        });
    }
    
    setInterval(animateRoles, 3000);
}

// ========== HERO ANIMATIONS (NAME & IMAGE TOGETHER) ========== //
function initHeroAnimations() {
    const tl = gsap.timeline({ 
        defaults: { 
            ease: 'back.out(1.5)',
            duration: 0.5
        } 
    });
    
    // Step 1: Greeting appears
    tl.fromTo('.hero-greeting',
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0 }
    )
    // Step 2: Name and Image pop together with 20ms delay
    .fromTo(['.hero-name', '.image-wrapper'],
        { opacity: 0, scale: 0.92, y: 30 },
        { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            duration: 0.6,
            delay: 0.02
        },
        '-=0.2'
    )
    // Step 3: Role wrapper
    .fromTo('.hero-title-wrapper',
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0 },
        '-=0.2'
    )
    // Step 4: Description
    .fromTo('.hero-description',
        { opacity: 0, scale: 0.97, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5 },
        '-=0.2'
    )
    // Step 5: Buttons (one by one)
    .fromTo('.hero-cta .btn',
        { opacity: 0, scale: 0.9, y: 15 },
        { opacity: 1, scale: 1, y: 0, stagger: 0.1, duration: 0.4 },
        '-=0.15'
    );
}

// ========== SCROLL ANIMATIONS (SMOOTH POP-IN) ========== //
function initScrollAnimations() {
    
    // ===== ABOUT SECTION ===== //
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    if (aboutParagraphs.length > 0) {
        gsap.fromTo('.about-text p',
            { opacity: 0, scale: 0.97, y: 10 },
            {
                scrollTrigger: {
                    trigger: '.about-section',
                    start: 'top 80%',
                    once: true
                },
                opacity: 1,
                scale: 1,
                y: 0,
                stagger: 0.05,
                duration: 0.4,
                ease: 'back.out(1.5)'
            }
        );
    }
    
    const skillsHeading = document.querySelector('.skills-heading');
    if (skillsHeading) {
        gsap.fromTo('.skills-heading',
            { opacity: 0, scale: 0.97 },
            {
                scrollTrigger: {
                    trigger: '.skills-heading',
                    start: 'top 85%',
                    once: true
                },
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: 'back.out(1.5)'
            }
        );
    }
    
    const skillCards = document.querySelectorAll('.skill-card');
    if (skillCards.length > 0) {
        gsap.fromTo('.skill-card',
            { opacity: 0, scale: 0.9 },
            {
                scrollTrigger: {
                    trigger: '.skills-grid',
                    start: 'top 80%',
                    once: true
                },
                opacity: 1,
                scale: 1,
                stagger: 0.05,
                duration: 0.4,
                ease: 'back.out(1.4)'
            }
        );
    }
    
    // ===== PROJECTS SECTION ===== //
    const projectsTitle = document.querySelector('.projects-section .section-title');
    if (projectsTitle) {
        gsap.fromTo('.projects-section .section-title',
            { opacity: 0, scale: 0.97 },
            {
                scrollTrigger: {
                    trigger: '.projects-section',
                    start: 'top 80%',
                    once: true
                },
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: 'back.out(1.5)'
            }
        );
    }
    
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length > 0) {
        gsap.fromTo('.project-card',
            { opacity: 0, scale: 0.92 },
            {
                scrollTrigger: {
                    trigger: '.projects-grid',
                    start: 'top 80%',
                    once: true
                },
                opacity: 1,
                scale: 1,
                stagger: 0.06,
                duration: 0.45,
                ease: 'back.out(1.3)'
            }
        );
    }
    
    // ===== EXPERIENCE SECTION ===== //
    const experienceTitle = document.querySelector('.experience-section .section-title');
    if (experienceTitle) {
        gsap.fromTo('.experience-section .section-title',
            { opacity: 0, scale: 0.97 },
            {
                scrollTrigger: {
                    trigger: '.experience-section',
                    start: 'top 80%',
                    once: true
                },
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: 'back.out(1.5)'
            }
        );
    }
    
    const categoryTitles = document.querySelectorAll('.category-title');
    if (categoryTitles.length > 0) {
        gsap.fromTo('.category-title',
            { opacity: 0, scale: 0.97 },
            {
                scrollTrigger: {
                    trigger: '.experience-grid',
                    start: 'top 80%',
                    once: true
                },
                opacity: 1,
                scale: 1,
                stagger: 0.05,
                duration: 0.4,
                ease: 'back.out(1.4)'
            }
        );
    }
    
    const experienceItems = document.querySelectorAll('.experience-item');
    if (experienceItems.length > 0) {
        gsap.fromTo('.experience-item',
            { opacity: 0, scale: 0.95 },
            {
                scrollTrigger: {
                    trigger: '.experience-grid',
                    start: 'top 75%',
                    once: true
                },
                opacity: 1,
                scale: 1,
                stagger: 0.05,
                duration: 0.4,
                ease: 'back.out(1.3)'
            }
        );
    }
    
    // ===== CONTACT SECTION ===== //
    const contactTitle = document.querySelector('.contact-section .section-title');
    if (contactTitle) {
        gsap.fromTo('.contact-section .section-title',
            { opacity: 0, scale: 0.97 },
            {
                scrollTrigger: {
                    trigger: '.contact-section',
                    start: 'top 80%',
                    once: true
                },
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: 'back.out(1.5)'
            }
        );
    }
    
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    
    if (contactInfo || contactForm) {
        gsap.fromTo(['.contact-info', '.contact-form'],
            { opacity: 0, scale: 0.96 },
            {
                scrollTrigger: {
                    trigger: '.contact-wrapper',
                    start: 'top 80%',
                    once: true
                },
                opacity: 1,
                scale: 1,
                stagger: 0.08,
                duration: 0.45,
                ease: 'back.out(1.3)'
            }
        );
    }
    
    const socialLinks = document.querySelectorAll('.social-link');
    if (socialLinks.length > 0) {
        gsap.fromTo('.social-link',
            { opacity: 0, scale: 0.95 },
            {
                scrollTrigger: {
                    trigger: '.social-links',
                    start: 'top 85%',
                    once: true
                },
                opacity: 1,
                scale: 1,
                stagger: 0.04,
                duration: 0.35,
                ease: 'back.out(1.4)'
            }
        );
    }
    
    const formGroups = document.querySelectorAll('.form-group');
    if (formGroups.length > 0) {
        gsap.fromTo('.form-group',
            { opacity: 0, scale: 0.97 },
            {
                scrollTrigger: {
                    trigger: '.contact-form',
                    start: 'top 80%',
                    once: true
                },
                opacity: 1,
                scale: 1,
                stagger: 0.05,
                duration: 0.35,
                ease: 'back.out(1.3)'
            }
        );
    }
    
    // Resume Download Section
    const resumeDownload = document.querySelector('.resume-download');
    if (resumeDownload) {
        gsap.fromTo('.resume-download',
            { opacity: 0, scale: 0.95 },
            {
                scrollTrigger: {
                    trigger: '.resume-download',
                    start: 'top 85%',
                    once: true
                },
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: 'back.out(1.4)'
            }
        );
    }
    
    // ===== FOOTER ===== //
    const footerContent = document.querySelector('.footer-content');
    if (footerContent) {
        gsap.fromTo('.footer-content',
            { opacity: 0, scale: 0.97 },
            {
                scrollTrigger: {
                    trigger: '.footer',
                    start: 'top 90%',
                    once: true
                },
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: 'back.out(1.4)'
            }
        );
    }
}

// ========== HOVER ANIMATIONS ========== //
document.addEventListener('DOMContentLoaded', () => {
    
    // Skill cards hover
    document.querySelectorAll('.skill-card').forEach(card => {
        const icon = card.querySelector('i');
        if (icon) {
            card.addEventListener('mouseenter', () => {
                gsap.to(icon, { 
                    scale: 1.15, 
                    rotation: 5, 
                    duration: 0.3,
                    ease: 'back.out(2)' 
                });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(icon, { 
                    scale: 1, 
                    rotation: 0, 
                    duration: 0.3,
                    ease: 'power2.out' 
                });
            });
        }
    });
    
    // Buttons hover
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, { 
                scale: 1.05, 
                duration: 0.25,
                ease: 'back.out(1.5)' 
            });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { 
                scale: 1, 
                duration: 0.25,
                ease: 'power2.out' 
            });
        });
    });
    
    // Project cards hover
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { 
                y: -10, 
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out' 
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { 
                y: 0,
                scale: 1, 
                duration: 0.3,
                ease: 'power2.out' 
            });
        });
    });
    
    // Experience items hover
    document.querySelectorAll('.experience-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { 
                x: 5,
                duration: 0.3,
                ease: 'power2.out' 
            });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, { 
                x: 0,
                duration: 0.3,
                ease: 'power2.out' 
            });
        });
    });
    
    // Social links hover
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, { 
                x: 5,
                duration: 0.3,
                ease: 'power2.out' 
            });
        });
        link.addEventListener('mouseleave', () => {
            gsap.to(link, { 
                x: 0,
                duration: 0.3,
                ease: 'power2.out' 
            });
        });
    });
});

// ========== PERFORMANCE OPTIMIZATION ========== //
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// ========== SMOOTH SCROLL PERFORMANCE ========== //
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            ticking = false;
        });
        ticking = true;
    }
});
