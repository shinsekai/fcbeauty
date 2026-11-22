# Build stage: compile TypeScript and bundle the site with Vite
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# Optional: pass with --build-arg VITE_METRICOOL_TRACKER_HASH=<hash>
ARG VITE_METRICOOL_TRACKER_HASH
RUN npm run build

# Serve stage: static dist/ behind nginx with SPA fallback
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
