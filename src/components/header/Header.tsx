// 카테고리 헤더
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import AeroCard from '../Aero/AeroCard';
import styles from './Header.module.scss';
import { motion } from 'framer-motion';

export default function Header() {
  const router = useRouter();
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
    <header className={styles.categoryHeader}>
      <AeroCard className={styles.categoryHeaderCard}>
        <button onClick={() => router.push('/')}>
          <motion.img
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            width={60}
            height={60}
            variants={expandEffect}
            whileHover="hover"
            src="/icons/home-button2.svg"
            alt="Home"
          />
        </button>
        <button onClick={() => router.push('/projects')}>
          <motion.img
            variants={expandEffect}
            whileHover="hover"
            width={60}
            height={60}
            src="/icons/keynote.svg"
            alt="Projects"
          />
        </button>
        <button>
          <motion.img
            variants={expandEffect}
            whileHover="hover"
            width={65}
            height={65}
            src="/icons/joystick2.svg"
            alt="Contact"
          />
        </button>
        <button onClick={() => router.push('/about')}>
          <motion.img
            variants={expandEffect}
            whileHover="hover"
            width={60}
            height={60}
            src="/icons/id-card.svg"
            alt="About"
          />
        </button>
      </AeroCard>
    </header>
  );
}