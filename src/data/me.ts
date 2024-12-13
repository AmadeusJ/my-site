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
    단순히 기술을 구현하는 개발자를 넘어, <strong>사용자 경험 중심의 UI 개발</strong>에 매력을 느끼고 성장해 나가는 프론트엔드 개발자입니다.<br/> 
    요즘에는 <strong>더 나은 사용자 경험</strong>을 창출하기 위해 기술을 활용하는 다양한 방법을 탐구하는 데 즐거움을 느끼고 있습니다.<br/><br/>
    대학원에서 <strong>Python</strong>과 <strong>Linux</strong>를 활용한 연구를 시작으로 개발 공부를 시작했으며,<br/>
    첫 커리어는 <strong>풀스택 개발자</strong>로 시작했습니다. 이후 두 번째 직장부터 <strong>프론트엔드 개발</strong>에 집중하여 전문성을 키워왔습니다.<br/><br/>
    현재는 주로 <strong>웹 개발</strong>을 중심으로 <strong>플랫폼 개발 및 운영</strong>, <strong>LLM(AI) 웹 솔루션</strong> 관련 프로젝트를 수행하고 있습니다.<br/>
    <strong>풀스택 경험</strong>을 바탕으로 필요할 경우 <strong>서버 개발</strong>도 수행할 수 있는 역량을 보유하고 있습니다.<br/>
  `,
  currentCompany: "(주) 마인즈앤컴퍼니", // 현재 직장
  currentPosition: "팀장 (Case Team Leader)", // 현재 직책
  careerStartDate: "2019.03", // 경력 시작일
  philosophy: `
    메인 페이지에 적힌 기술 스택들은 제가 활용할 수 있는 <strong>도구</strong>에 불과합니다.<br/>
    프론트엔드 개발자로 일하면서 느낀 점은, <strong>기술 스택</strong>은 유행에 따라 변하기 마련이고,<br/> 
    중요한 것은 특정 기술 자체가 아니라, 그 <strong>기술을 활용하는 방법과 설계 역량</strong>이라는 점입니다.<br/><br/>
    특히 프론트엔드 개발자에게는 <strong>UI/UX 설계</strong>와 <strong>프론트엔드 프로젝트의 아키텍처 설계</strong>가 핵심이라고 생각합니다.<br/>
    <strong>기술력과 성능</strong> 또한 중요하지만, 결국 <strong>사용자가 느끼는 경험</strong>이 서비스 경쟁력을 좌우하기 때문입니다.<br/><br/>
    프론트엔드 개발자는 <strong>사용자와 가장 가까운 영역</strong>을 다루는 개발자로서,<br/>
    'Frontend Developer'라는 이름 그대로 <strong>사용자 경험의 품질</strong>을 좌우하는 역할을 한다고 믿습니다.<br/>
    그래서 저는 <strong>사용자 경험을 최우선</strong>으로 생각하며, <strong>기술로 이를 실현</strong>하는 것을 목표로 하고 있습니다.
  `,
  goals: `
    단순히 <strong>웹페이지의 기능과 화면</strong>을 개발하는 것을 넘어,<br/>
    애플리케이션의 <strong>가치를 극대화</strong>하고 <strong>상품성을 끌어올릴 수 있는 감각 있는 개발자</strong>가 되고 싶습니다.<br/><br/>
    프론트엔드를 넘어 <strong>전체적인 서비스 설계와 사용성</strong>을 통합적으로 고민하며,<br/>
    <strong>사용자 중심의 서비스를 설계</strong>할 수 있는 <strong>기술 전문가</strong>로 발전하는 것이 목표입니다.
  `,
  image: "/photo/me2.png",
};