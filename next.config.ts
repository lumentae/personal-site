import type { NextConfig } from "next";
import { execSync } from "child_process";

function resolveCommitHash() {
  try {
    return execSync("git rev-parse HEAD").toString().trim();
  } catch {
    return "unknown";
  }
}

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  env: {
    BUILD_TIME: new Date().toISOString(),
    BUILD_COMMIT: resolveCommitHash()
  },
};

export default nextConfig;
