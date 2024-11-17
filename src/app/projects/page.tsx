// app/projects/page.tsx

import React from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
  const projectIds = [1, 2, 3, 4, 5]; // 예제 데이터

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projectIds.map((id) => (
          <li key={id}>
            <Link href={`/projects/${id}`}>Project {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}