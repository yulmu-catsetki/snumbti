"use client";

import { useState, useEffect } from "react";
import { questions, calculateResult } from "@/components/questions";
import { Results } from "@/components/results";
import dynamic from 'next/dynamic';

const RiveLandingPage = dynamic(
  () => import('@/components/RiveLandingPage').then(mod => mod.default),
  { ssr: false }
);

const SVGLoadingBar  = ({ currentQuestion, totalQuestions }: { currentQuestion: number; totalQuestions: number }) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  
  return (
    <div className="mt-6">
      <div className="relative w-full h-3 bg-gray-100 rounded-full">
        {/* Progress bar */}
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />
        
        {/* SVG positioned on the progress bar */}
        <div 
          className="absolute transition-all duration-300"
          style={{ 
            left: `${progress}%`, 
            transform: `translateX(-50%)`,
            bottom: "-10px", 
            zIndex: "10"   
          }}
        >
          <svg width="50" height="44" viewBox="0 0 104 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.8714 14.6644C35.3715 -9.83448 -0.62854 6.16511 15.3714 21.1644C11.3715 29.6655 11.8715 40.6655 15.3714 48.1644C-13.6285 67.1654 10.3714 89.1655 32.3714 89.1655H74.8714C96.3715 89.1655 115.872 65.1665 88.3715 46.1655C91.3715 41.1666 97.3715 33.6666 91.8715 25.1655C110.372 13.1665 83.3715 -11.8346 74.8714 14.6644C60.8715 11.6654 52.3715 9.66536 33.8714 14.6644Z" fill="white" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
            <path d="M33.5 30.0005C33.5 30.0005 37.5 22.999 44 28.5" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M63.5 28.5C63.5 28.5 67.5 24.1081 74 29.6091" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <ellipse cx="25" cy="63" rx="10" ry="8" fill="#FFC9B6"/>
            <ellipse cx="35.5" cy="47.5" rx="9.5" ry="11.5" fill="black"/>
            <path d="M35 41.0002C32 41.5002 31.5 43.5002 31.5 43.5002L39 42.5002C39 42.5002 38 40.5002 35 41.0002Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M31 49L33.5 48.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M36.5 55C33.5 55.5 32.5 54 32.5 54L40 52.5C40 52.5 39.5 54.5 36.5 55Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <ellipse cx="79.5" cy="62" rx="10.5" ry="8" fill="#FFC9B6"/>
            <ellipse cx="68.5" cy="48.5" rx="9.5" ry="11.5" fill="black"/>
            <path d="M68 42.0002C65 42.5002 64.5 44.5002 64.5 44.5002L72 43.5002C72 43.5002 71 41.5002 68 42.0002Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M64 50L66.5 49.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M69.5 56C66.5 56.5 65.5 55 65.5 55L73 53.5C73 53.5 72.5 55.5 69.5 56Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <ellipse cx="51.5" cy="59.5" rx="4.5" ry="2.5" fill="black"/> 
          </svg>
        </div>
      </div>
    </div>
  );
};

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
          <SVGLoadingBar  currentQuestion={currentQuestion} totalQuestions={13} />
          </div>
        </div>

        <div className="mt-4 text-center font-light text-sm text-gray-500">@snu.official</div>
      </div>
    </div>
  );
}
