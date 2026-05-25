import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // basePath: '/infx-solutions-website',

  // Security headers — NOTE: `headers()` does NOT apply to `output: 'export'` builds.
  // For GitHub Pages / static hosts, inject headers via:
  //   • nginx: add_header X-Frame-Options "DENY";
  //   • Cloudflare Pages: add in _headers file (see below)
  //   • Netlify: add in netlify.toml [[headers]]
  // When migrating to Vercel/SSR, these headers will apply automatically.
  //
  // Cloudflare Pages _headers file contents:
  //   /*
  //     Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://fonts.gstatic.com https://cdn.coverr.co; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https://infxmedia.xyz https://cdn.coverr.co; media-src 'self' https://cdn.coverr.co; connect-src 'self' https://api.web3forms.com https://fonts.googleapis.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://api.web3forms.com;
  //     Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  //     X-Frame-Options: DENY
  //     X-Content-Type-Options: nosniff
  //     Referrer-Policy: strict-origin-when-cross-origin
  //     Permissions-Policy: camera=(), microphone=(), geolocation=()
  //   */
  //
  // nginx location block equivalent (already present in Dockerfile):
  //   add_header Content-Security-Policy "..." always;
  //   add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
  //   add_header X-Frame-Options "DENY" always;
  //   add_header X-Content-Type-Options "nosniff" always;
  //   add_header Referrer-Policy "strict-origin-when-cross-origin" always;
  //
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://fonts.gstatic.com https://cdn.coverr.co",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://infxmedia.xyz https://cdn.coverr.co",
              "media-src 'self' https://cdn.coverr.co",
              "connect-src 'self' https://api.web3forms.com https://fonts.googleapis.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self' https://api.web3forms.com",
            ].join('; '),
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
