# Используем официальный образ Node.js
FROM node:22-alpine AS builder

# Устанавливаем pnpm глобально
RUN corepack enable && corepack prepare pnpm@latest --activate

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Устанавливаем зависимости
RUN pnpm install --frozen-lockfile

# Копируем все файлы проекта
COPY . .

# Собираем приложение
RUN pnpm run build

# Используем легковесный образ для production
FROM node:22-alpine AS runner

# Устанавливаем pnpm глобально (для runner)
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Копируем только необходимые файлы из builder
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Указываем порт (по умолчанию Next.js использует 3000)
EXPOSE 3000

# Команда для запуска приложения
CMD ["pnpm", "start"]