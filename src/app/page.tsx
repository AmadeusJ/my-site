'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import ProjectSection from '@/components/sections/ProjectSection';
import TechSection from '@/components/sections/TechSection';
import CareerSection from '@/components/sections/CareerSection';
import ContactSection from '@/components/sections/ContactSection';
import BackgroundOverlay from '@/components/BackgroundOverlay';


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
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // 스크롤 위치에 따른 섹션 인덱스 계산
      // 30% 진입 지점을 계산하기 위해 0.3을 곱합니다
      const threshold = windowHeight * 0.3;
      // 현재 스크롤 위치에서 threshold를 고려하여 섹션 인덱스를 계산
      const sectionIndex = Math.floor((scrollPosition + threshold) / windowHeight);

      if (sectionIndex !== activeSection) {
        setActiveSection(sectionIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <>
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
    </>

  );
}
