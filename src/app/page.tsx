// page.tsx
"use client";

import { useState, useEffect } from "react";
import { questions, calculateResult } from "@/components/questions";
import { Results } from "@/components/results";
import dynamic from 'next/dynamic';
// Dynamically import the Rive component to avoid SSR issues
const RiveLandingPage = dynamic(
  () => import('@/components/RiveLandingPage').then(mod => mod.default),
  { ssr: false }
);

export default function Home() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswer = (type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRetry = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (!started) {
    return <RiveLandingPage onStart={handleStart} />;
  }

  if (showResult) {
    return (
      <div className="moving-dots min-h-screen bg-blue-50 flex items-center justify-center p-4">
        <Results mbtiResult={calculateResult(answers)} onRetry={handleRetry} />
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="moving-dots min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-l font-bold mb-6 bg-primary p-6 rounded-lg text-black">
          {currentQ.question}
        </h2>
        <div className="absolute h-2 w-2 bg-primary rotate-45 -bottom-1 left-1/2 transform -translate-x-1/2"></div>

        <div className="space-y-4">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.type)}
              className="w-full font-light text-left p-4 border-4 border-[#998675] rounded-lg hover:bg-blue-50 transition-colors text-[#998675]"
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <div className="h-2 bg-blue-100 rounded-full">
            <div
              className="h-2 bg-blue-500 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="mt-2 text-center text-sm text-gray-500">
          @snu.official
        </div>
      </div>
    </div>
  );
}
