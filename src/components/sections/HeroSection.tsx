// HeroSection.tsx
'use client';

import React, { useEffect } from 'react';
import AeroCard from '../Aero/AeroCard';
import styles from './HeroSection.module.scss';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWelcome } from '@/stores/slices/commonSlice';
import { RootState, AppDispatch } from '@/stores/store';

export default function HeroSection() {
  const dispatch = useDispatch<AppDispatch>();
  const { welcome, status, error } = useSelector((state: RootState) => state.common);

  useEffect(() => {
    dispatch(fetchWelcome());
    console.log('HeroSection mounted');
  }, []);

  // const bounceUp = {
  //   hover: {
  //     y: -10,
  //     transition: {
  //       type: 'spring',
  //       stiffness: 500, // 탄성
  //       damping: 15, // 감쇠
  //       mass: 0.5, // 질량
  //     },
  //   },
  // };

  // 부모 컨테이너 애니메이션 설정
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // 자식 요소 순차적 실행 (0.05초 간격)
      },
    },
  };

  // 자식 요소 애니메이션 설정
  const bounceUp = {
    hidden: {
      y: 0,
      opacity: 0,
    },
    visible: {
      y: -10, // 위로 튀어오름
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 15,
        mass: 0.5,
      },
    },
  };

  return (
    <section className={`section ${styles.heroSection}`}>
      <AeroCard className={`${styles.heroCard}`}>
        <div className={styles.heroLeft}>
          <div className={styles.heroTitle}>
            {/* 메인 타이틀 (직업) */}
            <motion.h1
              className={styles.heroMainTitle}
              variants={containerVariants} // 부모에 컨테이너 애니메이션 설정
              initial="hidden"
              animate="visible"
            >
              {[...'환영합니다 ! 🤗   Welcome to my portfolio ✨'].map((char, index) => (
                <motion.span
                  key={index}
                  variants={bounceUp}
                  style={{ display: 'inline-block', marginRight: char === ' ' ? '8px' : '0' }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            {/* 서브 타이틀 (이름) */}
            <motion.h1
              className={styles.heroSubtitle}
            >
              {'Jung Dawoon'.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={bounceUp}
                  whileHover="hover"
                  style={{ display: 'inline-block', marginRight: char === ' ' ? '8px' : '0' }}
                >
                  {char}
                </motion.span>
              ))}
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
