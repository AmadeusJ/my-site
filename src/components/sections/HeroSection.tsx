// HeroSection.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import AeroCard from '../Aero/AeroCard';
import styles from './HeroSection.module.scss';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWelcome } from '@/stores/slices/commonSlice';
import Lottie from 'lottie-react';
import { RootState, AppDispatch } from '@/stores/store';
import animationProject from '@/assets/animations/project.json';
import animationTech from '@/assets/animations/tech.json';
import animationCareer from '@/assets/animations/career.json';
import animationContact from '@/assets/animations/contact.json';
import AeroTooltip from '../Tooltip/AeroTooltip';

export default function HeroSection() {
  const dispatch = useDispatch<AppDispatch>();
  const projectRef = useRef(null);
  const techRef = useRef(null);
  const careerRef = useRef(null);
  const contactRef = useRef(null);

  const { welcome, status, error } = useSelector((state: RootState) => state.common);

  useEffect(() => {
    dispatch(fetchWelcome());
    console.log('HeroSection mounted');
  }, []);

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


  // HeroIcon 확대 애니메이션
  const expandEffect = {
    hover: {
      scale: 1.3,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
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
              {'방문자님 반갑습니다! 찾아주셔서 감사합니다 : )'.split('').map((char, index) => (
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
            <motion.p
              className={styles.heroText}
            >
              이곳은 저의 Portfolio 사이트로, 제가 진행한 다양한 프로젝트를 소개하는 공간입니다. 앞으로도 새로운 프로젝트들이 지속적으로 추가될 예정이니 많은 관심 부탁드립니다. 방문해 주셔서 감사합니다!
            </motion.p>
          </div>
        </div>
        <div className={styles.heroRight}>
          <motion.div
            className={styles.heroIconContainer}
            variants={expandEffect}
            whileHover="hover"
          >
            <AeroCard className={`${styles.heroIconCard} ${styles.tooltipContainer}`}>
              <Lottie
                lottieRef={projectRef}
                animationData={animationProject}
                loop={true}
                autoplay={false}
                style={{ width: '100%', height: '100%' }}
                onMouseEnter={() => projectRef.current?.play()}
                onMouseLeave={() => projectRef.current?.stop()}
              />
            </AeroCard>
          </motion.div>

          <motion.div
            className={styles.heroIconContainer}
            variants={expandEffect}
            whileHover="hover"
          >
            <AeroCard className={styles.heroIconCard}>
              <Lottie
                lottieRef={techRef}
                animationData={animationTech}
                loop={true}
                autoplay={false}
                style={{ width: '100%', height: '100%' }}
                onMouseEnter={() => techRef.current?.play()}
                onMouseLeave={() => techRef.current?.stop()}
              />
            </AeroCard>
          </motion.div>
          <motion.div
            className={styles.heroIconContainer}
            variants={expandEffect}
            whileHover="hover"
          >
            <AeroCard className={styles.heroIconCard}>
              <Lottie
                lottieRef={careerRef}
                animationData={animationCareer}
                loop={true}
                autoplay={false}
                style={{ width: '100%', height: '100%' }}
                onMouseEnter={() => careerRef.current?.play()}
                onMouseLeave={() => careerRef.current?.stop()}
              />
            </AeroCard>
          </motion.div>
          <motion.div
            className={styles.heroIconContainer}
            variants={expandEffect}
            whileHover="hover"
          >
            <AeroCard className={styles.heroIconCard}>
              <Lottie
                lottieRef={contactRef}
                animationData={animationContact}
                loop={true}
                autoplay={false}
                style={{ width: '100%', height: '100%' }}
                onMouseEnter={() => contactRef.current?.play()}
                onMouseLeave={() => contactRef.current?.stop()}
              />
            </AeroCard>
          </motion.div>
        </div>
      </AeroCard>
    </section>
  );
}
