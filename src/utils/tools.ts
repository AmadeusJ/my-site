/**
 * Parses a numeric category and returns the corresponding category name.
 * @param categoryNum - The numeric category to parse.
 * @returns The corresponding category name or "All" if invalid.
 */
export function parseCategory(categoryNum: number): string {
  const categoryMap: { [key: number]: string } = {
    1: 'LLM Application',
    2: 'Platform / Service Dev',
    3: 'A11Y + UI/UX',
  };

  return categoryMap[categoryNum] || 'All';
}