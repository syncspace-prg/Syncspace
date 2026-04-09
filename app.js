import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuqFPs5qfenyzPo5mcO8xhVaBYCTb5Cfw",
  authDomain: "syncspace-b0c77.firebaseapp.com",
  projectId: "syncspace-b0c77",
  storageBucket: "syncspace-b0c77.firebasestorage.app",
  messagingSenderId: "898472105255",
  appId: "1:898472105255:web:20e224801182e1c430c502",
  measurementId: "G-EZXE8QHF7P"
};
};

window.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");

  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    status.textContent = "🔥 Firebase loaded";

    document.getElementById("sendBtn").onclick = async () => {
      try {
        await addDoc(collection(db, "messages"), {
          text: "test",
          createdAt: Date.now()
        });

        status.textContent = "✅ Sent!";
      } catch (err) {
        status.textContent = "❌ SEND ERROR: " + err.message;
      }
    };

  } catch (err) {
    status.textContent = "❌ INIT ERROR: " + err.message;
  }
});
