// page.tsx
'use client';

import { useState } from 'react';
import { questions, calculateResult } from '@/components/questions';
import { Results } from '@/components/results';

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
      <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            서울대 동아리 테스트
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            나에게 딱! 맞는 동아리는?
          </p>
          <button
            onClick={handleStart}
            className="px-8 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            START!
          </button>
          <div className="mt-4 text-sm text-gray-500">
            @snu.official
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
        <Results 
          mbtiResult={calculateResult(answers)}
          onRetry={handleRetry}
        />
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white rounded-lg p-6 shadow-lg">
          {/* 질문 영역: 하늘색 배경(#BFE3FC)과 검은색 글자 */}
          <h2 className="text-xl font-semibold mb-6 bg-[#BFE3FC] p-4 rounded-lg text-black">
            {currentQ.question}
          </h2>

          <div className="space-y-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.type)}
                className="w-full text-left p-4 border-2 border-[#998675] rounded-lg hover:bg-blue-50 transition-colors text-[#998675]"
              >
                {option.text}
              </button>
            ))}
          </div>


        <div className="mt-6">
          <div className="h-2 bg-blue-100 rounded-full">
            <div 
              className="h-2 bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
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