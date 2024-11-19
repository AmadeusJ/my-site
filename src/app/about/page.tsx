// app/about/page.tsx

'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Provider } from 'react-redux';
import { store } from '@/stores/store';

import AeroCard from '@/components/Aero/AeroCard';
import BackgroundOverlay from '@/components/BackgroundOverlay';

import styles from './page.module.scss';

export default function AboutPage() {
  const router = useRouter();

  useEffect(() => {
  }, [router]);

  const backgroundColors = [
    'var(--about-bg-color)',
  ];

  return (
    <>
      <Provider store={store}>
        <AnimatePresence>
          <BackgroundOverlay key={'about'} color={backgroundColors[0]} />
        </AnimatePresence>
      </Provider>

      <section className={styles.aboutSection}>
        <div className={styles.aboutContents}>
          <div className={styles.aboutProfile}>
            <AeroCard className={styles.aboutProfileCard}>
              <div className={styles.aboutProfileImage}></div>
              <div className={styles.aboutProfileText}>
                <h1>About Me</h1>
              </div>
            </AeroCard>
          </div>
          <div className={styles.aboutMe}>
            <AeroCard className={styles.aboutMeCard}>
              <div className={styles.aboutMeText}>
                <h1>About Me</h1>
              </div>
            </AeroCard>
          </div>
        </div>
        <div className={styles.aboutFEContents}>
          <AeroCard className={styles.aboutFECard}>
            <div className={styles.aboutFEText}>
              <h1>About FE1</h1>
            </div>
          </AeroCard>
          <AeroCard className={styles.aboutFECard}>
            <div className={styles.aboutFEText}>
              <h1>About FE2</h1>
            </div>
          </AeroCard>
          <AeroCard className={styles.aboutFECard}>
            <div className={styles.aboutFEText}>
              <h1>About FE3</h1>
            </div>
          </AeroCard>
        </div>
      </section>
    </>
  );
}
