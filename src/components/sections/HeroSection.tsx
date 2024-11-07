// HeroSection.tsx
'use client';

import React, { useEffect } from 'react';
import AeroCard from '../elements/AeroCard';
import styles from './HeroSection.module.css';

export default function HeroSection() {

  useEffect(() => {
    console.log('HeroSection mounted');



  }, []);

  return (
    <>
      <section className={`section ${styles.heroSection}`}>
        <AeroCard className={styles.heroCard}>
          <h1>HeroSection</h1>
        </AeroCard>
      </section>
    </>
  );
}
