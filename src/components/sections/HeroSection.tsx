// HeroSection.tsx
'use client';

import React, { useEffect } from 'react';
import AeroCard from '../Aero/AeroCard';
import styles from './HeroSection.module.scss';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWelcome } from '@/stores/slices/commonSlice';
import { RootState, AppDispatch } from '@/stores/store';
import HuggingFaceIcon from '@/assets/emoji/HuggingFace.svg';
import TwoHandsHeartIcon from '@/assets/emoji/TwoHandsHeart.svg';

export default function HeroSection() {
  const dispatch = useDispatch<AppDispatch>();
  const { welcome, status, error } = useSelector((state: RootState) => state.common);

  useEffect(() => {
    dispatch(fetchWelcome());
    console.log('HeroSection mounted');
  }, []);

  const bounceUp = {
    hover: {
      y: -10,
      transition: {
        type: 'spring',
        stiffness: 500, // 탄성
        damping: 15, // 감쇠
        mass: 0.5, // 질량
      },
    },
  };

  return (
    <section className={`section ${styles.heroSection}`}>
      <AeroCard className={`${styles.heroCard}`}>
        <div className={styles.heroLeft}>
          <div className={styles.heroTitle}>
            {/* 메인 타이틀 (직업) */}
            <motion.h1 className={styles.heroMainTitle}>
              {[...'환영합니다 ! '].map((char, index) => (
                <motion.span
                  key={index}
                  variants={bounceUp}
                  whileHover="hover"
                  style={{ display: 'inline-block', marginRight: char === ' ' ? '8px' : '0' }}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                variants={bounceUp}
                whileHover="hover"
                style={{ display: 'inline-block', marginLeft: '8px', verticalAlign: 'middle' }}
              >
                <HuggingFaceIcon width="70" height="70" />
              </motion.span>
              {[...'   Welcome to my portfolio'].map((char, index) => (
                <motion.span
                  key={`welcome-${index}`}
                  variants={bounceUp}
                  whileHover="hover"
                  style={{ display: 'inline-block', marginRight: char === ' ' ? '8px' : '0' }}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                variants={bounceUp}
                whileHover="hover"
                style={{ display: 'inline-block', marginLeft: '8px', verticalAlign: 'middle' }}
              >
                <TwoHandsHeartIcon width="70" height="70" />
              </motion.span>
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
