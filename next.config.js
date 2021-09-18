const withPWA = require('next-pwa');

// https://github.com/vercel/next.js/issues/8454#issuecomment-560432659
module.exports = withPWA({
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
    },
    reactStrictMode: true,
    pageExtensions: ['page.tsx'],
});
