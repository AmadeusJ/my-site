// app/projects/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Provider } from 'react-redux';
import { store } from '@/stores/store';
import ProjectCard from '@/components/element/ProjectCard';
import BackgroundOverlay from '@/components/BackgroundOverlay';
import CategoryButton from '@/components/button/CategoryButton';
import { AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import styles from './page.module.scss';
import { parseCategory } from '@/utils/tools';
import ChatWrapper from '@/components/wrapper/ChatWrapper';
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
    setFilteredProjects([]);  // 초기화
    setActiveCategory(categoryQuery)
    if (categoryQuery === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          project.category.includes(categories.indexOf(categoryQuery))
        )
      );
    }
  }, [categoryQuery]);

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
      <BackgroundOverlay key={'projects'} color={backgroundColors[0]} />

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
              return <ProjectCard
                key={`${project.id}-${index}`}
                project={project}
                index={index}
                prefix={`projects`}
              />
            })
          }
        </div>
        <ChatWrapper />
      </section>
    </Provider>
  );
}