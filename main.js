// Navigation Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Navbar Scroll Behavior
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        navbar.classList.remove('scroll-down');
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Set active navigation link based on current page
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Remove any existing active class first
        link.classList.remove('active');
        
        // Check if we're on the homepage
        if (currentPath === '/' && (href === '/' || href === 'index.html' || href === '/index.html')) {
            requestAnimationFrame(() => {
                link.classList.add('active');
            });
        }
        // Check other pages
        else if (currentPath.endsWith(href) || href.endsWith(currentPath)) {
            requestAnimationFrame(() => {
                link.classList.add('active');
            });
        }
    });
}

// Initialize when DOM is loaded and remove any existing active states
document.addEventListener('DOMContentLoaded', () => {
    // Remove any active states that might be set in HTML
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    // Set the correct active state
    setActiveNavLink();
});

// Handle navigation events
window.addEventListener('popstate', setActiveNavLink);

// Product Data
const products = [
    {
        id: 1,
        name: "MacBook Pro 16",
        category: "PC portable",
        brand: "Apple",
        price: "2499,99 €",
        colors: ["Gris", "Argent"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600",
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "Le MacBook Pro 16 pouces offre des performances exceptionnelles pour les professionnels.",
            detailed: "Le MacBook Pro 16 pouces est conçu pour répondre aux besoins des professionnels les plus exigeants. Équipé des derniers processeurs haute performance, d'une carte graphique puissante et d'un écran Retina 16 pouces époustouflant.",
            features: [
                "Processeur Apple M2 Pro ou M2 Max",
                "Jusqu'à 96 Go de mémoire unifiée",
                "Jusqu'à 8 To de stockage SSD",
                "Écran Liquid Retina XDR 16 pouces",
                "Touch ID pour une sécurité maximale",
                "Système audio à six haut-parleurs"
            ],
            specs: {
                processor: "Apple M2 Pro/Max",
                memory: "16 Go - 96 Go",
                storage: "512 Go - 8 To",
                display: "16 pouces Liquid Retina XDR",
                battery: "Jusqu'à 22 heures",
                weight: "2,15 kg"
            }
        }
    },
    {
        id: 2,
        name: "Galaxy S23 Ultra",
        category: "Téléphone",
        brand: "Samsung",
        price: "1199,99 €",
        colors: ["Noir", "Vert", "Violet"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "Le smartphone ultime avec un appareil photo professionnel.",
            detailed: "Le Galaxy S23 Ultra redéfinit l'excellence mobile avec son système photo révolutionnaire et ses performances exceptionnelles.",
            features: [
                "Appareil photo 200MP",
                "S Pen intégré",
                "Écran Dynamic AMOLED 2X",
                "Processeur Snapdragon 8 Gen 2",
                "Batterie 5000mAh",
                "Charge rapide 45W"
            ],
            specs: {
                processor: "Snapdragon 8 Gen 2",
                memory: "8 Go - 12 Go",
                storage: "256 Go - 1 To",
                display: "6.8 pouces Dynamic AMOLED 2X",
                battery: "5000mAh",
                weight: "234 g"
            }
        }
    },
    {
        id: 3,
        name: "iPad Pro 12.9",
        category: "Tablette",
        brand: "Apple",
        price: "1099,99 €",
        colors: ["Gris", "Argent"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "La tablette la plus puissante d'Apple avec l'écran Liquid Retina XDR.",
            detailed: "L'iPad Pro redéfinit ce qu'une tablette peut faire avec la puce M2 et un écran spectaculaire.",
            features: [
                "Puce Apple M2",
                "Écran Liquid Retina XDR",
                "Face ID",
                "Compatibilité Apple Pencil 2",
                "Thunderbolt / USB 4",
                "5G en option"
            ],
            specs: {
                processor: "Apple M2",
                memory: "8 Go - 16 Go",
                storage: "128 Go - 2 To",
                display: "12.9 pouces Liquid Retina XDR",
                battery: "Jusqu'à 10 heures",
                weight: "682 g"
            }
        }
    },
    {
        id: 4,
        name: 'Écran Gaming 27" 4K',
        category: "Ecrans de pc",
        brand: "LG",
        price: "499,99 €",
        colors: ["Noir"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "Moniteur gaming 4K avec un taux de rafraîchissement de 144Hz.",
            detailed: "Un moniteur gaming haut de gamme offrant une qualité d'image exceptionnelle et des performances gaming optimales.",
            features: [
                "Résolution 4K UHD",
                "144Hz de taux de rafraîchissement",
                "1ms de temps de réponse",
                "HDR 400",
                "AMD FreeSync Premium",
                "NVIDIA G-SYNC Compatible"
            ],
            specs: {
                resolution: "3840 x 2160",
                refreshRate: "144 Hz",
                responseTime: "1 ms",
                panel: "IPS",
                brightness: "400 nits",
                contrast: "1000:1"
            }
        }
    },
    {
        id: 5,
        name: "Clavier Mécanique RGB",
        category: "Clavier",
        brand: "Razer",
        price: "159,99 €",
        colors: ["Noir", "Blanc"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "Clavier gaming mécanique avec rétroéclairage RGB personnalisable.",
            detailed: "Un clavier gaming premium avec des switches mécaniques et un système d'éclairage avancé.",
            features: [
                "Switches mécaniques Razer",
                "RGB Chroma personnalisable",
                "Repose-poignets ergonomique",
                "Touches macro programmables",
                "Construction en aluminium",
                "Anti-ghosting"
            ],
            specs: {
                type: "Mécanique",
                switches: "Razer Green",
                layout: "AZERTY",
                connection: "USB-C",
                polling: "1000 Hz",
                weight: "1.5 kg"
            }
        }
    },
    {
        id: 6,
        name: "Souris Gaming Pro",
        category: "Souris",
        brand: "Razer",
        price: "89,99 €",
        colors: ["Noir", "Blanc"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "Souris gaming haute performance avec capteur optique avancé.",
            detailed: "Une souris gaming professionnelle offrant une précision exceptionnelle et un confort optimal.",
            features: [
                "Capteur optique 20K DPI",
                "Switches optiques",
                "RGB personnalisable",
                "8 boutons programmables",
                "Forme ergonomique",
                "Câble Speedflex"
            ],
            specs: {
                sensor: "Optique 20K DPI",
                switches: "Optiques",
                buttons: "8 programmables",
                weight: "82g",
                polling: "1000 Hz",
                cable: "Speedflex"
            }
        }
    },
    {
        id: 7,
        name: "Smart TV 65\" 4K",
        category: "Télevision",
        brand: "Samsung",
        price: "999,99 €",
        colors: ["Noir"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "TV 4K avec technologie QLED et Smart TV intégré.",
            detailed: "Une télévision haut de gamme offrant une qualité d'image exceptionnelle et des fonctionnalités intelligentes.",
            features: [
                "Résolution 4K UHD",
                "QLED",
                "HDR10+",
                "Smart TV Tizen",
                "Assistant vocal",
                "Gaming Mode"
            ],
            specs: {
                resolution: "3840 x 2160",
                panel: "QLED",
                hdr: "HDR10+",
                sound: "40W",
                smart: "Tizen OS",
                connections: "4x HDMI 2.1"
            }
        }
    },
    {
        id: 8,
        name: "Imprimante Laser Pro",
        category: "Imprimante",
        brand: "HP",
        price: "299,99 €",
        colors: ["Blanc"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "Imprimante laser professionnelle avec connectivité réseau.",
            detailed: "Une imprimante laser performante pour les entreprises avec des fonctionnalités avancées.",
            features: [
                "Impression recto-verso",
                "Réseau Ethernet",
                "Wi-Fi Direct",
                "Impression mobile",
                "Bac 250 feuilles",
                "LCD couleur"
            ],
            specs: {
                type: "Laser monochrome",
                vitesse: "38 ppm",
                resolution: "1200 x 1200 dpi",
                memoire: "256 Mo",
                bac: "250 feuilles",
                mensuel: "80000 pages"
            }
        }
    },
    {
        id: 9,
        name: "Batterie 20000mAh",
        category: "Batterie externe",
        brand: "Anker",
        price: "49,99 €",
        colors: ["Noir", "Blanc"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "Batterie externe haute capacité avec charge rapide.",
            detailed: "Une batterie externe puissante avec technologie de charge rapide et multiple ports.",
            features: [
                "20000mAh",
                "Power Delivery",
                "Charge rapide",
                "Multi-ports",
                "Affichage LED",
                "Protection multiple"
            ],
            specs: {
                capacite: "20000mAh",
                entree: "USB-C PD",
                sortie: "USB-A + USB-C",
                puissance: "65W max",
                temps: "3-4 heures",
                poids: "340g"
            }
        }
    },
    {
        id: 10,
        name: "Lampe de Bureau LED",
        category: "Lampes",
        brand: "Philips",
        price: "79,99 €",
        colors: ["Noir", "Blanc", "Argent"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "Lampe de bureau LED avec contrôle tactile et port USB.",
            detailed: "Une lampe de bureau moderne avec réglages de luminosité et de température de couleur.",
            features: [
                "Contrôle tactile",
                "Port USB",
                "5 modes d'éclairage",
                "Timer intégré",
                "Bras articulé",
                "Protection des yeux"
            ],
            specs: {
                puissance: "10W",
                lumens: "1000lm",
                temperature: "2700K-6500K",
                duree: "50000h",
                angle: "180°",
                alimentation: "12V DC"
            }
        }
    },
    {
        id: 11,
        name: "Bande LED RGB 5m",
        category: "LED",
        brand: "Philips",
        price: "29,99 €",
        colors: ["RGB"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "Bande LED RGB connectée avec contrôle via application.",
            detailed: "Une bande LED intelligente offrant des millions de couleurs et des effets dynamiques.",
            features: [
                "Contrôle WiFi",
                "16 millions de couleurs",
                "Effets dynamiques",
                "Compatible assistant vocal",
                "Découpable",
                "Auto-adhésive"
            ],
            specs: {
                longueur: "5 mètres",
                leds: "150 LED/5m",
                puissance: "24W",
                voltage: "12V",
                duree: "25000h",
                ip: "IP20"
            }
        }
    },
    {
        id: 12,
        name: "PC Gamer RTX 4080",
        category: "PC",
        brand: "Asus",
        price: "2999,99 €",
        colors: ["Noir"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "PC Gaming haute performance avec RTX 4080 et processeur dernière génération.",
            detailed: "Une configuration gaming ultime pour les joueurs les plus exigeants.",
            features: [
                "RTX 4080 16GB",
                "Intel i9 13900K",
                "32GB DDR5",
                "2TB NVMe SSD",
                "Watercooling",
                "RGB Sync"
            ],
            specs: {
                cpu: "Intel i9 13900K",
                gpu: "RTX 4080 16GB",
                ram: "32GB DDR5",
                storage: "2TB NVMe",
                alim: "1000W Gold",
                case: "ATX RGB"
            }
        }
    },
    {
        id: 13,
        name: "Chargeur USB-C 100W",
        category: "Chargeur",
        brand: "Anker",
        price: "69,99 €",
        colors: ["Blanc", "Noir"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "Chargeur USB-C compact avec Power Delivery 100W.",
            detailed: "Un chargeur puissant et compact pour tous vos appareils USB-C.",
            features: [
                "Power Delivery 3.0",
                "GaN Technology",
                "Multi-ports",
                "Protection température",
                "Compact",
                "Compatible universel"
            ],
            specs: {
                puissance: "100W",
                entree: "100-240V",
                ports: "2x USB-C, 1x USB-A",
                technologie: "GaN",
                dimensions: "55x55x32mm",
                poids: "200g"
            }
        }
    },
    {
        id: 14,
        name: "Multiprise Parafoudre",
        category: "Multiprise",
        brand: "APC",
        price: "39,99 €",
        colors: ["Noir"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "Multiprise parafoudre avec protection avancée et ports USB.",
            detailed: "Une multiprise intelligente offrant une protection optimale pour vos appareils.",
            features: [
                "8 prises protégées",
                "2 ports USB",
                "Protection surtension",
                "Filtre EMI/RFI",
                "Câble 2m",
                "Garantie à vie"
            ],
            specs: {
                prises: "8 FR",
                usb: "2x 2.4A",
                protection: "4320 Joules",
                cable: "2 mètres",
                certification: "NF",
                garantie: "À vie"
            }
        }
    },
    {
        id: 15,
        name: "MacBook Air M2",
        category: "PC portable",
        brand: "Apple",
        price: "1499,99 €",
        colors: ["Gris", "Argent", "Or"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "Le MacBook Air avec la nouvelle puce M2, plus fin et plus puissant.",
            detailed: "Un ordinateur portable ultra-fin avec des performances exceptionnelles et une autonomie remarquable.",
            features: [
                "Puce Apple M2",
                "Écran Liquid Retina",
                "MagSafe 3",
                "Touch ID",
                "Webcam 1080p",
                "Autonomie 18h"
            ],
            specs: {
                processor: "Apple M2",
                memory: "8 Go - 24 Go",
                storage: "256 Go - 2 To",
                display: "13.6 pouces",
                battery: "18 heures",
                weight: "1.24 kg"
            }
        }
    },
    {
        id: 16,
        name: "Galaxy Tab S9 Ultra",
        category: "Tablette",
        brand: "Samsung",
        price: "1299,99 €",
        colors: ["Gris", "Noir"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "La tablette Android ultime avec un écran AMOLED de 14.6 pouces.",
            detailed: "Une tablette premium offrant une expérience comparable à un ordinateur portable.",
            features: [
                "Écran AMOLED 14.6\"",
                "Snapdragon 8 Gen 2",
                "S Pen inclus",
                "DeX mode",
                "5G optional",
                "IP68"
            ],
            specs: {
                processor: "Snapdragon 8 Gen 2",
                memory: "12 Go - 16 Go",
                storage: "256 Go - 1 To",
                display: "14.6 pouces AMOLED",
                battery: "11200 mAh",
                weight: "732 g"
            }
        }
    },
    {
        id: 17,
        name: "iPhone 15 Pro Max",
        category: "Téléphone",
        brand: "Apple",
        price: "1479,99 €",
        colors: ["Noir", "Titane", "Or"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "Le smartphone Apple le plus avancé avec puce A17 Pro.",
            detailed: "Un iPhone haut de gamme avec des capacités photo professionnelles et des performances exceptionnelles.",
            features: [
                "Puce A17 Pro",
                "Photo 48MP",
                "ProRes vidéo",
                "Action button",
                "USB-C",
                "5G"
            ],
            specs: {
                processor: "A17 Pro",
                memory: "8 Go",
                storage: "256 Go - 1 To",
                display: "6.7 pouces OLED",
                battery: "4422 mAh",
                weight: "221 g"
            }
        }
    },
    {
        id: 18,
        name: "Dell XPS 15",
        category: "PC portable",
        brand: "Dell",
        price: "1999,99 €",
        colors: ["Argent"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "PC portable premium avec écran OLED et performances exceptionnelles.",
            detailed: "Un laptop professionnel alliant puissance et design premium.",
            features: [
                "Intel i9 13900H",
                "RTX 4070",
                "32GB DDR5",
                "Écran OLED",
                "Thunderbolt 4",
                "Windows 11 Pro"
            ],
            specs: {
                processor: "Intel i9 13900H",
                memory: "32 Go DDR5",
                storage: "1 To SSD",
                display: "15.6 pouces OLED",
                battery: "86 Wh",
                weight: "1.96 kg"
            }
        }
    },
    {
        id: 19,
        name: "Écran Pro 32\" 4K",
        category: "Ecrans de pc",
        brand: "Dell",
        price: "899,99 €",
        colors: ["Noir"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "Moniteur professionnel 4K avec une précision des couleurs exceptionnelle.",
            detailed: "Un écran haut de gamme pour les professionnels de la création.",
            features: [
                "4K UHD",
                "HDR600",
                "99% Adobe RGB",
                "Thunderbolt 3",
                "KVM Switch",
                "Calibration usine"
            ],
            specs: {
                resolution: "3840 x 2160",
                panel: "IPS",
                brightness: "600 nits",
                contrast: "1300:1",
                response: "5ms",
                ports: "TB3, DP, HDMI"
            }
        }
    },
    {
        id: 20,
        name: "ROG Swift 360Hz",
        category: "Ecrans de pc",
        brand: "Asus",
        price: "799,99 €",
        colors: ["Noir"],
        image: "https://placehold.co/300x200",
        gallery: [
            "https://placehold.co/800x600",
            "https://placehold.co/800x600"
        ],
        description: {
            short: "Moniteur gaming 360Hz avec G-SYNC pour l'esport.",
            detailed: "Le moniteur ultime pour les joueurs professionnels d'esport.",
            features: [
                "360Hz",
                "G-SYNC",
                "Fast IPS",
                "HDR10",
                "ULMB",
                "RGB"
            ],
            specs: {
                resolution: "1920 x 1080",
                refreshRate: "360 Hz",
                responseTime: "1ms",
                panel: "Fast IPS",
                gsync: "Native G-SYNC",
                latency: "<1ms"
            }
        }
    }
];

