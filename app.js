// app.js

// ------------------------------
// 1. Translations dictionary
// ------------------------------
const translations = {
  en: {
    brand: "AI-llendes",
    nav_what: "What We Do",
    nav_faq: "FAQ",
    nav_book: "Book a Call",

    hero_h1: "Stop Losing Leads to Slow Replies",
    hero_p: "We capture new inquiries and reply in <strong><60s</strong> over SMS/email/WhatsApp, qualifying and driving them straight to your calendar — 24/7.",
    cta_primary: "Get More Booked Calls",
    cta_secondary: "See How It Works",

    bullet_1: "Average first response < 30 seconds",
    bullet_2: "Show-up rates 20–40% higher",
    bullet_3: "Works with your CRM, forms, and ads",

    stat_more_calls: "More booked calls",
    chat_1: "New lead captured ✅",
    chat_2: "Hey! Want to chat this week?",
    chat_3: "Great — calendar link below 📅",

    what_title: "What We Do",
    what_sub: "Capture → Respond → Book. Fully automated, fully logged.",

    card1_h: "🚀 Instant Outreach",
    card1_p: "Auto-respond over SMS, email, and WhatsApp within seconds of form fills, DMs, or inbound calls.",
    card2_h: "🤝 2-Way Nurture",
    card2_p: "Human-like sequences qualify, answer FAQs, and overcome objections—no manual chasing.",
    card3_h: "📅 Autopilot Booking",
    card3_p: "Push qualified leads to your calendar, with reminders and rescheduling handled automatically.",
    card4_h: "⏳ Save Time",
    card4_p: "We automate the busywork so you focus on closing—no more inbox ping-pong.",
    card5_h: "♻️ Revive Dead Leads",
    card5_p: "Smart follow-ups re-engage stale or ghosted leads and bring lost revenue back to life.",
    card6_h: "🔌 Your Stack",
    card6_p: "Google/Outlook calendars, HubSpot/Salesforce/Pipedrive, Meta/Google Ads forms, Typeform, Zapier—plug and play.",

    commit_title: "Our Commitments",
    commit1_h: "Sub-60s First Touch",
    commit1_p: "Every qualified lead hears from you in under a minute, 24/7.",
    commit2_h: "White-Glove Setup",
    commit2_p: "We integrate your CRM, ads, and calendar—done for you.",
    commit3_h: "Revenue-First",
    commit3_p: "Optimized for booked revenue calls, not just replies.",
    commit4_h: "Privacy & Compliance",
    commit4_p: "Consent-aware messaging with clear opt-outs and data controls.",

    stat_1: "Avg Response Time",
    stat_2: "Always On",
    stat_3: "After-Hours Engagement",
    stat_4: "Booking Rate (mins)",

    faq_title: "FAQ",
    faq1_q: "How fast are replies really?",
    faq1_a: "We target 15–60 seconds from capture to first message, 24/7. Most clients see ~30 seconds.",
    faq2_q: "Will this work with my existing tools?",
    faq2_a: "Yes—CRMs, calendars, forms, and ad platforms. If you have an API or Zapier, we can connect.",
    faq3_q: "How do you handle compliance and opt-outs?",
    faq3_a: "We include consent capture, clear opt-out flows, and respect regional regulations.",
    faq4_q: "What does onboarding look like?",
    faq4_a: "Strategy call, workflows defined, integrations connected, sequences launched—typically in 7–10 days.",
    faq5_q: "Do you offer a money-back/results guarantee?",
    faq5_a: "Yes. If we don’t meet the outcomes agreed on our kickoff call in the first 30 days after go-live, we won’t bill the monthly fee for that period.",

    book_title: "Book a Call",
    book_p: "Pick a time that works, or leave your info and we’ll confirm via SMS/email.",
    book_left_h: "Direct calendar link",
    book_left_p: "Already ready? Jump straight to the calendar.",
    book_left_btn: "Open Calendar",
    book_left_note: "We’ll use your Calendly link from",
    book_right_h: "Request a booking",

    form_name: "Name",
    form_email: "Email",
    form_phone: "Phone",
    form_company: "Company",
    form_notes: "What are you looking to improve?",
    form_btn: "Request a Time",

    footer_tag: "We reply in seconds and book calls on autopilot.",
    rights: "All rights reserved."
  },

  fr: {
    brand: "AI-llendes",
    nav_what: "Ce que nous faisons",
    nav_faq: "FAQ",
    nav_book: "Réserver un appel",

    hero_h1: "Arrêtez de perdre des prospects à cause de réponses lentes",
    hero_p: "Nous capturons les nouvelles demandes et répondons en <strong><60s</strong> par SMS/email/WhatsApp, en les qualifiant et en les envoyant directement dans votre agenda — 24/7.",
    cta_primary: "Obtenez plus d’appels réservés",
    cta_secondary: "Voir comment ça marche",

    bullet_1: "Première réponse moyenne < 30 secondes",
    bullet_2: "Taux de présence 20–40% plus élevé",
    bullet_3: "Fonctionne avec votre CRM, formulaires et publicités",

    stat_more_calls: "Plus d’appels réservés",
    chat_1: "Nouveau prospect capturé ✅",
    chat_2: "Salut ! Voulez-vous discuter cette semaine ?",
    chat_3: "Parfait — lien vers l’agenda ci-dessous 📅",

    what_title: "Ce que nous faisons",
    what_sub: "Capturer → Répondre → Réserver. Entièrement automatisé, entièrement enregistré.",

    card1_h: "🚀 Réponse instantanée",
    card1_p: "Réponse automatique par SMS, email et WhatsApp en quelques secondes après un formulaire, un DM ou un appel entrant.",
    card2_h: "🤝 Nurturing à 2 sens",
    card2_p: "Des séquences quasi humaines qui qualifient, répondent aux FAQ et lèvent les objections — sans relances manuelles.",
    card3_h: "📅 Réservation en pilote automatique",
    card3_p: "Envoie les prospects qualifiés dans votre agenda, avec rappels et reprogrammations automatiques.",
    card4_h: "⏳ Gagner du temps",
    card4_p: "Nous automatisons les tâches répétitives pour que vous vous concentriez sur la conclusion.",
    card5_h: "♻️ Relancer les prospects perdus",
    card5_p: "Des relances intelligentes réengagent les prospects inactifs et redonnent vie au chiffre d’affaires perdu.",
    card6_h: "🔌 Votre pile",
    card6_p: "Calendriers Google/Outlook, HubSpot/Salesforce/Pipedrive, formulaires Meta/Google Ads, Typeform, Zapier — plug & play.",

    commit_title: "Nos engagements",
    commit1_h: "Premier contact en moins de 60s",
    commit1_p: "Chaque prospect qualifié reçoit une réponse en moins d’une minute, 24/7.",
    commit2_h: "Mise en place clé en main",
    commit2_p: "Nous intégrons votre CRM, vos pubs et votre agenda — prêt à l’emploi.",
    commit3_h: "Priorité au revenu",
    commit3_p: "Optimisé pour les appels générateurs de revenus, pas seulement les réponses.",
    commit4_h: "Confidentialité & conformité",
    commit4_p: "Messages respectueux du consentement avec désinscription claire et contrôle des données.",

    stat_1: "Temps de réponse moyen",
    stat_2: "Toujours actif",
    stat_3: "Engagement hors horaires",
    stat_4: "Taux de réservation (minutes)",

    faq_title: "FAQ",
    faq1_q: "Les réponses sont-elles vraiment rapides ?",
    faq1_a: "Nous visons 15–60 secondes entre la capture et le premier message, 24/7. La plupart des clients constatent ~30 secondes.",
    faq2_q: "Est-ce que ça fonctionne avec mes outils existants ?",
    faq2_a: "Oui — CRMs, agendas, formulaires et plateformes publicitaires. Si vous avez une API ou Zapier, nous pouvons nous connecter.",
    faq3_q: "Comment gérez-vous la conformité et les désinscriptions ?",
    faq3_a: "Nous incluons la capture du consentement, des désinscriptions claires et respectons la réglementation régionale.",
    faq4_q: "À quoi ressemble l’onboarding ?",
    faq4_a: "Appel stratégique, définition des workflows, intégrations connectées, séquences lancées — généralement en 7–10 jours.",
    faq5_q: "Proposez-vous une garantie de remboursement/résultats ?",
    faq5_a: "Oui. Si nous ne respectons pas les résultats convenus lors de l’appel de démarrage dans les 30 premiers jours, nous ne facturons pas le mois en cours.",

    book_title: "Réserver un appel",
    book_p: "Choisissez un horaire qui vous convient, ou laissez vos infos et nous confirmerons par SMS/email.",
    book_left_h: "Lien direct vers l’agenda",
    book_left_p: "Déjà prêt ? Accédez directement à l’agenda.",
    book_left_btn: "Ouvrir l’agenda",
    book_left_note: "Nous utiliserons votre lien Calendly depuis",
    book_right_h: "Demander une réservation",

    form_name: "Nom",
    form_email: "Email",
    form_phone: "Téléphone",
    form_company: "Entreprise",
    form_notes: "Que souhaitez-vous améliorer ?",
    form_btn: "Demander un horaire",

    footer_tag: "Nous répondons en quelques secondes et réservons des appels en pilote automatique.",
    rights: "Tous droits réservés."
  }
};

// ------------------------------
// 2. Function to update DOM
// ------------------------------
function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Toggle button styles
  document.querySelectorAll(".lang-switch button").forEach(btn =>
    btn.classList.remove("active")
  );
  document.querySelector(`#lang-${lang}`).classList.add("active");
}

// ------------------------------
// 3. Event listeners
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
  document.getElementById("lang-fr").addEventListener("click", () => setLanguage("fr"));

  // Default to English
  setLanguage("en");

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
});







