import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  const firebaseConfig = {
  apiKey: "test",
  authDomain: "test",
  projectId: "test"
};

const app = initializeApp(firebaseConfig);

window.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");

  status.textContent = "🔥 Firebase initialized";

  document.getElementById("sendBtn").onclick = () => {
    status.textContent = "Send works (no DB yet)";
  };
});