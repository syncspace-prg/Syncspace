import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

window.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");
  const input = document.getElementById("messageInput");

  status.textContent = "JS LOADED ✔️";

  const supabaseUrl ="https://fizuvliegegrsoqdjjfd.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpenV2bGllZ2VncnNvcWRqamZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3ODQzNTksImV4cCI6MjA5MTM2MDM1OX0.XUDBmYuEYBVr3QgnZB0dMs6sSuT7UPOrUTP5BhnbMew";

  const supabase = createClient(supabaseUrl, supabaseKey);

  document.getElementById("sendBtn").onclick = async () => {
  const status = document.getElementById("status");
  const text = document.getElementById("messageInput").value;

  if (!text) {
    status.textContent = "Type something first";
    return;
  }

  status.textContent = "CLICKED → trying to send...";

  try {
    const { error } = await supabase.from("messages").insert({
      text
    });

    if (error) {
      status.textContent = "❌ ERROR: " + error.message;
    } else {
      status.textContent = "✅ SENT";
    }
  } catch (e) {
    status.textContent = "💥 CRASH: " + e.message;
  }
};