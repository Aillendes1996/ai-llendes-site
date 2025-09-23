/* ========== Helpers ========== */
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => Array.from(p.querySelectorAll(s));

/* ========== Dictionaries ========== */
const dict = {
  en: {
    hero_h1: "Stop Losing Leads to Slow Replies",
    hero_p: "We capture new inquiries and reply in <strong>&lt;60s</strong> over SMS/email/WhatsApp, qualifying and driving them straight to your calendar — 24/7.",
    cta_primary: "Get More Booked Calls",
    cta_secondary: "See How It Works",
    bullet_1: "Average first response < 30 seconds",
    bullet_2: "Show-up rates 20–40% higher",
    bullet_3: "Works with your CRM, forms, and ads",
    faq5_q: "Do you offer a money-back/results guarantee?",
    faq5_a: "Yes. If we don’t meet the outcomes agreed on our kickoff call in the first 30 days after go-live, we won’t bill you for that period.",
    book_title: "Book a Call",
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
    hero_h1: "Ne perdez plus de prospects à cause de réponses lentes",
    hero_p: "Nous capturons chaque demande et répondons en <strong>&lt;60s</strong> par SMS/email/WhatsApp, puis nous les dirigeons directement vers votre agenda — 24/7.",
    cta_primary: "Obtenir plus de rendez-vous",
    cta_secondary: "Voir comment ça marche",
    bullet_1: "Première réponse moyenne < 30 secondes",
    bullet_2: "Taux de présence +20–40%",
    bullet_3: "Compatible avec votre CRM, vos formulaires et vos publicités",
    faq5_q: "Proposez-vous une garantie de résultat/remboursement ?",
    faq5_a: "Oui. Si nous n’atteignons pas les objectifs convenus lors de l’appel de lancement dans les 30 jours, vous ne serez pas facturé pour cette période.",
    book_title: "Réserver un appel",
    form_name: "Nom",
    form_email: "Email",
    form_phone: "Téléphone",
    form_company: "Société",
    form_notes: "Que souhaitez-vous améliorer ?",
    form_btn: "Demander un créneau",
    footer_tag: "Nous répondons en secondes et réservons des appels automatiquement.",
    rights: "Tous droits réservés."
  }
};

/* ========== Core Switcher ========== */
function applyLang(locale) {
  const map = dict[locale] || dict.en;
  $$('[data-i18n]').forEach(node => {
    const key = node.getAttribute('data-i18n');
    if (!map[key]) return;
    if (map[key].includes('<')) node.innerHTML = map[key];
    else node.textContent = map[key];
  });
  $('#lang-en')?.classList.toggle('active', locale === 'en');
  $('#lang-fr')?.classList.toggle('active', locale === 'fr');
  document.documentElement.setAttribute('lang', locale);
  localStorage.setItem('lang', locale);
}

/* ========== Bind Buttons ========== */
$('#lang-en')?.addEventListener('click', () => applyLang('en'));
$('#lang-fr')?.addEventListener('click', () => applyLang('fr'));

/* ========== Init ========== */
applyLang(localStorage.getItem('lang') || 'en');

/* ========== Extra small features (unchanged) ========== */
$("#year").textContent = new Date().getFullYear();
$('#openCalendar')?.addEventListener('click', e => {
  e.preventDefault();
  window.open("https://calendly.com/aillendes1996/30min", "_blank", "noopener");
});




