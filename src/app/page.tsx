"use client";

import { useState, useEffect } from "react";
import { questions, calculateResult } from "@/components/questions";
import { Results } from "@/components/results";
import dynamic from 'next/dynamic';

const RiveLandingPage = dynamic(
  () => import('@/components/RiveLandingPage').then(mod => mod.default),
  { ssr: false }
);

export default function Home() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [clickedButtonIndex, setClickedButtonIndex] = useState<number | null>(null);


  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswer = (type: string, index: number) => {
    setClickedButtonIndex(index);
    
    setTimeout(() => {
      const newAnswers = [...answers, type];
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setClickedButtonIndex(null);
      } else {
        setShowResult(true);
      }
    }, 300); // Match this with the animation duration
  };

  const handleRetry = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setClickedButtonIndex(null);
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
        <h2 className="text-l font-bold mb-6 bg-primary p-6 rounded-lg text-black text-pretty">
          {currentQ.question}
        </h2>

        <div className="space-y-5">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.type, index)}
              className={`w-full font-light p-4 border-4 border-secondary rounded-lg text-secondary transition-transform duration-300 text-pretty ${
                clickedButtonIndex === index ? "animate-bounce" : ""
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <div className="h-2 bg-gray-100  rounded-full">
            <div
              className="h-2 bg-primary rounded-full  transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="mt-4 text-center font-light text-sm text-gray-500">@snu.official</div>
      </div>
    </div>
  );
}
