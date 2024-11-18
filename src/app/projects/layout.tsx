// 프로젝트 페이지 레이아웃

import React from 'react';
import CategoryHeader from '@/components/header/CategoryHeader';

// app/projects/layout.tsx
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CategoryHeader />
      <main>{children}</main>
    </>
  );
}