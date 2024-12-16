# 베이스 이미지 선택
FROM node:22-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 설치
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# 애플리케이션 소스 복사
COPY . .

# 빌드
RUN npm run build

# Next.js 애플리케이션 실행
CMD ["npm", "start"]