/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  poweredByHeader: false,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    optimizePackageImports: ["react", "lodash"],
    turbo: false, // ⬅️ TURBOPACK KAPALI (KRİTİK)
  },

  output: "standalone",
};

export default nextConfig;
