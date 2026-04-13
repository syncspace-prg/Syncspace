const status = document.getElementById("status");
const chatBox = document.getElementById("chatBox");
const input = document.getElementById("messageInput");
const btn = document.getElementById("sendBtn");

status.textContent = "JS READY";

// ✅ Supabase client
const client = window.supabase.createClient(
  "https://fizuvliegegrsoqdjjfd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpenV2bGllZ2VncnNvcWRqamZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3ODQzNTksImV4cCI6MjA5MTM2MDM1OX0.XUDBmYuEYBVr3QgnZB0dMs6sSuT7UPOrUTP5BhnbMew"
);

status.textContent = "CONNECTED";

btn.onclick = async () => {
  const text = input.value.trim();
  if (!text) return;

  status.textContent = "SENDING...";

  const { data, error } = await client
    .from("messages")
    .insert({ text })
    .select();

  if (error) {
    status.textContent = "ERROR";
    console.log(error);
    alert("ERROR: " + error.message);
    return;
  }

  console.log("SAVED:", data);

  const div = document.createElement("div");
  div.className = "message sent";
  div.textContent = text;
  chatBox.appendChild(div);

  input.value = "";
  status.textContent = "SENT ✔";
};
  status.textContent = "SENDING...";

  const githubBtn = document.getElementById("githubLogin");

githubBtn.onclick = async () => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: "github"
  });

  if (error) {
    console.log(error);
    status.textContent = "GitHub login failed";
  }
};
const { error } = await client
    .from("messages")
    .insert({ text });

  if (error) {
    status.textContent = "ERROR: " + error.message;
    return;
  }

  // show message in UI
  const div = document.createElement("div");
  div.className = "message sent";
  div.textContent = text;
  chatBox.appendChild(div);

  input.value = "";
  status.textContent = "SENT ✔";
};