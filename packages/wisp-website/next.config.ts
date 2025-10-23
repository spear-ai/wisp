import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

// eslint-disable-next-line import-x/no-mutable-exports
let nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  // eslint-disable-next-line @typescript-eslint/require-await
  redirects: async () => [
    {
      destination: "/landing",
      permanent: true,
      source: "/",
    },
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
};

nextConfig = withSentryConfig(nextConfig, {
  automaticVercelMonitors: true,
  disableLogger: true,
  org: "spear-ai",
  project: "wisp-website",
  reactComponentAnnotation: {
    enabled: true,
  },
  silent: false,
  tunnelRoute: true,
  widenClientFileUpload: true,
});

export default nextConfig;
