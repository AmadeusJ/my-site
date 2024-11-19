// app/about/layout.tsx

import React from 'react';
import Header from '@/components/header/Header';
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
