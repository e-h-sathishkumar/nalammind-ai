// app/login/page.tsx
const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
const options = {
  redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/google`,
  client_id: process.env.GOOGLE_CLIENT_ID,
  access_type: "offline",
  response_type: "code",
  prompt: "consent",
  scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/gmail.readonly",
  ].join(" "),
};

const qs = new URLSearchParams(options);
const authUrl = `${rootUrl}?${qs.toString()}`;

// Use <a href={authUrl}>Login with Google</a>