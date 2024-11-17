'use client';

// 프로젝트 상세 페이지
// app/projects/[id]/page.tsx

import React from 'react';

import { useRouter } from 'next/navigation';

type ProjectPageProps = {
  params: { id: string }; // 동적 경로에서 `id` 값
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = params;

  return (
    <div>
      <h1>Project ID: {id}</h1>
      <p>This is the page for project with ID: {id}</p>
    </div>
  );
}