// Vertical Scrolling Role Text Animation
function initRoleScrollAnimation() {
    const roleTexts = document.querySelectorAll('.role-text');
    const totalRoles = roleTexts.length;
    let currentIndex = 0;
    
    // Set initial positions - stack them vertically
    roleTexts.forEach((text, index) => {
        gsap.set(text, { y: index * 100 + '%' });
    });
    
    function scrollRoles() {
        currentIndex = (currentIndex + 1) % totalRoles;
        
        // Scroll all items up
        roleTexts.forEach((text) => {
            gsap.to(text, {
                y: '-=100%',
                duration: 0.8,
                ease: 'power2.inOut',
                onComplete: function() {
                    // Reset position if scrolled too far up
                    const currentY = gsap.getProperty(text, 'y');
                    if (currentY <= -100) {
                        gsap.set(text, { y: (totalRoles - 1) * 100 + '%' });
                    }
                }
            });
        });
        
        // Continue loop - 1. → 2. → 3. → 1.
        gsap.delayedCall(1.5, scrollRoles);
    }
    
    // Start animation after initial load
    gsap.delayedCall(2, scrollRoles);
}

// Initialize after page load
window.addEventListener('load', () => {
    initRoleScrollAnimation();
});

 


// ============================
// REPEATABLE FADE-IN ANIMATIONS
// Fades in every time you scroll down to it
// ============================

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    initAnimations();
  }, 3500);
});


const isMobile = window.innerWidth <= 768;

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    // Only initialize animations on desktop
    if (!isMobile) {
      initAnimations();
    } else {
      // On mobile, show all content immediately (no animations)
      showAllContent();
    }
  }, 3500);
});

// Function to show all content on mobile (no animations)
function showAllContent() {
  gsap.set([
    '.hero-content',
    '.about-section',
    '.projects-section',
    '.experience-section',
    '.contact-section',
    '.section-title',
    '.project-card',
    '.experience-item'
  ], {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)'
  });
  
  console.log('✅ Mobile mode - animations disabled');
}


function initAnimations() {
  
  // ============================
  // HERO SECTION
  // ============================
  
//   gsap.from('.hero-content', {
//     opacity: 0,
//     y: 30,
//     duration: 1,
//     ease: 'power2.out',
//     delay: 0.3
//   });
  
  // ============================
  // ABOUT SECTION
  // ============================
  
  gsap.fromTo('.about-section',
    {
      opacity: 0,
      y: 50
    },
    {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset'
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }
  );
  
  gsap.fromTo('.about-section .section-title',
    {
      opacity: 0,
      y: 30
    },
    {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset'
      },
      opacity: 1,
      y: 0,
      duration: 0.4,
      delay: 0.2,
      ease: 'power2.out'
    }
  );
  
  // ============================
  // PROJECTS SECTION
  // ============================
  
  gsap.fromTo('.projects-section',
    {
      opacity: 0,
      y: 50
    },
    {
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset'
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }
  );
  
  gsap.fromTo('.projects-section .section-title',
    {
      opacity: 0,
      y: 30
    },
    {
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top 75%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset'
      },
      opacity: 1,
      y: 0,
      duration: 0.2,
      delay: 0.2,
      ease: 'power2.out'
    }
  );
  
  gsap.fromTo('.project-card',
    {
      opacity: 0,
      y: 40
    },
    {
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 75%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset'
      },
      opacity: 1,
      y: 0,
      duration: 0.2,
      stagger: 0.2,
      ease: 'power2.out'
    }
  );
  
  // ============================
  // EXPERIENCE SECTION
  // ============================
  
  gsap.fromTo('.experience-section',
    {
      opacity: 0,
      y: 50
    },
    {
      scrollTrigger: {
        trigger: '.experience-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset'
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }
  );
  
  gsap.fromTo('.experience-section .section-title',
    {
      opacity: 0,
      y: 30
    },
    {
      scrollTrigger: {
        trigger: '.experience-section',
        start: 'top 75%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset'
      },
      opacity: 1,
      y: 0,
      duration: 0.2,
      delay: 0.2,
      ease: 'power2.out'
    }
  );
  
  gsap.fromTo('.experience-item',
    {
      opacity: 0,
      y: 40
    },
    {
      scrollTrigger: {
        trigger: '.experience-timeline',
        start: 'top 75%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset'
      },
      opacity: 1,
      y: 0,
      duration: 0.2,
      stagger: 0.2,
      ease: 'power2.out'
    }
  );
  
  // ============================
  // CONTACT SECTION
  // ============================
  
  gsap.fromTo('.contact-section',
    {
      opacity: 0,
      y: 50
    },
    {
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset'
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }
  );
  
  gsap.fromTo('.contact-section .section-title',
    {
      opacity: 0,
      y: 30
    },
    {
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 75%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset'
      },
      opacity: 1,
      y: 0,
      duration: 0.2,
      delay: 0.2,
      ease: 'power2.out'
    }
  );
  
  console.log('✅ Repeatable fade-in animations initialized');
}

window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});
