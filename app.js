// Nigerian Spices Flashcard Data
const spicesData = [
    {
        "id": 1,
        "english_name": "Fermented Locust Beans",
        "igbo_name": "Iru / Ogiri",
        "primary_uses": ["Soup seasoning", "Stew flavoring", "Umami enhancer", "Traditional medicine"],
        "flavor_profile": "Deep umami, pungent, earthy, salty with lingering savoriness",
        "best_pairings": ["Egusi soup", "Efo riro", "Ogbono soup", "Beef", "Goat meat", "Eggs"],
        "special_notes": "High protein (32-44%), rich in B vitamins, zinc. Fermentation increases digestibility and creates complex flavors. Store in cool, dry place.",
        "nutritional_benefits": "Protein: 32-44%, Fat: 13-19%, Iron, Zinc, B vitamins, Essential amino acids",
        "medicinal_properties": "Digestive aid, blood sugar management, heart health support",
        "category": "fermented"
    },
    {
        "id": 2,
        "english_name": "Dried Crayfish",
        "igbo_name": "Nkpisi",
        "primary_uses": ["Soup base", "Protein source", "Flavor enhancer", "Baby food spice"],
        "flavor_profile": "Intense umami, seafood essence, slightly salty, rich and savory",
        "best_pairings": ["All Nigerian soups", "Rice dishes", "Beans", "Stews", "Vegetable dishes"],
        "special_notes": "Grind fresh for maximum flavor. Rich in omega-3 fatty acids. Essential for authentic Nigerian taste. High in calcium and phosphorus.",
        "nutritional_benefits": "High protein, Omega-3 fatty acids, Calcium, Iron, Vitamin B12, Selenium",
        "medicinal_properties": "Bone health, brain function, eye health, immune support",
        "category": "protein"
    },
    {
        "id": 3,
        "english_name": "Fluted Pumpkin Leaves",
        "igbo_name": "Ugu",
        "primary_uses": ["Soup vegetable", "Stew ingredient", "Salad greens", "Smoothie addition"],
        "flavor_profile": "Mild, slightly earthy, fresh green taste, neutral with subtle sweetness",
        "best_pairings": ["Egusi soup", "Pepper soup", "Fish stew", "Beef", "Chicken", "Palm oil"],
        "special_notes": "High in protein for a vegetable (4g/100g). Rich in vitamins A, C, K. Can be eaten raw or cooked. Harvest young leaves for best flavor.",
        "nutritional_benefits": "Protein: 4g/100g, Vitamin A, C, K, Iron, Calcium, Folate, Potassium",
        "medicinal_properties": "Blood building, immune support, bone health, vision support",
        "category": "leafy"
    },
    {
        "id": 4,
        "english_name": "Bitter Leaf",
        "igbo_name": "Onugbu",
        "primary_uses": ["Medicinal tea", "Soup vegetable", "Traditional medicine", "Digestive aid"],
        "flavor_profile": "Intensely bitter, astringent, herbaceous with slight medicinal undertones",
        "best_pairings": ["Bitter leaf soup", "Fish", "Meat stews", "Medicinal preparations"],
        "special_notes": "Wash thoroughly to reduce bitterness. Powerful antioxidant and anti-inflammatory. Used for malaria, diabetes, digestive issues. Start with small amounts.",
        "nutritional_benefits": "Flavonoids, Vitamin C, Antioxidants, Minerals, Fiber",
        "medicinal_properties": "Anti-malarial, blood sugar control, digestive health, fever reduction, immune support",
        "category": "leafy"
    },
    {
        "id": 5,
        "english_name": "Scotch Bonnet Pepper",
        "igbo_name": "Ose Nsukka",
        "primary_uses": ["Heat source", "Flavor base", "Pepper soup", "Hot sauces"],
        "flavor_profile": "Extremely hot (100,000-350,000 Scoville units), fruity, smoky with citrus notes",
        "best_pairings": ["Pepper soup", "Stews", "Jollof rice", "Fish dishes", "Meat marinades"],
        "special_notes": "Handle with gloves! Rich in vitamin C and capsaicin. Start with tiny amounts. Seeds are hottest part. Has unique fruity flavor unlike other hot peppers.",
        "nutritional_benefits": "Vitamin C (300% DV), Vitamin A, Capsaicin, Antioxidants",
        "medicinal_properties": "Pain relief, weight management, heart health, anti-inflammatory, cancer protection",
        "category": "pepper"
    },
    {
        "id": 6,
        "english_name": "African Velvet Tamarind",
        "igbo_name": "Icheku",
        "primary_uses": ["Souring agent", "Medicinal tea", "Snack fruit", "Traditional medicine"],
        "flavor_profile": "Intensely sour, tangy, astringent with fruity sweetness when ripe",
        "best_pairings": ["Fish dishes", "Sour soups", "Medicinal preparations", "Beverages"],
        "special_notes": "Excellent source of vitamin C (100%+ DV). Enhances iron absorption. Use sparingly due to intense sourness. Both pulp and leaves are medicinal.",
        "nutritional_benefits": "Vitamin C (50+mg), Fiber, Potassium, Antioxidants, Flavonoids",
        "medicinal_properties": "Malaria treatment, ulcer healing, blood pressure control, oral hygiene, anti-inflammatory",
        "category": "fruit"
    },
    {
        "id": 7,
        "english_name": "African Nutmeg",
        "igbo_name": "Ehuru",
        "primary_uses": ["Aromatic spice", "Soup seasoning", "Traditional medicine", "Meat flavoring"],
        "flavor_profile": "Warm, nutty, slightly sweet with spicy undertones and earthy aroma",
        "best_pairings": ["Banga soup", "Pepper soup", "Meat dishes", "Palm fruit stew"],
        "special_notes": "Grind fresh for best aroma. Contains essential oils myristicin and elemicin. Use sparingly as flavor is intense. Different from European nutmeg.",
        "nutritional_benefits": "Essential oils, Phytonutrients, Alkaloids, Flavonoids, Tannins",
        "medicinal_properties": "Digestive health, anti-inflammatory, antimicrobial, respiratory support",
        "category": "spice"
    },
    {
        "id": 8,
        "english_name": "Negro Pepper",
        "igbo_name": "Uda",
        "primary_uses": ["Pepper soup spice", "Traditional medicine", "Meat seasoning", "Preservative"],
        "flavor_profile": "Peppery, aromatic, earthy with hints of black pepper, nutmeg, and cloves",
        "best_pairings": ["Pepper soup", "Nsala soup", "Goat meat", "Fish dishes", "Herbal teas"],
        "special_notes": "Essential for authentic pepper soup. Contains flavonoids and alkaloids. Antimicrobial properties make it good preservative. Rich in vitamins A, B1, B2, C, E.",
        "nutritional_benefits": "Vitamins A, B1, B2, C, E, Copper, Zinc, Manganese, Alkaloids, Flavonoids",
        "medicinal_properties": "Digestive health, antimicrobial, pain relief, respiratory support, analgesic",
        "category": "spice"
    },
    {
        "id": 9,
        "english_name": "West African Black Pepper",
        "igbo_name": "Uziza",
        "primary_uses": ["Soup spice", "Leaf vegetable", "Traditional medicine", "Pepper enhancement"],
        "flavor_profile": "Peppery, slightly bitter, aromatic with warming sensation and complex spice notes",
        "best_pairings": ["Nsala soup", "Palm nut soup", "Fish dishes", "Meat stews"],
        "special_notes": "Both leaves and seeds are used. High in piperine and beta-caryophyllene. Anti-inflammatory properties. Enhances nutrient absorption from other foods.",
        "nutritional_benefits": "Vitamins A, C, E, Calcium, Potassium, Iron, Piperine, Beta-caryophyllene",
        "medicinal_properties": "Anti-inflammatory, antimicrobial, digestive support, nutrient absorption enhancement",
        "category": "pepper"
    },
    {
        "id": 10,
        "english_name": "Palm Oil",
        "igbo_name": "Mmanụ Akwụ",
        "primary_uses": ["Cooking oil", "Flavor base", "Color enhancement", "Cultural ceremonies"],
        "flavor_profile": "Rich, nutty, slightly sweet with distinctive earthy taste and vibrant red color",
        "best_pairings": ["All Nigerian dishes", "Rice", "Yam", "Vegetables", "Meat", "Fish"],
        "special_notes": "Contains beta-carotene (vitamin A precursor). High smoke point good for frying. Two types: red (unrefined) and clear (refined). Essential for authentic Nigerian flavor.",
        "nutritional_benefits": "Vitamin A (beta-carotene), Vitamin E, Healthy fats, Essential fatty acids",
        "medicinal_properties": "Vision support, antioxidant, heart health (in moderation), wound healing",
        "category": "oil"
    },
    {
        "id": 11,
        "english_name": "African Spinach",
        "igbo_name": "Nchuanwu",
        "primary_uses": ["Soup vegetable", "Stew ingredient", "Salad greens", "Nutritional supplement"],
        "flavor_profile": "Mild, slightly earthy, fresh green taste with subtle mineral notes",
        "best_pairings": ["Efo riro", "Vegetable soup", "Fish stew", "Egusi soup"],
        "special_notes": "High in iron, vitamin A and C. Contains vitamin K (322% DV per serving). Good source of folate. Can be eaten raw or cooked. Harvest young leaves.",
        "nutritional_benefits": "Vitamin A (42% DV), Vitamin K (322% DV), Iron (27% DV), Folate, Vitamin C",
        "medicinal_properties": "Blood building, bone health, immune support, vision support, wound healing",
        "category": "leafy"
    },
    {
        "id": 12,
        "english_name": "Common Thyme",
        "igbo_name": "Thyme",
        "primary_uses": ["Seasoning", "Jollof rice spice", "Meat flavoring", "Traditional medicine"],
        "flavor_profile": "Earthy, slightly minty, aromatic with woody undertones and warming sensation",
        "best_pairings": ["Jollof rice", "Grilled meat", "Fish dishes", "Stews", "Rice dishes"],
        "special_notes": "Contains thymol and carvacrol with antimicrobial properties. Rich in fiber, vitamins A and C. Used in traditional medicine for respiratory ailments since 370 BC.",
        "nutritional_benefits": "Fiber, Vitamins A and C, Calcium, Manganese, Magnesium, Copper, Iron",
        "medicinal_properties": "Respiratory health, antimicrobial, antioxidant, digestive support, cough relief",
        "category": "herb"
    }
];

