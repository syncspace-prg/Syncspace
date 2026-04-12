console.log("JS LOADED");

const status = document.getElementById("status");
const chatBox = document.getElementById("chatBox");
const input = document.getElementById("messageInput");
const btn = document.getElementById("sendBtn");

status.textContent = "JS READY";

// Supabase (now global, NO import needed)
const supabase = supabase.createClient(
  "https://fizuvliegegrsoqdjjfd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpenV2bGllZ2VncnNvcWRqamZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3ODQzNTksImV4cCI6MjA5MTM2MDM1OX0.XUDBmYuEYBVr3QgnZB0dMs6sSuT7UPOrUTP5BhnbMew"
);

status.textContent = "CONNECTED";

btn.onclick = async () => {
  const text = input.value.trim();
  if (!text) return;

  const { error } = await supabase
    .from("messages")
    .insert({ text });

  if (error) {
    status.textContent = "ERROR: " + error.message;
    return;
  }

  const div = document.createElement("div");
  div.className = "message sent";
  div.textContent = text;
  chatBox.appendChild(div);

  input.value = "";
  status.textContent = "SENT ✔";
};