// CareerSection.tsx
import CareerTimeline from '../element/CareerTimeline';

import React from 'react';
import AeroCard from '../Aero/AeroCard';
import { motion } from 'framer-motion';
import styles from './CareerSection.module.scss';

export default function CareerSection() {
  return (
    <section className={`section ${styles.careerSection}`}>
      <AeroCard className={styles.careerCard}>
        <div className={styles.careerHeader}>
        </div>
        <div className={styles.careerBody}>
          <motion.div>
            <CareerTimeline />
          </motion.div>
        </div>
      </AeroCard>
    </section>
  );
}
