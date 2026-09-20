import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/contact", destination: "/#estimate", permanent: true },
      { source: "/estimate", destination: "/#estimate", permanent: true },
      { source: "/residential", destination: "/#work", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/our-work", destination: "/#work", permanent: true },
    ];
  },
};

export default nextConfig;
