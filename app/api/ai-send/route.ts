import { NextResponse } from "next/server";
import { ai } from "@/lib/gemini";
import { sendMail } from "@/lib/gmail";
import { saveEnquiry } from "@/lib/google-sheet";

export async function POST(req: Request) {
try {
const { to, name, phone, message } = await req.json();


const response = await ai.models.generateContent({
  model: "gemini-2.5-flash-lite",
  contents: `

You are the official NalamMind AI Support Assistant.

About NalamMind:

* Supports parents, students and educators.
* Focuses on emotional wellbeing, mindfulness, parenting guidance and AI-supported wellness.
* Website: https://nalammind.com

Instructions:

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
${message}
`,
});

const reply = String(response.text || "");

// Send AI-generated reply to the user
await sendMail(
  to,
  "Thank You for Contacting NalamMind",
  reply
);
try {
  await saveEnquiry({
    name,
    email: to,
    phone,
    message,
    aiReply: reply,
  });

  console.log("✅ Google Sheet saved");
} catch (error) {
  console.error("❌ GOOGLE SHEET ERROR:", error);
};

// Send a copy to NalamMind
await sendMail(
  "nalam.mind@gmail.com",
  "New Website Inquiry",
  `
New enquiry received from the website.

Name: ${name}
Email: ${to}
Phone: ${phone}

Message:
${message}
`
);

return NextResponse.json({
  success: true,
  message: "Email sent successfully",
});


} catch (error: any) {
console.error("AI Send Error:", error);


return NextResponse.json(
  {
    success: false,
    error: error.message,
  },
  { status: 500 }
);


}
}
