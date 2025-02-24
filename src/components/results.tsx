import React, { useState } from 'react';
import Image from 'next/image';

export interface ClubType {
  title: string;
  description: string;
  recommendedClubs: {
    name: string;
    description: string;
  }[];
}

export const clubTypes: Record<string, ClubType> = {
  "INTJ": {
    title: "세상을 바꾸는 개발자",
    description: "내 천재적인 머리와 비범한 능력만 있다면 불가능은 없다! 혁신을 이뤄서 세계 최고가 될 거야...",
    recommendedClubs: [
      {
        name: "SCSC",
        description: "프로그래밍과 컴퓨터 공학을 좋아한다면?"
      },
      {
        name: "SNUGDC",
        description: "게임을 만들어 보고 싶다면?"
      },
      {
        name: "멋쟁이사자처럼",
        description: "웹 프로그래밍에 관심이 있다면?"
      },
      {
        name: "DWNC",
        description: "코딩은 못하지만 웹 개발은 하고 싶어!"
      }
    ]
  },
  "ISFP": {
    title: "외유내강형 마니아",
    description: "조용하지만 고상하고, 담백하지만 깊은 취미가 좋아! 음미(吟味)는 나의 취미",
    recommendedClubs: [
      {
        name: "설다연",
        description: "따뜻한 차(tea) 한 잔의 여유가 좋다면?"
      },
      {
        name: "카페인",
        description: "현대인의 필수 덕목, 커피 애호가 모여라!"
      },
      {
        name: "휴림",
        description: "주류(酒類)가 주류(主流)지. 술에 관심이 있다면?"
      },
      {
        name: "미누시아",
        description: "내가 좋아하는 향을 직접 만들어 보고 싶다면?"
      }
    ]
  },
  "ENTJ": {
    title: "학구자 DNA",
    description: "머릿속 프로젝트를 눈 앞에 실현시키는 일... 그것이 나의 삶, 나의 목표, 나의 이상향.",
    recommendedClubs: [
      {
        name: "시사법학회/공법학회/경영법학회 등",
        description: "법학에 관심 있다면?"
      },
      {
        name: "N-CE0/MCSA/티움 등",
        description: "경영전략 컨설팅에 흥미가 생긴다면?"
      },
      {
        name: "인류학회/언어학회/과학기술인문학회 등",
        description: "수업에서 배운 이론을 나의 연구에서 발전시키자!"
      },
      {
        name: "한반도문제연구회/범죄학회 등",
        description: "사회 이슈를 분석해 보고 싶다면?"
      }
    ]
  },
  "ENTP": {
    title: "생활의 달'변'인",
    description: "가장 많이 듣는 질문은 '웅변 학원 출신인가요?' 사람들 앞에서 나의 주장 펼치는 순간이 가장 짜릿해!",
    recommendedClubs: [
      {
        name: "CiSL",
        description: "일상에서 프레젠테이션을 연습하고 싶다면?"
      },
      {
        name: "다담/아크로폴리스/고전연구회 등",
        description: "토론 대회 출신이라면?"
      },
      {
        name: "SNUDA",
        description: "일반 토론은 이제 그만, 영어로 토론하자!"
      },
      {
        name: "UNSA",
        description: "모의유엔, 들어는 봤나?"
      }
    ]
  },
  "INFJ": {
    title: "마더 테레'샤'",
    description: "나의 자그마한 손짓이 타인에게 힘이 될 수 있다면... 불러만 줘! 내 도움이 필요한 곳 어디든",
    recommendedClubs: [
      {
        name: "햇빛봉사단/다솜/십시일밥 등",
        description: "학기 중 병행할 봉사를 찾는다면?"
      },
      {
        name: "꼬리(유기동물)/캄보딜라이트(제빵)/손말사랑(수어) 등",
        description: "이색적인 봉사를 해보고 싶어!"
      },
      {
        name: "프로네시스/드림컨설턴트 등",
        description: "방학에 교육봉사 캠프를 떠나고 싶다면?"
      },
      {
        name: "글로벌사회공헌단/GIV/AIESEC",
        description: "해외봉사에 관심이 있다면?"
      }
    ]
  },
  "INFP": {
    title: "아이디어 뱅크",
    description: "말랑말랑한 두뇌에 넘쳐흐르는 상상력 지금까지 공유해왔던 스토리만 천만 개!",
    recommendedClubs: [
      {
        name: "총연극회/사회대연극당/리버엠트/경영극회/미대극회 등",
        description: "함께할 연극단원을 찾는다면?"
      },
      {
        name: "렛미스타트(뮤지컬)/원어연극제/암실(전시기획) 등",
        description: "색다른 문화 예술을 기획해 보고 싶다면?"
      },
      {
        name: "총문학연구회/창문 등",
        description: "평소 글쓰기에 흥미 있던 사람들 모여라!"
      },
      {
        name: "그림터/미동/서예회 등",
        description: "손재주가 좋다는 말을 많이 들어본 사람이라면?"
      }
    ]
  },
  "ENFJ": {
    title: "호기심 천국 출신",
    description: "궁금한 게 너무 많아! 사람, 학교, 그리고 세상이 내 취재 열정을 받아주길!",
    recommendedClubs: [
      {
        name: "휴스누",
        description: "학내 구성원들의 생각과 가치관이 궁금해!"
      },
      {
        name: "필화",
        description: "시사 이슈를 직접 비평해 보고 싶은 걸?"
      },
      {
        name: "영상기자단/SUB/이미지밴드 등",
        description: "서울대를 다양한 영상 콘텐츠로 담아내고 싶다면?"
      },
      {
        name: "학생기자단/대학신문/서울대저널/스누퀼 등",
        description: "학교 정보를 빠삭하게 알고 있다면?"
      }
    ]
  },
  "ENFP": {
    title: "도파민 중독자",
    description: "혼한 동아리는 가라! 졸업 전에 서울대 동아리 도감을 전부 채울 테야",
    recommendedClubs: [
      {
        name: "몽환",
        description: "서울대 졸업 후 호그와트 석사 과정 밟고 싶다면?"
      },
      {
        name: "Comicoto",
        description: "서브컬처 밴드에 관심 있다면?"
      },
      {
        name: "여민락",
        description: "내 전문 국악기를 다루고 싶다면?"
      },
      {
        name: "수중탐사대(스쿠버다이빙)/샤빗(스케이트보드)/마왕(승마) 등",
        description: "역동적인 취미가 좋아!"
      }
    ]
  },
  "ISTJ": {
    title: "관찰력 1등급",
    description: "한번 시작한 일은 무조건 골장을 본다! 남다른 통찰력이 나의 무기",
    recommendedClubs: [
      {
        name: "버들",
        description: "야생 조류를 관찰해 볼까?"
      },
      {
        name: "AAA",
        description: "나랑 별 보러 가지 않을래?"
      },
      {
        name: "소리지기",
        description: "학생회관 음악감상실의 권위자!"
      },
      {
        name: "얄라셩/씨네꼼 등",
        description: "영화 감상 및 비평이 취미라면?"
      }
    ]
  },
  "ESFJ": {
    title: "인생은 흩죽뭉살",
    description: "으쌰라 으쌰~ 협동심을 기르는 일이라면 나에게 맡겨 최고의 팔로워십을 보여줄게!",
    recommendedClubs: [
      {
        name: "골패",
        description: "저항 및 연대의식을 몸짓으로 표현해 볼까?"
      },
      {
        name: "스누포",
        description: "아무래도 '단체'하면 오케스트라 아니겠어?"
      },
      {
        name: "방과후 그린 사업",
        description: "친환경 프로젝트의 일원이 되고 싶다면?"
      },
      {
        name: "서울대학교 합창단/인스트루/한소리 등",
        description: "악기 없이 만드는 최상의 소리!"
      }
    ]
  },
  "ISFJ": {
    title: "해피해피 바이러스",
    description: "우리~ 함께~ 만들어 봐요~ 아름다운 샤대~ 살기 좋은 학내 공간을 만들러 가볼까?",
    recommendedClubs: [
      {
        name: "피움",
        description: "정원 가꾸기에 관심이 있다면?"
      },
      {
        name: "학생심리건강지원단",
        description: "학우들의 정신 건강을 위해 힘써볼까?"
      },
      {
        name: "문화인큐베이터",
        description: "학기 중에 쉬어갈 수 있는 카페를 운영할래!"
      },
      {
        name: "QIS(성소수자)/빗소리(노동자)/위디(장애인) 등",
        description: "학내 사회적 약자 관련 프로젝트를 추진하고 싶다면?"
      }
    ]
  },
  "ESTP": {
    title: "잠재적 스포츠 유망주",
    description: "못 해본 운동은 있을지언정 못하는 운동 따윈 없다! 나는야 만능 엔터테이너",
    recommendedClubs: [
      {
        name: "육상부/달리사/스누와드(크로스핏)/FOS(복싱부) 등",
        description: "강인한 신체에 강인한 정신이 깃든다!"
      },
      {
        name: "설궁(국궁)/스누텐(양궁)/사격회/골프부/검도부/바둑부 등",
        description: "집중력 최강, 개인 종목에 강하다면?"
      },
      {
        name: "스누풀(수영)/요트부/스키부/스너퍼(스노보드)/설유회(피겨) 등",
        description: "여름엔 물 만난 물고기, 겨울엔 엘사가 되고 싶다면?"
      },
      {
        name: "배구부/라크로스부/스누민턴(배드민턴)/호바스(농구) 등",
        description: "손재주가 좋다는 말을 많이 들어본 사람이라면?"
      }
    ]
  },
  "ISTP": {
    title: "취미 수집가",
    description: "내 취미는 새로운 취미를 만드는 일! 알고 보면 취미 부자",
    recommendedClubs: [
      {
        name: "영상/녹영 등",
        description: "찰칵 찰칵! 부캐가 사진작가라면?"
      },
      {
        name: "SNU_AAA/오르샤 등",
        description: "관악 마운틴 노루 점핑~ 산이든 암벽이든 끄떡없다!"
      },
      {
        name: "보거스(보드게임)/추러스(추리)/애니뮤, 노이타미나(만화) 등",
        description: "보드게임카페, 방탈출카페, 만화카페 단골이라면?"
      },
      {
        name: "괴나리(여행)/샤릉이(자전거) 등",
        description: "이곳저곳 새로운 장소 탐방에 흥미가 있다면?"
      }
    ]
  },
  "INTP": {
    title: "힘숨찐 음유시인",
    description: "Music is my life, Oh Lr는 슬플 때 7rㅅr를 써... Yeah~",
    recommendedClubs: [
      {
        name: "사운드림",
        description: "노래를 작곡해 보고 싶다면?"
      },
      {
        name: "트리플에이치/바운스팩토리 등",
        description: "어!느새 부터 힙합이 멋지다면?"
      },
      {
        name: "스누피아(피아노)/기타둥둥/화현회(클래식기타)/알쿨(우쿨렐레) 등",
        description: "꽂히면 하나만 판다!"
      },
      {
        name: "메아리/단과대별 밴드/자이브, 퓨즈(재즈)/BAB(어쿠스틱) 등",
        description: "밴드 붐은 왔다... 내 취향의 밴드부는?"
      }
    ]
  },
  "ESTJ": {
    title: "리더가 체질",
    description: "'그래 내가 리더가 될 관상인가?' 서울대생을 위한, 서울대생에 의한, 서울대를 만들고 싶어!",
    recommendedClubs: [
      {
        name: "축제하는사람들/문화자치위원회",
        description: "서울대생들이 즐길 수 있는 문화행사를 주도하자!"
      },
      {
        name: "자치언론기금/자치도서관 등",
        description: "학내에서 발간된 기록물과 언론을 관리하고 뒷받침하려면?"
      },
      {
        name: "학생소수자인권위원회/총동아리연합회 등",
        description: "모든 구성원 및 단체가 어우러지는 학교를 만들고 싶다면?"
      },
      {
        name: "SSA(국제학생대사)/ISF(한국어 교실)/버디(스누버디, 언어교육원) 등",
        description: "외국의 유학생의 적응을 돕고 싶다면?"
      }
    ]
  },
  "ESFP": {
    title: "움칫둠칫 끼쟁이",
    description: "뼛속부터 무대 체질, 서울대가 내 무대! 스우파/스맨파 새 시즌 딱 기다려",
    recommendedClubs: [
      {
        name: "스누엔터/혼또니/고어헤드/사자후/222Hz/프레이즈 등",
        description: "서울대 대표 춤신춤왕이 되고 싶다면?"
      },
      {
        name: "H.I.S.(스트릿댄스)/스핀(댄스스포츠)/몰핀(무용) 등",
        description: "지금까지 이런 춤 동아리는 없었다!"
      },
      {
        name: "단풍연/너름새/바람몰이/놀이모듬/풍류/한판 등",
        description: "덩 기덕 쿵더러러러~ 풍물패에 흥미가 있다면?"
      },
      {
        name: "서울대학교 응원단",
        description: "청춘 서울! 서울대 축제에서 외쳐 봤다면?"
      }
    ]
  },

  "기자단": {
    title: "서울대의 열정맨",
    description: "서울대를 위해서라면 뭐든 할 수 있어! 학교에 대한 애정이 넘치는 진정한 서울대인",
    recommendedClubs: [
      {
        name: "학생기자단",
        description: "학생기자단 설명"
      },
    ]
  }
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
        {/* Title with text stroke effect */}
        <h1 className="text-2xl font-bold mb-4 relative">
          <span className="absolute inset-0 text-black blur-[1px]">나의 동아리 유형은?</span>
          <span className="absolute inset-0 text-white blur-[0.5px]">나의 동아리 유형은?</span>
          <span className="relative text-blue-400">나의 동아리 유형은?</span>
        </h1>
        
        {/* Image container with brown border */}
        <div className="border-2 border-[#998675] rounded-lg p-3 mx-auto mb-4 max-w-xs">
          <div className="relative aspect-square w-full overflow-hidden mb-3">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              {/* Image placeholder - replace with your actual image component */}
              <div className="relative w-full">
                <Image 
                  src={`/img/동아리 mbti_${mbtiResult.toLowerCase()}.png`}
                  fill
                  alt={result.title}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Description inside the brown bordered box */}
          <p className="text-gray-700 text-sm px-2">
            {result.description}
          </p>
        </div>
        
        <h2 className="text-lg text-blue-500 mb-2">{result.title}</h2>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold mb-3">추천 동아리</h3>
        <ul className="space-y-2">
          {result.recommendedClubs.map((club, index) => (
            <li key={index} className="bg-blue-50 p-3 rounded-lg">
              <div className="text-blue-800 font-medium">{club.name}</div>
              <div className="text-gray-600 text-sm mt-1">{club.description}</div>
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