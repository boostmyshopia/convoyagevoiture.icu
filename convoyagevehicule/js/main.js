// DriveFlow - JavaScript Principal
// Gestion des interactions, formulaires et chatbot

document.addEventListener('DOMContentLoaded', function() {
    
    // === Navigation Mobile ===
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // === Chatbot ===
    const chatbot = document.getElementById('chatbot');
    const chatbotTrigger = document.getElementById('chatbotTrigger');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const quickQuestions = document.querySelectorAll('.quick-question');

    if (chatbotTrigger) {
        chatbotTrigger.addEventListener('click', function() {
            chatbot.classList.add('active');
            chatbotTrigger.style.display = 'none';
        });
    }

    if (chatbotClose) {
        chatbotClose.addEventListener('click', function() {
            chatbot.classList.remove('active');
            chatbotTrigger.style.display = 'flex';
        });
    }

    // Réponses automatiques du chatbot
    const chatbotResponses = {
        distance: "Nous couvrons TOUTES les distances : France, Europe et International. Aucune limite ! 🌍",
        vehicules: "Nous convoyons tous types de véhicules : citadines, berlines, SUV, utilitaires, véhicules de luxe, motos, véhicules de collection. 🚗",
        delai: "Le délai dépend de la distance. En France : généralement 24-48h. Pour un devis précis avec délai garanti, contactez-nous ! ⏱️",
        devis: "C'est simple ! Cliquez sur 'Devis gratuit' en haut de page ou appelez-nous au 06 51 50 78 34. Réponse sous 24h garantie ! 📞"
    };

    quickQuestions.forEach(button => {
        button.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            const questionText = this.textContent;
            
            // Afficher la question de l'utilisateur
            addChatMessage(questionText, 'user');
            
            // Afficher la réponse du bot
            setTimeout(() => {
                addChatMessage(chatbotResponses[question], 'bot');
                
                // Ajouter un CTA après la réponse
                setTimeout(() => {
                    const ctaMessage = question === 'devis' 
                        ? '<a href="devis.html" style="color: #2C5F9D; font-weight: 600;">👉 Demander un devis maintenant</a>'
                        : '<a href="tel:+33651507834" style="color: #2C5F9D; font-weight: 600;">📞 Appelez-nous : 06 51 50 78 34</a>';
                    addChatMessage(ctaMessage, 'bot');
                }, 1000);
            }, 500);
        });
    });

    function addChatMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${sender}`;
        messageDiv.innerHTML = `<p>${text}</p>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // === Formulaire de devis ===
    const devisForm = document.getElementById('devisForm');
    
    if (devisForm) {
        devisForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données
            const formData = {
                nom: document.getElementById('nom').value,
                email: document.getElementById('email').value,
                telephone: document.getElementById('telephone').value,
                type_client: document.getElementById('type_client').value,
                type_vehicule: document.getElementById('type_vehicule').value,
                depart: document.getElementById('depart').value,
                arrivee: document.getElementById('arrivee').value,
                distance: document.getElementById('distance').value,
                date_souhaitee: document.getElementById('date_souhaitee').value,
                message: document.getElementById('message').value
            };

            // Simulation d'envoi (à remplacer par un vrai backend)
            console.log('Données du formulaire:', formData);
            
            // Affichage d'un message de succès
            alert('✅ Votre demande de devis a été envoyée avec succès !\n\nNous vous contacterons sous 24h.\n\nMerci de votre confiance ! 🚗');
            
            // Réinitialisation du formulaire
            devisForm.reset();
            
            // Redirection optionnelle
            // window.location.href = 'index.html';
        });
    }

    // === Formulaire de contact ===
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                nom: document.getElementById('nom').value,
                email: document.getElementById('email').value,
                telephone: document.getElementById('telephone').value,
                sujet: document.getElementById('sujet').value,
                message: document.getElementById('message').value
            };

            console.log('Données du formulaire de contact:', formData);
            
            alert('✅ Votre message a été envoyé avec succès !\n\nNous vous répondrons dans les plus brefs délais.\n\nMerci !');
            
            contactForm.reset();
        });
    }

    // === Smooth Scroll pour les ancres ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // === Animation au scroll ===
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    document.querySelectorAll('.service-card, .feature-item, .process-step, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // === Click-to-call sur mobile ===
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.querySelectorAll('.btn-phone, a[href^="tel:"]').forEach(link => {
            link.style.display = 'flex';
        });
    }

    // === Header sticky avec effet ===
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
        }
        
        lastScroll = currentScroll;
    });

    // === FAQ Accordion ===
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Fermer tous les autres items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                // Toggle l'item actuel
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // === Validation téléphone français ===
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            
            // Format: 06 12 34 56 78
            if (value.length > 0) {
                value = value.match(/.{1,2}/g).join(' ');
            }
            
            e.target.value = value;
        });
    });

    // === Chargement des images lazy ===
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

        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // === Console log de bienvenue ===
    console.log('%c🚗 DriveFlow - Convoyage Professionnel', 'font-size: 20px; font-weight: bold; color: #2C5F9D;');
    console.log('%c📞 Contactez-nous : 06 51 50 78 34', 'font-size: 14px; color: #00A8E8;');
    console.log('%c✉️ Email : driveflow.contact@gmail.com', 'font-size: 14px; color: #00A8E8;');
});
