import React from "react";

interface TechDescriptionProps {
  category: string | null; // 현재 Hover된 카테고리
}

const defaultDescription = "각 기술 영역 위에 커서를 올리면 더 자세한 설명을 볼 수 있습니다.";


const descriptions: Record<string, string> = {
  frontend: "Frontend involves creating interactive and visually appealing user interfaces using technologies like React, Vue, and TypeScript.",
  backend: "Backend focuses on server-side logic, databases, and APIs to support the functionality of web applications.",
  devops: "DevOps ensures smooth deployment, monitoring, and scaling of applications through CI/CD pipelines and cloud platforms.",
  database: "Database management involves storing, querying, and optimizing structured data to ensure reliability and performance.",
};

const TechDescription: React.FC<TechDescriptionProps> = ({ category }) => {
  // Fallback for no category
  const description = category ? descriptions[category] : defaultDescription;

  return (
    <div>
      <h3>{category || "기술 영역 소개"}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TechDescription;