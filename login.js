const client = window.supabase.createClient(
  "https://fizuvliegegrsoqdjjfd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpenV2bGllZ2VncnNvcWRqamZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3ODQzNTksImV4cCI6MjA5MTM2MDM1OX0.XUDBmYuEYBVr3QgnZB0dMs6sSuT7UPOrUTP5BhnbMew"
);

document.getElementById("githubLogin").onclick = async () => {
  await client.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: window.location.origin + "/index.html"
    }
  });
};