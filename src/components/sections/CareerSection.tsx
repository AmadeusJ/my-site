// CareerSection.tsx

import React from 'react';
import AeroCard from '../elements/AeroCard';
import styles from './CareerSection.module.scss';

export default function CareerSection() {
  return (
    <section className={`section ${styles.careerSection}`}>
      <AeroCard className={styles.careerCard}>
        <h1>CareerSection</h1>
        <h1>CareerSection</h1>
        <h1>CareerSection</h1>
        <h1>CareerSection</h1>
        <h1>CareerSection</h1>
        <h1>CareerSection</h1>
      </AeroCard>
    </section>
  );
}
