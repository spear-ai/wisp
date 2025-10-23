import * as Sentry from "@sentry/nextjs";
import {
  consoleLoggingIntegration,
  extraErrorDataIntegration,
  zodErrorsIntegration,
} from "@sentry/nextjs";
import { environment } from "@/environment";

Sentry.init({
  dsn: environment.NEXT_PUBLIC_SENTRY_DSN,
  enabled: environment.NEXT_PUBLIC_SENTRY_IS_ENABLED,
  enableLogs: true,
  integrations: [
    consoleLoggingIntegration(),
    extraErrorDataIntegration(),
    zodErrorsIntegration(),
  ],
  tracesSampleRate: 0.01,
});
