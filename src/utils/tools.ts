/**
 * Parses a numeric category and returns the corresponding category name.
 * @param categoryNum - The numeric category to parse.
 * @returns The corresponding category name or "All" if invalid.
 */
export function parseCategory(categoryNum: number): string {
  const categoryMap: { [key: number]: string } = {
    1: 'Web / LLM Application',
    2: 'Platform / Service Dev',
    3: 'A11Y + UI/UX',
  };

  return categoryMap[categoryNum] || 'All';
}

/**
 * Calculates the total experience in years and months based on the start date.
 * @param startDate - The start date in the format 'YYYY.MM'.
 * @returns The total experience in the format 'X년 Y개월'.
 */
export const calculateExperience = (startDate: string): string => {
  const start = new Date(startDate);
  const now = new Date();

  const years = now.getFullYear() - start.getFullYear();
  const months = now.getMonth() - start.getMonth();

  let totalYears = years;
  let totalMonths = months;

  // 만약 월 단위가 음수라면 1년 차감하고 월 수를 보정
  if (months < 0) {
    totalYears -= 1;
    totalMonths += 12;
  }

  // 결과 문자열 반환
  return totalYears > 0
    ? `${totalYears}년 ${totalMonths}개월`
    : `${totalMonths}개월`;
};
