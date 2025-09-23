/* ===========================
   CONFIG
   =========================== */
const CALENDAR_URL = "https://calendly.com/aillendes1996/30min";

/* ===========================
   Language (EN / FR)
   =========================== */
const i18n = {
  en: {
    nav_what: "What We Do",
    nav_faq: "FAQ",
    nav_call: "Book a Call",

    hero_title: "Stop Losing Leads to Slow Replies",
    hero_sub:
      "We capture new inquiries and reply in <b>&lt;60s</b> over SMS/email/WhatsApp, qualifying and driving them straight to your calendar — 24/7.",
    cta_primary: "Get More Booked Calls",
    cta_secondary: "See How It Works",

    b1: "Average first response < 30 seconds",
    b2: "Show-up rates 20–40% higher",
    b3: "Works with your CRM, forms, and ads",
    stat_booked: "More booked calls",

    what_title: "What We Do",
    what_sub: "Capture → Respond → Book. Fully automated, fully logged.",
    w1_h: "Instant Outreach",
    w1_p: "Auto-respond across SMS, email, and WhatsApp within seconds of form fills, DMs, or inbound calls.",
    w2_h: "2-Way Nurture",
    w2_p: "Human-like sequences that qualify, answer FAQs, and overcome objections—no manual chasing.",
    w3_h: "Autopilot Booking",
    w3_p: "Pushes qualified leads to your calendar, handles reminders and rescheduling automatically.",
    w4_h: "Save Time",
    w4_p: "We automate the busywork so you focus on closing—no more inbox ping-pong.",
    w5_h: "Revive Dead Leads",
    w5_p: "Smart follow-ups re-engage stale or ghosted leads and bring lost revenue back to life.",
    w6_h: "Your Stack",
    w6_p: "Google/Outlook calendars, HubSpot/Salesforce/Pipedrive, Meta/Google Ads forms, Typeform, Zapier—plug and play.",

    commit_title: "Our Commitments",
    c1_h: "Sub-60s First Touch",
    c1_p: "Every qualified lead hears from you in under a minute, 24/7.",
    c2_h: "White-Glove Setup",
    c2_p: "We integrate your CRM, ads, and calendar—done for you.",
    c3_h: "Revenue-First",
    c3_p: "Optimized for booked revenue calls, not just replies.",
    c4_h: "Privacy & Compliance",
    c4_p: "Consent-aware messaging with clear opt-outs and data controls.",

    s1: "Avg Response Time",
    s2: "Always On",
    s3: "After-Hours Engagement",
    s4: "Booking Rate (mins)",

    faq_title: "FAQ",
    q1: "How fast are replies really?",
    a1: "We target 15–60 seconds from capture to first message, 24/7. Most clients see ~30 seconds.",
    q2: "Will this work with my existing tools?",
    a2: "Yes—CRMs, calendars, forms, and ad platforms. If you have an API or Zapier, we can connect.",
    q3: "How do you handle compliance and opt-outs?",
    a3: "We include consent capture, clear opt-out flows, and respect regional regulations.",
    q4: "What does onboarding look like?",
    a4: "Strategy call, workflows defined, integrations connected, sequences launched—typically in 7–10 days.",

    book_title: "Book a Call",
    book_sub: "Pick a time that works, or leave your info and we’ll confirm via SMS/email.",
    cal_h: "Direct calendar link",
    cal_p: "Already ready? Jump straight to the calendar.",
    cal_btn: "Open Calendar",
    cal_note: "We’ll use your Calendly link from <code>app.js</code>.",
    req_h: "Request a booking",
    f_name: "Name",
    f_email: "Email",
    f_phone: "Phone",
    f_company: "Company",
    f_notes: "What are you looking to improve?",
    req_btn: "Request a Time",

    foot_sub: "We reply in seconds and book calls on autopilot."
  },

  fr: {
    nav_what: "Ce que nous faisons",
    nav_faq: "FAQ",
    nav_call: "Réserver un appel",

    hero_title: "Arrêtez de perdre des prospects à cause des réponses lentes",
    hero_sub:
      "Nous captons chaque demande et répondons en <b>&lt;60s</b> par SMS/email/WhatsApp, qualifions et envoyons directement vers votre agenda — 24/7.",
    cta_primary: "Obtenir plus de rendez-vous",
    cta_secondary: "Voir comment ça marche",

    b1: "Première réponse moyenne < 30 secondes",
    b2: "Taux de présence +20–40%",
    b3: "Fonctionne avec votre CRM, formulaires et pubs",
    stat_booked: "Plus de rendez-vous réservés",

    what_title: "Ce que nous faisons",
    what_sub: "Capturer → Répondre → Réserver. Totalement automatisé et journalisé.",
    w1_h: "Relance instantanée",
    w1_p: "Réponse automatique via SMS, email et WhatsApp en quelques secondes après les formulaires, DM ou appels.",
    w2_h: "Nurture bi-directionnel",
    w2_p: "Séquences humaines qui qualifient, répondent aux FAQ et lèvent les objections — sans relances manuelles.",
    w3_h: "Réservation automatique",
    w3_p: "Envoie les prospects qualifiés vers votre agenda et gère rappels et reports automatiquement.",
    w4_h: "Gain de temps",
    w4_p: "On automatise la routine pour vous concentrer sur la conclusion.",
    w5_h: "Relance des prospects inactifs",
    w5_p: "Relances intelligentes pour réactiver les prospects inactifs et récupérer du revenu.",
    w6_h: "Votre stack",
    w6_p: "Calendriers Google/Outlook, HubSpot/Salesforce/Pipedrive, formulaires Meta/Google Ads, Typeform, Zapier — plug-and-play.",

    commit_title: "Nos engagements",
    c1_h: "Premier contact < 60s",
    c1_p: "Chaque prospect qualifié reçoit une réponse en moins d’une minute, 24/7.",
    c2_h: "Mise en place accompagnée",
    c2_p: "Intégration CRM, pubs, calendrier — clé en main.",
    c3_h: "Priorité au revenu",
    c3_p: "Optimisé pour les appels générateurs de revenus, pas seulement des réponses.",
    c4_h: "Vie privée & conformité",
    c4_p: "Consentement, opt-out clairs et contrôle des données.",

    s1: "Temps de réponse moyen",
    s2: "Toujours actif",
    s3: "Engagement hors-heures",
    s4: "Temps de réservation (min)",

    faq_title: "FAQ",
    q1: "À quelle vitesse répondez-vous réellement ?",
    a1: "Nous visons 15–60 secondes entre la capture et le premier message, 24/7. La plupart constatent ~30 secondes.",
    q2: "Est-ce compatible avec mes outils ?",
    a2: "Oui — CRMs, calendriers, formulaires et plateformes publicitaires. Avec une API ou Zapier, on connecte.",
    q3: "Comment gérez-vous la conformité et les opt-out ?",
    a3: "Consentement, opt-out clairs et respect des réglementations régionales.",
    q4: "À quoi ressemble l’onboarding ?",
    a4: "Appel stratégie, workflows définis, intégrations connectées, séquences lancées — en 7–10 jours.",

    book_title: "Réserver un appel",
    book_sub: "Choisissez un horaire ou laissez vos infos — confirmation par SMS/email.",
    cal_h: "Lien calendrier direct",
    cal_p: "Prêt ? Accédez directement au calendrier.",
    cal_btn: "Ouvrir le calendrier",
    cal_note: "On utilise votre lien Calendly défini dans <code>app.js</code>.",
    req_h: "Demande de réservation",
    f_name: "Nom",
    f_email: "Email",
    f_phone: "Téléphone",
    f_company: "Entreprise",
    f_notes: "Que souhaitez-vous améliorer ?",
    req_btn: "Demander un créneau",

    foot_sub: "Nous répondons en secondes et réservons des appels en autopilote."
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!i18n[lang][key]) return;
    // Allow HTML in some strings
    const htmlKeys = new Set(["hero_sub", "cal_note"]);
    if (htmlKeys.has(key)) el.innerHTML = i18n[lang][key];
    else el.textContent = i18n[lang][key];
  });

  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  // Also set document lang attribute for accessibility
  document.documentElement.setAttribute("lang", lang);
}

