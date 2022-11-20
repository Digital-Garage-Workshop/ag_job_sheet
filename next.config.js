/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: { domains: ["appointment.garage.mn"] },
};

module.exports = nextConfig;
