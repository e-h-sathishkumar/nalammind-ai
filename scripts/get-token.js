require("dotenv").config({ path: ".env.local" });

const { google } = require("googleapis");
const readline = require("readline");

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "http://localhost:3000/api/auth/callback/google"
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Paste authorization code: ", async (code) => {
  try {
    const cleanCode = code.trim().split("&")[0];
const { tokens } = await oauth2Client.getToken(cleanCode);
    console.log("\nREFRESH TOKEN:\n");
    console.log(tokens.refresh_token);

    console.log("\nACCESS TOKEN:\n");
    console.log(tokens.access_token);
    rl.close();
  } catch (err) {
    console.error(err);
  }
});