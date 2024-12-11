// 프로젝트 페이지 레이아웃

import React from 'react';
import Header from '@/components/header/Header';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Header /> */}
      <main>{children}</main>
    </>
  );
}