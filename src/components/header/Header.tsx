// 카테고리 헤더
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import AeroCard from '../Aero/AeroCard';
import styles from './Header.module.scss';
import { motion } from 'framer-motion';
import { Tooltip } from "@nextui-org/react";


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
        <Tooltip content={
          <div className='px-1 py-2'>
            <div className='text-lg font-bold'>Home</div>
            <div className='text-sm'>메인페이지로 이동합니다.</div>
          </div>
        }
          showArrow
          color="primary"
          placement="bottom"
        >
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
        </Tooltip>
        <Tooltip content={
          <div className='px-1 py-2'>
            <div className='text-lg font-bold'>Projects</div>
            <div className='text-sm'>커리어 프로젝트를 소개하는 공간입니다.</div>
          </div>
        }
          showArrow
          color="primary"
          placement="bottom"
        >
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
        </Tooltip>
        <Tooltip content={
          <div className='px-1 py-2'>
            <div className='text-lg font-bold'>Toy Projects</div>
            <div className='text-sm'>저의 개인 프로젝트를 소개하는 공간입니다.</div>
          </div>
        }
          showArrow
          color="primary"
          placement="bottom"
        >
          <button onClick={() => router.push('/toyprojects')}>
            <motion.img
              variants={expandEffect}
              whileHover="hover"
              width={65}
              height={65}
              src="/icons/joystick2.svg"
              alt="Toy Projects"
            />
          </button>
        </Tooltip>
        <Tooltip content={
          <div className='px-1 py-2'>
            <div className='text-lg font-bold'>About</div>
            <div className='text-sm'>저의 소개를 볼 수 있는 공간입니다.</div>
          </div>
        }
          showArrow
          color="primary"
          placement="bottom"
        >
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
        </Tooltip>
      </AeroCard>
    </header>
  );
}