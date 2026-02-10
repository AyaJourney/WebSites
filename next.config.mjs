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
      {
        protocol: 'https',
        hostname: 'kyvkgdqsxsidbvxyjjoc.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },

experimental: {
    optimizeCss: true, // Bu ayar 'media=print' mantığını senin yerine otomatik yapar
  },

  output: "standalone",
};

export default nextConfig;
