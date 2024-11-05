// HeroSection.tsx
'use client';

import React, { useEffect } from 'react';

export default function HeroSection() {

  useEffect(() => {
    console.log('HeroSection mounted');



  }, []);

  return (
    <>
      <section className="section">
        <h1>HeroSection</h1>
      </section>
    </>
  );
}
