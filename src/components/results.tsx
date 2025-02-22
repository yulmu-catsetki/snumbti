// results.tsx
import { useState } from 'react';

export interface ClubType {
  title: string;
  nickname: string;
  description: string;
  recommendedClubs: string[];
}

export const clubTypes: Record<string, ClubType> = {
  "INTJ": {
    title: "세상을 바꾸는 개발자",
    nickname: "개발자 DNA",
    description: "내 천재적인 머리와 비범한 능력만 있다면 불가능은 없다! 혁신을 이뤄서 세계 최고가 될 거야...",
    recommendedClubs: ["SCSC", "SNUGDC", "웹쟁이사자처럼", "DWNC"]
  },
  "ISFP": {
    title: "외유내강형 마니아",
    nickname: "차와 커피의 고수",
    description: "조용하지만 고상하고, 담백하지만 깊은 취미가 좋아! 음미(吟味)는 나의 취미",
    recommendedClubs: ["설다연", "카페인", "휴림"]
  },
  "ENTP": {
    title: "생활의 달변인",
    nickname: "토론의 달인",
    description: "가장 많이 듣는 질문은 '웅변 학원 출신인가요?' 사람들 앞에서 나의 주장 펼치는 순간은 정말 짜릿해!",
    recommendedClubs: ["CISL", "다담", "아크로폴리스", "고전연구회"]
  },
  "ENFJ": {
    title: "호기심 천국 출신",
    nickname: "탐구하는 기자",
    description: "궁금한 게 너무 많아! 사람에 대한 관심, 학교에 대한 관심, 세상에 대한 관심을 모두 뿜어내고 싶어.",
    recommendedClubs: ["영상기자단", "학보사", "SUB", "이미지밴드"]
  },
  "ENTJ": {
    title: "학구자 DNA",
    nickname: "학술의 리더",
    description: "머릿속 프로젝트를 눈 앞에 실현시키는 일... 그것이 나의 삶, 나의 목표, 나의 이상향.",
    recommendedClubs: ["법학회", "인류학회", "과학기술인문학회"]
  }
  // ... 더 많은 유형 추가
};

interface ResultsProps {
  mbtiResult: string;
  onRetry: () => void;
}

export const Results: React.FC<ResultsProps> = ({ mbtiResult, onRetry }) => {
  const [isSharing, setIsSharing] = useState(false);
  const result = clubTypes[mbtiResult];

  if (!result) {
    return <div className="text-center">결과를 분석중입니다...</div>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg p-6 shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-xl font-bold text-gray-800 mb-2">{result.title}</h1>
        <h2 className="text-lg text-blue-500 mb-4">{result.nickname}</h2>
        <p className="text-gray-600">{result.description}</p>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold mb-3">추천 동아리</h3>
        <ul className="space-y-2">
          {result.recommendedClubs.map((club, index) => (
            <li key={index} className="bg-blue-50 p-3 rounded-lg text-blue-800">
              {club}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-blue-100 text-blue-500 rounded-lg hover:bg-blue-200 transition-colors"
        >
          다시 검사하기
        </button>
        <button
          onClick={() => setIsSharing(true)}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          결과 공유하기
        </button>
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        @snu.official
      </div>
    </div>
  );
};