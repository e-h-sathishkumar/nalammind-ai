import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    googleClientIdExists: !!process.env.GOOGLE_CLIENT_ID,
    googleClientSecretExists: !!process.env.GOOGLE_CLIENT_SECRET,
    refreshTokenExists: !!process.env.GOOGLE_REFRESH_TOKEN,
    gmailUser: process.env.GMAIL_USER,
  });
}