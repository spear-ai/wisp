import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";
import { environment } from "@/environment";

console.log("HERE");
console.log(environment.CI);

// eslint-disable-next-line import-x/no-mutable-exports
let nextConfig: NextConfig = {
  poweredByHeader: false,
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
  silent: environment.CI,
  tunnelRoute: true,
  widenClientFileUpload: true,
});

export default nextConfig;
