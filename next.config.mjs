/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  modern: true,
   images: {
      formats: ['image/avif', 'image/webp'], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        pathname: '/**', 
      },
   
    ],
     domains: ["www.joorney.com"],
  },
};

export default nextConfig;
