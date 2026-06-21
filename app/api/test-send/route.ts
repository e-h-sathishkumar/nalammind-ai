import { NextResponse } from "next/server";
import { sendMail } from "@/lib/gmail";

export async function GET() {
  try {
    const result = await sendMail(
      "e.h.sathishkumar@gmail.com",
      "NalamMind Gmail Test",
      "Hello Bro! Gmail API is working."
    );

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}