// Filter Options
const categories = Array.from(new Set(products.map(p => p.category))).sort();
const brands = Array.from(new Set(products.map(p => p.brand))).sort();
const colors = Array.from(new Set(products.flatMap(p => p.colors))).sort();

// Active Filters
let activeFilters = {
    categories: [],
    brands: [],
    colors: [],
    priceRange: { min: null, max: null }
};

// Product Modal State
let currentImageIndex = 0;
let currentProduct = null;

// Sorting state
let currentSort = 'default';

// Helper function to parse price string to number
function parsePriceString(priceString) {
    return parseFloat(priceString.replace(/[^\d,]/g, '').replace(',', '.'));
}

// Initialize Filters
function initializeFilters() {
    const categoryFilters = document.getElementById('categoryFilters');
    const brandFilters = document.getElementById('brandFilters');
    const colorFilters = document.getElementById('colorFilters');
    const priceFilters = document.getElementById('priceFilters');

    if (!categoryFilters || !brandFilters || !colorFilters || !priceFilters) return;

    const counts = calculateFilterCounts();

    // Create category filters
    categoryFilters.innerHTML = categories.map(category => `
        <label class="filter-option">
            <input type="checkbox" value="${category}" onchange="handleFilterChange('categories', '${category}', this.checked)">
            <span>${category}</span>
            <span class="filter-count" data-filter-type="category" data-filter-value="${category}">${counts.categories[category] || 0}</span>
        </label>
    `).join('');

    // Create brand filters
    brandFilters.innerHTML = brands.map(brand => `
        <label class="filter-option">
            <input type="checkbox" value="${brand}" onchange="handleFilterChange('brands', '${brand}', this.checked)">
            <span>${brand}</span>
            <span class="filter-count" data-filter-type="brand" data-filter-value="${brand}">${counts.brands[brand] || 0}</span>
        </label>
    `).join('');

    // Create color filters
    colorFilters.innerHTML = colors.map(color => `
        <label class="filter-option">
            <input type="checkbox" value="${color}" onchange="handleFilterChange('colors', '${color}', this.checked)">
            <span>${color}</span>
            <span class="filter-count" data-filter-type="color" data-filter-value="${color}">${counts.colors[color] || 0}</span>
        </label>
    `).join('');

    // Create price range inputs
    priceFilters.innerHTML = `
        <div class="price-range-inputs">
            <input type="number" class="price-input" placeholder="Prix min" min="0" onchange="handlePriceChange()">
            <input type="number" class="price-input" placeholder="Prix max" min="0" onchange="handlePriceChange()">
        </div>
    `;

    // Initial display
    filterAndSortProducts();
    updateActiveFiltersDisplay();
}

