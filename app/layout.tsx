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
  title: "NalamMind AI | Parent Guidance, Student Wellbeing & School Support",

  description:
    "Supporting parents, students, educators, and schools through parenting guidance, student wellbeing support, emotional wellness resources, assessments, counselling-informed guidance, and educational growth initiatives.",

  keywords: [
    "NalamMind",
    "Parenting Guidance",
    "Student Wellbeing",
    "Counselling",
    "Psychotherapy",
    "Emotional Wellbeing",
    "School Wellbeing",
    "Parent Support",
    "Student Support",
    "Educational Wellbeing",
    "Mental Wellness",
    "Teacher Development"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body>
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
