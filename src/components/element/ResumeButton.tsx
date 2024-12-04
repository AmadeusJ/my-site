import React, { useRef } from 'react';
import styles from './ResumeButton.module.scss';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationResume from '@/assets/animations/resume.json';


export default function ResumeButton() {

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
  const lottieRef = useRef<any>(null);

  return (
    <motion.div
      className={styles.resumeButton}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      whileHover="hover"
      variants={expandEffect}
      onMouseEnter={() => lottieRef.current?.play()}
      onMouseLeave={() => lottieRef.current?.stop()}
    >
      <Lottie
        animationData={animationResume}
        loop={true}
        autoplay={false}
        lottieRef={lottieRef}
        style={{ width: '100%', height: '100%' }}
      />
    </motion.div>
  );
}