// Handle Filter Change
function handleFilterChange(type, value, checked) {
    if (checked) {
        activeFilters[type].push(value);
    } else {
        activeFilters[type] = activeFilters[type].filter(item => item !== value);
    }
    
    filterAndSortProducts();
    updateFilterCounts();
    updateActiveFiltersDisplay();
}

// Handle Sort Change
function handleSortChange(sortValue) {
    currentSort = sortValue;
    filterAndSortProducts();
}

// Handle Price Change
function handlePriceChange() {
    const [minInput, maxInput] = document.querySelectorAll('.price-input');
    const min = minInput.value ? parseFloat(minInput.value) : null;
    const max = maxInput.value ? parseFloat(maxInput.value) : null;

    if ((min !== null && min < 0) || (max !== null && max < 0)) return;
    if (max !== null && min !== null && max < min) return;

    activeFilters.priceRange = { min, max };
    filterAndSortProducts();
    updateFilterCounts();
    updateActiveFiltersDisplay();
}

// Calculate Filter Counts
function calculateFilterCounts() {
    const counts = {
        categories: {},
        brands: {},
        colors: {}
    };

    // Initialize counts
    categories.forEach(category => counts.categories[category] = 0);
    brands.forEach(brand => counts.brands[brand] = 0);
    colors.forEach(color => counts.colors[color] = 0);

    // Count products that match current filters
    products.forEach(product => {
        const priceValue = parsePriceString(product.price);
        const priceMatch = (!activeFilters.priceRange.min || priceValue >= activeFilters.priceRange.min) && 
                          (!activeFilters.priceRange.max || priceValue <= activeFilters.priceRange.max);

        const brandMatch = activeFilters.brands.length === 0 || 
                         activeFilters.brands.includes(product.brand);

        const colorMatch = activeFilters.colors.length === 0 || 
                         product.colors.some(color => activeFilters.colors.includes(color));

        const categoryMatch = activeFilters.categories.length === 0 || 
                            activeFilters.categories.includes(product.category);

        if (priceMatch && brandMatch && colorMatch) {
            counts.categories[product.category] = (counts.categories[product.category] || 0) + 1;
        }

        if (priceMatch && categoryMatch && colorMatch) {
            counts.brands[product.brand] = (counts.brands[product.brand] || 0) + 1;
        }

        if (priceMatch && categoryMatch && brandMatch) {
            product.colors.forEach(color => {
                counts.colors[color] = (counts.colors[color] || 0) + 1;
            });
        }
    });

    return counts;
}

