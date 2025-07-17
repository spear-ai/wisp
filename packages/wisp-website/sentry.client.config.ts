import * as Sentry from "@sentry/nextjs";
import { environment } from "@/environment";

Sentry.init({
  debug: false,
  dsn: environment.NEXT_PUBLIC_SENTRY_DSN,
  enabled: process.env.NEXT_PUBLIC_SENTRY_IS_ENABLED === "true",
  integrations: [Sentry.replayIntegration()],
  replaysOnErrorSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  tracesSampleRate: 1,
});
