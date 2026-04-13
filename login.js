const client = window.supabase.createClient(
  "YOUR_SUPABASE_URL",
  "YOUR_SUPABASE_ANON_KEY"
);

document.getElementById("githubLogin").onclick = async () => {
  await client.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: window.location.origin + "/index.html"
    }
  });
};