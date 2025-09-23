/* ==========
   0) i18n FIRST (so nothing references lang before it's defined)
========== */
const dict = {
  en: {
    brand: "AI-llendes",
    nav_what: "What We Do",
    nav_faq: "FAQ",
    nav_book: "Book a Call",

    hero_h1: "Stop Losing Leads to Slow Replies",
    hero_p: "We capture new inquiries and reply in <strong>&lt;60s</strong> over SMS/email/WhatsApp, qualifying and driving them straight to your calendar — 24/7.",
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
    faq5_q: "Do you offer a money-back/results guarantee?",
    faq5_a: "Yes. If we don’t meet the outcomes agreed on our kickoff call in the first 30 days after go-live (given agreed inputs like ad spend, list quality, and form placement), we won’t bill the monthly fee for that period. We either fix it together or pause—your choice.",
    faq1_q: "How fast are replies really?",
    faq1_a: "We target 15–60 seconds from capture to first message, 24/7. Most clients see ~30 seconds.",
    faq2_q: "Will this work with my existing tools?",
    faq2_a: "Yes—CRMs, calendars, forms, and ad platforms. If you have an API or Zapier, we can connect.",
    faq3_q: "How do you handle compliance and opt-outs?",
    faq3_a: "We include consent capture, clear opt-out flows, and respect regional regulations.",
    faq4_q: "What does onboarding look like?",
    faq4_a: "Strategy call, workflows defined, integrations connected, sequences launched—typically in 7–10 days.",

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

    hero_h1: "Ne perdez plus de prospects à cause de réponses lentes",
    hero_p: "Nous capturons chaque demande et répondons en <strong>&lt;60s</strong> par SMS/email/WhatsApp, qualifions et les dirigeons directement vers votre agenda — 24/7.",
    cta_primary: "Obtenir plus de rendez-vous",
    cta_secondary: "Voir comment ça marche",
    bullet_1: "Première réponse moyenne < 30 secondes",
    bullet_2: "Taux de présence +20–40%",
    bullet_3: "Compatible avec votre CRM, vos formulaires et vos publicités",

    stat_more_calls: "Plus de rendez-vous",
    chat_1: "Nouveau prospect capturé ✅",
    chat_2: "Salut ! Dispo pour échanger cette semaine ?",
    chat_3: "Parfait — lien agenda ci-dessous 📅",

    what_title: "Ce que nous faisons",
    what_sub: "Capturer → Répondre → Réserver. 100% automatisé et journalisé.",
    card1_h: "🚀 Contact instantané",
    card1_p: "Réponse automatique par SMS, email et WhatsApp en quelques secondes après un formulaire, DM ou appel.",
    card2_h: "🤝 Nurturing 2-voies",
    card2_p: "Des séquences naturelles qui qualifient, répondent aux questions et lèvent les objections — sans relances manuelles.",
    card3_h: "📅 Réservation autopilotée",
    card3_p: "Envoie les prospects qualifiés vers votre agenda et gère rappels + reprogrammations automatiquement.",
    card4_h: "⏳ Gagnez du temps",
    card4_p: "On automatise la logistique pour vous concentrer sur la signature — fini le ping-pong d’emails.",
    card5_h: "♻️ Réactiver les prospects froids",
    card5_p: "Relances intelligentes pour réengager les leads inactifs et récupérer du revenu.",
    card6_h: "🔌 Votre stack",
    card6_p: "Google/Outlook, HubSpot/Salesforce/Pipedrive, formulaires Meta/Google, Typeform, Zapier — plug-and-play.",

    commit_title: "Nos engagements",
    commit1_h: "Premier contact en < 60s",
    commit1_p: "Chaque prospect qualifié reçoit une réponse en moins d’une minute, 24/7.",
    commit2_h: "Mise en place clé en main",
    commit2_p: "Intégration de votre CRM, pub et agenda — prise en charge complète.",
    commit3_h: "Priorité au revenu",
    commit3_p: "Optimisé pour des appels qui génèrent du CA, pas seulement des réponses.",
    commit4_h: "Confidentialité & conformité",
    commit4_p: "Consentement, opt-out clairs et contrôle des données.",

    stat_1: "Temps de réponse moyen",
    stat_2: "Toujours actif",
    stat_3: "Engagement hors-heures",
    stat_4: "Délai de réservation (min)",

    faq_title: "FAQ",
    faq5_q: "Proposez-vous une garantie de résultat/remboursement ?",
    faq5_a: "Oui. Si nous n’atteignons pas les objectifs convenus lors de l’appel de lancement dans les 30 jours suivant la mise en ligne (selon les apports convenus : budget pub, qualité des listes, emplacement des formulaires), vous ne serez pas facturé pour cette période. On corrige ensemble ou on met en pause — à vous de choisir.",
    faq1_q: "Vos réponses sont vraiment rapides ?",
    faq1_a: "Cible de 15–60 secondes entre la capture et le premier message, 24/7. La plupart des clients constatent ~30 s.",
    faq2_q: "Compatible avec mes outils actuels ?",
    faq2_a: "Oui — CRM, agendas, formulaires et plateformes publicitaires. Avec une API ou Zapier, on s’intègre.",
    faq3_q: "Et la conformité et les opt-out ?",
    faq3_a: "On capture le consentement, prévoit des opt-out clairs et respecte les exigences locales.",
    faq4_q: "À quoi ressemble l’onboarding ?",
    faq4_a: "Appel stratégique, définition des workflows, connexions, lancement des séquences — généralement en 7–10 jours.",

    book_title: "Réserver un appel",
    book_p: "Choisissez un créneau ou laissez vos infos — on confirme par SMS/email.",
    book_left_h: "Lien agenda direct",
    book_left_p: "Prêt tout de suite ? Allez directement à l’agenda.",
    book_left_btn: "Ouvrir l’agenda",
    book_left_note: "Nous utiliserons votre lien Calendly depuis",
    book_right_h: "Demander un créneau",

    form_name: "Nom",
    form_email: "Email",
    form_phone: "Téléphone",
    form_company: "Société",
    form_notes: "Que souhaitez-vous améliorer ?",
    form_btn: "Demander un créneau",

    footer_tag: "Nous répondons en secondes et réservons des appels en pilote automatique.",
    rights: "Tous droits réservés."
  }
};

