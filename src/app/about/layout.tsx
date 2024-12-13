// app/about/layout.tsx

import ProjectLayout from '@/app/projectLayout';
import React from 'react';
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProjectLayout>
      {children}
    </ProjectLayout>
  );
}