// Application state
let currentCardIndex = 0;
let isFlipped = false;

// DOM elements
const flashcard = document.getElementById('flashcard');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentCardSpan = document.getElementById('currentCard');
const totalCardsSpan = document.getElementById('totalCards');

// Card content elements
const spiceName = document.getElementById('spiceName');
const spiceSubtitle = document.getElementById('spiceSubtitle');
const englishName = document.getElementById('englishName');
const igboName = document.getElementById('igboName');
const primaryUses = document.getElementById('primaryUses');
const flavorProfile = document.getElementById('flavorProfile');
const bestPairings = document.getElementById('bestPairings');
const specialNotes = document.getElementById('specialNotes');
const nutritionalBenefits = document.getElementById('nutritionalBenefits');
const medicinalProperties = document.getElementById('medicinalProperties');

// Initialize the application
function init() {
    totalCardsSpan.textContent = spicesData.length;
    updateCard();
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    // Card flip on click
    flashcard.addEventListener('click', flipCard);
    
    // Navigation buttons
    prevBtn.addEventListener('click', previousCard);
    nextBtn.addEventListener('click', nextCard);
    
    // Keyboard controls
    document.addEventListener('keydown', handleKeyPress);
    
    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    flashcard.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    flashcard.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextCard(); // Swipe left - next card
            } else {
                previousCard(); // Swipe right - previous card
            }
        }
    }
}