let lang = localStorage.getItem('lang') || (navigator.language || 'en').slice(0,2);
if (!['en','fr'].includes(lang)) lang = 'en';

const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => Array.from(p.querySelectorAll(s));

function applyI18n(locale) {
  const map = dict[locale] || dict.en;

  $$('[data-i18n]').forEach(node => {
    const key = node.getAttribute('data-i18n');
    if (!key || !(key in map)) return;
    // keep support for inline tags like <strong>
    if (/[<](strong|em|span|br|code)/i.test(map[key])) node.innerHTML = map[key];
    else node.textContent = map[key];
  });

  // active button
  $('#lang-en')?.classList.toggle('active', locale === 'en');
  $('#lang-fr')?.classList.toggle('active', locale === 'fr');

  document.documentElement.setAttribute('lang', locale);
}

/* Bind language buttons */
$('#lang-en')?.addEventListener('click', () => { lang = 'en'; localStorage.setItem('lang', lang); applyI18n(lang); });
$('#lang-fr')?.addEventListener('click', () => { lang = 'fr'; localStorage.setItem('lang', lang); applyI18n(lang); });

/* Initial translation */
applyI18n(lang);

/* ==========
   1) Year
========== */
(() => {
  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();
})();

/* ==========
   2) Smooth scroll for links with [data-scroll]
========== */
(() => {
  $$('a[data-scroll], [data-scroll]').forEach(el => {
    el.addEventListener('click', (e) => {
      const href = el.getAttribute('href') || el.getAttribute('data-scroll');
      if (!href || !href.startsWith('#')) return;
      const target = $(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', href);
    });
  });
})();

/* ==========
   3) Accordion
========== */
(() => {
  $$('.acc__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
    });
  });
})();

/* ==========
   4) Calendar link
========== */
const CAL_URL = 'https://calendly.com/aillendes1996/30min';
(() => {
  const btn = $('#openCalendar');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(CAL_URL, '_blank', 'noopener');
    });
  }
})();

/* ==========
   5) Booking form (UI-only; uses current lang safely)
========== */
(() => {
  const form = $('#bookingForm');
  const status = $('#bookingStatus');
  if (!form || !status) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.classList.remove('success', 'error');
    status.textContent = (lang === 'fr')
      ? "Merci ! Nous vous recontactons rapidement pour confirmer l'horaire."
      : "Thanks! We'll get back shortly to confirm a time.";
    status.classList.add('success');
    form.reset();
  });
})();



