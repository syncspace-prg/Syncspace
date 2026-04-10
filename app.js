console.log("SUPABASE URL:", supabaseUrl);
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = https://fizuvliegegrsoqdjjfd.supabase.co;
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpenV2bGllZ2VncnNvcWRqamZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3ODQzNTksImV4cCI6MjA5MTM2MDM1OX0.XUDBmYuEYBVr3QgnZB0dMs6sSuT7UPOrUTP5BhnbMew;

const supabase = createClient(supabaseUrl, supabaseKey);

window.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");
  const chatBox = document.getElementById("chatBox");
  const input = document.getElementById("messageInput");

  status.textContent = "🔥 SyncSpace connected";

  async function loadMessages() {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      status.textContent = "LOAD ERROR: " + error.message;
      return;
    }

    chatBox.innerHTML = "";

    data.forEach(m => {
      const div = document.createElement("div");
      div.textContent = m.text;
      chatBox.appendChild(div);
    });
  }

  loadMessages();

  document.getElementById("sendBtn").addEventListener("click", async () => {
    const text = input.value;

    if (!text) {
      status.textContent = "Type something first";
      return;
    }

    status.textContent = "Sending...";

    const { error } = await supabase.from("messages").insert({
      text,
      created_at: Date.now()
    });

    if (error) {
      status.textContent = "ERROR: " + error.message;
    } else {
      input.value = "";
      status.textContent = "Sent ✅";
      loadMessages();
    }
  });
});