// Update Filter Counts
function updateFilterCounts() {
    const counts = calculateFilterCounts();
    
    document.querySelectorAll('[data-filter-type]').forEach(element => {
        const type = element.getAttribute('data-filter-type');
        const value = element.getAttribute('data-filter-value');
        element.textContent = counts[type + 's'][value] || 0;
    });
}

// Filter Products
function filterProducts() {
    return products.filter(product => {
        const categoryMatch = activeFilters.categories.length === 0 || 
                            activeFilters.categories.includes(product.category);
        
        const brandMatch = activeFilters.brands.length === 0 || 
                          activeFilters.brands.includes(product.brand);
        
        const colorMatch = activeFilters.colors.length === 0 || 
                          product.colors.some(color => activeFilters.colors.includes(color));

        const priceValue = parsePriceString(product.price);
        const priceMatch = (!activeFilters.priceRange.min || priceValue >= activeFilters.priceRange.min) && 
                          (!activeFilters.priceRange.max || priceValue <= activeFilters.priceRange.max);

        return categoryMatch && brandMatch && colorMatch && priceMatch;
    });
}

// Sort Products
function sortProducts(products) {
    const sortedProducts = [...products];
    
    switch (currentSort) {
        case 'price-asc':
            sortedProducts.sort((a, b) => parsePriceString(a.price) - parsePriceString(b.price));
            break;
        case 'price-desc':
            sortedProducts.sort((a, b) => parsePriceString(b.price) - parsePriceString(a.price));
            break;
        case 'name-asc':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            // Garder l'ordre par défaut
            break;
    }
    
    return sortedProducts;
}

