// app/projects/page.tsx

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import BackgroundOverlay from '@/components/BackgroundOverlay';

import { projects, projectTopics } from '@/data/projects';

export default function ProjectsPage() {
  const projectIds = [1, 2, 3, 4, 5]; // 예제 데이터
  const backgroundColors = [
    'var(--hero-bg-color)',
    'var(--project-bg-color)',
    'var(--tech-bg-color)',
    'var(--career-bg-color)',
    'var(--contact-bg-color)',
  ];

  useEffect(() => {
  }, []);

  return (
    <div>
      <h1>Projects</h1>
    </div>
  );
}