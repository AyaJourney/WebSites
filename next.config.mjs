/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  poweredByHeader: false,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
   remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc', // Diğer kullandığın avatar servisi
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http', // Hata mesajında http de görünüyor, garanti olsun
        hostname: 'googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  experimental: {
    // turbo: false,
    // optimizeCss: true,
  },

  output: "standalone",
};

export default nextConfig;
