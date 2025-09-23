/* ================== CONFIG ================== */
const CALENDAR_URL = "https://calendly.com/aillendes1996/30min";          // your calendar
const N8N_WEBHOOK  = "https://n8n.ai-llendes.org/webhook/lead-intake";    // "" to disable

/* ================== UTILITIES ================== */
// smooth scroll for any element with [data-scroll] or standard anchor within page
document.querySelectorAll('[data-scroll], a[href^="#"]').forEach(el => {
  el.addEventListener("click", e => {
    const href = el.getAttribute("data-scroll") || el.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

/* ================== HERO / BOOKING ================== */
const calBtn = document.getElementById("openCalendar");
if (calBtn) calBtn.href = CALENDAR_URL;

/* ================== ACCORDION ================== */
document.querySelectorAll(".acc__btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    // close others
    document.querySelectorAll(".acc__btn[aria-expanded='true']").forEach(b => {
      if (b !== btn) b.setAttribute("aria-expanded", "false");
    });
    // toggle this
    btn.setAttribute("aria-expanded", String(!expanded));
  });
});

/* ================== BOOKING FORM ================== */
const form = document.getElementById("bookingForm");
const statusEl = document.getElementById("bookingStatus");

function setStatus(msg, ok){
  if (!statusEl) return;
  statusEl.textContent = msg || "";
  statusEl.className = "status " + (ok ? "success" : "error");
}

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    setStatus("", true);

    const fd = new FormData(form);
    const name  = (fd.get("name") || "").trim();
    const email = (fd.get("email") || "").trim();
    const phone = (fd.get("phone") || "").trim();

    if (!name || !email || !phone) {
      setStatus("Please fill name, email, and phone.", false);
      return;
    }

    // If no webhook configured, open calendar directly
    if (!N8N_WEBHOOK) {
      window.open(CALENDAR_URL, "_blank", "noopener");
      setStatus("Opening calendar…", true);
      return;
    }

    try {
      const res = await fetch(N8N_WEBHOOK, { method: "POST", body: fd });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("Thanks! We’ll confirm a time shortly.", true);
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("Couldn’t submit just now. Email us or try again.", false);
    }
  });
}
