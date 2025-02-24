// questions.tsx

export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    type: string;  // E/I, N/S, T/F, J/P, or SNU
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "흠~ 나에게 맞는 동아리를 어떻게 찾을까?",
    options: [
      {
        text: "학교 홈페이지에 직접 검색도 해보고, 동소제 부스도 꼼꼼히 탐방해서 최적의 동아리를 만날 거야!",
        type: "J"
      },
      {
        text: "운명은 찾아오는 법...",
        type: "P"
      }
    ]
  },
  {
    id: 2,
    question: "나는 동아리를 선택할 때...",
    options: [
      {
        text: "아무래도 미래 내 진로와 연관되면 최고지",
        type: "N"
      },
      {
        text: "지금 당장 right now, 내 눈이 향하는 곳이 어디인지가 중요해",
        type: "S"
      },
      {
        text: "난 애교><심(愛校心)이 넘쳐나니까 서울대를 위한 활동이면 좋겠다!",
        type: "SNU"
      }
    ]
  },
  {
    id: 3,
    question: "동소제에 갔다니 누군가 말을 걸어왔다. - '우리 동아리랑 잘 맞으실 것 같아요~!!'",
    options: [
      {
        text: "네에...?! 짱 큰 감동... 부스 볼 필요도 없다. 당장 등록 진행시켜!",
        type: "F"
      },
      {
        text: "그 이유가 궁금해서 부스로 돌진한다",
        type: "T"
      }
    ]
  },
  {
    id: 4,
    question: "취미를 즐길 때 나의 모습은?",
    options: [
      {
        text: "여기 와서 내가 한 것 좀 봐봐!!! 이 재밌는 걸 모른다고???!!?!?? 이리 와, 당장 나랑 함께 시작해",
        type: "E"
      },
      {
        text: "난 나를 사랑해. 내가 최고야. 나의 세계에 빠져든다",
        type: "I"
      },
      {
        text: "내 취미는 서울대 하.나.뿐. 세상 사람들에게 우리 아기(서울대) 예쁜 거 알려야 해",
        type: "SNU"
      }
      
    ]
  },
  {
    id: 5,
    question: "동아리 결과물을 대하는 태도는?",
    options: [
      {
        text: "비록 동아리 활동이라도 무언가 남는 건 있어야만 해!",
        type: "J"
      },
      {
        text: "활동하면서 즐거웠으면 된 거지~ 그것보다 뭐가 더 중요해?",
        type: "P"
      },
      {
        text: "스누오피셜에 내 콘텐츠를 올릴 수만 있다면... 별이라도 따올 수 있어",
        type: "SNU"
      }
    ]
  },
  {
    id: 6,
    question: "내가 생각하는 멋있는 동아리는?",
    options: [
      {
        text: "트렌드에 맞게 매년 새롭게 변신하는 동아리",
        type: "N"
      },
      {
        text: "수십년간 이어온 전통이 있는 동아리. 아름다워. 사랑해.",
        type: "S"
      }
    ]
  },
  {
    id: 7,
    question: "선호하는 동아리 내부 체제는?",
    options: [
      {
        text: "어느 정도 질서와 규칙이 있어야 오래가지",
        type: "J"
      },
      {
        text: "고리타분한 회칙은 가라! 나는 나의 길을 개척한다",
        type: "P"
      }
    ]
  },
  {
    id: 8,
    question: "동아리 OT에서 사람들과 어울리는 방법은?",
    options: [
      {
        text: "헐! 이 사람 뭐지? 너무 재밌다! 어머! 저 테이블 재밌어 보이는데? 엉덩이 붙일 틈도 없이 마구 돌아다닌다",
        type: "E"
      },
      {
        text: "옆자리 사람들과 도란도란 얘기 나눈다",
        type: "I"
      }
    ]
  },
  {
    id: 9,
    question: "동아리 첫 회의 직전, 나의 다짐!",
    options: [
      {
        text: "창의적인 아이디어를 마구 내봐야지! 나의 잠재력을 탐구하는 시간이 되길 ><",
        type: "N"
      },
      {
        text: "처음 들어간 동아리니까 일단 선배 부원들께 조언을 구할래!",
        type: "S"
      }
    ]
  },
  {
    id: 10,
    question: "동아리 회식 중... 우리 동아리의 미래에 대한 얘기가 나왔다",
    options: [
      {
        text: "세상을... 적어도 학생 사회를 이롭게 만들 수 있는 동아리가 되었으면 좋겠어.",
        type: "F"
      },
      {
        text: "대가 끊기지 않고 잘 굴러가기만 하면 다행이야~",
        type: "T"
      },
      {
        text: "스누오피셜이 세계 대학 SNS 팔로워 수 1위가 되는 그날까지, 이 한 몸 바치리라",
        type: "SNU"
      }
    ]
  },
  {
    id: 11,
    question: "동아리장에게 갑자기 카톡이 왔다. - 이번 주 회의는 비대면으로 해도 될까?",
    options: [
      {
        text: "뭐...? 직접 만나서 의견을 공유하고 교류하는 게 동아리의 묘미 아니야? 난 인정 못해. 다들 가능한 날짜로 바꾸자",
        type: "E"
      },
      {
        text: "무르지 못하도록 칼답한다 넵!!!! (침대에 누워 있는 채로)",
        type: "I"
      }
    ]
  },
  {
    id: 12,
    question: "한 학기 동안 준비한 프로젝트가 끝났다!",
    options: [
      {
        text: "지금까지 함께했던 부원들... 힘겨웠던 시간들... 감동의 쓰나미가 몰려온다",
        type: "F"
      },
      {
        text: "휴~! 이렇게 또 하나의 과업이 끝났군^^ 뿌듯뿌듯",
        type: "T"
      }
    ]
  }
];

export const calculateResult = (answers: string[]): string => {
  // Count SNU responses
  const snuCount = answers.filter(answer => answer === "SNU").length;
  if (snuCount >= 3) {
    return "기자단";
  }

  const counts = {
    E: 0, I: 0,
    N: 0, S: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };
  
  answers.forEach(answer => {
    if (answer !== "SNU" && answer in counts) {
      counts[answer as keyof typeof counts]++;
    }
  });
  
  return [
    counts.E > counts.I ? 'E' : 'I',
    counts.N > counts.S ? 'N' : 'S',
    counts.T > counts.F ? 'T' : 'F',
    counts.J > counts.P ? 'J' : 'P'
  ].join('');
};