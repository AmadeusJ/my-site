// TechSection.tsx

import React from 'react';
import AeroCard from '../elements/AeroCard';
import styles from './TechSection.module.scss';
import { skills } from '@/data/skills';

export default function TechSection() {
  return (
    <section className={`section ${styles.techSection}`}>
      <div className={styles.techContainer}>
        {skills.map((skill) => (
          <AeroCard key={skill.category} className={styles.techCategoryCard}>
            <h3>{skill.category}</h3>
          </AeroCard>
        ))}
      </div>
    </section>
  );
}
