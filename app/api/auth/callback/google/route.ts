import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  // 1. Verify state here (from your cookie) to prevent CSRF

  if (!code) {
    return NextResponse.json({ error: "Missing authorization code" }, { status: 400 });
  }

  try {
    // 2. Exchange code for tokens (Server-to-Server)
    // const tokens = await exchangeCodeForTokens(code);
    
    // 3. Set secure session cookie
    // 4. Redirect to home/dashboard
    return NextResponse.redirect(new URL("/dashboard", req.url));
  } catch (error) {
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}