'use client';

// 프로젝트 상세 페이지
// app/projects/[id]/page.tsx

import React, { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/stores/store';
import { useRouter } from 'next/navigation';
import AeroCard from '@/components/Aero/AeroCard';
import BackgroundOverlay from '@/components/BackgroundOverlay';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import styles from './page.module.scss';
import ChatWrapper from '@/components/wrapper/ChatWrapper';

type ProjectPageProps = {
  params: { id: string }; // 동적 경로에서 `id` 값
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = params;
  const router = useRouter();
  const backgroundColors = ['var(--project-detail-bg-color)'];

  useEffect(() => {
  }, [router]);

  return (
    <Provider store={store}>
      <AnimatePresence>
        <BackgroundOverlay key={`project-${id}`} color={backgroundColors[0]} />
      </AnimatePresence>
      <section className={styles.projectDetailSection}>
        <div className={styles.projectDetailContents}>
          <AeroCard className={styles.projectDetailCard}>
            <div className={styles.projectDetailText}>
              <h1>Project Detail</h1>
            </div>
          </AeroCard>
        </div>
        <ChatWrapper />
      </section>
    </Provider>
  );
}