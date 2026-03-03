const translations = {
  en: {
    navServices: 'Services',
    navResults: 'Results',
    navAbout: 'About',
    navContact: 'Get in Touch',
    heroTitle: 'Automate your business like a product, not a project.',
    heroSubtitle:
      'We help teams design, ship, and scale automation systems that compound operational advantage.',
    heroPrimary: 'Build With OpenClaw',
    heroSecondary: 'View Case Studies',
    card1Title: 'Audit',
    card1Text: 'We map your workflows and identify the highest ROI automations.',
    card2Title: 'Architecture',
    card2Text: 'We design robust systems connected to your tools and business goals.',
    card3Title: 'Leverage',
    card3Text: 'You move faster, reduce manual work, and scale with confidence.',
    resultsTitle: 'Recent Results',
    stat1: 'Onboarding Automation',
    stat2: 'Support Costs',
    stat3: 'Feature Velocity',
    finalTitle: 'Automate what matters most.',
    finalButton: 'Book a 30-minute consult'
  },
  fr: {
    navServices: 'Services',
    navResults: 'Résultats',
    navAbout: 'À propos',
    navContact: 'Nous contacter',
    heroTitle: 'Automatisez votre entreprise comme un produit, pas un projet.',
    heroSubtitle:
      "Nous aidons les équipes à concevoir, déployer et faire évoluer des systèmes d'automatisation créateurs d'avantage opérationnel.",
    heroPrimary: 'Construire avec OpenClaw',
    heroSecondary: 'Voir les études de cas',
    card1Title: 'Audit',
    card1Text: 'Nous cartographions vos flux et ciblons les automatisations au meilleur ROI.',
    card2Title: 'Architecture',
    card2Text: 'Nous concevons des systèmes robustes alignés sur vos outils et vos objectifs.',
    card3Title: 'Effet levier',
    card3Text: 'Vous avancez plus vite, réduisez le manuel et passez à l’échelle sereinement.',
    resultsTitle: 'Résultats récents',
    stat1: "Automatisation de l'onboarding",
    stat2: 'Coûts de support',
    stat3: 'Vitesse de livraison',
    finalTitle: "Automatisez ce qui compte vraiment.",
    finalButton: 'Réserver un appel de 30 minutes'
  }
};

const langToggle = document.getElementById('langToggle');
const i18nNodes = document.querySelectorAll('[data-i18n]');
let currentLang = 'en';

const applyLanguage = (lang) => {
  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[lang][key];
  });

  document.documentElement.lang = lang;
  langToggle.textContent = lang === 'en' ? 'FR' : 'EN';
};

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  applyLanguage(currentLang);
});

applyLanguage(currentLang);
