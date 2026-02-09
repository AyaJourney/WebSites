/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  poweredByHeader: false,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    // turbo: false,
    // optimizeCss: true,
  },

  output: "standalone",
};

export default nextConfig;
