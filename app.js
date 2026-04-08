window.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");

  status.textContent = "JS is working 🎉";

  document.getElementById("sendBtn").onclick = () => {
    status.textContent = "Send button works ✅";
  };

  document.getElementById("signup").onclick = () => {
    status.textContent = "Signup button works ✅";
  };

  document.getElementById("login").onclick = () => {
    status.textContent = "Login button works ✅";
  };
});