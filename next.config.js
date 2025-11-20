/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // خليها إذا تبغى تصدر الموقع
  images: {
    unoptimized: true, // هذا يوقف Image Optimization
  },
}

module.exports = nextConfig

