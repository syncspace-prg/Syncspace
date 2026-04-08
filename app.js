console.log("🎵 SyncSpace started");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
  // 🔴 PASTE YOUR REAL CONFIG HERE
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.addEventListener("DOMContentLoaded", () => {

  const status = document.getElementById("status");
  status.textContent = "SyncSpace ready 🎵";

  // 🔐 SIGN UP
  document.getElementById("signup").onclick = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      status.textContent = "✅ Account created!";
    } catch (err) {
      status.textContent = "❌ " + err.message;
    }
  };

  // 🔐 LOGIN
  document.getElementById("login").onclick = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      status.textContent = "✅ Logged in!";
    } catch (err) {
      status.textContent = "❌ " + err.message;
    }
  };

  // 💬 SEND MESSAGE
  document.getElementById("sendBtn").onclick = async () => {
    const text = document.getElementById("messageInput").value;

    if (!text) {
      status.textContent = "⚠️ Type a message first";
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        text: text,
        createdAt: Date.now()
      });

      status.textContent = "🎵 Sent!";
      document.getElementById("messageInput").value = "";

    } catch (err) {
      status.textContent = "❌ " + err.message;
    }
  };

  // 📡 LOAD MESSAGES (REAL-TIME)
  const q = query(collection(db, "messages"), orderBy("createdAt"));

  onSnapshot(q, (snapshot) => {
    const chatBox = document.getElementById("chatBox");
    chatBox.innerHTML = "";

    snapshot.forEach((doc) => {
      const msg = doc.data();

      const div = document.createElement("div");
      div.textContent = msg.text;

      chatBox.appendChild(div);
    });
  });

});