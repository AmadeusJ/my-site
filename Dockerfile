# 빌드 단계
FROM node:22-alpine AS builder
WORKDIR /app

# 의존성 설치
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# 애플리케이션 빌드
COPY . .
RUN yarn build

# 실행 단계
FROM node:22-alpine AS runner
WORKDIR /app

# production 모드 설정
ENV NODE_ENV=production

# 의존성 복사 (필요한 파일만 복사)
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# 빌드 결과물 복사
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

# Next.js 실행
CMD ["yarn", "start"]

EXPOSE 3000