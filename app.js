import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuqFPs5qfenyzPo5mcO8xhVaBYCTb5Cfw",
  authDomain: "syncspace-b0c77.firebaseapp.com",
  projectId: "syncspace-b0c77",
  storageBucket: "syncspace-b0c77.firebasestorage.app",
  messagingSenderId: "898472105255",
  appId: "1:898472105255:web:92fe09babcb6a9da30c502",
  measurementId: "G-1S5YC0TJES"
};

const app = initializeApp(firebaseConfig);

window.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");

  status.textContent = "🔥 Firebase initialized";

  document.getElementById("sendBtn").onclick = () => {
    status.textContent = "Send works (no DB yet)";
  };
});