// Handle keyboard controls
function handleKeyPress(e) {
    switch(e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            previousCard();
            break;
        case 'ArrowRight':
            e.preventDefault();
            nextCard();
            break;
        case ' ':
            e.preventDefault();
            flipCard();
            break;
    }
}

// Flip card function
function flipCard() {
    flashcard.classList.toggle('flipped');
    isFlipped = !isFlipped;
}

// Navigation functions
function previousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
    }
}

function nextCard() {
    if (currentCardIndex < spicesData.length - 1) {
        currentCardIndex++;
        updateCard();
    }
}

// Update card content
function updateCard() {
    const spice = spicesData[currentCardIndex];
    
    // Reset flip state
    if (isFlipped) {
        flashcard.classList.remove('flipped');
        isFlipped = false;
    }
    
    // Update counter
    currentCardSpan.textContent = currentCardIndex + 1;
    
    // Update navigation buttons
    prevBtn.disabled = currentCardIndex === 0;
    nextBtn.disabled = currentCardIndex === spicesData.length - 1;
    
    // Update front content
    spiceName.textContent = spice.english_name;
    spiceSubtitle.textContent = spice.igbo_name;
    
    // Update back content
    englishName.textContent = spice.english_name;
    igboName.textContent = spice.igbo_name;
    
    // Update primary uses
    primaryUses.innerHTML = '';
    spice.primary_uses.forEach(use => {
        const li = document.createElement('li');
        li.textContent = use;
        primaryUses.appendChild(li);
    });
    
    // Update other content
    flavorProfile.textContent = spice.flavor_profile;
    specialNotes.textContent = spice.special_notes;
    nutritionalBenefits.textContent = spice.nutritional_benefits;
    medicinalProperties.textContent = spice.medicinal_properties;
    
    // Update best pairings
    bestPairings.innerHTML = '';
    spice.best_pairings.forEach(pairing => {
        const span = document.createElement('span');
        span.className = 'pairing-item';
        span.textContent = pairing;
        bestPairings.appendChild(span);
    });
    
    // Update category styling
    const frontCard = document.querySelector('.flashcard-front');
    
    // Remove all category classes
    frontCard.className = frontCard.className.replace(/category-\w+/g, '');
    
    // Add current category class
    frontCard.classList.add(`category-${spice.category}`);
}

// Get category color for styling
function getCategoryColor(category) {
    const colors = {
        'fermented': '#8B4513',
        'leafy': '#228B22',
        'pepper': '#DC143C',
        'spice': '#DAA520',
        'oil': '#FF8C00',
        'fruit': '#9370DB',
        'protein': '#4682B4',
        'herb': '#32CD32'
    };
    return colors[category] || '#708090';
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        spicesData,
        flipCard,
        previousCard,
        nextCard,
        updateCard
    };
}