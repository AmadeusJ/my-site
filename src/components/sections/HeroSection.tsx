// HeroSection.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import AeroCard from '../Aero/AeroCard';
import styles from './HeroSection.module.scss';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { postWelcome, setIsNewVisitor } from '@/stores/slices/commonSlice';
import Lottie from 'lottie-react';
import { RootState, AppDispatch } from '@/stores/store';
import animationProject from '@/assets/animations/launch.json';
import animationTech from '@/assets/animations/backend.json';
import animationCareer from '@/assets/animations/career-ladder.json';
import animationContact from '@/assets/animations/paper-plane.json';
import { Tooltip } from "@nextui-org/react";
import { getUserId } from '@/utils/userUtils';
import backgroundAnimation from '@/assets/animations/Animation_4.json';
import { useInView } from 'react-intersection-observer';


export default function HeroSection() {
  const dispatch = useDispatch<AppDispatch>();
  const projectRef = useRef(null);
  const techRef = useRef(null);
  const careerRef = useRef(null);
  const contactRef = useRef(null);

  // 배경 애니메이션 재생 조건 설정
  const { ref, inView } = useInView({ threshold: 0.1 });
  const backgroundRef = useRef(null);

  useEffect(() => {
    const { userId, isNew } = getUserId();
    dispatch(setIsNewVisitor(isNew));
    dispatch(postWelcome({ user_id: userId, isNewVisitor: isNew }));
    console.log('HeroSection mounted');
  }, [dispatch]);

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

  // IntersectionObserver를 사용하여 backgroundAnimation 조건부 재생 설정
  useEffect(() => {
    if (inView) {
      backgroundRef.current?.play();
    } else {
      backgroundRef.current?.stop();
    }
  }, [inView]);

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
            <motion.h1>
              {'좋은 하루되세요!'}
            </motion.h1>
          </div>
          <div className={styles.heroContent}>
            <motion.p
              className={styles.heroText}
            >
              이 포트폴리오에서는 제가 경험한 프로젝트와 사용 기술, 경력 이야기를 만나보실 수 있습니다.
            </motion.p>
            <motion.p>
              아래에 Projects, Tech, Career, 그리고 Contact 섹션이 준비되어있습니다! 천천히 둘러봐주세요! 감사합니다!
            </motion.p>
          </div>
        </div>
        <div className={styles.heroRight}>
          <Tooltip content={
            <div className='px-1 py-2'>
              <div className='text-lg font-bold'>Projects</div>
              <div className='text-sm'>저가 진행한 다양한 프로젝트를 소개하는 공간입니다.</div>
            </div>
          }
            showArrow
            color="primary"
            placement="bottom"
          >
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
          </Tooltip>

          <Tooltip content={
            <div className='px-1 py-2'>
              <div className='text-lg font-bold'>Skills</div>
              <div className='text-sm'>저의 기술 스택을 소개하는 공간입니다.</div>
            </div>
          }
            showArrow
            color="primary"
            placement="bottom"
          >
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
          </Tooltip>

          <Tooltip content={
            <div className='px-1 py-2'>
              <div className='text-lg font-bold'>Career</div>
              <div className='text-sm'>저의 경력을 소개하는 공간입니다.</div>
            </div>
          }
            showArrow
            color="primary"
            placement="bottom"
          >
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
          </Tooltip>

          <Tooltip content={
            <div className='px-1 py-2'>
              <div className='text-lg font-bold'>Contact</div>
              <div className='text-sm'>저와 소통할 수 있는 공간입니다.</div>
            </div>
          }
            showArrow
            color="primary"
            placement="bottom"
          >
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
          </Tooltip>
        </div>
      </AeroCard>
      <div className={styles.backgroundAnimation} ref={ref}>
        <Lottie
          lottieRef={backgroundRef}
          animationData={backgroundAnimation}
          loop={true}
          autoplay={inView}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </section>
  );
}
