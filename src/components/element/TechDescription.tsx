import React from "react";
import { motion } from "framer-motion";
import { skills } from '@/data/skills'; // skills 데이터 import

interface TechDescriptionProps {
  category: string | null; // 현재 Hover된 카테고리
}

// const defaultDescription = "각 기술 영역 위에 커서를 올리시면 더 자세한 설명을 보실 수 있습니다.\n\n커리어 시작은 Fullstack 개발자로 시작했습니다.\n대학원 논문을 혼자서 Fullstack 개발을 해야했던 터라, 요구 스택이 싱크가 높은 직무로 커리어를 시작했었습니다.\n\n학부과정에서 Linux와 Python을 배우며 개발공부를 시작했고 ";
const defaultDescription = `<strong>각 기술 영역 위에 커서를 올리시면 스택별 (주관적) 숙련도를 보실 수 있습니다.</strong>

커리어는 Fullstack 개발자로 시작해 Linux와 Python을 배우며 기본기를 다졌고, React와 Vue를 익히며 프론트엔드 중심으로 성장해왔습니다. 

현재는 Frontend 개발에 집중하고 있지만, 필요에 따라 Backend 작업(Python)을 병행하며 애플리케이션 개발 전반의 흐름을 이해하고 있습니다.

기술은 단순히 도구일 뿐, 이를 비즈니스 목표와 사용자 경험에 맞게 최적화하고 가치를 창출하는 것이 진정한 개발자의 역할이라 믿습니다.`;


const descriptions: Record<string, string> = {
  Frontend: "브라우저에 대한 깊은 이해를 기반으로 현대적 프레임워크를 사용해 비즈니스 요구사항들을 Optimized 된 방향으로 풀어내 가고자 합니다.",
  Backend: "Python 만큼은 자신 있습니다. 매우 고도화되고 심화된 기술 구현(?)이 아닌 이상, 혼자서도 서버단 개발이 가능합니다. 물론 다하려면 시간이 걸리지만..",
  "Server/Infra": "생명정보학(융합전공)을 전공했지만 학부때 부터 Linux를 배우며 서버 인프라의 기본기를 다졌고, 도커와 AWS를 다루는 업무를 경험했습니다. Grafana는 Web UI와 연동해본적이 있다 정도..",
  Tools: "Git flow, Jira, Figma, Notion 등의 협업툴을 주로 사용했고, CI/CD 툴은 주로 Jenkins를 사용해왔습니다.",
};

const TechDescription: React.FC<TechDescriptionProps> = ({ category }) => {
  // Fallback for no category
  const description = category ? descriptions[category] : defaultDescription;

  // 현재 카테고리에 맞는 기술 리스트 가져오기
  const skillDetails = skills.find((skill) => skill.category === category)?.details || [];

  return (
    <motion.div
      key={category || 'default'}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{
        padding: '10px',
        maxWidth: '600px',
      }}
    >
      <h3
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        {category || "기술 영역 소개"}
      </h3>
      <p
        style={{ marginBottom: '20px' }}
        dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br>') }}
      />
      {/* 기술 리스트 렌더링 */}
      <div>
        {skillDetails.map((skill) => (
          <div
            key={skill.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            {/* 아이콘 표시 */}
            <img
              src={skill.icon}
              alt={skill.name}
              style={{
                width: '24px',
                height: '24px',
                marginRight: '10px',
              }}
            />
            {/* 이름 및 바 차트 */}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '1rem', marginBottom: '4px', color: 'rgba(30, 60, 90, 1)' }}>
                {skill.name}
              </div>
              <div
                style={{
                  background: 'rgba(30, 100, 100, 0.3)', // 어두운 청록색 배경
                  borderRadius: '6px',
                  height: '12px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${(skill.level / 5) * 100}%`, // 기술 수준 비율
                    background: 'linear-gradient(90deg, rgba(120, 220, 255, 1), rgba(85, 200, 255, 1))', // 청록-블루 그라데이션
                    height: '100%',
                    borderRadius: '6px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // 바 차트에 약간의 음영 추가
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechDescription;