import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@use "@styles/utils/index" as *;`,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ucarecdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hyperwork.vn",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "down-vn.img.susercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ecommerce-uikit.netlify.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
