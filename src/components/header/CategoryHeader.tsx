// 카테고리 헤더

import React from 'react';
import AeroCard from '../Aero/AeroCard';
import styles from './CategoryHeader.module.scss';

export default function CategoryHeader() {
  return (
    <header className={styles.categoryHeader}>
      <AeroCard className={styles.categoryHeaderCard}>
        <button>all</button>
        <button>projects</button>
        <button>career</button>
        <button>contact</button>
      </AeroCard>
    </header>
  );
}