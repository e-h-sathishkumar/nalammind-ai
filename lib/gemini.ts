import { GoogleGenAI } from "@google/genai";

console.log("GEMINI KEY FOUND:", !!process.env.GEMINI_API_KEY);

export const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});