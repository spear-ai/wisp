import {
  consoleLoggingIntegration,
  extraErrorDataIntegration,
  pinoIntegration,
  zodErrorsIntegration,
} from "@sentry/nextjs";
import * as Sentry from "@sentry/nextjs";
import { environment } from "@/environment";

Sentry.init({
  dsn: environment.NEXT_PUBLIC_SENTRY_DSN,
  enableLogs: true,
  integrations: [
    consoleLoggingIntegration(),
    extraErrorDataIntegration(),
    zodErrorsIntegration(),
    pinoIntegration(),
  ],
  tracesSampleRate: 0.01,
});
