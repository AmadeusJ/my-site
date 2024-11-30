// TechSection.tsx

import React, { useState } from 'react';
import AeroCard from '../Aero/AeroCard';
import { motion } from 'framer-motion';
import TechDescription from '../element/TechDescription';

import styles from './TechSection.module.scss';
import { skills } from '@/data/skills';

export default function TechSection() {

  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const expandEffect = {
    hover: {
      scale: 1.3,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const wobbleEffect = {
    hover: {
      rotate: [0, 2, -2, 2, -2, 1, -1, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className={`section ${styles.techSection}`}>
      <AeroCard className={styles.techContainer}>
        <div className={styles.techSkills}>
          {skills.map((skill, index) => (
            <motion.div
              className={styles.techCategory}
              key={skill.category}
              variants={expandEffect}
              whileHover="hover"
              onHoverStart={() => setHoveredCategory(skill.category)}
              onHoverEnd={() => setHoveredCategory(null)}
              style={{
                position: 'relative',
                zIndex: 2,
              }}
            >
              <AeroCard className={styles.techCategoryCard}>
                {skill.details.map((detail) => (
                  <motion.img
                    className={styles.techIcon}
                    key={detail.name}
                    src={detail.icon}
                    alt={detail.name}
                    variants={wobbleEffect}
                    animate={hoveredCategory === skill.category ? 'hover' : 'rest'}
                    style={{
                      display: 'block',
                      margin: '0 auto',
                    }}
                  />
                ))}
              </AeroCard>
            </motion.div>
          ))}
        </div>
        <div className={styles.techDescription}>
          <AeroCard className={styles.techDescriptionCard}>
            <TechDescription category={hoveredCategory} />
          </AeroCard>
        </div>
      </AeroCard>
    </section>
  );
}
