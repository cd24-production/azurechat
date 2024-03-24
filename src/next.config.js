/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone",  disable because of issue with sharp
  experimental: {
    serverComponentsExternalPackages: ["@azure/storage-blob"],
  },
};

module.exports = nextConfig;