// Filter and Sort Products
function filterAndSortProducts() {
    const filteredProducts = filterProducts();
    const sortedProducts = sortProducts(filteredProducts);
    displayProducts(sortedProducts);
}

// Display Products
function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-brand">${product.brand}</p>
                <p class="product-category">${product.category}</p>
                <p class="product-colors">Couleurs: ${product.colors.join(', ')}</p>
                <p class="product-price">${product.price}</p>
                <p class="product-description">${product.description.short}</p>
                <button class="view-details-btn">
                    <i class="fas fa-search"></i>
                    Voir les détails
                </button>
            </div>
        </div>
    `).join('');
}

// Update Active Filters Display
function updateActiveFiltersDisplay() {
    const activeFiltersContainer = document.getElementById('activeFilters');
    if (!activeFiltersContainer) return;

    const activeFilterElements = [];

    Object.entries(activeFilters).forEach(([type, values]) => {
        if (Array.isArray(values)) {
            values.forEach(value => {
                activeFilterElements.push(`
                    <div class="active-filter">
                        ${value}
                        <button onclick="removeFilter('${type}', '${value}')">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `);
            });
        }
    });

    if (activeFilters.priceRange.min !== null || activeFilters.priceRange.max !== null) {
        let priceText = '';
        if (activeFilters.priceRange.min !== null && activeFilters.priceRange.max !== null) {
            priceText = `${activeFilters.priceRange.min}€ - ${activeFilters.priceRange.max}€`;
        } else if (activeFilters.priceRange.min !== null) {
            priceText = `À partir de ${activeFilters.priceRange.min}€`;
        } else {
            priceText = `Jusqu'à ${activeFilters.priceRange.max}€`;
        }

        activeFilterElements.push(`
            <div class="active-filter">
                ${priceText}
                <button onclick="removePriceRangeFilter()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `);
    }

    activeFiltersContainer.innerHTML = activeFilterElements.join('');
}

