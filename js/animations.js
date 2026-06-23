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
        { opacity: 0, scale: 0.5 },
        {
            opacity: 1,
            scale: 1,
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
    // Hero animations disabled to load everything at once immediately without glitches
}

// ========== SCROLL ANIMATIONS (SMOOTH POP-IN) ========== //
function initScrollAnimations() {
    // Scroll animations disabled to load everything at once immediately
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
