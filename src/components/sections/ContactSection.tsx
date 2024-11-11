// ContactSection.tsx

import React from 'react';
import AeroCard from '../elements/AeroCard';
import styles from './ContactSection.module.scss';

export default function ContactSection() {
  return (
    <section className={`section ${styles.contactSection}`}>
      <div className={styles.contactChat}>
        <AeroCard className={styles.contactCard}>
          <h1>ContactSection</h1>
        </AeroCard>
      </div>
      <div className={styles.contactContents}>
        <h1>ContactForm</h1>
      </div>
    </section>
  );
}
