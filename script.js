const translations = {
  en: {
    navServices: 'Services',
    navUseCases: 'Use Cases',
    navApproach: 'Approach',
    navResults: 'Results',
    navAbout: 'About',
    navCta: 'Get in touch',
    heroEyebrow: 'Paris-based automation consultancy',
    heroTitle: 'Automate the work that slows your team down.',
    heroSubtitle: 'We audit, build, and ship OpenClaw automations connected to your existing tools—so your team spends less time on manual operations.',
    heroPrimary: 'Book a 30-minute consult',
    heroSecondary: 'See automations we build',
    proof1: '2–4 week delivery',
    proof2: 'Security-first implementation',
    proof3: 'Works with your existing tools',
    heroMapSub: 'orchestration',
    fitTitle: 'Who this is for',
    fit1Title: 'Agencies', fit1Text: 'Client onboarding, content approvals, reporting packs.',
    fit2Title: 'B2B Services', fit2Text: 'Lead qualification, handoffs, support triage workflows.',
    fit3Title: 'E-commerce Ops', fit3Text: 'Order exceptions, refund routing, supplier coordination.',
    fit4Title: 'Internal Ops Teams', fit4Text: 'Approvals, recurring reports, cross-team task orchestration.',
    useCasesTitle: 'Use cases we implement',
    uc1Title: 'Lead qualification + routing', uc1Text: 'Forms + Gmail + HubSpot + Slack routing with priority scoring.',
    uc2Title: 'Sales follow-ups + meeting prep', uc2Text: 'Auto drafts from CRM context in Gmail, Notion briefs before calls.',
    uc3Title: 'Onboarding automation', uc3Text: 'Welcome sequences, account setup checks, task creation in Notion/Asana.',
    uc4Title: 'Support triage + knowledge retrieval', uc4Text: 'Inbox triage, intent tagging, suggested replies from your documentation.',
    uc5Title: 'Invoicing + payment chasing', uc5Text: 'Stripe and accounting reminders, follow-ups, escalation logic.',
    uc6Title: 'Reporting dashboards + weekly exec summary', uc6Text: 'Pull data from Sheets, HubSpot, Stripe into one clear weekly brief.',
    uc7Title: 'Document processing (PDF/email to CRM)', uc7Text: 'Parse incoming docs, extract fields, update records with audit trail.',
    uc8Title: 'Internal approvals + task orchestration', uc8Text: 'Approval flows in Slack + Notion with clear owners and deadlines.',
    approachTitle: 'How we work',
    ap1Title: '1) Audit and ROI map (1–2 days)', ap1Text: 'Identify top 5 automations, estimate hours saved, map risk and dependencies.',
    ap2Title: '2) Build and integrate (1–2 weeks)', ap2Text: 'OpenClaw workflows, connectors, logs, and exception handling in production.',
    ap3Title: '3) Deploy and train (2–5 days)', ap3Text: 'Documentation, handoff sessions, monitoring setup, and ownership transfer.',
    deliverablesTitle: 'Deliverables',
    del1: 'Workflow diagrams', del2: 'Prioritized automation backlog', del3: 'Runbooks and incident procedures',
    del4: 'Monitoring dashboard', del5: 'Access management plan',
    resultsTitle: 'Results (placeholders)',
    result1: 'Reduced manual ticket triage time by 35% (B2B services team).',
    result2: 'Cut onboarding admin time from 2h to 30m per client (agency).',
    result3: 'Weekly reporting automated across six data sources (ops team).',
    testimonial: '“The automations are reliable, documented, and actually used by the team.” — Operations Lead, Paris (placeholder)',
    offerTitle: 'Engagement options',
    offer1Title: 'Sprint (fixed scope, 2 weeks)', offer1a: '1–3 production automations', offer1b: 'Tool integrations + QA', offer1c: 'Handoff and team training',
    offer2Title: 'Build Retainer (monthly)', offer2a: 'Continuous automation backlog delivery', offer2b: 'Monitoring + optimization', offer2c: 'Priority response for incidents',
    offer3Title: 'Advisory (workshops + roadmap)', offer3a: 'Ops review workshops', offer3b: 'Automation roadmap by ROI', offer3c: 'Internal capability coaching',
    aboutTitle: 'About VERGE',
    aboutText: 'Founder-led and Paris-based. We build pragmatic automation systems with reliability, monitoring, and documentation at the core. Bilingual FR/EN delivery.',
    footerTitle: 'Let’s map your first automation sprint.',
    footerSubtitle: 'Tell us where your team loses time each week—we’ll propose a practical first build.',
    formEmail: 'Work email',
    formMessage: 'What should we automate first?',
    formSubmit: 'Send request',
    formCalendly: 'Book via Calendly (placeholder)'
  },
  fr: {
    navServices: 'Services',
    navUseCases: 'Cas d’usage',
    navApproach: 'Approche',
    navResults: 'Résultats',
    navAbout: 'À propos',
    navCta: 'Nous contacter',
    heroEyebrow: 'Cabinet d’automatisation basé à Paris',
    heroTitle: 'Automatisez le travail qui ralentit votre équipe.',
    heroSubtitle: 'Nous auditons, construisons et déployons des automatisations OpenClaw connectées à vos outils existants pour réduire les opérations manuelles.',
    heroPrimary: 'Réserver un appel de 30 minutes',
    heroSecondary: 'Voir les automatisations',
    proof1: 'Livraison en 2–4 semaines',
    proof2: 'Implémentation orientée sécurité',
    proof3: 'Compatible avec vos outils actuels',
    heroMapSub: 'orchestration',
    fitTitle: 'Pour qui ?',
    fit1Title: 'Agences', fit1Text: 'Onboarding client, validations de contenus, reporting.',
    fit2Title: 'Services B2B', fit2Text: 'Qualification des leads, handoffs, triage support.',
    fit3Title: 'Ops e-commerce', fit3Text: 'Exceptions de commande, routage des remboursements, coordination fournisseurs.',
    fit4Title: 'Équipes opérations internes', fit4Text: 'Approbations, rapports récurrents, orchestration inter-équipes.',
    useCasesTitle: 'Cas d’usage que nous implémentons',
    uc1Title: 'Qualification et routage des leads', uc1Text: 'Formulaires + Gmail + HubSpot + Slack avec scoring de priorité.',
    uc2Title: 'Relances commerciales + préparation de rendez-vous', uc2Text: 'Brouillons auto depuis le CRM, briefs Notion avant les calls.',
    uc3Title: 'Automatisation de l’onboarding', uc3Text: 'Séquences d’accueil, vérifications de setup, tâches dans Notion/Asana.',
    uc4Title: 'Triage support + recherche dans la base de connaissance', uc4Text: 'Triage de boîte mail, tagging d’intention, réponses suggérées.',
    uc5Title: 'Facturation + relances de paiement', uc5Text: 'Relances Stripe/compta, suivis et escalades automatiques.',
    uc6Title: 'Dashboards + synthèse hebdomadaire direction', uc6Text: 'Données Sheets, HubSpot, Stripe rassemblées dans un brief clair.',
    uc7Title: 'Traitement documentaire (PDF/email vers CRM)', uc7Text: 'Extraction de champs, mise à jour CRM, journal d’audit.',
    uc8Title: 'Approbations internes + orchestration de tâches', uc8Text: 'Flux d’approbation Slack + Notion avec responsables et délais.',
    approachTitle: 'Notre méthode',
    ap1Title: '1) Audit et cartographie ROI (1–2 jours)', ap1Text: 'Top 5 automatisations, estimation des heures gagnées, risques et dépendances.',
    ap2Title: '2) Build et intégration (1–2 semaines)', ap2Text: 'Workflows OpenClaw, connecteurs, logs et gestion des exceptions.',
    ap3Title: '3) Déploiement et formation (2–5 jours)', ap3Text: 'Documentation, transfert de compétences, monitoring et ownership.',
    deliverablesTitle: 'Livrables',
    del1: 'Schémas de workflow', del2: 'Backlog d’automatisation priorisé', del3: 'Runbooks et procédures incident',
    del4: 'Dashboard de monitoring', del5: 'Plan de gestion des accès',
    resultsTitle: 'Résultats (placeholders)',
    result1: 'Réduction de 35% du temps de triage des tickets (équipe services B2B).',
    result2: 'Onboarding administratif réduit de 2h à 30 min par client (agence).',
    result3: 'Reporting hebdomadaire automatisé sur six sources de données (équipe ops).',
    testimonial: '« Les automatisations sont fiables, documentées et vraiment utilisées par l’équipe. » — Responsable Opérations, Paris (placeholder)',
    offerTitle: 'Modes de collaboration',
    offer1Title: 'Sprint (scope fixe, 2 semaines)', offer1a: '1 à 3 automatisations en production', offer1b: 'Intégrations + QA', offer1c: 'Handover et formation équipe',
    offer2Title: 'Retainer Build (mensuel)', offer2a: 'Livraison continue du backlog', offer2b: 'Monitoring + optimisation', offer2c: 'Réponse prioritaire aux incidents',
    offer3Title: 'Advisory (ateliers + roadmap)', offer3a: 'Ateliers de revue opérations', offer3b: 'Roadmap d’automatisation par ROI', offer3c: 'Coaching des équipes internes',
    aboutTitle: 'À propos de VERGE',
    aboutText: 'Cabinet founder-led basé à Paris. Nous concevons des automatisations pragmatiques, fiables, monitorées et documentées. Delivery bilingue FR/EN.',
    footerTitle: 'Planifions votre premier sprint d’automatisation.',
    footerSubtitle: 'Expliquez où votre équipe perd du temps chaque semaine : nous proposerons un premier build pragmatique.',
    formEmail: 'Email professionnel',
    formMessage: 'Que devons-nous automatiser en premier ?',
    formSubmit: 'Envoyer la demande',
    formCalendly: 'Réserver via Calendly (placeholder)'
  }
};

const i18nNodes = document.querySelectorAll('[data-i18n]');
const langButtons = document.querySelectorAll('.lang-option');
const menuToggle = document.getElementById('menuToggle');
const navWrap = document.getElementById('mainNav');
let currentLang = 'en';

const setLanguage = (lang) => {
  const dict = translations[lang];
  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });

  document.documentElement.lang = lang;
  currentLang = lang;

  langButtons.forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
};

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

menuToggle.addEventListener('click', () => {
  const isOpen = navWrap.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 980) {
    navWrap.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
  }
});

setLanguage(currentLang);
