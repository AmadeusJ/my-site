'use client';

import Lottie from 'lottie-react';
import NotFoundAnimation from '@/assets/animations/not-found.json';
import styles from './not-found.module.scss';
export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <Lottie
        animationData={NotFoundAnimation}
        loop={true}
        style={{ width: '100%', height: '100%' }}
        autoplay={true}
      />
    </div>
  );
}
