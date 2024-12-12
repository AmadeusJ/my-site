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
    technologies: ['next-js', 'React'],
    roles: [
      "프론트엔드 개발",
      "재사용 가능한 컴포넌트 개발",
      "다국어 적용 (국문/영문)"
    ],
    description: [
      "그동한 MNC 내부 LLM 관련 프로젝트들을 모듈화 하여 하나로 모아서 플랫폼화 진행",
      "영어를 추가한 다국어 적용(i18n) 경험",
    ],
    challenges: [
      "In Progress...",
    ],
    learningPoints: [
      "In Progress...",
    ],
    screenshots: [
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
    technologies: ['vuejs', 'javascript', 'jsp', 'react'],
    roles: [
      "대화형 UI 설계 및 웹뷰 기반 프론트엔드 개발",
      "자연어 처리 결과를 활용한 추천 인터페이스 구축"
    ],
    description: [
      "프로젝트 시작전 PoC 단계에서 Vuejs 통해서 프로토타입 개발했습니다.",
      "<strong>Webview 기반의 모바일 앱</strong>에서 대화형 UI를 모달 레이어 형식으로 기존의 원뱅킹 챗봇에 추가하여 구현했습니다.",
      "Javascript / Jquery를 이용해 ChatGPT 효과를 내는 대화형 인터페이스를 구축했습니다.",
      "서버에러가 있는 경우, 사용자가 <strong>쾨적한 UX</strong>를 경험할 수 있도록, 안내메세지, <strong>Retry 로직</strong>등을 이용해 예외처리를 구현했습니다."
    ],
    results: ["예·적금 상담 및 상품 추천 서비스 제공"],
    challenges: [
      "원뱅킹 앱이 모바일 환경에서 Webview 기반의 앱이다 보니, 로컬 PC에서 개발 후, 모바일 환경에서 테스트 하는 것이 어려웠습니다..",
      "기존에 원뱅킹에서 개발이 필요한 부분의 가이드가 없어서 직접 소스를 파악하며 개발했던 아픈 기억이 있습니다..",
    ],
    learningPoints: [
      "Webview 기반의 모바일 앱 개발시 UI에서 신경써줘야 할 <strong>Native Interface</strong>.",
      "원뱅킹 앱의 챗봇 기능을 사용자가 얼마나 사용하는지를 떠나서, 제1금융권 은행의 앱의 기능을 개발해본 값진 경험",
      "요즘 하나 둘씩 나오고 있는 LLM 기반의 서비스가 결국에는 UI/UX에서 사업성과 경쟁력을 결정하는 것이 아닐까라는 인사이트"
    ],
    screenshots: [
    ],
    screenshots: [
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
      { id: 10, type: 'Vue', color: 'primary' },
      { id: 11, type: 'Python', color: 'primary' },
      { id: 12, type: 'Pdf', color: 'primary' },
      { id: 13, type: 'Docker', color: 'primary' },
    ],
    customer: undefined,
    startDate: '2023.06',
    endDate: '2023.12',
    isDone: true,
    technologies: ['vuejs', 'python', 'docker'],
    roles: [
      "다이나믹 폼 및 실시간 시각화 UI 설계",
      "개발 팀 리드 / 솔루션 구조 설계 및 협업 주도"
    ],
    description: [
      "사용자가 입력한 질의를 LLM에 필요한 Parameter들과 결합하여 Prompt를 생성하여 Model API를 호출합니다.",
      "Model API의 응답은 Streaming 형태로 받아와서 실시간으로 응답 텍스트를 화면에 표시합니다.",
      "API 작업 : 서버로직에 Reward Model을 거치도록 설계하여 사용자가 원하는 응답을 낼 수 있도록 최적화 작업",
      "PDF Viewer와 LLM을 연동하여 사용자가 입력한 질의를 통해 PDF 파일을 검색할 수 있도록 구축",
    ],
    results: ["ChatGPT를 On-Premise 환경에서 사용할 수 있도록 구축", "대형 카드사 / 보험사 등에서 데모시연"],
    challenges: [
      "LLM에 대응하는 UI/UX 설계 및 개발은 처음으로 시도했기에 여러 오픈소스들을 참고하여 개발했습니다.",
      "오픈소스 Class를 커스터마이징 해야하는 부분이 있었는데, 출시 초기 버전이라 오픈소스 코드를 수정하는 것이 어려웠습니다(서버작업). -> Docker Image로 빌드하며 버전관리로 해결",
      "서버에서 Streaming 형태의 응답을 bianry encoding 형태를 UI에서 decoding 할때, 알 수 없는 문자들이 나오는 이슈 -> 정규표현 식 및 서버 디버깅으로 해결",
    ],
    learningPoints: [
      "UI에서 Streaming 형태의 응답을 처리하는 방법 & 노하우",
      "오픈소스 코드를 수정하는 것이 어려웠습니다(서버작업). -> Docker Image로 빌드하며 버전관리로 해결",
    ],
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
    technologies: ['vuejs', 'vite', 'python', 'docker'],
    roles: [
      "데이터 대시보드와 관리 도구 설계",
      "관리자 정책 관리 기능 구현"
    ],
    description: [
      "MLOps 플랫폼 개발 경험을 바탕으로, 단순 AI Model이 아닌 LLM Model을 학습하는 Ops 플랫폼 개발",
      "기업 고객을 타겟팅한 사용자 관리 기능 기획 / 개발",
      "리소스 사용량 모니터링 및 관리 기능 기획 / 개발",
      "추후 MNC의 메인 제품이 될 GenOS의 전신이 된 프로젝트",
    ],
    results: ["운영 효율성과 데이터 관리 역량 향상"],
    challenges: [
      "빡빡한 일정 (Zero Base에서 1차 개발 시연까지 주어진 2개월) -> 기존 MLOps 개발 구조를 거의 동일하게 Vue.js & Vuexy 프레임워크를 이용해 개발",
      "리소스 유형별(Serving, Training, Deploy)로 관리 권한 설정 및 관리 기능 기획 및 구현 -> AWS의 IAM 에서 아이디어 착안",
    ],
    learningPoints: [
      "기업 고객을 타겟팅한 사용자 및 리소스 관리 기능 기획 / 개발 경험...",
    ],
    screenshots: [
    ],
    image: '/images/example.svg',
    animationData: Project4,
    svg: {
      width: 285,
      height: 285,
    }
  },
  {
    id: 5,
    category: [1, 3],
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
    technologies: ['vuejs', 'vite', 'python', 'docker'],
    roles: [
      "프론트엔드 개발",
      "개발팀 리드",
      "LLM 기반 SQL 쿼리 작성 지원 기능 구현",
      "생산성을 높이는 인터페이스 설계로 개발자 효율성 증대"
    ],
    description: [
      "CodeMirror 라는 Text Editor Library를 이용해 SQL 쿼리 작성 인터페이스를 구축했습니다.",
      "잘의 작성 -> LLM 응답 확인 -> SQL 수정/완성 Flow에 대한 UI / UX 설계 및 구현",
      "Figma를 통한 기획자 / 디자이너와 협업",
    ],
    results: ["SQL 작성 속도 및 작업 속도 향상"],
    challenges: [
      "고객사 보안상 외부에서 빌드 후 내부 반입 절차를 거쳐 설치 / 운영 환경에 적용하는 것이 어려웠습니다.",
      "SQL 쿼리문에서 주요 어구의 시각적 표시에 대한 요구사항 (SELECT, FROM, WHERE, GROUP BY, ORDER BY, LIMIT 등) 이 있었습니다.<br/>허나, 서브 쿼리에 대해서는 구현이 어려워, 단순 쿼리문에만 적용하는 걸로 고객사와 협의하여 진행",
    ],
    learningPoints: [
      "LLM 기반의 쿼리 작성 인터페이스 설계 및 구현 경험",
      "Figma를 통한 기획자 / 디자이너와 협업 경험",
      "별도 USB에 담아 전달하는 경우, 되도록 SSD 외장하드를 사용하는 것이 좋다는 것.."
    ],
    screenshots: [
    ],
    image: '/images/example.svg',
    animationData: Project5,
    svg: {
      width: 275,
      height: 275,
    }
  },
  {
    id: 6,
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
    technologies: ['vuejs', 'aws', 'python', 'celery', 'docker'],
    roles: [
      "프론트엔드 개발 /협업 리드",
      "프로젝트 관리 및 일정 조율",
      "리더보드 및 평가 인터페이스 개발"
    ],
    description: [
      "Vue.js를 이용해 zero base에서 부터 Component 기반 프론트엔드 개발을 진행했습니다.",
      "AWS 기반의 클라우드 인프라를 구축하여 안정적인 서비스 운영을 보장했습니다. (Router5, RDS, EC2, S3, Lambda, CloudFront 이용)",
      "서버운영 : GPU서버에 Docker Container를 4개식 띄워 GPU 스레드를 나누어 참가자들에 할당",
      "채점서버 : 채점 서버에서 채점 결과를 받아와서 채점 결과를 화면에 표시 (Python 이용)",
      "참가자들의 대회 참여 현황을 실시간으로 확인할 수 있도록 리더보드 및 평가 인터페이스를 개발했습니다.",
      "사업부 마케팅, 기획자, 디자이너, 백엔드 개발자, 데이터사이언티스트와 협업하여 대회 운영 및 플랫폼 개발을 진행했습니다.",
    ],
    results: [
      "긍정 피드백 60% 달성",
      "대규모 사용자 대상 안정적인 서비스 운영",
      "각종 국가기관(과기부) / 사기업 등에서 대회운영 사업 수주하여 진행"
    ],
    challenges: [
      "플랫폼 특성상 버그나 오류시 치명적인 대회운영 차질 발생할 우려 및 대회 참가자들의 불만 발생 가능성이 많은 특성이 주는 책임감",
      "FE 개발자 1명(본인), BE 개발자 1인으로 프로젝트 관리 및 일정 조율 및 개발 진행 어려움 -> 상대적으로 개발이 빠른 Vue.js 프레임워크를 이용",
      "운영인력 부족으로 문의사항 처리에 에러 -> Slack 채널 연동으로 응대 효율성 향상",
    ],
    learningPoints: [
      "AWS 클라우드 인프라를 구축하여 서비스를 운영하는 경험",
      "참가자들의 대회 참여 현황을 실시간으로 확인할 수 있도록 리더보드 및 평가 인터페이스를 개발하는 경험",
      "여러 직군과의 협업 경험 -> 프로젝트 일정 관리 / 디자이너와의 협업 노하우",
      "플랫폼 사용자들의 피드백을 반영하여 서비스 개선 경험 -> 어떤 부분을 개선해야 할지 판단하는 노하우",
    ],
    screenshots: [
    ],
    image: '/images/example.svg',
    animationData: Project6,
    svg: {
      width: 275,
      height: 275,
    }
  },
  {
    id: 7,
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
    technologies: ['vuejs', 'python', 'docker'],
    roles: [
      "프론트엔드 개발",
      "데이터 모니터링 대시보드 설계 및 구현",
      "관리 도구 개발로 데이터 흐름 시각화"
    ],
    description: [
      "Zero Base에서 부터 프론트엔드 개발을 진행했습니다.",
      "MLOps 환경에서 Model이 학습 중에 발생하는 데이터 모니터링 대시보드 설계 및 구현 -> Chart.js / ApexChart 이용",
      "Vuexy 템플릿을 이용하여 MLOps 전체 UI / UX / 대시보드 설계 및 구현",
      "Grafana를 이용하여 모델 학습 중에 발생하는 리소스 사용 현황 모니터링 대시보드 설계 및 구현",
      "Polling 방식을 이용해 서빙중인 모델 학습 컨테이너 내부의 Log를 실시간으로 확인할 수 있도록 구현",
    ],
    results: [
      "안정적이고 직관적인 모델 관리 환경 제공"
    ],
    challenges: [
      "당시의 나에게는 다소 까다로웠던 대시보드 요구사항(오늘 날짜 기준 1주일 동안의 날짜를 x축으로 하여 모델 학습 중에 발생하는 데이터 모니터링 대시보드 설계 및 구현)",
      "Machine Learning에 대해 모르는 부분이 많아서 학습 중에 발생하는 데이터 모니터링 대시보드 설계 및 구현에 어려움이 있었습니다.",
      "빡빡한 일정에 개발 경력 갓 3년차에 중요한 솔루션의 UI / UX 설계 담당 및 개발(+ API 개발) 대해 약간 부담 -> 그나마 손에 익은 Vue.js와 Vuexy 템플릿을 이용하여 해결",
    ],
    learningPoints: [
      "MLOps 환경에서 모델 학습 중에 발생하는 데이터 모니터링 대시보드 설계 및 구현 경험",
      "전 직장에서 유지보수 및 신규기능 개발을 담당하는 Full-Stack 개발자로 있었지만, FE와 BE의 깊이를 더 명확하게 이해하는 경험",
      "실시간으로 데이터를 주고 받는 방법이 여러가지가 있다는 것을 아는 것을 넘어 실제 업무에 적용해 보게 된 경험",
    ],
    screenshots: [
    ],
    image: '/images/example.svg',
    animationData: Project7,
    svg: {
      width: 275,
      height: 275,
    }
  },
  {
    id: 8,
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
    technologies: ['react', 'python', 'docker'],
    roles: [
      "React와 Django 기반의 Full-Stack 개발",
      "급하게 투입되어 협업 프로젝트 잔금을 받아낸 중요한 역할 수행!"
    ],
    description: [
      "CVAT 이라는 오픈소스를 이용해 휴대폰 파손 이미지를 라벨링하는 도구를 개발했습니다.",
    ],
    results: ["고객에 전달 완료 및 사용 메뉴얼 전달"],
    challenges: [
      "오픈소스를 사용자 요구사항에 따라 수정하는 것이 어려웠습니다..",
      "여러 컨테이너가 모듈형식으로 상호 의존성을 가지고 있는 형태여서 컨테이너 간 의존성 관리가 어려웠습니다. -> Docker Compose 이용해서 해결",
    ],
    learningPoints: [
      "Docker Compose를 이용해 여러 컨테이너를 모듈 형식으로 관리 / 개발하는 방법을 실제 업무에 적용",
      "Build가 오래 걸리는 Webpack의 빌드 성능 개선 방안에 대한 인사이트 -> 설정 / 캐싱 / 플러그인 / 병렬빌드"
    ],
    screenshots: [],
    image: '/images/example.svg',
    animationData: Project8,
    svg: {
      width: 275,
      height: 275,
    }
  },
  {
    id: 9,
    category: [2, 3],
    name: '사내 메신저: Puddlr',
    purpose: ['사내 메신저 서비스 개발'],
    tags: [
      { id: 35, type: 'Vue', color: 'primary' },
      { id: 36, type: 'Python', color: 'primary' },
      { id: 37, type: 'Django', color: 'primary' },
      { id: 38, type: 'Redis', color: 'primary' },
      { id: 39, type: 'RabbitMQ', color: 'primary' },
      { id: 40, type: 'WebSocket', color: 'primary' },

    ],
    customer: ['KBS', 'B2B', 'B2C'],
    startDate: '2019.04',
    endDate: '2021.03',
    isDone: true,
    technologies: ['vuejs', 'python', 'django', 'electron', 'redis', 'rabbitmq', 'gunicorn'],
    roles: [
      "Full-Stack 개발",
      "채팅 인터페이스 설계 및 구현",
      "실시간 채팅 및 협업 도구 개발",
      "WebSocket 기반 아키텍처 설계"
    ],
    description: [
      "첫 커리어 시작시 처음 맡은 서비스",
      "Django의 template engine과 Vue.js 프레임워크 Build를 SSR 방식으로 개발",
      "WebSocket 기반 아키텍처 이용 -> Vue.js <-> Django <-> Redis <-> RabbitMQ",
      "Message Queue는 RabbitMQ를 이용하고, 실시간 접속 상태는 Redis를 이용",
      "WSGI 서버는 Gunicorn을 이용",
      "Django의 ORM을 이용해 데이터베이스 조회 / 관리",
      "Electron을 이용해 Window, Mac 환경에서 이용가능한 크로스 플랫폼 데스크탑 애플리케이션 개발",
    ],
    results: ["사내 메신저 서비스 운영"],
    challenges: [
      "서버가 Python 기반이라서 한번씩 처리 속도 / 부하 문제가 있었습니다. -> RabbitMQ와 연결된 메세지 처리 부분을 Go 언어로 개발(처리 속도 개선)",
      "나중에서야 알았지만, Fan-out Exchange 방식으로 Queue를 처리하며며 웹소켓으로 메세지를 주고 받는 것을 확인 -> 다른 방에서 어떤 메세지들이 오가는지 확인 할 수 있는 이슈",
      "위 이슈를 확인하고 선임 개발자에 물었으나, 회사의 방향성에 따라 흐지부지 넘어가게 된 기억..."
    ],
    learningPoints: [
      "Chat 서비스 개발 / 운영 경험 -> Chat 아키텍처에 대한 인사이트",
      "Electron을 이용해 크로스 플랫폼 데스크탑 애플리케이션 개발 경험",
      "WebSocket 기반 아키텍처 설계 경험",
      "Message Queue 이용 경험",
    ],
    screenshots: [],
    image: '/images/example.svg',
    animationData: Project9,
    svg: {
      width: 275,
      height: 275,
    }
  },
  {
    id: 10,
    category: [2],
    name: 'C3DB',
    purpose: ['화합물 데이터베이스 개발'],
    tags: [
      { id: 35, type: 'JS', color: 'primary' },
      { id: 36, type: 'Python', color: 'primary' },
      { id: 37, type: 'Django', color: 'primary' },
      { id: 38, type: 'JQuery', color: 'primary' },
      { id: 39, type: 'PostgreSQL', color: 'primary' },
    ],
    customer: ['숭실대 분자생물연구소'],
    startDate: '2019.04',
    endDate: '2021.03',
    isDone: true,
    technologies: ['python', 'django', 'postgresql', 'jquery', 'javascript', 'bootstrap', 'celery'],
    roles: [
      "Full-Stack 개발",
    ],
    description: [
      "대학원 논문 주제로 진행한 3차원 화합물 데이터베이스 개발",
    ],
    results: ["대학원 석사 (연기없이) 졸업"],
    challenges: [
      "분자 양자역학 Python Library를 이용해 화합물 데이터 전처리",
      "데이터베이스 설계 및 구현",
      "약 3천만건 분자 데이터 전처리 및 데이터베이스 적재",
      "실제 개발 경험이 전무한 상태에서 위 모든 것과 웹 개발 모두 진행하는 것이 어려웠습니다..."
    ],
    learningPoints: [
      "웹 개발의 이해",
      "분산 처리 Sungrid Engine 이용 경험",
    ],
    screenshots: [],
    image: '/images/example.svg',
    animationData: Project9,
    svg: {
      width: 275,
      height: 275,
    }
  }

];
