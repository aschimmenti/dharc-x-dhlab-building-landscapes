/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to a custom domain, you don't need basePath
  // If deploying to username.github.io/repo-name, uncomment the following:
  // basePath: '/repo-name',
};

export default nextConfig;