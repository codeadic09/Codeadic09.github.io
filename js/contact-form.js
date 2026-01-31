// ==============================================
// CONTACT FORM HANDLER - WEB3FORMS
// ==============================================

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form elements
        const submitButton = form.querySelector('.btn-submit');
        const buttonText = submitButton.querySelector('.button-text');
        const originalText = buttonText.textContent;
        
        // Clear previous status
        formStatus.style.display = 'none';
        formStatus.className = 'form-status';
        
        // Disable button and show loading state
        submitButton.disabled = true;
        buttonText.textContent = 'Sending...';
        submitButton.style.opacity = '0.7';
        
        try {
            // Get form data
            const formData = new FormData(form);
            
            // Send to Web3Forms
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Success
                showStatus('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
                form.reset();
                
                // Success animation
                gsap.to(formStatus, {
                    scale: 1.05,
                    duration: 0.2,
                    yoyo: true,
                    repeat: 1
                });
            } else {
                // Error from server
                const data = await response.json();
                if (data.errors) {
                    showStatus('❌ ' + data.errors.map(error => error.message).join(', '), 'error');
                } else {
                    showStatus('❌ Oops! There was a problem. Please try again.', 'error');
                }
            }
        } catch (error) {
            // Network error
            console.error('Form submission error:', error);
            showStatus('❌ Network error. Please check your connection and try again.', 'error');
        } finally {
            // Re-enable button
            submitButton.disabled = false;
            buttonText.textContent = originalText;
            submitButton.style.opacity = '1';
        }
    });
    
    // Show status message function
    function showStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;
        formStatus.style.display = 'block';
        
        // Smooth fade in
        gsap.fromTo(formStatus, 
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.3 }
        );
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            gsap.to(formStatus, {
                opacity: 0,
                y: -10,
                duration: 0.3,
                onComplete: () => {
                    formStatus.style.display = 'none';
                }
            });
        }, 5000);
    }
    
    // Real-time validation (optional enhancement)
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Remove error state on input
            if (this.classList.contains('error')) {
                this.classList.remove('error');
            }
        });
    });
    
    function validateField(field) {
        if (field.hasAttribute('required') && !field.value.trim()) {
            field.classList.add('error');
            return false;
        }
        
        if (field.type === 'email' && field.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                field.classList.add('error');
                return false;
            }
        }
        
        field.classList.remove('error');
        return true;
    }
});
