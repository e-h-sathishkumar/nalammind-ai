import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET() {
  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const gmail = google.gmail({
      version: "v1",
      auth: oauth2Client,
    });

    const profile = await gmail.users.getProfile({
      userId: "me",
    });

    return NextResponse.json({
      success: true,
      email: profile.data.emailAddress,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      details: error.response?.data,
    });
  }
}