function getLang() {
  return localStorage.getItem("lang") || "en";
}

/* ===========================
   DOM Ready
   =========================== */
document.addEventListener("DOMContentLoaded", () => {
  // Language init
  setLang(getLang());
  document.getElementById("lang-en").addEventListener("click", () => setLang("en"));
  document.getElementById("lang-fr").addEventListener("click", () => setLang("fr"));

  // Accordion behaviour
  document.querySelectorAll(".accordion-item .accordion-trigger").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".accordion-item");
      const expanded = item.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".accordion-item").forEach(i => i.setAttribute("aria-expanded", "false"));
      item.setAttribute("aria-expanded", expanded ? "false" : "true");
    });
  });

  // Calendar buttons (hero/footer/booking)
  const openCal = (e) => { e && e.preventDefault(); window.open(CALENDAR_URL, "_blank", "noopener"); };
  const heroBtn = document.getElementById("openCalendar");
  if (heroBtn) heroBtn.addEventListener("click", openCal);
  const footerCal = document.getElementById("footerCal");
  if (footerCal) footerCal.addEventListener("click", openCal);

  // Booking form (stub – send to your webhook if needed)
  const form = document.getElementById("bookingForm");
  const status = document.getElementById("bookingStatus");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.textContent = "Sending…";
      status.style.color = "#555";

      // TODO: replace with your endpoint
      await new Promise(r => setTimeout(r, 700));

      status.textContent = getLang() === "fr"
        ? "Merci ! Nous revenons vers vous rapidement."
        : "Thanks! We’ll get back to you shortly.";
      status.style.color = "green";
      form.reset();
    });
  }
});


