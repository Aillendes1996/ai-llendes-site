// app.js - Language switch only

const translations = {
  en: {
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
    faq_title: "FAQ",
    faq5_q: "Do you offer a money-back/results guarantee?",
    faq5_a: "Yes. If we don’t meet the outcomes agreed on our kickoff call in the first 30 days after go-live, we won’t bill the monthly fee for that period.",
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
    faq_title: "FAQ",
    faq5_q: "Proposez-vous une garantie de remboursement/résultats ?",
    faq5_a: "Oui. Si nous ne respectons pas les résultats convenus lors de l’appel de démarrage dans les 30 premiers jours, nous ne facturons pas le mois en cours.",
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

// Update DOM text
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll(".lang-switch button").forEach(b => b.classList.remove("active"));
  document.getElementById("lang-" + lang).classList.add("active");
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
  document.getElementById("lang-fr").addEventListener("click", () => setLanguage("fr"));
  setLanguage("en"); // default
});
