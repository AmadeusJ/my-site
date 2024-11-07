// ProjectSection.tsx
'use client';

import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import styles from './ProjectSection.module.scss';

export default function ProjectSection() {
  return (
    <section className={`section ${styles.projectSection}`}>
      <motion.div>
        <h1>ProjectSection</h1>
      </motion.div>
    </section>
  );
}