// Remove Filter
function removeFilter(type, value) {
    activeFilters[type] = activeFilters[type].filter(item => item !== value);
    
    const checkbox = document.querySelector(`input[type="checkbox"][value="${value}"]`);
    if (checkbox) checkbox.checked = false;
    
    filterAndSortProducts();
    updateFilterCounts();
    updateActiveFiltersDisplay();
}

// Remove Price Range Filter
function removePriceRangeFilter() {
    activeFilters.priceRange = { min: null, max: null };
    document.querySelectorAll('.price-input').forEach(input => input.value = '');
    filterAndSortProducts();
    updateFilterCounts();
    updateActiveFiltersDisplay();
}

// Reset Filters
function resetFilters() {
    activeFilters = {
        categories: [],
        brands: [],
        colors: [],
        priceRange: { min: null, max: null }
    };
    
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
    document.querySelectorAll('.price-input').forEach(input => input.value = '');
    
    currentSort = 'default';
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.value = 'default';
    }
    
    filterAndSortProducts();
    updateFilterCounts();
    updateActiveFiltersDisplay();
}

// Toggle Filter Group
function toggleFilterGroup(type) {
    const header = document.querySelector(`[onclick="toggleFilterGroup('${type}')"]`);
    const options = document.getElementById(`${type}Filters`);
    
    if (header && options) {
        header.classList.toggle('active');
        options.classList.toggle('active');
    }
}

// Contact Sales
function contactSales(productName) {
    window.location.href = `/contact.html?product=${encodeURIComponent(productName)}`;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    
    // Initialiser le tri par défaut
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        handleSortChange(sortSelect.value);
    }

    // Add toggle filters button on mobile
    if (document.querySelector('.catalogue-section')) {
        const toggleButton = document.createElement('button');
        toggleButton.className = 'toggle-filters';
        toggleButton.innerHTML = '<i class="fas fa-filter"></i>';
        toggleButton.onclick = () => {
            const filtersSidebar = document.querySelector('.filters-sidebar');
            if (filtersSidebar) {
                filtersSidebar.classList.toggle('active');
            }
        };
        document.body.appendChild(toggleButton);
    }

    // Initialize contact form with product if specified
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    if (product) {
        const subjectInput = document.getElementById('subject');
        if (subjectInput) {
            subjectInput.value = `Demande de devis - ${product}`;
        }
    }
});