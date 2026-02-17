/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // GitHub Pages용 정적 HTML 출력
  images: { unoptimized: true },
  trailingSlash: true,         // /guides/ 형태로 URL 생성
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // basePath: '/stylemedaily-web',  // 프로젝트 사이트인 경우 주석 해제
};
module.exports = nextConfig;
