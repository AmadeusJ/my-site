// app/projects/page.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Provider } from 'react-redux';
import { store } from '@/stores/store';
import AeroCard from '@/components/Aero/AeroCard';
import ProjectCard from '@/components/element/ProjectCard';
import BackgroundOverlay from '@/components/BackgroundOverlay';
import CategoryButton from '@/components/button/CategoryButton';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Project, projects } from '@/data/projects';
import styles from './page.module.scss';
import { parseCategory } from '@/utils/tools';

export default function ProjectsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryQuery = parseCategory(Number(searchParams.get('category')));
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const backgroundColors = [
    'var(--projects-bg-color)',
  ];

  useEffect(() => {
    console.log(categoryQuery);
    if (categoryQuery === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          project.category.includes(categories.indexOf(categoryQuery))
        )
      );
    }
    console.log('filteredProjects: ', filteredProjects);
  }, [categoryQuery]);

  const expandEffect = {
    hover: {
      scale: 1.2,
      zIndex: 100,
      transition: {
        type: 'spring',
        stiffness: 300, // 탄성
        damping: 15, // 감쇠
        mass: 0.7, // 질량
        zIndex: 100,
      },
    },
  };

  const categories = [
    'All',
    'LLM Application',
    'Platform / Service Dev',
    'A11Y + UI/UX',
  ];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      router.push('/projects');
    } else {
      router.push(`/projects?category=${categories.indexOf(category)}`);
    }
  };

  return (
    <Provider store={store}>
      <AnimatePresence>
        <BackgroundOverlay key={'projects'} color={backgroundColors[0]} />
      </AnimatePresence>

      <section className={styles.projectsSection}>
        <div className={styles.projectCategory}>
          {
            categories.map((category, index) => {
              return <CategoryButton
                key={index}
                category={category}
                isActive={activeCategory === category}
                onClick={() => handleCategoryClick(category)}
              />;
            })
          }
        </div>
        <div className={styles.projectList}>
          {
            filteredProjects.map((project, index) => {
              return <ProjectCard key={project.id} project={project} index={index} />
            })
          }
        </div>
      </section>
    </Provider>
  );
}