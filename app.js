import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// 🔴 PUT YOUR REAL VALUES HERE
const supabaseUrl = "https://YOURPROJECT.supabase.co";
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpenV2bGllZ2VncnNvcWRqamZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3ODQzNTksImV4cCI6MjA5MTM2MDM1OX0.XUDBmYuEYBVr3QgnZB0dMs6sSuT7UPOrUTP5BhnbMew

const supabase = createClient(supabaseUrl, supabaseKey);

window.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");
  const chatBox = document.getElementById("chatBox");
  const input = document.getElementById("messageInput");

  status.textContent = "🔥 SyncSpace connected";

  async function load() {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      status.textContent = "❌ Load error: " + error.message;
      return;
    }

    chatBox.innerHTML = "";

    data.forEach(m => {
      const div = document.createElement("div");
      div.textContent = m.text;
      chatBox.appendChild(div);
    });
  }

  load();

  document.getElementById("sendBtn").onclick = async () => {
    const text = input.value;
    if (!text) return;

    const { error } = await supabase.from("messages").insert({
      text,
      created_at: Date.now()
    });

    if (error) {
      status.textContent = "❌ Send error: " + error.message;
      return;
    }

    input.value = "";
    load();
  };
});