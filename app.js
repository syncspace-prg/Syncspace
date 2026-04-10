window.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");

  status.textContent = "JS LOADED ✔️";

  const btn = document.getElementById("sendBtn");

  if (!btn) {
    status.textContent = "❌ sendBtn NOT FOUND";
    return;
  }

  btn.addEventListener("click", () => {
    status.textContent = "CLICK DETECTED 🎵";
  });
});