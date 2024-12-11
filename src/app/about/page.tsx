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
import ChatWrapper from '@/components/wrapper/ChatWrapper';
import { me } from '@/data/me';
import { calculateExperience } from '@/utils/tools';

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
        <BackgroundOverlay key={'about'} color={backgroundColors[0]} />
        <section className={styles.aboutSection}>
          <div className={styles.aboutContents}>
            <div className={styles.aboutProfile}>
              <AeroCard className={styles.aboutProfileCard}>
                <div className={styles.aboutProfileImage}>
                  Profile Image
                </div>
                <div className={styles.aboutProfileText}>
                  <div className={styles.aboutProfileName}>
                    <div className={styles.aboutProfileLabel}>Name: </div> <div className={styles.aboutProfileNameValue}>{me.name}</div>
                  </div>
                  <div className={styles.aboutProfileTitle}>
                    <div className={styles.aboutProfileLabel}>Title: </div> <div className={styles.aboutProfileValue}>{me.title}</div>
                  </div>
                  <div className={styles.aboutProfileExperience}>
                    <div className={styles.aboutProfileLabel}>Experience: </div> <div className={styles.aboutProfileValue}>{calculateExperience(me.careerStartDate)}</div>
                  </div>
                  <div className={styles.aboutProfileCurrentCompany}>
                    <div className={styles.aboutProfileLabel}>Current Company: </div> <div className={styles.aboutProfileValue}>{me.currentCompany}</div>
                  </div>
                  <div className={styles.aboutProfileCurrentPosition}>
                    <div className={styles.aboutProfileLabel}>Current Position: </div> <div className={styles.aboutProfileValue}>{me.currentPosition}</div>
                  </div>
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
                <div>
                  <h1>Introduction</h1>
                  <p>{me.introduction}</p>
                </div>
                <div>
                  <h1>Philosophy</h1>
                  <p>{me.philosophy}</p>
                </div>
                <div>
                  <h1>Goals</h1>
                  <p>{me.goals}</p>
                </div>
              </div>
            </AeroCard>
          </div>
          <ChatWrapper />
        </section>
      </Provider>

    </>
  );
}
