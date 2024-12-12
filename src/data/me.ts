export interface Me {
  name: string; // 이름
  title: string; // 직업/포지션
  introduction: string; // 간단한 자기소개
  currentCompany: string; // 현재 직장
  currentPosition: string; // 현재 직책
  philosophy: string; // 기술 철학
  hobbies: string[]; // 취미
  goals: string; // 목표 및 비전
  image?: string; // 프로필 이미지 경로 (옵션)
  careerStartDate: string; // 경력 시작일
}

export const me: Me = {
  name: "정다운 ( Jung Dawoon )",
  title: "Frontend Developer",
  introduction: `
    안녕하세요! 사용자 경험 중심의 UI 개발을 좋아하는 프론트엔드 개발자입니다. 
    더 나은 사용자 경험을 위해 기술을 활용하는 방법을 탐구하는 것을 즐깁니다.
  `,
  currentCompany: "(주) 마인즈앤컴퍼니", // 현재 직장
  currentPosition: "팀장 (Case Team Leader)", // 현재 직책
  careerStartDate: "2019.03", // 경력 시작일
  philosophy: `
    기술은 단순한 도구 이상이며, 사용자와 비즈니스 가치를 연결하는 다리라고 생각합니다. 
    팀원들과 열린 소통을 중요하게 여기며, 효율적이고 창의적인 협업을 통해 최고의 결과를 내는 것을 목표로 합니다.
  `,
  hobbies: ["독서", "여행", "사이드 프로젝트 개발"],
  goals: `
    사용자와 비즈니스에 가치를 더하는 개발자가 되기 위해 끊임없이 성장하고 있습니다. 
    앞으로는 프론트엔드뿐만 아니라, 전체적인 서비스 설계와 사용성을 아우르는 기술자로 발전하고 싶습니다.
  `,
  image: "/photo/me2.png",
};