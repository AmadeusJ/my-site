// backgroundObserver.ts

const changeBackgroundColor = (variableName: string) => {
  const rootStyles = getComputedStyle(document.documentElement);
  const color = rootStyles.getPropertyValue(variableName).trim();
  document.body.style.transition = 'background 1.5s cubic-bezier(0.97, 0.03, 0.12, 1)'; // Custom easing for smoothness
  document.body.style.background = color;

};

export const backgroundObserver = () => {
  // 초기에 한 번만 transition 설정
  document.body.style.transition = 'background 1.5s cubic-bezier(0.97, 0.03, 0.12, 1)';

  const sections = document.querySelectorAll<HTMLElement>('.section');
  const observerOptions = {
    threshold: 0.5,
    // 성능 최적화를 위한 rootMargin 추가
    rootMargin: '50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionClass = entry.target.classList[1];
        const match = sectionClass?.match(/[_]*([a-zA-Z]+)Section[_]*/);
        const cleanedClassName = match ? match[1].toLowerCase() : '';
        const variableName = `--${cleanedClassName.replace(/-/g, '_')}-bg-color`;
        changeBackgroundColor(variableName);
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
};
