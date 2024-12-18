# 빌드 단계
FROM node:22-alpine AS builder
WORKDIR /app

ENV NODE_ENV=production

# 의존성 설치
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# 애플리케이션 빌드 및 TypeScript 파일 변환
COPY . . 
RUN yarn build
RUN yarn tsc next.config.ts --skipLibCheck --esModuleInterop --resolveJsonModule

# 실행 단계
FROM node:22-alpine AS runner
WORKDIR /app

# production 모드 설정
ENV NODE_ENV=production

# 의존성 설치 (프로덕션 전용)
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# 빌드 결과물 복사
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./ 

# Next.js 실행
EXPOSE 3000
CMD ["yarn", "start"]