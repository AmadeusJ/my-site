import { AnimationItem } from 'lottie-web';
import Project1 from '@/assets/animations/toyprojects/project1-1.json';


export type ToyProject = {
  id: number;
  name: string;
  category: number[] | undefined;
  purpose: string[];
  tags: { id: number, type: string, color: string }[] | undefined;
  startDate: string;
  endDate: string;
  isDone: boolean;
  url: string | undefined;
  roles: string[] | undefined;
  technologies: string[];
  description: string[];
  challenges: string[] | undefined;
  learningPoints: string[] | undefined;
  screenshots: string[] | undefined;
  results: string[] | undefined;
  animationData: AnimationItem | undefined;
  githubUrl: string[] | undefined;
  svg: {
    width: number;
    height: number;
  } | undefined;
}


export const toyProjects: ToyProject[] = [
  {
    id: 1,
    name: 'My Portfolio Site',
    category: [1, 2],
    purpose: ['포트폴리오 사이트 개발'],
    tags: [
      { id: 1, type: 'Next.js', color: 'warning' },
      { id: 2, type: 'React', color: 'warning' },
      { id: 3, type: 'TypeScript', color: 'warning' },
      { id: 4, type: 'Python', color: 'warning' },
      { id: 5, type: 'Docker', color: 'warning' },
      { id: 6, type: 'UI/UX', color: 'warning' },
    ],
    technologies: ['next-js', 'React', 'TypeScript', 'sass', 'Docker', 'Python', 'FastAPI', 'Telegram',],
    startDate: '2024.11',
    endDate: '2024.12',
    isDone: true,
    roles: ['Full-Stack 개발'],
    description: [
      "<strong>Next.js 15 App Router 기반(React 19) + TypeScript</strong> 활용으로 포트폴리오 사이트 개발",
      "Glassmorphism (Aero Theme) Design 적용",
      "Websocket & Telegram API 활용한 실시간 Contact Chat 구현",
      "방문자 개인정보 취득없이 Session & 방문자 통계 설계",
      "Component 단위로 개발하여 재사용성 향상",
      "<strong>Context Component</strong>를 통한 데이터 공유 및 관리",
      "SCSS Mixin 활용으로 반응형 대응 코드 작성",
      "FastAPI를 통한 백엔드 서버 구현",
      "Docker(Docker-compose)를 통한 배포 환경 구축",
    ],
    challenges: [
      "너무 진부하지 않으면서도 너무 과하지 않고 깔끔하고 새로운 느낌과 경험을 주는 UI/UX를 구현해보고 싶었던 갈망..?",
      "심플하게 방문자님들과 실시간으로 소통이 가능한 방법이 없을까? -> 과거 Telegram bot을 사용해본 기억을 떠올려 시도/적용!",
      "디자이너 & 퍼블리셔 분들과의 협업에 익숙해져 있던 터라, Zero Base에서 모든걸 혼자 하려니 만만치 않았던 점"
    ],
    learningPoints: [
      "기존의 Next.js의 routing 방식과 다른 app router 방식을 프로젝트에 적용해본 점",
      "생각난건 바로바로 실천에 옮기자(언젠간 개인 포트폴리오 사이트를 만들자만들자 미뤘던..)",
    ],
    results: [
      "UI/UX 장인이 언젠간 되고 싶다는 마음을 남김..",
    ],
    screenshots: [],
    githubUrl: [
      "https://github.com/AmadeusJ/my-site",
      "https://github.com/AmadeusJ/my-site-server"
    ],
    animationData: Project1,
    svg: {
      width: 255,
      height: 255,
    },
  }

];
