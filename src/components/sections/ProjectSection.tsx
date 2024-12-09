// ProjectSection.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import AeroCard from '../Aero/AeroCard';
import Lottie from 'lottie-react';
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
      <div className={styles.projectWrapper}>
        {
          projectTopics.map((topic, index) => {
            const ref = useRef(null);
            const lottiRef = useRef(null);
            const isInView = useInView(ref, { once: true });
            return (
              <motion.div
                className={styles.projectCardWrapper}
                ref={ref}
                key={topic.id}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.2 * index }}
                whileHover="hover"
                variants={expandEffect}
                onMouseEnter={() => lottiRef.current?.play()}
                onMouseLeave={() => lottiRef.current?.stop()}
              >
                <AeroCard
                  className={styles.projectCard}
                  onClick={() => router.push(`/projects?category=${topic.id}`)}
                >
                  <div className={styles.projectHeader}>
                    <Lottie
                      lottieRef={lottiRef}
                      animationData={topic.animationData}
                      style={{ width: '100%', height: '100%' }}
                      autoplay={false}
                      loop={true}
                    />
                  </div>
                  <div className={styles.projectBody}>
                    <h1>{topic.title}</h1>
                    <ul>
                      {
                        Array.isArray(topic.description) && topic.description.map((desc, index) => {
                          return <li key={index}>{desc}</li>
                        })
                      }
                    </ul>
                  </div>
                </AeroCard>
              </motion.div>

            )
          })
        }
      </div>
      {/* "더 알아보기" 버튼 및 Lottie 영역 */}
      <div className={styles.lottieArea}>
        <div className={styles.moreInfo}>
          <motion.div
            className={styles.moreButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => router.push(`/projects`)}
          >
            Explore More
          </motion.div>
        </div>
      </div>
    </section>
  );
}
