import { NextResponse } from "next/server";
import { ai } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are the official NalamMind AI Support Assistant.

About NalamMind:
- Supports parents, students and educators.
- Focuses on emotional wellbeing, mindfulness, parenting guidance and AI-supported wellness.
- Website: https://nalammind.com

Instructions:
- Write a complete email reply.
- Do not use placeholders such as [Customer Name].
- Do not invent website pages or links.
- If information is unavailable, ask for more details.
- Keep the response warm, professional and concise.
- Sign as:

Warm regards,
NalamMind Support Team

Email:
${email}
`,
    });

    return NextResponse.json({
      success: true,
      reply: response.text(),
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