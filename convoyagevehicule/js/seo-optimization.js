// DriveFlow - Fichier d'optimisation SEO et méta-données
// Optimisation pour moteurs de recherche et IA (ChatGPT, Claude, Gemini, Perplexity)

// === MOTS-CLÉS STRATÉGIQUES PAR PAGE ===
const SEO_KEYWORDS = {
    index: [
        "convoyage voiture", "transport véhicule", "livraison voiture", 
        "convoyer voiture", "convoyage automobile France", "livraison véhicule domicile",
        "transport voiture professionnel", "convoyeur certifié", "plaque W garage"
    ],
    professionnels: [
        "convoyage professionnel", "livraison voiture concessionnaire", 
        "transport flotte automobile", "convoyage véhicule entreprise",
        "livraison après entretien", "rotation flotte véhicules"
    ],
    particuliers: [
        "acheter voiture loin", "transport voiture panne", 
        "livraison véhicule occasion", "convoyer voiture déménagement",
        "vente voiture entre particuliers", "livraison voiture achat"
    ],
    blog: {
        "comment-faire-convoyer-voiture": [
            "comment faire convoyer une voiture", "convoyer voiture sécurité",
            "documents convoyage voiture", "assurance convoyage véhicule",
            "prix convoyage voiture", "état des lieux véhicule"
        ],
        "prix-convoyage-voiture": [
            "prix convoyage voiture", "tarif transport véhicule",
            "coût livraison voiture", "combien coûte convoyage",
            "prix convoyage 500 km", "devis convoyage auto"
        ],
        "acheter-voiture-loin": [
            "acheter voiture loin de chez soi", "achat voiture distance",
            "livraison voiture occasion", "acheter auto autre région",
            "transport véhicule achat", "vérification voiture distance"
        ]
    }
};

// === DONNÉES STRUCTURÉES SCHEMA.ORG ===
const SCHEMA_ORG_ORGANIZATION = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "DriveFlow",
    "description": "Service professionnel de convoyage de véhicules en France, Europe et International. Disponible 24/7.",
    "url": "https://driveflow.fr",
    "telephone": "+33651507834",
    "email": "driveflow.contact@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Caen",
        "addressCountry": "FR"
    },
    "areaServed": [
        {"@type": "Country", "name": "France"},
        {"@type": "Continent", "name": "Europe"}
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "€€",
    "image": "https://driveflow.fr/images/logo.png",
    "logo": "https://driveflow.fr/images/logo.png",
    "sameAs": [
        "https://www.facebook.com/driveflow",
        "https://www.instagram.com/driveflow",
        "https://www.linkedin.com/company/driveflow"
    ]
};

// === FAQ SCHEMA POUR RICH SNIPPETS ===
const SCHEMA_ORG_FAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Quelle distance pouvez-vous couvrir pour un convoyage ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nous couvrons toutes les distances sans limite : France métropolitaine, Europe et même International. Que ce soit 50 km ou 5000 km, nous assurons le convoyage de votre véhicule."
            }
        },
        {
            "@type": "Question",
            "name": "Quel est le prix d'un convoyage de voiture ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Le tarif dépend de la distance : moins de 100 km (80-150€), 100-300 km (150-300€), 300-500 km (300-450€), 500-1000 km (450-800€). Pour plus de 1000 km, demandez un devis personnalisé."
            }
        },
        {
            "@type": "Question",
            "name": "Mon véhicule est-il assuré pendant le transport ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, tous nos convoyages incluent une assurance tous risques. Votre véhicule est protégé contre les dommages, accidents et vols durant tout le trajet."
            }
        },
        {
            "@type": "Question",
            "name": "Qu'est-ce qu'une plaque W Garage ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "La plaque W Garage est une plaque d'immatriculation professionnelle délivrée par la préfecture. Elle permet aux professionnels de l'automobile de circuler légalement avec des véhicules non immatriculés ou en transit."
            }
        }
    ]
};

// === SERVICE SCHEMA ===
const SCHEMA_ORG_SERVICE = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Convoyage automobile",
    "provider": SCHEMA_ORG_ORGANIZATION,
    "areaServed": ["FR", "EU"],
    "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "priceRange": "80-800",
        "availability": "https://schema.org/InStock"
    }
};

// === BREADCRUMBS POUR SEO ===
function generateBreadcrumbs(pageName) {
    const breadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://driveflow.fr/index.html"
            }
        ]
    };

    const pageMap = {
        "professionnels": {"name": "Professionnels", "url": "https://driveflow.fr/professionnels.html"},
        "particuliers": {"name": "Particuliers", "url": "https://driveflow.fr/particuliers.html"},
        "blog": {"name": "Blog", "url": "https://driveflow.fr/blog.html"},
        "devis": {"name": "Devis", "url": "https://driveflow.fr/devis.html"}
    };

    if (pageMap[pageName]) {
        breadcrumbs.itemListElement.push({
            "@type": "ListItem",
            "position": 2,
            "name": pageMap[pageName].name,
            "item": pageMap[pageName].url
        });
    }

    return breadcrumbs;
}

// === MOTS-CLÉS LSI (LATENT SEMANTIC INDEXING) ===
const LSI_KEYWORDS = {
    convoyage: [
        "transport automobile", "livraison véhicule", "acheminement voiture",
        "déplacement auto", "transfert véhicule", "conduite déléguée"
    ],
    professionnel: [
        "convoyeur certifié", "prestataire transport", "expert automobile",
        "service agréé", "plaque W garage", "professionnel assuré"
    ],
    sécurité: [
        "assurance tous risques", "état des lieux", "protection véhicule",
        "garantie transport", "contrôle qualité", "suivi GPS"
    ]
};

// === EXPORT DES DONNÉES ===
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SEO_KEYWORDS,
        SCHEMA_ORG_ORGANIZATION,
        SCHEMA_ORG_FAQ,
        SCHEMA_ORG_SERVICE,
        LSI_KEYWORDS,
        generateBreadcrumbs
    };
}

console.log("✅ Optimisation SEO chargée pour DriveFlow");
