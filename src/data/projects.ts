export type Project = {
  id: number;
  title: string;
  description: string;
  isMain: boolean;
}


export const projectTopics = [
  {
    id: 1,
    title: 'Web Application',
    description: 'Web Application Description',
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
    title: 'Data Visualization',
    description: 'Data Visualization Description',
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
    description: 'A11Y & UX Research Description',
    items: [
      {
        id: 1,
        title: 'AI',
      },
    ]
  },
  // {
  //   id: 4,
  //   title: 'Fullstack + Collabo',
  //   description: 'Fullstack & Collaboration Description',
  //   items: [
  //     {
  //       id: 1,
  //       title: 'Fullstack Development',
  //     },
  //     {
  //       id: 2,
  //       title: 'API Integration',
  //     },
  //     {
  //       id: 3,
  //       title: 'Collaboration',
  //     },
  //   ]
  // },
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Project 1 Description',
    isMain: true,
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Project 2 Description',
    isMain: true,
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Project 3 Description',
    isMain: true,
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Project 4 Description',
    isMain: false,
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Project 5 Description',
    isMain: false,
  },
  {
    id: 6,
    title: 'Project 6',
    description: 'Project 6 Description',
    isMain: false,
  },
  {
    id: 7,
    title: 'Project 7',
    description: 'Project 7 Description',
    isMain: false,
  },
  {
    id: 8,
    title: 'Project 8',
    description: 'Project 8 Description',
    isMain: false,
  },

];
