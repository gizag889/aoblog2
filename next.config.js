
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: process.env.ALLOWED_IMAGE_HOST.split(',') // 文字列を配列に変える（区切りは「,」）
  }
};

module.exports = nextConfig
