'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Provider } from 'react-redux';
import { store } from '@/stores/store';
import HeroSection from '@/components/sections/HeroSection';
import ProjectSection from '@/components/sections/ProjectSection';
import TechSection from '@/components/sections/TechSection';
import CareerSection from '@/components/sections/CareerSection';
import ContactSection from '@/components/sections/ContactSection';
import { backgroundObserver } from '@/utils/backgroundObserver';


const BackgroundOverlay = ({ color }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: color,
      pointerEvents: 'none',
      zIndex: -1,
    }}
  />
);




export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const backgroundColors = [
    'var(--hero-bg-color)',
    'var(--project-bg-color)',
    'var(--tech-bg-color)',
    'var(--career-bg-color)',
    'var(--contact-bg-color)',
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionIndex = Math.floor(window.scrollY / window.innerHeight);
      setActiveSection(sectionIndex);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Provider store={store}>

      <AnimatePresence>
        <BackgroundOverlay key={activeSection} color={backgroundColors[activeSection]} />
      </AnimatePresence>

      {/* Full Page Animation */}
      <HeroSection />

      {/* Freeze Animation */}
      <ProjectSection />
      <TechSection />
      <CareerSection />
      <ContactSection />
    </Provider>
  );
}
