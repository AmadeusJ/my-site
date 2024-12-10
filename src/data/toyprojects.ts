import { AnimationItem } from 'lottie-web';
import Project1 from '@/assets/animations/toyprojects/project1-1.json';


export type ToyProject = {
  id: number;
  name: string;
  category: number[] | undefined;
  purpose: string[];
  tags: { id: number, type: string, color: string }[] | undefined;
  description: string[];
  technologies: string[];
  startDate: string;
  endDate: string;
  isDone: boolean;
  animationData: AnimationItem | undefined;
  svg: {
    width: number;
    height: number;
  } | undefined;
}


export const toyProjects: ToyProject[] = [
  {
    id: 1,
    name: 'My Portfolio',
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
    description: [],
    technologies: ['Next.js', 'React', 'TypeScript'],
    startDate: '2024.12',
    endDate: '2024.12',
    isDone: true,
    animationData: Project1,
    svg: {
      width: 255,
      height: 255,
    },
  }

];
