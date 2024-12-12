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
    단순한 기술 구현의 개발자에서, 사용자 경험 중심의 UI 개발을 좋아하게 되어가는(?) 프론트엔드 개발자입니다.<br/> 
    요즘엔 더 나은 사용자 경험을 위해 기술을 활용하는 방법을 탐구하는 것을 즐기고 있습니다.<br/><br/>
    대학원에서 Python과 Linux를 활용한 연구를 시작으로 개발 공부를 시작했습니다.<br/>
    첫 커리어는 풀스택으로 시작했으나, 두번째 회사에서부터는 프론트엔드 개발자로 포커싱을 맞춰왔습니다.<br/><br/>
    웹 개발을 메인으로 해오고 있고, 플랫폼 개발/운영과 LLM(AI) 웹 솔루션 관련 프로젝트들을 주로 수행해왔습니다.<br/>
    풀스택으로 커리어를 시작했었기에, 서버 개발도 필요시 겸업이 가능합니다.
  `,
  currentCompany: "(주) 마인즈앤컴퍼니", // 현재 직장
  currentPosition: "팀장 (Case Team Leader)", // 현재 직책
  careerStartDate: "2019.03", // 경력 시작일
  philosophy: `
    메인페이지에 할 줄 아는 여러 기술 스택들을 적어놓긴 했지만...<br/>
    프론트엔드 개발자로서 살아오면서 느낀 것은 기술 스택은 유행을 타기도 하는 도구 이며 (물론 유행을 타는 이유가 다 있지만),<br/> 
    기술 스택 자체가 아니라 기술 스택을 활용하는 방법, 즉 설계가 사업 가치를 만든다고 생각합니다.<br/><br/>
    특히 프론트엔드 개발자에게는 UI/UX 설계, FE 프로젝트 아키텍처가 중요하다고 생각합니다.<br/>
    물론 기술력과 퍼포먼스가 중요하지만 결국 
  `,
  hobbies: ["독서", "여행", "사이드 프로젝트 개발"],
  goals: `
    사용자와 비즈니스에 가치를 더하는 개발자가 되기 위해 끊임없이 성장하고 있습니다. 
    앞으로는 프론트엔드뿐만 아니라, 전체적인 서비스 설계와 사용성을 아우르는 기술자로 발전하고 싶습니다.
  `,
  image: "/photo/me2.png",
};