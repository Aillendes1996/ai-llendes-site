/* ===== CONFIG ===== */
const CALENDAR_URL = "https://calendly.com/aillendes1996/30min";
const N8N_WEBHOOK  = "https://n8n.ai-llendes.org/webhook/lead-intake"; // "" to disable

/* ===== UTIL ===== */
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll for [data-scroll] and same-page anchors
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

/* Calendar button */
const calBtn = document.getElementById("openCalendar");
if (calBtn) calBtn.href = CALENDAR_URL;

/* Accordion */
document.querySelectorAll(".acc__btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    document.querySelectorAll(".acc__btn[aria-expanded='true']").forEach(b => {
      if (b !== btn) b.setAttribute("aria-expanded", "false");
    });
    btn.setAttribute("aria-expanded", String(!expanded));
  });
});

/* Booking form */
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

