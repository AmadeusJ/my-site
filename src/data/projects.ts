import animationWebApp from '@/assets/animations/category1.json';
import animationPlatform from '@/assets/animations/category2.json';
import animationA11y from '@/assets/animations/category3.json';
import { AnimationItem } from 'lottie-web';
import Project1 from '@/assets/animations/projects/project1.json';
import Project2 from '@/assets/animations/projects/project2.json';
import Project3 from '@/assets/animations/projects/project3.json';
import Project4 from '@/assets/animations/projects/project4.json';
import Project5 from '@/assets/animations/projects/project5.json';
import Project6 from '@/assets/animations/projects/project6.json';
import Project7 from '@/assets/animations/projects/project7.json';
import Project8 from '@/assets/animations/projects/project8.json';
import Project9 from '@/assets/animations/projects/project9.json';

export const projectTopics = [
  {
    id: 1,
    title: 'Web / LLM Applications',
    description: [
      'Contextual UI',
      'Data Visualization',
      'Real-Time Response Handling',
      'Performance Optimization',
      'UI/UX Enhancements'
    ],
    image: '/images/example.svg',
    items: [
      {
        id: 1,
        title: 'AI Competition Platform',
      },
      {
        id: 2,
        title: 'LLM Applications',
      },
    ],
    animationData: animationWebApp,
  },
  {
    id: 2,
    title: 'Platform / Service Dev',
    description: [
      'API Integration',
      'Customer service management',
      'Component Driven Development',
      'Cloud-Native Platforms',
      'Cross-Functional Collaboration'
    ],
    image: '/images/example.svg',
    items: [
      {
        id: 1,
        title: 'MLOps Platform',
      },
      {
        id: 2,
        title: 'Data Visualization',
      },
    ],
    animationData: animationPlatform,
  },
  {
    id: 3,
    title: 'A11Y + UI / UX',
    description: [
      'Accessibility',
      'Internationalization',
      'Interaction Flow Optimization',
      'UX Research',
      'UI/UX Design',
    ],
    image: '/images/example.svg',
    items: [
      {
        id: 1,
        title: 'AI',
      },
    ],
    animationData: animationA11y,
  }
]

interface ProjectTag {
  id: number;
  type: string;
  color: string;
}

export type Project = {
  id: number;
  category: number[] | undefined;
  name: string;
  purpose: string[];
  tags: ProjectTag[] | undefined;
  customer: string[] | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
  isDone: boolean;
  description: string[];
  technologies: string[];
  challenges: string[] | undefined;
  learningPoints: string[] | undefined;
  screenshots: string[] | undefined;
  roles: string[];
  results: string[] | undefined;
  image: string | undefined;
  animationData: AnimationItem | undefined;
  svg: {
    width: number;
    height: number;
  } | undefined;
}

