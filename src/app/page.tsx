// page.tsx
"use client";

import { useState } from "react";
import { questions, calculateResult } from "@/components/questions";
import { Results } from "@/components/results";

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
    return (
      <div className="moving-dots min-h-screen bg-red-300 flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-lg">
          {/* Title with white border */}
          <h1 className="text-3xl font-bold text-sky-300 mb-6 relative">
            {/* White border effect using text-shadow */}
            <span className="leading-tight inline-block relative" style={{ 
              textShadow: '-2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white'
            }}>
              서울대
              <br />
              동아리
              <br />
              테스트
            </span>
          </h1>
          
          {/* Bouncing tooltip */}
          <div className="relative mb-8 animate-bounce">
            <p className="flex items-center py-1 px-3 rounded-xl text-lg font-light text-white bg-sky-300 ">
              나에게 딱! 맞는 동아리는?
            </p>
            {/* Triangle tooltip pointer */}
            <div className="absolute h-2 w-2 bg-sky-300 rotate-45 -bottom-1 left-1/2 transform -translate-x-1/2"></div>
          </div>
          
          {/* Pulsing button */}
          <button
            onClick={handleStart}
            className="drop-shadow-xl px-8 py-3 bg-blue-500 text-black font-bold rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors relative animate-pulse"
            style={{ 
              textShadow: '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white'
            }}
          >
            START!
          </button>
          
          <div className="mt-4 font-light text-sm text-gray-500">@snu.official</div>
        </div>
      </div>
    );
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
        <h2 className="text-xl font-bold mb-6 bg-primary p-4 rounded-lg text-black">
          {currentQ.question}
        </h2>

        <div className="space-y-4">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.type)}
              className="w-full font-light text-left p-4 border-2 border-[#998675] rounded-lg hover:bg-blue-50 transition-colors text-[#998675]"
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <div className="h-2 bg-blue-100 rounded-full">
            <div
              className="h-2 bg-blue-500 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          @snu.official
        </div>
      </div>
    </div>
  );
}
