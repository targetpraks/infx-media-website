FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine AS production
COPY --from=builder /app/out /usr/share/nginx/html
COPY --from=builder /app/public /usr/share/nginx/html/public

# Security headers for static export (since next.config.ts headers() is ignored in output: 'export')
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
        add_header Content-Security-Policy "default-src '\''self'\''; script-src '\''self'\'' '\''unsafe-inline'\'' '\''unsafe-eval'\'' https://fonts.googleapis.com https://fonts.gstatic.com https://cdn.coverr.co; style-src '\''self'\'' '\''unsafe-inline'\'' https://fonts.googleapis.com; font-src '\''self'\'' https://fonts.gstatic.com; img-src '\''self'\'' data: blob: https://infxmedia.xyz https://cdn.coverr.co; media-src '\''self'\'' https://cdn.coverr.co; connect-src '\''self'\'' https://api.web3forms.com https://fonts.googleapis.com; frame-ancestors '\''none'\''; base-uri '\''self'\''; form-action '\''self'\'' https://api.web3forms.com;" always; \
        add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always; \
        add_header X-Frame-Options "DENY" always; \
        add_header X-Content-Type-Options "nosniff" always; \
        add_header Referrer-Policy "strict-origin-when-cross-origin" always; \
        add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
