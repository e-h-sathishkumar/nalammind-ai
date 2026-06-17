import { NextResponse } from "next/server";
import { ai } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are NalamMind's support assistant.

Write a warm, professional and concise reply to the following email.

Email:
${email}
      `,
    });

    return NextResponse.json({
      success: true,
      reply: response.text,
    });
  } 
  catch (error: any) {
  console.error("GEMINI ERROR:", error);

  return NextResponse.json(
    {
      success: false,
      message: error?.message || "Failed to generate reply",
    },
    { status: 500 }
  );
}
}