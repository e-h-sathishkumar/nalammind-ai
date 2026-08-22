import { NextResponse } from "next/server";
import { ai } from "@/lib/gemini";
import { sendMail } from "@/lib/gmail";
import { saveEnquiry } from "@/lib/google-sheet";

export async function POST(req: Request) {
  try {
    const { to, name, phone, message } = await req.json();

    let reply = `Dear ${name},\n\nThank you for reaching out to NalamMind AI. We have received your message regarding your wellbeing query and our team will get back to you shortly.\n\nWarm regards,\nNalamMind Support Team`;

    // 1. Isolate the Gemini Call to check for specific AI errors
    try {
      console.log("🤖 Attempting to call Gemini API...");
      
      const response = await ai.models.generateContent({
        // Note: If 'gemini-2.5-flash-lite' throws an error, try changing it to 'gemini-2.5-flash' or 'gemini-1.5-flash'
        model: "gemini-2.5-flash", 
        contents: `You are the official NalamMind AI Support Assistant.

About NalamMind:
* Supports parents, students and educators.
* Focuses on emotional wellbeing, mindfulness, parenting guidance and AI-supported wellness.
* Website: https://nalammind.com

Instructions:
- Read the customer's message carefully.
- Understand the actual concern.
- Respond as a caring mentor, wellbeing coach, or educator.
- Be warm, empathetic, and practical.
- Keep the response under 300 words.
- Use short paragraphs.
- Do not use numbered sections or report-style headings.
- Provide 2 to 3 practical suggestions.
- Ask 1 to 2 relevant follow-up questions if needed.
- Avoid generic acknowledgements.
- Tailor the response specifically to the customer's situation.

Start with:
Dear ${name},

End with:
Warm regards,
NalamMind Support Team

Customer Details:
Name: ${name}
Phone: ${phone}
Message:
${message}`,
      });

      if (response.text) {
        reply = String(response.text);
        console.log("✅ Gemini response generated successfully!");
      }
    } catch (geminiError: any) {
      console.error("❌ GEMINI API ERROR:", geminiError.message || geminiError);
      // We catch it here so the form still submits even if Gemini fails temporarily
    }

    // 2. Send AI-generated reply to the user
    try {
      await sendMail(to, "Thank You for Contacting NalamMind", reply);
      console.log("✅ User email sent");
    } catch (mailError) {
      console.error("❌ GMAIL USER ERROR:", mailError);
    }

    // 3. Save inquiry to Google Sheet
    try {
      await saveEnquiry({
        name,
        email: to,
        phone,
        message,
        aiReply: reply,
      });
      console.log("✅ Google Sheet saved");
    } catch (sheetError) {
      console.error("❌ GOOGLE SHEET ERROR:", sheetError);
    }

    // 4. Send a copy to NalamMind admin
    try {
      await sendMail(
        "nalam.mind@gmail.com",
        "New Website Inquiry",
        `New enquiry received from the website.\n\nName: ${name}\nEmail: ${to}\nPhone: ${phone}\n\nMessage:\n${message}`
      );
      console.log("✅ Admin email sent");
    } catch (adminMailError) {
      console.error("❌ GMAIL ADMIN ERROR:", adminMailError);
    }

    return NextResponse.json({
      success: true,
      message: "Request processed successfully",
    });

  } catch (error: any) {
    console.error("❌ CRITICAL SERVER ERROR:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}