// app/toyprojects/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/stores/store';
import { useRouter } from 'next/navigation';
import ProjectCard from '@/components/element/ProjectCard';
import BackgroundOverlay from '@/components/BackgroundOverlay';
import { AnimatePresence } from 'framer-motion';
import { toyProjects } from '@/data/toyprojects';
import styles from './page.module.scss';
import ChatWrapper from '@/components/wrapper/ChatWrapper';

export default function ToyProjectsPage() {
  const router = useRouter();
  const backgroundColors = [
    'var(--toyprojects-bg-color)',
  ];

  return (
    <Provider store={store}>
      <BackgroundOverlay color={backgroundColors[0]} />

      <section className={styles.toyProjectsSection}>
        <div className={styles.projectList}>
          {
            toyProjects.map((project, index) => {
              return <ProjectCard
                key={`${project.id}-${index}`}
                project={project}
                index={index}
                prefix={'toyprojects'}
              />
            })
          }
        </div>
        <ChatWrapper />
      </section>
    </Provider>
  );
}
