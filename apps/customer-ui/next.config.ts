import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* i18n: {
    locales: ["es", "en", "fr"],
    defaultLocale: "es",
  }, */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;
