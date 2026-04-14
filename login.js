const client = window.supabase.createClient(
  "https://fizuvliegegrsoqdjjfd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpenV2bGllZ2VncnNvcWRqamZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3ODQzNTksImV4cCI6MjA5MTM2MDM1OX0.XUDBmYuEYBVr3QgnZB0dMs6sSuT7UPOrUTP5BhnbMew"
);


// after login or page load
async function checkUser() {
  const { data } = await client.auth.getSession();

  if (data.session) {
    window.location.href = "index.html";
  }
}

checkUser();
const email = document.getElementById("email");
const password = document.getElementById("password");
const status = document.getElementById("status");

// LOGIN
document.getElementById("loginBtn").onclick = async () => {
  const { error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value
  });

  if (error) {
    status.textContent = error.message;
  } else {
    window.location.href = "index.html";
  }
};

// SIGN UP
document.getElementById("signupBtn").onclick = async () => {
  const { error } = await client.auth.signUp({
    email: email.value,
    password: password.value
  });

  if (error) {
    status.textContent = error.message;
  } else {
    status.textContent = "Check your email!";
  }
};

// MAGIC LINK
document.getElementById("magicBtn").onclick = async () => {
  const { error } = await client.auth.signInWithOtp({
    email: email.value
  });

  if (error) {
    status.textContent = error.message;
  } else {
    status.textContent = "Magic link sent!";
  }
};
client.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: window.location.origin + "/index.html"
    }
  });
};