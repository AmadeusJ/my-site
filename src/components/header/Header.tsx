// 카테고리 헤더

import React from 'react';
import AeroCard from '../Aero/AeroCard';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.categoryHeader}>
      <AeroCard className={styles.categoryHeaderCard}>
        <button>Main</button>
        <button>Projects</button>
        <button>About Me</button>
      </AeroCard>
    </header>
  );
}