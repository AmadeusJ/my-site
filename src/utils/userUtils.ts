// 유틸리티 함수: 랜덤 userId 생성 및 localStorage 관리
export function generateRandomUserId(): string {
  // 랜덤 해시 형태의 userId 생성
  const timestamp = new Date().getTime();
  const random = Math.random().toString(36).substring(2);
  const userId = `user-${timestamp}-${random}`;
  return userId;
}

export function getOrCreateUserId(): string {
  // localStorage에서 userId 확인
  const existingUserId = localStorage.getItem(process.env.NEXT_PUBLIC_USER_ID!);
  if (existingUserId) {
    return existingUserId;
  }

  // userId가 없으면 생성 후 localStorage에 저장
  const newUserId = generateRandomUserId();
  localStorage.setItem(process.env.NEXT_PUBLIC_USER_ID!, newUserId);
  return newUserId;
}