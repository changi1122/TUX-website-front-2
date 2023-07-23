/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },

  /* Only For Development, In Production: nginx rewrites /api/ to localhost:4001 */
  async rewrites() {
    return [
        {
            source: '/api/:path*',
            destination: 'http://localhost:4001/api/:path*',
        },
    ]
  },
}

module.exports = nextConfig
