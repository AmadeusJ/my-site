// ProjectCard.tsx
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useInView } from 'framer-motion';
import AeroCard from '@/components/Aero/AeroCard';
import styles from './ProjectCard.module.scss';
import { Project } from '@/data/projects';
interface ProjectCardProps {
  project: Project;
  index: number;
}

const expandEffect = {
  hover: {
    scale: 1.2,
    zIndex: 100,
    transition: {
      type: 'spring',
      stiffness: 300, // 탄성
      damping: 15, // 감쇠
      mass: 0.7, // 질량
    },
  },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const router = useRouter();

  return (
    <motion.div
      className={styles.projectCardWrapper}
      ref={ref}
      key={`${project.id}-${index}`}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: 0.2 * index }}
      whileHover="hover"
      variants={expandEffect}
      onClick={() => router.push(`/projects/${project.id}`)}
    >
      <AeroCard className={styles.projectCard}>
        <div className={styles.projectHeader}>
          <img src={project.image} alt={project.name} />
        </div>
        <div className={styles.projectBody}>
          <h1>{project.name}</h1>
        </div>
      </AeroCard>
    </motion.div>
  );
};

export default ProjectCard;