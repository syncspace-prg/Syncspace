const client = window.supabase.createClient(
  "YOUR_SUPABASE_URL",
  "YOUR_SUPABASE_ANON_KEY"
);

const status = document.getElementById("status");
const btn = document.getElementById("githubLogin");

btn.onclick = async () => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: window.location.origin + "/index.html"
    }
  });

  if (error) {
    status.textContent = "Login failed";
    console.log(error);
  }
};