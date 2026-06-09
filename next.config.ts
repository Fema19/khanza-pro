import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/portfolio/:path*",
        destination: "/portofolio/:path*",
      },
    ];
  },
};

export default nextConfig;
