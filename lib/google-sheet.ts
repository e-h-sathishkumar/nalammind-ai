import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function saveEnquiry(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  aiReply: string;
}) {
  const sheets = google.sheets({
    version: "v4",
    auth,
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A:G",
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          new Date().toLocaleString(),
          data.name,
          data.email,
          data.phone,
          data.message,
          data.aiReply,
          "New",
        ],
      ],
    },
  });
}
export async function getEnquiries() {
  const sheets = google.sheets({
    version: "v4",
    auth,
  });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A:F",
  });

  const rows = response.data.values || [];

  return rows.slice(1).map((row) => ({
    date: row[0] || "",
    name: row[1] || "",
    email: row[2] || "",
    phone: row[3] || "",
    message: row[4] || "",
    aiReply: row[5] || "",
  }));
}
