/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'images.unsplash.com' }
        ]
    },
    async redirects() {
        return [
            {
                // 어떤 경로
                source: '/product/deleted_forever',
                // 어디로
                destination: '/product',
                // 영구적으로 이동
                permanent: true,
            },
            {
                source: '/product/deleted_temp',
                destination: '/product',
                permanent: false,
            }
        ]
    }
}

module.exports = nextConfig
