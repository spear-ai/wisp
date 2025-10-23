import * as Sentry from "@sentry/nextjs";
import {
  browserProfilingIntegration,
  consoleLoggingIntegration,
  extraErrorDataIntegration,
  featureFlagsIntegration,
  graphqlClientIntegration,
  httpClientIntegration,
  moduleMetadataIntegration,
  replayCanvasIntegration,
  replayIntegration,
  zodErrorsIntegration,
} from "@sentry/nextjs";
import { environment } from "@/environment";

Sentry.init({
  dsn: environment.NEXT_PUBLIC_SENTRY_DSN,
  enabled: environment.NEXT_PUBLIC_SENTRY_IS_ENABLED,
  enableLogs: true,
  integrations: [
    consoleLoggingIntegration(),
    browserProfilingIntegration(),
    extraErrorDataIntegration(),
    featureFlagsIntegration(),
    graphqlClientIntegration({
      endpoints: [/.*/v],
    }),
    httpClientIntegration(),
    moduleMetadataIntegration(),
    replayCanvasIntegration(),
    replayIntegration({
      // TODO: Enable these options once we're properly masking PII.
      // blockAllMedia: false,
      // maskAllInputs: false,
      // maskAllText: false,
    }),
    zodErrorsIntegration(),
  ],
  replaysOnErrorSampleRate: 1,
  replaysSessionSampleRate: 0.01,
  tracesSampleRate: 0.01,
});

// eslint-disable-next-line import-x/namespace
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
