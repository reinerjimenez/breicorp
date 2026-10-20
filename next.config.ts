import type { NextConfig } from "next";
import { seoRedirects } from "./src/config/seoRedirects";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 390, 430, 768, 1024, 1280, 1440, 1920],
    minimumCacheTTL: 86400,
  },
  async redirects() {
    return [...seoRedirects];
  },
  async headers() {
    const isProductionBuild =
      process.env.VERCEL_ENV === "production" ||
      process.env.SITE_ENV === "production";
    const productionCsp = [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "object-src 'none'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com",
      "frame-src 'self' https://www.google.com",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          ...(isProductionBuild
            ? [
                { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
                { key: "Content-Security-Policy", value: productionCsp },
              ]
            : []),
        ],
      },
    ];
  },
};

export default nextConfig;
