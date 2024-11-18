// ProjectSection.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import AeroCard from '../Aero/AeroCard';
import { motion, useInView } from "framer-motion";
import { useAppDispatch } from '@/stores/store';
import { projects, projectTopics } from '@/data/projects';

import styles from './ProjectSection.module.scss';

export default function ProjectSection() {
  const dispatch = useAppDispatch();
  const router = useRouter();

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
    <section className={`section ${styles.projectSection}`}>
      {
        projectTopics.map((topic, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
              className={styles.projectCardWrapper}
              ref={ref}
              key={topic.id}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover="hover"
              variants={expandEffect}
              onClick={() => router.push(`/projects`)}
            >
              <AeroCard className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <motion.img
                    src={`/images/example.svg`}
                    alt={topic.title}
                  />
                </div>
                <div className={styles.projectBody}>
                  <h1>{topic.title}</h1>
                  <p>{topic.description}</p>
                  <p>{topic.description}</p>
                  <p>{topic.description}</p>
                  <p>{topic.description}</p>
                  <p>{topic.description}</p>
                  <p>{topic.description}</p>
                  <p>{topic.description}</p>
                  <p>{topic.description}</p>
                </div>
              </AeroCard>
            </motion.div>

          )
        })
      }
    </section>
  );
}
