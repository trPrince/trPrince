import type { NextConfig } from "next";
import { basePath } from "./src/lib/site";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: `${basePath}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
