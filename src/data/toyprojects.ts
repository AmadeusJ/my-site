import { AnimationItem } from 'lottie-web';
import Project1 from '@/assets/animations/toyprojects/project1-1.json';


export type ToyProject = {
  id: number;
  name: string;
  category: number[] | undefined;
  purpose: string[];
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
