import React from 'react';
import styles from './ResumeButton.module.scss';

export default function ResumeButton() {
  return (
    <div className={styles.resumeButton}>
      <button>Download Resume</button>
    </div>
  );
}
