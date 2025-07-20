// ===== FUNCIONALIDAD PRINCIPAL =====
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    initFormValidation();
    initSmoothScrolling();
    initMobileMenu();
    initScrollEffects();
    initAdvancedInteractions();
});

// ===== VALIDACIÓN DEL FORMULARIO =====
function initFormValidation() {
    const form = document.getElementById('diagnosticoForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });

    // Validación en tiempo real
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

function validateForm() {
    const form = document.getElementById('diagnosticoForm');
    const requiredFields = ['nombre', 'email', 'empresa'];
    let isValid = true;

    // Limpiar errores previos
    clearAllErrors();

    // Validar campos requeridos
    requiredFields.forEach(fieldName => {
        const field = form.querySelector(`[name="${fieldName}"]`);
        if (!validateField(field)) {
            isValid = false;
        }
    });

    // Validar email
    const emailField = form.querySelector('[name="email"]');
    if (emailField.value && !isValidEmail(emailField.value)) {
        showFieldError(emailField, 'Por favor, ingrese un email válido');
        isValid = false;
    }

    // Validar teléfono (opcional pero si se llena debe ser válido)
    const phoneField = form.querySelector('[name="telefono"]');
    if (phoneField.value && !isValidPhone(phoneField.value)) {
        showFieldError(phoneField, 'Por favor, ingrese un teléfono válido');
        isValid = false;
    }

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('name');
    
    // Campos requeridos
    const requiredFields = ['nombre', 'email', 'empresa'];
    
    if (requiredFields.includes(fieldName) && !value) {
        const fieldLabels = {
            'nombre': 'Nombre completo',
            'email': 'Email corporativo',
            'empresa': 'Empresa'
        };
        showFieldError(field, `${fieldLabels[fieldName]} es requerido`);
        return false;
    }

    // Validaciones específicas
    if (fieldName === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, 'Por favor, ingrese un email válido');
        return false;
    }

    if (fieldName === 'telefono' && value && !isValidPhone(value)) {
        showFieldError(field, 'Por favor, ingrese un teléfono válido');
        return false;
    }

    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Acepta formatos: +XX XXX XXX XXXX, (XXX) XXX-XXXX, XXX-XXX-XXXX, XXXXXXXXXX
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$|^[\+]?[\(]?[1-9][\d]{2}[\)]?[-\s]?[\d]{3}[-\s]?[\d]{4}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

function showFieldError(field, message) {
    // Remover error previo
    clearFieldError(field);
    
    // Agregar clase de error
    field.classList.add('error');
    
    // Crear mensaje de error
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = 'var(--error)';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    // Insertar después del campo
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.classList.remove('error');
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function clearAllErrors() {
    const form = document.getElementById('diagnosticoForm');
    const errorFields = form.querySelectorAll('.error');
    const errorMessages = form.querySelectorAll('.field-error');
    
    errorFields.forEach(field => field.classList.remove('error'));
    errorMessages.forEach(message => message.remove());
}

// ===== ENVÍO DEL FORMULARIO =====
function submitForm() {
    const form = document.getElementById('diagnosticoForm');
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Mostrar estado de carga
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
    submitButton.style.opacity = '0.7';
    
    // Simular envío (aquí se conectaría con el backend real)
    setTimeout(() => {
        // Mostrar mensaje de éxito
        showSuccessMessage();
        
        // Resetear formulario
        form.reset();
        
        // Restaurar botón
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        submitButton.style.opacity = '1';
        
        // Scroll al mensaje de éxito
        document.getElementById('success-message').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }, 2000);
}

function showSuccessMessage() {
    // Crear mensaje de éxito si no existe
    if (!document.getElementById('success-message')) {
        const successDiv = document.createElement('div');
        successDiv.id = 'success-message';
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <div class="success-content">
                <div class="success-icon">✅</div>
                <h3>¡Solicitud Enviada Exitosamente!</h3>
                <p>Gracias por su interés. Nos pondremos en contacto con usted en las próximas 24 horas para programar su sesión de diagnóstico gratuita.</p>
                <button onclick="closeSuccessMessage()" class="btn btn-primary">Cerrar</button>
            </div>
        `;
        
        // Estilos para el mensaje de éxito
        successDiv.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            backdrop-filter: blur(5px);
        `;
        
        const successContent = successDiv.querySelector('.success-content');
        successContent.style.cssText = `
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            text-align: center;
            max-width: 500px;
            margin: 1rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        `;
        
        document.body.appendChild(successDiv);
    }
}

function closeSuccessMessage() {
    const successMessage = document.getElementById('success-message');
    if (successMessage) {
        successMessage.remove();
    }
}

// ===== SCROLL SUAVE =====
function initSmoothScrolling() {
    // Función para scroll suave a secciones
    window.scrollToCTA = function() {
        const ctaSection = document.getElementById('cta-final');
        if (ctaSection) {
            ctaSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    
    // Scroll suave para enlaces internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== MENÚ MÓVIL =====
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Animar las líneas del hamburguesa con efectos avanzados
            const spans = navToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navToggle.classList.contains('active')) {
                    if (index === 0) {
                        span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                        span.style.background = 'var(--primary-blue)';
                    }
                    if (index === 1) {
                        span.style.opacity = '0';
                        span.style.transform = 'scale(0)';
                    }
                    if (index === 2) {
                        span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                        span.style.background = 'var(--secondary-blue)';
                    }
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                    span.style.background = 'var(--gray-700)';
                }
            });
            
            // Efecto de vibración en el botón
            if (navToggle.classList.contains('active')) {
                navToggle.style.animation = 'bounceIn 0.3s ease-out';
            } else {
                navToggle.style.animation = 'none';
            }
        });
        
        // Cerrar menú al hacer click en un enlace con animación
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach((link, index) => {
            link.addEventListener('click', () => {
                // Animar el cierre del menú
                const menuItems = navMenu.querySelectorAll('li');
                menuItems.forEach((item, i) => {
                    item.style.transitionDelay = `${(menuItems.length - i - 1) * 0.05}s`;
                    item.style.transform = 'translateY(20px)';
                    item.style.opacity = '0';
                });
                
                setTimeout(() => {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    
                    // Resetear animaciones
                    menuItems.forEach(item => {
                        item.style.transitionDelay = '';
                        item.style.transform = '';
                        item.style.opacity = '';
                    });
                }, 300);
            });
        });
        
        // Cerrar menú al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
}

