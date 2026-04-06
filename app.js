console.log("App started");

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
const auth = getAuth(app);
const db = getFirestore(app);

window.addEventListener("DOMContentLoaded", () => {

  const status = document.getElementById("status");

  // LOGIN
  document.getElementById("signup").onclick = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      status.textContent = "Account created!";
    } catch (err) {
      status.textContent = err.message;
    }
  };

  document.getElementById("login").onclick = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      status.textContent = "Logged in!";
    } catch (err) {
      status.textContent = err.message;
    }
  };

  // CHAT
  document.getElementById("sendBtn").onclick = async () => {
    const text = document.getElementById("messageInput").value;

    if (!text) return;

    await addDoc(collection(db, "messages"), {
      text: text,
      createdAt: Date.now()
    });

    document.getElementById("messageInput").value = "";
  };

  // LOAD MESSAGES
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