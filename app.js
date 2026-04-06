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
  // your config
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// LOGIN
document.getElementById("signup").onclick = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  await createUserWithEmailAndPassword(auth, email, password);
};

document.getElementById("login").onclick = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  await signInWithEmailAndPassword(auth, email, password);
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