'use client';

// 프로젝트 상세 페이지
// app/projects/[id]/page.tsx

import React, { useRef, useEffect, use } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/stores/store';
import { useRouter } from 'next/navigation';
import AeroCard from '@/components/Aero/AeroCard';
import BackgroundOverlay from '@/components/BackgroundOverlay';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import styles from './page.module.scss';
import ChatWrapper from '@/components/wrapper/ChatWrapper';

type ToyProjectPageProps = {
  params: { id: string }; // 동적 경로에서 `id` 값
};

export default function ToyProjectPage({ params }: ToyProjectPageProps) {
  const { id } = React.use(params);
  const router = useRouter();
  const backgroundColors = ['var(--toyprojects-bg-color)'];

  useEffect(() => {
  }, [router]);

  return (
    <Provider store={store}>
      <BackgroundOverlay key={`toyproject-${id}`} color={backgroundColors[0]} />
      <section className={styles.toyProjectDetailSection}>
        <div className={styles.toyProjectDetailContents}>
          <AeroCard className={styles.toyProjectDetailCard}>
            <div className={styles.toyProjectDetailText}>
              <h1>Toy Project Detail</h1>
            </div>
          </AeroCard>
        </div>
        <ChatWrapper />
      </section>
    </Provider>
  );
}