// backgroundObserver.ts

const changeBackgroundColor = (variableName: string) => {
  const rootStyles = getComputedStyle(document.documentElement);
  const color = rootStyles.getPropertyValue(variableName).trim();
  console.log(color);
  document.body.style.transition = 'background 1.5s cubic-bezier(0.97, 0.03, 0.12, 1)'; // Custom easing for smoothness
  document.body.style.background = color;
  console.log('background-color: ', document.body.style);

};

export const backgroundObserver = () => {
  const sections = document.querySelectorAll<HTMLElement>('.section');
  const oberserObtions = {
    threshold: 0.5, // 50% 이상 영역에 진입하면 이벤트 발생
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        const sectionClass = entry.target.classList[1];
        const baseClassName = sectionClass?.split('__').pop() || ''; // '__' 이후의 부분을 추출
        const cleanedClassName = baseClassName.replace(/Section$/, ''); // 'Section' 제거
        const variableName = `--${cleanedClassName.replace(/-/g, '_')}-bg-color`;
        console.log(entry.target.classList, cleanedClassName, variableName);
        changeBackgroundColor(variableName);
      }
    });
  }, oberserObtions);

  // 각 섹션에 관찰자 추가
  sections.forEach((section) => {
    observer.observe(section);
  });
};
