"use client";

import { useState } from "react";

export default function TestAI() {
  const [reply, setReply] = useState("");

  const testAI = async () => {
    const res = await fetch("/api/ai-reply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email:
          "I would like to know more about NalamMind programs for parents.",
      }),
    });

    const data = await res.json();
    setReply(data.reply || JSON.stringify(data));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>NalamMind AI Test</h1>

      <button onClick={testAI}>
        Generate Reply
      </button>

      <pre>{reply}</pre>
    </div>
  );
}