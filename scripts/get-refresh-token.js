require("dotenv").config({ path: ".env.local" });

const express = require("express");
const { google } = require("googleapis");

const app = express();

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "http://localhost:4000/api/auth/callback/google"
);

// Generate Google OAuth URL
app.get("/auth", (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: [
      "https://mail.google.com/"
    ],
  });

  res.redirect(url);
});

// Receive code and display tokens
app.get("/api/auth/callback/google", async (req, res) => {
  try {
    const code = req.query.code;

    const { tokens } = await oauth2Client.getToken(code);

    res.send(`
      <h2>Success!</h2>
      <p>Copy these tokens and save them.</p>

      <h3>Refresh Token</h3>
      <pre>${tokens.refresh_token || "No refresh token returned"}</pre>

      <h3>Access Token</h3>
      <pre>${tokens.access_token}</pre>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

app.listen(4000, () => {
  console.log("OAuth server running at http://localhost:4000");
  console.log("Open:");
  console.log("http://localhost:4000/auth");
});