// ===== EFECTOS DE SCROLL =====
function initScrollEffects() {
    // Header transparente al hacer scroll con efectos avanzados
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        const scrolled = window.scrollY;
        
        if (scrolled > 50) {
            header.classList.add('scrolled');
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            header.style.backdropFilter = 'blur(25px)';
        } else {
            header.classList.remove('scrolled');
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
            header.style.backdropFilter = 'blur(20px)';
        }
        
        // Efecto de opacidad en el logo
        const logo = document.querySelector('.nav-logo .logo');
        if (logo) {
            const opacity = Math.max(0.7, 1 - (scrolled / 200));
            logo.style.opacity = opacity;
        }
    });
    
    // Animación de elementos al hacer scroll con efectos avanzados
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                
                // Efectos específicos por tipo de elemento
                if (element.classList.contains('problema-card')) {
                    element.style.animation = 'bounceIn 0.8s ease-out';
                } else if (element.classList.contains('servicio-card')) {
                    element.style.animation = 'slideInFromBottom 0.8s ease-out';
                } else if (element.classList.contains('metodologia-paso')) {
                    element.style.animation = 'fadeInLeft 0.8s ease-out';
                }
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const animatedElements = document.querySelectorAll('.problema-card, .servicio-card, .metodologia-paso');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Efecto parallax para el hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Contador animado para estadísticas (si se agregan)
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 segundos
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// ===== UTILIDADES =====
function formatPhoneNumber(input) {
    // Formatear número de teléfono mientras se escribe
    let value = input.value.replace(/\D/g, '');
    
    if (value.length <= 3) {
        value = value;
    } else if (value.length <= 6) {
        value = value.slice(0, 3) + '-' + value.slice(3);
    } else {
        value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
    }
    
    input.value = value;
}

// ===== EFECTOS DE INTERACCIÓN AVANZADOS =====
function initAdvancedInteractions() {
    // Efecto de partículas en el hero
    createParticles();
    
    // Efecto de typing para el título
    typeWriterEffect();
    
    // Efecto de hover 3D para tarjetas
    init3DHoverEffects();
    
    // Efecto de cursor personalizado
    initCustomCursor();
    
    // Efectos avanzados del header
    initHeaderEffects();
}

function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255,255,255,0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(particle);
    }
}

function typeWriterEffect() {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    title.style.borderRight = '2px solid white';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            title.style.borderRight = 'none';
        }
    };
    
    setTimeout(typeWriter, 1000);
}

function init3DHoverEffects() {
    const cards = document.querySelectorAll('.servicio-card, .problema-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: var(--primary-blue);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Efecto de hover en elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, .problema-card, .servicio-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// ===== EFECTOS AVANZADOS DEL HEADER =====
function initHeaderEffects() {
    const header = document.querySelector('.header');
    const navMenu = document.querySelector('.nav-menu');
    
    // Efecto de hover en el header completo
    header.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
    });
    
    header.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        const scrolled = window.scrollY;
        if (scrolled > 50) {
            this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
        } else {
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
        }
    });
    
    // Efecto de partículas en el header
    createHeaderParticles();
    
    // Efecto de typing en el logo (si es texto)
    const logo = document.querySelector('.nav-logo');
    if (logo && logo.textContent) {
        logo.addEventListener('mouseenter', function() {
            this.style.animation = 'pulseCTA 0.6s ease-in-out';
        });
        
        logo.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    }
}

function createHeaderParticles() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    // Crear partículas sutiles en el header
    const particleCount = 8;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'header-particle';
        particle.style.cssText = `
            position: absolute;
            width: 1px;
            height: 1px;
            background: rgba(30, 64, 175, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: headerFloat ${Math.random() * 10 + 15}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
        `;
        header.appendChild(particle);
    }
}

// ===== MANEJO DE ERRORES =====
window.addEventListener('error', function(e) {
    console.error('Error en la aplicación:', e.error);
});

// ===== PERFORMANCE =====
// Lazy loading para imágenes
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
} 