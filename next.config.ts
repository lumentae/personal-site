import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  env: {
    BUILD_TIME: new Date().toISOString(),
  },
};

export default nextConfig;
