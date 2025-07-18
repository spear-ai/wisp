import * as Sentry from "@sentry/nextjs";
import { environment } from "@/environment";

Sentry.init({
  debug: false,
  dsn: environment.NEXT_PUBLIC_SENTRY_DSN,
  enabled: environment.NEXT_PUBLIC_SENTRY_IS_ENABLED,
  // eslint-disable-next-line import-x/namespace
  integrations: [Sentry.replayIntegration()],
  replaysOnErrorSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  tracesSampleRate: 1,
});
