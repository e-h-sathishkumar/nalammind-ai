"use client";

import { useState } from "react";

export default function ParentingCheckPage() {
  const questions = [
    "I spend quality one-on-one time with my child.",
    "I listen without interrupting.",
    "My child feels comfortable sharing concerns with me.",
    "I encourage effort more than results.",
    "I stay calm during disagreements.",
    "I avoid comparing my child with others.",
    "I discuss emotions openly.",
    "I monitor screen time appropriately.",
    "We enjoy family activities together.",
    "I continue learning as a parent."
  ];

  const [answers, setAnswers] = useState(
    Array(questions.length).fill(3)
  );

  const [result, setResult] = useState("");
const [tip, setTip] = useState("");

  const calculateScore = () => {
  const total = answers.reduce((a, b) => a + b, 0);
if (total >= 45) {
  setResult(`🌟 Connected Parent (${total}/50)`);
  setTip("Ask your child what they are most proud of this week and celebrate their effort, not just their achievement.");
} else if (total >= 35) {
  setResult(`🤝 Nurturing Parent (${total}/50)`);
  setTip("Spend 15 minutes in uninterrupted conversation with your child today without phones, TV, or distractions.");
} else if (total >= 25) {
  setResult(`🧭 Guiding Parent (${total}/50)`);
  setTip("Focus on listening before offering advice or solutions.");
} else {
  setResult(`🌱 Growing Parent (${total}/50)`);
  setTip("ell your child one thing you appreciate about them every day for the next week.");
}
};


  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-4">
          Parenting Wellness Check™
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Discover your parenting strengths in less than 5 minutes.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg mb-8">
  <p className="text-gray-700">
    There are no right or wrong answers. Respond honestly based on your
    usual parenting practices. This assessment is designed to help you
    reflect, learn, and grow.
  </p>
</div>

        {questions.map((question, index) => (
          <div key={index} className="mb-6">
            <label className="block font-medium mb-2">
              {index + 1}. {question}
            </label>

            <select
              className="w-full border rounded-lg p-3"
              value={answers[index]}
              onChange={(e) => {
                const updated = [...answers];
                updated[index] = Number(e.target.value);
                setAnswers(updated);
              }}
            >
              <option value={5}>Always</option>
              <option value={4}>Often</option>
              <option value={3}>Sometimes</option>
              <option value={2}>Rarely</option>
              <option value={1}>Never</option>
            </select>
          </div>
        ))}

        <button
          onClick={calculateScore}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold"
        >
          Get My Result
        </button>

        {result && (
  <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-3">
      Your Parenting Profile
    </h2>

    <p className="text-xl font-semibold mb-4">
      {result}
    </p>

<div className="text-left">
  <h3 className="font-bold mb-2">Today's NalamMind Tip</h3>

  
    <p>{tip}</p>

<p className="text-sm text-gray-600 mt-4 italic">
  Your parenting journey is unique. This assessment is designed to
  encourage reflection and growth, not perfection.
</p>

<a
  href="/#contact"
  className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
>
  Get Personalized Parenting Tips
</a>
</div>
  </div>       
 )}
      </div>
    </main>
  );
}