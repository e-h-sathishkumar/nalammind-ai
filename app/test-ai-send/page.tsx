"use client";

import { useState } from "react";

export default function TestAISend() {
  const [result, setResult] = useState("");

  const testAISend = async () => {
    setResult("Processing...");

    const res = await fetch("/api/ai-send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "e.h.sathishkumar@gmail.com",
        email:
          "I would like to know more about NalamMind programs for parents.",
      }),
    });

    const data = await res.json();

    setResult(JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>NalamMind AI Send Test</h1>

      <button onClick={testAISend}>
        Generate Reply & Send Email
      </button>

      <pre>{result}</pre>
    </div>
  );
}