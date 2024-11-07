'use client';

import React, { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ProjectSection from '@/components/sections/ProjectSection';
import TechSection from '@/components/sections/TechSection';
import CareerSection from '@/components/sections/CareerSection';
import ContactSection from '@/components/sections/ContactSection';
import { backgroundObserver } from '@/utils/backgroundObserver';

export default function Home() {
  useEffect(() => {
    // 배경색 전환 효과
    backgroundObserver();
  }, []);

  return (
    <>
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
