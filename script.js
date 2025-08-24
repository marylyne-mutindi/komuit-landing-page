// Initialize AOS (Animate On Scroll) library
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// Navbar functionality
class NavbarHandler {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }

    init() {
        // Handle scroll effect on navbar
        this.handleScroll();
        
        // Handle mobile menu toggle
        this.handleMobileMenu();
        
        // Handle smooth scrolling for nav links
        this.handleSmoothScroll();
        
        // Close mobile menu when clicking nav links
        this.handleNavLinkClick();
    }

    handleScroll() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        });
    }

    handleMobileMenu() {
        this.navToggle.addEventListener('click', () => {
            this.navMenu.classList.toggle('active');
            
            // Toggle hamburger icon
            const icon = this.navToggle.querySelector('i');
            if (this.navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    handleSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    handleNavLinkClick() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.navMenu.classList.remove('active');
                const icon = this.navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

// Hero Animation Handler
class HeroAnimationHandler {
    constructor() {
        this.steps = document.querySelectorAll('.story-step');
        this.currentStep = 0;
        this.intervalId = null;
        
        this.init();
    }

    init() {
        this.startAnimation();
    }

    startAnimation() {
        // Start the animation after a short delay
        setTimeout(() => {
            this.intervalId = setInterval(() => {
                this.nextStep();
            }, 2500); // Change step every 2.5 seconds
        }, 1000);
    }

    nextStep() {
        // Remove active class from current step
        this.steps[this.currentStep].classList.remove('active');
        
        // Move to next step (loop back to first if at end)
        this.currentStep = (this.currentStep + 1) % this.steps.length;
        
        // Add active class to new current step
        this.steps[this.currentStep].classList.add('active');
    }

    stopAnimation() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}

// About Section Journey Animation
class AboutJourneyAnimation {
    constructor() {
        this.steps = document.querySelectorAll('.journey-step');
        this.currentStep = 0;
        this.intervalId = null;
        
        if (this.steps.length > 0) {
            this.init();
        }
    }
    
    init() {
        // Start the animation cycle
        this.startAnimation();
        
        // Pause animation when section is not visible
        this.setupVisibilityObserver();
    }
    
    startAnimation() {
        this.intervalId = setInterval(() => {
            this.nextStep();
        }, 2500);
    }
    
    stopAnimation() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    
    nextStep() {
        // Remove active class from current step
        if (this.steps[this.currentStep]) {
            this.steps[this.currentStep].classList.remove('active');
        }
        
        // Move to next step
        this.currentStep = (this.currentStep + 1) % this.steps.length;
        
        // Add active class to new current step
        if (this.steps[this.currentStep]) {
            this.steps[this.currentStep].classList.add('active');
        }
    }
    
    setupVisibilityObserver() {
        const aboutSection = document.querySelector('.about');
        if (!aboutSection) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.startAnimation();
                } else {
                    this.stopAnimation();
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(aboutSection);
    }
}

// Contact Form Handler
class ContactFormHandler {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this.form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Simple validation
        if (!name || !email || !message) {
            this.showMessage('Please fill in all fields.', 'error');
            return;
        }

        // Simulate form submission
        this.showMessage('Thank you! Your message has been sent.', 'success');
        this.form.reset();
    }

    showMessage(text, type) {
        // Remove any existing message
        const existingMessage = this.form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message element
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = text;
        
        // Add styles for message
        messageElement.style.cssText = `
            padding: 12px;
            margin-top: 15px;
            border-radius: 6px;
            text-align: center;
            font-weight: 500;
            ${type === 'success' ? 
                'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;' : 
                'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
            }
        `;

        // Insert message after submit button
        this.form.appendChild(messageElement);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
}

// Button Click Handlers
class ButtonHandlers {
    constructor() {
        this.init();
    }

    init() {
        // Get Started buttons
        document.querySelectorAll('.btn').forEach(btn => {
            if (btn.textContent.includes('Get Started') || btn.textContent.includes('Sign Up')) {
                btn.addEventListener('click', () => {
                    this.handleSignUp();
                });
            } else if (btn.textContent.includes('Login')) {
                btn.addEventListener('click', () => {
                    this.handleLogin();
                });
            } else if (btn.textContent.includes('Learn More')) {
                btn.addEventListener('click', () => {
                    this.handleLearnMore();
                });
            } else if (btn.textContent.includes('Contact Team')) {
                btn.addEventListener('click', () => {
                    this.handleContactTeam();
                });
            }
        });
    }

    handleSignUp() {
        // Simulate sign up action
        alert('Sign up functionality coming soon! Thank you for your interest in Komuit.');
    }

    handleLogin() {
        // Simulate login action
        alert('Login functionality coming soon! Thank you for your interest in Komuit.');
    }

    handleLearnMore() {
        // Scroll to about section
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const offsetTop = aboutSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    handleContactTeam() {
        // Scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const offsetTop = contactSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
}

// Scroll Animations (additional to AOS)
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.observeElements();
    }

    observeElements() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe elements that need custom animations
        document.querySelectorAll('.feature-card, .step, .stat').forEach(el => {
            observer.observe(el);
        });
    }
}

// Testimonials Slider
class TestimonialsSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.testimonial-card');
        this.dots = document.querySelectorAll('.dot');
        this.totalSlides = this.slides.length;
        
        if (this.slides.length > 0) {
            this.init();
        }
    }
    
    init() {
        // Auto-rotate testimonials
        setInterval(() => {
            this.nextSlide();
        }, 7000);
        
        // Add touch support for mobile
        this.addTouchSupport();
    }
    
    showSlide(index) {
        // Remove active class from all slides and dots
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        this.slides[index].classList.add('active');
        this.dots[index].classList.add('active');
        
        this.currentSlide = index;
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.showSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.showSlide(prevIndex);
    }
    
    addTouchSupport() {
        const slider = document.querySelector('.testimonials-slider');
        if (!slider) return;
        
        let startX = 0;
        let endX = 0;
        
        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        slider.addEventListener('touchmove', (e) => {
            endX = e.touches[0].clientX;
        });
        
        slider.addEventListener('touchend', () => {
            const threshold = 50;
            const difference = startX - endX;
            
            if (Math.abs(difference) > threshold) {
                if (difference > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        });
    }
}

// Global functions for navigation buttons
function changeTestimonial(direction) {
    if (window.testimonialsSlider) {
        if (direction === 1) {
            window.testimonialsSlider.nextSlide();
        } else {
            window.testimonialsSlider.prevSlide();
        }
    }
}

function currentTestimonial(index) {
    if (window.testimonialsSlider) {
        window.testimonialsSlider.showSlide(index - 1);
    }
}

// Utility Functions
class Utils {
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Performance Optimizations
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Optimize scroll events
        this.optimizeScrollEvents();
        
        // Lazy load images if any are added later
        this.setupLazyLoading();
        
        // Preload critical resources
        this.preloadResources();
    }

    optimizeScrollEvents() {
        // Use throttled scroll for performance
        const throttledScrollHandler = Utils.throttle(() => {
            // Any scroll-based animations can be added here
        }, 16); // ~60fps

        window.addEventListener('scroll', throttledScrollHandler);
    }

    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    preloadResources() {
        // Preload critical CSS and fonts
        const criticalResources = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = 'style';
            document.head.appendChild(link);
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    new NavbarHandler();
    new HeroAnimationHandler();
    new ContactFormHandler();
    new ButtonHandlers();
    new ScrollAnimations();
    new PerformanceOptimizer();
    
    // Initialize testimonials slider and store reference globally
    window.testimonialsSlider = new TestimonialsSlider();
    new AboutJourneyAnimation();

    // Initialize About Section Feature Tabs
    initializeFeatureTabs();
    
    // Initialize Counter Animations for Impact Stats
    initializeCounterAnimations();

    // Add loading complete class to body
    document.body.classList.add('loaded');
    
    console.log('Komuit Landing Page Loaded Successfully! 🚀');
});

// Feature tabs functionality for About section
function initializeFeatureTabs() {
    const tabs = document.querySelectorAll('.feature-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabs.length === 0) return;
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding tab content
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Counter animation for impact stats
function initializeCounterAnimations() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                animateCounter(target, finalValue);
                observer.unobserve(target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function animateCounter(element, finalValue) {
    let currentValue = 0;
    const increment = finalValue / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
            currentValue = finalValue;
            clearInterval(timer);
        }
        element.textContent = Math.floor(currentValue);
    }, stepTime);
}

// Handle page visibility changes (pause animations when not visible)
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden, pause heavy animations
        document.body.classList.add('paused');
    } else {
        // Page is visible, resume animations
        document.body.classList.remove('paused');
    }
});

// Handle resize events
window.addEventListener('resize', Utils.debounce(() => {
    // Refresh AOS on resize
    AOS.refresh();
}, 250));

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
