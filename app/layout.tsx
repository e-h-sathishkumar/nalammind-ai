import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "NalamMind AI | Parent Guidance, Student Wellbeing, Emotional Wellness & School Support",

  description:
    "NalamMind AI empowers parents, students, educators, and schools through emotional wellbeing support, parenting guidance, student wellness programs, mindfulness practices, AI-assisted guidance, assessments, and educational growth initiatives.",

  keywords: [
    "NalamMind AI",
    "Parenting Guidance",
    "Student Wellbeing",
    "Emotional Wellness",
    "Mental Wellbeing",
    "School Support",
    "Parent Support",
    "Student Support",
    "Teacher Wellbeing",
    "Mindfulness",
    "Educational Wellbeing",
    "AI Wellbeing Support",
    "Exam Stress",
    "Teen Wellbeing",
    "Emotional Intelligence",
    "School Counselling",
  ],

  authors: [{ name: "NalamMind AI" }],

  openGraph: {
    title:
      "NalamMind AI | Parent Guidance, Student Wellbeing & School Support",
    description:
      "Supporting parents, students, educators, and schools through emotional wellbeing, parenting guidance, mindfulness, and AI-assisted support.",
    siteName: "NalamMind AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body
  className={`${geistSans.variable} ${geistMono.variable} antialiased`}
>
    {children}

    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-5L5BY48CW5"
      strategy="afterInteractive"
    />

    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5L5BY48CW5');
      `}
    </Script>
  </body>
</html>
  );
}
