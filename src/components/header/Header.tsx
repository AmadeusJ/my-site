// 카테고리 헤더
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import AeroCard from '../Aero/AeroCard';
import styles from './Header.module.scss';

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.categoryHeader}>
      <AeroCard className={styles.categoryHeaderCard}>
        <button onClick={() => router.push('/')}>Main</button>
        <button onClick={() => router.push('/projects')}>Projects</button>
        <button onClick={() => router.push('/about')}>About Me</button>
      </AeroCard>
    </header>
  );
}