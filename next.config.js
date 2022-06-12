// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: [
//       'images.pexels.com',
//       'img.okezone.com',
//     ]
//   }
// }

// module.exports = nextConfig
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  images: {
    domains: [
      "mdbcdn.b-cdn.net",
      'images.pexels.com',
      'img.okezone.com',
    ],
  },
  env: {
    API_SERVER: process.env.API_SERVER,
  },
};
