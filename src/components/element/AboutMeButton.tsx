import React, { useRef } from 'react';
import styles from './AboutMeButton.module.scss';
import Lottie from 'lottie-react';
import animationNinja from '@/assets/animations/male.json';
import { motion } from 'framer-motion';

export default function AboutMeButton() {
  const lottieRef = useRef<any>(null);

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
    <motion.div
      className={styles.aboutMeButton}
      whileHover="hover"
      variants={expandEffect}
      onMouseEnter={() => lottieRef.current?.play()}
      onMouseLeave={() => lottieRef.current?.stop()}
    >
      <Lottie
        animationData={animationNinja}
        lottieRef={lottieRef}
        style={{ width: '100%', height: '100%' }}
        loop={true}
        autoplay={false}
      />
    </motion.div>
  );
}