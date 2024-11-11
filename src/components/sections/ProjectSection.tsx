// ProjectSection.tsx
'use client';

import React, { useRef } from 'react';
import AeroCard from '../Aero/AeroCard';
import { motion, useInView } from "framer-motion";
import { useAppDispatch } from '@/stores/store';
import { projects } from '@/data/projects';

import styles from './ProjectSection.module.scss';

export default function ProjectSection() {
  const dispatch = useAppDispatch();
  const mainProject = projects.filter((project) => project.isMain);

  return (
    <section className={`section ${styles.projectSection}`}>
      {
        mainProject.map((project, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
              ref={ref}
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <AeroCard className={styles.projectCard}>
                <div className={styles.projectHeader}>

                </div>
                <div className={styles.projectBody}>
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                </div>
              </AeroCard>
            </motion.div>

          )
        })
      }
    </section>
  );
}
