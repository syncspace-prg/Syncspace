window.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");

  status.textContent = "JS STARTED";

  try {
    const chatBox = document.getElementById("chatBox");
    const btn = document.getElementById("sendBtn");

    if (!chatBox) {
      status.textContent = "❌ chatBox missing";
      return;
    }

    if (!btn) {
      status.textContent = "❌ sendBtn missing";
      return;
    }

    status.textContent = "UI OK";

    btn.onclick = () => {
      status.textContent = "CLICK WORKS";
    };

  } catch (e) {
    status.textContent = "💥 " + e.message;
  }
});