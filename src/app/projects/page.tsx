// app/projects/page.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Provider } from 'react-redux';
import { store } from '@/stores/store';

import AeroCard from '@/components/Aero/AeroCard';
import BackgroundOverlay from '@/components/BackgroundOverlay';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { projects } from '@/data/projects';
import styles from './page.module.scss';

export default function ProjectsPage() {
  const router = useRouter();
  const backgroundColors = [
    'var(--projects-bg-color)',
  ];

  useEffect(() => {
  }, [router]);

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

  return (
    <Provider store={store}>
      <AnimatePresence>
        <BackgroundOverlay key={'projects'} color={backgroundColors[0]} />
      </AnimatePresence>

      <section className={styles.projectsSection}>
        <div className={styles.projectCategory}>
          <button>All</button>
          <button>Web Application</button>
          <button>Data Visualization</button>
          <button>A11Y + UI/UX</button>
        </div>
        <div className={styles.projectList}>
          {
            projects.map((project, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true });
              return (
                <motion.div
                  className={styles.projectCardWrapper}
                  ref={ref}
                  key={project.id}
                  initial={{ opacity: 0, y: 100 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 * index }}
                  whileHover="hover"
                  variants={expandEffect}
                  onClick={() => router.push(`/projects/${project.id}`)}
                >
                  <AeroCard className={styles.projectCard}>
                    <div className={styles.projectHeader}>
                      <img src={project.image} alt={project.name} />
                    </div>
                    <div className={styles.projectBody}>
                      <h1>{project.name}</h1>
                    </div>
                  </AeroCard>
                </motion.div>
              );
            })
          }

        </div>
      </section>
    </Provider>
  );
}