export const projectTopics = [
  {
    id: 1,
    title: 'LLM Applications',
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
    ]
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
    ]
  },
  {
    id: 3,
    title: 'A11Y + UI/UX',
    description: [
      'Accessibility',
      'Internationalization',
      'Interaction Flow Optimization',
      'UX Research',
    ],
    image: '/images/example.svg',
    items: [
      {
        id: 1,
        title: 'AI',
      },
    ]
  }
]

export type Project = {
  id: number;
  name: string;
  purpose: string;
  customer: string;
  startDate: Date;
  endDate: Date | null;
  isDone: boolean;
  description: string[];
  technologies: string[];
  roles: string[];
  results: string[];
}

export const projects: Project[] = [


];
