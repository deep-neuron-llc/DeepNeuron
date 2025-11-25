# --- Build stage ---
FROM node:20-bookworm-slim AS build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

# --- Runtime stage ---
FROM node:20-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production \
    HOSTNAME=0.0.0.0 \
    PORT=3000

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

EXPOSE 3000

# makes the server listen inside the container on port 3000
CMD ["npx","next","start"]

    