export const projects: Project[] = [
  {
    id: 1,
    category: [1, 2, 3],
    name: 'GenOS',
    purpose: ['LLM 앱 커스터마이징 플랫폼 개발'],
    tags: [
      { id: 1, type: 'LLM', color: 'primary' },
      { id: 2, type: 'LLMOps', color: 'primary' },
      { id: 3, type: 'React', color: 'primary' },
      { id: 4, type: 'Next.js', color: 'primary' },
      { id: 6, type: 'Chat', color: 'primary' },
      { id: 7, type: 'i18n', color: 'primary' },
    ],
    customer: ['내부프로젝트', '미래에셋증권', '삼성화재', '삼성디스플레이'],
    startDate: '2023.12',
    endDate: '2024.06',
    isDone: false,
    description: [],
    technologies: ['next-js', 'React'],
    roles: [
      "프론트엔드 개발",
      "MSA 기반 플랫폼 구조 설계 및 구현",
      "재사용 가능한 컴포넌트 개발",
      "다국어 적용 (국문/영문)"
    ],
    results: ["미래에셋금융에 서비스 판매"],
    image: '/images/example.svg',
    animationData: Project1,
    svg: {
      width: 275,
      height: 275,
    }
  },
  {
    id: 2,
    category: [1, 3],
    name: '우리은행 고객상담 AI Banker',
    purpose: ['예·적금 상담 및 상품 추천 서비스 제공'],
    tags: [
      { id: 1, type: 'LLM', color: 'primary' },
      { id: 6, type: 'Chat', color: 'primary' },
      { id: 7, type: 'Webview', color: 'primary' },
      { id: 8, type: 'Mobile', color: 'primary' },
      { id: 9, type: 'WON뱅킹', color: 'primary' },
      { id: 10, type: 'B2C', color: 'primary' },
    ],
    customer: ['우리금융그룹'],
    startDate: '2023.12',
    endDate: '2024.06',
    isDone: true,
    description: [
      "프로젝트 시작전 PoC 단계에서 Vuejs 통해서 프로토타입 개발했습니다.",
      "<strong>Webview 기반의 모바일 앱</strong>에서 대화형 UI를 모달 레이어 형식으로 기존의 원뱅킹 챗봇에 추가하여 구현했습니다.",
      "Javascript / Jquery를 이용해 ChatGPT 효과를 내는 대화형 인터페이스를 구축했습니다.",
      "서버에러가 있는 경우, 사용자가 <strong>쾨적한 UX</strong>를 경험할 수 있도록, 안내메세지, <strong>Retry 로직</strong>등을 이용해 예외처리를 구현했습니다."
    ],
    technologies: ['vuejs', 'javascript', 'jsp', 'react'],
    roles: [
      "대화형 UI 설계 및 웹뷰 기반 프론트엔드 개발",
      "자연어 처리 결과를 활용한 추천 인터페이스 구축"
    ],
    results: ["예·적금 상담 및 상품 추천 서비스 제공"],
    challenges: [
      "원뱅킹 앱이 모바일 환경에서 Webview 기반의 앱이다 보니, 로컬 PC에서 개발 후, 모바일 환경에서 테스트 하는 것이 어려웠습니다..",
      "기존에 원뱅킹에서 개발이 필요한 부분의 가이드가 없어서 직접 소스를 파악하며 개발했던 아픈 기억이 있습니다..",
    ],
    learningPoints: [
      "Webview 기반의 모바일 앱 개발시 UI에서 신경써줘야 할 <strong>Native Interface</strong>.",
      "원뱅킹 앱의 챗봇 기능을 사용자가 얼마나 사용하는지를 떠나서, 제1금융권 은행의 앱의 기능을 개발해본 값진 경험",
    ],
    image: '/images/example.svg',
    animationData: Project2,
    svg: {
      width: 215,
      height: 215,
    }
  },
  {
    id: 3,
    category: [1],
    name: 'AI Search (Deep Surfing)',
    purpose: ['의미 기반 자연어 검색 솔루션 개발'],
    tags: [
      { id: 1, type: 'LLM', color: 'primary' },
      { id: 6, type: 'Chat', color: 'primary' },
      { id: 10, type: 'Vue', color: 'primary' },
      { id: 11, type: 'Python', color: 'primary' },
      { id: 12, type: 'AI Search', color: 'primary' },
    ],
    customer: undefined,
    startDate: '2023.06',
    endDate: '2023.12',
    isDone: true,
    description: [],
    technologies: ['javascript', 'react'],
    roles: [
      "다이나믹 폼 및 실시간 시각화 UI 설계",
      "개발 팀 리드/솔루션 구조 설계 및 협업 주도"
    ],
    results: ["데이터 검색 정확도와 처리 속도 향상"],
    image: '/images/example.svg',
    animationData: Project3,
    svg: {
      width: 275,
      height: 275,
    }
  },
  {
    id: 4,
    category: [1],
    name: 'LLMOps',
    purpose: ['기업 내 LLM 운영 환경 구축'],
    tags: [
      { id: 1, type: 'LLM', color: 'primary' },
      { id: 13, type: 'LLMOps', color: 'primary' },
      { id: 14, type: 'Python', color: 'primary' },
      { id: 15, type: 'React', color: 'primary' },
      { id: 16, type: 'On-Premise', color: 'primary' },
    ],
    customer: undefined,
    startDate: '2023.06',
    endDate: '2023.10',
    isDone: true,
    description: [],
    technologies: ['vue', 'python', 'docker', 'kubernetes'],
    roles: [
      "데이터 대시보드와 관리 도구 설계",
      "관리자 정책 관리 기능 구현"
    ],
    results: ["운영 효율성과 데이터 관리 역량 향상"],
    image: '/images/example.svg',
    animationData: Project4,
    svg: {
      width: 285,
      height: 285,
    }
  },
  {
    id: 4,
    category: [1],
    name: 'SQL Assistant',
    purpose: ['LLM 기반 SQL 쿼리 작성 지원 도구 개발'],
    tags: [
      { id: 1, type: 'LLM', color: 'primary' },
      { id: 17, type: 'SQL', color: 'primary' },
      { id: 18, type: 'Vue', color: 'primary' },
      { id: 19, type: 'Python', color: 'primary' },
      { id: 20, type: 'On-Premise', color: 'primary' },
      { id: 21, type: 'Assistant', color: 'primary' },
    ],
    customer: ['BC 카드'],
    startDate: '2023.09',
    endDate: '2023.10',
    isDone: true,
    description: [],
    technologies: ['vue', 'python', 'docker'],
    roles: [
      "프론트엔드 개발",
      "개발팀 리드",
      "LLM 기반 SQL 쿼리 작성 지원 기능 구현",
      "생산성을 높이는 인터페이스 설계로 개발자 효율성 증대"
    ],
    results: ["SQL 작성 속도 및 정확도 향상"],
    image: '/images/example.svg',
    animationData: Project5,
    svg: {
      width: 275,
      height: 275,
    }
  },
  {
    id: 5,
    category: [2, 3],
    name: 'AI 경진대회 플랫폼',
    purpose: ['인공지능 경진대회 플랫폼 개발'],
    tags: [
      { id: 21, type: 'Platform', color: 'primary' },
      { id: 22, type: 'UI/UX', color: 'primary' },
      { id: 23, type: 'Vue', color: 'primary' },
      { id: 24, type: 'AWS', color: 'primary' },
      { id: 25, type: 'Python', color: 'primary' },
      { id: 26, type: 'Docker', color: 'primary' },
    ],
    customer: ['AI Connect'],
    startDate: '2021.05',
    endDate: '2023.05',
    isDone: true,
    description: [],
    technologies: ['vue', 'aws', 'python', 'docker'],
    roles: [
      "프론트엔드 개발 /협업 리드",
      "프로젝트 관리 및 일정 조율",
      "리더보드 및 평가 인터페이스 개발"
    ],
    results: [
      "긍정 피드백 60% 달성",
      "대규모 사용자 대상 안정적인 서비스 운영",
      "각종 국가기관(과기부) / 사기업 등에서 대회운영 사업 수주하여 진행"
    ],
    image: '/images/example.svg',
    animationData: Project6,
    svg: {
      width: 275,
      height: 275,
    }
  },
  {
    id: 6,
    category: [2, 3],
    name: 'MLOps',
    purpose: ['DevOps 기반 AI 모델 개발 환경 제공'],
    tags: [
      { id: 23, type: 'Vue', color: 'primary' },
      { id: 25, type: 'Python', color: 'primary' },
      { id: 26, type: 'Docker', color: 'primary' },
      { id: 27, type: 'Monitoring', color: 'primary' },
      { id: 28, type: 'Machine Learning', color: 'primary' },
    ],
    customer: ['롯데손해보험', "Payletter"],
    startDate: '2021.03',
    endDate: '2021.12',
    isDone: true,
    description: [],
    technologies: ['vue', 'python', 'docker', 'kubernetes'],
    roles: [
      "프론트엔드 개발",
      "데이터 모니터링 대시보드 설계 및 구현",
      "관리 도구 개발로 데이터 흐름 시각화"
    ],
    results: [
      "안정적이고 직관적인 모델 관리 환경 제공"
    ],
    image: '/images/example.svg',
    animationData: Project7,
    svg: {
      width: 275,
      height: 275,
    }
  },
  {
    id: 7,
    category: [2],
    name: 'Image Data Annotation Tool',
    purpose: ['이미지 데이터 라벨링 도구 개발'],
    tags: [
      { id: 33, type: 'React', color: 'primary' },
      { id: 31, type: 'Python', color: 'primary' },
      { id: 34, type: 'Django', color: 'primary' },
      { id: 29, type: 'CVAT', color: 'primary' },
      { id: 32, type: 'Docker', color: 'primary' },
    ],
    customer: ['민팃'],
    startDate: '2023.08',
    endDate: '2024.02',
    isDone: true,
    description: [],
    technologies: ['vue', 'python', 'docker'],
    roles: [
      "React와 Django 기반의 Full-Stack 개발",
      "사용자 친화적인 UI/UX 설계"
    ],
    results: [],
    image: '/images/example.svg',
    animationData: Project8,
    svg: {
      width: 275,
      height: 275,
    }
  },
  {
    id: 8,
    category: [2, 3],
    name: '사내 메신저: Puddlr',
    purpose: ['사내 메신저 서비스 개발'],
    tags: [
      { id: 35, type: 'Vue', color: 'primary' },
      { id: 36, type: 'Python', color: 'primary' },
      { id: 37, type: 'Django', color: 'primary' },
      { id: 37, type: 'Redis', color: 'primary' },
      { id: 37, type: 'RabbitMQ', color: 'primary' },
      { id: 37, type: 'WebSocket', color: 'primary' },

    ],
    customer: ['민팃'],
    startDate: '2019.04',
    endDate: '2021.03',
    isDone: true,
    description: [],
    technologies: ['vue', 'python', 'django'],
    roles: [
      "Full-Stack 개발",
      "채팅 인터페이스 설계 및 구현",
      "실시간 채팅 및 협업 도구 개발",
      "WebSocket 기반 아키텍처 설계"
    ],
    results: [],
    image: '/images/example.svg',
    animationData: Project9,
    svg: {
      width: 275,
      height: 275,
    }
  }

];
