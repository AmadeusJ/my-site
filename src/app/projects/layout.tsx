// 프로젝트 페이지 레이아웃

import React from 'react';

// app/projects/layout.tsx
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h1>Projects Section</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}