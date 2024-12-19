// 유틸리티 함수: 랜덤 userId 생성 및 localStorage 관리
export function generateRandomUserId(): string {
  // 안전한 랜덤 해시 문자열 생성 (32자)
  const randomHash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return `user-${randomHash}`;
}

export function isWithin24Hours(createdDate: string): boolean {
  const now = new Date().getTime();
  const createdTime = new Date(createdDate).getTime();
  const hoursElapsed = (now - createdTime) / (1000 * 60 * 60); // 밀리초 -> 시간 변환
  return hoursElapsed < 24; // 24시간 이내인지 확인
}

export function getOrCreateUserId(): { userId: string; isNew: boolean } {
  const userIdKey = process.env.NEXT_PUBLIC_USER_ID!;
  const createdDateKey = process.env.NEXT_PUBLIC_USER_CREATED_DATE!;
  const isNewKey = process.env.NEXT_PUBLIC_USER_IS_NEW!;
  // localStorage에서 userId와 createdDate 확인
  const existingUserId = localStorage.getItem(userIdKey);
  const existingCreatedDate = localStorage.getItem(createdDateKey);
  const existingIsNew = localStorage.getItem(isNewKey);
  // 24시간 이내인지 확인
  if (existingUserId && existingCreatedDate && isWithin24Hours(existingCreatedDate)) {
    localStorage.setItem(isNewKey, 'false');
    return { userId: existingUserId, isNew: false }; // 24시간 이내라면 기존 ID 반환
  }

  // userId가 없거나 24시간이 지난 경우 새로 생성
  const newUserId = generateRandomUserId();
  const newCreatedDate = new Date().toISOString();

  // localStorage에 새 userId와 생성일 저장
  localStorage.setItem(userIdKey, newUserId);
  localStorage.setItem(createdDateKey, newCreatedDate);
  localStorage.setItem(isNewKey, 'true');
  // 처음실행 확인 콘솔
  return { userId: newUserId, isNew: true }; // 새로 생성된 ID 반환
}

export function getUserId(): { userId: string; isNew: boolean } {

  const userIdKey = process.env.NEXT_PUBLIC_USER_ID!;
  const existingUserId = localStorage.getItem(userIdKey);
  const existingIsNewKey = process.env.NEXT_PUBLIC_USER_IS_NEW!;
  const existingIsNew = localStorage.getItem(existingIsNewKey);

  return { userId: existingUserId || '', isNew: existingIsNew === 'true' ? true : false };
}
