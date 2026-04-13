const client = window.supabase.createClient(
  "https://fizuvliegegrsoqdjjfd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpenV2bGllZ2VncnNvcWRqamZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3ODQzNTksImV4cCI6MjA5MTM2MDM1OX0.XUDBmYuEYBVr3QgnZB0dMs6sSuT7UPOrUTP5BhnbMew"
);

// protect page
client.auth.getUser().then(({ data }) => {
  if (!data.user) {
    window.location.href = "login.html";
  }
});

const chatBox = document.getElementById("chatBox");
const input = document.getElementById("messageInput");
const btn = document.getElementById("sendBtn");

// send message
btn.onclick = async () => {
  const text = input.value.trim();
  if (!text) return;

  await client.from("messages").insert({ text });

  input.value = "";
};

// load messages
async function loadMessages() {
  const { data } = await client
    .from("messages")
    .select("*")
    .order("created_at");

  chatBox.innerHTML = "";

  data.forEach(msg => {
    const div = document.createElement("div");
    div.textContent = msg.text;
    chatBox.appendChild(div);
  });
}

loadMessages();