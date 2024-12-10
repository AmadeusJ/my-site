// ProjectCard.tsx
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useInView } from 'framer-motion';
import AeroCard from '@/components/Aero/AeroCard';
import styles from './ProjectCard.module.scss';
import { Project } from '@/data/projects';
import { ToyProject } from '@/data/toyprojects';
import Lottie from 'lottie-react';
import { Chip } from "@nextui-org/chip";

interface ProjectCardProps {
  project: Project | ToyProject;
  index: number;
  prefix: string;
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
    transitionEnd: {
      zIndex: 2, // 애니메이션 종료 후 z-index 원상복귀 (필요시)
    },
  },
  rest: {
    scale: 1,
    zIndex: 2,
    transition: {
      type: 'tween',
      duration: 0.2,
      // 애니메이션 복귀 시 delay 없음
    },
  },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, prefix }) => {
  const ref = useRef(null);
  const lottieRef = useRef(null);
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
      onClick={() => router.push(`/${prefix}/${project.id}`)}
      onMouseEnter={() => lottieRef.current?.play()}
      onMouseLeave={() => lottieRef.current?.stop()}
    >
      {
        !project.isDone && (
          <Chip className={styles.projectChip} variant='bordered' color='secondary'>In Progress</Chip>
        )
      }
      <AeroCard className={styles.projectCard}>
        <div className={styles.projectHeader}>
          {
            project.animationData && (
              <Lottie
                lottieRef={lottieRef}
                className={styles.lottieAnimation}
                animationData={project.animationData}
                loop={true}
                autoplay={false}
                style={{
                  width: `${project.svg?.width}px`,
                  height: `${project.svg?.height}px`,
                }}
              />
            ) || (
              <img src={project.image} alt={project.name} />
            )
          }
        </div>
        <div className={styles.projectBody}>
          <h1>{project.name}</h1>
          <div className={styles.projectPurpose}>
            {project.purpose.map((purpose, index) => (
              <div key={index}>{purpose}</div>
            ))}
          </div>
          {
            project.tags && (
              <div className={styles.projectTags}>
                {project.tags.map((tag, index) => (
                  <Chip key={`${tag.id}-${index}`} variant='flat' color={tag.color}>{tag.type}</Chip>
                ))}
              </div>
            )
          }
        </div>
      </AeroCard>
    </motion.div>
  );
};

export default ProjectCard;