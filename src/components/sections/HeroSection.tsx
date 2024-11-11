// HeroSection.tsx
'use client';

import React, { useEffect } from 'react';
import AeroCard from '../Aero/AeroCard';
import styles from './HeroSection.module.scss';
import { motion } from 'framer-motion';

export default function HeroSection() {

  useEffect(() => {
    console.log('HeroSection mounted');
  }, []);

  return (
    <section className={`section ${styles.heroSection}`}>
      <AeroCard className={`${styles.heroCard}`}>
        <div className={styles.heroLeft}>
          <div className={styles.heroTitle}>
            <motion.h1
              className={styles.heroMainTitle}
            >
              Frontend Developer
            </motion.h1>
            <motion.h1
              className={styles.heroSubtitle}
            >
              JUNG DAWOON
            </motion.h1>
          </div>
          <div className={styles.heroContent}>
            <div></div>
            <motion.p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </motion.p>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroIcons}>
            <div className={styles.heroIcon}>
              <motion.div>
                1
              </motion.div>
            </div>
          </div>
        </div>
      </AeroCard>
    </section>
  );
}
