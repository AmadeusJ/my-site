import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      key={category || 'default'}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{
        padding: '10px',
      }}
    >
      <h3
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >{category || "기술 영역 소개"}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default TechDescription;